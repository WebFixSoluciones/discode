# Plan de Implementación: Sitio Web Corporativo DISCODE Ecuador (cPanel)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir el sitio web corporativo completo de 10 páginas para DISCODE ECUADOR en puro HTML5, Tailwind CSS (vía CDN) y JavaScript modular para cPanel, siguiendo una dirección visual de catálogo técnico editorial limpio (ancho del 90%, alto contraste, sin emojis ni elementos superfluos) y con enlaces dinámicos inteligentes a WhatsApp (+593 98 434 5891).

**Architecture:** Sitio estático multi-página (MPA) con URLs limpias mediante `.htaccess`, configuración centralizada en `assets/js/config.js`, catálogo de marcas extensible en `assets/js/brands-data.js` y componentes interactivos (Selector de Ribbon, asistente dinámico de WhatsApp y filtros de catálogo).

**Tech Stack:** HTML5 semántico, Tailwind CSS CDN (v3.4+), Google Fonts (Plus Jakarta Sans & JetBrains Mono), Vanilla JavaScript ES6+, Apache `.htaccess`.

---

### Task 1: Estructura Base, Configuración Global y Assets Compartidos

**Files:**
- Create: `assets/js/config.js`
- Create: `assets/js/brands-data.js`
- Create: `assets/js/main.js`
- Create: `assets/css/custom.css`
- Create: `.htaccess`

- [ ] **Step 1: Crear archivo centralizado de configuración `assets/js/config.js`**
  Definir variables globales para números de WhatsApp (`593984345891`), correo corporativo (`ventas@discode.ec`), teléfono fijo, ciudades de cobertura (`Guayaquil · Quito · Cuenca · Cobertura Nacional`) y generador de enlaces de WhatsApp con mensajes prellenados por contexto.

- [ ] **Step 2: Crear catálogo de marcas extensible `assets/js/brands-data.js`**
  Definir arreglo estructurado de marcas (Zebra, TSC, Reiner JetStamp, GODEX, etc.) con campos: `id`, `name`, `origin`, `category`, `description`, `highlights`, para que puedan agregarse nuevas marcas sin modificar el HTML.

- [ ] **Step 3: Crear script global `assets/js/main.js`**
  Implementar:
  - Toggle responsive del menú móvil.
  - Inicialización del botón flotante de WhatsApp con mensaje contextual según la página actual.
  - Asignación automática de enlaces de WhatsApp a elementos con atributo `data-whatsapp-context`.
  - Sombreado activo del enlace de navegación correspondiente a la página visitada.

- [ ] **Step 4: Crear hoja de estilos complementaria `assets/css/custom.css`**
  Definir clases de utilidad técnica: contenedor del 90% (`w-[90%] max-w-[1600px] mx-auto`), estilos para tablas de especificación, micro-radios (`rounded-sm`), scroll suave y estilos de impresión limpia.

- [ ] **Step 5: Crear archivo de configuración `.htaccess` para cPanel**
  Configurar reescritura de URLs para que funcionen limpias sin la extensión `.html` (ej. `/productos` redirige internamente a `productos.html`), habilitar compresión deflate/gzip para HTML/CSS/JS y encabezados de caché estática.

- [ ] **Step 6: Verificar archivos base y realizar commit**
  Ejecutar prueba de sintaxis con Node y verificar creación de archivos.
  Commit: `git add assets/ .htaccess; git commit -m "feat: add global config, brands data, main js and htaccess for cpanel"`

---

