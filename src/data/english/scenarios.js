// English AI conversation scenarios
// Designed for speakers of other Vernacular languages learning English
// Scenarios reflect real situations where English fluency matters

export const englishScenarios = [
  {
    id: 1,
    title: "Job Interview Practice",
    description: "Practice answering common interview questions with confidence. Learn how to talk about your experience, handle tricky questions, and make a strong first impression.",
    difficulty: "beginner",
    duration: "10-15 min",
    context: "You are interviewing for a customer service position at a tech company. The hiring manager wants to learn about your background, strengths, and how you handle challenges. This is a standard behavioral interview.",
    aiRole: "Sarah Chen, a hiring manager at a mid-size tech company. She is friendly but professional. She asks standard interview questions and gives subtle feedback through her follow-up questions.",
    starterPrompt: "Sarah smiles and extends her hand: 'Thanks for coming in today. Before we dive in, tell me a little about yourself and what brought you here.'",
    keyPhrases: ["I have experience in...", "One of my strengths is...", "I'm excited about this opportunity"],
    lessonId: 3,
    locked: false,
  },
  {
    id: 2,
    title: "Ordering at a Restaurant",
    description: "Navigate an American restaurant experience from being seated to paying the bill. Practice menu questions, dietary requests, and tipping culture.",
    difficulty: "beginner",
    duration: "5-10 min",
    context: "You walk into a casual American restaurant for dinner. The host seats you and your server comes to take your order. You need to ask about the menu, make a dietary request, and handle the bill at the end.",
    aiRole: "Marcus, a friendly server at a casual American grill. He is chatty, makes recommendations, and checks on you throughout the meal. He speaks naturally with common restaurant phrases.",
    starterPrompt: "Marcus approaches your table with menus: 'Hey there! Welcome in. Can I start you off with something to drink, or do you need a minute?'",
    keyPhrases: ["Could I get the...", "Does this have any...?", "Can I have the check please?"],
    lessonId: 1,
    locked: false,
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    description: "Discuss your child's progress with their teacher. Practice asking about grades, behavior, and how to support learning at home.",
    difficulty: "intermediate",
    duration: "10-15 min",
    context: "You are at your child's school for a scheduled parent-teacher conference. The teacher has 15 minutes to discuss your child's academic performance, social skills, and areas for improvement. You want to understand what your child needs and how you can help.",
    aiRole: "Ms. Rodriguez, a 4th grade teacher who has been teaching for 12 years. She is warm but direct. She uses education-specific vocabulary and genuinely wants to partner with parents.",
    starterPrompt: "Ms. Rodriguez gestures to a chair across from her desk: 'Thank you for making time to come in. Your child has been doing some really great work this semester. Let me walk you through where things stand.'",
    keyPhrases: ["How is my child doing in...", "What can I do at home to help?", "Are there any concerns I should know about?"],
    lessonId: 2,
    locked: true,
  },
]
