/**
 * DISCODE ECUADOR - Catálogo Modular de Marcas y Tecnología
 * Permite agregar, remover o editar marcas fácilmente desde este archivo
 * sin modificar la estructura del archivo HTML.
 */

const DISCODE_BRANDS = [
  {
    id: "reiner",
    name: "REINER",
    subtitle: "Reiner JetStamp",
    origin: "Tecnología Alemana",
    category: "Codificación Directa & Fechado Móvil",
    description: "Equipos de codificación manual y automática de precisión alemana para imprimir texto variable, fechas, lotes, horas, numeración secuencial y códigos de barras directamente sobre cualquier superficie plana o curva.",
    highlights: [
      "Marcado sobre metal, plástico, vidrio, cartón y empaques flexibles",
      "Modelos portátiles de batería de larga duración",
      "Software amigable para carga rápida de datos de producción",
      "Disponibilidad local de tintas especiales, repuestos y servicio oficial"
    ],
    keyModels: [
      { code: "JetStamp 1025", desc: "Gran formato de impresión (hasta 25mm de altura), pantalla LCD integrada y conectividad Bluetooth/USB." },
      { code: "JetStamp 970", desc: "Impresión de alta precisión y velocidad para líneas de empaque y lotes farmacéuticos." },
      { code: "JetStamp 990", desc: "Formato ultracompacto y ligero para marcado rápido de fechas y vencimientos." }
    ],
    image: "assets/images/codificadores/jetstamp-1025.avif",
    gallery: [
      { src: "assets/images/codificadores/jetstamp-1025-app-botellas.jpg", alt: "Reiner JetStamp Marcado de Botellas" },
      { src: "assets/images/codificadores/jetstamp-1025-app-tuberias.jpg", alt: "Reiner JetStamp Marcado de Tuberías" }
    ],
    whatsappContext: "codificadores"
  },
  {
    id: "zebra",
    name: "ZEBRA TECHNOLOGIES",
    subtitle: "Impresoras Térmicas Industriales",
    origin: "Líder Global USA",
    category: "Impresoras Industriales, Semi-industriales & Escritorio",
    description: "Estándar mundial indiscutible en impresión de códigos de barras, etiquetas térmicas y trazabilidad para plantas de producción, bodegas logísticas y ambientes industriales severos.",
    highlights: [
      "Estructuras metálicas robustas preparadas para jornadas 24/7 sin descanso",
      "Compatibilidad total con emulaciones ZPL / EPL y sistemas ERP (SAP, Oracle)",
      "Cabezales térmicos de alta resolución (203, 300 y 600 DPI)",
      "Suministro inmediato de repuestos, rodillos platen y calibración técnica en Ecuador"
    ],
    keyModels: [
      { code: "Serie Industrial (ZT411 / ZT421)", desc: "Alto volumen para plantas procesadoras, camaroneras y centros de distribución." },
      { code: "Serie Semi-industrial (ZT231)", desc: "Rendimiento confiable y compacto para mediana producción y sector textil." },
      { code: "Serie de Escritorio (ZD220 / ZD421)", desc: "Operaciones comerciales, laboratorios y oficinas de despacho." },
      { code: "Serie Portátil Móvil (ZQ)", desc: "Impresión directa en bodega y punto de picking." }
    ],
    whatsappContext: "impresoras"
  },
  {
    id: "tsc",
    name: "TSC AUTO ID",
    subtitle: "Impresoras de Códigos de Barras",
    origin: "Ingeniería de Precisión Taiwán",
    category: "Impresoras Industriales & Comerciales",
    description: "Reconocida internacionalmente por su durabilidad mecánica excepcional, excelente relación costo-beneficio y confiabilidad en aplicaciones continuas de manufactura y distribución.",
    highlights: [
      "Mecanismos de tracción de ribbon de alta estabilidad",
      "Garantía de rendimiento para ribbons de cera, resina y resina textil",
      "Facilidad de integración y configuración de sensores de etiqueta",
      "Bajo costo de mantenimiento preventivo y repuestos accesibles"
    ],
    keyModels: [
      { code: "TSC MB240 / MH240", desc: "Equipos industriales compactos para jornadas extensas." },
      { code: "TSC TE200 / TE300", desc: "Líderes en impresión de escritorio para etiquetas de producto y logística." },
      { code: "TSC TTP-244 Pro", desc: "La impresora semi-industrial más probada y resistente del mercado." }
    ],
    whatsappContext: "impresoras"
  },
  {
    id: "godex",
    name: "GODEX",
    subtitle: "Soluciones de Impresión Especializada",
    origin: "Tecnología Especializada",
    category: "Impresión Textil & Etiquetas Industriales",
    description: "Especialistas en ingeniería de impresión térmica con excelente respuesta para etiquetas textiles de poliamida, nylon, cartulinas colgantes y etiquetas autoadhesivas de alta densidad.",
    highlights: [
      "Excelente tracción y calibración para materiales textiles delicados",
      "Software de diseño de etiquetas gratuito y fácil de operar",
      "Capacidad para rollos de ribbon de hasta 300 metros",
      "Excelente estabilidad térmica en cabezal para Resina Textil"
    ],
    keyModels: [
      { code: "GoDEX G500 / G530", desc: "Ideal para confección, etiquetas de lavado textil y tallas." },
      { code: "GoDEX ZX420i / ZX1200", desc: "Robustez industrial para etiquetado continuo de pallets y cajas máster." }
    ],
    whatsappContext: "impresoras"
  }
];

