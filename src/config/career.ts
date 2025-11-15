
// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
    description?: string[]
    techStack?: string[]
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'AiLine',
      title: 'Full-Stack AI Developer Intern',
      image: '/images/images2/companies/ailinelogo.png',
      logo: 'briefcase',
      start: 'Jan 2025',
      end: 'Aug 2025',
      description: [
        'Developed AiLine Pro, an AI platform aligning organizational values using NLP analysis and ML recommendations',
        'Architected microservices solution with Domain-Driven Design and cloud-native Azure infrastructure',
        'Built interactive dashboards enabling C-level executives to monitor real-time engagement metrics',
        'Implemented Elasticsearch monitoring system and established CI/CD pipelines with Azure DevOps',
        'Led Agile/Scrum development across 2 releases and 5 sprints'
      ],
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Azure', 'NLP', 'ML', 'Elasticsearch', 'Docker', 'CI/CD']
    },
    {
      company: 'Enterprise eSolutions',
      title: 'Web Developer Intern',
      image: '/images/images2/companies/esolutions logo.png',
      logo: 'briefcase',
      start: 'Feb 2023',
      end: 'Jul 2023',
      description: [
        'Built intelligent Laravel CRUD generator with admin dashboard, reducing database setup time by 60%',
        'Automated code generation for 8-developer team, eliminating repetitive tasks',
        'Delivered comprehensive technical documentation for seamless knowledge transfer'
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'AJAX', 'Git']
    },
    {
      company: 'Compagnie des Phosphates de Gafsa (CPG)',
      title: 'Full Stack Developer Intern',
      image: '/images/images2/companies/cpg logo.png',
      logo: 'briefcase',
      start: 'Jun 2022',
      end: 'Sep 2022',
      description: [
        'Engineered enterprise employee management system with improved transaction tracking',
        'Streamlined purchasing workflows, saving 15+ staff hours monthly',
        'Developed RESTful APIs and responsive UI with Angular and Spring Boot'
      ],
      techStack: ['Angular', 'Spring Boot', 'MySQL', 'RESTful APIs', 'Karma', 'TypeScript']
    },
    {
      company: 'Microsoft Tech Club - ISIM Monastir',
      title: 'General Secretary',
      image: '/images/images2/companies/mtctechclubisimm.png',
      logo: 'briefcase',
      start: 'Oct 2021',
      end: 'May 2022',
      description: [
        'Coordinated multiple technical events, boosting student engagement by 40%',
        'Streamlined administrative operations and meeting documentation processes'
      ],
      techStack: []
    }
  ]