# Portfolio — Matias De Bruyn

Portfolio personal de **Matias Nicolas De Bruyn**, Licenciado en Nutrición en transición hacia el desarrollo web Full Stack. El sitio muestra ambos perfiles en un mismo lugar y deja elegir con qué mirada recorrerlo.

🔗 **En vivo:** `https://matiasdbruyn.github.io/Portfolio/`

## Qué vas a encontrar

- **Inicio** — presentación, foto y accesos directos a la trayectoria, el contacto y el currículum en PDF.
- **Sobre mí** — el cruce entre la formación clínica y la técnica.
- **Proyectos** — capturas y links a demo/código de 5 desarrollos propios: [Diagnomed](https://matiasdbruyn.github.io/Diagnomed/), [SuPlex](https://su-plex.vercel.app/), Ecommerce (API REST), [Registro Diario](https://matiasdbruyn.github.io/Registro-Diario/) y [Pachux](https://matiasdbruyn.github.io/Pachux/).
- **Experiencia laboral** — línea de tiempo de los distintos roles.
- **Formación académica** — carreras y cursos, cada uno con botón para ver su certificado.
- **Habilidades** — herramientas y tecnologías agrupadas por área.
- **Contacto** — email, WhatsApp, LinkedIn y GitHub.

### El toggle de perfil

El botón **Desarrollo / Nutrición** del header no es solo estético: cambia el texto de presentación, filtra qué tarjetas de Experiencia y Formación se muestran, y hasta el PDF que abre el botón "Ver Currículum" — cada perfil tiene su propio CV. Lo que es común a ambos caminos (el colegio secundario, la facultad) se muestra siempre, sin importar el perfil elegido.

También tiene tema claro/oscuro, independiente del perfil, guardado en el navegador.

## Cómo verlo

Necesitás una versión reciente de [Node.js](https://nodejs.org/) instalada.

```bash
npm install
npm run dev
```

Abrí la URL que muestra la terminal (por defecto [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) — la ruta `/Portfolio/` al final es intencional, así el sitio se comporta igual que una vez publicado).

### Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a cualquier hosting estático. Para revisar ese resultado tal cual lo vería un visitante:

```bash
npm run preview
```

## Tecnologías

- **[React 19](https://react.dev/)** — toda la interfaz está armada en componentes, uno por sección.
- **[Vite](https://vite.dev/)** — servidor de desarrollo y build.
- **CSS puro** — sin frameworks de estilos; un único archivo (`src/index.css`) con variables de color para manejar tema claro/oscuro y el filtro por perfil.
- **SVG a mano** — todos los íconos del sitio son componentes propios, sin librerías externas de íconos.
- Sin backend ni base de datos: es un sitio 100% estático, pensado para desplegarse en GitHub Pages.

## Estructura del proyecto

```
public/            → favicon y los dos CV en PDF (uno por perfil)
src/
  main.jsx         → punto de entrada, aplica el tema y el perfil guardados antes de pintar
  App.jsx          → arma la página uniendo las secciones
  index.css        → todos los estilos del sitio
  components/      → un componente por sección (Header, Hero, About, Projects,
                     Experience, Education, Skills, Contact, Footer) más
                     Icons.jsx y Lightbox.jsx (el visor de certificados)
  hooks/           → useReveal (animación al entrar en pantalla) y
                     useRoleSwitcher (texto rotativo del hero)
  assets/          → capturas de los proyectos, la foto de perfil y,
                     en assets/certificados/, donde van las imágenes de los
                     certificados una vez agregadas
```

## Contenido pendiente

- **Certificados**: cada tarjeta de Formación académica tiene un botón "Certificado" que hoy está deshabilitado. Para activarlo: guardá el archivo en `src/assets/certificados/` (nombres sugeridos: `tecnico-multimedios.jpg`, `licenciatura-nutricion.jpg`, `desarrollo-web.jpg`, `nutricion-deportiva.jpg`, `suplementacion-deportiva.jpg`), importalo en `src/components/Education.jsx`, y asignalo al campo `cert` del ítem correspondiente en `EDUCATION` (está en `null`). El botón se habilita solo y abre la imagen en un lightbox.
- **Proyecto "Ecommerce"**: no tiene captura porque es una API backend sin interfaz visual.
