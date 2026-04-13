// Utility to extract native-language text from data objects
// Each language stores its text under a different field name (yoruba, pidgin, igbo, etc.)
// This function checks all known fields and returns the first match.

const nativeFields = ['yoruba', 'pidgin', 'igbo', 'hausa', 'urdu', 'twi', 'swahili', 'amharic', 'english_text', 'spanish', 'french', 'korean', 'mandarin', 'cantonese', 'haitian', 'portuguese']

export function getNativeText(item) {
  if (!item) return ''
  for (const field of nativeFields) {
    if (item[field]) return item[field]
  }
  return ''
}

export function getNativeNote(item) {
  if (!item) return ''
  return item.tone || item.note || ''
}
