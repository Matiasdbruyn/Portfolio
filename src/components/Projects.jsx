import useReveal from '../hooks/useReveal.js'
import { IconBrowser, IconExternal, IconCode } from './Icons.jsx'
import sobrayaShot from '../assets/sobraya.jpg'
import diagnomedShot from '../assets/diagnomed.png'
import marronShot from '../assets/marron.jpg'
import suplexShot from '../assets/suplex.png'
import registroShot from '../assets/registro-diario.png'
import pachuxShot from '../assets/pachux.png'
import ecommerce from "../assets/ecommerce.png"

const OWN_PROJECTS = [
  {
    name: 'SobraYa',
    image: sobrayaShot,
    alt: 'Captura del sitio SobraYa',
    description:
      'Marketplace de excedentes de comida: los comercios publican lo que les sobró del día a mitad de precio y los usuarios lo reservan para retirar en una ventana horaria.',
    tags: ['React', 'React Native', 'Node.js', 'MongoDB'],
    demo: 'https://sobraya.netlify.app',
    code: 'https://github.com/Matiasdbruyn/SobreYa',
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

const CLIENT_PROJECTS = [
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
    name: 'Marrón',
    image: marronShot,
    alt: 'Captura del sitio Marrón',
    description:
      'Sitio para una marca de marroquinería textil: catálogo filtrable por categoría, fotos de cada producto y consulta directa por WhatsApp, a partir de la identidad de la marca.',
    tags: ['React', 'Vite', 'CSS'],
    demo: 'https://matiasdbruyn.github.io/Marron/',
    code: 'https://github.com/Matiasdbruyn/Marron',
  },
]

function ProjectCard({ project, demoLabel }) {
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
        <h4>{project.name}</h4>
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
              {demoLabel}
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

function ProjectGroup({ title, projects, demoLabel = 'Ver demo' }) {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <div className="proj-group">
      <div className="proj-group-head reveal" ref={headRef}>
        <h3>{title}</h3>
      </div>
      <div className="proj-grid reveal" ref={gridRef}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} demoLabel={demoLabel} />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const headRef = useReveal()

  return (
    <section id="proyectos">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Proyectos</p>
        </div>

        <ProjectGroup title="Proyectos personales" projects={OWN_PROJECTS} />
        <ProjectGroup title="Proyectos para clientes" projects={CLIENT_PROJECTS} demoLabel="Ver sitio" />
      </div>
    </section>
  )
}
