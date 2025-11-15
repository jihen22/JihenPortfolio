export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'
export * from './certifications'
export * from './languages'
export * from './linkedinArticles'
export * from './contact'


// personal info
export const name = 'Jihen Messaoud'
export const headline = 'Full-Stack Developer | AI-Driven Solutions & Cloud Innovation'
export const introduction = 'Results-driven Full-Stack Developer with expertise in AI-powered solutions and cloud architecture. Passionate about building scalable microservices and delivering enterprise-grade applications.'
export const email = 'jihenmessaoud992@gmail.com'
export const githubUsername = 'jihen22'

// about page
export const aboutMeHeadline = "I'm Jihen Messaoud, a Full-Stack Developer based in Gafsa, Tunisia."
export const aboutParagraphs = [
  "I'm a results-driven Full-Stack Developer with a passion for building AI-powered solutions and scalable cloud architectures. I hold a Professional Master's Degree in Software Engineering from ISIMM, where I specialized in AI-driven organizational solutions.",
  "Throughout my career, I've worked on diverse projects ranging from intelligent CRUD generators to enterprise-grade microservices platforms. My expertise spans full-stack development, cloud infrastructure (Azure, AWS), DevOps practices, and AI/ML integration.",
  "I'm deeply committed to continuous learning and innovation. I've earned multiple certifications in cloud architecture, AI solutions, and DevOps. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with talented teams to solve complex problems.",
  "I'm trying to stay consistent, but sometimes life gets in the way. You can check my GitHub profile if you are interested in seeing what I'm working on!"
]


// blog
export const blogHeadLine = "Insights on AI, Cloud Architecture & Full-Stack Development"
export const blogIntro = "Sharing my thoughts on AI-driven solutions, cloud innovation, DevOps practices, and modern software engineering."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/jihen22',
    external: true
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jihenme',
    external: true
  },
  {
    name: 'Email',
    icon: 'mail',
    href: 'mailto:jihenmessaoud992@gmail.com',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  // Languages
  "typescript",
  "javascript",
  "php",
  "python",
  "java",
  "cplusplus",
  "html5",
  "css3",
  "mysql", // Changed from "sql" - SQL is not a brand, using MySQL as representative
  // Frontend
  "angular",
  "react",
  "bootstrap",
  "jquery",
  // Backend
  "laravel",
  "springboot",
  "nodedotjs", // Changed from "nodejs"
  "express",
  // Databases
  "mysql",
  "postgresql",
  "mongodb",
  "elasticsearch",
  // DevOps & Cloud
  "docker",
  "kubernetes",
  "git",
  "github",
  "gitlab",
  "jenkins",
  "azure",
  "amazonaws",
  // AI & Data Science
  "tensorflow",
  "python", // for PySpark
  // Monitoring
  "prometheus",
  "grafana",
  // Tools
  "visualstudio",
  "intellijidea"
];
