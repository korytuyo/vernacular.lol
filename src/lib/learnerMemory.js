import { supabase } from './supabase'

// ============================================================
// LEARNER MEMORY SERVICE
// Reads and writes the AI tutor's memory about each learner
// ============================================================

/**
 * Fetch all active memories for a user, organized by type.
 * This is injected into the AI system prompt before each conversation turn.
 */
export async function getLearnerContext(userId) {
  const [memories, mistakes, recentConversations, vocabWeak, vocabStrong] = await Promise.all([
    // Active memories
    supabase
      .from('learner_memory')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('confidence', { ascending: false })
      .limit(20),

    // Unresolved mistake patterns, sorted by frequency
    supabase
      .from('mistake_patterns')
      .select('*')
      .eq('user_id', userId)
      .eq('resolved', false)
      .order('occurrence_count', { ascending: false })
      .limit(10),

    // Last 5 conversation summaries
    supabase
      .from('conversation_summaries')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5),

    // Weakest vocabulary (lowest confidence)
    supabase
      .from('vocabulary_mastery')
      .select('*')
      .eq('user_id', userId)
      .lt('confidence_score', 0.4)
      .order('confidence_score', { ascending: true })
      .limit(10),

    // Strongest vocabulary (highest confidence)
    supabase
      .from('vocabulary_mastery')
      .select('*')
      .eq('user_id', userId)
      .gte('confidence_score', 0.8)
      .order('confidence_score', { ascending: false })
      .limit(10),
  ])

  return {
    memories: memories.data || [],
    mistakes: mistakes.data || [],
    recentConversations: recentConversations.data || [],
    weakVocabulary: vocabWeak.data || [],
    strongVocabulary: vocabStrong.data || [],
  }
}

/**
 * Build the system prompt context block from learner memory.
 * This gets prepended to the AI's system prompt for personalized tutoring.
 */
export function buildMemoryPrompt(context) {
  const lines = ['LEARNER CONTEXT:']

  // Strengths
  const strengths = context.memories.filter(m => m.memory_type === 'strength')
  if (strengths.length > 0) {
    lines.push('\nStrengths:')
    strengths.forEach(s => lines.push(`- ${s.content}`))
  }

  // Weaknesses / areas to reinforce
  const weaknesses = context.memories.filter(m => m.memory_type === 'weakness')
  if (weaknesses.length > 0) {
    lines.push('\nAreas needing reinforcement:')
    weaknesses.forEach(w => lines.push(`- ${w.content}`))
  }

  // Recurring mistakes
  if (context.mistakes.length > 0) {
    lines.push('\nRecurring mistakes (address these when relevant):')
    context.mistakes.forEach(m => {
      lines.push(`- [${m.category}] ${m.description} (occurred ${m.occurrence_count}x)`)
      if (m.specific_words.length > 0) {
        lines.push(`  Words involved: ${m.specific_words.join(', ')}`)
      }
    })
  }

  // Weak vocabulary to reinforce
  if (context.weakVocabulary.length > 0) {
    lines.push('\nVocabulary to reinforce:')
    context.weakVocabulary.forEach(v => {
      const accuracy = v.times_seen > 0
        ? Math.round((v.times_correct / v.times_seen) * 100)
        : 0
      lines.push(`- "${v.word_yoruba}" (${v.word_english}) - ${accuracy}% accuracy`)
    })
  }

  // Strong vocabulary (can use freely)
  if (context.strongVocabulary.length > 0) {
    lines.push('\nMastered vocabulary (use naturally in conversation):')
    lines.push(context.strongVocabulary.map(v => v.word_yoruba).join(', '))
  }

  // Recent conversation history
  if (context.recentConversations.length > 0) {
    lines.push('\nRecent conversation history:')
    context.recentConversations.forEach(c => {
      const date = new Date(c.created_at).toLocaleDateString()
      lines.push(`- [${date}] ${c.scenario_title}: ${c.summary}`)
      if (c.weaknesses.length > 0) {
        lines.push(`  Struggled with: ${c.weaknesses.join(', ')}`)
      }
    })
  }

  // Cross-lesson connections
  const connections = context.memories.filter(m => m.memory_type === 'connection')
  if (connections.length > 0) {
    lines.push('\nCross-lesson connections to make:')
    connections.forEach(c => lines.push(`- ${c.content}`))
  }

  // Cultural context already known
  const cultural = context.memories.filter(m => m.memory_type === 'cultural_note')
  if (cultural.length > 0) {
    lines.push('\nCultural context the learner already knows (do not re-explain):')
    cultural.forEach(c => lines.push(`- ${c.content}`))
  }

  return lines.join('\n')
}

