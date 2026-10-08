# Cuy Coders implementation plan

Goal: replace the Astro template with a complete static bilingual software studio website.
Architecture: shared Astro section components consume a typed translation module; Astro content collections generate the bilingual blog. No server or form submission endpoint.
Stack: Astro, Tailwind CSS v4, Lucide, self-hosted fonts.

- [x] Content agent: localized copy in src/i18n/content.ts, honest claims and illustrative use cases.
- [x] Blog agent: content collection and three substantive articles in each language.
- [x] Orchestrator: configure static i18n, shared metadata layout, responsive navigation, landing sections, blog routes and demo form.
- [x] Verify: build and type-check; check all generated internal links and metadata; desktop/mobile browser inspection and keyboard/form/language flows.
- [x] Independent GPT-6 Luna review and persist design tokens and setup notes.

Visual contract: warm ivory, burnt orange and ink; oversized editorial heading beside a clearly illustrative product workspace. Alternating spacious editorial sections and dense product details. Restrained mascot geometry belongs to the brand mark; future mascot images can replace it. No invented testimonials or client results. Mobile content remains complete and language switch preserves equivalent blog articles.
