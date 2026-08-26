# Portfolio — Matias De Bruyn

Portfolio personal hecho con **React + Vite**.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173).

## Cómo compilarlo para producción

```bash
npm run build
```

Genera la carpeta `dist/` con el sitio listo para subir a cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.).

## Estructura

```
src/
  components/   → un componente por sección (Header, Hero, Projects, Experience, Education, Skills, Contact, Footer)
  hooks/        → useReveal (animación al hacer scroll) y useRoleSwitcher (texto rotativo del hero)
  assets/       → capturas de los proyectos
  index.css     → todos los estilos (variables de color para tema claro/oscuro incluidas)
```

## Contenido para completar

- **Proyecto "Ecommerce"**: no tiene captura (es una API backend sin interfaz visual). Si querés agregar una igual, editá `src/components/Projects.jsx`.
- **Certificados**: cada tarjeta de Formación académica tiene un botón "Certificado" que hoy está deshabilitado. Para activarlo: guardá el archivo en `src/assets/certificados/` (nombres sugeridos: `tecnico-multimedios.jpg`, `licenciatura-nutricion.jpg`, `desarrollo-web.jpg`, `nutricion-deportiva.jpg`, `suplementacion-deportiva.jpg`), importalo en `src/components/Education.jsx`, y asignalo al campo `cert` del ítem correspondiente en `EDUCATION` (está en `null`). El botón se habilita solo y abre la imagen en un lightbox.
