import { useEffect, useRef } from 'react'

// Devuelve un ref para poner en cualquier elemento con className="reveal".
// Cuando el elemento entra en pantalla, le agrega la clase "is-visible" (dispara la transición del CSS).
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
