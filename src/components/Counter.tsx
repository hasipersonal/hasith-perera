import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CounterProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export default function Counter({ to, suffix = '', duration = 1.6, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: to,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${suffix}`
        },
      })
    }, el)

    return () => ctx.revert()
  }, [to, suffix, duration])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
