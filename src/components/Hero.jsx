import useRoleSwitcher from '../hooks/useRoleSwitcher.js'
import photo from '../assets/yo.jpg'

export default function Hero() {
  const { text, fading } = useRoleSwitcher()

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Portfolio · Buenos Aires, Argentina</p>
          <h1>
            Matias <em>De&nbsp;Bruyn</em>
          </h1>
          <p className={`role-line${fading ? ' fading' : ''}`}>{text}</p>
          <p className="lede">
            Licenciado en Nutrición en transición hacia el desarrollo Full Stack. Combino una
            formación clínica rigurosa con habilidades técnicas de programación para abordar cada
            proyecto con una mirada integral, autodidacta y enfocada en la mejora continua.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#experiencia">
              Ver trayectoria
            </a>
            <a className="btn btn-ghost" href="#contacto">
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-mark">
          <div className="mark-blob">
            <img src={photo} alt="Foto de Matias De Bruyn" />
          </div>
          <ul className="mark-tags">
            <li>
              <span className="dot dot-green" />
              Desarrollo Full Stack
            </li>
            <li>
              <span className="dot dot-red" />
              Nutrición clínica &amp; deportiva
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
