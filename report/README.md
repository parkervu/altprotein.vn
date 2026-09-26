# Alternative protein in Vietnam: a supply-side scoping study

**Publisher:** AltProtein Vietnam · **Version:** 0.6, September 2026 · **Status:** draft for review, not for citation (version 1.0 will be the public launch) · **Languages:** English, with a Vietnamese prologue, a Vietnamese executive summary and a bilingual glossary

This folder is the complete content and data package for the study. It is designed to be turned into an interactive website. It contains **no website code**. This README is the build brief for whoever (or whichever tool, for example Claude Code) builds the site.

---

## 1. What is in the folder

```
altprotein-vn-supply-scoping-2026/
├── README.md                 this build brief
├── STYLE.md                  writing and token conventions (read before editing content)
├── site-manifest.json        page tree, navigation, audience paths, draft notice, versions, data locations
├── content/
│   ├── PAGE-IDS.md           list of page ids and the decisions that apply everywhere
│   ├── 00-front/             cover, two-minute summary, executive summary (EN and VI), at a glance, prologue (EN and VI), how to read, FAQ
│   ├── 01-report/            30 chapters in five parts: I Context (1 to 3), II Supply (4 to 10), III Demand (11 to 18), IV Futures (19 to 24), V What to do (25 to 30)
│   ├── 02-briefs/            six audience briefs
│   └── 03-appendices/        36 appendices by theme: M1 to M5 method and record, S1 to S13 context and supply evidence, D1 to D8 demand evidence, F1 to F6 futures evidence, R1 to R4 registers
├── data/                     184 CSV files, key-numbers.json, data-dictionary.md
├── charts/
│   ├── chart-specs.json      56 chart definitions (data, encoding, notes, alt text)
│   └── data/                 chart-ready CSVs for charts not built from data/
├── sources/                  sources.csv (2,384 sources) and bibliography.md
├── working-papers/           unedited research notes from waves 1 to 10 and the field logs (they use the chapter numbers and appendix letters of the time; see Appendix M5, section M5.3)
├── tools/validate.py         checks citations, evidence and foresight tags, links, embeds, tables and dashes
├── tools/balance_model.py    the protein and feed balance model behind chapter 22 (standard library only)
└── tools/demand_model.py     the demand sizing model behind chapter 18 (standard library only; reads the balance model outputs)
```

81 pages in total: 9 front pages, 30 chapters, 6 briefs, 36 appendices.

## 2. Content model

Every page is Markdown with YAML frontmatter. Required fields: `id`, `title`, `short_title`, `section` (`front` | `report` | `brief` | `appendix`), `order`, `summary`, `audiences`, `reading_time_min`, `key_numbers`, `charts`. Optional: `part` (report chapters), `related_data`, `related_pages`, `lang` (`vi` for the Vietnamese summary; `[en, vi]` for the glossary), `subtitle`, `version`, `status`, `publisher` (cover).

Inline tokens (full rules in `STYLE.md`):

| Token | Example | Regex | Render as |
|---|---|---|---|
| Citation | `[@MAC-04; @FS-01]` | `\[@([A-Z0-9]+-\d+[a-z]?)(;\s*@[A-Z0-9]+-\d+[a-z]?)*\]` | Superscript or bracketed links; hover or tap shows the citation from `data/sources.csv`; click goes to `app-r4-sources#MAC-04` (anchors exist) |
| Evidence tag | `{VN-direct\|High}` or, inside tables, `{VN-direct\\|High}` | `\{(VN-direct\|VN-adjacent\|general)\\?\|(High\|Medium\|Low)\}` | A small two-part badge (label and confidence) with a legend linked to `front-how-to-read` |
| Cross-link | `[[ch07-rules]]`, `[[ch07-rules#feed]]` | `\[\[([a-z0-9-]+)(#[a-z0-9-]+)?\]\]` | Link using the target page's `short_title` |
| Key number | `{{kn:kn-soy-protein-import}}` | `\{\{kn:([a-z0-9-]+)\}\}` | Stat tile from `data/key-numbers.json` (value, label, as_of, context on hover, source link, evidence badge) |
| Chart | `{{chart:chart-price-to-beat}}` | `\{\{chart:([a-z0-9-]+)\}\}` | Chart from `charts/chart-specs.json` |
| Foresight tag | `{fx:projection}` | `\{fx:(trend\|projection\|estimate\|signal\|wildcard\|vision)\}` | A small outlined badge, visually distinct from the evidence badge, with a legend linked to `front-how-to-read` and `app-m2-futures-method`. No pipe, so the same form appears inside tables. `vision` appears only in `ch24-vision-2050`; give it a distinct colour |
| Demand evidence tag | `{dx:revealed}` | `\{dx:(stated\|revealed\|tested\|inferred)\}` | A small badge, distinct from the evidence and foresight badges, with a legend linked to `front-how-to-read` and `app-m3-demand-method`. Stated (surveys), revealed (sales, prices, trade), tested (tastings, auctions, trials), inferred (our inference). No pipe, so the same form appears inside tables. `tools/validate.py` warns if a demand page has none |
| Callout | `> **Correction.** ...` | blockquote whose first word is bold | Styled callout; labels used: Draft for review, Correction, Method note, Read with care, How to use this chapter, Neutrality note, Scenarios, not forecasts, Speculative, Vision, not forecast, For policy makers. Style "Speculative" and "Vision, not forecast" so they cannot be mistaken for findings |

