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
- **Certificados**: las 5 tarjetas dentro de "Formación → Certificados" tienen un espacio marcado ("Espacio para el certificado") en vez de imagen. Para completarlas, en `src/components/Education.jsx`, agregá el import de cada imagen (ponela en `src/assets/`) y reemplazá el bloque `<div className="cert-image-slot">` de esa tarjeta por `<img src={...} alt="..." />`, tal como ya está hecho en `Projects.jsx`.
