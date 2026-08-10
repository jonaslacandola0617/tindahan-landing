# TINDAHAN Landing Page

Public marketing site for TINDAHAN, a Store Operating Assistant built for small Philippine stores.

This repository is intentionally separate from the main application. It contains only the public-facing marketing experience and sends registration and sign-in traffic to the production TINDAHAN app.

## Direction

The landing page extends TINDAHAN's **Warm Utility** visual identity into a more expressive marketing experience: editorial typography, layered product mockups, tactile paper-inspired details, kinetic accents, scroll reveals, responsive micro-interactions, and restrained pointer-driven depth.

The visual treatment is deliberately richer than the application itself, but the UX rule stays the same: the page must remain readable and obvious to people with low computer literacy. Motion supports hierarchy and product storytelling instead of hiding basic actions or making navigation harder.

## Stack

- Next.js 16
- React 19
- TypeScript
- Custom CSS art direction and animation
- IntersectionObserver-based reveal motion
- Reduced-motion support
- Responsive desktop, tablet, and mobile layouts

No animation framework is required; the page keeps its interaction layer lightweight and dependency-free.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Application

The actual TINDAHAN SaaS application lives in the separate `tindahan-store-assistant` repository and is available at `https://tindahan.vercel.app`.
