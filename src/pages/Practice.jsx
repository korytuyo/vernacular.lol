import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Lock, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

function ScenarioCard({ scenario }) {
  const difficultyColor = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400',
    intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400',
  }

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-2xl p-5 border transition-all ${
      scenario.locked
        ? 'border-gray-100 dark:border-slate-700 opacity-60'
        : 'border-gray-100 dark:border-slate-700 hover:border-green-200 dark:hover:border-green-800 hover:shadow-md'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold ${difficultyColor[scenario.difficulty]}`}>
          {scenario.difficulty}
        </span>
        {scenario.locked && <Lock className="w-4 h-4 text-gray-400 dark:text-slate-600" />}
      </div>

      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{scenario.title}</h3>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">{scenario.description}</p>

      <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-3 mb-4">
        <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold mb-1">YOU'LL TALK TO:</p>
        <p className="text-sm text-gray-700 dark:text-slate-300">{scenario.aiRole.split(',')[0]}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-slate-500">
          <Clock className="w-3.5 h-3.5" />
          {scenario.duration}
        </div>
        {!scenario.locked && (
          <Link
            to={`/practice/${scenario.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 no-underline"
          >
            Start
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Practice() {
  const { currentLanguage } = useLanguage()

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AI Conversation Practice</h1>
        <p className="text-gray-600 dark:text-slate-400">
          Practice {currentLanguage.name} in realistic scenarios with AI characters. Each conversation builds on your lessons.
        </p>
      </div>

      {/* Scenario grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentLanguage.scenarios.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
    </div>
  )
}
