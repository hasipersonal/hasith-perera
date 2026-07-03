import { useRef } from 'react'
import gsap from 'gsap'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const knobRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    if (knobRef.current) {
      gsap.to(knobRef.current, {
        x: theme === 'light' ? 24 : 0,
        duration: 0.35,
        ease: 'power3.inOut',
      })
    }
    toggleTheme()
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle dark mode"
      data-cursor="grow"
      className="fixed bottom-6 left-1/2 z-50 flex h-9 w-16 -translate-x-1/2 items-center rounded-full border border-mist bg-cloud px-1 shadow-sm transition-colors"
    >
      <div
        ref={knobRef}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper shadow"
        style={{ transform: `translateX(${theme === 'dark' ? 24 : 0}px)` }}
      >
        {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
      </div>
    </button>
  )
}
