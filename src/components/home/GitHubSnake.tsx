'use client'

import Image from 'next/image'

export default function GitHubSnake() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <Image
          src="/github-contribution-snake/github-contribution-grid-snake.svg"
          alt="GitHub contribution snake animation"
          width={1000}
          height={100}
          priority
        />
      </div>
      <div className='hidden dark:block'>
        <Image
          src="/github-contribution-snake/github-contribution-grid-snake-dark.svg"
          alt="GitHub contribution snake animation (dark mode)"
          width={1000}
          height={100}
          priority
        />
      </div>
    </div>
  )
}