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
- Toda la interactividad es vanilla JS inline en los componentes `.astro` (scoped scripts)
- Sin frameworks runtime — cero dependencias JS en cliente

**Estilos:**
- CSS global en `src/styles/style.css` (variables, tipografía fluida, utilidades)
- Estilos scoped por componente en cada `.astro`
- Convención de nombres: kebab-case con doble guion (e.g., `contacto--formulario`, `header--nav`)
- Breakpoints responsive: 512px (móvil), 1024px (tablet), desktop (hover-aware)

**Assets estáticos:** imágenes y CV PDF en `public/assets/img/`

**CI/CD:** `.github/workflows/deploy.yml` despliega a GitHub Pages en push a `main` usando `npm ci` + `npm run build`.
