# Animation plans

| # | Title | Severity | Status |
| --- | --- | --- | --- |
| 001 | Motion tokens, press feedback, hover transitions | HIGH | DONE |
| 002 | Reduced motion: drop movement, keep fades | MEDIUM | DONE |
| 003 | Scroll-triggered reveals + hero entrance | MEDIUM | DONE |
| 004 | Mobile menu entrance + card hovers | LOW | DONE |

Execution order: 001 → 002 → 003 → 004. 001 defines the `--ease-*` / `--duration-*` tokens every other plan uses. 003's reduced-motion rule relies on 002 being in place.
