# Wave 7, step 2: expansion lines

## Context

AltProtein Vietnam's package "Alternative protein in Vietnam: a supply-side scoping study", edition 1.2 (September 2026), is at altprotein-vn-supply-scoping-2026/. Part VI (the demand side) is chapters 21 to 29 in `content/01-report/` and Appendices AA to AI in `content/03-appendices/`; key data files are in `data/` (target_product_profiles.csv, play_demand_check.csv, demand_moves.csv, demand_assumptions.csv, demand_outputs.csv, meal_programmes.csv, channel_ranking.csv, buyer_map.csv, launches_exits.csv, open_questions.csv OQ-156 to OQ-269). The demand model is `tools/demand_model.py`.

Part VI's core conclusion: demand in Vietnam pulls new protein as an ingredient inside familiar foods, sold to incumbents (chay makers, meat processors, plant-milk makers, caterers), not as consumer-branded meat analogues. Benchmark path: about 19,000 t of protein a year delivered by 2035, mostly import substitution, displacing about 0.2% of meat protein.

We just checked Part VI against what 80 real actors care about (funders, investors and startups, incumbents, policy and international bodies). The working papers are in working-papers/wave7/actors/<group>/ (actors.md, questions.csv, candidate_lines.csv, new_facts.csv, sources.csv). **Read the parts relevant to your line first, and reuse their sources (cite them by their existing IDs, e.g. AIB-39, APR-04, AFN-05, AIS-25) rather than duplicating them.**

Your job is one expansion line (given in your prompt). The test for every line is: **does it change a conclusion or recommendation in Part VI, add a new candidate or route, add a constraint a plan would otherwise hit late, or close a question with a clean negative?** If the answer is none of these, say so plainly: that is useful information about where to stop.

## Tool constraints (important)

- **The session's WebSearch budget is exhausted. Do not call WebSearch.** Do not use general web search engines through WebFetch either (no Google, Bing, DuckDuckGo, Yandex and similar).
- You may use: WebFetch on known URLs and on pages you reach by following links; navigation within primary-source sites, including their own internal search or listing pages (government portals and legal databases such as thuvienphapluat.vn, luatvietnam.vn, vanban.chinhphu.vn, chinhphu.vn, moh.gov.vn, viendinhduong.vn, customs.gov.vn; company, retailer, school and procurement sites); public data APIs (UN Comtrade public API, FAOSTAT) through WebFetch or curl in Bash; Scite and OpenAlex (load with ToolSearch, e.g. "select:mcp__Scite__search_literature,mcp__OpenAlex__search_works"); and the package's own files.
- If a page is blocked or a fetch fails, do not try to get round it with curl or mirrors of blocked content. Record the gap.

## Evidence rules (strict, same as the package)

- **Never fabricate.** Every number needs a source you actually retrieved. Snippet-only or metadata-only evidence is Low and says so. A clean negative ("we found no ...") is a finding.
- Tag substantive claims `[VN-direct|VN-adjacent|general, High|Medium|Low, SRC-ID, stated|revealed|tested|inferred]` (the last element for demand claims). Government rules and specifications are revealed evidence of what an institutional buyer requires.
- Numbers with units and the year they refer to; ranges with "to". USD unless stated; 26,000 VND per USD if you convert (say so). Show the inputs to every calculation and mark it "(our calculation)". Never average disagreeing numbers: give both and log a disagreement.
- Plain English, British spelling, short sentences, **no em dashes or en dashes anywhere** (use commas, colons or separate sentences). Place and company names unaccented in English text; Vietnamese terms in italics with diacritics and an English gloss on first use. Provinces use post-1 July 2025 names.
- Insect protein is never recommended (benchmark only). Published market sizes with no traceable method are not used as findings.
- Today is 25 September 2026.

## Output (write into working-papers/wave7/lines/<line-folder>/)

1. `<line>.md`, the working paper:
   - Title, then "Line: <ID and name> (wave 7). Source prefix: <PFX>. Date: 25 September 2026."
   - **Verdict** (3 to 5 sentences): what the line found and its yield class: *changed a conclusion*, *added a candidate or route*, *added a constraint*, *clean negative*, or *noise* (more citations, no change). Be honest.
   - **Headline findings** (6 to 12, tagged).
   - Detailed sections with tables where useful.
   - **What this changes in the package**: a table with columns `where (page and section or data file) | current text or value | proposed change | evidence | strength`. Only changes the evidence supports.
   - **Next-wave candidates**: questions this line raises. For each, say whether it is a *different kind* of question or a *deeper* version of this one, whether desk research could close it with the tools available, and what result would change which conclusion. Be explicit if you think further desk work here would be noise.
   - **Limits**.
2. `sources.csv`: `source_id,citation,title,author_or_publisher,date,url,doi,source_type,accessed,notes` with IDs `<PFX>-01`... (source_type: gov/statistics, intergovernmental, peer-reviewed, preprint, market-research, company, press, advocacy, database, other; accessed 2026-09-25). Only new sources; reuse existing IDs for sources already in the actor files or the package.
3. `data_<name>.csv`: one or more clean tables the report can publish. Every row carries `source_ids,evidence_label,confidence,demand_evidence_type,notes` columns; snake_case column names; no em or en dashes in any cell.
4. `open_questions.csv`: `question,why_it_matters,cheapest_way_to_close,owner_org_to_ask,priority`.
5. `disagreements.csv`: `topic,claim_a,claim_b,position_taken,notes`.
6. `key_numbers.csv` (2 to 6): `label,value,unit,as_of,context,source_ids,evidence,confidence,demand_evidence_type`.
7. `changes.csv`: `where,current,proposed,evidence_source_ids,strength (strong|moderate|weak),type (corrects|updates|adds|strengthens)` (the same content as the "What this changes" table).

Finish by replying with a 200-word summary: verdict and yield class, the changes to the package you recommend, and your next-wave candidates.
