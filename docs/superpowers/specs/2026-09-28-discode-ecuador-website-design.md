# Especificación de Diseño: Sitio Web Corporativo DISCODE Ecuador

**Fecha:** 2026-09-28  
**Cliente:** DISCODE ECUADOR — Soluciones de Identificación, Codificación y Trazabilidad para la Industria  
**Entorno de Despliegue:** cPanel (Apache / `public_html`), puro HTML5, Tailwind CSS (vía CDN de alto rendimiento) y Vanilla JavaScript.  
**Estado:** Aprobado por el usuario  

---

## 1. Visión y Objetivos

Desarrollar el sitio web corporativo de **DISCODE ECUADOR**, estructurado exactamente según el contenido detallado de 32 páginas suministrado por el cliente. El sitio debe proyectar una imagen de liderazgo industrial, alta tecnología, confiabilidad y soporte técnico ininterrumpido en el mercado ecuatoriano (camaroneras, pesqueras, alimentos, agro, flores, confección, farmacéutica y manufactura).

### Objetivos Clave:
1. **Generación Directa de Leads vía WhatsApp Contextual:** Redirigir a los visitantes a WhatsApp (`+593 98 434 5891`) con mensajes pre-estructurados específicos según la sección, producto o servicio desde donde se originó la consulta.
2. **Posicionamiento SEO Industrial B2B:** Estructura multi-página con URLs limpias mediante `.htaccess` para posicionar en Google en Ecuador términos como "etiquetas Guayaquil", "ribbons cera resina Ecuador", "impresoras Zebra Quito", "servicio técnico codificadores", etc.
3. **Herramientas de Decisión Interactivas:** Integrar el "Selector Interactivo de Ribbons", tablas comparativas (Transferencia Térmica vs. Térmica Directa) y guías de selección rápida.
4. **Respaldo de Calidad Certificada:** Destacar la certificación **ISO 9001** de DISCODE Ecuador en todas las páginas clave para generar máxima confianza en tomadores de decisión industriales.
5. **Facilidad de Mantenimiento en cPanel:** 100% estático, sin requerir Node.js en producción. Datos de contacto centralizados en `assets/js/config.js` y marcas ampliables en `assets/js/brands-data.js`.

---

## 2. Dirección de Arte y Estilo Visual

- **Estilo Seleccionado:** **Estilo 1: Industrial High-Tech Moderno**.
- **Tipografía:** 
  - Primaria: `Inter` y `Plus Jakarta Sans` (vía Google Fonts), nítidas, legibles y de grado técnico corporativo.
  - Monoespaciada técnica para códigos/lotes: `JetBrains Mono` / `ui-monospace`.
- **Paleta de Colores Corporativa:**
  - **Azul DISCODE Principal:** `#003B8E` (extraído del logotipo oficial, denota solidez, precisión y confianza).
  - **Azul Profundo Industrial:** `#0A192F` / `#0F172A` (fondos de contraste técnico y pie de página).
  - **Cyan Tecnológico:** `#0284C7` / `#38BDF8` (acentos visuales, estados hover e indicadores de proceso).
  - **Verde WhatsApp:** `#25D366` / `#128C7E` (botones de conversión directa y soporte en vivo).
  - **Fondo Limpio:** `#F8FAFC` y `#FFFFFF` (para lectura cómoda y enfoque en catálogo técnico).
  - **Acento de Calidad ISO 9001:** Gradiente azul rey y dorado sutil `#E2E8F0` / `#0284C7`.
- **Iconografía y Gráficos:**
  - Logotipo oficial corporativo: `assets/images/logo.png`.
  - Iconos SVG limpios (Heroicons / Lucide icons) enlazados a trazabilidad, códigos de barras, QR, impresoras, engranajes y camiones de logística.
  - Imágenes ilustrativas profesionales de plantas de empaque, rollos de ribbons, impresoras industriales y codificadores Reiner JetStamp.

---

## 3. Estructura de Páginas y Contenidos

El sitio se compone de 10 páginas HTML principales:

### 3.1. `index.html` (Página de Inicio)
- **Banner Principal (Hero):**
  - Título: *SOLUCIONES DE IDENTIFICACIÓN, CODIFICACIÓN Y TRAZABILIDAD PARA LA INDUSTRIA*
  - Subtítulo: *Etiquetas, ribbons, impresoras, codificadores y servicio técnico para que tus productos estén correctamente identificados en cada etapa de tu operación.*
  - Botón principal: *COTIZAR* (Enlace directo a WhatsApp: *"Hola DISCODE, quisiera solicitar una cotización general"*).
  - Frase de apoyo: *Todo lo que necesitas para identificar, imprimir y controlar tus productos, en un solo lugar.*
  - Insignia destacada: *Empresa Certificada ISO 9001*.
