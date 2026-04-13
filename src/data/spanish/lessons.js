// Spanish Lessons for Vernacular Language Learning App
// Beginner and Intermediate level lessons with cultural context

export const spanishLessons = [
  {
    id: 1,
    title: "Saludos y Formas de Cortesía",
    subtitle: "Greetings and Forms of Address",
    level: "beginner",
    category: "fundamentals",
    duration: "15 min",
    proverbId: 3,
    description: "Master essential Spanish greetings and learn the critical distinction between 'tú' (informal) and 'usted' (formal). This lesson covers regional variations across Spain and Latin America, including Mexican, Colombian, and Argentine Spanish preferences for formal vs. informal address.",
    topics: [
      "Basic greetings (hola, buenos días, buenas noches)",
      "Tú vs Usted: When to use formal and informal",
      "Regional variations in Latin America",
      "Responding to ¿Cómo estás?"
    ],
    vocabulary: [
      {
        spanish: "Hola",
        english: "Hello",
        note: "Casual greeting used across all Spanish-speaking regions"
      },
      {
        spanish: "Buenos días",
        english: "Good morning",
        note: "Used until afternoon; formal greeting appropriate for any context"
      },
      {
        spanish: "¿Cómo estás? (tú) / ¿Cómo está? (usted)",
        english: "How are you? (informal/formal)",
        note: "Critical distinction—tú for friends/family, usted for strangers/elders"
      },
      {
        spanish: "Mucho gusto",
        english: "Nice to meet you",
        note: "Used when meeting someone for the first time, formal but warm"
      },
      {
        spanish: "¿Qué tal?",
        english: "What's up? / How's it going?",
        note: "Very casual, popular in Latin America, especially Mexico and Colombia"
      },
      {
        spanish: "Encantado/Encantada",
        english: "Delighted to meet you",
        note: "More intimate than mucho gusto; agrees in gender (encantado if male, encantada if female)"
      }
    ],
    completed: false,
    locked: false
  },
  {
    id: 2,
    title: "Comida y el Mercado",
    subtitle: "Food, Ordering, and Market Culture",
    level: "beginner",
    category: "cultural",
    duration: "15 min",
    proverbId: 4,
    description: "Explore Spanish food vocabulary through the lens of authentic markets and street food. Learn ordering phrases in a taquería and navigate a mercado público. This lesson celebrates the central role of food and markets in Hispanic culture, with vocabulary grounded in real-world scenarios.",
    topics: [
      "Market and food stall vocabulary",
      "Ordering at taquerías and food stands",
      "Regional food specialties (tacos, tamales, pupusas)",
      "Polite phrases for negotiating and asking prices"
    ],
    vocabulary: [
      {
        spanish: "¿Cuánto cuesta?",
        english: "How much does it cost?",
        note: "Used when asking price at markets or food stalls"
      },
      {
        spanish: "Dos tacos de al pastor, por favor",
        english: "Two al pastor tacos, please",
        note: "Al pastor is a popular style across Mexico; regional preferences vary by area"
      },
      {
        spanish: "Mercado",
        english: "Market",
        note: "Public market; 'mercado público' or 'tianguis' in Mexico for street markets"
      },
      {
        spanish: "Taquería",
        english: "Taco stand/shop",
        note: "Common throughout Latin America; can be casual stands or small restaurants"
      },
      {
        spanish: "Fresco",
        english: "Fresh",
        note: "Used to describe fresh produce and ingredients at markets"
      },
      {
        spanish: "¿Qué me recomienda?",
        english: "What do you recommend?",
        note: "Polite way to ask vendors or restaurant staff for suggestions"
      }
    ],
    completed: false,
    locked: false
  },
  {
    id: 3,
    title: "Familia y Cultura",
    subtitle: "Family Relationships and Cultural Connections",
    level: "intermediate",
    category: "cultural",
    duration: "15 min",
    proverbId: 5,
    description: "Navigate family relationships and cultural identity in Spanish-speaking contexts. Learn extended family terminology and understand the cultural importance of family gatherings. This lesson covers how family structures are discussed across Spain and Latin America, with emphasis on cultural values.",
    topics: [
      "Extended family terminology (abuelos, tíos, primos, suegros)",
      "Family relationships and diminutives",
      "Cultural importance of family gatherings",
      "Discussing family background and heritage"
    ],
    vocabulary: [
      {
        spanish: "La familia extendida",
        english: "Extended family",
        note: "Crucial concept in Hispanic culture; multi-generational households are common"
      },
      {
        spanish: "Abuelo/Abuela",
        english: "Grandfather/Grandmother",
        note: "Often used as affectionate terms; 'abuelita' and 'abuelito' are common diminutives"
      },
      {
        spanish: "Tío/Tía",
        english: "Uncle/Aunt",
        note: "Extended use in Latin America to refer to close family friends respectfully"
      },
      {
        spanish: "Primo/Prima",
        english: "Cousin",
        note: "Very close relationships in Hispanic families; often considered part of immediate family"
      },
      {
        spanish: "La reunión familiar",
        english: "Family gathering",
        note: "Central to Hispanic culture; celebrations typically involve extended family and food"
      },
      {
        spanish: "Compadre/Comadre",
        english: "Godparent/Close family friend",
        note: "Deeply rooted cultural concept indicating special relationship; godparents are integral to family structure"
      }
    ],
    completed: false,
    locked: true
  }
];

export const spanishLessonLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" }
];
