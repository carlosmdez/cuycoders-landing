# 002 — Reduced motion: drop movement, keep fades

- **Status**: DONE
- **Commit**: 31e2077
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file (`src/styles/global.css`), ~15 lines

## Problem

```css
/* src/styles/global.css (near the end, before @font-face) — current */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

This nukes ALL feedback — including the opacity fade the contact block deliberately defines (`.contact-success { animation: contact-fade 180ms ease; }` is overridden by the `!important`), color hovers, and (after plan 003) scroll reveals. Reduced motion should mean "no movement", not "no feedback".

## Target

Replace that block with:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-property: color, background-color, border-color, opacity !important;
    transition-duration: 150ms !important;
  }
  .contact-success {
    animation-duration: 180ms !important;
  }
}
```

Effects: keyframe animations jump to their end state (bars render full height, no grow), transforms change instantly, color/opacity transitions remain gentle. Plan 003's reveal CSS must also have its own reduced-motion rule (opacity only) — that is specified in plan 003.

## Boundaries

- Only edit this one media block. Keep the existing contact-card reduced-motion block (the one with `.contact-card-inner { transition: none; }`) unchanged.

## Verification

- **Mechanical**: `bun run build` succeeds.
- **Feel check**: DevTools → Rendering → emulate `prefers-reduced-motion: reduce`. Reload: hero bars appear at full height, no growth. Hover a nav link: color still fades. Submit the contact form (or toggle `.is-sent` on `[data-contact-card]` and remove `hidden` from `.contact-success` in DevTools): success panel fades in, no 3D flip.
