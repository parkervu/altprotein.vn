# AQF: aquaculture, marine ingredients and protein-crop futures to 2050

Wave 4 gap round (futures 2030 to 2050), stream aquaculture_futures. Source ID prefix: AQF. Question tree: F1, F4. Accessed and written 24 September 2026.

**Files in this folder:** this note; `aquaculture_projections.csv` (44 rows); `marine_ingredients_2050.csv` (39 rows); `protein_crops_vn.csv` (29 rows); `aqf_calc.py` (all arithmetic for the estimates; run `python aqf_calc.py`, standard library only).

**How to read this.** Every finding carries a source ID (AQF-nn, or an edition 1.0 or wave 3 ID), an evidence label ([VN-direct], [VN-adjacent], [general]), a confidence level, and for forward-looking statements a foresight type ([trend], [projection], [estimate], [signal], [wildcard]) and a horizon year. Official targets, published model projections and our estimates are kept apart. Our three aquaculture paths (AQ-LOW, AQ-BASE, AQ-HIGH) are what-if cases, not forecasts, and carry no probabilities. AQ-BASE reuses the QNT S-BASE index so that it plugs into the balance model. Insects appear only as an incumbent or benchmark. No market-size forecast for alternative-protein products is made. "CP" is crude protein; "FCR" is feed conversion ratio (kg of feed per kg of output); "EPA plus DHA" are the two long-chain omega-3 fatty acids that marine species need.

**Two feed scales.** Edition 1.0 left the 2025 aquafeed volume unresolved: USDA 6.5 Mt against industry 3.9 to 4.8 Mt. Our aquafeed numbers use the USDA-consistent scale, like QNT. Multiply by about 0.67 for the industry scale. Shares and ratios are less affected than tonnages.

---

## Headline findings

1. **Official aquaculture targets stop at 2030, and no published Vietnam-specific aquaculture projection beyond 2035 exists.** Targets for 2030: aquaculture 7.0 Mt, capture 2.8 Mt (Decision 339), marine aquaculture 1.45 Mt (Decision 1664). The only later anchor is a qualitative 2045 vision that marine aquaculture should supply "trên 25% tổng sản lượng" of fisheries. WorldFish and IFPRI's *Fish to 2050* covers ASEAN only. [VN-direct] High (absence checked in 339, 1664, 389 and Fish to 2050); projection (official target); 2030, 2045. (NTS-08; AQF-01; AQF-15; AQF-25)
2. **OECD-FAO projects Vietnamese aquaculture at 6.12 Mt in 2030 and 6.83 Mt in 2035, below the 7.0 Mt target, and keeps capture near 3.5 Mt, 25% above the 2.8 Mt target.** The model does not assume the official cut in fishing. [VN-direct] Medium; projection (OECD-FAO 2026-2035 baseline, base 2025); 2030, 2035. (AQF-02)
3. **Our what-if paths give 7.4 Mt (AQ-LOW), 8.9 Mt (AQ-BASE) and 11.3 Mt (AQ-HIGH) of aquaculture in 2050, needing 8.0, 9.7 and 12.5 Mt of compound aquafeed and 2.5, 3.1 and 4.1 Mt of feed crude protein** (2.0 Mt of CP in 2025). On the industry feed scale the protein figures are 1.7, 2.1 and 2.7 Mt. [VN-direct] Low; estimate; 2050. (AQF-calc; QNT-model)
4. **The capture plan removes most of the trawl fleet that supplies trash fish.** Decision 389/QD-TTg (2024) caps the fleet at about 83,600 vessels by 2030 with trawlers at 10% (about 8,360), about 59% fewer than the 20,340 trawlers counted in 2016. In 2001 trash fish was 36% of marine landings and up to 80% of trawl catch in Kien Giang (now An Giang). [VN-direct] Medium; projection (official target) and estimate; 2030. (AQF-15; AQF-06; AQF-05)
5. **Trash fish still feeds the high-value marine segment.** About 90% of south-central mariculture stakeholders fed trash fish in 2021 and only 9.41% used pellets; lobster needs 20 to 40 kg of trash fish per kg. We estimate 0.4 to 1.6 Mt (central 0.78 Mt) wet weight fed directly in 2025, about 10 to 42% of the capture total. [VN-direct] Low; estimate; 2025. (AQF-07; AQF-05; AQF-calc)
6. **Replacing trash fish adds little tonnage but high-protein, fishmeal-heavy tonnage.** At 2025 output, 0.13 to 0.34 Mt of pellets would replace it. With marine finfish growth, extra pellet demand over 2025 is 0.04 to 0.19 Mt by 2030 and 0.13 to 0.83 Mt by 2040 (0.21 to 1.56 Mt by 2050), carrying 7 to 34 kt (2030) and 18 to 116 kt (2040) of extra fishmeal at today's formulations. [VN-direct] Low; estimate; 2030, 2040, 2050. (AQF-calc)
7. **Marine finfish is where aquafeed protein and omega-3 demand concentrate after 2030.** The 2030 target is 200 kt of marine fish (120 kt offshore); the Khanh Hoa pilot (Decision 231/QD-TTg, 2025) plans 440 ha and 8,700 t by 2029 in HDPE cages out to 6 nautical miles. Marine-fish feed capacity was only 40,000 to 50,000 t a year in 2022, over 80% foreign-owned. In AQ-BASE, marine pellets reach about 0.6 Mt by 2050, 6% of aquafeed but 9% of its protein and about a quarter of its EPA plus DHA need. [VN-direct] Medium for targets, Low for estimates; projection and estimate; 2029, 2030, 2050. (AQF-01; AQF-13; AQF-09; AQF-calc)
8. **World marine ingredients grow slowly, and more of them come from by-products.** OECD-FAO has world fishmeal rising from 5.36 Mt (2025) to 6.27 Mt (2035), with El Niño dips modelled in 2027 and 2031 (Peru down to 0.53 to 0.72 Mt). By-products gave 34% of fishmeal and 54% of fish oil in 2024. We extend this to 6.0 to 7.6 Mt of fishmeal and 1.4 to 1.7 Mt of fish oil in 2050, with 42 to 54% of fishmeal from by-products. [general] Medium (projection), Low (estimate); 2035, 2050. (AQF-02; AQF-04; AQF-calc)
9. **Vietnam is already a large by-product marine-ingredient producer.** Pangasius off-cuts supplied 12% of the world's by-product fishmeal and 29% of its by-product fish oil in 2024, about 225 kt of meal and 215 kt of oil by our arithmetic. That matches OECD-FAO's 325 kt of Vietnamese fishmeal and 190 kt of fish oil. Pangasius-derived meal could reach 270 to 380 kt by 2050. [VN-direct] Medium (2024), Low (2050); trend and estimate. (AQF-04; AQF-02; AQF-calc)
10. **Vietnam's fish oil is not an omega-3 source.** Pangasius oil carries only 0.17 to 0.31% EPA plus DHA in its fatty acids, so Vietnam's 190 kt of fish oil holds about 0.4 to 0.6 kt of EPA plus DHA. Omega-3 for shrimp and marine fish must be imported or made. [VN-adjacent for the oil analysis; VN-direct for the reading] Medium; trend and estimate; 2025. (AQF-29; AQF-02)
11. **Omega-3 is a tighter constraint than protein.** Vietnamese aquafeed needs about 11 kt of EPA plus DHA today (range 4.5 to 22 kt) and 21 kt by 2050 in AQ-BASE (10 to 40 kt; 33 kt in AQ-HIGH), equal to about 85 kt of marine fish oil. Globally, EPA plus DHA supply is about 0.8 Mt with a gap estimated at 0.4 Mt to over 1 Mt. [VN-direct] Low (estimate); [general] Medium (gap); estimate; 2050. (AQF-calc; AQF-16)
12. **Credible 2050 share for alternative ingredients: 1 to 6% of aquafeed protein, but 15 to 50% of aquafeed omega-3.** On protein that is 35 to 185 kt a year (50 to 260 kt of product at 70% CP; 2 to 9% on the industry scale), mostly in shrimp and marine feeds and capped by the soybean-meal price. On omega-3 it is 3 to 11 kt of EPA plus DHA (about 6 to 21 kt of algal oil). Algal and transgenic-oilseed oils are already commercial, and omega-3 canola oil replaced all fish oil in low-fishmeal whiteleg shrimp diets without growth loss. [VN-direct] Low; estimate; 2050. (AQF-calc; AQF-19; AQF-23; AQF-24)
13. **Domestic soybean is not a feed-protein lever.** Area fell from about 205 kha (2010) to 36.8 kha (2021) and 20 to 39 kha now; OECD-FAO projects 39 kha and a yield falling to 1.15 t per ha by 2035. Even 300 kha at 2.5 t per ha would give 0.75 Mt of beans, 5.6% of the 2050 S-BASE bean-equivalent need, and domestic beans sell at about twice the import price into food uses. [VN-direct] Medium (data), Low (what-if); projection and estimate; 2035, 2050. (AQF-20; AQF-02; AQF-calc)
14. **Biotech rules are opening.** Vietnam has approved 60 GE events for food and feed (15 soybean, 6 canola) and 31 GE maize hybrids for cultivation, now about half of feed-maize area. Decree 43/2026/ND-CP takes gene-edited crops without foreign DNA out of GMO rules and sets the first rules for GM microorganisms in contained production. No GE soybean field test has been applied for; gene-edited high-protein soybean lines are in greenhouse biosafety evaluation. [VN-direct] Medium; signal; 2026 to 2035. (AQF-21; AQF-22)
15. **Climate changes where aquafeed is used more than how much.** Salinity pushes Mekong land to shrimp (protein-dense, fishmeal-using feed); pangasius suitability may move north towards the Red River Delta; El Niño hits fishmeal and fish oil together. No dated SSP-based projection of Vietnamese shrimp or pangasius output exists. [VN-direct] Medium; signal and qualitative projection; 2050. (AQF-26; CLM-20; CLM-21; CLM-27)
16. **The biggest 2050 uncertainty is aquaculture growth after 2030, not formulation.** IMPACT (*Fish to 2050*) has ASEAN aquaculture slowing to about 0.5% a year between 2030 and 2050. Vietnam grew 5.1% in 2025 and 5.7% in H1 2026, and the official vision implies continued growth. Across our paths, 2050 aquafeed protein spans 1.6 Mt (2.5 to 4.1 Mt). [VN-adjacent] Low; projection and estimate; 2050. (AQF-25; MAC-15; MAC-17; AQF-calc)

