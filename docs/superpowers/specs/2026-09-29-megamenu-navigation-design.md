# Especificación de Diseño: Megamenús Industriales por Sección (DISCODE ECUADOR S.A.)

**Fecha:** 2026-09-29  
**Estado:** Propuesta aprobada por el usuario (Opción 1: Megamenús individuales por sección)  
**Alcance:** Las 24 páginas HTML del sitio web y catálogo técnico corporativo.

---

## 1. Visión y Objetivos

Integrar un sistema de navegación por **Megamenú** de alto estándar corporativo e industrial para DISCODE ECUADOR S.A., permitiendo a los clientes industriales (jefes de planta, compras, logística y mantenimiento) explorar y acceder directamente a todas las subpáginas técnicas de productos, soluciones y recursos sin saturar la barra superior ni requerir clics intermedios innecesarios.

### Principios de Diseño
- **Estética Editorial e Industrial de Alto Contraste:** Tipografía sans-serif nítida (*Plus Jakarta Sans*) combinada con acentos monoespaciados (*JetBrains Mono*).
- **Anti-AI Tropes estricto:** Cero emojis, cero burbujas flotantes, cero efectos de desenfoque brillante (*glow dots*), sin anidación excesiva de tarjetas.
- **Ancho Consistente al 90% (`.discode-container`):** Los megamenús se despliegan respetando el ancho de contenedor del 90% para una alineación visual perfecta.
- **Pureza Tecnológica:** HTML5 semántico, Tailwind CSS y Vanilla JavaScript sin dependencias externas pesadas.

---

## 2. Arquitectura de Navegación del Header

### Barra Superior Principal (Desktop)
```
[ LOGO DISCODE ]   [ Inicio ] [ Productos ▾ ] [ Soluciones ▾ ] [ Recursos ▾ ] [ Industrias ] [ Marcas ] [ Servicio Técnico ] [ Nosotros ] [ Contacto ]   [ COTIZAR WHATSAPP ] [ ☰ Móvil ]
```

### Comportamiento de los Triggers
- Cada ítem desplegable (`Productos`, `Soluciones`, `Recursos`) cuenta con un indicador sutil `▾`.
- Al posar el puntero (*hover*) o activar por teclado (*focus/click*), se despliega el megapanel correspondiente.
- Se implementa un retardo sutil de salida (150ms) para evitar cierres accidentales al mover el ratón entre el botón y el panel.
- Al abrir un megamenú, se cierran automáticamente los demás.
- Cierre mediante tecla `Escape` o clic fuera del panel.

---

## 3. Estructura y Contenido de los 3 Megamenús

### A. Megamenú "Productos" (`#megamenu-productos`)
Panel de 4 columnas técnicas correspondiente a cada subpágina de producto:
1. **01 / Etiquetas Técnicas** (`producto-etiquetas.html`):
   - *Subtítulo:* Insumos & Materiales Adhesivos.
   - *Detalle:* Papel térmico directo, transferencia, polipropileno BOPP, adhesivo para congelación (-25°C), cajas corrugadas. Bujes 1" y 3".
   - *Enlace:* "Ficha Técnica y Modelos →"
2. **02 / Cintas Térmicas (Ribbons)** (`producto-ribbons.html`):
   - *Subtítulo:* Cintas de Transferencia Térmica.
   - *Detalle:* Cera estándar, cera/resina mixta, resina pura para intemperie/químicos y resina textil HL35 para lavados industriales.
   - *Enlace:* "Ficha Técnica y Modelos →"
3. **03 / Impresoras Térmicas** (`producto-impresoras.html`):
   - *Subtítulo:* Zebra Technologies & TSC Auto ID.
   - *Detalle:* Gama industrial 24/7 (ZT411), semi-industrial (ZT231), escritorio (ZD220/ZD421) y portátiles de bodega.
   - *Enlace:* "Ficha Técnica y Modelos →"
4. **04 / Codificadores y Fechadores** (`producto-codificadores.html`):
   - *Subtítulo:* Reiner JetStamp (Tecnología Alemana).
   - *Detalle:* JetStamp 1025 (25 mm), 970 Graphic (12.7 mm) y 990 para fechado y lotes en metal, vidrio, plástico y film flexible.
   - *Enlace:* "Ficha Técnica y Modelos →"
- **Barra de Cierre / Footer del Megamenú:**
  - *Texto de asesoría:* "¿Requieres evaluar compatibilidad de insumos para tu línea?"
  - *Botones de acción:* "Ver Catálogo Completo de Productos →" (`productos.html`) y botón directo de cotización por WhatsApp.

---

