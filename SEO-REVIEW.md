# Manual search-engine discoverability review

Checked on 10 November 2026 against the live `https://docs.tinycad.net/` site
and the local Jekyll source. This is an assessment and recommended work; the
SEO metadata and live deployment have not been changed.

## Assessment

The manual is crawlable and discoverable, but its metadata and multilingual
discovery need improvement. English manual pages already appear in public search
results. The main content and navigation are present in server-generated HTML;
they do not require the browser's manual-search JavaScript to exist.

The manual's own language-specific search indexes serve its search box. They do
not submit pages to Google or Bing or establish which pages those engines index.
Actual Google coverage and query performance require the owner's Search Console
data, which was not accessed in this review.

## Live findings

| Check | Observation |
|---|---|
| Main pages | The homepage, English Wires and Printing, and French/Japanese Text & Annotations returned HTTP 200. |
| Crawl blocking | No `noindex` meta directive or `X-Robots-Tag` header was found on these sample pages. |
| English titles | Wires and Printing both use `TinyCAD Manual`, rather than distinct page titles. |
| Translated titles | The French and Japanese examples have localized page titles. |
| Descriptions | All sampled pages use the same English description: `User and developer documentation for TinyCAD`. |
| Sitemap | `/sitemap.xml` returns HTTP 404. The source has no sitemap generator configured. |
| Robots | `/robots.txt` returns HTTP 404. This does not itself block Google crawling; Google treats a missing file as no crawl restrictions. |
| Canonicals | No canonical links were found on the sample pages. `site.url` is not configured in `docs/_config.yml`. |
| Language relationships | No `hreflang` annotations were found. The language selector uses option values and JavaScript navigation, not ordinary links to alternate languages. |
| Language identification | The sampled pages correctly declare English, French or Japanese through the HTML `lang` attribute. |

The robots.txt interpretation follows [Google's robots documentation](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

## Recommended next steps, in order

1. **Generate distinct titles and descriptions.** Derive English titles from the
   first page heading, as the translation preparation already does. Include the
   manual version where it distinguishes v3 and v4, for example `Wires — TinyCAD
   v4 Manual`. Add useful page-specific descriptions in each language instead of
   the shared English description. Implement this in the preparation/template
   pipeline rather than maintaining title text in the deployment workflow.
   Relevant source: `docs/_includes/head.html` and `scripts/prepare-translations.js`.
   [Google's title guidance](https://developers.google.com/search/docs/appearance/title-link)
   recommends descriptive, distinct titles.

2. **Publish an XML sitemap and advertise it.** Configure the production origin
   as `https://docs.tinycad.net` in `docs/_config.yml`, then add `jekyll-sitemap` or
   an equivalent build-generated sitemap. Include the public manual pages and
   genuine translations. Add `docs/robots.txt` with a sitemap reference; do not
   block the CSS or JavaScript needed to render the site. Exclude search payloads
   and build-only files. A missing robots.txt is not the cause of an indexing
   failure here, but a sitemap would improve discovery of the full language set.
   [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).

3. **Add canonical URLs and handle fallback duplicates.** Give real pages
   self-referencing absolute canonical URLs. English fallback content served
   under a translated route should point to its English source as canonical and
   should not be advertised as a translated alternate. Genuine translations
   should keep their own canonical URL, not point to English. This policy can use
   the existing `manual_fallback` and `manual_source_url` metadata.
   [Google's canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

4. **Connect matching translations.** Generate reciprocal `hreflang` links for
   each page's available translations, including itself and English; an English
   counterpart can also be the `x-default`. Only include current, genuine
   translations. Provide ordinary alternate-language links as well as the
   dropdown, so discovery does not depend on its change handler.
   [Google's localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

5. **Verify the deployed result in webmaster tools.** Use the existing verified
   domain property, or verify the documentation site in Google Search Console.
   Submit the sitemap and inspect representative English, French and Japanese
   URLs. Review selected canonicals, indexing reasons and search performance.
   Register or update the site in Bing Webmaster Tools as well if it is not
   already covered. [Google's Search Console introduction](https://developers.google.com/search/docs/monitor-debug/search-console-start).

## Effect of the collapsible contents

The new groups use native `details` and `summary`. Every overview and child page
still has an ordinary `<a href="...">` in the initial HTML, even while the group
is closed. Content is not fetched or inserted on expansion. This keeps navigation
keyboard-accessible and preserves crawlable links; collapsing it does not require
removing pages from the document or hiding them behind JavaScript-only controls.
[Google's crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

## Suggested acceptance checks for the SEO work

- Distinct page titles and useful localized descriptions in built HTML.
- Successful sitemap and robots.txt responses on the production domain.
- Canonicals use the production HTTPS origin and the intended page URL.
- Equivalent translations have reciprocal, valid alternate links.
- English fallback pages are excluded from translated alternates and the
  translated sitemap entries.
- A deployment smoke test fetches these assets and sample pages; Search Console
  then confirms how Google actually processes them.
