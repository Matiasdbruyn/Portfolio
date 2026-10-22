import { useEffect, useState } from 'react'

export default function useRoleSwitcher(roles, intervalMs = 2800) {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
  }, [])

  useEffect(() => {
    if (reduceMotion || roles.length < 2) return undefined

    let swap
    const tick = setInterval(() => {
      setFading(true)
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
        setFading(false)
      }, 300)
    }, intervalMs)

    return () => {
      clearInterval(tick)
      clearTimeout(swap)
    }
  }, [reduceMotion, intervalMs, roles.length])

  if (reduceMotion) return { text: roles[0], fading: false }
  return { text: roles[index], fading }
}
