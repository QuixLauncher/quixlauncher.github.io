# QUIX — OFFICIAL WEBSITE REDESIGN
## Creative Direction & Implementation Brief v2.0

You are acting as a **Senior Art Director, Digital Product Designer, Motion Designer and Frontend Engineer**.

Your task is to completely rethink and redesign the official website for **Quix**, a free Minecraft Java Edition launcher currently in development.

**This is not a generic landing page assignment.**

The previous website failed to meet our design expectations. I want a genuine creative redesign with a distinctive visual identity, excellent composition, refined interactions, and the presentation quality of a premium consumer software product.

## 1. Project and existing website

Live website: https://quixlauncher.github.io/

GitHub organization: https://github.com/QuixLauncher

Website repository: QuixLauncher/quixlauncher.github.io

Launcher repository: QuixLauncher/quix-launcher

If you have repository access, inspect the existing website files first:

- index.html
- style.css
- script.js
- favicon.svg
- README.md

The previous design must NOT be treated as the visual specification.

You may replace its layout and design substantially.

Do not modify the launcher repository.

Do not publish to the live website until the redesign has been reviewed and approved.

## 2. Understanding Quix

Quix is a free Minecraft Java Edition launcher, initially for Windows.

It aims to provide:

- Separate Minecraft installations and instances
- Vanilla, Fabric, Forge, NeoForge and Quilt support
- Modpack installation and management
- Mod, shader and resource pack management
- Content discovery through Modrinth and potentially CurseForge
- Automatic Java management
- Backup and update controls
- An intuitive desktop application

**Critical product distinction:**

Mods can be installed into existing compatible instances.

Modpacks are complete installations and must create new independent instances.

The launcher is currently in planning and early development.

No downloadable application is available yet.

Do not present planned features as implemented.

CurseForge integration is subject to API permission and compliance.

## 3. The visual experience I want

Create a premium, immersive, visually rich website inspired by the *design quality* of Apple product presentations, but with its own identity.

Imagine the presentation of a sophisticated desktop application combined with a subtle Minecraft-inspired atmosphere.

It should feel like:

- A premium consumer technology product
- A carefully art-directed software launch
- A modern desktop gaming application
- A memorable independent brand

It must NOT feel like:

- A generic SaaS template
- A hosting company website
- A developer documentation page
- A cybersecurity product
- A boring GitHub project homepage
- A collection of identical dark cards
- A Minecraft server advertisement
- An exaggerated RGB gaming website

### Core visual principles

**Product first.** Large, impressive product imagery is more important than paragraphs explaining technical architecture.

**Editorial layout.** Use expressive typography, intentional negative space, strong visual hierarchy, and asymmetrical compositions where appropriate.

**Depth and atmosphere.** Use sophisticated lighting, background composition, subtle material effects, rich imagery, and controlled gradients.

**Meaningful variety.** Every major section must have a distinct composition. Do not repeat the same heading-description-card-grid pattern down the page.

**Refined motion.** Motion should make the experience feel expensive and responsive, not artificially animated.

**Clarity.** Even with rich visual design, the website must be immediately understandable.

---

## 4. Design references — study these carefully

### Apple — visual storytelling and product presentation

https://www.apple.com/macbook-air/

https://www.apple.com/macbook-pro/

https://developer.apple.com/design/human-interface-guidelines/

Study:

- Product-centric hero sections
- Typography
- Strong visual storytelling
- Product scale
- Controlled negative space
- Smooth transitions
- How product images support the narrative

Do not imitate Apple branding or copy its layouts exactly.

### Raycast — premium desktop software identity

https://www.raycast.com/

Study:

- Modern app presentation
- Interface depth
- Motion details
- Refined controls
- Visual confidence

### Linear — precision and polish

https://linear.app/

Study:

- Visual hierarchy
- Surface design
- Atmospheric backgrounds
- Spacing
- Typography
- Transitions and interaction details

### Modrinth — Minecraft launcher context

https://modrinth.com/app

Study:

- Instances
- Modpack discovery
- Content presentation
- Minecraft-focused functionality

Do NOT simply copy its design.

### Component and animation inspiration

https://magicui.design/

https://motion.dev/

https://uiverse.io/

https://heroui.com/

Use these as inspiration for interaction quality, not as a collection of effects to insert randomly.

---

## 5. Brand identity

Brand: **Quix**

Product: Quix Launcher

The primary logo must say only **Quix**, without the word "Launcher" attached.

Use the approved Quix logo assets if supplied.

**Do not invent a replacement official logo.**

