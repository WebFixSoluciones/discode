/**
 * DISCODE ECUADOR - Configuración Centralizada del Sitio Web
 * Permite actualizar datos de contacto, enlaces y mensajes de WhatsApp
 * en un solo lugar para todas las páginas del sitio en cPanel.
 */

const DISCODE_CONFIG = {
  companyName: "DISCODE ECUADOR S.A.",
  tagline: "Soluciones de Identificación, Codificación y Trazabilidad para la Industria",
  whatsappNumber: "593984345891",
  phoneFormatted: "+593 98 434 5891",
  phoneTel: "+593984345891",
  email: "ventas@discode.ec",
  address: "Guayaquil · Quito · Cuenca · Cobertura Industrial en todo el Ecuador",
  hours: "Lunes a Viernes: 08:30 - 17:30",
  iso: "Certificación ISO 9001 — Sistema de Gestión de Calidad",

  // Mensajes pre-estructurados contextuales por sección/producto
  messages: {
    default: "Hola DISCODE, quisiera solicitar una cotización general de sus soluciones.",
    etiquetas: "Hola DISCODE, quisiera cotizar etiquetas adhesivas para mis productos.",
    ribbons: "Hola DISCODE, quisiera cotizar ribbons. Me gustaría recibir información sobre las opciones disponibles.",
    ribbon_cera: "Hola DISCODE, quisiera cotizar Ribbon de Cera para etiquetas de papel.",
    ribbon_resina: "Hola DISCODE, quisiera cotizar Ribbon de Resina para etiquetas sintéticas/polipropileno.",
    ribbon_textil: "Hola DISCODE, quisiera cotizar Ribbon de Resina Textil para prendas y confección.",
    impresoras: "Hola DISCODE, quisiera cotizar una impresora de etiquetas. Me gustaría recibir información sobre los modelos disponibles.",
    impresora_industrial: "Hola DISCODE, quisiera cotizar una impresora industrial de alto volumen.",
    impresora_escritorio: "Hola DISCODE, quisiera cotizar una impresora de escritorio/comercial.",
    codificadores: "Hola DISCODE, quisiera cotizar codificadores directos Reiner JetStamp con tecnología alemana.",
    reiner_1025: "Hola DISCODE, me interesa cotizar el codificador Reiner JetStamp 1025 de gran formato.",
    reiner_970: "Hola DISCODE, me interesa cotizar el codificador Reiner JetStamp 970 de precisión.",
    reiner_990: "Hola DISCODE, me interesa cotizar el codificador Reiner JetStamp 990 compacto.",
    solucion_integral: "Hola DISCODE, quisiera cotizar la Solución Integral DISCODE para centralizar insumos y equipos.",
    servicio_absoluto: "Hola DISCODE, quisiera cotizar el Servicio Absoluto DISCODE de respaldo y suministros continuos.",
    comodato: "Hola DISCODE, quisiera información y cotización sobre la solución de comodato de equipos de impresión.",
    servicio_tecnico: "Hola DISCODE, quisiera cotizar servicio técnico y mantenimiento para mis equipos de impresión/codificación.",
    preventivo: "Hola DISCODE, requiero coordinar mantenimiento preventivo para impresoras/codificadores.",
    correctivo: "Hola DISCODE, requiero soporte correctivo urgente para un equipo con fallas.",
    industria_camaronera: "Hola DISCODE, requiero cotizar soluciones de etiquetado y trazabilidad para industria camaronera (cámaras de congelación).",
    industria_pesquera: "Hola DISCODE, requiero cotizar soluciones de identificación para industria pesquera y atunera.",
    industria_alimentos: "Hola DISCODE, requiero cotizar codificación de fechas, lotes y trazabilidad para alimentos.",
    industria_agricola: "Hola DISCODE, requiero cotizar identificación y empaque para el sector agrícola.",
    industria_florícola: "Hola DISCODE, requiero cotizar etiquetas para exportación florícola en cuartos fríos.",
    industria_textil: "Hola DISCODE, requiero cotizar ribbons de resina textil y etiquetas para confección.",
    industria_farmaceutica: "Hola DISCODE, requiero cotizar trazabilidad y codificación de alta resolución para laboratorios/farmacéutica.",
    industria_logistica: "Hola DISCODE, requiero cotizar soluciones de etiquetado de cajas, pallets y logística de bodega.",
    caso_camaronera: "Hola DISCODE, me interesa implementar una solución similar al Caso de Planta Camaronera para Exportación.",
    caso_logistica: "Hola DISCODE, me interesa implementar una solución similar al Caso de Centro de Distribución y Bodega.",
    caso_textil: "Hola DISCODE, me interesa implementar una solución similar al Caso de Confección Textil con Lavado Industrial.",
    caso_farmaceutica: "Hola DISCODE, me interesa implementar una solución similar al Caso de Marcado Directo en Laboratorio."
  },

  /**
   * Genera el enlace de WhatsApp con el mensaje codificado
   * @param {string} contextKey - Clave en messages
   * @param {string} [extraDetails] - Texto adicional opcional
   * @returns {string} Enlace completo https://wa.me/...
   */
  getWhatsAppLink: function(contextKey, extraDetails) {
    let msg = this.messages[contextKey] || this.messages.default;
    if (extraDetails) {
      msg += ` (${extraDetails})`;
    }
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
};

// Exportar para entornos Node si se ejecutan tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DISCODE_CONFIG;
}
