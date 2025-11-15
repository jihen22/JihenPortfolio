
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Higher Institute of Informatics and Mathematics of Monastir (ISIMM)',
      major: 'Professional Master\'s Degree in Software Engineering',
      image: '/images/images2/education/isimmlogo.png',
      logo: 'college',
      start: 'Sep 2023',
      end: 'Oct 2025'
    },
    {
      school: 'Higher Institute of Informatics and Mathematics of Monastir (ISIMM)',
      major: 'Bachelor\'s Degree in Software Engineering',
      image: '/images/images2/education/isimmlogo.png',
      logo: 'college',
      start: 'Sep 2020',
      end: 'Jul 2023'
    },
    {
      school: 'Universidad de Alcalá (UAH), Spain',
      major: 'Erasmus+ Summer School in Information Technology',
      image: '/images/images2/education/uah.jpg',
      logo: 'college',
      start: 'Jul 2022',
      end: 'Jul 2022'
    }
  ]