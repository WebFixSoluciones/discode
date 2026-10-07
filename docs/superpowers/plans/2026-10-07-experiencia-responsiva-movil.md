# Experiencia Móvil Responsiva Tipo App (DISCODE) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar una experiencia móvil completa para smartphones en DISCODE: navegación lateral con Off-Canvas Drawer moderno, barra inferior táctil fija (App Bottom Bar) con auto-ocultamiento en scroll, blindaje de tablas técnicas y microinteracciones táctiles a 60 FPS con cero pérdida visual.

**Architecture:** Componentes globales modulares controlados mediante `assets/css/custom.css` (estilos táctiles, safe-area-inset de iOS, animaciones de drawer) y `assets/js/mobile-ui.js` (orquestación dinámica de la barra táctil inferior, gestos swipe, acordeones fluidos y scroll de tablas técnicas), integrado limpiamente a través de `assets/js/main.js`.

**Tech Stack:** HTML5, Tailwind CSS CDN, Vanilla JavaScript (ES6+), CSS3 Hardware Accelerated Transitions.

---

### Task 1: Estilos CSS Globales para Experiencia Móvil (`assets/css/custom.css`)

**Files:**
- Modify: `assets/css/custom.css`

- [ ] **Step 1: Agregar reglas de área segura (safe-area-inset) para iPhone/Android, Drawer y Tap Highlight**
- [ ] **Step 2: Agregar estilos para el Drawer lateral, animación de apertura/cierre y telón de fondo con desenfoque**
- [ ] **Step 3: Agregar estilos para la Barra Inferior Táctil (App Bottom Tab Bar) y animación Smart Hide**
- [ ] **Step 4: Agregar estilos para acordeones fluidos (`.mobile-accordion-content`) y tablas táctiles con scroll suave**
- [ ] **Step 5: Verificar que la sintaxis de `assets/css/custom.css` sea válida y sin errores**
- [ ] **Step 6: Commit de estilos CSS móviles**

---

### Task 2: Controlador JavaScript de Experiencia Móvil (`assets/js/mobile-ui.js`)

**Files:**
- Create: `assets/js/mobile-ui.js`
- Modify: `assets/js/main.js`

- [ ] **Step 1: Crear `assets/js/mobile-ui.js` con el módulo `DiscodeMobileUI` auto-ejecutable:**
  - Inyección dinámica y gestión de la Barra Inferior Táctil (`#discode-bottom-bar`) con botones: Inicio, Productos, Soluciones, WhatsApp Cotizar y Menú.
  - Gestión del Drawer lateral: apertura fluida, bloqueo de scroll en `body` (`overflow: hidden`), cierre mediante botón, tap en backdrop, tecla Escape y gesto táctil *Swipe-to-close*.
  - Acordeones táctiles animados con rotación de chevrón SVG y transición de altura.
  - Smart Hide on Scroll: ocultamiento discreto en scroll descendente y reaparición en scroll ascendente.
  - Ajuste de padding de seguridad (`pb-20 md:pb-0`) en el contenedor principal para que la barra inferior nunca tape contenido.
- [ ] **Step 2: Integrar e invocar `initMobileUI()` en `assets/js/main.js`**
- [ ] **Step 3: Probar sintaxis y ejecución en entorno Node/Python**
- [ ] **Step 4: Commit del controlador móvil**

---

### Task 3: Optimización del Drawer y Navegación en `index.html`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Actualizar la estructura del menú móvil en `index.html` para convertirlo en un Off-Canvas Drawer lateral completo con chevrons SVG y botón de cierre táctil**
- [ ] **Step 2: Ajustar padding inferior del `footer` y secciones de transición para que no haya solapamiento visual**
- [ ] **Step 3: Verificar en servidor local que el botón hamburguesa abre el Drawer con animación fluida y backdrop blur**
- [ ] **Step 4: Commit de cambios en `index.html`**

---

### Task 4: Estandarización y Blindaje de Páginas Principales y Catálogos

**Files:**
- Modify: `productos.html`
- Modify: `soluciones.html`
- Modify: `recursos.html`
- Modify: `industrias.html`
- Modify: `servicio-tecnico.html`

- [ ] **Step 1: Estandarizar la estructura del Drawer lateral móvil en las páginas clave**
- [ ] **Step 2: Envolver tablas de especificaciones técnicas con contenedor táctil `overflow-x-auto scrollbar-none` e indicador de deslizamiento**
- [ ] **Step 3: Verificar que las barras de categorías (`chips`) tengan scroll horizontal fluido (`whitespace-nowrap`) sin romper márgenes**
- [ ] **Step 4: Commit de la estandarización de páginas**

---

### Task 5: Verificación Integral, Pruebas en Viewports Móviles y Sincronización Git

**Files:**
- Test: Script de verificación de selectores y dimensiones DOM en simulación móvil (360px, 390px, 430px)

- [ ] **Step 1: Ejecutar verificación automatizada de endpoints y enlaces en `http://localhost:8080`**
- [ ] **Step 2: Comprobar que no existen desbordamientos horizontales de pantalla (`body overflow-x: hidden`)**
- [ ] **Step 3: Verificar que la barra inferior responde al scroll y el drawer responde al toque y al botón de menú**
- [ ] **Step 4: Commit final y sincronización con las ramas `master` y `feat/discode-website`**
