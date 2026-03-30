# Propuesta de Diseño: Estructura HUD Táctica para Portafolio

Este documento detalla el plan base utilizado para estructurar las secciones del portafolio en base a una identidad de "Terminal de Operaciones / Archive Log" (Vertical Glitch).

## 1. Ajustes Transversales (Limpieza)
- **Eliminación de Numeración:** Eliminación de los prefijos numéricos ("01.", "02.", etc.) de todos los títulos de sección.
- **Tipografía Estricta:** La fuente principal (la "llamativa", *Glitch*) queda reservada **estrictamente** para los Títulos del Acordeón (`<h2>`). Los subtítulos e información interna utilizan la tipografía de cuerpo o una monospace limpia (`JetBrains Mono`) para no sobrecargar visualmente el panel.
- **Títulos de Sección Globales:** Uso unificado de `.section-title` con tamaño `1.5rem`, color `var(--text-secondary)` (o translúcido), `text-transform: uppercase` y espaciado negativo para dar cohesión entre secciones.

## 2. Sección: Habilidades Técnicas (TECH)
- **Layout Base:** Cuadrícula de "Pills" minimalistas basadas en enlaces activos.
- **Visuales (Skills - Vibe Actual):** 
  - Fondo oscuro translúcido (`rgba(20,20,20,0.8)`) con diseño estructurado estilo "Badge/Tag".
  - Iconos SVG oficiales y representativos para cada tecnología procedentes puramente de *SimpleIcons* (ej. colores corporativos reemplazados por el `var(--accent-color)` #FF0055).
- **Lista de Datos de Certificaciones:** 
  - Tabla real de bases de datos utilizando flex y celdas consolidadas.
  - Cabecera *sticky* fija (`position: sticky`) con altura máxima (`40vh`) y un interior con barra de desplazamiento lateral personalizada a medida para simular una ventana del OS dentro del dashboard.

## 3. Sección: Experiencia Laboral (XP)
- **Diseño de Datos (Data-Log Style):** Bloques limpios separados por una línea punteada, descartando curvas o gráficas tipo línea de tiempo tradicional.
- **Anatomía del Módulo:**
  - **Fecha:** Formato terminal puro `[2024 - 2025]` anclado a un lateral.
  - **Rol:** Como `<h3>` respetando el color del sistema.
  - **Empresa:** Atenuada y siempre en formato monospace.
  - **Tags:** Etiquetas idénticas al bloque ABOUT con background claro magenta y bordes resaltados (`#DOCKER`, `#N8N`, etc.).
- **Navegabilidad:** Añadido de scroll vertical acotado a máxima altura (`75vh`) para evitar colapso de página, manteniendo el diseño vertical del acordeón.

## 4. Sección: Proyectos (WORK)
- **Ventana OS Simulada:** Transformamos la grilla clásica de proyectos en una imitación perfecta de ventana de consola macOS.
- **Cabecera (Top-bar):** Fondo `rgba(10,10,10,0.5)`, barra sutil con los 3 botones estándar del sistema de control de ventanas Apple.
- **Contenido Dinámico (JavaScript Embebido):** 
  - Simula el arranque al abrir la sección mediante el output `[root@system]~# init --module WORK`.
  - Finalizado el timeout fake, despliega por DOM un "Arte Ascii" o el mensaje `ESTADO: UNDER CONSTRUCTION` con texto titilando para representar proyectos en progreso sin romper la ilusión del panel interactivo.
