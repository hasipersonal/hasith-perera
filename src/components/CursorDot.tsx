import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current
    if (!dot) return

    const xTo = gsap.quickTo(dot, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(dot, 'y', { duration: 0.5, ease: 'power3.out' })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const growTargets = 'a, button, [data-cursor="grow"]'
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(growTargets)) {
        gsap.to(dot, { scale: 2.6, duration: 0.3, ease: 'power2.out' })
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(growTargets)) {
        gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' })
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
      aria-hidden="true"
    />
  )
}
