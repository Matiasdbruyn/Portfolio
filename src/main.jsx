import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Aplicar el tema guardado antes de pintar, para evitar un flash del tema equivocado.
try {
  const stored = localStorage.getItem('mdb-theme')
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.setAttribute('data-theme', stored)
  }
} catch {
  // localStorage puede no estar disponible — el sitio simplemente usa el tema del sistema.
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
