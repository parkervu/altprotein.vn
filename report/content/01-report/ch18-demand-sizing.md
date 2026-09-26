---
id: ch18-demand-sizing
title: "How much demand? Seven routes to 2050"
short_title: "Demand sizing"
section: report
part: "III. Demand: who would buy it"
order: 18
summary: "Instead of a market-size number, we size seven routes by which domestic or novel protein could reach buyers, in three labelled scenarios. On a benchmark path they create demand for about 19,000 t of protein a year by 2035, mostly by replacing imported ingredients, but displace only about 2,400 t of meat protein (0.2%)."
audiences: [investors, policy, startups, research, international, manufacturers]
reading_time_min: 19
key_numbers: [kn-demand-bench-2035, kn-animals-spared-2035, kn-co2e-avoided-2035, kn-salt-translation, kn-chay-days-share, kn-forecast-overshoot]
related_data: [demand_assumptions.csv, demand_outputs.csv, demand_sensitivity.csv, demand_funder_units.csv, impact_per_tonne.csv, funder_route_guide.csv, funder_fit.csv, canteen_dish_summary.csv, school_menu_weeks.csv, diet_quality_vietnam.csv, trade_seasonal_summary.csv, hybrid_savings.csv, forecast_track_record.csv, balance_outputs.csv]
related_pages: [app-d8-demand-model, ch22-protein-balance-2050, ch23-scenarios-2050, ch12-chay-baseline, ch15-channels, ch25-demand-to-frontier, app-d7-global-benchmarks, app-f4-balance-model, app-m4-actor-check-waves]
charts: [chart-funder-units, chart-demand-routes, chart-displacement-vs-salt, chart-forecast-vs-actual]
---

# 18. How much demand? Seven routes to 2050

**In one paragraph.** We do not give a market-size number for Vietnamese alternative protein. Published figures have no traceable method, and global forecasts made in 2019 to 2021 overshot by one to two orders of magnitude. Instead, a small reproducible model (`tools/demand_model.py`) sizes seven routes by which domestic or novel protein could reach Vietnamese plates and foreign buyers, in three labelled scenarios, and separates the protein a route delivers from the meat protein it displaces. On a benchmark path anchored on what has happened elsewhere, the routes create demand for about 19,000 t of protein a year by 2035, mostly by replacing imported textured soy and gluten in foods Vietnam already makes. Only part of it would be made in Vietnam: about 11,000 to 17,000 t, depending on how large the import pool really is and how much of the hybrid, canteen and plant-milk protein a domestic maker wins. For soy extrusion, that supports about one line of 1 t per hour by 2035. The routes displace only about 2,400 t of meat protein, 0.2% of the total. In the units funders count, that spares about 2.4 to 2.7 million animals a year, 93 to 94% of them chickens and ducks, and avoids about 0.14 Mt CO2e; import substitution, the largest route, spares none. A stretch path, which assumes conditions not yet seen anywhere, displaces 0.7% by 2035 and 1.5% by 2050, against the 3% and 10% the Part IV S-ALT scenario assumes. Reaching S-ALT's modest 2030 level through hybrids alone would take three-quarters of all processed meat; through consumer analogues, more regular buyers than Vietnam has people. Existing chay days already avoid about 25,000 t of meat protein a year. The food side of S-ALT is exploratory; the demand that exists is for ingredients.

> **Scenarios, not forecasts.** Every value after 2025 in this chapter is our estimate from stated assumptions {VN-direct|Low} {fx:estimate} {dx:inferred}. Most assumptions have no Vietnamese measurement behind them (how many people keep chay days, how much meat goes into processed products, how much protein a canteen meal holds); each is listed with its basis in `demand_assumptions.csv` and [[app-d8-demand-model]]. The model uses the population and meat demand of the Part IV S-BASE scenario, so its numbers sit on the same basis as [[ch22-protein-balance-2050]].

---

## 18.1 Why not a market-size number

