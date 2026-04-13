import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { useLanguage } from '../../lib/LanguageContext'

export default function LanguageSwitcher() {
  const { currentLanguage, allLanguages, switchLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  const colorMap = {
    green: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800',
    amber: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-800',
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${colorMap[currentLanguage.color]}`}
      >
        <span>{currentLanguage.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-lg z-50 overflow-hidden">
            <div className="p-2">
              <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Choose a language</p>
              {Object.values(allLanguages).map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => { switchLanguage(lang.id); setOpen(false) }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{lang.name}</p>
                      {lang.id === currentLanguage.id && (
                        <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-slate-400">{lang.nativeName} - {lang.speakers}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