---

## Detailed findings

### Q1. Aquaculture trajectories to 2040 and 2050

**What exists.**

| Source | Scope | 2030 | 2035 | 2045 or 2050 | Type |
|---|---|---|---|---|---|
| Decision 339/QD-TTg (2021) | Vietnam | Aquaculture 7.0 Mt; capture 2.8 Mt; total 9.8 Mt; exports USD 14 to 16 bn | none | 2045: "top three" producer and exporter; no volume | Official target (NTS-08; AQF-28) |
| Decision 1664/QD-TTg (2021) | Vietnam marine aquaculture | 1.45 Mt on 300,000 ha and 12 million m3 of cages: marine fish 200 kt, lobster 5 kt, other crustaceans 95 kt, molluscs 650 kt, seaweed 500 kt; offshore 340 kt | none | 2045: above 25% of total fisheries output; exports above USD 4 bn | Official target (AQF-01) |
| Decision 389/QD-TTg (2024) | Vietnam capture | Fleet at most 83,600 vessels; trawl 10%; labour about 600,000 | none | 2050: qualitative ("sustainable, modern") | Official target (AQF-15) |
| Decision 231/QD-TTg (2025) | Khanh Hoa pilot | 8,700 t on 440 ha by 2029 | none | none | Official target (AQF-13) |
| OECD-FAO 2026-2035 | Vietnam | Aquaculture 6.12 Mt; implied capture 3.50 Mt | Aquaculture 6.83 Mt; capture 3.50 Mt | none | Projection (AQF-02) |
| Fish to 2050 (IMPACT) | ASEAN | Aquaculture 24.8 Mt | none | 2050: 27.4 Mt | Projection (AQF-25), Low: extracted totals do not add up |
| FAO SOFIA 2026 | World | none | 2034: 214 Mt aquatic animals | none | Projection (AQF-03) |

- **No species-level official target** for shrimp, pangasius or tilapia exists at national level for 2030 (Decision 339 re-read; AQF-28). A 2025 brackish-shrimp plan aimed at 1.3 to 1.4 Mt (whiteleg 1.05 Mt, black tiger 350 kt) (AQF-27, Low: issuing document not seen). VASEP reports pangasius area falling over 2020 to 2025 (AQF-32). {VN-direct|Medium}
- **Marine aquaculture has been behind plan.** Output was about 730 kt on about 85,000 ha in 2021 (AQF-11), against 850 kt targeted for 2025. We found no 2025 outturn. {VN-direct|Medium}
- **Lobster value is racing ahead of the volume plan.** Lobster exports to China were USD 845 M in 2025 and over USD 506 M in January to May 2026 (+44.3%) (AQF-12), against a 2030 output target of only 5,000 t. Either output is larger than planned or trade flows are counted in. Lobster is the most trash-fish-intensive species. {VN-direct|Medium}; signal.

**Drivers to 2050 (qualitative).**
- *Climate:* salinity moves Mekong land from rice to shrimp (CLM-21, CLM-40); pangasius sites face flood and salinity at +50 to +75 cm of sea-level rise, mostly after 2050 (CLM-20); pangasius suitability may extend north to the Red River Delta; northern warming of 1.2 to 1.3 °C by 2050 slows tilapia growth (AQF-26). Typhoons have destroyed wooden cages in Khanh Hoa (Storm No. 12, 2017), one reason for the move to HDPE (AQF-14). {VN-direct|Medium}; signal.
- *Markets:* exports are about half of aquaculture output in live weight (QNT); US tariffs on Vietnamese shrimp (12.5% from July 2026, MAC-35, Low) and competition from Chinese pangasius (AQF-26) cap export-led growth; China takes most lobster. {VN-direct|Medium}.
- *Disease:* heat-disease links are well known in practice but were not quantified by CLM or by us. Gap.

**Our paths [estimate], all VN-direct, Low.** AQ-LOW follows OECD-FAO growth to 2035 and then stays flat (the QNT low sensitivity). AQ-BASE uses the QNT S-BASE index (OECD-FAO to 2035, then +1% a year). AQ-HIGH reaches the 7.0 Mt target in 2030 and then grows 2.0% a year. Marine finfish is carved out and follows its own path (2025 assumed 80 kt).

| Path | 2030 | 2035 | 2040 | 2050 | Marine finfish 2050 | Aquafeed 2050 | Feed CP 2050 |
|---|---|---|---|---|---|---|---|
| AQ-LOW | 6.60 Mt | 7.37 | 7.39 | 7.42 | 180 kt | 8.0 Mt | 2.50 Mt |
| AQ-BASE | 6.64 | 7.46 | 7.91 | 8.86 | 450 kt | 9.7 Mt | 3.10 Mt |
| AQ-HIGH | 7.11 | 7.98 | 8.97 | 11.27 | 1,000 kt | 12.5 Mt | 4.08 Mt |

- AQ-BASE is 0.34 Mt above QNT S-BASE in 2050 (8.86 against 8.52 Mt) only because marine finfish grows faster than the uniform index. The QNT soybean-meal result is not sensitive to this (QNT sensitivity rank 3: aquaculture growth after 2035 moves 2050 soybean meal by about 1 Mt).
- Coefficients: FCR pangasius 1.5, whiteleg 1.3, other shrimp 1.5, other fish 1.5, marine fish 1.5 on pellets; FCR gain 0.3% a year; dietary CP pangasius 27%, shrimp 40% (standard lines are 40 to 43% CP, FM-10), other fish 30%, marine 45% (marine feeds 40 to 50% CP, VCO-10). All are assumptions within published ranges.

### Q2. Trash fish and low-value fish

**Then and now.**
- 2001: 0.93 Mt of trash fish, 36% of marine landings, two thirds from the southeast (Gulf of Thailand). In 2002, 0.18 to 0.32 Mt went directly into aquaculture: pangasius 65 to 180 kt, shrimp 72 to 144 kt, grouper 11.8 kt, lobster 28 kt. The rest went to fish powder (about 185 kt) and fishmeal (about 80 kt) (AQF-05). {VN-direct|Medium}
- Since then pangasius and whiteleg shrimp have moved to pellets. Trash fish remains the main feed for lobster, grouper, cobia and snapper cages, mud crab and some freshwater carnivores (AQF-07; AQF-08; AQF-10). Industry estimates of up to 0.3 Mt of snakehead pellets in 2025 (MAC-06) suggest most snakehead is now pellet-fed, although wild seed and trash-fish feeding persist in traditional farms (Hien and others 2017, doi 10.1111/are.13298). {VN-direct|Low}
- Fishmeal: 96 factories were identified in 2017 (86 in the south), with 675 kt of documented capacity; 81 cite "sea fish" as the main raw material (AQF-06). {VN-direct|Medium}

**Estimate of direct trash-fish feeding in 2025 [estimate], VN-direct, Low.**

| Group | Output (kt) | Share not on pellets | Wet FCR | Trash fish (kt, low / central / high) | Pellets to replace (kt) |
|---|---|---|---|---|---|
| Marine finfish | 60 / 80 / 120 | 80 to 90% | 5 to 8 (grouper 5.9, AQF-05) | 240 / 408 / 864 | 72 / 102 / 162 |
| Lobster | 3 / 4 / 5 | 100% | 20 to 40 (AQF-05; AQF-07) | 60 / 112 / 200 | 9 / 12 / 15 |
| Mud crab and other crustaceans | 20 / 40 / 60 | 80 to 100% (AQF-08) | 4 to 6 | 64 / 180 / 360 | 32 / 72 / 120 |
| Freshwater carnivores (snakehead remnant, eel, others) | 10 / 16 / 30 | 100% | 4 to 6 | 40 / 80 / 180 | 15 / 24 / 45 |
| **Total** | | | | **404 / 780 / 1,604** | **128 / 210 / 342** |

- At 17% CP, the central case feeds about 133 kt of wild-fish protein directly. Replacing it with pellets needs about 88 kt of formulated protein (54 to 144 kt), because pellets convert about four times better.
- **Policy basis for replacement:** Decision 339 orders "thức ăn công nghiệp thay thế sử dụng cá tạp"; Decision 1664 orders concentrated feed-production zones next to marine farming areas; Decision 389 cuts trawlers. None sets a volume or date for replacement (NTS-08; AQF-01; AQF-15). {VN-direct|High}

**Implied increase in formulated feed [estimate], VN-direct, Low.** Incremental pellets over 2025 from marine finfish growth plus conversion of the other trash-fish species (conversion 15 to 50% by 2030, 40 to 90% by 2040, 60 to 100% by 2050):

| Path | 2030 | 2040 | 2050 | Extra CP (2040) | Extra fishmeal (2040) | Share of all aquafeed (2040) |
|---|---|---|---|---|---|---|
| AQ-LOW | +40 kt | +131 kt | +210 kt | +56 kt | +18 kt | 1.6% |
| AQ-BASE | +106 kt | +421 kt | +712 kt | +181 kt | +59 kt | 4.9% |
| AQ-HIGH | +192 kt | +827 kt | +1,557 kt | +356 kt | +116 kt | 8.4% |

