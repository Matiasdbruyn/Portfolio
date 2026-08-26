import { useEffect } from 'react'
import { IconClose } from './Icons.jsx'

// Overlay simple para mostrar una imagen en grande (certificados, capturas, etc.).
// Se cierra con la X, clickeando fuera de la imagen, o con Escape.
export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button className="lightbox-close" type="button" aria-label="Cerrar" onClick={onClose}>
        <IconClose />
      </button>
      <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
    </div>
  )
}
