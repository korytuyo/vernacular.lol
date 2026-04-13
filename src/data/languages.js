// Language registry - central index for all supported languages
// Add new languages here and they become available app-wide

import { amharicProverbs, amharicProverbCategories } from './amharic/proverbs'
import { amharicLessons, amharicLessonLevels } from './amharic/lessons'
import { amharicScenarios } from './amharic/scenarios'
import { cantoneseProverbs, cantoneseProverbCategories } from './cantonese/proverbs'
import { cantoneseLessons, cantoneseLessonLevels } from './cantonese/lessons'
import { cantoneseScenarios } from './cantonese/scenarios'
import { englishProverbs, englishProverbCategories } from './english/proverbs'
import { englishLessons, englishLessonLevels } from './english/lessons'
import { englishScenarios } from './english/scenarios'
import { frenchProverbs, frenchProverbCategories } from './french/proverbs'
import { frenchLessons, frenchLessonLevels } from './french/lessons'
import { frenchScenarios } from './french/scenarios'
import { haitianProverbs, haitianProverbCategories } from './haitian/proverbs'
import { haitianLessons, haitianLessonLevels } from './haitian/lessons'
import { haitianScenarios } from './haitian/scenarios'
import { hausaProverbs, hausaProverbCategories } from './hausa/proverbs'
import { hausaLessons, hausaLessonLevels } from './hausa/lessons'
import { hausaScenarios } from './hausa/scenarios'
import { igboProverbs, igboProverbCategories } from './igbo/proverbs'
import { igboLessons, igboLessonLevels } from './igbo/lessons'
import { igboScenarios } from './igbo/scenarios'
import { koreanProverbs, koreanProverbCategories } from './korean/proverbs'
import { koreanLessons, koreanLessonLevels } from './korean/lessons'
import { koreanScenarios } from './korean/scenarios'
import { mandarinProverbs, mandarinProverbCategories } from './mandarin/proverbs'
import { mandarinLessons, mandarinLessonLevels } from './mandarin/lessons'
import { mandarinScenarios } from './mandarin/scenarios'
import { pidginProverbs, pidginProverbCategories } from './pidgin/proverbs'
import { pidginLessons, pidginLessonLevels } from './pidgin/lessons'
import { pidginScenarios } from './pidgin/scenarios'
import { portugueseProverbs, portugueseProverbCategories } from './portuguese/proverbs'
import { portugueseLessons, portugueseLessonLevels } from './portuguese/lessons'
import { portugueseScenarios } from './portuguese/scenarios'
import { spanishProverbs, spanishProverbCategories } from './spanish/proverbs'
import { spanishLessons, spanishLessonLevels } from './spanish/lessons'
import { spanishScenarios } from './spanish/scenarios'
import { swahiliProverbs, swahiliProverbCategories } from './swahili/proverbs'
import { swahiliLessons, swahiliLessonLevels } from './swahili/lessons'
import { swahiliScenarios } from './swahili/scenarios'
import { twiProverbs, twiProverbCategories } from './twi/proverbs'
import { twiLessons, twiLessonLevels } from './twi/lessons'
import { twiScenarios } from './twi/scenarios'
import { urduProverbs, urduProverbCategories } from './urdu/proverbs'
import { urduLessons, urduLessonLevels } from './urdu/lessons'
import { urduScenarios } from './urdu/scenarios'
import { vietnameseProverbs, vietnameseProverbCategories } from './vietnamese/proverbs'
import { vietnameseLessons, vietnameseLessonLevels } from './vietnamese/lessons'
import { vietnameseScenarios } from './vietnamese/scenarios'
import { proverbs, proverbCategories } from './proverbs'
import { lessons, lessonLevels } from './lessons'
import { scenarios } from './scenarios'