Reading: the trash-fish transition is a small share of aquafeed tonnage but a large share of the premium segment, where fishmeal inclusion (15 to 30% hypothesised, falling to about 12% by 2050 in our assumption) and omega-3 needs are highest. It is the segment where a novel protein or oil competes with fishmeal and fish oil rather than with soybean meal.

### Q3. Marine ingredients to 2050

**Global supply.**
- OECD-FAO 2026-2035: world fishmeal 5.67 Mt (2024), 5.36 Mt (2025), 5.98 Mt (2030), 6.27 Mt (2035); fish oil (CPC 21525, label inferred) 1.40, 1.35, 1.44 and 1.49 Mt. Peru's fishmeal is modelled at 0.72 Mt in 2027 and 0.53 Mt in 2031 (El Niño years) against about 1.1 Mt in normal years (AQF-02). {general|Medium}; projection.
- Reality in 2026 is below the model: Peru's first 2026 season landed about 25% of a 1.9 Mt quota, and world fishmeal output fell 26% year on year in January to April 2026 (HSC-29, HSC-30). NOAA gives a greater than 90% chance of a very strong El Niño in winter 2026-27 (HSC-28). {general|Medium}; signal.
- By-products: 34% of fishmeal and 54% of fish oil in 2024; almost 12 Mt of processing by-products are still not collected, most of the potential in Asia (AQF-04). {general|Medium}.
- **2050 [estimate], general, Low:** whole-fish fishmeal flat or down (3.2 to 3.8 Mt, climate risk on anchoveta, CLM-27 to CLM-29) plus by-product meal of 2.8 to 3.8 Mt (from about 1.9 Mt in 2024, following aquaculture growth and better collection) gives 6.0 to 7.6 Mt of fishmeal, 42 to 54% from by-products. Fish oil 1.4 to 1.7 Mt, with a rising share from by-products such as pangasius and salmon trimmings, which carry less EPA plus DHA per tonne than anchovy oil.

**Vietnam's own supply.**

| Item | 2025 | 2030 | 2035 | 2050 | Source |
|---|---|---|---|---|---|
| Fishmeal production | 325 kt | 389 kt | 420 kt | pangasius-derived alone 270 to 383 kt [estimate] | AQF-02; AQF-calc |
| Fishmeal feed use | 221 kt | 309 kt | 339 kt | 151 to 393 kt [estimate] | AQF-02; QNT-model |
| Fishmeal exports / imports | 260 / 156 kt | 248 / 168 kt | 249 / 168 kt | net exporter by volume, importer of high grades | AQF-02; edition 1.0 H5 |
| Fish oil production | 190 kt | 205 kt | 219 kt | 258 to 366 kt pangasius oil [estimate] | AQF-02; AQF-calc |
| EPA plus DHA in that oil | 0.4 to 0.6 kt | | | 0.5 to 1.1 kt | AQF-29; AQF-calc |

- Pangasius by-products are 62 to 67% of the whole fish (MAC-45). The IFFO shares imply about 0.116 t of meal and 0.111 t of oil per tonne of pangasius (AQF-04; our calculation). {VN-direct|Low}
- Reading: Vietnam can plausibly stay self-sufficient in fishmeal *volume* to 2050 through by-products, as trawl-based whole-fish meal shrinks. It stays short of high-grade (65% CP) meal for shrimp and marine feeds and has almost no domestic EPA plus DHA. {VN-direct|Low}; estimate; 2050.

**Omega-3 (EPA plus DHA).**
- Global supply about 0.8 Mt, with a shortfall of 0.4 Mt to over 1 Mt against human requirements; almost 90% comes from capture fisheries (AQF-16). {general|Medium}
- Alternatives are commercial: Veramaris algal oil (Nebraska, USD 200 M, 2019) claims capacity equal to 1.2 Mt of wild fish and about 15% of salmon farming's EPA plus DHA need, with twice fish oil's EPA plus DHA content (AQF-23; company claim). Corbion's algal omega-3 is reported in about 30% of salmon diets (AQF-24; claim, basis unclear). A modified omega-3 canola oil (trial with a Cargill co-author) replaced 100% of menhaden fish oil in low-fishmeal whiteleg shrimp diets and up to 75% in poultry-meal diets without growth loss (AQF-19). Vietnam has approved 6 GE canola events for food and feed (AQF-21). {general|Medium}; signal.
- Vietnamese need [estimate], VN-direct, Low: assumed requirements of 0.5% of diet for shrimp (0.3 to 1.0%), 1.0% for marine fish (0.7 to 1.5%, AQF-18) and 0.05 to 0.1% for freshwater species give 11 kt (2025), 12.7 kt (2030), 17.5 kt (2040) and 21.4 kt (2050) of EPA plus DHA in AQ-BASE; 32.8 kt in AQ-HIGH (2050). Part of this comes with the residual oil in fishmeal; the rest from fish oil at about 25% EPA plus DHA, about 85 kt of marine fish oil equivalent in 2050 (41 to 159 kt).

### Q4. Protein crops to 2050

- **Soybean has collapsed and is projected flat.** About 205 kha in 2010, 36.8 kha in 2021, under 20 kha forecast for 2024 (AQF-20); OECD-FAO uses 39 kha for 2024 to 2025 and projects 39.3 kha (2030) and 38.9 kha (2035) with yields falling from 1.28 to 1.15 t per ha (AQF-02). Imports rise to 2.9 Mt (2030) and 3.1 Mt (2035) of beans, plus meal (AQF-02; QNT). {VN-direct|Medium}; trend and projection.
- **Why:** domestic beans cost VND 25,000 to 30,000 per kg against VND 13,000 to 15,000 for imports, profit is about VND 20 million per ha, and labour is scarce (AQF-20). Domestic beans go to food; food use alone was 540 kt in 2025 (MAC-04). {VN-direct|Medium}
- **No official target.** The crop strategy (Decision 1748) sets no maize, soybean or cassava area or output (NTS-22). A press proposal for winter soybean on 300 kha of Red River Delta double-rice land (600 kt) is not an adopted plan (AQF-20). The 654 kha of rice land to be released by 2030 (Decision 1177) has no planned destination (NTS-15); NGF covers protein yields per hectare for that land. {VN-direct|Medium}
- **GM and gene editing.** 60 GE events approved for food and feed (maize 16, soybean 15, canola 6, cotton 10 and alfalfa 4 for feed, sugar beet 1); 31 GE maize hybrids for cultivation, above 100 kha from 2020 and about half of feed-maize area by 2023 to 2024; no GE soybean field-test application ever submitted; gene-edited high-protein soybean lines in greenhouse evaluation (AQF-21). Decree 43/2026/ND-CP: gene-edited organisms without foreign DNA follow a notification route outside GMO rules; approval of food and feed events cleared in five OECD or G20 countries cut from 90 to 45 working days; refined products (soybean oil, corn starch) are not "GM food"; first guidelines for GM microorganisms in contained production, relevant to precision fermentation (AQF-22). {VN-direct|Medium}; signal.
- **What-if [estimate], VN-direct, Low:** 100 kha at 2.0 t per ha gives 200 kt of beans (1.5% of the S-BASE 2050 bean-equivalent need of 13.3 Mt; 2.2% of S-EFF); 300 kha at 2.5 t per ha gives 750 kt (5.6%; 8.4% of S-EFF). Realistic domestic contribution to *feed* protein by 2050 is close to zero unless gene-edited or GE varieties close the yield gap and a feed-grade price is supported, because domestic beans first displace food-soy imports.
- **Duckweed and azolla:** used for centuries in northern Vietnam as green manure and fodder for pigs, ducks and fish (AQF-30; AQF-31). Integrated rice-fish-duckweed systems exist but we found no current area or volume data. Vietnam holds a national duckweed collection but publishes almost no duckweed-protein work (HSC-01). Treat as a local, integrated-farm protein, not a national balance item. {VN-direct|Medium}

### Q5. Offshore and recirculating aquaculture

- **Offshore targets:** 10,000 ha and 100 kt by 2025; 30,000 ha, 3.5 million m3 and 340 kt by 2030 (marine fish 120 kt, molluscs 100 kt, seaweed 100 kt, crustaceans 20 kt) (AQF-01). Provinces named in the decision, now: Quang Ninh, Hai Phong, Quang Ngai, Dak Lak (former Phu Yen), Khanh Hoa (including former Ninh Thuan), Lam Dong (former Binh Thuan), Ho Chi Minh City (former Ba Ria-Vung Tau), Ca Mau and An Giang (former Kien Giang). {VN-direct|High}; projection (official target).
- **Signals:** Khanh Hoa pilot under Decision 231/QD-TTg (24 Jan 2025): 30 ha (2025), 100 ha (2026 to 2027), 110 ha (2028 to 2029); HDPE farms reported profit ratios of 172% (cobia), 112% (lobster) and 131.4% (grouper) of wooden-cage farms of the same size (AQF-13; provincial claim). HDPE cages hold up to 300 t of cobia each (AQF-10). Ca Mau planned 6,800 ha of intensive and super-intensive shrimp in 2025 (AQF-27). {VN-direct|Medium}; signal.
- **Recirculating systems (RAS):** we found no national RAS target or count; super-intensive shrimp (lined ponds, partial recirculation) is the main form. Gap.
- **Feed implications [estimate]:** offshore cages cannot use trash fish at scale (logistics, storms, pollution), so offshore growth is formulated-feed growth. If the 120 kt offshore marine-fish target for 2030 were met on pellets, it alone would need about 177 kt of feed (120 kt x 1.5 x 0.985), twice AQ-BASE's 2030 marine pellet estimate (89 kt). Marine feeds run at 40 to 50% CP with 15 to 30% fishmeal (hypothesis, edition 1.0 H6) and need about 1% EPA plus DHA. Super-intensive shrimp raises nursery and high-protein feed demand but improves FCR. {VN-direct|Low}

