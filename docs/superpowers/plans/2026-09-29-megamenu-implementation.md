# Plan de Implementación: Megamenús Industriales por Sección

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrar el sistema de navegación por Megamenú industrial por sección (Productos, Soluciones y Recursos) con soporte desktop y acordeón móvil táctil en las 24 páginas HTML del catálogo técnico corporativo de DISCODE ECUADOR S.A.

**Architecture:** Sistema de megamenú puro (HTML5 + Tailwind CSS + Vanilla JS) sin librerías pesadas. Consiste en una estructura modular de navegación superior con tres paneles desplegables horizontales (`#megamenu-productos`, `#megamenu-soluciones`, `#megamenu-recursos`) que respetan el ancho del 90% (`.discode-container`), acompañados de un controlador interactivo en `assets/js/main.js` para hover/click accesible en escritorio y acordeones colapsables en móviles.

**Tech Stack:** HTML5 semántico, Tailwind CSS (CDN), Vanilla JavaScript (ES6+), Node.js (auditoría automatizada), Git / GitHub.

---

### Task 1: Controlador JavaScript para Megamenús y Acordeones Móviles

**Files:**
- Modify: `assets/js/main.js`
- Test: `scratch/test-megamenu-controller.js`

- [ ] **Step 1: Escribir prueba de validación para las funciones del controlador de navegación**

Crear el script de prueba en `scratch/test-megamenu-controller.js` para asegurar que el controlador inicialice listeners, maneje retrasos de apertura/cierre (debounce), gestione la accesibilidad (`aria-expanded`) y active acordeones en móvil sin errores de sintaxis.

```javascript
// scratch/test-megamenu-controller.js
const fs = require('fs');
const path = require('path');

const mainJsPath = path.resolve('assets/js/main.js');
const mainJsContent = fs.readFileSync(mainJsPath, 'utf8');

// Verificaciones obligatorias
const checks = [
  { name: 'initMegaMenus function exists', test: mainJsContent.includes('initMegaMenus') },
  { name: 'Esc key handler exists', test: mainJsContent.includes('Escape') },
  { name: 'Aria expanded toggle exists', test: mainJsContent.includes('aria-expanded') },
  { name: 'Mobile accordion handler exists', test: mainJsContent.includes('megamenu-accordion') || mainJsContent.includes('data-accordion-btn') }
];

let failed = false;
checks.forEach(c => {
  if (!c.test) {
    console.error(`[FAIL] ${c.name}`);
    failed = true;
  } else {
    console.log(`[PASS] ${c.name}`);
  }
});

if (failed) {
  process.exit(1);
} else {
  console.log('All controller checks passed.');
}
```

- [ ] **Step 2: Ejecutar prueba para verificar que falle antes de la implementación**

Run: `node scratch/test-megamenu-controller.js`  
Expected: FAIL con `[FAIL] initMegaMenus function exists`

- [ ] **Step 3: Implementar `initMegaMenus` en `assets/js/main.js`**

Agregar la lógica robusta de megamenús de escritorio (con retraso de salida de 150ms para evitar cierres bruscos, soporte hover y focus por teclado) y acordeones móviles en `assets/js/main.js`.

```javascript
/**
 * Inicializador de Megamenús Desktop y Acordeones Móviles
 */
function initMegaMenus() {
  const triggers = document.querySelectorAll('[data-megamenu-trigger]');
  const menus = document.querySelectorAll('[data-megamenu-panel]');
  let closeTimeout = null;

  function closeAll() {
    menus.forEach(menu => {
      menu.classList.add('hidden');
      menu.classList.remove('opacity-100');
    });
    triggers.forEach(trigger => {
      trigger.setAttribute('aria-expanded', 'false');
      const arrow = trigger.querySelector('.megamenu-arrow');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    });
  }

  function openMenu(targetId, triggerEl) {
    clearTimeout(closeTimeout);
    const targetPanel = document.getElementById(targetId);
    if (!targetPanel) return;

    // Cerrar otros
    menus.forEach(menu => {
      if (menu !== targetPanel) {
        menu.classList.add('hidden');
        menu.classList.remove('opacity-100');
      }
    });
    triggers.forEach(t => {
      if (t !== triggerEl) {
        t.setAttribute('aria-expanded', 'false');
        const arrow = t.querySelector('.megamenu-arrow');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    });

    targetPanel.classList.remove('hidden');
    targetPanel.classList.add('opacity-100');
    triggerEl.setAttribute('aria-expanded', 'true');
    const arrow = triggerEl.querySelector('.megamenu-arrow');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }

  triggers.forEach(trigger => {
    const targetId = trigger.getAttribute('data-megamenu-trigger');
    const panel = document.getElementById(targetId);

    // Eventos Desktop Hover
    trigger.addEventListener('mouseenter', () => openMenu(targetId, trigger));
    trigger.parentElement.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(closeAll, 150);
    });

    if (panel) {
      panel.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
      panel.addEventListener('mouseleave', () => {
        closeTimeout = setTimeout(closeAll, 150);
      });
    }

    // Toggle por click (para táctil o accesibilidad)
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeAll();
      } else {
        openMenu(targetId, trigger);
      }
    });
  });

  // Cerrar con tecla Escape o clic fuera
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-megamenu-container]')) {
      closeAll();
    }
  });

  // Acordeones para menú móvil
  const accordionButtons = document.querySelectorAll('[data-accordion-btn]');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-accordion-btn');
      const targetList = document.getElementById(targetId);
      const icon = btn.querySelector('.accordion-icon');
      if (!targetList) return;

      const isHidden = targetList.classList.contains('hidden');
      if (isHidden) {
        targetList.classList.remove('hidden');
        if (icon) icon.textContent = '[-]';
      } else {
        targetList.classList.add('hidden');
        if (icon) icon.textContent = '[+]';
      }
    });
  });
}
```