/**
 * Función que genera dinámicamente las tarjetas de marcas en cualquier contenedor HTML.
 * Para agregar una nueva marca en el futuro, solo se añade un objeto al arreglo DISCODE_BRANDS arriba.
 * @param {string} containerId - ID del elemento contenedor donde se inyectará el HTML
 */
function renderBrandsCatalog(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '';
  DISCODE_BRANDS.forEach((brand, idx) => {
    const waLink = typeof DISCODE_CONFIG !== 'undefined' 
      ? DISCODE_CONFIG.getWhatsAppLink(brand.whatsappContext, `Interés en equipos marca ${brand.name}`)
      : `https://wa.me/593984345891?text=${encodeURIComponent(`Hola DISCODE, me interesa información y cotización sobre la marca ${brand.name}`)}`;

    const imageHtml = brand.image 
      ? `<div class="bg-slate-50 border border-slate-100 p-4 mb-6 flex items-center justify-center">
           <img src="${brand.image}" alt="${brand.name}" class="h-36 w-auto object-contain">
         </div>`
      : '';

    const galleryHtml = (brand.gallery && brand.gallery.length > 0)
      ? `<div class="grid grid-cols-2 gap-3 mb-6">
           ${brand.gallery.map(img => `
             <div class="bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
               <img src="${img.src}" alt="${img.alt}" class="h-28 w-full object-cover">
             </div>
           `).join('')}
         </div>`
      : '';

    html += `
      <article class="border border-slate-200 bg-white p-8 md:p-10 transition hover:border-slate-400 flex flex-col justify-between" id="brand-${brand.id}">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
            <div>
              <span class="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">MARCA 0${idx + 1} · ${brand.origin}</span>
              <h3 class="text-2xl font-bold tracking-tight text-slate-950 mt-1">${brand.name}</h3>
              <span class="text-xs font-medium text-brand-navy">${brand.subtitle}</span>
            </div>
            <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold border border-slate-200">
              ${brand.category}
            </span>
          </div>

          ${imageHtml}
          ${galleryHtml}

          <p class="text-sm text-slate-600 leading-relaxed mb-6">
            ${brand.description}
          </p>

          <div class="mb-6">
            <span class="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider block mb-3">Características Clave:</span>
            <ul class="text-xs text-slate-600 space-y-2">
              ${brand.highlights.map(h => `<li class="flex items-start gap-2"><span class="text-brand-navy font-bold font-mono">[+]</span> <span>${h}</span></li>`).join('')}
            </ul>
          </div>

          <div class="mb-8 pt-4 border-t border-slate-100">
            <span class="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider block mb-3">Modelos Representativos en Ecuador:</span>
            <div class="space-y-2">
              ${brand.keyModels.map(m => `
                <div class="text-xs bg-slate-50 p-2.5 border-l-2 border-brand-navy">
                  <strong class="text-slate-900 font-semibold">${m.code}:</strong> 
                  <span class="text-slate-600">${m.desc}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span class="text-xs text-slate-500 font-mono">Disponibilidad de repuestos & consumibles</span>
          <a href="${waLink}" target="_blank" class="w-full sm:w-auto text-center bg-brand-navy hover:bg-slate-900 text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition rounded-sm">
            Cotizar ${brand.name} por WhatsApp
          </a>
        </div>
      </article>
    `;
  });

  // Nota de pie de catálogo para marcas bajo proyecto
  html += `
    <div class="border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
      <span class="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Marcas Adicionales y Proyectos Especiales</span>
      <p class="text-sm text-slate-700 max-w-2xl mx-auto">
        ¿Requieres repuestos, consumibles o soporte para otras marcas de impresoras y codificadores? Evaluamos la compatibilidad y requerimientos técnicos específicos de tu operación.
      </p>
      <a href="https://wa.me/593984345891?text=${encodeURIComponent('Hola DISCODE, quisiera consultar sobre soporte/suministros para otra marca de impresora/codificador.')}" target="_blank" class="inline-block mt-4 text-xs font-bold text-brand-navy uppercase tracking-wider hover:underline">
        Consultar Otras Marcas por WhatsApp →
      </a>
    </div>
  `;

  container.innerHTML = html;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DISCODE_BRANDS, renderBrandsCatalog };
}
