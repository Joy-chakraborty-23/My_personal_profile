# Quality assurance and known limits

## Checks completed programmatically

- 17 generated HTML documents exist: eight primary/current pages and nine project detail pages.
- Every internal href/src in each page points to a file that exists in the project bundle.
- Every page has one H1 element, a nonempty `<title>`, a description, main region, skip link and primary nav.
- Interactive project and report-figure hooks are present.
- The JavaScript file passes Node.js `--check` syntax validation.
- The privacy-reviewed public CV excludes the student roll number and phone number in extracted PDF text.
- Reports and private GitHub repositories are not distributed in the bundle.

## Browser testing still required

Automated Chromium navigation was blocked by the execution environment's administrator policy (`ERR_BLOCKED_BY_ADMINISTRATOR`), even for a locally served copy. This is an **environment restriction**, not a proof of a website error. The following checks **have not** been claimed as completed:

1. Desktop (1440px), tablet (768px) and phone (375px) visual layout verification, especially at 200% browser zoom.
2. Keyboard-only navigation including Tab, Shift+Tab, Enter, Space, Escape, project filters, research tabs and FAQ launcher.
3. Automated accessibility scanning using axe DevTools, and manual screen-reader testing with NVDA/VoiceOver.
4. Contrast measurement in both dark and light themes (aim for WCAG 2.2 AA).
5. Chrome, Firefox, Safari and iOS/Android browser testing.
6. Real hosted CV download and mail client hand-off.
7. Lighthouse / Core Web Vitals and deployment-specific SEO checks.

## Explicitly limited features

- Figures come from actual project-report images, but their **data are not available** for accurate hover tooltips and zooming at the numeric data level. Figure tabs and image opening work by standard DOM/tab constructs.
- The portfolio assistant is a deterministic offline FAQ guide, not a generative AI chatbot.
- The contact button opens a preaddressed email composer; no backend contact form has been configured.
