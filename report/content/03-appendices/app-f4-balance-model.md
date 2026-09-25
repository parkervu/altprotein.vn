---
id: app-f4-balance-model
title: "F4. The protein and feed balance model"
short_title: "F4. Balance model"
section: appendix
order: 64
summary: "The documentation behind chapter 22: what the protein and feed balance model covers, the published projections and targets it uses, its steps and parameters, the four scenarios, full results by scenario and year, the sensitivity test, sanity checks, a reality check against other countries, and how to rerun and extend it. Every value for 2030 to 2050 is our estimate from stated assumptions, not a forecast."
audiences: [research, policy, manufacturers, investors, international, startups]
reading_time_min: 35
key_numbers: [kn-sbm-need-2050, kn-sbm-range-2050, kn-land-abroad-feed, kn-feed-target-livestock-2030, kn-efficiency-vs-alt, kn-salt-plants-2050]
related_data: [balance_assumptions.csv, balance_outputs.csv, balance_sensitivity.csv, balance_published_projections.csv, aquaculture_projections.csv, protein_strategies_benchmark.csv]
related_pages: [ch22-protein-balance-2050, ch19-outlook-2035, ch30-unknowns, ch21-frontier-technology, ch23-scenarios-2050, ch24-vision-2050, ch28-robust-moves, app-s6-feed-market, app-f1-outlook, app-r1-open-questions, app-r2-disagreements, app-m2-futures-method, app-f3-frontier-tech, app-f6-aquafeed-feedstock-futures]
charts: [chart-sbm-scenarios-2050, chart-sbm-tornado]
---

# F4. The protein and feed balance model

**What this appendix contains.** The documentation of the model behind [[ch22-protein-balance-2050]]: purpose and boundary, the published projections and targets it uses, each calculation step with its parameters, the four scenarios, results by scenario and year, the sensitivity test, sanity checks, a reality check against other countries, and how to rerun and extend it.

**How to use it.** F4.1 and F4.4 say what the scenarios are; F4.5 holds every result; F4.6 to F4.8 help judge how far to trust them; F4.9 explains how to rerun the model with your own assumptions. Every value for 2030 to 2050 is our estimate (our calculation, `tools/balance_model.py`) {VN-direct|Low} {fx:estimate}. The 2025 values are calibrated to published data.

> **Method note.** The four scenarios are what-if cases, not forecasts, and carry no probabilities. Official targets, published projections and our estimates are kept apart and labelled. SBM is soybean meal; FCR, feed conversion ratio (kg of feed per kg of output); cwe, carcass-weight equivalent; CP, crude protein; SSR, self-sufficiency ratio (production divided by consumption). Record IDs such as BLA-111 point to rows of the data files; they are not citations.

---

## F4.1 Purpose and boundary

The model answers one supply-side question: how much feed protein, maize and farmland abroad Vietnam would need to 2050 under stated assumptions, and how much a feed-efficiency programme or an alternative-protein build-out would change that. We built it because no published projection for Vietnam goes beyond 2035 (F4.2.3).

| The model is | The model is not |
|---|---|
| A physical balance: meat, eggs, milk and farmed fish, then compound feed, then protein meals and maize, then imports and land abroad | A market-size forecast: no sales, prices or market values for alternative-protein products |
| Driven by demand as a macro input only: population and per-person consumption from published outlooks, then a stated taper | Consumer research: the S-ALT food shares are illustrative levels, not predictions of uptake |
| Calibrated to 2025 totals: 22 Mt of livestock and poultry feed, 6.5 Mt of aquafeed, 7.2 Mt of SBM fed, 11.91 Mt of maize imported | A price or trade model: it cannot say whether microbial protein will compete ([[ch09-economics]], [[ch21-frontier-technology]]) |
| Transparent: one standard-library Python file and one input file of 238 rows | Probabilistic: the tornado test varies one assumption at a time |

The model scenarios (S-BASE, S-HIGH, S-EFF, S-ALT) are distinct from the 2035 scenarios of [[ch19-outlook-2035]] and the 2050 worlds of [[ch23-scenarios-2050]], which map onto these ranges without new model runs.

## F4.2 Published projections and targets

### F4.2.1 OECD-FAO Agricultural Outlook 2026-2035

This is the only published model we found with Vietnamese meat, feed and protein-meal projections, and it stops at 2035. The report PDF was blocked to our fetch tool, but the data are open through the OECD SDMX API. All rows: [@QNT-01] {VN-direct|Medium} {fx:projection} (published model, baseline).

| Series (Viet Nam) | 2025 | 2030 | 2035 | Growth a year |
|---|---|---|---|---|
| Pigmeat production, kt cwe | 3,895.6 | 4,241.2 | 4,468.1 | +1.4% |
| Pigmeat food use per person, kg | 28.64 | 31.08 | 31.51 | +1.0% |
| Poultry production, kt | 2,567.1 | 3,434.4 | 4,481.5 | +5.7% |
| Poultry food use per person, kg | 17.03 | 21.23 | 25.80 | +4.2% |
| Beef production, kt cwe | 321.5 | 320.5 | 372.4 | +1.5% |
| Beef food use per person, kg | 3.99 | 4.31 | 4.60 | +1.4% |
| Aquaculture, kt | 5,691.7 | 6,123.4 | 6,826.9 | +1.8% |
| Fish exports, kt live weight | 4,634.9 | 4,387.1 | 5,000.5 | +0.8% |
| Protein-meal feed use, kt | 9,530.4 | 11,058.4 | 12,928.2 | +3.1% |
| Protein-meal imports, kt | 7,370 | 8,597.3 | 10,288.3 | +3.4% |
| Fishmeal feed use, kt | 220.8 | 309.0 | 338.7 | +4.4% |
| Maize imports, kt | 12,000 | 13,965.9 | 16,642.0 | +3.3% |
| Maize feed use, kt | 12,339.6 | 14,334.0 | 16,769.3 | +3.1% |
| Maize production, kt | 4,300 | 4,714.6 | 4,921.8 | +1.4% |
| Soybean imports, kt | 2,600 | 2,909.8 | 3,114.7 | +1.8% |
| Milk production, kt | 1,341.1 | 1,648.8 | 2,009.5 | +4.1% |

- **Comparators, 2035.** Pig, poultry and beef food use per person: Viet Nam 61.9 kg, Korea 59.2 kg, China 48.5 kg, Malaysia 46.1 kg [@QNT-01] {VN-direct|Medium} {fx:projection}. The Thai poultry value (3.4 kg) looks implausible and is not used.
- **Caveats.** Values were read through a summarising fetch tool. The annual series are smooth, but two commodity labels were swapped in one summary and we reassigned them by magnitude. The poultry base looks like live weight labelled as carcass (F4.9.4).
- **Recipe.** `https://sdmx.oecd.org/public/rest/data/OECD.TAD.ATM,DSD_AGR@DF_OUTLOOK_2026_2035,1.1/VNM.A.<commodity>.<measure>..?startPeriod=2024&endPeriod=2035`. Commodities: CPC_EX_PK (pigmeat), CPC_EX_PT (poultry), CPC_EX_BV (beef), CPC_EX_AC (aquaculture), CPC_04 (fish), CPC_21920 (protein meal), CPC_21233 (fishmeal), CPC_0112 (maize), CPC_0141 (soybean), CPC_0221 (milk). Measures: QP (production), QC (consumption), IM (imports), EX (exports), FE (feed), CR (crush), FO_PC (food per person), YLD (yield), joined with "+". Replace VNM with KOR, CHN, ARG, BRA or USA for comparators and origin yields, and the dataflow name for a new edition.

