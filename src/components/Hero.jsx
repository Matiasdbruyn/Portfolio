import useRoleSwitcher from '../hooks/useRoleSwitcher.js'
import photo from '../assets/yo.jpg'
import { IconFile } from './Icons.jsx'

export default function Hero() {
  const { text, fading } = useRoleSwitcher()

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-heading">
          <p className="eyebrow">Portfolio · Buenos Aires, Argentina</p>
          <h1>
            Matias <em>De&nbsp;Bruyn</em>
          </h1>
          <p className={`role-line${fading ? ' fading' : ''}`}>{text}</p>
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

        <div className="hero-body">
          <p className="lede cat-dev">
            Desarrollador Full Stack con formación previa como Licenciado en Nutrición. Esa base
            analítica y orientada a resultados se traduce hoy en un enfoque estructurado para
            resolver problemas técnicos. Autodidacta, con capacidad de adaptación al trabajo en
            equipo y compromiso con la mejora continua.
          </p>
          <p className="lede cat-nutricion">
            Licenciado en Nutrición, con especializaciones en nutrición deportiva y
            suplementación. Formación complementaria en desarrollo web Full Stack. Autodidacta,
            con capacidad de adaptación al trabajo en equipo y compromiso con la mejora continua.
            Mi trayectoria en distintos entornos laborales me aportó sólidas habilidades de
            comunicación, organización y resolución de problemas.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#experiencia">
              Ver trayectoria
            </a>
            <a className="btn btn-ghost" href="#contacto">
              Contactar
            </a>
            <a
              className="btn btn-ghost cat-dev"
              href="/cv-matias-de-bruyn-dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFile />
              Ver Currículum
            </a>
            <a
              className="btn btn-ghost cat-nutricion"
              href="/cv-matias-de-bruyn-nutricion.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFile />
              Ver Currículum
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
