# Quix Website

Official public landing page for **Quix** — a modern, free Minecraft Java Edition launcher for Windows currently in early planning and development.

- **Landing Page Repository:** [QuixLauncher/quixlauncher.github.io](https://github.com/QuixLauncher/quixlauncher.github.io)
- **GitHub Organization:** [QuixLauncher](https://github.com/QuixLauncher)
- **Live URL:** [https://quixlauncher.github.io/](https://quixlauncher.github.io/)

---

## 🎨 Design Philosophy & Features

- **Apple-Inspired Polish & Dark Atmosphere:** Tailored visual system utilizing a rich dark canvas (`#080B10`), refined borders, and crisp crimson accents (`#E5484D`).
- **Interactive Launcher Concept:** Interactive desktop window mockup demonstrating instance management, Modrinth & CurseForge discovery, and engine controls without external dependencies.
- **Internationalization (i18n):** Native support for English (Default) and Portuguese (Português de Portugal) with animated segmented controls and a cinematic studio transition overlay.
- **Atmospheric Artwork:** Authentic 3D Quix brand artwork alongside Minecraft Taiga landscape atmosphere in instance previews.
- **Magic UI Cursor Spotlight:** Radial border highlights dynamically calculated via vanilla JavaScript.
- **Production-Ready & Responsive:** Optimized across desktop, tablet, and mobile with semantic HTML5, accessible ARIA attributes, and fluid typography.
- **Zero Build Step:** 100% static vanilla HTML5, CSS3, and JavaScript — ready for instant GitHub Pages hosting.

---

## 📁 Project Structure

```text
├── index.html                 # Semantic landing page structure & metadata
├── style.css                  # Design system, fluent window, responsive grid & animations
├── script.js                  # Vanilla JS interactions (spotlight, mockup tabs, navigation, i18n engine)
├── translations.js            # Comprehensive i18n locale dictionaries (EN / PT)
├── Quix Icon.png              # Official 3D brand artwork (high-resolution transparent PNG)
├── quix-icon-64.png           # Small UI brand icon (navbar, footer, sidebar)
├── quix-icon-32.png           # Compact UI brand icon (desktop mockup titlebar)
├── favicon-16x16.png          # Optimized browser tab favicon (16×16)
├── favicon-32x32.png          # Optimized browser tab favicon (32×32)
├── apple-touch-icon.png       # Apple touch icon (180×180)
├── og-image.png               # Social preview banner for Open Graph (1200×630)
├── instance-banner-taiga.png  # Supporting Minecraft Taiga biome landscape artwork
└── README.md                  # Documentation and deployment guide
```

---

## 🚀 Deployment to GitHub Pages

Because this repository is named `quixlauncher.github.io`, GitHub Pages automatically serves from the root of the `main` branch:

1. Push the commits to `main`:
   ```bash
   git add .
   git commit -m "feat: design modern landing page for Quix"
   git push origin main
   ```
2. Navigate to **Repository Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / `/(root)`
4. The live site will be deployed at `https://quixlauncher.github.io/`.

---

## ⚖️ Legal Disclaimer

Quix is an independent project and is not affiliated with, endorsed by, or associated with Mojang Studios, Microsoft Corporation, CurseForge, or Modrinth. Minecraft is a registered trademark of Mojang AB / Microsoft Corporation.