### F4.2.2 Other published numbers used

| Item | Value and horizon | Source and tags |
|---|---|---|
| USDA Post: total feed | 29.5 Mt (2026) and 30.6 Mt (2027), of which aquafeed 6.73 and 7.12 Mt | [@MAC-01; @MAC-03] {VN-direct\|Medium} {fx:projection} |
| USDA Post: SBM feed use; corn imports | 7.4 Mt (2026), 7.8 Mt (2027); corn 15 Mt (MY2026/27) | [@MAC-04; @MAC-01] {VN-direct\|Medium} {fx:projection} |
| USDA World Markets and Trade | Imports of 3.5 Mt of beans and 6.85 Mt of SBM (MY2026/27) | [@QNT-07] {VN-direct\|Medium} {fx:projection} |
| USDA Agricultural Projections to 2035 | Real GDP growth 5.7% a year on average, 2026 to 2035 (country trade tables not readable) | [@QNT-02] {VN-direct\|Medium} {fx:projection} |
| UN WPP 2024, medium variant | 101.6 M (2025), 104.25 M (2030), 106.53 M (2035), 108.44 M (2040), 110.01 M (2050) | [@GT-12] {VN-direct\|Medium} {fx:projection} |
| Decision 1520/QD-TTg (livestock strategy), 2030 | Industrial feed 30 to 32 Mt; meat 6.0 to 6.5 Mt cwe; 58 to 62 kg of meat and 220 to 225 eggs per person | [@MAC-23; @REG-54] {VN-direct\|High} {fx:projection} (official target) |
| Decision 1625/QD-TTg (feed scheme, Dec 2023) | Industrial livestock feed 24 to 25 Mt (2025) and 30 to 32 Mt (2030) | [@NTS-23] {VN-direct\|Medium} {fx:projection} (official target) |
| Decision 339/QD-TTg (fisheries strategy), 2030 | Aquaculture 7.0 Mt; capture 2.8 Mt | [@QNT-06; @NTS-08] {VN-direct\|High} {fx:projection} (official target) |
| Revised PDP8 (Decision 768/QD-TTg) | GDP growth 10% a year (2026 to 2030) and 7.5% (2031 to 2050); 1,237.7 to 1,375.1 TWh of commercial electricity and about 27 Mt of power-sector CO2 in 2050 (197 to 199 Mt in 2030) | [@GT-11] {VN-direct\|High} {fx:projection} (official target) |
| IFPRI IMPACT, SSP2 | Global per-person demand for protein from red meat, poultry, dairy and eggs +14% from 2020 to 2050; South Asia +49% | [@QNT-12] {general\|High} {fx:projection} |
| Falcon, Naylor and Shankar | Global food demand +50 to 60% from 2019 to 2050; poultry the dominant meat | [@QNT-05] {general\|Medium} {fx:projection} |

Vietnamese household-demand studies find rising meat budget shares and a shift to poultry and beef, but we extracted no projected numbers [@QNT-03; @QNT-04] {VN-direct|Medium}. All 86 rows are in `balance_published_projections.csv`.

### F4.2.3 What we did not find

We found no FAO, IFPRI, GLOBIOM or peer-reviewed projection of Vietnamese meat, feed or feed protein to 2050 [@QNT-01; @QNT-02; @QNT-15] {VN-direct|High}. OECD-FAO stops at 2035, USDA's country tables to 2035 could not be read, and official volume targets stop at 2030 [@MAC-23; @NTS-23] {VN-direct|High}. Our 2040 and 2050 values are extensions.

## F4.3 Model structure, step by step

Seven steps run for each scenario and year: demand, production, compound feed, protein meals and maize, land abroad, S-ALT substitution, emissions.

**Parameter lookup.** Each row of `balance_assumptions.csv` has a parameter, a scenario tag (ALL, S-BASE, S-HIGH, S-EFF, S-ALT, SENS-LOW, SENS-HIGH) and a year (or ALL). The script tries the sensitivity override, then the scenario, then S-BASE, then ALL; between listed years it interpolates linearly. Reported years: 2025, 2030, 2035, 2040, 2050.

### F4.3.1 Step 1: demand (macro input)

2025 consumption per person (kg cwe) = 2025 live-weight output x dressing yield / SSR / population.

| Parameter | Pork | Poultry | Beef and buffalo | Source and tags |
|---|---|---|---|---|
| 2025 output, kt live weight | 5,389.2 | 2,601.9 | 624.3 | [@MAC-14; @MAC-12] {VN-direct\|High} |
| Dressing yield | 0.723 | 0.70 | 0.515 | Pork and beef set so the carcass base equals OECD-FAO's; poultry assumed [@QNT-01] {VN-direct\|Medium} |
| SSR (2025, held constant) | 0.961 | 0.875 | 0.522 | OECD-FAO production / consumption [@QNT-01] {VN-direct\|Medium} |
| 2025 demand, kg cwe per person | 39.9 | 20.5 | 6.1 (total 66.5) | Our calculation {VN-direct\|Medium} |
| S-BASE index 2030 / 2035 / 2050 | 1.085 / 1.100 / 1.134 | 1.247 / 1.515 / 1.674 | 1.079 / 1.152 / 1.337 | OECD-FAO to 2035 [@QNT-01] {VN-direct\|Medium} {fx:projection}; then our taper {VN-direct\|Low} {fx:estimate} |

After 2035 the taper is +0.2% a year for pork, +1.0% (to 2040) then +0.5% for poultry, and +1.0% for beef. Other inputs:
- **Population:** UN WPP medium variant in every scenario and year, including 2025, so growth rates never mix UN and GSO series [@GT-12] {VN-direct|Medium}.
- **Eggs:** 210.6 per person in 2025, rising to 235 (2030) and 275 (2050); egg weight 0.055 kg; no published projection found [@MAC-14] {VN-direct|Low} {fx:estimate}.
- **Milk:** 1,300 kt in 2025, OECD-FAO growth to 2035, then +3% and +2% a year to 2050 [@QNT-01] {VN-direct|Low} {fx:estimate}.
- **S-HIGH income multiplier:** (GDP ratio of S-HIGH to S-BASE) raised to an elasticity falling from 0.30 to 0.20; 1.06 (2030), 1.11 (2040), 1.15 (2050) [@GT-11; @QNT-02] {VN-direct|Low} {fx:estimate}.

### F4.3.2 Step 2: production

Meat (cwe) = demand per person x population x (1 minus the S-ALT food share) x SSR; live weight = cwe / dressing yield. Aquaculture = 2025 NSO output by group x an index. 2025 output in kt, with our fixed export share in brackets: pangasius 1,938.8 (0.90), whiteleg shrimp 994.4 (0.75), other shrimp and crustaceans 387.3 (0.60), other fed fish such as tilapia, snakehead, carps and marine fish 2,096.2 (0.10), and unfed molluscs, seaweed and others 700.1 (0.30); total 6,116.8 kt [@MAC-15] {VN-direct|High}. Exports come to 3.14 Mt (51%), consistent with OECD-FAO fish exports of 4.63 Mt, which also include capture [@QNT-01] {VN-direct|Low}.

The S-BASE aquaculture index is 1.076 (2030), 1.200 (2035) and 1.393 (2050): OECD-FAO growth to 2035, then +1% a year {VN-direct|Low} {fx:estimate}. S-HIGH follows the 7.0 Mt target for 2030 [@QNT-06], then +1.5% and +1.0% a year {fx:estimate}.

