# 003 — Scroll-triggered reveals + hero entrance

- **Status**: DONE
- **Commit**: 31e2077
- **Severity**: MEDIUM (missed opportunity, explicitly requested by owner)
- **Category**: Missed opportunities / Cohesion (stagger)
- **Estimated scope**: `src/styles/global.css` (~50 lines), `src/layouts/Layout.astro` (1 inline script + 1 module script), components get `data-reveal` attributes only

## Problem

Every section below the fold is static; the page reads as a flat document while scrolling. The only motion on load is the hero bar chart (`.demo-chart > span`, `grow-bar` keyframes). The hero copy and illustration appear all at once.

## Target

### A. CSS (append to `src/styles/global.css`, before the `@media (prefers-reduced-motion: reduce)` block)

```css
/* Scroll reveal: only hides content when JS is running (html.js), so no-JS and crawlers see everything. */
.js [data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity var(--duration-reveal) var(--ease-out),
    transform var(--duration-reveal) var(--ease-out);
  transition-delay: calc(var(--reveal-index, 0) * 70ms);
}
.js [data-reveal].is-visible {
  opacity: 1;
  transform: none;
}
/* Hero entrance on first paint (rare, marketing → allowed to be a bit longer). */
.js .hero-copy > *,
.js .hero-art {
  animation: hero-in 800ms var(--ease-out) both;
}
.js .hero-copy > :nth-child(1) { animation-delay: 40ms; }
.js .hero-copy > :nth-child(2) { animation-delay: 110ms; }
.js .hero-copy > :nth-child(3) { animation-delay: 180ms; }
.js .hero-copy > :nth-child(4) { animation-delay: 240ms; }
.js .hero-copy > :nth-child(5) { animation-delay: 300ms; }
.js .hero-art { animation-name: hero-art-in; animation-duration: 1000ms; animation-delay: 120ms; }
@keyframes hero-in {
  from { opacity: 0; transform: translateY(14px); }
}
@keyframes hero-art-in {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
}
@media (prefers-reduced-motion: reduce) {
  .js [data-reveal] {
    transform: none;
    transition: opacity 300ms ease !important;
  }
}
```

Also change the bar chart delay so the bars grow after the dashboard has arrived: in `.demo-chart > span` replace
`animation-delay: calc(var(--bar-index) * 35ms);` with `animation-delay: calc(500ms + var(--bar-index) * 35ms);`.

Important: `.hero-art` must NOT get `[data-reveal]` (it uses the keyframe entrance above). `.product-demo` and `.floating-note` have their own `transform: rotate(...)`; the animation is on the parent `.hero-art`, so no conflict. Do not put `data-reveal` on any element that already has a `transform` in CSS (e.g. `.product-demo`, `.saas-window`, `.phone`, `.floating-note`) — put it on a wrapper instead.

### B. JS — `src/layouts/Layout.astro`

1. In `<head>`, right after the `<meta name="viewport" …>` tag, add an inline blocking script so content is hidden before first paint only when JS works:

```astro
<script is:inline>document.documentElement.classList.add('js');</script>
```

2. Before `</body>`, add a module script:

```astro
<script>
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    targets.forEach((el) => observer.observe(el));
  }
</script>
```

Reveal is one-shot (unobserve) — content never re-hides when scrolling back up.

### C. Markup — add attributes only

Add `data-reveal` (and `style="--reveal-index: N"` for staggered siblings, N starting at 0) to these elements. Read each component first; if an element listed doesn't exist, skip it and report.

| Component | Element(s) | Stagger |
| --- | --- | --- |
| `Hero.astro` | `.capability-strip > .wrap` | none |
| `Services.astro` | `.section-head`; each `li.service-row` | rows: index 0..n |
| `About.astro` | `.about-story` wrapper (or the column containing `.section-head`); `.about-note` | note: `--reveal-index: 1` |
| `Cases.astro` | `.section-head`; each `.case-item` | 0..2 |
| `Process.astro` | `.section-head`; each `li.process-step` | 0..3 |
| `Technology.astro` | the left text column; each `.tech-detail` | details: 1..n |
| `BlogCards.astro` | `.section-head`; each `.blog-card` | 0..2 |
| `Contact.astro` | `.contact-copy`; `.contact-card` | card: `--reveal-index: 1` |

For lists rendered with `.map((item, i) => …)`, use the map index: `style={\`--reveal-index: ${i}\`}`. If the map callback has no index param, add it.

`.contact-card` already uses `perspective` on itself and the flip on `.contact-card-inner` — adding `transform` on `.contact-card` via reveal is fine, because after reveal it becomes `transform: none`. Verify the flip still works after the card has revealed.

## Boundaries

- Do NOT add a dependency (no GSAP, no AOS, no Motion).
- Do NOT reveal the header, footer, blog article pages (`src/pages/[lang]/blog/[id].astro`) — only the home sections listed above. The blog index (`src/pages/[lang]/blog/index.astro`) may reuse `.blog-card` reveals only if it renders `BlogCards.astro`; otherwise leave it.
- Do NOT change copy, layout or colors.

## Verification

- **Mechanical**: `bun run build`, then `bun run verify:build` and `bun run test:seo` pass. `grep -c 'data-reveal' dist/es/index.html` > 15.
- **Feel check**: `bun run dev`, open `/es/`:
  - Hero: heading, paragraph, button, link and proof cascade up within ~0.5s; dashboard rises and settles; bars grow right after.
  - Scroll slowly: each section head fades/rises as it enters; card/step groups cascade left-to-right ~70ms apart. Scrolling back up does NOT re-hide anything.
  - Jump via nav anchor (`#contacto`): the target section is visible on arrival (no blank section).
  - Disable JS: everything visible, nothing stuck at opacity 0.
  - Reduced motion emulation: elements fade in only, no movement.
  - DevTools Animations panel at 10%: no element jumps at the end of its transition.
