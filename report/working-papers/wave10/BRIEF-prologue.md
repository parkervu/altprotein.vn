# Research brief: prologue for newcomers (edition 1.4)

## Context

AltProtein Vietnam's package "Alternative protein in Vietnam: a supply-side scoping study" (edition 1.3, September 2026) is at altprotein-vn-supply-scoping-2026/. It is written for people who already know the field. We are adding a prologue (about 3,500 words, English and Vietnamese) for readers who are completely new to alternative protein: what it is, the families of technology, the general global arguments for (and against) it, the international landscape, and the concepts needed to read the report.

Framing rules of the package (keep them): neutral; led by food and feed security, industrial value and trade; animal welfare and environment stated as motivations some actors hold. Insect protein is a benchmark only, never recommended. Published market-size forecasts without a traceable method are not used as findings (they may be cited only as examples of forecasts that overshot). Say when evidence is absent. Never average disagreeing numbers: give both.

## Reuse first

Before searching the web, read what the package already holds and reuse its source IDs where they support a claim:
- data/sources.csv (2,303 sources; search it with grep or Python for your topic)
- content/03-appendices/app-j-science.md (technology families, state of the science)
- content/01-report/ch16-frontier-technology.md (frontier map, costs)
- content/03-appendices/app-ag-global-benchmarks.md (market adoption, forecasts)
- content/03-appendices/app-n-regional.md (approvals, national strategies)
- content/03-appendices/app-m-capital.md section M.6 (investment)
- content/01-report/ch01-why-vietnam.md, ch04-alt-protein-today.md, ch24-frontier-demand.md
- data/glossary.csv

Do not edit any file in the package. Write only to your output folder.

## Web rules

- Use WebSearch (at most about 25 searches) and WebFetch. Prefer primary sources: FAO, OECD, WHO, peer-reviewed papers (DOI), regulators, company filings, GFI data pages (advocacy, label them so).
- If a site blocks fetching, do not try to get around it (no curl, no mirrors, no archive copies). Use another source or record the gap.
- Never put the user's email address or any personal data in any request, header, URL or payload.
- Record a short verbatim quote (under 25 words) for each key number, so a checker can confirm it.

## Output (write into working-papers/wave10/<your-letter>/)

1. `facts.csv` with columns: fact_id, topic, claim (one plain sentence as it could appear in the prologue), value, unit, year_of_data, scope, source_ids (semicolon-separated; package IDs or your new IDs), evidence (general, VN-adjacent or VN-direct), confidence (High, Medium, Low), quote, notes (caveats, disagreements between sources).
2. `sources.csv` for NEW sources only, with exactly these columns: source_id,prefix,agent,citation,title,author_or_publisher,date,url,doi,source_type,accessed,notes,wave,from_note. Use your prefix (given in your task) and numbers from 01. agent = PROLOGUE; wave = wave10; from_note = working-papers/wave10/<your file>.md; accessed = 2026-09-25. source_type one of: peer-reviewed, gov/statistics, intergovernmental, regulator, company, advocacy, press, trade press, encyclopedia.
3. `notes.md`: a readable note (800 to 1,500 words) of what you found, organised by topic, with citations as [PRA-01] style IDs, plus a list "Disagreements and caveats" and "What we could not verify". Plain English, British spelling, no em dashes or en dashes.
