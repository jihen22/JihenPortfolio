'use client'

import { educationList } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'
import Image from 'next/image'

export default function EducationSection() {
  return (
    <section className="py-12 border-t border-muted">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Education
        </h2>
        <p className="text-muted-foreground">
          Academic background and qualifications
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <div key={index} className="flex gap-4 pb-6 border-b border-muted last:border-b-0">
            <div className="flex-shrink-0 mt-1">
              {edu.image ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <CustomIcon name="college" size={20} />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {edu.major}
              </h3>
              <p className="text-sm text-primary font-medium mt-1">
                {edu.school}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {edu.start} – {edu.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