If the approved assets are unavailable, use a restrained text placeholder and clearly identify which asset is missing.

### Color direction

- Deep background: #0D1117
- Additional dark tones: #080B10, #121721
- Surface: #161B22
- Text: #F5F7FA
- Secondary text: #96A0AE
- Signature accent: #E5484D

The red is a signature accent.

Do not paint every card and background red.

Use carefully controlled warm lighting and occasional secondary environmental colors in imagery.

### Typography

Consider Inter, Manrope, Sora or Plus Jakarta Sans.

Use typography like a high-end product designer.

Avoid tiny body text and excessive uppercase technical labels.

At a typical desktop viewport, normal explanatory text should remain comfortably readable.

---

## 6. Major design requirement — Product imagery

The previous website had almost no genuine visual atmosphere.

Its centerpiece was a small, technical dashboard mockup.

**This is unacceptable for the redesign.**

The new website must give the launcher a powerful visual presence.

The desktop application should be shown through a large, polished product presentation.

The hero may use:

- A large desktop application concept
- Beautifully layered UI surfaces
- Minecraft-inspired scenery or artwork
- Subtle cinematic lighting
- Floating application details
- Depth and controlled perspective

However:

- Never pretend a concept is a real screenshot.
- Do not invent functionality or live usage statistics.
- Do not use copyrighted artwork without appropriate permission.
- Do not rely on random generic stock images.
- Do not generate an alternative Quix logo.

If actual image generation is available, create coherent original supporting artwork.

If it is unavailable, specify the artwork needed, create a tasteful CSS/SVG-based supporting composition where appropriate, and clearly identify missing assets.

**Do not use a collection of plain colored rectangles as a substitute for good product imagery.**

---

## 7. Required page structure

Do not mechanically turn this into seven consecutive grids of cards.

### SECTION 1 — Immersive hero

A strong, memorable first impression.

Headline suggestion: **Your Minecraft. Your way.**

Supporting copy: *A new home for your Minecraft instances, modpacks and custom content. Designed to keep everything in its place.*

Include:

- Quix branding
- Large headline
- Short supporting copy
- Development status
- One meaningful primary CTA
- Large launcher concept artwork
- Subtle background atmosphere

The launcher should be visually prominent.

The design must not depend on a tiny mockup surrounded by excessive empty space.

### SECTION 2 — Product reveal

A visually rich showcase of the desktop application.

Let users understand the actual interface through a large image or layered product presentation.

Use selective labels or highlights for:

- Library
- Instances
- Content discovery

Minimal explanatory text.

This should feel like unveiling a product, not displaying an engineering diagram.

### SECTION 3 — Your game, organized

Focus on instance management.

Create an editorial composition featuring a prominent instance library concept.

Emphasize:

- Separate instances
- Versions and mod loaders
- Modpacks as standalone instances
- Personalization
- Quick access to play

Use a distinctive visual layout instead of six equal cards.

### SECTION 4 — Discover more

Focus on discovering mods, modpacks, shaders and resource packs.

The visual centerpiece should resemble a sophisticated content discovery interface with:

- Category navigation
- Search
- Filters
- Project cards or detailed results
- Project detail preview

Show Modrinth and planned CurseForge support accurately.

Explain the difference between adding mods to existing installations and creating new instances from modpacks.

### SECTION 5 — Everything under control

Present Java management, settings, updates and backups in an elegant, compact visual composition.

Do not overwhelm visitors with JVM flags, internal architecture or technical terms.

For example:

- Smart Java selection
- Instance settings
- Update control
- Local backups

All clearly marked as planned capabilities.

### SECTION 6 — Development

A small, premium section explaining where the project stands.

Keep it simple:

- Design and planning
- Core development
- Testing
- Public release

No fake release dates.

Do not make the roadmap look like a complicated corporate project management dashboard.

### SECTION 7 — Closing

A memorable closing composition.

Short message.

No exaggerated promises.

CTA to visit the GitHub organization or follow publicly available updates.

No Download button before a build exists.

Do not use a "Star on GitHub" CTA pointing to a private repository.

---

## 8. Animation and interaction requirements

Motion must be a coherent part of the visual design.

Use:

- Smooth, subtle section transitions
- Well-timed entrance animations
- Refined hover interactions
- Carefully controlled depth and parallax, if appropriate
- Smooth but responsive navigation
- Responsive interface highlights
- Natural easing curves

Avoid:

- Every element fading upward in exactly the same way
- Aggressive parallax
- Scroll-jacking
- Endless decorative animations
- Excessive bouncing
- Huge blur effects that harm performance
- Interactions that slow down navigation

