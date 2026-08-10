# TINDAHAN Landing

Public marketing site for **TINDAHAN**, a Store Operating Assistant for independent Philippine retailers.

The marketing site is intentionally separate from the authenticated application so each can evolve and deploy independently.

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Set `APP_URL=https://tindahan.vercel.app` (or the future app subdomain) so marketing CTAs point to the authenticated application.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Product links

- Landing page repository: this project
- Application: https://tindahan.vercel.app
- Application repository: https://github.com/jonaslacandola0617/tindahan-store-assistant

## Design direction

The landing page extends TINDAHAN's existing Warm Utility identity into a more expressive marketing system: deep emerald surfaces, warm amber accents, spatial UI compositions, cinematic lighting, glass depth, and restrained purposeful motion. The actual application remains calmer and more utilitarian.
