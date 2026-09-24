# QNT: Vietnam protein and feed balance model, 2025 to 2050

Wave 3 (futures 2030 to 2050), stream balance_model. Source ID prefix: QNT. Question tree: F4. Accessed and written 24 September 2026.

**Files in this folder:** `model.py` (run `python model.py`), `assumptions.csv` (238 rows: every input, with basis, source and confidence), `outputs.csv` (scenario, year, indicator, value, unit and labels), `sensitivity.csv` (tornado table for 2050 soybean-meal and maize import need), `published_projections.csv` (86 rows of published projections and official targets), and these notes.

**How to read this.** Demand enters only as a macro input (population and per-person consumption from published outlooks). There is no consumer research and no market-size forecast for alternative-protein products. Every model output for 2030, 2035, 2040 and 2050 is our **[estimate]** built from stated assumptions. The four scenarios are what-if cases, not forecasts, and carry no probabilities. Official targets, published model projections and our estimates are kept apart and labelled. "Soybean meal" is abbreviated SBM; "feed conversion ratio" FCR (kg of feed per kg of output); "cwe" is carcass-weight equivalent.

---

## Headline findings

1. **On trend diets and trend efficiency, Vietnam's soybean-meal import need rises from 7.2 Mt (2025) to about 8.5 Mt (2030), 9.9 Mt (2040) and 10.4 Mt (2050), +44%.** Nearly all of it would be imported, as today. [VN-direct | Low | estimate | 2030, 2040, 2050] (QNT-model; MAC-04; QNT-01)
2. **The 2050 range across four scenarios is 7.0 Mt (S-EFF) to 11.7 Mt (S-HIGH).** Only the efficiency scenario keeps soybean-meal imports at or below the 2025 level; the alternative-protein scenario (S-ALT) gives 8.8 Mt. [VN-direct | Low | estimate | 2050] (QNT-model)
3. **Compound feed grows from 28.5 Mt (2025) to 33.5 Mt (2030) and 40.9 Mt (2050) in S-BASE (35.4 to 46.2 Mt in 2050 across scenarios).** The 2030 value fits the Decision 1520 target of 30 to 32 Mt only if the target includes aquafeed; livestock and poultry feed alone reaches 26.4 Mt. [VN-direct | Low | estimate | 2030, 2050] (QNT-model; MAC-23; REG-54)
4. **The model reproduces the published near-term outlooks.** Interpolated 2027 values are 30.5 Mt of total feed and 7.7 Mt of soybean meal (USDA Post: 30.6 Mt and 7.8 Mt). Protein-meal feed use is within 2% of OECD-FAO for 2030 (11.3 vs 11.1 Mt) and 2035 (12.6 vs 12.9 Mt). [VN-direct | Medium | estimate vs projection | 2027 to 2035] (QNT-model; MAC-01; MAC-04; QNT-01)
5. **Feed formulation and efficiency move 2050 soybean-meal imports more than diets do.** In the tornado test, the soybean-meal inclusion trend (minus 1% to plus 0.5% a year) swings 2050 imports by 3.7 Mt and the FCR gain rate (0 to 1% a year) by 2.4 Mt. Aquaculture growth after 2035, poultry demand per person and meat self-sufficiency each move it by about 1 Mt. [VN-direct | Low | estimate | 2050] (QNT-model)
6. **Efficiency does twice the work of alternative protein at the shares tested.** S-EFF (1% a year better FCR, 1% a year lower soybean-meal inclusion) cuts 2050 soybean-meal need by 3.4 Mt against S-BASE. S-ALT (10% of soybean-meal protein and 40% of fishmeal replaced by microbial protein, 10% of meat demand replaced by plant-based and fermented foods) cuts it by 1.6 Mt (16%). The two are additive, not rivals. [VN-direct | Low | estimate | 2050] (QNT-model)
7. **The S-ALT volumes are industrial in scale.** In 2050 S-ALT implies about 0.51 Mt of microbial feed protein (0.86 Mt of dry product: roughly 78 plants of Entobel's 11 kt a year design size or 43 of Calysseo's 20 kt Chongqing plant) plus 0.14 Mt of food protein (0.96 Mt of finished product). By 2030 it is about 0.10 Mt of feed product, about 9 plants of 11 kt. [VN-direct | Low | estimate | 2030, 2050] (QNT-model; ECO-01; FM-13)
8. **Replacing 1 t of meat protein in diets avoids about 4.5 t of soybean-meal imports and 9.5 t of maize imports** (2050 S-BASE feed structure), against 1.65 t of imported soybeans for the plant-based share. Microbial protein in feed replaces soybean meal but not maize, so only the food route lowers the maize bill. [VN-direct | Low | estimate | 2050] (QNT-model)
9. **Carbohydrate feedstock is the binding physical constraint for sugar-route fermentation.** S-ALT 2050 needs 1.32 Mt of glucose: 5.4 Mt of fresh cassava roots (about 52% of the 2025 harvest, on about 262,000 ha) or 1.25 Mt of sugar (about 96% of the 2025/26 crop). That competes head-on with starch exports to China and E10 ethanol. [VN-direct | Low | estimate | 2050] (QNT-model; FS-01; FS-05; FS-31)
10. **Vietnam already farms about 4.0 million ha abroad for feed.** Imported soybean meal needed about 2.3 M ha in 2025 (mass allocation; 2.9 M ha if all land is charged to meal) and imported maize 1.6 M ha: together about five times Vietnam's own maize area (0.81 M ha). S-BASE reaches 4.7 M ha by 2050. [VN-direct | Low | estimate | 2025, 2050] (QNT-model; QNT-01; MAC-01)
11. **Cassava-based microbial protein does not save land; it moves it.** It needs about 0.80 ha per tonne of protein against about 0.71 ha for imported soybean meal (mass allocation). Hydrogen gas fermentation needs a small fraction of that: 0.4% of soybean meal's land per tonne of protein in one techno-economic study, and over 10 times the protein per hectare of any staple crop with solar power in another. [general | Medium | estimate | 2025] (QNT-model; QNT-09; QNT-11)
12. **Energy volume is not the constraint for S-ALT; energy carbon is.** S-ALT 2050 needs about 11.7 TWh of electricity and 185 kt of hydrogen, under 1% of the 1,238 to 1,375 TWh of commercial electricity planned for 2050. [VN-direct | Low | estimate | 2050] (QNT-model; GT-11)
13. **Hydrogen gas fermentation beats soybean meal on CO2 only with electricity below about 21 g CO2 per kWh** (about 66 g against fishmeal), at about 41 kWh per kg of protein. The grid average derived from PDP8 targets reaches about 21 g only around 2050, so before then the route needs dedicated renewable power to be a climate gain. In S-ALT the net electricity-related balance is plus 0.37 Mt CO2 in 2040 and minus 0.57 Mt in 2050. [VN-direct | Low | estimate | 2040, 2050] (QNT-model; QNT-10; QNT-11; GT-11)
14. **Fishmeal demand stays roughly flat in our base (250 to 275 kt) but rises in OECD-FAO (221 kt in 2025 to 339 kt in 2035).** Our base assumes inclusion rates keep falling by 1.5% a year; OECD-FAO does not. S-ALT and S-EFF take it to about 150 kt by 2050. [VN-direct | Low | estimate vs projection | 2035, 2050] (QNT-model; QNT-01)
15. **The published demand path is already steep.** OECD-FAO puts Vietnamese pig, poultry and beef food use at 61.9 kg per person in 2035, above Korea (59.2 kg) and China (48.5 kg) in the same outlook, with poultry growing 4.2% a year per person. On NSO data, 2025 carcass meat output (about 6.0 Mt; 59 kg per person) already sits inside the Decision 1520 target for 2030 (6.0 to 6.5 Mt; 58 to 62 kg). [VN-direct | Medium | projection and estimate | 2030, 2035] (QNT-01; MAC-23; MAC-14)
16. **Maize imports are driven more by non-feed use and domestic output than by diets.** S-BASE gives 13.8 Mt in 2050 (+16%). If domestic E10 ethanol shifted to maize and non-feed use reached the OECD-FAO 2035 level, 2050 imports would rise by 2.8 Mt. Domestic maize output at minus 2% versus plus 1.4% a year swings them by 3.3 Mt. OECD-FAO projects 16.6 Mt of imports by 2035. [VN-direct | Low | estimate | 2050] (QNT-model; QNT-01; FS-09; GT-10)
17. **The unresolved 2025 aquafeed volume hardly changes the soybean-meal result** (0.02 Mt in 2050), because soybean-meal use is calibrated on the 7.2 Mt actually fed. It matters for species-level plays and fishmeal, not for the national protein-import total. [VN-direct | Low | estimate | 2050] (QNT-model; MAC-01; MAC-06)
18. **No published Vietnam-specific projection of meat, feed or feed-protein demand beyond 2035 was found.** OECD-FAO stops at 2035, USDA at 2035 (country tables not readable here) and official targets at 2030. Our 2040 and 2050 values are extensions and should be read as such. [VN-direct | High | gap | 2040, 2050] (QNT-01; QNT-02; QNT-06; MAC-23)

