# Transparent Mental Health — Web (React + Vite)

Implementación en código del diseño **Landing Transparent Mental Health v1** (4 páginas).

## Ejecutar

```bash
cd react-vite
npm install
npm run dev      # http://localhost:5173
npm run build    # producción en /dist
npm run preview
```

## Rutas

| Ruta | Página | Archivo |
|---|---|---|
| `/` | Inicio | `src/pages/Home.jsx` |
| `/quienes-somos` | Misión, visión y equipo | `src/pages/About.jsx` |
| `/software-clinico` | Ficha Clínica Inteligente | `src/pages/Software.jsx` |
| `/contacto` | Suscripción y formulario | `src/pages/Contact.jsx` |

Router: `react-router-dom` v6. `Layout.jsx` monta header + footer y hace scroll al top en cada cambio de ruta.

## Estructura

```
src/
  main.jsx              BrowserRouter + montaje
  App.jsx               definición de rutas
  index.css             tokens (--tmh-*) + todos los estilos, mobile-first breakpoints
  data.js               TODO el contenido editable (textos, listas, equipo, menú, email)
  components/
    Layout.jsx          shell de página
    Header.jsx          nav sticky + menú móvil (<=860px)
    Footer.jsx          footer de marca
    AiBand.jsx          bloque oscuro "Tecnología que potencia el criterio humano" (Inicio y Software)
    Icon.jsx            set de iconos SVG inline (stroke 1.8, viewBox 24)
  lib/
    reveal.js           animaciones de scroll (fade + desplazamiento escalonado por sección)
  pages/                una página por ruta
public/assets/          logos + foto del hero
```

## Orden de secciones en Inicio

Hero → franja de confianza → 3 tarjetas de navegación → bloque IA (oscuro) → CTA final → footer.

## Sistema de diseño

Tokens en `:root` de `index.css`:

- **Color**: `--tmh-dark #24544D` (fondos oscuros, titulares) · `--tmh-teal #2D6B60` (links) ·
  `--tmh-sage #7FA97F` · `--tmh-sage-deep #6E9C71` (acento principal) · `--tmh-light #A8D5A2`
  (acento sobre oscuro) · `--tmh-mint #DEEBD6` (hero/CTA) · `--tmh-soft #F4F8F1` (franja de confianza) ·
  texto `--tmh-body #52685F`, `--tmh-body-strong #46605A`, `--tmh-muted #5C736C`.
- **Tipografía**: `Space Grotesk` (display/títulos/botones) + `DM Sans` (cuerpo), cargadas en `index.html`.
- **Radios**: 8 / 14 / 18 / 22 px y pill. **Sombras**: `--sh-card`, `--sh-card-hover`, `--sh-btn`.
- **Clases reutilizables**: `.btn` (`--primary`, `--white`, `--pill`), `.card`, `.navcard`,
  `.eyebrow`, `.lead`, `.body-text`, `.wrap`, `.section`, `.banner`, `.field`.
- Contraste: el cuerpo cumple 4.5:1 sobre sus fondos; no bajar `--tmh-muted` sobre `--tmh-soft`.

## Pendientes de contenido

1. **Imagen institucional** (Quiénes somos): `public/assets/equipo.jpg` — banda horizontal ~1600×600.
2. **Captura del software** (Software · Tecnología con propósito): `public/assets/software.jpg` — vertical.
3. **Equipo**: reemplazar nombres, cargos y reseñas en `src/data.js` y subir `team-1.jpg`…`team-3.jpg`.
4. **Formulario de contacto**: `src/pages/Contact.jsx` → `onSubmit` solo hace `preventDefault` y muestra
   el mensaje de éxito. Conectar el endpoint real (`fetch('/api/contacto', …)` o servicio de correo).
5. **Precios**: la tarjeta de plan dice "disponible próximamente"; actualizar cuando exista.
6. **Email**: `contactEmail` en `src/data.js` es placeholder.

## Animaciones de scroll

\`src/lib/reveal.js\` no requiere marcar el JSX: recorre \`main section > contenedor > items\`,
escalona la entrada (70 ms por elemento) y las filas de dos columnas entran desde lados opuestos.
\`Layout.jsx\` la ejecuta en cada cambio de ruta. Para excluir un elemento: \`data-no-reveal\`.
Respeta \`prefers-reduced-motion: reduce\`.

## Notas

- Los iconos son SVG inline en `Icon.jsx` (sin dependencia externa). Para añadir uno, agrega su
  `path` al objeto `paths`.
- No hay CSS-in-JS ni framework de utilidades: una sola hoja de estilos con clases semánticas.
- Si el hosting no soporta rutas SPA, configurar el fallback a `index.html` (Netlify `_redirects`,
  Vercel `rewrites`, o `try_files` en nginx).
