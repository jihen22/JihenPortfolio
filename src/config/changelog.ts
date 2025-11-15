// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = "Check out the latest changes to this site."


// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2025-11-15',
    content: [
      {
        title: '🤖 AI Chatbot Integration & Enhanced UX',
        description: 'Added personalized AI chatbot that appears on page load with detailed responses about my background, skills, and experience. Implemented smooth animations (slide-up entrance, fade-in effects), realistic typing delays (1.5-2 seconds), and Web Audio API message sounds. Chatbot maintains state when closed and reopens with floating button. Personalized messaging style as if chatting directly with me.'
      },
    ]
  },
  {
    date: '2025-11-14',
    content: [
      {
        title: '✨ LinkedIn Posts Gradient Fade Effects',
        description: 'Added smooth gradient fade overlays (top and bottom) to the LinkedIn posts marquee section. Implemented theme-aware gradients that blend seamlessly with both light and dark modes using CSS variables. Ensures proper visual hierarchy and indicates scrollable content overflow.'
      },
    ]
  },
  {
    date: '2025-11-13',
    content: [
      {
        title: '🎨 Footer Layout Redesign',
        description: 'Restructured footer with improved two-column layout. Navigation links on left with copyright on right (top section), theme toggle on left with social links on right (middle section), and visit counter on left with respect message on right (bottom section). Fully responsive with proper spacing and alignment.'
      },
    ]
  },
  {
    date: '2025-11-12',
    content: [
      {
        title: '🌙 Dark Mode LinkedIn Posts Fix',
        description: 'Fixed dark mode display issues with LinkedIn post embeds. Implemented theme-aware container wrapper with proper background and border colors using CSS variables. Removed CSS filters that were distorting images and videos. Posts now render naturally with proper contrast in both light and dark modes.'
      },
    ]
  },
  {
    date: '2025-11-11',
    content: [
      {
        title: '💬 LinkedIn Posts Grid Styling',
        description: 'Enhanced grid layout for LinkedIn posts with improved spacing (gap-6), hover effects (scale-105 transform), shadow transitions, and rounded corners. Applied consistent styling patterns across both mobile grid and desktop marquee layouts.'
      },
    ]
  },
  {
    date: '2025-11-10',
    content: [
      {
        title: '🚀 Portfolio Project Started',
        description: 'Started working on portfolio website enhancements in November 2025. Focused on improving UI/UX, adding interactive features, and implementing modern animations and effects.'
      },
    ]
  }
]