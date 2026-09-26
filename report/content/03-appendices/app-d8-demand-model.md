---
id: app-d8-demand-model
title: "D8. The demand sizing model"
short_title: "D8. Demand model"
section: appendix
order: 48
summary: "How the model behind the demand-sizing chapter works: seven routes, every assumption with its basis, results for 2025 to 2050, a sensitivity test and conversion into animals spared and CO2e avoided. About 11,000 to 17,000 t of the 19,000 t of protein on the benchmark path in 2035 would be made in Vietnam, and all results are what-if estimates."
audiences: [research, investors, policy, international, startups, manufacturers]
reading_time_min: 50
key_numbers: []
related_data: [demand_assumptions.csv, demand_outputs.csv, demand_sensitivity.csv, demand_funder_units.csv, impact_per_tonne.csv, canteen_dish_summary.csv, school_menu_weeks.csv, diet_quality_vietnam.csv, trade_seasonal_summary.csv, hybrid_savings.csv, balance_outputs.csv]
related_pages: [ch18-demand-sizing, app-f4-balance-model, ch22-protein-balance-2050, app-m3-demand-method, app-d7-global-benchmarks, app-m4-actor-check-waves]
charts: [chart-demand-sensitivity]
---
# D8. The demand sizing model

**What this appendix contains.** The method, assumptions and full results of the model behind [[ch18-demand-sizing]]. The model is `tools/demand_model.py` (standard-library Python). It reads `data/demand_assumptions.csv` and the Part IV balance model outputs (`data/balance_outputs.csv`, S-BASE population and meat consumption) and writes `data/demand_outputs.csv` and `data/demand_sensitivity.csv`. Running `python3 tools/demand_model.py` from the package root reproduces both files exactly.

> **Scenarios, not forecasts.** Every value after 2025 is our estimate from stated assumptions {VN-direct|Low} {fx:estimate} {dx:inferred}. Most assumptions have no Vietnamese measurement behind them; they are listed with their basis so that anyone can replace them.

## D8.1 Structure and equations