export const languages = {
  amharic: {
    id: 'amharic',
    name: 'Amharic',
    nativeName: 'Amarinja',
    flag: 'ET',
    speakers: '57M+ speakers',
    region: 'Ethiopia',
    description: 'The working language of Ethiopia. Written in the ancient Ge\'ez script, tied to coffee ceremonies and 3,000 years of unbroken culture.',
    color: 'amber',
    greeting: 'Selam',
    tagline: 'From the birthplace of coffee, the language of Ethiopia.',
    proverbs: amharicProverbs,
    proverbCategories: amharicProverbCategories,
    lessons: amharicLessons,
    lessonLevels: amharicLessonLevels,
    scenarios: amharicScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  cantonese: {
    id: 'cantonese',
    name: 'Cantonese',
    nativeName: 'Gwongdungwa',
    flag: 'HK',
    speakers: '85M+ speakers',
    region: 'Hong Kong, Guangdong, Macau, diaspora',
    description: 'The language of dim sum, Hong Kong cinema, and Chinatowns worldwide. Six tones and a street-smart energy that Mandarin cannot replicate.',
    color: 'amber',
    greeting: 'Nei hou',
    tagline: 'The voice of Hong Kong and Chinatowns worldwide.',
    proverbs: cantoneseProverbs,
    proverbCategories: cantoneseProverbCategories,
    lessons: cantoneseLessons,
    lessonLevels: cantoneseLessonLevels,
    scenarios: cantoneseScenarios,
    features: {
      toneMarks: true,
      underdots: false,
      proverbDriven: true,
    },
  },
  english: {
    id: 'english',
    name: 'English',
    nativeName: 'English',
    flag: 'US',
    speakers: '1.5B+ speakers',
    region: 'Global',
    description: 'The global lingua franca. Master the idioms, unspoken rules, and cultural codes that textbooks skip.',
    color: 'green',
    greeting: 'Hey there',
    tagline: 'The idioms, the culture, the unwritten rules.',
    proverbs: englishProverbs,
    proverbCategories: englishProverbCategories,
    lessons: englishLessons,
    lessonLevels: englishLessonLevels,
    scenarios: englishScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  french: {
    id: 'french',
    name: 'French',
    nativeName: 'Francais',
    flag: 'FR',
    speakers: '320M+ speakers',
    region: 'France, West & Central Africa, Caribbean, Canada',
    description: 'Spoken across five continents. From Parisian cafes to Dakar markets, French connects cultures through elegance and expression.',
    color: 'green',
    greeting: 'Bonjour',
    tagline: 'From Paris to Dakar, the language of expression.',
    proverbs: frenchProverbs,
    proverbCategories: frenchProverbCategories,
    lessons: frenchLessons,
    lessonLevels: frenchLessonLevels,
    scenarios: frenchScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  haitian: {
    id: 'haitian',
    name: 'Haitian Creole',
    nativeName: 'Kreyol Ayisyen',
    flag: 'HT',
    speakers: '12M+ speakers',
    region: 'Haiti, US diaspora (Miami, NYC, Boston)',
    description: 'Born from resistance and resilience. A French-based creole forged in revolution, rich with proverbs that carry the soul of Haiti.',
    color: 'green',
    greeting: 'Sak pase',
    tagline: 'The language born from revolution.',
    proverbs: haitianProverbs,
    proverbCategories: haitianProverbCategories,
    lessons: haitianLessons,
    lessonLevels: haitianLessonLevels,
    scenarios: haitianScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  hausa: {
    id: 'hausa',
    name: 'Hausa',
    nativeName: 'Harshen Hausa',
    flag: 'NG',
    speakers: '80M+ speakers',
    region: 'Northern Nigeria, Niger, West Africa',
    description: 'The most widely spoken language in West Africa. Carries centuries of trade, Islamic scholarship, and karin magana (proverb) tradition.',
    color: 'amber',
    greeting: 'Sannu',
    tagline: 'The language of trade, faith, and wisdom.',
    proverbs: hausaProverbs,
    proverbCategories: hausaProverbCategories,
    lessons: hausaLessons,
    lessonLevels: hausaLessonLevels,
    scenarios: hausaScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  igbo: {
    id: 'igbo',
    name: 'Igbo',
    nativeName: 'Asusu Igbo',
    flag: 'NG',
    speakers: '45M+ native speakers',
    region: 'Southeast Nigeria, diaspora',
    description: 'A tonal language with a deep proverb tradition. Chinua Achebe called proverbs "the palm oil with which words are eaten."',
    color: 'green',
    greeting: 'Nnoo',
    tagline: 'Where proverbs are the palm oil of speech.',
    proverbs: igboProverbs,
    proverbCategories: igboProverbCategories,
    lessons: igboLessons,
    lessonLevels: igboLessonLevels,
    scenarios: igboScenarios,
    features: {
      toneMarks: true,
      underdots: false,
      proverbDriven: true,
    },
  },
  korean: {
    id: 'korean',
    name: 'Korean',
    nativeName: 'Hangugeo',
    flag: 'KR',
    speakers: '80M+ speakers',
    region: 'South Korea, North Korea, diaspora',
    description: 'A language built on respect levels and Hangul, one of the most scientific writing systems ever created. K-culture made it global.',
    color: 'amber',
    greeting: 'Annyeonghaseyo',
    tagline: 'Honorifics, Hangul, and hallyu wave.',
    proverbs: koreanProverbs,
    proverbCategories: koreanProverbCategories,
    lessons: koreanLessons,
    lessonLevels: koreanLessonLevels,
    scenarios: koreanScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  mandarin: {
    id: 'mandarin',
    name: 'Mandarin Chinese',
    nativeName: 'Putonghua',
    flag: 'CN',
    speakers: '920M+ native speakers',
    region: 'China, Taiwan, Singapore, diaspora',
    description: 'The most spoken native language on Earth. Four tones, thousands of characters, and chengyu idioms that compress centuries of wisdom into four syllables.',
    color: 'green',
    greeting: 'Ni hao',
    tagline: 'Four tones. Four thousand years of wisdom.',
    proverbs: mandarinProverbs,
    proverbCategories: mandarinProverbCategories,
    lessons: mandarinLessons,
    lessonLevels: mandarinLessonLevels,
    scenarios: mandarinScenarios,
    features: {
      toneMarks: true,
      underdots: false,
      proverbDriven: true,
    },
  },
  pidgin: {
    id: 'pidgin',
    name: 'Nigerian Pidgin',
    nativeName: 'Naija',
    flag: 'NG',
    speakers: '75M+ speakers',
    region: 'Nigeria (nationwide), West Africa',
    description: 'The street language of Nigeria. English-based vocabulary with West African grammar. Connects all ethnic groups.',
    color: 'amber',
    greeting: 'How you dey?',
    tagline: 'The language of the streets. The voice of the people.',
    proverbs: pidginProverbs,
    proverbCategories: pidginProverbCategories,
    lessons: pidginLessons,
    lessonLevels: pidginLessonLevels,
    scenarios: pidginScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  portuguese: {
    id: 'portuguese',
    name: 'Portuguese',
    nativeName: 'Portugues',
    flag: 'BR',
    speakers: '260M+ speakers',
    region: 'Brazil, Portugal, Mozambique, Angola, diaspora',
    description: 'The language of saudade, samba, and six continents. Brazilian Portuguese carries a warmth and musicality that makes it one of the most expressive languages alive.',
    color: 'amber',
    greeting: 'Oi',
    tagline: 'Saudade, samba, and six continents.',
    proverbs: portugueseProverbs,
    proverbCategories: portugueseProverbCategories,
    lessons: portugueseLessons,
    lessonLevels: portugueseLessonLevels,
    scenarios: portugueseScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  spanish: {
    id: 'spanish',
    name: 'Spanish',
    nativeName: 'Espanol',
    flag: 'MX',
    speakers: '550M+ speakers',
    region: 'Latin America, Spain, US diaspora',
    description: 'The second most spoken native language on Earth. From refranes to reggaeton, Spanish carries the rhythm of an entire hemisphere.',
    color: 'amber',
    greeting: 'Hola',
    tagline: 'The language of two continents and a thousand refranes.',
    proverbs: spanishProverbs,
    proverbCategories: spanishProverbCategories,
    lessons: spanishLessons,
    lessonLevels: spanishLessonLevels,
    scenarios: spanishScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  swahili: {
    id: 'swahili',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    flag: 'KE',
    speakers: '100M+ speakers',
    region: 'East Africa (Kenya, Tanzania, Uganda, DRC)',
    description: 'The lingua franca of East Africa. Born from coastal trade and cultural exchange, spoken across an entire continent.',
    color: 'green',
    greeting: 'Habari',
    tagline: 'The bridge language of East Africa.',
    proverbs: swahiliProverbs,
    proverbCategories: swahiliProverbCategories,
    lessons: swahiliLessons,
    lessonLevels: swahiliLessonLevels,
    scenarios: swahiliScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  twi: {
    id: 'twi',
    name: 'Twi',
    nativeName: 'Akan Twi',
    flag: 'GH',
    speakers: '9M+ native speakers',
    region: 'Ghana (Ashanti, Eastern, Central regions)',
    description: 'The language of the Ashanti kingdom. Tied to Adinkra symbols, Ananse stories, and the kente cloth tradition.',
    color: 'amber',
    greeting: 'Maakye',
    tagline: 'Speak the language of the Ashanti.',
    proverbs: twiProverbs,
    proverbCategories: twiProverbCategories,
    lessons: twiLessons,
    lessonLevels: twiLessonLevels,
    scenarios: twiScenarios,
    features: {
      toneMarks: true,
      underdots: false,
      proverbDriven: true,
    },
  },
  urdu: {
    id: 'urdu',
    name: 'Urdu',
    nativeName: 'Urdu',
    flag: 'PK',
    speakers: '230M+ speakers',
    region: 'Pakistan, India, diaspora',
    description: 'A language of poetry, hospitality, and deep cultural identity. Carries the Mughal heritage and the warmth of chai culture.',
    color: 'green',
    greeting: 'Assalam-o-Alaikum',
    tagline: 'The language of poetry, chai, and mehmaan nawazi.',
    proverbs: urduProverbs,
    proverbCategories: urduProverbCategories,
    lessons: urduLessons,
    lessonLevels: urduLessonLevels,
    scenarios: urduScenarios,
    features: {
      toneMarks: false,
      underdots: false,
      proverbDriven: true,
    },
  },
  vietnamese: {
    id: 'vietnamese',
    name: 'Vietnamese',
    nativeName: 'Tieng Viet',
    flag: 'VN',
    speakers: '85M+ native speakers',
    region: 'Vietnam, diaspora (US, Australia, France)',
    description: 'A tonal language with six tones that can change the meaning of any syllable. Vietnamese culture runs on pho, proverbs, and deep family bonds.',
    color: 'amber',
    greeting: 'Xin chao',
    tagline: 'Six tones. One thousand years of proverbs.',
    proverbs: vietnameseProverbs,
    proverbCategories: vietnameseProverbCategories,
    lessons: vietnameseLessons,
    lessonLevels: vietnameseLessonLevels,
    scenarios: vietnameseScenarios,
    features: {
      toneMarks: true,
      underdots: false,
      proverbDriven: true,
    },
  },
  yoruba: {
    id: 'yoruba',
    name: 'Yoruba',
    nativeName: 'Ede Yoruba',
    flag: 'NG',
    speakers: '45M+ native speakers',
    region: 'West Africa (Nigeria, Benin, Togo)',
    description: 'A tonal language with a rich proverb tradition. Spoken across southwestern Nigeria and the global diaspora.',
    color: 'green',
    greeting: 'E kaabo',
    tagline: 'Learn the language. Carry the culture.',
    proverbs,
    proverbCategories,
    lessons,
    lessonLevels,
    scenarios,
    features: {
      toneMarks: true,
      underdots: true,
      proverbDriven: true,
    },
  },
}

// No more "coming soon" - all languages are now available
export const comingSoon = []

export const defaultLanguage = 'yoruba'
