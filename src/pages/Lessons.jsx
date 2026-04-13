import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Lock, CheckCircle, BookOpen, ChevronRight } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

function LessonCard({ lesson }) {
  const levelColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400',
    intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400',
  }

  return (
    <Link
      to={lesson.locked ? '#' : `/lessons/${lesson.id}`}
      className={`block bg-white dark:bg-slate-800 rounded-2xl p-5 border transition-all no-underline ${
        lesson.locked
          ? 'border-gray-100 dark:border-slate-700 opacity-60 cursor-not-allowed'
          : 'border-gray-100 dark:border-slate-700 hover:border-green-200 dark:hover:border-green-800 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold ${levelColors[lesson.level]}`}>
          {lesson.level}
        </span>
        {lesson.locked ? (
          <Lock className="w-4 h-4 text-gray-400 dark:text-slate-600" />
        ) : lesson.completed ? (
          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
        ) : null}
      </div>

      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{lesson.title}</h3>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">{lesson.subtitle}</p>
      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mb-4">{lesson.description.slice(0, 100)}...</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-slate-500">
          <Clock className="w-3.5 h-3.5" />
          {lesson.duration}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-slate-500">
          {lesson.vocabulary.length} words
        </div>
      </div>
    </Link>
  )
}

export default function Lessons() {
  const { currentLanguage } = useLanguage()
  const [activeLevel, setActiveLevel] = useState('all')

  const filtered = activeLevel === 'all'
    ? currentLanguage.lessons
    : currentLanguage.lessons.filter((l) => l.level === activeLevel)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Lessons</h1>
        <p className="text-gray-600 dark:text-slate-400">
          Each lesson anchors to {currentLanguage.name} proverbs and real cultural context. Learn the language the way it lives.
        </p>
      </div>

      {/* Level filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveLevel('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeLevel === 'all'
              ? 'bg-green-700 dark:bg-green-600 text-white'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
          }`}
        >
          All Levels
        </button>
        {currentLanguage.lessonLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => setActiveLevel(level.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeLevel === level.id
                ? 'bg-green-700 dark:bg-green-600 text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>

      {/* Lesson grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 text-gray-300 dark:text-slate-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-slate-400">No lessons at this level yet. More coming soon.</p>
        </div>
      )}
    </div>
  )
}
