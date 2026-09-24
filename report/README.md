# Alternative protein in Vietnam: a supply-side scoping study

**Publisher:** AltProtein Vietnam · **Edition:** 1.1, September 2026 (edition 1.0 plus Part V: Futures 2030 to 2050) · **Languages:** English, with a Vietnamese executive summary and a bilingual glossary

This folder is the complete content and data package for the study. It is designed to be turned into an interactive website. It contains **no website code**. This README is the build brief for whoever (or whichever tool, for example Claude Code) builds the site.

---

## 1. What is in the folder

```
altprotein-vn-supply-scoping-2026/
├── README.md                 this build brief
├── STYLE.md                  writing and token conventions (read before editing content)
├── site-manifest.json        page tree, navigation, audience paths, data locations
├── content/
│   ├── PAGE-IDS.md           list of page ids and the corrections that apply everywhere
│   ├── 00-front/             cover, how to read, executive summary (EN and VI), at a glance
│   ├── 01-report/            20 chapters in five parts (the macro findings); Part V (ch15 to ch20) is new in 1.1
│   ├── 02-briefs/            six audience briefs
│   └── 03-appendices/        appendices A to Z (the micro findings); U to Z are new in 1.1
├── data/                     92 CSV files, key-numbers.json, data-dictionary.md
├── charts/
│   ├── chart-specs.json      35 chart definitions (data, encoding, notes, alt text)
│   └── data/                 chart-ready CSVs for charts not built from data/
├── sources/                  sources.csv (1,275 sources) and bibliography.md
├── working-papers/           unedited research notes from waves 1 to 5 and the field logs
├── tools/validate.py         checks citations, evidence and foresight tags, links, embeds, tables and dashes
└── tools/balance_model.py    the protein and feed balance model behind chapter 17 (standard library only)
```

57 pages in total: 5 front pages, 20 chapters, 6 briefs, 26 appendices.

## 2. Content model

Every page is Markdown with YAML frontmatter. Required fields: `id`, `title`, `short_title`, `section` (`front` | `report` | `brief` | `appendix`), `order`, `summary`, `audiences`, `reading_time_min`, `key_numbers`, `charts`. Optional: `part` (report chapters), `related_data`, `related_pages`, `lang` (`vi` for the Vietnamese summary; `[en, vi]` for the glossary), `subtitle`, `edition`, `publisher` (cover).

Inline tokens (full rules in `STYLE.md`):

| Token | Example | Regex | Render as |
|---|---|---|---|
| Citation | `[@MAC-04; @FS-01]` | `\[@([A-Z0-9]+-\d+[a-z]?)(;\s*@[A-Z0-9]+-\d+[a-z]?)*\]` | Superscript or bracketed links; hover or tap shows the citation from `data/sources.csv`; click goes to `app-t-sources#MAC-04` (anchors exist) |
| Evidence tag | `{VN-direct\|High}` or, inside tables, `{VN-direct\\|High}` | `\{(VN-direct\|VN-adjacent\|general)\\?\|(High\|Medium\|Low)\}` | A small two-part badge (label and confidence) with a legend linked to `front-how-to-read` |
| Cross-link | `[[ch05-rules]]`, `[[ch05-rules#feed]]` | `\[\[([a-z0-9-]+)(#[a-z0-9-]+)?\]\]` | Link using the target page's `short_title` |
| Key number | `{{kn:kn-soy-protein-import}}` | `\{\{kn:([a-z0-9-]+)\}\}` | Stat tile from `data/key-numbers.json` (value, label, as_of, context on hover, source link, evidence badge) |
| Chart | `{{chart:chart-price-to-beat}}` | `\{\{chart:([a-z0-9-]+)\}\}` | Chart from `charts/chart-specs.json` |
| Foresight tag (Part V) | `{fx:projection}` | `\{fx:(trend\|projection\|estimate\|signal\|wildcard\|vision)\}` | A small outlined badge, visually distinct from the evidence badge, with a legend linked to `front-how-to-read` and `app-u-futures-method`. No pipe, so the same form appears inside tables. `vision` appears only in `ch19-vision-2050`; give it a distinct colour |
| Callout | `> **Correction.** ...` | blockquote whose first word is bold | Styled callout; labels used: Correction, Method note, Read with care, How to use this chapter, Neutrality note, Scenarios, not forecasts, Speculative, Vision, not forecast, For policy makers. Style "Speculative" and "Vision, not forecast" so they cannot be mistaken for findings |

**Important:** replace citation and tag tokens **before** Markdown table parsing (or use a parser that respects `\|`). Inside table rows the tag pipe is escaped as `\|`.

Anchors: headings should get stable slugs. `app-t-sources` contains an HTML anchor per source (`<a id="MAC-04"></a>`).

## 3. What the site should do