**Appendix F6 paths.** AQ-BASE in [[app-f6-aquafeed-feedstock-futures]] reuses the S-BASE index but lets marine finfish grow faster, reaching 8.86 Mt in 2050 against 8.52 Mt here (aquafeed 9.7 against 9.2 Mt). AQ-LOW (7.42 Mt) matches the low aquaculture sensitivity; AQ-HIGH (11.27 Mt) lies above S-HIGH (8.97 Mt). Because aquaculture growth after 2035 moves 2050 SBM need by only about 1 Mt (F4.6), the national result is unchanged {VN-direct|Low} {fx:estimate}.

### F4.3.3 Step 3: compound feed by species group

Feed = output x FCR x compound-feed share x (1 minus the annual FCR gain) raised to the years since 2025. One scale factor sets 2025 aquafeed to the chosen base. All rows {VN-direct|Low}; paths {fx:estimate}.

| Group | FCR | Compound share, 2025 | Path to 2050 | Source |
|---|---|---|---|---|
| Pigs | 2.8, whole herd (range 2.6 to 3.2) | 0.81, calibrated: 12.17 Mt (55.3% of 22 Mt) / (5.39 Mt x 2.8) | 0.88 (2030), 0.94 (2040), 0.97 (2050) | [@MAC-28; @MAC-01] |
| Poultry | Meat 2.5 (broilers about 1.7, native birds and ducks 2.5 to 3.2); eggs 2.4 | 0.96, calibrated to 9.0 Mt (40.9%) | 0.97 to 0.98 | [@MAC-28] |
| Other livestock | 0.42 t of feed per t of (beef and buffalo live weight plus milk), calibrated to 0.81 Mt | n/a | scales with output | [@MAC-28] |
| Pangasius; whiteleg shrimp | 1.5; 1.3 | 1.00 | constant | [@MAC-06] |
| Other shrimp; other fish | 1.5; 1.5 | 0.30; 0.68 | 0.50; index 1.25 by 2050 | [@MAC-01] |
| Aquafeed scale factor | 1.00 with USDA's 6.5 Mt; 0.67 with the industry midpoint of 4.35 Mt | | | [@MAC-01; @MAC-06] |
| FCR gain a year | S-BASE 0.4% (livestock), 0.3% (aquaculture); S-EFF 1.0% and 0.8% | | | Our assumption |

### F4.3.4 Step 4: protein meals and maize

| Quantity | Equation and values | Source and tags |
|---|---|---|
| SBM demand | Feed x inclusion (pigs 18%, poultry 28%, other livestock 8%, pangasius and whiteleg 28%, other shrimp and fish 25%) x calibration 1.10 (reproduces 7.2 Mt in 2025) x (1 + inclusion trend) to the power of years. Implied 2025 average: 253 kg per t of feed | [@MAC-04] {VN-direct\|Low} |
| Other protein meals | 2.43 Mt SBM-equivalent in 2025 (other oilseed meals 2.33 Mt at about 30% CP plus DDGS 1.55 Mt at 27% CP, at 46% CP); scales with feed | [@QNT-01; @FS-23] {VN-direct\|Low} |
| Fishmeal | Feed x inclusion (whiteleg 12%, other shrimp 8%, other fish 2.5%, pangasius 1%, pigs and poultry 0.05%) x trend (minus 1.5% a year; minus 3% in S-EFF). 262 kt in 2025 | [@FM-05; @FM-08] {VN-direct\|Low} |
| Protein-meal demand | SBM + other meals + fishmeal x 0.65 / 0.46 | [@FM-01] {general\|High} |
| SBM import need | Equal to SBM demand; domestic soybeans (42 to 43 kt) go mostly to food (error under 0.5%). Beans = SBM / 0.78 | [@MAC-04; @MAC-09] {VN-direct\|Medium} |
| Maize | Compound-feed maize = feed x inclusion (pigs 45%, poultry 52%, other livestock 30%, aquafeed 5%), calibrated to 10.9 Mt. Non-compound maize (3.5 Mt) shrinks with non-compound pig feeding; non-feed use (1.61 Mt) and domestic output (4.1 Mt) are constant. Imports = use minus output (11.91 Mt in 2025) | [@FS-23; @MAC-01; @MAC-08] {VN-direct\|Medium} |

### F4.3.5 Step 5: land abroad

Soybean land = SBM x 0.80 (mass allocation; economic about 0.65, gross 1.0) / (bean yield x 0.78). Bean yield 3.16 t per ha in 2025 (OECD-FAO yields for Argentina 2.91, Brazil 3.62 and the United States 3.56, weighted by origin), +0.6% a year. Maize land = imports / 7.28 t per ha (Argentina 7.69, Brazil 6.11, United States 11.68, weighted by 2025 import origin), +0.3% a year [@QNT-01; @MAC-08; @MAC-09] {general|Medium} {fx:projection}. Worked 2025 example: 7.2 x 0.80 / (3.16 x 0.78) = 2.34 M ha of soy plus 11.91 / 7.28 = 1.64 M ha of maize, 3.97 M ha in total, about five times Vietnam's maize area of 0.81 M ha (our calculation) {VN-direct|Low}.

### F4.3.6 Steps 6 and 7: S-ALT substitution and emissions

- **Food route.** A share of meat demand (at 0.15 kg of protein per kg cwe) is replaced; meat production and its feed fall in proportion. Part of the substitute is fermented (mycoprotein-type, on sugar); the rest is plant-based from imported soy.
- **Feed route.** Shares of SBM protein and fishmeal protein are replaced one for one, on crude protein, by microbial protein, partly from hydrogen gas fermentation and partly from sugar or starch.
- **Emissions.** Electricity x a grid factor derived from PDP8 targets: 0.659 t CO2 per MWh (2023 official), 0.38 (2030), 0.29 (2035), 0.20 (2040), 0.021 (2050) [@COST-08; @GT-11] {VN-direct|Medium} {fx:estimate}. It assumes PDP8 is delivered. Avoided emissions use published averages: 0.85 kg CO2e per kg of SBM protein and 2.72 kg per kg of fishmeal protein [@QNT-11] {general|Low}. Cassava farming, steam, urea and land-use change are excluded.

| Conversion factor | Value | Source and tags |
|---|---|---|
| Sugar route inputs | 4.0 t of glucose (range 3.0 to 4.4) and 0.37 t of urea per t of protein; 3.5 kWh per kg of protein | [@COST-43; @COST-30; @COST-01] {general\|Medium} |
| Cassava | 1.08 t of glucose per t of starch; 4.4 t of fresh roots per t of starch; 20.5 t of roots per ha. Sugar: 0.95 t per t of glucose | [@FS-05; @FS-01] {VN-direct\|Medium} |
| Gas route | 41 kWh per kg of protein (25 kWh per kg of dry biomass plus about 2 kWh processing, at 65% protein; range 17 to 55); 0.72 kg H2, 2.7 kg CO2 and 0.17 kg NH3 per kg of protein | [@QNT-10; @QNT-09] {general\|Low} |
| Product protein | Sugar-route feed 55%; gas-route feed 65%; fermented food ingredient 45%; plant ingredient 55%; finished food 15%. Plant-based food needs 3.3 t of beans per t of protein | [@QNT-09; @COST-28] {general\|Medium} |

## F4.4 Scenario definitions

All values are our assumptions for the years shown {VN-direct|Low} {fx:estimate}.

