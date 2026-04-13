/**
 * Mandarin Chinese Conversation Scenarios
 * Culturally authentic, real-world interaction patterns
 */

export const mandarinScenarios = [
  {
    id: 1,
    title: "Ordering Dim Sum at a Restaurant",
    description:
      "Navigate a busy dim sum restaurant with authentic Cantonese-influenced Mandarin phrases. Learn to order traditional small plates, ask about ingredients, and interact with servers using proper etiquette.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Dim sum (diǎn xin, literally 'touch heart') is a beloved Chinese tradition where small plates of food are served with tea. In Mandarin-speaking regions, especially Cantonese areas, understanding how to order and communicate preferences is essential. The server approaches with a cart; you must quickly decide on dishes while showing respect and appreciation. This scenario reflects real restaurant dynamics in Hong Kong, Guangzhou, and Taipei.",
    aiRole: "Dim Sum Server (Dim sum boy/girl - fúwù yuán)",
    starterPrompt:
      "服务员推着点心车过来: 'Nǐ xiǎng yào shénme? Wǒ tuī guò lái le.' (The server pushes the cart over: 'What would you like? I brought the cart over.')",
    keyPhrases: [
      "wǒ xiǎng yào xiǎ lóng bāo",
      "zhè ge shì shén me",
      "duō shao qián",
    ],
    lessonId: 2,
    locked: false,
  },
  {
    id: 2,
    title: "Tea Ceremony at a Traditional Tea Shop",
    description:
      "Participate in a traditional tea ceremony with authentic gestures and language. Learn proper tea etiquette, how to request specific tea types, and the philosophical aspects of tea culture in Chinese society.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Tea is woven into the fabric of Chinese civilization, representing harmony, respect, and contemplation. A proper tea ceremony (gōng fu chá) involves specific steps, proper vessel handling, and respectful interaction. In a tea shop setting, the server (or master/shifu) guides you through selection and preparation. Understanding the cultural significance—tea as medicine, social connector, and spiritual practice—is central to Mandarin cultural competency.",
    aiRole:
      "Tea Master (Chá shī fu - tea expert with philosophical knowledge)",
    starterPrompt:
      "茶艺师微笑着问: 'Huānyíng guānglín. Nǐ xǐhuān hē shé me chá?' (The tea master smiles and asks: 'Welcome. What kind of tea do you like to drink?')",
    keyPhrases: ["wǒ xiǎng pǐn chá", "zài lái yī bēi chá", "zhè ge chá hěn xiāng"],
    lessonId: 2,
    locked: false,
  },
  {
    id: 3,
    title: "Bargaining at a Night Market",
    description:
      "Master the art of negotiation at a bustling Chinese night market (yè shì). Learn authentic bargaining phrases, understand pricing psychology, and navigate vendor relationships with respect and strategic communication.",
    difficulty: "intermediate",
    duration: "10 min",
    context:
      "Night markets are vibrant hubs of commerce in Taipei, Shanghai, Bangkok, and beyond. Bargaining isn't just economic—it's relational. Vendors and customers engage in a dance of negotiation rooted in mutual respect and guanxi (relationship building). Prices are starting points; the negotiation itself reflects cultural values of fairness, cleverness, and rapport. Showing respect to the vendor, even while challenging their price, is essential to mianzi and successful outcomes.",
    aiRole: "Night Market Vendor (Yè shì xiǎo guǎng - street merchant)",
    starterPrompt:
      "摊主热情地招手: 'Lái, lái, lái! Zhè ge zuì xīnxiān de! Kàn yīxià?' (The vendor enthusiastically waves: 'Come, come, come! These are the freshest! Take a look?')",
    keyPhrases: ["tài guì le", "néng piányí duō shao", "zuì dī jià ne"],
    lessonId: 3,
    locked: true,
  },
];
