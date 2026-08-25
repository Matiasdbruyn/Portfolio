import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
