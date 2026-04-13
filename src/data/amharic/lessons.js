// Amharic Lessons - Structured learning paths covering essential cultural and linguistic topics
// Levels: Beginner to Intermediate, focusing on practical communication and cultural immersion

export const amharicLessons = [
  {
    id: 1,
    title: "Greetings & Respect",
    subtitle: "Master formal and informal Amharic greetings",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 2,
    description:
      "Learn how to greet others with proper respect and formality in different contexts. Ethiopian greetings vary by time of day and social relationship. This lesson covers formal salutations used in business and elder interactions, casual greetings for friends, and religious blessings that frame daily life.",
    topics: [
      "Formal greetings (selam)",
      "Time-of-day specific greetings",
      "Religious blessings and responses",
      "Informal greetings with friends and family",
    ],
    vocabulary: [
      {
        amharic: "Selam",
        english: "Hello/Peace",
        note: "Formal greeting; literally means 'peace'",
      },
      {
        amharic: "Shalom",
        english: "Hello (informal)",
        note: "Casual greeting between acquaintances",
      },
      {
        amharic: "Enderasse",
        english: "Good morning",
        note: "Used before 12 PM, shows respect",
      },
      {
        amharic: "Emasginaw",
        english: "Good afternoon",
        note: "Used after 12 PM until evening",
      },
      {
        amharic: "Semaye yimeseginaw",
        english: "Good evening / God bless you",
        note: "Religious greeting, particularly in Orthodox tradition",
      },
      {
        amharic: "Ishi",
        english: "Okay/Yes/Good",
        note: "Affirmative response to greetings",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 2,
    title: "The Coffee Ceremony",
    subtitle: "Immerse in Ethiopia's most sacred social ritual",
    level: "beginner",
    category: "culture",
    duration: "15 min",
    proverbId: 3,
    description:
      "Explore the buna (coffee ceremony), a cornerstone of Ethiopian hospitality and social bonding. This lesson teaches vocabulary and cultural protocols of the coffee ceremony, from bean roasting to serving three rounds of coffee. Understanding buna is essential to grasping Ethiopian social interaction and values.",
    topics: [
      "Coffee ceremony vocabulary and steps",
      "Social protocols and invitation etiquette",
      "Traditional coffee serving customs",
      "Hospitality expressions and responses",
    ],
    vocabulary: [
      {
        amharic: "Buna",
        english: "Coffee",
        note: "The plant, beans, or ceremony itself; central to Ethiopian culture",
      },
      {
        amharic: "Jebena",
        english: "Traditional coffee pot",
        note: "Handmade ceramic vessel with long spout",
      },
      {
        amharic: "Testa",
        english: "Cup",
        note: "Small handleless cup used for serving coffee",
      },
      {
        amharic: "Agil",
        english: "Roasting / roasted coffee beans",
        note: "First stage of ceremony; beans roasted over charcoal",
      },
      {
        amharic: "Ye buna jib",
        english: "Coffee ceremony",
        note: "Literally 'coffee's nature'; the ritual itself",
      },
      {
        amharic: "Enkulal",
        english: "Popcorn (snack served with coffee)",
        note: "Traditional accompaniment to buna ceremony",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: "Food & Injera",
    subtitle: "Learn dining culture and traditional Ethiopian cuisine",
    level: "intermediate",
    category: "culture",
    duration: "15 min",
    proverbId: 4,
    description:
      "Discover the language and customs of Ethiopian food culture. Injera (sourdough flatbread) is the foundation of all meals and represents communal dining. Learn how to order, discuss wat (stew) varieties, express preferences, and understand the social dynamics of eating together from a shared platter ('gursha' tradition).",
    topics: [
      "Injera and bread vocabulary",
      "Wat varieties and ingredients",
      "Communal dining expressions",
      "Food preferences and ordering phrases",
    ],
    vocabulary: [
      {
        amharic: "Injera",
        english: "Sourdough flatbread",
        note: "Foundation of Ethiopian meals; sour, tangy, spongy texture",
      },
      {
        amharic: "Wat",
        english: "Stew",
        note: "General term for Ethiopian stews; varieties include doro, misir, shiro",
      },
      {
        amharic: "Doro wat",
        english: "Chicken stew",
        note: "Spiced with berbere; served during celebrations",
      },
      {
        amharic: "Misir wat",
        english: "Lentil stew",
        note: "Vegetarian option; popular for fasting days",
      },
      {
        amharic: "Gursha",
        english: "Hand-fed morsel (act of affection/respect)",
        note: "Feeding someone by hand shows care and intimacy",
      },
      {
        amharic: "Teff",
        english: "Ancient grain",
        note: "Small grain used to make injera; high in fiber and nutrients",
      },
    ],
    completed: false,
    locked: true,
  },
];

export const amharicLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
];
