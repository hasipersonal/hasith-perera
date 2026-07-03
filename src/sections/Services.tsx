import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AccordionItem } from '../components/Accordion'
import { services } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-copy > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
        },
      )
      gsap.fromTo(
        imgRef.current,
        { x: 60, opacity: 0, rotate: 4 },
        {
          x: 0,
          opacity: 1,
          rotate: -2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
        },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="container-page py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        <div>
          <div className="services-copy">
            <p className="eyebrow mb-3">What I offer</p>
            <h2 className="h-display text-4xl md:text-5xl">What I Can Do For You</h2>
            <p className="mt-4 max-w-sm text-sm text-ink-soft">
              Bridging the gap between design and engineering. I craft clean, intuitive user experiences and bring them to life with robust, responsive frontend code.
            </p>
          </div>

          <div className="mt-10">
            {services.map((service, i) => (
              <AccordionItem
                key={service.title}
                index={i + 1}
                question={service.title}
                answer={service.description}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
              />
            ))}
          </div>
        </div>

        <div ref={imgRef} className="mx-auto w-full max-w-md [transform-style:preserve-3d] md:mt-8">
          <div className="overflow-hidden rounded-[2rem] border border-mist shadow-2xl">
            <img
              src="/assets/service-image.png"
              alt="Designer's creative desk setup"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
