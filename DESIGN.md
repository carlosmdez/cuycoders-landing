---
name: Cuy Coders
description: A warm, clear design system for a bilingual software studio.
colors:
  orange: "#bb4724"
  orange-hover: "#953817"
  paper: "#f8f6f0"
  ink: "#242923"
  muted: "#63675f"
  line: "#dddcd4"
  orange-soft: "#f2ba9c"
  paper-raised: "#fffefa"
  sage-deep: "#293b32"
  sage-ink: "#364d29"
  tint-sage: "#e7ebdd"
  tint-peach: "#eedcc8"
  tint-sky: "#dce5e6"
  tint-lilac: "#e0e1ed"
  tint-sand: "#edece3"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(44px, 4.6vw, 65px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 44px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque Variable, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter Tight Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  tight: "5px"
  field: "6px"
  control: "8px"
  card: "12px"
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
    backgroundColor: "{colors.orange}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "10px 17px"
  input:
    backgroundColor: "#fbfaf5"
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

The palette pairs a warm, slightly yellow paper base with charcoal text, one confident burnt-orange accent, and quiet sage greens; local illustration colors add clay and blue-gray where needed.

### Primary
- **Burnt Orange** (`{colors.orange}`): The brand mark, key headline emphasis, service icons, primary buttons, and selected illustration details.
- **Deep Orange** (`{colors.orange-hover}`): The primary button hover state (`--accent-hover`).
- **Soft Orange** (`{colors.orange-soft}`): Light orange accents on dark or orange surfaces (`--accent-soft`).

### Secondary
- **Deep Studio Sage** (`{colors.sage-deep}`): The technology section's full-width dark surface; warm cream text and muted green-gray paragraphs sit above it.

### Tertiary
- **Sage Ink** (`{colors.sage-ink}`): Dark green text and detail on sage tints.

### Pastel Tint Scale
Five quiet washes, exposed as `--tint-*` tokens, carry surfaces and small chips. Orange or muted text stays at 4.5:1 or better on all of them.
- **Tint Sage** (`{colors.tint-sage}`): Contact section, hero backdrop, case and journal cover backgrounds.
- **Tint Peach** (`{colors.tint-peach}`): Case tiles, journal covers, first service icon and process index chips, hero stat tile, and a 45% mix behind the About section.
- **Tint Sky** (`{colors.tint-sky}`): Case tiles, second hero stat tile, and rotating chips.
- **Tint Lilac** (`{colors.tint-lilac}`): Journal covers and rotating chips.
- **Tint Sand** (`{colors.tint-sand}`): Neutral warm surface for quiet panels.

Service icons (44px, 10px radius) and process step indices (pill) rotate peach, sage, sky, lilac.

### Neutral
- **Warm Paper** (`{colors.paper}`): The page canvas and header/footer environment.
- **Charcoal Ink** (`{colors.ink}`): Headings, key labels, and primary text.
- **Quiet Gray-Green** (`{colors.muted}`): Paragraph text and secondary navigation information.
- **Soft Divider** (`{colors.line}`): Hairline borders between header, rows, and footer areas.
- **Raised Paper** (`{colors.paper-raised}`, `--paper-raised`): Bright elevated surfaces in the dashboard illustration.

**The Single Accent Rule.** Use orange to identify the brand and interactive emphasis; sage and earth tones carry supporting areas and illustration color.

## Typography

**Display Font:** Bricolage Grotesque Variable (with sans-serif fallback)  
**Body Font:** Inter Tight Variable (with sans-serif fallback)  
**Label/Mono Font:** Inter Tight Variable; no separate mono family is used.

**Character:** Bricolage Grotesque is a warm, slightly quirky grotesque with character, giving headings a confident, human voice. Inter Tight is a compact, highly legible UI sans that keeps supporting copy and controls easy to scan without making the layout feel formal or technical.

### Hierarchy
- **Display** (weight 650, `clamp(44px, 4.6vw, 65px)`, line-height 1.08): Hero heading; it tightens to 43px on small screens and reaches 68px at wide desktop sizes.
- **Headline** (weight 650, `clamp(32px, 3.2vw, 44px)`, line-height 1.15): Section headings, usually limited to 560px for a controlled line length.
- **Title** (weight 650, 22px, line-height 1.15): Card and subsection headings; selected component contexts use 19–20px.
- **Body** (weight 400, 16px, line-height 1.65): Default text. Intro copy commonly uses 17px; long-form article text is 17px and constrained to 72ch.
- **Label** (weight 600, 12px): Form labels and compact supporting information; navigation uses 14px and button text 15px.

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

Controls and containers use gently rounded corners: compact details fall around 4–7px, buttons use 8px, and larger cards use 9–12px. Field and card borders are quiet rather than decorative. The hero's sage backdrop is the signature departure from rectangles: a large rotated organic oval sits behind a slightly tilted dashboard, with a counter-rotated note. Other illustrations use simple circles, rounded windows, and soft geometric blocks.

## Components

### Buttons
Confident, compact actions use a warm fill and a small lift on hover.
- **Shape:** Rounded rectangle (8px); 54px minimum height.
- **Primary:** Orange fill and white text, with 15px 25px padding, 15px semibold type, and a 24px icon gap.
- **Hover / Focus:** Hover deepens the orange and lifts by 2px over 200ms. Keyboard focus uses the shared 3px orange outline with 5px offset.
- **Outline:** Header CTA uses a paper surface, muted 1px outline, 7px radius, and 10px 17px padding; hover adds a pale sage-gray fill.
- **Text action:** Inline links use semibold 15px text with a 12px icon gap; hover underlines with a 5px offset.

### Cards / Containers
Cards keep content readable and illustrations soft-edged.
- **Case tiles:** Illustrative panels are 220px high on desktop, 12px rounded, and use distinct sage, clay, or blue-gray backgrounds. Their content remains unboxed beneath.
- **Journal covers:** 207px high on desktop, 12px rounded, with abstract CSS illustrations; card metadata and text sit below the cover.
- **Hero dashboard:** Cream-white surface with 12px corners, clipped contents, and a soft shadow; small stat tiles use peach and sky tints and 7px corners.
- **About note:** Orange panel with 12px corners, 36px 42px desktop padding, white-cream text, and a large experience numeral.

### Inputs / Fields
The contact fields are understated and warm.
- **Style:** Cream-tinted input surface, muted sage-gray 1px border, 6px radius, and 12px 14px padding. Labels sit above with an 8px gap.
- **Focus:** Shared 3px orange focus-visible outline with 5px offset; caret also uses orange.
- **Layout:** Name and email share a row on desktop; service and message span the full form width. All fields stack on narrow screens. Textareas remain vertically resizable with a 125px minimum height.

### Navigation
Navigation stays light and directly attached to the page canvas.
- **Desktop:** 108px header with a thin divider, 14px medium links, bilingual ES/EN switch, and outlined contact action.
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