| Parameter | S-BASE (trend) | S-HIGH (official growth) | S-EFF (efficiency) | S-ALT (alternative protein) | Records |
|---|---|---|---|---|---|
| Meat demand per person, kg cwe | 75.4 (2030), 87.6 (2050) | x income multiplier: 80.0 (2030), 101.0 (2050) | As S-BASE | As S-BASE before substitution | BLA-048 to BLA-104 |
| GDP path behind demand | 5.7% a year to 2035 (USDA), then 4.5% | 10% (2026 to 2030), then 7.5% (PDP8) | As S-BASE | As S-BASE | BLA-100 |
| Aquaculture, Mt | 6.58 (2030), 8.52 (2050) | 7.00 (2030), 8.97 (2050) | As S-BASE | As S-BASE | BLA-073 to BLA-081 |
| FCR gain a year, livestock / aquaculture | 0.4% / 0.3% | As S-BASE | 1.0% / 0.8% | As S-BASE | BLA-143 to BLA-146 |
| SBM inclusion trend | 0 | 0 | Minus 1% a year | 0 | BLA-158, BLA-159 |
| Other meals trend | 0 | 0 | Plus 0.5% a year | 0 | BLA-162, BLA-163 |
| Fishmeal inclusion trend | Minus 1.5% a year | Minus 1.5% | Minus 3% | Minus 1.5% | BLA-171, BLA-172 |
| Microbial share of SBM protein | 0 | 0 | 0 | 1% (2030), 3% (2035), 5% (2040), 10% (2050) | BLA-190 to BLA-196 |
| Microbial share of fishmeal protein | 0 | 0 | 0 | 10%, 18%, 25%, 40% | BLA-197 to BLA-201 |
| Meat demand replaced | 0 | 0 | 0 | 1%, 3%, 5%, 10% | BLA-202 to BLA-206 |
| Gas-route share of microbial feed protein | n/a | n/a | n/a | 0%, 10%, 30%, 50% | BLA-207 to BLA-210 |
| Fermented share of the food substitute | n/a | n/a | n/a | 30%, 35%, 40%, 50% | BLA-211 to BLA-214 |

Shared by all: population, SSR, dressing yields, export shares, compound shares, domestic maize output (4.1 Mt), non-feed maize (1.61 Mt) and yields abroad.
- **S-ALT shares are what-if levels, not targets.** The 40% fishmeal share by 2050 sits within trials that replaced 25 to 60% of fishmeal without growth loss ([[app-s6-feed-market]], section S6.9) [@FM-08; @FM-22] {general|Medium}. The 10% SBM share by 2050 implies large cost falls or policy support: at 2026 costs microbial feed protein costs 4.6 to 5.1 times SBM protein ([[ch09-economics]]) [@COST-43] {VN-direct|Low} {fx:estimate}.
- **S-HIGH is a stress case,** not a central view.
- **A combined S-EFF plus S-ALT case was not modelled,** so we give no number for it. The two act through different channels and add up.

## F4.5 Results by scenario and year

All tables: our calculation, `tools/balance_model.py`, from `balance_outputs.csv`. Values for 2030 to 2050 are {VN-direct|Low} {fx:estimate}; 2025 is the calibrated base, identical in all scenarios.

### F4.5.1 Compound feed

**Compound feed, Mt: total (livestock and poultry / aquafeed)**

| Scenario | 2025 | 2030 | 2035 | 2040 | 2050 |
|---|---|---|---|---|---|
| S-BASE | 28.5 (22.0 / 6.5) | 33.5 (26.4 / 7.1) | 37.2 (29.3 / 7.9) | 39.1 (30.7 / 8.4) | 40.9 (31.6 / 9.2) |
| S-HIGH | 28.5 | 35.6 (28.1 / 7.5) | 39.8 (31.6 / 8.2) | 43.0 (34.1 / 8.9) | 46.2 (36.5 / 9.7) |
| S-EFF | 28.5 | 32.5 (25.6 / 6.9) | 35.1 (27.5 / 7.5) | 35.8 (28.0 / 7.8) | 35.4 (27.2 / 8.1) |
| S-ALT | 28.5 | 33.3 (26.2 / 7.1) | 36.4 (28.5 / 7.9) | 37.8 (29.4 / 8.4) | 38.2 (28.9 / 9.2) |

S-BASE by group, 2025 and 2050, Mt: pigs 12.17 and 16.26; poultry 9.00 and 13.99; other livestock 0.81 and 1.40; pangasius 2.90 and 3.75; whiteleg shrimp 1.29 and 1.67; other shrimp 0.17 and 0.37; other fish 2.13 and 3.45. Aquafeed stays at 21 to 24% of compound feed throughout. S-EFF feed peaks around 2040.

### F4.5.2 Soybean meal

**SBM import need, Mt (as meal, or as beans crushed in Vietnam)**

| Scenario | 2025 | 2030 | 2035 | 2040 | 2050 | 2050 against 2025 |
|---|---|---|---|---|---|---|
| S-BASE | 7.20 | 8.46 | 9.47 | 9.95 | 10.40 | +44% |
| S-HIGH | 7.20 | 8.98 | 10.11 | 10.92 | 11.72 | +63% |
| S-EFF | 7.20 | 7.81 | 8.08 | 7.85 | 7.00 | minus 3% |
| S-ALT | 7.20 | 8.32 | 9.01 | 9.15 | 8.78 | +22% |

{{chart:chart-sbm-scenarios-2050}}

**Beans, intensity and total protein meals**

| Scenario | Bean equivalent, Mt: 2030 / 2050 | SBM per t of feed, kg: 2030 / 2050 | Protein meals, Mt SBM-equivalent: 2030 / 2050 |
|---|---|---|---|
| 2025 base | 9.2 | 253 | 10.0 |
| S-BASE | 10.8 / 13.3 | 252 / 254 | 11.7 / 14.2 |
| S-HIGH | 11.5 / 15.0 | 252 / 254 | 12.4 / 16.0 |
| S-EFF | 10.0 / 9.0 | 240 / 198 | 11.0 / 10.6 |
| S-ALT | 10.7 / 11.3 | 250 / 230 | 11.5 / 12.3 |

{{kn:kn-sbm-need-2050}} {{kn:kn-sbm-range-2050}}

**Efficiency against alternative protein.** In 2050 S-EFF needs 3.40 Mt less SBM than S-BASE (minus 33%) and S-ALT 1.62 Mt less (minus 16%): efficiency does about twice the work at the shares tested {VN-direct|Low} {fx:estimate}.

{{kn:kn-efficiency-vs-alt}}

### F4.5.3 Maize, fishmeal and land abroad

| Scenario | Maize import need, Mt: 2030 / 2035 / 2040 / 2050 | Fishmeal, kt: 2030 / 2035 / 2040 / 2050 | Land abroad (soy plus maize), M ha: 2030 / 2035 / 2040 / 2050 |
|---|---|---|---|
| 2025 base | 11.91 | 262 | 3.97 (2.34 + 1.64) |
| S-BASE | 12.96 / 13.85 / 13.98 / 13.84 | 265 / 274 / 269 / 253 | 4.42 / 4.74 / 4.79 / 4.67 (2050: 2.91 + 1.76) |
| S-HIGH | 13.91 / 15.16 / 15.80 / 16.28 | 281 / 283 / 284 / 267 | 4.71 / 5.11 / 5.32 / 5.35 |
| S-EFF | 12.50 / 12.90 / 12.56 / 11.56 | 239 / 224 / 198 / 152 | 4.15 / 4.19 / 3.98 / 3.43 |
| S-ALT | 12.83 / 13.43 / 13.28 / 12.47 | 238 / 225 / 201 / 151 | 4.36 / 4.55 / 4.46 / 4.04 |

