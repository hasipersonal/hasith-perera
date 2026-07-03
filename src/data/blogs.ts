export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  cover: string
}

export const blogs: BlogPost[] = [
  {
    slug: 'scaling-design-systems-enterprise',
    title: 'Scaling Design Systems for Enterprise Applications',
    excerpt:
      'How to bridge the gap between Figma variables and modular frontend components to maintain strict UI consistency across large-scale dashboards.',
    category: 'Design Systems',
    date: 'Jun 12, 2026',
    readTime: '6 min read',
    cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'optimizing-angular-performance-high-volume-data',
    title: 'Optimizing Frontend Architecture for Financial Dashboards',
    excerpt:
      'Practical strategies for asset compression, lazy loading, and state management optimization to keep real-time data views ultra-responsive.',
    category: 'Engineering',
    date: 'May 28, 2026',
    readTime: '5 min read',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'purposeful-motion-micro-interactions',
    title: 'Motion with Intent: Designing Frictionless Micro-Interactions',
    excerpt:
      'Why the best UI animations are invisible until you feel them—a tactical guide to leveraging functional motion to guide user behavior.',
    category: 'UI/UX Design',
    date: 'May 09, 2026',
    readTime: '7 min read',
    cover: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'ux-psychology-enterprise-software',
    title: 'Interface Psychology in High-Density Software Systems',
    excerpt:
      'Mapping complex enterprise workflows into intuitive, minimalist digital dashboards that lower cognitive load and decrease training times.',
    category: 'UX Psychology',
    date: 'Apr 22, 2026',
    readTime: '4 min read',
    cover: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  },
]