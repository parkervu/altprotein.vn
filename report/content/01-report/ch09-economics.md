---
id: ch09-economics
title: "Economics: what it costs and what it must beat"
short_title: "Economics"
section: report
part: "II. The conditions"
order: 9
summary: "Power, labour, land and water are cheap in Vietnam, but they are a small share of fermentation cost; capital is most of it. On indicative numbers, fungal feed protein made in Vietnam costs USD 4,050 to 14,700 per tonne of protein, against USD 2,625 to 3,846 for fishmeal protein and about USD 880 for soybean meal protein. It can compete as a functional aquafeed ingredient, rarely as bulk protein, and never against soy. Textured plant protein costs a small fraction of the retail price of meat protein, so manufacturing cost is not what holds plant-based foods back."
audiences: [investors, startups, manufacturers, policy, research]
reading_time_min: 14
key_numbers: [kn-power-blended, kn-min-wage-2026, kn-grid-emission-factor, kn-cost-fungal-feed, kn-fishmeal-protein-price, kn-tvp-cost, kn-retail-protein-floor, kn-cooling-penalty]
related_data: [cost_inputs.csv, commodity_prices.csv, tea_benchmarks.csv, feed_benchmarks.csv, inclusion_rates.csv, replacement_trials.csv]
related_pages: [app-i-costs, app-h-feed-market, ch02-asset-map, ch10-technology-fit, ch11-plays]
charts: [chart-cost-stack-fungal, chart-price-to-beat, chart-capex-per-tonne, chart-retail-price-per-protein]
---

# 9. Economics: what it costs and what it must beat

**In one paragraph.** Vietnam's operating inputs are cheap: power at about USD 0.075 per kWh for a plant running around the clock, a minimum wage of about USD 204 a month, factory rent of about USD 5 per m² a month. But in fermentation those inputs are a small part of cost. On our indicative Vietnamese cost stack, capital charges and maintenance are 54 to 67% of the cost of fungal feed protein, which comes to USD 4,050 to 14,700 per tonne of protein. Fishmeal protein costs USD 2,625 (2025 average) to USD 3,846 (August 2026) per tonne, and soybean meal protein about USD 880. So a Vietnamese microbial protein sold only on protein content is marginal against fishmeal and far from soy. It becomes plausible as a functional shrimp or fish-feed ingredient used at 1 to 5% of the diet, where buyers pay for survival and feed efficiency. For plant-based food the arithmetic runs the other way: textured soy protein costs roughly 3,700 to 10,700 VND per 100 g of protein to make, against 34,000 to 70,000 VND at retail for eggs, chicken and pork. Quality, demand and distribution decide that market, not factory cost.

> **Read with care.** The cost stacks in this chapter are indicative. They combine sourced Vietnamese prices with stated engineering assumptions and are meant to show orders of magnitude and which lines matter. They are not feasibility studies.

---

## 9.1 Input costs in Vietnam

