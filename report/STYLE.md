# Style and content conventions

Every content file in this folder follows these rules, so the website can be generated consistently.

## 1. File format and frontmatter

Content is Markdown (`.md`) with YAML frontmatter:

```yaml
---
id: ch01-why-vietnam            # unique, kebab-case; used for routing and cross-links
title: "Why Vietnam: a protein-processing economy built on imported plant protein"
short_title: "Why Vietnam"      # for navigation
section: report                  # front | report | brief | appendix
part: "I. The case"              # report only
order: 1                         # order within section
summary: "One or two plain sentences, used for cards and meta descriptions."
audiences: [investors, policy, startups, manufacturers, research, international]
reading_time_min: 12
key_numbers: [kn-soy-import-share, kn-feed-import-bill]   # ids in data/key-numbers.json
related_data: [macro_indicators.csv, feed_imports.csv]      # files in data/
related_pages: [app-h-feed-market, brief-investors]
charts: [chart-feed-imports]                                 # ids in charts/chart-specs.json
---
```

## 2. Inline tokens (machine-readable)

- **Citations:** `[@MAC-04]` or `[@MAC-04; @FS-01]`. Every ID resolves to a row in `data/sources.csv`. Regex: `\[@([A-Z0-9]+-\d+[a-z]?)(;\s*@[A-Z0-9]+-\d+[a-z]?)*\]`.
- **Evidence label and confidence:** `{VN-direct|High}` at the end of a claim. Labels: `VN-direct` (evidence about Vietnam), `VN-adjacent` (a comparable Southeast Asian country or the same species, with the transfer assumption stated), `general` (global evidence, no claim it applies to Vietnam). Confidence: `High` (primary source read), `Medium` (reputable secondary, or primary read in part), `Low` (single claim, press, company marketing, or derived by us from weak inputs). Inside Markdown table rows the pipe is escaped: `{VN-direct\|High}`. Regex (accepts both forms): `\{(VN-direct|VN-adjacent|general)\\?\|(High|Medium|Low)\}`. The site generator should replace these tokens before (or instead of) Markdown table parsing, or render the escaped form correctly.
- **Derived numbers:** when a number is our own calculation, say "(our calculation)" or "derived" in the sentence and show the inputs in the appendix.
- **Cross-references:** `[[app-c-feedstocks]]` or `[[ch05-rules#feed]]` link to page ids and optional anchors.
- **Key number embeds:** `{{kn:kn-soy-import-share}}` renders the stat tile from `data/key-numbers.json`.
- **Chart embeds:** `{{chart:chart-feed-imports}}` renders a chart defined in `charts/chart-specs.json`.
- **Callouts:** blockquotes starting with a bold label: `> **Correction.**`, `> **Open question.**`, `> **For investors.**`, `> **Method note.**`, and in Part V `> **Speculative.**` and `> **Vision, not forecast.**`.
- **Foresight type (Part V, edition 1.1):** forward-looking claims carry a second tag after the evidence tag: `{fx:trend}` (observed change expected to continue), `{fx:projection}` (a published model result or an official target; the text names which), `{fx:estimate}` (our own calculation from stated assumptions), `{fx:signal}` (an emerging development that may or may not scale), `{fx:wildcard}` (low-probability, high-impact event), `{fx:vision}` (normative; only in the vision chapter). The horizon year is always stated in the sentence. Regex: `\{fx:(trend|projection|estimate|signal|wildcard|vision)\}`. Render as a small outlined badge distinct from the evidence badge, with a legend link to `app-u-futures-method`. No pipe, so the same form works inside tables.

## 3. Writing

- Plain English, short sentences, defined terms. Written so it survives machine translation into Vietnamese.
- No em dashes. Use commas, colons, or separate sentences.
- British spelling (programme, organisation, fibre).
- Numbers: units always; say the year the number refers to; ranges with "to" (4 to 8 Mt). Mt = million tonnes, kt = thousand tonnes, t = tonne. Currency: USD unless stated; VND with thousands separators (26,000 VND per USD used throughout unless stated).
- Never average disagreeing numbers. Give both and the position taken, and log it in Appendix R.
- Say when something is absent from the evidence ("we found no ...") rather than asserting it does not exist.
- Prefer "we" for the research team.

## 4. Names

- Provinces: current (post-1 July 2025) name first, former unit in brackets on first use in a page: "Tay Ninh (former Long An)". See Appendix P and `data/provinces.csv`.
- Ministries: current names (MAE, MOST, MOF, MOIT, MOH). Former names only for historical documents: "MARD (now MAE)".
- Place and company names in unaccented form in English text (Tay Ninh, Vinasoy, An Nhien). Vietnamese terms in italics with diacritics on first use, with an English gloss: *đồ chay* (traditional vegetarian food).

## 5. Audiences (tags)

`investors` (VCs, impact investors, DFIs), `policy` (policy makers in Vietnam and abroad), `startups` (founders), `manufacturers` (F&B and feed manufacturers), `research` (universities, institutes), `international` (NGOs, development agencies, foreign governments).

## 6. Scope reminder

Supply side: raw materials, processes, manufacturing, rules, capital, science. Food and feed. Insect protein appears as an incumbent and benchmark, not as a recommended play. Consumer marketing and market-size forecasting are out of scope, except B2B demand (feed mills and food manufacturers as buyers) where it decides supply-side viability.