- **Sección "¿Por qué DISCODE?":**
  - Título: *Una solución integral para tus procesos de identificación*.
  - Enfoque: Optimización de procesos, integración de tecnología, suministros y respaldo técnico especializado.
- **Sección "Nuestros Productos" (4 Bloques):**
  - 1. Etiquetas Adhesivas.
  - 2. Ribbons de Transferencia Térmica.
  - 3. Impresoras de Etiquetas.
  - 4. Codificadores Directos.
  - Botón: *VER PRODUCTOS* (redirige a `productos.html`).
- **Sección "Soluciones DISCODE" (3 Bloques):**
  - Solución Integral DISCODE, Servicio Absoluto DISCODE, Comodato DISCODE.
  - Botón: *COTIZAR*.
- **Sección "Soluciones para Diferentes Industrias":**
  - Tarjetas interactivas para los 16 sectores (Camaronera, Pesquera, Alimenticia, Agrícola, Florícola, Textil, Manufactura, Plásticos, Logística y distribución, Retail, Laboratorios, Cosmética, Farmacéutica, Bebidas, Avícola, Exportadores).
  - Botón: *VER INDUSTRIAS*.
- **Sección Final CTA:**
  - *¿Necesitas una solución para identificar tus productos?*
  - Botón: *COTIZAR POR WHATSAPP*.

### 3.2. `productos.html` (Página Productos)
- **Encabezado:** *PRODUCTOS — Soluciones de identificación, impresión y codificación para diferentes aplicaciones industriales y comerciales.*
- **Filtros interactivos de categoría:** Todos, Etiquetas, Ribbons, Impresoras, Codificadores.
- **Categoría 1: Etiquetas Adhesivas:**
  - Fabricación y comercialización de etiquetas a medida según materiales, dimensiones y configuraciones.
  - Aplicaciones detalladas: Identificación de productos, etiquetado de cajas, etiquetado logístico, códigos de barras, trazabilidad, exportación, etiquetas para congelados, identificación interna, etiquetado industrial.
  - Botón: *COTIZAR ETIQUETAS* (WhatsApp prellenado: *"Hola DISCODE, quisiera cotizar etiquetas adhesivas..."*).
- **Categoría 2: Ribbons de Transferencia Térmica:**
  - Tipos: Ribbon de Cera, Ribbon de Resina, Ribbon de Resina Textil.
  - Aplicaciones: Etiquetas de papel, etiquetas sintéticas, polipropileno, poliéster, aplicaciones industriales, logística, alta exigencia.
  - Botón: *COTIZAR RIBBON*.
- **Categoría 3: Impresoras de Etiquetas:**
  - Categorías: Industriales (alto volumen), Semi-industriales (medio volumen / textil), Escritorio (comercial y administrativo), Móviles (impresión en punto de operación).
  - Marcas representadas: Zebra, TSC y otras marcas.
  - Botón: *COTIZAR IMPRESORA*.
- **Categoría 4: Codificadores (Codificación Directa):**
  - Tecnología alemana Reiner JetStamp con repuestos y servicio técnico oficial.
  - Modelos destacados: Reiner JetStamp 1025, Reiner JetStamp 970, Reiner JetStamp 990.
  - Aplicaciones: Fechas, lotes, códigos, numeración, información variable, trazabilidad.
  - Botón: *COTIZAR CODIFICADOR*.

### 3.3. `soluciones.html` (Página Soluciones)
- **Encabezado:** *SOLUCIONES DISCODE — No solamente suministramos productos. Integramos tecnología, materiales y servicio para ayudarte a mantener tus procesos de identificación funcionando correctamente.*
- **1. Solución Integral DISCODE:**
  - Centralización completa de insumos, etiquetas, ribbons, impresoras y codificadores con un solo proveedor.
  - Botón: *COTIZAR SOLUCIÓN*.
- **2. Servicio Absoluto DISCODE:**
  - Continuidad operativa, soporte permanente, mantenimiento preventivo y suministro programado para cero interrupciones en planta.
  - Botón: *COTIZAR*.
- **3. Comodato DISCODE:**
  - Equipos de impresión y codificación sin inversión inicial de capital (Capex ➔ Opex), con consumibles garantizados y respaldo técnico.
  - Botón: *COTIZAR COMODATO*.

