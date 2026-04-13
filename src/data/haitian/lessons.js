/**
 * Haitian Creole Lessons
 * Beginner lessons introducing essential phrases and cultural context
 */

export const haitianLessons = [
  {
    id: 1,
    title: "Bonjou: Greetings & Daily Phrases",
    subtitle: "Essential greetings and respectful communication",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 1,
    description:
      "Learn foundational Haitian Creole greetings used in daily life. This lesson covers formal and informal ways to greet, ask how someone is, and show respect through proper address forms. Understand the cultural importance of greeting elders and community members.",
    topics: [
      "Basic greetings (Bonjou, Bonswa)",
      "Asking 'How are you?' (Komon ou ye?)",
      "Respect forms and titles (Manman, Papa, Msye, Madanm)",
      "Goodbye expressions (Orevwa, A pli)",
    ],
    vocabulary: [
      {
        haitian: "Bonjou",
        english: "Good morning / Hello",
        note: "Used from sunrise to around 5 PM",
      },
      {
        haitian: "Bonswa",
        english: "Good evening",
        note: "Used from around 5 PM onwards",
      },
      {
        haitian: "Komon ou ye?",
        english: "How are you?",
        note: "Standard greeting; 'ou' is informal singular",
      },
      {
        haitian: "Mwen byen",
        english: "I am well",
        note: "Common response to Komon ou ye?",
      },
      {
        haitian: "Manman / Papa",
        english: "Mother / Father (also terms of respect)",
        note: "Used for elder women and men as sign of respect",
      },
      {
        haitian: "Orevwa",
        english: "Goodbye",
        note: "Formal and commonly used farewell",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 2,
    title: "Mache: Food & Market Culture",
    subtitle: "Vocabulary and customs of Haitian markets and cuisine",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 2,
    description:
      "Explore Haitian market culture and food vocabulary central to daily life. Learn about traditional dishes, market haggling customs, and the communal importance of shared meals. Understand how food connects to Haitian identity and storytelling.",
    topics: [
      "Market goods and produce (mache)",
      "Traditional Haitian dishes (griot, diri ak pwa, sos)",
      "Haggling and prices (negosye)",
      "Eating together and hospitality",
    ],
    vocabulary: [
      {
        haitian: "Mache",
        english: "Market",
        note: "Central gathering place; also means 'business dealings'",
      },
      {
        haitian: "Griot",
        english: "Fried pork",
        note: "Popular Haitian dish; also means 'storyteller' in griyo tradition",
      },
      {
        haitian: "Diri ak pwa",
        english: "Rice and beans",
        note: "Staple dish in Haitian cuisine",
      },
      {
        haitian: "Negosye",
        english: "To haggle / negotiate price",
        note: "Normal practice in Haitian markets",
      },
      {
        haitian: "Manje",
        english: "Food / to eat",
        note: "Essential word for dining and hospitality",
      },
      {
        haitian: "Dlo",
        english: "Water",
        note: "Critical for cooking and daily life",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: "Fanmi: Family & Lakou Community",
    subtitle: "Family structures and communal living traditions",
    level: "beginner",
    category: "fundamentals",
    duration: "10 min",
    proverbId: 3,
    description:
      "Understand Haitian family and community structures centered on lakou (extended family compound). Learn kinship vocabulary and the cultural values of collective care, intergenerational responsibility, and spiritual connection through family networks. This lesson highlights how lakou embodies Haitian resilience.",
    topics: [
      "Family members and kinship (fanmi)",
      "Lakou: extended family compound living",
      "Respecting elders and ancestors",
      "Community responsibilities and mutual aid",
    ],
    vocabulary: [
      {
        haitian: "Fanmi",
        english: "Family",
        note: "Extended beyond nuclear family; includes spiritual bonds",
      },
      {
        haitian: "Lakou",
        english: "Family compound / courtyard",
        note: "Central to Haitian communal living; multiple generations sharing space",
      },
      {
        haitian: "Pitit",
        english: "Child",
        note: "Can refer to biological or spiritual children",
      },
      {
        haitian: "Gran",
        english: "Elder / grandmother",
        note: "Term of respect for older women; keeper of wisdom",
      },
      {
        haitian: "Ansèt",
        english: "Ancestor",
        note: "Central to Vodou tradition; spirit guides and protectors",
      },
      {
        haitian: "Vwazen",
        english: "Neighbor / community member",
        note: "In lakou context, often indistinguishable from family",
      },
    ],
    completed: false,
    locked: true,
  },
];

export const haitianLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
];