- [ ] **Step 4: Ejecutar la prueba y verificar que pase**

Run: `node scratch/test-megamenu-controller.js`  
Expected: PASS en todos los chequeos.

- [ ] **Step 5: Commit**

```bash
git add assets/js/main.js scratch/test-megamenu-controller.js
git commit -m "feat(nav): add robust megamenu and mobile accordion controller in main.js"
```

---

### Task 2: Implementación y Validación del Header con Megamenús en `index.html`

**Files:**
- Modify: `index.html`
- Test: Inspección manual con el servidor de desarrollo / navegador

- [ ] **Step 1: Escribir el bloque de marcado HTML del Header estándar con Megamenús en `index.html`**

Reemplazar el nav plano actual por los tres triggers (`Productos ▾`, `Soluciones ▾`, `Recursos ▾`), sus 3 paneles de megamenú con ancho contenedor `discode-container` y los acordeones móviles.

- [ ] **Step 2: Verificar visualmente en el navegador y con consola sin errores**

Confirmar que al pasar el mouse sobre Productos se desplieguen las 4 columnas técnicas, en Soluciones las 3 columnas + diagnóstico, y en Recursos las guías + selector. Confirmar que no hay emojis ni fuentes desalineadas.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(nav): implement standard industrial megamenu in index.html"
```

---

### Task 3: Despliegue del Megamenú en las Páginas Hub (9 archivos)

**Files:**
- Modify:
  - `productos.html`
  - `soluciones.html`
  - `servicio-tecnico.html`
  - `industrias.html`
  - `marcas.html`
  - `nosotros.html`
  - `casos.html`
  - `recursos.html`
  - `contacto.html`

- [ ] **Step 1: Aplicar el header estandarizado con megamenús en cada una de las 9 páginas hub**
- [ ] **Step 2: Verificar que cada página conserve su clase activa correspondiente en el enlace**
- [ ] **Step 3: Commit**

```bash
git add productos.html soluciones.html servicio-tecnico.html industrias.html marcas.html nosotros.html casos.html recursos.html contacto.html
git commit -m "feat(nav): integrate industrial megamenu into all 9 hub pages"
```

---

### Task 4: Despliegue del Megamenú en las Subpáginas de Productos y Soluciones (7 archivos)

**Files:**
- Modify:
  - `producto-etiquetas.html`
  - `producto-ribbons.html`
  - `producto-impresoras.html`
  - `producto-codificadores.html`
  - `solucion-integral.html`
  - `solucion-servicio-absoluto.html`
  - `solucion-comodato.html`

- [ ] **Step 1: Aplicar el header estandarizado en las 4 subpáginas de productos respetando sus barras laterales aisladas**
- [ ] **Step 2: Aplicar el header estandarizado en las 3 subpáginas de soluciones respetando sus barras laterales aisladas**
- [ ] **Step 3: Commit**

```bash
git add producto-*.html solucion-*.html
git commit -m "feat(nav): integrate industrial megamenu into product and solution subpages"
```

---

### Task 5: Despliegue del Megamenú en las Subpáginas de Recursos Técnicos (7 archivos)

**Files:**
- Modify:
  - `recurso-selector-ribbon.html`
  - `recurso-transferencia-vs-directa.html`
  - `recurso-como-elegir-impresora.html`
  - `recurso-tipo-de-etiqueta.html`
  - `recurso-mejorar-trazabilidad.html`
  - `recurso-evitar-desperdicios.html`
  - `recurso-mantenimiento-zebra.html`

- [ ] **Step 1: Aplicar el header estandarizado en las 7 subpáginas de recursos respetando sus barras laterales aisladas**
- [ ] **Step 2: Commit**

```bash
git add recurso-*.html
git commit -m "feat(nav): integrate industrial megamenu into technical resource subpages"
```

---

### Task 6: Auditoría Integral Automatizada y Sincronización a GitHub

**Files:**
- Modify: `scratch/verify-site.js`
- Test: Ejecución completa del script de verificación

- [ ] **Step 1: Actualizar `verify-site.js` para exigir la presencia de los megamenús en los 24 archivos HTML**

```javascript
// Verificar que cada archivo contenga los IDs de los 3 megamenús y acordeones móviles
const requiredSnippets = [
  'data-megamenu-panel',
  'megamenu-productos',
  'megamenu-soluciones',
  'megamenu-recursos',
  'data-accordion-btn'
];
```

- [ ] **Step 2: Ejecutar la auditoría en las 24 páginas**

Run: `node scratch/verify-site.js`  
Expected: `ALL CHECKS PASSED SUCCESSFULLY! - Total pages audited: 24`

- [ ] **Step 3: Sincronizar y pushear a GitHub (`master` y `feat/discode-website`)**

```bash
git checkout feat/discode-website
git push origin feat/discode-website
git checkout master
git merge feat/discode-website
git push origin master
```
