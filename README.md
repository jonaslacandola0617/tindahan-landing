# Tindahan Landing Page

Public marketing site for Tindahan, a Store Operating Assistant built for small Philippine stores.

This repository is intentionally separate from the main application. It contains only the public-facing marketing experience and sends registration and sign-in traffic to the production Tindahan app.

## Direction

The landing page extends Tindahan's **Warm Utility** visual identity into a more expressive marketing experience: editorial typography, layered product mockups, tactile paper-inspired details, kinetic accents, scroll reveals, responsive micro-interactions, and restrained pointer-driven depth.

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
cp .env.example .env.local
npm run dev
```

Set `APP_URL` to the base URL of the separate Tindahan application. Registration and sign-in links are generated from that environment variable so changing the application domain does not require a code change.

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Application

The actual Tindahan SaaS application lives in the separate `tindahan-store-assistant` repository. Its public address is configured through `APP_URL` rather than hardcoded into the landing page.
