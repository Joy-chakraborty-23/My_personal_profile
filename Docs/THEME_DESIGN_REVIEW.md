# Portfolio v3 — theme redesign and simulated academic review

**Review date:** 20 October 2026. **Scope:** incremental upgrade of the existing 23-page portfolio, based on its HTML/CSS/JS and screenshots of the Research and Home pages. The review perspectives below are a reasoned simulation, **not evaluations collected from actual professors**.

## Design changes

| Item | Before | After | Assessment |
|---|---|---|---|
| Theme navigation | A single icon-only switch, which was difficult to discover | Clearly labelled **Light** and **Dark** controls in every page header, including mobile | Worthwhile: immediately understandable to visitors |
| Dark appearance | Deep navy/slate with muted mint-teal accents | **Unchanged design tokens**, unchanged homepage/research content pixels below the header | Worthwhile: preserves the existing visual identity |
| Light canvas | Near-white with pale green tint (`#f9faf8`) | Neutral cool porcelain (`#f5f7f9`) | Worthwhile: calmer and more editorial for scientific reading |
| Light text | Green-slate (`#162f39`) | Deep slate (`#182c36`) | Worthwhile: strong contrast without harsh black |
| Light surfaces | White and soft pale green (`#f0f4f1`) | White and soft blue-grey (`#edf2f5`) | Worthwhile: clearer distinction of cards and scientific tables |
| Light accents | Deep teal (`#0c645e`) | Restrained deep teal (`#0a625c`) | Worthwhile: remains consistent with battery-research positioning |
| Theme selection | Automatic system preference + local saved preference | Same first-visit system preference; visible choices; saved preference where browser permits | Worthwhile: explicit visitor control without a tracking service |
| Navigation under 1050px | Tight seven-link desktop menu | More dependable accessible menu to accommodate labelled switch | Worthwhile: avoids squeezed tablet navigation |

### Verified foreground/background colour contrasts

Calculated using WCAG relative luminance for the actual CSS colour tokens; these are token checks, not a comprehensive component audit.

| Pair | Contrast ratio | Normal-text AA threshold |
|---|---:|---:|
| Light: main text #182c36 / background #f5f7f9 | **13.46:1** | 4.5:1 |
| Light: secondary text #48616d / background #f5f7f9 | **6.10:1** | 4.5:1 |
| Light: teal accent #0a625c / background #f5f7f9 | **6.71:1** | 4.5:1 |
| Light: secondary text / white card | **6.55:1** | 4.5:1 |
| Dark: main text / dark background | **15.08:1** | 4.5:1 |
| Dark: secondary text / dark background | **9.63:1** | 4.5:1 |
| Dark: mint accent / dark background | **10.38:1** | 4.5:1 |

## Simulated evaluation panel

| Reviewer perspective | What reads well | Still needs improvement | Assessment |
|---|---|---|---|
| Battery research professor | Project states a meaningful research question; local safety vs cloud assistance is explained; 82.8% result bounded to PIL configuration | More published reproducible benchmarks, complete baseline metadata and physical CHIL results when finished | Credible as an emerging research candidate, not a finished body of peer-reviewed work |
| Control/estimation professor | Edge estimator, event trigger and safety gate presented as distinct responsibilities | Formal stability/error guarantees remain open; the website correctly does not claim them | Honest presentation of promising engineering research |
| Applied machine-learning professor | Battery ML monitoring and SOC-estimation projects are accessible; evidence and limitations are linked | Independent test splits, generalization across conditions and model-ablation tables would strengthen scientific claims | Clear direction, more validation evidence desirable |
| Academic supervisor scanning in 60 seconds | Name, IIT Guwahati affiliation, research question, CV, supervisor directory and major evidence are discoverable | Homepage still contains detailed content below the fold | Strong initial screening experience |
| Accessibility/UX reviewer | Explicit high-contrast theme choices, labelled controls, usable mobile menu, keyboard support and source-based assistant | Small 9–12px labels on some cards/figures warrant larger text; full screen-reader and zoom review outstanding | Professional and consistent, but **not certified WCAG 2.2 AA** |

## Is the change worth keeping?

**Yes.** The light palette feels more like a technical academic publication, with a readable near-white background, measured colour contrast, and subdued components. The unchanged dark mode retains the original polished research identity. The named switch removes uncertainty about what the theme icon does. No scientific claims, project pages, datasets, figure content, or report status were changed.

## Remaining P1 items not changed in this visual iteration

1. Improve 9–12px metadata text for higher zoom and small screens after a more comprehensive typography review.
2. Run NVDA/VoiceOver and Safari/Firefox validation on the deployed site.
3. Acquire approved repeat-trial raw research datasets for accessible interactive plots; do not synthesize results.
4. Update publications only when verified submission, acceptance or publication metadata exists.
5. Test Core Web Vitals and navigation on the final public domain.

## Important scope note

Your `file:///C:/Users/...` address points to a file on your Windows computer, which is not directly accessible here. This upgrade was made against the existing v2 portfolio source files from our prior work, and tested by rendering those files locally in headless Chromium. The site has **not** been modified on your laptop or deployed to a public server.
