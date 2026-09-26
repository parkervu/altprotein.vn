---
id: app-f3-frontier-tech
title: "F3. Frontier technology: evidence, costs and windows"
short_title: "F3. Frontier technology"
section: appendix
order: 63
summary: "The evidence and calculations behind chapter 21: an evidence card for each of eleven frontier routes, the energy, hydrogen, CO2 and cost arithmetic for protein from power in Vietnam, learning rates and cost paths, carbon prices and carbon cost per tonne of protein, AI and bio-design, approvals and capital, the research pipeline and the windows table. Every Vietnamese cost and window is our estimate from stated inputs, not a forecast."
audiences: [investors, startups, research, policy, manufacturers, international]
reading_time_min: 35
key_numbers: [kn-p2p-cost-vn-2050, kn-learning-rate-fermentation, kn-fungal-protein-floor, kn-p2p-energy-per-mt, kn-vn-gas-protein-papers]
related_data: [frontier_gas_tech.csv, vn_energy_inputs_2050.csv, co2_point_sources_vn.csv, frontier_bio_tech.csv, ai_biodesign_evidence.csv, approvals_trend.csv, learning_rates.csv, carbon_price_paths.csv, carbon_cost_per_protein.csv, feedstock_futures.csv, biblio_trends_frontier.csv, vn_research_profile.csv, frontier_windows.csv]
related_pages: [ch21-frontier-technology, ch09-economics, ch10-technology-fit, ch22-protein-balance-2050, ch23-scenarios-2050, ch28-robust-moves, app-s12-costs, app-s13-science, app-s7-research, app-s11-capital, app-s3-regional, app-s9-regulation, app-m2-futures-method, app-f2-drivers-signals, app-f6-aquafeed-feedstock-futures, app-r1-open-questions, app-r2-disagreements]
charts: [chart-frontier-windows, chart-cost-paths-2050]
---

# F3. Frontier technology: evidence, costs and windows

**What this appendix contains.** The detail behind [[ch21-frontier-technology]]: an evidence card for each of eleven frontier routes (F3.1); the arithmetic for protein made from renewable power in Vietnam (F3.2); learning rates and cost paths (F3.3); carbon prices and carbon cost per tonne of protein (F3.4); AI and bio-design (F3.5); approvals and capital (F3.6); the research pipeline (F3.7); and the windows table (F3.8).

**How to use it.** Read a route's card before pricing a deal or programme in it. Test any cost claim against F3.2 and F3.3. Use F3.8 for the condition that opens each window, and [[app-f2-drivers-signals]] for the signposts.

> **Method note.** Global cost paths are published models. Vietnamese costs are our calculations from three rerunnable scripts in `working-papers/wave3/`: `frontier_gas/ftg_estimates.py`, `econ_policy/ecf_calc.py` and `next_gen_feedstocks/ngf_calc.py`. The prices to beat are fishmeal protein at USD 2,625 (2025 average) to 3,846 (August 2026) per t and soybean-meal protein at about USD 880 per t [@FM-01] {general|High}. Every window is an estimate with conditions, not a forecast. Tags: [[app-m2-futures-method]].

---

## F3.1 Frontier map: one card per route

Each card gives the status in 2026, the largest plant, cost evidence, failures, Vietnam's base, the window and its conditions. Full registers: `frontier_gas_tech.csv`, `frontier_bio_tech.csv`, `feedstock_futures.csv`.

### F3.1.1 Power-to-protein (hydrogen-oxidising bacteria)

| Item | Evidence |
|---|---|
| Status 2026 | Food grade at technology readiness level (TRL) 7, approved in Singapore (2022), US notice filed May 2026; feed grade TRL 5 to 6 with no plant [@FTG-01; @FTG-03; @RGN-04] {general\|Medium} |
| Largest plant | Solar Foods, Finland: 160 to 230 t a year (company 160, press 230; we give both). A 3,200 t plant targets late 2028; the investment decision was pending in September 2026 [@FTG-04; @FTG-05] {general\|Medium} {fx:signal} |
| Cost evidence | EUR 4.0 to 4.5 per kg of protein (2030) and 2.1 to 2.3 (2050) at the best global sites [@FTG-01] {general\|High} {fx:projection} (Fasihi et al. published model). The 3,200 t plan implies about EUR 60,000 per annual t of product, several times the model's first-plant capex (our derivation) [@FTG-03] {general\|Low}. Vietnam: F3.2.4 |
| Failures | NovoNutrients closed and Arkeon became insolvent in 2025, both on capital intensity; Solar Foods made an operating loss of EUR 6.8 million in H1 2026 [@FTG-10; @FTG-11; @FTG-03] {general\|Medium} |
| Vietnam base | 2 of 494 papers (2016 to 2026); no project [@FTG-14] {VN-direct\|High} |
| Window | Bulk feed 2040 to 2045 at the earliest {VN-direct\|Low} {fx:estimate} |
| Conditions | The five conditions in F3.2.6 |

{{kn:kn-vn-gas-protein-papers}}

### F3.1.2 Methane and steel-gas protein