### Q6. Implications: 2050 aquafeed protein and the credible alternative share [estimate]

All VN-direct, Low; foresight type estimate; horizon 2050 unless stated. Arithmetic in `aqf_calc.py` section 6.

| Item | AQ-LOW | AQ-BASE | AQ-HIGH |
|---|---|---|---|
| Aquafeed (Mt) | 8.0 | 9.7 | 12.5 |
| Aquafeed CP (Mt; industry scale) | 2.50 (1.68) | 3.10 (2.07) | 4.08 (2.73) |
| Shrimp plus marine feed (Mt) | 1.9 | 2.6 | 3.9 |
| EPA plus DHA need (kt; range) | 14.8 (6.3 to 28.8) | 21.4 (10.3 to 39.8) | 32.8 (17.2 to 58.5) |
| Fishmeal demand (kt) | 151 to 393 across QNT and the OECD extension | | |

**Protein.** In AQ-BASE, a credible novel-protein share is 35 to 185 kt of protein (1.1 to 5.9% of aquafeed CP; 1.7 to 8.9% on the industry scale), or 50 to 260 kt of product at 70% CP:
- low end: 10% of fishmeal replaced plus 1% functional inclusion in shrimp and marine feeds;
- high end: 40% of fishmeal replaced (as in QNT S-ALT, within trial evidence of 25 to 60%), 3% functional inclusion in shrimp and marine feeds, and 5% of the soybean-meal protein in all aquafeed.
- Fishmeal replacement alone is only 16 to 66 kt of protein. The larger upside is the soybean-meal segment, which price rules out at 2026 costs (4.6 to 5.1 times soybean-meal protein, edition 1.0 H11). Chinese SCP and poultry by-product meal compete for the same fishmeal slice (edition 1.0 H8, H13).

**Omega-3.** A credible share is 15 to 50% of aquafeed EPA plus DHA by 2050: 3.2 to 10.7 kt, about 6 to 21 kt of algal oil at 50% EPA plus DHA. The share can exceed the protein share because (a) Vietnam has no domestic EPA plus DHA source, (b) the global gap is structural, (c) products are commercial and trialled in shrimp, and (d) per tonne of feed the value is concentrated. The binding conditions are the fish-oil price (El Niño), registration of algal and transgenic oils as aquafeed raw materials (edition 1.0 H8: the aquafeed list has no microalgae), and import cost. A Vietnamese producer would need a carbon source and fermentation capacity (Schizochytrium runs on sugar), which links to the cassava and sugar ceiling in QNT (1.32 Mt of glucose in S-ALT 2050).

---

## Signposts

| Signpost | Current value | What would show a trajectory is unfolding | Where to watch |
|---|---|---|---|
| Capture output against the 2.8 Mt target | 3.83 Mt (2025) | Falling towards 3 Mt by 2028 means the trash-fish supply is shrinking on plan | NSO annual; MAE fisheries department |
| Trawler numbers | 20,340 (2016); cap about 8,360 (2030) | Registered trawlers below 12,000 by 2028 | VNFishbase fleet registry; Decision 389 reviews |
| Marine aquaculture and marine finfish output | 730 kt (2021); targets 1.45 Mt and 200 kt (2030) | Marine finfish above 150 kt by 2028 points to AQ-BASE or AQ-HIGH | NSO; MAE; provincial reports (Khanh Hoa, Quang Ninh, Hai Phong) |
| Offshore sea areas allocated and HDPE cages | Khanh Hoa pilot 30 ha (2025) | 100 ha phase on time (2027); sea-area allocations to firms in 3 or more provinces | Provincial People's Committees; Decree on sea-area allocation |
| Marine-fish feed capacity | 40,000 to 50,000 t a year (2022) | A dedicated 100 kt marine-feed line or a Vietnamese brand launch | Company announcements (De Heus Vinh Long, C.P. Ca Mau, Skretting, Uni-President) |
| Lobster pellet adoption | trash fish near universal | A commercial lobster pellet above 10% of farms | RIA3 Nha Trang; Khanh Hoa extension service |
| Fishmeal to soybean-meal price ratio; fish oil price | 6.2 (August 2026) | Ratio above 6 for 12 months; fish oil above USD 5,000 per t | World Bank Pink Sheet; IFFO |
| Peru second 2026 and first 2027 seasons | 2026 first season about 25% landed | Quota below 2 Mt or cancelled (WC-01) | PRODUCE; IMARPE; NOAA ENSO |
| By-product share of marine ingredients | 34% (fishmeal), 54% (fish oil), 2024 | Above 40% of fishmeal by 2030 | IFFO annual update |
| Algal or transgenic omega-3 oil in Vietnamese aquafeed | not listed in the aquafeed raw-material list | MAE lists microalgae oil or DHA canola oil; a shrimp-feed launch with algal oil | MAE circulars (Circular 16/2026 successor); company launches |
| GE or gene-edited soybean | no field-test application; gene-edited lines in greenhouse | First notification under Decree 43/2026 or a field-test application | MAE; USDA GAIN biotechnology annual |
| Successor fisheries strategy after 2030 | none | A draft with 2040 or 2045 volumes, a trash-fish end date or an aquafeed target | MAE work programme 2028 to 2030 |
| Pangasius output and area | 1.94 Mt (2025); area falling | Output flat or falling while exports rise points to intensification; northern pangasius farms appear | NSO; VASEP |

---

## Implications by audience

- **Investors.** The feed-protein thesis in aquaculture is narrow in tonnage but sharp in value: shrimp and marine feeds, about 2.6 Mt of feed by 2050 in AQ-BASE, where fishmeal and fish oil set the price. The omega-3 gap is the more defensible thesis: Vietnam has almost no domestic EPA plus DHA and needs about 11 kt now and 10 to 40 kt by 2050. Watch trash-fish replacement and offshore cages as the demand trigger, not total aquaculture tonnage.
- **Policy makers.** The official path (fewer trawlers, less capture, more marine aquaculture, no trash fish) is internally consistent, but it creates a formulated-feed and omega-3 need that no target covers. No-regret moves: publish a trash-fish end date by species and province; add microalgae and oilseed omega-3 oils to the aquafeed raw-material list; give the post-2030 fisheries strategy an aquafeed protein and omega-3 balance; count lobster output properly. Domestic soybean for feed is not a realistic import-substitution lever at current yields and prices; gene editing is the long-run option.
- **Startups and founders.** Build for the marine and shrimp segment (functional-plus-protein ingredients, attractants, omega-3 oils) and for by-product upgrading (pangasius and shrimp by-products into higher-grade meal, hydrolysates and oils). A fermentation omega-3 play needs sugar or glycerol and competes with the cassava and sugar constraint in QNT.
- **F&B and feed manufacturers.** Expect fishmeal to stay available in volume from pangasius by-products but not in grade, and omega-3 to be the scarcer input. Offshore marine fish and lobster pellets are a growth line with little domestic competition today (over 80% foreign-owned). Lock in algal or transgenic omega-3 options before El Niño years.
- **Research bodies.** Priorities: a lobster and grouper pellet that beats trash fish on cost; EPA plus DHA requirement data for Vietnamese species at tropical temperatures; nutritional value of pangasius by-product meals and oils by grade; SSP-based output projections for shrimp and pangasius; gene-edited high-protein soybean field trials.
- **International bodies.** Fundable public goods: a regional trash-fish and trawl-bycatch monitoring system; a Southeast Asian by-product collection programme (Asia holds most of the 12 Mt uncollected); transition support for trawl crews moving into offshore aquaculture; an ASEAN omega-3 supply assessment.

---

## Disagreements log

| Topic | Source A | Source B | Position taken |
|---|---|---|---|
| Soybean area | VnEconomy: under 20 kha (2024 forecast) (AQF-20) | OECD-FAO: 39 kha (2024 and 2025) (AQF-02); USDA output 42 kt (MAC-04) | Range 20 to 39 kha. Both show collapse from 205 kha; OECD used for projections |
| Soybean yield | VnEconomy: 1.62 t per ha now (AQF-20) | OECD-FAO: 1.28 t per ha (2025), falling to 1.15 by 2035 (AQF-02) | Unresolved; both far below world 2.8 t per ha |
| Capture in 2030 | Decision 339: 2.8 Mt (NTS-08) | OECD-FAO implied 3.50 Mt (AQF-02) | Both shown. OECD-FAO does not model the fleet cut |
| Aquaculture in 2030 | Decision 339: 7.0 Mt | OECD-FAO 6.12 Mt on a lower base; QNT S-BASE 6.58 Mt | AQ-HIGH follows the target, AQ-BASE follows QNT |
| Vietnamese fishmeal output | OECD-FAO 325 kt (2025) (AQF-02) | About 500 kt a year in 2005 to 2016 via IndexMundi (AQF-06); 265 kt in 2002 (AQF-05) | OECD-FAO used. The 500 kt figure is secondary and may include fish powder |
| Fish oil use in Vietnam | OECD-FAO consumption falls from 103 kt (2025) to 38 kt (2030) (AQF-02) | Rising shrimp and marine feed (this note) | The OECD drop looks like a model artefact; not used |
| Marine finfish FCR on trash fish | VNUA: "2 to 2.5" in wooden cages (AQF-10) | Edwards and others: grouper 5.9 wet (AQF-05) | 5 to 8 wet used; the VNUA figure is probably on a dry-matter or mixed basis |
| Lobster volume | Decision 1664: 3 kt (2025) and 5 kt (2030) targets (AQF-01) | Exports to China USD 845 M (2025) (AQF-12) | Official scale used for trash-fish arithmetic; flagged as a gap |
| Fish to 2050 totals | Aquaculture 24.8 Mt plus capture 26.8 Mt (2030) | Stated total 50.3 Mt (AQF-25) | Extraction inconsistency; values used only for the growth-rate reading, Low |
| 2045 marine aquaculture share | "trên 25% tổng sản lượng" read as total fisheries (AQF-01) | Could mean total aquaculture | Fisheries used; only the qualitative reading is used |
| Trash fish in 2025 | Our estimate 0.4 to 1.6 Mt (AQF-calc) | 0.18 to 0.32 Mt used directly in 2002 (AQF-05) | Not comparable: species mix changed; our estimate is Low confidence |