| Input | Value | Note | Sources |
|---|---|---|---|
| Electricity, manufacturing, 22 to 110 kV | Off-peak 1,190, normal 1,833, peak 3,398 VND/kWh | Unchanged since 10 May 2025 | [@COST-01; @COST-03] {VN-direct\|High} |
| Electricity, blended for a 24/7 plant | 1,905 to 2,110 VND/kWh (USD 0.073 to 0.081); 1,952 at 22 kV | Our calculation with the April 2026 peak hours | [@COST-01; @COST-03] {VN-direct\|High} |
| Grid emission factor | 0.66 t CO2 per MWh (2023, latest official) | Power-heavy processes carry a high footprint without renewable supply | [@COST-08; @COST-09] {VN-direct\|High} |
| Minimum wage, Region I | 5,310,000 VND a month (about USD 204) from 1 January 2026 | Average employee income 9.0 million VND (Q2 2026); employer contributions add about 23.5% | [@COST-19; @COST-20] {VN-direct\|High} |
| Industrial land | USD 186 per m² for the lease term (south); USD 138 (north) | Q2 2026 | [@COST-21; @COST-22] {VN-direct\|Medium} |
| Ready-built factory | USD 4.9 to 5.1 per m² a month | Q2 2026 | [@COST-21; @COST-22] {VN-direct\|Medium} |
| Production water | 16,625 VND per m³ all-in (Ho Chi Minh City) | Wastewater fees rise with COD load | [@COST-10; @COST-13; @COST-14] {VN-direct\|Medium} |
| Steam from rice-husk pellets | About 420 to 590 VND per kg of steam (fuel only) | Industrial LPG about 49,000 VND/kg | [@COST-15; @COST-16; @COST-17] {VN-direct\|Low} |
| Urea (nitrogen) | About USD 425 per t (Phu My, March 2026); world price spiked to USD 726 | Every microbial route on Vietnamese carbohydrate buys nitrogen | [@COST-30; @COST-33] {VN-direct\|Medium} |
| Cassava starch | USD 520 to 540 per t FOB (April 2026), up from 405 to 415 in January | Roots up about 75% in a year | [@FS-11; @FS-12] {VN-direct\|Medium} |
| Refined sugar, domestic | About 16,505 VND/kg (mid-2026), a three-year low | Surplus year | [@FS-31; @FS-33] {VN-direct\|Medium} |

**Three rule changes add risk.** A decree now lets the power utility adjust the average price by 2% to under 5% after a ministry review; a two-part tariff with a capacity charge is being shadow-billed to large users through 2026 and could apply from 2027 [@COST-04; @COST-05] {VN-direct|Medium}; and direct renewable power purchase is allowed but its savings (about 10% in one worked example) are unproven [@COST-06; @COST-07] {VN-direct|Low}.

**Feed is VAT-exempt, which is a hidden cost.** Under the VAT Law in force since July 2025, animal feed is "not subject to VAT" [@COST-24] {VN-direct|High}. A plant selling a feed protein therefore cannot reclaim the VAT it pays on equipment, power and inputs. We estimate this adds about 5 to 10% to its taxed input costs; a food-ingredient plant can reclaim input VAT {VN-direct|Low}.

## 9.2 Fermentation: capital is most of the cost

**Published benchmarks** (full list in `tea_benchmarks.csv`; read in full, in part or as abstracts, as recorded there) [@COST-43; @COST-44; @COST-45; @COST-46; @COST-47] {general|Medium}:

| Technology | Benchmark | Capex | Study |
|---|---|---|---|
| Mycoprotein (food) | USD 3.55 per kg wet; USD 29.6 per kg protein | About USD 108 M for 2 t/h wet | Risner et al. 2023 |
| Bacterial SCP from industrial off-gas (feed) | USD 4.15 per kg (2.78 if intensified) | USD 320 M for 20 kt a year | Vlaeminck et al. 2023 |
| SCP from hydrogen and CO2 (feed) | Minimum selling price USD 2,070 per t | n/a | Jean and Brown 2024 |
| SCP with renewable power | EUR 5.5 to 6.1 per kg protein (2028), falling to EUR 2.1 to 2.3 (2050) | n/a | Fasihi et al. 2025 |
| Cultivated meat | USD 37 to 51 per kg of wet cells | USD 663 M for 6.9 kt a year (perfusion) | Humbird 2021 |

**Capex varies seven-fold.** Per cubic metre of reactor, the off-gas SCP study implies about USD 51,000 and the mycoprotein study about USD 350,000; per annual tonne, USD 16,000 to 23,000 for SCP and mycoprotein and about USD 96,000 for cultivated meat (our derivation) [@COST-43; @COST-44; @COST-47] {general|High}. Design, hygiene grade and estimating method explain the spread. A Vietnamese plan needs its own equipment-level estimate, not a borrowed ratio.

{{chart:chart-capex-per-tonne}}

