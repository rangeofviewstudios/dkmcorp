# DKM Corp — Optimization & Responsive Fix Plan

## Issues Summary

This plan covers **responsive/layout fixes** across all screen sizes and the **performance/code quality issues** identified in the audit. Organized into 4 phases by priority and dependency.

---

## Phase 1: Global Foundation Fixes

These affect every section and must be done first — everything else builds on them.

### 1.1 Container padding too aggressive on small phones
- **File:** `src/app/globals.css` (line 165-176)
- **Problem:** 32px side padding on 320px phones leaves only 256px for content (20% loss)
- **Fix:** Add breakpoints at 480px and 375px to progressively reduce padding
  ```
  @media (max-width: 480px) { .container { padding: 0 var(--sp-3); } }   /* 24px */
  @media (max-width: 375px) { .container { padding: 0 var(--sp-2); } }   /* 16px */
  ```

### 1.2 Section vertical padding excessive on mobile
- **File:** `src/app/globals.css` (line 217-225)
- **Problem:** 80px vertical padding on mobile sections wastes viewport on small phones
- **Fix:** Add smaller breakpoint:
  ```
  @media (max-width: 480px) { .section { padding: var(--sp-8) 0; } }   /* 64px */
  ```

### 1.3 Typography clamp minimums too large for 320px
- **File:** `src/app/globals.css` (lines 119, 127)
- **Problem:** `.t-display` min 3rem (48px) and `.t-h1` min 2.2rem (35px) are oversized on 320px phones — causes excessive line wrapping
- **Fix:** Reduce clamp minimums:
  ```
  .t-display: clamp(2.4rem, 7vw, 6.5rem)
  .t-h1: clamp(1.8rem, 5vw, 4.5rem)
  ```

### 1.4 Smooth scroll breaks reduced-motion preference
- **File:** `src/app/globals.css` (line 76)
- **Problem:** `scroll-behavior: smooth` applied globally regardless of user preference
- **Fix:** Wrap in `@media (prefers-reduced-motion: no-preference)`

### 1.5 Dark mode text-faint fails WCAG AA contrast
- **File:** `src/app/globals.css` (dark theme variables)
- **Problem:** `--text-faint: rgba(245, 240, 235, 0.30)` is ~4:1 contrast (needs 4.5:1)
- **Fix:** Increase to `rgba(245, 240, 235, 0.45)`

---

## Phase 2: Component Responsive Fixes

Fix each component's responsive behavior, working top-to-bottom through the page.

### 2.1 Navigation — overlay text too large on small phones
- **File:** `src/components/Navigation/Navigation.module.css`
- **Problem:** `.overlayLink` is fixed `3rem` with `40px` gap. On 320px phones, links wrap and require scrolling
- **Fix:** Add 480px breakpoint: reduce to `2.2rem` font-size, `var(--sp-4)` gap

### 2.2 Hero — missing tablet breakpoint (600-900px)
- **File:** `src/components/Hero/Hero.module.css`
- **Problem:** 2-column grid stays until 900px. On 600-768px tablets, columns are too narrow
- **Fix:** Add 768px breakpoint to stack grid to single column earlier

### 2.3 Hero — geo grid cramped on tiny phones
- **File:** `src/components/Hero/Hero.module.css` (600px breakpoint)
- **Problem:** 2x2 grid with `var(--sp-4)` column gap is tight on 320px
- **Fix:** Add 375px breakpoint: switch to single column list

### 2.4 About — no intermediate tablet breakpoint
- **File:** `src/components/About/About.module.css`
- **Problem:** Jumps from 2-column to 1-column only at 900px. Tablets in 600-900px range have cramped stat grid
- **Fix:** Add 768px breakpoint to adjust stat grid spacing

### 2.5 Work — non-standard 700px breakpoint
- **File:** `src/components/Work/Work.module.css`
- **Problem:** Grid collapses at 700px while all other components use 600px or 768px. Creates awkward transition
- **Fix:** Change to 768px to match site-wide convention. Remove dead `.filters` / `.filterBtn` CSS

### 2.6 Engagement — no 1-column breakpoint for small phones
- **File:** `src/components/Engagement/Engagement.module.css`
- **Problem:** Goes from 4-col to 2-col at 900px, then 1-col at 600px. CTA button text can overflow on 320px
- **Fix:** Add 480px breakpoint for tighter mobile spacing

### 2.7 Founder — image gets too tall on 900-1280px range
- **File:** `src/components/Founder/Founder.module.css`
- **Problem:** 96px gap + 1.2fr/0.8fr split squeezes image on smaller desktops. No tablet-landscape handling
- **Fix:** Add 1024px breakpoint to reduce gap to `var(--sp-8)`. Use Next.js `<Image>` component with width/height to prevent CLS

