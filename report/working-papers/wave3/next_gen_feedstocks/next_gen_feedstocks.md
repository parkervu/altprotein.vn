# NGF: next-generation feedstocks and circular side streams, 2030 to 2050

Stream: next_gen_feedstocks (wave 4 gap round). Source ID prefix: NGF. Question tree: F3 (inputs that change), F4 (protein and feed balance). All web sources accessed 2026-09-24. Status: complete for this round. WebSearch calls used: 11 of 12.

Companion files in this folder: `feedstock_futures.csv` (17 rows), `land_protein_yields.csv` (15 rows), `ngf_calc.py` (all our arithmetic, standard library, rerunnable with `python ngf_calc.py`).

**The question.** The balance model (QNT) finds that sugar-route fermentation at S-ALT 2050 scale needs about 1.32 Mt of glucose a year (0.85 Mt in 2040): about half of Vietnam's 2025 cassava crop or 96% of its sugar. Does a second-generation carbon supply (crop residues, one-carbon feedstocks, food-industry side streams, released land) lift that ceiling by 2040 to 2050?

**Short answer.** Physically, yes, many times over. Technically and financially, only if lignocellulosic sugar becomes bankable, which it is not today anywhere in the world. Without a 2G breakthrough, today's starchy and liquid side streams cover about 5 to 11% of the 2050 need. If 2G works at modest scale (about 1 Mt of straw a year by 2050), second-generation routes could cover about 55 to 84%. The ceiling moves from land and food exports to capital, technology risk and rules.

**Terms.** DM = dry matter. SE = sugar-equivalent: tonnes of glucose that would grow the same mass of microbial protein on the QNT sugar route (4.0 t glucose per t protein). 2G = second generation (lignocellulosic). TEA = techno-economic analysis. MSSP = minimum sugar selling price. FOAK = first-of-a-kind plant. TRL = technology readiness level. C1 = one-carbon feedstocks (CO2, methane, methanol). COD = chemical oxygen demand. "Our estimate" = our own calculation from stated inputs, not a forecast. Cases A, B and C are what-if cases with no probabilities.

Evidence tags: [VN-direct] / [VN-adjacent] / [general]; confidence High / Medium / Low; foresight type [trend] / [projection] / [estimate] / [signal] / [wildcard]; horizon year. Non-NGF source IDs (FS, IND, VCO, MAC, SCI, COST, QNT, NTS, FTG, ECF, CLM) refer to edition 1.0 or other wave 3 streams.

---

## Headline findings

1. **Tonnage is not the constraint.** Vietnam makes about 52 Mt of air-dry rice straw a year (2025, straw-to-grain ratio 1.19). Converted to sugar, it could in theory yield about 13 to 21 Mt SE a year in 2050, about 10 to 16 times the S-ALT 2050 need. Covering the need would take 3.0 to 4.3 Mt of straw: 6 to 10% of national straw, or 21 to 31% of the straw the 1 million ha programme must collect by 2030. [VN-direct volume; general conversion] Low. [estimate], 2050. (NGF-01; NGF-04; NGF-05; NGF-calc)
2. **Straw is not idle, but most Mekong straw is still burned.** The Mekong Delta produces over 24 Mt of straw a year; only about 30% was collected in April 2025 and about 70% burned or buried. The 1 million ha low-emission rice programme (about 14 Mt of straw a year from two crops) must collect at least 70% in its specialised areas by 2025 and 100% by 2030. Mechanised collection costs USD 12 to 18 per t; mushroom growing earns USD 50 to 100 net per t of straw. [VN-direct] Medium. [trend] and [projection: official target], 2025 to 2030. (NGF-02; NGF-04; NGF-05; NTS-32)
3. **Technology, not biomass, is the binding constraint.** Every Western commercial cellulosic ethanol plant has shut or been abandoned: DuPont, Abengoa and POET-DSM between 2014 and 2019, and Clariant's Podari plant (63 million litres a year, USD 258 M) in December 2023 after it "did not achieve Clariant's targeted operational parameters". [general] High. [trend], 2014 to 2023. (NGF-33; NGF-34)
4. **Asia's only rice-straw 2G plant shows the risk.** India's Panipat plant (100 kL of ethanol a day, about 200,000 t of straw a year, INR 984 crore spent) made next to nothing in its first year and reached 62% of design capacity only in December 2025, after modifications for straw moisture and silica; farmers preferred burning to selling straw, and three other Indian 2G plants were paused. [VN-adjacent] Medium. [signal], 2023 to 2025. (NGF-10; NGF-11)
5. **On paper, cellulosic sugar is cheap; in practice, the plants are dear.** Mature-plant TEAs put the minimum sugar selling price at USD 342 to 467 per t (US studies), below Vietnamese cassava glucose at April 2026 prices (USD 511 to 560 per t, our estimate). A lab-optimised Indian bagasse process gives USD 1,320 per t. First-of-a-kind plants cost about USD 2,100 to 2,400 per t of annual sugar capacity (Panipat, Podari), about USD 3,400 per delivered tonne at Panipat's 62% use. [general] Medium (TEAs), Low (our derivations). [estimate], 2026. (NGF-06; NGF-07; NGF-08; NGF-11; NGF-33; FS-11)
6. **Covering the whole S-ALT 2050 need with 2G sugar would need USD 2.8 to 4.5 billion of plants at first-of-a-kind costs,** or 15 to 21 plants of Panipat's straw size. [VN-direct inputs] Low. [estimate], 2050. (NGF-calc)
7. **Bottom line by case (share of the S-ALT 2050 need of 1.32 Mt glucose).** Case A, no 2G breakthrough (only today's starchy and liquid side streams): 0.07 to 0.14 Mt SE, 5 to 11%. Case B, 2G works at modest scale (1 Mt of straw a year by 2050, a quarter of cassava pulp, small C1): 0.73 to 1.11 Mt SE, 55 to 84%, of which lignocellulosic sugar 28 to 40%. Case C, 2G and C1 scale (5 Mt of straw, 0.5 Mt SE of e-methanol): 2.9 to 4.2 Mt SE, more than twice the need. None of these cuts food exports. [VN-direct inputs] Low. [estimate], 2040 and 2050. (NGF-calc)
8. **Cassava pulp is the only near-term second-generation carbon of scale.** Its starch (0.48 to 0.98 Mt a year) could give 0.47 to 0.95 Mt SE with ordinary amylases and no cellulosic pretreatment. But pulp is already sold as feed, and its volume follows Chinese starch demand (2024 was about 60% of 2025). [VN-adjacent] Low. [estimate], 2030 to 2050. (edition 1.0 app-c C3; NGF-calc)
9. **One-carbon routes are limited by cost, not volume.** Supplying the 2050 need through methanol would take about 1.5 Mt of methanol, 0.29 Mt of green H2 (1.5 to 2.9% of the 2050 hydrogen target), 2.1 Mt of CO2 and about 16 TWh. IRENA projects e-methanol at USD 250 to 630 per t by 2050 (USD 287 to 724 per t SE). In Vietnam, at 2026 hydrogen costs it would be USD 785 to 1,112 per t SE; at USD 1.5 to 2 per kg of H2, USD 495 to 695, about cassava-glucose parity. [general projection; VN-direct inputs] Medium (IRENA), Low (Vietnam). [projection] and [estimate], 2050. (NGF-12; NGF-13; FTG-16; FTG-18)
10. **Methanol-fed yeast protein is at pilot scale in China:** 0.43 g of biomass per g of methanol at 50.6% protein and 33 C, about 4.6 t of methanol per t of protein against 4.0 t of glucose on the sugar route. [VN-adjacent] Medium. [signal], 2023. (NGF-13)
11. **Liquid side streams are small but free and already at the factory gate.** Starch-factory wastewater holds 0.23 to 0.65 Mt of COD a year (0.15 to 0.43 Mt SE if all were fermented; about 0.08 Mt of methane as biogas); ethanol stillage 0.02 to 0.09 Mt SE; tofu, soy-milk and brewery wastewater 0.07 to 0.13 Mt SE. Enifer's revival of the PEKILO mycoprotein process (3,000 t a year plant in Finland; a stillage pilot with Brazil's FS) is the model to watch. [VN-adjacent; general] Low. [estimate] and [signal], 2025 to 2050. (NGF-17; NGF-24; NGF-29; NGF-calc)
12. **Rules are a hidden ceiling for waste-derived feed.** EU feed law bans faeces, household waste and "all waste obtained from the various phases of the treatment of the urban, domestic and industrial waste water" from feed; only process water that carries feed or food material is exempt. Vietnam has no equivalent ban: its veterinary authority only advises against untreated kitchen waste for pigs (cook at 100 C for 20 to 30 minutes). Export seafood and meat chains that follow EU-style rules would reject protein grown on wastewater-treatment streams, food waste or manure-derived gas. [general; VN-direct] Medium. [signal], 2026 onwards. (NGF-14; NGF-30)
13. **Household food waste (about 76 kg per person, 7.7 Mt a year) holds 0.6 to 1.2 Mt SE, but is not a feed-protein carbon source before 2040** on hygiene and rule grounds. Pig-manure biogas (about 0.13 Mt of capturable methane now, 0.29 Mt by 2050 on our assumptions) could feed methanotrophs in theory (0.3 to 0.7 Mt SE) but competes with farm energy and carries the same perception risk. [VN-direct; general] Low. [estimate], 2025 to 2050. (NGF-28; MAC-12; FTG-25)
14. **Energy is the main competitor for straw.** Vietnam's power plan targets 4.8 to 7.0 GW of biomass power by 2050; if all of it burned straw, it would need 39 to 58 Mt a year, more than the national total. Rice straw alone could support about 2.6 GW. E15 and E20 plans add 2G ethanol as a second competitor. [VN-direct] Low. [estimate], 2050. (NTS-26; NGF-01; NGF-31; NGF-calc)
15. **Released rice land is going to fruit, factories and roads, not protein.** In the 2026 winter-spring season rice area fell 37.3 thousand ha: in the south 12 thousand ha went to other annual crops, 5.6 thousand to perennials and 1.9 thousand to aquaculture; in the north mostly to an airport, industrial zones, transport and housing. Against the 2021 plan, Decision 1177 removes 1.12 M ha of agricultural land and adds 1.19 M ha of non-agricultural land. No plan names soybean or other protein crops. [VN-direct] Medium. [trend], 2026 to 2030. (NGF-18; NGF-20; NTS-15; NTS-22)
16. **Per hectare, fermentation beats Vietnamese soybean.** Microbial protein from cassava (1.26 t per ha) or cane (1.41 t per ha) is about twice Vietnam's soybean protein yield (0.58 t per ha per crop) and similar to imported soy (1.14 t). Straw adds 0.73 to 1.04 t per ha on top of the rice crop with no extra land. Duckweed on manure water (about 7.5 t per ha, extrapolated) and intensive napier grass (up to 9.6 t) are higher but narrower in use; solar power-to-protein reaches 13 to 22 t per ha of panels. [VN-direct inputs; general] Low. [estimate], 2025. (land_protein_yields.csv)
17. **2G sugar is not low-carbon by default.** One Indian bagasse-sugar LCA gives 1.57 kg CO2e per kg of sugar, above Thai cassava starch (0.60 to 0.97 kg per kg, via ECF). The climate case for residue carbon depends on process energy (lignin-fired steam, clean power). [general] Low. [estimate], 2021 to 2026. (NGF-08; ECF-25)
18. **Vietnam has no 2G pilot, and China's non-grain push is still tiny.** A 2017 estimate put Vietnam's 2G ethanol potential at 10.9 billion litres, but no plant followed; June 2026 reporting still cites high enzyme costs. In China, MIIT and MARA listed 35 "non-grain bio-based" cases in January 2026, yet BBCA's non-grain lactic acid line is 1,000 t within 500,000 t of capacity (0.2%). [VN-direct; VN-adjacent] Medium. [signal], 2017 to 2026. (NGF-31; NGF-32; NGF-35)