### 3.4. `servicio-tecnico.html` (Página Servicio Técnico)
- **Encabezado:** *SERVICIO TÉCNICO DISCODE — Mantener tus equipos funcionando correctamente es fundamental para evitar interrupciones en tus procesos de identificación.*
- **Los 5 Pilares del Servicio:**
  1. *Mantenimiento Preventivo:* Revisión periódica para prolongar la vida útil del cabezal y rodillo.
  2. *Mantenimiento Correctivo:* Diagnóstico técnico y reparación ágil con repuestos certificados.
  3. *Instalación y Configuración:* Puesta a punto según software de etiquetado y parámetros de planta.
  4. *Soporte Técnico:* Asistencia directa y resolución de incidencias en línea o presencial.
  5. *Capacitación:* Entrenamiento al personal de operación para uso y cuidado adecuado.
- Botón CTA: *COTIZAR SERVICIO*.

### 3.5. `industrias.html` (Página Industrias)
- **Encabezado:** *SOLUCIONES POR INDUSTRIA — Cada industria tiene diferentes necesidades de identificación, etiquetado y trazabilidad.*
- Fichas técnicas completas con aplicaciones y condiciones exigentes:
  1. **Camaronera:** Plantas empacadoras, resistencia extrema a humedad y congelación profunda (-18°C a -30°C), etiquetas para cajas y fundas, lotes y exportación.
  2. **Pesquera y Atunera:** Productos, empaques, cajas y trazabilidad marítima.
  3. **Alimenticia:** Lotes, fechas de caducidad, códigos de barras normativos y trazabilidad en distribución.
  4. **Agrícola:** Empaques de campo, trazabilidad fitosanitaria y exportación.
  5. **Florícola:** Etiquetas resistentes para exportación de flores en cuartos fríos.
  6. **Textil:** Ribbons de resina textil, etiquetas de lavado, inventario y confección.
  7. **Manufactura:** Componentes industriales, empaques y procesos internos.
  8. **Plásticos:** Marcado de moldes, empaques y resinas.
  9. **Logística y Distribución:** Almacenamiento WMS, despacho, pallets y picking rápido.
  10. **Retail:** Marcado de precios, inventarios y puntos de venta.
  11. **Laboratorios / Cosmética / Farmacéutica:** Información crítica controlada, alta resolución y resistencia química.
  12. **Bebidas:** Embotellado, lotes y fechas de alta velocidad.
  13. **Avícola:** Control de bandejas, cadenas de frío y empaque.
  14. **Exportadores:** Normativas aduaneras internacionales y códigos GS1.
- Botones de cotización por industria con mensaje específico hacia WhatsApp.

### 3.6. `marcas.html` (Página Marcas y Tecnología)
- **Encabezado:** *MARCAS Y TECNOLOGÍA — Trabajamos con marcas reconocidas de tecnología para impresión, identificación y codificación.*
- Catálogo de Marcas: Zebra, TSC, Reiner (tecnología alemana), GODEX y otras marcas según proyecto.
- **Requerimiento Especial de la Guía:** *"Importante para el desarrollador: esta sección debe permitir agregar nuevas marcas posteriormente sin tener que modificar la estructura de la página"*.
  - Solución técnica: Componente renderizado desde un arreglo JSON en `assets/js/brands-data.js` que genera automáticamente las tarjetas, descripciones y badges sin necesidad de alterar el HTML.

### 3.7. `nosotros.html` (Página Nosotros)
- **Encabezado:** *SOBRE DISCODE ECUADOR — Empresa especializada en soluciones de identificación, codificación y trazabilidad.*
- Secciones: Nuestra Experiencia, Nuestro Compromiso y Excelencia Operativa.
- **Sección Destacada de Calidad:**
  - Respaldo de la **Certificación ISO 9001**: Procesos estandarizados, mejora continua y auditorías de calidad internacional.

### 3.8. `casos.html` (Página Casos y Aplicaciones)
- Considerada de máxima prioridad en la guía.
- Formato estructurado por caso:
  - *Problema / Necesidad*
  - *Solución DISCODE*
  - *Productos Utilizados* (Etiquetas + Ribbon + Impresora / Codificador)
  - *Aplicación* (Producción / Bodega / Despacho / Exportación)
  - *Resultado* (Reducción de mermas, trazabilidad garantizada, cumplimiento normativo)
- Casos representativos: Sector Camaronero Congelados, Centro de Distribución Logística, Fábrica Textil y Embotelladora / Alimentos.
- Botón en cada caso: *COTIZAR UNA SOLUCIÓN SIMILAR* con WhatsApp dinámico.