- **Vietnamese market sizes are untraceable.** "VND 1,000 billion", "USD 500 million" and "USD 103 to 112 million" for plant-based or vegetarian food carry no visible method and conflict with shelf and launch evidence; the supply study and every Part III stream rejected them [@ECO-17; @ECO-18; @CHY-13] {VN-direct|Low} {dx:stated}.
- **Global forecasts overshot.** Kearney forecast in 2019 that novel plant-based meat would be 10% of a USD 1,200 billion meat market in 2025; global retail sales were about USD 6.6 billion in 2025, about 0.55% (our comparison). Barclays' USD 140 billion by 2029 would need about 115% growth a year from 2025. BCG and Blue Horizon's plant-based price parity "by 2023" was not met at category level [@GLB-45; @GLB-44; @GLB-42; @GLB-05] {general|Medium} {dx:inferred}. Forecasts made at the 2019 to 2021 peak extrapolated launch-year growth, and several came from parties with an interest ([[app-d7-global-benchmarks]]). {{kn:kn-forecast-overshoot}}

{{chart:chart-forecast-vs-actual}}

So we size routes, not markets, and we label every result.

## 18.2 Seven routes and three scenarios

| Route | What it is | How it is sized | Displaces meat? |
|---|---|---|---|
| R1 Ingredient import substitution | Domestic or novel protein replacing imported textured soy, soy concentrate and gluten bought by chay makers, meat processors and other food makers | Food share of 2025 plant-protein imports (about 40,000 t of product, about 26,000 t of protein; monthly trade points nearer 35,000 t), growing 4 to 8% a year; domestic share by scenario | No: replaces imports |
| R2 Chay occasions | Upgraded protein on existing chay days, plus any added chay days | 30% of people keeping 2.5 chay days a month (assumption); 20 g of protein per upgraded chay day; added days only in two scenarios | Only added days, net of 30% compensation |
| R3 Hybrid processed meat | Plant or fungal protein replacing part of the meat in *giò* and *chả* (pork rolls and loaves), sausages and fillings | 5% of meat eaten as processed products (assumption); adoption and replacement share by scenario; plant protein of any origin | Yes, 0.9 per unit replaced |
| R4 Institutional meals | Plant or novel protein in factory canteens and school lunches | 1.0 billion canteen and 0.8 billion school meals a year; 20 g of protein per protein dish (assumptions); adoption by scenario | Yes, 0.8 per unit (meal level); school protein sold into the plant slot would replace tofu, not meat |
| R5 Household modern analogues | Analogues bought by urban households | Regular (monthly) buyers as a share of urban residents; 3 kg a year each at 15% protein | Little: 0.2 per unit |
| R6 High-protein plant milks | Protein isolates added to plant milks | Plant milk volume (about 300 million litres in 2025) times high-protein share times 30 g per litre | No (dairy, if anything) |
| R7 Exports | Products or ingredients made in Vietnam and sold abroad | Tonnes by scenario at 25% protein (no revealed base for the ingredient part) | No (not in Vietnam) |

Displacement factors follow the evidence of [[ch13-consumers]] and [[app-d7-global-benchmarks]]: blends and canteen swaps remove meat by construction, while consumer analogues have not measurably displaced meat anywhere [@GLB-19; @GLB-17; @GLB-35; @GLB-39] {general|Medium} {dx:inferred}. A 2026 analysis of 1.2 million restaurant transactions in the US, Canada and Australia found "essentially no evidence" that modern alternative proteins reduced meat purchases [@AFN-07] {general|Medium} {dx:revealed}.

**What the route bases rest on.** We tested the bases of four routes against revealed evidence ([[app-m4-actor-check-waves]]). No model value changed; the readings below qualify them.

