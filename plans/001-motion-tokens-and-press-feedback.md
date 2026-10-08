# 001 — Add motion tokens, press feedback and smooth hover transitions

- **Status**: DONE
- **Commit**: 31e2077
- **Severity**: HIGH
- **Category**: Easing & duration / Physicality / Cohesion & tokens
- **Estimated scope**: 1 file (`src/styles/global.css`), ~60 lines

## Problem

There are no motion tokens; every transition uses the weak default `ease` or a hand-typed curve.

```css
/* src/styles/global.css — .button (≈line 132) current */
transition:
  background 0.2s,
  transform 0.2s;
/* .button-primary:hover */
background: #953817;
transform: translateY(-2px);
```

- The hover lift is not gated by `(hover: hover)`, so on touch it sticks after a tap.
- No `:active` press feedback on any button.
- Color hovers on `.desktop-nav a`, `.footer-links a`, `.blog-card-title a`, `.header-cta`, `.mobile-menu nav a` snap instantly (no transition at all).
- Arrow icons inside `.text-link` / `.header-cta` / `.blog-card-title a` don't respond on hover.

## Target

1. In the existing `:root { ... }` block at the top of `src/styles/global.css`, append:

```css
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --duration-press: 160ms;
  --duration-hover: 200ms;
  --duration-reveal: 700ms;
```

2. Replace the `.button` `transition` declaration with:

```css
  transition:
    background-color var(--duration-hover) ease,
    transform var(--duration-press) var(--ease-out),
    box-shadow var(--duration-hover) ease;
```

3. Replace the `.button-primary:hover` rule with:

```css
.button-primary:hover {
  background: #953817;
}
@media (hover: hover) and (pointer: fine) {
  .button-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -12px #bb472480;
  }
}
.button:active {
  transform: scale(0.97);
  transition-duration: 100ms;
}
```
(`.button:active` must come AFTER the hover media block so it wins.)

4. Add color transitions (put them right after the `.desktop-nav a:hover, .footer-links a:hover` rule):

```css
.desktop-nav a,
.footer-links a,
.blog-card-title a,
.mobile-menu nav a,
.language a {
  transition: color var(--duration-hover) ease;
}
.header-cta {
  transition:
    background-color var(--duration-hover) ease,
    border-color var(--duration-hover) ease;
}
.header-cta:active {
  transform: scale(0.97);
}
```

5. Arrow nudge on hover (append after `.text-link:hover`):

```css
.text-link svg,
.header-cta svg,
.blog-card-title svg {
  transition: transform var(--duration-hover) var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .text-link:hover svg,
  .header-cta:hover svg,
  .blog-card-title a:hover svg {
    transform: translate(3px, -3px);
  }
}
```
Note: `.text-link` arrows that point right (ArrowRight) would look better with `translateX(3px)`; check the icon in each component (`grep -rn "Arrow" src/components`). Use `translateX(3px)` for `ArrowRight`, `translate(3px, -3px)` for `ArrowUpRight`. If a single selector mixes both, add a modifier selector rather than changing markup — e.g. `.text-link:hover svg.lucide-arrow-right`. Check the rendered class names in the built HTML (`dist/`) first.

## Repo conventions to follow

- All styles live in `src/styles/global.css`, plain CSS with custom properties in `:root` (`--accent`, `--line`, …). Add tokens there, not in `@theme`.

## Boundaries

- Do NOT change markup, colors or layout.
- Do NOT touch the contact-card flip, `.demo-chart` keyframes, or the reduced-motion block (plan 002 owns it).
- No new dependencies.

## Verification

- **Mechanical**: `bun run build` succeeds.
- **Feel check**: hover the hero "primary" button: color + 2px lift + soft orange shadow, 200ms. Click and hold: it compresses slightly (0.97) immediately; release springs back. Nav/footer links fade to orange instead of snapping. On a touch emulator, tapping a button leaves no stuck lift.
- **Done when**: no `transition` in the file uses a bare duration without a property name, and all new curves reference tokens.
