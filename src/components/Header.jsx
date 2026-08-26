import { useEffect, useState } from 'react'
import { IconSun, IconMoon, IconMenu, IconCode, IconLeaf } from './Icons.jsx'

const LINKS = [
  { href: '#perfil', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#formacion', label: 'Formación' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [profile, setProfile] = useState(
    () => document.documentElement.getAttribute('data-profile') || 'dev',
  )

  // El menú mobile se muestra/oculta con una clase en <body> (así el CSS que
  // posiciona el panel fijo no depende de dónde está el header en el árbol).
  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
  }, [navOpen])

  function toggleTheme() {
    const root = document.documentElement
    const current = root.getAttribute('data-theme')
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    const effectiveDark = current ? current === 'dark' : prefersDark
    const next = effectiveDark ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('mdb-theme', next)
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.) — no es crítico.
    }
  }

  function toggleProfile() {
    const root = document.documentElement
    const next = profile === 'dev' ? 'nutricion' : 'dev'
    root.setAttribute('data-profile', next)
    setProfile(next)
    try {
      localStorage.setItem('mdb-profile', next)
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.) — no es crítico.
    }
    // Avisa a otros componentes (ej. el acordeón de Certificados, si está abierto)
    // para que recalculen lo que dependa de qué tarjetas quedan visibles.
    window.dispatchEvent(new Event('profile-change'))
  }

  return (
    <header className="site">
      <div className="container nav-row">
        <a className="brand" href="#inicio">
          Matias <em>De Bruyn</em>
        </a>

        <nav className="links" id="navLinks" aria-label="Navegación principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="profile-toggle"
            id="profileToggle"
            type="button"
            aria-label="Cambiar entre perfil desarrollador y nutricionista"
            aria-pressed={profile === 'nutricion'}
            onClick={toggleProfile}
          >
            <IconCode className="code" />
            <IconLeaf className="leaf" />
            <span>{profile === 'nutricion' ? 'Nutrición' : 'Desarrollo'}</span>
          </button>
          <button
            className="icon-btn"
            id="themeToggle"
            type="button"
            aria-label="Cambiar tema claro/oscuro"
            onClick={toggleTheme}
          >
            <IconSun className="sun" />
            <IconMoon className="moon" />
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={navOpen}
            aria-controls="navLinks"
            onClick={() => setNavOpen((open) => !open)}
          >
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  )
}
