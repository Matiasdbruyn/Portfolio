import { useEffect } from 'react'
import { IconClose, IconChevronLeft, IconChevronRight } from './Icons.jsx'

export default function Lightbox({ src, alt, onClose, onPrev, onNext, counter }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && onPrev) onPrev()
      if (event.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button className="lightbox-close" type="button" aria-label="Cerrar" onClick={onClose}>
        <IconClose />
      </button>
      {onPrev && (
        <button
          className="lightbox-nav lightbox-prev"
          type="button"
          aria-label="Certificado anterior"
          onClick={(event) => {
            event.stopPropagation()
            onPrev()
          }}
        >
          <IconChevronLeft />
        </button>
      )}
      <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
      {onNext && (
        <button
          className="lightbox-nav lightbox-next"
          type="button"
          aria-label="Siguiente certificado"
          onClick={(event) => {
            event.stopPropagation()
            onNext()
          }}
        >
          <IconChevronRight />
        </button>
      )}
      {counter && (
        <div className="lightbox-counter" onClick={(event) => event.stopPropagation()}>
          {counter}
        </div>
      )}
    </div>
  )
}
