import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { tools } from '../data/content'
import { useScrollReveal } from '../lib/useScrollReveal'
import CTASection from '../sections/CTASection'

export const timeline = [
  {
    year: '2019',
    title: 'Foundations in Tech',
    text: 'Began higher education in Information Technology, building core competencies in software development and interface structure.',
  },
  {
    year: '2022',
    title: 'Professional Dev Launch',
    text: 'Entered the industry full-time as a Junior Software Developer at Virtual System Solutions, building modular components and optimizing web performance.',
  },
  {
    year: '2023',
    title: 'Enterprise Engineering & Freelance',
    text: 'Joined Sampath IT Solutions to architect high-performance banking applications using Angular and React, while launching a freelance UI/UX and frontend practice.',
  },
  {
    year: '2026',
    title: 'Advanced Systems & Graduation',
    text: 'Completed a Bachelor of Information Technology from the University of Moratuwa - Sri Lanka, specializing in scaling enterprise design systems and complex product engineering.',
  },
]

export default function About() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const toolsRef = useScrollReveal('.tool-card', { y: 30, stagger: 0.08 })
  const timelineRef = useScrollReveal('.timeline-row', { y: 30, stagger: 0.1 })

  useEffect(() => {
    if (!heroRef.current) return
    gsap.fromTo(
      heroRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2 },
    )
  }, [])

  return (
    <>
      <section className="container-page pb-16 pt-40 md:pt-48">
        <div ref={heroRef} className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
          <div>
            <p className="eyebrow mb-3">About me</p>
            <h1 className="h-display text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
              I Build With Intention
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              I am a UI/UX designer and frontend developer focused on crafting highly interactive, user centric digital products. By bridging the gap between interface psychology and modular code architecture, I build scalable design systems and bring them to life using clean React and Angular frameworks.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-mist shadow-2xl">
            <img
              src="/assets/hero-image.webp"
              alt="Hasith Perera at work"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="eyebrow mb-3">Tools of the trade</p>
        <h2 className="h-display text-4xl md:text-5xl">What I Design With</h2>

        <div ref={toolsRef} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-card card p-6 transition-transform hover:-translate-y-1.5">
              <p className="h-display text-2xl">{tool.name}</p>
              <p className="mt-2 text-sm text-ink-soft">{tool.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <p className="eyebrow mb-3">The journey</p>
        <h2 className="h-display mb-10 text-4xl md:text-5xl">How I Got Here</h2>

        <div ref={timelineRef} className="divide-y divide-mist border-y border-mist">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="timeline-row grid grid-cols-[80px_1fr] gap-6 py-6 sm:grid-cols-[120px_1fr] sm:gap-10"
            >
              <p className="h-display text-2xl text-ink-soft sm:text-3xl">{item.year}</p>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 max-w-md text-sm text-ink-soft">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
