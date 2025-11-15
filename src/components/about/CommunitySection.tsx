'use client'

import { CustomIcon } from '@/components/shared/CustomIcon'

export default function CommunitySection() {
  const activities = [
    {
      title: 'Night of Code 2024',
      description: 'Participated in the Night of Code 2024 coding challenge, contributing to the Race for Water initiative',
      icon: 'code',
      date: '2024'
    },
    {
      title: 'MTC Resolve',
      description: 'Active member of the MTC Resolve community, engaging in professional development and networking',
      icon: 'coffee',
      date: 'Ongoing'
    },
    {
      title: 'Tech Community Engagement',
      description: 'Regular participant in tech meetups, webinars, and professional development events',
      icon: 'bank',
      date: 'Ongoing'
    }
  ]

  return (
    <section className="py-12 border-t border-muted">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Community & Social Activity
        </h2>
        <p className="text-muted-foreground">
          Involvement in professional communities and social initiatives
        </p>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg border border-muted hover:border-primary/50 transition-colors"
          >
            <div className="flex-shrink-0 mt-1">
              <CustomIcon name={activity.icon} size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                </div>
                <span className="text-xs font-medium text-primary whitespace-nowrap">
                  {activity.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