- **Maize grows more slowly than SBM** (+16% against +44% by 2050 in S-BASE) because non-compound maize feeding shrinks as pig farming industrialises and non-feed use is held flat; total S-BASE maize use goes from 16.0 Mt (2025) to 17.9 Mt (2050) {VN-direct|Low} {fx:estimate}.
- **Fishmeal:** S-EFF and S-ALT reach about 151 kt by 2050 through different levers, faster inclusion cuts and 40% microbial replacement {VN-direct|Low} {fx:estimate}.
- **Land abroad** peaks around 2040 in S-BASE because yields abroad keep rising while needs flatten; the S-ALT figure for 2050 excludes 52,000 ha for soy used in plant-based food {VN-direct|Low} {fx:estimate}.

{{kn:kn-land-abroad-feed}}

### F4.5.4 Meat, demand per person and other outputs

| Scenario | Meat production, Mt cwe: 2030 / 2035 / 2040 / 2050 | Meat demand per person, kg cwe: 2030 / 2035 / 2040 / 2050 |
|---|---|---|
| 2025 base | 6.04 (59.4 kg per person) | 66.5 (pork 39.9, poultry 20.5, beef and buffalo 6.1) |
| S-BASE and S-EFF | 7.02 / 7.78 / 8.13 / 8.55 | 75.4 / 81.9 / 84.3 / 87.6 (2050: 45.2, 34.3, 8.1) |
| S-HIGH | 7.46 / 8.41 / 9.05 / 9.85 | 80.0 / 88.6 / 93.8 / 101.0 (2050: 52.1, 39.5, 9.3) |
| S-ALT | 6.95 / 7.54 / 7.73 / 7.69 | As S-BASE before substitution; animal meat 74.7 / 79.5 / 80.1 / 78.9 |

Other S-BASE outputs: eggs 235 per person (2030) and 275 (2050); milk 2.75 Mt (2050); aquaculture 6.58 Mt (2030) and 8.52 Mt (2050), 51% exported {VN-direct|Low} {fx:estimate}.

### F4.5.5 What S-ALT implies

| Item | 2030 | 2040 | 2050 | Unit |
|---|---|---|---|---|
| Microbial feed protein | 56 | 265 | 514 | kt protein |
| of which replacing SBM / fishmeal | 39 / 17 | 222 / 44 | 449 / 65 | kt protein |
| Share of high-protein feed protein | 1.0 | 4.4 | 8.4 | % |
| Microbial feed product (dry) | 102 | 460 | 863 | kt |
| Multiples of Entobel's Vietnamese design capacity (11 kt a year across its 1 kt and 10 kt plants) | 9 | 42 | 78 | multiples |
| Plants of 20 kt a year (Calysseo, China) | 5 | 23 | 43 | plants |
| Food substitute protein | 12 | 69 | 145 | kt protein |
| Food protein ingredient (dry); finished product (15% protein) | 23; 79 | 136; 457 | 292; 964 | kt |
| Glucose, sugar route (feed plus food) | 238 | 852 | 1,318 | kt |
| as fresh cassava roots; cassava land | 968; 47 | 3,473; 169 | 5,368; 262 | kt; thousand ha |
| or as sugar | 226 | 810 | 1,252 | kt |
| Urea (sugar route) | 22 | 79 | 122 | kt |
| Electricity | 0.21 | 4.0 | 11.7 | TWh a year |
| Hydrogen; CO2 as feedstock (gas route) | 0; 0 | 57; 215 | 185; 694 | kt a year |
| Soybeans for plant-based food (imported) | 27 | 136 | 239 | kt |
| SBM imports avoided against S-BASE | 0.14 | 0.80 | 1.62 | Mt |
| via microbial feed protein; via less meat | 0.08; 0.05 | 0.48; 0.32 | 0.98; 0.65 | Mt |
| Fishmeal avoided | 27 | 68 | 102 | kt |
| Maize imports avoided | 0.13 | 0.70 | 1.37 | Mt |
| Soy land abroad avoided, net of food soy | 37 | 205 | 402 | thousand ha |
| Electricity CO2 (PDP8-derived grid) | 0.08 | 0.80 | 0.25 | Mt CO2 |
| SBM and fishmeal emissions avoided | 0.10 | 0.43 | 0.81 | Mt CO2e |
| Net electricity balance | minus 0.02 | plus 0.37 | minus 0.57 | Mt CO2 |

The 2035 column is in `balance_outputs.csv` (for example 160 kt of microbial feed protein, 2.7% of high-protein feed protein). The share is microbial protein divided by microbial protein plus protein-meal demand x 0.46. Plant equivalents are our arithmetic from the design sizes of Entobel's insect-meal plant in Vietnam (a size benchmark only) and Calysseo's FeedKind plant in China, which halted in 2026 [@ECO-01; @FM-13; @FTG-06] {VN-direct|Low}.

{{kn:kn-salt-plants-2050}}

**Readings.** All {VN-direct|Low} {fx:estimate} unless tagged otherwise.
- **Carbohydrate is the binding physical constraint.** The 2050 need of 5.37 Mt of fresh cassava roots is 52% of the 2025 harvest (10.24 Mt) and of the cassava area; the sugar alternative, 1.25 Mt, is about 96% of the 2025/26 crop [@FS-01; @FS-31]. Roots rose about 75% in price in the year to April 2026 and now also feed E10 ethanol [@FS-11; @GT-10] {VN-direct|Medium}.
- **Energy volume is not the constraint; energy carbon is.** The 11.7 TWh of 2050 is 0.85 to 0.94% of planned commercial electricity [@GT-11]; 185 kt of hydrogen is 0.9 to 1.9% of the official target of 10 to 20 Mt of clean hydrogen a year by 2050 [@NTS-25].
- **Carbon break-even.** At 41 kWh per kg of protein, gas-route protein beats SBM only below about 21 g CO2 per kWh (0.85 / 41) and fishmeal below about 66 g. The sugar route's electricity (3.5 kWh per kg) beats SBM below about 240 g. The PDP8-derived grid passes 240 g in the late 2030s and reaches about 21 g only around 2050, so before then the gas route needs dedicated renewable power. The break-even depends on the energy factor (F4.9.4).
- **The food route saves the most imports per tonne.** On the 2050 S-BASE feed structure, replacing 1 t of meat protein avoids about 4.5 t of SBM and 9.5 t of maize imports, against about 1.65 t of imported soybeans when half the substitute is plant-based. Microbial feed protein replaces SBM but not maize. Diet change is outside our scope; this is arithmetic only.
- **Land.** Cassava-based microbial protein needs about 0.80 ha per t of protein (4.0 x 0.926 x 4.4 / 20.5), against about 0.71 ha for imported SBM: it moves land rather than saving it. Hydrogen gas fermentation needs 0.4% of SBM's land per t of protein in one study [@QNT-11] {general|Medium}.

## F4.6 Sensitivity: what moves the 2050 result

One assumption, or a paired set, is varied with all else at S-BASE (10.40 Mt of SBM and 13.84 Mt of maize imports in 2050). The last row varies S-ALT. Source: `balance_sensitivity.csv`; all rows {VN-direct|Low} {fx:estimate}, horizon 2050.

