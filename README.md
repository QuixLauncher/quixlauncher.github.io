# Quix Website

Official public landing page for **Quix** — a modern, free Minecraft Java Edition launcher for Windows currently in early planning and development.

- **Landing Page Repository:** [QuixLauncher/quixlauncher.github.io](https://github.com/QuixLauncher/quixlauncher.github.io)
- **Launcher Project:** [QuixLauncher/quix-launcher](https://github.com/QuixLauncher/quix-launcher)
- **Live URL:** [https://quixlauncher.github.io/](https://quixlauncher.github.io/)

---

## 🎨 Design Philosophy & Features

- **Apple-Inspired Polish & Dark Atmosphere:** Tailored visual system utilizing a rich dark canvas (`#0D1117`), refined borders (`#2A3240`), and crisp crimson accents (`#E5484D`).
- **Interactive Launcher Concept:** Interactive desktop window mockup demonstrating instance management, Modrinth & CurseForge discovery, and engine controls without external dependencies.
- **Magic UI Cursor Spotlight:** Radial border highlights dynamically calculated via vanilla JavaScript.
- **Production-Ready & Responsive:** Optimized across desktop, tablet, and mobile with semantic HTML5, accessible ARIA attributes, and fluid typography.
- **Zero Build Step:** 100% static vanilla HTML5, CSS3, and JavaScript — ready for instant GitHub Pages hosting.

---

## 📁 Project Structure

```text
├── index.html     # Semantic landing page structure & metadata
├── style.css      # Design system, glassmorphism, responsive grid & animations
├── script.js     # Vanilla JS interactions (spotlight, mockup tabs, navigation)
├── favicon.svg    # Geometric vector brand mark and favicon
└── README.md      # Documentation and deployment guide
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

Quix is an independent open-source project and is not affiliated with, endorsed by, or associated with Mojang Studios, Microsoft Corporation, CurseForge, or Modrinth. Minecraft is a registered trademark of Mojang AB / Microsoft Corporation.