Respect prefers-reduced-motion.

Prefer native browser capabilities for simple animations.

Use additional libraries only if they provide a clear benefit.

---

## 9. Layout requirements

Design for desktop first, but implement proper responsive layouts.

Test at least:

- 1440 × 900
- 1366 × 768
- 768 × 1024
- 390 × 844

At desktop widths:

- The hero product visual should be large and immediately noticeable.
- Avoid tiny, centered content surrounded by excessive empty margins.
- Use visual sections that take advantage of desktop space.
- Preserve readable type sizes.

At mobile widths:

- No horizontal overflow.
- No unreadable scaled-down desktop mockups.
- Proper menu and touch interactions.
- Product visuals should be adapted rather than simply shrunk.
- Do not sacrifice clarity to preserve desktop effects.

---

## 10. Technical delivery

The website should work with GitHub Pages.

Prefer maintainable:

- HTML
- CSS
- JavaScript

No backend required.

Do not introduce a large framework unless it has a clear and justified benefit.

Use clean project organization and reusable components/styles.

Requirements:

- Semantic HTML
- Accessible controls and keyboard navigation
- Visible focus states
- Sensible contrast
- Reduced-motion support
- Good performance
- No unnecessary dependencies
- Proper responsive images
- SEO metadata
- Favicon using the official asset when available
- Social preview image when appropriate
- No console errors or broken links

Keep the source readable and maintainable.

Avoid one enormous, difficult-to-edit HTML file if separate CSS and JavaScript files would be cleaner.

---

## 11. Content and factual accuracy

The website must be entirely in **natural English**.

Copy should be confident, concise and human.

Avoid exaggerated marketing language and repetitive technical jargon.

### Forbidden claims unless proven

- The launcher is already downloadable
- CurseForge integration is approved or operational
- The launcher has guaranteed zero crashes
- Automatic rollback is already available
- Shader settings can be changed live without restarting
- Cloud synchronization is currently supported
- Specific performance improvements are guaranteed
- The launcher supports operating systems other than those confirmed
- Fake download counts, ratings or testimonials

All future capabilities must be clearly distinguished from implemented ones.

Also, do not describe the application as a fully native Windows app if the eventual implementation uses Tauri. Describe the actual experience accurately.

---

## 12. Mandatory quality review

Before considering the result finished, evaluate it against these questions:

1. Does the page immediately look like a premium Minecraft launcher website?
2. Is the product the main focus?
3. Does it have an original, recognizable visual identity?
4. Are there substantial, useful visuals rather than mostly text?
5. Are the major sections visually distinct?
6. Does it avoid the generic SaaS template look?
7. Are the animations tasteful and consistently implemented?
8. Is body text legible at normal screen sizes?
9. Is the mobile design genuinely adapted?
10. Are all technical claims accurate?

If the answer to any critical question is no, revise the design before presenting it as complete.

**Do not describe the result as Apple-quality or premium simply because you used rounded cards, gradients and shadows. Demonstrate that quality through the actual visual composition.**

---

## 13. Deliverables and workflow

### Step 1 — Audit

Inspect the current website and explain briefly what is visually wrong with it.

Do not preserve weak design decisions simply because code already exists.

### Step 2 — Design direction

Define one coherent art direction:

- Hero composition
- Image/artwork strategy
- Typography
- Layout rhythm
- Motion language
- Components
- Mobile adaptation

Avoid presenting several vague design options. Make informed choices.

### Step 3 — Implementation

Produce the complete working redesign.

You may refactor existing code rather than adding layers of overrides.

### Step 4 — Verification

Run the website locally where possible and inspect it in a real browser.

Check screenshots at desktop and mobile sizes if browser tools are available.

Do not claim visual testing was completed if you could not perform it.

Identify missing artwork and assets explicitly.

### Step 5 — Handoff

Provide:

- Files changed
- Features implemented
- Visual design choices
- Preview and testing instructions
- Known limitations
- Assets still required
- Deployment instructions

Do not push or publish to the live site without approval.

---

## FINAL CREATIVE DIRECTION

I want Quix to look like a real premium consumer product.

Not a generic Minecraft server.
Not a collection of SaaS cards.
Not a fake engineering dashboard.
Not a minimalist page with nothing interesting to look at.

Create a visually memorable, elegant and immersive website that makes people interested in the Quix launcher.

**Visual composition and art direction are the top priorities.**

Make bold, intentional design decisions while staying refined, readable and original.
