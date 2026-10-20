# Course certificate update — v4 (20 October 2026)

## Result

**Six unique credentials** are displayed in the Experience → Certificates & Achievements section. Four new PDFs were added and the two previously included Coursera course certificates were retained without duplication.

| Course | Provider / credit | Date | Credential ID | Added this update |
|---|---|---|---|---|
| MLOps Tools: MLflow and Hugging Face | Duke University-authorized course · Coursera | 29 August 2026 | `62W4A3Z8RY4Y` | No—already present |
| MLOps Platforms: Amazon SageMaker and Azure ML | Duke University-authorized course · Coursera | 30 August 2026 | `EW4ZNGOQZGID` | No—already present |
| Python Essentials for MLOps | Duke University-authorized course · Coursera | 29 August 2026 | `J0HRURYM0XNS` | Yes |
| DevOps, DataOps, MLOps | Duke University-authorized course · Coursera | 29 August 2026 | `LJV42XIGEODT` | Yes |
| Carbon Accounting: GHG Emissions Calculation – Scope 1 & 2 | Udemy course · Instructor: Yogesh Sharma | 28 August 2026 | `UC-15fb7c5c-bddd-4b91-902c-c3cae933fc45` | Yes |
| Scope 3 Carbon/GHG Emissions Calculations: Categories 1–15 | Udemy course · Instructor: Ishan Mehrotra | 28 August 2026 | `UC-8bb01df9-cc6d-4ecb-a180-e240f98cd717` | Yes |

## Duplicate checks

- Uploaded `MLFlow and Hugging Face Certificate(1).pdf` matches the previous document **byte-for-byte** (SHA-256).
- Uploaded `MLOps Platforms Amazon SageMaker and Azure(1).pdf` matches the previous document **byte-for-byte** (SHA-256).
- The website holds only one entry and one PDF per unique course.
- Each verification ID and the six certificate file hashes are unique.
- All six certificate PDFs contain hyperlinks matching their printed credential IDs. We have verified that links exist in the supplied PDFs; we have **not** independently contacted the issuers to confirm enrollment.

## Course classification and academic representation

- Four courses: MLOps & Machine Learning Engineering (Coursera, courses authorized by Duke University).
- Two courses: Carbon Accounting & Sustainability (Udemy instructor courses, including scopes 1–2 and Scope 3 categories 1–15).
- All are labelled **course completions**, not degree credentials, research publications or professional licenses.

## Where it appears

- `experience.html#certificates`: full gallery, certificate PDF previews, PDF links, verification links.
- `about.html`: shortcut to certificates, preserving the prior biographical content.
- All site footers: a quick link to the gallery.

## Editing workflow

1. Put the new certificate PDF in `assets/` and make a small preview WebP image.
2. Add **one** item to `data/content.json` under `certificates`. Include `title`, `category`, `issuer`, `date`, `href`, `thumbnail`, `verify`, and a unique `id`.
3. From the source folder, run `python build_site.py`. Duplicate IDs cause the build to stop with an error.
4. Run `python tests/static_audit.py` and optionally `python tests/browser_smoke.py` before redeploying.

## Publication consideration

The PDFs display Jyotirmoy's name and certificate identifiers. Those identifiers are typically public verification keys. The original certificate PDFs are included because the owner requested publication on a personal portfolio.