**Cooling in the tropics.** Aerobic fermentation releases about 12 to 18 MJ of heat per kg of dry biomass. In southern Vietnam, we assume cooling-tower water arrives at about 31 to 33 °C, too warm to hold a broth at 30 °C, so most cooling must come from chillers. Our indicative estimate of the penalty is USD 70 to 180 per tonne of dry biomass, about 2 to 4% of the cost of fungal feed protein. Strains that grow at 40 to 45 °C avoid most of it [@COST-50; @COST-51; @COST-52] {VN-direct|Low}. Earlier drafts said cooling "may offset" Vietnam's power advantage: that is partly true for the power bill, but because power is a small share of cost, the overall effect is modest.

### Cost stack A: fungal biomass protein for aquafeed, 10,000 t a year

| Line | USD per t product (low to high) | Basis |
|---|---|---|
| Carbon (2.0 to 2.2 t glucose-equivalent) | 600 to 1,100 | Assumed USD 300 to 500 per t |
| Nitrogen (0.17 to 0.20 t urea) | 72 to 145 | [@COST-30; @COST-33] |
| Minerals, vitamins, antifoam, enzymes | 50 to 150 | Assumption |
| Electricity, excluding cooling | 58 to 117 | [@COST-01; @COST-06] |
| Cooling electricity | 7 to 117 | Section 9.2 |
| Steam | 78 to 218 | [@COST-16; @COST-17] |
| Water and wastewater | 18 to 58 | [@COST-10; @COST-13; @COST-14] |
| Labour (60 to 100 staff) | 44 to 124 | [@COST-19; @COST-20] plus assumption |
| Land (5 to 8 ha) | 99 to 185 | [@COST-21] |
| Capital charge (capex USD 8,000 to 20,000 per annual t; 12 to 18% a year) | 960 to 3,600 | Below the verified benchmarks, allowing for cheaper local build |
| Maintenance and insurance | 240 to 800 | Assumption |
| **Total per t of product** | **2,227 to 6,612** | 58,000 to 172,000 VND/kg |
| **Total per t of protein (45 to 55% protein)** | **4,050 to 14,700** | |

Source: AltProtein Vietnam calculation from sourced inputs [@COST-01; @COST-19; @COST-21; @COST-33; @COST-43; @COST-44; @COST-47] {VN-direct\|Low}.

{{chart:chart-cost-stack-fungal}}

**Reading.** Capital charges and maintenance are 54% of cost at the low end and 67% at the high end. Labour and power together are under 10%. Two lines deserve attention:
- **Carbon.** At April 2026 cassava starch prices (USD 520 to 540 per t), the carbon line sits at or above the top of the assumed range once conversion to glucose is added. A near-free side stream such as cassava pulp would cut it, but needs pre-treatment and has almost no protein ([[ch02-asset-map]]). Domestic sugar at a three-year low is a clean alternative in surplus years.
- **Capex.** The product nears fishmeal parity only if capex falls below about USD 6,000 per annual tonne, which is well under any verified benchmark. Tolling on existing tanks ([[ch03-industrial-base]]) is the main way to get there.

## 9.3 The prices to beat in feed

Fishmeal (Peru 65%, the World Bank series) averaged USD 1,706 per tonne in 2025 and reached USD 2,500 in August 2026, the highest in the 2020 to 2026 series. Soybean meal was about USD 403 [@FM-01; @FM-02] {general|High}. On a protein basis, that is USD 2,625 to 3,846 per tonne for fishmeal and about USD 880 for soybean meal (our calculation).