| Item | Evidence |
|---|---|
| Status 2026 | Methane protein TRL 8, approved for Chinese aquafeed (2024); steel-gas protein (*Clostridium autoethanogenum* protein, CAP) TRL 9 in China as an ethanol co-product, certified in 2021 [@FTG-06; @FTG-22] {VN-adjacent\|Medium} |
| Largest plant | Calysseo, Chongqing: 20,000 t a year, halted in 2026. Shougang LanzaTech made 10,200 t of protein in 2023, at 0.1 to 0.15 t per t of ethanol [@FTG-06; @FTG-08; @FTG-09] {VN-adjacent\|Medium}. Unibio plans 50,000 t in Saudi Arabia from 2028, with Asia as a target market [@FTG-07] {general\|Medium} {fx:signal} |
| Cost evidence | One model: USD 1.10 to 2.57 per kg of protein [@FTG-25] {general\|Low}. Our arithmetic: 1.7 kg of methane per kg of protein x 0.0526 MMBtu per kg = 0.089 MMBtu; at USD 8 to 14 per MMBtu (the top is MOIT's 2026 LNG basis) the gas alone costs USD 720 to 1,250 per t of protein, about the whole price of soybean-meal protein [@FTG-31] {VN-direct\|Low} |
| Failures | Calysseo: 2025 revenue USD 0.71 million, loss USD 15.5 million, loan not renewed; a 1990s Norwegian plant failed on the gas price; CAP's plan for 120,000 t more by 2026 was not met, with a minus 9.2% gross margin in H1 2024 [@FTG-06; @FTG-26; @FTG-08] {general\|Medium} |
| Vietnam base | No project. Hoa Phat burns its steel-mill gas for 80 to 90% of its power, so the gas has a power value [@FTG-20] {VN-direct\|Medium} |
| Window | Imported methane or CAP protein from about 2028; a CAP-type co-product only inside a steel-gas ethanol or aviation-fuel project, 2030s {VN-direct\|Low} {fx:estimate} |
| Conditions | Methane below about USD 5 per MMBtu; a feed-list entry; shrimp-feed buyers paying for function {VN-direct\|Low} |

### F3.1.3 Biomass fermentation on sugar and side streams

| Item | Evidence |
|---|---|
| Status 2026 | TRL 8 to 9; China approved mycoprotein for food in 2025 [@HSC-11] {VN-adjacent\|Medium} |
| Largest plant | Angel Yeast, 11,000 t a year of yeast protein (November 2025); Cabio with Nourish, about 170,000 t of finished-product capacity [@HSC-14; @HSC-13] {VN-adjacent\|Medium}. Enifer is building a 3,000 t PEKILO plant (Finland) and piloting on ethanol stillage (Brazil) [@NGF-17] {general\|Medium} {fx:signal} |
| Cost evidence | Vietnamese fungal feed protein USD 4,050 to 14,700 per t of protein at 2026 prices ([[ch09-economics]]); floor and cost paths in F3.3.2. A plant costing USD 100 million in the US costs about USD 15 million in China [@HSC-13] {VN-adjacent\|Medium} |
| Failures | Meati (US mycoprotein) failed in 2025 despite commercial output [@FTB-38] {general\|Medium} |
| Vietnam base | Thai Duong Feed JSC's 2016 to 2019 national project made yeast protein (above 46% protein) from cereals and molasses: 120 t of liquid product, a VND 167 billion line; status now unknown [@HSC-06; @HSC-07] {VN-direct\|Medium} |
| Window | Feed single-cell protein 2027 to 2030; food mycoprotein 2030 to 2035 {VN-direct\|Low} {fx:estimate} |
| Conditions | An aquafeed-list entry for microbial biomass and one anchor mill; a new-food route for food {VN-direct\|Low} |

### F3.1.4 Precision fermentation

| Item | Evidence |
|---|---|
| Status 2026 | High-value proteins TRL 8 to 9; dairy and egg proteins TRL 7 to 8. Four or more US "no questions" letters in 2025, one for a Chinese firm; approvals in F3.6.1 [@FTB-17; @FTB-18; @FTB-19] {general\|Medium} |
| Largest plant | Not disclosed in our sources |
| Cost evidence | Targets only, no model outputs (F3.3.4); economic now for high-value proteins such as lactoferrin (USD 750 to 1,500 per kg) [@FTB-23; @FTB-41] {general\|Medium} |
| Failures | Patent disputes over strains and proteins (Onego Bio and VTT, The EVERY Company, Fonterra, Perfect Day, Impossible Foods, Motif) [@FTB-17] {general\|Medium} |
| Vietnam base | 2 indexed papers (2015 to 2025); no food-grade contract fermentation; Decree 43/2026 sets first rules for genetically modified microbes in closed production [@HSC-01; @AQF-22] {VN-direct\|Medium} |
| Window | Contract manufacture of high-value proteins 2030 to 2035; commodity dairy and egg proteins 2035 to 2040 at the earliest {VN-direct\|Low} {fx:estimate} |
| Conditions | A first closed-production GMO certificate; clearance by reliance on US or Singapore decisions; regional food-grade contract capacity above 10 m3; patent expiries (F3.6.3) {VN-direct\|Low} |

### F3.1.5 AI-assisted bio-design and biofoundries

| Item | Evidence |
|---|---|
| Status 2026 | Media and process optimisation TRL 6 to 7; generative design of food proteins TRL 4 to 6; autonomous biofoundries TRL 5 to 6 (our judgement) [@FTB-04; @FTB-06; @FTB-08] {general\|Medium} |
| Largest facility | The acceleration results came from biofoundries (iBioFAB, Illinois), not from software alone [@FTB-05; @FTB-06] {general\|High} |
| Cost evidence | 1.6 to 30 times fewer experiments; no lower production cost at scale shown (F3.5.1) {general\|High} |
| Failures and limits | Adoption "far below the ceiling"; open data is "the binding constraint" [@FTB-01] {general\|High} |
| Vietnam base | Top-40 AI compute; no biofoundry (F3.5.2) {VN-direct\|Medium} |
| Window | Design now to 2030; domestic build-and-test 2030 to 2035 {VN-direct\|Low} {fx:estimate} |
| Conditions | A lab with a reliable assay and data scientists; access to a regional biofoundry; open data for public projects {VN-direct\|Low} |

### F3.1.6 Cellulosic (second-generation) sugar

| Item | Evidence |
|---|---|
| Status 2026 | TRL 7 to 8, but no plant has run reliably at design output. Every Western commercial cellulosic ethanol plant has shut, the last being Clariant's Podari plant (63 million litres a year, USD 258 million) in December 2023 [@NGF-33; @NGF-34] {general\|High} |
| Largest Asian plant | Panipat, India (about 200,000 t of straw a year): next to no output in year one, 62% of design in December 2025; three other Indian plants paused [@NGF-10; @NGF-11] {VN-adjacent\|Medium} |
| Cost evidence | Mature-plant models USD 342 to 467 per t of sugar; a lab-optimised Indian bagasse process USD 1,320 [@NGF-06; @NGF-07; @NGF-08] {general\|Medium}; Vietnamese cassava glucose USD 511 to 560 (April 2026) [@FS-11] {VN-direct\|Low}. First plants: USD 2,090 (Panipat) to 2,380 (Podari) per t of annual sugar capacity, about USD 3,400 per delivered t at 62% use (our derivation) {general\|Low} |
| Failures | As above. Not low-carbon by default: 1.57 kg CO2e per kg of bagasse sugar against 0.60 to 0.97 for Thai cassava starch [@NGF-08; @ECF-25] {general\|Low} |
| Vietnam base | No plant or pilot; enzyme costs still named as the barrier (June 2026); about 52 Mt of straw a year, 30% of Mekong straw collected [@NGF-31; @NGF-01; @NGF-04] {VN-direct\|Medium} |
| Window | Modest scale in the 2040s {VN-direct\|Low} {fx:estimate} |
| Conditions | An Asian straw-sugar plant above 80% of design for two years; a traded straw price; full straw collection on the 1 million ha rice programme by 2030 [@NTS-32] {VN-direct\|Medium} {fx:projection} (official target) |

Scale (our calculation, `ngf_calc.py`): the 2050 S-ALT sugar need of 1.32 Mt of glucose would take 3.0 to 4.3 Mt of straw (6 to 10% of national straw) and USD 2.8 to 4.5 billion of first-generation plants, 15 to 21 of Panipat's size {VN-direct|Low} {fx:estimate}. Feedstock cases: [[app-f6-aquafeed-feedstock-futures]].

### F3.1.7 One-carbon (methanol) routes

| Item | Evidence |
|---|---|
| Status 2026 | Methanol-fed *Pichia pastoris* at pilot scale in China: 0.43 g of biomass per g of methanol at 50.6% protein, about 4.6 t of methanol per t of protein [@NGF-13] {VN-adjacent\|Medium}; electro-microbial routes TRL 3 to 4 [@FTG-12; @FTG-13] {general\|Low} |
| Largest plant | A "10,000 t class" Chinese demonstration is referred to but not verified [@FTG-24] {VN-adjacent\|Low} |
| Cost evidence | e-methanol USD 800 to 2,400 per t today; USD 250 to 630 per t in 2050 (USD 287 to 724 per t of sugar equivalent) [@NGF-12] {general\|Medium} {fx:projection} (IRENA published model). Vietnam: USD 785 to 1,112 per t of sugar equivalent at 2026 hydrogen costs, USD 495 to 695 at USD 1.5 to 2 per kg of hydrogen, about cassava-glucose parity (our calculation) {VN-direct\|Low} {fx:estimate} |
| Failures | ICI's Pruteen was discontinued for financial reasons [@FTG-01] {general\|Medium} |
| Vietnam base | BSR at Dung Quat (Quang Ngai) researches methanol from captured CO2; no methanol-protein work [@FS-09] {VN-direct\|Low} |
| Window | 2040s, at modest scale {VN-direct\|Low} {fx:estimate} |
| Conditions | Hydrogen at USD 1.5 to 2 per kg; a Chinese feed certificate for methanol protein {VN-direct\|Low} |

Our calculation for 2050: supplying the S-ALT sugar need through methanol takes about 1.5 Mt of methanol, 0.29 Mt of green hydrogen (1.5 to 2.9% of the 2050 target) and about 16 TWh; about 49 MWh per t of protein, below direct hydrogen fermentation but with heavy cooling {VN-direct|Low} {fx:estimate}.

### F3.1.8 Cultivated meat and seafood

| Item | Evidence |
|---|---|
| Status 2026 | Meat TRL 6 to 7, seafood 5 to 6; seven companies cleared in Singapore, the US, Australia and New Zealand; Singapore cleared cultivated beef (4 August 2026); no EU authorisation [@FTB-24; @HSC-12; @FTB-45] {general\|Medium} |
| Largest plant | Vow, Sydney: 20,000 L; most firms below 1,000 L [@FTB-24] {general\|Medium} |
| Cost evidence | From USD 2.3 million per kg (2013) to about USD 63 per kg [@FTB-27]; media claims of USD 0.20 per litre against a peer-reviewed USD 0.63 [@FTB-24] {general\|Low}. 1% of world meat would need about 30 times the 2021 world culture capacity; pharmaceutical-grade media give 4 to 25 times beef's emissions [@FTB-26] {general\|High} |
| Failures | Believer Meats shut in December 2025 after FDA clearance; firms fell from 155 to 142; investment from about USD 1 billion (2021) to 73.9 million (2025) [@FTB-24; @FTB-45; @FTB-01] {general\|Medium} |
| Forecasts | A 54% chance that world output stays below 100,000 t a year through 2051 [@HSC-18] {general\|Medium} {fx:projection} (published probabilistic forecast); hybrids "may reach foodservice price points first within the decade", that is by about 2035 [@FTB-44] {general\|Medium} {fx:projection} (published review) |
| Vietnam base | 1 indexed paper (legal); VAST characterised bovine stem cells in 2025 [@HSC-01] {VN-direct\|Medium} |
| Window | Research only to 2035; seafood cells from Vietnamese species in the 2040s {VN-direct\|Low} {fx:estimate} |
| Conditions | A food-grade fish or shrimp cell line; peer-reviewed media below about USD 0.5 per litre; a novel-food route with reliance {VN-direct\|Low} |

### F3.1.9 Molecular farming

| Item | Evidence |
|---|---|
| Status 2026 | TRL 5 to 7; US plant-pest clearances in 2024 for soybean with pork proteins and pea with bovine myoglobin; no completed FDA food review found [@FTB-29; @FTB-31] {general\|Medium} |
| Cost evidence | About 50 to 300 kg of target protein per ha (our estimate: soybean at 1.5 to 3.5 t per ha x 38% protein x 80% soluble x 26.6% target, a company claim; maize myoglobin about 48 kg per ha) [@FTB-28] {general\|Low} |
| Failures | Moolec merged into Bioceres entities, one of over 40 sector closures and deals in 2024 to 2025 [@FTB-32] {general\|Medium} |
| Vietnam base | GM maize grown since 2015; duckweed germplasm; no project; 0 papers [@FTB-34; @HSC-01] {VN-direct\|Medium} |
| Window | Contained hosts for heme, enzymes or growth factors, 2035 to 2045 {VN-direct\|Low} {fx:estimate} |
| Conditions | A biosafety route under Decree 43/2026; a first foreign food approval {VN-direct\|Low} |

### F3.1.10 Cell-free protein synthesis

| Item | Evidence |
|---|---|
| Status and cost | Food TRL 2 to 3; largest scale-up 100 L; about USD 2.8 per mg at best, 5 to 6 orders of magnitude above food protein (about 8 for PURE systems at about USD 580 per mg) [@FTB-35; @FTB-36] {general\|Medium} |
| Vietnam base | None; low-cost teaching kits exist [@FTB-37] {general\|Medium} |
| Window | Prototyping now; bulk food not before 2050 {general\|Medium} {fx:wildcard} |

### F3.1.11 Algal and oilseed omega-3 (brief)

| Item | Evidence |
|---|---|
| Status | Commercial: a USD 200 million algal-oil plant (2019); omega-3 canola oil replaced all fish oil in low-fishmeal shrimp diets [@AQF-23; @AQF-19] {general\|Medium} |
| Vietnam base and window | Buyer only; 2026 to 2035 {VN-direct\|Low} {fx:estimate}. Detail in [[app-f6-aquafeed-feedstock-futures]] |

---

## F3.2 Power-to-protein in Vietnam: the arithmetic

Script: `ftg_estimates.py`. Results in F3.2.2 to F3.2.6 are our calculations {VN-direct|Low} {fx:estimate}.

### F3.2.1 Inputs

| Input | Value | Source |
|---|---|---|
| Electricity per t of protein | 2030 design: 69.3 MWh on baseload, 73 to 83 MWh generated from solar and wind (electrolysers 54 to 56%); 2050 design: 60.9 and 64 to 70 MWh | [@FTG-01] {general\|High} {fx:projection} (published model) |
| Hydrogen, CO2, ammonia per t of protein | 0.69 t (0.451 kg per kg of dry cells at 65% protein); 2.95 t; 0.24 t | [@FTG-01] {general\|High} |
| Capacity factors, Vietnam | Solar 17%; offshore wind 43 to 51.4% | [@FTG-19] {VN-direct\|Medium} |
| Solar farm density | 75 to 109 MW per km2 | [@FTG-01] {general\|Medium} |
| Plans for 2050 | Electricity 1,360 to 1,511 TWh; solar 293 to 296 GW; 240 GW of offshore wind for hydrogen and ammonia; power-sector emissions about 27 Mt (197 to 199 Mt in 2030) | [@FTG-15] {VN-direct\|High} {fx:projection} (official target) |
| Clean hydrogen targets | 100 to 500 kt (2030); 10 to 20 Mt (2050); no cost target | [@FTG-16] {VN-direct\|High} {fx:projection} (official target) |
| Grid factor | 0.6592 t CO2 per MWh (2023) | [@COST-08] {VN-direct\|High} |
| Solar cost | USD 29 to 85 per MWh (2030), 18 to 64 (2050); hurdle rates 8.5 to 16% | [@FTG-19] {VN-direct\|Medium} {fx:projection} (BloombergNEF published model) |
| Hydrogen cost, south | USD 2.81 to 2.85 per kg (6% discount rate; we treat it as a lower bound) | [@FTG-18] {VN-direct\|Low} |

Steps: TWh = t of protein x MWh per t / 1,000,000; solar GW = TWh x 1,000,000 / (8,760 x 0.17) / 1,000; land = MW / (75 to 109).

### F3.2.2 Energy, hydrogen, CO2, land and grid carbon

| Output | Design | TWh a year | Solar GW | or offshore wind GW | Solar land, km2 | H2, Mt | CO2, Mt |
|---|---|---|---|---|---|---|---|
| 100 kt of protein | 2030 | 7.3 to 8.3 | 4.9 to 5.6 | 1.6 to 2.2 | 45 to 74 | 0.069 | 0.30 |
| 1 Mt | 2030 | 73 to 83 | 49 to 56 | 16 to 22 | 450 to 743 | 0.69 | 2.95 |
| 100 kt | 2050 | 6.4 to 7.0 | 4.3 to 4.7 | 1.4 to 1.9 | 39 to 63 | 0.069 | 0.30 |
| 1 Mt | 2050 | 64 to 70 | 43 to 47 | 14 to 19 | 394 to 627 | 0.69 | 2.95 |

The 500 kt rows are in `working-papers/wave3/frontier_gas/frontier_gas.md`. Against the plans (our calculation from [@FTG-01; @FTG-15; @FTG-16]) {VN-direct|Low} {fx:estimate}:
- **1 Mt of protein a year** takes 4.2 to 6.1% of planned 2050 electricity, 15 to 19% of the 2050 solar plan and 3.5 to 6.9% of the 2050 hydrogen target.
- **100 kt a year** would take 14 to 69% of the whole 2030 hydrogen target.
- **All the protein in 2025 soybean-meal imports** (2.62 Mt) would need 168 to 218 TWh, 113 to 146 GW of solar (38 to 50% of the 2050 plan) and 1.8 Mt of hydrogen: physically possible, economically not (F3.2.4 and F3.2.5).
- **Land:** about 13 to 22 t of protein per ha of panels, over ten times any staple crop [@FTG-02] {general|Medium}.

**Grid carbon, electricity only:** about 46 t CO2 per t of protein at the 2023 factor; 24 to 28 t at the 2030 average implied by the power plan (0.35 to 0.40 t per MWh, an upper bound); 1.1 to 1.4 t in 2050 (0.018 to 0.020), if the plan's 27 Mt cap is met {VN-direct|Low} {fx:estimate}. Dedicated renewables are a precondition until about 2045.

{{kn:kn-p2p-energy-per-mt}}

### F3.2.3 CO2 point sources

From `co2_point_sources_vn.csv` (18 rows):

| Site (province) | Sector | CO2, t a year | Note | Source |
|---|---|---|---|---|
| Dung Quat steel, Hoa Phat (Quang Ngai) | Steel | about 17,000,000 (our derivation, 75% of group Scope 1) | Off-gas already burned for power | [@FTG-20] {VN-direct\|Low} |
| Hoa Phat, Hai Phong (former Hai Duong) and other sites | Steel | about 5,600,000 | As above | [@FTG-20] {VN-direct\|Low} |
| Three ethanol plants: Dung Quat (Quang Ngai), Dai Tan (Da Nang, former Quang Nam), Tung Lam (Dong Nai) | Fuel ethanol | about 82,000, 75,000 and 50,000 (our estimate) | Fermentation CO2, over 95% pure | [@FS-09] {VN-direct\|Low} |
| An Khe ethanol, Gia Lai (planned 2028) | Fuel ethanol | about 50,000 if built | As above | [@FS-09] {VN-direct\|Low} |
| Phu My (Ho Chi Minh City, former Ba Ria-Vung Tau), Ca Mau, Ha Bac (Bac Ninh, former Bac Giang) and Ninh Binh fertiliser plants | Ammonia and urea | Not found | Pure CO2, mostly used for urea; coal-based plants may have a surplus (our inference) | [@FTG-21] {VN-direct\|Low} |

Readings {VN-direct|Low}: the three ethanol plants release about 0.21 Mt a year, less than the 0.30 Mt that 100 kt of protein needs but enough for pilots up to about 70 kt; 1 Mt of protein needs about 13% of Hoa Phat's 2025 Scope 1 emissions (22.5 Mt), but that gas already makes power; volumes at fertiliser plants, refineries and Formosa Ha Tinh are unknown.

### F3.2.4 Cost estimates for 2030, 2040 and 2050

Method: electricity use x Vietnamese supply price (solar cost x 1.4 to 1.54 for balancing), plus the model's non-energy costs x 1.15 to 1.35 for a Vietnamese cost of capital of about 9 to 11%, against 7% in the model [@FTG-01; @FTG-19].

| Year | MWh per t of protein | Power, USD per MWh | Non-energy at 7%, USD per t | Result, USD per t of protein | Best global sites, USD per t |
|---|---|---|---|---|---|
| 2030 | 75 to 83 | 45 to 90 | 3,044 to 3,804 | 6,900 to 12,600 | 4,800 to 5,400 |
| 2040 | 70 to 78 | 32 to 70 | 2,100 to 2,340 (interpolated) | 4,700 to 8,600 | 3,720 to 4,200 (2035) |
| 2050 | 65 to 72 | 25 to 57 | 1,440 to 1,800 | 3,300 to 6,500 | 2,520 to 2,760 |

Vietnamese columns {VN-direct|Low} {fx:estimate}; best sites {general|High} {fx:projection} (Fasihi et al. published model, EUR x 1.2). On grid power at today's USD 75 per MWh, a 2030 plant would cost USD 8,700 to 10,300 per t and emit about 46 t CO2 per t {VN-direct|Low} {fx:estimate}. In the model, cost of capital plus or minus 2 points moves cost 12 to 15%; the high electrolyser-cost case adds only 3 to 6% [@FTG-01] {general|High}.

{{kn:kn-p2p-cost-vn-2050}}

### F3.2.5 Hydrogen-price sensitivity and parity

A plant buying hydrogen pays **about USD 690 per t of protein for each USD 1 per kg of hydrogen** (0.694 t per t). At USD 1, 2, 3 and 5 per kg the hydrogen line alone is USD 694, 1,388, 2,082 and 3,469 per t of protein; at USD 2 it exceeds the whole price of soybean-meal protein {general|High}.

**Breakeven delivered hydrogen price** (point-source CO2 at USD 20 to 50 per t; non-hydrogen costs at a Vietnamese cost of capital) {VN-direct|Low} {fx:estimate}:

| Price to beat, USD per t of protein | 2030 plant costs | 2050 plant costs |
|---|---|---|
| Soybean-meal protein, 880 | None | None |
| Fishmeal protein, 2025 average, 2,625 | None | USD 1.1 per kg or less, best case only |
| 80% of August 2026 fishmeal protein, 3,077 | None | USD 1.8 per kg or less, best case only |
| Fishmeal protein, August 2026, 3,846 | About USD 0.3 per kg, best case only | USD 0.7 to 2.9 per kg |

**Parity.** The Vietnamese cost reaches the fishmeal-protein band only at its low end and only around 2050, and never approaches soybean-meal protein under published projections {VN-direct|Low} {fx:estimate}. Today's Vietnamese hydrogen costs (USD 2.81 to 3.88 per kg) sit above most breakevens [@FTG-18] {VN-direct|Low}.

{{chart:chart-cost-paths-2050}}

### F3.2.6 The five conditions

> **Speculative.** Our judgement is that bulk feed protein from renewable power opens in Vietnam not before about 2040 to 2045, and only if all five conditions align {VN-direct|Low} {fx:estimate}.

| Condition | Threshold (our estimate) | What sources say | Earliest it might be met |
|---|---|---|---|
| 1. Delivered green hydrogen | About USD 1.5 to 2 per kg or less | USD 2.81 to 3.88 today; USD 3.05 (2030) and 1.59 (2050) cited [@FTG-18] | About 2045 to 2050 {VN-direct\|Low} {fx:estimate} |
| 2. Firmed renewable power | About USD 30 to 45 per MWh or less | Solar low end USD 29 (2030), 18 (2050) before balancing [@FTG-19] | Best sites 2030s; typical sites 2040s {VN-direct\|Medium} {fx:estimate} |
| 3. Capital | Plant near EUR 4,000 per annual t of protein; cost of capital about 8% or less | Model paths EUR 4,371 (2035, advanced) and 3,702 (2050); hurdle rates 8.5 to 16% [@FTG-01; @FTG-19] | 2035 with concessional finance, else 2050 {VN-direct\|Low} {fx:estimate} |
| 4. Price | Fishmeal protein above about USD 3,000 per t, sustained, or a carbon price on competing protein | No official fishmeal forecast beyond 2027; carbon market excludes agriculture [@GT-14; @REG-59] | Uncertain {VN-direct\|Low} {fx:estimate} |
| 5. Rules | Feed-list entry for bacterial biomass (MAE); new-food route (MOH) | Food Safety Law window 2026 to 2027 [@REG-12] | 2027 to 2030 {VN-direct\|Medium} {fx:estimate} |

Also needed: CO2 at USD 20 to 50 per t beside power and hydrogen (available now for pilots); and one hydrogen-route plant above 10 kt a year running two years abroad, not before about 2032 [@FTG-04] {VN-direct|Low} {fx:estimate}. **Earlier, narrower windows:** formulating imported, approved food ingredients from about 2028 if a new-food route exists; a CAP-type co-product in the 2030s; a 100 to 1,000 t research pilot on ethanol-plant CO2 now to 2030 {VN-direct|Low} {fx:estimate}.

---

## F3.3 Learning rates and cost paths

### F3.3.1 Learning-rate evidence

A 20% learning rate means unit cost falls 20% each time cumulative output doubles. Full table: `learning_rates.csv` (21 rows).

| Industry | Learning rate | Period | Source |
|---|---|---|---|
| Sugarcane ethanol, Brazil | 19% processing; 20% total cost | 1975 to 2005 | [@ECF-01; @ECF-02] {general\|Medium} |
| Corn ethanol, United States | 13% | 1983 to 2005 | [@ECF-01; @ECF-03] {general\|Medium} |
| Rapeseed biodiesel, Germany | 3% | 1991 to 2004 | [@ECF-02] {general\|Low} |
| Lignocellulosic ethanol, biomass diesel | 1 to 2% (bottom-up estimates, not observed) | Forward | [@ECF-02] {general\|Low} |
| Cellulosic ethanol, US planning assumption | 10 to 25% (assumed) | 2022 outlook | [@ECF-01] {general\|Low} |
| Solar, wind, batteries | Costs fell near 10% a year | About 1990 to 2020 | [@ECF-05] {general\|High} |
| Any alternative protein | **None found**: 9 works combine the terms (2015 to 2026), none empirical | 2015 to 2026 | [@ECF-09] {general\|Medium} |

Complex, site-built and customised plants learn more slowly than mass-produced panels and cells [@ECF-10; @ECF-11] {general|High}. We use 5 to 20% on capital cost and treat solar-style curves for fermented protein as unsupported {general|Medium} {fx:trend}. Big historic bioprocess cost falls came from titre and yield (penicillin titres rose 225-fold in 1941 to 1944), not from building identical plants [@ECF-06] {general|Medium}.

{{kn:kn-learning-rate-fermentation}}

### F3.3.2 Fungal feed protein: floor and planning range

Script: `ecf_calc.py`, part A. Learning applies only to capital charge and maintenance in the supply chapters' cost stack A (10,000 t a year; [[ch09-economics]]); glucose, urea, power, labour and land stay at 2026 real prices.

| Input, USD per t of product (2026) | Low-cost end | High-cost end |
|---|---|---|
| Total cost | 2,227 | 6,612 |
| Capital charge | 960 (12% a year) | 3,600 (18% a year) |
| Maintenance | 240 | 800 |
| Operating cost | 1,027 | 2,212 |
| Protein content | 55% | 45% |
| **Floor with free capital, USD per t of protein** | **1,867** | **4,916** |

| Scenario | Learning rate | Doublings of global capacity by 2030 / 2040 / 2050 | 2030 | 2040 | 2050, USD per t of protein |
|---|---|---|---|---|---|
| Slow | 5% | 1 / 3 / 4 | 3,940 to 14,200 | 3,740 to 13,300 | 3,640 to 12,880 |
| Central | 12% | 2 / 4 / 6 | 3,560 to 12,490 | 3,180 to 10,780 | 2,880 to 9,460 |
| Fast | 20% | 3 / 6 / 8 | 2,980 to 9,920 | 2,440 to 7,480 | 2,230 to 6,560 |

All rows: our calculation {VN-direct|Low} {fx:estimate}. Eight doublings (256 times today's capacity) is an outer bound.

**Planning range** {VN-direct|Low} {fx:estimate}: about USD 3,000 to 12,500 per t of protein in 2030, 2,400 to 10,800 in 2040 and 2,200 to 9,500 in 2050 (fast-case low end to central-case high end). The low end needs cheap capital, residue carbon and a heat-tolerant strain.
- **The floor, not learning, settles the soybean question**: about USD 1,870, 2.1 times soybean-meal protein.
- **Fishmeal parity needs fast learning or cheap capital.** The low end is below the August 2026 fishmeal-protein price from 2030 (central and fast cases) or 2040 (slow); it reaches the 2025 average (USD 2,625) only in the fast case, around 2040.

{{kn:kn-fungal-protein-floor}}

### F3.3.3 Capital-charge sensitivity

| Case | Change | Result with no learning, USD per t of protein | Comparable learning result |
|---|---|---|---|
| Low-cost end | Capital charge 12% cut to 9% a year | 3,613 (from 4,049) | Central case in 2030 (3,557, two doublings); the slow case does not reach it by 2050 (3,640) |
| High-cost end | 18% cut to 12% | 12,027 (from 14,693) | Central case in 2030 (12,490) |

Our calculation {VN-direct|Low} {fx:estimate}. Cheaper capital does as much as the central case's learning to 2030, with no technology risk, which is why concessional debt and guarantees are first-order levers; capital grants and guarantees also beat tax holidays in the regional evidence [@RGN-01] {VN-adjacent|Medium}.

### F3.3.4 Precision-fermentation cost evidence

| Item | Value | Source |
|---|---|---|
| Cost targets, food proteins | USD 10 per kg by 2025, USD 1 per kg by 2035 ("envisaged", not modelled) | [@FTB-23] {general\|Medium} {fx:projection} (published target) |
| Peer-reviewed food-protein cost model, 2024 to 2026 | None found; a 2026 lactoferrin preprint was withdrawn | [@FTB-23] {general\|Medium} |
| Conventional lactoferrin | USD 750 to 1,500 per kg | [@FTB-41] {general\|Low} |
| Titre | Best published leghemoglobin 10.1 g/L against an "above 50 g/L" benchmark ([[app-s13-science]]) | {general\|Medium} |
| Continuous processing | Three times productivity, half the cost at 3,000 L (company claim) | [@FTB-17] {general\|Low} |

Our reading: high-value proteins pay now; functional dairy and egg proteins in premium blends in 2030 to 2035; commodity use only if costs near USD 1 to 2 per kg, which no published data yet support {general|Low} {fx:estimate}.

---

## F3.4 Carbon

### F3.4.1 Carbon price paths

Full table: `carbon_price_paths.csv` (19 rows).

| Jurisdiction and instrument | Year | USD per t CO2e | Source |
|---|---|---|---|
| Vietnam, pilot trading (110 power, steel and cement plants) | 2025 to 2028 | Not published | [@ECF-12; @ECF-13] {VN-direct\|Medium} |
| Vietnam, World Bank recommended carbon tax | 2030; 2040 | 29; 90 | [@CLM-18] {VN-direct\|Medium} {fx:projection} (published recommendation) |
| EU emissions trading | 2025 | 83 to 84 | [@ECF-15] {general\|High} |
| China national emissions trading | 2025 | 9.85 | [@ECF-16] {VN-adjacent\|High} |
| Korea emissions trading | 2025 | 6.6 to 7.0 | [@ECF-17] {VN-adjacent\|High} |
| Japan GX-ETS floor to ceiling (mandatory from April 2026) | FY2027 | 11.36 to 28.73 | [@ECF-18] {VN-adjacent\|High} {fx:projection} (official target) |
| Singapore carbon tax (S$45; S$50 to 80) | 2026; 2030 | 34; 38 to 61 | [@ECF-19] {VN-adjacent\|High} {fx:projection} (official target) |
| World Bank corridors (well below 2 °C; 1.5 °C) | 2030 | 63 to 127; 226 to 385 | [@ECF-20] {general\|Medium} {fx:projection} (published model) |

**Vietnam's scheme.** Decision 263/QD-TTg (9 February 2026) set pilot quotas above 243 Mt CO2e (2025) and 268 Mt (2026), offsets up to 30% and first surrender by 31 December 2027; full operation starts in 2029 [@ECF-13; @REG-59] {VN-direct|Medium} {fx:projection} (official target). No price is published and agriculture and food are outside, so no feed or food plant faces a domestic carbon price before 2029 {VN-direct|Medium} {fx:signal}. Asian prices in 2025 were about one-eighth of the EU's.

### F3.4.2 Carbon cost per tonne of protein

Carbon cost = emission factor x price. It applies only if a price reaches embodied emissions; none does today. Script: `ecf_calc.py`, parts B and C; full table `carbon_cost_per_protein.csv` (14 rows).

| Input | t CO2e per t of product | USD per t of protein at USD 25 / 50 / 100 | Source |
|---|---|---|---|
| Soybean meal, Argentina, no land-use change | 0.72 | 39 / 78 / 157 | [@ECF-21; @ECF-22] {general\|Medium} |
| Soybean meal, Argentina, with country-level land-use change | 4.09 | 222 / 445 / 889 | [@ECF-22] {general\|Medium} |
| Soy, Brazil exports (average; frontier up to six times) | 0.69; about 4.1 | 38 / 75 / 150; 225 / 450 / 900 | [@ECF-23] {general\|High} |
| Fishmeal, Peru, delivered to China | 0.53 to 0.56 | 20 to 22 / 41 to 43 / 82 to 86 | [@ECF-24] {general\|High} |
| Cassava-based fungal protein, Vietnam, 2023 grid | 2.06 to 5.26 (3.8 to 11.7 per t of protein) | 94 to 292 / 188 to 585 / 375 to 1,170 | Our estimate [@ECF-25; @ECF-26] {VN-direct\|Low} |
| Same, 2050 plan grid | 1.49 to 3.28 (2.7 to 7.3 per t of protein) | 68 to 182 / 135 to 365 / 271 to 729 | Our estimate {VN-direct\|Low} {fx:estimate} |
| Protein from power, electricity only, 2023 / 2050 grid | 46 / 1.1 to 1.4 per t of protein | at USD 50: 2,300 / 55 to 70 | Our estimate {VN-direct\|Low} {fx:estimate} |

Fungal footprint inputs per t of product (our assumptions): 2.0 to 2.2 t of glucose at 0.65 to 1.10 t CO2e per t (Thai cassava starch plus hydrolysis); 0.17 to 0.20 t of urea at 1.0 to 2.5 t CO2e per t; 0.9 to 3.1 MWh of power; husk steam counted as biogenic; biogas captured; 45 to 55% protein.

### F3.4.3 What a carbon price does and does not change

- **For soy, the accounting method is the price.** At USD 50 per t, soybean-meal protein gains USD 75 to 78 per t without land-use change (9% of its price) but USD 445 to 480 with it (about half). For Argentine meal, 69% of Vietnam's imports, the two factors differ five-fold; we give both and do not average them {general|Medium}.
- **It barely touches fishmeal:** USD 41 to 43 per t of protein at USD 50, 1 to 2% of the price. Scarcity drives the fishmeal gap, not carbon [@ECF-24] {general|Medium}.
- **It can hurt a cassava-based microbial protein**, which emits more than fishmeal (0.8 to 0.9 t per t of protein) and soybean meal without land-use change (1.6). Residue carbon, biogas and clean power come first {VN-direct|Low} {fx:estimate}.
- **Protein from power flips from worst to best only on a clean grid**, around 2045 to 2050 {VN-direct|Low} {fx:estimate}.
- **Nothing prices embodied feed emissions.** The EU border carbon mechanism covers urea and hydrogen, both fermentation inputs, but not food or feed [@ECF-15] {general|High}. Buyers' scope 3 targets are the likelier channel, 2030 to 2040 {general|Medium} {fx:signal}.
- **Credits are not a financing route; green-debt labels are.** No approved protein-substitution method was found; the Climate Bonds Initiative launched Alternative Proteins criteria in 2025 [@ECF-27; @ECF-28] {general|Low}.

---

## F3.5 AI and bio-design

### F3.5.1 Demonstrated and claimed

Full table: `ai_biodesign_evidence.csv` (21 rows).

| Application | Result | Status | Source |
|---|---|---|---|
| Serum-free medium, 14 components | 181% more cells at about the same cost; 38% fewer experiments than an efficient design of experiments | Demonstrated, lab | [@FTB-02] {general\|High} |
| Cost and growth trade-off | 23% more growth at 62.5% of the cost | Demonstrated | [@FTB-03] {general\|High} |
| *Pichia* protein production and cell media | 3 to 30 times fewer experiments than standard design | Demonstrated | [@FTB-04] {general\|High} |
| Autonomous enzyme engineering | Feed phytase 26 times more active at neutral pH in 4 weeks, under 500 variants | Demonstrated (abstract) | [@FTB-06] {general\|Medium} |
| Generative design | Working artificial lysozymes; a fluorescent protein at 58% identity to known ones | Demonstrated | [@FTB-07; @FTB-08] {general\|Medium} |
| Counter-evidence | Bayesian optimisation only "rivals" expert design | Preprint | [@FTB-46] {general\|Low} |
| Sector review | No good estimate of time saved; open data "the binding constraint" | Independent (June 2026) | [@FTB-01] {general\|High} |
| Media costs of USD 0.07 to 0.20 per litre; "years to weeks" | Not published or not quantified | Company claims | [@FTB-01; @FTB-12] {general\|Low} |

**Reading.** Gains are real but narrow: about 1.6 to 30 times fewer experiments for specific problems. None lowers production cost at scale, and none removes Vietnam's bottlenecks: rules, shared pilot plant, feedstock conversion and scale-up capital {general|Medium}.

### F3.5.2 Compute, policy and the missing biofoundry

| Item | Detail | Source |
|---|---|---|
| AI Law 134/2025/QH15 | In force 1 March 2026; a national computing centre, an AI fund, open data and a sandbox; no biotechnology line in the summary read | [@FTB-13; @FTB-14] {VN-direct\|Medium} |
| AI Strategy, Decision 1671/QD-TTg (28 August 2026) | By 2030: about 1,100 EFLOPS (FP8), 500 MW of AI data centres, 10,000 advanced AI experts; AI in breeding, livestock and aquaculture; no fermentation or biofoundry | [@FTB-48] {VN-direct\|Medium} {fx:projection} (official target) |
| Compute | FPT AI Factory 38th on the June 2025 TOP500 (46.65 petaflops); Viettel DGX B200 from February 2026 with shared research access | [@FTB-15; @FTB-16] {VN-direct\|Medium} |
| Biotechnology policy | Draft 2026 to 2030 strategy names "bioinformatics and AI"; Directive 13/CT-TTg asks MAE for biotechnology clusters by December 2026; neither names fermentation | [@FTB-49; @FTB-50] {VN-direct\|Medium} {fx:signal} |
| Biofoundry | None found in Vietnam; no Vietnamese member on the visible Global Biofoundry Alliance list | [@FTB-11] {VN-direct\|Medium} |
| Neighbours | Thailand: synthetic biology strategy and a GMP food pilot plant; Korea: open K-Biofoundry and a synthetic biology law; India: a fermentation biofoundry for "smart proteins" | [@FTB-43; @FTB-42; @FTB-12; @ECF-33; @FTB-17] {VN-adjacent\|Medium} |

**Reading.** Compute is no longer the constraint; wet-lab automation, data and bio-ML people are {VN-direct|Medium}. Design in Vietnam, build and test in a Korean, Singapore or Chinese biofoundry, is the cheap route to 2030 {VN-direct|Low} {fx:estimate}.

---

## F3.6 Approvals and capital

### F3.6.1 Approvals

Novel-protein approvals counted from the approvals register (Singapore, US, Israel, Australia and New Zealand, China; 2026 to 14 August) [@RGN-03; @RGN-04] {general|High}:

| Year | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 (part) |
|---|---|---|---|---|---|---|---|---|
| All | 1 | 1 | 1 | 3 | 4 | 3 | 9 | 3 |
| Cultivated | 0 | 1 | 0 | 1 | 3 | 1 | 5 | 2 |
| Precision fermentation | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 |

Not counted: 2025 US letters for beta-lactoglobulin (Vivici; Shanghai Changing Biotechnology), lactoferrin (TurtleTree), ovalbumin (Onego Bio) and whey (Verley), with some dates in conflict; a proposed rule to end self-affirmed GRAS; 2024 US molecular-farming clearances; Korea's cell-cultured food standards (June 2026) [@FTB-18; @FTB-19; @FTB-31; @FTB-20] {general|Medium}. Vietnam has no new-food route and no approvals [@FTB-34] {VN-direct|Medium}. Full list: `approvals_trend.csv` (44 rows).

### F3.6.2 Capital

| Measure | Value | Source |
|---|---|---|
| Private alternative-protein investment, 2025 | USD 881 million (plant-based 450, fermentation 357, cultivated 74); down 20%, the first year below USD 1 billion in 7 years; over USD 19.5 billion since 2017 | [@ECF-44; @HSC-10] {general\|Medium} |
| Fermentation | USD 632 million (2024) to 357 million (2025); precision share 33% (2023) to 66% (2025) | [@FTB-17] {general\|Medium} {fx:trend} |
| Cultivated | About USD 1 billion (2021) to 73.9 million (2025) | [@FTB-24; @FTB-01] {general\|Medium} {fx:trend} |
| Public | At least USD 2.5 billion (2021 to 2025) across 33 countries; China nearly USD 1 billion in 2025; US federal USD 115 million (2024) to 11 million (2025); Vietnam absent | [@ECF-43] {general\|Medium} |

Advocacy data; we found no independent projection to 2050 and give none.

### F3.6.3 Patents expiring in the mid-2030s

Core families behind heme meat analogues (Impossible Foods, e.g. family 54241231; heme secretion filed September 2014) and animal-free dairy (Perfect Day, family 54105986) were filed in 2013 to 2016, so the earliest members lapse around 2033 to 2036 on a 20-year term (our estimate, not a freedom-to-operate analysis) [@FTB-21] {general|Low} {fx:estimate}. Continuations extend some protection. Vietnam's only linked filing is a 2019 US application on yeast biomass [@HSC-06] {VN-direct|Low}; its route to 2040 is process know-how on local feedstocks and strains [@HSC-01] {VN-direct|Low} {fx:estimate}.

### F3.6.4 Distressed equipment

| Asset | What happened | Source |
|---|---|---|
| Meati (US mycoprotein) | 300,000 L of capacity valued at USD 15 to 20 million sold for USD 75,000 in 2026, going to India | [@FTB-38] {general\|Medium} |
| NovoNutrients (US) | Closed 2025; assets for sale | [@FTG-10] {general\|Medium} |
| Believer Meats (US) | USD 154 million plant shut December 2025; status since unknown | [@FTB-24; @FTB-45] {general\|Medium} |
| Calysseo (China) | 20,000 t plant halted 2026 | [@FTG-06] {VN-adjacent\|Medium} |

Cheap second-hand tanks cut capital more than any learning curve before 2030, until the cycle turns {general|Medium} {fx:signal}. Clear customs and tax rules for used fermenters would let a Vietnamese feed venture use this in 2027 to 2030 ([[ch28-robust-moves]], RM-15) {VN-direct|Low} {fx:estimate}.

---

## F3.7 Research pipeline

### F3.7.1 Global growth by field

OpenAlex articles and reviews; keyword lower bounds; 2026 to 24 September [@HSC-01] {general|Medium} {fx:trend}.

| Field | 2015 | 2020 | 2025 | 2026 (part) | Growth a year, 2020 to 2025 |
|---|---|---|---|---|---|
| Precision fermentation | 8 | 9 | 188 | 234 | 84% |
| AI with food or alternative protein | 0 | 4 | 89 | 127 | 86% |
| Plant-based meat (reference) | 38 | 181 | 905 | 682 | 38% |
| Mycoprotein | 10 | 23 | 100 | 101 | 34% |
| Cultivated meat and seafood | 35 | 133 | 508 | 409 | 31% |
| Gas or CO2-based microbial protein | 6 | 24 | 62 | 58 | 21% |
| Single-cell protein | 52 | 101 | 235 | 221 | 18% |
| Molecular farming of food proteins | 0 | 0 | 3 | 2 | n/a |

All OpenAlex articles and reviews grew about 0.9% a year (2015 to 2025). Fields with approvals behind them grow fastest; gas fermentation and molecular farming stay thin.

### F3.7.2 Vietnam's position

| Measure | Vietnam | Comparators | Source |
|---|---|---|---|
| Core basket per 10,000 national publications, 2015 to 2025 | 4.1 (72 works) | Thailand 13.4; Singapore 10.3; Philippines 5.6; Malaysia 5.4 | [@HSC-01] {VN-direct\|Medium} |
| Cultivated; precision fermentation; mycoprotein; molecular farming; duckweed protein (2015 to 2025) | 1; 2; 0; 0; 1 | Thailand 16; 7; 2; 8; 39 | [@HSC-01] {VN-direct\|Medium} |
| Gas-fermentation protein, 2016 to 2026 | 2 of 494 | China 105; US 64; Denmark 47 | [@FTG-14] {VN-direct\|High} |
| AI with alternative protein, 2016 to 2026 | 2 (reviews) | US 69; China 54; India 48 | [@FTB-10] {VN-direct\|Medium} |
| Protein design, 2019 to 2026 | 46, from 2 (2020) to 19 (2026, part) | Singapore 208; Thailand 130 | [@FTB-10] {VN-direct\|Medium} {fx:trend} |
| Screened genuine supply-side works | 7 (2015 to 2019), 9 (2020 to 2022), 13 (2023 to 2025), 11 (2026, part) | Raw counts overstate about twofold (40 of 91 genuine) | [@HSC-01] {VN-direct\|Medium} {fx:trend} |

**Intensity.** Vietnam's alternative-protein research intensity is about a quarter to a third of Thailand's, depending on the database: 4.1 against 13.4 works per 10,000 in OpenAlex, about a quarter in OpenAIRE [@HSC-01; @BIB-01] {VN-direct|Medium}. The two databases agree, so we give the range.

**Who does the work.** Before 2025, mostly aquafeed trials with Australian partners; in 2025 to 2026, mostly domestic food technology (IUH, HUIT, HCMUTE, Phenikaa, VAST), about 70% without foreign co-authors [@HSC-01] {VN-direct|Low} {fx:signal}. At about 20% a year, output would reach about 100 works a year by 2035, roughly Thailand's 2025 level; a mechanical extrapolation, not a forecast [@HSC-01] {VN-direct|Low} {fx:estimate}. Institutions and partners: [[app-s7-research]].

---

## F3.8 Windows for Vietnam

From `frontier_windows.csv` (11 rows). Plays: [[ch26-plays]].

| ID | Route | Window | Condition that opens it | Plays | Evidence |
|---|---|---|---|---|---|
| FW-01 | AI-assisted design of feed enzymes and yeast media | 2026 to 2030 | Shared wet-lab and data access | T2 | [@FTB-06; @FTB-11] {VN-direct\|Low} {fx:estimate} |
| FW-02 | Single-cell feed protein on sugar and side streams, possibly in second-hand tanks | 2027 to 2030 | A feed-list entry and one anchor buyer | T2, T3 | [@HSC-06; @FTB-38] {VN-direct\|Low} {fx:estimate} |
| FW-03 | Formulating imported, approved novel food ingredients | 2028 to 2035 | A new-food route in the Food Safety Law | P1 | [@REG-12; @FTG-03] {VN-direct\|Low} {fx:estimate} |
| FW-04 | Contract precision fermentation of high-value proteins | 2030 to 2035 | New-food route; open pilot plant; patent expiries | T5, T7 | [@FTB-18; @FTB-21] {VN-direct\|Low} {fx:estimate} |
| FW-05 | Food mycoprotein | 2030 to 2035 | New-food route; food-grade pilot plant | T9 | [@HSC-14] {VN-direct\|Low} {fx:estimate} |
| FW-06 | Algal and oilseed omega-3 in aquafeed, as buyer | 2026 to 2035 | Fish-oil price; feed specifications | T2 | [@AQF-19; @AQF-23] {VN-direct\|Low} {fx:estimate} |
| FW-07 | Contained molecular farming | 2035 to 2045 | Biosafety route under Decree 43/2026 | none | [@FTB-31; @AQF-22] {VN-direct\|Low} {fx:estimate} |
| FW-08 | Cellulosic and one-carbon sugar at modest scale | 2040 to 2050 | A working Asian straw plant; hydrogen at USD 1.5 to 2 per kg | T4 | [@NGF-11; @NGF-12] {VN-direct\|Low} {fx:estimate} |
| FW-09 | Cultivated seafood cells from Vietnamese species | 2040 to 2050 | Cell lines and media costs from abroad | T8 | [@FTB-24; @HSC-01] {VN-direct\|Low} {fx:estimate} |
| FW-10 | Bulk feed protein from renewable power | 2040 to 2050 (not before about 2040 to 2045) | The five conditions in F3.2.6 | none | [@FTG-01; @FTG-03] {VN-direct\|Low} {fx:estimate} |
| FW-11 | Cell-free synthesis for food | Not before 2050 | A cost fall of several orders of magnitude | none | [@FTB-35] {general\|Medium} {fx:wildcard} |

{{chart:chart-frontier-windows}}

**Readings** {VN-direct|Low} {fx:estimate}:
- **The windows open in sequence**: feed ingredients and design work to 2030, food ingredients and contract fermentation in 2030 to 2035, new carbon and seafood cells in the 2040s, bulk protein from power last.
- **Rules open more windows than technology does.** FW-02 to FW-05 all wait on a feed-list entry or a new-food route, both decided in Vietnam in 2026 to 2030.
- **The late windows depend on inputs Vietnam can prepare now**: residue carbon, clean power at named sites, cheap capital and process skills ([[ch28-robust-moves]]).

---

## F3.9 Gaps and open questions

For [[app-r1-open-questions]]; source conflicts are in [[app-r2-disagreements]].

| # | Gap | Cheapest way to close it |
|---|---|---|
| 1 | Vietnamese grid cells in the Fasihi et al. global model, to replace our indicative power-to-protein cost | Download the model's source data and extract Vietnam |
| 2 | CO2 volumes and purity at fertiliser plants, refineries, Formosa Ha Tinh and cement plants | Company sustainability reports; MAE's facility emissions inventory |
| 3 | Industrial pipeline gas price, for methane protein | A 2026 quote from PV GAS or Gas South |
| 4 | Status of Vietnamese green hydrogen projects (the IEA lists a 240 MW electrolyser at investment decision; press shows the first plant stalled) | IEA hydrogen projects database; MOIT; provincial portals |
| 5 | Feed-list status of bacterial biomass, CAP and methanotroph meal | One call to MAE's livestock and fisheries departments |
| 6 | Operating status of Thai Duong Feed's yeast-protein line | MAE feed lists; the company; NASATI report 16724/2019 |
| 7 | Observed first-plant capex for microbial protein, and a global capacity baseline to anchor the doublings in F3.3.2 | Solar Foods, Unibio and Chinese exchange filings; GFI capacity data |
| 8 | Vietnamese life-cycle data for cassava starch, glucose and fermentation | Data from a starch plant with biogas; the 2015 Tran et al. paper in full |
| 9 | Vietnam's carbon price and post-2028 scope | HNX notices; MAE climate change department |
| 10 | Peer-reviewed titres and cost models for precision-fermented dairy and egg proteins | Targeted journal search |
| 11 | Biofoundry access terms for Vietnamese teams; the AI Law's decrees on computing-centre access | Quotes from K-Biofoundry and A*STAR; ask MOST |
| 12 | Tropical cooling penalty for hydrogen and methanol routes (chillers are 8% of power at 30 °C in the model) | Model inputs with Vietnamese wet-bulb data |

---

## Data files

- `frontier_gas_tech.csv` (10 rows): gas and electro-fermentation routes, costs and Vietnam conditions.
- `vn_energy_inputs_2050.csv` (50 rows): power, hydrogen and grid inputs to 2050, with our derived needs and costs.
- `co2_point_sources_vn.csv` (18 rows): CO2 point sources by site.
- `frontier_bio_tech.csv` (14 rows): bio-design, precision fermentation, cultivated, molecular farming, cell-free and biomass routes.
- `ai_biodesign_evidence.csv` (21 rows): AI and automation results, demonstrated or claimed.
- `approvals_trend.csv` (44 rows): approval and policy items (2024 to 2026) and yearly approval counts.
- `learning_rates.csv` (21 rows): learning rates and our fungal-protein cases.
- `carbon_price_paths.csv` (19 rows): carbon prices and paths.
- `carbon_cost_per_protein.csv` (14 rows): emission factors and carbon cost per t of protein.
- `feedstock_futures.csv` (17 rows): residue, side-stream and one-carbon sources to 2050.
- `biblio_trends_frontier.csv` (325 rows): OpenAlex counts by topic, country and year, with queries.
- `vn_research_profile.csv` (53 rows): Vietnam's research counts, institutions and partners.
- `frontier_windows.csv` (11 rows): the windows table in F3.8.

**Related:** [[ch21-frontier-technology]], [[ch09-economics]], [[ch10-technology-fit]], [[ch22-protein-balance-2050]], [[ch28-robust-moves]], [[app-s12-costs]], [[app-s13-science]], [[app-s7-research]], [[app-s11-capital]], [[app-f6-aquafeed-feedstock-futures]], [[app-f2-drivers-signals]], [[app-m2-futures-method]]
