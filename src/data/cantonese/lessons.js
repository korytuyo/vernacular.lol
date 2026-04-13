// Cantonese language lessons for Vernacular
// Structured for beginner and intermediate learners

export const cantoneseLessons = [
  {
    id: 1,
    title: "Greetings & Daily Basics",
    subtitle: "Essential phrases for everyday interaction",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 2,
    description:
      "Master the core greetings and polite phrases used in Cantonese daily life. Learn how to say hello, goodbye, and common courtesies. Understanding tone and formal vs. informal speech is crucial in Cantonese—this lesson covers the essentials for respectful communication.",
    topics: [
      "Greetings & polite phrases",
      "Formal vs. informal speech",
      "Common courtesies",
      "Daily expressions"
    ],
    vocabulary: [
      {
        cantonese: "lei hou",
        english: "hello (polite)",
        note: "most common greeting; tones matter"
      },
      {
        cantonese: "jo san",
        english: "good morning",
        note: "use before noon, respectful tone"
      },
      {
        cantonese: "m goi",
        english: "thank you / excuse me",
        note: "versatile phrase; essential politeness"
      },
      {
        cantonese: "do ze",
        english: "thank you (more formal)",
        note: "used for larger favors or respect"
      },
      {
        cantonese: "zai gin",
        english: "goodbye",
        note: "casual and formal appropriate"
      },
      {
        cantonese: "hou a",
        english: "okay / alright",
        note: "common agreement phrase"
      }
    ],
    completed: false,
    locked: false
  },
  {
    id: 2,
    title: "Yum Cha & Food Culture",
    subtitle: "Ordering dim sum and tea at a restaurant",
    level: "beginner",
    category: "dining",
    duration: "15 min",
    proverbId: 1,
    description:
      "Learn the vocabulary and phrases essential for yum cha (dim sum dining) culture. From ordering tea to requesting dim sum items from the cart, this lesson immerses you in Hong Kong's iconic food tradition. Understand the cultural context and proper etiquette.",
    topics: [
      "Tea and dim sum vocabulary",
      "Ordering from the cart",
      "Food preferences",
      "Dining etiquette"
    ],
    vocabulary: [
      {
        cantonese: "yum cha",
        english: "drink tea (dim sum dining)",
        note: "cultural dining tradition; morning/brunch activity"
      },
      {
        cantonese: "dim sum",
        english: "small eats / snacks",
        note: "served on carts; point or order by name"
      },
      {
        cantonese: "cha",
        english: "tea",
        note: "pu-erh, oolong most common at yum cha"
      },
      {
        cantonese: "siu mai",
        english: "pork and shrimp dumplings",
        note: "iconic dim sum; steamed in bamboo"
      },
      {
        cantonese: "ha gau",
        english: "shrimp dumplings",
        note: "delicate wheat wrapper; must-try"
      },
      {
        cantonese: "go cheung",
        english: "rice noodle rolls",
        note: "can contain pork, shrimp, or vegetables"
      }
    ],
    completed: false,
    locked: false
  },
  {
    id: 3,
    title: "Street Life & Shopping",
    subtitle: "Navigate Hong Kong wet markets and MTR stations",
    level: "intermediate",
    category: "practical",
    duration: "10 min",
    proverbId: 5,
    description:
      "Master conversational Cantonese in real-world urban settings. Learn how to shop at wet markets, ask for directions on the MTR (Mass Transit Railway), and engage with locals. This lesson focuses on practical survival phrases and authentic street-level communication.",
    topics: [
      "Market shopping interactions",
      "Bargaining and negotiating",
      "Public transport phrases",
      "Asking for directions"
    ],
    vocabulary: [
      {
        cantonese: "几多ce",
        english: "how much?",
        note: "common bargaining phrase; expectation to negotiate"
      },
      {
        cantonese: "man d",
        english: "cheaper / reduce price",
        note: "typical request at wet markets"
      },
      {
        cantonese: "bay",
        english: "give (me)",
        note: "direct imperative; not rude in Cantonese context"
      },
      {
        cantonese: "MTR",
        english: "Mass Transit Railway",
        note: "Hong Kong's subway; Cantonese speakers call it by name"
      },
      {
        cantonese: "dim gaa",
        english: "where (is it)?",
        note: "essential for asking directions"
      },
      {
        cantonese: "gan go zaam",
        english: "this store / shop",
        note: "useful for identifying locations"
      }
    ],
    completed: false,
    locked: true
  }
];

export const cantoneseLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" }
];
