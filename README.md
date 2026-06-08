# Liquid Glassmorphic To-Do List

A beautiful, premium, and fully responsive task management application built from scratch to demonstrate advanced front-end design and engineering. This project completely rejects standard UI boilerplate libraries in favor of a bespoke, pixel-perfect Apple "Liquid Glassmorphism" aesthetic inspired by macOS Sequoia and visionOS.

## 🎯 Project Overview

This isn't just another To-Do list. The primary goal of this project was to build a robust, production-ready React application while strictly utilizing **Vanilla CSS** to construct an extremely high-fidelity glassmorphic rendering engine. 

By avoiding tools like Tailwind or Material UI, this project showcases deep understanding of modern CSS properties, custom SVGs, and organic micro-interactions.

## ✨ Technical & Design Highlights

*   **Authentic Material Geometry:** Emulates Apple's "Vibrancy Material". The main workspace pane uses a continuous `24px` squircle curve, while nested inputs and controls use a tight `10px` radius to establish clean hierarchy.
*   **Advanced Specular Lighting:** Flat borders were eliminated. The UI simulates physical hardware glass catching an overhead light source using precise edge highlights (`1px solid rgba(255, 255, 255, 0.18)` on the top/left, fading to `0.03` on the bottom/right) and diffused occlusion shadows.
*   **Viscous SVG Metaballs:** The dark background features organic gradient spheres that use embedded SVG filters (`feGaussianBlur` + `feColorMatrix`). This forces the spheres to physically "melt" and merge into one another like a lava lamp, creating an incredibly thick, premium fluid feel behind the frosted glass.
*   **Custom Cosmetic Controls:** Standard HTML inputs were completely overridden. Checkboxes are custom-built tactile "squircles" with inner-shadow depth and custom spring-animated SVG checkmarks.
*   **CoreAnimation Physics:** All interactive state changes—from hover states to item completion—are clocked through an organic spring physics matrix (`cubic-bezier(0.25, 1, 0.5, 1)`) at `260ms`.
*   **Defensive State Management:** React state is seamlessly persisted to `localStorage`. The initialization is tightly wrapped in defensive `try/catch` handlers to gracefully fall back to an empty state if the client's JSON payload is ever corrupted.

## 🚀 Tech Stack

- **Framework:** React (Functional Components & Modern Hooks)
- **Styling:** Vanilla CSS3 (Advanced Filters, Keyframes, Custom CSS Variables)
- **Build Tool:** Vite
- **Deployment:** Vercel (Zero-Config)

## 💻 Local Development

To run this project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/pawarganesh243/to-do-list.git

# 2. Navigate into the directory
cd to-do-list

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev

# 5. Build for production
npm run build
```
