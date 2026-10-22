/**
 * QUIX — OFFICIAL WEBSITE JAVASCRIPT v2.1
 * High-performance, accessible vanilla JavaScript with zero external dependencies.
 * Includes complete Internationalization (i18n) and Cinematic Language Transitions.
 */

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavbarScroll();
  initMobileMenu();
  initAnchorSmoothScroll();
  initHeroMockupTabs();
  initInstanceProfileSwitcher();
  initModToggles();
  initDiscoveryFilters();
  initScrollReveal();
});

/**
 * 0. Internationalization (i18n) & Cinematic Transition Engine
 */
function initI18n() {
  const translations = window.QUIX_TRANSLATIONS;
  if (!translations) return;

  // Read saved language preference or default to English
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('quix_lang');
    if (saved && translations[saved]) {
      initialLang = saved;
    }
  } catch (e) {}

  const langSwitcher = document.querySelector('.lang-switcher');
  const langBtns = document.querySelectorAll('.lang-btn');
  const veil = document.getElementById('lang-veil');
  const veilStatus = document.getElementById('lang-transition-status');

  let isTransitioning = false;

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const t = translations[lang];

    // 1. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 2. Update Document Title & Meta Tags
    if (t.meta_title) document.title = t.meta_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_desc) metaDesc.setAttribute('content', t.meta_desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t.meta_title) ogTitle.setAttribute('content', t.meta_title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t.meta_desc) ogDesc.setAttribute('content', t.meta_desc);

    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle && t.meta_title) twTitle.setAttribute('content', t.meta_title);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc && t.meta_desc) twDesc.setAttribute('content', t.meta_desc);

    // 3. Update Text Content nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // 4. Update HTML Content nodes (for headlines with gradients or breaks)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // 5. Update Attribute nodes (aria-label, placeholder, title)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrRule = el.getAttribute('data-i18n-attr');
      attrRule.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && t[key] !== undefined) {
          el.setAttribute(attr, t[key]);
        }
      });
    });

    // 6. Update Language Switcher UI state
    if (langSwitcher) {
      langSwitcher.setAttribute('data-active', lang);
    }

    langBtns.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = (btnLang === lang);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 7. Update active mockup stats text with localized suffixes
    const modsCountEl = document.getElementById('hero-mods-count');
    if (modsCountEl) {
      const rawCount = modsCountEl.textContent.replace(/[^0-9]/g, '');
      if (rawCount) {
        modsCountEl.textContent = `${rawCount} Mods ${t.suffix_active_mods || 'Active'}`;
      }
    }

    const playtimeEl = document.getElementById('hero-playtime');
    if (playtimeEl) {
      const rawPlaytime = playtimeEl.textContent.replace(/[^0-9.]/g, '');
      if (rawPlaytime) {
        playtimeEl.textContent = `${rawPlaytime}h ${t.suffix_logged_playtime || 'Logged'}`;
      }
    }

    // Save preference
    try {
      localStorage.setItem('quix_lang', lang);
    } catch (e) {}
  }

  function switchLanguageWithTransition(targetLang) {
    if (targetLang === currentLang || isTransitioning) return;

    // Respect reduced-motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !veil) {
      applyLanguage(targetLang);
      return;
    }

    isTransitioning = true;

    // Set transition status message
    if (veilStatus) {
      const t = translations[targetLang] || translations.en;
      veilStatus.textContent = targetLang === 'pt' ? t.veil_switching_pt : t.veil_switching_en;
    }

    // Phase 1: Activate cinematic blur overlay
    veil.classList.add('active');

    // Phase 2: Seamlessly swap DOM strings during occlusion
    setTimeout(() => {
      applyLanguage(targetLang);
    }, 170);

    // Phase 3: Dissolve overlay with cubic-bezier drift
    setTimeout(() => {
      veil.classList.remove('active');
    }, 450);

    // Unlock transition
    setTimeout(() => {
      isTransitioning = false;
    }, 650);
  }

  // Bind clicks and keyboard interactions
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguageWithTransition(lang);
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        switchLanguageWithTransition(lang);
      }
    });
  });

  // Apply initial language immediately without initial screen flash
  applyLanguage(initialLang);
}

