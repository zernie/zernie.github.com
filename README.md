# Ernie — Portfolio

Modernized portfolio site built with Next.js 16, Tailwind CSS, and the Feature-Sliced Design (FSD) architecture. The UI is composed with shadcn-inspired primitives and uses rem-based spacing for consistent scaling across breakpoints.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS 4 with rem units, shadcn-inspired components, tailwindcss-animate
- **Architecture:** Feature-Sliced Design (shared, entities, features, widgets, pages, app)
- **Tooling:** TypeScript, ESLint (Next.js + Feature Sliced rules), Steiger FSD linter, Prettier

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Quality Gates

```bash
npm run lint       # ESLint with Next.js + Feature-Sliced rules
npm run typecheck  # TypeScript without emit
npm run steiger    # Architecture validation with Steiger + FSD plugin
npm run build      # Production build (static export)
```

## Continuous Integration

GitHub Actions run linting, type checks, Steiger, and production builds on every pull request and push to `main`.

## Deployment

Pushes to `main` automatically build and deploy the static export to GitHub Pages. The workflow runs `npm run build` followed by
`npm run export`, bundles the generated `out/` directory (including the `CNAME` for the custom domain), and publishes it through
`actions/deploy-pages`. Once GitHub Pages is enabled in the repository settings and pointed at the `github-pages` environment, the
site is available globally with automatic HTTPS.

## Project Structure (FSD)

```
src/
  app/            # Next.js entrypoints and layout
  pages/          # Page-level compositions (public API only)
  widgets/        # Page sections composed from features/entities
  features/       # User interactions (Download CV CTA, etc.)
  entities/       # Domain models and data contracts
  shared/         # Reusable UI, lib utilities, config
```

Static assets (images, fonts, resume, manifest) live in `public/` for the static export pipeline.
