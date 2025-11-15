'use client'

import { CustomIcon } from '@/components/shared/CustomIcon'

export default function HobbiesSection() {
  const hobbies = [
    {
      title: 'Drawing',
      description: 'Creative expression through digital and traditional art',
      icon: 'coffee'
    },
    {
      title: 'Singing',
      description: 'Enjoying music and vocal expression as a form of relaxation',
      icon: 'coffee'
    },
    {
      title: 'Gym & Fitness',
      description: 'Regular exercise and maintaining a healthy lifestyle',
      icon: 'coffee'
    },
    {
      title: 'Sports',
      description: 'Participating in various sports and outdoor activities',
      icon: 'coffee'
    },
    {
      title: 'Open Source Contribution',
      description: 'Contributing to open-source projects and collaborating with the developer community',
      icon: 'github'
    },
    {
      title: 'Technology Exploration',
      description: 'Continuously learning and exploring new technologies, frameworks, and programming paradigms',
      icon: 'coffee'
    },
    {
      title: 'Problem Solving',
      description: 'Engaging in competitive coding challenges and algorithmic problem-solving',
      icon: 'pill'
    },
    {
      title: 'Collaborative Development',
      description: 'Working with talented teams to solve complex problems and deliver innovative solutions',
      icon: 'coffee'
    }
  ]

  return (
    <section className="py-12 border-t border-muted">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Hobbies & Interests
        </h2>
        <p className="text-muted-foreground">
          Passionate about innovation, excellence, and continuous learning
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg border border-muted hover:border-primary/50 transition-colors"
          >
            <div className="flex-shrink-0 mt-1">
              <CustomIcon name={hobby.icon} size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">
                {hobby.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

