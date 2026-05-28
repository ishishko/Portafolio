# AGENTS.md - Protocolo de Gobernanza de Agentes

## Proyecto: Portafolio Premium Glitch
**Stack Tecnológico:**
- Framework: Astro v6 (Static Site Generation)
- Lógica: Vanilla JavaScript ES6+
- Estilos: Pure CSS (CSS Variables & Scoped Styles)
- Deployment: GitHub Pages

## Definition of Done (DoD)
Para que una tarea se considere finalizada por cualquier agente:
1. **Integridad Visual:** El cambio debe respetar el sistema de diseño "Cyberpunk Glitch" y la paleta de colores `--accent-color`.
2. **SoC:** La lógica debe estar separada de la UI siempre que sea posible.
3. **Responsividad:** El cambio debe ser probado y funcional en los 3 breakpoints (Móvil, Tablet, Desktop).
4. **Zero Magic Numbers:** Se deben usar las variables definidas en `style.css`.
5. **Atomicidad:** Cada commit/cambio debe ser funcional por sí mismo.

## Convenciones de Código
- **CSS:** kebab-case con doble guion (ej. `componente--elemento`).
- **JS:** camelCase para funciones y variables.
- **Astro:** PascalCase para nombres de componentes.
