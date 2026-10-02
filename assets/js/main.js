/**
 * DISCODE ECUADOR - Script Global Principal
 * Manejo de navegación móvil, enlaces dinámicos de WhatsApp,
 * botón flotante contextual y herramientas interactivas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initMegaMenus();
  initActiveNavLink();
  initWhatsAppContextLinks();
  initFloatingWhatsApp();
  initDynamicContactData();
  initHeroBackgroundSlider();
});

/**
 * Control del menú hamburguesa en dispositivos móviles
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/**
 * Resalta el enlace activo de navegación según la URL actual
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  const navLinks = document.querySelectorAll('header nav a, #mobile-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalizar si tiene .html o URL limpia
    const cleanHref = href.replace('.html', '');
    const cleanPage = pageName.replace('.html', '');

    if (href === pageName || (cleanHref && cleanPage === cleanHref) || (pageName === '' && href === 'index.html')) {
      link.classList.add('text-brand-navy', 'font-bold');
      link.classList.remove('text-slate-700');
    }
  });
}

/**
 * Escanea elementos con atributo data-whatsapp-context y asigna el enlace correspondiente
 */
function initWhatsAppContextLinks() {
  if (typeof DISCODE_CONFIG === 'undefined') return;

  const waLinks = document.querySelectorAll('[data-whatsapp-context]');
  waLinks.forEach(el => {
    const context = el.getAttribute('data-whatsapp-context');
    const extra = el.getAttribute('data-whatsapp-detail') || '';
    const link = DISCODE_CONFIG.getWhatsAppLink(context, extra);

    if (el.tagName.toLowerCase() === 'a') {
      el.setAttribute('href', link);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else {
      el.addEventListener('click', () => {
        window.open(link, '_blank', 'noopener,noreferrer');
      });
    }
  });
}

/**
 * Inyecta los botones flotantes de acción: WhatsApp circular y Volver Arriba (scroll to top)
 * Diseño minimalista y circular inspirado en Reiner Marking
 */
function initFloatingWhatsApp() {
  if (typeof DISCODE_CONFIG === 'undefined') return;
  if (document.getElementById('discode-floating-wa')) return; // Ya existe

  // Determinar contexto por el nombre de la página
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  let pageContext = 'default';

  if (pageName.includes('producto')) {
    pageContext = 'etiquetas';
  } else if (pageName.includes('solucione')) {
    pageContext = 'solucion_integral';
  } else if (pageName.includes('servicio')) {
    pageContext = 'servicio_tecnico';
  } else if (pageName.includes('caso')) {
    pageContext = 'caso_camaronera';
  } else if (pageName.includes('recurso')) {
    pageContext = 'ribbons';
  }

  const waUrl = DISCODE_CONFIG.getWhatsAppLink(pageContext);

  const container = document.createElement('div');
  container.id = 'discode-floating-wa';
  container.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2.5 print:hidden';
  
  container.innerHTML = `
    <!-- Botón Flotante WhatsApp Circular -->
    <a href="${waUrl}" target="_blank" rel="noopener noreferrer" 
       class="w-12 h-12 md:w-13 md:h-13 bg-brand-navy hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
       title="Contactar por WhatsApp"
       aria-label="Contactar a DISCODE por WhatsApp">
      <svg class="w-6 h-6 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>

    <!-- Botón Volver Arriba (Scroll to top) Circular Estilo Reiner -->
    <button id="discode-scroll-top" type="button" 
            class="w-10 h-10 md:w-11 md:h-11 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer opacity-0 pointer-events-none translate-y-2"
            title="Volver arriba"
            aria-label="Volver arriba de la página">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  `;

  document.body.appendChild(container);

  const scrollTopBtn = document.getElementById('discode-scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    const handleScroll = () => {
      if (window.scrollY > 120) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
        scrollTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
        scrollTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
}

/**
 * Rellena automáticamente teléfonos y correos en elementos que tengan clases específicas
 */
function initDynamicContactData() {
  if (typeof DISCODE_CONFIG === 'undefined') return;

  document.querySelectorAll('.discode-phone-text').forEach(el => {
    el.textContent = DISCODE_CONFIG.phoneFormatted;
  });

  document.querySelectorAll('.discode-phone-link').forEach(el => {
    el.setAttribute('href', `tel:${DISCODE_CONFIG.phoneTel}`);
    if (!el.textContent.trim()) el.textContent = DISCODE_CONFIG.phoneFormatted;
  });

  document.querySelectorAll('.discode-email-link').forEach(el => {
    el.setAttribute('href', `mailto:${DISCODE_CONFIG.email}`);
    if (!el.textContent.trim()) el.textContent = DISCODE_CONFIG.email;
  });

  document.querySelectorAll('.discode-wa-default').forEach(el => {
    el.setAttribute('href', DISCODE_CONFIG.getWhatsAppLink('default'));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * Función para el Selector Técnico de Ribbon (usada en recursos.html)
 */
function selectRibbonMaterial(type) {
  const buttons = document.querySelectorAll('.ribbon-select-btn');
  buttons.forEach(b => {
    b.classList.remove('border-brand-navy', 'bg-slate-50', 'ring-1', 'ring-brand-navy');
    b.classList.add('border-slate-200', 'bg-white');
  });

  const selectedBtn = document.getElementById(`ribbon-opt-${type}`);
  if (selectedBtn) {
    selectedBtn.classList.add('border-brand-navy', 'bg-slate-50', 'ring-1', 'ring-brand-navy');
    selectedBtn.classList.remove('border-slate-200', 'bg-white');
  }

  const titleEl = document.getElementById('ribbon-result-title');
  const typeEl = document.getElementById('ribbon-result-type');
  const descEl = document.getElementById('ribbon-result-desc');
  const specsEl = document.getElementById('ribbon-result-specs');
  const ctaBtn = document.getElementById('ribbon-result-cta');

  if (!titleEl || !descEl || !ctaBtn) return;

  if (type === 'papel') {
    titleEl.textContent = 'Ribbon de Cera Formulada';
    typeEl.textContent = 'TIPO: WAX / CERA INDUSTRIAL';
    descEl.textContent = 'Formulación balanceada de ceras técnicas para sustratos de papel bond, térmico e ilustración. Permite excelente contraste en códigos de barras y datos variables a velocidad estándar con bajo desgaste del cabezal.';
    specsEl.innerHTML = `
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Sustratos idóneos:</span> <strong class="text-slate-900">Papel mate, brillante, cartulinas</strong></div>
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Resistencia al roce:</span> <strong class="text-slate-900">Moderada (despacho general)</strong></div>
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Aplicaciones:</span> <strong class="text-slate-900">Bodega, logística, cajas máster</strong></div>
    `;
    ctaBtn.href = DISCODE_CONFIG.getWhatsAppLink('ribbon_cera');
    ctaBtn.textContent = 'Cotizar Ribbon de Cera por WhatsApp';
  } else if (type === 'sintetico') {
    titleEl.textContent = 'Ribbon de Resina Industrial Pura';
    typeEl.textContent = 'TIPO: RESIN / RESINA DE ALTO RENDIMIENTO';
    descEl.textContent = 'Resina pura para polipropileno (BOPP), poliéster, polietileno y películas plásticas. Máxima fijación química resistente a congelación profunda (-25°C), humedad extrema, agua de mar, grasas y solventes.';
    specsEl.innerHTML = `
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Sustratos idóneos:</span> <strong class="text-slate-900">Polipropileno, Poliéster, Sintéticos</strong></div>
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Resistencia al roce:</span> <strong class="text-slate-900">Extrema (anti-fricción y químicos)</strong></div>
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Aplicaciones:</span> <strong class="text-slate-900">Camaroneras, congelados, químicos, agro</strong></div>
    `;
    ctaBtn.href = DISCODE_CONFIG.getWhatsAppLink('ribbon_resina');
    ctaBtn.textContent = 'Cotizar Ribbon de Resina por WhatsApp';
  } else if (type === 'textil') {
    titleEl.textContent = 'Ribbon de Resina Textil Especializada';
    typeEl.textContent = 'TIPO: TEXTILE RESIN / RESINA TEXTIL LAVABLE';
    descEl.textContent = 'Polímeros desarrollados exclusivamente para sustratos textiles como poliamida (nylon tafetán) y raso/satín. Resiste lavado industrial con agua caliente, detergentes severos, tintorería y planchado a alta temperatura.';
    specsEl.innerHTML = `
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Sustratos idóneos:</span> <strong class="text-slate-900">Nylon, Poliamida, Satín textil</strong></div>
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Resistencia al roce:</span> <strong class="text-slate-900">Ciclos de lavado textil y calor</strong></div>
      <div class="border-b border-slate-100 pb-1.5 flex justify-between"><span>Aplicaciones:</span> <strong class="text-slate-900">Confección, ropa, etiquetas de cuidado</strong></div>
    `;
    ctaBtn.href = DISCODE_CONFIG.getWhatsAppLink('ribbon_textil');
    ctaBtn.textContent = 'Cotizar Ribbon Textil por WhatsApp';
  }
}

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
    const parentContainer = trigger.closest('.megamenu-parent') || trigger.parentElement;
    if (parentContainer) {
      parentContainer.addEventListener('mouseleave', () => {
        closeTimeout = setTimeout(closeAll, 150);
      });
    }

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

/**
 * Slider / Carrusel dinámico de fondo para el Banner Principal (Hero)
 * Alterna suavemente entre las fotografías reales de planta, empaque y comodato.
 */
function initHeroBackgroundSlider() {
  const heroSection = document.getElementById('hero-slider-section');
  if (!heroSection) return;

  const slides = heroSection.querySelectorAll('[data-hero-slide]');
  if (!slides || slides.length <= 1) return;

  const captionEl = document.getElementById('hero-slide-caption');
  const tagEl = document.getElementById('hero-slide-tag');
  const counterEl = document.getElementById('hero-slide-counter');
  const dotsContainer = document.getElementById('hero-slider-dots');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoTimer = null;
  const INTERVAL_TIME = 4500; // 4.5 segundos por foto con avance automático continuo

  // Construir dots / barras indicadoras si el contenedor existe
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((slide, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `h-1.5 transition-all duration-300 rounded-xs cursor-pointer ${
        idx === 0 ? 'w-8 bg-brand-navy' : 'w-3 bg-slate-600 hover:bg-slate-400'
      }`;
      dot.setAttribute('aria-label', `Ir a fotografía ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('opacity-100', 'active');
        slide.classList.remove('opacity-0', 'pointer-events-none');
        
        // Actualizar textos informativos de la foto actual
        const caption = slide.getAttribute('data-caption') || '';
        const tag = slide.getAttribute('data-tag') || '';
        if (captionEl) captionEl.textContent = caption;
        if (tagEl) tagEl.textContent = tag;
        if (counterEl) {
          const currentStr = String(index + 1).padStart(2, '0');
          const totalStr = String(totalSlides).padStart(2, '0');
          counterEl.textContent = `${currentStr} / ${totalStr}`;
        }
      } else {
        slide.classList.remove('opacity-100', 'active');
        slide.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    // Actualizar estado activo de las barras/dots si existen
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('button');
      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.className = 'h-1.5 transition-all duration-300 rounded-xs cursor-pointer w-8 bg-brand-navy';
        } else {
          dot.className = 'h-1.5 transition-all duration-300 rounded-xs cursor-pointer w-3 bg-slate-600 hover:bg-slate-400';
        }
      });
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlide(currentIndex);
  }

  function startTimer() {
    stopTimer();
    autoTimer = setInterval(nextSlide, INTERVAL_TIME);
  }

  function stopTimer() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function resetTimer() {
    stopTimer();
    startTimer();
  }

  // Controles manuales Anterior / Siguiente (Flechas blancas laterales)
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetTimer();
    });
  }

  // Soporte para gestos táctiles (Swipe) en smartphones y tablets
  let touchStartX = 0;
  let touchEndX = 0;

  heroSection.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  heroSection.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 45;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetTimer();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetTimer();
    }
  }

  // Iniciar en slide 0 y activar rotación automática continua
  updateSlide(0);
  startTimer();
}


