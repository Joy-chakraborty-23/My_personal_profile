# Before-and-after refinement audit — 20 October 2026

**Task scope:** Incremental improvement of the original 17-page static portfolio, not a replacement. Original source and files are preserved in `docs/original-release.zip` as a recoverable checkpoint. The updated release generates **23 HTML pages**. Source materials: supplied academic CV, October 2026 scientific project report, two course certificates and selected checked public repository READMEs. No peer-reviewed publications are inferred.

| Existing feature | Prior condition | Identified issue | Implemented change | Priority | Verification |
|---|---|---|---|---|---|
| Research homepage | Visually polished, research summary and portrait | Name, experiment boundaries and supervisor pathway could be scanned faster | Visible full name, research-led headline, direct supervisor link and a 60-second evidence/research strip | P1 | Desktop/mobile Chromium DOM and screenshot smoke tests |
| Research claims | 82.8% comparison shown with caveat | Context scattered between research and case-study pages | Added evidence ledger with comparator, evaluated stage, assumptions and missing repetition/variance | P0 | Source reconciliation with October 2026 report; content assertions checked |
| Hardware status | CHIL described as planned | Visitors could mistake tooling preparation for completed physical results | Repeat simulation/PIL versus planned physical CHIL boundaries in the hero, statement, case study and FAQ | P0 | Manual text review and FAQ smoke test |
| Scientific projects | Nine source-backed case studies | Strongest three needed more systematic methods, baselines and repeatability discussion | Retained all nine, upgraded digital twin, SOC neural models and battery ML monitoring with research objective, methods, technical disclosure and evidence table | P1 | Generated output and section-link audit |
| Research narrative | Research page had technical explanation but no dedicated statement | Insufficient concise research vision for PhD review | Added readable research-statement page and two-page PDF, with proposed directions clearly labelled | P1 | PDF text/pages checked and rendered for visual inspection |
| Research discovery | Single research page | Supervisors from different technical areas lack stable deep links | Four subject-area pages, each connecting research question, methods, evidence, limitations and project pages | P1 | Internal link audit and browser DOM checks |
| Supervisor review | CV/contact reachable but no evaluation guide | 3–5-minute review required hopping between sections | Added direct supervisor guide and matching homepage resource directory | P1 | Links and H1/metadata audit |
| Skills | Grouped badges with project examples | Actual implementation depth not clearly graded | Added evidence-linked skill table distinguishing implementation from embedded preparation | P1 | Experience-page source/DOM inspection |
| FAQ assistant | Functional deterministic FAQs, not an LLM | Limited research evidence/PhD-fit answers | Preserved browser-only guide; added evidence, future research and limitations responses with source links; renamed launcher | P2 | Chromium interaction tests |
| Reports and figures | Five actual figures via selectable tabs | Plots lacked experiment-wide evidence metadata; raw numeric series unavailable | Preserved original images and tab controls; added experimental conditions and explicit raw-data caveat | P1 | Tab switching test; figure assets verified |
| Mobile homepage | Portrait appears before research text | Research/CV information delayed on small phones | Text-first hero and a smaller portrait; controls remain visible | P1 | 320px, 390px and 768px viewport checks |
| Publication status | Technical report, no verified journal papers | Potential accidental inflation | Preserved explicit technical-report / not peer-reviewed labelling | P0 | Checked content output |
| Authoritative content | `data/content.json`, original template | Research evidence and area topics not editable without code | Added `data/research_content.json` for area and evidence entries | P2 | Build regeneration & JSON parse check |
| Design system | Off-white/navy/teal; dark mode | No substantial visual redesign justified | Preserved colors, fonts, portrait, component system, figures and light/dark switch | P3 | Screenshot comparison and smoke tests |

## Decisions / exclusions

- **No made-up CHIL results**, SOC estimation error curves, latency figures or formal observer guarantees.
- **No invented publications.** The complete private report and repository are not included as public downloads.
- **No LLM API or unsafe client-side key.** The guide stays deterministic and source-bound.
- **No chart interactivity over invented data.** The source report figures remain actual images with accessible captions; numerical hover/zoom awaits approved CSV/MAT files.
- **No breaking existing paths.** All 17 original HTML URLs still exist; six new top-level or subject-area pages were added.
- **No framework migration.** The existing zero-dependency Python static-site generator remains in place.

## Remaining approvals / open questions

1. Supervisor/institute approval to distribute excerpted graphs, the public research statement and technical results.
2. Numerical raw trace data and complete benchmark metadata for reproducible interactive charts.
3. Confirm latest experimental status and replace the CHIL 'planned' wording only after successful documented tests.
4. Share complete bibliographic metadata if a paper becomes submitted, accepted or published.
5. Review public CV against institutional expectations; prior redact of phone and roll number retained.
6. Confirm real domain before generating canonical URLs or a published sitemap.
7. Human testing with screen readers, browser text scaling and current Safari/Firefox/Edge before release.