1. **Navigation** from `site-manifest.json` (`nav`): Home, Summary, Report (by part, including Part V), For you (briefs), Appendices (A to T, then the futures appendices U to Z), Data. Mark Part V and Appendices U to Z as "new in edition 1.1".
2. **Audience paths.** `audience_paths` in the manifest gives an ordered reading list per audience. Offer an audience switcher on the home page; highlight pages tagged for the chosen audience (`audiences` in frontmatter).
3. **Bilingual.** English is the default. `front-exec-summary-vi` is a full Vietnamese page (`lang: vi`); link it prominently from the home page and the English summary. The glossary (`app-s-glossary`, and `data/glossary.csv`) is bilingual; a searchable glossary widget is welcome. Set `lang` attributes correctly and use a font with full Vietnamese diacritics.
4. **Stat tiles** from `data/key-numbers.json` (86 entries). `label_vi` exists for each tile, so tiles on the Vietnamese page can show Vietnamese labels. Entries added in edition 1.1 also carry `foresight_type` and `horizon`; show the foresight badge on those tiles, and label `vision` tiles "Vision, not forecast".
5. **Charts:** render as **inline SVG** generated at build time. **Do not use Chart.js** or canvas charting libraries. Each spec has `type`, `data`, `encoding`, `annotations`, `notes`, `alt_text`, `source_ids`, evidence and confidence. Show a source line under each chart and include a visually hidden data table for accessibility.
6. **Interactive plays ranking** (`chart-plays-scoring` on `ch11-plays`): preset selector from `data/play_weight_presets.csv` plus sliders for the seven criteria in `data/play_criteria.csv`; weighted score = sum(score x weight) / 100 over `data/plays.csv` rows where `type == play`. Provide the static balanced ranking when JavaScript is off. Clicking a play should show its card (what, why Vietnam, must be true, kill tests, first customers, partners, horizon, capital).
7. **Data browser** for `data/*.csv` with filtering, sorting, CSV download and the column descriptions in `data/data-dictionary.md`. Useful views: companies (97), facilities (82), sources (1,275), open questions (155), disagreements (170), policy options (33), routes to market, retail audit SKUs (186); and for Part V: balance model outputs, scenarios and signposts, play robustness, robust moves, vision milestones and frontier windows.
8. **Search** across pages, glossary and the main data tables.
9. **Corrections.** Style `> **Correction.**` callouts consistently; `app-b-corrections` lists them all.
10. **Print and PDF.** A print stylesheet so the executive summaries, briefs and chapters print cleanly.
11. **Scenario explorer (optional, Part V).** On `ch18-scenarios-2050`, a two-by-two view built from `data/scenarios_2050.csv` and `data/signposts_2050.csv`: selecting a world shows its picture, signposts and play scores (`data/play_robustness.csv`). Static fallback: the chapter tables.
12. **Accessibility and performance:** WCAG AA contrast, keyboard navigation, alt text from the chart specs, light and dark themes, no external trackers.

## 4. Rules for the builder

- **Do not change the substance of the content.** Numbers, claims, tags and citations are editorial decisions. If something looks wrong, flag it; do not silently fix it.
- Keep the writing rules in `STYLE.md` for any interface text: plain English, British spelling, **no em dashes**.
- Provinces use post-1 July 2025 names ("Tay Ninh (former Long An)"); see `app-p-admin-map` and `data/provinces.csv`.
- `working-papers/` are published for transparency, not as site pages. Link them from `app-a-method` as a download.
- Run `python3 tools/validate.py` after any content change (requires PyYAML). It must report 0 errors.

## 5. Checks already run on this package

- Every citation resolves to `data/sources.csv`; every cross-link, key-number and chart reference resolves; every evidence and foresight tag is well formed, and `{fx:vision}` appears only in the vision chapter; table rows have consistent columns; no em or en dashes in content (`tools/validate.py`, 0 errors).
- Headline numbers were checked against the research notes and sources by an independent review pass before packaging (edition 1.0), and the Part V numbers and model arithmetic by a second independent pass (edition 1.1).
- `tools/balance_model.py` reproduces `data/balance_outputs.csv` and `data/balance_sensitivity.csv` exactly. Note that running it overwrites those two files.

## 6. Scope and framing (for the About page)

Supply side (raw materials, processes, manufacturing, rules, capital, science), food and feed, today and, in Part V, to 2050. Part V uses foresight: scenarios with signposts and one clearly labelled normative vision; none of it is a forecast, and demand enters only as a macro input. Cultivated meat is fully scoped. Insect protein appears as an incumbent and benchmark, not as a recommended play. The framing is neutral and led by food and feed security, industrial value and trade; animal welfare and environment are stated as motivations for some actors. The study is not investment, legal or engineering advice.

Suggested citation: AltProtein Vietnam (2026). *Alternative protein in Vietnam: a supply-side scoping study.* Edition 1.1 (first public edition with Part V: Futures 2030 to 2050), September 2026.

## 7. What changed in edition 1.1

- New Part V (chapters 15 to 20) and Appendices U to Z; futures sections added to the executive summaries (English and Vietnamese), at a glance, the cover, how to read, the six briefs and Appendix A.
- Corrections to edition 1.0 are listed in Appendix B, section B.5.
- New data files: see the section "Files added in the futures round (edition 1.1)" in `data/data-dictionary.md`.
- New token: the foresight tag; new callouts: "Speculative" and "Vision, not forecast".
- Smaller edition 1.1 edits: chapters 6, 13 and 14 and Appendices E, G, H, J and K (corrections and cross-links); Appendices Q, R, S and T regenerated with the new rows; `companies.csv`, `instruments.csv`, `open_questions.csv`, `disagreements.csv`, `glossary.csv` and `sources.csv` extended (existing rows unchanged except INS-043 and OQ-127, whose status changed, and the Vietnamese wording of glossary row GL-133). All other edition 1.0 files are unchanged.

Licence: to be set by AltProtein Vietnam before publication.