### Task 2: Página de Inicio (`index.html`)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Estructurar `index.html` con layout editorial de 90% de ancho**
  Incluir:
  - Meta tags SEO (Open Graph, descripción, viewport).
  - Barra superior de contacto y calidad: *DISCODE ECUADOR S.A. | Sistema de Gestión de Calidad ISO 9001 | +593 98 434 5891*.
  - Header institucional con logotipo oficial, 9 enlaces de menú y botón directo a WhatsApp.
  - Banner principal Hero (copia exacta de la guía): *SOLUCIONES DE IDENTIFICACIÓN, CODIFICACIÓN Y TRAZABILIDAD PARA LA INDUSTRIA*, subtítulo, botón *COTIZAR* y frase de apoyo.
  - 4 métricas técnicas de apoyo (ISO 9001, 4 Líneas de producto, Reiner tecnología alemana, Cobertura nacional).
  - Sección "¿Por qué DISCODE?" (texto completo de la guía).
  - Sección "Nuestros productos" (4 bloques técnicos: Etiquetas adhesivas, Ribbons, Impresoras, Codificadores).
  - Sección "Soluciones DISCODE" (Solución Integral, Servicio Absoluto, Comodato sin inversión inicial).
  - Sección "Soluciones para Diferentes Industrias" (16 tarjetas limpias de catálogo con botón *VER INDUSTRIAS*).
  - Sección final de conversión: *¿Necesitas una solución para identificar tus productos?* + botón *COTIZAR POR WHATSAPP*.
  - Footer global corporativo completo.
  - Botón flotante inteligente de WhatsApp.

- [ ] **Step 2: Verificar `index.html` en el navegador y validar responsividad**
  Comprobar que todas las secciones carguen limpias, sin emojis, con alto contraste y que los enlaces de WhatsApp funcionen.

- [ ] **Step 3: Commit**
  `git add index.html; git commit -m "feat: implement home page (index.html)"`

---

### Task 3: Página de Productos (`productos.html`)

**Files:**
- Create: `productos.html`

- [ ] **Step 1: Estructurar `productos.html`**
  Incluir:
  - Header y barra superior unificada (ancho 90%).
  - Encabezado: *PRODUCTOS — Soluciones de identificación, impresión y codificación para diferentes aplicaciones industriales y comerciales*.
  - Navegación por filtros rápidos (Todos, Etiquetas Adhesivas, Ribbons Térmicos, Impresoras de Etiquetas, Codificadores).
  - **Categoría 1: Etiquetas Adhesivas** (fabricación a medida, lista técnica de aplicaciones: congelados, cajas, fundas, trazabilidad, códigos de barras, exportación; botón *COTIZAR ETIQUETAS*).
  - **Categoría 2: Ribbons de Transferencia Térmica** (desglose químico: Ribbon de Cera, Ribbon de Resina, Ribbon de Resina Textil; aplicaciones detalladas; botón *COTIZAR RIBBON*).
  - **Categoría 3: Impresoras de Etiquetas** (4 subcategorías: Industriales de alto volumen, Semi-industriales/textil, Escritorio y Móviles; marcas Zebra, TSC; botón *COTIZAR IMPRESORA*).
  - **Categoría 4: Codificadores Directos** (tecnología alemana Reiner JetStamp 1025, 970, 990; aplicaciones de fechas, lotes, códigos y trazabilidad; botón *COTIZAR CODIFICADOR*).
  - Footer global y widget de WhatsApp contextual.

- [ ] **Step 2: Validar visualización y botones**
  Verificar que cada botón de cotización abra WhatsApp con su mensaje respectivo prellenado.

- [ ] **Step 3: Commit**
  `git add productos.html; git commit -m "feat: implement products catalog page (productos.html)"`

---

### Task 4: Página de Soluciones y Servicio Técnico (`soluciones.html` y `servicio-tecnico.html`)

**Files:**
- Create: `soluciones.html`
- Create: `servicio-tecnico.html`

- [ ] **Step 1: Desarrollar `soluciones.html`**
  - Encabezado: *SOLUCIONES DISCODE — No solamente suministramos productos. Integramos tecnología, materiales y servicio*.
  - Bloque 1: *Solución Integral DISCODE* (centralización completa de suministros y equipos).
  - Bloque 2: *Servicio Absoluto DISCODE* (continuidad operativa, mantenimiento programado y asistencia técnica).
  - Bloque 3: *Comodato DISCODE* (modelo sin Capex, equipos en uso continuo con consumibles y soporte garantizados).
  - Matriz comparativa técnica de los modelos operativos.
  - Botones de cotización contextuales para cada solución.

- [ ] **Step 2: Desarrollar `servicio-tecnico.html`**
  - Encabezado: *SERVICIO TÉCNICO DISCODE — Mantener tus equipos funcionando correctamente es fundamental para evitar interrupciones*.
  - Los 5 servicios detallados: Mantenimiento Preventivo, Mantenimiento Correctivo, Instalación y Configuración, Soporte Técnico y Capacitación.
  - Diagnóstico previo de incidencias (fallas en cabezal, rodillo, sensores, calibración).
  - Formulario y botón directo: *COTIZAR SERVICIO POR WHATSAPP*.

