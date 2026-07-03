import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  y?: number
  duration?: number
  stagger?: number
  delay?: number
  start?: string
}

/**
 * Fades + slides up direct children (or elements matching `selector`)
 * of the returned ref as they scroll into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  selector: string,
  options: RevealOptions = {},
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll(selector)
    if (!targets.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: options.y ?? 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.9,
          delay: options.delay ?? 0,
          stagger: options.stagger ?? 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 78%',
          },
        },
      )
    }, el)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector])

  return ref
}