**Important:** replace citation and tag tokens **before** Markdown table parsing (or use a parser that respects `\|`). Inside table rows the tag pipe is escaped as `\|`.

Anchors: headings should get stable slugs. `app-r4-sources` contains an HTML anchor per source (`<a id="MAC-04"></a>`).

## 3. What the site should do

1. **Draft notice.** Until version 1.0, show `draft_notice` from the manifest ("Draft for review, version 0.6. Not for citation.") as a footer on every page, and as a banner on the cover and the summary pages (the pages also carry a "Draft for review" callout). Use `draft_notice.vi` on Vietnamese pages. Do not show a suggested citation.
2. **Navigation** from `site-manifest.json` (`nav`): Home; Summary (two-minute summary, executive summaries, at a glance); Start here (prologues, how to read, FAQ); Report (five parts); For you (briefs); Appendices (five themed groups); Data. Show chapter numbers and appendix codes in the navigation. Do not mark pages as "new": version history lives in Appendix M5.
3. **Audience paths.** `audience_paths` in the manifest gives an ordered reading list per audience, plus `newcomers` and `vietnamese-readers`. Offer an audience switcher on the home page; highlight pages tagged for the chosen audience (`audiences` in frontmatter).
4. **Bilingual.** English is the default. `front-exec-summary-vi` and `front-prologue-vi` are full Vietnamese pages (`lang: vi`); link them prominently from the home page and their English versions. The glossary (`app-r3-glossary`, and `data/glossary.csv`) is bilingual; a searchable glossary widget is welcome. Set `lang` attributes correctly and use a font with full Vietnamese diacritics.
5. **Stat tiles** from `data/key-numbers.json` (143 entries). `label_vi` exists for each tile, so tiles on Vietnamese pages can show Vietnamese labels. Some entries carry `foresight_type` and `horizon`; show the foresight badge on those tiles and label `vision` tiles "Vision, not forecast". Entries with `demand_evidence_type` show the demand evidence badge. `version` records the draft that added a tile; it is not for display.
6. **Charts:** render as **inline SVG** generated at build time. **Do not use Chart.js** or canvas charting libraries. Each spec has `type`, `data`, `encoding`, `annotations`, `notes`, `alt_text`, `source_ids`, evidence and confidence. Show a source line under each chart and include a visually hidden data table for accessibility.
7. **Interactive plays ranking** (`chart-plays-scoring` on `ch26-plays`): preset selector from `data/play_weight_presets.csv` plus sliders for the seven criteria in `data/play_criteria.csv`; weighted score = sum(score x weight) / 100 over `data/plays.csv` rows where `type == play`. Provide the static balanced ranking when JavaScript is off. Clicking a play should show its card (what, why Vietnam, must be true, kill tests, first customers, partners, horizon, capital).
8. **Data browser** for `data/*.csv` with filtering, sorting, CSV download and the column descriptions in `data/data-dictionary.md`. Serve the four registers (open questions, disagreements, glossary, sources) mainly as filterable views rather than long pages. Useful views: companies (97), facilities (82), sources (2,384), open questions (376), disagreements (352), policy options (33), retail audit SKUs (186), the balance and demand model outputs, scenarios and signposts, robust moves, target product profiles, demand moves and the actor check.
9. **Long pages.** Generate a table of contents for any page over about 4,000 words, and keep heading anchors stable.
10. **Search** across pages, glossary and the main data tables.
11. **Corrections.** Style `> **Correction.**` callouts consistently; `app-m5-changelog` lists them all with the version history.
12. **Print and PDF.** A print stylesheet so the summaries, briefs and chapters print cleanly, with the draft notice in the footer.
13. **Scenario explorer (optional).** On `ch23-scenarios-2050`, a two-by-two view built from `data/scenarios_2050.csv` and `data/signposts_2050.csv`: selecting a world shows its picture, signposts and play scores (`data/play_robustness.csv`). Static fallback: the chapter tables.
14. **Accessibility and performance:** WCAG AA contrast, keyboard navigation, alt text from the chart specs, light and dark themes, no external trackers.

