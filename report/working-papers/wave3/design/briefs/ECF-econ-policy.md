# Brief ECF: economy, policy and the regional race to 2050

Folder: `research/wave3/econ_policy/` · Source ID prefix: **ECF** · WebSearch cap: **15** · Question tree: F5, F6.

Edition 1.0 context: ch07-capital, ch08-regional (GFI APAC and Hawkwood study; Thailand framework 2026 to 2035), ch09-economics, ch12-policy-options. Read those first.

## Sub-questions
1. **Cost learning curves.** Empirical learning rates for fermentation-based industries (enzymes, amino acids, citric acid, ethanol, penicillin), bioprocess scale economies, and analogies (solar, batteries) used in alt-protein projections. Published projections of alt-protein cost declines (label company, consultancy and advocacy numbers as claims). Give defensible ranges for 2030, 2040 and 2050.
2. **Capital to 2050.** Trends in private and public investment in alternative protein and biomanufacturing globally and in Asia; government bioeconomy budgets; climate finance and DFI involvement in food systems; blended-finance structures; any carbon-credit methodologies for protein substitution.
3. **Carbon pricing.** Vietnam's emissions trading scheme timeline (pilot to 2028, full operation 2029), expected prices; regional carbon prices; CBAM and agriculture. Compute what a carbon price of USD 25, 50 and 100 per t CO2e would add per tonne of soybean meal, fishmeal and a microbial protein (use published emission factors, including land-use change for soy by origin).
4. **Bioeconomy strategies with 2030 to 2050 horizons:** Vietnam (Resolution 36 vision 2045 and its programmes; Resolution 57 targets; any bioeconomy, biomanufacturing or circular-economy plan), Thailand (BCG, biotech framework 2026 to 2035), China (15th Five-Year Plan, biomanufacturing action plans), India (BioE3 policy 2024), Korea, Japan (bioeconomy strategy 2024), Singapore (RIE2030), EU (biotech act), US, ASEAN frameworks. Record targets, budgets and horizon years.
5. **Regional race:** where each competitor aims to be in 2035 to 2050 in alternative protein and biomanufacturing; where Vietnam could specialise (feedstock, feed, contract manufacturing, aquaculture-linked products).
6. **Jobs and skills:** projections of biomanufacturing employment and skills; Vietnam workforce plans relevant to biotech (e.g. modelled on the semiconductor human-resource plan).

## CSV outputs
- `bioeconomy_strategies.csv`: country, instrument, year_adopted, horizon_year, targets_relevant_to_protein_or_biomanufacturing, budget, source_ids, evidence_label, confidence, notes.
- `learning_rates.csv`: industry_or_technology, learning_rate_pct, period, metric, source_ids, evidence_label, confidence, notes.
- `carbon_price_paths.csv`: jurisdiction, instrument, year, price_usd_per_tco2e, type (actual, target, projection), source_ids, evidence_label, confidence, notes.
- `carbon_cost_per_protein.csv`: input, emission_factor_tco2e_per_t, basis, cost_at_25, cost_at_50, cost_at_100 (USD per t product and per t protein), source_ids, confidence, notes.
