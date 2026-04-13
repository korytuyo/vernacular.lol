import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Volume2, BookOpen, MessageCircle } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getNativeText, getNativeNote } from '../lib/languageUtils'

export default function LessonDetail() {
  const { currentLanguage } = useLanguage()
  const { id } = useParams()
  const lesson = currentLanguage.lessons.find((l) => l.id === parseInt(id))

  if (!lesson) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500 dark:text-slate-400">Lesson not found.</p>
      </div>
    )
  }

  const linkedProverb = currentLanguage.proverbs.find((p) => p.id === lesson.proverbId)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Back */}
      <Link to="/lessons" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 mb-6 no-underline">
        <ArrowLeft className="w-4 h-4" />
        All Lessons
      </Link>

      {/* Header */}
      <div className="mb-8">
        <span className="inline-block px-2 py-0.5 rounded-md bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-semibold mb-3">
          {lesson.level}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{lesson.title}</h1>
        <p className="text-lg text-gray-500 dark:text-slate-400">{lesson.subtitle}</p>
      </div>

      {/* Description */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 mb-6">
        <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{lesson.description}</p>
      </div>

      {/* Linked proverb */}
      {linkedProverb && (
        <div className="bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800/50 mb-6">
          <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2">Lesson Proverb</p>
          <p className="text-base font-semibold text-gray-900 dark:text-white italic mb-2">"{getNativeText(linkedProverb)}"</p>
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">{linkedProverb.english}</p>
          <p className="text-xs text-gray-500 dark:text-slate-500 leading-relaxed">{linkedProverb.context}</p>
        </div>
      )}

      {/* Topics */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-green-700 dark:text-green-400" />
          What you'll learn
        </h2>
        <div className="space-y-2">
          {lesson.topics.map((topic, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-slate-700 last:border-0">
              <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700 dark:text-slate-300">{topic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Vocabulary</h2>
        <div className="space-y-3">
          {lesson.vocabulary.map((word, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 dark:border-slate-700 last:border-0">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{getNativeText(word)}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">{word.english}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 dark:text-slate-500 font-mono">{getNativeNote(word)}</span>
                <button className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 py-3 bg-green-700 dark:bg-green-600 text-white font-semibold rounded-xl hover:bg-green-800 dark:hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2">
          <BookOpen className="w-4 h-4" />
          Start Lesson
        </button>
        <Link
          to="/practice"
          className="flex-1 py-3 bg-white dark:bg-slate-800 text-green-700 dark:text-green-400 font-semibold rounded-xl border border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-sm flex items-center justify-center gap-2 no-underline"
        >
          <MessageCircle className="w-4 h-4" />
          Practice in Conversation
        </Link>
      </div>
    </div>
  )
}
