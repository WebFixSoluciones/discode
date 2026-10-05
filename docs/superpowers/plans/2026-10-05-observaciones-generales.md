# Plan de Implementación: Observaciones Generales y Optimización Integral DISCODE

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar todas las observaciones del usuario en diseño, textos técnicos, eliminación de menciones de grados de congelación, homogeneización de marcas (Zebra, TSC, REINER, GoDEX, Honeywell), adición de los 3 nuevos productos (cinta adhesiva, cinta nylon textil, stretch film), corrección de dominio a `discode.net`, incorporación de política de calidad en Nosotros, enriquecimiento visual con imágenes en Recursos, Servicio Técnico e Industrias, y banner de asistencia técnica especializada.

**Architecture:** Modificaciones modulares en páginas HTML del sitio (`index.html`, `productos.html`, subpáginas de productos, `industrias.html`, `marcas.html`, `recursos.html`, `servicio-tecnico.html`, `nosotros.html`, `contacto.html`), apoyadas por componentes visuales reutilizables, SVG vectoriales oficiales para las 5 marcas y generación/selección de imágenes contextuales.

**Tech Stack:** HTML5, Tailwind CSS, JavaScript vanilla, SVG vector graphics, Python (testing & HTTP validation).

---

### Task 1: Corrección Global de Dominio y Topbar
- **Archivos:**
  - Modificar: `contacto.html`, `index.html`, `productos.html`, `servicio-tecnico.html`, `nosotros.html`, `marcas.html`, `industrias.html`, `recursos.html`, `assets/js/config.js`
- [x] **Paso 1.1:** Reemplazar `@discode.ec` por `@discode.net` en todos los archivos HTML y JS.
- [x] **Paso 1.2:** Actualizar el topbar superior en `index.html` y demás páginas:
  - Cambiar `Sistema de Gestión de Calidad ISO 9001 · Guayaquil · Quito · Cuenca · Cobertura Nacional` por `Soluciones Trazabilidad & Codificación · Cobertura Nacional`.
- [x] **Paso 1.3:** Verificar con script python que no queden referencias a `ventas@discode.ec` y que el topbar esté actualizado.
- [x] **Paso 1.4:** Commit de cambios: `git commit -m "fix: corregir dominio a discode.net y actualizar topbar institucional"`.

---

### Task 2: Actualizaciones en HOME (`index.html`)
- **Archivos:**
  - Modificar: `index.html`
- [x] **Paso 2.1:** Cambiar "Soporte Técnico de Fábrica" por "Soporte Técnico Especializado".
- [x] **Paso 2.2:** Actualizar la sección de marcas en el HOME:
  - Limitar a las 5 marcas solicitadas: **Zebra, TSC, REINER, GoDEX, Honeywell** (eliminar Avery Dennison u otras).
  - Integrar logos vectoriales limpios y homogéneos con hover elegante.
- [x] **Paso 2.3:** Reemplazar la imagen de la industria **Florícola** (que actualmente muestra una caja con un camarón) por una imagen representativa de empaque y exportación florícola (rosas/flores ecuatorianas con etiquetado técnico).
- [x] **Paso 2.4:** Incorporar el banner industrial destacado de **"ASISTENCIA TÉCNICA ESPECIALIZADA EN TODO EL ECUADOR"** inspirado en la referencia.
- [x] **Paso 2.5:** Verificar balance HTML y visualización en local.
- [x] **Paso 2.6:** Commit: `git commit -m "feat(home): actualizar marcas a 5 oficiales, soporte técnico especializado, imagen florícola y banner de asistencia"`.

---

### Task 3: Ajustes de Textos Técnicos y Supresión de Grados en Productos
- **Archivos:**
  - Modificar: `productos.html`, `producto-etiquetas.html`, `producto-ribbons.html`, `producto-impresoras.html`, `producto-codificadores.html`, `casos.html`
- [x] **Paso 3.1:** En Etiquetas (`productos.html` y `producto-etiquetas.html`):
  - Sustratos: Dejar únicamente `Papel Térmico Directo, Papel termo transferencia, Polipropileno (BOPP), otros.`
  - Adhesivos: Quitar los grados de congelación (eliminar `-30°C`, `-25°C`), dejando términos como `hotmelt permanente para corrugados, acrílico base agua, removible sin residuo y formulaciones especiales para congelados y bajas temperaturas`.
  - Presentación: Ajustar a `Rollos para impresoras industriales, semi industriales y de escritorio (buje 3” y 1”).`
- [x] **Paso 3.2:** Búsqueda y eliminación exhaustiva de menciones de grados numéricos (`-25°C`, `-30°C`) en todas las secciones y páginas del catálogo.
- [x] **Paso 3.3:** En Ribbon Cera (`productos.html` y `producto-ribbons.html`):
  - Sustratos recomendados: `Papel y polipropileno mate (no brillante).`
- [x] **Paso 3.4:** En Impresoras Industriales (`productos.html` y `producto-impresoras.html`):
  - Quitar "más de 10,000 etiquetas al día" y sustituir por "demandas diarias altas y producción continua".
- [x] **Paso 3.5:** En Reiner (`productos.html` y `producto-codificadores.html`):
  - Ajustar respaldo/stock a: `Mantenemos cartuchos en stock para disponibilidad inmediata en la ciudad de Guayaquil y envíos sin costo adicional al resto del País.`
  - Corregir imagen de marcado en madera/pallets para que represente exactamente el marcado sobre tacos y cajas de madera.
  - Corregir imagen de Fechado Ágil / speed-i-Jet 990 para eliminar el fondo negro y mostrar la base o fechado en acción.
