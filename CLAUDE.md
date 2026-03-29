# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev       # Servidor local en localhost:4321
npm run build     # Build de producción a ./dist/
npm run preview   # Preview del build antes de desplegar
npm run astro     # CLI de Astro (astro add, astro check, etc.)
```

Requiere Node.js `>=22.12.0`.

## Arquitectura

Portafolio personal de Ignacio Shishko construido con **Astro v6** (generador de sitios estáticos), JavaScript vanilla y CSS puro. No usa frameworks como React, Vue o preprocesadores CSS.

**Flujo de renderizado:**
- `src/pages/index.astro` → importa y compone todos los componentes de sección
- `src/layouts/BaseLayout.astro` → layout raíz que importa todos los CSS globales y el spinner de carga
- Cada sección del portafolio (`SobreMi`, `Skills`, `Formacion`, `Experiencia`, `Proyectos`, `Contacto`) es un componente `.astro` independiente

**JavaScript:**
- `src/scripts/app.js` — orquestación principal de la app
- `src/scripts/cargaPagina.js` — lógica del spinner y fade-in al cargar la página
- `src/scripts/navFixed.js` — header fijo que se activa tras scroll > 100px
- `src/scripts/contacto.js` — envío del formulario de contacto vía fetch a FormSpree

**Estilos:**
- CSS global e imports en `src/styles/style.css` (tipografía, grid, utilidades)
- Estilos por sección en `src/styles/main/section*.css`
- Convención de nombres: kebab-case con doble guion para separar componente de elemento (e.g., `header--nav`, `proyecto--div`)
- Breakpoints responsive: 412px (móvil), 820px (tablet), 1680px (desktop)

**Assets estáticos:** imágenes y CV PDF en `public/assets/img/`

**CI/CD:** `.github/workflows/deploy.yml` despliega a GitHub Pages en push a `main` usando `npm ci` + `npm run build`.
