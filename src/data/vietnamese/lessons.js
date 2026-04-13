// Vietnamese Lessons for Vernacular Language Learning App
// Beginner lessons with cultural context and tone awareness

export const vietnameseLessons = [
  {
    id: 1,
    title: 'Chào Hỏi - Greetings and Respect',
    level: 'beginner',
    description: 'Master Vietnamese greetings, which change based on the age and status of the person you are speaking to. Vietnamese has no single word for "you" -- you must choose the right pronoun.',
    objectives: [
      'Learn age-based greeting pronouns (anh, chi, em, co, chu, bac, ong, ba)',
      'Understand the pronoun system that replaces "you" and "I"',
      'Practice greetings for different social situations',
      'Learn how to address elders with proper respect',
    ],
    vocabulary: [
      { vietnamese: 'Xin chào', english: 'Hello (formal)', tone: 'falling-rising + level' },
      { vietnamese: 'Chào anh', english: 'Hello (to older male)', tone: 'level + level' },
      { vietnamese: 'Chào chị', english: 'Hello (to older female)', tone: 'level + rising' },
      { vietnamese: 'Chào em', english: 'Hello (to younger person)', tone: 'level + level' },
      { vietnamese: 'Cảm ơn', english: 'Thank you', tone: 'falling + broken' },
      { vietnamese: 'Xin lỗi', english: 'Sorry / Excuse me', tone: 'falling-rising + rising-broken' },
      { vietnamese: 'Vâng', english: 'Yes (respectful)', tone: 'falling' },
      { vietnamese: 'Dạ', english: 'Yes (Southern, respectful)', tone: 'falling-rising' },
      { vietnamese: 'Không', english: 'No', tone: 'falling-rising' },
      { vietnamese: 'Tạm biệt', english: 'Goodbye', tone: 'rising + broken' },
    ],
    culturalNotes: [
      'Vietnamese does not use "you" and "I" the way English does. Instead, speakers choose kinship pronouns based on relative age and gender.',
      'Calling someone "anh" (older brother) or "chi" (older sister) even if they are strangers is standard polite behavior.',
      'Using the wrong pronoun can come across as disrespectful or overly familiar.',
    ],
  },
  {
    id: 2,
    title: 'Quán Ăn - Eating and Street Food Culture',
    level: 'beginner',
    description: 'Vietnamese food culture is central to daily life. Learn to order phở, bánh mì, and cà phê at street stalls and restaurants. Food is how Vietnamese people connect.',
    objectives: [
      'Order food and drinks at a street stall or restaurant',
      'Learn essential food vocabulary (phở, bánh mì, bún, cơm)',
      'Understand the role of fish sauce (nước mắm) and herbs in every meal',
      'Practice polite phrases for dining situations',
    ],
    vocabulary: [
      { vietnamese: 'Phở', english: 'Rice noodle soup', tone: 'falling-rising' },
      { vietnamese: 'Bánh mì', english: 'Vietnamese baguette sandwich', tone: 'falling + level' },
      { vietnamese: 'Cà phê sữa đá', english: 'Iced coffee with condensed milk', tone: 'level + falling-rising + falling-rising + falling-rising' },
      { vietnamese: 'Cơm', english: 'Rice / meal', tone: 'broken' },
      { vietnamese: 'Nước mắm', english: 'Fish sauce', tone: 'falling + falling' },
      { vietnamese: 'Ngon', english: 'Delicious', tone: 'level' },
      { vietnamese: 'Cho tôi', english: 'Give me / I would like', tone: 'level + falling-rising' },
      { vietnamese: 'Bao nhiêu tiền?', english: 'How much does it cost?', tone: 'falling-rising + falling-rising + level' },
      { vietnamese: 'Tính tiền', english: 'Check please / bill', tone: 'falling + level' },
      { vietnamese: 'Ăn cơm chưa?', english: 'Have you eaten yet? (common greeting)', tone: 'falling + broken + falling-rising' },
    ],
    culturalNotes: [
      '"Ăn cơm chưa?" (Have you eaten yet?) is one of the most common Vietnamese greetings. Food is so central that asking about meals replaces "How are you?"',
      'Street food is not cheap food in Vietnam -- it is the food. The best phở often comes from sidewalk stalls, not restaurants.',
      'Cà phê sữa đá (iced milk coffee) is a daily ritual. Vietnamese coffee culture uses a slow drip metal filter (phin) and sweetened condensed milk.',
    ],
  },
  {
    id: 3,
    title: 'Chợ và Mặc Cả - Market Bargaining',
    level: 'beginner',
    description: 'Navigate Vietnamese wet markets and shopping streets. Learn numbers, bargaining phrases, and the social dance of negotiation that is expected at traditional markets.',
    objectives: [
      'Count from 1-100 in Vietnamese',
      'Bargain politely at a market stall',
      'Ask for prices and negotiate',
      'Understand when bargaining is appropriate vs. fixed price',
    ],
    vocabulary: [
      { vietnamese: 'Một', english: 'One', tone: 'broken' },
      { vietnamese: 'Hai', english: 'Two', tone: 'level' },
      { vietnamese: 'Ba', english: 'Three', tone: 'level' },
      { vietnamese: 'Mười', english: 'Ten', tone: 'falling-rising' },
      { vietnamese: 'Trăm', english: 'Hundred', tone: 'falling' },
      { vietnamese: 'Nghìn / Ngàn', english: 'Thousand', tone: 'level / level' },
      { vietnamese: 'Đắt quá', english: 'Too expensive', tone: 'falling + falling-rising' },
      { vietnamese: 'Bớt đi', english: 'Reduce the price', tone: 'falling + level' },
      { vietnamese: 'Chợ', english: 'Market', tone: 'broken' },
      { vietnamese: 'Mua', english: 'Buy', tone: 'falling-rising' },
    ],
    culturalNotes: [
      'Bargaining is expected at wet markets and street vendors. Starting at 50-70% of the asking price is normal.',
      'Never bargain aggressively or lose your temper. The Vietnamese concept of "giu the dien" (saving face) applies to both buyer and seller.',
      'Supermarkets and modern shops have fixed prices. Bargaining there would be awkward.',
    ],
  },
]

export const vietnameseLessonLevels = ['beginner', 'intermediate']
