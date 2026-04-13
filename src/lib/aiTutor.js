import { getLearnerContext, buildMemoryPrompt, saveConversationSummary, recordMistake, saveMemory, updateVocabularyMastery } from './learnerMemory'

// ============================================================
// AI TUTOR SERVICE
// Handles conversation with memory-aware AI responses
// and post-conversation analysis
// ============================================================

const AI_API_URL = import.meta.env.VITE_AI_API_URL || 'https://api.openai.com/v1/chat/completions'
const AI_API_KEY = import.meta.env.VITE_AI_API_KEY || ''
const AI_MODEL = import.meta.env.VITE_AI_MODEL || 'gpt-4o'

/**
 * Build the full system prompt for a conversation scenario.
 * Injects learner memory so the AI tutor personalizes responses.
 */
export async function buildSystemPrompt(userId, scenario) {
  // Fetch learner's memory context
  const context = await getLearnerContext(userId)
  const memoryBlock = buildMemoryPrompt(context)

  return `You are a Yoruba language tutor named ${scenario.aiRole.split(',')[0]}.

SCENARIO: ${scenario.context}

YOUR CHARACTER: ${scenario.aiRole}

TEACHING RULES:
- Always use proper Yoruba diacritical marks (tone marks: à á, underdots: ẹ ọ ṣ)
- When the learner makes a mistake, gently correct them and explain why
- Reference Yoruba proverbs naturally when they fit the conversation
- If the learner uses English, respond in a mix of Yoruba and English, gradually increasing Yoruba
- Celebrate progress. Yoruba culture values encouragement: "Ọmọ dáadáa ni ẹ" (You are a good student)
- Keep responses conversational, 2-4 sentences max
- When relevant, connect current vocabulary to things the learner has practiced before

TONE COACHING:
- Yoruba has three tones: high (á), mid (a), low (à)
- If the learner writes a word without tone marks, gently remind them which tones apply
- Use examples: "Ọwọ́ (hand) vs owó (money) - the tones change the meaning completely"

${memoryBlock}

IMPORTANT: Use the learner context above to personalize your responses. Reference their past conversations, reinforce weak areas, and build on their strengths. If they have a recurring mistake, find a natural way to practice the correct form.

Begin the conversation with: ${scenario.starterPrompt}`
}

/**
 * Send a message to the AI tutor and get a response.
 */
export async function sendMessage(systemPrompt, conversationHistory, userMessage) {
  const messages = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory.map(msg => ({
      role: msg.role === 'system' ? 'assistant' : msg.role,
      content: msg.content,
    })),
    { role: 'user', content: userMessage },
  ]

  // If no API key configured, use simulated responses for development
  if (!AI_API_KEY) {
    return getSimulatedResponse(conversationHistory.length, userMessage)
  }

  try {
    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages,
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('AI API error:', error)
    return "Pẹ̀lẹ́ o! I had trouble responding. Let us try again. What did you want to say?"
  }
}

/**
 * Analyze a completed conversation and extract insights.
 * Called when the user ends a conversation session.
 * This generates the summary, identifies mistakes, and updates memory.
 */
export async function analyzeConversation(userId, scenario, messages, durationSeconds) {
  const transcript = messages
    .map(m => `${m.role === 'user' ? 'LEARNER' : 'TUTOR'}: ${m.content}`)
    .join('\n')

  const analysisPrompt = `Analyze this Yoruba language learning conversation and return a JSON object.

SCENARIO: ${scenario.title} - ${scenario.description}

TRANSCRIPT:
${transcript}

Return ONLY valid JSON with this structure:
{
  "summary": "2-3 sentence recap of the conversation and learner performance",
  "topicsCovered": ["list", "of", "topics"],
  "vocabularyUsed": ["Yoruba", "words", "the", "learner", "attempted"],
  "overallScore": 3,
  "strengths": ["things the learner did well"],
  "weaknesses": ["areas that need improvement"],
  "mistakes": [
    {
      "category": "tone|vocabulary|grammar|pronunciation|cultural|underdot",
      "description": "Clear description of the mistake pattern",
      "specificWords": ["words", "involved"]
    }
  ],
  "newMemories": [
    {
      "type": "strength|weakness|connection|milestone|cultural_note",
      "content": "Observation about this learner",
      "confidence": 0.7
    }
  ]
}`

  // If no API key, use a demo analysis
  if (!AI_API_KEY) {
    const demoAnalysis = getDemoAnalysis(scenario, messages)
    await persistAnalysis(userId, scenario, messages, durationSeconds, demoAnalysis)
    return demoAnalysis
  }

  try {
    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          { role: 'system', content: 'You are a Yoruba language assessment tool. Analyze conversations and return structured JSON.' },
          { role: 'user', content: analysisPrompt },
        ],
        max_tokens: 800,
        temperature: 0.3,
      }),
    })

    const data = await response.json()
    const analysis = JSON.parse(data.choices[0].message.content)
    await persistAnalysis(userId, scenario, messages, durationSeconds, analysis)
    return analysis
  } catch (error) {
    console.error('Analysis error:', error)
    const fallback = getDemoAnalysis(scenario, messages)
    await persistAnalysis(userId, scenario, messages, durationSeconds, fallback)
    return fallback
  }
}