## 4. Rules for the builder

- **Do not change the substance of the content.** Numbers, claims, tags and citations are editorial decisions. If something looks wrong, flag it; do not silently fix it.
- Keep the writing rules in `STYLE.md` for any interface text: plain English, British spelling, **no em dashes**.
- Provinces use post-1 July 2025 names ("Tay Ninh (former Long An)"); see `app-s10-admin-map` and `data/provinces.csv`.
- `working-papers/` are published for transparency, not as site pages. Link them from `app-m1-method` as a download.
- Run `python3 tools/validate.py` after any content change (requires PyYAML). It must report 0 errors.

## 5. Checks already run on this package

- Every citation resolves to `data/sources.csv`; every cross-link, key-number and chart reference resolves; every evidence and foresight tag is well formed, and `{fx:vision}` appears only in the vision chapter; table rows have consistent columns; no em or en dashes in content (`tools/validate.py`, 0 errors).
- Headline numbers were checked against the research notes and sources by an independent review pass before each draft: the supply study (v0.1), the futures numbers and model arithmetic (v0.2), the demand numbers and model arithmetic (v0.3), the actor check and the edits it caused (v0.4), the prologue (v0.5), and in v0.6 a reader review of structure, consistency and cross-references.
- `tools/balance_model.py` reproduces `data/balance_outputs.csv` and `data/balance_sensitivity.csv` exactly. Note that running it overwrites those two files.
- `tools/demand_model.py` reproduces `data/demand_outputs.csv` and `data/demand_sensitivity.csv` exactly; it reads `data/balance_outputs.csv`, so rerun it after any change to the balance model.

## 6. Scope and framing (for the About page)

Supply side (raw materials, processes, manufacturing, rules, capital, science), food and feed, today and to 2050. The futures part uses foresight: scenarios with signposts and one clearly labelled normative vision; none of it is a forecast. Cultivated meat is fully scoped. Insect protein appears as an incumbent and benchmark, not as a recommended play. The framing is neutral and led by food and feed security, industrial value and trade; animal welfare and environment are stated as motivations for some actors. The demand part treats demand as a design input: what households, kitchens, food makers and foreign buyers eat, pay and buy, and what that asks of anyone making new protein. It sizes demand routes as labelled scenarios, gives no market-size forecast and is not a marketing plan. The conclusions were checked against what 80 named funders, investors, startups, incumbents, regulators and researchers decide, pay for and ask. The study is not investment, legal or engineering advice.

This is a draft for review, not for citation. Version 1.0 will be the public launch; the citation format will be set then.

Licence: to be set by AltProtein Vietnam before version 1.0.

## 7. Versions and changes

Versions before the public launch are numbered 0.x. The earlier labels "edition 1.0" to "edition 1.4" are versions 0.1 to 0.5. Appendix M5 (`app-m5-changelog`) records what each version added, every correction, and, in section M5.3, where each chapter and appendix moved when v0.6 regrouped the report. In v0.6:

- The report was regrouped into five parts in reading order and renumbered; appendices were re-coded by theme.
- Version markers were removed from the reading text; data files keep a `version` field (`key-numbers.json`, `chart-specs.json`) or column.
- New pages: `front-two-minute` and `front-faq`. The cover, summaries, at a glance and how to read were reorganised to follow the parts; how to read gained a table of codes and scenario names.
- Draft labels were added, and the suggested citation withdrawn until version 1.0.
- Consistency fixes from a reader review are listed in Appendix M5, section M5.2.1.
- `data/play_demand_check.csv` columns were renamed `market_pull_v0_2` and `note_v0_4` (formerly `market_pull_edition_1_1` and `edition_1_3_note`).
