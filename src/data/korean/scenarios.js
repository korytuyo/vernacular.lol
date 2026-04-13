/**
 * Korean Language Scenarios - Immersive Conversation Practice
 * Culturally authentic situations with AI role-play for practical language application
 * All scenarios grounded in South Korean contexts and real social situations
 */

export const koreanScenarios = [
  {
    id: 1,
    title: "Korean BBQ Restaurant Ordering",
    description:
      "You arrive at a Korean gogi-gui (BBQ) restaurant in Seoul. Navigate seating, order grilled meats, and interact with the server using appropriate honorifics and food-related vocabulary.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Korean BBQ is a social dining experience where diners grill meat at their own table. Servers (jumin) assist throughout. Understanding how to order, signal the server, and discuss cooking preferences is essential. The environment is casual but etiquette matters—asking servers for help is expected and respectful.",
    aiRole: "Jun-ho, a friendly Korean server at Gogi House (friendly, patient, knowledgeable about menu)",
    starterPrompt:
      "A server approaches your table: 'Annyeonghaseyo! Mueoseul deuseulkkayo?' (Hello! What would you like to order?)",
    keyPhrases: [
      "Bulgogi han deung ju seyo",
      "Galbijim eun eotteoseyo",
      "Someorangi isseoyo",
    ],
    lessonId: 2,
    locked: false,
  },
  {
    id: 2,
    title: "Jjimjilbang (Korean Bathhouse) Visit",
    description:
      "Enter a traditional Korean jjimjilbang (sauna complex) in Gangnam. Understand facility etiquette, ask for services, and navigate the gender-separated bathing areas with cultural sensitivity and proper Korean phrases.",
    difficulty: "beginner",
    duration: "5-10 min",
    context:
      "Jjimjilbang is a distinctly Korean leisure experience—part sauna, part sleeping area, part restaurant. It's a social space where families and friends gather. The facility has strict etiquette: gender-separated bathing areas, quiet zones, and specific cultural norms. Learning to ask for towels, request massage services, and navigate facilities respectfully is key to authentic Korean immersion.",
    aiRole:
      "Mi-sun, a jjimjilbang attendant (helpful, explains procedures clearly, very proper)",
    starterPrompt:
      "A staff member greets you at the entrance: 'Irsseyo! Cheot bangmun i seyo? Jjimjilbang eul eoddeon sikkeul ssesin nadoun halgeyo?' (Welcome! Is this your first time? Can I explain how jjimjilbangs work?)",
    keyPhrases: [
      "Seunaereul sseogo sipseumnida",
      "Massaji do isseunamyo",
      "Sukmojeul ju seyo",
    ],
    lessonId: 3,
    locked: false,
  },
  {
    id: 3,
    title: "Shopping in Myeongdong",
    description:
      "Navigate the bustling Myeongdong shopping district in Seoul. Browse stores, negotiate prices with vendors, ask about product quality, and haggle respectfully using appropriate speech levels. Experience Korean shopping culture and vendor interactions.",
    difficulty: "intermediate",
    duration: "10 min",
    context:
      "Myeongdong is Seoul's premier shopping destination with both upscale stores and street vendors. Korean shopping culture values personal attention from sales staff (ajumma) and allows friendly negotiation, especially with street vendors. Understanding how to compliment products, ask for discounts, and express price concerns is culturally appropriate and expected. This scenario teaches practical vocabulary, persuasive language, and cultural norms around consumer interaction.",
    aiRole:
      "Park Ajumma, a seasoned cosmetics vendor (warm, talkative, uses informal speech with regulars, drives hard bargains but fair)",
    starterPrompt:
      "A vendor notices you browsing and calls out warmly: 'Eongeo! Nae sang-pume manhi waseyo! Eodui saesel bogosippeuseyo? Oneul speciel haengin isse!' (Hey! Welcome to my shop! What do you want to see? I have specials today!)",
    keyPhrases: [
      "Neun geose eul pojo bogo sipseumnida",
      "Igeon olmay aeyo",
      "Hal-iin-ni deul ileseyo",
    ],
    lessonId: 2,
    locked: true,
  },
];