- [x] **Paso 3.6:** Commit: `git commit -m "fix(productos): suprimir grados numéricos, actualizar sustratos, stock Reiner e imágenes contextuales"`.

---

### Task 4: Incorporación de Nuevos Productos (Cintas Adhesivas, Cinta Nylon Textil, Stretch Film)
- **Archivos:**
  - Modificar: `productos.html`
- [x] **Paso 4.1:** Preparar o generar imágenes de producto para:
  - Cinta nylon textil (bobinas de poliamida/nylon textil para confección).
  - Cinta de embalaje / adhesiva industrial (rollos transparentes y canela).
  - Película stretch film para embalaje de pallets.
- [x] **Paso 4.2:** Añadir la nueva categoría/sección en `productos.html`:
  - **Cinta Nylon Textil:** "Cinta de nylon de alta resistencia para impresión y etiquetado textil. Ideal para prendas de vestir y productos textiles que requieren identificación duradera y excelente legibilidad. Aplicaciones: etiquetas de composición, tallas, marca, cuidado y trazabilidad textil."
  - **Cinta Adhesiva:** "Cinta adhesiva de alta calidad para diferentes aplicaciones de identificación, empaque y uso industrial. Disponible en distintas medidas y presentaciones según las necesidades de cada operación. Aplicaciones: embalaje, identificación, sellado y procesos industriales."
  - **Película Stretch Film:** "Película stretch de alta resistencia para asegurar y proteger productos durante su almacenamiento, manipulación y transporte. Se adapta a diferentes cargas, ayudando a mantenerlas estables y protegidas. Aplicaciones: embalaje de pallets, protección de productos, almacenamiento y despacho."
  - Incluir botones directos a WhatsApp para cotizar cada nuevo producto.
- [x] **Paso 4.3:** Actualizar la navegación rápida del Hero en `productos.html` y el megamenú para reflejar estos nuevos suministros.
- [x] **Paso 4.4:** Commit: `git commit -m "feat(productos): agregar cintas adhesivas, cinta nylon textil y stretch film con fichas técnicas"`.

---

### Task 5: Rediseño de Página Marcas (`marcas.html`)
- **Archivos:**
  - Modificar: `marcas.html`
- [x] **Paso 5.1:** Simplificar la página para incluir **únicamente las 5 marcas solicitadas**:
  - **Zebra Technologies**
  - **TSC Auto ID**
  - **REINER**
  - **GoDEX International**
  - **Honeywell**
- [x] **Paso 5.2:** Aplicar la estructura limpia solicitada:
  - Logo oficial vectorial destacado.
  - Una sola imagen de producto representativa (sin recortes antiestéticos).
  - Breve descripción directa de la marca.
  - Botón de cotización y asesoría.
  - Eliminar listas saturadas de "características clave" y "modelos representativos".
- [x] **Paso 5.3:** Commit: `git commit -m "feat(marcas): simplificar marcas a 5 oficiales con logos limpios, descripción directa y sin saturación"`.

---

### Task 6: Enriquecimiento Visual de Recursos (`recursos.html`), Servicio Técnico (`servicio-tecnico.html`) e Industrias (`industrias.html`)
- **Archivos:**
  - Modificar: `recursos.html`
  - Modificar: `servicio-tecnico.html`
  - Modificar: `industrias.html`
- [x] **Paso 6.1:** En `recursos.html`:
  - Convertir el catálogo de guías y herramientas técnicas en tarjetas visuales modernas con imágenes contextuales de cabecera para cada recurso (selector de ribbons, mantenimiento de cabezales, trazabilidad GS1, tipos de adhesivos, etc.).
- [x] **Paso 6.2:** En `servicio-tecnico.html`:
  - Incorporar imágenes profesionales de diagnóstico de impresoras, cambio de cabezales térmicos, calibración en laboratorio y técnicos en planta.
  - Incorporar el banner de Asistencia Técnica Especializada en todo el Ecuador.
- [x] **Paso 6.3:** En `industrias.html`:
  - Dotar a todas las industrias de imágenes representativas, homogéneas y alineadas al texto técnico de cada sector (Camaronera, Pesquera, Alimenticia, Agrícola, Florícola, Textil, Farmacéutica, Logística).
- [x] **Paso 6.4:** Commit: `git commit -m "feat(ui): enriquecer con imágenes contextuales recursos, servicio técnico e industrias"`.

---

### Task 7: Incorporación de Política de Calidad en Nosotros (`nosotros.html`)
- **Archivos:**
  - Modificar: `nosotros.html`
- [x] **Paso 7.1:** Agregar la sección destacada oficial con el texto íntegro proporcionado por el usuario:
  - Título: **POLÍTICA DE CALIDAD DISCODE ECUADOR**
  - Texto oficial de Discode Ecuador S.A.S.
  - 5 directrices estratégicas de calidad con viñetas icónicas.
  - Metadatos de control documental: `Rev: 01` | `Fecha: 19/11/2025`.
- [x] **Paso 7.2:** Validar diseño y coherencia estética con el resto de la página Nosotros.
- [x] **Paso 7.3:** Commit: `git commit -m "feat(nosotros): integrar política de calidad oficial de Discode Ecuador"`.

---

### Task 8: Verificación Global, Pruebas y Despliegue
- **Archivos:** Todos los modificados
- [x] **Paso 8.1:** Validar balance de etiquetas HTML (`div`, `section`, etc.) en todos los archivos modificados.
- [x] **Paso 8.2:** Comprobar respuestas HTTP 200 en el servidor local para todas las URLs.
- [x] **Paso 8.3:** Ejecutar git push a `master` y `feat/discode-website`.
- [x] **Paso 8.4:** Presentar informe de verificación detallado al usuario.
