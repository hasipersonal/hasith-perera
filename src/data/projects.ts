export interface Project {
  slug: string
  title: string
  category: string
  cover: string
  type: 'video' | 'image'
  description: string
}

export const projects: Project[] = [
  {
    slug: 'biselko-logistic-transport',
    title: 'Logistic & Transport Company - BISELKO',
    category: 'UI / UX Design',
    cover: '/assets/projects/biselko.png',
    description: 'UI/UX design I crafted for BISELKO, a modern logistics and transportation company. Ref - https://www.biselkoint.com/',
    type: "image"
  },
  {
    slug: 'srilankan-tours-website',
    title: 'Tourism Company – Sri Tours Lanka',
    category: 'Web Design',
    cover: '/assets/projects/travel.jpg',
    description: 'A clean, engaging booking platform for Sri Tours Lanka, engineered to showcase rich travel experiences across Sri Lanka and drive private tour bookings.',
    type: "image"
  },
  {
    slug: 'interactive-landing-page',
    title: 'Interactive Landing Page – Inspired by SPYLT',
    category: 'Frontend Development',
    cover: '/assets/projects/spylt.mp4',
    type: 'video',
    description:
      'An animation-driven React landing page built with GSAP and Tailwind CSS, focusing on smooth interactive storytelling and motion-rich visual flows.',
  },
  {
    slug: 'resumind',
    title: 'ResumeMind - AI Powered Resume Builder',
    category: 'Fullstack Development',
    cover: '/assets/projects/resumind.mp4',
    type: 'video',
    description:
      'An animation-driven React landing page built with GSAP and Tailwind CSS, focusing on smooth interactive storytelling and motion-rich visual flows.',
  },
  {
    slug: 'ecodaft',
    title: 'Artist Portfolio UI/UX Design – Echo Daft',
    category: 'UI / UX Design',
    cover: '/assets/projects/Eco Daft.webp',
    description: 'A dark, futuristic artist portfolio capturing the energy of the underground music scene through bold typography, immersive imagery, and a sleek, minimalist style.',
    type: "image"
  },
  {
    slug: 'sanirro-products',
    title: 'SANIRO Products - UI Design',
    category: 'UI / UX Design',
    cover: '/assets/projects/saniro.png',
    description: 'A high-density dashboard concept for Sri Lankas leading steel enterprise, engineered to manage extensive product lines, supply chains, and industrial manufacturing pipelines.',
    type: "image"
  },
  {
    slug: 'time-after-time',
    title: 'Time After Time - InCircle 24',
    category: 'UI / UX Design',
    cover: '/assets/projects/timeafter.webp',
    description: 'An all-in-one music platform providing comprehensive ecosystem solutions, from event management and audio production to artist management, publishing, and brand consultancy.',
    type: "image"
  },
]