---

## Open questions and gaps

| Gap | Why it matters | Cheapest way to close it |
|---|---|---|
| Current direct trash-fish use by species and province | Sizes the replacement market (0.4 to 1.6 Mt range) | RIA3 (Nha Trang) and MAE fisheries department surveys; FAO TCP/RAS/3203 report (Hasan 2012, AQF-33) for a 2010 baseline |
| Actual marine aquaculture and marine finfish output 2025 | Base of the marine carve-out (assumed 80 kt) | NSO does not split it; MAE annual review; Khanh Hoa and Quang Ninh statistics |
| Lobster output and trade | USD 845 M of exports against a 3 to 5 kt plan | Customs HS 0306.21 volumes; Khanh Hoa and Dak Lak (former Phu Yen) cage counts |
| Vietnam-specific IMPACT or AsiaFish projections to 2050 | No published Vietnam aquaculture projection beyond 2035 | WorldFish Vietnam team; Tran and others' AsiaFish model runs (AQF-26 cites the model) |
| EPA plus DHA requirements of Vietnamese species at tropical temperatures | Drives the 10 to 40 kt range | Literature review of whiteleg shrimp, cobia, pompano and grouper requirements; RIA2 |
| Grade mix and price of Vietnamese fishmeal (55, 60, 65% CP) | Whether by-product meal can serve shrimp and marine feeds | Customs HS 2301.20 by grade; AgroMonitor; Ca Mau and An Giang plants |
| National RAS and super-intensive shrimp area | Feed intensity per tonne | MAE aquaculture department; Ca Mau and Bac Lieu (now Ca Mau) statistics |
| Global fishmeal and fish oil projections to 2050 | Our 2050 global numbers are extensions | FAO SOFIA 2026 projection chapter (blocked to our tools); IFFO long-term outlook |
| Cottrell and others 2020 numbers | Global novel-feed potential to 2030 | Read the Nature Food paper directly |
| Species-level 2030 plans for pangasius and shrimp | No national species targets found | MAE decisions on the pangasius and shrimp sector plans; VASEP |

---

## Leads

- The OECD SDMX API also carries fish oil (CPC_21525) and world aggregates (area code W); QNT's recipe works with these codes.
- IFFO's by-product page is updated each year and gives the pangasius share of world by-product meal and oil: a cheap annual Vietnam indicator.
- FAO TCP/RAS/3203 (2008 to 2011), *Transition from low-value fish to compound feeds in marine cage farming in Asia* (Hasan 2012), has Vietnamese on-farm pellet-versus-trash-fish trials: the best baseline for a lobster and grouper pellet play.
- Horsnell 2019 (Chalmers thesis, AQF-34) is a life-cycle assessment of Vietnamese whole-fish fishmeal; useful for the carbon case against trash-fish meal.
- Decree 43/2026/ND-CP's GM-microorganism rules should be read in full by the FTB stream (precision fermentation and GM production strains).
- Omega-3 canola oil (6 GE canola events approved for food and feed) could be imported now; a feed-mill trial in whiteleg shrimp would cost little.

---

## Sources

All accessed 24 September 2026.