/**
 * Save a new memory observation about the learner.
 */
export async function saveMemory(userId, { memoryType, content, confidence = 0.5, sourceConversationId = null, sourceLessonId = null }) {
  const { data, error } = await supabase
    .from('learner_memory')
    .insert({
      user_id: userId,
      memory_type: memoryType,
      content,
      confidence,
      source_conversation_id: sourceConversationId,
      source_lesson_id: sourceLessonId,
    })
    .select()
    .single()

  if (error) console.error('Failed to save memory:', error)
  return data
}

/**
 * Record or increment a mistake pattern.
 * If the same description exists, increment the count. Otherwise create new.
 */
export async function recordMistake(userId, { category, description, specificWords = [] }) {
  // Check for existing pattern
  const { data: existing } = await supabase
    .from('mistake_patterns')
    .select('*')
    .eq('user_id', userId)
    .eq('category', category)
    .eq('description', description)
    .eq('resolved', false)
    .single()

  if (existing) {
    // Increment existing
    const { error } = await supabase
      .from('mistake_patterns')
      .update({
        occurrence_count: existing.occurrence_count + 1,
        last_occurred_at: new Date().toISOString(),
        specific_words: [...new Set([...existing.specific_words, ...specificWords])],
      })
      .eq('id', existing.id)

    if (error) console.error('Failed to update mistake:', error)
    return existing
  }

  // Create new pattern
  const { data, error } = await supabase
    .from('mistake_patterns')
    .insert({
      user_id: userId,
      category,
      description,
      specific_words: specificWords,
    })
    .select()
    .single()

  if (error) console.error('Failed to record mistake:', error)
  return data
}

/**
 * Mark a mistake pattern as resolved (user consistently gets it right now).
 */
export async function resolveMistake(userId, mistakeId) {
  const { error } = await supabase
    .from('mistake_patterns')
    .update({ resolved: true, resolved_at: new Date().toISOString() })
    .eq('id', mistakeId)
    .eq('user_id', userId)

  if (error) console.error('Failed to resolve mistake:', error)
}

/**
 * Update vocabulary mastery after a practice interaction.
 */
export async function updateVocabularyMastery(userId, { wordYoruba, wordEnglish, lessonId, correct }) {
  const { data: existing } = await supabase
    .from('vocabulary_mastery')
    .select('*')
    .eq('user_id', userId)
    .eq('word_yoruba', wordYoruba)
    .single()

  if (existing) {
    const newSeen = existing.times_seen + 1
    const newCorrect = existing.times_correct + (correct ? 1 : 0)
    const newIncorrect = existing.times_incorrect + (correct ? 0 : 1)
    const newConfidence = newSeen > 0 ? (newCorrect / newSeen) : 0

    await supabase
      .from('vocabulary_mastery')
      .update({
        times_seen: newSeen,
        times_correct: newCorrect,
        times_incorrect: newIncorrect,
        confidence_score: Math.round(newConfidence * 100) / 100,
        last_practiced_at: new Date().toISOString(),
      })
      .eq('id', existing.id)
  } else {
    await supabase
      .from('vocabulary_mastery')
      .insert({
        user_id: userId,
        word_yoruba: wordYoruba,
        word_english: wordEnglish,
        lesson_id: lessonId,
        times_seen: 1,
        times_correct: correct ? 1 : 0,
        times_incorrect: correct ? 0 : 1,
        confidence_score: correct ? 0.60 : 0.20,
        last_practiced_at: new Date().toISOString(),
      })
  }
}

/**
 * Save a conversation summary after an AI practice session ends.
 */
export async function saveConversationSummary(userId, summary) {
  const { data, error } = await supabase
    .from('conversation_summaries')
    .insert({
      user_id: userId,
      scenario_id: summary.scenarioId,
      scenario_title: summary.scenarioTitle,
      duration_seconds: summary.durationSeconds,
      message_count: summary.messageCount,
      summary: summary.summary,
      topics_covered: summary.topicsCovered || [],
      vocabulary_used: summary.vocabularyUsed || [],
      proverbs_referenced: summary.proverbsReferenced || [],
      overall_score: summary.overallScore,
      strengths: summary.strengths || [],
      weaknesses: summary.weaknesses || [],
    })
    .select()
    .single()

  if (error) console.error('Failed to save conversation summary:', error)
  return data
}
