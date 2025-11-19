type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Activites = {
  title: string
  description: string
  content: string
  link1: string
  link2: string
  link3: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Quartz',
    description:
      'A Chrome extension that protects sensitive data in prompts and optimizes LLM calls.',
    link: 'https://github.com/kee5625/Quartz',
    image: '/quartz.png',
    id: 'project0',
  },  
  {
    name: 'Gravitas',
    description:
      'Space Biology Research Engine - A unique way to visualize and research data.',
    link: 'https://gravitas-4hgt.vercel.app/',
    image: '/gravitas.jpeg',
    id: 'project1',
  },
  {
    name: 'Phisherman',
    description: 'A Chrome Extension that detects potential phishing emails in Gmail and Outlook.',
    link: 'https://github.com/kee5625/Phisherman',
    image: '/phisherman.png',
    id: 'project2',
  },
  {
    name: 'FastQP',
    description: 'An adaptive query optimization engine using DuckDB.',
    link: 'https://github.com/kee5625/QP_fast',
    image: '/FastQP.png',
    id: 'project3',
  },
  {
    name: 'OrpheusAI',
    description: 'An AI/ML powered assistant for enhanced patient diagnosis.',
    link: 'https://github.com/kee5625/OrpheusAI',
    image: '/orpheusAI.png',
    id: 'project4',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Atech Training',
    title: 'Embedded Software Engineer',
    start: 'May',
    end: 'Aug 2025',
    link: '/experience/atech-training',
    id: 'work1',
  },
  {
    company: 'Motz Engineering',
    title: 'Software Developer Co-op',
    start: 'Aug',
    end: 'Dec 2024',
    link: '/experience/motz-engineering',
    id: 'work2',
  },
  {
    company: 'JODO',
    title: 'Software Developer',
    start: 'Jun',
    end: 'Jul 2023',
    link: '/experience/jodo',
    id: 'work3',
  },
]

export const ACTIVITIES: Activites[] = [
  {
    title: 'Web Dev Lead',
    description: 'RevolutionUC | one of the largest student hackathons in the midwest',
    link1: '',
    link2: '',
    link3: '',
    content: 'Core Lead for the web team at RevolutionUC, managing a team of 5 developers to build and revamp RevUC\'s website.',
    uid: 'activity-1',
  },
  {
    title: 'Hackathons',
    description:
      'Participated in 5+ hackathons and won 3 awards',
    link1: '',
    link2: '',
    link3: '',
    content: 'Most Inspirational Project +  Global Nominee at NASA Space Apps. Security Track Winner at MakeUC25. Participated in Calhacks.',
    uid: 'activity-2',
  },
  {
    title: 'Creative Interests',
    description:
      'My core interests outside building and classes',
    link1: '',
    link2: '',
    link3: '',
    content: 'I enjoy playing the piano and have been learning it for over 6 years now. I also spend my free time playing open-world, fps, and adventure games.',
    uid: 'activity-3',
  },
  {
    title: 'A little bit of this, and a little bit of that',
    description: 'A series of experiments.',
    link1: '',
    link2: '',
    link3: '',
    content: 'Sometimes, I like to try everything. So here\'s a list of everything I\'ve tried so far: mainstream sports, painting, sketching, hardware projects, blogging, woodworking, graphic design, hiking, 3D printing, and so much more.',
    uid: 'activity-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/kee5625',
  },
  {
    label: 'X',
    link: 'https://x.com/rachamka',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/karthikeya-rachamolla',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/_xkeex_/',
  },
]

export const EMAIL = 'rachamka@mail.uc.edu'