- **AQF-01** Prime Minister. Quyết định 1664/QĐ-TTg phê duyệt Đề án phát triển nuôi trồng thủy sản trên biển đến năm 2030, tầm nhìn đến năm 2045. 4 Oct 2021. https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-1664-QD-TTg-2021-phe-duyet-De-an-phat-trien-nuoi-trong-thuy-san-tren-bien-den-2030-490005.aspx . Marine aquaculture targets 2025 and 2030 by species and inshore or offshore; 2045 vision. Type: law.
- **AQF-02** OECD and FAO. OECD-FAO Agricultural Outlook 2026-2035, SDMX API, dataflow OECD.TAD.ATM DSD_AGR@DF_OUTLOOK_2026_2035 version 1.1. June 2026. Queries: `.../VNM.A.CPC_EX_AC+CPC_21233+CPC_04.QP+QC+FE+EX+IM..`, `.../W+PER+CHN.A.CPC_21233.QP..`, `.../W.A.CPC_21525+CPC_EX_AC+CPC_04.QP..`, `.../VNM.A.CPC_0141+CPC_0112.QP+YLD+AH+IM..` at https://sdmx.oecd.org/public/rest/data/OECD.TAD.ATM,DSD_AGR@DF_OUTLOOK_2026_2035,1.1/ . Aquaculture, fish, fishmeal, fish oil, soybean and maize projections. Type: intergovernmental model projection.
- **AQF-03** FAO. "SOFIA 2026: Global fisheries and aquaculture production reaches new highs." 16 Jun 2026. https://www.fao.org/newsroom/detail/sofia-2026--global-fisheries-and-aquaculture-production-reaches-new-highs/en . 2024 production and 2034 projection. Type: intergovernmental.
- **AQF-04** IFFO, The Marine Ingredients Organisation. "Update on by-product marine ingredients." March 2026. https://www.iffo.com/by-product . By-product shares of fishmeal and fish oil; pangasius shares; 12 Mt uncollected. Type: industry association.
- **AQF-05** Edwards, P., Le Anh Tuan and Allan, G.L. (2004). A survey of marine trash fish and fish meal as aquaculture feed ingredients in Vietnam. ACIAR Working Paper 57. https://www.aciar.gov.au/sites/default/files/legacy/node/554/wp57.pdf (doi 10.22004/ag.econ.118373). Trash-fish volumes, uses and FCRs, 2001 to 2002. Type: research report.
- **AQF-06** Leadbitter, D. (2019). Driving change in South East Asian trawl fisheries, fishmeal supply, and aquafeed. IFFO and Global Aquaculture Alliance, August 2019. https://www.iffo.com/system/files/downloads/Full%20Report%20on%20South%20East%20Asia.pdf . Vietnam trawler numbers, fishmeal factories and capacity. Type: industry-commissioned report.
- **AQF-07** Mariculture in Southern Central Region, Vietnam: Status and Orientation Toward Sustainable Development. Journal of Agriculture and Ecology Research International, 2021. doi 10.9734/jaeri/2021/v22i530200 (authors not captured in our retrieval; excerpt via Scite). Share of stakeholders using trash fish and pellets; lobster FCR. Type: peer-reviewed (open-access journal of mixed reputation).
- **AQF-08** Bioeconomics of mud crab, Scylla paramamosain, culture in Vietnam. Reviews in Aquaculture, 2013. doi 10.1111/j.1753-5131.2012.01073.x (authors not captured in our retrieval; excerpt via Scite). Trash-fish use and price by region. Type: peer-reviewed.
- **AQF-09** Tạp chí Thủy sản Việt Nam. "Thức ăn cho nuôi thủy sản trên biển." 9 Nov 2022. https://thuysanvietnam.com.vn/thuc-an-cho-nuoi-thuy-san-tren-bien/ . Marine-fish feed capacity and market shares. Type: trade press.
- **AQF-10** Khoa Thủy sản, Học viện Nông nghiệp Việt Nam (VNUA). "Thực trạng và hướng phát triển bền vững nuôi cá biển." 21 Oct 2024. https://khoathuysan.vnua.edu.vn/thuc-trang-va-huong-phat-trien-ben-vung-nuoi-ca-bien.html . Species, cage types, trash-fish use. Type: university.
- **AQF-11** VnEconomy. "Phấn đấu sản lượng thủy sản nuôi biển đạt 1,4 triệu tấn vào năm 2030." 12 May 2022. https://vneconomy.vn/phan-dau-san-luong-thuy-san-nuoi-bien-dat-1-4-trieu-tan-vao-nam-2030.htm . Marine aquaculture 2021. Type: press.
- **AQF-12** Báo Chính phủ. "Đưa tôm hùm thành mặt hàng 'tỷ đô'." 7 Jul 2026. https://baochinhphu.vn/dua-tom-hum-thanh-mat-hang-ty-do-102260707144128457.htm . Lobster exports 2025 and 2026. Type: government press.
- **AQF-13** Người Lao Động (Tuổi Trẻ). "Khánh Hòa công bố đề án thí điểm nuôi biển công nghệ cao." 7 Mar 2025. https://tuoitre.vn/nld/khanh-hoa-cong-bo-de-an-thi-diem-nuoi-bien-cong-nghe-cao-196250307155403262.htm . Decision 231/QD-TTg pilot. Type: press.
- **AQF-14** Báo Khánh Hòa. "Vươn khơi nuôi biển, Kỳ 1: Thúc đẩy phát triển nuôi biển công nghệ cao." 3 Sep 2025. https://baokhanhhoa.vn/phong-su/202509/vuon-khoi-nuoi-bien-ky-1thuc-day-phat-trien-nuoi-bien-cong-nghe-cao-88e692c/ . Offshore pilot at 6 nautical miles; typhoon losses. Type: provincial press.
- **AQF-15** Prime Minister. Quyết định 389/QĐ-TTg Quy hoạch bảo vệ và khai thác nguồn lợi thủy sản thời kỳ 2021-2030, tầm nhìn đến năm 2050. 9 May 2024. https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-389-QD-TTg-2024-Quy-hoach-bao-ve-khai-thac-nguon-loi-thuy-san-thoi-ky-2021-2030-609370.aspx . Fleet cap, gear mix, labour, MPAs. Type: law.
- **AQF-16** Tocher, D.R., Betancor, M.B., Sprague, M., Olsen, R.E. and Napier, J.A. (2019). Omega-3 long-chain polyunsaturated fatty acids, EPA and DHA: bridging the gap between supply and demand. Nutrients 11(1): 89. doi 10.3390/nu11010089. Global EPA plus DHA supply and gap; Veramaris; transgenic oilseeds. Type: peer-reviewed review.
- **AQF-17** Cottrell, R.S., Blanchard, J.L., Halpern, B.S., Métian, M. and Froehlich, H.E. (2020). Global adoption of novel aquaculture feeds could substantially reduce forage fish demand by 2030. Nature Food 1: 301-308. doi 10.1038/s43016-020-0078-x. Title-level finding only; full text not readable. Type: peer-reviewed.
- **AQF-18** Vagner, M., Lacoue-Labarthe, T., Zambonino-Infante, J.-L. and others (2015). Depletion of essential fatty acids in the food source affects aerobic capacities of the golden grey mullet Liza aurata in a warming seawater context. PLoS ONE 10(6): e0126489. doi 10.1371/journal.pone.0126489. About 1% EPA plus DHA on dry matter as a standard marine-fish level. Type: peer-reviewed.
- **AQF-19** Vo, L.L.G., Galkanda-Arachchige, H.S.C., Iassonova, D.R. and Davis, D.A. (2021). Efficacy of modified canola oil to replace fish oil in practical diets of Pacific white shrimp Litopenaeus vannamei. Aquaculture Research 52(6): 2446-2459. doi 10.1111/are.15094. Full fish-oil replacement in low-fishmeal diets. Type: peer-reviewed (one co-author from Cargill).
- **AQF-20** VnEconomy. "Ngành đậu tương có nhiều 'nút thắt' cần tháo gỡ." 7 Nov 2024. https://vneconomy.vn/nganh-dau-tuong-co-nhieu-nut-that-can-thao-go.htm . Soybean area, yield, prices, proposal. Type: press.
- **AQF-21** USDA Foreign Agricultural Service. Biotechnology and Other New Production Technologies Annual, Vietnam, VM2025-0045. 1 Dec 2025. https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Biotechnology+and+Other+New+Production+Technologies+Annual_Hanoi_Vietnam_VM2025-0045.pdf . GE approvals, GE maize area, gene editing. Type: government report.
- **AQF-22** ISAAA Crop Biotech Update. "Vietnam updates regulatory framework for agricultural biotechnology." 29 Apr 2026, summarising USDA GAIN VM2026-0013. https://www.isaaa.org/kc/cropbiotechupdate/article/default.asp?ID=21798 (USDA page https://www.fas.usda.gov/data/gain/2026/04/vietnam-vietnam-updates-regulatory-framework-agricultural-biotechnology returned 403). Decree 43/2026/ND-CP. Type: secondary summary of a government report.
- **AQF-23** Veramaris. "Veramaris opens US$200m facility for EPA and DHA omega-3 algal oil." 10 Jul 2019. https://www.veramaris.com/media-resources-detail/veramaris-opens-us200m-facility-for-epa-dha-omega-3-algal-oil-to-support-sustainable-growth-in-aquaculture . Capacity claims. Type: company claim.
- **AQF-24** Feed Strategy. "Plant-based fish oil alternatives growing fast in aquafeed." 1 Jun 2021, updated 17 Sep 2025. https://www.feedstrategy.com/animal-feed-manufacturing/article/15442231/plantbased-fish-oil-alternatives-growing-fast-in-aquafeed . Algal and canola omega-3 adoption; company claims. Type: trade press.
- **AQF-25** Chan, C.Y., Tran, N., Dao, D.C., Sulser, T.B., Phillips, M.J. and others (2017). Fish to 2050 in the ASEAN region. WorldFish and IFPRI Working Paper 2017-01. https://digitalarchive.worldfishcenter.org/bitstreams/dd94e6b1-49e3-4c10-b147-16e664381520/download . IMPACT business-as-usual projections for ASEAN. Type: research report (model projection).
- **AQF-26** Tran, N., Chan, C.Y. and Aung, Y.M. (2022). Future scenarios of climate change impacts on fisheries and aquaculture in Vietnam. Preprint, doi 10.31235/osf.io/72har (excerpts via Scite). Qualitative scenarios for tuna, pangasius, tilapia and shrimp. Type: preprint.
- **AQF-27** bestmar.vn. "Kế hoạch phát triển ngành tôm nước lợ bền vững năm 2025." Undated (2025). https://bestmar.vn/ke-hoach-phat-trien-nganh-tom-nuoc-lo-ben-vung-nam-2025 . National and provincial shrimp targets for 2025; issuing document not shown. Type: trade website (Low).
- **AQF-28** Prime Minister. Quyết định 339/QĐ-TTg (11 Mar 2021), re-read for species-level targets. https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-339-QD-TTg-2021-phe-duyet-Chien-luoc-phat-trien-thuy-san-Viet-Nam-den-2030-467332.aspx . Same text as NTS-08. Type: law.
- **AQF-29** Aryani, N., Suharman, I. and Heltonika, B. (2023). Changes in the fatty acid profile of fish oil derived from Pangasius catfish (Pangasianodon hypophthalmus) processing waste due to variations in fish size and heating temperatures. F1000Research 12: 1255 (version 2). doi 10.12688/f1000research.141714.2. EPA and DHA in pangasius oil. Type: peer-reviewed (open post-publication review).
- **AQF-30** Lumpkin, T.A. (1985). Advances in Chinese research on Azolla. Proceedings of the Royal Society of Edinburgh B. doi 10.1017/s0269727000008095; and Lumpkin, T.A. and Bartholomew, D.P. (1986). Predictive models for the growth response of eight Azolla accessions to climatic variables. Crop Science. doi 10.2135/cropsci1986.0011183x002600010026x. Traditional azolla use in Vietnam (abstracts). Type: peer-reviewed.
- **AQF-31** Men, B.X., Ogle, B. and Lindberg, J.E. (2002). Effect of diet and management system on growing duck performance in the Mekong Delta of Vietnam. Journal of Sustainable Agriculture 20(3). doi 10.1300/j064v20n03_04. Duckweed in duck diets (abstract). Type: peer-reviewed.
- **AQF-32** VASEP. "Tổng quan ngành cá tra." Undated page with 2025 data. https://vasep.com.vn/san-pham-xuat-khau/ca-tra/tong-quan-nganh-ca-tra . Pangasius area and output fell over 2020 to 2025; exports USD 2.2 bn (2025). Type: industry association.
- **AQF-33** Hasan, M.R. (2012). Transition from low-value fish to compound feeds in marine cage farming in Asia. FAO Fisheries and Aquaculture Technical Paper (TCP/RAS/3203). OpenAlex W608313878. Not read; lead. Type: intergovernmental.
- **AQF-34** Horsnell, C. (2019). From fish to fish: evaluating the socio-environmental consequences of the Vietnamese fishmeal industry. Chalmers University of Technology thesis. http://studentarbeten.chalmers.se/publication/256496 . Abstract only: Vietnamese fishmeal mostly from trash fish. Type: thesis.
- **AQF-35** Kinh tế Nông thôn. "Giải pháp để ngành cá tra phát triển bền vững." 9 Oct 2023. https://kinhtenongthon.vn/Giai-phap-de-nganh-Ca-tra-phat-trien-ben-vung-post58947.html . Checked for a national pangasius plan; none found. Type: press.
- **AQF-calc** AltProtein Vietnam AQF calculations (this work): `aqf_calc.py`, 24 September 2026. Type: our estimate.

Wave 3 and edition 1.0 sources reused: QNT-01, QNT-model, NTS-08, NTS-15, NTS-22, CLM-20, CLM-21, CLM-27 to CLM-29, CLM-40, HSC-01, HSC-28 to HSC-30, MAC-01, MAC-04, MAC-06, MAC-15, MAC-17, MAC-45, FM-10, VCO-10, and edition 1.0 appendix H sections H5 to H13.

---

## Working log

- 24 September 2026: read the wave 3 protocol, the futures goals and question tree, the AQF brief, QNT balance_model.md, CLM climate.md (aquaculture and fishmeal sections), HSC horizon_scan.md (anchoveta signal), NTS national_targets.md (fisheries targets) and edition 1.0 app-h-feed-market.md. Checked the NGF and HUB briefs to avoid overlap (NGF covers protein yields per hectare of released rice land; AQF covers soybean and legume status and integrated aquatic plants only briefly).
- Read Decisions 1664, 339 (re-read) and 389 on thuvienphapluat.vn (site-internal search, no WebSearch). OECD-FAO SDMX API for Vietnam and world fish, fishmeal, fish oil, soybean and maize. Literature via OpenAlex and Scite.
- Blocked or unreadable: FAO SOFIA 2024 projections page (403); aquafeed.com (robots); Cottrell and others 2020 full text; FAOSTAT API (robots); USDA GAIN page for VM2026-0013 (403); aquadocs.org (JavaScript; browser tab opened, redirected to the home page with a cookie banner, closed without interacting); Ca Mau shrimp plan page (robots).
- Threads stopped for repetition: pangasius national plan (two searches, no plan found); current national trash-fish volume (no post-2004 national figure found; estimated instead); Fish to 2050 Vietnam values (not published at country level).
- WebSearch calls used: 10 of 12.

---

## Appendix: raw evidence log

Evidence as logged during the research, before distillation into the findings above.

