import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import Lightbox from './Lightbox.jsx'
import certBackend from '../assets/certificados/full-stack-backend.jpg'
import certReact from '../assets/certificados/full-stack-react.jpg'
import certNutricionDeportiva from '../assets/certificados/nutricion-deportiva.jpg'
import certDesarrolloWeb2022 from '../assets/certificados/desarrollo-web-2022.jpg'
import certFullStackDesarrolloWeb from '../assets/certificados/full-stack-desarrollo-web.jpg'
import certFullStackJavascript from '../assets/certificados/full-stack-javascript.jpg'
import certSuplementacion from '../assets/certificados/suplementacion-deportiva.jpg'

const EDUCATION = [
  {
    title: 'Técnico en Multimedios',
    org: 'Colegio San Juan XXIII',
    dates: '2012 — 2018',
    state: 'Completado',
    category: 'ambos',
  },
  {
    title: 'Licenciatura en Nutrición',
    org: 'Universidad Isalud',
    dates: '2019 — 2025',
    state: 'Graduado',
    category: 'ambos',
  },
  {
    title: 'Desarrollo Web',
    org: 'Coderhouse',
    dates: '2022',
    state: 'Completado',
    category: 'dev',
    certs: [{ src: certDesarrolloWeb2022, alt: 'Certificado de Desarrollo Web' }],
  },
  {
    title: 'Desarrollo Web Full Stack',
    org: 'Coderhouse',
    dates: '2025 — actualidad',
    state: 'En curso',
    progress: true,
    category: 'dev',
    certs: [
      { src: certFullStackDesarrolloWeb, alt: 'Certificado de Desarrollo Web — Desarrollo Web Full Stack' },
      { src: certFullStackJavascript, alt: 'Certificado de Javascript — Desarrollo Web Full Stack' },
      { src: certReact, alt: 'Certificado de React JS — Desarrollo Web Full Stack' },
      { src: certBackend, alt: 'Certificado de Programación Backend I — Desarrollo Web Full Stack' },
    ],
  },
  {
    title: 'Nutrición Deportiva',
    org: 'FeDUA',
    dates: '2026',
    state: 'Completado',
    category: 'nutricion',
    certs: [{ src: certNutricionDeportiva, alt: 'Certificado de Nutrición Deportiva' }],
  },
  {
    title: 'Suplementación deportiva y ayudas ergogénicas',
    org: 'Suplementando conCiencia',
    dates: '2026',
    state: 'Completado',
    category: 'nutricion',
    certs: [{ src: certSuplementacion, alt: 'Certificado de Suplementación deportiva y ayudas ergogénicas' }],
  },
]

export default function Education() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const [gallery, setGallery] = useState(null)

  function openCerts(certs) {
    if (!certs.length) return
    setGallery({ images: certs, index: 0 })
  }

  function closeGallery() {
    setGallery(null)
  }

  function prevCert() {
    setGallery((g) => g && { ...g, index: (g.index - 1 + g.images.length) % g.images.length })
  }

  function nextCert() {
    setGallery((g) => g && { ...g, index: (g.index + 1) % g.images.length })
  }

  return (
    <section id="formacion">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Formación académica</p>
        </div>

        <div className="edu-grid reveal" ref={gridRef}>
          {EDUCATION.map((edu) => (
            <div className={`edu-card cat-${edu.category}`} key={edu.title}>
              <div className="edu-top">
                <h3>{edu.title}</h3>
                <span className={`badge${edu.progress ? ' state-progress' : ''}`}>{edu.state}</span>
              </div>
              <p className="edu-org">{edu.org}</p>
              <div className="edu-bottom">
                <span className="edu-date">{edu.dates}</span>
                {'certs' in edu && (
                  <button
                    className="cert-btn"
                    type="button"
                    disabled={edu.certs.length === 0}
                    title={edu.certs.length === 0 ? 'Certificado próximamente' : undefined}
                    onClick={() => openCerts(edu.certs)}
                  >
                    Certificado
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {gallery && (
        <Lightbox
          src={gallery.images[gallery.index].src}
          alt={gallery.images[gallery.index].alt}
          onClose={closeGallery}
          onPrev={gallery.images.length > 1 ? prevCert : undefined}
          onNext={gallery.images.length > 1 ? nextCert : undefined}
          counter={gallery.images.length > 1 ? `${gallery.index + 1} / ${gallery.images.length}` : null}
        />
      )}
    </section>
  )
}
