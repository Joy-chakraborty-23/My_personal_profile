# Publication / deployment guide

## Option A — simplest: static hosting

This site contains complete HTML/CSS/JavaScript and can be hosted on GitHub Pages, Cloudflare Pages, Netlify or Vercel as static content. No Node.js runtime, database or API key is necessary.

1. Review the public CV, research statements and figures for permission and accuracy.
2. Create a **new public repository** for this portfolio. Upload the contents of this folder (do not expose any private report/source code that is not already in the folder).
3. Enable GitHub Pages from the default branch root, or import the repository to Netlify/Vercel as a static project. Deploy the root folder with no build command; `index.html` is the entry page.
4. For GitHub Pages project URLs, use the full base URL, such as `https://USERNAME.github.io/REPOSITORY`. Relative links work from this subdirectory.
5. Before uploading, build canonical URLs and an XML sitemap using the **actual** published URL:

   ```bash
   # macOS / Linux
   PORTFOLIO_SITE_URL="https://YOUR-PUBLISHED-DOMAIN" python build_site.py
   ```

   ```powershell
   # Windows PowerShell
   $env:PORTFOLIO_SITE_URL="https://YOUR-PUBLISHED-DOMAIN"
   python build_site.py
   ```

   This command generates `sitemap.xml`, updates `robots.txt`, writes absolute Open Graph preview URLs and inserts canonical links. Without a domain, the generator correctly skips canonical URLs and sitemap generation rather than inventing a domain.
6. Test the published URL on a phone, tablet and laptop. Verify all images, outbound GitHub links, CV and certificate downloads, mobile navigation, search, colour theme and FAQ guide.
7. Update the approved site every time research status changes, especially once physical CHIL evidence exists.

## Option B — local preview

Double-click `index.html` or run `python -m http.server 8000` and browse to `http://localhost:8000`.

## Server-side AI chatbot (optional future upgrade)

A true LLM-based RAG system needs a hosted API endpoint, allowlisted and curated documents, secure API credentials, rate limiting, abuse monitoring, source citations and an actual privacy policy. Do not place an AI API key inside a browser JavaScript file. The working offline FAQ guide already provides useful site navigation without hosting costs or visitor-message collection.

## SEO checklist

The pages include titles, descriptions, Open Graph/Twitter preview assets, native headings, descriptive links and structured Person metadata on the homepage. After the published domain is known, regenerate canonical URLs and sitemap with `PORTFOLIO_SITE_URL`. Submit the sitemap in Google Search Console if desired. No SEO ranking can be guaranteed.
