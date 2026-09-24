# Brief NGF (wave 4 gap): next-generation feedstocks and circular side streams, 2030 to 2050

Folder: `research/wave3/next_gen_feedstocks/` · Source ID prefix: **NGF** · WebSearch cap: **12** · Question tree: F3, F4.

Why: the balance model (wave3/balance_model) finds that sugar-route fermentation at S-ALT 2050 scale needs about 1.32 Mt of glucose: half of Vietnam's 2025 cassava crop or 96% of its sugar. Does a second-generation carbon supply change that ceiling by 2040 to 2050? Read first: `wave3/balance_model/balance_model.md` (headline findings and method), `wave3/national_targets/national_targets.md` (rice straw target), `wave3/frontier_gas/frontier_gas.md` (CO2 and H2), and edition 1.0 `content/01-report/ch02-asset-map.md` and `content/03-appendices/app-c-feedstocks.md`.

## Sub-questions
1. **Lignocellulosic sugars:** rice straw (the 1 million ha low-emission rice programme targets 100% straw collection by 2030; NTS estimates 7 to 15 Mt a year), sugarcane bagasse, cassava stems and peels, maize stover, coffee and cashew residues. Volumes (current and 2030 to 2050), competing uses (biomass power 4.8 to 7.0 GW planned by 2050, mushrooms, fodder, bioethanol), pretreatment and enzyme costs, sugar yields per tonne, cost per tonne of fermentable sugar (published TEAs), TRL, projects in Vietnam and Thailand.
2. **One-carbon feedstocks:** methanol and ethanol from CO2 and hydrogen or from biogas; biogas methane from starch-factory wastewater and pig farms (volumes); acetate routes. Costs and TRL to 2050.
3. **Food loss and waste and agro-industrial wastewater** (tofu and soy-milk wastewater, seafood processing, breweries, starch wastewater): volumes and feasibility as fermentation inputs; regulations on using waste streams for feed and food.
4. **Land freed or at risk:** the land plan cuts rice land by about 654 thousand ha by 2030 (Decision 1177/QD-TTg 2026). What could that land produce in protein terms per hectare for soybean, maize, cassava, duckweed or aquatic plants, fodder crops; what is it actually planned for?
5. **Bottom line [estimate]:** by 2040 and 2050, how much fermentable carbon (Mt of sugar-equivalent) could Vietnam supply from each route without cutting food exports; and what share of the S-ALT 2050 need (1.32 Mt glucose) could second-generation routes meet. Show arithmetic.

## CSV outputs
- `feedstock_futures.csv`: stream, route, volume_now, volume_2030, volume_2040, volume_2050, unit, sugar_equivalent_yield, cost_usd_per_t_sugar, trl_2026, competing_uses, source_ids, evidence_label, confidence, foresight_type, notes.
- `land_protein_yields.csv`: crop_or_system, protein_kg_per_ha_per_yr, basis, vn_relevance, source_ids, confidence, notes.