| Rank | Assumption varied (low; high) | SBM, low / high, Mt | SBM swing | Maize imports, low / high, Mt | Maize swing |
|---|---|---|---|---|---|
| 1 | SBM inclusion trend (minus 1.0; plus 0.5% a year) | 8.09 / 11.78 | 3.69 | 13.84 / 13.84 | 0 |
| 2 | FCR gain rate, livestock and aquaculture (0 and 0; 1.0 and 0.8% a year) | 11.42 / 9.00 | 2.42 | 15.55 / 11.56 | 3.99 |
| 3 | Aquaculture growth after 2035 (0; 2.5% a year) | 10.02 / 11.08 | 1.05 | 13.78 / 13.96 | 0.18 |
| 4 | Poultry demand per person after 2030 (index 1.45; 1.99 in 2050) | 9.97 / 11.01 | 1.05 | 13.09 / 14.88 | 1.79 |
| 5 | Meat self-sufficiency, pork and poultry (10 points lower; 1.00 and 0.915 by 2050) | 9.70 / 10.68 | 0.98 | 12.37 / 14.42 | 2.05 |
| 6 | Population 2050 (minus 5%; plus 5%, illustrative) | 10.02 / 10.78 | 0.76 | 13.06 / 14.62 | 1.55 |
| 7 | Pig whole-herd FCR, which sets the 2025 compound share (2.6; 3.2) | 10.17 / 10.86 | 0.69 | 13.59 / 14.70 | 1.10 |
| 8 | Pork demand per person after 2035 (minus 10%; plus 10% in 2050) | 10.08 / 10.73 | 0.65 | 13.04 / 14.64 | 1.61 |
| 9 | Pig compound-feed share by 2050 (0.90; 1.00) | 10.17 / 10.50 | 0.33 | 14.71 / 13.47 | 1.24 |
| 10 | 2025 aquafeed volume (industry 4.35 Mt; USDA 6.5 Mt) | 10.43 / 10.40 | 0.02 | 13.84 / 13.84 | 0.00 |
| 11 | Domestic maize output (minus 2%; plus 1.4% a year) | 10.40 / 10.40 | 0 | 15.47 / 12.14 | 3.33 |
| 12 | Non-feed maize, E10 stress test (1.61 Mt; 4.4 Mt by 2050) | 10.40 / 10.40 | 0 | 13.84 / 16.63 | 2.79 |
| Comparison | S-ALT microbial share of SBM protein (0%; 20% by 2050) | 9.75 / 7.80 | 1.95 | 12.47 / 12.47 | 0 |

{{chart:chart-sbm-tornado}}

**Readings.**
- **Formulation and efficiency dominate.** Each 1% a year fall in national SBM inclusion is worth about 2.3 Mt of imports in 2050 (10.40 minus 8.09) {VN-direct|Low} {fx:estimate}. Yet we found no Vietnamese series of SBM inclusion or FCR by species {VN-direct|High}; measuring them is the first job of a protein statistic ([[ch28-robust-moves]]).
- **Demand assumptions matter less:** about 0.6 to 1 Mt each in 2050 {VN-direct|Low} {fx:estimate}.
- **Maize responds to other levers:** FCR (4.0 Mt), domestic output (3.3 Mt) and non-feed use (2.8 Mt) in 2050. Pig industrialisation raises SBM but lowers maize, because the non-compound maize ration shrinks {VN-direct|Low} {fx:estimate}.
- **The unresolved 2025 aquafeed volume hardly matters** (0.02 Mt in 2050), because SBM is calibrated on the 7.2 Mt actually fed. Doubling S-ALT's microbial share cuts 2050 need by another 1 Mt, less than the inclusion trend {VN-direct|Low} {fx:estimate}.
- The ranges are illustrative, not confidence intervals; interactions are not tested.

## F4.7 Sanity checks

### F4.7.1 Checks against anchors and published projections

| Check | Model | Anchor or published value | Verdict | Source and tags |
|---|---|---|---|---|
| 2025 livestock and poultry feed | 21.98 Mt | About 22 Mt | Calibrated | [@MAC-01] {VN-direct\|High} |
| 2025 aquafeed | 6.5 Mt | USDA 6.5; industry 3.9 to 4.8 Mt | Calibrated to USDA; industry value tested (F4.6) | [@MAC-01; @MAC-06] {VN-direct\|Medium} |
| 2025 total feed | 28.48 Mt | USDA 28.6 Mt | Matches | [@MAC-01] {VN-direct\|Medium} |
| 2025 SBM fed; maize imports | 7.20; 11.91 Mt | 7.2 Mt; 11.91 Mt (customs), OECD-FAO 12.0 | Calibrated | [@MAC-04; @MAC-08; @QNT-01] {VN-direct\|High} |
| 2025 fishmeal | 262 kt | Supply-chapter pool 120 to 245 kt, bounds 79 to 290 kt ([[app-s6-feed-market]]); OECD-FAO 221 kt | Inside the bounds; ours adds snakehead, marine fish and livestock uses | [@QNT-01] {VN-direct\|Low} |
| 2025 pork demand per person | 39.9 kg cwe | About 39 kg (basis not stated) | Consistent | [@MAC-21] {VN-direct\|Medium} |
| 2027 total feed; SBM fed (interpolated) | 30.5; 7.7 Mt | USDA Post 30.6; 7.8 Mt | Matches | [@MAC-01; @MAC-04] {VN-direct\|Medium} {fx:projection} |
| 2027 SBM supply | 7.7 Mt demand | USDA: 6.85 Mt of meal plus 3.5 Mt of beans imported (MY2026/27) | About 9 Mt or more of supply against USDA's own 7.8 Mt of use; logged (F4.9.4) | [@QNT-07] {VN-direct\|Medium} {fx:projection} |
| 2027 maize imports (interpolated) | 12.3 Mt | USDA Post 15 Mt (MY2026/27) | 18% below; not reconciled (F4.9.4) | [@MAC-01] {VN-direct\|Medium} {fx:projection} |
| 2030 industrial feed | 33.5 Mt total; 26.4 Mt livestock | Target 30 to 32 Mt, livestock only (F4.7.2) | Out of reach on S-BASE | [@NTS-23; @REG-54] {VN-direct\|Medium} {fx:projection} |
| 2030 meat output | 7.02 Mt cwe | Target 6.0 to 6.5 Mt | Above, because 2025 (6.04 Mt) is already inside the range | [@MAC-23; @REG-54] {VN-direct\|Medium} {fx:projection} |
| 2030 aquaculture | 6.58 Mt (S-BASE); 7.00 (S-HIGH) | Target 7.0 Mt; OECD-FAO 6.12 Mt on a lower base | S-BASE falls short of the target | [@QNT-06; @QNT-01] {VN-direct\|Medium} {fx:projection} |
| 2030 and 2035 SBM plus other meals | 11.3; 12.6 Mt | OECD-FAO 11.06; 12.93 Mt | 2.3% above; 2.2% below | [@QNT-01] {VN-direct\|Medium} {fx:projection} |
| 2035 maize feed use; imports | 16.3; 13.9 Mt | OECD-FAO 16.8; 16.6 Mt | 2.6% below; 17% below (non-feed use and output, F4.9.4) | [@QNT-01] {VN-direct\|Medium} {fx:projection} |
| 2035 fishmeal | 274 kt | OECD-FAO 339 kt | 19% below: our inclusion falls, OECD-FAO use rises | [@QNT-01] {VN-direct\|Medium} {fx:projection} |
| 2030 pork; poultry production | 4.34 Mt cwe; 3.33 Mt live weight | OECD-FAO 4.24; 3.43 Mt | 2% above (constant SSR); 3% below | [@QNT-01] {VN-direct\|Medium} {fx:projection} |
| 2050 meat demand per person | 87.6 kg (S-BASE); 101 kg (S-HIGH) | No Vietnam value; IMPACT global +14% per person, 2020 to 2050 | S-BASE +32% on 2025: high for a country near Korea's level by 2035. S-HIGH is a stress case | [@QNT-12] {general\|High} {fx:projection} |

