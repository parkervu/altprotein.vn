# Brief QNT: protein and feed balance model, 2030, 2040, 2050

Folder: `research/wave3/balance_model/` · Source ID prefix: **QNT** · WebSearch cap: **12** · Question tree: F4.

Demand enters only as a macro input. No consumer research, no market-size forecasts for alt-protein products.

## Edition 1.0 anchors (use, do not re-research; cite the report's source IDs where you reuse numbers)
Read `content/01-report/ch01-why-vietnam.md`, `ch02-asset-map.md`, `ch09-economics.md`, `ch13-outlook.md`, and `data/macro_indicators.csv`, `data/feed_imports.csv`, `data/outlook.csv`, `data/inclusion_rates.csv`. Key anchors: livestock and poultry feed about 22 Mt (2025, excludes aquafeed); aquafeed 3.9 to 4.8 Mt (industry) vs 6.5 Mt (USDA), unresolved; total feed demand 28.6 Mt (USDA 2025); soybean meal 5.70 Mt imported, 7.2 Mt fed; maize imports 11.91 Mt (2025); Decision 1520 target 30 to 32 Mt industrial feed by 2030; population UN WPP 2024 medium 104.3 M (2030), 106.5 M (2035), peak 110.0 M (2049); fishmeal pool 120 to 245 kt central.

## Tasks
1. **Find published projections** for Vietnam's meat, egg, dairy and aquatic food consumption and production to 2030, 2035 and 2050 (OECD-FAO Agricultural Outlook 2025 to 2034; FAO "The future of food and agriculture"; IFPRI IMPACT; GLOBIOM; peer-reviewed Vietnam studies; USDA long-term baseline). Use OpenAlex and targeted fetches. Record each with model, scenario and base year.
2. **Build a transparent model** in python (`model.py`) that reads `assumptions.csv` and writes `outputs.csv`, for 2025 (base), 2030, 2040 and 2050, with **four scenarios**:
   - S-BASE: trend diets and trend efficiency.
   - S-HIGH: faster income growth and higher animal-product demand.
   - S-EFF: feed-efficiency gains and diversified feed proteins (by-products, precision feeding).
   - S-ALT: S-BASE plus alternative-protein substitution (state shares: e.g. microbial protein replacing x% of soybean-meal protein and y% of fishmeal in feed; plant-based and fermented foods replacing z% of meat demand) at 2030, 2040, 2050.
   Outputs per scenario and year: population; per-capita supply of meat by type, eggs, dairy, aquatic food (as inputs); domestic production (with an explicit export share for aquaculture); feed demand by species group (Mt); protein-meal demand (soybean-meal equivalent, Mt); import need for soybean meal and maize; fishmeal demand; alt-protein volumes implied in S-ALT (Mt of protein and product), with the feedstock and energy they would need (cassava starch or sugar at stated yields; or electricity and hydrogen for gas fermentation using FTG-type factors which you can take from literature); land footprint of imported soy (ha) avoided.
3. **Sensitivity:** vary the 5 to 8 most important assumptions and report which move 2050 soybean-meal import need the most (a tornado table).
4. **Sanity checks** against edition 1.0 anchors and against published projections; explain any gap.
5. Explain the method in the notes so a reader can reproduce it. Mark every output [estimate] with its horizon year.

## Files
- `model.py`, `assumptions.csv` (parameter, scenario, year, value, unit, basis, source_ids, confidence, notes), `outputs.csv` (scenario, year, indicator, value, unit), `sensitivity.csv`, `published_projections.csv` (indicator, value, unit, year, model, scenario, source_ids, confidence, notes), plus the notes `balance_model.md`.
