import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const imgWrapRef = useRef<HTMLDivElement | null>(null)
  const hiRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
        .fromTo(
          '.hero-word-left',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.6,
        )
        .fromTo(
          imgWrapRef.current,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 },
          0.7,
        )
        .fromTo(
          '.hero-word-right',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.8,
        )
        .fromTo('.hero-copy', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1)
        .fromTo(
          hiRef.current,
          { scale: 0, opacity: 0, rotate: -20 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.8)' },
          1.1,
        )

      // idle float loop for the "Hi" bubble
      gsap.to(hiRef.current, {
        y: -8,
        duration: 1.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = imgWrapRef.current
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(wrap, {
      rotateY: px * 10,
      rotateX: -py * 10,
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(imgWrapRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'power3.out' })
  }

  return (
    <section ref={rootRef} className="container-page pb-20 pt-40 md:pt-48">
      <p className="hero-eyebrow eyebrow text-center md:text-left">Hasith Perera</p>

      <div className="mt-4 grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <h1 className="hero-word-left h-display text-center text-[16vw] leading-none md:text-left md:text-[6.2vw]">
          UI/UX
        </h1>

        <div
          ref={imgWrapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto w-[70vw] max-w-[340px] [transform-style:preserve-3d]"
        >
          <div className="overflow-hidden rounded-[2rem] border border-mist bg-cloud shadow-2xl">
            <img
              src="/assets/hero-image.png"
              alt="Hasith Perera, ui/ux designer"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            ref={hiRef}
            data-cursor="grow"
            className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white shadow-xl"
          >
            Hi
          </div>
        </div>

        <h1 className="hero-word-right h-display text-center text-[16vw] leading-none md:text-right md:text-[6.2vw]">
          Designer
        </h1>
      </div>

      <div className="hero-copy mt-10 flex flex-col items-center gap-6 text-center md:mt-6 md:flex-row md:items-end md:justify-between md:text-left">
        <p className="max-w-xs text-sm leading-relaxed text-ink-soft md:ml-auto">
          I&apos;m a Sri Lanka based UI/UX designer and Frontend developer, crafting meaningful, user-centred
          digital experiences.
        </p>
        <a href="/contact" className="btn-pill group" data-cursor="grow">
          Let&apos;s talk
          <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
