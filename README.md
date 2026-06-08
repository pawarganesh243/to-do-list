# Liquid Glassmorphic To-Do List

A beautiful, premium, and fully responsive task management application designed with a pixel-perfect Apple "Liquid Glassmorphism" (macOS Sequoia / visionOS) aesthetic. Built purely with React and Vanilla CSS, demonstrating advanced CSS techniques like organic SVG filters and hardware-accurate specular lighting.

## Features

*   **Authentic Apple Glassmorphism:** Emulates the "Vibrancy Material" seen in visionOS. Features a `40px` backdrop-blur, exact specular illumination bevels, and diffused occlusion shadows.
*   **Ambient Canvas:** A deep industrial charcoal background (`#0d0e12` to `#15161e`) featuring three organic, drifting gradient spheres that interact using `mix-blend-mode: plus-lighter` to form a neon aura.
*   **Advanced Micro-Interactions:** Custom-built cosmetic square checkboxes, organic spring physics transitions (`cubic-bezier(0.25, 1, 0.5, 1)` at `260ms`), and dynamic item attenuation (checked items physically shrink and sink into the glass).
*   **Defensive State Management:** React state is seamlessly persisted to `localStorage` wrapped in defensive `try/catch` handlers. Features `crypto.randomUUID()` for optimal tracking.
*   **Responsive:** Perfectly adapts from wide desktop monitors down to mobile viewports.

## Deployment on Vercel

This application is built with Vite and is pre-configured for zero-config deployment on Vercel.

1.  Connect your GitHub repository to Vercel.
2.  Import this project.
3.  Vercel will automatically detect the **Vite** framework.
4.  Leave the build command as `npm run build` and output directory as `dist`.
5.  Click **Deploy**.

## Local Development

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Build for production
npm run build
```

## Tech Stack
- React (Hooks, Functional Components)
- Vanilla CSS3 (Advanced Filters, Keyframes, Custom Variables)
- Vite
