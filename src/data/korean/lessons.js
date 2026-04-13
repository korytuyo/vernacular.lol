/**
 * Korean Language Lessons - Beginner Track
 * Structured progression from basic greetings to cultural immersion
 * Focus on practical vocabulary with cultural context (honorifics, speech levels)
 */

export const koreanLessons = [
  {
    id: 1,
    title: "Greetings & Honorifics",
    subtitle: "Mastering formal and informal speech levels",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 1,
    description:
      "Learn essential greetings and understand Korean speech levels (jondaemal vs banmal). In Korean culture, how you address someone reflects respect and social hierarchy. This lesson covers bowing etiquette, formal introductions, and casual greetings with peers.",
    topics: [
      "Formal vs. informal speech",
      "Honorific word endings (-seyo, -seubnida)",
      "Bowing (deep, semi, light) and context",
      "Introduction phrases and titles",
    ],
    vocabulary: [
      {
        korean: "Annyeonghaseyo",
        english: "Hello (formal)",
        note: "Used with strangers, elders, in professional settings",
      },
      {
        korean: "Annyeong",
        english: "Hello (informal)",
        note: "Used with close friends or people your age",
      },
      {
        korean: "Joeseonghaeyo",
        english: "Nice to meet you (formal)",
        note: "Standard greeting when introduced",
      },
      {
        korean: "Gamsahaeyo",
        english: "Thank you (formal)",
        note: "Essential for politeness; '-seyo' suffix adds respect",
      },
      {
        korean: "Joesundae",
        english: "That's good (casual)",
        note: "Shows agreement or approval among friends",
      },
      {
        korean: "Mianhaey",
        english: "I'm sorry (informal)",
        note: "Adjust to 'Mianheyo' for formal apologies",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 2,
    title: "Korean Food Culture",
    subtitle: "Ordering and enjoying Korean cuisine",
    level: "beginner",
    category: "culture",
    duration: "15 min",
    proverbId: 3,
    description:
      "Explore the culinary heart of Korean culture. Learn vocabulary for ordering at restaurants, understanding Korean BBQ (gogi-gui) traditions, and food-related etiquette. Food is central to Korean family life and celebration, from kimchi preparation to shared dining.",
    topics: [
      "Ordering at restaurants",
      "Korean BBQ culture and table etiquette",
      "Essential dishes and ingredients",
      "Food etiquette and sharing tradition",
    ],
    vocabulary: [
      {
        korean: "Bulgogi",
        english: "Grilled marinated beef",
        note: "Most popular Korean BBQ dish; literally 'fire meat'",
      },
      {
        korean: "Galbijim",
        english: "Braised beef short ribs",
        note: "Tender, savory, served at celebrations",
      },
      {
        korean: "Bibimbap",
        english: "Mixed rice with vegetables and protein",
        note: "Literally 'mixed rice'; eaten with gochujang (red chili paste)",
      },
      {
        korean: "Kimchi",
        english: "Fermented spicy vegetables",
        note: "Served at every meal; symbol of Korean identity",
      },
      {
        korean: "Doenjang",
        english: "Fermented soybean paste",
        note: "Used in soups and stews; depth of Korean flavor",
      },
      {
        korean: "Gochujang",
        english: "Red chili pepper paste",
        note: "Spicy, umami-rich condiment in many dishes",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: "K-Culture & Daily Life",
    subtitle: "Modern Korea and cultural practices",
    level: "beginner",
    category: "culture",
    duration: "10 min",
    proverbId: 5,
    description:
      "Understand contemporary Korean culture from the Korean Wave (hallyu) perspective. Learn about daily life practices, modern social spaces like jjimjilbang (bathhouses), and how Korean values blend tradition with modern K-pop and tech culture.",
    topics: [
      "K-wave (hallyu) and entertainment",
      "Jjimjilbang (Korean bathhouse) culture",
      "Shopping and social etiquette",
      "Technology and modern Korean society",
    ],
    vocabulary: [
      {
        korean: "Jjimjilbang",
        english: "Korean sauna and leisure complex",
        note: "Social space where Koreans relax; gender-separated bathing areas",
      },
      {
        korean: "Noraebang",
        english: "Karaoke room",
        note: "Popular group activity; integral to Korean nightlife and bonding",
      },
      {
        korean: "Ddang-ge",
        english: "Hotspot or cool place",
        note: "Modern slang; reflects Korean youth culture",
      },
      {
        korean: "Oppa",
        english: "Older brother (said by females)",
        note: "Term of endearment reflecting hierarchy and familiarity",
      },
      {
        korean: "Unni",
        english: "Older sister (said by females)",
        note: "Creates bonding through kinship terminology",
      },
      {
        korean: "Hyung",
        english: "Older brother (said by males)",
        note: "Respect term showing age hierarchy among men",
      },
    ],
    completed: false,
    locked: true,
  },
];

export const koreanLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
];
