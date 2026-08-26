import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import Lightbox from './Lightbox.jsx'

// Para agregar cada certificado: poné el archivo en src/assets/certificados/ con
// este mismo nombre, descomentá su import acá abajo, y descomentá el campo
// "cert" correspondiente en EDUCATION (más abajo en este archivo). El botón
// "Certificado" de esa tarjeta se activa solo y lo abre en grande al tocarlo.
// import tecnicoMultimediosCert from '../assets/certificados/tecnico-multimedios.jpg'
// import licenciaturaNutricionCert from '../assets/certificados/licenciatura-nutricion.jpg'
// import desarrolloWebCert from '../assets/certificados/desarrollo-web.jpg'
// import nutricionDeportivaCert from '../assets/certificados/nutricion-deportiva.jpg'
// import suplementacionCert from '../assets/certificados/suplementacion-deportiva.jpg'

// Orden cronológico (izquierda a derecha, por año de inicio).
// "cert" queda undefined en lo que todavía está en curso (no tiene certificado de finalización).
const EDUCATION = [
  {
    title: 'Técnico en Multimedios',
    org: 'Colegio San Juan XXIII',
    dates: '2012 — 2018',
    state: 'Completado',
    category: 'ambos',
    cert: null, // cert: tecnicoMultimediosCert,
  },
  {
    title: 'Licenciatura en Nutrición',
    org: 'Universidad Isalud',
    dates: '2019 — 2025',
    state: 'Graduado',
    category: 'ambos',
    cert: null, // cert: licenciaturaNutricionCert,
  },
  {
    title: 'Desarrollo Web',
    org: 'Coderhouse',
    dates: '2022',
    state: 'Completado',
    category: 'dev',
    cert: null, // cert: desarrolloWebCert,
  },
  {
    title: 'Desarrollo Web Full Stack',
    org: 'Coderhouse',
    dates: '2025 — actualidad',
    state: 'En curso',
    progress: true,
    category: 'dev',
    // Sin "cert": todavía no hay certificado de un curso en curso.
  },
  {
    title: 'Nutrición Deportiva',
    org: 'FeDUA',
    dates: '2026',
    state: 'Completado',
    category: 'nutricion',
    cert: null, // cert: nutricionDeportivaCert,
  },
  {
    title: 'Suplementación deportiva y ayudas ergogénicas',
    org: 'Suplementando conCiencia',
    dates: '2026',
    state: 'Completado',
    category: 'nutricion',
    cert: null, // cert: suplementacionCert,
  },
]

export default function Education() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const [openCert, setOpenCert] = useState(null)

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
                {'cert' in edu && (
                  <button
                    className="cert-btn"
                    type="button"
                    disabled={!edu.cert}
                    title={edu.cert ? undefined : 'Certificado próximamente'}
                    onClick={() => setOpenCert(edu)}
                  >
                    Certificado
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openCert && (
        <Lightbox src={openCert.cert} alt={`Certificado de ${openCert.title}`} onClose={() => setOpenCert(null)} />
      )}
    </section>
  )
}
