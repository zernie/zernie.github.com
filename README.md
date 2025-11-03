# Ernie Bold — Portfolio

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