### B. Megamenú "Soluciones" (`#megamenu-soluciones`)
Panel de 3 columnas principales + 1 columna de soporte técnico de planta:
1. **01 / Solución Integral Consolidada** (`solucion-integral.html`):
   - *Detalle:* Consolidación de etiquetas, ribbons, impresoras y codificadores bajo un único proveedor responsable. Elimina desajustes y rechazos de lectura.
   - *Enlace:* "Ver Solución Integral →"
2. **02 / Servicio Absoluto & Continuidad** (`solucion-servicio-absoluto.html`):
   - *Detalle:* Mantenimiento preventivo periódico, calibración de cabezales y disponibilidad de impresoras de respaldo para garantizar cero paradas de línea.
   - *Enlace:* "Ver Servicio Absoluto →"
3. **03 / Modalidad Comodato Tecnológico** (`solucion-comodato.html`):
   - *Detalle:* Instalación de impresoras y codificadores sin inversión inicial en activos fijos (Cero Capex), respaldado por consumo mensual de insumos.
   - *Enlace:* "Ver Modalidad Comodato →"
4. **04 / Columna Destacada de Diagnóstico & Guardia**:
   - Bloque contrastado con datos oficiales de DISCODE.
   - *Texto:* Diagnóstico técnico de planta sin costo y atención directa de guardia técnica.
   - *Acción:* Botón a WhatsApp con mensaje preconfigurado de soporte.
- **Barra de Cierre / Footer del Megamenú:**
  - *Enlace:* "Explorar las 3 Soluciones Industriales →" (`soluciones.html`)

---

### C. Megamenú "Recursos" (`#megamenu-recursos`)
Panel estructurado en 2 columnas de guías técnicas + 1 tarjeta de herramienta interactiva:
1. **Columna 1: Guías de Selección de Insumos & Equipos**:
   - *Selector Interactivo de Ribbons* (`recurso-selector-ribbon.html`): Matriz técnica papel/BOPP/textil.
   - *Transferencia Térmica vs Térmico Directo* (`recurso-transferencia-vs-directa.html`): Comparativa de costos y durabilidad.
   - *Cómo Elegir tu Impresora Industrial* (`recurso-como-elegir-impresora.html`): 7 factores de dimensionamiento.
   - *Tipos de Etiquetas y Adhesivos* (`recurso-tipo-de-etiqueta.html`): Materiales, criogenia y corrugados.
2. **Columna 2: Eficiencia Operativa & Trazabilidad**:
   - *Mejorar la Trazabilidad en Planta* (`recurso-mejorar-trazabilidad.html`): Estándares primario, secundario y SSCC terciario.
   - *Evitar Desperdicio de Insumos* (`recurso-evitar-desperdicios.html`): 8 reglas de calibración para ahorrar hasta un 35%.
   - *Mantenimiento de Cabezales Zebra & TSC* (`recurso-mantenimiento-zebra.html`): Rutinas de limpieza con alcohol isopropílico.
3. **Columna 3: Herramienta Destacada**:
   - Recuadro técnico con acceso directo al *Selector Interactivo de Ribbons*.
   - Botón directo "Abrir Selector Interactivo →".
- **Barra de Cierre / Footer del Megamenú:**
  - *Enlace:* "Ver Centro de Recursos y Descargas Técnicas →" (`recursos.html`)

---

## 4. Adaptabilidad Móvil (< 1024px / breakpoint `xl`)

En pantallas móviles y tablets, el menú hamburguesa existente se enriquece con un sistema de **acordeón colapsable**:
- El botón de menú móvil abre el panel lateral/superior.
- Los ítems "Productos", "Soluciones" y "Recursos" muestran un botón expandible `[+]` / `[-]`.
- Al tocar `[+]`, se despliega una lista anidada limpia con enlaces directos a cada subpágina.
- Mantiene el alto contraste, sin emojis y con tipografía legible en pantallas táctiles.

---

## 5. Implementación Técnica y Reutilización

1. **JavaScript Compartido (`assets/js/main.js`):**
   - Inicializador automático de eventos de hover/click para los megamenús desktop.
   - Manejador de acordeones para el menú móvil.
   - Gestión de accesibilidad (`aria-expanded`, accesibilidad de foco).
2. **Despliegue en las 24 páginas HTML:**
   - La estructura del header se actualiza de manera idéntica y estandarizada en los 24 archivos `.html`.
   - Se mantiene intacto el soporte de URLs amigables (`.htaccess`) y la configuración centralizada de WhatsApp (`assets/js/config.js`).
3. **Validación Automática:**
   - Auditoría final con `verify-site.js` para asegurar 0 enlaces rotos, 0 caracteres no permitidos (emojis/dingbats) y 100% de coherencia en las 24 páginas.
