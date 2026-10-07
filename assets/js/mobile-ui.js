/**
 * ============================================================================
 * DISCODE ECUADOR — CONTROLADOR DE EXPERIENCIA MÓVIL TIPO APP (MOBILE-UI.JS)
 * ============================================================================
 * Maneja la navegación ergonómica en smartphones:
 * 1. Barra Inferior Táctil (App Bottom Tab Bar) con Smart Hide on Scroll
 * 2. Cajón Lateral Deslizante (Off-Canvas Drawer) con Swipe Gestures y Backdrop
 * 3. Acordeones fluidos con animación SVG
 * 4. Blindaje y scroll táctil de tablas de especificaciones
 * ============================================================================
 */

(function () {
  'use strict';

  const DiscodeMobileUI = {
    drawerEl: null,
    backdropEl: null,
    panelEl: null,
    bottomBarEl: null,
    lastScrollY: 0,
    scrollThreshold: 10,
    touchStartX: 0,
    touchStartY: 0,

    init() {
      // 1. Construir e inicializar Barra Inferior Flotante
      this.initBottomBar();

      // 2. Construir o vincular Drawer Lateral
      this.initDrawer();

      // 3. Inicializar acordeones móviles
      this.initAccordions();

      // 4. Inicializar Smart Hide en Scroll
      this.initSmartHideScroll();

      // 5. Blindar tablas técnicas en móviles
      this.enhanceTechnicalTables();

      // 6. Resaltar enlace activo en navegación móvil
      this.highlightActiveRoute();
    },

    /**
     * Determina la URL de WhatsApp actual con contexto
     */
    getWhatsAppUrl() {
      if (typeof DISCODE_CONFIG !== 'undefined' && DISCODE_CONFIG.getWhatsAppLink) {
        return DISCODE_CONFIG.getWhatsAppLink('default');
      }
      return 'https://wa.me/593984345891?text=Hola%20DISCODE%2C%20deseo%20asesor%C3%ADa%20t%C3%A9cnica%20y%20cotizaci%C3%B3n.';
    },

    /**
     * 1. Barra Inferior Táctil (App Bottom Tab Bar)
     */
    initBottomBar() {
      if (document.getElementById('discode-bottom-bar')) return;

      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const isHome = currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '';
      const isProd = currentPath.includes('producto');
      const isSol = currentPath.includes('solucion');

      const bar = document.createElement('nav');
      bar.id = 'discode-bottom-bar';
      bar.setAttribute('aria-label', 'Navegación Móvil Rápida');
      bar.className = 'fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] block md:hidden select-none print:hidden';

      const waUrl = this.getWhatsAppUrl();

      bar.innerHTML = `
        <div class="grid grid-cols-5 items-center justify-around px-1 pt-1.5 pb-1 max-w-lg mx-auto">
          <!-- 1. Inicio -->
          <a href="/" class="touch-press flex flex-col items-center justify-center py-1 text-[10px] font-bold ${isHome ? 'text-brand-navy' : 'text-slate-500 hover:text-slate-900'}">
            <svg class="w-5 h-5 mb-0.5 ${isHome ? 'stroke-[2.5]' : 'stroke-2'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>Inicio</span>
          </a>

          <!-- 2. Productos -->
          <a href="/productos" class="touch-press flex flex-col items-center justify-center py-1 text-[10px] font-bold ${isProd ? 'text-brand-navy' : 'text-slate-500 hover:text-slate-900'}">
            <svg class="w-5 h-5 mb-0.5 ${isProd ? 'stroke-[2.5]' : 'stroke-2'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            <span>Productos</span>
          </a>

          <!-- 3. WhatsApp Cotización (Centro Destacado) -->
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="touch-press flex flex-col items-center justify-center -mt-3.5 group">
            <div class="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg shadow-blue-600/30 border-2 border-white group-hover:scale-105 transition-transform duration-200">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <span class="text-[9px] font-black uppercase tracking-wider text-brand-navy mt-0.5">Cotizar</span>
          </a>

          <!-- 4. Soluciones -->
          <a href="/soluciones" class="touch-press flex flex-col items-center justify-center py-1 text-[10px] font-bold ${isSol ? 'text-brand-navy' : 'text-slate-500 hover:text-slate-900'}">
            <svg class="w-5 h-5 mb-0.5 ${isSol ? 'stroke-[2.5]' : 'stroke-2'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <span>Soluciones</span>
          </a>

          <!-- 5. Menú (Dispara Drawer) -->
          <button id="discode-bottom-menu-trigger" type="button" class="touch-press flex flex-col items-center justify-center py-1 text-[10px] font-bold text-slate-500 hover:text-slate-900 cursor-pointer" aria-label="Abrir Menú Completo">
            <svg class="w-5 h-5 mb-0.5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <span>Menú</span>
          </button>
        </div>
      `;

      document.body.appendChild(bar);
      this.bottomBarEl = bar;

      // Evento para botón Menú de la barra inferior
      const bottomMenuBtn = document.getElementById('discode-bottom-menu-trigger');
      if (bottomMenuBtn) {
        bottomMenuBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openDrawer();
        });
      }
    },

    /**
     * 2. Off-Canvas Drawer Lateral Moderno
     */
    initDrawer() {
      // Si ya existe un drawer moderno `#discode-app-drawer`, reutilizarlo
      let drawer = document.getElementById('discode-app-drawer');

      if (!drawer) {
        drawer = document.createElement('aside');
        drawer.id = 'discode-app-drawer';
        drawer.className = 'fixed inset-0 z-[100] pointer-events-none xl:hidden print:hidden';
        drawer.setAttribute('aria-label', 'Menú de Navegación Lateral');

        const waUrl = this.getWhatsAppUrl();

        drawer.innerHTML = `
          <!-- Telón de fondo con desenfoque de cristal -->
          <div class="mobile-drawer-backdrop fixed inset-0 bg-slate-950/60 backdrop-blur-sm" id="discode-drawer-backdrop"></div>

          <!-- Contenedor del panel lateral -->
          <div class="mobile-drawer-panel fixed top-0 bottom-0 right-0 w-[88vw] max-w-sm bg-white shadow-2xl flex flex-col z-10 pointer-events-auto" id="discode-drawer-panel">
            
            <!-- Cabecera del Drawer -->
            <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <a href="/" class="block">
                <img src="assets/images/logo.png" alt="DISCODE ECUADOR" class="h-10 w-auto object-contain">
              </a>
              <button id="discode-drawer-close" type="button" class="touch-press w-10 h-10 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition" aria-label="Cerrar Menú">
                <svg class="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Cuerpo del Drawer con scroll táctil -->
            <div class="flex-1 overflow-y-auto touch-momentum px-5 py-4 space-y-1 text-sm font-medium">
              
              <!-- Inicio -->
              <a href="/" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-900 font-bold transition">
                <span class="w-2 h-2 rounded-full bg-brand-navy"></span>
                <span>Inicio</span>
              </a>

              <!-- Acordeón: Productos -->
              <div class="border-b border-slate-100/80 pb-1">
                <button type="button" class="mobile-acc-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-800 hover:bg-slate-50 font-bold transition cursor-pointer" data-drawer-acc="acc-drawer-productos">
                  <div class="flex items-center gap-3">
                    <svg class="w-4 h-4 text-brand-navy stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    <span>Productos</span>
                  </div>
                  <svg class="mobile-acc-arrow w-4 h-4 text-slate-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="acc-drawer-productos" class="mobile-acc-content pl-9 pr-2 space-y-1 text-xs">
                  <a href="/producto-etiquetas" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Etiquetas Técnicas (BOPP, Térmico, Congelados)</a>
                  <a href="/producto-ribbons" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Ribbons Térmicos (Cera, Resina, Textil HL35)</a>
                  <a href="/producto-impresoras" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Impresoras Térmicas Zebra & TSC 24/7</a>
                  <a href="/producto-codificadores" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Codificadores TIJ Portátiles Reiner</a>
                  <a href="/producto-cajas" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Cajas & Corrugados para Empaque</a>
                  <a href="/productos" class="block py-2.5 text-brand-navy font-bold">Ver Todo el Catálogo de Productos →</a>
                </div>
              </div>

              <!-- Acordeón: Soluciones -->
              <div class="border-b border-slate-100/80 pb-1">
                <button type="button" class="mobile-acc-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-800 hover:bg-slate-50 font-bold transition cursor-pointer" data-drawer-acc="acc-drawer-soluciones">
                  <div class="flex items-center gap-3">
                    <svg class="w-4 h-4 text-brand-navy stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                    <span>Soluciones</span>
                  </div>
                  <svg class="mobile-acc-arrow w-4 h-4 text-slate-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="acc-drawer-soluciones" class="mobile-acc-content pl-9 pr-2 space-y-1 text-xs">
                  <a href="/solucion-integral" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Solución Integral Consolidada</a>
                  <a href="/solucion-servicio-absoluto" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Servicio Absoluto & Cero Paradas</a>
                  <a href="/solucion-comodato" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Equipos en Comodato Operativo</a>
                  <a href="/soluciones" class="block py-2.5 text-brand-navy font-bold">Ver Todas las Soluciones Industriales →</a>
                </div>
              </div>

              <!-- Acordeón: Recursos -->
              <div class="border-b border-slate-100/80 pb-1">
                <button type="button" class="mobile-acc-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-800 hover:bg-slate-50 font-bold transition cursor-pointer" data-drawer-acc="acc-drawer-recursos">
                  <div class="flex items-center gap-3">
                    <svg class="w-4 h-4 text-brand-navy stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    <span>Recursos Técnicos</span>
                  </div>
                  <svg class="mobile-acc-arrow w-4 h-4 text-slate-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="acc-drawer-recursos" class="mobile-acc-content pl-9 pr-2 space-y-1 text-xs">
                  <a href="/recurso-selector-ribbon" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Selector Interactivo de Ribbons</a>
                  <a href="/recurso-transferencia-vs-directa" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Transferencia Térmica vs Directa</a>
                  <a href="/recurso-como-elegir-impresora" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Cómo Elegir Impresora Industrial</a>
                  <a href="/recurso-mantenimiento-zebra" class="block py-2 text-slate-600 hover:text-brand-navy font-medium border-b border-slate-50">Mantenimiento Preventivo Zebra & TSC</a>
                  <a href="/recursos" class="block py-2.5 text-brand-navy font-bold">Ver Todas las Guías y Descargas →</a>
                </div>
              </div>

              <!-- Enlaces directos clave -->
              <a href="/servicio-tecnico" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold transition">
                <svg class="w-4 h-4 text-slate-500 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Servicio Técnico</span>
              </a>

              <a href="/industrias" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold transition">
                <svg class="w-4 h-4 text-slate-500 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                <span>Industrias</span>
              </a>

              <a href="/marcas" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold transition">
                <svg class="w-4 h-4 text-slate-500 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                <span>Marcas Representadas</span>
              </a>

              <a href="/casos" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold transition">
                <svg class="w-4 h-4 text-slate-500 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Casos de Éxito</span>
              </a>

              <a href="/nosotros" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold transition">
                <svg class="w-4 h-4 text-slate-500 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                <span>Sobre DISCODE</span>
              </a>

              <a href="/contacto" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold transition">
                <svg class="w-4 h-4 text-slate-500 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>Contacto Directo</span>
              </a>

            </div>

            <!-- Pie del Drawer con llamadas directas -->
            <div class="p-4 border-t border-slate-100 bg-slate-50/70 space-y-2">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="touch-press flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-navy hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Cotizar por WhatsApp</span>
              </a>
              <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <a href="tel:+593984345891" class="discode-phone-link hover:text-brand-navy font-semibold flex items-center gap-1">
                  📞 +593 98 434 5891
                </a>
                <span class="text-slate-400">Lun-Vie 8:30-17:30</span>
              </div>
            </div>

          </div>
        `;

        document.body.appendChild(drawer);
      }

      this.drawerEl = drawer;
      this.backdropEl = document.getElementById('discode-drawer-backdrop');
      this.panelEl = document.getElementById('discode-drawer-panel');

      // Botón de cierre
      const closeBtn = document.getElementById('discode-drawer-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeDrawer());
      }

      // Tap en backdrop
      if (this.backdropEl) {
        this.backdropEl.addEventListener('click', () => this.closeDrawer());
      }

      // Tecla Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isDrawerOpen()) {
          this.closeDrawer();
        }
      });

      // Gesto táctil Swipe-to-close en el panel
      if (this.panelEl) {
        this.panelEl.addEventListener('touchstart', (e) => {
          this.touchStartX = e.touches[0].clientX;
          this.touchStartY = e.touches[0].clientY;
        }, { passive: true });

        this.panelEl.addEventListener('touchend', (e) => {
          const deltaX = e.changedTouches[0].clientX - this.touchStartX;
          const deltaY = e.changedTouches[0].clientY - this.touchStartY;

          // Si el deslizamiento fue principalmente hacia la derecha (> 60px)
          if (deltaX > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
            this.closeDrawer();
          }
        }, { passive: true });
      }

      // Conectar todos los botones hamburguesa existentes
      document.querySelectorAll('#mobile-menu-btn, [data-mobile-menu-trigger]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openDrawer();
        });
      });
    },

    openDrawer() {
      if (!this.drawerEl) return;
      this.drawerEl.classList.remove('pointer-events-none');
      if (this.backdropEl) this.backdropEl.classList.add('is-open');
      if (this.panelEl) this.panelEl.classList.add('is-open');
      document.body.classList.add('mobile-drawer-open');
    },

    closeDrawer() {
      if (!this.drawerEl) return;
      if (this.backdropEl) this.backdropEl.classList.remove('is-open');
      if (this.panelEl) this.panelEl.classList.remove('is-open');
      document.body.classList.remove('mobile-drawer-open');

      setTimeout(() => {
        if (this.drawerEl && !this.isDrawerOpen()) {
          this.drawerEl.classList.add('pointer-events-none');
        }
      }, 350);
    },

    isDrawerOpen() {
      return this.panelEl && this.panelEl.classList.contains('is-open');
    },

    /**
     * 3. Acordeones fluidos con animación SVG
     */
    initAccordions() {
      const accordionBtns = document.querySelectorAll('[data-drawer-acc]');
      accordionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = btn.getAttribute('data-drawer-acc');
          const content = document.getElementById(targetId);
          if (!content) return;

          const isActive = btn.classList.contains('is-active');

          if (isActive) {
            btn.classList.remove('is-active');
            content.style.maxHeight = '0px';
          } else {
            btn.classList.add('is-active');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });
    },

    /**
     * 4. Smart Hide on Scroll para la Barra Inferior
     */
    initSmartHideScroll() {
      if (!this.bottomBarEl) return;

      let ticking = false;

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - this.lastScrollY;

            // Si está muy arriba, mostrar siempre
            if (currentScrollY < 60) {
              this.bottomBarEl.classList.remove('bottom-bar-hidden');
            } else if (diff > this.scrollThreshold) {
              // Scroll descendente rápido -> ocultar barra
              this.bottomBarEl.classList.add('bottom-bar-hidden');
            } else if (diff < -this.scrollThreshold) {
              // Scroll ascendente -> mostrar barra
              this.bottomBarEl.classList.remove('bottom-bar-hidden');
            }

            this.lastScrollY = currentScrollY;
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    },

    /**
     * 5. Blindar tablas técnicas en pantallas móviles
     */
    enhanceTechnicalTables() {
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        const parent = table.parentElement;
        if (!parent.classList.contains('overflow-x-auto')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'w-full overflow-x-auto touch-momentum scrollbar-none rounded-xl my-4';
          parent.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });
    },

    /**
     * 6. Resaltar ruta activa en navegación móvil
     */
    highlightActiveRoute() {
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const drawerLinks = document.querySelectorAll('#discode-drawer-panel a');

      drawerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const cleanHref = href.split('#')[0].replace('.html', '').replace(/\/$/, '') || '/';

        if (cleanHref === currentPath && currentPath !== '/') {
          link.classList.add('text-brand-navy', 'bg-blue-50/60');
        }
      });
    }
  };

  // Exponer globalmente e inicializar al cargar DOM
  window.DiscodeMobileUI = DiscodeMobileUI;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DiscodeMobileUI.init());
  } else {
    DiscodeMobileUI.init();
  }

})();
