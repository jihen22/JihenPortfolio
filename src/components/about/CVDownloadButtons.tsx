'use client'

import { useState } from 'react'
import { CustomIcon } from '@/components/shared/CustomIcon'

export default function CVDownloadButtons() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = (filename: string, displayName: string) => {
    setDownloading(filename)
    
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = `/cv/${filename}`
    link.download = displayName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Reset downloading state after a short delay
    setTimeout(() => setDownloading(null), 1000)
  }

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => handleDownload('janescv15november2025.pdf', 'Jihen_Messaoud_CV_English.pdf')}
        disabled={downloading !== null}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        <CustomIcon name="download" size={18} />
        {downloading === 'janescv15november2025.pdf' ? 'Downloading...' : 'Download CV (English)'}
      </button>
      
      <button
        onClick={() => handleDownload('janescvfrenchver.pdf', 'Jihen_Messaoud_CV_Francais.pdf')}
        disabled={downloading !== null}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        <CustomIcon name="download" size={18} />
        {downloading === 'janescvfrenchver.pdf' ? 'Downloading...' : 'Download CV (Français)'}
      </button>
    </div>
  )
}

