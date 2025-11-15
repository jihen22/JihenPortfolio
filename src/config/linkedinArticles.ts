// LinkedIn Articles & Posts
export type LinkedInArticleType = {
  title: string
  description: string
  date?: string
  url?: string
  category?: string
  icon?: string
}

export const linkedinArticlesHeadLine = "Articles & Insights"
export const linkedinArticlesIntro = "Sharing my thoughts on AI-driven solutions, cloud innovation, DevOps practices, and modern software engineering on LinkedIn."

export const linkedinProfile = {
  name: 'Jihen Messaoud',
  url: 'https://www.linkedin.com/in/jihenme',
  headline: 'Full-Stack Developer | AI-Driven Solutions & Cloud Innovation'
}

// Featured LinkedIn articles/posts
export const linkedinArticles: Array<LinkedInArticleType> = [
  {
    title: 'Learning AI is Not Hard - Breaking Down the Myths',
    description: 'Demystifying artificial intelligence and showing how anyone can start their AI journey with the right approach and mindset.',
    category: 'AI/ML',
    icon: 'brain',
    url: 'https://www.linkedin.com/posts/jihenme_people-think-learning-ai-is-hard-its-not-activity-7394401258029338624-ToDN'
  },
  {
    title: 'AI Innovation in HR Tech & Machine Learning',
    description: 'Exploring how AI and machine learning are revolutionizing human resources technology and organizational processes.',
    category: 'AI/ML',
    icon: 'brain',
    url: 'https://www.linkedin.com/posts/jihenme_aiinnovation-hrtech-machinelearning-activity-7393759875106779136-K1sC'
  },
  {
    title: 'Master\'s Degree in Software Engineering & AI',
    description: 'Reflecting on my journey completing a Master\'s degree in Software Engineering with a focus on Artificial Intelligence solutions.',
    category: 'Education',
    icon: 'college',
    url: 'https://www.linkedin.com/posts/jihenme_mastersdegree-softwareengineering-artificialintelligence-activity-7390142104540286977-5rRP'
  },
  {
    title: 'TOEIC English Proficiency Achievement',
    description: 'Celebrating language proficiency milestones and the importance of continuous learning in professional development.',
    category: 'Languages',
    icon: 'coffee',
    url: 'https://www.linkedin.com/posts/jihenme_toeic-englishproficiency-languageskills-activity-7329141001980133376-BfNx'
  },
  {
    title: 'Night of Code 2024 - Coding Challenge',
    description: 'Participating in the Night of Code 2024 challenge and contributing to the Race for Water initiative through competitive coding.',
    category: 'Community',
    icon: 'code',
    url: 'https://www.linkedin.com/posts/jihenme_nightofcode2024-raceforwater-codingchallenge-activity-7271994541686018050-TEka'
  }
]

