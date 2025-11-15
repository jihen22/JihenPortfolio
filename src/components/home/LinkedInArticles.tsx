'use client'

import { linkedinArticles, linkedinProfile } from '@/config/infoConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { ChevronRightIcon, ExternalLinkIcon, ThumbsUpIcon, MessageCircleIcon, ShareIcon } from 'lucide-react'

export default function LinkedInArticles() {
  return (
    <div className="flex flex-col gap-6">
      {linkedinArticles.map((article, index) => (
        <Link
          key={index}
          href={article.url || '#'}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <article className="flex flex-col gap-3 p-4 rounded-lg border border-muted hover:border-primary/50 hover:bg-muted/50 transition-all duration-200">
            {/* Header with icon and category */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                {article.icon && (
                  <div className="mt-1 flex-shrink-0 p-2 rounded-full bg-primary/10">
                    <CustomIcon name={article.icon} size={20} />
                  </div>
                )}
                <div className="flex-1">
                  {article.category && (
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {article.category}
                    </p>
                  )}
                </div>
              </div>
              <ExternalLinkIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-muted-foreground" />
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>

            {/* Description */}
            {article.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {article.description}
              </p>
            )}

            {/* Date */}
            {article.date && (
              <p className="text-xs text-muted-foreground">
                {article.date}
              </p>
            )}

            {/* Engagement indicators */}
            <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-1">
                <ThumbsUpIcon className="h-3 w-3" />
                <span>Like</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircleIcon className="h-3 w-3" />
                <span>Comment</span>
              </div>
              <div className="flex items-center gap-1">
                <ShareIcon className="h-3 w-3" />
                <span>Share</span>
              </div>
            </div>
          </article>
        </Link>
      ))}

      {/* View all link */}
      <Link
        href={linkedinProfile.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors font-semibold text-sm mt-4"
      >
        <CustomIcon name="linkedin" size={18} />
        View all posts on LinkedIn
        <ChevronRightIcon className="h-4 w-4 stroke-current" />
      </Link>
    </div>
  )
}