- [ ] **Step 3: Commit**
  `git add soluciones.html servicio-tecnico.html; git commit -m "feat: implement solutions and technical service pages"`

---

### Task 5: Página de Industrias y Marcas (`industrias.html` y `marcas.html`)

**Files:**
- Create: `industrias.html`
- Create: `marcas.html`

- [ ] **Step 1: Desarrollar `industrias.html`**
  - Encabezado: *SOLUCIONES POR INDUSTRIA — Cada industria tiene diferentes necesidades de identificación, etiquetado y trazabilidad*.
  - Grilla editorial limpia (90% de ancho) con los 16 sectores detallados:
    1. Camaronera (especificación para congelación -25°C, etiquetas freezer para cajas y fundas máster).
    2. Pesquera y Atunera (resistencia salina y humedad de faena).
    3. Alimenticia (fechas de caducidad, lotes y normativas sanitarias).
    4. Agrícola (empaque de campo y exportación).
    5. Florícola (cuartos fríos y exportación aérea).
    6. Textil (etiquetas cosidas, tallas, resina textil resistente a lavado).
    7. Manufactura (componentes y ensamblaje).
    8. Plásticos (inyección y rotulación).
    9. Logística y Distribución (pallets, cajas, WMS y códigos de barras).
    10. Retail (punto de venta y precio).
    11. Laboratorios / Cosmética / Farmacéutica (control estricto y trazabilidad de alta resolución).
    12. Bebidas (embotellado continuo).
    13. Avícola (cadenas de frío y despachos).
    14. Exportadores (normas GS1 y aduanas internacionales).
  - Botón de cotización por industria con mensaje específico hacia WhatsApp.

- [ ] **Step 2: Desarrollar `marcas.html` con carga dinámica extensible**
  - Encabezado: *MARCAS Y TECNOLOGÍA — Trabajamos con marcas reconocidas de tecnología para impresión, identificación y codificación*.
  - Renderizado automático mediante JavaScript a partir de `assets/js/brands-data.js` (cumpliendo con el requerimiento de la guía: *"esta sección debe permitir agregar nuevas marcas posteriormente sin tener que modificar la estructura de la página"*).
  - Detalle técnico de Zebra, TSC, Reiner JetStamp y GODEX.
  - Llamado a cotización de equipos y repuestos por marca.

- [ ] **Step 3: Commit**
  `git add industrias.html marcas.html; git commit -m "feat: implement industries and brands pages with extensible data system"`

---

### Task 6: Página Nosotros y Casos de Éxito (`nosotros.html` y `casos.html`)

**Files:**
- Create: `nosotros.html`
- Create: `casos.html`

- [ ] **Step 1: Desarrollar `nosotros.html`**
  - Encabezado: *SOBRE DISCODE ECUADOR — Empresa especializada en soluciones de identificación, codificación y trazabilidad para diferentes industrias*.
  - Secciones: Nuestra Experiencia, Nuestro Compromiso.
  - Sección Destacada de Calidad: Certificación **ISO 9001** (garantía de procesos auditados, trazabilidad y mejora continua).
  - Valores de operación: Respaldo técnico local, disponibilidad de stock permanente y relaciones a largo plazo.

- [ ] **Step 2: Desarrollar `casos.html` (Casos y Aplicaciones)**
  - Página destacada como muy importante en la guía.
  - Formato editorial de ficha técnica por cada caso:
    - *Problema / Necesidad*
    - *Solución DISCODE*
    - *Productos Utilizados*
    - *Aplicación en Planta*
    - *Resultado Verificado*
  - 4 casos representativos de alto impacto:
    1. Planta Empacadora de Camarón para Exportación (condiciones de congelación extrema y humedad).
    2. Centro de Distribución y Logística de Alto Volumen (reducción de errores en despacho y lectura de códigos).
    3. Industria Textil y Confección (etiquetado de prendas resistente a lavado industrial).
    4. Laboratorio / Envasado Farmacéutico (impresión directa de lotes y fechas con Reiner JetStamp).
  - Botón en cada caso: *COTIZAR UNA SOLUCIÓN SIMILAR* conectado a WhatsApp con el nombre del caso.