**Saturation.** Continuing OECD-FAO's +4.2% a year poultry growth per person to 2050 would give about 38 kg of poultry per person, against 34.3 kg in S-BASE; we taper instead {VN-direct|Low} {fx:estimate}. Vietnam becomes an "aged society" by 2035, which argues for slower per-person growth [@GT-13] {VN-direct|Medium} {fx:projection}.

### F4.7.2 The 2030 feed target: resolution of OQ-127

> **Correction.** An earlier draft left open whether the 2030 target of 30 to 32 Mt of industrial feed includes aquafeed (OQ-127, [[ch30-unknowns]], [[app-r1-open-questions]]), and [[app-f1-outlook]] (F1.3) noted that on an all-feed reading the target was already close. The feed-industry scheme, Decision 1625/QD-TTg of 15 December 2023, which the earlier draft did not cite, sets 24 to 25 Mt of industrial livestock feed for 2025 and 30 to 32 Mt for 2030. It refers to *thức ăn chăn nuôi* (livestock feed), so the 2030 target appears to cover livestock and poultry feed only [@NTS-23] {VN-direct|Medium}. This supersedes the all-feed reading and our first model notes, which judged the 2030 value plausible "if the target includes aquafeed". Confidence is Medium: one reading of the text, not confirmed by MAE.

