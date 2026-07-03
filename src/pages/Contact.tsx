import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, Mail, MapPin, Phone, Loader2 } from 'lucide-react'

const info = [
  { icon: Mail, label: 'Email', value: 'vilochanahasith@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+94 71 41 40 708' },
  { icon: MapPin, label: 'Based in', value: 'Colombo, Sri Lanka' },
]

export default function Contact() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const successRef = useRef<HTMLDivElement | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    gsap.fromTo(
      rootRef.current.querySelectorAll('.contact-el'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.2 },
    )
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const formData = new FormData(e.currentTarget)

    formData.append("access_key", "65b7f84b-af3c-4878-b324-0e1dfadf7b5c")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        requestAnimationFrame(() => {
          if (successRef.current) {
            gsap.fromTo(
              successRef.current,
              { y: 12, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
            )
          }
        })
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={rootRef} className="container-page pb-24 pt-40 md:pt-48">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <p className="contact-el eyebrow mb-3">Get in touch</p>
          <h1 className="contact-el h-display text-5xl leading-[0.92] sm:text-6xl">
            Let&apos;s Build Something Seamless
          </h1>
          <p className="contact-el mt-6 max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
            Have a complex application to engineer, a design system to build, or a product idea you want to bring to life? Drop a message I typically respond within 24 hours.
          </p>

          <ul className="contact-el mt-10 space-y-5">
            {info.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-cloud">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-el card p-6 sm:p-10">
          {submitted ? (
            <div ref={successRef} className="flex flex-col items-start gap-3 py-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                <ArrowUpRight size={20} />
              </span>
              <h2 className="h-display text-3xl">Message Sent</h2>
              <p className="text-sm text-ink-soft">
                Thanks for reaching out — I&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-pill mt-4 text-sm"
                data-cursor="grow"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" disabled={isSubmitting} />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" disabled={isSubmitting} />
              </div>
              <Field label="Subject" name="subject" placeholder="Project inquiry" disabled={isSubmitting} />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  disabled={isSubmitting}
                  placeholder="Tell me a bit about your project..."
                  className="w-full rounded-2xl border border-mist bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent disabled:opacity-50"
                />
              </div>

              {errorMessage && (
                <p className="text-sm text-red-500 font-medium animate-pulse">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="btn-pill w-full sm:w-auto inline-flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none"
                data-cursor="grow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={16} className="ml-2 animate-spin" />
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  disabled,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  disabled?: boolean
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-2xl border border-mist bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent disabled:opacity-50"
      />
    </div>
  )
}