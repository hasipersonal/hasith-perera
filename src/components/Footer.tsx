import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hasith-perera-543172200/', target: '_blank' },
  { label: 'Dribble', href: 'https://dribbble.com/hasithperera', target: '_blank' },
  { label: 'Facebook', href: 'https://www.facebook.com/hasitha.perera.71697', target: '_blank' },
  { label: 'Instagram', href: 'https://www.instagram.com/hasiii.perera/', target: '_blank' },
]

const explore = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-mist bg-cloud">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="h-display text-3xl">Hasith Perera</p>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              I&apos;m a Sri Lanka based UI/UX designer and Frontend developer, crafting meaningful, user-centred
              digital experiences.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {explore.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.target}
                    className="group inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-mist pt-6 text-xs text-ink-soft md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Hasith Perera. All rights reserved.</p>
          <p>Based in 🇱🇰 Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
