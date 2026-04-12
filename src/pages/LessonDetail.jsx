import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Volume2, BookOpen, MessageCircle } from 'lucide-react'
import { lessons } from '../data/lessons'
import { proverbs } from '../data/proverbs'

export default function LessonDetail() {
  const { id } = useParams()
  const lesson = lessons.find((l) => l.id === parseInt(id))

  if (!lesson) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500">Lesson not found.</p>
      </div>
    )
  }

  const linkedProverb = proverbs.find((p) => p.id === lesson.proverbId)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Back */}
      <Link to="/lessons" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 mb-6 no-underline">
        <ArrowLeft className="w-4 h-4" />
        All Lessons
      </Link>

      {/* Header */}
      <div className="mb-8">
        <span className="inline-block px-2 py-0.5 rounded-md bg-green-100 text-green-700 text-xs font-semibold mb-3">
          {lesson.level}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
        <p className="text-lg text-gray-500">{lesson.subtitle}</p>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
        <p className="text-gray-700 leading-relaxed">{lesson.description}</p>
      </div>

      {/* Linked proverb */}
      {linkedProverb && (
        <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 border border-green-100 mb-6">
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">Lesson Proverb</p>
          <p className="text-base font-semibold text-gray-900 italic mb-2">"{linkedProverb.yoruba}"</p>
          <p className="text-sm text-gray-600 mb-3">{linkedProverb.english}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{linkedProverb.context}</p>
        </div>
      )}

      {/* Topics */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-green-700" />
          What you'll learn
        </h2>
        <div className="space-y-2">
          {lesson.topics.map((topic, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700">{topic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Vocabulary</h2>
        <div className="space-y-3">
          {lesson.vocabulary.map((word, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div>
                <p className="font-semibold text-gray-900">{word.yoruba}</p>
                <p className="text-sm text-gray-500">{word.english}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-mono">{word.tone}</span>
                <button className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center hover:bg-green-100 transition-colors">
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors text-sm flex items-center justify-center gap-2">
          <BookOpen className="w-4 h-4" />
          Start Lesson
        </button>
        <Link
          to="/practice"
          className="flex-1 py-3 bg-white text-green-700 font-semibold rounded-xl border border-green-200 hover:bg-green-50 transition-colors text-sm flex items-center justify-center gap-2 no-underline"
        >
          <MessageCircle className="w-4 h-4" />
          Practice in Conversation
        </Link>
      </div>
    </div>
  )
}
