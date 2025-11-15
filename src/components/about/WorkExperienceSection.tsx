'use client'

import { careerList } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'
import Image from 'next/image'

export default function WorkExperienceSection() {
  return (
    <section className="py-12 border-t border-muted">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Work Experience
        </h2>
        <p className="text-muted-foreground">
          Professional journey and career highlights
        </p>
      </div>

      <div className="space-y-6">
        {careerList.map((job, index) => (
          <div key={index} className="flex gap-4 pb-6 border-b border-muted last:border-b-0">
            <div className="flex-shrink-0 mt-1">
              {job.image ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Image
                    src={job.image}
                    alt={job.company}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <CustomIcon name="briefcase" size={20} />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {job.title}
              </h3>
              <p className="text-sm text-primary font-medium mt-1">
                {job.company}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {job.start} – {job.end}
              </p>
              {job.description && job.description.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.techStack && job.techStack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.techStack.map((tech, idx) => (
                    <span key={idx} className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

