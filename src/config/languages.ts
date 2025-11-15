// languages
export type LanguageType = {
  name: string
  proficiency: 'Native' | 'Bilingual' | 'Fluent' | 'Intermediate' | 'Elementary' | 'Limited Working'
  level: number // 0-100 for visual representation
}

export const languagesHeadLine = "Languages"
export const languagesIntro = "Multilingual professional with strong communication skills across multiple languages."

export const languages: Array<LanguageType> = [
  {
    name: 'Arabic',
    proficiency: 'Native',
    level: 100
  },
  {
    name: 'English',
    proficiency: 'Bilingual',
    level: 95
  },
  {
    name: 'French',
    proficiency: 'Bilingual',
    level: 95
  },
  {
    name: 'German',
    proficiency: 'Elementary',
    level: 40
  },
  {
    name: 'Spanish',
    proficiency: 'Limited Working',
    level: 30
  }
]