### E1. Decision 1664/QD-TTg (4 Oct 2021): marine aquaculture scheme to 2030, vision 2045 (AQF-01)
- 2025 targets: marine aquaculture area 280,000 ha; cage volume 10.0 million m3; output 850,000 t; exports USD 0.8 to 1.0 bn. Inshore 270,000 ha, 8.0 million m3, 750,000 t (marine fish 60,000 t; lobster 3,000 t; other crustaceans 57,000 t; molluscs 460,000 t; seaweed 170,000 t). Offshore ("xa bờ") 10,000 ha, 2 million m3, 100,000 t (marine fish 60,000 t; other crustaceans 10,000 t; molluscs 20,000 t; seaweed 10,000 t).
- 2030 targets: "300.000 ha, thể tích lồng nuôi 12,0 triệu m3; sản lượng nuôi biển đạt 1.450.000 tấn"; exports USD 1.8 to 2.0 bn. Inshore 270,000 ha, 8.5 million m3, 1,110,000 t (marine fish 80,000; lobster 5,000; other crustaceans 75,000; molluscs 550,000; seaweed 400,000). Offshore 30,000 ha, 3.5 million m3, 340,000 t (marine fish 120,000; other crustaceans 20,000; molluscs 100,000; seaweed 100,000).
- 2045 vision: "Công nghiệp nuôi biển trở thành bộ phận quan trọng trong ngành thủy sản, có đóng góp trên 25% tổng sản lượng"; exports above USD 4 bn. Denominator read as total fisheries output (page extraction; Medium).
- Feed: build a feed production system and "khu sản xuất thức ăn tập trung" linked to farming zones for domestic self-reliance. No feed volume, no trash-fish target in the extracted text.
- Offshore provinces named (former names in the decision): Quang Ninh, Hai Phong, Quang Ngai, Phu Yen, Khanh Hoa, Ninh Thuan, Binh Thuan, Ba Ria-Vung Tau, Ca Mau, Kien Giang. Current names: Quang Ninh, Hai Phong, Quang Ngai, Dak Lak (former Phu Yen), Khanh Hoa (including former Ninh Thuan), Lam Dong (former Binh Thuan), Ho Chi Minh City (former Ba Ria-Vung Tau), Ca Mau, An Giang (former Kien Giang).
- Our arithmetic: 2030 fed marine species in the target = marine fish 200,000 t + lobster 5,000 t + other crustaceans 95,000 t = 300,000 t; molluscs 650,000 t and seaweed 500,000 t are unfed.

### E2. OECD-FAO Agricultural Outlook 2026-2035, SDMX API (AQF-02; same dataset as QNT-01)
Vietnam (kt): 
| Series | 2025 | 2030 | 2035 |
|---|---|---|---|
| Aquaculture production (CPC_EX_AC) | 5,691.7 | 6,123.4 | 6,826.9 |
| Total fish production (CPC_04) | 9,142.7 | 9,624.5 | 10,324.3 |
| Implied capture (fish minus aquaculture, our calculation) | 3,451.0 | 3,501.1 | 3,497.4 |
| Fishmeal production (CPC_21233) | 324.7 | 389.0 | 419.8 |
| Fishmeal consumption | 220.8 | 309.0 | 338.7 |
| Fishmeal exports | 259.6 | 247.9 | 248.9 |
| Fishmeal imports | 155.7 | 167.8 | 167.7 |
| Fish oil production (CPC_21525, label inferred) | 190.1 | 205.4 | 218.6 |
| Fish oil consumption | 103.4 | 37.9 | 41.2 |
World (kt):
| Series | 2024 | 2025 | 2027 | 2030 | 2031 | 2035 |
|---|---|---|---|---|---|---|
| Fishmeal production | 5,673.0 | 5,360.8 | 5,481.7 | 5,976.7 | 5,510.4 | 6,270.5 |
| Fish oil production (CPC_21525) | 1,401.7 | 1,352.0 | 1,378.6 | 1,443.2 | 1,397.5 | 1,489.8 |
| Aquaculture production | 102,553.6 | 105,658.4 | 107,962.1 | 112,601.1 | 114,149.3 | 120,663.0 |
| Fish production (all) | 194,474.8 | 198,508.8 | 199,136.4 | 206,402.8 | 205,060.6 | 215,551.1 |
Peru fishmeal: 1,100 (2025), 717 (2027, modelled El Nino year), 1,098 (2030), 527 (2031, El Nino year), 1,126 (2035). The outlook builds El Nino years into 2027 and 2031.
- CPC_21525 has no label in the XML. It is read as fish oil because its magnitude (world 1.35 to 1.49 Mt) and country pattern (Norway consumes about twice what it produces; Chile and Vietnam large producers; Peru 125 kt) fit fish oil and no other commodity. Medium confidence.

### E3. FAO SOFIA 2026 (released 16 June 2026) (AQF-03)
- 2024: total fisheries and aquaculture production 235 Mt, of which 195 Mt aquatic animals; aquaculture of aquatic animals 103 Mt (first time above 100 Mt); capture about 92 Mt; aquaculture 53% of aquatic animal production and over 59% of aquatic animal food output.
- Projection: total aquatic animal production 214 Mt by 2034.
- The SOFIA 2024 projections page (fao.org/3/cd0683en) returned 403.

### E4. IFFO by-product page (March 2026) (AQF-04)
- 2024: 34% of fishmeal and 54% of fish oil from by-products; 42% of raw material overall.
- Composition of by-product fishmeal: wild-capture species 57%, tuna 19%, pangasius off-cuts 12%, tilapia 6%, salmon 6%. By-product fish oil: wild-capture species 30%, pangasius 29%, salmon 29%, tuna 6%, tilapia 6%.
- "almost 12 million tonnes of by-product produced in processing plants that are not collected for marine ingredient production"; Asia is the largest potential region; Asia about 35.5% of by-product marine ingredients.
- Our cross-check: 1.35 to 1.40 Mt of world fish oil x 54% x 29% = about 210 to 220 kt of pangasius-derived fish oil, close to OECD-FAO's 190 kt of Vietnamese fish oil production (2025). World fishmeal 5.4 to 5.7 Mt x 34% x 12% = about 220 to 230 kt of pangasius-derived fishmeal, about two thirds of OECD-FAO's 325 to 328 kt of Vietnamese fishmeal (2024 to 2025). Consistent: Vietnam's fishmeal and fish oil come mostly from pangasius by-products.

### E5. Trash fish (low-value fish) in Vietnam
- Edwards, Tuan and Allan 2004, ACIAR Working Paper 57 (AQF-05): RIMF estimated "0.93 million t of trash fish produced in 2001, that is, 36% of the total fish production" (marine catch 2.6 Mt). Southeast (Gulf of Thailand) 66.3% of trash fish, southwest 25.1%, middle 4.0%, north 4.5%. Trash fish rose from 30 to 40% of trawl catch to 50 to 60%, "even up to 80% in Kien Giang" (now An Giang). Direct use in aquaculture 176,420 to 323,440 t (2002): pangasius 64,800 to 180,000 t (FCR 2.5); shrimp 71,820 to 143,640 t (FCR 4.75); grouper 11,800 t (FCR 5.9); lobster 28,000 t for 1,000 t of lobster (FCR 28). Fish powder about 185,000 t and industrial fishmeal about 80,000 t; projection of "at least 150,000 to 200,000 t of fish meal" needed over the next decade. "It is unlikely that aquaculture based on traditional use of trash fish as a direct feed can expand to the extent forecast in the Master Plan."
- Leadbitter 2019, IFFO and GAA report (AQF-06): marine catch 2.186 Mt (2016); trawlers 16,400 (2008) to 20,340 (2016); 96 fishmeal factories identified in 2017 (86 in the south), documented capacity 675,366 t; 81 factories name "sea fish" as main raw material; production about 500,000 t a year in 2005 to 2016 per IndexMundi (secondary). Proportion of trash fish to fishmeal versus direct feed "unknown".
- Southern central mariculture survey 2021 (AQF-07, doi 10.9734/jaeri/2021/v22i530200): about 90% of stakeholders used trash fish (low-value fish, crustaceans, molluscs) as main feed; only 9.41% used pellets (barramundi, pompano); trash-fish FCR 35 to 40 for lobster.
- Mud crab bioeconomics study, Reviews in Aquaculture 2013 (AQF-08, doi 10.1111/j.1753-5131.2012.01073.x): all southern and most northern mud-crab farmers used low-value fish exclusively; prices VND 5,000 to 7,700 per kg, up 61 to 93% in five years.
- Thuy san Viet Nam, 9 Nov 2022 (AQF-09): marine fish feed capacity 40,000 to 50,000 t a year; foreign-invested firms over 80% of the marine fish feed market (C.P., Uni-President, Cargill, De Heus, Skretting, Proconco).
- VNUA Faculty of Fisheries, 21 Oct 2024 (AQF-10): "Thức ăn là cá tạp vẫn sử dụng" for cobia, grouper and snapper; industrial feed for pompano, cobia and red seabream. HDPE cages up to 300 t per cage (cobia).