Common inputs, for each year: population P and meat consumption M (kt carcass weight) from S-BASE; meat protein MP = 0.15 x M (the balance model's factor); meat protein per person-day m = MP / P / 365.

| Route | Protein delivered (kt) | Meat protein displaced (kt) |
|---|---|---|
| R1 Ingredient import substitution | Pool x domestic share, where pool = 40 kt of product in 2025 x 0.65 protein x (1 + growth) to the power of years since 2025 | 0 |
| R2 Chay occasions | (chay person-days + added person-days) x upgrade share x 20 g, where chay person-days = P x keepers x days per month / 30.4 x 365 | Added person-days x m x (1 minus compensation); existing chay days are reported separately as meat already avoided |
| R3 Hybrid processed meat | MP x processed share x hybrid adoption x replacement | Delivered x 0.9 |
| R4 Institutional meals | (canteen meals x canteen adoption + school meals x school adoption) x 20 g | Delivered x 0.8 |
| R5 Household modern analogues | Urban population x regular-buyer share x 3 kg x 15% protein | Delivered x 0.2 |
| R6 High-protein plant milks | Plant milk volume x high-protein share x 30 g per litre | 0 |
| R7 Exports | Export tonnes x 25% protein | 0 (not in Vietnam) |

Totals: delivered = sum of routes; displaced = sum of routes; displaced share = displaced / MP. Comparison rows: Part IV S-ALT food protein (1%, 3%, 5% and 10% of meat protein in 2030, 2035, 2040 and 2050) and S-ALT microbial feed protein. Ingredient product for R1 to R4 is delivered protein / 0.60, the protein content of textured-protein line output (50 to 70% as sold, TPP-01), which is lower than the 0.65 average of the R1 import pool because that pool includes gluten (75%) and isolates (90%); line equivalents = ingredient product / 7 kt a year per 1 t/h line. Value = delivered protein x USD 3 per kg (order of magnitude only).

**What "delivered by domestic or novel protein" means.** Only R1 applies an explicit domestic share. R2 to R6 count all plant or novel protein used in those routes, whatever its origin; much of it would be imported soy or pea unless a domestic maker wins the business. R7 counts protein exported. The line equivalents treat all R1 to R4 ingredient product as textured-line output, although much of the R1 pool is gluten and isolates, which need other plants. D8.3 gives the domestic reading and the soy-line count.

**Requirement translation (2030 only).** For each of R2 to R5, the model solves for the level that would displace S-ALT's 2030 volume on its own: hybrid adoption at 30% replacement; share of all canteen and school meal protein; regular buyers; and extra chay days per person per month across the whole population.

## D8.2 Assumptions

| ID | Parameter | Scenario | Year | Value | Unit | Basis | Confidence |
|---|---|---|---|---|---|---|---|
| DMA-001 | protein_per_kg_meat_cwe | ALL | ALL | 0.15 | kg protein per kg carcass weight | Same value as the balance model (BLA-044) | Low |
| DMA-002 | urban_share | ALL | 2025 | 0.388 | share of population | World Bank WDI (UN WUP, national definition) | Medium |
| DMA-003 | urban_share_gain | ALL | ALL | 0.0057 | share points a year | assumption: the 2010 to 2025 average gain (30.3% to 38.8%) continues; capped at 0.60 | Low |
| DMA-004 | r1_food_plant_protein_ingredient_kt | ALL | 2025 | 40 | kt product a year | our estimate: partner-reported 2025 imports of HS 2106.10 (15.3 kt), 3504 (27.0 kt) and 1109 (22.0 kt), with 90%, 40% and 70% assumed to go to food; monthly trade points nearer 35 kt (see the notes below) | Low |
| DMA-005 | r1_ingredient_protein_share | ALL | ALL | 0.65 | kg protein per kg product | typical grades: TVP and concentrate 55 to 70%, gluten 75%, isolate 90% | Low |
| DMA-006 | r1_pool_growth | D-DRIFT | ALL | 0.04 | a year | assumption: slower than food processing output | Low |
| DMA-007 | r1_pool_growth | D-BENCH | ALL | 0.06 | a year | assumption: below food processing growth (11% in 2025) | Low |
| DMA-008 | r1_pool_growth | D-STRETCH | ALL | 0.08 | a year | assumption | Low |
| DMA-009 | r1_domestic_share | D-DRIFT | 2025 | 0 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-010 | r1_domestic_share | D-DRIFT | 2030 | 0.02 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-011 | r1_domestic_share | D-DRIFT | 2035 | 0.05 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-012 | r1_domestic_share | D-DRIFT | 2040 | 0.07 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-013 | r1_domestic_share | D-DRIFT | 2050 | 0.1 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-014 | r1_domestic_share | D-BENCH | 2025 | 0 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-015 | r1_domestic_share | D-BENCH | 2030 | 0.1 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-016 | r1_domestic_share | D-BENCH | 2035 | 0.25 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-017 | r1_domestic_share | D-BENCH | 2040 | 0.33 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-018 | r1_domestic_share | D-BENCH | 2050 | 0.4 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-019 | r1_domestic_share | D-STRETCH | 2025 | 0 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-020 | r1_domestic_share | D-STRETCH | 2030 | 0.2 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-021 | r1_domestic_share | D-STRETCH | 2035 | 0.45 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-022 | r1_domestic_share | D-STRETCH | 2040 | 0.52 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-023 | r1_domestic_share | D-STRETCH | 2050 | 0.6 | share of the food plant-protein ingredient pool supplied by domestic or novel protein | scenario assumption: what-if, not a forecast | Low |
| DMA-024 | r2_keeper_share | ALL | ALL | 0.3 | share of people who keep lunar chay days | assumption: unmeasured; illustrative range 20 to 50% (CHY stream); Pew finds 38% of adults Buddhist | Low |
| DMA-025 | r2_days_per_month | ALL | ALL | 2.5 | chay days a month among keepers | assumption: 2 (1st and 15th) to 4 days; whole-month observers ignored | Low |
| DMA-026 | r2_protein_component_g | ALL | ALL | 12 | g protein a chay day from tofu, mock meat, mushrooms and legumes | assumption: chay foods have a median of 4.7 g protein per 100 g (FORM-01); no intake data | Low |
| DMA-027 | r2_upgraded_protein_g | ALL | ALL | 20 | g protein a chay day when upgraded products are used | design target (10 to 12 g per 100 g products) | Low |
| DMA-028 | r2_upgrade_share | D-DRIFT | 2025 | 0 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-029 | r2_upgrade_share | D-DRIFT | 2030 | 0.01 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-030 | r2_upgrade_share | D-DRIFT | 2035 | 0.02 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-031 | r2_upgrade_share | D-DRIFT | 2040 | 0.03 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-032 | r2_upgrade_share | D-DRIFT | 2050 | 0.05 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-033 | r2_upgrade_share | D-BENCH | 2025 | 0 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-034 | r2_upgrade_share | D-BENCH | 2030 | 0.03 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-035 | r2_upgrade_share | D-BENCH | 2035 | 0.08 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-036 | r2_upgrade_share | D-BENCH | 2040 | 0.11 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-037 | r2_upgrade_share | D-BENCH | 2050 | 0.15 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-038 | r2_upgrade_share | D-STRETCH | 2025 | 0 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-039 | r2_upgrade_share | D-STRETCH | 2030 | 0.06 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-040 | r2_upgrade_share | D-STRETCH | 2035 | 0.15 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-041 | r2_upgrade_share | D-STRETCH | 2040 | 0.22 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-042 | r2_upgrade_share | D-STRETCH | 2050 | 0.3 | share of chay days served with upgraded or novel protein products | scenario assumption | Low |
| DMA-043 | r2_added_days | D-DRIFT | 2025 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-044 | r2_added_days | D-DRIFT | 2030 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-045 | r2_added_days | D-DRIFT | 2035 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-046 | r2_added_days | D-DRIFT | 2040 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-047 | r2_added_days | D-DRIFT | 2050 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-048 | r2_added_days | D-BENCH | 2025 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-049 | r2_added_days | D-BENCH | 2030 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-050 | r2_added_days | D-BENCH | 2035 | 0.1 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-051 | r2_added_days | D-BENCH | 2040 | 0.15 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-052 | r2_added_days | D-BENCH | 2050 | 0.2 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-053 | r2_added_days | D-STRETCH | 2025 | 0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-054 | r2_added_days | D-STRETCH | 2030 | 0.2 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-055 | r2_added_days | D-STRETCH | 2035 | 0.5 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-056 | r2_added_days | D-STRETCH | 2040 | 0.75 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-057 | r2_added_days | D-STRETCH | 2050 | 1.0 | extra chay days a month among keepers | scenario assumption: more chay occasions (for example canteen chay days) | Low |
| DMA-058 | r2_compensation | ALL | ALL | 0.3 | share of meat protein not eaten on an added chay day that is eaten on other days | assumption: no Vietnamese evidence (open question) | Low |
| DMA-059 | r3_processed_share | ALL | ALL | 0.05 | share of meat consumption (carcass weight) eaten as processed meat products | assumption: no national figure found; range 3 to 8% (giò, chả, xúc xích, ham, canned, dumpling fillings) | Low |
| DMA-060 | r3_hybrid_adoption | D-DRIFT | 2025 | 0 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-061 | r3_hybrid_adoption | D-DRIFT | 2030 | 0.005 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-062 | r3_hybrid_adoption | D-DRIFT | 2035 | 0.01 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-063 | r3_hybrid_adoption | D-DRIFT | 2040 | 0.015 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-064 | r3_hybrid_adoption | D-DRIFT | 2050 | 0.02 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-065 | r3_hybrid_adoption | D-BENCH | 2025 | 0 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-066 | r3_hybrid_adoption | D-BENCH | 2030 | 0.02 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-067 | r3_hybrid_adoption | D-BENCH | 2035 | 0.06 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-068 | r3_hybrid_adoption | D-BENCH | 2040 | 0.1 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-069 | r3_hybrid_adoption | D-BENCH | 2050 | 0.15 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-070 | r3_hybrid_adoption | D-STRETCH | 2025 | 0 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-071 | r3_hybrid_adoption | D-STRETCH | 2030 | 0.05 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-072 | r3_hybrid_adoption | D-STRETCH | 2035 | 0.15 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-073 | r3_hybrid_adoption | D-STRETCH | 2040 | 0.25 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-074 | r3_hybrid_adoption | D-STRETCH | 2050 | 0.35 | share of processed meat volume sold as hybrids | scenario assumption | Low |
| DMA-075 | r3_replacement | D-DRIFT | ALL | 0.1 | share of meat protein in a hybrid product replaced by plant or fungal protein | Singapore blind test: most tasters preferred about 75% animal; blends with 30 to 50% plant matched meat | Low |
| DMA-076 | r3_replacement | D-BENCH | ALL | 0.2 | share of meat protein in a hybrid product replaced by plant or fungal protein | Singapore blind test: most tasters preferred about 75% animal; blends with 30 to 50% plant matched meat | Low |
| DMA-077 | r3_replacement | D-STRETCH | ALL | 0.3 | share of meat protein in a hybrid product replaced by plant or fungal protein | Singapore blind test: most tasters preferred about 75% animal; blends with 30 to 50% plant matched meat | Low |
| DMA-078 | r3_net_displacement | ALL | ALL | 0.9 | meat protein removed per unit of protein replaced | assumption: the processor buys less meat; small consumer compensation | Low |
| DMA-079 | r4_canteen_meals_bn | ALL | 2025 | 1.0 | billion factory shift meals a year | our estimate: 4.15 million industrial-park workers x about 300 meal days = 1.2 billion upper bound; some firms pay cash | Low |
| DMA-080 | r4_canteen_growth | ALL | ALL | 0.02 | a year | assumption: industrial employment growth; working-age population peaks 2035 to 2040 | Low |
| DMA-081 | r4_school_meals_bn | ALL | 2025 | 0.8 | billion school lunches a year | our estimate: Hanoi subsidises 100 to 150 million primary lunches a year; national count of bán trú pupils unknown | Low |
| DMA-082 | r4_school_growth | ALL | ALL | 0.0 | a year | assumption: pupil numbers flat | Low |
| DMA-083 | r4_protein_per_meal_g | ALL | ALL | 20 | g protein in the protein dish of a meal | assumption: no portion standard found | Low |
| DMA-084 | r4_canteen_adoption | D-DRIFT | 2025 | 0 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-085 | r4_canteen_adoption | D-DRIFT | 2030 | 0.002 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-086 | r4_canteen_adoption | D-DRIFT | 2035 | 0.005 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-087 | r4_canteen_adoption | D-DRIFT | 2040 | 0.007 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-088 | r4_canteen_adoption | D-DRIFT | 2050 | 0.01 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-089 | r4_canteen_adoption | D-BENCH | 2025 | 0 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-090 | r4_canteen_adoption | D-BENCH | 2030 | 0.01 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-091 | r4_canteen_adoption | D-BENCH | 2035 | 0.03 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-092 | r4_canteen_adoption | D-BENCH | 2040 | 0.045 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-093 | r4_canteen_adoption | D-BENCH | 2050 | 0.06 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-094 | r4_canteen_adoption | D-STRETCH | 2025 | 0 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-095 | r4_canteen_adoption | D-STRETCH | 2030 | 0.03 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-096 | r4_canteen_adoption | D-STRETCH | 2035 | 0.08 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-097 | r4_canteen_adoption | D-STRETCH | 2040 | 0.11 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-098 | r4_canteen_adoption | D-STRETCH | 2050 | 0.15 | share of canteen meal protein supplied by plant or novel protein | scenario assumption | Low |
| DMA-099 | r4_school_adoption | D-DRIFT | 2025 | 0 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-100 | r4_school_adoption | D-DRIFT | 2030 | 0 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-101 | r4_school_adoption | D-DRIFT | 2035 | 0 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-102 | r4_school_adoption | D-DRIFT | 2040 | 0.002 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-103 | r4_school_adoption | D-DRIFT | 2050 | 0.005 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-104 | r4_school_adoption | D-BENCH | 2025 | 0 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-105 | r4_school_adoption | D-BENCH | 2030 | 0 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-106 | r4_school_adoption | D-BENCH | 2035 | 0.005 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-107 | r4_school_adoption | D-BENCH | 2040 | 0.01 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-108 | r4_school_adoption | D-BENCH | 2050 | 0.02 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-109 | r4_school_adoption | D-STRETCH | 2025 | 0 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-110 | r4_school_adoption | D-STRETCH | 2030 | 0.005 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-111 | r4_school_adoption | D-STRETCH | 2035 | 0.02 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-112 | r4_school_adoption | D-STRETCH | 2040 | 0.035 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-113 | r4_school_adoption | D-STRETCH | 2050 | 0.05 | share of school lunch protein supplied by plant or novel protein | scenario assumption: later and lower than canteens (basis revised: Decision 3958 sets no animal share; see the notes below) | Low |
| DMA-114 | r4_net_displacement | ALL | ALL | 0.8 | meat protein removed per unit of protein supplied | assumption: meal-level substitution; lasting diet effect unmeasured (pooled SMD 0.07 in RCTs with delayed outcomes) | Low |
| DMA-115 | r5_regular_buyer_share | D-DRIFT | 2025 | 0.001 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-116 | r5_regular_buyer_share | D-DRIFT | 2030 | 0.003 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-117 | r5_regular_buyer_share | D-DRIFT | 2035 | 0.005 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-118 | r5_regular_buyer_share | D-DRIFT | 2040 | 0.007 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-119 | r5_regular_buyer_share | D-DRIFT | 2050 | 0.01 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-120 | r5_regular_buyer_share | D-BENCH | 2025 | 0.001 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-121 | r5_regular_buyer_share | D-BENCH | 2030 | 0.01 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-122 | r5_regular_buyer_share | D-BENCH | 2035 | 0.02 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-123 | r5_regular_buyer_share | D-BENCH | 2040 | 0.03 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-124 | r5_regular_buyer_share | D-BENCH | 2050 | 0.04 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-125 | r5_regular_buyer_share | D-STRETCH | 2025 | 0.001 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-126 | r5_regular_buyer_share | D-STRETCH | 2030 | 0.03 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-127 | r5_regular_buyer_share | D-STRETCH | 2035 | 0.06 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-128 | r5_regular_buyer_share | D-STRETCH | 2040 | 0.08 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-129 | r5_regular_buyer_share | D-STRETCH | 2050 | 0.1 | share of urban residents buying modern analogues at least monthly | scenario assumption; benchmark ceiling 8.6 to 10.4% of households in the UK and Germany at 35 to 100% price premiums | Low |
| DMA-130 | r5_kg_product_per_buyer | ALL | ALL | 3 | kg product a year per regular buyer | assumption: about 250 g a month | Low |
| DMA-131 | r5_protein_share | ALL | ALL | 0.15 | kg protein per kg product | design target for meat-like analogues | Low |
| DMA-132 | r5_net_displacement | ALL | ALL | 0.2 | meat protein removed per unit of analogue protein | assumption: US scanner panels find displacement indistinguishable from zero; sensitivity 0 to 0.5 | Low |
| DMA-133 | r6_plant_milk_ml | ALL | 2025 | 300 | million litres a year | our estimate: branded soy milk about VND 5,300 billion (2025) at about VND 25,000 per litre, plus nut and oat milks | Low |
| DMA-134 | r6_growth | D-DRIFT | ALL | 0.04 | a year | assumption: Vinasoy soy milk revenue grew 13 to 22% in 2025, partly bought with promotion | Low |
| DMA-135 | r6_growth | D-BENCH | ALL | 0.06 | a year | assumption: Vinasoy soy milk revenue grew 13 to 22% in 2025, partly bought with promotion | Low |
| DMA-136 | r6_growth | D-STRETCH | ALL | 0.08 | a year | assumption: Vinasoy soy milk revenue grew 13 to 22% in 2025, partly bought with promotion | Low |
| DMA-137 | r6_high_protein_share | D-DRIFT | 2025 | 0.01 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-138 | r6_high_protein_share | D-DRIFT | 2030 | 0.02 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-139 | r6_high_protein_share | D-DRIFT | 2035 | 0.03 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-140 | r6_high_protein_share | D-DRIFT | 2040 | 0.04 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-141 | r6_high_protein_share | D-DRIFT | 2050 | 0.05 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-142 | r6_high_protein_share | D-BENCH | 2025 | 0.01 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-143 | r6_high_protein_share | D-BENCH | 2030 | 0.04 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-144 | r6_high_protein_share | D-BENCH | 2035 | 0.08 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-145 | r6_high_protein_share | D-BENCH | 2040 | 0.11 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-146 | r6_high_protein_share | D-BENCH | 2050 | 0.15 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-147 | r6_high_protein_share | D-STRETCH | 2025 | 0.01 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-148 | r6_high_protein_share | D-STRETCH | 2030 | 0.08 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-149 | r6_high_protein_share | D-STRETCH | 2035 | 0.15 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-150 | r6_high_protein_share | D-STRETCH | 2040 | 0.2 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-151 | r6_high_protein_share | D-STRETCH | 2050 | 0.25 | share of plant milk volume sold as high protein (5 g or more per 100 ml) | scenario assumption; Vinamilk high-protein nut milk launched 2024 | Low |
| DMA-152 | r6_added_protein_g_per_l | ALL | ALL | 30 | g protein added per litre by an isolate | lifting 2 g to 5 g per 100 ml | Low |
| DMA-153 | r7_export_kt | D-DRIFT | 2025 | 0 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-154 | r7_export_kt | D-DRIFT | 2030 | 0.5 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-155 | r7_export_kt | D-DRIFT | 2035 | 1 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-156 | r7_export_kt | D-DRIFT | 2040 | 2 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-157 | r7_export_kt | D-DRIFT | 2050 | 3 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-158 | r7_export_kt | D-BENCH | 2025 | 0 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-159 | r7_export_kt | D-BENCH | 2030 | 3 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-160 | r7_export_kt | D-BENCH | 2035 | 10 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-161 | r7_export_kt | D-BENCH | 2040 | 18 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-162 | r7_export_kt | D-BENCH | 2050 | 30 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-163 | r7_export_kt | D-STRETCH | 2025 | 0 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-164 | r7_export_kt | D-STRETCH | 2030 | 8 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-165 | r7_export_kt | D-STRETCH | 2035 | 30 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-166 | r7_export_kt | D-STRETCH | 2040 | 55 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-167 | r7_export_kt | D-STRETCH | 2050 | 100 | kt product a year containing domestic or novel protein | scenario assumption: diaspora chay, EU and UK private label, B2B ingredients to Japan and Korea | Low |
| DMA-168 | r7_protein_share | ALL | ALL | 0.25 | kg protein per kg product | assumption: mix of ingredients (about 60%) and finished foods (about 12%); the ingredient part has no revealed base (see the notes below) | Low |
| DMA-169 | price_per_kg_protein_usd | ALL | ALL | 3.0 | USD per kg protein delivered | assumption: Chinese TVP about USD 1.9 per kg protein at the border plus freight, duty and margin; fungal and isolate grades higher | Low |
| DMA-170 | line_output_kt | ALL | ALL | 7 | kt product a year from a 1 t/h textured-protein line | assumption: about 7,000 operating hours | Low |
| DMA-171 | r3_processed_share | SENS-LOW | ALL | 0.03 |  | sensitivity bound | Low |
| DMA-172 | r3_processed_share | SENS-HIGH | ALL | 0.08 |  | sensitivity bound | Low |
| DMA-173 | r2_keeper_share | SENS-LOW | ALL | 0.2 |  | sensitivity bound | Low |
| DMA-174 | r2_keeper_share | SENS-HIGH | ALL | 0.5 |  | sensitivity bound | Low |
| DMA-175 | r4_canteen_meals_bn | SENS-LOW | ALL | 0.6 |  | sensitivity bound | Low |
| DMA-176 | r4_canteen_meals_bn | SENS-HIGH | ALL | 1.2 |  | sensitivity bound | Low |
| DMA-177 | r4_school_meals_bn | SENS-LOW | ALL | 0.5 |  | sensitivity bound | Low |
| DMA-178 | r4_school_meals_bn | SENS-HIGH | ALL | 1.2 |  | sensitivity bound | Low |
| DMA-179 | r3_net_displacement | SENS-LOW | ALL | 0.7 |  | sensitivity bound | Low |
| DMA-180 | r3_net_displacement | SENS-HIGH | ALL | 1.0 |  | sensitivity bound | Low |
| DMA-181 | r5_net_displacement | SENS-LOW | ALL | 0.0 |  | sensitivity bound | Low |
| DMA-182 | r5_net_displacement | SENS-HIGH | ALL | 0.5 |  | sensitivity bound | Low |
| DMA-183 | r4_net_displacement | SENS-LOW | ALL | 0.5 |  | sensitivity bound | Low |
| DMA-184 | r4_net_displacement | SENS-HIGH | ALL | 1.0 |  | sensitivity bound | Low |
| DMA-185 | r2_compensation | SENS-LOW | ALL | 0.0 |  | sensitivity bound | Low |
| DMA-186 | r2_compensation | SENS-HIGH | ALL | 0.6 |  | sensitivity bound | Low |
| DMA-187 | r4_protein_per_meal_g | SENS-LOW | ALL | 15 |  | sensitivity bound | Low |
| DMA-188 | r4_protein_per_meal_g | SENS-HIGH | ALL | 25 |  | sensitivity bound | Low |
| DMA-189 | r5_kg_product_per_buyer | SENS-LOW | ALL | 1.5 |  | sensitivity bound | Low |
| DMA-190 | r5_kg_product_per_buyer | SENS-HIGH | ALL | 6 |  | sensitivity bound | Low |

Sources for the assumptions are listed in the `source_ids` column of `demand_assumptions.csv`; the main ones are [@BUY-02; @CHY-06; @CHY-09; @FORM-01; @CHN-37; @CHN-39; @CHN-29; @CON-26; @GLB-09; @GLB-11; @GLB-19; @GLB-39; @NOV-37; @NOV-40; @DIE-36].

> **Method note.** The actor check tested the assumptions against new revealed evidence ([[app-m4-actor-check-waves]]). No value in `demand_assumptions.csv` changed and the model outputs are unchanged; the findings below qualify the bases, and D8.3 and D8.5 show their effect.

- **DMA-004 (R1 pool).** Monthly trade shows no *chay* season in the 2024 jump in HS 3504 imports, which is priced at less than half China's average for the code. If the post-2023 Chinese increment is not food, food-grade 3504 is about 20% of the 27.0 kt, not 40%, and the pool is about 35 kt of product rather than 40 kt, the lower half of the 30 to 50 kt range [@BRD-05; @BRD-06; @BUY-02] {VN-direct|Low} {dx:inferred}. The textured-type part a soy extrusion line can serve was 12,832 t in 2025 (HS 2106.10 from China, India and Serbia) [@TIC-12] {VN-direct|Medium} {dx:revealed}.
- **DMA-024 (chay keepers).** No probability survey asks about chay, but the Diet Quality Questionnaire (Gallup, 1,007 adults, 13 November to 12 December 2021) found 7.9% (5.3 to 11.0%) ate no meat, poultry or fish on the previous day. That is a ceiling for chay-day person-days; the central 2.5% uses about a third of it [@APR-36; @BRD-01; @BRD-03] {VN-direct|Medium} {dx:revealed}.
- **DMA-059 (processed share).** National diet surveillance counts processed-meat days (18.1% of adults on a given day) but its item omits *giò* and *chả* (pork rolls and loaves) and counts days, not grams, so it cannot test R3 [@APR-36; @BRD-01] {VN-direct|Medium} {dx:revealed}.
- **DMA-060 to DMA-077 (hybrid adoption and replacement).** Cost does not limit R3: soy extension saves 14 to 16% of raw-material cost at 20% replacement at every hog price since 2019 (our calculation) [@DIE-25; @TIC-12; @BUY-05] {VN-direct|Low} {dx:inferred}. Adoption is limited by product identity, sensory ceilings (about 10 to 20% of the meat in fine emulsions, 30% in coarse mince, which is the evidence ceiling for DMA-077) and trust: no Vietnamese brand sells a declared blend, and buyers read hidden extension (*độn*, filler) as cheating [@HXE-04; @HXE-09; @TRU-22] {VN-direct|Medium} {dx:revealed}. D-STRETCH's price-parity condition therefore does not apply to R3; its 15% by 2035 assumes a positive blend frame not yet observed in Vietnam. Processors would mostly extend with imported soy, which enters duty-free, so R3 is plant protein of any origin [@FTR-32].
- **DMA-083 (protein per dish).** Keep 20 g. School caterers' sheets give 85 to 95 g raw meat, 67 to 70 g fish or 80 g tofu per dish, and 31.8 g of protein per lunch including rice (17.5 g animal); factory caterers' main dishes weigh 90 to 120 g [@PMR-24; @PMR-26; @UPL-32] {VN-direct|Medium} {dx:revealed}.
- **DMA-099 to DMA-114 (schools and meal displacement).** Decision 1340's animal-protein target ended in 2020. MOH Decision 3958/QĐ-BYT (25 December 2025) sets no animal share and asks for plant protein (legumes, tofu) at least twice a week; in 48 audited school-weeks only 9 met that rule, the plant slot was filled with tofu beside meat, and no dish used textured soy [@AIB-39; @PMR-10; @PMR-26] {VN-direct|High} {dx:revealed}. School protein sold into the plant slot should count as delivered but not displaced (factor 0, like existing chay days); only blends in minced-meat and fish-cake dishes (28.5% of audited days) or added plant days displace meat. The low school adoption values stand.
- **DMA-079 to DMA-098 (canteens).** Five caterers' published menus lead with pork (33.1% of protein dishes), fish (25.6%) and chicken (13.4%), with tofu in 8.7% (plant-only 2.9%) and no textured soy [@UPL-27; @UPL-28; @UPL-29; @UPL-30; @UPL-32] {VN-direct|Medium} {dx:stated}. The D-BENCH canteen share implies 36.6 million meal-equivalents a year by 2035, far above what diet-change programmes deliver ([[app-d7-global-benchmarks]]).
- **DMA-168 (export protein share).** Vietnam's textured-protein exports to the EU, the UK, Japan, Korea and Australia were 0 to 73 t each in 2024 to 2025, the Vietnam-made wrapped plant foods found abroad carry 4 to 5.4 g of protein per 100 g, and the high-protein dry chay exported today is made from imported isolate, which R7 does not count as domestic protein [@XBA-28; @XBA-26] {VN-direct|Low} {dx:revealed}. A share of 0.05 to 0.12 is as defensible as 0.25.

## D8.3 Results by route and scenario

Protein delivered by domestic or novel protein, kt of protein a year {VN-direct|Low} {fx:estimate} {dx:inferred}.

| Scenario | Year | R1 Import substitution | R2 Chay occasions | R3 Hybrids | R4 Institutions | R5 Analogues | R6 Plant milks | R7 Exports | Total delivered |
|---|---|---|---|---|---|---|---|---|---|
| D-DRIFT | 2025 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.1 | 0.0 | 0.1 |
| D-DRIFT | 2030 | 0.6 | 0.2 | 0.0 | 0.0 | 0.1 | 0.2 | 0.1 | 1.3 |
| D-DRIFT | 2035 | 1.9 | 0.4 | 0.1 | 0.1 | 0.1 | 0.4 | 0.2 | 3.2 |
| D-DRIFT | 2040 | 3.3 | 0.6 | 0.1 | 0.2 | 0.2 | 0.6 | 0.5 | 5.5 |
| D-DRIFT | 2050 | 6.9 | 1.0 | 0.1 | 0.4 | 0.3 | 1.2 | 0.8 | 10.7 |
| D-BENCH | 2025 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.1 | 0.0 | 0.1 |
| D-BENCH | 2030 | 3.5 | 0.6 | 0.2 | 0.2 | 0.2 | 0.5 | 0.8 | 5.9 |
| D-BENCH | 2035 | 11.6 | 1.6 | 0.8 | 0.8 | 0.4 | 1.3 | 2.5 | 19.1 |
| D-BENCH | 2040 | 20.6 | 2.3 | 1.4 | 1.4 | 0.7 | 2.4 | 4.5 | 33.1 |
| D-BENCH | 2050 | 44.6 | 3.2 | 2.2 | 2.3 | 1.1 | 5.8 | 7.5 | 66.7 |
| D-STRETCH | 2025 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.1 | 0.0 | 0.1 |
| D-STRETCH | 2030 | 7.6 | 1.2 | 0.9 | 0.7 | 0.6 | 1.1 | 2.0 | 14.1 |
| D-STRETCH | 2035 | 25.3 | 3.5 | 3.0 | 2.3 | 1.3 | 2.9 | 7.5 | 45.6 |
| D-STRETCH | 2040 | 42.9 | 5.6 | 5.1 | 3.5 | 1.9 | 5.7 | 13.8 | 78.4 |
| D-STRETCH | 2050 | 106.8 | 8.3 | 7.6 | 5.7 | 2.6 | 15.4 | 25.0 | 171.5 |

Meat protein displaced, kt of protein a year, and as a share of meat protein demand, against Part IV S-ALT {VN-direct|Low} {fx:estimate} {dx:inferred}.

| Scenario | Year | R2 added chay days | R3 Hybrids | R4 Institutions | R5 Analogues | Total displaced | Share of meat protein | S-ALT assumption | Existing chay days (baseline) |
|---|---|---|---|---|---|---|---|---|---|
| D-DRIFT | 2025 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.00% | 0.0 | 25.0 |
| D-DRIFT | 2030 | 0.0 | 0.0 | 0.0 | 0.0 | 0.1 | 0.01% | 11.8 | 29.1 |
| D-DRIFT | 2035 | 0.0 | 0.1 | 0.1 | 0.0 | 0.2 | 0.01% | 39.3 | 32.3 |
| D-DRIFT | 2040 | 0.0 | 0.1 | 0.2 | 0.0 | 0.3 | 0.02% | 68.6 | 33.8 |
| D-DRIFT | 2050 | 0.0 | 0.1 | 0.3 | 0.1 | 0.5 | 0.04% | 144.6 | 35.7 |
| D-BENCH | 2025 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.00% | 0.0 | 25.0 |
| D-BENCH | 2030 | 0.0 | 0.2 | 0.2 | 0.0 | 0.4 | 0.04% | 11.8 | 29.1 |
| D-BENCH | 2035 | 0.9 | 0.7 | 0.6 | 0.1 | 2.4 | 0.18% | 39.3 | 32.3 |
| D-BENCH | 2040 | 1.4 | 1.2 | 1.1 | 0.1 | 3.9 | 0.28% | 68.6 | 33.8 |
| D-BENCH | 2050 | 2.0 | 1.9 | 1.8 | 0.2 | 6.0 | 0.41% | 144.6 | 35.7 |
| D-STRETCH | 2025 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.00% | 0.0 | 25.0 |
| D-STRETCH | 2030 | 1.6 | 0.8 | 0.6 | 0.1 | 3.1 | 0.27% | 11.8 | 29.1 |
| D-STRETCH | 2035 | 4.5 | 2.6 | 1.8 | 0.3 | 9.2 | 0.71% | 39.3 | 32.3 |
| D-STRETCH | 2040 | 7.1 | 4.6 | 2.8 | 0.4 | 14.9 | 1.09% | 68.6 | 33.8 |
| D-STRETCH | 2050 | 10.0 | 6.8 | 4.6 | 0.5 | 21.9 | 1.52% | 144.6 | 35.7 |

Context and capacity {VN-direct|Low} {fx:estimate} {dx:inferred}.

| Scenario | Year | Meat protein demand (kt) | Import-substitution pool (kt protein) | Processed meat protein (kt) | Canteen and school meal protein (kt) | Regular analogue buyers (million) | Plant milk (million litres) | Ingredient product R1 to R4 (kt) | 1 t/h line equivalents | Ingredient value (USD million) |
|---|---|---|---|---|---|---|---|---|---|---|
| D-DRIFT | 2030 | 1,179 | 31.6 | 58.9 | 38.1 | 0.13 | 365 | 1.5 | 0.2 | 4 |
| D-DRIFT | 2035 | 1,309 | 38.5 | 65.5 | 40.4 | 0.24 | 444 | 4.2 | 0.6 | 10 |
| D-DRIFT | 2050 | 1,446 | 69.3 | 72.3 | 48.8 | 0.58 | 800 | 14.1 | 2.0 | 32 |
| D-BENCH | 2030 | 1,179 | 34.8 | 58.9 | 38.1 | 0.43 | 401 | 7.5 | 1.1 | 18 |
| D-BENCH | 2035 | 1,309 | 46.6 | 65.5 | 40.4 | 0.95 | 537 | 24.7 | 3.5 | 57 |
| D-BENCH | 2050 | 1,446 | 111.6 | 72.3 | 48.8 | 2.33 | 1288 | 87.2 | 12.4 | 200 |
| D-STRETCH | 2030 | 1,179 | 38.2 | 58.9 | 38.1 | 1.30 | 441 | 17.5 | 2.5 | 42 |
| D-STRETCH | 2035 | 1,309 | 56.1 | 65.5 | 40.4 | 2.84 | 648 | 56.5 | 8.1 | 137 |
| D-STRETCH | 2050 | 1,446 | 178.1 | 72.3 | 48.8 | 5.84 | 2055 | 214.1 | 30.6 | 515 |

**How much is made in Vietnam, D-BENCH 2035** (our calculation from `demand_outputs.csv`) {VN-direct|Low} {fx:estimate} {dx:inferred}:

| Component, kt of protein | Model reading | Strict reading | Arithmetic |
|---|---|---|---|
| R1 import substitution | 11.64 | 10.19 | 11.64 x 35 / 40 (food pool of 35 kt of product, not 40 kt) |
| R2 to R6 (1.60 + 0.79 + 0.81 + 0.43 + 1.29) | 4.91 | 1.23 | 25% of 4.91 (the R1 domestic share applied to protein of any origin) |
| Made in Vietnam for the home market | 16.55 | about 11.4 | sum |
| R7 exports | 2.50 | 0.5 to 1.2 | 10 kt of product x 0.05 to 0.12 protein, not 0.25 |
| All routes | 19.05 | not used | model total |

So the routes create demand for about 19,000 t of protein a year by 2035, of which about 11,000 to 17,000 t would be made in Vietnam for the home market. Within R3, the domestic part at a 25% domestic share is about 0.20 of 0.79 kt. With R7 at 0.05 to 0.12, the model total would be 17.1 to 17.8 kt.

**Soy lines supported.** The model's 3.5 line equivalents in 2035 convert all R1 to R4 ingredient product (24.7 kt) at 7 kt per 1 t/h line. For soy extrusion only, the textured-type pool (12,832 t of product in 2025) grows to about 23,000 t by 2035 at 6% a year; a 25% domestic share is about 5,700 t, which is one 1 t/h line or two 0.5 t/h lines. The rest of the R1 pool is gluten and isolates, which need wet-milling or isolate plants (our calculation) [@BUY-02; @TIC-12] {VN-direct|Low} {fx:estimate} {dx:inferred}.

## D8.4 What S-ALT 2030 would require from each route alone

To displace S-ALT's 2030 volume (11.8 kt of meat protein) on its own {VN-direct|Low} {fx:estimate} {dx:inferred}:

| Route | Requirement | Unit |
|---|---|---|
| R3 Hybrids | 74% | of all processed meat reformulated with 30% of its meat replaced |
| R4 Institutional meals | 39% | of all protein in canteen and school protein dishes |
| R5 Household analogues | 131 million | regular buyers (Vietnam's population is about 104 million in 2030) |
| R2 Added chay days | 0.43 | extra meat-free days per person per month, whole population, with 30% compensation |

## D8.5 Sensitivity

One assumption at a time set to its low and high bound; all else at D-BENCH values; outcome is total meat protein displaced in 2035 (central value 2.35 kt) {VN-direct|Low} {fx:estimate}.

{{chart:chart-demand-sensitivity}}

| Assumption | Low value | High value | Displaced at low (kt) | Displaced at high (kt) | Largest change (kt) |
|---|---|---|---|---|---|
| r2_keeper_share | 0.2 | 0.5 | 2.04 | 2.95 | 0.6 |
| r3_processed_share | 0.03 | 0.08 | 2.06 | 2.77 | 0.42 |
| r2_compensation | 0.0 | 0.6 | 2.73 | 1.96 | 0.39 |
| r4_net_displacement | 0.5 | 1.0 | 2.1 | 2.51 | 0.24 |
| r4_canteen_meals_bn | 0.6 | 1.2 | 2.11 | 2.46 | 0.23 |
| r3_net_displacement | 0.7 | 1.0 | 2.19 | 2.42 | 0.16 |
| r4_protein_per_meal_g | 15.0 | 25.0 | 2.18 | 2.51 | 0.16 |
| r5_net_displacement | 0.0 | 0.5 | 2.26 | 2.47 | 0.13 |
| r5_kg_product_per_buyer | 1.5 | 6.0 | 2.3 | 2.43 | 0.09 |
| r4_school_meals_bn | 0.5 | 1.2 | 2.32 | 2.38 | 0.03 |

No single assumption moves the 2035 D-BENCH result by more than about 0.6 kt, against an S-ALT assumption of 39.3 kt for 2035. The conclusion that the food side of S-ALT is a stretch above every documented route does not depend on any one assumption.

**Corrections outside the model** (D-BENCH 2035; our calculation, not run through `tools/demand_model.py`) {VN-direct|Low} {fx:estimate}:

| Correction | Basis | Protein delivered (kt) | Meat protein displaced (kt) |
|---|---|---|---|
| None (model central values) | as published | 19.05 | 2.35 |
| Food pool of 35 kt of product (DMA-004) | monthly trade, D8.2 notes | 17.60 (R1 10.19) | 2.35 |
| Export protein share 0.05 to 0.12 (DMA-168) | wrapped plant foods abroad | 17.1 to 17.8 (R7 0.5 to 1.2) | 2.35 |
| School plant-slot protein not displacing (DMA-114 for schools set to 0) | Decision 3958 and the menu audit | 19.05 | about 2.29 (R4 0.65 to about 0.58) |

None changes the headline: displacement stays at about 0.2% of meat protein, and delivered protein stays in the 17 to 19 kt range.

## D8.6 Limits

- The three most influential inputs are unmeasured in Vietnam: the share of people keeping chay days, the share of meat eaten as processed products and protein per canteen meal ([[ch25-demand-to-frontier]] lists the cheap ways to measure them).
- Displacement factors come from studies outside Vietnam; Vietnamese compensation on added chay days is unknown.
- The model has no prices or elasticities inside it; scenarios encode price conditions through adoption shares. For hybrids, price is not the binding condition (D8.2 notes).
- R2 to R6 count protein of any origin, and only R1 applies a domestic share; D8.3 gives the domestic reading.
- One displacement factor (0.8) covers canteens and schools; school protein sold into the plant slot replaces tofu, not meat (D8.5).
- Funder units (D8.7) are computed outside the model and do not move with the assumptions.
- Feed demand for novel protein is not modelled here; it is in the balance model ([[app-f4-balance-model]]).

## D8.7 Funder units: animals spared, CO2e avoided and meals

Welfare, climate and market-shaping funders count animals, tonnes of CO2e and meals, not tonnes of meat protein. We converted the model's D-BENCH and D-STRETCH outputs for 2030, 2035 and 2050 with a standard-library script (`working-papers/wave7/lines/L3-funder-units/calc_funder_units.py`), which writes `demand_funder_units.csv` and `impact_per_tonne.csv` {VN-direct|Low} {fx:estimate} {dx:inferred}.

**Method.**
- **Species split.** Added chay days (R2), canteens and schools (R4) and household analogues (R5) take the national consumption mix of the Part IV S-BASE path. Hybrids (R3) take our assumption of 75% pork, 15% poultry and 10% ruminant, informed by the Vissan label audit (pork first-listed in 50 of 80 non-chay products, beef in 18; SKU counts, not volumes) [@BUY-05].
- **Animals.** Displaced protein / 0.15 kg protein per kg carcass = carcass displaced; carcass / FAOSTAT carcass weight per animal for Viet Nam, 2022 to 2024. Counts are slaughter avoided per year, including animals raised abroad for imported meat; they are not welfare-weighted.
- **CO2e.** Gross = carcass displaced x GLEAM life-cycle intensity for East and Southeast Asia, humid zone (reference year 2005). Net = gross minus the replacing protein at 8.36 kg CO2e per kg protein (a pulses proxy). The high bound uses per-protein means from Poore and Nemecek where they exceed GLEAM's upper values.
- **Meals.** A meal-equivalent is one protein dish of 20 g of protein supplied by plant or novel protein instead of meat (DMA-083).
- **Canteen meat mix.** We read five caterers' published menus: of meat-led protein dishes, 62.6% are pork, 26.4% poultry and 11.0% beef. At that mix a tonne of protein through canteens spares about 745 animals (51 pigs, 691 birds, 4 cattle and buffalo) rather than about 1,090 at the national mix [@UPL-27; @UPL-32; @FUF-03] {VN-adjacent|Low} {dx:inferred}. We report the two as a range.

**Conversion factors** [@FUF-03; @FUF-04; @FUF-05; @FUF-07; @FUF-08; @QNT-10]:

| Factor | Value | Range | Unit | Basis | Evidence |
|---|---|---|---|---|---|
| Protein per kg carcass | 0.15 | n/a | kg protein per kg carcass | Package factor (DMA-001); GLEAM implies 0.118 (pig) and 0.139 (chicken), which would raise head counts and CO2e by 15 to 27% | {VN-direct\|Low} |
| Carcass per pig | 66 | 65 to 67 | kg per head | FAOSTAT, Viet Nam, 2022 to 2024 | {VN-direct\|Medium} |
| Carcass per chicken | 2.1 | 1.83 to 2.36 | kg per head | FAOSTAT 2022 to 2024 (volatile series) | {VN-direct\|Low} |
| Carcass per duck | 1.2 | 1.2 to 1.34 | kg per head | FAOSTAT 2022 to 2024 | {VN-direct\|Low} |
| Carcass per head of cattle | 148 | 140 to 148 | kg per head | FAOSTAT 2022 to 2024; imported beef comes from heavier animals, so ruminant counts are upper bounds | {VN-direct\|Medium} |
| Carcass per buffalo | 196 | 171 to 196 | kg per head | FAOSTAT 2022 to 2024 | {VN-direct\|Medium} |
| Chicken share of poultry meat | 0.884 | n/a | share of carcass | FAOSTAT 2024 production | {VN-direct\|Medium} |
| Cattle share of ruminant meat | 0.797 | n/a | share of carcass | FAOSTAT 2024 production | {VN-direct\|Medium} |
| National meat mix, 2030; 2035; 2050 | pork 57.4, poultry 33.9, ruminant 8.7; 53.6, 37.9, 8.5; 51.6, 39.1, 9.2 | n/a | % of carcass | Balance model S-BASE | {VN-direct\|Medium} |
| Processed meat mix (R3) | pork 75, poultry 15, ruminant 10 | n/a | % of carcass | Our assumption; the ruminant share drives R3 CO2e | {VN-direct\|Low} |
| Pork emission intensity | 6.15 | 5.37 to 7.94 | kg CO2e per kg carcass | GLEAM, East and Southeast Asia, industrial, humid zone | {VN-adjacent\|Medium} |
| Poultry emission intensity | 5.18 | 4.19 to 6.84 | kg CO2e per kg carcass | GLEAM broilers; ducks assumed equal | {VN-adjacent\|Medium} |
| Ruminant emission intensity | 54.5 | 40.1 to 81.0 | kg CO2e per kg carcass | GLEAM mixed beef | {VN-adjacent\|Medium} |
| Meat per protein, high bound | pig 76.1; poultry 57.0; beef herd 498.9 | n/a | kg CO2e per kg protein | Poore and Nemecek global means | {general\|Medium} |
| Replacing protein (textured soy) | 8.36 | 1.31 to 19.75 | kg CO2e per kg protein | Pulses proxy; low: feed-grade soy concentrate; high: tofu | {general\|Low} |
| Replacing protein (fungal, sensitivity) | 11.7 | 3.8 to 38.4 | kg CO2e per kg protein | Package estimate for cassava-based fungal protein on the 2023 grid; mycoprotein literature | {VN-direct\|Low} |
| Protein per canteen dish | 20 | 15 to 25 | g | DMA-083, DMA-187, DMA-188 | {VN-direct\|Low} |
| Canteen net displacement | 0.8 | 0.5 to 1.0 | kg meat protein per kg protein supplied | DMA-114, DMA-183, DMA-184 | {general\|Low} |
| Import unit value, plant protein | 1.1 | 0.9 to 1.3 | USD per kg product | Chinese shipments to Vietnam, 2019 to 2025 | {VN-direct\|Medium} |

**Results, displacing routes R2 to R5** (our calculation) {VN-direct|Low} {fx:estimate} {dx:inferred}:

| Scenario | Year | Animals spared, million (caterer to national mix) | Chickens and ducks, share | Pigs (national mix) | Net CO2e avoided, kt (range) | Canteen and school meal-equivalents, million | R1 imports replaced, USD million (gross) |
|---|---|---|---|---|---|---|---|
| D-BENCH | 2030 | 0.34 to 0.39 | 91 to 92% | 28,598 | 24 (11 to 47) | 11.0 and 0.0 | 4.8 to 7.0 |
| D-BENCH | 2035 | 2.38 to 2.66 | 93 to 94% | 142,271 | 139 (78 to 250) | 36.6 and 4.0 | 16.1 to 23.3 |
| D-BENCH | 2050 | 5.98 to 6.85 | 93 to 94% | 358,384 | 363 (204 to 652) | 98.4 and 16.0 | 61.8 to 89.3 |
| D-STRETCH | 2030 | 3.18 to 3.36 | 93 to 94% | 196,133 | 188 (109 to 337) | 33.1 and 4.0 | 10.6 to 15.3 |
| D-STRETCH | 2035 | 9.80 to 10.59 | 94% | 557,803 | 553 (326 to 986) | 97.5 and 16.0 | 35.0 to 50.5 |
| D-STRETCH | 2050 | 23.13 to 25.31 | 94% | 1,304,513 | 1,351 (803 to 2,388) | 246.1 and 40.0 | 147.9 to 213.7 |

The national-mix values and their carcass-yield ranges are in `demand_funder_units.csv`; the caterer-mix values replace R4's national-mix animals with 931 animals per tonne of meat protein displaced (745 / 0.8). Precision is arithmetic, not accuracy. Import substitution (R1) spares no animals and avoids about no CO2e, because soy protein replaces soy protein; its value is the import bill. On D-BENCH in 2035, by route: added chay days spare about 1.2 million birds, 49,000 pigs and 56 kt CO2e; hybrids 366,000 birds, 54,000 pigs and 45 kt; canteens and schools 0.60 to 0.89 million animals and 36 kt; household analogues about 116,000 animals and 2 kt.

**Per tonne of protein delivered, 2035** (`impact_per_tonne.csv`; our calculation) {general|Low} {fx:estimate} {dx:inferred}:

| Route (profiles) | What the protein replaces | Meat protein displaced (t) | Pigs | Poultry | Cattle and buffalo | Net t CO2e (soy replacement) | Net t CO2e (fungal replacement) |
|---|---|---|---|---|---|---|---|
| R1 import substitution (TPP-01) | Imported textured soy and gluten | 0 | 0 | 0 | 0 | about 0 | sign unknown |
| R2 upgrades on existing chay days (TPP-02) | Lower-protein chay foods | 0 | 0 | 0 | 0 | minus 8.4 | minus 11.7 |
| R3 hybrids (TPP-03, TPP-06) | Meat in processed products | 0.9 | 68 | 466 | 3.9 | 56.7 | 53.3 |
| R4 canteens, national dish mix (TPP-04) | Meat in protein dishes | 0.8 | 43 | 1,046 | 2.9 | 44.5 | 41.1 |
| R4 canteens, caterer meat mix | Meat in protein dishes | 0.8 | 51 | 691 | 4 | about 51 | not computed |
| R4 canteens, pork dish | A pork dish | 0.8 | 81 | 0 | 0 | 24.4 | 21.1 |
| R4 canteens, chicken dish | A chicken dish | 0.8 | 0 | 2,760 | 0 | 19.3 | 15.9 |
| R5 household analogues | Mostly nothing | 0.2 | 11 | 261 | 0.7 | 4.8 | 1.5 |
| R6 plant-milk protein (TPP-05) | Nothing measured | 0 | 0 | 0 | 0 | minus 8.4 | minus 11.7 |

Negative values mean the delivered protein adds emissions because it removes no meat. The R3 CO2e figure rests on the 10% ruminant assumption; at 0% ruminant it would be about 28 t.

**Per meal.** At 20 g of protein and 0.8 net displacement, a canteen meal shifted spares about 0.015 animals at the caterer meat mix (0.010 to 0.029 across five caterers), about 0.020 at the national mix, 0.0016 for a pork dish and 0.055 for a chicken dish, against about 0.134 in ACE's estimate for Sinergia Animal's programme [@AFN-26] ([[app-d7-global-benchmarks]]). Upland school lunches and dinners, 84% pork-led among meat-led meals, give about 0.009.

**Limits of the conversion.** Everything inherits the demand model's Low confidence. Species mixes are assumptions; GLEAM intensities refer to 2005 and no Vietnamese cradle-to-carcass LCA was found [@FUF-09]. The package's 0.15 kg protein per kg carcass and its poultry carcass basis could each shift head counts by 15 to 25%. Fish and eggs are not counted, so R2's animal count is a floor; fish leads 26% of canteen protein dishes. Head counts are not welfare-weighted.

**Related:** [[ch18-demand-sizing]], [[app-f4-balance-model]], [[app-d7-global-benchmarks]].
