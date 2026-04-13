/**
 * French Lessons for Vernacular Language Learning App
 * Beginner level lessons with cultural context
 */

export const frenchLessons = [
  {
    id: 1,
    title: "Greetings & Social Etiquette",
    subtitle: "Master formal vs. informal French greetings",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 3,
    description: "Learn the essential differences between tu (informal) and vous (formal) pronouns, the cultural significance of la bise (the French cheek kiss greeting), and how to navigate French social protocols. Understanding these nuances is crucial for authentic communication.",
    topics: [
      "Tu vs. Vous: When to use each form",
      "La Bise: Regional variations and contexts",
      "Common greetings: Bonjour, Bonsoir, Salut",
      "Politeness markers: S'il vous plaît, S'il te plaît"
    ],
    vocabulary: [
      { french: "Bonjour", english: "Good morning/day", note: "Used until evening, very common greeting" },
      { french: "Bonsoir", english: "Good evening", note: "Used from late afternoon onwards" },
      { french: "Enchanté(e)", english: "Pleased to meet you", note: "Literally: enchanted; agrees with speaker's gender" },
      { french: "Tu", english: "You (informal)", note: "Used with friends, family, children, or peers" },
      { french: "Vous", english: "You (formal/plural)", note: "Used with strangers, elders, or in professional settings" },
      { french: "La bise", english: "Cheek kiss greeting", note: "Number of kisses varies by region (2-4 typical)" }
    ],
    completed: false,
    locked: false
  },
  {
    id: 2,
    title: "Café & Food Culture",
    subtitle: "Navigate French dining traditions and vocabulary",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 5,
    description: "Explore France's legendary café culture and food traditions. Learn how to order drinks and snacks at a café, understand the French meal structure, and discover the social significance of lingering over coffee. Food is central to French identity and social bonding.",
    topics: [
      "Café ordering: Drinks and pastries",
      "Meal structure: Petit-déjeuner, déjeuner, dîner",
      "Restaurant etiquette and timing",
      "Expressing preferences and dietary needs"
    ],
    vocabulary: [
      { french: "Un café", english: "A coffee (espresso)", note: "The standard coffee order in France" },
      { french: "Un café crème", english: "Coffee with cream", note: "Larger, milky coffee similar to cappuccino" },
      { french: "Une croissant", english: "A croissant", note: "Iconic French pastry, enjoyed at breakfast" },
      { french: "L'addition", english: "The bill/check", note: "Used to ask for the check at a restaurant" },
      { french: "Déjeuner", english: "Lunch (or to have lunch)", note: "Main meal of the day in France" },
      { french: "Dîner", english: "Dinner (or to dine)", note: "Lighter evening meal, typically 7-8pm" }
    ],
    completed: false,
    locked: false
  },
  {
    id: 3,
    title: "Daily Life & Directions",
    subtitle: "Communicate in everyday situations",
    level: "beginner",
    category: "fundamentals",
    duration: "10 min",
    proverbId: 4,
    description: "Build confidence in daily interactions. Learn vocabulary for navigating French towns, asking for and giving directions, discussing daily routines, and making practical requests. These are the foundations for real-world French communication.",
    topics: [
      "Cardinal and ordinal directions",
      "Daily routine verbs and time expressions",
      "Public transportation and locations",
      "Practical requests and help-seeking phrases"
    ],
    vocabulary: [
      { french: "À gauche", english: "On the left / to the left", note: "Basic direction indicator" },
      { french: "À droite", english: "On the right / to the right", note: "Basic direction indicator" },
      { french: "Tout droit", english: "Straight ahead", note: "Essential for giving directions" },
      { french: "Où est la gare?", english: "Where is the train station?", note: "Key question for navigation; 'gare' = station" },
      { french: "Je me lève", english: "I wake up / I get up", note: "Common daily routine verb (se lever)" },
      { french: "Excusez-moi", english: "Excuse me / Sorry", note: "Formal apology or getting someone's attention" }
    ],
    completed: false,
    locked: true
  }
];

export const frenchLessonLevels = [
  {
    id: "beginner",
    label: "Beginner"
  },
  {
    id: "intermediate",
    label: "Intermediate"
  }
];
