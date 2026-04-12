import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Lock, CheckCircle, BookOpen, ChevronRight } from 'lucide-react'
import { lessons, lessonLevels } from '../data/lessons'

function LessonCard({ lesson }) {
  const levelColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-amber-100 text-amber-700',
    advanced: 'bg-red-100 text-red-700',
  }

  return (
    <Link
      to={lesson.locked ? '#' : `/lessons/${lesson.id}`}
      className={`block bg-white rounded-2xl p-5 border transition-all no-underline ${
        lesson.locked
          ? 'border-gray-100 opacity-60 cursor-not-allowed'
          : 'border-gray-100 hover:border-green-200 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold ${levelColors[lesson.level]}`}>
          {lesson.level}
        </span>
        {lesson.locked ? (
          <Lock className="w-4 h-4 text-gray-400" />
        ) : lesson.completed ? (
          <CheckCircle className="w-4 h-4 text-green-600" />
        ) : null}
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-1">{lesson.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{lesson.subtitle}</p>
      <p className="text-xs text-gray-400 leading-relaxed mb-4">{lesson.description.slice(0, 100)}...</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Clock className="w-3.5 h-3.5" />
          {lesson.duration}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          {lesson.vocabulary.length} words
        </div>
      </div>
    </Link>
  )
}

export default function Lessons() {
  const [activeLevel, setActiveLevel] = useState('all')

  const filtered = activeLevel === 'all'
    ? lessons
    : lessons.filter((l) => l.level === activeLevel)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lessons</h1>
        <p className="text-gray-600">
          Each lesson anchors to Yoruba proverbs and real cultural context. Learn the language the way it lives.
        </p>
      </div>

      {/* Level filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveLevel('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeLevel === 'all'
              ? 'bg-green-700 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All Levels
        </button>
        {lessonLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => setActiveLevel(level.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeLevel === level.id
                ? 'bg-green-700 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No lessons at this level yet. More coming soon.</p>
        </div>
      )}
    </div>
  )
}
