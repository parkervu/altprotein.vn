# Brief HSC: horizon scan, weak signals, wildcards and research trajectories

Folder: `research/wave3/horizon_scan/` · Source ID prefix: **HSC** · WebSearch cap: **15** · Question tree: F7, F8.

Edition 1.0 context: ch06-knowledge-talent and app-k-research (OpenAIRE counts; OpenAlex was unavailable then, open question OQ-124), ch08-regional, ch13-outlook.

## Sub-questions
1. **OpenAlex bibliometrics (priority).**
   - Global publication counts per year 2015 to 2025 for frontier topics: gas fermentation or hydrogen-oxidising bacteria protein; single-cell protein; precision fermentation or recombinant food protein; cultivated meat; molecular farming of food proteins; AI or machine learning for food protein design; mycoprotein; microalgae protein; duckweed protein. Report compound annual growth.
   - Vietnam's counts, share and trend for the same topics; ASEAN comparison (Thailand, Malaysia, Singapore, Indonesia, Philippines).
   - Close OQ-124: Vietnam's top 10 institutions in alternative-protein-adjacent research (define the query transparently), international co-authorship share, main partner countries, year trends. Save the OQL or query strings so they can be rerun.
2. **Patent signals:** patent landscape reports (e.g. WIPO, GFI, EPO) on alternative proteins; filing trends by country; any Vietnamese filings. Use reports rather than raw patent databases.
3. **Startup and plant signals in Asia and globally, 2025 to 2026:** new plants, pivots, closures, consolidation (e.g. cultivated-meat closures and mergers; fermentation plant openings; Chinese capacity), with dates.
4. **Policy signals 2026:** new or draft frameworks in Asia (China cultivated framework, Korea approvals, Japan guidelines, Thailand updates, India, Malaysia halal).
5. **Wildcards (20 to 30):** low-probability, high-impact events relevant to Vietnam's protein supply to 2050 (e.g. mammalian H5N1 pandemic, anchoveta collapse, South China Sea shipping disruption, AI-driven enzyme breakthrough, ultra-cheap electricity, a novel-food safety scandal, food carbon border measures, extreme Mekong salinity event, effective ASF vaccine). For each: impact channel, direction, signposts.
6. **External forecasts:** published or crowd forecasts about alternative protein (e.g. Metaculus or Good Judgment questions on cultivated meat price or approvals, expert surveys, Rethink Priorities forecasts, EAT-Lancet 2.0 (2025) and WRI projections). Record forecaster, question, value or probability, and date.

## CSV outputs
- `biblio_trends_frontier.csv`: topic, country, year, count, query_or_oql, source_ids, notes.
- `vn_research_profile.csv`: metric (e.g. top institution, coauthorship share, partner country), value, query_or_oql, source_ids, notes.
- `signals_register.csv`: signal, date, place, type (plant, startup, policy, science, patent, finance), domain, direction, relevance_to_vn, strength (weak, moderate, strong), source_ids, evidence_label, confidence, notes.
- `wildcards.csv`: wildcard, impact_channel, direction_for_vn_alt_protein, horizon, signposts, source_ids, confidence, notes.
- `external_forecasts.csv`: question, forecaster, value_or_probability, date, resolution_date, source_ids, notes.
