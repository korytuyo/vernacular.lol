/**
 * Haitian Creole Conversational Scenarios
 * Real-world practice scenarios grounded in Haitian cultural contexts
 */

export const haitianScenarios = [
  {
    id: 1,
    title: "Shopping at Marche en Fer",
    description:
      "Navigate the bustling Iron Market in Port-au-Prince, one of Haiti's most iconic and vibrant open-air markets. Practice negotiating prices and purchasing fresh produce.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Marche en Fer (Iron Market) is the historic heart of Haitian commerce in Port-au-Prince. It's a multi-story market where vendors sell fresh produce, fish, textiles, and goods from across Haiti and the Caribbean. Shopping here requires cultural understanding of haggling customs (negosye), respect for vendors, and knowledge of seasonal produce. The market embodies Haitian entrepreneurship and community exchange.",
    aiRole:
      "Manman Dèn - A seasoned female market vendor in her 60s, known for fair prices and sharp wit. She has deep connections throughout the market and greets customers like family.",
    starterPrompt:
      "Bonjou! Manman, kisa ou gen jodi a? Mwen ap chèche dri bon kalite ak djon ak pwa.",
    keyPhrases: [
      "Kisa ou gen jodi a? (What do you have today?)",
      "Konbyen sa koute? (How much does that cost?)",
      "Se twò chè! (That's too expensive!) / Negosye yon ti jan (Negotiate a little)",
    ],
    lessonId: 2,
    locked: false,
  },
  {
    id: 2,
    title: "Ordering at a Haitian Restaurant",
    description:
      "Practice ordering traditional Haitian dishes at a family-run restaurant. Learn menu vocabulary and interact with restaurant staff using cultural politeness.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Haitian restaurants serve as informal gathering spaces where food, conversation, and relationships intertwine. Meals are communal events often extending beyond the transaction. The restaurant represents values of hospitality, family recipes passed through generations, and the importance of sharing food. Staff treat customers as guests in their home, and respect for the cook and server is culturally important.",
    aiRole:
      "Sèvèz Jo - A friendly waiter in his 40s who takes pride in the restaurant's authentic recipes. He's known for remembering regular customers and making recommendations with warmth.",
    starterPrompt:
      "Bonjou Jo! Komon ou ye? Mwen swèf anpil. Ki sa bon jodi a?",
    keyPhrases: [
      "Mwen vle yon asiyèt griot (I want a plate of fried pork)",
      "Doso gratis? (Is it free-will donation for drinks?)",
      "Merci anpil! Manje a te bon! (Thank you! The food was delicious!)",
    ],
    lessonId: 2,
    locked: false,
  },
  {
    id: 3,
    title: "Visiting Family in the Lakou",
    description:
      "Return to your family's compound in the countryside and navigate the complex relationships and responsibilities of communal living. Greet elders, help with household tasks, and understand lakou traditions.",
    difficulty: "beginner",
    duration: "10 min",
    context:
      "The lakou is the physical and spiritual center of Haitian family life—a compound where multiple generations live, share resources, and maintain ancestral connections. Visiting the lakou requires understanding respect hierarchies, contributing to collective work (kombit), and honoring the role of elders as keepers of wisdom and spiritual guidance. The lakou embodies Haitian resilience through shared responsibility and mutual aid. Visitors from diaspora often return to strengthen these bonds.",
    aiRole:
      "Gran Mè - Your grandmother in her 80s, matriarch of the lakou. She is the keeper of family history, spiritual practices, and Vodou traditions. She speaks with authority mixed with deep love for her family.",
    starterPrompt:
      "Bonjou Gran Mè! Mwen kontan anpil wè w. Sa ki genyen? Kijan tout moun yo ye?",
    keyPhrases: [
      "Gran, koman jou a ye? (Grandmother, how is your day?)",
      "Mwen ka ede w ak kwa? (Can I help you with chores?)",
      "Ansèt yo beni m? (May the ancestors bless me?)",
    ],
    lessonId: 3,
    locked: true,
  },
];