### 3.9. `recursos.html` (Centro de Conocimiento y Guías Técnicas)
- **Selector Interactivo de Ribbon:**
  - ¿Qué material tiene tu etiqueta?
    - Papel ➔ **Ribbon de Cera**
    - Sintético / Polipropileno / Poliéster ➔ **Ribbon de Resina**
    - Textil / Ropa ➔ **Ribbon de Resina Textil**
  - Botón: *"¿Tienes dudas sobre qué ribbon utilizar? Cotizar por WhatsApp"*.
- **Comparativa Técnica:** *¿Transferencia térmica o térmica directa?* (Tabla comparativa visual, costos, durabilidad y aplicaciones).
- **Guía de Impresoras:** *¿Cómo elegir una impresora de etiquetas?* (Volumen, tipo de etiqueta, tecnología, ambiente de planta, velocidad, cálculo de costo total de propiedad TCO).
- **Guía de Etiquetas:** *¿Qué tipo de etiqueta necesito para mi producto?* (Superficie, adherencia, factores climáticos/químicos, tiempo de vida).
- **Guía de Trazabilidad:** *¿Cómo mejorar la trazabilidad en 6 pasos?* (Identificación de unidad, etiquetas, códigos 1D/2D, datos variables de lote/fecha, flujo de procesos y equipos adecuados).
- **Guía de Ahorro:** *8 claves para evitar desperdicio de etiquetas*.
- **Guía de Mantenimiento:** *Mantenimiento preventivo de impresoras Zebra en 7 pasos* (limpieza de cabezal, rodillo platen, prevención de polvo, ribbon correcto, calibración, prevención y soporte técnico).

### 3.10. `contacto.html` (Página Contacto)
- Formulario de cotización rápido: Selección de producto/solución, nombre, empresa, mensaje.
- Redirección con 1 clic al enlace prellenado de WhatsApp o envío a correo corporativo.
- Datos de contacto: WhatsApp oficial `+593 98 434 5891`, correo institucional, atención a nivel nacional (Guayaquil, Quito y todo Ecuador).

---

## 4. Componentes Globales e Infraestructura Técnica

### 4.1. Configuración Centralizada (`assets/js/config.js`)
Permite editar en 1 solo archivo los números de teléfono, correos, horario y enlaces de redes sociales para todo el sitio.

### 4.2. Motor de WhatsApp Contextual (`assets/js/whatsapp-helper.js`)
Detecta la página, producto o caso en el que se encuentra el usuario y abre `https://wa.me/593984345891?text=...` con el texto exacto pedido en la guía:
- Desde Ribbons: *"Hola DISCODE, quisiera cotizar ribbons. Me gustaría recibir información sobre las opciones disponibles."*
- Desde Impresoras: *"Hola DISCODE, quisiera cotizar una impresora de etiquetas. Me gustaría recibir información sobre los modelos disponibles."*
- Desde Comodato: *"Hola DISCODE, quisiera información y cotización sobre la solución de comodato."*
- Desde Servicio Técnico: *"Hola DISCODE, quisiera cotizar servicio técnico para mis equipos de impresión/codificación."*
- Desde Casos: *"Hola DISCODE, me interesa implementar una solución similar al caso de [Nombre del Caso]."*

### 4.3. Barra de Navegación y Footer Unificado
- Cabecera con logotipo oficial, enlaces a las 9 secciones, botón de cotización rápida y badge ISO 9001. Menú hamburguesa interactivo para celulares.
- Botón flotante de WhatsApp en la esquina inferior derecha con tooltip animado.
- Footer completo con navegación, lista de productos, contacto, enlace a políticas y derechos reservados.

### 4.4. Archivo de Configuración de Servidor `.htaccess` para cPanel
- Reescribe URLs para que funcionen limpias sin extensión: `discode.ec/productos` en lugar de `productos.html`.
- Activa compresión Gzip / Brotli y encabezados de caché para rendimiento de 100/100 en Google PageSpeed.

---

## 5. Verificación y Criterios de Aceptación
1. Todos los enlaces internos entre las 10 páginas funcionan sin enlaces rotos.
2. Todos los botones de cotización abren WhatsApp con el mensaje contextual correspondiente al número `+593 98 434 5891`.
3. El selector interactivo de Ribbon actualiza el diagnóstico en tiempo real al seleccionar papel, sintético o textil.
4. Las 16 industrias cuentan con sus datos, aplicaciones y botones de contacto.
5. El diseño es 100% responsivo y visualmente impecable en smartphones, tablets y pantallas desktop.
6. La estructura está lista para copiar y pegar directamente en la carpeta `public_html` de cPanel.
