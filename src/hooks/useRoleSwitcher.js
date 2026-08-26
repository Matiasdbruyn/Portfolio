import { useEffect, useState } from 'react'

const ROLES = ['Desarrollador Web Full Stack', 'Licenciado en Nutrición', 'Maquetador CMS']
const STATIC_TEXT = 'Desarrollador Web Full Stack · Lic. en Nutrición'

export default function useRoleSwitcher(intervalMs = 2800) {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined

    const tick = setInterval(() => {
      setFading(true)
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length)
        setFading(false)
      }, 300)
      return () => clearTimeout(swap)
    }, intervalMs)

    return () => clearInterval(tick)
  }, [reduceMotion, intervalMs])

  if (reduceMotion) return { text: STATIC_TEXT, fading: false }
  return { text: ROLES[index], fading }
}
