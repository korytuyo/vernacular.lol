// Cantonese interactive scenarios for conversational practice
// AI role-play based on authentic Hong Kong settings

export const cantoneseScenarios = [
  {
    id: 1,
    title: "Dim Sum at a Hong Kong Tea House",
    description:
      "You arrive at a traditional dim sum restaurant in Central Hong Kong early on a Saturday morning. A tea cart vendor approaches your table, ready to serve.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Yum cha is a sacred Saturday morning ritual in Hong Kong. Families gather in bustling dim sum restaurants, and tea carts roll past tables laden with bamboo baskets of freshly steamed dumplings. The atmosphere is loud, energetic, and welcoming to regulars. You'll need to order tea, select dim sum items from the cart, and engage in friendly banter typical of Hong Kong dining culture.",
    aiRole: "Dim sum cart vendor / pushcart server",
    starterPrompt:
      "你好！飲咩茶呀？(Hello! What tea would you like?) *gestures at cart with various dim sum baskets*",
    keyPhrases: [
      "要一份蝦餃 (order shrimp dumplings)",
      "唔該比我哋蕭麥 (give us pork dumplings please)",
      "飲普洱茶 (drinking pu-erh tea)"
    ],
    lessonId: 2,
    locked: false
  },
  {
    id: 2,
    title: "Bargaining at the Wet Market",
    description:
      "You're shopping at a Hong Kong traditional wet market in the morning rush. A vendor is selling fresh produce from a colorful stall. You spot some seasonal fruit and want to negotiate the price.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Hong Kong's wet markets are vibrant, chaotic centers of daily commerce. Vendors call out prices, locals haggle over produce quality, and the air smells of fresh fish, vegetables, and tropical fruits. Bargaining is not just acceptable—it's expected. Understanding negotiation phrases and vendor communication styles is key to authentic market interaction in Guangdong and Hong Kong.",
    aiRole: "Fruit and vegetable vendor",
    starterPrompt:
      "靚果呀！新鮮嘅芒果，三個十蚊！(Beautiful mangoes! Fresh ones, three for ten dollars!) 你要唔要?",
    keyPhrases: [
      "幾多錢呀？(how much?)",
      "貴咗啦，減啲價 (too expensive, reduce price)",
      "好啦，就要呢啲 (okay, I'll take these)"
    ],
    lessonId: 3,
    locked: false
  },
  {
    id: 3,
    title: "Riding the MTR & Asking for Directions",
    description:
      "You're on the Hong Kong MTR (Mass Transit Railway) during rush hour. You need to ask a local passenger for directions to Mongkok station. They're helpful but speak quickly in authentic Cantonese.",
    difficulty: "intermediate",
    duration: "5-10 min",
    context:
      "The MTR is the lifeblood of Hong Kong and Guangdong transportation. Millions use it daily to navigate the city's dense urban sprawl. The environment is fast-paced, crowded, and requires quick communication. Learning to ask for directions, understand instructions, and engage with locals in this high-energy setting is essential for survival in Hong Kong. Proper tones and directness are crucial.",
    aiRole: "Helpful local commuter / MTR passenger",
    starterPrompt:
      "你好，去旺角站點行啊？(Hey, how do I get to Mongkok station?) *train doors closing*",
    keyPhrases: [
      "响邊個站轉車 (change at which station)",
      "坐呢班車唔使轉 (don't need to change on this train)",
      "落車之後行隻路 (after getting off, walk this way)"
    ],
    lessonId: 3,
    locked: true
  }
];