---

## Detailed findings

### 1. Lignocellulosic sugars (sub-question 1)

#### 1.1 Volumes now and to 2050

| Stream | 2025 | 2030 | 2040 | 2050 | Basis | Label |
|---|---|---|---|---|---|---|
| Rice straw, national (Mt air-dry) | 51.8 | 47.6 to 51.2 | 44.0 to 50.0 | 41.6 to 48.8 | Paddy x 1.19 (NGF-01). Paddy 43.5 Mt (2025, FS-25); our path 40 to 43 (2030), 37 to 42 (2040), 35 to 41 (2050) from the 17% rice-land cut (NTS-15) and the 35 Mt floor (NTS-04) | [VN-direct] Medium (2025), Low (paths); trend and estimate |
| Rice straw, Mekong Delta | over 24 Mt | similar | falling as coastal land moves to shrimp (CLM) | | MAE (NGF-04); 21 Mt paddy and 24 Mt dry straw (NGF-03) | [VN-direct] Medium |
| Rice straw, 1 million ha programme | about 14 Mt, about 30% collected | 14 Mt, 100% collection target | | | NGF-04; Decision 1490 (NTS-32) | [VN-direct] Medium; projection (official target) |
| Sugarcane bagasse (Mt DM) | 1.93 | 2.03 | 2.03 | 2.03 | 13.3 Mt cane (FS-31) x 0.29 t wet x 50% DM; cane held at 14 Mt (our assumption) | [VN-direct] Low; estimate |
| Cane trash, tops and leaves | about 2.7 Mt | | | | 0.2 t per t cane (NGF-09) | [general] Low |
| Cassava stems not replanted (Mt DM) | 0.86 to 1.29 | 0.84 to 1.26 | same | same | 0.12 to 0.18 t DM per t fresh root (our harvest-index assumption) x 70% not replanted (NGF-27) | [general] Low; estimate |
| Maize stover (Mt DM) | 4.4 | 4.2 | 4.0 | 4.0 | 1.0 t DM per t grain (assumption); grain 4.4 Mt (FS-25) | [VN-direct] Low; estimate |
| Coffee pulp and husk (Mt dried) | 0.45 (2016 basis) | | | | FS-46 | [VN-direct] Low |

Readings:
- **The straw figure is robust to within about 20%, not more.** Published straw-to-grain ratios run from 0.7 to 1.4 in Thailand (NGF-15) and 1.14 in the Mekong (NGF-03, from 24 Mt of dry straw on 21 Mt of paddy). A 2021 paper using 2.2 gets 97 Mt, which is not credible (see Disagreements). We use 1.19 (NGF-01). [VN-direct] Medium.
- **About half the national straw is surplus to current uses** in the power study (NGF-01, with a 10% handling loss), and the Mekong Delta holds 55% of it. Former Kien Giang (now An Giang) alone could run 245 MW of straw power. [VN-direct] Medium. [estimate], 2019 basis.
- **Cassava stems are a starch residue, not only a fibre residue.** Stems hold about 30% starch in dry mass, half of it extractable with water (NGF-25), and 14 to 42% in Guangxi samples (NGF-26). About 30% of stalks are kept as planting stakes (NGF-27). Dispersed upland collection is the barrier. [general; VN-adjacent] Low.
- **Bagasse is committed.** It fires mill boilers, and QNS is expanding its An Khe (Gia Lai) bagasse plant to 135 MW (FS-35). A surplus needs better boilers or cane trash as a substitute fuel. [VN-direct] Low.

#### 1.2 Competing uses

