import { Link } from 'react-router-dom'
import { BookOpen, MessageCircle, Flame, ArrowRight, Clock, Star, Brain, AlertTriangle, TrendingUp } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import Ijapa from '../components/mascot/Ijapa'
import { getNativeText } from '../lib/languageUtils'

function StatCard({ icon, label, value, color }) {
  const colorMap = {
    green: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    purple: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700">
      <div className={`w-10 h-10 rounded-xl ${colorMap[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-sm text-gray-500 dark:text-slate-400">{label}</p>
    </div>
  )
}

export default function Dashboard() {
  const { currentLanguage } = useLanguage()

  const stats = {
    streak: 3,
    lessonsCompleted: 2,
    proverbsLearned: 5,
    conversationMinutes: 12,
  }

  const memoryInsights = {
    recentMistakes: [
      { category: 'tone', description: 'Dropping low tone on greetings', count: 3, words: ['Ẹ kàárọ̀', 'Ẹ kàásán'] },
      { category: 'underdot', description: 'Missing underdot on ọ and ẹ', count: 2, words: ['ọmọ', 'ẹbí'] },
    ],
    strengths: [
      'Strong greeting vocabulary from Lesson 1',
      'Good conversational flow in market scenarios',
    ],
    lastSession: {
      title: 'Greeting an Elder',
      date: '2 days ago',
      score: 3,
      summary: 'Practiced greetings with Mama Adunni. Good effort on prostration vocabulary. Tone marks need reinforcement.',
    },
    vocabularyStats: {
      mastered: 8,
      learning: 12,
      struggling: 3,
    },
  }

  const todayProverb = currentLanguage.proverbs[Math.floor(Math.random() * currentLanguage.proverbs.length)]
  const nextLesson = currentLanguage.lessons.find((l) => !l.completed && !l.locked) || currentLanguage.lessons[0]
  const suggestedScenario = currentLanguage.scenarios.find((s) => !s.locked) || currentLanguage.scenarios[0]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{currentLanguage.greeting}, Learner</h1>
        <p className="text-gray-600 dark:text-slate-400">Welcome back. Keep building your language foundation.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Flame className="w-5 h-5" />} label="Day streak" value={stats.streak} color="amber" />
        <StatCard icon={<BookOpen className="w-5 h-5" />} label="Lessons done" value={`${stats.lessonsCompleted}/${currentLanguage.lessons.length}`} color="green" />
        <StatCard icon={<Star className="w-5 h-5" />} label="Proverbs learned" value={stats.proverbsLearned} color="purple" />
        <StatCard icon={<Clock className="w-5 h-5" />} label="Practice minutes" value={stats.conversationMinutes} color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Daily proverb */}
        <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800/50">
          <div className="flex items-start gap-4">
            <Ijapa expression="resting" size={56} className="shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-3">Ijapa says...</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white italic mb-2">
                "{getNativeText(todayProverb)}"
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">{todayProverb.english}</p>
              <p className="text-xs text-gray-500 dark:text-slate-500 leading-relaxed mb-4">{todayProverb.context}</p>
              <Link
                to="/proverbs"
                className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 no-underline"
              >
                Explore all proverbs
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700">
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Continue Learning</p>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{nextLesson.title}</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">{nextLesson.subtitle}</p>
            <Link
              to={`/lessons/${nextLesson.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 no-underline"
            >
              Continue
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700">
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Practice Speaking</p>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{suggestedScenario.title}</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">{suggestedScenario.description.slice(0, 60)}...</p>
            <Link
              to={`/practice/${suggestedScenario.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 no-underline"
            >
              Start conversation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Memory Insights Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Ijapa expression="encouraging" size={44} />
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Ijapa's Notes</h2>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Your tortoise tutor tracks your progress and remembers every session.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Vocabulary progress */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-green-700 dark:text-green-400" />
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Vocabulary Progress</p>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-slate-400">Mastered</span>
                <span className="font-semibold text-green-700 dark:text-green-400">{memoryInsights.vocabularyStats.mastered}</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: `${(memoryInsights.vocabularyStats.mastered / 23) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-slate-400">Learning</span>
                <span className="font-semibold text-amber-600 dark:text-amber-400">{memoryInsights.vocabularyStats.learning}</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full">
                <div className="h-2 bg-amber-400 rounded-full" style={{ width: `${(memoryInsights.vocabularyStats.learning / 23) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-slate-400">Needs work</span>
                <span className="font-semibold text-red-600 dark:text-red-400">{memoryInsights.vocabularyStats.struggling}</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full">
                <div className="h-2 bg-red-400 rounded-full" style={{ width: `${(memoryInsights.vocabularyStats.struggling / 23) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Areas to improve */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Focus Areas</p>
          </div>
          <div className="space-y-3">
            {memoryInsights.recentMistakes.map((mistake, i) => (
              <div key={i} className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase">{mistake.category}</span>
                  <span className="text-xs text-amber-500 dark:text-amber-500">{mistake.count}x</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-slate-300">{mistake.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {mistake.words.map((word, j) => (
                    <span key={j} className="text-xs bg-white dark:bg-slate-800 px-2 py-0.5 rounded text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last session recap */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Last Session</p>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{memoryInsights.lastSession.title}</h3>
          <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{memoryInsights.lastSession.date}</p>
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-3">{memoryInsights.lastSession.summary}</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full ${
                  i <= memoryInsights.lastSession.score ? 'bg-green-500' : 'bg-gray-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Strengths */}
          <div className="mt-4 pt-3 border-t border-gray-50 dark:border-slate-700">
            <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold mb-2">YOUR STRENGTHS</p>
            {memoryInsights.strengths.map((s, i) => (
              <p key={i} className="text-xs text-green-700 dark:text-green-400 flex items-start gap-1.5 mb-1">
                <span className="text-green-500 mt-px">+</span> {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
