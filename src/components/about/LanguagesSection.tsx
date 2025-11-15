'use client'

import { languages } from '@/config/infoConfig'

export default function LanguagesSection() {
  return (
    <section className="py-12 border-t border-muted">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Languages
        </h2>
        <p className="text-muted-foreground">
          Multilingual proficiency across multiple languages
        </p>
      </div>
      
      <div className="space-y-6">
        {languages.map((lang, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {lang.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang.proficiency}
                </p>
              </div>
              <span className="text-sm font-medium text-primary">
                {lang.level}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary/70 h-full rounded-full transition-all duration-500"
                style={{ width: `${lang.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