- **R2 chay days.** No probability survey asks about *chay* (vegetarian eating on lunar days), but the national Diet Quality Questionnaire asks about diet: in late 2021, 7.9% (5.3 to 11.0%) of adults ate no meat, poultry or fish on the previous day. That caps chay-day person-days. The central assumption (2.5% of person-days) uses about a third of the ceiling; the top of the range in [[ch12-chay-baseline]] would need nearly every flesh-free day to be a chay day [@APR-36; @BRD-01] {VN-direct|Medium} {dx:revealed}.
- **R3 hybrids.** Cost does not limit this route: extending pork products with soy saves 14 to 16% of raw-material cost at 20% replacement, at every hog price since 2019 (our calculation) [@DIE-25; @TIC-12; @BUY-05] {VN-direct|Low} {dx:inferred}. Adoption is limited by product identity, sensory ceilings (about 10 to 20% of the meat in fine emulsions, 30% in coarse mince) and trust. No Vietnamese brand sells a declared meat and plant-protein blend, buyers read hidden extension (*độn*, filler) as cheating, and 2026 is a processed-meat trust crisis [@HXE-04; @HXE-09; @TRU-22; @TRU-07] {VN-direct|Medium} {dx:revealed}. So the benchmark's 6% of processed meat by 2035 fits extension inside industrial *xúc xích* (sausages) and fillings under ingredient names, while the stretch path's 15% needs a positive frame for declared blends, not price parity. National diet surveillance cannot test the 5% processed share: its processed-meat item, eaten by 18.1% of adults on a given day, leaves out *giò* and *chả* [@APR-36; @BRD-01] {VN-direct|Medium} {dx:revealed}.
- **R4 canteens and schools.** Five caterers' published menus lead with pork (33% of protein dishes), fish (26%) and chicken (13%); tofu appears in 9% (plant-only 3%), and none names textured soy [@UPL-27; @UPL-29; @UPL-32] {VN-direct|Medium} {dx:stated}. School caterers' portions support the 20 g of protein per dish [@PMR-24; @PMR-26] {VN-direct|Medium} {dx:revealed}. For schools, the old basis (Decision 1340's animal-protein target, which ended in 2020) no longer holds. MOH Decision 3958/QĐ-BYT (December 2025) sets no animal share and asks for plant protein (legumes, tofu) at least twice a week; audited menus meet that rule in only 9 of 48 school-weeks and fill the plant slot with tofu beside meat [@AIB-39; @PMR-10; @PMR-26] {VN-direct|High} {dx:revealed}. A plant ingredient sold into that slot replaces tofu; only a labelled blend in minced-meat and fish-cake dishes, served on 28.5% of audited days, removes meat. And D-BENCH's canteen share implies 36.6 million canteen meal-equivalents a year by 2035, about 37 times the meals Sinergia Animal's programme shifted in three countries in 2023 and 16 times Humane World's 2025 commitments worldwide [@AFN-26; @AFN-23]; only caterers' own commercial use could reach it ([[app-d7-global-benchmarks]]) {VN-direct|Low} {fx:estimate} {dx:inferred}.
- **R7 exports.** The 25% protein share assumes that about 60% of exports are ingredients. Vietnam's textured-protein exports to the EU, the UK, Japan, Korea and Australia were 0 to 73 t each in 2024 to 2025, and the Vietnam-made wrapped plant foods found abroad carry 4 to 5.4 g of protein per 100 g [@XBA-28; @XBA-26] {VN-direct|Low} {dx:revealed}. At 5 to 12% protein, R7 would deliver 0.5 to 1.2 kt in 2035, not 2.5 kt (our calculation) {fx:estimate}. The export evidence is in [[ch17-export-demand]].

**The three scenarios** {fx:estimate}:
- **D-DRIFT, incumbent drift.** Novel protein stays a small import-substitution business; no hybrids to speak of; analogues remain a niche.
- **D-BENCH, benchmark path.** Each route grows to levels anchored on analogues observed elsewhere, scaled to Vietnam's channels and price gap: for example 25% of the ingredient pool supplied domestically by 2035, 6% of processed meat sold as hybrids, 3% of canteen protein, 2% of urban residents buying analogues monthly (against a Western ceiling of about 9 to 10% of households).
- **D-STRETCH, stretch.** Conditions not yet observed anywhere: per-serving price parity in local formats, hybrids in 15% of processed meat by 2035 and 35% by 2050 (which needs openly declared blends to be accepted, since extension already pays), canteen protein defaults, and chay keepers adding half a day a month by 2035 and one day by 2050.

## 18.3 What the routes deliver

| kt of protein a year | 2030 | 2035 | 2050 |
|---|---|---|---|
| D-DRIFT, delivered | 1.3 | 3.2 | 10.7 |
| D-BENCH, delivered | 5.9 | 19.1 | 66.7 |
| D-STRETCH, delivered | 14.1 | 45.6 | 171.5 |
| of which R1 import substitution (D-BENCH) | 3.5 | 11.6 | 44.6 |
| of which R7 exports (D-BENCH) | 0.8 | 2.5 | 7.5 |
| For comparison: Part IV S-ALT, food protein replacing meat | 11.8 | 39.3 | 144.6 |
| For comparison: Part IV S-ALT, microbial protein in feed | 55.8 | 160.2 | 514.1 |

All rows are our estimates on the S-BASE population and meat demand of Part IV, which follow the OECD-FAO outlook to 2035 [@QNT-01] {VN-direct|Low} {fx:estimate} {dx:inferred}.

{{chart:chart-demand-routes}}

Three readings follow {VN-direct|Low} {fx:estimate} {dx:inferred}:

1. **Ingredient import substitution is most of the demand.** In D-BENCH, R1 is about 60% of delivered protein in 2035 and two-thirds in 2050. The pool it draws on, food-grade plant-protein ingredients now imported mostly from China, is revealed demand today ([[ch16-business-buyers]]). Monthly trade suggests the food part of that pool is nearer 35,000 t of product than 40,000 t, because much of the post-2023 jump in HS 3504 imports is priced like feed protein and shows no *chay* season; at 35,000 t, R1 in 2035 is about 10,200 t of protein, not 11,600 t (our calculation) [@BRD-05; @BRD-06; @BUY-02] {VN-direct|Low} {dx:inferred}.
2. **The food volumes are real but modest, and only part of them is textured soy.** At about USD 3 per kg of protein, D-BENCH is an ingredient business of roughly USD 57 million a year by 2035 and USD 200 million by 2050. The model converts all R1 to R4 ingredient output into textured-line equivalents (about 3.5 lines of 1 t per hour by 2035, 12 by 2050), but most of the R1 pool is gluten and isolates, which need wet-milling or isolate plants. For soy extrusion, 25% of a textured-type import pool of about 23,000 t in 2035 is about 5,700 t: one 1 t per hour line or two 0.5 t per hour lines, not three to four (our calculation) [@BUY-02; @TIC-12]. That supports a few specialised ingredient plants, as in play T1 ([[ch25-demand-to-frontier]]), not a consumer-led boom.
3. **Feed is the bigger protein market.** Part IV's S-ALT scenario puts microbial protein in feed at about four times its food volumes ([[ch22-protein-balance-2050]]). Nothing in the demand evidence changes the supply study's conclusion that feed leads food; mills already import about 9,200 t of inactive yeast a year ([[ch17-export-demand]]).

### How much of it is made in Vietnam

The 19,000 t headline counts protein the routes deliver, not protein made in Vietnam. Only R1 applies an explicit domestic share (25% of the pool by 2035 on D-BENCH). R2 to R6 count all plant or novel protein used in those routes, and much of it would be imported soy or pea unless a domestic maker wins the business: Chinese, ASEAN and Korean textured protein, isolates and gluten enter Vietnam duty-free [@FTR-32] {VN-direct|High} {dx:revealed}. Hybrids are the clearest case, because processors would extend with soy they already import: at R1's 25% domestic share, the domestic part of R3 in 2035 is about 0.20 of 0.79 kt. R7 counts protein exported, not eaten in Vietnam.

| D-BENCH, 2035, kt of protein | Model reading | Strict reading |
|---|---|---|
| R1 import substitution | 11.6 (pool of 40,000 t of product) | 10.2 (pool of 35,000 t) |
| R2 to R6 (chay, hybrids, meals, analogues, plant milks) | 4.9 (protein of any origin) | 1.2 (25% domestic, as in R1) |
| Made in Vietnam for the home market | 16.55 | about 11.4 |
| R7 exports (made in Vietnam, sold abroad) | 2.5 (25% protein) | 0.5 to 1.2 (5 to 12% protein) |

So the benchmark path creates demand for about 19,000 t of protein a year by 2035, of which about 11,000 to 17,000 t would be made in Vietnam for the home market (our calculation) {VN-direct|Low} {fx:estimate} {dx:inferred}. The model's outputs are unchanged; this is a reading of them, and [[app-d8-demand-model]] (D8.3) shows the arithmetic.

## 18.4 What the routes displace, against S-ALT

| Meat protein displaced | 2030 | 2035 | 2050 |
|---|---|---|---|
| D-DRIFT | 0.1 kt (0.01%) | 0.2 kt (0.01%) | 0.5 kt (0.04%) |
| D-BENCH | 0.4 kt (0.04%) | 2.4 kt (0.18%) | 6.0 kt (0.41%) |
| D-STRETCH | 3.1 kt (0.27%) | 9.2 kt (0.71%) | 21.9 kt (1.52%) |
| Part IV S-ALT assumption | 11.8 kt (1%) | 39.3 kt (3%) | 144.6 kt (10%) |
| Existing chay days (already in the baseline) | about 29 kt (2.5%) | about 32 kt (2.5%) | about 36 kt (2.5%) |

All rows are our estimates {VN-direct|Low} {fx:estimate} {dx:inferred}. {{kn:kn-demand-bench-2035}}

{{chart:chart-displacement-vs-salt}}

In D-BENCH, the displacing routes are, in 2035, added chay days (about 0.9 kt), hybrids (0.7 kt) and canteens and schools (0.6 kt); consumer analogues contribute about 0.1 kt. The institutional figure includes about 0.06 kt from schools. School protein sold into the plant slot would replace tofu, not meat; counting it at zero lowers D-BENCH displacement in 2035 from 2.35 kt to about 2.29 kt, so "about 0.2%" stands (our calculation). Even in D-STRETCH the food routes reach about a quarter of S-ALT's 2035 assumption and about 15% of its 2050 assumption {fx:estimate}.

### The same routes in funder units

Welfare, climate and market-shaping funders do not count tonnes of meat protein. We converted the displaced protein into animals spared (carcass weight per animal from FAOSTAT for Vietnam), net CO2e avoided (life-cycle intensities for East and Southeast Asia, minus the footprint of the replacing protein) and meal-equivalents (one 20 g protein dish supplied by plant or novel protein instead of meat) [@FUF-03; @FUF-04; @FUF-05; @FUF-07] {VN-direct|Low} {fx:estimate} {dx:inferred}. Method and factors are in [[app-d8-demand-model]] (D8.7).

| Displacing routes R2 to R5 | 2030 | 2035 | 2050 |
|---|---|---|---|
| D-BENCH, animals spared (million a year) | 0.34 to 0.39 | 2.4 to 2.7 | 6.0 to 6.8 |
| D-BENCH, chickens and ducks as share of animals | 91 to 92% | 93 to 94% | 93 to 94% |
| D-BENCH, net CO2e avoided (Mt a year) | 0.02 (0.01 to 0.05) | 0.14 (0.08 to 0.25) | 0.36 (0.20 to 0.65) |
| D-BENCH, canteen and school meal-equivalents (million a year) | 11.0 and 0 | 36.6 and 4.0 | 98.4 and 16.0 |
| D-STRETCH, animals spared (million a year) | 3.2 to 3.4 | 9.8 to 10.6 | 23.1 to 25.3 |
| D-STRETCH, net CO2e avoided (Mt a year) | 0.19 (0.11 to 0.34) | 0.55 (0.33 to 0.99) | 1.35 (0.80 to 2.39) |
| R1 import substitution: animals and CO2e | none | none | none |
| R1 import substitution: imports replaced, D-BENCH (USD million a year, gross) | 4.8 to 7.0 | 16.1 to 23.3 | 61.8 to 89.3 |

All rows are our calculation from `demand_funder_units.csv` {VN-direct|Low} {fx:estimate} {dx:inferred}. Animal ranges run from the meat mix observed on caterers' menus (low) to the national consumption mix (high); CO2e ranges reflect emission factors.

| Per tonne of protein delivered, 2035 | Meat protein displaced (t) | Animals spared | Net t CO2e avoided |
|---|---|---|---|
| R1 import substitution | 0 | 0 | about 0 |
| R2 upgrades on existing chay days; R6 plant-milk protein | 0 | 0 | about minus 8 (adds emissions) |
| R3 hybrids | 0.9 | about 540 (mostly birds, about 68 pigs) | about 57 |
| R4 canteens, caterer to national meat mix | 0.8 | about 745 to 1,090 | about 45 to 51 |
| R4, a chicken dish replaced | 0.8 | about 2,760 | about 19 |
| R4, a pork dish replaced | 0.8 | about 81 | about 24 |
| R5 household analogues | 0.2 | about 270 | about 5 |

Source: `impact_per_tonne.csv` and the caterer-mix check in [[app-d8-demand-model]] {general|Low} {fx:estimate} {dx:inferred}.

{{kn:kn-animals-spared-2035}}

{{chart:chart-funder-units}}

{{kn:kn-co2e-avoided-2035}}

Three things follow {VN-direct|Low} {fx:estimate} {dx:inferred}:

- **Import substitution scores zero in funder units.** R1, 60% of delivered protein, replaces soy protein with soy protein: no animals, about no CO2e. Its value is an import bill of about USD 16 to 23 million a year replaced by 2035 (gross), processing capacity and jobs.
- **Nearly all animals spared are chickens and ducks.** A bird carries about 2 kg of carcass and a pig about 66 kg, so even the pork-heavy hybrid route spares about seven birds for every pig. The benchmark path spares about 0.15% of the 1.7 billion birds Vietnam would eat in 2035. A Vietnamese canteen meal shifted spares about 0.015 to 0.020 animals, against about 0.13 in the estimate for Sinergia Animal's programme [@AFN-26] {general|Medium} {dx:revealed}; only chicken dishes (0.055) come near it, and chicken leads just 13% of canteen protein dishes. Fish, which leads 26% of canteen dishes, and eggs are not counted.
- **CO2e is small and about half comes from beef and buffalo,** which are 8.5% of the meat eaten in 2035. Climate is a co-benefit of these routes, not their case.

**What S-ALT 2030 would require, route by route** (our calculation) {VN-direct|Low} {fx:estimate} {dx:inferred}. To displace 11,800 t of meat protein in 2030:

- **Hybrids alone:** 74% of all processed meat reformulated with 30% of its meat replaced.
- **Institutional meals alone:** 39% of all protein in canteen and school protein dishes switched.
- **Consumer analogues alone:** about 131 million regular buyers, more than Vietnam's population, at today's displacement evidence.
- **Added chay days alone:** about 0.43 extra meat-free days per person per month across the whole population (about five a year), with 30% compensation.

{{kn:kn-salt-translation}}

The last line is the striking one. On paper, the cheapest route to S-ALT's food volumes is cultural, not technological: a small rise in chay occasions, which Vietnam already practises at scale. We have no evidence that chay days are rising ([[ch12-chay-baseline]]), and no evidence on compensation, so this is a hypothesis for funders and researchers, not a finding. It is also the route that funders find hardest to pay for in Vietnam (18.6).

## 18.5 Sensitivity

We varied one assumption at a time between its low and high value and recorded total meat protein displaced in D-BENCH in 2035 (2.35 kt at central values) {VN-direct|Low} {fx:estimate}. The largest effects come from the share of people keeping chay days (20 to 50%: 2.0 to 3.0 kt), the share of meat eaten as processed products (3 to 8%: 2.1 to 2.8 kt) and compensation on added chay days (0 to 60%: 2.7 to 2.0 kt). No single assumption moves the 2035 result by more than 0.6 kt, so no plausible single correction brings D-BENCH near S-ALT's 39 kt. The full table is in [[app-d8-demand-model]].

Three corrections outside the model move delivered protein more than displaced protein (our calculation) {VN-direct|Low} {fx:estimate}. A food pool of 35,000 t lowers R1 in 2035 by about 1.4 kt; an export protein share of 5 to 12% lowers R7 by 1.3 to 2.0 kt, taking the D-BENCH total to 17.1 to 17.8 kt; and counting school plant-slot protein as non-displacing lowers displacement by about 0.06 kt. None changes a conclusion of this chapter.

## 18.6 What this means for Part IV, and for the frontier

- **Label S-ALT's food side exploratory.** The benchmark evidence (a ceiling of 3 to 4% of pre-packaged meat after a decade in rich markets, little displacement, a price gap ten times larger in Vietnam) and our routes both say that 1% of meat protein displaced by 2030 is beyond anything observed. S-ALT remains useful as a what-if for supply planning; it should not be read as a demand path. Unless S-ALT is defined to include growth of traditional chay eating, its food shares are a stretch above every route we can document {general|Medium} {fx:estimate} {dx:inferred}. The feed side of S-ALT is outside this chapter's scope.
- **Count three things separately.** Delivered protein (import substitution, protein upgrades, exports) is what an ingredient maker sells; displaced meat protein is what the supply-security case needs; animals spared and CO2e avoided are what welfare and climate funders count. On the benchmark path in 2035, delivered protein is about eight times displaced protein; the displacing routes spare about 2.4 to 2.7 million animals a year, 93 to 94% of them chickens and ducks, and avoid about 0.14 Mt CO2e (0.08 to 0.25). Import substitution, 60% of delivered protein, spares none and avoids about none {VN-direct|Low} {fx:estimate} {dx:inferred}.
- **The routes that displace meat run through businesses and institutions:** hybrids made by processors, canteen menus set by caterers, and, if it happens, more chay days. In schools, only a labelled blend in minced-meat dishes removes meat; the plant slot belongs to tofu. These are the routes to design for if displacement is the goal.

**For each reader.**
- **Investors:** size an ingredient business on the import-substitution pool (about 23,000 to 26,000 t of protein a year today, from 35,000 to 40,000 t of product), not on consumer forecasts. For soy extrusion, the benchmark path supports about one 1 t per hour line (or two 0.5 t per hour lines) by 2035; the rest of the pool is gluten and isolates, which need other plants. Import substitution will not pass a climate or welfare screen: pitch it on the import bill (about USD 16 to 23 million a year replaced by 2035, gross), jobs and processing capacity. Per tonne of protein, a hybrid extender avoids about 57 t CO2e and a canteen ingredient about 45 to 51 t; climate or welfare money fits those, not import substitution.
- **Startups:** the volumes that exist are business-to-business; each 1 t per hour line needs about 7,000 t a year of offtake, more than half of Vietnam's 2025 imports of textured-type protein.
- **Policy makers:** do not set national targets from consultancy forecasts. If meat displacement is a goal, institutional menus and processed-meat reformulation are the levers, and both need rules (labelling of blends, a protein-quality basis for public meals). Count school sales into the plant slot as tofu replaced, not meat.
- **Research bodies:** the three numbers that most change this chapter are unmeasured. The share of people keeping chay days is capped by national diet data at 7.9% flesh-free person-days, and a lunar-date tabulation of the existing survey interviews is the cheapest test. The share of meat eaten processed is not captured, because the national diet item omits *giò* and *chả*. And the species mix and protein of canteen dishes decide animals per meal: published menus support about 20 g per dish, but species vary by caterer.
- **International organisations and funders:** match the route to your unit and your rules. Welfare funders: canteens spare the most animals per tonne of protein (about 745 to 1,090 at the observed and national meat mixes, about 2,760 if chicken dishes are replaced, about 81 if pork dishes are), and added chay days spare the most in total but are unmeasured. The funders we found that pay for menu or chay-day work either do not cover Vietnam (ReRoot Asia, Lever, Sinergia Animal, Good Food Fund) or exclude diet change (ACE Movement Grants from September 2026; Nova Vista, whose USD 10 million request funds procurement, advance market commitments and retailer protein ratios and prioritises Japan and Korea); Humane World is the one implementer with Vietnam staff [@AFN-05; @AFN-29; @AFN-39; @AFN-26; @FUF-01; @AFN-23] {VN-direct|Medium} {dx:stated}. Market-shaping funders: procurement of a canteen protein ingredient, processors' blend commitments, and naming and GMO rules, not chay days. Climate funders: totals are small; treat climate as a co-benefit. Development finance: import substitution for its import bill and industrial value, not for displacement. Only 4 of the 19 demand moves in [[ch25-demand-to-frontier]] have a funder whose scope fits and that accepts Vietnam.
- **Manufacturers:** hybrids and chay upgrades are small in tonnes but are where your existing brands and lines meet the demand that exists. For hybrids, cost is not the constraint, because soy extension already pays at every hog price; a new extender has to win on sensory tolerance and on the label.

**Related:** [[app-d8-demand-model]], [[ch22-protein-balance-2050]], [[ch25-demand-to-frontier]], [[ch17-export-demand]].
