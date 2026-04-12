import { useState } from 'react'
import { Search, Volume2, BookOpen } from 'lucide-react'
import { proverbs, proverbCategories } from '../data/proverbs'

function ProverbCard({ proverb }) {
  const [expanded, setExpanded] = useState(false)

  const categoryColor = {
    wisdom: 'bg-amber-50 text-amber-700',
    respect: 'bg-purple-50 text-purple-700',
    perseverance: 'bg-blue-50 text-blue-700',
    cooperation: 'bg-green-50 text-green-700',
    courage: 'bg-red-50 text-red-700',
    unity: 'bg-teal-50 text-teal-700',
    spirituality: 'bg-indigo-50 text-indigo-700',
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 transition-all">
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold capitalize ${categoryColor[proverb.category]}`}>
          {proverb.category}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 capitalize">{proverb.difficulty}</span>
          <button className="w-7 h-7 rounded-full bg-green-50 text-green-700 flex items-center justify-center hover:bg-green-100 transition-colors">
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="text-base font-semibold text-gray-900 italic mb-2">
        "{proverb.yoruba}"
      </p>
      <p className="text-sm text-gray-600 mb-1">{proverb.english}</p>
      <p className="text-xs text-gray-400 mb-4">Literal: {proverb.literal}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-green-700 font-semibold hover:text-green-800"
      >
        {expanded ? 'Show less' : 'Cultural context'}
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{proverb.context}</p>
        </div>
      )}
    </div>
  )
}

export default function Proverbs() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = proverbs.filter((p) => {
    const matchSearch = search === '' ||
      p.yoruba.toLowerCase().includes(search.toLowerCase()) ||
      p.english.toLowerCase().includes(search.toLowerCase()) ||
      p.context.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === 'all' || p.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Proverb Library</h1>
        <p className="text-gray-600">
          Yoruba proverbs carry the wisdom of generations. Each one teaches language and life.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search proverbs by keyword..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-green-700 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {proverbCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
              activeCategory === cat.id
                ? 'bg-green-700 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No proverbs match your search. Try different keywords.</p>
        </div>
      )}
    </div>
  )
}
