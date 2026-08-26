import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { IconChevronDown, IconAward } from './Icons.jsx'

// Para agregar cada certificado: poné el archivo en src/assets/certificados/ con
// este mismo nombre, descomentá su import acá abajo, y descomentá el campo
// "image" correspondiente en CERT_GROUPS (más abajo en este archivo).
// import tecnicoMultimediosCert from '../assets/certificados/tecnico-multimedios.jpg'
// import licenciaturaNutricionCert from '../assets/certificados/licenciatura-nutricion.jpg'
// import desarrolloWebCert from '../assets/certificados/desarrollo-web.jpg'
// import nutricionDeportivaCert from '../assets/certificados/nutricion-deportiva.jpg'
// import suplementacionCert from '../assets/certificados/suplementacion-deportiva.jpg'

// Orden cronológico (izquierda a derecha, por año de inicio).
const EDUCATION = [
  { title: 'Técnico en Multimedios', org: 'Colegio San Juan XXIII', dates: '2012 — 2018', state: 'Completado', category: 'ambos' },
  { title: 'Licenciatura en Nutrición', org: 'Universidad Isalud', dates: '2019 — 2025', state: 'Graduado', category: 'ambos' },
  { title: 'Desarrollo Web', org: 'Coderhouse', dates: '2022', state: 'Completado', category: 'dev' },
  { title: 'Desarrollo Web Full Stack', org: 'Coderhouse', dates: '2025 — actualidad', state: 'En curso', progress: true, category: 'dev' },
  { title: 'Nutrición Deportiva', org: 'FeDUA', dates: '2026', state: 'Completado', category: 'nutricion' },
  {
    title: 'Suplementación deportiva y ayudas ergogénicas',
    org: 'Suplementando conCiencia',
    dates: '2026',
    state: 'Completado',
    category: 'nutricion',
  },
]

const CERT_GROUPS = [
  {
    title: 'Carreras',
    items: [
      {
        title: 'Técnico en Multimedios',
        org: 'Colegio San Juan XXIII',
        dates: '2012 — 2018',
        alt: 'Certificado de Técnico en Multimedios',
        image: null, // image: tecnicoMultimediosCert,
        category: 'ambos',
      },
      {
        title: 'Licenciatura en Nutrición',
        org: 'Universidad Isalud',
        dates: '2019 — 2025',
        alt: 'Diploma de Licenciatura en Nutrición',
        image: null, // image: licenciaturaNutricionCert,
        category: 'ambos',
      },
    ],
  },
  {
    title: 'Cursos y certificaciones',
    items: [
      {
        title: 'Desarrollo Web',
        org: 'Coderhouse',
        dates: '2022',
        alt: 'Certificado de Desarrollo Web',
        image: null, // image: desarrolloWebCert,
        category: 'dev',
      },
      {
        title: 'Nutrición Deportiva',
        org: 'FeDUA',
        dates: '2026',
        alt: 'Certificado de Nutrición Deportiva',
        image: null, // image: nutricionDeportivaCert,
        category: 'nutricion',
      },
      {
        title: 'Suplementación deportiva y ayudas ergogénicas',
        org: 'Suplementando conCiencia',
        dates: '2026',
        alt: 'Certificado de Suplementación deportiva y ayudas ergogénicas',
        image: null, // image: suplementacionCert,
        category: 'nutricion',
      },
    ],
  },
]

function CertCard({ item }) {
  return (
    <article className={`cert-card cat-${item.category}`}>
      {item.image ? (
        <img src={item.image} alt={item.alt} />
      ) : (
        <div className="cert-image-slot" aria-hidden="true">
          <IconAward />
          <span>Espacio para el certificado</span>
        </div>
      )}
      <div className="cert-body">
        <h4>{item.title}</h4>
        <p className="cert-org">{item.org}</p>
        <p className="cert-date">{item.dates}</p>
      </div>
    </article>
  )
}

export default function Education() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const toggleRowRef = useReveal()

  const [certsOpen, setCertsOpen] = useState(false)
  const panelRef = useRef(null)

  // Recalcula la altura si la ventana cambia de tamaño, o si cambia el perfil activo
  // (algunas tarjetas se ocultan/muestran), mientras el panel está abierto.
  useEffect(() => {
    function recalcHeight() {
      if (certsOpen && panelRef.current) {
        panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`
      }
    }
    window.addEventListener('resize', recalcHeight)
    window.addEventListener('profile-change', recalcHeight)
    return () => {
      window.removeEventListener('resize', recalcHeight)
      window.removeEventListener('profile-change', recalcHeight)
    }
  }, [certsOpen])

  function handleTransitionEnd(event) {
    if (event.propertyName === 'max-height' && certsOpen && panelRef.current) {
      panelRef.current.style.maxHeight = 'none'
    }
  }

  function toggleCerts() {
    const panel = panelRef.current
    if (!panel) return
    const willOpen = !certsOpen
    setCertsOpen(willOpen)
    if (willOpen) {
      panel.style.maxHeight = `${panel.scrollHeight}px`
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`
      // eslint-disable-next-line no-unused-expressions
      panel.offsetHeight // fuerza reflow para que el colapso anime desde una altura fija
      requestAnimationFrame(() => {
        panel.style.maxHeight = '0px'
      })
    }
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
              <p className="edu-date">{edu.dates}</p>
            </div>
          ))}
        </div>

        <div className="cert-toggle-row reveal" ref={toggleRowRef}>
          <button
            className="cert-toggle"
            type="button"
            aria-expanded={certsOpen}
            aria-controls="certPanel"
            onClick={toggleCerts}
          >
            <span>Certificados</span>
            <IconChevronDown className="chev" />
          </button>
        </div>

        <div className="cert-panel" id="certPanel" ref={panelRef} onTransitionEnd={handleTransitionEnd}>
          <div className="cert-panel-inner">
            {CERT_GROUPS.map((group) => (
              <div className="cert-group" key={group.title}>
                <h3 className="cert-group-title">{group.title}</h3>
                <div className="cert-grid">
                  {group.items.map((item) => (
                    <CertCard item={item} key={item.title} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
