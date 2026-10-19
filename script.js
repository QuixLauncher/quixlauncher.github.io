/**
 * QUIX LAUNCHER — OFFICIAL INTERFACE LOGIC
 * High-craft vanilla JavaScript: Zero external dependencies, pure performance.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initMockupTabs();
  initModToggles();
  initInteractiveRamSlider();
});

/**
 * 1. Sticky Navigation Scroll Polish
 */
function initNavScroll() {
  const nav = document.querySelector('.top-nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 15) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const active = menu.classList.toggle('is-active');
    toggle.setAttribute('aria-expanded', active ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * 3. Desktop Mockup Tab Switching
 * Switches between: My Instances (tab-instances), Discover Hub (tab-discover), Engine & Shaders (tab-engine)
 */
function initMockupTabs() {
  const buttons = document.querySelectorAll('[data-view-target]');
  const panels = document.querySelectorAll('.view-panel');

  if (!buttons.length || !panels.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-view-target');

      // Update tab button active states
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Reveal target view panel
      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * 4. Interactive Mod Tray Toggles
 * Allows visitors to click the toggle switches next to mods in the mockup
 */
function initModToggles() {
  const toggles = document.querySelectorAll('.toggle-switch-fake');

  toggles.forEach(toggle => {
    const handleToggle = () => {
      const isChecked = toggle.getAttribute('aria-checked') === 'true';
      const newState = !isChecked;
      toggle.setAttribute('aria-checked', newState ? 'true' : 'false');

      if (newState) {
        toggle.style.background = 'var(--crimson)';
        toggle.style.setProperty('--toggle-pos', 'right');
        const dot = toggle.closest('.mod-row-item')?.querySelector('.mod-dot');
        if (dot) dot.style.background = 'var(--emerald)';
      } else {
        toggle.style.background = '#2B3342';
        const dot = toggle.closest('.mod-row-item')?.querySelector('.mod-dot');
        if (dot) dot.style.background = 'var(--text-dim)';
      }
    };

    toggle.addEventListener('click', handleToggle);
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle();
      }
    });
  });
}

/**
 * 5. Interactive JVM Memory Allocation Slider in Mockup
 * Clicking along the track updates the bar width, the readout, and inspector specs in real-time!
 */
function initInteractiveRamSlider() {
  const track = document.getElementById('ram-slider-track');
  const fill = document.getElementById('ram-slider-fill');
  const readout = document.getElementById('slider-readout');
  const inspectorMem = document.querySelector('[data-inspector-mem]');
  const sidebarMem = document.querySelector('[data-sidebar-mem]');

  if (!track || !fill || !readout) return;

  track.addEventListener('click', (e) => {
    const rect = track.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((clickX / rect.width) * 100);

    // Map 0-100% to 2GB - 16GB
    const totalGB = (2 + (percent / 100) * 14).toFixed(1);
    const mbValue = Math.round(totalGB * 1024);

    fill.style.width = `${percent}%`;
    readout.textContent = `${totalGB} GB`;

    if (inspectorMem) {
      inspectorMem.textContent = `${mbValue.toLocaleString()} MB (${totalGB} GB)`;
    }

    if (sidebarMem) {
      sidebarMem.textContent = `${mbValue.toLocaleString()} MB Heap Active`;
    }
  });
}
