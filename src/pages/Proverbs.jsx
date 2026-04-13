import { useState } from 'react'
import { Search, Volume2, BookOpen } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getNativeText } from '../lib/languageUtils'

function ProverbCard({ proverb }) {
  const [expanded, setExpanded] = useState(false)

  const categoryColor = {
    wisdom: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    respect: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    perseverance: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    cooperation: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    courage: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    unity: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    spirituality: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    justice: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    empathy: 'bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
    patience: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    resilience: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
    humility: 'bg-lime-50 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400',
    work: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    perspective: 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 hover:border-green-200 dark:hover:border-green-800 transition-all">
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold capitalize ${categoryColor[proverb.category] || 'bg-gray-50 text-gray-700 dark:bg-slate-700 dark:text-slate-300'}`}>
          {proverb.category}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 dark:text-slate-500 capitalize">{proverb.difficulty}</span>
          <button className="w-7 h-7 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="text-base font-semibold text-gray-900 dark:text-white italic mb-2">
        "{getNativeText(proverb)}"
      </p>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">{proverb.english}</p>
      <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">Literal: {proverb.literal}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300"
      >
        {expanded ? 'Show less' : 'Cultural context'}
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-700">
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{proverb.context}</p>
        </div>
      )}
    </div>
  )
}

export default function Proverbs() {
  const { currentLanguage } = useLanguage()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = currentLanguage.proverbs.filter((p) => {
    const matchSearch = search === '' ||
      getNativeText(p).toLowerCase().includes(search.toLowerCase()) ||
      p.english.toLowerCase().includes(search.toLowerCase()) ||
      p.context.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === 'all' || p.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Proverb Library</h1>
        <p className="text-gray-600 dark:text-slate-400">
          Yoruba proverbs carry the wisdom of generations. Each one teaches language and life.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search proverbs by keyword..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-green-700 dark:bg-green-600 text-white'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
          }`}
        >
          All
        </button>
        {currentLanguage.proverbCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
              activeCategory === cat.id
                ? 'bg-green-700 dark:bg-green-600 text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Proverb grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((proverb) => (
          <ProverbCard key={proverb.id} proverb={proverb} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 text-gray-300 dark:text-slate-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-slate-400">No proverbs match your search. Try different keywords.</p>
        </div>
      )}
    </div>
  )
}
