// English structured curriculum
// Designed for speakers of African, South Asian, and diaspora languages
// Focuses on practical fluency, idioms, and cultural navigation

export const englishLessons = [
  {
    id: 1,
    title: "Everyday Greetings & Small Talk",
    subtitle: "Beyond 'Hello' - How English Speakers Actually Talk",
    level: "beginner",
    category: "fundamentals",
    duration: "10 min",
    proverbId: 1,
    description: "English greetings go far beyond 'Hello, how are you?' Native speakers use dozens of casual openers depending on context, relationship, and formality. Mastering small talk is the key to sounding natural and building connections in English-speaking environments.",
    topics: ["Casual vs formal greetings", "Small talk openers and responses", "How to exit a conversation politely", "Common greeting mistakes non-native speakers make"],
    vocabulary: [
      { english_text: "What's up?", english: "Casual greeting (no literal answer expected)", note: "Informal, used with friends/peers" },
      { english_text: "How's it going?", english: "How are things with you?", note: "Semi-casual, good for coworkers" },
      { english_text: "Nice to meet you", english: "Polite first-meeting phrase", note: "Used once, at first introduction only" },
      { english_text: "I'm doing well, thanks", english: "Standard positive response", note: "More natural than 'I am fine'" },
      { english_text: "Take care", english: "Warm farewell", note: "Friendly sign-off, not overly formal" },
      { english_text: "Catch you later", english: "Casual goodbye", note: "Implies you will see them again" },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 2,
    title: "Idioms That Confuse Everyone",
    subtitle: "Break a Leg - English Phrases That Mean Something Else",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 3,
    description: "English is packed with idioms that make zero sense when translated literally. 'Break a leg' means good luck. 'Piece of cake' means easy. This lesson covers the most common idioms you will hear in conversation, work, and media so you stop being caught off guard.",
    topics: ["Common workplace idioms", "Social idioms and slang", "Idioms in movies and music", "How to use idioms naturally without overdoing it"],
    vocabulary: [
      { english_text: "Break a leg", english: "Good luck (especially before a performance)", note: "Theater origin, never literal" },
      { english_text: "Piece of cake", english: "Something very easy", note: "Casual, used in everyday speech" },
      { english_text: "Hit the nail on the head", english: "To be exactly right", note: "Used to affirm someone's point" },
      { english_text: "Under the weather", english: "Feeling sick or unwell", note: "Polite way to say you are ill" },
      { english_text: "Cost an arm and a leg", english: "Very expensive", note: "Exaggeration for emphasis" },
      { english_text: "Let the cat out of the bag", english: "To reveal a secret accidentally", note: "Often used about surprises" },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: "Professional English",
    subtitle: "Emails, Meetings, and the Unspoken Rules",
    level: "intermediate",
    category: "professional",
    duration: "15 min",
    proverbId: 4,
    description: "Professional English has its own code. 'Per my last email' is passive-aggressive. 'Let's circle back' means 'not now.' This lesson decodes workplace English so you can navigate meetings, emails, and office culture with confidence.",
    topics: ["Email etiquette and common phrases", "Meeting vocabulary and participation", "Polite disagreement and pushback", "Decoding passive-aggressive workplace phrases"],
    vocabulary: [
      { english_text: "As per my last email", english: "I already told you this (read your email)", note: "Passive-aggressive, use carefully" },
      { english_text: "Let's circle back", english: "Let's revisit this topic later", note: "Can mean 'I want to move on'" },
      { english_text: "Going forward", english: "From now on / in the future", note: "Common in meetings and emails" },
      { english_text: "Touch base", english: "To briefly check in with someone", note: "Sports metaphor, very common" },
      { english_text: "On the same page", english: "In agreement / shared understanding", note: "Used to confirm alignment" },
      { english_text: "Take it offline", english: "Discuss privately, not in this meeting", note: "Used to avoid public debate" },
    ],
    completed: false,
    locked: true,
  },
]

export const englishLessonLevels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
]
