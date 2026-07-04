import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blogs' },
]

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.15 },
    )
  }, [])

  return (
    <header className="fixed inset-x-0 top-5 z-40 flex justify-center px-4">
      <div
        ref={navRef}
        className="flex w-full max-w-xl items-center justify-between gap-2 rounded-full border border-mist bg-paper/80 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
      >
        {/* <NavLink to="/" className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3" data-cursor="grow">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
            DR
          </span>
        </NavLink> */}
        <NavLink to="/" className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3" data-cursor="grow">
          <img
            src="/assets/icon.webp"
            alt="Hasith Perera Logo"
            className="h-8 w-8 rounded-full object-cover bg-cloud border border-mist flex-none"
          />
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-cursor="grow"
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn-pill hidden !px-5 !py-2 text-sm md:inline-flex" data-cursor="grow">
          Contact
        </NavLink>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 w-[calc(100%-2rem)] max-w-xl rounded-3xl border border-mist bg-paper p-4 shadow-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-cloud"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-pill mt-2 !py-2.5 text-sm"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