### 2.8 Contact — cards cramped on small phones
- **File:** `src/components/Contact/Contact.module.css`
- **Problem:** Fixed 90px label width + 40px card padding on 320px phones leaves almost no room for content
- **Fix:** Add 480px breakpoint: reduce card padding, make label width auto

### 2.9 Footer — clock strip has no small-phone breakpoint
- **File:** `src/components/Footer/Footer.module.css`
- **Problem:** 2x2 clock grid at 768px but nothing for 375px and below where items are still tight
- **Fix:** Add 480px breakpoint: reduce clock font sizes and gap

---

## Phase 3: Performance & Code Quality

### 3.1 Footer clock re-renders entire component every second
- **File:** `src/components/Footer/Footer.tsx`
- **Problem:** `setInterval` in `useClocks()` triggers 60+ re-renders/minute of the entire Footer
- **Fix:** Extract clock strip into a separate `<ClockStrip />` component so only the clocks re-render

### 3.2 GSAP cursor animation leaks in TextType
- **File:** `src/components/TextType/TextType.tsx`
- **Problem:** `gsap.to()` with `repeat: -1` on cursor never gets killed on unmount
- **Fix:** Store tween ref and call `tween.kill()` in useEffect cleanup

### 3.3 Hydration mismatch in Footer clocks
- **File:** `src/components/Footer/Footer.tsx`
- **Problem:** Server renders placeholder, client hydrates with real time immediately
- **Fix:** Initialize `times` as empty array, only start interval in `useEffect` (already done, but ensure initial render matches SSR by using `suppressHydrationWarning` on clock elements)

### 3.4 ShinyText animations run off-screen
- **File:** `src/components/ShinyText/ShinyText.tsx`
- **Problem:** Infinite CSS animations run even when elements are not visible
- **Fix:** Add IntersectionObserver to pause/resume animation via `animation-play-state`

### 3.5 Dark mode partner logo scale jump
- **File:** `src/components/Services/Services.module.css`, `src/components/Footer/Footer.module.css`
- **Problem:** Dark logo uses `transform: scale(1.6)` causing jarring size change on theme toggle
- **Fix:** Replace `transform: scale()` with explicit `height` values for consistent sizing

---

## Phase 4: SEO & Accessibility

### 4.1 Add Open Graph image
- **File:** `src/app/layout.tsx`
- **Fix:** Add `images` array to `openGraph` metadata config. Create `/public/og-image.png` (1200x630)

### 4.2 Add structured data (JSON-LD)
- **File:** `src/app/layout.tsx`
- **Fix:** Add `<script type="application/ld+json">` with Organization schema (name, url, locations, services)

### 4.3 Services accordion accessibility
- **File:** `src/components/Services/Services.tsx`
- **Fix:** Add `id` to bullet sections, add `aria-controls` to card buttons linking to bullet IDs

### 4.4 Mobile nav focus trap
- **File:** `src/components/Navigation/Navigation.tsx`
- **Fix:** Add `useEffect` to trap focus within overlay when open. Handle Tab/Shift+Tab cycling and Escape to close

### 4.5 Founder image — use Next.js Image component
- **File:** `src/components/Founder/Founder.tsx`
- **Fix:** Replace `<img>` with `<Image>` from `next/image` with explicit `width`/`height` to prevent layout shift

---

## Execution Order

| Order | Task | Est. Impact | Files Changed |
|-------|------|-------------|---------------|
| 1 | Phase 1 (1.1-1.5) | High — fixes foundation for all components | `globals.css` |
| 2 | Phase 2.1-2.3 | High — nav + hero are first things users see | `Navigation.module.css`, `Hero.module.css` |
| 3 | Phase 2.4-2.9 | Medium — remaining component responsive fixes | 6 CSS module files |
| 4 | Phase 3.1-3.2 | High — stops memory leak + unnecessary re-renders | `Footer.tsx`, `TextType.tsx` |
| 5 | Phase 3.3-3.5 | Medium — polish performance issues | 3-4 files |
| 6 | Phase 4.1-4.5 | Medium — SEO + accessibility improvements | `layout.tsx`, `Services.tsx`, `Navigation.tsx`, `Founder.tsx` |

---

## Breakpoint Strategy (Standardized)

After these fixes, the site should use these consistent breakpoints:

| Breakpoint | Target |
|------------|--------|
| 375px | Small phones (iPhone SE) |
| 480px | Standard phones |
| 600px | Large phones / phablets |
| 768px | Tablets portrait |
| 900px | Tablets landscape |
| 1024px | Small desktop / iPad Pro |
| 1280px | Standard desktop (max-width container) |
