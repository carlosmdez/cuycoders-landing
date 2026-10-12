---
name: Cuy Coders
description: A warm, clear design system for a bilingual software studio.
colors:
  cuy: "#e3964f"
  cuy-hover: "#d9843a"
  accent: "#b4581e"
  accent-hover: "#96461a"
  accent-display: "#d9662b"
  accent-soft: "#f6cba9"
  paper: "#fbf7f1"
  paper-raised: "#fffdf9"
  ink: "#2e221d"
  muted: "#6b5d55"
  line: "#eadfd3"
  tint-sage: "#e7ebdd"
  tint-peach: "#f7dfcb"
  tint-sky: "#dce5e6"
  tint-lilac: "#e0e1ed"
  tint-sand: "#f1e9df"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(44px, 4.6vw, 65px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  display-xl:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "68px"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  display-lg:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "49px"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  display-fluid:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(43px, 7.5vw, 60px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  display-sm:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "43px"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  page-title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(35px, 4.6vw, 60px)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  article-title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(36px, 4.3vw, 56px)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  contact-title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(36px, 3.8vw, 50px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 44px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline-md:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "36px"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline-sm:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "32px"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  success-title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(28px, 3vw, 38px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  prose-h2:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "28px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "20px"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  wordmark:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "26px"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  numeral:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "88px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.04em"
  numeral-md:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "70px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.04em"
  numeral-sup:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "55px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.04em"
  numeral-sup-sm:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "40px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.04em"
  lead:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.2
  ui:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
  sm:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  tight: "4px"
  field: "6px"
  control: "8px"
  card: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  section-mobile: "66px"
  section-tablet: "85px"
  section-desktop: "108px"
components:
  button-primary:
    backgroundColor: "{colors.cuy}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.cuy-hover}"
  button-pill:
    backgroundColor: "{colors.tint-peach}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "7px 7px 7px 18px"
  input:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  field-label:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Cuy Coders

## Overview

**Creative North Star: "The Warm Systems Workshop"**

This is a code-led name for the implemented visual language, not an approved visual comp or a separately confirmed brand phrase. The site presents software work with the calm clarity of a well-kept studio: paper-toned space, dark readable type, warm orange calls to action, and sage panels that bring a quiet natural counterweight. The overall density is open, with generous section spacing and short, structured content groups.

Bricolage Grotesque gives headings warmth and character; Inter Tight keeps paragraphs, labels, and controls compact and legible. A small dashboard illustration, outlined route diagrams, and soft geometry make the software subject tangible while keeping the presentation approachable and professional. The product context is bilingual, so the same system supports Spanish and English content without depending on language-specific styling.

**Key Characteristics:**
- Warm ivory surfaces with charcoal text and a restrained orange action color.
- Sage and muted earth tones provide secondary surfaces and illustration colors.
- Clear display/body type contrast and spacious, modular sections.
- Friendly interface details within a professional software-services presentation.

## Colors

The palette is drawn from the cuy mark itself: its cream fur gives the paper, its cocoa outline gives the ink, and its golden-orange coat gives the action color. Neutrals are warm on purpose; cool gray-greens made the page fight the mascot.

### Primary
- **Cuy Orange** (`{colors.cuy}`, `--cuy`): Fills for primary buttons, the header CTA disc, the hero proof chip, the AI chat bubble and capability-strip dots. Text on it is always ink (6.4:1); white text on it fails contrast.
- **Cuy Orange Hover** (`{colors.cuy-hover}`): Primary button hover.
- **Toasted Orange** (`{colors.accent}`, `--accent`): Body-size accents: rotating proof words, checklist and chip icons, links in article meta, focus ring and caret. 4.5:1 on paper.
- **Tangerine** (`{colors.accent-display}`, `--accent-display`): Display-size emphasis only: the hero and section heading second lines and the About "+". 3.3:1 on paper, so never for body-size text.
- **Soft Orange** (`{colors.accent-soft}`): Text selection.

### Pastel Tint Scale
Surfaces for illustrated panels; the content that belongs to them sits unboxed below.
- **Tint Peach** (`{colors.tint-peach}`): The logo badge color. About experience panel, a case tile, journal covers, the header pill.
- **Tint Sage** (`{colors.tint-sage}`): Contact section, hero backdrop, case and journal covers.
- **Tint Sky** (`{colors.tint-sky}`): Technology "stack" panel, a case tile, the second hero stat.
- **Tint Lilac** (`{colors.tint-lilac}`): Technology AI panel, journal covers.
- **Tint Sand** (`{colors.tint-sand}`): Quiet warm fills (open mobile menu, empty covers).

### Neutral
- **Cream Paper** (`{colors.paper}`): Page canvas.
- **Raised Paper** (`{colors.paper-raised}`): Chips, inputs and illustrated surfaces.
- **Cocoa Ink** (`{colors.ink}`): Headings and primary text.
- **Warm Taupe** (`{colors.muted}`): Paragraphs and secondary text (5.9:1 on paper, 4.9:1 or better on every tint).
- **Soft Divider** (`{colors.line}`): Hairlines.

Illustrations (`src/styles/illustrations.css`) keep their own local clay, sage and blue-gray tones.

**The Single Accent Rule.** Orange means the brand and the action. One orange family, two jobs: the coat orange fills, the toasted orange speaks in text. No dark full-bleed bands; sections separate with space and tinted panels.

## Typography

**Display Font:** Bricolage Grotesque Variable (with sans-serif fallback)  
**Body Font:** Inter Tight Variable (with sans-serif fallback)  
**Label Font:** Inter Tight Variable.  
**Code Font:** the platform monospace stack (`ui-monospace, SF Mono, Menlo, Consolas`), used only inside the Services code-editor illustration.

**Character:** Bricolage Grotesque is a warm, slightly quirky grotesque with character, giving headings a confident, human voice. Inter Tight is a compact, highly legible UI sans that keeps supporting copy and controls easy to scan without making the layout feel formal or technical.

### Hierarchy
Every UI font size is a `--text-*` token in `:root` (src/styles/global.css) and a `typography` entry above. Drawn illustrations (src/styles/illustrations.css) keep their own micro scale and are intentionally outside this ramp.

**Display and headings (Bricolage Grotesque, weight 650)**
- **Display** (`--text-display`, `clamp(44px, 4.6vw, 65px)`): Hero heading. Steps: `--text-display-xl` 68px at 1440px+, `--text-display-lg` 49px at 1050px and below, `--text-display-fluid` `clamp(43px, 7.5vw, 60px)` at 800px and below, `--text-display-sm` 43px at 540px and below.
- **Page and article titles**: `--text-page-title` `clamp(35px, 4.6vw, 60px)` (journal index), `--text-article-title` `clamp(36px, 4.3vw, 56px)` (article h1), `--text-contact-title` `clamp(36px, 3.8vw, 50px)`.
- **Headline** (`--text-headline`, `clamp(32px, 3.2vw, 44px)`): Section headings. Phone steps: `--text-headline-md` 36px and `--text-headline-sm` 32px.
- **Success title** (`--text-success-title`, `clamp(28px, 3vw, 38px)`): Contact confirmation heading.
- **Prose h2** (`--text-prose-h2`, 28px): Article subheadings; the one deliberate step between headline and title.
- **Title** (`--text-title`, 22px): Card and subsection headings. **Title small** (`--text-title-sm`, 20px): Service, technology and process headings, article deck.
- **Wordmark** (`--text-wordmark`, 26px): The Cuy Coders brand text in the header.
- **Numerals**: `--text-numeral` 88px (About years, 70px as `--text-numeral-md` on phones) with `--text-numeral-sup` 55px (40px as `--text-numeral-sup-sm`) for the suffix.

**Text (Inter Tight)**
- **Lead** (`--text-lead`, 17px): Section intros, hero copy, long-form article text (72ch).
- **Body** (`--text-body`, 16px, line-height 1.65): Default text.
- **Button** (`--text-button`, 15px, semibold): Buttons and inline text links.
- **UI** (`--text-ui`, 14px): Navigation, card body and small interface text.
- **Small** (`--text-sm`, 13px): Secondary links and compact descriptions.
- **Label** (`--text-xs`, 12px, weight 600): Labels, captions, meta lines and the language switch. Former 9-11px sizes snap here.

Stray sizes were snapped to the nearest step (19/21/23 to 20 or 22, 29 and 27 to 28, 31 to 32, 37 to 36).

**The Balanced Heading Rule.** Headings use tight tracking and balanced wrapping; reserve the display face for headings and prominent numeric proof.

## Layout

The main container is capped at 1180px with 40px side gutters on desktop, 28px below 1050px, and 20px below 540px. The hero begins as a two-column split (1.06:1) with a 64px gap; at 800px it stacks into one column and centers the illustrative dashboard. Most content sections use 108px vertical padding on wide screens, 85px below 1050px, and 66px below 540px.

Section heads, service rows, card grids, and process steps share a modular rhythm rather than a dense dashboard grid. Three-column case and journal lists become two-column text/image rows below 800px, then single-column cards below 540px. The navigation gives way to a native disclosure menu at 800px; the contact form similarly moves from a two-column layout to one field per row on narrow phones. The capability strip wraps and centers as width decreases.

## Elevation & Depth

Depth is hybrid but restrained: section-to-section separation mostly comes from paper and sage color fields, while the hand-built dashboard, floating note, and small illustration windows use soft ambient shadows. Borders remain thin and low-contrast. Keep large informational sections flat; reserve shadows for illustrative surfaces and overlays.

### Shadow Vocabulary
- **Dashboard** (`0 28px 42px -20px #2e3e3333`): Softly lifts the hero product illustration from its sage backdrop.
- **Floating Note** (`0 10px 26px -9px #313c3a26`): Separates the overlapping hero callout.
- **Compact Illustration Surface** (`0 12px 20px -10px #78472025`): Adds depth to the small SaaS-window motif.
- **Phone Illustration** (`0 15px 25px -12px #2e5c6540`): Separates the phone mockup in an illustrative case tile.
- **Mobile Menu** (`0 12px 25px #24292315`): Distinguishes the open menu from the page behind it.

## Shapes

Corners come from a five-step scale exposed as `--radius-*` tokens, plus 50% for true circles (icon discs, avatars, dots):
- **Tight** (`--radius-tight`, 4px): Small inline status details.
- **Field** (`--radius-field`, 6px): Inputs, textareas and select controls.
- **Control** (`--radius-control`, 8px): Buttons, the mobile menu panel and small controls.
- **Card** (`--radius-card`, 12px): Case tiles, journal covers, the About note and other containers.
- **Pill** (`--radius-pill`, 999px): The header CTA and rotating step chips.

Field and card borders are quiet rather than decorative. The hero's sage backdrop is the signature departure from rectangles: a large rotated organic oval sits behind a slightly tilted dashboard, with a counter-rotated note. Drawn illustrations may use their own shapes (declared in illustrations.css) and are outside this scale.

## Components

### Buttons
Confident, compact actions use a warm fill and a small lift on hover.
- **Shape:** Rounded rectangle (8px); 54px minimum height.
- **Primary:** Cuy orange fill and cocoa ink text, with 15px 25px padding, 15px semibold type, and a 24px icon gap.
- **Hover / Focus:** Hover deepens the coat orange and lifts by 2px over 200ms. Keyboard focus uses the shared 3px orange outline with 5px offset.
- **Pill (header CTA):** A peach pill (`--tint-peach` background, ink 14px semibold text, pill radius, 1px inset orange hairline at 18%) with 7px 7px 7px 18px padding and a 14px gap. It ends in a 30px orange disc holding a white arrow; on hover the pill mixes toward orange (18%) and the disc rotates 45deg and scales to 1.08. Pressing scales the pill to 0.97.
- **Text action:** Inline links use semibold 15px text with a 12px icon gap; hover underlines with a 5px offset.

### Cards / Containers
Cards keep content readable and illustrations soft-edged.
- **Case tiles:** Illustrative panels are 220px high on desktop, 12px rounded, and use distinct sage, clay, or blue-gray backgrounds. Their content remains unboxed beneath.
- **Journal covers:** 207px high on desktop, 12px rounded, with abstract CSS illustrations; card metadata and text sit below the cover.
- **Hero dashboard:** Cream-white surface with 12px corners, clipped contents, and a soft shadow; small stat tiles use peach and sky tints and 7px corners.
- **About experience panel:** Peach tile (12px corners) with the 8+ numeral and label in ink, the "+" in toasted orange, and the cuy mark peeking up from the lower edge; the checklist sits unboxed below with toasted-orange checks.
- **Technology panels:** Two tiles in the case-tile language: a sky panel with stacked Web/Mobile/Cloud chips and a lilac panel with a question bubble (cuy orange) and an AI reply chip; heading and copy sit below.

### Inputs / Fields
The contact fields are understated and warm.
- **Style:** Cream-tinted input surface, muted sage-gray 1px border, 6px radius, and 12px 14px padding. Labels sit above with an 8px gap.
- **Focus:** Shared 3px orange focus-visible outline with 5px offset; caret also uses orange.
- **Layout:** Name and email share a row on desktop; service and message span the full form width. All fields stack on narrow screens. Textareas remain vertically resizable with a 125px minimum height.

### Navigation
Navigation stays light and directly attached to the page canvas.
- **Desktop:** 108px header with a thin divider, 14px medium links, bilingual ES/EN switch, and the peach pill contact action.
- **Hover / Focus:** Links shift to orange; all keyboard-operable elements receive the shared visible orange focus ring.
- **Mobile:** At 800px, links and CTA collapse; a 44px square native disclosure control opens a 220px minimum-width paper menu with a light border, 8px corners, and a modest shadow.
- **Footer:** Brand and links sit in a two-column row, followed by a full-width divider and copyright; at phone width the content stacks.

### Signature Illustration
The hero illustration turns an abstract service promise into a compact software workspace: dashboard statistics, a small chart, overlapping status note, and hand-placed code mark. Its rotation and organic sage backdrop are specific to the hero composition; keep them out of unrelated content panels.

## Do's and Don'ts

### Do:
- **Do** keep page backgrounds warm and text charcoal for the primary reading surface.
- **Do** use orange for brand emphasis and important actions, with a deeper orange on button hover.
- **Do** use sage and muted earth colors to support the orange without competing with it.
- **Do** keep large layouts open, then stack the hero and card content at the implemented breakpoints.
- **Do** preserve the orange focus outline and remove animation and smooth scrolling when reduced motion is requested.
- **Do** keep the bilingual navigation and typography consistent across Spanish and English pages.

### Don't:
- **Don't** promote supporting sage or illustration hues into competing primary action colors.
- **Don't** add heavy shadows to broad content sections; depth belongs to compact illustrative surfaces and overlays.
- **Don't** generalize the hero's tilted dashboard and organic shape into every card.
- **Don't** make the mobile menu or form fields smaller than their existing accessible target and control treatment.
