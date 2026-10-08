# 004 — Animate the mobile menu and give cards a hover response

- **Status**: DONE
- **Commit**: 31e2077
- **Severity**: LOW
- **Category**: Missed opportunities / Physicality & origin
- **Estimated scope**: `src/styles/global.css` (~45 lines)

## Problem

1. `src/components/Header.astro:46` — `<details class="mobile-menu">` opens its `nav` instantly with no indication of where it came from (it hangs from the top-right toggle).
2. Case tiles (`.case-visual`) and blog covers (`.blog-cover`) are clickable-looking illustrated panels with no hover response.

## Target

### A. Mobile menu (append near the `.mobile-menu nav` rules)

```css
.mobile-menu nav {
  transform-origin: top right;
  transition:
    opacity 180ms var(--ease-out),
    transform 180ms var(--ease-out);
}
@starting-style {
  .mobile-menu[open] nav {
    opacity: 0;
    transform: translateY(-6px) scale(0.96);
  }
}
.mobile-menu summary {
  border-radius: 8px;
  transition: background-color var(--duration-hover) ease;
}
.mobile-menu[open] summary {
  background: #ebece3;
}
```

Closing stays instant (native `<details>` removes content immediately) — that's acceptable and fast. Do NOT add JS to animate the close.

### B. Card hovers (append after `.blog-cover` / `.case-visual` rules)

```css
.case-visual > *,
.cover-art {
  transition: transform 500ms var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .case-item:hover .case-visual > * {
    transform: translateY(-4px) scale(1.03);
  }
  .blog-card:hover .cover-art {
    transform: scale(1.04);
  }
}
```

Careful: `.saas-window`, `.phone` already have `transform: rotate(...)`. They are children of `.saas-art` / `.mobile-art`, which are the direct children of `.case-visual`, so `.case-visual > *` targets the wrappers, not the rotated elements. Verify in `src/components/Cases.astro` that the direct children of `.case-visual` have no `transform` in CSS (`.logistics-art`, `.saas-art`, `.mobile-art` — none do). If any does, STOP and report.

## Boundaries

- No markup changes. No new dependencies.
- Do not change `.case-visual` / `.blog-cover` dimensions, radius or overflow.

## Verification

- **Mechanical**: `bun run build` succeeds.
- **Feel check**: at ≤800px width tap the menu icon: the panel scales/fades in from the icon's corner in ~180ms; the toggle shows a pale pressed background while open. On desktop hover a case tile: the illustration drifts up and grows slightly over 0.5s, edges stay clipped by the 12px radius. Moving the mouse out reverses smoothly from where it was (transition, not keyframes).