/**
 * 1. Sticky Navigation Bar Scroll State
 */
function initNavbarScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Accessible Mobile Navigation Menu
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-links-list');

  if (!toggleBtn || !navList) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('active');
  });

  // Close when clicking any link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('active')) {
      navList.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 3. Smooth Anchor Scrolling (Maintains fast native mouse wheel scrolling)
 */
function initAnchorSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 4. Hero Desktop Mockup Tab Switcher
 */
function initHeroMockupTabs() {
  const tabButtons = document.querySelectorAll('[data-mock-tab]');
  const viewPanels = document.querySelectorAll('.app-view-panel');

  if (!tabButtons.length || !viewPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-mock-tab');

      // Update button active states
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update view panel visibility
      viewPanels.forEach(panel => {
        if (panel.id === targetView) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * 5. Interactive Instance Profile Switcher in Hero Sidebar
 */
function initInstanceProfileSwitcher() {
  const instanceRows = document.querySelectorAll('.pinned-instance-row');
  const titleEl = document.getElementById('hero-instance-title');
  const loaderEl = document.getElementById('hero-loader-tag');
  const mcVerEl = document.getElementById('hero-mc-ver');
  const modsCountEl = document.getElementById('hero-mods-count');
  const playtimeEl = document.getElementById('hero-playtime');
  const breadcrumbEl = document.getElementById('hero-breadcrumb-target');

  if (!instanceRows.length) return;

  instanceRows.forEach(row => {
    row.addEventListener('click', () => {
      instanceRows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');

      const name = row.getAttribute('data-name');
      const loader = row.getAttribute('data-loader');
      const mcVer = row.getAttribute('data-mc');
      const mods = row.getAttribute('data-mods');
      const playtime = row.getAttribute('data-playtime');

      const t = (window.QUIX_TRANSLATIONS && window.QUIX_TRANSLATIONS[currentLang]) ? window.QUIX_TRANSLATIONS[currentLang] : null;
      const activeSuffix = t ? t.suffix_active_mods : 'Active';
      const loggedSuffix = t ? t.suffix_logged_playtime : 'Logged';

      if (titleEl) titleEl.textContent = name;
      if (loaderEl) loaderEl.textContent = loader;
      if (mcVerEl) mcVerEl.textContent = mcVer;
      if (modsCountEl) modsCountEl.textContent = `${mods} ${activeSuffix}`;
      if (playtimeEl) playtimeEl.textContent = `${playtime} ${loggedSuffix}`;
      if (breadcrumbEl) breadcrumbEl.textContent = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    });
  });
}

/**
 * 6. Interactive Mod Toggle Switches in Active Mod Tray
 */
function initModToggles() {
  const switches = document.querySelectorAll('.toggle-switch');

  switches.forEach(toggle => {
    const handleToggle = () => {
      toggle.classList.toggle('off');
      const isOff = toggle.classList.contains('off');
      toggle.setAttribute('aria-checked', isOff ? 'false' : 'true');

      // Update parent indicator dot if available
      const indicator = toggle.closest('.mod-check-item')?.querySelector('.mod-status-indicator');
      if (indicator) {
        indicator.style.background = isOff ? '#4B5563' : '#10B981';
        indicator.style.boxShadow = isOff ? 'none' : '0 0 6px rgba(16, 185, 129, 0.6)';
      }
    };

    toggle.addEventListener('click', handleToggle);
    toggle.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleToggle();
      }
    });
  });
}

/**
 * 7. Content Discovery Filter Pills in Section 4
 */
function initDiscoveryFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const projectCards = document.querySelectorAll('.discovery-project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 8. Scroll-Triggered Reveal Animations (GPU-composited, Zero Layout Jank)
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Select key narrative blocks & cards across all sections
  const targets = document.querySelectorAll(`
    .section-header,
    .hero-mockup-wrapper,
    .reveal-pillars-grid > *,
    .instance-primary-hero-card,
    .instance-lower-grid > *,
    .instance-modpack-distinction,
    .discovery-search-header,
    .discovery-grid > *,
    .bento-main-col,
    .bento-side-stack > *,
    .development-roadmap-row > *,
    .closing-banner-card
  `);

  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
}
