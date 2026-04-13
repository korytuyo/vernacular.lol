import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-400 dark:text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-6 h-6 text-green-500 dark:text-green-400" />
              <span className="text-lg font-bold text-white">Vernacular</span>
            </div>
            <p className="text-xs font-medium text-green-500 dark:text-green-400 tracking-widest uppercase mb-2">
              Learning Out Loud
            </p>
            <p className="text-sm leading-relaxed">
              Learn languages through culture. Master the words, the wisdom, and the way of life.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Learn</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/lessons" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">Lessons</Link></li>
              <li><Link to="/proverbs" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">Proverb Library</Link></li>
              <li><Link to="/practice" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">AI Practice</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><a href="#" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">About</a></li>
              <li><a href="#" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><a href="#" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-green-400 transition-colors no-underline text-gray-400 dark:text-slate-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">2026 Vernacular (vernacular.lol). Good Fela Holdings LLC. All rights reserved.</p>
          <p className="text-xs italic">"Owe lesin oro" - Proverbs are the horses of speech</p>
        </div>
      </div>
    </footer>
  )
}
