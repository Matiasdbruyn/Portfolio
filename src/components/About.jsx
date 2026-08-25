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
            Soy Licenciado en Nutrición y estoy en proceso de transición hacia el desarrollo web
            Full Stack. Mi formación clínica me dio método: observar, diagnosticar, plantear un
            plan y ajustarlo con datos. Hoy aplico esa misma lógica al código.
          </p>
          <p>
            Me adapto fácilmente al trabajo en equipo, soy autodidacta y estoy comprometido con la
            mejora continua. Mi paso por distintos entornos laborales, desde consultorios hasta
            mesas de ayuda técnica, me permitió desarrollar comunicación clara, organización y
            resolución de problemas bajo tiempos reales.
          </p>
          <div className="focus-pills">
            <span className="pill">Desarrollo Frontend</span>
            <span className="pill">Desarrollo Backend</span>
            <span className="pill">Nutrición Clínica</span>
            <span className="pill">Nutrición Deportiva</span>
          </div>
        </div>
      </div>
    </section>
  )
}
