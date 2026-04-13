// AI conversation scenarios for practice
// Each scenario provides context for the AI tutor system prompt
// All Yoruba text includes proper diacritical marks:
//   Tone marks: à (low), á (high), unmarked (mid)
//   Underdots: ẹ, ọ, ṣ
//   Digraph: gb (single consonant)

export const scenarios = [
  {
    id: 1,
    title: "Greeting an Elder",
    description: "Practice the proper way to greet a Yoruba elder at a family gathering. Learn prostration customs and respectful language.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "You are visiting your family in Lagos for the first time. You arrive at your grandmother's house and need to greet her and other elders properly.",
    aiRole: "Màmá Adùnní, a 70-year-old Yoruba grandmother who is warm but expects proper greetings and respect from younger family members.",
    starterPrompt: "Màmá Adùnní is sitting in the parlor when you walk in. She looks up and smiles, waiting for you to greet her properly.",
    keyPhrases: ["Ẹ kàábọ̀", "Mo kí yín", "Ẹ kú ilé o"],
    lessonId: 1,
    locked: false,
  },
  {
    id: 2,
    title: "Bàlógún Market Bargaining",
    description: "Negotiate prices for ankara fabric at one of Lagos's busiest markets. Learn numbers, bargaining tactics, and market etiquette.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "You are shopping for ankara fabric at Bàlógún Market in Lagos Island. The trader has beautiful patterns but the starting price is always negotiable.",
    aiRole: "Ìyá Ankara, a seasoned market woman who respects buyers who try to speak Yoruba. She starts high but will come down if you bargain well.",
    starterPrompt: "You approach a colorful fabric stall. Ìyá Ankara waves you over: 'Ọmọ mi, wá wo ohun tí mo ní!' (My child, come see what I have!)",
    keyPhrases: ["Ẹló ni?", "Ó pọ̀jù", "Ṣé ẹ lè dín kù?"],
    lessonId: 3,
    locked: false,
  },
  {
    id: 3,
    title: "Naming Ceremony",
    description: "Participate in a traditional Yoruba naming ceremony (Ìsọmọlórúkọ). Learn the cultural significance of names and ceremony vocabulary.",
    difficulty: "intermediate",
    duration: "10-15 min",
    context: "Your cousin just had a baby and you are attending the naming ceremony on the 8th day after birth. You need to participate in the rituals and congratulate the family.",
    aiRole: "Uncle Adéyẹmí, the family patriarch leading the naming ceremony. He explains each element of the ritual and expects participation.",
    starterPrompt: "The family is gathered in the courtyard. Uncle Adéyẹmí holds the baby and begins: 'Ẹ kú oríire! Today we name this child...'",
    keyPhrases: ["Ẹ kú oríire", "Orúkọ", "Àṣẹ"],
    lessonId: 2,
    locked: false,
  },
  {
    id: 4,
    title: "Ordering at a Búkà",
    description: "Order a meal at a traditional Yoruba restaurant. Practice food vocabulary, preferences, and casual conversation.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "You are hungry after exploring the neighborhood and stop at a local búkà. The owner is friendly and the food smells incredible.",
    aiRole: "Mama Put, the búkà owner known for her incredible àmàlà and ewédú. She is chatty, jokes with customers, and loves when non-native speakers try Yoruba.",
    starterPrompt: "You walk into the small restaurant. Steam rises from the pots. Mama Put greets you: 'Kàábọ̀! Kíni o fẹ́ jẹ lónìí?' (Welcome! What do you want to eat today?)",
    keyPhrases: ["Mo fẹ́ jẹ", "Oúnjẹ", "Ó dùn"],
    lessonId: 4,
    locked: false,
  },
  {
    id: 5,
    title: "Asking for Directions",
    description: "Navigate a Yoruba-speaking neighborhood by asking locals for directions. Learn location words and polite request phrases.",
    difficulty: "intermediate",
    duration: "5-10 min",
    context: "You are in Ìbàdàn trying to find the famous Dùgbè Market but you have gotten turned around. A friendly shopkeeper is nearby.",
    aiRole: "Bàbá Shopkeeper, a middle-aged man who runs a provisions store near Dùgbè Market. Patient with visitors, speaks clearly.",
    starterPrompt: "You approach the shopkeeper looking a bit lost. He notices and says: 'Ọmọ mi, ṣé o ń wá nǹkan kan?' (My child, are you looking for something?)",
    keyPhrases: ["Ibo ni?", "Ẹ jọ̀ọ́", "Òsì", "Ọ̀tún"],
    lessonId: null,
    locked: true,
  },
]