| Use | Evidence | Pressure to 2050 |
|---|---|---|
| Mushrooms | 0.8 kg of mushrooms per 10 kg of dried straw; net profit USD 50 to 100 per t of straw (NGF-05); dry-season Mekong straw is mostly collected for mushrooms, fodder and mulch (NGF-02) | Sets a floor price for collected straw, roughly USD 25 to 50 per t delivered (our assumption) |
| Cattle fodder, straw rolls | Collected dry-season straw (NGF-02) | Cattle herd falling (edition 1.0, MAC-12) |
| Soil return | Incorporation raises paddy emissions 1.5 to 2 times against removal (NGF-05, citing IRRI) | The low-emission rice programme favours removal, which frees straw |
| Biomass power | PDP8: 1.5 to 2.7 GW (2030) and 4.8 to 7.0 GW (2050) of biomass power (NTS-26). At 25% efficiency and 14 MJ per kg, 1 GW burns about 8.2 Mt of straw a year (our arithmetic from NGF-01 parameters), so 4.8 to 7.0 GW would need 39 to 58 Mt if all straw-fired | The largest competitor if power tariffs favour straw |
| 2G ethanol | E10 since June 2026; E15 and E20 discussed, and residues named as future feedstock (NGF-31) | Competes for the same enzymes, plants and straw |
| Burning or burying | About 70% of Mekong straw (NGF-04) | Shrinking by policy; this is the "free" tranche |

#### 1.3 Conversion: sugar yield, cost and readiness

- **Sugar yield.** Rice straw is about 38% cellulose, 25% hemicellulose and 12% lignin, with high ash (NGF-05). Glucose alone at 85% glucan conversion gives about 0.36 t per t of DM; adding xylose at 70% gives about 0.56. We use 0.35 to 0.50 t SE per t of DM, or 0.31 to 0.44 per t of air-dry straw (88% DM at baling, NGF-02). The low end assumes an organism that cannot use xylose. [general] Low. [estimate].
- **Published costs (MSSP).** NREL deacetylation and disk refining on corn stover: USD 0.191 to 0.212 per lb of sugar, about USD 421 to 467 per t (NGF-06). Autohydrolysis plus mechanical refining: USD 446 per t, USD 342 to 347 with xylitol and polyol co-products (NGF-07). Alkali-pretreated sugarcane bagasse in India, lab-optimised: USD 1.32 per kg (NGF-08). Enzyme costs are higher than early models assumed (ECF-08). [general] Medium.
- **Benchmarks in Vietnam.** Cassava-starch glucose about USD 511 to 560 per t at April 2026 starch prices (our estimate from FS-11: starch USD 520 to 540 FOB, 1.08 t glucose per t starch, plus USD 30 to 60 for hydrolysis). Domestic refined sugar about USD 603 per t SE; world raw sugar USD 314 to 361 per t SE (FS-31; FM-01). Straw feedstock alone adds USD 57 to 162 per t SE at USD 25 to 50 per t of straw. [VN-direct] Low. [estimate], 2026.
- **Capital cost of real plants (our derivation).** Panipat: INR 984 crore (about USD 119 M at INR 83 per USD), 100 kL a day, about 26 kt of ethanol and 57 kt of sugar a year: about USD 2,090 per t of annual sugar capacity, about USD 3,400 per delivered tonne at 62% use (NGF-11). Podari: USD 258 M for 63 million litres (about 50 kt of ethanol, 108 kt of sugar): about USD 2,380 per t (NGF-33). [VN-adjacent; general] Low. [estimate].
- **TRL.** 7 to 8 for straw and bagasse sugar: demonstrated at commercial scale, but no plant has run reliably at design output for years. Starchy and liquid residues (pulp starch, molasses, stillage) are TRL 6 to 9 because they skip cellulosic pretreatment. [general] Medium.

#### 1.4 Projects in Vietnam, Thailand and the region

| Country | Project or programme | Status (September 2026) | Source | Label |
|---|---|---|---|---|
| Vietnam | 2G ethanol from straw, bagasse or coffee husk | No plant or pilot found. A 2017 study put 2G ethanol potential at 10.9 billion litres; June 2026 reporting still names high enzyme costs and says only about two of six ethanol plants run | NGF-31; NGF-32 | [VN-direct] Medium; signal |
| Vietnam | Rice straw collection under the 1 million ha programme | About 30% collected (April 2025); targets 70% (2025) and 100% (2030) | NGF-04 | [VN-direct] Medium |
| Thailand | Residue potential for 2G ethanol | 174.1 Mt of residues a year from cane, cassava, rice and palm; 20.2 billion litres of 2G ethanol potential; no 2G plant in operation in the study | NGF-15 | [VN-adjacent] Medium |
| Thailand | Nakhonsawan BioComplex (GGC and KTIS) | Phase 2 (THB 1.43 billion, from January 2022): biomass power, utilities and a NatureWorks PLA plant, all on sugarcane (first generation); no cellulosic sugar unit named | NGF-16 | [VN-adjacent] Medium |
| India | Panipat 2G ethanol (rice straw) | 62% of design in December 2025; Bathinda, Bargarh and Numaligarh paused in late 2024 | NGF-10; NGF-11 | [VN-adjacent] Medium |
| China | Non-grain bio-based materials cases (MIIT and MARA, January 2026) | 35 cases, 25 of them R&D (enzymes, saccharification); BBCA non-grain lactic acid 1,000 t of 500,000 t | NGF-35 | [VN-adjacent] Medium (secondary source) |
| Finland, Brazil | Enifer PEKILO mycoprotein on side streams | 3,000 t a year plant under construction (Kirkkonummi); 500 t pilot on corn-ethanol thin stillage with FS in Brazil, 10,000 t a year if successful; EU novel-food dossier filed | NGF-17 | [general] Medium; signal (company claims) |

### 2. One-carbon and two-carbon feedstocks (sub-question 2)