---

## Detailed findings

### F4.1 Published projections and targets (task 1)

All rows are in `published_projections.csv` with model, scenario, base year and source. The most useful source is the **OECD-FAO Agricultural Outlook 2026-2035**, which models Viet Nam as a country in Aglink-Cosimo. Its PDF is blocked to our fetch tool by robots.txt, but the data are open through the OECD SDMX API (QNT-01). Recipe for updating: `https://sdmx.oecd.org/public/rest/data/OECD.TAD.ATM,DSD_AGR@DF_OUTLOOK_2026_2035,1.1/VNM.A.<commodity>.<measure>..?startPeriod=2024&endPeriod=2035`. Commodity codes: CPC_EX_PK (pigmeat), CPC_EX_PT (poultry), CPC_EX_BV (beef), CPC_EX_AC (aquaculture), CPC_04 (fish), CPC_21920 (protein meal), CPC_21233 (fishmeal), CPC_0112 (maize), CPC_0141 (soybean), CPC_0221 (milk). Measures: QP, QC, IM, EX, FE, CR, FO_PC, YLD. Values were read through a summarising fetch tool; the annual sequences are smooth, which supports the reading, but two commodity labels were swapped in one summary and reassigned by magnitude.

**OECD-FAO 2026-2035 baseline, Viet Nam (QNT-01)** [VN-direct | Medium | projection]

| Series | 2025 | 2030 | 2035 | Growth 2025 to 2035 |
|---|---|---|---|---|
| Pigmeat production, kt cwe | 3,895.6 | 4,241.2 | 4,468.1 | +1.4% a year |
| Pigmeat food per person, kg | 28.64 | 31.08 | 31.51 | +1.0% a year |
| Poultry production, kt | 2,567.1 | 3,434.4 | 4,481.5 | +5.7% a year |
| Poultry food per person, kg | 17.03 | 21.23 | 25.80 | +4.2% a year |
| Beef production, kt cwe | 321.5 | 320.5 | 372.4 | +1.5% a year |
| Beef food per person, kg | 3.99 | 4.31 | 4.60 | +1.4% a year |
| Aquaculture, kt | 5,691.7 | 6,123.4 | 6,826.9 | +1.8% a year |
| Fish exports, kt live weight | 4,634.9 | 4,387.1 | 5,000.5 | +0.8% a year |
| Fish food per person, kg | 42.40 | 46.41 | 46.79 | +1.0% a year |
| Protein meal feed use, kt | 9,530.4 | 11,058.4 | 12,928.2 | +3.1% a year |
| Protein meal imports, kt | 7,370 | 8,597.3 | 10,288.3 | +3.4% a year |
| Fishmeal feed use, kt | 220.8 | 309.0 | 338.7 | +4.4% a year |
| Maize imports, kt | 12,000 | 13,965.9 | 16,642.0 | +3.3% a year |
| Maize feed use, kt | 12,339.6 | 14,334.0 | 16,769.3 | +3.1% a year |
| Maize production, kt | 4,300 | 4,714.6 | 4,921.8 | +1.4% a year |
| Soybean imports, kt | 2,600 | 2,909.8 | 3,114.7 | +1.8% a year |
| Milk production, kt | 1,341.1 | 1,648.8 | 2,009.5 | +4.1% a year |

Comparators in the same outlook, pig plus poultry plus beef food use per person in 2035: Korea 59.2 kg, China 48.5 kg, Malaysia 46.1 kg, Viet Nam 61.9 kg. The Thai poultry figure (3.4 kg) looks implausible and is not used.

**Other published numbers used.**
- **USDA Post** (edition 1.0 anchors): total feed 29.5 Mt (2026) and 30.6 Mt (2027); soybean-meal feed use 7.4 Mt (2026) and 7.8 Mt (2027); corn imports 15 Mt (MY2026/27) [VN-direct | Medium | projection] (MAC-01; MAC-03; MAC-04).
- **USDA Oilseeds: World Markets and Trade, September 2026:** Vietnam MY2026/27 soybean imports 3.5 Mt and soybean-meal imports 6.85 Mt [VN-direct | Medium | projection | 2027] (QNT-07).
- **USDA Agricultural Projections to 2035** (February 2026): Vietnam real GDP growth 6.4% in 2026 and 5.7% a year on average over 2026 to 2035. The country trade tables could not be read [VN-direct | Medium | projection | 2035] (QNT-02).
- **Official targets:** Decision 1520/QD-TTg for 2030: industrial feed 30 to 32 Mt, meat 6.0 to 6.5 Mt cwe, 58 to 62 kg meat per person, 220 to 225 eggs per person (MAC-23; REG-54). Decision 339/QD-TTg (11 March 2021) for 2030: aquaculture 7.0 Mt, capture 2.8 Mt, seafood exports USD 14 to 16 billion (QNT-06). Revised PDP8 (Decision 768/QD-TTg): GDP growth assumption 10% a year (2026 to 2030) and 7.5% a year (2031 to 2050); commercial electricity 1,237.7 to 1,375.1 TWh in 2050; power-sector emissions 197 to 199 Mt (2030) and about 27 Mt (2050) (GT-11). [VN-direct | High | projection (official target)]
- **Global long-run models:** IMPACT (SSP2): global per-person protein demand from red meat, poultry, dairy and eggs +14% (total +38%) between 2020 and 2050; South Asia +49% per person (QNT-12) [general | High | projection | 2050]. Falcon, Naylor and Shankar: global food demand +50 to 60% between 2019 and 2050, with poultry the dominant meat (QNT-05) [general | Medium | projection | 2050].
- **Vietnamese demand studies:** QUAIDS work finds rising meat budget shares and a shift towards poultry and beef (QNT-03; QNT-04) [VN-direct | Medium]. No projected numbers were extracted.
- **Not found:** any FAO, IFPRI, GLOBIOM or peer-reviewed projection for Vietnamese meat, feed or feed protein to 2050. The ABARES 2050 study lists Vietnam only as a model region (QNT-15). An official quote confirms the import dependence (over 65% of feed raw materials and over 90% of additives imported, March 2026) but gives no projection (QNT-13). Thread stopped after 5 web searches and 4 literature queries returned repetition.

