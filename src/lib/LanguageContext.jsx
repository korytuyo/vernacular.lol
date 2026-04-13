import { createContext, useContext, useState } from 'react'
import { languages, defaultLanguage } from '../data/languages'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [currentLanguageId, setCurrentLanguageId] = useState(defaultLanguage)

  const currentLanguage = languages[currentLanguageId]

  const switchLanguage = (langId) => {
    if (languages[langId]) {
      setCurrentLanguageId(langId)
    }
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      currentLanguageId,
      switchLanguage,
      allLanguages: languages,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
