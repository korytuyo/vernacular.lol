/**
 * Portuguese Conversation Scenarios
 * Immersive real-world dialogue practice in Brazilian Portuguese
 */

export const portugueseScenarios = [
  {
    id: 1,
    title: "Ordering at a Churrascaria",
    description:
      "Navigate a traditional Brazilian churrascaria (meat restaurant) and order like a local. Learn restaurant vocabulary, how to interact with garçons (waiters), and the social customs of this iconic Brazilian dining experience.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "You're at a churrascaria in São Paulo with friends. A waiter approaches and greets you warmly. This scenario teaches you restaurant interaction, meat vocabulary specific to churrascaria, and how to participate in the social ritual of Brazilian barbecue dining. You'll learn both ordering and the conversational flow of Brazilian hospitality.",
    aiRole:
      "Garçom (Waiter) - A warm, attentive Brazilian waiter at a churrascaria who knows the menu well and expects recommendations",
    starterPrompt:
      "Oi! Bem-vindo! Tudo bem? O que vocês vão beber? Recomendo uma cerveja gelada ou um suco de fruta natural!",
    keyPhrases: [
      "Eu vou querer...",
      "Qual é a recomendação?",
      "Mais carne, por favor!",
    ],
    lessonId: 2,
    locked: false,
  },
  {
    id: 2,
    title: "Exploring a Street Market (Feira)",
    description:
      "Experience the vibrant chaos of a Brazilian street market. Learn how to haggle respectfully, ask about fresh produce, and engage with vendors. Understand the cultural importance of feiras in Brazilian neighborhoods.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "You're at a feira in Rio de Janeiro on Saturday morning. The market is alive with vendors selling fruits, vegetables, herbs, and street food. You approach a vendor selling fresh açaí bowls and tropical fruits. This scenario immerses you in authentic Brazilian street culture, market vocabulary, and the social interaction between customers and vendors who often know their customers by name.",
    aiRole:
      "Vendedor/Vendedora (Vendor) - A cheerful, energetic market vendor who treats customers like neighbors and loves talking about their produce",
    starterPrompt:
      "Ô! Tudo certo? Olha esse açaí super fresquinho! Maçã, banana, que mais você quer? Preço ótimo hoje!",
    keyPhrases: [
      "Quanto custa?",
      "Esse está bom?",
      "Coloca mais um pouco, por favor",
    ],
    lessonId: 2,
    locked: false,
  },
  {
    id: 3,
    title: "Beach Day at Copacabana",
    description:
      "Join locals at Copacabana beach. Interact with beach vendors, make friends, and experience the relaxed, social atmosphere of Rio's most famous beach. Learn beach-specific vocabulary and the art of Brazilian beach culture.",
    difficulty: "beginner",
    duration: "10 min",
    context:
      "You're relaxing at Copacabana beach on a sunny afternoon. A friendly local vendor approaches with cold drinks (água de coco - coconut water). Later, you chat with a local about the beach, the weather, and the energy of Rio. This scenario captures the essence of Brazilian beach culture: the vendor relationship, small talk with strangers who become temporary friends, and the laid-back joy of Rio. You'll learn how Brazilians use the beach as a social space.",
    aiRole:
      "Vendedor de Praia (Beach Vendor) - A friendly, persistent beach vendor selling drinks and snacks; then transitions to a local beachgoer sharing the beach culture",
    starterPrompt:
      "Água de coco! Cerveja gelada! Tudo bem aí? Que dia lindo, né? Você é daqui ou turista? Senta aqui, vem tomar algo gelado!",
    keyPhrases: [
      "Quanto é a água de coco?",
      "Que lindo dia!",
      "Você conhece bem esse lugar?",
    ],
    lessonId: 2,
    locked: true,
  },
];