### F4.2 Model method (tasks 2 and 5): how to reproduce

`python model.py` reads `assumptions.csv` and writes `outputs.csv` and `sensitivity.csv`. It uses only the Python standard library. Years: 2025 (base), 2030, 2035, 2040, 2050. The year 2035 is added so that results can be checked against OECD-FAO and chapter 13.

**Parameter lookup.** Each row of `assumptions.csv` has a parameter, a scenario (ALL, S-BASE, S-HIGH, S-EFF, S-ALT, or SENS-LOW and SENS-HIGH for the tornado) and a year (a year or ALL). The model looks in the scenario first, then S-BASE, then ALL. Years between listed years are interpolated linearly.

**Step 1: demand (macro input).** Per-person consumption in 2025 is calibrated, not assumed: consumption per person = 2025 official live-weight output x dressing yield / self-sufficiency ratio / population. Dressing yields: pigs 0.723 and cattle and buffalo 0.515 (both derived so that our carcass base equals OECD-FAO's), poultry 0.70 (assumption). Self-sufficiency ratios (production / consumption, 2025, from OECD-FAO): pork 0.961, poultry 0.875, ruminant meat 0.522. This gives 39.9 kg of pork, 20.5 kg of poultry and 6.1 kg of beef and buffalo per person (66.5 kg cwe) in 2025. Per-person demand then follows an index: OECD-FAO growth to 2035, then our taper (pork +0.2% a year; poultry +1.0% a year to 2040 and +0.5% after; ruminant meat +1.0% a year). Eggs: 211 eggs per person in 2025 rising to 235 (2030), 260 (2040) and 275 (2050). Milk production follows OECD-FAO growth to 2035, then +3% and +2% a year. Population: UN WPP 2024 medium variant for all years (101.6 M in 2025), so that UN and GSO series are never mixed.

**Step 2: production.** Meat production (cwe) = demand x population x (1 minus the S-ALT food substitution share) x self-sufficiency ratio; live weight = cwe / dressing yield. Aquaculture = 2025 NSO output by species group x an index (OECD-FAO growth to 2035, then +1% a year; S-HIGH follows the 7.0 Mt target for 2030). Explicit export shares by species group (pangasius 0.90, whiteleg shrimp 0.75, other shrimp 0.60, other fish 0.10, unfed species 0.30) give aquaculture exports of 3.1 Mt live weight in 2025 (51% of output). This is consistent with OECD-FAO fish exports of 4.6 Mt, which also include capture and re-exports.

**Step 3: compound feed by species group.** Feed = output x biological FCR x compound-feed share x (1 minus the annual FCR gain) to the power of years since 2025.
- Pigs: FCR 2.8 (whole herd). The 2025 compound share is calibrated: 12.17 Mt of pig feed (55.3% of 22 Mt) / (5.39 Mt x 2.8) = 0.81. It rises to 0.88 (2030), 0.94 (2040) and 0.97 (2050) as household farming declines.
- Poultry: meat FCR 2.5 and eggs 2.4 kg per kg (egg weight 55 g); the 2025 share is calibrated to 9.0 Mt (0.96).
- Other livestock: one coefficient calibrated to 0.81 Mt per unit of (ruminant live weight + milk).
- Aquaculture: pangasius 1.5, whiteleg shrimp 1.3, other shrimp 1.5 (30% on compound feed in 2025, rising to 50%), other fish 1.5 (68% on pellets in 2025, index rising to 1.25). All aquafeed coefficients are scaled by one factor so that the 2025 total equals the USDA 6.5 Mt (the factor is 1.00; with the industry 4.35 Mt it is 0.67).
- FCR gains: S-BASE 0.4% a year (livestock) and 0.3% (aquaculture); S-EFF 1.0% and 0.8%.

**Step 4: protein meals and maize.**
- SBM demand = sum over groups of feed x typical inclusion (pigs 18%, poultry 28%, other livestock 8%, pangasius and whiteleg 28%, other shrimp and other fish 25%) x one calibration factor (1.10) that reproduces the 7.2 Mt fed in 2025, x (1 + inclusion trend) to the power of years. The implied national average is 253 kg of SBM per tonne of feed.
- Other protein meals (rapeseed, copra, palm kernel, DDGS and others) = 2.43 Mt SBM-equivalent in 2025, scaling with feed volume.
- Fishmeal = feed x inclusion (whiteleg 12%, other shrimp 8%, other fish 2.5%, pangasius 1%, pigs and poultry 0.05%) x a trend of minus 1.5% a year (minus 3% in S-EFF). This gives 262 kt in 2025, between OECD-FAO apparent feed use (221 kt) and the top of edition 1.0's central pool (245 kt), and inside its sourced bounds (79 to 290 kt).
- Protein-meal demand (SBM-equivalent) = SBM + other meals + fishmeal x 0.65 / 0.46.
- SBM import need = SBM demand. Domestic soybeans (42 to 43 kt) go mostly to food, so domestic meal is set to zero (error under 0.5%). Bean equivalent = SBM / 0.78.
- Maize: compound-feed maize = feed x inclusion (pigs 45%, poultry 52%, other livestock 30%, aquafeed 5%) x a factor that reproduces 10.9 Mt in 2025. Non-compound maize (3.5 Mt in 2025: USDA feed and residual 14.4 minus 10.9) shrinks with non-compound pig feeding. Non-feed use is 1.61 Mt, held constant. Import need = total use minus domestic output (4.1 Mt, flat in S-BASE). The 2025 check reproduces 11.91 Mt of imports exactly.

**Step 5: land abroad.** Soybean land = SBM x 0.80 (mass allocation) / (yield x 0.78). The yield is 3.16 t per ha in 2025 (OECD-FAO yields for Argentina 2.91, Brazil 3.62 and the United States 3.56, weighted by the origin of Vietnam's soy protein) and grows 0.6% a year. Maize land = maize imports / 7.28 t per ha (2025 import-origin weights), growing 0.3% a year.

**Step 6: S-ALT substitution and what it implies.**
- Food: a share z of meat demand (protein basis, 15% protein per kg cwe) is replaced, and domestic meat production falls in proportion. Of the replacing protein, a share is fermented (mycoprotein-type, on sugar) and the rest is plant-based from imported soy (3.3 t of beans per t of protein).
- Feed: a share x of SBM protein and a share y of fishmeal protein are replaced 1:1 by microbial protein. A share of it comes from hydrogen gas fermentation; the rest from sugar or starch.
- Sugar route: 4.0 t of glucose, 0.37 t of urea and 3.5 kWh of electricity per kg (t) of protein. Cassava: 1.08 t of glucose per t of starch, 4.4 t of roots per t of starch, 20.5 t of roots per ha. Sugar alternative: 0.95 t of sucrose per t of glucose.
- Gas route: 41 kWh per kg of protein (25 kWh per kg of dry biomass from Sillman et al.'s lower-efficiency case plus about 2 kWh for processing, at 65% protein); 0.72 kg H2, 2.7 kg CO2 and 0.17 kg NH3 per kg of protein.
- Emissions: electricity x a grid-factor path derived from PDP8 targets (0.659 t CO2 per MWh in 2025, 0.38 in 2030, 0.20 in 2040, 0.021 in 2050), against published averages of 0.85 (SBM) and 2.72 (fishmeal) kg CO2e per kg of protein.

### F4.3 Scenario definitions

| Scenario | Diets (per-person demand) | Aquaculture | Feed efficiency and formulation | Alternative protein |
|---|---|---|---|---|
| S-BASE | OECD-FAO growth to 2035, then taper. Meat 66.5 kg cwe (2025), 75.4 (2030), 84.3 (2040), 87.6 (2050) | OECD-FAO growth to 2035, then +1% a year: 6.58 Mt (2030), 8.52 Mt (2050) | FCR gains 0.4% a year (livestock) and 0.3% (aquaculture); SBM inclusion constant; fishmeal inclusion minus 1.5% a year | None |
| S-HIGH | S-BASE x income multiplier 1.06 (2030), 1.11 (2040), 1.15 (2050). GDP follows the PDP8 path (10% then 7.5% a year) against S-BASE's 5.7% to 2035 and 4.5% after, with an income elasticity falling from 0.30 to 0.20. Meat 101 kg cwe per person by 2050 | Official path: 7.0 Mt by 2030, 8.97 Mt by 2050 | As S-BASE | None |
| S-EFF | As S-BASE | As S-BASE | FCR gains 1.0% a year (livestock) and 0.8% (aquaculture); SBM inclusion minus 1% a year (amino acids, low-protein diets, by-products); other meals plus 0.5% a year; fishmeal inclusion minus 3% a year | None |
| S-ALT | As S-BASE, with z% of meat demand replaced by plant-based and fermented foods | As S-BASE | As S-BASE | x = 1% (2030), 5% (2040), 10% (2050) of SBM protein; y = 10%, 25%, 40% of fishmeal protein; z = 1%, 5%, 10%; gas route 0%, 30%, 50% of feed microbial protein; fermented share of the food substitute 30%, 40%, 50% |

The S-ALT shares are illustrative what-if levels, not forecasts or targets. The fishmeal shares sit within what trials support (25 to 60% replacement without growth loss, edition 1.0 H9). The SBM share implies large cost falls or policy support: at 2026 costs, microbial feed protein costs 4.6 to 5.1 times as much as SBM protein (edition 1.0 ch09).

### F4.4 Results by scenario (all [estimate], VN-direct, Low; horizon year as shown)

**Compound feed (Mt)**

| Scenario | 2025 | 2030 | 2035 | 2040 | 2050 |
|---|---|---|---|---|---|
| S-BASE | 28.5 | 33.5 | 37.2 | 39.1 | 40.9 |
| S-HIGH | 28.5 | 35.6 | 39.8 | 43.0 | 46.2 |
| S-EFF | 28.5 | 32.5 | 35.1 | 35.8 | 35.4 |
| S-ALT | 28.5 | 33.3 | 36.4 | 37.8 | 38.2 |

S-BASE split in 2050: livestock and poultry 31.6 Mt (pigs 16.3, poultry 14.0, other 1.4) and aquafeed 9.2 Mt.

**SBM import need (Mt, as meal or as beans crushed in Vietnam)**

| Scenario | 2025 | 2030 | 2035 | 2040 | 2050 | 2050 vs 2025 |
|---|---|---|---|---|---|---|
| S-BASE | 7.20 | 8.46 | 9.47 | 9.95 | 10.40 | +44% |
| S-HIGH | 7.20 | 8.98 | 10.11 | 10.92 | 11.72 | +63% |
| S-EFF | 7.20 | 7.81 | 8.08 | 7.85 | 7.00 | minus 3% |
| S-ALT | 7.20 | 8.32 | 9.01 | 9.15 | 8.78 | +22% |

As soybean equivalent, S-BASE 2050 is 13.3 Mt of beans. Protein-meal demand (SBM-equivalent, including other meals and fishmeal) in S-BASE: 10.0 Mt (2025), 11.7 Mt (2030), 14.2 Mt (2050).

**Maize import need (Mt)**

| Scenario | 2025 | 2030 | 2035 | 2040 | 2050 |
|---|---|---|---|---|---|
| S-BASE | 11.91 | 12.96 | 13.85 | 13.98 | 13.84 |
| S-HIGH | 11.91 | 13.91 | 15.16 | 15.80 | 16.28 |
| S-EFF | 11.91 | 12.50 | 12.90 | 12.55 | 11.56 |
| S-ALT | 11.91 | 12.83 | 13.43 | 13.28 | 12.47 |

Maize grows more slowly than feed because non-compound maize feeding shrinks as pig farming industrialises, and because domestic output is held flat rather than allowed to fall.

**Fishmeal demand (kt):** S-BASE 262 (2025), 265 (2030), 274 (2035), 269 (2040), 253 (2050); S-HIGH 267 (2050); S-EFF and S-ALT about 151 (2050).

**Land abroad (million ha, soybean with mass allocation plus maize):** 2025: 2.34 + 1.64 = 4.0. In 2050: S-BASE 2.91 + 1.76 = 4.7; S-HIGH 5.4; S-EFF 3.4; S-ALT 4.0.

**Meat production (Mt cwe):** 6.04 (2025); S-BASE 7.02 (2030) and 8.55 (2050); S-ALT 7.69 (2050).

### F4.5 What S-ALT implies (task 2, alternative-protein volumes)

| Item | 2030 | 2040 | 2050 | Unit |
|---|---|---|---|---|
| Microbial feed protein | 56 | 265 | 514 | kt protein |
| of which replacing SBM | 39 | 222 | 449 | kt protein |
| of which replacing fishmeal | 17 | 44 | 65 | kt protein |
| Microbial feed product (dry) | 102 | 460 | 863 | kt |
| Food substitute protein | 12 | 69 | 145 | kt protein |
| Food protein ingredient (dry) | 23 | 136 | 292 | kt |
| Finished food product (15% protein) | 79 | 457 | 964 | kt |
| Glucose (sugar route, feed plus food) | 238 | 852 | 1,318 | kt |
| or cassava roots, if all from cassava | 968 | 3,473 | 5,368 | kt fresh |
| cassava land | 47 | 169 | 262 | thousand ha |
| or sugar, if all from sugar | 226 | 810 | 1,252 | kt |
| Electricity | 0.21 | 4.0 | 11.7 | TWh a year |
| Hydrogen (gas route) | 0 | 57 | 185 | kt a year |
| CO2 as feedstock (gas route) | 0 | 215 | 694 | kt a year |
| Nitrogen as urea (sugar route) | 22 | 79 | 122 | kt |
| Soybeans for plant-based food (imported) | 27 | 136 | 239 | kt |
| SBM imports avoided vs S-BASE | 0.14 | 0.80 | 1.62 | Mt |
| of which via feed substitution | 0.08 | 0.48 | 0.98 | Mt |
| of which via less meat produced | 0.05 | 0.32 | 0.65 | Mt |
| Fishmeal avoided | 27 | 68 | 102 | kt |
| Maize imports avoided | 0.13 | 0.70 | 1.37 | Mt |
| Soybean land abroad avoided, net of food soy | 37 | 205 | 402 | thousand ha |
| Electricity CO2 (PDP8-derived grid factor) | 0.08 | 0.80 | 0.25 | Mt CO2 |
| SBM plus fishmeal emissions avoided (published averages) | 0.10 | 0.43 | 0.81 | Mt CO2e |

Readings:
- **Scale compared with today.** The 2030 S-ALT feed product (about 0.1 Mt) equals about nine Entobel-size plants (11 kt a year design). Entobel is Vietnam's only operating novel feed-protein plant, and the Chinese FeedKind plant is 20 kt a year (ECO-01; FM-13). By 2050 S-ALT implies 0.86 Mt of feed product.
- **Feedstock competition.** Sugar-route glucose in 2050 equals about half of Vietnam's 2025 cassava roots, or almost all of its sugar. Cassava roots rose about 75% in price in the year to April 2026 and now also feed E10 ethanol (FS-11; GT-10). Residues (cassava pulp, about 0.8 to 1.7 Mt of dry matter, ch02) could supply part of the carbon but need pre-treatment.
- **Energy and carbon.** Electricity needs are small against planned supply. The carbon test is strict: gas-route protein at 41 kWh per kg only beats SBM (0.85 kg CO2e per kg of protein, land-use change not checked) below about 21 g CO2 per kWh. The sugar route's electricity alone (3.5 kWh per kg) beats SBM below about 240 g per kWh. That level is reached in the late 2030s on the PDP8-derived path, and the figure excludes cassava farming, steam and urea.
- **Food route.** Each tonne of meat protein replaced avoids about 4.5 t of SBM and 9.5 t of maize imports, because animals convert feed protein into meat protein at low efficiency. The plant-based share adds about 3.3 t of imported soybeans per tonne of protein.

### F4.6 Sensitivity: what moves 2050 SBM import need (task 3)

S-BASE 2050 = 10.40 Mt. One assumption (or a paired set) is varied at a time; full values are in `sensitivity.csv`.

| Rank | Assumption varied (low; high) | 2050 SBM import, low / high (Mt) | Swing (Mt) | 2050 maize import swing (Mt) |
|---|---|---|---|---|
| 1 | SBM inclusion trend (minus 1.0; plus 0.5% a year) | 8.09 / 11.78 | 3.69 | 0 |
| 2 | FCR gain rate, livestock and aquaculture (0; 1.0 and 0.8% a year) | 11.42 / 9.00 | 2.42 | 3.99 |
| 3 | Aquaculture growth after 2035 (0; 2.5% a year) | 10.02 / 11.08 | 1.05 | 0.18 |
| 4 | Poultry demand per person after 2030 (index 1.45; 1.99 in 2050) | 9.97 / 11.01 | 1.05 | 1.79 |
| 5 | Meat self-sufficiency, pork and poultry (10 points lower; up to 1.00 and 0.915) | 9.70 / 10.68 | 0.98 | 2.05 |
| 6 | Population 2050 (minus 5%; plus 5%, illustrative) | 10.02 / 10.78 | 0.76 | 1.55 |
| 7 | Pig whole-herd FCR (2.6; 3.2), which sets the 2025 compound share | 10.17 / 10.86 | 0.69 | 1.10 |
| 8 | Pork demand per person (minus 10%; plus 10% in 2050) | 10.08 / 10.73 | 0.65 | 1.61 |
| 9 | Pig compound-feed share by 2050 (0.90; 1.00) | 10.17 / 10.50 | 0.33 | 1.24 |
| 10 | 2025 aquafeed volume (industry 4.35 Mt; USDA 6.5 Mt) | 10.43 / 10.40 | 0.02 | 0.00 |
| 11 | Domestic maize output growth (minus 2; plus 1.4% a year) | no effect | 0 | 3.33 |
| 12 | Non-feed maize, E10 stress test (1.61 Mt; 4.4 Mt by 2050) | no effect | 0 | 2.79 |
| Comparison | S-ALT microbial share of SBM protein (0%; 20% by 2050) | 9.75 / 7.80 (S-ALT) | 1.95 | 0 |

Reading: the two formulation and efficiency assumptions dominate, and they are also the least observed: we found no Vietnamese time series of average SBM inclusion or FCR by species. The demand-side assumptions (poultry, pork, population, self-sufficiency) each move the result by about 0.6 to 1 Mt. For maize, the FCR rate, domestic output and non-feed use (ethanol) matter most.

### F4.7 Sanity checks against edition 1.0 anchors and published projections (task 4)

| Check | Model | Anchor or published value | Verdict and explanation |
|---|---|---|---|
| 2025 livestock and poultry feed | 21.98 Mt | about 22 Mt (MAC-01) | Calibrated |
| 2025 aquafeed | 6.5 Mt | USDA 6.5 Mt; industry 3.9 to 4.8 Mt (MAC-01; MAC-06) | Calibrated to USDA; industry value tested (little effect on SBM) |
| 2025 total feed | 28.48 Mt | USDA 28.6 Mt | Matches (USDA uses 22.12 Mt for livestock) |
| 2025 SBM fed | 7.20 Mt | 7.2 Mt (MAC-04) | Calibrated |
| 2025 maize imports | 11.91 Mt | 11.91 Mt (MAC-08); OECD 12.0 Mt | Calibrated |
| 2025 fishmeal | 262 kt | edition 1.0 central pool 120 to 245 kt (sourced bounds 79 to 290 kt); OECD apparent feed use 221 kt | Inside the sourced bounds. Our figure includes snakehead, marine fish and livestock uses that the pool excluded |
| 2025 pork per person | 39.9 kg cwe | about 39 kg (MAC-21, weight basis not stated) | Consistent |
| 2027 total feed (interpolated) | 30.5 Mt | USDA 30.6 Mt | Matches |
| 2027 SBM fed (interpolated) | 7.7 Mt | USDA 7.8 Mt | Matches |
| 2027 SBM supply | 7.7 Mt demand | USDA MY2026/27: 6.85 Mt of meal plus 3.5 Mt of beans imported, about 9 Mt of meal supply | USDA's import forecast implies stock building, exports or higher use than its own 7.8 Mt feed forecast; logged |
| 2030 industrial feed | 33.5 Mt total; 26.4 Mt livestock only | Decision 1520: 30 to 32 Mt | Plausible if the target includes aquafeed; out of reach if it does not. Scope still unresolved |
| 2030 meat output | 7.02 Mt cwe | Target 6.0 to 6.5 Mt | Above target, because 2025 (6.04 Mt on our conversion) is already inside the 2030 range. Either the target is conservative or NSO live weights run high |
| 2030 aquaculture | 6.58 Mt (S-BASE); 7.0 Mt (S-HIGH) | Target 7.0 Mt; OECD 6.12 Mt on its lower base | S-BASE applies OECD growth to the NSO base and falls short of the target |
| 2030 and 2035 protein meals (SBM plus other meals) | 11.3 and 12.6 Mt | OECD 11.06 and 12.93 Mt | Within 2% |
| 2035 maize feed use | 16.3 Mt | OECD 16.8 Mt | Within 3% |
| 2035 maize imports | 13.9 Mt | OECD 16.6 Mt | 17% below OECD. OECD has 4.4 Mt of non-feed use by 2035 (ours 1.6 Mt) and rising domestic output; see disagreements |
| 2035 fishmeal | 274 kt | OECD 339 kt | 19% below: our inclusion trend falls, OECD's use rises |
| 2030 pork production | 4.34 Mt cwe | OECD 4.24 Mt | 2% above: we hold self-sufficiency constant, OECD lets imports rise |
| 2030 poultry production | 3.33 Mt live weight | OECD 3.43 Mt (apparently on a live-weight base) | 3% below |
| 2050 per-person meat demand | 87.6 kg cwe (S-BASE); 101 kg (S-HIGH) | No published Vietnam 2050 value; IMPACT global +14% per person 2020 to 2050 | S-BASE is +32% on 2025. This is high for a country already near Korea's level in 2035 on OECD numbers. S-HIGH is a stress case, not a central view |

### F4.8 Saturation check on demand

- OECD-FAO's 2025 to 2035 path already brings Vietnam's meat food use per person above Korea's and China's in the same dataset (F4.1). Continuing poultry at +4.2% a year per person to 2050 would give about 38 kg cwe of poultry per person alone. We taper instead.
- The OECD-FAO poultry base appears to use NSO live weight as carcass weight (2,567 kt against 2,602 kt live). If so, OECD-FAO overstates poultry meat, and poultry feed demand, by about 30%. We take growth rates from OECD-FAO but apply our own 0.70 dressing yield to the NSO base.
- Ageing (an "aged society" by 2035, GT-13) and health concerns argue for slower per-person growth after 2035 than income alone implies. The S-BASE taper reflects this. It is a judgement, labelled Low confidence.

### F4.9 Limitations

- All technical coefficients (FCR, inclusion rates, compound shares) are assumptions within published ranges, calibrated to national totals. No Vietnamese series by species exists in the sources we could reach.
- Self-sufficiency is held constant, so meat imports grow with demand. A policy of import substitution or liberalisation would change feed demand (sensitivity rank 5).
- The model has no prices. It cannot say whether microbial protein will be competitive. Edition 1.0 ch09 covers cost; the FTG and ECF streams cover cost trajectories.
- Climate impacts on Vietnamese livestock, aquaculture and maize, and on exporting countries' yields, are not modelled (CLM stream). The soybean yield growth of 0.6% a year is a projection that does not add climate impacts.
- Emissions cover only electricity for alternative protein, set against published averages for SBM and fishmeal. Land-use change from soy expansion, cassava farming, steam and urea are excluded.

---

## Signposts

| Signpost | Current value | What would show a trajectory is unfolding | Where to watch |
|---|---|---|---|
| National average SBM per tonne of feed (the largest swing factor) | About 253 kg per t (our 2025 calibration) | Falling towards 230 kg by 2035 points to S-EFF; rising points above S-BASE | Vietnam Feed Association; mill disclosures; lysine and methionine import volumes (customs HS 2922.41, 2930.40) |
| SBM plus soybean imports (meal equivalent) | 7.2 Mt fed (2025) | Above 8.5 Mt by 2030 points to S-BASE or S-HIGH; flat points to S-EFF | Customs monthly data (HS 2304, 1201); USDA GAIN oilseeds reports |
| Total compound feed | 28.5 Mt (2025) | 33 to 36 Mt by 2030 points to S-BASE or S-HIGH | MAE year-end report; USDA grain and feed annual |
| Poultry output growth | +5.9% (2025), +5.6% (H1 2026) | Staying above 4% a year after 2030 favours S-HIGH | NSO quarterly releases |
| Pig-sector industrialisation | Compound share about 0.81 (calibrated) | Large-farm share of the herd rising; household herd falling | MAE livestock department; agricultural census |
| Aquaculture output against target | 6.12 Mt (2025) | 7.0 Mt by 2030 (S-HIGH path) | NSO; Decision 339 review |
| Non-feed maize (ethanol) | About 80% of E10 ethanol imported (mid-2026) | Domestic ethanol plants switching to imported maize | MOIT; plant announcements (FS-09) |
| Microbial feed protein listed for aquafeed | Not listed | MAE lists SCP or methanotroph meal; first plant above 10 kt | MAE circulars; edition 1.0 signpost tracker |
| Grid emission factor | 0.659 t per MWh (2023, latest official) | Falling towards 0.38 by 2030 and below 0.1 later; the gas route needs about 0.02 | MAE Department of Climate Change annual factor |
| OECD-FAO revisions | 2026-2035 edition | Next edition revises Vietnam's poultry base or maize non-feed use | OECD SDMX API (recipe in F4.1) |

---

## Implications by audience

- **Investors:** The protein gap is large and growing (plus 1.6 to 4.5 Mt of SBM need by 2050 in the scenarios without efficiency gains), but feed efficiency alone could absorb most of the growth (S-EFF). Size theses on the fishmeal and functional segments first: even S-ALT's 40% fishmeal replacement is only about 65 kt of protein a year by 2050, and the SBM segment is disciplined by the soy price. Treat gas fermentation as a play that pays off only where very low-carbon power is available (below about 21 g CO2 per kWh).
- **Policy makers:** A national feed-protein balance is cheap to maintain, and nobody publishes one. The two assumptions that matter most (SBM inclusion and FCR) are not measured. Efficiency programmes (genetics, precision feeding, amino-acid adoption, herd health) are no-regret: they cut imports in every scenario. The Decision 1520 feed target needs a stated scope (with or without aquafeed), and the meat target appears already met on NSO data.
- **Startups:** Carbohydrate is finite: S-ALT 2050 would need half the cassava crop or all the sugar. Build on residues and on sites where carbon is cheap. Plan gas routes around dedicated renewable power.
- **F&B and feed manufacturers:** On trend, SBM purchases rise by about 44% by 2050 and maize by about 16%. Each 1% a year fall in national SBM inclusion is worth about 2.3 Mt a year of imports by 2050 (S-BASE against the low sensitivity case). Poultry and aquafeed growth drive the increase.
- **Research bodies:** Publish Vietnamese FCR and inclusion data by species and farm type. Test low-protein, amino-acid-balanced diets for Vietnamese pigs and poultry. Build the open cost and resource model that this balance model plugs into.
- **International bodies:** Vietnam's feed imports already occupy about 4 M ha abroad, rising to 4.7 M ha on trend. Supporting feed efficiency and traceable soy (EUDR-type risk) has regional leverage. A regional protein balance for ASEAN importers would be a useful public good.

---

## Disagreements log

| Topic | Source A | Source B | Position taken |
|---|---|---|---|
| 2025 aquafeed volume | USDA 6.5 Mt (MAC-01) | Industry 3.9 to 4.8 Mt (MAC-06) | Unresolved. USDA used for consistency with the USDA SBM figure. The sensitivity shows a 0.02 Mt effect on 2050 SBM |
| Poultry production basis | OECD-FAO 2,567 kt (QNT-01), labelled carcass | NSO 2,602 kt live weight (MAC-14) | OECD probably treats live weight as carcass. We apply a 0.70 dressing yield to NSO |
| Fishmeal feed use to 2035 | OECD-FAO rises to 339 kt (+4.4% a year) | Our S-BASE about 270 kt (inclusion minus 1.5% a year, after FM-05 history) | Kept ours; the direction is uncertain. Both stay below 350 kt |
| Maize imports 2035 | OECD-FAO 16.6 Mt | Our S-BASE 13.9 Mt | Feed use agrees within 3%. The gap is non-feed use (OECD 4.4 Mt against our 1.6 Mt, from USDA's split) and domestic output. The E10 stress test covers it |
| Domestic maize output | OECD-FAO +1.4% a year to 2035 | Area falling from 820,000 to 810,000 ha (MAC-01) | Flat in S-BASE; both ends in the sensitivity |
| Aquaculture base | OECD-FAO 5.69 Mt (2025) | NSO 6.12 Mt | NSO base, OECD growth rates |
| Meat target 2030 | Decision 1520: 6.0 to 6.5 Mt | Our 2025 estimate: 6.04 Mt cwe | Target already met on NSO data; flagged, not resolved |
| USDA 2026/27 soy balance | 6.85 Mt of meal plus 3.5 Mt of beans imported (QNT-07) | 7.8 Mt SBM feed use in 2027 (MAC-04) | Implies stock building or other uses; not resolved |
| H2 per kg SCP | 2.41 kg H2 per kg SCP (Sefton 2018, via QNT-14) | 0.47 kg per kg biomass derived from QNT-10, consistent with stoichiometry | Used 0.47 per kg biomass (0.72 per kg protein); 2.41 is probably a different basis or an error |
| Gas-route electricity | 9.86 kWh per kg biomass (lab state of the art, QNT-10) | 25 kWh per kg (lower-efficiency case, QNT-10) | 25 used as central, 9.86 as the optimistic bound; cross-check with FTG |
| Per-person meat 2035 | OECD-FAO growth implies about 82 kg cwe on our base | Korea and China are lower in the same outlook | Followed OECD to 2035 in S-BASE and tapered after; flagged as high |

---

## Open questions and gaps

| Gap | Why it matters | Cheapest way to close it |
|---|---|---|
| Vietnamese average SBM inclusion and FCR by species and farm type | Top two swing factors (3.7 and 2.4 Mt in 2050) | Vietnam Feed Association or three large mills (De Heus, CP, GreenFeed) for formulation shares; MAE livestock department for herd productivity |
| USDA long-term country tables for Vietnam (corn and SBM imports to 2035) | A second model projection alongside OECD-FAO | ERS International Baseline data tables (Excel) at ers.usda.gov; our tools could not read the PDF |
| Scope of the Decision 1520 feed target | Decides whether 2030 is on track | Read the decision text; ask the MAE Department of Livestock Production |
| OECD-FAO poultry base for Vietnam | May overstate poultry by about 30% | FAOSTAT production series for Vietnamese poultry; ask the OECD-FAO Aglink-Cosimo team |
| Share of pig feed that is compound feed | Sets industrialisation growth | 2025 agricultural census; MAE farm-size statistics |
| Non-feed maize and ethanol feedstock plans | Up to about 2.8 Mt of extra imports | MOIT and the three fuel-ethanol plants (FS-09) |
| Land-use change emissions of imported soy by origin | Could change the climate case for substitution | Trase supply-chain data for Vietnam's soy imports (Argentina, Brazil, United States) |
| Vietnam-specific 2050 demand projection | Our 2040 and 2050 values are extensions | Supplementary country results of Komarek et al. 2021 (IMPACT); IFPRI Vietnam team |
| FTG energy and hydrogen factors | Consistency across Part V | Cross-check with `wave3/frontier_gas/frontier_gas_tech.csv` when available |

---

## Leads

- The OECD SDMX API is a reliable way to get OECD-FAO data by country when the report PDF is blocked (recipe in F4.1). It also gives yields and comparators, and allows annual updates of this model.
- China's plan to reduce soybean meal in feed (FM-36: SBM use in Chinese feed fell 8% in 2024) is the nearest real-world test of the S-EFF formulation lever and deserves a dedicated read.
- Trase soy-import footprints would turn our land-abroad estimate into a deforestation-risk estimate (relevant to EUDR for Vietnamese seafood and meat exports to the EU).
- The per-tonne multipliers in F4.5 (4.5 t of SBM and 9.5 t of maize per tonne of meat protein replaced) can be reused by the ECF and NTS streams for policy arithmetic.
- The supplementary data of Komarek et al. may hold Vietnam-specific IMPACT projections by SSP.

---

## Appendix: evidence extracts for the gas-route factors

- Leger et al. 2021 (QNT-09): per kg of dry biomass, 1.76 kg CO2 and 0.112 kg NH3; usable protein 55 to 75% of biomass; hydrogen-based SCP about USD 2.6 per kg of dry biomass, about USD 4 to 5 per kg of protein, against about USD 2.5 (fishmeal) and USD 1 (soybean meal) per kg of protein; per unit of land, PV-driven SCP can reach over 10 times the protein yield of any staple crop. [general | High for the published model result]
- Sillman et al. 2020 (QNT-10): base electricity-to-biomass consumption 9.86 kWh per kg of biomass (state of the art, 54% efficiency, laboratory); a lower-efficiency case of 25 kWh per kg; PEM electrolysis 53 kWh per kg H2. The paper has a published correction whose content was not checked. [general | Medium]
- Jean and Brown 2024 (QNT-11): minimum selling price of H2/CO2 SCP USD 2,070 per t; carbon intensity as low as 0.73 kg CO2e per kg of protein against 0.85 (soybean meal average) and 2.72 (fishmeal average); SCP land 0.4% of soybean meal's per tonne of protein. [general | Medium, abstract only]
- Our derivation: 25 kWh per kg of biomass divided by 53 kWh per kg H2 gives about 0.47 kg H2 per kg of dry biomass, consistent with knallgas stoichiometry of roughly 0.4 to 0.5 kg.

---

## Sources

New sources (prefix QNT), all accessed 24 September 2026:

- **QNT-01** OECD and FAO. OECD-FAO Agricultural Outlook 2026-2035, data via the OECD SDMX API, dataflow OECD.TAD.ATM DSD_AGR@DF_OUTLOOK_2026_2035 version 1.1. Published June 2026. https://sdmx.oecd.org/public/rest/data/OECD.TAD.ATM,DSD_AGR@DF_OUTLOOK_2026_2035,1.1/VNM.A.CPC_EX_PK.QP+QC+FO_PC+IM+EX..?startPeriod=2024&endPeriod=2035 (the report PDF at https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/oecd-fao-agricultural-outlook-2026-2035_5610f218/47874669-en.pdf was blocked by robots.txt). Country projections for meat, fish, protein meal, fishmeal, maize, soybean and milk, plus yields. Type: intergovernmental model projection.
- **QNT-02** USDA Office of the Chief Economist. USDA Agricultural Projections to 2035, OCE-2026-1, 13 February 2026. https://ers.usda.gov/publications/pub-details?pubid=113816 (PDF at https://ers.usda.gov/media/20856/oce-2026-1.pdf?v=16321; only the macro tables were read). Vietnam GDP growth assumption. Type: government model projection.
- **QNT-03** Hoang, H. and Meyers, W.H. (2015). Food demand in Vietnam: structural changes and projections to 2030. AgEcon Search. doi 10.22004/ag.econ.212456. Abstract only; direction of meat demand. Type: peer-reviewed conference paper.
- **QNT-04** Quach, V.D., Yabe, M., Nomura, H. and Takahashi, Y. (2022). Structural changes in meat consumption in Vietnam: evidence from household survey data. Journal of Agribusiness in Developing and Emerging Economies 13(4): 590-612. doi 10.1108/jadee-08-2021-0206. Abstract only; poultry and beef gaining share. Type: peer-reviewed.
- **QNT-05** Falcon, W.P., Naylor, R.L. and Shankar, N.D. (2022). Rethinking global food demand for 2050. Population and Development Review. doi 10.1111/padr.12508. Abstract; global demand +50 to 60%, shift to poultry. Type: peer-reviewed.
- **QNT-06** Prime Minister of Vietnam. Decision 339/QD-TTg of 11 March 2021 approving the fisheries development strategy to 2030, vision 2045. Read via Tap chi Thuy san Viet Nam, https://thuysanvietnam.com.vn/phe-duyet-chien-luoc-phat-trien-thuy-san-den-nam-2030/ (official text at https://chinhphu.vn/default.aspx?pageid=27160&docid=202798, not opened). Targets for aquaculture, capture and exports in 2030. Type: law or policy (secondary reading).
- **QNT-07** USDA Foreign Agricultural Service. Oilseeds: World Markets and Trade, September 2026. https://apps.fas.usda.gov/psdonline/circulars/oilseeds.pdf. Vietnam MY2026/27 soybean and soybean-meal imports. Type: government statistics and forecast.
- **QNT-08** USDA Foreign Agricultural Service. World Agricultural Production, September 2026. https://apps.fas.usda.gov/psdonline/circulars/production.pdf. Corn yields in Argentina, Brazil and the United States. Type: government statistics.
- **QNT-09** Leger, D., Matassa, S., Noor, E., Shepon, A., Milo, R. and Bar-Even, A. (2021). Photovoltaic-driven microbial protein production can use land and sunlight more efficiently than conventional crops. PNAS 118(26): e2015025118. doi 10.1073/pnas.2015025118. CO2 and NH3 per kg of biomass, protein share, cost per kg of protein, land ratio. Type: peer-reviewed.
- **QNT-10** Sillman, J., Uusitalo, V., Ruuskanen, V. and others (2020). A life cycle environmental sustainability analysis of microbial protein production via power-to-food approaches. International Journal of Life Cycle Assessment 25: 2190-2203. doi 10.1007/s11367-020-01771-3 (correction doi 10.1007/s11367-021-01962-6, not checked). Electricity per kg of biomass and per kg H2. Type: peer-reviewed.
- **QNT-11** Jean, A.B. and Brown, R.C. (2024). Techno-economic analysis of gas fermentation for the production of single cell protein. Environmental Science and Technology 58(8): 3823-3829. doi 10.1021/acs.est.3c10312. Abstract; carbon intensities of SCP, SBM and fishmeal; land ratio. Same study as edition 1.0 COST-45. Type: peer-reviewed.
- **QNT-12** Komarek, A.M., Dunston, S., Enahoro, D. and others (2021). Income, consumer preferences, and the future of livestock-derived food demand. Global Environmental Change 70: 102343. doi 10.1016/j.gloenvcha.2021.102343. Abstract; IMPACT SSP2 global and regional changes to 2050. Type: peer-reviewed.
- **QNT-13** VietnamPlus (30 March 2026). Nganh chan nuoi tu chu nguyen lieu doi pho bien dong toan cau. https://www.vietnamplus.vn/nganh-chan-nuoi-tu-chu-nguyen-lieu-ung-pho-bien-dong-toan-cau-post1101719.vnp. Official quote: over 65% of feed raw materials and over 90% of additives imported. Type: press.
- **QNT-14** Garcia Martinez, J.B. and others (2021). Potential of microbial protein from hydrogen for preventing mass starvation in catastrophic scenarios. Sustainable Production and Consumption. doi 10.1016/j.spc.2020.08.011. Table value of 2.41 kg H2 per kg SCP (citing Sefton 2018), used only in the disagreements log (excerpt via Scite). Type: peer-reviewed.
- **QNT-15** ABARES (2012). Food demand to 2050: opportunities for Australian agriculture. https://www.agriculture.gov.au/sites/default/files/sitecollectiondocuments/abares/publications/Outlook2012FoodDemand2050.pdf. No Vietnam projection; not used. Type: government.
- **QNT-model** AltProtein Vietnam QNT balance model (this work): `model.py`, `assumptions.csv`, `outputs.csv`, `sensitivity.csv`, 24 September 2026. Type: our estimate.

Edition 1.0 sources reused (see the package `sources.csv`): GT-10, GT-11, GT-12, GT-13, MAC-01, MAC-03, MAC-04, MAC-06, MAC-08, MAC-09, MAC-12, MAC-14, MAC-15, MAC-19, MAC-21, MAC-23, MAC-28, REG-54, FS-01, FS-05, FS-09, FS-11, FS-23, FS-31, COST-01, COST-08, COST-28, COST-30, COST-33, COST-43, FM-01, FM-05, FM-07, FM-08, FM-13, FM-22, FM-36, ECO-01.

---

## Working log

- 24 September 2026: read the protocols, the futures goals, the brief, edition 1.0 ch01, ch02, ch09, ch13, app-h and app-o, and the data files. Read OECD-FAO 2026-2035 through the SDMX API (the PDF and HTML were blocked or JavaScript-only). The USDA OCE-2026-1 PDF was only partly read; the browser fallback could not extract PDF text, and the tab was closed. Literature via OpenAlex and Scite. Built and ran the model; all outputs regenerate from `assumptions.csv`.
- WebSearch calls used: 5 of 12.
