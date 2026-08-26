import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

try {
  const stored = localStorage.getItem('mdb-theme')
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.setAttribute('data-theme', stored)
  }
} catch {}

try {
  const storedProfile = localStorage.getItem('mdb-profile')
  document.documentElement.setAttribute('data-profile', storedProfile === 'nutricion' ? 'nutricion' : 'dev')
} catch {
  document.documentElement.setAttribute('data-profile', 'dev')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
