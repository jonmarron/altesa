# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — run this to verify TypeScript + compilation
npm run lint     # ESLint
npm run start    # Serve production build
```

There are no tests. Use `npm run build` to verify correctness before finishing any task.

## Stack

- **Next.js 16.2.1** — App Router, all pages statically generated (`○` in build output)
- **React 19** — Server Components by default; add `"use client"` only for interactivity
- **Tailwind CSS v4** — configured via `@theme inline` in `globals.css`, NOT a `tailwind.config.js`
- **TypeScript 5** — strict mode
- **Fonts** — Inter (body, `--font-inter`) and Playfair Display (headings, `--font-display`) via `next/font/google`

## Deployment

Deployed to **GitHub Pages** at `https://jonmarron.github.io/altesa/` via `.github/workflows/deploy.yml` on every push to `main`.

**Static export config** (`next.config.ts`):
- `output: "export"` — generates the `out/` directory
- `basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? ""` — set to `/altesa` in CI, empty locally
- `images: { loader: "custom", loaderFile: "./imageLoader.ts" }` — custom loader that prepends `NEXT_PUBLIC_BASE_PATH` to every image src; required because `next/image` with `unoptimized` skips the basePath transform

> Never use `images: { unoptimized: true }` — it breaks image paths on GitHub Pages. Always use the custom loader.

## Architecture

Single-page marketing site with a handful of static routes:

```
app/
  layout.tsx              # Root layout — loads fonts, wraps every page in <Navbar> + <Footer>
  page.tsx                # Homepage — composes section components in order
  globals.css             # Design tokens + Tailwind import
  components/             # All reusable UI
  data/                   # All hardcoded content (imported by components)
  servicios/page.tsx      # Standalone services detail page
  aviso-legal/page.tsx    # Legal notice (static)
  politica-privacidad/    # Privacy policy (static)
```

**Homepage section order** (as imported in `app/page.tsx`):
1. `hero.tsx` — `#inicio`
2. `quienes-somos.tsx` — `#quienes-somos`
3. `empresas.tsx` — `#empresas`
4. `libros.tsx` — `#libros`
5. `compromiso.tsx` — `#compromiso`

> `contact.tsx`, `about.tsx`, `services.tsx`, `stats.tsx`, `team.tsx` are **unused legacy files** — do not add them back to `page.tsx`.

**Data files** under `app/data/`:
- `navigation.ts` — `navLinks` (navbar) and `footerNavLinks` (footer)
- `companies.ts` — `Company` type + `companies` array; each entry has a `logo?` field
- `books.ts` — `books` array (with `cover` field) and `authors` array
- `quienes-somos.tsx` — Eduardo bio strings and `quienesSomosStats`
- `compromiso.tsx` — vision, mission, and values (JSX icons → `.tsx` extension)

## Design System

All tokens are CSS variables defined in `globals.css` and registered via `@theme inline`. Use them as Tailwind classes directly:

| Token | Tailwind class example | Value |
|---|---|---|
| Brand dark | `bg-anthracite-deep` | `#1a1a1a` |
| Brand mid | `bg-anthracite-mid` | `#3d3d3d` |
| Gold accent | `text-gold`, `bg-gold` | `#e4c224` |
| Gold hover | `hover:bg-gold-light` | `#f0d24a` |
| Page background | `bg-bg` | `#faf9f6` |
| Warm background | `bg-bg-warm` | `#f4f1ea` |
| Text on dark | `text-text-on-dark` | `#f0ede6` |
| Muted on dark | `text-text-on-dark-muted` | `#9a9690` |

**Section background pattern**: hero (`bg-anthracite-deep`) → warm (`bg-bg-warm`) → light (`bg-bg`) → warm (`bg-bg-warm`) → light (`bg-bg`) → warm (`bg-bg-warm`) → footer (`bg-anthracite-deep`). Only the hero and footer are dark; interior sections alternate warm/light. Keep this rhythm when adding sections.

**Interior section aesthetic**: all interior cards and panels use `bg-surface` (white) with `border border-border` and `shadow-sm`, floating on the warm/light section background. Icon boxes use `bg-anthracite-deep text-gold` as a small dark accent on white cards — never make entire section backgrounds dark. This warm/light + white cards + anthracite+gold accents pattern is the established visual language for all interior sections.

**Hero**: uses a full-bleed background image (`/hero-bg.jpg`) via `<Image fill>` with an `bg-anthracite-deep/80` overlay for readability. Single-column layout (`max-w-2xl`), no right-side decorative elements.

**Logo files** are in `public/`:
- `logo-on-dark.svg` — Altesa Ópticos y Audiólogos branding, white/gold, for dark backgrounds — used in navbar and footer
- `logo-light.svg` — dark version, for light backgrounds
- `logo-white.svg` — all white

**Company logos** are in `public/empresas/`:
- `altesa.svg` — derived from `logo-light.svg` with the tagline stripped and viewBox cropped
- `begira.png`, `atenea.png`, `bbq.png` — source files from brand assets
- Each `Company` entry in `app/data/companies.ts` has a `logo?` field pointing to these files
- `CompanyCard` in `empresas.tsx` renders logos via `next/image` in a fixed `h-14` container with `object-contain object-left`; falls back to the initials badge if no logo is set

**Other public assets**:
- `eduardo.png` — photo of Eduardo Ladrón de Guevara, used in `quienes-somos.tsx`
- `books/book-1.png`, `books/book-2.png` — book cover images, used in `libros.tsx`

## Key Patterns

**Client components** — `navbar.tsx`, `empresas.tsx`, `quienes-somos.tsx`, and `libros.tsx` are client components (`"use client"`). Everything else is a Server Component. Add `"use client"` only when `useState`/`useEffect` is needed.

**Expand/collapse** — interactive "Leer más / Leer menos" toggles use local `useState` per card. See `empresas.tsx` (`CompanyCard`), `quienes-somos.tsx`, and `libros.tsx` (`AuthorCard`) for the pattern.

**Contact** — the only contact method is email (`grupoaltesa@grupoaltesa.es`), shown in the footer. There is no contact section on the homepage and no phone number anywhere on the site. Other contact details (address, phone, hours) belong only in the legal pages.

**Nav scroll effect** — navbar starts transparent (works over the dark hero) and gains `bg-anthracite-deep/95 backdrop-blur-md` after 20px scroll. Always test new hero backgrounds against this.
