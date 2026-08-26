import useReveal from '../hooks/useReveal.js'

const JOBS = [
  {
    role: 'Pasantía Diseño y Comunicación',
    org: 'Incucai',
    dates: '2018 — 2019',
    category: 'dev',
    bullets: ['Diseño de contenido digital para redes sociales.', 'Desarrollo de piezas gráficas.'],
  },
  {
    role: 'Capacitador de Sistema',
    org: 'Bymovi',
    dates: '2022 — 2023',
    category: 'dev',
    bullets: [
      'Implementación y soporte técnico del sistema.',
      'Coordinación entre equipo técnico y usuarios finales.',
      'Capacitación a usuarios.',
    ],
  },
  {
    role: 'Prácticas Comunitarias',
    org: 'Centro de Personas Mayores',
    dates: '2024',
    category: 'nutricion',
    bullets: [
      'Charlas educativas sobre nutrición para adultos mayores.',
      'Dinámicas lúdicas para refuerzo de contenidos.',
    ],
  },
  {
    role: 'Prácticas Hospitalarias',
    org: 'Hospital R. Gutiérrez',
    dates: '2025',
    category: 'nutricion',
    bullets: [
      'Elaboración de planillas de alimentación para pacientes.',
      'Presentación de casos clínicos en ateneos hospitalarios.',
    ],
  },
  {
    role: 'Maquetador CMS',
    org: 'Evirtual',
    dates: '2023',
    category: 'dev',
    current: true,
    bullets: [
      'Gestión y resolución de tickets a través de Jira, respetando tiempos estimados.',
      'Maquetación y publicación de contenidos en Ibexa CMS.',
      'Administración y actualización de contenidos en SharePoint.',
      'Maquetación web con HTML y Adobe Dreamweaver.',
    ],
  },
]

export default function Experience() {
  const headRef = useReveal()
  const timelineRef = useReveal()

  return (
    <section id="experiencia">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Experiencia laboral</p>
        </div>

        <div className="timeline reveal" ref={timelineRef}>
          {JOBS.map((job) => (
            <div key={job.role} className={`t-item cat-${job.category}${job.current ? ' current' : ''}`}>
              <div className="t-head">
                <h3>{job.role}</h3>
                <span className="t-date">{job.dates}</span>
                {job.current && <span className="badge">Actual</span>}
              </div>
              <p className="t-org">{job.org}</p>
              <ul className="t-list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
