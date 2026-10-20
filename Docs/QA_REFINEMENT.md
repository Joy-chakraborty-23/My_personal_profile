# Refinement verification — 20 October 2026

## Available tests and outcomes

| Test | Method | Observed result |
|---|---|---|
| Generated pages | `python build_site.py` | 23 pages: 10 root pages, 9 projects, 4 research areas |
| Internal links/files, H1s, metadata, duplicate IDs | `python tests/static_audit.py` | 23 pages audited; **0 failures** |
| JavaScript syntax | `node --check assets/app.js` | Passed |
| Public CV sensitive identifiers | Existing static audit using PyMuPDF | No original phone or roll number detected in extracted text |
| Homepage at desktop, tablet and small phone widths | Offline Chromium DOM/layout smoke test | No document-level horizontal overflow at 1440, 768, 390 or 320px |
| Portrait/name and academic CTA | Offline Chromium smoke test | Visible H1/name, research and CV/supervisor controls generated |
| Responsive navigation | Chromium 768 / 390 / 320px | Mobile menu opened and closed with Escape |
| FAQ guide | Chromium DOM/event test | Closed by default, source-based digital twin answer, closes on Escape |
| Searchable project archive | Chromium test | Nine entries remain; keyword search reduces to one result; no-match message appears |
| Research evidence gallery | Chromium test | Five original plot tabs retained; tab click changes visible panel |
| Technical deep dive | Chromium test | Native details/summary disclosure opens |
| Theme toggle | Chromium test | Root theme mode changes |
| Research statement PDF | PyMuPDF extraction and 2-page render | Two pages, selectable text, checked no source phone/roll number; visually inspected |

**Browser limitation:** Browser navigation to local HTTP and file URLs was blocked in the sandbox. The Chromium smoke script uses `page.set_content()` with locally injected stylesheet and script, so it exercises rendering and client-side events but **does not validate live web serving, real URL navigations, network waterfalls or deployed HTTP headers**. It is stronger than a static-only audit but is not a full end-to-end test.

## Accessibility observations

- Preserved: semantic `main`, single H1, skip link, visible focus states, `prefers-reduced-motion`, labels and descriptions for the FAQ, keyboard-accessible native `<details>`, tab ARIA, keyboard-aware mobile menu.
- Added: table captions, row and column headers; clear limitations not conveyed only by color; mobile text-first hero and source link descriptions.
- Not yet performed: NVDA/VoiceOver/TalkBack screen-reader runs, actual 200%/400% text-only zoom testing across platforms, full WCAG 2.2 AA conformance audit, automated axe-core audit, real-device touch tests.

## Performance observations

The site uses local CSS and JavaScript, pre-rendered HTML, optimized WebP portrait/figures and no third-party frontend runtime. It does **not** use analytics or remote web fonts. Without deployed hosting and a network-accessible browser run, **no measured Lighthouse, LCP, CLS or INP values are claimed**. Run Lighthouse against the final public domain after deployment, ideally in mobile throttling mode.

## Outstanding regression / release checks

- Verify all external GitHub, LinkedIn, Coursera and LeetCode links directly on the published domain. These are not covered by the local link auditor.
- Manually test current Safari and Firefox; only local Chromium markup/event checks were run.
- Rebuild with `PORTFOLIO_SITE_URL=https://your-real-domain.example python build_site.py` only after real hosting is assigned.
- Confirm that publication claims and lab affiliations remain accurate on the publication date.
- Request institutional/supervisor clearance for any public research plot or method detail that is not yet approved.
