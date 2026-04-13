/**
 * Mandarin Chinese Lessons
 * Three foundational lessons covering greetings, food/tea culture, and numbers/bargaining
 */

export const mandarinLessons = [
  {
    id: 1,
    title: "Greetings & Basic Courtesy",
    subtitle: "Essential Phrases for Daily Interaction",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 1,
    description:
      "Master the fundamentals of Mandarin greeting customs. Learn how to address people respectfully based on age and social hierarchy—a core element of mianzi in Chinese culture. From casual 'ni hao' to formal honorifics, understand the social nuances behind each greeting.",
    topics: [
      "Basic greetings (nǐ hǎo variations)",
      "Formal vs. casual address",
      "Polite opening phrases",
      "Confucian respect principles",
    ],
    vocabulary: [
      {
        mandarin: "nǐ hǎo",
        english: "hello (casual)",
        note: "Most common greeting; neutral tone",
      },
      {
        mandarin: "nín hǎo",
        english: "hello (formal/respectful)",
        note: "Use with elders or in formal settings; reflects Confucian deference",
      },
      {
        mandarin: "zǎo ān",
        english: "good morning",
        note: "Literally 'early peace'; used until ~10am",
      },
      {
        mandarin: "wǎn ān",
        english: "good evening",
        note: "Used after sunset; 'evening peace'",
      },
      {
        mandarin: "xiè xiè",
        english: "thank you",
        note: "Common expression; can be softened with 'le' (xiè xiè le)",
      },
      {
        mandarin: "duō duō zhǐ jiào",
        english: "please advise/teach me much",
        note: "Humbling phrase respecting others' knowledge and wisdom",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 2,
    title: "Food, Tea & Hospitality",
    subtitle: "Ordering, Dining Etiquette, and Tea Ceremony",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 4,
    description:
      "Explore the rich tradition of Chinese cuisine and tea culture. Learn authentic phrases for ordering dim sum, participating in tea ceremonies, and understanding toasting customs. Food and tea are central to Chinese hospitality and the concept of guanxi (relationships).",
    topics: [
      "Dim sum ordering phrases",
      "Tea ceremony vocabulary",
      "Dining etiquette",
      "Toasting customs",
    ],
    vocabulary: [
      {
        mandarin: "wǒ xiǎng yào",
        english: "I would like",
        note: "Polite way to order; literally 'I think want'",
      },
      {
        mandarin: "chá",
        english: "tea",
        note: "Central to Chinese culture; 2nd tone",
      },
      {
        mandarin: "diǎn xin",
        english: "dim sum",
        note: "Literally 'touch heart'; small plates reflecting Cantonese hospitality",
      },
      {
        mandarin: "gān bēi",
        english: "cheers (bottoms up)",
        note: "Literal: 'dry cup'; important for relationship-building (guanxi)",
      },
      {
        mandarin: "hǎo chī",
        english: "delicious",
        note: "Compliment to host; showing appreciation builds mianzi",
      },
      {
        mandarin: "zài lái yī bēi",
        english: "another cup, please",
        note: "Used with tea or alcohol; shows continued enjoyment",
      },
    ],
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: "Numbers & Bargaining",
    subtitle: "Counting, Prices & Market Negotiations",
    level: "intermediate",
    category: "fundamentals",
    duration: "10 min",
    proverbId: 5,
    description:
      "Develop practical skills for the marketplace. Learn Mandarin numbers (with proper tone marking), pricing vocabulary, and authentic bargaining phrases used at night markets and shops. Bargaining is a cultural art form reflecting negotiation and respect.",
    topics: [
      "Numbers 1-10 with tone marks",
      "Currency and pricing",
      "Bargaining phrases",
      "Market etiquette",
    ],
    vocabulary: [
      {
        mandarin: "yī, èr, sān",
        english: "one, two, three",
        note: "Tone accuracy critical; yi has tone sandhi rules",
      },
      {
        mandarin: "duō shao qián",
        english: "how much money?",
        note: "Direct pricing question; used in markets",
      },
      {
        mandarin: "tài guì le",
        english: "too expensive",
        note: "Standard opening phrase for bargaining negotiation",
      },
      {
        mandarin: "néng piányí yī diǎn ma",
        english: "can it be cheaper?",
        note: "Polite bargaining request; shows respect while negotiating",
      },
      {
        mandarin: "zuì dī jià",
        english: "lowest price",
        note: "Final negotiation phase; shows intent to make a deal",
      },
      {
        mandarin: "yě xíng",
        english: "okay/acceptable",
        note: "Acceptance phrase; closes negotiation",
      },
    ],
    completed: false,
    locked: true,
  },
];

export const mandarinLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
];
