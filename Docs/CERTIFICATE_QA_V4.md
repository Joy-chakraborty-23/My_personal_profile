# Certificates v4 — verification report

Date: 20 October 2026

- All six original PDFs read successfully (one page each). Verified that each contains a hyperlink with its displayed credential ID. This is document inspection, not third-party authenticity verification.
- SHA-256 check confirmed the two re-uploaded Coursera PDFs exactly match those from the original portfolio.
- Six unique IDs, six unique course titles, six distinct PDF hashes.
- `python build_site.py`: regenerated **23 HTML pages**.
- `python tests/static_audit.py`: **0 missing internal assets/links; 0 other structural issues**.
- `python tests/browser_smoke.py`: previous website UI and layout interactions pass.
- `python tests/certificates_smoke.py`: 6 previews loaded, 6 verify links, 12 PDF opening links, no client JS errors or horizontal overflow at 1440px/390px/320px, light and dark themes, FAQ certificates answer.
- Certificate images are screenshots from real original PDFs, not AI-generated.
- Full website URL navigation and real-user performance not tested: sandbox browser blocks HTTP/local page navigation; browser tests inject HTML and original assets.
- No formal external verifier endpoints or external TLS tests were performed.
- Full WCAG 2.2 AA, screen-reader and Safari/Firefox checks remain out of scope.