| Route | Carbon input per t of protein | SE per t of input | Cost now | Cost 2050 | TRL 2026 | Vietnam volume ceiling | Source |
|---|---|---|---|---|---|---|---|
| Methanol from CO2 and green H2 (e-methanol), then *Pichia pastoris* | 4.6 t methanol | 0.87 | USD 800 to 1,600 per t (BECCS CO2); 1,200 to 2,400 (DAC CO2) | USD 250 to 630 per t (USD 287 to 724 per t SE) | 7 to 8 (methanol); 7 (SCP pilot, China) | None physical: 1 Mt SE needs 1.15 Mt methanol, 0.22 Mt H2, 1.58 Mt CO2, about 12 TWh | NGF-12; NGF-13 |
| Bio-methanol (gasification), then yeast | 4.6 t methanol | 0.87 | USD 320 to 770 per t | USD 220 to 560 per t (USD 253 to 643 per t SE) | 7 to 8 | Competes with straw and husk | NGF-12 |
| Biogas methane (starch factories, pig farms), then methanotrophs | 1.7 t CH4 | 2.35 | Methane at LNG parity USD 631 to 736 per t (USD 268 to 313 per t SE); plant costs extra | not projected | 4 to 5 on biogas; 8 on natural gas (but Calysseo's 20 kt plant halted in 2026) | Starch factories about 0.08 Mt CH4; pig farms 0.13 (2025) to 0.29 Mt (2050) capturable | FTG-06; FTG-25; FTG-31; NGF-24 |
| Acetate (CO2 electrolysis or gas fermentation), then yeast | about 5.7 t acetate (our assumption) | about 0.70 | integrated TEA USD 4.15 per kg SCP (COST-44) | not projected | 4 to 5 | not assessed | COST-44; FTG |
| Hydrogen gas fermentation (direct) | no carbohydrate; 0.69 t H2, 2.95 t CO2 | n/a | see FTG | see FTG | 7 (food grade) | see FTG | FTG-01 |

Readings:
- **Methanol is the cleanest bridge between Vietnam's hydrogen plans and fermentation.** It stores and ships like a liquid sugar and needs no enzymes. At 2050 IRENA costs it overlaps with today's cassava glucose (USD 511 to 560 per t). In Vietnam, at 2026 hydrogen costs (USD 2.81 to 3.88 per kg, FTG-18) it would cost USD 785 to 1,112 per t SE; at USD 1.5 to 2 per kg, USD 495 to 695 (our estimate: 0.193 t H2 and 1.375 t CO2 per t methanol, CO2 at USD 30 to 50 per t, other costs USD 100 to 150 per t). The same hydrogen-price switch that governs direct gas fermentation (FTG headline 8) governs this route. [VN-direct inputs] Low. [estimate], 2050.
- **Methanol protein uses less electricity per tonne of protein than direct hydrogen fermentation.** About 4.6 t of methanol at about 10.7 MWh per t (53 kWh per kg of H2 plus synthesis) is about 49 MWh per t of protein, below the 64 to 83 MWh of direct hydrogen fermentation (FTG-01). But methanol fermentation is strongly exothermic and needs cooling that is costly in the tropics. [general] Low. [estimate].
- **Biogas methane is cheap per unit of carbon, but methanotroph plants are not.** The only Asian 20 kt methane-protein plant has stopped (FTG-06). Biogas also needs cleaning (H2S, siloxanes), and it already displaces fuel oil and coal in starch factories (NGF-24). [VN-adjacent] Medium.
- **Pig-manure methane (our estimate).** 31.4 M pigs (MAC-12) x 0.3 kg of volatile solids per head per day x 0.29 m3 of CH4 per kg x 60% realised gives about 0.43 Mt of CH4 a year in total; the large-farm share we assume capturable (30% now, 65% by 2050) gives 0.13 to 0.29 Mt. National figures were not found; a 2024 study (NGF-37) is closed access. [general coefficients; VN-direct herd] Low. [estimate], 2025 to 2050.

### 3. Food loss and waste, and agro-industrial wastewater (sub-question 3)

| Stream | Volume | Fermentable carbon | Feasibility as fermentation input | Rule status | Source |
|---|---|---|---|---|---|
| Cassava starch wastewater | 13 m3 per t of starch at 12.2 g COD per L (Thai 500 t a day plant); COD from 4.8 to 70 g per L in one review, 7 to 30 in another. Vietnam: about 22 to 32 million m3 a year | 0.23 to 0.65 Mt COD; 0.15 to 0.43 Mt SE if all fermentable carbon were used | Dilute; best used as process water inside the factory (direct yeast SCP) or as biogas. Thailand made about 550 million Nm3 of biogas from it in 2014 | EU: waste from wastewater treatment banned in feed; process water carrying food material allowed | NGF-24; NGF-29; FS-04; NGF-14 |
| Ethanol stillage | 0.23 Mt of ethanol a year (2026); rising if E15 and E20 proceed | 0.10 to 0.15 t SE per t ethanol (glycerol, residual sugars, acids; our assumption) | Proven route abroad: Enifer pilot on thin stillage | Stillage is a feed by-product (DDGS) in most regimes | FS-09; NGF-17 |
| Tofu whey, soy milk and brewery wastewater | about 44 kt of soluble soy sugars; brewery wastewater 3 to 5 L per L of beer | 0.07 to 0.13 Mt SE (technical) | Only large plants (Vinasoy, Heineken, Sabeco) practical | As starch wastewater | FS-24; FS-38; FS-44 |
| Seafood processing wastewater | not quantified | protein-rich, carbon-poor | Protein recovery (hydrolysates), not a carbon source | Animal-origin: benchmark, not alternative protein | FS-48; FS-49 |
| Household food waste | 76 kg per person per year (UNEP 2021, via NGF-28): 7.7 Mt (2025), 8.4 Mt (2050) | 0.6 to 1.2 Mt SE (technical) | Mixed, wet and seasonal; needs source separation | EU bans household waste in feed; Vietnam advises cooking swill at 100 C for 20 to 30 min; China and Korea ban swill feeding (per NGF-30) | NGF-28; NGF-14; NGF-30 |

Readings:
- **Food-industry side streams are best used where they arise.** None is large enough to matter nationally on its own, but each is free, liquid and next to a fermentation-capable plant (starch factory, ethanol plant, brewery). This is the logic of the PEKILO revival (NGF-17). [general] Medium. [signal].
- **The EU rule is precise and matters for exporters.** Annex III of Regulation 767/2009 bans "All waste obtained from the various phases of the treatment of the urban, domestic and industrial waste water", "irrespective of any further processing of that waste", plus solid urban waste such as household waste, and faeces. A footnote exempts process water in independent conduits that carries feed or food material and is free of cleaning agents. So a yeast grown on starch-factory process water before treatment may be defensible; one grown on lagoon effluent is not. [general] High (legal text). (NGF-14)
- **Vietnam's rules are permissive but vague.** We found no Vietnamese legal ban on food waste or wastewater-derived substrates for feed, only veterinary advice on swill (NGF-30). Feed listing of microbial biomass remains the gate (edition 1.0 ch05). [VN-direct] Low (absence of evidence).

### 4. Land released or at risk (sub-question 4)

- **Scale.** The adjusted land plan sets rice land at 3,252.63 thousand ha in 2030 against 3,907.07 thousand ha in 2024, a release of about 654 thousand ha (NTS-15). Against the 2021 plan, agricultural land falls by 1,120.62 thousand ha and non-agricultural land rises by 1,192.43 thousand ha (NGF-20). [VN-direct] Medium. [projection: official plan], 2030.
- **What it is actually becoming.** In the 2026 winter-spring season, rice area fell 37.3 thousand ha: in the south, 12 thousand ha went to other annual crops, 5.6 thousand to perennial crops and 1.9 thousand to aquaculture (Can Tho alone 14.8 thousand ha); in the north, conversions went mostly to non-agricultural use, such as 800 ha for an airport and 938 ha for industrial zones and transport in Bac Ninh (NGF-18). [VN-direct] Medium. [trend], 2026.
- **Rice land that switches crops stays "rice land".** Decree 112/2024 lets farmers grow annual or perennial crops, or combine rice with aquaculture (ponds up to 20% of the plot, 120 cm deep), and the land is still counted as rice land; switching is barred in planned high-yield rice zones (NGF-19). So the 654 thousand ha is mainly land leaving agriculture, and crop switching on remaining rice land comes on top and is not counted in the plan figure. [VN-direct] Medium.
- **No protein-crop plan.** The crop strategy names only "ngô sinh khối làm thức ăn chăn nuôi" (biomass maize for feed) and sets no soybean, maize or cassava area target (NTS-22). [VN-direct] Medium.

**Protein per hectare** (full table in `land_protein_yields.csv`; all Low unless stated):

| System | kg protein per ha per yr | Note |
|---|---|---|
| Soybean, Vietnam (1 crop) | 580 | 1.62 t per ha (FS-24) x 36% |
| Soybean, import origins | 1,140 | 3.16 t per ha (QNT) |
| Maize grain, Vietnam (1 crop) | 460 | 5.43 t per ha x 8.5% |
| Rice, Mekong (2 crops) | 790 | lysine-limited |
| Cassava roots, direct | 250 | carbon crop |
| Cassava via fermentation | 1,260 | 5.03 t glucose per ha / 4.0 |
| Sugarcane via fermentation | 1,410 | 5.38 t sugar per ha (Gia Lai, FS-34) |
| Rice straw via 2G (no extra land) | 730 to 1,040 | on top of the rice crop |
| Napier grass, typical / intensive | 2,500 / 9,600 | ruminants only (NGF-21) |
| Duckweed on manure water (tropical extrapolation) | 7,500 | from a 175-day Flanders pilot (NGF-22) |
| Solar power-to-protein | 13,000 to 22,000 | FTG estimate |

Readings:
- **The released land is mostly the wrong land for carbon crops.** Lowland Mekong rice soils suit cassava poorly and cane only in places. If every released hectare grew cassava for fermentation it would give 3.3 Mt of glucose, an upper bound, not a plan; 50 thousand ha would give 0.25 Mt. This would be first-generation carbon and is excluded from the second-generation totals below. [VN-direct inputs] Low. [estimate], 2030.
- **The land-efficient protein options on wet land are aquatic and forage systems** (duckweed, napier), not grain legumes. Duckweed (*bèo*) is already on the livestock feed list (edition 1.0 ch05); food use needs mineral control. [general; VN-direct] Low.

### 5. Bottom line: fermentable carbon by route, 2040 and 2050 (sub-question 5)

**Method.** For each stream: technical volume x share available to fermentation in a case x SE per tonne. Shares are what-if assumptions, set out in `ngf_calc.py`. No food exports are cut: residues and side streams only, plus new C1 carbon; the released-land line is shown separately and excluded.

**Cases.**
- **A. No 2G breakthrough.** No lignocellulosic sugar and no C1 beyond pilots. 10% of cassava pulp starch, 20% of stillage fermentables, 5% of starch-wastewater COD and 5% of food-industry wastewater go to protein.
- **B. 2G works at modest scale.** 0.3 Mt (2040) and 1.0 Mt (2050) of straw a year (five Panipat-size plants, or two of 500 kt, by 2050); 25% of pulp starch; 2 to 10% of bagasse, stems, stover, coffee pulp, molasses, food waste and manure methane; 0.01 (2040) and 0.1 (2050) Mt SE of e-methanol.
- **C. 2G and C1 scale.** 2.0 Mt (2040) and 5.0 Mt (2050) of straw (about 10% of national straw, about 35% of the 1 million ha programme's); 50% of pulp starch; 10 to 30% of other streams; 0.1 (2040) and 0.5 (2050) Mt SE of e-methanol.

**Arithmetic, 2050, Case B (Mt SE; low to high SE yield):**
- Rice straw: 1.0 Mt x 0.31 to 0.44 = 0.31 to 0.44.
- Cassava pulp starch: 0.48 to 0.98 Mt x 25% x 0.97 = 0.12 to 0.24.
- e-methanol: 0.10 (set by the case).
- Maize stover: 4.0 Mt DM x 3% x 0.35 to 0.50 = 0.04 to 0.06.
- Ethanol stillage: 0.60 Mt ethanol x 50% x 0.10 to 0.15 = 0.03 to 0.05.
- Pig-manure methane: 0.29 Mt CH4 x 5% x 2.35 = 0.03.
- Bagasse: 2.03 Mt DM x 3% x 0.35 to 0.50 = 0.02 to 0.03.
- Starch wastewater: 0.23 to 0.65 Mt COD x 10% x 0.66 = 0.02 to 0.04.
- Molasses, stems, food waste, food-industry wastewater and coffee pulp together: 0.06 to 0.11.
- **Total 0.73 to 1.11 Mt SE = 55 to 84% of 1.318 Mt.**

**Results (Mt SE a year and share of the S-ALT sugar-route need).** [VN-direct inputs] Low. [estimate].

| Year (S-ALT need) | Case A | Case B | Case C | Of which lignocellulosic (B; C) | Of which C1 (B; C) |
|---|---|---|---|---|---|
| 2030 (0.24 Mt) | 0.03 to 0.06 (13 to 27%) | 0.08 to 0.16 (35 to 69%) | 0.20 to 0.38 (85 to 161%) | 0.01; 0.04 to 0.05 | 0; 0 |
| 2040 (0.85 Mt) | 0.07 to 0.14 (8 to 16%) | 0.37 to 0.65 (44 to 76%) | 1.40 to 2.24 (165 to 263%) | 0.13 to 0.19; 0.76 to 1.08 | 0.02; 0.16 |
| 2050 (1.32 Mt) | 0.07 to 0.14 (5 to 11%) | 0.73 to 1.11 (55 to 84%) | 2.92 to 4.20 (222 to 319%) | 0.37 to 0.53; 1.79 to 2.55 | 0.13; 0.64 |

**Technical potential if whole streams were used (2050, Mt SE):** rice straw 12.8 to 21.5; maize stover 1.4 to 2.0; household food waste 0.7 to 1.3; bagasse 0.7 to 1.0; pulp starch 0.5 to 1.0; pig-manure methane 0.7; starch wastewater 0.15 to 0.43; molasses 0.29 to 0.38; cassava stems 0.12 to 0.37; stillage 0.06 to 0.09. [estimate] Low.

Readings:
- **Case A is today's reality extended.** Without 2G sugar, second-generation carbon is a niche: about a tenth of the 2050 need, almost all from cassava pulp. The S-ALT ceiling found by QNT stands.
- **Case B turns the ceiling into a capital question.** It needs five Panipat-size straw-sugar plants (or two larger ones) running reliably by 2050, plus pulp and side-stream plants at starch factories and ethanol plants. At first-of-a-kind costs the straw part alone is roughly USD 0.6 to 1.5 billion (0.31 to 0.44 Mt SE at USD 2,100 to 3,400 per t a year of capacity; our arithmetic).
- **Case C removes the carbohydrate ceiling** but needs about 25 Panipat-size plants' worth of straw and an e-methanol industry: an ambitious 2050 bet, not a plan.
- **What does not change:** nitrogen still has to be bought (0.37 t of urea per t of protein, QNT), and the climate gain depends on process energy (NGF-08; ECF).

---

## Signposts

| Signpost | Current value | What would show a trajectory is unfolding | Where to watch |
|---|---|---|---|
| Panipat 2G plant use; restart of Bathinda, Bargarh, Numaligarh | 62% of design (December 2025); others paused | Above 80% for a full year; a second Asian rice-straw plant at steady output | Indian Lok Sabha answers; IOCL, HPCL, BPCL reports; ChiniMandi |
| Enifer Kirkkonummi plant and the FS stillage pilot in Brazil | Under construction; 500 t pilot | 3,000 t plant running; FS decision on a 10,000 t plant; EU novel-food opinion | Enifer releases; AgFunderNews; EFSA Journal |
| China's non-grain biomanufacturing share | BBCA 1,000 t of 500,000 t lactic acid on non-grain feedstock | Non-grain sugar above 10% at a major Chinese fermenter; straw-sugar feed protein approved by MARA | MIIT and MARA case lists; company filings |
| Straw collection under the 1 million ha programme | About 30% (April 2025) | 70% and then 100% collection reported; a straw price series appears | MAE reports; An Giang, Can Tho, Dong Thap provincial reports |
| Mekong straw price | Not published | A traded price per t of baled straw; contracts with industrial buyers | Provincial agriculture departments; cooperatives |
| Biomass power build-out and fuel mix | PDP8: 1.5 to 2.7 GW (2030) | Straw-fired plants reaching financial close; biomass tariff decisions | MOIT; EVN; PDP8 reviews |
| E15 and E20 roadmap, and 2G ethanol plans | E10 since June 2026; most ethanol imported | A 2G ethanol plant announced in Vietnam | MOIT; PVOIL; Petrolimex |
| Cassava pulp price and starch exports | Pulp about VND 1,700 per kg implied (December 2024, form unclear) | Pulp contracted to fermenters; starch exports falling (less pulp) or rising | Vietnam Cassava Association; starch factories in Tay Ninh |
| Vietnamese e-methanol or green hydrogen at scale | No operating plant | First green H2 or e-methanol plant above 10 MW; LCOH below USD 2 per kg | MOIT; IEA Hydrogen Projects Database; FTG signposts |
| Rules on waste-derived feed | No Vietnamese ban; EU bans wastewater-treatment waste and household waste in feed | MAE circular on feed from by-products or waste; exporter codes of practice | MAE circulars; VASEP; ASC and GlobalG.A.P. standards |
| Released rice land by use | 12 thousand ha to annual crops, 5.6 to perennials, 1.9 to aquaculture in the south (winter-spring 2026) | Any conversion to soybean, cassava or fodder at scale | NSO quarterly crop reports; provincial land plans |

---

## Implications by audience

- **Investors.** Start the feedstock thesis for Vietnamese fermentation with cassava pulp, stillage and starch-factory process water (the Case A streams): small, cheap, co-located and TRL 6 to 9. Treat rice-straw sugar as a 2035-plus option whose trigger is a reliably running Asian plant (Panipat above 80%, a Chinese straw-sugar line at scale). Do not underwrite straw logistics on the power-study surplus alone: the Indian plant's first problem was buying straw.
- **Policy makers (MAE, MOIT, MOST, MOF).** Straw collection under Decision 1490 creates a feedstock without a buyer. Three no-regret moves: (1) publish a straw and residue balance with prices (edition 1.0 already proposed a by-product atlas); (2) make residue-to-feed and residue-to-fermentation projects eligible for the by-product funds in Decision 1625 (about VND 700 billion) and the biotech plan (Decision 1466); (3) write a clear feed rule on waste-derived substrates, aligned with the EU distinction between process water and wastewater-treatment waste, so exporters are not exposed. Do not count 2G sugar in 2030 or 2035 feed-security plans.
- **Startups and founders.** Build next to a starch factory, ethanol plant or brewery and use its liquid streams; choose strains that use xylose and tolerate 40 C, so straw hydrolysate becomes an option later. Watch methanol as a feedstock from the 2030s if green hydrogen arrives: Chinese methanol-yeast work is already at pilot scale.
- **F&B and feed manufacturers.** No second-generation sugar will be available in Vietnam at scale before the late 2030s on current evidence. Ask suppliers of microbial protein which carbon they use: protein grown on wastewater-treatment streams, food waste or manure-derived gas may be unsellable into EU-facing chains.
- **Research bodies.** Priority work: a Vietnamese pretreatment and hydrolysis benchmark on high-silica Mekong straw; thermotolerant C5-using yeasts and fungi; cassava stem starch recovery; a national biogas and COD inventory for starch factories and pig farms; TEAs with Vietnamese inputs that include collection and storage across the rice calendar.
- **International bodies.** Fundable public goods: a straw supply-chain pilot linking the 1 million ha programme to one industrial buyer (fermentation or power) with metered volumes and prices; concessional finance for a first 2G plant only after Asian peers show steady operation; support to align Vietnamese feed rules on waste-derived inputs with export-market law.

---

## Disagreements log

| Topic | Source A | Source B | Position taken |
|---|---|---|---|
| National rice straw | 54 Mt, straw-to-grain 1.19 (NGF-01) | 97 Mt, ratio 2.2 (NGF-09) | Use 1.19. Ratio 2.2 is outside the 0.7 to 1.4 range in Thailand (NGF-15) and the 1.14 implied by Mekong data (NGF-03) |
| Straw from the 1 million ha programme | 7 to 15 Mt, rough (NTS) | About 14 Mt a year, two crops (MAE, NGF-04) | Use about 14 Mt; within the NTS range |
| Share of straw collected | "Most" dry-season straw collected in the Mekong (NGF-02, 2016) | About 30% collected, 70% burned or buried (NGF-04, 2025) | Seasonal and scope difference: dry-season straw is collected, wet-season straw is burned. Use 30% for the annual figure |
| Cellulosic sugar cost | USD 342 to 467 per t (US mature-plant TEAs, NGF-06, NGF-07) | USD 1,320 per t (India, bagasse, lab data, NGF-08) | Report both; real first plants imply higher capital cost than either (Panipat, Podari) |
| Panipat status | "Zero contribution" to India's ethanol programme (November 2024, NGF-10) | 62% of design capacity (December 2025, NGF-11) | Different dates; both true. Improvement after modifications, still below design |
| Starch wastewater volume | About 2 m3 per t of roots, one Vietnamese factory (edition 1.0, FS-04): about 22 million m3 | 13 m3 per t of starch, about 3 m3 per t of roots (Thai plant, NGF-24): about 32 million m3 | Report 22 to 32 million m3. COD per litre varies seven-fold across studies |
| Rice land "released" | 654 thousand ha less rice land by 2030 (NTS-15) | Crop switching on rice land keeps it classed as rice land (Decree 112/2024, NGF-19) | The plan figure mainly counts land leaving agriculture; crop switching is additional and uncounted |
| Vietnam 2G potential | 10.9 billion litres of 2G ethanol (2017 study, via NGF-32) | Our straw sugar potential of 13 to 21 Mt SE (about 8 to 13 billion litres of ethanol) | Consistent in order of magnitude |
| Duckweed protein yield | 5 to 10 times land crops (NGF-23, abstract claim) | About 7.5 t per ha extrapolated from a temperate pilot (NGF-22) | Both imply 5 to 13 times Vietnamese soybean; no tropical field data |

---

## Open questions and gaps (and cheapest way to close)

1. **Mekong straw prices and uses by share** (mushrooms, fodder, rolls, power). Read Gummert, Hung, Chivenge and Douthwaite (eds.), *Sustainable Rice Straw Management* (Springer, 2020, open access); ask An Giang and Can Tho agriculture departments for 2025 to 2026 straw-roll prices.
2. **Pretreatment performance on high-silica Mekong straw.** A bench study at a Vietnamese university (HUST, Can Tho University, Nong Lam University) using a commercial enzyme cocktail.
3. **National biogas volumes** from pig farms and starch factories. Request Nguyen et al. (2024) (NGF-37); ask MAE's livestock department for large-farm biogas counts.
4. **Bagasse surplus per mill.** QNS and TTC AgriS annual reports; Vietnam Sugarcane and Sugar Association.
5. **Starch wastewater COD and biogas use at Vietnamese factories.** A survey of 10 Tay Ninh factories (edition 1.0 already proposed a pulp material balance; add wastewater).
6. **Vietnamese feed rules for microbial biomass grown on waste-derived substrates.** One question to MAE's Department of Livestock Production and Animal Health; check whether Decree 13/2020 or Circular 21/2019 addresses substrates at all.
7. **Current Raízen 2G output in Brazil,** the only large 2G operator still expanding. Its investor page returned an error; read its quarterly results next round.
8. **Household food-waste separation in practice.** The Law on Environmental Protection 2020 is understood to require households to separate food waste, but we could not read the article through our tools (agent knowledge, not verified). Read it on thuvienphapluat and check Hanoi and Ho Chi Minh City implementation reports.
9. **The Ding et al. (2024) review of fermentable-sugar TEAs** (NGF-38) would give a wider cost range; closed access.

---

## Leads

- Gummert, Hung, Chivenge and Douthwaite (eds.) 2020, *Sustainable Rice Straw Management*, Springer (open access): business models and prices for Vietnam, the Philippines and Cambodia (NGF-05 is its first chapter).
- Diep et al. 2015, rice straw ethanol potential in the Mekong Delta (NGF-36, closed access).
- The historic Swedish Symba process (yeast protein on potato-starch wastewater) and PEKILO (fungal protein on sulfite liquor) are the closest precedents for starch-factory process-water protein; a short history note would help founders (not verified this round beyond NGF-17).
- MIIT and MARA's January 2026 non-grain cases list (NGF-35): identify the saccharification suppliers (enzymes, pretreatment) that could license to Vietnam.
- The Dung Quat ethanol plant's move to imported maize (FS-09) creates stillage and DDGS-type streams; ask BSR about stillage handling.
- QNS An Khe molasses ethanol plant (IND-22): a future vinasse stream for fungal biomass (edition 1.0 C14).

---

## Sources

All accessed 2026-09-24. Scite and OpenAlex were used to find and read abstracts or excerpts; "abstract" means only the abstract or excerpts were read.

- **NGF-01.** Cuong, T.T., Le, H.A., Khai, N.M. and others (2021). Renewable energy from biomass surplus resource: potential of power generation from rice straw in Vietnam. Scientific Reports 11: 792. doi 10.1038/s41598-020-80678-3. Straw 54 Mt (2019 basis), ratio 1.19, 50% surplus, 2,565 MW potential, plant parameters. Type: peer-reviewed.
- **NGF-02.** Hung, N.V., Nguyen, C.D., Tran, T.V. and others (2016). Energy efficiency, greenhouse gas emissions, and cost of rice straw collection in the Mekong River Delta of Vietnam. Field Crops Research 198: 16-22. doi 10.1016/j.fcr.2016.08.024. 4.72 t straw per ha; collection USD 12 to 18 per t; 12.4% moisture. Type: peer-reviewed (abstract).
- **NGF-03.** Arai, H., Hosen, Y., Pham Hong, V.N. and others (2015). Greenhouse gas emissions from rice straw burning and straw-mushroom cultivation in a triple rice cropping system in the Mekong Delta. Soil Science and Plant Nutrition 61. doi 10.1080/00380768.2015.1041862. 21 Mt paddy, 24 Mt straw, one quarter burned. Type: peer-reviewed (abstract).
- **NGF-04.** Kim Anh (8 Apr 2025). Làm sao tiêu thụ hết 14 triệu tấn rơm rạ từ một triệu hecta. Ministry of Agriculture and Environment news portal. https://mae.gov.vn/SMPT_Publishing_UC/KhaiThac/TinTuc/pInTinTuc.aspx?ItemID=17785&UrlList= . 14 Mt from 1 M ha; 30% collected; targets. Type: gov (ministry news).
- **NGF-05.** Hung, N.V., Maguyon-Detras, M.C., Migo-Sumagang, M.V. and others (2020). Rice Straw Overview: Availability, Properties, and Management Practices. In Gummert, M., Hung, N.V., Chivenge, P., Douthwaite, B. (eds.), Sustainable Rice Straw Management, Springer. doi 10.1007/978-3-030-32373-8_1. Composition; mushroom yield and profit; soil-incorporation emissions. Type: peer-reviewed book chapter (excerpts).
- **NGF-06.** Chen, X., Shekiro, J., Pschorn, T. and others (2015). Techno-economic analysis of the deacetylation and disk refining process. Biotechnology for Biofuels 8: 173. doi 10.1186/s13068-015-0358-0. MSSP USD 0.191 to 0.212 per lb. Type: peer-reviewed (abstract).
- **NGF-07.** Ou, L., Dou, C., Yu, J.H. and others (2021). Techno-economic analysis of sugar production from lignocellulosic biomass with utilization of hemicellulose and lignin for high-value co-products. Biofuels, Bioproducts and Biorefining 15(2): 404-415. doi 10.1002/bbb.2170. MSSP USD 446; 342 to 347 per t. Type: peer-reviewed (abstract).
- **NGF-08.** Baral, P., Munagala, M., Shastri, Y., Kumar, V., Agrawal, D. (2021). Cost reduction approaches for fermentable sugar production from sugarcane bagasse and its impact on techno-economics and the environment. Cellulose 28: 6305-6322. doi 10.1007/s10570-021-03940-5. USD 1.32 per kg sugar; 1.57 kg CO2e per kg. Type: peer-reviewed (abstract).
- **NGF-09.** Benova, D., Mares, K., Hutla, P. and others (2021). Energy Potential of Agri Residual Biomass in Southeast Asia with the Focus on Vietnam. Agronomy 11(1): 169. doi 10.3390/agronomy11010169. Residue ratios (straw 2.2, bagasse 0.3, trash 0.2). Type: peer-reviewed.
- **NGF-10.** Informist Media (27 Nov 2024). Govt's 2G ethanol plans in limbo as sole IOC Panipat plant lies inactive. https://informistmedia.com/MoneyWire/22664/Ethanol-Plans-Govt-s-2G-ethanol-plans-in-limbo-as-sole-IOC-Panipat-plant-lies-inactive . Design, problems, paused plants. Type: press.
- **NGF-11.** ChiniMandi (2026, reporting a Lok Sabha answer; exact date not shown in the extract). India's first 2G ethanol plant at Panipat costs INR 984 crore, government tells Lok Sabha. https://www.chinimandi.com/indias-first-2g-ethanol-plant-at-panipat-costs-%E2%82%B9984-crore-government-tells-lok-sabha/ . Cost; 62% use in December 2025; silica and moisture issues. Type: press (reporting a parliamentary answer).
- **NGF-12.** IRENA and Methanol Institute (2021). Innovation Outlook: Renewable Methanol. https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/Jan/IRENA_Innovation_Renewable_Methanol_2021.pdf . Bio- and e-methanol costs now and in 2050. Type: intergovernmental.
- **NGF-13.** Meng, J., Liu, S., Gao, L., Hong, K., Liu, S., Wu, X. (2023). Economical production of Pichia pastoris single cell protein from methanol at industrial pilot scale. Microbial Cell Factories 22: 198. doi 10.1186/s12934-023-02198-9. 0.43 g DCW per g methanol; 50.6% protein; 33 C. Type: peer-reviewed (abstract).
- **NGF-14.** European Union. Regulation (EC) No 767/2009 on the placing on the market and use of feed, consolidated text of 26 Dec 2018, Annex III Chapter 1 and footnote 9. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02009R0767-20181226 (read through the browser fallback). Type: law.
- **NGF-15.** Jusakulvijit, P., Bezama, A., Thran, D. (2021). The Availability and Assessment of Potential Agricultural Residues for the Regional Development of Second-Generation Bioethanol in Thailand. Waste and Biomass Valorization 12. doi 10.1007/s12649-021-01424-y. 174.1 Mt residues; straw ratio 0.7 to 1.4. Type: peer-reviewed (excerpts).
- **NGF-16.** Global Green Chemicals (11 Aug 2021). GGC and KTIS continue on the second phase construction of "Nakhonsawan BioComplex" project. https://www.ggcplc.com/en/newsroom/press-releases/162/ggc-and-ktis-continue-on-the-second-phase-construction-of-nakhonsawan-biocomplex-project-after-natureworks-llc-decided-to-invest-in-a-bioplastic-manufacturing-factory . Phase 2 scope. Type: company.
- **NGF-17.** AgFunderNews (3 Jun 2025). Enifer to make mycoprotein in Brazil from corn ethanol side streams. https://agfundernews.com/enifer-partners-with-ethanol-giant-fs-for-mycoprotein-production-in-brazil . Plant sizes, feedstocks, PEKILO history. Type: press (company claims).
- **NGF-18.** National Statistics Office (9 Apr 2026). Chuyển đổi cơ cấu cây trồng trên đất lúa vụ đông xuân năm 2026: những kết quả tích cực. https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2026/04/chuyen-doi-co-cau-cay-trong-tren-dat-lua-vu-dong-xuan-nam-2026-nhung-ket-qua-tich-cuc/ . Rice-land conversion by use. Type: gov statistics.
- **NGF-19.** Báo Chính phủ (12 Sep 2024). Quy định mới về chuyển đổi cơ cấu cây trồng, vật nuôi trên đất trồng lúa (Decree 112/2024/ND-CP). https://baochinhphu.vn/quy-dinh-moi-ve-chuyen-doi-co-cau-cay-trong-vat-nuoi-tren-dat-trong-lua-102240912111455559.htm . Type: gov (secondary reading of a decree).
- **NGF-20.** Prime Minister. Decision 1177/QD-TTg (30 Jun 2026) adjusting the national land use plan, re-read for the changes in agricultural and non-agricultural land against Resolution 39/2021. Same URL as NTS-15. Type: law (plan).
- **NGF-21.** Islam, M.R., Garcia, S.C., Sarker, N.R., Islam, M.A., Clark, C.E.F. (2023). Napier grass (Pennisetum purpureum Schum) management strategies for dairy and meat production in the tropics and subtropics: yield and nutritive value. Frontiers in Plant Science 14: 1269976. doi 10.3389/fpls.2023.1269976. Type: peer-reviewed (abstract).
- **NGF-22.** Devlamynck, R., Fernandes de Souza, M., Michels, E. and others (2021). Agronomic and Environmental Performance of Lemna minor Cultivated on Agricultural Wastewater Streams: A Practical Approach. Sustainability 13(3): 1570. doi 10.3390/su13031570. Type: peer-reviewed (abstract).
- **NGF-23.** Roman, B., Brennan, R.A., Lambert, J.D. (2021). Duckweed protein supports the growth and organ development of mice: a feeding study comparison to conventional casein protein. Journal of Food Science. doi 10.1111/1750-3841.15635. Claim of 5 to 10 times crop protein yields. Type: peer-reviewed (abstract claim).
- **NGF-24.** Lerdlattaporn, R., Phalakornkule, C., Trakulvichean, S. and others (2020). Implementing Circular Economy Concept by Converting Cassava Pulp and Wastewater to Biogas for Sustainable Production in Starch Industry. Research Square preprint. doi 10.21203/rs.3.rs-103700/v1. Plant data (6,560 m3 per day; COD 12,184 mg per L; biogas); Thai national biogas 2014; COD range. Type: preprint (excerpts).
- **NGF-25.** Zhu, W., Lestander, T.A., Orberg, H. and others (2015, online 2013). Cassava stems: a new resource to increase food and fuel production. GCB Bioenergy 7(1): 72-83. doi 10.1111/gcbb.12112. Type: peer-reviewed (abstract).
- **NGF-26.** Wei, M., Zhu, W., Xie, H., Lestander, T.A., Xiong, S. (2015). Cassava stem wastes as potential feedstock for fuel ethanol production: a basic parameter study. Renewable Energy 83: 970-978. doi 10.1016/j.renene.2015.05.054. Type: peer-reviewed (abstract).
- **NGF-27.** Kaewwinud, N., Khokhajaikiat, P., Boonma, A. (2017). Effect of moisture and region of cut on cassava stalk properties in biomass applications. Research in Agricultural Engineering 63(1): 23-28. doi 10.17221/70/2015-rae. 30% of stalks kept for planting (citing FAO 2008). Type: peer-reviewed (abstract).
- **NGF-28.** Ngan, D.T.M., Ghi, T.N., Tien, H.V. (2024). Drivers of Food Waste Habits at Household Level in Vietnam. International Journal of Sustainable Development and Planning 19(7). doi 10.18280/ijsdp.190713. Cites UNEP Food Waste Index 2021: 76 kg per person per year. Type: peer-reviewed (citation snippet).
- **NGF-29.** Prayitno, P., Rulianah, S. (2022). Production of biogas using AnF2B reactor from cassava starch wastewater with consortium bacteria as biocatalyst. IOP Conference Series: Earth and Environmental Science 969: 012003. doi 10.1088/1755-1315/969/1/012003. COD 7,000 to 30,000 mg per L. Type: conference paper.
- **NGF-30.** Ninh Binh rural development coordination office (31 May 2019). Sử dụng thức ăn thừa để chăn nuôi lợn, nguy cơ lây lan dịch bệnh cao. https://vpdpnongthonmoi.ninhbinh.gov.vn/nha-nong-can-biet/su-dung-thuc-an-thua-de-chan-nuoi-lon-nguy-co-lay-lan-dich-benh-cao-243.html . Veterinary Department advice; no legal ban. Type: gov (provincial).
- **NGF-31.** Nông nghiệp và Môi trường (30 Jun 2026). Nhiên liệu xanh đưa nông nghiệp vào chuỗi giá trị mới. https://nongnghiepmoitruong.vn/nhien-lieu-xanh-dua-nong-nghiep-vao-chuoi-gia-tri-moi-d819098.html . E10 rollout; E15 and E20; residues as future feedstock; enzyme cost. Type: press (ministry-affiliated).
- **NGF-32.** Tạp chí Công Thương (29 Mar 2017). Bài toán nguyên liệu cho sản xuất cồn ethanol. https://tapchicongthuong.vn/bai-toan-nguyen-lieu-cho-san-xuat-con-ethanol-46864.htm . 2G ethanol potential 10.9 billion litres. Type: press (MOIT journal).
- **NGF-33.** C&EN (December 2023). Clariant is latest firm to pull out of cellulosic ethanol. https://cen.acs.org/business/biobased-chemicals/Clariant-latest-firm-pull-cellulosic/101/web/2023/12 . Podari capacity and cost; earlier exits. Type: trade press.
- **NGF-34.** Clariant (6 Dec 2023). Clariant shuts its sunliquid bioethanol plant in Romania. https://www.clariant.com/en/Corporate/News/2023/12/Clariant-shuts-its-sunliquid-bioethanol-plant-in-Romania . Reasons; CHF 110 M impairment. Type: company.
- **NGF-35.** van der Kley, D. (January 2026). China publishes model project list for "Non-Grain Bio-based Materials Industry". Substack newsletter. https://dirkvanderkley.substack.com/p/china-publishes-model-project-list . Summary of the MIIT and MARA list. Type: secondary analysis (newsletter).
- **NGF-36.** Diep, N.Q., Sakanishi, K., Nakagoshi, N., Fujimoto, S., Minowa, T. (2015). Potential for rice straw ethanol production in the Mekong Delta, Vietnam. Renewable Energy 74: 456-463. doi 10.1016/j.renene.2014.08.051. Lead only (closed access). Type: peer-reviewed.
- **NGF-37.** Nguyen, T.H., Doan, Q.V., Khan, A. and others (2024). The potential of agricultural and livestock wastes as a source of biogas in Vietnam: energetic, economic and environmental evaluation. Renewable and Sustainable Energy Reviews 199: 114440. doi 10.1016/j.rser.2024.114440. Lead only (closed access). Type: peer-reviewed.
- **NGF-38.** Ding, K., Liu, D., Chen, X. and others (2024). Scalable lignocellulosic biorefineries: technoeconomic review for efficient fermentable sugars production. Renewable and Sustainable Energy Reviews 202: 114692. doi 10.1016/j.rser.2024.114692. Lead only (closed access). Type: peer-reviewed review.
- **NGF-39.** Người Lao Động, via Tuổi Trẻ (15 Sep 2025). Tiềm năng phát điện từ khí sinh học. https://tuoitre.vn/nld/tiem-nang-phat-dien-tu-khi-sinh-hoc-196250914210402823.htm . No national biogas figure; large farms over 21% of the herd in Thanh Hoa; generator cost about USD 2,000 per kW. Type: press.
- **NGF-calc.** AltProtein Vietnam NGF arithmetic (this work): `ngf_calc.py`, 24 September 2026. Type: our estimate.

Reused from edition 1.0 and other wave 3 streams (not re-listed): FS-01, FS-03, FS-04, FS-05, FS-06, FS-09, FS-11, FS-18, FS-24, FS-25, FS-31, FS-34, FS-35, FS-37, FS-38, FS-44, FS-46, FS-48, FS-49, FM-01, IND-22, VCO-02, MAC-01, MAC-12, SCI-22, SCI-25, SCI-36, SCI-37, SCI-44, COST-44, QNT-01, QNT-09, QNT-model, NTS-04, NTS-15, NTS-22, NTS-26, NTS-32, FTG-01, FTG-06, FTG-12, FTG-13, FTG-16, FTG-18, FTG-24, FTG-25, FTG-30, FTG-31, ECF-08, ECF-25, CLM-02.

---

## Working log

- 24 Sep 2026: read the protocol, question tree and brief; the QNT, NTS and FTG outputs; edition 1.0 ch02 and app-c; searched CLM and ECF for overlap (CLM: cassava disease risk; ECF: cassava-protein carbon footprint of 3.8 to 11.7 t CO2e per t protein, with residue carbon a precondition for a climate claim).
- WebSearch calls (11 of 12): straw collection under the 1 million ha programme (Vietnamese); Panipat 2G status; rice-land conversion (Vietnamese); Thai biorefineries; Enifer and Arbiom; UNEP food waste index; pig-manure biogas (Vietnamese); China non-grain biomanufacturing; Raízen and Clariant; swill-feeding rules (Vietnamese); Vietnamese 2G projects (Vietnamese).
- Literature through OpenAlex and Scite: straw availability, collection and composition; sugar TEAs; methanol SCP; cassava stems; starch wastewater; duckweed and napier yields.
- The EU feed-law annex was read through the browser fallback after WebFetch truncated the page; the tab was closed. Two pages failed (a provincial site with a certificate error; a 404), and the Raízen investor page returned an error.
- Threads stopped when returns repeated or were closed: national biogas volume (no open figure found), Arbiom status (not in results), UNEP 2024 country row (PDF not readable through our tools; the 2021 figure used via a citing paper).
- Raw notes from the working session are superseded by this file.
