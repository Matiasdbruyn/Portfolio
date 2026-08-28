import useReveal from '../hooks/useReveal.js'
import { IconBrowser, IconExternal, IconCode } from './Icons.jsx'
import diagnomedShot from '../assets/diagnomed.png'
import suplexShot from '../assets/suplex.png'
import registroShot from '../assets/registro-diario.png'
import pachuxShot from '../assets/pachux.png'
import ecommerce from "../assets/ecommerce.png"

const PROJECTS = [
  {
    name: 'Diagnomed',
    image: diagnomedShot,
    alt: 'Captura del sitio Diagnomed',
    description:
      'Sitio para un centro médico integral: landing con especialidades, estudios diagnósticos, testimonios y contacto, con navegación por rutas.',
    tags: ['React', 'TypeScript', 'React Router', 'Vite'],
    demo: 'https://matiasdbruyn.github.io/Diagnomed/',
    code: 'https://github.com/Matiasdbruyn/Diagnomed',
  },
  {
    name: 'SuPlex',
    image: suplexShot,
    alt: 'Captura del sitio SuPlex',
    description:
      'Sitio informativo sobre suplementos dietarios, fármacos y nutrición para mejorar salud y rendimiento.',
    tags: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript'],
    demo: 'https://su-plex.vercel.app/',
    code: 'https://github.com/Matiasdbruyn/SuPlex',
  },
  {
    name: 'Ecommerce',
    image: ecommerce,
    alt: null,
    description:
      'API REST para gestión de productos y carritos. Persistencia dual en MongoDB o FileSystem, vistas server-side y actualización en tiempo real por WebSockets.',
    tags: ['Node.js', 'Express', 'MongoDB', 'WebSockets'],
    demo: null,
    code: 'https://github.com/Matiasdbruyn/Ecommerce',
  },
  {
    name: 'Registro Diario',
    image: registroShot,
    alt: 'Captura del sitio Registro Diario',
    description:
      'Aplicación para cargar y consultar registros del día a día, con menú lateral, alertas de confirmación y una interfaz simple pensada para uso rápido.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    demo: 'https://matiasdbruyn.github.io/Registro-Diario/',
    code: 'https://github.com/Matiasdbruyn/Registro-Diario',
  },
  {
    name: 'Pachux',
    image: pachuxShot,
    alt: 'Captura del sitio Pachux',
    description:
      'Sitio informativo sobre café: estilos, orígenes e intensidad, pensado para acercar al usuario lo mejor de cada variedad.',
    tags: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript'],
    demo: 'https://matiasdbruyn.github.io/Pachux/',
    code: 'https://github.com/Matiasdbruyn/Pachux',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="proj-card">
      {project.image ? (
        <img src={project.image} alt={project.alt} />
      ) : (
        <div className="proj-image-slot" aria-hidden="true">
          <IconBrowser />
          <span>Captura del proyecto</span>
        </div>
      )}
      <div className="proj-body">
        <h3>{project.name}</h3>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="proj-links">
          {project.demo && (
            <a className="proj-link" href={project.demo} target="_blank" rel="noopener noreferrer">
              <IconExternal />
              Ver demo
            </a>
          )}
          {project.code && (
            <a className="proj-link" href={project.code} target="_blank" rel="noopener noreferrer">
              <IconCode />
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="proyectos">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Proyectos</p>
        </div>

        <div className="proj-grid reveal" ref={gridRef}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
