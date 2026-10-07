/**
 * DISCODE ECUADOR — Motor de Animaciones, Parallax Scrolling e Interactividad
 * Desarrollado con IntersectionObserver y requestAnimationFrame para máximo rendimiento (60fps).
 */

(function () {
  'use strict';

  // Respetar preferencia de reducción de movimiento del sistema operativo
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. BARRA DE PROGRESO DE SCROLL INTERACTIVA
     ========================================================================== */
  function initScrollProgress() {
    let progressBar = document.getElementById('discode-scroll-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'discode-scroll-progress';
      progressBar.setAttribute('aria-hidden', 'true');
      document.body.prepend(progressBar);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            const progress = (window.scrollY / docHeight) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     2. MOTOR DE SCROLL REVEAL (ENTRADA Y SALIDA ELEGANTE EN SCROLL)
     ========================================================================== */
  function initScrollReveal() {
    // 2.1 Identificar elementos explícitos y agregar reveal automático a secciones clave
    const autoRevealTargets = [
      'section > .discode-container > div:first-child',
      'section h2',
      '.grid > article',
      '.grid > div[class*="rounded-2xl"]',
      '.grid > div[class*="rounded-3xl"]',
      '.catalog-cell'
    ];

    autoRevealTargets.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains('reveal') && 
            !el.classList.contains('reveal-left') && 
            !el.classList.contains('reveal-right') && 
            !el.classList.contains('reveal-scale') &&
            !el.closest('header') &&
            !el.closest('#hero-slider-section')) {
          el.classList.add('reveal');
        }
      });
    });

    // 2.2 Aplicar Stagger secuencial a grupos de tarjetas
    document.querySelectorAll('.grid').forEach(grid => {
      const items = grid.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      items.forEach((item, index) => {
        const delayClass = `reveal-delay-${(index % 5) + 1}`;
        item.classList.add(delayClass);
      });
    });

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // 2.3 IntersectionObserver para disparar animaciones al entrar y salir del viewport
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach(el => {
      revealObserver.observe(el);
    });
  }

  /* ==========================================================================
     3. MOTOR DE PARALLAX SCROLLING MULTI-NIVEL
     ========================================================================== */
  function initParallaxScrolling() {
    if (prefersReducedMotion) return;

    // Elementos del Hero Home
    const heroTrack = document.getElementById('hero-slider-track');
    const heroContent = document.querySelector('#hero-slider-section .discode-container');
    const heroSection = document.getElementById('hero-slider-section');

    // Subpáginas: Solo la imagen de fondo de cabecera de subpáginas (nunca tarjetas de industrias ni cuadrículas)
    const subpageHeroImgs = document.querySelectorAll('section[data-parallax-section="true"] > div.absolute > img.object-cover');
    
    // Elementos con atributo data-parallax
    const customParallaxEls = document.querySelectorAll('[data-parallax]');

    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // 3.1 Parallax en el Hero del Home
      if (heroSection && heroTrack) {
        const heroHeight = heroSection.offsetHeight;
        if (scrollY <= heroHeight + 100) {
          // Fondo se desplaza a velocidad 0.35 para crear profundidad hacia atrás
          heroTrack.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
          
          // Contenido de texto y botones se desplaza suavemente y desvanece sutilmente
          if (heroContent) {
            const opacity = Math.max(0.1, 1 - (scrollY / (heroHeight * 0.75)));
            heroContent.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
            heroContent.style.opacity = opacity.toFixed(3);
          }
        }
      }

      // 3.2 Parallax en imágenes de encabezado de subpáginas (excluyendo terminantemente tarjetas de industrias)
      subpageHeroImgs.forEach(img => {
        if (img.closest('#seccion-industrias') || img.closest('[data-no-parallax]') || img.closest('.grid') || img.closest('a')) {
          img.style.transform = '';
          return;
        }
        const parentSec = img.closest('section');
        if (!parentSec) return;
        const rect = parentSec.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
          const shift = (rect.top * 0.25);
          img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.15)`;
        }
      });

      // 3.3 Parallax en elementos con data-parallax personalizado
      customParallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
          const shift = (rect.top - windowHeight * 0.5) * speed;
          el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    // Ejecutar inicial
    updateParallax();
  }

  /* ==========================================================================
     4. INTERACCIÓN 3D DE CURSOR (TILT EFFECT EN TARJETAS TÉCNICAS)
     ========================================================================== */
  function initCardTilt() {
    if (prefersReducedMotion || window.innerWidth < 1024) return;

    const cards = document.querySelectorAll('.interactive-card, .tilt-card, .catalog-cell, article.border, .grid > div.bg-white');

    cards.forEach(card => {
      card.style.transformStyle = 'preserve-3d';
      card.style.perspective = '1000px';

      let bounds = null;

      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.25s ease';
      });

      card.addEventListener('mousemove', (e) => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        
        const xPct = (mouseX / bounds.width) - 0.5;
        const yPct = (mouseY / bounds.height) - 0.5;

        // Rotación máxima muy sutil (4 grados) para mantener sobriedad industrial
        const rotX = -(yPct * 5).toFixed(2);
        const rotY = (xPct * 5).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        bounds = null;
        card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /* ==========================================================================
     5. CONTADORES NUMÉRICOS ANIMADOS EN SECCIONES TÉCNICAS
     ========================================================================== */
  function initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const targetNum = parseInt(entry.target.getAttribute('data-counter'), 10);
          const duration = 1800; // ms
          const startNum = 0;
          const startTime = performance.now();
          const prefix = entry.target.getAttribute('data-prefix') || '';
          const suffix = entry.target.getAttribute('data-suffix') || '';

          function updateNum(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing suave outQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = Math.floor(startNum + (targetNum - startNum) * easeProgress);

            entry.target.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateNum);
            } else {
              entry.target.textContent = `${prefix}${targetNum}${suffix}`;
            }
          }

          requestAnimationFrame(updateNum);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  /* ==========================================================================
     INICIALIZACIÓN AL CARGAR EL DOM
     ========================================================================== */
  function initAll() {
    initScrollProgress();
    initScrollReveal();
    initParallaxScrolling();
    initCardTilt();
    initCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();