| Target | Price to beat (USD per t protein) | Indicative Vietnamese cost (USD per t protein) | Gap at the low-cost end | Verdict |
|---|---|---|---|---|
| Bulk fishmeal replacement in shrimp feed | 2,625 to 3,846 | 4,050 to 14,700 | 1.54× (2025 price) to 1.05× (Aug 2026 price) | Marginal. Needs low capex, cheap carbon and a lasting fishmeal spike |
| Functional ingredient in pangasius feed, 1 to 2% inclusion | Buyer can pay about USD 1,000 to 4,250 per t of product for a 3 to 5% performance gain | 2,227 to 6,612 per t of product | Overlaps | Plausible with repeatable trial data; small volumes (20 to 50 kt a year at full uptake) |
| Functional-plus-protein ingredient in shrimp feed, 2 to 5% inclusion | Fishmeal parity plus USD 1,280 to 4,800 per t of product | as above | Overlaps | Most plausible entry point |
| Soybean meal replacement in pig and poultry feed | 796 to 876 | 4,050 to 14,700 | 4.6× to 5.1× | Not plausible for fermentation protein |

Source: [@FM-01; @FM-04; @FM-10; @FM-31] and cost stack A {VN-direct\|Low}. Arithmetic for the functional case: maximum ingredient price = soybean meal price + (performance gain × feed price) ÷ inclusion rate.

{{chart:chart-price-to-beat}}

**The real competitor is imported microbial protein, not fishmeal list prices.** A bacterial biomass from Chinese glutamic-acid fermentation, with at least 70% crude protein, is already imported and sold into Vietnamese pig, poultry, fish and shrimp feed [@FM-12; @ECO-69] {VN-direct|Medium}. Calysseo's 20,000 t a year FeedKind plant operates in Chongqing [@FM-13] {general|Medium}. By-product protein has near-zero marginal feedstock cost and can be priced anywhere between soybean-meal and fishmeal parity. Our working assumption is that a Vietnamese feed protein should plan to realise 70 to 90% of fishmeal-protein parity {VN-direct|Low}.

**Buyer economics.** Feed is 50 to 60% of shrimp production cost [@FM-10] {VN-direct|Medium}. At 15% inclusion, fishmeal adds about USD 256 per tonne of shrimp feed at the 2025 price and USD 375 at the August 2026 price (our calculation from [@FM-01]). Shrimp feed prices rose by VND 1,200 to 1,500 per kg in June 2026 [@FM-10] {VN-direct|Medium}. Mills are motivated to cut fishmeal, but they already use established substitutes (poultry by-product meal, fermented soy, soy protein concentrate) [@FM-04] {VN-direct|Medium}.

## 9.4 Plant-based food: factory cost is not the problem

### Cost stack B: textured soy protein, 3,000 t a year on one extrusion line

| Line | USD per t (low to high) | Basis |
|---|---|---|
| Raw material (imported soy flour or concentrate blend) | 566 to 1,391 | [@COST-28] plus assumed premiums |
| Electricity, steam, water | 20 to 61 | [@COST-01; @COST-16] |
| Labour (25 to 40 staff) | 62 to 165 | [@COST-19; @COST-20] plus assumption |
| Ready-built factory | 39 to 61 | [@COST-21; @COST-22] |
| Capital charge, maintenance, QA, packaging | 105 to 387 | Assumption (no verified extrusion capex found) |
| **Total per t** | **792 to 2,065** | 20,600 to 53,700 VND/kg |
| **Per 100 g of protein (50 to 55% protein)** | **3,700 to 10,700 VND** | |

Source: AltProtein Vietnam calculation [@COST-01; @COST-19; @COST-21; @COST-28] {VN-direct\|Low}.

**Retail protein prices to beat** (per 100 g of protein): at a national grocery chain on 23 September 2026, eggs 34,000 to 40,000 VND, chicken breast 39,500 to 45,500 and lean pork 63,000 to 69,500 [@COST-39; @COST-40; @COST-41] {VN-direct|Medium}; in our retail audit on 16 and 20 September 2026, tofu 39,000 to 77,000, dried soy mock meat about 51,000 and an imported plant-based burger about 542,000 [@COST-42] {VN-direct|Medium}.

{{chart:chart-retail-price-per-protein}}

