# VIZIONIX — polished rebuild (React + TypeScript + Tailwind)

The foundation is already in place: original palette, typography, sidebar rail layout, French copy,
team bios and the five expertise pages are ported into typed React components. This plan finishes
the job and adds the polish pass.

## 1. Restore the two missing pages

The routes folder currently has the home page and the five expertise pages, but About and Contact
are missing — links to them 404.

- **À propos** — cabinet story plus "Les associés" cards for Jamel Eddine Ben Aissa and
  Mouhaïmen Kaffel with their full original bios and credentials.
- **Contact** — letterhead block (phone, address, SARL — Tunis) plus the contact form.

Both reuse the existing Section / Hero / Reveal / TeamCard / Letterhead components.

## 2. Contact form (frontend-only)

- Destination email stays a single editable constant in `src/content/site.ts`
  (currently `kaffelahmed1@gmail.com`).
- Zod validation with French inline messages, `aria-invalid` and `aria-describedby`,
  required marks, and a confirmation state after the `mailto:` handoff.
- No backend, no database.

## 3. Polish pass (design language unchanged)

- Reveal animations: shorter stagger so sections settle quickly instead of lingering half-faded,
  and full `prefers-reduced-motion` support.
- Hover/focus: consistent underline-grow on links, visible focus rings everywhere, larger tap
  targets in the mobile menu.
- Responsive: verify the rail → mobile header transition at 390 / 768 / 1024 / 1440 and tighten
  section padding and heading scale on small screens.
- Logo: fix its rendering box so it is never clipped in the rail or mobile header.

## 4. Accessibility and SEO

- One `<main>` per page, working skip link, ordered headings, `lang="fr"` on the document.
- Per-route `head()` with distinct French title, description and og tags.

## 5. Verification

Screenshot every route at desktop and mobile widths, confirm no console errors or 404 assets,
and run a typecheck.

## Notes

The stats section keeps the illustrative figures and the "chiffres illustratifs" note as-is.
No gradients, glassmorphism, stock imagery or new visual language — only refinement of what exists.