# v3 verification report — 20 October 2026

## Tests run

- Re-generated all **23 HTML pages** successfully with `python build_site.py` after theme-template changes.
- `python tests/static_audit.py`: 23 pages, **0 issues** (internal links and assets, headings, metadata, IDs and public-CV safety checks).
- `python tests/browser_smoke.py`: previous site interactions, **0 failures**.
- `python tests/theme_review.py`: light and dark switching on Research and Home pages at 1440, 1024, 768, 390 and 320 px; no document-level horizontal overflow; active-button `aria-pressed` states correct; mobile menu remains functional. Additional project-case gallery, evidence ledger and source-grounded FAQ answer checks passed. **0 failures**.
- `node --check assets/app.js`: passed.
- Screenshot comparison: prior v2 dark Home and Research images were pixel-identical with v3 images **below the header** (1440 × 900 reference viewport), confirming no other changes to their visible dark layout.
- Main, secondary and accent token contrast calculations exceed WCAG 2.2 AA's 4.5:1 threshold in both palettes. Contrast of every possible component/state was not independently audited.

## Limits

- Direct browser navigation to local `file://` pages was blocked in this test environment, so Chromium received local HTML, styles and scripts via `page.set_content`; DOM and visual interaction checks passed.
- `localStorage` was unavailable on the isolated test document. Persistence is implemented in JavaScript and safely guarded, but could not be independently verified across real page reloads here. Browsers that permit local storage should remember the choice.
- No live hosting, real network waterfall, LCP/INP/CLS, screen-reader run, Safari or Firefox verification took place.
- The shared files are a **local export**. The public version requires you to re-upload the new deployment folder to your host.
