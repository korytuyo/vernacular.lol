import { Link } from 'react-router-dom'
import { BookOpen, MessageCircle, Flame, Trophy, ArrowRight, Clock, Star } from 'lucide-react'
import { lessons } from '../data/lessons'
import { proverbs } from '../data/proverbs'
import { scenarios } from '../data/scenarios'

function StatCard({ icon, label, value, color }) {
  const colorMap = {
    green: 'bg-green-50 text-green-700',
    amber: 'bg-amber-50 text-amber-700',
    blue: 'bg-blue-50 text-blue-700',
    purple: 'bg-purple-50 text-purple-700',
  }

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className={`w-10 h-10 rounded-xl ${colorMap[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}

export default function Dashboard() {
  // Demo data (will be replaced with Supabase queries)
  const stats = {
    streak: 3,
    lessonsCompleted: 2,
    proverbsLearned: 5,
    conversationMinutes: 12,
  }

  const todayProverb = proverbs[Math.floor(Math.random() * proverbs.length)]
  const nextLesson = lessons.find((l) => !l.completed && !l.locked) || lessons[0]
  const suggestedScenario = scenarios.find((s) => !s.locked) || scenarios[0]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">E kaabo, Learner</h1>
        <p className="text-gray-600">Welcome back. Keep building your Yoruba foundation.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Flame className="w-5 h-5" />}
          label="Day streak"
          value={stats.streak}
          color="amber"
        />
        <StatCard
          icon={<BookOpen className="w-5 h-5" />}
          label="Lessons done"
          value={`${stats.lessonsCompleted}/${lessons.length}`}
          color="green"
        />
        <StatCard
          icon={<Star className="w-5 h-5" />}
          label="Proverbs learned"
          value={stats.proverbsLearned}
          color="purple"
        />
        <StatCard
          icon={<Clock className="w-5 h-5" />}
          label="Practice minutes"
          value={stats.conversationMinutes}
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily proverb */}
        <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 border border-green-100">
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-3">Today's Proverb</p>
          <p className="text-lg font-semibold text-gray-900 italic mb-2">
            "{todayProverb.yoruba}"
          </p>
          <p className="text-sm text-gray-600 mb-3">{todayProverb.english}</p>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">{todayProverb.context}</p>
          <Link
            to="/proverbs"
            className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-800 no-underline"
          >
            Explore all proverbs
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          {/* Continue lesson */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Continue Learning</p>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{nextLesson.title}</h3>
            <p className="text-xs text-gray-500 mb-3">{nextLesson.subtitle}</p>
            <Link
              to={`/lessons/${nextLesson.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-800 no-underline"
            >
              Continue
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Practice suggestion */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Practice Speaking</p>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{suggestedScenario.title}</h3>
            <p className="text-xs text-gray-500 mb-3">{suggestedScenario.description.slice(0, 60)}...</p>
            <Link
              to={`/practice/${suggestedScenario.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-800 no-underline"
            >
              Start conversation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
