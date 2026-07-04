import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  'aria-label'?: string
}

/**
 * LazyVideo — only starts loading/playing the video once it enters the viewport.
 * This prevents large MP4 files from downloading on page load when they're off-screen.
 */
export default function LazyVideo({ src, className, 'aria-label': ariaLabel }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }, // Start loading 200px before it enters view
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      controls={false}
      className={className}
      aria-label={ariaLabel}
    />
  )
}
