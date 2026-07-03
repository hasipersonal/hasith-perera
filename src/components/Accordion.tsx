import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Plus } from 'lucide-react'

interface AccordionItemProps {
  index: number
  question: string
  answer: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({ index, question, answer, isOpen, onToggle }: AccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const iconRef = useRef<HTMLDivElement | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const body = bodyRef.current
    const icon = iconRef.current
    if (!body || !icon) return

    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.set(body, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
      })
      gsap.set(icon, { rotate: isOpen ? 45 : 0 })
      return
    }
    gsap.killTweensOf([body, icon])

    if (isOpen) {
      gsap.set(body, { visibility: 'visible' })
      gsap.to(body, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out',
      })

      gsap.to(icon, {
        rotate: 45,
        duration: 0.45,
        ease: 'back.out(1.7)',
      })
    } else {
      gsap.to(body, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(body, { visibility: 'hidden' })
        },
      })

      gsap.to(icon, {
        rotate: 0,
        duration: 0.4,
        ease: 'power3.out',
      })
    }
  }, [isOpen])

  return (
    <div className="border-b border-mist py-5">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left group"
        data-cursor="grow"
        aria-expanded={isOpen}
      >
        <span className="h-display text-lg md:text-xl transition-colors duration-300 group-hover:text-ink/80">
          {String(index).padStart(2, '0')}. {question}
        </span>
        <div
          ref={iconRef}
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cloud text-ink transition-colors duration-300 group-hover:bg-cloud-dark"
        >
          <Plus size={16} className="stroke-[2.5]" />
        </div>
      </button>

      <div ref={bodyRef} className="overflow-hidden style={{ forklift-friendly-layout }}">
        <p className="max-w-xl pb-4 pt-3 text-sm leading-relaxed text-ink-soft">
          {answer}
        </p>
      </div>
    </div>
  )
}