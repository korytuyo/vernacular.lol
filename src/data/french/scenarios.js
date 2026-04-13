/**
 * French Immersive Scenarios for Vernacular Language Learning App
 * Real-world interactions in culturally authentic settings
 */

export const frenchScenarios = [
  {
    id: 1,
    title: "Ordering at a Parisian Café",
    description: "Navigate the social choreography of ordering a drink and pastry at an iconic Parisian café, where timing, politeness, and small talk matter.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "You're sitting at a café in the Marais district of Paris on a sunny afternoon. A server approaches your table. In French café culture, servers expect clear, direct orders and will return to your table rather than hanging around. You'll need to know how to catch their attention politely, order your items, and ask for the bill when ready.",
    aiRole: "Laurent, a friendly but efficient Parisian café server with 15 years of experience",
    starterPrompt: "Excusez-moi, monsieur/madame! Qu'est-ce que je vous sers?",
    keyPhrases: [
      "Un café crème et une croissant, s'il vous plaît",
      "L'addition, s'il vous plaît",
      "C'est combien?"
    ],
    lessonId: 2,
    locked: false
  },
  {
    id: 2,
    title: "Shopping at the Local Marché",
    description: "Shop for fresh produce and goods at a traditional French outdoor market, where haggling is rare but conversation is valued.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "It's Saturday morning and you're at a neighborhood marché (outdoor market) in Lyon. Vendors sell fresh vegetables, fruits, cheese, and baked goods. Unlike grocery stores, the market requires you to engage with vendors, ask about products, request specific weights, and handle cash transactions. Each vendor may have their own personality—some are chatty, others brisk but kind.",
    aiRole: "Madame Dubois, a warm and knowledgeable produce vendor who's run her vegetable stand for 20 years",
    starterPrompt: "Bonjour! Vous cherchez quelque chose de particulier aujourd'hui?",
    keyPhrases: [
      "Combien coûte les tomates?",
      "Je voudrais deux kilos de pommes, s'il vous plaît",
      "C'est local?"
    ],
    lessonId: 2,
    locked: false
  },
  {
    id: 3,
    title: "Asking for Directions in a French City",
    description: "Confidently ask for and understand directions in French, navigating the narrow streets of a historic French town center.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "You're lost in the winding streets of Strasbourg's old town and need to find the cathedral (la cathédrale). You approach a local person. French people appreciate politeness and clear questions—starting with 'Excusez-moi' or 'S'il vous plaît' is essential. They'll likely give directions using landmarks and street names rather than GPS terminology.",
    aiRole: "Pierre, a retired teacher who knows Strasbourg's layout intimately and enjoys helping tourists",
    starterPrompt: "Bonjour! Je peux vous aider? Vous êtes perdu(e)?",
    keyPhrases: [
      "Où est la cathédrale, s'il vous plaît?",
      "Allez tout droit et tournez à gauche",
      "C'est à dix minutes d'ici"
    ],
    lessonId: 3,
    locked: true
  }
];
