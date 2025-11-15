"use client"

import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function SocialLinks({ className }: { className?: string }) {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    return (
        <div className={cn("mt-6 flex items-center gap-2", className)}>
            {socialLinks.map((link) => (
                <div key={link.name} className="relative group">
                    <Link
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel="noreferrer"
                        aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <CustomIcon name={link.icon} />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                    {/* Tooltip */}
                    {hoveredLink === link.name && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded whitespace-nowrap pointer-events-none z-50">
                            Opens in new window 😄
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}