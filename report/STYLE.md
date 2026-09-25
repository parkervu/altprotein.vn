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
part: "I. Context"              # report only
order: 1                         # order within section
summary: "One or two plain sentences, used for cards and meta descriptions."
audiences: [investors, policy, startups, manufacturers, research, international]
reading_time_min: 12
key_numbers: [kn-soy-import-share, kn-feed-import-bill]   # ids in data/key-numbers.json
related_data: [macro_indicators.csv, feed_imports.csv]      # files in data/
related_pages: [app-s6-feed-market, brief-investors]
charts: [chart-feed-imports]                                 # ids in charts/chart-specs.json
---
```

## 2. Inline tokens (machine-readable)

- **Citations:** `[@MAC-04]` or `[@MAC-04; @FS-01]`. Every ID resolves to a row in `data/sources.csv`. Regex: `\[@([A-Z0-9]+-\d+[a-z]?)(;\s*@[A-Z0-9]+-\d+[a-z]?)*\]`.
- **Evidence label and confidence:** `{VN-direct|High}` at the end of a claim. Labels: `VN-direct` (evidence about Vietnam), `VN-adjacent` (a comparable Southeast Asian country or the same species, with the transfer assumption stated), `general` (global evidence, no claim it applies to Vietnam). Confidence: `High` (primary source read), `Medium` (reputable secondary, or primary read in part), `Low` (single claim, press, company marketing, or derived by us from weak inputs). Inside Markdown table rows the pipe is escaped: `{VN-direct\|High}`. Regex (accepts both forms): `\{(VN-direct|VN-adjacent|general)\\?\|(High|Medium|Low)\}`. The site generator should replace these tokens before (or instead of) Markdown table parsing, or render the escaped form correctly.
- **Derived numbers:** when a number is our own calculation, say "(our calculation)" or "derived" in the sentence and show the inputs in the appendix.
- **Cross-references:** `[[app-s4-feedstocks]]` or `[[ch07-rules#feed]]` link to page ids and optional anchors.
- **Key number embeds:** `{{kn:kn-soy-import-share}}` renders the stat tile from `data/key-numbers.json`.
- **Chart embeds:** `{{chart:chart-feed-imports}}` renders a chart defined in `charts/chart-specs.json`.
- **Callouts:** blockquotes starting with a bold label: `> **Correction.**`, `> **Open question.**`, `> **For investors.**`, `> **Method note.**`, `> **Draft for review.**` (cover, summaries and how to read, until version 1.0), and in the futures chapters `> **Speculative.**` and `> **Vision, not forecast.**`.
- **Foresight type (mainly Part IV and chapter 18):** forward-looking claims carry a second tag after the evidence tag: `{fx:trend}` (observed change expected to continue), `{fx:projection}` (a published model result or an official target; the text names which), `{fx:estimate}` (our own calculation from stated assumptions), `{fx:signal}` (an emerging development that may or may not scale), `{fx:wildcard}` (low-probability, high-impact event), `{fx:vision}` (normative; only in the vision chapter). The horizon year is always stated in the sentence. Regex: `\{fx:(trend|projection|estimate|signal|wildcard|vision)\}`. Render as a small outlined badge distinct from the evidence badge, with a legend link to `app-m2-futures-method`. No pipe, so the same form works inside tables.
- **Demand evidence type (mainly Part III):** demand claims carry a further tag after the evidence tag (and after any foresight tag): `{dx:stated}` (what people say: surveys, focus groups, stated intentions or willingness to pay), `{dx:revealed}` (what people or firms do: sales, purchases, prices, trade, menus, shelves, consumption statistics), `{dx:tested}` (tastings, real-money auctions, choice experiments, field trials), `{dx:inferred}` (our inference or calculation). Regex: `\{dx:(stated|revealed|tested|inferred)\}`. When stated and revealed evidence disagree, follow the revealed evidence and say so.

## 3. Writing

- Plain English, short sentences, defined terms. Written so it survives machine translation into Vietnamese.
- No em dashes. Use commas, colons, or separate sentences.
- British spelling (programme, organisation, fibre).
- Numbers: units always; say the year the number refers to; ranges with "to" (4 to 8 Mt). Mt = million tonnes, kt = thousand tonnes, t = tonne. Currency: USD unless stated; VND with thousands separators (26,000 VND per USD used throughout unless stated).
- Never average disagreeing numbers. Give both and the position taken, and log it in Appendix R2.
- Say when something is absent from the evidence ("we found no ...") rather than asserting it does not exist.
- Prefer "we" for the research team.

## 4. Names

- Provinces: current (post-1 July 2025) name first, former unit in brackets on first use in a page: "Tay Ninh (former Long An)". See Appendix S10 and `data/provinces.csv`.
- Ministries: current names (MAE, MOST, MOF, MOIT, MOH). Former names only for historical documents: "MARD (now MAE)".
- Place and company names in unaccented form in English text (Tay Ninh, Vinasoy, An Nhien). Vietnamese terms in italics with diacritics on first use, with an English gloss: *đồ chay* (traditional vegetarian food).

## 5. Audiences (tags)

`investors` (VCs, impact investors, DFIs), `policy` (policy makers in Vietnam and abroad), `startups` (founders), `manufacturers` (F&B and feed manufacturers), `research` (universities, institutes), `international` (NGOs, development agencies, foreign governments).

## 6. Scope reminder

Supply side: raw materials, processes, manufacturing, rules, capital, science (Parts I, II and IV). Food and feed. Insect protein appears as an incumbent and benchmark, not as a recommended play. Part III covers the demand side as a design input: households, foodservice and institutions, business buyers and export demand. Consumer marketing plans and market-size forecasts remain out of scope; demand is sized only as labelled scenarios, and published market sizes without a traceable method are not used.

## 7. Versions and structure

- This is a draft. Versions before the public launch are numbered 0.x; version 1.0 will be the public launch. Do not put version markers such as "new in version 0.3" in reading text; record changes in Appendix M5 (changelog) and, for data, in a `version` field or column.
- The report has five parts: I Context (chapters 1 to 3), II Supply (4 to 10), III Demand (11 to 18), IV Futures (19 to 24) and V What to do (25 to 30). Appendix codes carry their theme: M (method and record), S (context and supply evidence), D (demand evidence), F (futures evidence) and R (registers). Refer to sections as "section 11.2" or "D7.3".
- Every page that a reader may land on directly should decode its codes (T1, PO-001, S-ALT and so on) at first use or link to the codes table in `front-how-to-read`.
