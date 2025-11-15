'use client'

import { certifications, certificationsHeadLine, certificationsIntro } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'

export default function CertificationsSection() {
  return (
    <section className="py-12 border-t border-muted">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          {certificationsHeadLine}
        </h2>
        <p className="text-muted-foreground">
          {certificationsIntro}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg border border-muted hover:border-primary/50 transition-colors"
          >
            {cert.icon && (
              <div className="flex-shrink-0 mt-1">
                <CustomIcon name={cert.icon} size={24} />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm leading-tight">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-muted-foreground">
                {cert.date}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline mt-2 inline-block"
                >
                  View Credential →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