/**
 * Persist analysis results to Supabase tables.
 */
async function persistAnalysis(userId, scenario, messages, durationSeconds, analysis) {
  // Save conversation summary
  const summary = await saveConversationSummary(userId, {
    scenarioId: scenario.id,
    scenarioTitle: scenario.title,
    durationSeconds,
    messageCount: messages.length,
    summary: analysis.summary,
    topicsCovered: analysis.topicsCovered,
    vocabularyUsed: analysis.vocabularyUsed,
    proverbsReferenced: [],
    overallScore: analysis.overallScore,
    strengths: analysis.strengths,
    weaknesses: analysis.weaknesses,
  })

  // Record mistake patterns
  if (analysis.mistakes) {
    for (const mistake of analysis.mistakes) {
      await recordMistake(userId, {
        category: mistake.category,
        description: mistake.description,
        specificWords: mistake.specificWords || [],
      })
    }
  }

  // Save new memories
  if (analysis.newMemories) {
    for (const memory of analysis.newMemories) {
      await saveMemory(userId, {
        memoryType: memory.type,
        content: memory.content,
        confidence: memory.confidence || 0.5,
        sourceConversationId: summary?.id || null,
      })
    }
  }

  // Update vocabulary mastery for words used
  if (analysis.vocabularyUsed) {
    for (const word of analysis.vocabularyUsed) {
      const isCorrect = !(analysis.weaknesses || []).some(w =>
        w.toLowerCase().includes(word.toLowerCase())
      )
      await updateVocabularyMastery(userId, {
        wordYoruba: word,
        wordEnglish: '', // AI could provide this, simplified for now
        lessonId: null,
        correct: isCorrect,
      })
    }
  }
}

/**
 * Demo analysis for development when no API key is configured.
 */
function getDemoAnalysis(scenario, messages) {
  const userMessages = messages.filter(m => m.role === 'user')
  return {
    summary: `The learner practiced the "${scenario.title}" scenario with ${userMessages.length} exchanges. They showed willingness to engage and attempted several key phrases.`,
    topicsCovered: scenario.keyPhrases || [],
    vocabularyUsed: scenario.keyPhrases || [],
    overallScore: 3,
    strengths: ["Willingness to attempt Yoruba phrases", "Good conversational flow"],
    weaknesses: ["Tone marks not consistently applied", "Could use more Yoruba in responses"],
    mistakes: [
      {
        category: "tone",
        description: "Tone marks missing on greetings",
        specificWords: scenario.keyPhrases?.slice(0, 2) || [],
      }
    ],
    newMemories: [
      {
        type: "milestone",
        content: `Completed ${scenario.title} scenario for the first time`,
        confidence: 0.9,
      }
    ],
  }
}

/**
 * Simulated AI responses for development mode.
 */
function getSimulatedResponse(messageCount, userMessage) {
  const responses = [
    "Ọ ṣé púpọ̀! You greeted well. In Yoruba culture, the younger person always greets first. Now, try saying 'Ẹ kú ìrọ̀lẹ́' - that means 'Good evening.' Can you use it in a sentence?",
    "Dáradára! That is correct. You are learning fast. Remember, the tone matters in Yoruba. 'Ọwọ́' with a high tone means 'hand,' but 'owó' with different tones means 'money.' Let us practice more.",
    "Mo dúpẹ́! I am pleased with your progress. A Yoruba elder would say: 'Ọmọ tí a kọ́ ni, kò ṣe é fi ṣ'ẹrú' - A child that is well trained cannot be exchanged for a slave. You are training yourself well.",
    "Pẹ̀lẹ́ o! Do not worry about mistakes. Even native speakers practice their tones. Try again, and this time, think about whether the tone goes up (á), stays flat (a), or goes down (à).",
  ]
  return responses[messageCount % responses.length]
}
