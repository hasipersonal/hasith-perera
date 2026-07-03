import { useEffect } from 'react'
import gsap from 'gsap'

/**
 * Runs `callback` inside a gsap.context so all tweens/ScrollTriggers created
 * inside it are automatically cleaned up when deps change or the component unmounts.
 */
export function useGSAP(callback: () => void, deps: unknown[] = []) {
  useEffect(() => {
    const ctx = gsap.context(callback)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
