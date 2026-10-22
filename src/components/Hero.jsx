import useRoleSwitcher from '../hooks/useRoleSwitcher.js'
import photo from '../assets/yo.jpg'
import { IconFile } from './Icons.jsx'

const CV_DEV = `${import.meta.env.BASE_URL}cv-matias-de-bruyn-dev.pdf`
const CV_NUTRICION = `${import.meta.env.BASE_URL}cv-matias-de-bruyn-nutricion.pdf`

const ROLES_DEV = ['Desarrollador Web Full Stack', 'Desarrollo Frontend', 'Desarrollo Backend', 'Maquetador CMS']
const ROLES_NUTRICION = ['Licenciado en Nutrición', 'Nutrición Clínica', 'Nutrición Deportiva']

function RoleLine({ roles, profile }) {
  const { text, fading } = useRoleSwitcher(roles)
  return <p className={`role-line cat-${profile}${fading ? ' fading' : ''}`}>{text}</p>
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-heading">
          <p className="eyebrow">Portfolio · Buenos Aires, Argentina</p>
          <h1>
            Matias <em>De&nbsp;Bruyn</em>
          </h1>
          <RoleLine roles={ROLES_DEV} profile="dev" />
          <RoleLine roles={ROLES_NUTRICION} profile="nutricion" />
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
              href={CV_DEV}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFile />
              Ver Currículum
            </a>
            <a
              className="btn btn-ghost cat-nutricion"
              href={CV_NUTRICION}
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
