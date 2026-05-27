# Portafolio — Ignacio Shishko

Portafolio profesional con estética **Cyberpunk Glitch**. Desarrollador Full Stack & Arquitecto de IA.

## Stack

- **Framework:** [Astro v6](https://astro.build) (SSG)
- **Lógica:** Vanilla JavaScript ES6+
- **Estilos:** Pure CSS (CSS Custom Properties + Scoped Styles)
- **Deploy:** GitHub Pages via GitHub Actions

## Secciones

| Slice | Componente | Contenido |
|-------|-----------|-----------|
| ABOUT | `SobreMi.astro` | Hero, perfil, tags, enlaces |
| WORK | `Proyectos.astro` | Terminal animada con proyectos |
| TECH | `Skills.astro` | Skills técnicas + certificaciones |
| XP | `Experiencia.astro` | Timeline laboral |
| LINK | `Contacto.astro` | Formulario vía FormSpree |

## Comandos

```bash
npm run dev       # Servidor local → localhost:4321
npm run build     # Build producción → ./dist/
npm run preview   # Preview del build local
```

Requiere Node.js `>=22.12.0`.

## Arquitectura

- **SPA vertical accordion**: 5 slices que se expanden en desktop (hover) o abren overlay en mobile (touch)
- **Sin dependencias runtime**: solo Astro en build, cero JS de frameworks en cliente
- **Formulario**: FormSpree como backend serverless