- [ ] **Step 3: Commit**
  `git add nosotros.html casos.html; git commit -m "feat: implement about us and case studies pages"`

---

### Task 7: Centro de Conocimiento y Guías Técnicas (`recursos.html`)

**Files:**
- Create: `recursos.html`

- [ ] **Step 1: Desarrollar `recursos.html` con herramientas interactivas y artículos completos**
  - Encabezado: *RECURSOS Y CONOCIMIENTO — Información práctica para ayudarte a seleccionar, utilizar y mantener correctamente tus soluciones de identificación*.
  - **Componente 1: Selector Técnico Interactivo de Ribbons** (Material de etiqueta ➔ Formulación exacta Cera / Resina / Resina Textil + CTA de cotización).
  - **Componente 2: Comparativa Técnica Detallada** (Transferencia Térmica vs. Térmica Directa con tabla comparativa de durabilidad, insumos, costos y aplicaciones recomendadas).
  - **Artículo 3: ¿Cómo elegir una impresora de etiquetas?** (7 factores: volumen, material, tecnología, ambiente de planta, datos a imprimir, velocidad y costo total TCO).
  - **Artículo 4: ¿Qué tipo de etiqueta necesito para mi producto?** (6 variables: superficie del producto, condiciones ambientales, tiempo de permanencia, datos, materiales y dimensiones).
  - **Artículo 5: ¿Cómo mejorar la trazabilidad de mis productos?** (Guía de 6 pasos con diagrama de flujo visual: Identificación de unidad ➔ Etiquetas ➔ Códigos 1D/2D ➔ Datos variables ➔ Conexión con procesos ➔ Equipos adecuados).
  - **Artículo 6: ¿Cómo evitar desperdicios de etiquetas?** (8 claves operativas: tamaño adecuado, aprovechamiento de sustrato, selección de equipo, configuración, ribbon correcto, pruebas previas, mantenimiento y análisis de merma).
  - **Artículo 7: Guía de Mantenimiento Preventivo para Impresoras Zebra** (7 pasos técnicos: limpieza de cabezal térmico, rodillo platen, extracción de polvo, insumos adecuados, verificación de calibración, rutina preventiva y cuándo llamar a soporte).

- [ ] **Step 2: Validar interactividad del selector de ribbons y enlaces contextuales**
  Asegurar que todas las fórmulas funcionen sin errores en consola y generen los mensajes correctos para WhatsApp.

- [ ] **Step 3: Commit**
  `git add recursos.html; git commit -m "feat: implement knowledge hub page with interactive ribbon selector and technical guides"`

---

### Task 8: Página de Contacto (`contacto.html`) y Verificación Final de Despliegue

**Files:**
- Create: `contacto.html`

- [ ] **Step 1: Desarrollar `contacto.html`**
  - Encabezado: *COTIZA CON DISCODE — Cuéntanos qué producto o solución necesitas y contáctanos directamente*.
  - Formulario de cotización técnica rápida:
    - Tipo de requerimiento (Etiquetas, Ribbons, Impresoras, Codificadores, Servicio Técnico, Comodato).
    - Datos del solicitante (Nombre, Empresa, Teléfono, Ciudad).
    - Botón de envío que estructura el mensaje y abre WhatsApp directamente con todos los datos prellenados.
  - Canales directos de atención: WhatsApp oficial `+593 98 434 5891`, correo institucional, horario de atención y mapa de cobertura nacional.

- [ ] **Step 2: Auditoría integral de enlaces y navegación entre las 10 páginas**
  - Verificar que todos los menús, pie de página y botones lleven a las páginas correctas.
  - Comprobar que el ancho del 90% (`w-[90%] max-w-[1600px] mx-auto`) se mantenga uniforme en todo el sitio.
  - Asegurar que no existan emojis ni elementos de diseño artificiales tipo IA.
  - Validar que el botón flotante de WhatsApp funcione en móviles y computadoras.

- [ ] **Step 3: Commit final**
  `git add contacto.html; git commit -m "feat: implement contact page and complete site navigation"`
