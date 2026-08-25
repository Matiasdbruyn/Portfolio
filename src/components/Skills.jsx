import useReveal from '../hooks/useReveal.js'

const SKILL_GROUPS = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'SASS / SCSS', 'JavaScript', 'React', 'Bootstrap'] },
  { title: 'Backend', items: ['Node.js / Express', 'MongoDB / Mongoose', 'API REST', 'WebSockets (Socket.io)'] },
  { title: 'Control de versiones', items: ['Git', 'GitHub'] },
  { title: 'Gestión', items: ['Jira', 'SharePoint', 'CMS'] },
  { title: 'Diseño', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere', 'Adobe Dreamweaver'] },
  { title: 'Otras herramientas', items: ['Microsoft Office'] },
]

export default function Skills() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const langRef = useReveal()

  return (
    <section id="habilidades">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Habilidades</p>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {SKILL_GROUPS.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lang-row reveal" ref={langRef}>
          <span className="k">Idioma</span>
          <span className="v">Inglés — Conocimientos básicos (lectura técnica)</span>
        </div>
      </div>
    </section>
  )
}
