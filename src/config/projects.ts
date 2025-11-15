// projects
export const projectHeadLine = "Open Source Projects"
export const projectIntro = "Check out my open-source projects below – where I turn coffee into code and bugs into features! 🚀 These showcase my expertise in full-stack development, AI/ML integration, cloud architecture, and DevOps. Feel free to explore, fork, and contribute!"

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects
  export const projects: Array<ProjectItemType> = [
    {
      name: 'My Portfolio Website',
      description:
        'Personal portfolio showcasing my projects, experience, and skills. Originally based on Corey Chiu\'s amazing template, I\'ve added extensive enhancements including AI-powered project descriptions, detailed work experience with tech stacks, side-by-side career/education layout, smooth animations, and personalized touches. It\'s funny to put your portfolio as a project in your portfolio, right? 😄',
      link: { href: 'https://github.com/iAmCorey/coreychiu-portfolio-template', label: 'View Template on GitHub' },
      category: ['Portfolio', 'Web'],
      techStack: ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'Framer Motion'],
      tags: ['Portfolio', 'Next.js', 'React', 'Web Design']
    },
    {
      name: 'AiLine Pro - AI-Powered Culture Platform',
      description:
        'Microservices platform using NLP and ML for organizational value alignment with real-time dashboards. Architected with Domain-Driven Design and cloud-native Azure infrastructure.',
      link: { href: 'https://github.com/jihen22/AilinePlateform', label: 'View on GitHub' },
      category: ['Platform', 'AI/ML'],
      techStack: ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Azure', 'NLP', 'ML', 'Docker', 'Elasticsearch'],
      tags: ['AI', 'Microservices', 'Cloud', 'NLP', 'ML']
    },
    {
      name: 'Automated Monetary Management DevOps Pipeline',
      description:
        'Full CI/CD pipeline with automated testing at every development stage for enterprise application. Demonstrates DevOps best practices and continuous integration.',
      link: { href: 'https://github.com/jihen22/Automated-MonetaryManagement-DevOps-Pipeline', label: 'View on GitHub' },
      category: ['DevOps', 'Pipeline'],
      techStack: ['Java', 'Jenkins', 'CI/CD', 'Automated Testing'],
      tags: ['DevOps', 'CI/CD', 'Jenkins', 'Automation']
    },
    {
      name: 'Advanced CRUD Generator with Laravel',
      description:
        'Intelligent code generator creating CRUD operations and admin interfaces from database schema. Reduced database setup time by 60% for development teams.',
      link: { href: 'https://github.com/jihen22/CRUDGenerator', label: 'View on GitHub' },
      category: ['Tool', 'Backend'],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'SCSS', 'Blade'],
      tags: ['Code Generation', 'Laravel', 'PHP', 'Productivity']
    },
    {
      name: 'Employee Manager Application (Full Stack)',
      description:
        'Full-stack system with Angular frontend, Spring Boot backend, and comprehensive testing suite. Engineered enterprise employee management with improved transaction tracking.',
      link: { href: 'https://github.com/jihen22/employeemanagerFront', label: 'View on GitHub' },
      category: ['Application', 'Full-Stack'],
      techStack: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'Karma', 'RESTful APIs'],
      tags: ['Full-Stack', 'Enterprise', 'Angular', 'Spring Boot']
    }
  ]
  
  export const githubProjects: Array<ProjectItemType> = []
