# Especificación de Diseño: Experiencia Móvil de Próxima Generación para Smartphones (DISCODE)

## 1. Contexto y Objetivos

El portal corporativo e industrial de **DISCODE ECUADOR** requiere una experiencia móvil de nivel de aplicación nativa para smartphones, garantizando:
- **Cero pérdida visual:** Ninguna tarjeta, ficha técnica, tabla comparativa, texto o imagen debe quedar truncada, desbordada o ilegible en pantallas móviles (360px a 430px).
- **Alta interactividad ergonómica:** Navegación optimizada para uso con el pulgar con cajón lateral deslizante (*Off-Canvas Drawer*), barra táctil inferior fija (*App Bottom Bar*), microinteracciones y feedback elástico al tacto.
- **Rendimiento óptimo:** 60 FPS sin dependencias externas pesadas, usando 100% Vanilla JS y Tailwind CSS.

---

## 2. Arquitectura de Componentes Móviles

### 2.1. Cajón Lateral Deslizante (Off-Canvas Drawer)
- **Activadores:** Botón hamburguesa en el encabezado (`#mobile-menu-btn`) y botón "Menú" en la barra inferior.
- **Estructura y Comportamiento:**
  - Panel deslizante lateral derecho (`fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[100] shadow-2xl`).
  - Telón de fondo con desenfoque (`fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[99]`).
  - Cabecera con logotipo de DISCODE y botón de cierre táctil (mínimo 44x44px).
  - Acordeones fluidos para *Productos*, *Soluciones* y *Recursos* con rotación suave de chevrón SVG y transición de altura (`max-height`).
  - Acceso directo a todas las secciones: *Servicio Técnico, Industrias, Marcas, Casos, Nosotros, Contacto*.
  - Pie del cajón con botones rápidos de llamada directa (`tel:`) y WhatsApp corporativo.
  - Soporte de cierre por tap en fondo, tecla Escape y gesto de deslizamiento (*Swipe-to-close*).

### 2.2. Barra Táctil Inferior (App Bottom Tab Bar)
- **Visibilidad:** Móvil únicamente (`block md:hidden`).
- **Posición:** Fija en la base (`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]`).
- **Ergonomía de iPhone / Android:** `padding-bottom: max(0.5rem, env(safe-area-inset-bottom))`.
- **Botones Táctiles:**
  1. **Inicio:** Icono Home + texto "Inicio".
  2. **Productos:** Icono Catálogo + texto "Productos".
  3. **Soluciones:** Icono Bombilla/Industria + texto "Soluciones".
  4. **WhatsApp:** Botón central destacado con pulso de atención inmediata + texto "Cotizar".
  5. **Menú:** Icono Hamburguesa + texto "Menú" (abre el Drawer).
- **Smart Hide on Scroll:** Deslizamiento suave hacia abajo en scroll rápido descendente y reaparición inmediata en scroll ascendente.

### 2.3. Blindaje de Fichas Técnicas, Tablas y Grillas
- **Tablas de Especificaciones Técnicas:**
  - Envoltura con contenedor `overflow-x-auto scrollbar-none` y sutil indicador táctil de deslizamiento horizontal (`-webkit-overflow-scrolling: touch`).
- **Cuadrícula de Industrias:**
  - Grilla de 2 columnas en móvil (`grid-cols-2 gap-3.5`) con tarjetas de proporción `aspect-[4/3]`, textos legibles y sombra de texto reforzada.
- **Cinta Deslizable de Filtros (Chips):**
  - Barras de categorías convertidas en chips horizontales con snapping e inercia (`overflow-x-auto scrollbar-none flex-nowrap`).
- **Compensación de Altura (Safe Bottom Padding):**
  - Espaciado inferior de seguridad (`pb-24 md:pb-0`) para evitar que la barra inferior flotante tape botones de acción o pies de página.

### 2.4. Microinteracciones Táctiles
- **Feedback Elástico Activo:** Clase utilitaria `active:scale-[0.97] transition-transform duration-100` en botones, tarjetas y pestañas.
- **Tap Highlight:** Eliminación de estilos toscos de selección con `-webkit-tap-highlight-color: transparent`.

---

## 3. Estrategia de Implementación

1. **Estilos Globales Móviles (`assets/css/custom.css`):**
   - Reglas de safe-area-inset para iOS, estilos del Drawer, animación de acordeón, microinteracciones táctiles y soporte de scroll horizontal sin scrollbar.
2. **Controlador Móvil Unificado (`assets/js/mobile-ui.js` o integración en `assets/js/main.js`):**
   - Inicialización del Drawer lateral con apertura/cierre fluido, bloqueo de scroll en el body (`overflow: hidden`) al abrir, soporte de swipe gesture.
   - Creación y control dinámico de la Barra Inferior Táctil (Bottom Bar) de forma universal para todas las páginas del sitio sin requerir edición manual repetitiva en 19 archivos.
   - Manejador de acordeones fluidos y scroll de tablas con indicador.
3. **Verificación y Pruebas en Viewports Móviles:**
   - Pruebas en 360px (Android compacto), 390px (iPhone 12/13/14/15) y 430px (iPhone Pro Max / Android grande).
   - Comprobación de que no haya desbordamiento horizontal en el body (`overflow-x: hidden`).
   - Verificación de botones WhatsApp y llamadas.
