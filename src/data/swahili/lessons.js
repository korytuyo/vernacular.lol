export const swahiliLessons = [
  {
    id: 1,
    title: "Greetings & Respect",
    subtitle: "Master Swahili greeting chains and elder respect traditions",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 1,
    description: "Learn the intricate greeting traditions (habari, shikamoo, marahaba) that form the foundation of Swahili social interaction. Understand how respect is conveyed through greetings, the importance of acknowledging elders, and the cultural protocols that govern respectful discourse across East Africa.",
    topics: [
      "Basic greetings (Habari, Jambo, Karibu)",
      "Shikamoo/Marahaba greeting response chain",
      "Formal vs. informal greetings",
      "Elder respect protocols"
    ],
    vocabulary: [
      { swahili: "Habari", english: "Hello / How are you?", note: "Most common everyday greeting" },
      { swahili: "Jambo", english: "Hello (to visitors)", note: "Traditional greeting for newcomers" },
      { swahili: "Shikamoo", english: "Greeting to an elder", note: "Respectful form showing deference" },
      { swahili: "Marahaba", english: "Response to shikamoo", note: "Elder's blessing in response" },
      { swahili: "Karibu", english: "Welcome", note: "Hospitality greeting, also means 'near'" },
      { swahili: "Nzuri", english: "Good / Well", note: "Used in responses: Nzuri sana (very well)" }
    ],
    completed: false,
    locked: false
  },
  {
    id: 2,
    title: "Family & Community",
    subtitle: "Express relationships and communal values (ujamaa)",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 4,
    description: "Explore Swahili kinship terminology and the concept of ujamaa (familyhood/communalism). Learn how family structures reflect broader East African community organization, from nuclear families to extended clan networks that form the social fabric of Swahili culture.",
    topics: [
      "Family kinship terms (mother, father, sibling, cousin)",
      "Extended family and clan relationships",
      "Ujamaa (communal responsibility)",
      "Community roles and respect hierarchies"
    ],
    vocabulary: [
      { swahili: "Mama", english: "Mother / Woman", note: "Also term of respect for older women" },
      { swahili: "Baba", english: "Father / Man", note: "Also term of respect for older men" },
      { swahili: "Kaka", english: "Brother / Sister", note: "Gender-neutral sibling term" },
      { swahili: "Watoto", english: "Children", note: "Plural of mtoto (child)" },
      { swahili: "Jamii", english: "Family / Relations", note: "Can also mean community or in-laws" },
      { swahili: "Ujamaa", english: "Familyhood / Communalism", note: "Core value in East African societies" }
    ],
    completed: false,
    locked: false
  },
  {
    id: 3,
    title: "Food & Market",
    subtitle: "Navigate markets and discuss Swahili culinary traditions",
    level: "intermediate",
    category: "practical",
    duration: "15 min",
    proverbId: 5,
    description: "Master vocabulary for East African staple foods (ugali, nyama choma, sukuma wiki) and learn market haggling phrases. Understand the cultural significance of food in Swahili society—from the Maasai markets of Nairobi to coastal spice markets—and communicate with vendors and hosts.",
    topics: [
      "Staple foods and dishes (ugali, nyama choma, chapati)",
      "Market produce and spices",
      "Numbers and pricing for haggling",
      "Food-related courtesies and customs"
    ],
    vocabulary: [
      { swahili: "Ugali", english: "Maize staple / Cornmeal dish", note: "Most common carbohydrate in East Africa" },
      { swahili: "Nyama choma", english: "Grilled meat", note: "Iconic Swahili/Kenyan dish" },
      { swahili: "Chakula", english: "Food / Meal", note: "General term for food" },
      { swahili: "Soko", english: "Market", note: "Where produce and goods are traded" },
      { swahili: "Bei", english: "Price / Cost", note: "Used in bargaining: Bei gani? (What price?)" },
      { swahili: "Nane", english: "Eight / Ripe (adjective)", note: "Describes ripe fruit (matunda yenye nane)" }
    ],
    completed: false,
    locked: true
  }
];

export const swahiliLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" }
];