| Item | Value | Source and tags |
|---|---|---|
| Livestock and poultry feed, 2024; 2025 | 21.5 Mt; about 22 Mt, against a 2025 target of 24 to 25 Mt (probably missed; USDA's estimate) | [@MAC-28; @MAC-01; @NTS-23] {VN-direct\|High} |
| First half of 2026 | 12.43 Mt, +7.5% | [@MAC-03] {VN-direct\|Medium} |
| Growth needed, 2025 to 2030 | 6.4 to 7.8% a year, about twice the 2024 and 2025 pace | Our calculation ([[app-f1-outlook]]) {VN-direct\|Medium} |
| S-BASE, 2030 | 26.4 Mt (3.8% a year): 3.6 to 5.6 Mt short | Our calculation {VN-direct\|Low} {fx:estimate} |
| S-HIGH, 2030 | 28.1 Mt (5.0% a year): 1.9 to 3.9 Mt short | Our calculation {VN-direct\|Low} {fx:estimate} |
| Arithmetic check | 22 Mt growing 7.5% every year gives 31.6 Mt in 2030 | Our calculation, not a projection {VN-direct\|Low} |

On the livestock-only reading, the 2030 target looks out of reach on both our trend and official-growth paths {VN-direct|Low} {fx:estimate}. It would be met only if the first-half 2026 growth rate held every year to 2030; the full-year 2026 figure is the signpost.

{{kn:kn-feed-target-livestock-2030}}

## F4.8 Reality check against international analogues

| Analogue | Achieved | Target | Relevance | Source and tags |
|---|---|---|---|---|
| China, SBM share of feed | Minus 0.14 to 0.45 points a year (0.9 to 2.9% relative), 2017 to 2025; 13.4% in 2025 against a target below 13% | 10% by 2030 (minus 0.68 points a year) | Closest analogue for formulation | [@GEO-10; @GEO-11] {VN-adjacent\|Medium} {fx:trend} |
| EU, EU-origin share of feed protein from oilseeds and protein crops | Flat at about 26% (2018 to 2025) | 35% by 2035 (plus 0.92 points a year) | Pace for a domestic-origin share once measured | [@VIS-15; @VIS-17] {general\|High} {fx:projection} (official target) |
| Japan, feed self-sufficiency | 28% (FY2000), 27% (FY2024); FY2030 target cut from 34% to 28% | 28% by FY2030 | Ceiling for land-based self-sufficiency | [@VIS-11; @VIS-12] {VN-adjacent\|High} {fx:trend} |
| Norway, marine share of salmon feed | 90% (1990) to about 30% (2013), minus 2.6 points a year | None | Price can drive fast substitution | [@VIS-18; @VIS-19] {general\|High} {fx:trend} |
| Norway, novel feed ingredients | 0.4% of salmon-feed ingredients (2020) | None | Ceiling for novel feed protein today | [@VIS-18; @VIS-20] {general\|High} |
| Singapore, local protein share | About 26% when "30 by 30" was dropped | 30% by 2035 | A dropped production target | [@VIS-25] {VN-adjacent\|High} |

**Model cases against the analogues** {VN-direct|Low} {fx:estimate}
- **S-EFF (7.00 Mt in 2050) is credible.** Its minus 1% a year inclusion trend cuts SBM intensity by 22% over 2025 to 2050 (253 to 198 kg per t); China's achieved pace over 25 years would cut it by 20 to 52% (our calculation).
- **S-ALT (8.78 Mt) is a stretch.** Its microbial share of high-protein feed protein is 1.0% (2030), 2.7% (2035), 4.4% (2040) and 8.4% (2050). Norway's 0.4% makes the 2030 value plausible and the 2050 value unprecedented.
- **S-HIGH (11.72 Mt) is an upside risk.**

**Credible ambitious range.** On this evidence, a credible ambitious range for Vietnam's SBM need in 2050 is about 7 to 9 Mt (7.0 to 8.8 Mt, the S-EFF to S-ALT span), against 10.4 Mt on trend {VN-direct|Low} {fx:estimate}. Matching ranges are 7.8 to 8.3 Mt (2030), 8.1 to 9.0 Mt (2035) and 7.8 to 9.2 Mt (2040), with microbial feed protein at about 1% of high-protein feed protein by 2030 and 4 to 8% by 2050 {fx:estimate}. Holding imports at the 2025 level (7.2 Mt) through 2050 is a stretch case. With no combined S-EFF plus S-ALT run, the range has no value below S-EFF. [[ch24-vision-2050]] builds on this range.

## F4.9 Reproduce, extend, limits and disagreements

### F4.9.1 How to rerun

- **Requirements:** Python 3, standard library; nothing is fetched from the web. **Input:** `data/balance_assumptions.csv`. **Outputs:** `data/balance_outputs.csv` and `data/balance_sensitivity.csv`, plus a console summary.
- **Warning:** the script takes no arguments. `--help` or any argument is ignored, and every run overwrites both output files. To experiment, run a copy: `mkdir -p run/tools run/data`, copy `tools/balance_model.py` to `run/tools/` and `data/balance_assumptions.csv` to `run/data/`, then `python3 run/tools/balance_model.py`.
- **Check:** on 24 September 2026 a run in a clean copy reproduced both package files byte for byte.
- **Working paper:** `working-papers/wave3/balance_model/model.py` is the same model with stream paths and no record IDs.

### F4.9.2 How to extend

| Task | What to change |
|---|---|
| Change an assumption | The value in `balance_assumptions.csv` for the scenario tag and year |
| Add a scenario | Rows under a new tag for parameters that differ; add the tag to `SCENARIOS` and `PARENT`. Avoided-import indicators are computed only for S-ALT |
| Combine S-EFF and S-ALT | New tag with parent S-EFF; copy the S-ALT share rows (BLA-190 to BLA-214) |
| Add a sensitivity | SENS-LOW and SENS-HIGH rows, plus one entry in `SENS_SPECS` |
| New OECD-FAO edition | Fetch with the F4.2.1 recipe; recompute the 2030 and 2035 index rows and the dressing-yield and SSR rows |
| Industry aquafeed base | Set `base_aquafeed_mt` to 4.35 |

### F4.9.3 Limitations

- FCRs, inclusion rates and compound shares are assumptions calibrated to national totals; no Vietnamese series by species exists in the sources we reached.
- Self-sufficiency, export shares, domestic maize output and non-feed maize are held constant; population is the same in all scenarios.
- No prices, so no statement on competitiveness ([[app-f3-frontier-tech]]).
- No climate impacts on Vietnamese farming or on exporters' yields ([[ch20-drivers-2050]]).
- Emissions cover only electricity for alternative protein; land-use change is excluded.
- Microbial protein replaces SBM and fishmeal one for one on crude protein, with no digestibility or amino-acid adjustment. S-ALT food substitution touches meat only.
- The 2040 and 2050 values extend beyond any published projection.

### F4.9.4 Disagreements with published numbers

We give both values and the position taken; these belong in [[app-r2-disagreements]].

| Topic | Published or other value | Ours | Position taken |
|---|---|---|---|
| Maize imports, 2035 | OECD-FAO 16.6 Mt [@QNT-01] {VN-direct\|Medium} {fx:projection} | 13.9 Mt | Feed use agrees within 3%. The gap is non-feed use (OECD-FAO 4.4 Mt; ours 1.61 Mt, from USDA's split) and domestic output (OECD-FAO +1.4% a year; ours flat as area shrinks [@MAC-01]). Kept ours; the E10 and output tests (2.8 and 3.3 Mt) span the gap |
| Maize imports, 2027 | USDA Post 15 Mt, MY2026/27 [@MAC-01] {fx:projection} | About 12.3 Mt | Not reconciled: marketing year and possible stock building against our calendar-year customs base |
| Fishmeal feed use, 2035 | OECD-FAO 339 kt, +4.4% a year [@QNT-01] {fx:projection} | 274 kt | Kept ours (inclusion falling 1.5% a year, slower than the 1997 to 2017 fall [@FM-05]); direction uncertain; both below 350 kt |
| Meat target, 2030 | 6.0 to 6.5 Mt cwe; 58 to 62 kg per person [@MAC-23; @REG-54] {fx:projection} | 2025 output already 6.04 Mt (59.4 kg) | The target looks met on NSO data: either it is conservative or NSO live weights run high. Flagged, not resolved |
| USDA soy balance, MY2026/27 | 6.85 Mt of meal plus 3.5 Mt of beans imported [@QNT-07] against 7.8 Mt of SBM feed use [@MAC-04] | 7.7 Mt of demand (2027) | Implies stock building or other uses; not resolved; we follow feed use |
| 2025 aquafeed | USDA 6.5 Mt [@MAC-01] | Industry 3.9 to 4.8 Mt [@MAC-06] | Unresolved (DG-120); USDA used; 0.02 Mt effect on 2050 SBM |
| Poultry basis | OECD-FAO 2,567 kt "carcass" [@QNT-01] | NSO 2,602 kt live weight [@MAC-14] | OECD-FAO probably uses live weight, overstating poultry by about 30%; we use its growth rates only |
| Aquaculture base, 2025 | OECD-FAO 5.69 Mt [@QNT-01] | NSO 6.12 Mt [@MAC-15] | NSO base, OECD-FAO growth |
| Gas-route electricity | 25 kWh per kg of biomass (lower case) and 9.86 (laboratory) [@QNT-10]; about 69 MWh per t of protein for a 2030 design [@FTG-01], used in [[ch21-frontier-technology]] {general\|Medium} | 41 kWh per kg of protein | Kept 41. With FTG-01's factor, S-ALT would need about 19 TWh in 2050 (under 2% of planned supply) and the CO2 break-even against SBM would be about 12 g per kWh, not 21 (our calculation). Not yet reconciled |
| Hydrogen per kg of single-cell protein | 2.41 kg (via [@QNT-14]) {general\|Low} | 0.72 kg per kg of protein | Ours matches stoichiometry and FTG-01 (0.69 t per t); 2.41 is probably a different basis |

## F4.10 Gaps and open questions

These feed [[app-r1-open-questions]].

| Gap | Why it matters | Cheapest way to close it |
|---|---|---|
| Average SBM inclusion and FCR by species and farm type | The two largest swing factors (3.7 and 2.4 Mt in 2050) | Vietnam Feed Association or three large mills; MAE livestock department |
| MAE confirmation of the scope of the 30 to 32 Mt target | OQ-127 answered only at Medium confidence | One enquiry to the MAE Department of Livestock Production and Animal Health |
| USDA long-term country tables (maize and SBM to 2035) | A second projection beside OECD-FAO | USDA ERS International Baseline data tables |
| OECD-FAO poultry base | May overstate poultry by about 30% | FAOSTAT; the Aglink-Cosimo team |
| Share of pig feed that is compound feed | Sets industrialisation growth | 2025 agricultural census; MAE farm-size statistics |
| Non-feed maize and ethanol plans | Up to 2.8 Mt of extra imports by 2050 | MOIT; the three fuel-ethanol plants [@FS-09] |
| USDA marketing-year balances against customs data | The 2027 SBM and maize checks do not close | USDA PSD tables; monthly customs data |
| Land-use-change emissions of imported soy by origin | Could change the climate case | Trase supply-chain data |
| Vietnam-specific 2050 demand projection | Our 2040 and 2050 values are extensions | IMPACT country results [@QNT-12]; IFPRI |
| Gas-route energy factor (41 against 69 kWh per kg of protein) | Consistency of Part IV energy and carbon numbers | Reconcile with `frontier_gas_tech.csv` |
| Combined S-EFF plus S-ALT run | No value below S-EFF in the credible range | One new scenario tag (F4.9.2) |

## Data files

- `balance_assumptions.csv` (238 rows, BLA-001 to BLA-238): every input by parameter, scenario tag and year, with basis, sources and confidence, including SENS-LOW and SENS-HIGH rows.
- `balance_outputs.csv` (1,150 rows, BLO-0001 to BLO-1150): 80 indicators by scenario and year, with unit, foresight type and confidence.
- `balance_sensitivity.csv` (13 rows, BLS-001 to BLS-013): the tornado table for 2050 SBM and maize import need.
- `balance_published_projections.csv` (86 rows, BLP-001 to BLP-086): OECD-FAO, USDA, UN, PDP8 and official-target values used for calibration and checks.
- `aquaculture_projections.csv` (44 rows): the Appendix F6 aquaculture paths; AQ-BASE reuses the S-BASE index.
- `protein_strategies_benchmark.csv` (23 rows): national protein and feed strategies behind F4.8.
- Code and notes: `tools/balance_model.py`; `working-papers/wave3/balance_model/balance_model.md`; chart data in `charts/data/sbm_scenarios_2050.csv` and `charts/data/sbm_tornado_2050.csv`.

**Related:** [[ch22-protein-balance-2050]], [[ch24-vision-2050]], [[ch23-scenarios-2050]], [[ch28-robust-moves]], [[app-f6-aquafeed-feedstock-futures]], [[app-s6-feed-market]], [[app-f1-outlook]], [[app-m2-futures-method]].
