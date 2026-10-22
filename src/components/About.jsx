import useReveal from '../hooks/useReveal.js'

export default function About() {
  const headRef = useReveal()
  const bodyRef = useReveal()

  return (
    <section id="perfil">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Sobre mí</p>
        </div>
        <div className="about-grid reveal" ref={bodyRef}>
          <p>
            Soy Licenciado en Nutrición y actualmente combino esa formación con el desarrollo web Full Stack. Mi trayectoria clínica me dio un método de trabajo: observar, diagnosticar, plantear un plan y ajustarlo con datos. Hoy aplico esa misma lógica al código.
          </p>
          <p>
            Me adapto fácilmente al trabajo en equipo, soy autodidacta y estoy comprometido con la mejora continua. Mi paso por distintos entornos laborales me permitió desarrollar comunicación clara, organización y resolución de problemas bajo tiempos reales.
          </p>
          <div className="focus-pills">
            <span className="pill cat-dev">Desarrollo Frontend</span>
            <span className="pill cat-dev">Desarrollo Backend</span>
            <span className="pill cat-nutricion">Nutrición Clínica</span>
            <span className="pill cat-nutricion">Nutrición Deportiva</span>
          </div>
        </div>
      </div>
    </section>
  )
}
