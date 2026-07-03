import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AvailabilityBadge() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.45 },
    )
  }, [])

  return (
    <div
      ref={ref}
      className="fixed left-1/2 top-[86px] z-30 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-mist bg-paper/80 px-4 py-2 text-xs font-medium text-ink-soft shadow-sm backdrop-blur-md md:flex"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      Available for work
    </div>
  )
}
