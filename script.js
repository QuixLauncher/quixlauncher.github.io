/**
 * QUIX LAUNCHER — OFFICIAL LANDING PAGE INTERACTIONS
 * Senior Front-End Architecture: Vanilla JS, Zero External Runtime Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNavigation();
  initSpotlightEffect();
  initMockupTabs();
  initMemoryGaugeInteractive();
});

/**
 * 1. Header scroll effect (blur & border enhancement)
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Accessible Mobile Navigation Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('mobile-open');
  });

  // Close when clicking an anchor link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
      navLinks.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 3. Magic UI Mouse-Following Spotlight Card Effect
 * Computes cursor coordinates relative to each card and passes them as CSS variables
 */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card, .bento-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * 4. Interactive Launcher UI Concept View Switcher
 * Allows visitors to toggle between:
 * - Library View
 * - Discover Hub (Modrinth & CurseForge)
 * - Engine & Shaders Studio
 */
function initMockupTabs() {
  const sidebarButtons = document.querySelectorAll('[data-mockup-target]');
  const views = document.querySelectorAll('.app-view-tab');

  if (!sidebarButtons.length || !views.length) return;

  sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-mockup-target');

      // Update button active state
      sidebarButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Switch view panel
      views.forEach(view => {
        if (view.id === targetId) {
          view.classList.add('active');
        } else {
          view.classList.remove('active');
        }
      });
    });
  });
}

/**
 * 5. Interactive Memory / Engine Slider in Mockup
 */
function initMemoryGaugeInteractive() {
  const track = document.querySelector('.engine-slider-track');
  const fill = document.querySelector('.engine-slider-fill');
  const label = document.querySelector('[data-memory-val]');

  if (!track || !fill || !label) return;

  track.addEventListener('click', (e) => {
    const rect = track.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((clickX / rect.width) * 100);
    const gigabytes = (2 + (percent / 100) * 14).toFixed(1); // 2GB to 16GB

    fill.style.width = `${percent}%`;
    label.textContent = `${gigabytes} GB`;
  });
}
