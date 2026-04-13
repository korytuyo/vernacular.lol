// Yoruba proverbs (òwe) with cultural context
// These form the backbone of the learning curriculum
// All Yoruba text includes proper diacritical marks:
//   Tone marks: à (low), á (high), unmarked (mid)
//   Underdots: ẹ, ọ, ṣ
//   Digraph: gb (single consonant)

export const proverbs = [
  {
    id: 1,
    yoruba: "Òwe lẹṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sọnù, òwe la ó fi ń wá a",
    english: "Proverbs are the horses of speech; when speech is lost, we use proverbs to find it",
    literal: "Proverb is the horse of word, if word is lost, proverb is what we use to search for it",
    context: "This is the most famous Yoruba proverb about proverbs themselves. It teaches that wisdom and eloquent speech rely on proverbs as vehicles. In Yoruba culture, a person who speaks with proverbs is considered wise and well-raised.",
    category: "wisdom",
    difficulty: "beginner",
    lessonLink: 1,
  },
  {
    id: 2,
    yoruba: "Àgbà kì í ní títì lójà, ó ní títì láyà",
    english: "An elder does not stumble in the market without people talking about it",
    literal: "An elder does not fall in the market, they fall at home",
    context: "This proverb speaks to the weight of reputation and public behavior in Yoruba society. Elders are held to high standards. When they make mistakes publicly, it becomes a story. It teaches accountability and the importance of carrying yourself with dignity.",
    category: "respect",
    difficulty: "beginner",
    lessonLink: 2,
  },
  {
    id: 3,
    yoruba: "Bí a bá ń rìn, a ó rìn dé",
    english: "If we keep walking, we will arrive",
    literal: "If we are walking, we will walk to arrive",
    context: "A proverb about perseverance. Yoruba culture values steady effort over shortcuts. This saying is often used to encourage someone facing a long journey, whether physical or metaphorical.",
    category: "perseverance",
    difficulty: "beginner",
    lessonLink: 3,
  },
  {
    id: 4,
    yoruba: "Ọwọ́ ọmọdé kò tó pẹpẹ, ti àgbàlágbà kò wọ kèrègbè",
    english: "The child's hand cannot reach the shelf; the elder's hand cannot enter the gourd",
    literal: "Hand of child cannot reach the high shelf, that of elder cannot enter the narrow-mouth gourd",
    context: "This proverb illustrates intergenerational cooperation. Young and old each have abilities the other lacks. It is used to promote mutual respect between generations and teamwork within families and communities.",
    category: "cooperation",
    difficulty: "intermediate",
    lessonLink: 4,
  },
  {
    id: 5,
    yoruba: "Ẹni tí ó fẹ́ jẹun oyin inú àpáta, kì í wo ojú àáké",
    english: "One who wants honey from the rock does not fear the bee's face",
    literal: "Person who wants to eat honey inside the rock, does not look at the face of the bee",
    context: "A proverb about courage and determination. If you want something valuable, you must be willing to face the risks. Commonly used to encourage boldness in pursuing goals.",
    category: "courage",
    difficulty: "intermediate",
    lessonLink: 5,
  },
  {
    id: 6,
    yoruba: "Igba ọwọ́ la fi ń pa àrọ, ìka kan kò lè pa àrọ",
    english: "It takes all fingers to kill a louse; one finger cannot do it alone",
    literal: "Two hundred hands we use to kill a louse, one finger alone cannot kill a louse",
    context: "Unity and collaboration are core Yoruba values. This proverb reinforces that difficult tasks require collective effort. It is often invoked during community projects and family decisions.",
    category: "unity",
    difficulty: "beginner",
    lessonLink: 6,
  },
  {
    id: 7,
    yoruba: "Àṣẹ l'àgbára Olórun",
    english: "The power of God is in the spoken word",
    literal: "Àṣẹ is the power of God",
    context: "Àṣẹ (pronounced ah-SHEH) is one of the most important concepts in Yoruba cosmology. It means the power to make things happen, the life force, the authority of the spoken word. This concept has traveled throughout the African diaspora and appears in many Afro-Caribbean spiritual traditions.",
    category: "spirituality",
    difficulty: "intermediate",
    lessonLink: 7,
  },
  {
    id: 8,
    yoruba: "Ohun tí a bá ń wá ní Sókótó, ó wà nínú àpò ṣòkòtò",
    english: "What you are searching for in Sokoto is right in your trouser pocket",
    literal: "What we are looking for in Sokoto, it is in the pocket of trousers",
    context: "A humorous proverb with a play on words. Sókótó is a city in northern Nigeria, and 'ṣòkòtò' also means trousers in Yoruba. The wisdom: what you seek far away may already be within your reach. Stop looking elsewhere for what you already have.",
    category: "wisdom",
    difficulty: "beginner",
    lessonLink: 8,
  },
]

export const proverbCategories = [
  { id: "wisdom", label: "Wisdom", color: "amber" },
  { id: "respect", label: "Respect", color: "purple" },
  { id: "perseverance", label: "Perseverance", color: "blue" },
  { id: "cooperation", label: "Cooperation", color: "green" },
  { id: "courage", label: "Courage", color: "red" },
  { id: "unity", label: "Unity", color: "teal" },
  { id: "spirituality", label: "Spirituality", color: "indigo" },
]