### E6. Marine aquaculture status and signals; capture fleet plan
- VnEconomy, 12 May 2022 (AQF-11): marine aquaculture in 2021 about 85,000 ha, 9 million m3 of cages, "khoảng 730 nghìn tấn"; 2022 plan 790,000 t.
- Baochinhphu, 7 Jul 2026 (AQF-12): lobster exports to China USD 845 M in 2025; over USD 506 M in the first five months of 2026 (+44.3%), 71% of shrimp export value to China. No feed data.
- Decision 231/QD-TTg (24 Jan 2025), Khanh Hoa high-tech mariculture pilot (via Nguoi Lao Dong, 7 Mar 2025) (AQF-13): 240 ha at 0 to 3 nautical miles (3,600 t) and 200 ha at 3 to 6 nautical miles (5,100 t) to 2029; phases of 30 ha (2025), 100 ha (2026 to 2027) and 110 ha (2028 to 2029). HDPE cages. 2023 to 2024 pilot: profit ratios of HDPE farms against wooden-cage farms of the same size: cobia 172%, lobster 112%, grouper 131.4% (company and province claims). Bao Khanh Hoa (3 Sep 2025) calls it the first farming at 6 nautical miles in Vietnam (AQF-14).
- Decision 389/QD-TTg (9 May 2024), fisheries resources protection and exploitation plan 2021 to 2030, vision 2050 (AQF-15): maximum about 83,600 fishing vessels by 2030; trawl ("lưới kéo") 10.0% of the fleet (about 8,360 vessels), purse seine 6.1%, gillnet 40.3%; fishing labour down to about 600,000; 27 marine protected areas (about 463,587 ha, 0.463%). "Giảm dần sản lượng thủy sản khai thác". The 2050 vision is qualitative, with no catch number.
- Our arithmetic: trawlers were 20,340 in 2016 (AQF-06). A cap near 8,360 trawlers by 2030 is about 59% fewer trawlers than in 2016. Trawl catch is the main source of trash fish, so the plan implies a large fall in low-value fish supply for direct feeding and for whole-fish fishmeal.

### E7. Omega-3 and marine ingredient literature
- Tocher, Betancor, Sprague, Olsen and Napier 2019, Nutrients 11(1):89, doi 10.3390/nu11010089 (AQF-16): supply of EPA plus DHA "optimistically estimated at just over 0.8 million tonnes indicating a shortfall of more than 0.4 million tonnes", or "more pessimistically the deficit in supply has been calculated at over 1 million tonnes". Almost 90% of supply comes from capture fisheries. Veramaris (Schizochytrium, EPA and DHA oil, Nebraska plant on US corn syrup): initial capacity at release in 2019 "projected to meet up to 15% of the total current annual demand for EPA and DHA by the global salmon aquaculture industry". Transgenic oilseeds (canola, camelina) with microalgal genes are the second de novo route.
- Cottrell and others 2020, Nature Food 1:301-308, doi 10.1038/s43016-020-0078-x (AQF-17): title finding only (full text not readable to our tools): global adoption of novel feeds could substantially reduce forage fish demand by 2030. Numbers not extracted.
- Marine fish diets: about 1% EPA plus DHA on dry matter is a standard requirement level for marine finfish (golden grey mullet study citing species needs) (AQF-18, doi 10.1371/journal.pone.0126489). Shrimp: fish oil in whiteleg shrimp diets "can be replaced as long as EFA levels in diet meets the minimum requirement" (modified canola oil trial, AQF-19, doi 10.1111/are.15094); above 2% fatty-acid supplementation growth declines (secondary citation, not used for numbers).

### E8. Protein crops
- OECD-FAO 2026-2035 via SDMX (AQF-02): Vietnam soybean harvested area 39.0 kha (2024 and 2025), 39.3 kha (2030), 38.9 kha (2035); yield 1.23 t per ha (2024), 1.28 (2025), 1.19 (2030), 1.15 (2035); production 48 kt (2024), 50 kt (2025), 44.9 kt (2035); soybean imports 2.50 Mt (2024), 2.60 (2025), 2.91 (2030), 3.11 (2035). Maize area 900 kha (2024), 875 (2025), 894 (2030), 889 (2035); yield 4.92 to 5.54 t per ha.
- VnEconomy, 7 Nov 2024 (AQF-20): soybean area 205,000 ha in 2010 (peak), 36,800 ha in 2021, under 20,000 ha forecast for 2024; yield 1.49 t per ha (2017) to 1.62 (current); domestic beans VND 25,000 to 30,000 per kg against imported VND 13,000 to 15,000 per kg; profit about VND 20 million per ha; proposal to plant winter soybean on about 300,000 ha of double-rice land in the Red River Delta for 600,000 t (a proposal, not a plan).
- USDA FAS GAIN VM2025-0045, Biotechnology and Other New Production Technologies Annual, 1 Dec 2025 (AQF-21): 60 GE events approved for food and feed: maize 16, soybean 15, canola 6, cotton 10 (feed only), alfalfa 4 (feed only), sugar beet 1. 16 GE corn hybrids recognised for cultivation in 2014 to 2016, 30 by October 2024, one more in February 2025. GE maize above 100,000 ha for the first time in 2020; cumulative above 700,000 ha in 2015 to 2022; 13,256 t of GE seed imported 2015 to September 2024 (about 662,000 ha); "approximately 50 percent of the total feed corn production area" (2023 to 2024). No GE soybean field test applications submitted to date. Genome-edited high-protein soybean lines under greenhouse biosafety evaluation; gene-edited rice with aroma and blight resistance.
- ISAAA Crop Biotech Update, 29 Apr 2026, summarising USDA GAIN VM2026-0013 (AQF-22): Decree 43/2026/ND-CP: food and feed approval time cut from 90 to 45 working days for products cleared in at least five OECD or G20 countries; gene-edited organisms without foreign DNA excluded from GMO requirements, with a notification ("self-determination") process at the agriculture ministry (now MAE); highly refined products (soybean oil, corn starch) excluded from "GM food"; first guidelines for genetically modified microorganisms in contained production.

### E9. Omega-3 alternatives (company claims labelled)
- Veramaris press release, 10 Jul 2019 (AQF-23): Blair, Nebraska plant, USD 200 M; capacity "equivalent to 1.2 million tons of wild-catch fish" and "around 15 percent of the entire salmon farming industry's annual demand for EPA and DHA"; oil "contains twice as much EPA and DHA as fish oil"; Schizochytrium. Company claims; tonnage of oil not stated.
- Feed Strategy, 1 Jun 2021, updated 17 Sep 2025 (AQF-24): Veramaris output tripled in 2020 and is used in salmon, shrimp, trout, yellowtail and seabass feeds; Corbion algal omega-3 reported in about 30% of salmon diets (claim, basis unclear); Nuseed Aquaterra canola: "enough DHA to replace 10,000 kg of fish on one hectare" (claim); "Conventional algae production is 10 times too expensive for commodities". No Asian volumes.

### E10. Aquaculture projections beyond 2035 and scenario studies
- Chan, Tran, Dao, Sulser, Phillips and others 2017, Fish to 2050 in the ASEAN region, WorldFish and IFPRI Working Paper 2017-01 (AQF-25), IMPACT model, business-as-usual only: ASEAN aquaculture 24.8 Mt (2030) and 27.4 Mt (2050); capture 26.8 Mt in both years; total 50.3 Mt (2030) and 53.3 Mt (2050) as extracted (the extracted components do not add up to the totals: Low confidence on exact values); aquaculture share 48% (2030) and 51% (2050); fish consumption 38.4 kg per person (2015), 51.5 (2030), 61.5 (2050); aquaculture growth 2015 to 2030: catfish 4.3%, tilapia 5.2%, carp 5.3%, shrimp 4.6% a year. No Vietnam country projection published in the report; alternative scenarios deferred to a follow-up. The implied ASEAN aquaculture growth from 2030 to 2050 is about 0.5% a year (our calculation, (27.4/24.8)^(1/20) minus 1).
- Tran, Chan and Aung 2022, Future scenarios of climate change impacts on fisheries and aquaculture in Vietnam, preprint doi 10.31235/osf.io/72har (AQF-26): qualitative scenarios only. Pangasius range "likely to expand northward" with the Red River Delta playing a larger role; China may become a stronger pangasius competitor; tilapia about 225,000 t from 30,000 ha of ponds (around 2020); northern Vietnam warming of 1.2 to 1.3 °C by 2050 (1.4 to 1.5 °C north central coast) slows tilapia growth; 80% of shrimp in the Mekong Delta.
- Brackish shrimp plan 2025 (bestmar.vn summary of the national plan; issuing document not shown) (AQF-27): 2025 targets 1.3 to 1.4 Mt of shrimp (black tiger 350,000 t; whiteleg 1.05 Mt), exports USD 4.0 to 4.3 bn; Ca Mau 252,000 t and 6,800 ha of intensive and super-intensive farming. Low confidence on provenance.
- No Vietnamese species-level official target for 2030 exists in Decision 339 (checked, AQF-28 is the same text as NTS-08).

### E11. Pangasius oil is not an omega-3 source
- Aryani, Suharman and Heltonika 2023, F1000Research 12:1255 (version 2), doi 10.12688/f1000research.141714.2 (AQF-29): oil from pangasius processing waste (mesenteric fat, Indonesia): EPA 0.07 to 0.15% and DHA 0.10 to 0.16% of total fatty acids; total n-3 1.28 to 1.77%. Freshwater fish oils are low in EPA and DHA. [VN-adjacent] Medium (one study, Indonesian farmed pangasius).
- Our reading: Vietnam's large fish-oil output (OECD-FAO 190 kt in 2025) is mostly pangasius oil and carries only about 0.4 to 0.6 kt of EPA plus DHA (our calculation, 190 kt x 0.2 to 0.3%). Vietnam is a large fish-oil producer by tonnage but a negligible omega-3 producer.

### E12. Integrated aquatic plants (brief; NGF covers yields)
- Azolla and duckweed have been used for centuries in northern Vietnam as green manure and as fodder for pigs, ducks and fish (Lumpkin 1985 and Lumpkin and Bartholomew 1986, AQF-30); duckweed with broken rice was tested for ducklings in the Mekong Delta (Men, Ogle and Lindberg 2002, AQF-31). HSC found one indexed Vietnamese duckweed-protein paper against 39 for Thailand (HSC-01). No current Vietnamese volume or area data found.

WebSearch calls used so far: 10 of 12.
