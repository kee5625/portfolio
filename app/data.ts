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

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
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