**Reading.** Textured protein costs between about one-twentieth and one-third of the retail price of meat and egg protein to make. The gap is taken by distribution, brand and retail margins and by product quality. Raw material is about 70% of cost and is imported, so Vietnam's cost edge over a Thai or Chinese plant is small, perhaps USD 50 to 150 per tonne from labour and rent {VN-direct|Low}. The import it would replace is cheap: Chinese textured protein and concentrates entered Vietnam at about USD 1.6 per kg in 2023 (China-reported unit value, before freight and duty), inside our Vietnamese cost range [@FORM-05; @FORM-06] {VN-direct|Medium}. A domestic textured-protein plant competes on freshness, logistics, customisation for local dishes and supply security, and on replacing imported textured soy protein at scale ([[ch04-alt-protein-today]], [[ch11-plays]] play T1).

**Chicken and eggs set the floor.** Any plant-based product aimed at mass-market Vietnamese consumers is priced against chicken and eggs at about 34,000 to 46,000 VND per 100 g of protein [@COST-39; @COST-40] {VN-direct|Medium}. Imported premium analogues sit an order of magnitude above that.

## 9.5 Precision fermentation and cultivated meat

- **Precision fermentation.** We could not verify a peer-reviewed cost model for food proteins this round. The logic from the regional study still applies: in a 10,000 t a year precision-fermentation plant model, labour was 17% and utilities 4 to 5% of cost, and depreciation was the largest line [@RGN-01] {general|High}. For Vietnam, this favours high-value, low-dose products (enzymes, functional proteins, specialty ingredients) made under contract, not commodity dairy proteins ([[ch10-technology-fit]]).
- **Cultivated meat.** At USD 37 to 51 per kg of wet cells [@COST-47] {general|High}, cultivated meat costs roughly 7 to 15 times the retail price of lean pork or chicken breast in Vietnam (our calculation from [@COST-39; @COST-40]). With capex near USD 96,000 per annual tonne, there is no near-term production case for Vietnam; the case is for research and regulatory readiness ([[ch11-plays]] play T8).

## 9.6 What policy can change in the numbers

The regional study modelled incentives for representative plants and found that a 50% capital grant or non-dilutive funding raised company value the most (a reported NPV gain of USD 73 million), followed by a 10% cut in feedstock cost and a loan guarantee. Tax holidays ranked near the bottom [@RGN-01] {general|High}. In Vietnam's case, that points to:
- **Capital:** shared or tolled tanks, capital grants and loan guarantees rather than more tax holidays ([[ch12-policy-options]]).
- **Feedstock:** stable access to glucose from cassava starch or domestic sugar at fermentation grade.
- **Tax neutrality:** allowing new feed ingredients to reclaim input VAT.
- **Time:** every month of feed or food approval is carried as capital cost ([[ch05-rules]]).

## 9.7 What this means

- **Investors:** model capital charges, not operating costs. Test any feed-protein pitch against USD 2,625 to 3,846 per tonne of fishmeal protein, against Chinese by-product protein, and against capex per annual tonne (verified benchmarks: USD 16,000 to 23,000). A claim below USD 6,000 needs evidence.
- **Startups:** sell function, not tonnage. Choose thermotolerant strains or design for hybrid cooling from day one. Start texturing in a ready-built factory at about USD 5 per m² a month.
- **Manufacturers:** feed mills can buy functional ingredients at a premium only with species-specific trial data. Food makers can produce textured protein in Vietnam at a small fraction of meat's retail price; demand and quality are the constraints.
- **Policy makers:** the cheapest levers on cost are capital sharing (a public or tolled pilot line), input-VAT neutrality for new feed ingredients, and early signals on the capacity charge.
- **Research bodies:** two public goods are missing and cheap: an open Vietnamese fermentation cost model with local inputs, and a public series of domestic feed-ingredient prices.

**Related:** [[app-i-costs]] (full input tables, both cost stacks, benchmarks), [[app-h-feed-market]] (fishmeal, inclusion rates, trials), [[ch10-technology-fit]].
