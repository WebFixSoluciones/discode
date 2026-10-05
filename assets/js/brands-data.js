/**
 * DISCODE ECUADOR - Catálogo Oficial de Marcas Líderes
 * Estructura limpia y minimalista: Logo, imagen representativa no recortada,
 * descripción directa y botón de cotización.
 * Marcas oficiales: Zebra, TSC, REINER, GoDEX, Honeywell.
 */

const DISCODE_BRANDS = [
  {
    id: "zebra",
    name: "Zebra Technologies",
    shortName: "ZEBRA",
    origin: "Líder Global USA",
    category: "Impresoras Térmicas Industriales & Escritorio",
    logoSvg: `<svg class="h-8 sm:h-9 w-auto fill-current text-slate-900 group-hover:text-brand-navy transition" viewBox="0 0 120 32"><path d="M4 4h24l-14 24h16v-4H16l14-24H4v4z"/><text x="36" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="20" letter-spacing="1">ZEBRA</text></svg>`,
    description: "Líder global indiscutible en impresión de códigos de barras, etiquetas térmicas y trazabilidad. Equipos industriales de máxima durabilidad preparados para plantas procesadoras, centros de distribución y operaciones continuas 24/7 con disponibilidad permanente de cabezales originales, repuestos y servicio técnico especializado en Ecuador.",
    image: "assets/images/impresoras/zebra-zt411-empacadora.png",
    imageAlt: "Impresora industrial Zebra ZT411 en planta empacadora",
    whatsappContext: "impresoras",
    quoteText: "Cotizar Zebra"
  },
  {
    id: "tsc",
    name: "TSC Auto ID",
    shortName: "TSC",
    origin: "Ingeniería Taiwán",
    category: "Impresoras Industriales & Comerciales",
    logoSvg: `<svg class="h-8 sm:h-9 w-auto fill-current text-slate-900 group-hover:text-brand-navy transition" viewBox="0 0 110 32"><text x="4" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="24" letter-spacing="1">TSC</text><text x="60" y="16" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="700">Auto ID</text></svg>`,
    description: "Reconocida internacionalmente por su durabilidad mecánica excepcional, excelente relación costo-beneficio y confiabilidad en aplicaciones continuas de manufactura y distribución. Mecanismos de alta estabilidad compatibles con ribbons de cera, resina y resina textil, con bajo costo de mantenimiento y repuestos accesibles.",
    image: "assets/images/impresoras/tsc-mh261t-empacadora.png",
    imageAlt: "Impresora industrial TSC MH261T en línea de producción",
    whatsappContext: "impresoras",
    quoteText: "Cotizar TSC"
  },
  {
    id: "reiner",
    name: "REINER",
    shortName: "REINER",
    origin: "Tecnología Alemana",
    category: "Codificación Directa TIJ & Fechadores Portátiles",
    logoSvg: `<svg class="h-8 sm:h-9 w-auto fill-current text-slate-900 group-hover:text-brand-navy transition" viewBox="0 0 130 32"><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="4"/><path d="M12 10h8v6h-8z"/><text x="36" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="20" letter-spacing="1">REINER</text></svg>`,
    description: "Pionero alemán en codificación manual y automática de precisión mediante inyección térmica de tinta (TIJ). Permite imprimir texto variable, fechas, lotes, horas y códigos de barras directamente sobre plástico, metal, vidrio, cajas y madera. Mantenemos cartuchos en stock para disponibilidad inmediata en la ciudad de Guayaquil y envíos sin costo adicional al resto del País.",
    image: "assets/images/codificadores/reiner-1025-madera-pallet.jpg",
    imageAlt: "Codificador Reiner JetStamp 1025 marcando en madera y pallets",
    whatsappContext: "codificadores",
    quoteText: "Cotizar REINER"
  },
  {
    id: "godex",
    name: "GoDEX International",
    shortName: "GoDEX",
    origin: "Tecnología Especializada",
    category: "Impresión Textil & Etiquetas Industriales",
    logoSvg: `<svg class="h-8 sm:h-9 w-auto fill-current text-slate-900 group-hover:text-brand-navy transition" viewBox="0 0 120 32"><path d="M6 16a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" fill="none" stroke="currentColor" stroke-width="3.5"/><text x="32" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="21" letter-spacing="1">GoDEX</text></svg>`,
    description: "Especialistas en ingeniería de impresión térmica con excelente desempeño para etiquetas textiles de poliamida, nylon, satín y autoadhesivos industriales. Sobresale por su precisión de arrastre, facilidad de operación, software intuitivo y óptimo comportamiento térmico con cintas de resina textil.",
    image: "assets/images/impresoras/godex-g530-industrial.jpg",
    imageAlt: "Impresora GoDEX G530 imprimiendo etiquetas textiles y códigos de barras",
    whatsappContext: "impresoras",
    quoteText: "Cotizar GoDEX"
  },
  {
    id: "honeywell",
    name: "Honeywell",
    shortName: "Honeywell",
    origin: "Líder Global USA",
    category: "Impresión Industrial & Cómputo Móvil",
    logoSvg: `<span class="font-black text-2xl sm:text-3xl tracking-tighter uppercase font-sans text-slate-900 group-hover:text-brand-navy transition">Honeywell</span>`,
    description: "Tecnología de clase mundial en soluciones de trazabilidad, captura de datos e impresión industrial para cadenas de suministro exigentes. Equipos de alta precisión con conectividad avanzada, pantallas a color y estructuras reforzadas para manufactura y centros logísticos de alto tránsito.",
    image: "assets/images/impresoras/honeywell-pm45-industrial.jpg",
    imageAlt: "Impresora industrial Honeywell PM45 en centro de distribución logística",
    whatsappContext: "impresoras",
    quoteText: "Cotizar Honeywell"
  }
];

