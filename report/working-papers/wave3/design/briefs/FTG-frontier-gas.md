# Brief FTG: gas and electro-fermentation, power-to-protein (2026 to 2050)

Folder: `research/wave3/frontier_gas/` · Source ID prefix: **FTG** · WebSearch cap: **15** · Question tree: F2, F3 (see goals file).

Edition 1.0 context: ch09-economics (cost stacks, grid emission factor 0.66 t CO2/MWh, power 1,952 VND/kWh), ch10-technology-fit (gas fermentation rated "Watch"), app-i-costs (Vlaeminck 2023 off-gas SCP, Jean and Brown 2024 H2/CO2 SCP, Fasihi 2025 renewable SCP), RGN-57 (Chinese CAP). Read those first.

## Sub-questions
1. **State of the art 2026.** Organisms and routes: hydrogen-oxidising bacteria (e.g. Cupriavidus, Xanthobacter/Solein), methanotrophs (Calysta/Calysseo FeedKind, Unibio), acetogens and industrial off-gas (Clostridium autoethanogenum protein, CAP, in China), methanol and ethanol single-cell protein, electro-microbial routes (CO2 electrolysis to acetate or formate, then microbes), microalgae on CO2. For each: TRL, largest operating plant and capacity, approvals (food and feed; Singapore, US GRAS, EU, China), notable failures or closures since 2023.
2. **Resource intensity** per kg of protein: electricity (kWh), hydrogen (kg), CO2, nitrogen, water, land (peer-reviewed TEA and LCA, e.g. Leger et al. 2021 PNAS on photovoltaic-driven microbial protein, Sillman, Järviö, Matassa, Fasihi). Put in a table with sources.
3. **Cost trajectories** 2026, 2030, 2040, 2050 as functions of electricity and hydrogen price; published TEAs and their assumptions; which cost lines dominate.
4. **Vietnam's inputs to 2050:** renewable build-out and cost (revised PDP8, Decision 768/QD-TTg, 2030 and 2050 targets; offshore wind; solar LCOE trajectories for Vietnam from IEA, IRENA, BNEF-type or Vietnamese studies), green hydrogen strategy (Decision 165/QD-TTg 2024: production targets 2030 and 2050, cost expectations), CO2 point sources (cement, steel such as Hoa Phat Dung Quat, fertiliser plants such as Phu My and Ca Mau, ethanol, biogas), CCUS plans, green ammonia and nitrogen.
5. **Vietnam estimate [estimate]:** electricity (TWh), solar or wind capacity (GW) and land needed to make, for example, 100 kt, 500 kt and 1 Mt of microbial protein a year; compare with Vietnam's 2050 renewable plans and with feed-protein import volumes (soybean meal about 5.7 Mt imported in 2025, about 46% protein). Show the arithmetic.
6. **When the Vietnam window opens:** state conditions (e.g. green H2 below USD x per kg, electricity below USD y per MWh, a carbon price, a food or feed approval route) with dates when those conditions might be met under published projections. Signposts to watch.

## CSV outputs
- `frontier_gas_tech.csv`: route, organism, feedstock, trl_2026, leading_actors, largest_plant_capacity_t_per_yr, approvals, energy_kwh_per_kg_protein, h2_kg_per_kg_protein, cost_2026_usd_per_kg_protein, cost_2030, cost_2040, cost_2050 (each with basis in notes), vn_window_conditions, signposts, source_ids, evidence_label, confidence, foresight_type, notes.
- `vn_energy_inputs_2050.csv`: indicator, value, unit, horizon_year, type (target, projection, estimate), source_ids, evidence_label, confidence, notes.
- `co2_point_sources_vn.csv`: site, company, province_current, province_former, sector, co2_t_per_yr (if known), purity_note, source_ids, evidence_label, confidence, notes.
