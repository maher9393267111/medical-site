'use client'

import { useLanguageContext } from './languageContext'
import dictionary from '../data/directory.json'

export const useTranslation = () => {
  const { language } = useLanguageContext()

  const translation = dictionary[language] || {}

  return {
    translation,
    language,
  }
}