/**
 * Función que genera dinámicamente las tarjetas limpias de marcas.
 * Diseño minimalista: Logo + Imagen representativa limpia + Descripción + Botón WhatsApp.
 * @param {string} containerId - ID del elemento contenedor donde se inyectará el HTML
 */
function renderBrandsCatalog(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  `;

  DISCODE_BRANDS.forEach((brand, idx) => {
    const waLink = typeof DISCODE_CONFIG !== 'undefined' 
      ? DISCODE_CONFIG.getWhatsAppLink(brand.whatsappContext, `Interés en equipos de la marca ${brand.name}`)
      : `https://wa.me/593984345891?text=${encodeURIComponent(`Hola DISCODE, me interesa información y cotización sobre la marca ${brand.name}`)}`;

    html += `
      <article class="bg-white rounded-3xl border border-slate-150/80 p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group" id="brand-${brand.id}">
        <div>
          <!-- Cabecera de la Tarjeta con Logo y Origen -->
          <div class="flex items-center justify-between pb-5 mb-5 border-b border-slate-100 gap-3">
            <div>
              ${brand.logoSvg}
            </div>
            <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 font-bold rounded-full border border-slate-200/80">
              ${brand.origin}
            </span>
          </div>

          <!-- Imagen Representativa Completa y Sin Recortes Feos -->
          <div class="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/80 mb-5 aspect-[4/3] flex items-center justify-center p-2">
            <img src="${brand.image}" alt="${brand.imageAlt}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500">
          </div>

          <!-- Título y Categoría -->
          <div class="mb-3">
            <h3 class="text-xl font-bold text-slate-950 group-hover:text-brand-navy transition">
              ${brand.name}
            </h3>
            <span class="text-xs font-semibold text-blue-600 font-mono block mt-0.5">
              ${brand.category}
            </span>
          </div>

          <!-- Descripción Directa sin Saturación -->
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            ${brand.description}
          </p>
        </div>

        <!-- Botón Directo de Cotización -->
        <div class="pt-5 border-t border-slate-100">
          <a href="${waLink}" target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-blue-600 text-white font-bold py-3.5 px-5 text-xs uppercase tracking-wider rounded-xl transition shadow-md hover:shadow-lg">
            <span>${brand.quoteText} por WhatsApp</span>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>
        </div>
      </article>
    `;
  });

  html += `
    </div>

    <!-- Asesoría Técnica Directa para Marcas -->
    <div class="mt-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-brand-navy p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div class="max-w-2xl">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-blue-300 mb-3 backdrop-blur-xs">
          Compatibilidad y Suministros
        </span>
        <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          ¿Requieres consumibles o repuestos para alguna de estas marcas?
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Proveemos etiquetas térmicas, ribbons certificados, cabezales y servicio técnico con cobertura en todo el Ecuador.
        </p>
      </div>
      <a href="https://wa.me/593984345891?text=${encodeURIComponent('Hola DISCODE, quisiera consultar sobre consumibles y soporte para mis equipos.')}" target="_blank" class="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0">
        CONSULTAR POR WHATSAPP
      </a>
    </div>
  `;

  container.innerHTML = html;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DISCODE_BRANDS, renderBrandsCatalog };
}
