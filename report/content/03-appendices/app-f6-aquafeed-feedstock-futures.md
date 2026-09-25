---
id: app-f6-aquafeed-feedstock-futures
title: "F6. Aquafeed, marine ingredients and carbon feedstocks to 2050"
short_title: "F6. Aquafeed and feedstocks 2050"
section: appendix
order: 66
summary: "The evidence behind the aquafeed and carbon-feedstock parts of chapters 21 and 22: fisheries targets, three aquaculture paths to 2050, trash-fish replacement, marine ingredients and omega-3, protein crops and climate, and whether residues, side streams and one-carbon feedstocks could supply the 1.32 Mt of glucose that the stretch scenario needs in 2050. All 2040 and 2050 values are our what-if estimates, not forecasts."
audiences: [manufacturers, investors, policy, startups, research, international]
reading_time_min: 37
key_numbers: [kn-omega3-need-2050, kn-vision-omega3-2050]
related_data: [aquaculture_projections.csv, marine_ingredients_2050.csv, protein_crops_vn.csv, feedstock_futures.csv, land_protein_yields.csv, balance_outputs.csv, climate_impacts_2050.csv]
related_pages: [ch22-protein-balance-2050, ch21-frontier-technology, ch20-drivers-2050, ch24-vision-2050, ch28-robust-moves, app-f3-frontier-tech, app-f4-balance-model, app-s6-feed-market, app-s4-feedstocks, app-f2-drivers-signals, app-r1-open-questions, app-r2-disagreements]
charts: []
---

# F6. Aquafeed, marine ingredients and carbon feedstocks to 2050

**What this appendix contains.** The evidence and calculations behind [[ch22-protein-balance-2050]] (sections 22.5 and 22.6) and [[ch21-frontier-technology]] (section 21.5). Part 1 (F6.1 to F6.8) covers targets, our aquaculture paths to 2050, trash fish, offshore cages, marine ingredients, omega-3, protein crops and climate. Part 2 (F6.9 to F6.14) asks whether residues, side streams and one-carbon feedstocks could supply the glucose that the S-ALT scenario needs, and what released rice land could grow. Technology status and costs of cellulosic sugar and one-carbon routes are in [[app-f3-frontier-tech]]; the balance model is in [[app-f4-balance-model]].

**How to use it.** Feed manufacturers and investors: F6.3, F6.4 and F6.6. Policy makers: F6.1, F6.3, F6.10 and F6.12. Founders choosing a fermentation site: F6.9, F6.11 and F6.13. Signposts are in [[app-f2-drivers-signals]].

> **Method note.** Our aquaculture paths (AQ-LOW, AQ-BASE, AQ-HIGH) and feedstock cases (A, B, C) are what-if cases, not forecasts, and carry no probabilities. All arithmetic is in two rerunnable scripts: `working-papers/wave3/aquaculture_futures/aqf_calc.py` and `working-papers/wave3/next_gen_feedstocks/ngf_calc.py`. Aquafeed tonnages use the USDA-consistent scale (6.5 Mt in 2025), as the balance model does; the industry estimate is 3.9 to 4.8 Mt [@MAC-01; @MAC-06] {VN-direct|Medium}. Multiply our tonnages by about 0.67 for the industry scale ([[app-s6-feed-market]], section S6.3). CP is crude protein; FCR is feed conversion ratio (kg of feed per kg of output); SE is sugar equivalent (tonnes of glucose that would grow the same protein on the sugar route, at 4.0 t of glucose per t of protein).

---

**Part 1. Aquafeed and marine ingredients**

## F6.1 Official targets and published projections

| Source | 2030 | Beyond 2030 | Type and evidence |
|---|---|---|---|
| Decision 339/QD-TTg (2021), fisheries strategy | Aquaculture 7.0 Mt; capture 2.8 Mt | 2045: "top three" producer; no volume | Official target {fx:projection} [@NTS-08; @AQF-28] {VN-direct\|High} |
| Decision 1664/QD-TTg (2021), marine aquaculture | 1.45 Mt on 300,000 ha; offshore 340 kt | 2045: over 25% of fisheries output | Official target {fx:projection} [@AQF-01] {VN-direct\|High} |
| Decision 389/QD-TTg (2024), fisheries resources | At most about 83,600 vessels; trawlers 10% | 2050: qualitative only | Official target {fx:projection} [@AQF-15] {VN-direct\|Medium} |
| Decision 231/QD-TTg (2025), Khanh Hoa pilot | 8,700 t on 440 ha by 2029 | none | Official target {fx:projection} [@AQF-13] {VN-direct\|Medium} |
| OECD-FAO Agricultural Outlook 2026-2035 | Aquaculture 6.12 Mt; implied capture 3.50 Mt | 2035: aquaculture 6.83 Mt | Published model {fx:projection} [@AQF-02] {VN-direct\|Medium} |
| *Fish to 2050 in the ASEAN region* (IMPACT) | ASEAN aquaculture 24.8 Mt | 2050: 27.4 Mt; no Vietnam figure | Published model {fx:projection} [@AQF-25] {VN-adjacent\|Low} |
| FAO SOFIA 2026 | none | 2034: 214 Mt of aquatic animals, world | Published projection {fx:projection} [@AQF-03] {general\|Medium} |

- **No Vietnam-specific projection beyond 2035.** We checked Decisions 339, 1664 and 389 and *Fish to 2050* and found no published volume after 2035 and no national species-level target for 2030 [@AQF-28; @AQF-25] {VN-direct|High}. The only later anchor is the 2045 vision that marine aquaculture should supply "trên 25% tổng sản lượng" (over 25% of total output), read as total fisheries output [@AQF-01] {VN-direct|Medium}.
- **The published model sits below the target and ignores the fleet cut.** OECD-FAO holds capture near 3.5 Mt in 2030, 25% above the 2.8 Mt target (our subtraction of aquaculture from total fish) [@AQF-02; @NTS-08] {VN-direct|Medium} {fx:projection}. Its 2025 base (5.69 Mt) is below the NSO figure of 6.12 Mt [@MAC-15] {VN-direct|High}. We show both and do not average them.
- **Marine aquaculture is behind plan:** about 730 kt in 2021 [@AQF-11] against 850 kt targeted for 2025; we found no 2025 outturn {VN-direct|Medium}.
- **Lobster value is ahead of the volume plan.** Lobster exports to China were USD 845 M in 2025 and over USD 506 M in January to May 2026 (+44.3%) [@AQF-12], against a 2030 output target of 5 kt {VN-direct|Medium} {fx:signal}.
- **Growth after 2030 is the largest open number.** IMPACT implies ASEAN aquaculture growth of about 0.5% a year from 2030 to 2050 (our calculation from [@AQF-25]) {VN-adjacent|Low} {fx:projection}, while Vietnamese aquaculture grew 5.1% in 2025 and 5.7% in the first half of 2026 [@MAC-15; @MAC-17] {VN-direct|High} {fx:trend}.

## F6.2 Our three aquaculture paths

| Path | To 2035 | After 2035 | Marine finfish, 2050 | Relation to the balance model |
|---|---|---|---|---|
| AQ-LOW | OECD-FAO growth | Flat | 180 kt | Its low aquaculture sensitivity |
| AQ-BASE | OECD-FAO growth | +1% a year | 450 kt | The S-BASE index plus faster marine finfish |
| AQ-HIGH | 7.0 Mt target met in 2030 | +2% a year | 1,000 kt | Above S-HIGH (9.0 Mt in 2050; `balance_outputs.csv`, BLO-0473) |

All paths: {VN-direct|Low} {fx:estimate}. Marine finfish is carved out of "other fish" from an assumed 80 kt in 2025.

**Output by species group, kt live weight.** 2025 measured [@MAC-15] {VN-direct|High}; later years our calculation, `aqf_calc.py` {VN-direct|Low} {fx:estimate}.

| Species group | 2025 | AQ-BASE 2030 | AQ-BASE 2040 | AQ-BASE 2050 | AQ-LOW 2050 | AQ-HIGH 2050 |
|---|---|---|---|---|---|---|
| Pangasius | 1,939 | 2,086 | 2,444 | 2,700 | 2,326 | 3,297 |
| Whiteleg shrimp | 994 | 1,070 | 1,254 | 1,385 | 1,193 | 1,691 |
| Black tiger and other crustaceans | 387 | 417 | 488 | 539 | 465 | 659 |
| Other fish | 2,016 | 2,169 | 2,542 | 2,808 | 2,418 | 3,429 |
| Marine finfish | 80 | 150 | 300 | 450 | 180 | 1,000 |
| Unfed (molluscs, seaweed, other) | 700 | 753 | 883 | 975 | 840 | 1,191 |
| **Total** | **6,117** | **6,644** | **7,911** | **8,857** | **7,421** | **11,266** |

**Feed and protein needs** (our calculation, `aqf_calc.py`) {VN-direct|Low} {fx:estimate}

| Path and year | Aquafeed, Mt | Feed CP, Mt (industry scale) | Shrimp plus marine feed, Mt |
|---|---|---|---|
| All paths, 2025 | 6.45 | 2.00 (1.34) | 1.49 |
| AQ-LOW 2030 / 2040 / 2050 | 7.02 / 7.99 / 8.01 | 2.18 / 2.49 / 2.50 (1.68) | 1.63 / 1.88 / 1.91 |
| AQ-BASE 2030 / 2040 / 2050 | 7.06 / 8.64 / 9.72 | 2.20 / 2.73 / 3.10 (2.07) | 1.67 / 2.22 / 2.64 |
| AQ-HIGH 2030 / 2040 / 2050 | 7.57 / 9.89 / 12.53 | 2.36 / 3.16 / 4.08 (2.73) | 1.83 / 2.78 / 3.89 |

**Coefficients** (our assumptions). FCR on pellets 1.5 for all groups except whiteleg shrimp (1.3), improving 0.3% a year. Dietary CP: pangasius 27%, shrimp 40%, other fish 30%, marine finfish 45%; the shrimp and marine values sit within the 40 to 43% of standard shrimp feeds [@FM-10] and the 40 to 50% of marine feeds [@VCO-10] {VN-direct|Medium}. Share of output on pellets from 2025 to 2050: pangasius and whiteleg 100%; other shrimp 30 to 50%; other fish 68 to 85%; marine finfish 15% rising to 60% (LOW), 95% (BASE) or 100% (HIGH).

**How AQ-BASE relates to S-BASE.** AQ-BASE gives 8.86 Mt of aquaculture and 9.72 Mt of aquafeed in 2050, against 8.52 Mt and 9.24 Mt in S-BASE (`balance_outputs.csv`, BLO-0223, BLO-0235). The gap is only the faster marine finfish path; aquaculture growth after 2035 moves the 2050 soybean-meal result by about 1 Mt at most ([[app-f4-balance-model]]) {VN-direct|Low} {fx:estimate}. Across our paths, 2050 aquafeed protein spans 1.6 Mt (2.5 to 4.1 Mt of CP): growth after 2030 matters more than formulation.

## F6.3 Trash fish: use, supply cuts and replacement

*Cá tạp* (trash fish: low-value fish, crustaceans and molluscs, mostly trawl by-catch).

| Item | Value | Evidence |
|---|---|---|
| Trash fish landed, 2001 | 0.93 Mt, 36% of marine landings; two thirds from the Gulf of Thailand; up to 80% of trawl catch in former Kien Giang (now An Giang) | [@AQF-05] {VN-direct\|Medium} |
| Fed directly to aquaculture, 2002 | 0.18 to 0.32 Mt (pangasius, shrimp, grouper, lobster); about 185 kt to fish powder and 80 kt to fishmeal | [@AQF-05] {VN-direct\|Medium} |
| Trawlers | 16,400 (2008) to 20,340 (2016) | [@AQF-06] {VN-direct\|Medium} |
| Fishmeal factories, 2017 | 96, with 675 kt of documented capacity; 81 name "sea fish" as main raw material | [@AQF-06] {VN-direct\|Medium} |
| South-central mariculture, 2021 | About 90% of stakeholders fed trash fish as main feed; 9.41% used pellets; lobster FCR 35 to 40 | [@AQF-07] {VN-direct\|Medium} |
| Other users | All southern mud-crab farmers; cobia, grouper and snapper cages | [@AQF-08; @AQF-10] {VN-direct\|Medium} |

Pangasius and whiteleg shrimp have since moved to pellets, and up to 0.3 Mt of snakehead pellets in 2025 suggests most snakehead has too [@MAC-06] {VN-direct|Low}.

**The capture plan.** Decision 389 caps trawlers at about 8,360 by 2030, about 59% fewer than in 2016 (our calculation from [@AQF-15; @AQF-06]) {VN-direct|Medium} {fx:projection}, and capture is to fall from 3.83 Mt (2025) [@MAC-15] to 2.8 Mt (2030) [@NTS-08] {VN-direct|High} {fx:projection}. Trawl catch is the main source of trash fish, so low-value fish for direct feeding and for whole-fish meal should fall sharply by 2030 {VN-direct|Medium} {fx:estimate}. Decision 339 orders "thức ăn công nghiệp thay thế sử dụng cá tạp" (industrial feed to replace trash fish) and Decision 1664 orders feed zones next to sea farms, but neither sets a volume or date [@NTS-08; @AQF-01] {VN-direct|High}.

**Direct trash-fish feeding in 2025** (our calculation, `aqf_calc.py`) {VN-direct|Low}

| Group | Output, kt (low / central / high) | Not on pellets | Wet FCR | Trash fish, kt | Pellets to replace it, kt |
|---|---|---|---|---|---|
| Marine finfish | 60 / 80 / 120 | 80 to 90% | 5 to 8 | 240 / 408 / 864 | 72 / 102 / 162 |
| Lobster | 3 / 4 / 5 | 100% | 20 to 40 | 60 / 112 / 200 | 9 / 12 / 15 |
| Mud crab and other crustaceans | 20 / 40 / 60 | 80 to 100% | 4 to 6 | 64 / 180 / 360 | 32 / 72 / 120 |
| Freshwater carnivores | 10 / 16 / 30 | 100% | 4 to 6 | 40 / 80 / 180 | 15 / 24 / 45 |
| **Total** | | | | **404 / 780 / 1,604** | **128 / 210 / 342** |

The central case is about 20% of 2025 capture (10 to 42%) and carries about 133 kt of protein at 17% CP. Pellets that replace it need only about 88 kt of CP (54 to 144 kt), because they convert about four times better. The 2002 figure is not comparable: the species mix has changed.

**Extra formulated feed over 2025**, from marine finfish growth plus conversion of the other trash-fish species (15, 30 and 50% converted by 2030 in LOW, BASE and HIGH; 40, 70 and 90% by 2040; 60, 90 and 100% by 2050; our calculation, `aqf_calc.py`) {VN-direct|Low} {fx:estimate}

| Path | Extra pellets 2030 / 2040 / 2050, kt | Extra CP 2040 / 2050, kt | Extra fishmeal 2030 / 2040 / 2050, kt | Share of aquafeed 2040 / 2050 |
|---|---|---|---|---|
| AQ-LOW | 40 / 131 / 210 | 56 / 90 | 7 / 18 / 25 | 1.6% / 2.6% |
| AQ-BASE | 106 / 421 / 712 | 181 / 306 | 19 / 59 / 85 | 4.9% / 7.3% |
| AQ-HIGH | 192 / 827 / 1,557 | 356 / 670 | 34 / 116 / 187 | 8.4% / 12.4% |

Fishmeal is at 20% of marine pellets in 2025, falling to 12% by 2050 (the hypothesis in [[app-s6-feed-market]], section S6.6, is 15 to 30%). **Reading:** to 2050 the transition is a small share of aquafeed tonnage but a large share of the premium segment, where a novel protein or oil competes with fishmeal and fish oil, not soybean meal {VN-direct|Low} {fx:estimate}.

> **Open question.** Our 2025 marine pellet base (18 kt) is well below the industry estimate of 80 to 100 kt of marine fish feed [@MAC-06] and the 40 to 50 kt of capacity reported for 2022 [@AQF-09] {VN-direct|Low}. If the industry figure is right, the extra pellets above fall by about 60 to 80 kt; the 2050 volumes do not change (our calculation).

## F6.4 Marine finfish and offshore cages

**Decision 1664 targets for fed species** [@AQF-01] {VN-direct|High} {fx:projection} (official target): marine finfish 120 kt in 2025 and 200 kt in 2030 (of which offshore 60 and 120 kt); lobster 3 and 5 kt; other crustaceans 67 and 95 kt; all fed species 190 and 300 kt (our sum). Offshore (*nuôi biển xa bờ*: offshore sea farming) is 340 kt of all species on 30,000 ha by 2030. The offshore provinces are, on the current map, Quang Ninh, Hai Phong, Quang Ngai, Dak Lak (former Phu Yen), Khanh Hoa (including former Ninh Thuan), Lam Dong (former Binh Thuan), Ho Chi Minh City (former Ba Ria-Vung Tau), Ca Mau and An Giang (former Kien Giang).

**The Khanh Hoa pilot.** Decision 231/QD-TTg (January 2025) allows 240 ha at 0 to 3 nautical miles (3,600 t) and 200 ha at 3 to 6 nautical miles (5,100 t) to 2029 in HDPE cages, phased 30 ha (2025), 100 ha (2026 to 2027) and 110 ha (2028 to 2029) [@AQF-13] {VN-direct|Medium} {fx:projection}. The phases add up to 240 ha; we could not see how the outer 200 ha is phased. Pilot HDPE farms reported profits of 172% (cobia), 112% (lobster) and 131.4% (grouper) of same-size wooden-cage farms (provincial claim) [@AQF-13] {VN-direct|Low}. Storm No. 12 (2017) destroyed wooden cages there [@AQF-14], and HDPE cages hold up to 300 t of cobia each [@AQF-10] {VN-direct|Medium}.

**Feed capacity.** Marine-fish feed capacity was 40,000 to 50,000 t a year in 2022, over 80% foreign-owned [@AQF-09] {VN-direct|Medium}. De Heus opened a marine and cold-water fish feed mill in Vinh Long in July 2026, 168,000 t a year by the company's figure [@VCO-10] {VN-direct|Medium} {fx:signal}. We found no national count or target for recirculating (RAS) farms.

**Where protein and omega-3 concentrate** (marine finfish pellets; our calculation, `aqf_calc.py`) {VN-direct|Low} {fx:estimate}

| Path and year | Pellets, kt (share of aquafeed) | CP, kt (share of aquafeed CP) | Fishmeal, kt | EPA plus DHA, kt (share of need) |
|---|---|---|---|---|
| 2025 | 18 (0.3%) | 8 (0.4%) | 4 | 0.2 (2%) |
| AQ-BASE 2030 | 89 (1.3%) | 40 (1.8%) | 16 | 0.9 (7%) |
| AQ-BASE 2040 | 344 (4.0%) | 155 (5.7%) | 48 | 3.4 (19%) |
| AQ-BASE 2050 | 595 (6.1%) | 268 (8.7%) | 71 | 5.9 (28%) |
| AQ-HIGH 2050 | 1,391 (11.1%) | 626 (15.3%) | 167 | 13.9 (42%) |

**Offshore growth is pellet growth,** because offshore cages cannot use trash fish at scale. The 120 kt offshore target for 2030 alone would need about 177 kt of pellets (120 kt x 1.5 x 0.985), twice AQ-BASE's 2030 estimate (our calculation) {VN-direct|Low} {fx:estimate}.

## F6.5 World marine ingredients to 2035 and 2050

| Indicator | 2024 | 2025 | 2030 | 2035 | 2050 (our extension) | Evidence |
|---|---|---|---|---|---|---|
| World fishmeal, Mt | 5.67 | 5.36 | 5.98 | 6.27 | 6.0 to 7.6 | [@AQF-02] {general\|Medium} {fx:projection}; 2050 {general\|Low} {fx:estimate} |
| World fish oil, Mt | 1.40 | 1.35 | 1.44 | 1.49 | 1.4 to 1.7 | As above |
| By-product share of fishmeal | 34% | | | | 42 to 54% | [@AQF-04] {general\|Medium}; 2050 {fx:estimate} |
| By-product share of fish oil | 54% | | | | Rising | [@AQF-04] {general\|Medium} |

- OECD-FAO builds El Niño years into 2027 and 2031, with Peru's fishmeal at 0.72 and 0.53 Mt against about 1.1 Mt in normal years [@AQF-02] {general|Medium} {fx:projection}.
- **2026 runs below the model.** Peru's first 2026 season landed about 25% of a 1.9 Mt quota, and world fishmeal output fell 26% year on year in January to April 2026 [@HSC-29; @HSC-30] {general|Medium}. NOAA gives a greater than 90% chance of a very strong El Niño in winter 2026 to 2027 [@HSC-28] {general|High} {fx:signal}.
- **Our 2050 extension:** whole-fish meal flat or down at 3.2 to 3.8 Mt, plus by-product meal of 2.8 to 3.8 Mt, up from about 1.9 Mt in 2024 (`aqf_calc.py`) {general|Low} {fx:estimate}. Later this century, extreme El Niño events about double in frequency under high emissions in older models [@CLM-27], a finding contested for the newest ones; the IPCC finds ENSO rainfall variability very likely amplified in 2050 to 2100 [@CLM-28] {general|Low} {fx:projection}. Almost 12 Mt of processing by-products are still not collected, most of the potential in Asia [@AQF-04] {general|Medium}.

**Vietnam's own supply**

| Item | 2025 | 2030 | 2035 | 2050 | Evidence |
|---|---|---|---|---|---|
| Fishmeal production, kt | 325 | 389 | 420 | Pangasius-derived alone 270 / 314 / 383 (LOW / BASE / HIGH) | [@AQF-02] {VN-direct\|Medium} {fx:projection}; 2050 {VN-direct\|Low} {fx:estimate} |
| Fishmeal feed use, kt | 221 | 309 | 339 | 151 to 393 | As above |
| Fishmeal exports / imports, kt | 260 / 156 | 248 / 168 | 249 / 168 | Net exporter by volume | [@AQF-02] {VN-direct\|Medium} {fx:projection} |
| Fish oil production, kt | 190 | 205 | 219 | Pangasius oil 258 / 300 / 366 | As fishmeal production |
| EPA plus DHA in that oil, kt | 0.4 to 0.6 | | | 0.5 to 1.1 | [@AQF-29] and our calculation {VN-direct\|Low} {fx:estimate} |

- **Pangasius off-cuts are the base.** Pangasius supplied 12% of the world's by-product fishmeal and 29% of its by-product fish oil in 2024 [@AQF-04] {VN-direct|Medium}: about 225 kt of meal (5.52 Mt x 34% x 12%) and 215 kt of oil (1.375 Mt x 54% x 29%), or 0.116 t of meal and 0.111 t of oil per t of fish (our calculation). By-products are 62 to 67% of the whole fish [@MAC-45] {VN-direct|Medium}.
- The 2050 fishmeal-demand range runs from 151 kt (S-EFF, S-ALT) and 253 kt (S-BASE) to 393 kt if the OECD-FAO 2035 value grows 1% a year (our calculation) {VN-direct|Low} {fx:estimate}.
- **Reading.** Vietnam can plausibly stay self-sufficient in fishmeal *volume* to 2050 through by-products, but stays short of high-grade (65% CP) meal for shrimp and marine feeds, which it imports today ([[app-s6-feed-market]], section S6.5) {VN-direct|Low} {fx:estimate}.

## F6.6 Omega-3: needs, supply gap and alternatives

**EPA plus DHA need in aquafeed, kt a year** (central values; our calculation, `aqf_calc.py`) {VN-direct|Low} {fx:estimate}

| Species group (need, % of diet) | 2025 | AQ-BASE 2030 | AQ-BASE 2040 | AQ-BASE 2050 | AQ-HIGH 2050 |
|---|---|---|---|---|---|
| Pangasius (0.05) | 1.5 | 1.5 | 1.8 | 1.9 | 2.3 |
| Whiteleg shrimp (0.5) | 6.5 | 6.8 | 7.8 | 8.3 | 10.2 |
| Other shrimp and crustaceans (0.5) | 0.9 | 1.1 | 1.6 | 1.9 | 2.3 |
| Other fish (0.1) | 2.1 | 2.3 | 2.9 | 3.3 | 4.1 |
| Marine finfish (1.0) | 0.2 | 0.9 | 3.4 | 5.9 | 13.9 |
| **Total (range)** | **11.0 (4.5 to 22.0)** | **12.7 (5.4 to 24.9)** | **17.5 (8.0 to 33.2)** | **21.4 (10.3 to 39.8)** | **32.8 (17.2 to 58.5)** |

The ranges use 0.3 to 1.0% for shrimp, 0.7 to 1.5% for marine finfish [@AQF-18] and 0 to 0.2% for freshwater fish. AQ-LOW gives 14.8 kt in 2050. The AQ-BASE 2050 need equals about 85 kt of marine fish oil at 25% EPA plus DHA (41 to 159 kt), part of it supplied by residual oil in fishmeal.

{{kn:kn-omega3-need-2050}}

**Vietnam's fish oil is not an omega-3 source.** Oil from pangasius processing waste holds 0.07 to 0.15% EPA and 0.10 to 0.16% DHA in its fatty acids, in a study of Indonesian farmed pangasius [@AQF-29] {VN-adjacent|Medium}. Vietnam's 190 kt of fish oil therefore holds only about 0.4 to 0.6 kt of EPA plus DHA (our calculation), against a need of about 11 kt {VN-direct|Low}.

**The global gap.** World EPA plus DHA supply is "optimistically estimated at just over 0.8 million tonnes", with a shortfall of more than 0.4 Mt, or over 1 Mt in pessimistic calculations; almost 90% comes from capture fisheries [@AQF-16] {general|Medium}.

**Alternatives on the market**

| Product | Status | Evidence |
|---|---|---|
| Algal oil (*Schizochytrium*), Veramaris | USD 200 M plant (2019) on US corn syrup; capacity claimed equal to 1.2 Mt of wild fish and about 15% of salmon farming's EPA plus DHA need; about twice fish oil's content; used in salmon, shrimp and marine-fish feeds | [@AQF-23; @AQF-24; @AQF-16] {general\|Low} (company claims) |
| Algal omega-3, Corbion | Reported in about 30% of salmon diets (basis unclear) | [@AQF-24] {general\|Low} |
| Omega-3 canola oil (transgenic) | Replaced 100% of fish oil in low-fishmeal whiteleg shrimp diets without growth loss | [@AQF-19] {general\|Medium} |
| Vietnamese rules | 6 GE canola events approved for food and feed; the aquafeed permitted list has no microalgae | [@AQF-21; @REG2-01] {VN-direct\|High} |

**Credible 2050 shares for alternative ingredients** (AQ-BASE; our calculation, `aqf_calc.py`) {VN-direct|Low} {fx:estimate}

| Item | Low end | High end |
|---|---|---|
| Fishmeal replaced (of 253 kt, at 65% CP) | 10%: 16 kt of protein | 40% (as in S-ALT; trials support 25 to 60%): 66 kt |
| Functional inclusion in shrimp and marine feeds (2,640 kt, at 70% CP) | 1%: 18 kt | 3%: 55 kt |
| Soybean-meal protein in all aquafeed (1,252 kt) | None | 5%: 63 kt |
| **Novel protein, total** | **35 kt (1.1% of aquafeed CP; 1.7% on the industry scale)** | **184 kt (5.9%; 8.9%)** |
| **Non-marine EPA plus DHA** (share of 21.4 kt) | **15%: 3.2 kt, about 6 kt of algal oil** | **50%: 10.7 kt, about 21 kt of algal oil** |

- **Why omega-3 can go further than protein:** Vietnam has no domestic EPA plus DHA; the global gap is structural; the products are commercial and trialled in shrimp; and value per tonne of feed is high {VN-direct|Low}. On protein, the soybean-meal slice is priced out at 2026 costs (4.6 to 5.1 times soybean-meal protein, [[app-s6-feed-market]], section S6.11), and Chinese single-cell protein competes for the fishmeal slice.
- **Binding conditions** to 2050: the fish-oil price in El Niño years, listing of algal and transgenic oils as aquafeed raw materials, and import cost {VN-direct|Low} {fx:estimate}. A Vietnamese algal-oil plant would need sugar or glycerol, which links omega-3 to Part 2.
- Chapter 24 adopts the 15 to 50% range as a normative goal ([[ch24-vision-2050]]).

{{kn:kn-vision-omega3-2050}}

## F6.7 Protein crops and biotech rules

**Soybean in Vietnam**

| Year | Area, kha | Yield, t per ha | Bean imports, Mt | Evidence |
|---|---|---|---|---|
| 2010 | About 205 (peak) | | | [@AQF-20] {VN-direct\|Medium} |
| 2021 | 36.8 | | | [@AQF-20] {VN-direct\|Medium} |
| 2024 to 2025 | Under 20 (press) or 39.0 (OECD-FAO) | 1.62 (press) or 1.28 (OECD-FAO) | 2.50 to 2.60 | [@AQF-20; @AQF-02] {VN-direct\|Medium} |
| 2030 | 39.3 | 1.19 | 2.91 | [@AQF-02] {VN-direct\|Medium} {fx:projection} |
| 2035 | 38.9 | 1.15 | 3.11 | [@AQF-02] {VN-direct\|Medium} {fx:projection} |

- We use 20 to 39 kha for current area and OECD-FAO for projections; the yield series disagree and we leave that unresolved {VN-direct|Medium}. Domestic beans cost VND 25,000 to 30,000 per kg against VND 13,000 to 15,000 for imports, and profit is about VND 20 million per ha [@AQF-20] {VN-direct|Medium}. Domestic beans go to food, whose use alone was 540 kt in 2025 [@MAC-04] {VN-direct|Medium}.
- The crop strategy (Decision 1748) sets no soybean, maize or cassava target [@NTS-22] {VN-direct|Medium}. A press proposal for winter soybean on 300 kha of Red River Delta rice land is not an adopted plan [@AQF-20] {VN-direct|Low}.

**What-if: domestic soybean in 2050.** Bean-equivalent need is soybean-meal need divided by 0.78: 13.3 Mt in S-BASE and 9.0 Mt in S-EFF (our calculation) {VN-direct|Low} {fx:estimate}.

| Area and yield | Beans, kt | Share of S-BASE need | Share of S-EFF need |
|---|---|---|---|
| 39 kha x 1.28 t per ha (today) | 50 | 0.4% | 0.6% |
| 100 kha x 2.0 t per ha | 200 | 1.5% | 2.2% |
| 300 kha x 2.5 t per ha | 750 | 5.6% | 8.4% |

Domestic beans would first displace food-soy imports, so their contribution to *feed* protein by 2050 is close to zero unless better varieties close the yield gap and a feed-grade price is supported {VN-direct|Low} {fx:estimate}.

**Biotech rules**

| Item | Status | Evidence |
|---|---|---|
| GE events for food and feed | 60 in total. By crop: maize 16, soybean 15, cotton 10 and alfalfa 4 (feed only), canola 6, sugar beet 1; these sum to 52, and we could not place the other 8 | [@AQF-21] {VN-direct\|High} |
| GE maize for cultivation | 31 hybrids; about half of feed-maize area in 2023 to 2024 | [@AQF-21] {VN-direct\|Medium} |
| GE soybean | No field-test application ever submitted; gene-edited high-protein lines in greenhouse biosafety evaluation | [@AQF-21] {VN-direct\|Medium} |
| Decree 43/2026/ND-CP | Gene-edited organisms without foreign DNA leave GMO rules (notification at MAE); approval cut from 90 to 45 working days for events cleared in five OECD or G20 countries; refined products are not "GM food"; first rules for GM microorganisms in contained production | [@AQF-22] {VN-direct\|Medium} (secondary summary) |

**Reading.** Gene editing is the only long-run route by which domestic soybean could matter for feed; the first signals to watch between 2026 and 2035 are a notification under Decree 43/2026 or a field-test application {VN-direct|Medium} {fx:signal}. Duckweed and azolla have been fed in northern Vietnam for centuries [@AQF-30; @AQF-31], but we found no current area or volume data {VN-direct|Medium}.

## F6.8 Climate and aquaculture geography

| Driver | Evidence | Effect on aquafeed by 2050 | Source |
|---|---|---|---|
| Mekong salinity | Salinity-affected area up 10 to 27% by about 2050 from subsidence and riverbed incision, plus 6 to 19% from sea-level rise (`climate_impacts_2050.csv`, CI-11, CI-12) | Coastal land moves from rice to shrimp: more protein-dense, fishmeal-using feed | [@CLM-15; @CLM-21; @CLM-40] {VN-direct\|Medium} {fx:projection} |
| Pangasius sites | All 2009 farm sites face 2 m floods at +50 cm of sea-level rise (after 2050 in most scenarios); at +75 cm salinity shortens grow-out in Can Tho (former Soc Trang), Vinh Long (former Ben Tre) and Dong Thap (former Tien Giang) | Pangasius feed demand may move rather than shrink | [@CLM-20] {VN-direct\|Medium} {fx:projection} |
| Pangasius range | "Likely to expand northward", with the Red River Delta playing a larger role | Pangasius feed mills in the north | [@AQF-26] {VN-direct\|Low} {fx:signal} |
| Northern warming | 1.2 to 1.3 °C by 2050 slows tilapia growth | Poorer feed conversion for northern tilapia | [@AQF-26] {VN-direct\|Low} {fx:projection} |
| Typhoons and floods | Wooden cages lost in 2017; 1.1 Mt of farmed output at risk of flood loss each year | Shift to HDPE and pellets; supply shocks | [@AQF-14; @CLM-08] {VN-direct\|Medium} |
| El Niño | Hits fishmeal and fish oil together | Price spikes in marine ingredients | [@CLM-27; @CLM-28] {general\|Medium} {fx:projection} |

About 80% of Vietnamese shrimp is farmed in the Mekong Delta [@AQF-26] {VN-direct|Low}. **We found no dated SSP-based projection of Vietnamese shrimp or pangasius output**, and no quantified link between heat and disease. On current evidence, climate to 2050 changes where aquafeed is used more than how much {VN-direct|Medium} {fx:estimate}.

---

**Part 2. Carbon feedstocks**

## F6.9 The S-ALT glucose need and competing uses

The sugar route in S-ALT needs 238 kt of glucose in 2030, 852 kt in 2040 and 1,318 kt in 2050 (`balance_outputs.csv`, BLO-0888, BLO-1048, BLO-1128) {VN-direct|Low} {fx:estimate}. S-ALT is a stretch above every real-world analogue ([[ch22-protein-balance-2050]]), so this is an upper test, not an expected demand.

| Year | Glucose, kt | As fresh cassava roots, kt | Cassava land, kha | Or as sucrose, kt | Urea, kt |
|---|---|---|---|---|---|
| 2030 | 238 | 968 | 47 | 226 | 22 |
| 2040 | 852 | 3,473 | 169 | 810 | 79 |
| 2050 | 1,318 | 5,368 | 262 | 1,252 | 122 |

Source: balance model, `tools/balance_model.py` {VN-direct|Low} {fx:estimate}.

| Competing use (2025 or 2026) | Value | Share taken by the 2050 need | Evidence |
|---|---|---|---|
| Domestic cassava harvest | 10.24 Mt of fresh roots (2025) | About 52% | [@FS-01] {VN-direct\|High} |
| Roots bought by factories | Over 18 Mt a year, about 42% imported | About 30% | [@FS-14] {VN-direct\|Medium} |
| Cassava starch exports | About 2.49 Mt (2025), over 90% to China | 1.22 Mt of starch: about half | [@FS-01] {VN-direct\|High} |
| Fuel ethanol (E10) | Mandatory from 1 June 2026; three plants make 830 m3 a day; about 80% of E10 ethanol still imported in mid-2026 | Competes for chips and roots | [@GT-10; @FS-09; @IND-20] {VN-direct\|High} |
| Sugar | 1.298 Mt (2025/26) | About 96% | [@FS-31] {VN-direct\|Medium} |

Cassava-starch glucose costs about USD 511 to 560 per t at April 2026 prices (our estimate from starch at USD 520 to 540 FOB [@FS-11], 1.08 t of glucose per t of starch, plus USD 30 to 60 for hydrolysis) {VN-direct|Low}. The nitrogen need (0.37 t of urea per t of protein) does not change with the carbon source. The question for Part 2 is how much carbon could come from residues, side streams and one-carbon feedstocks without cutting food or starch exports.

## F6.10 Rice straw

*Rơm rạ* (rice straw and stubble).

| Stream | 2025 | 2030 | 2040 | 2050 | Basis and evidence |
|---|---|---|---|---|---|
| National straw, Mt air-dry | 51.8 | 47.6 to 51.2 | 44.0 to 50.0 | 41.6 to 48.8 | Paddy 43.5 Mt [@FS-25] x 1.19 [@NGF-01]; later paddy is our path from the rice-land cut [@NTS-15] and the 35 Mt floor [@NTS-04]. {VN-direct\|Medium} (2025); {VN-direct\|Low} {fx:estimate} (later) |
| Mekong Delta | Over 24 Mt; about 30% collected, 70% burned or buried | | | | [@NGF-04] {VN-direct\|Medium} |
| 1 million ha low-emission rice programme | About 14 Mt (two crops) | 100% to be collected | | | [@NGF-04; @NTS-32] {VN-direct\|Medium} {fx:projection} (official target) |

- Straw yield is about 4.72 t per ha, at 12.4% moisture when baled [@NGF-02] {VN-direct|Medium}; straw is about 38% cellulose, 25% hemicellulose and 12% lignin, with high ash [@NGF-05] {general|Medium}.
- About half the national straw is surplus to current uses, 55% of it in the Mekong Delta; former Kien Giang alone could run 245 MW of straw power (2019 basis) [@NGF-01] {VN-direct|Medium}.
- The national figure is robust to about 20%: straw-to-grain ratios run 0.7 to 1.4 in Thailand [@NGF-15], and Mekong data imply 1.14 [@NGF-03] {VN-direct|Medium}.

**Straw needed for the S-ALT sugar route** at 0.31 to 0.44 t SE per t of air-dry straw (the low end for organisms that cannot use xylose; our calculation, `ngf_calc.py`) {VN-direct|Low} {fx:estimate}

| Year | Straw, Mt | Share of national straw | Share of the programme's 14 Mt | Plants of Panipat's size (0.2 Mt a year) |
|---|---|---|---|---|
| 2040 | 1.9 to 2.8 | 3.9 to 6.3% | 14 to 20% | 10 to 14 |
| 2050 | 3.0 to 4.3 | 6.1 to 10.3% | 21 to 31% | 15 to 21 |

All national straw could in theory give 12.8 to 21.5 Mt SE in 2050, 10 to 16 times the need. Tonnage is not the constraint.

**Competing uses**

| Use | Evidence | Pressure to 2050 |
|---|---|---|
| Mushrooms | USD 50 to 100 net per t of straw [@NGF-05]; dry-season straw mostly collected for mushrooms, fodder and mulch [@NGF-02] {VN-direct\|Medium} | Sets a floor of about USD 25 to 50 per t delivered (our assumption) |
| Soil return | Incorporation raises paddy emissions 1.5 to 2 times against removal [@NGF-05] {general\|Medium} | The low-emission programme favours removal |
| Biomass power | 4.8 to 7.0 GW of biomass planned for 2050 [@NTS-26] {VN-direct\|High} {fx:projection}; at 8.2 Mt of straw per GW a year this would take 39 to 58 Mt if all straw-fired (our calculation) | The largest competitor if tariffs favour straw {fx:estimate} |
| Second-generation ethanol | E15 and E20 discussed, residues named as a future feedstock, enzyme costs high [@NGF-31]; 10.9 billion litres of potential (2017 study) [@NGF-32] {VN-direct\|Medium} | Competes for straw and plants {fx:signal} |
| Burning or burying | About 70% of Mekong straw [@NGF-04] {VN-direct\|Medium} | Shrinking by policy: the "free" tranche |

**Costs.** Mechanised collection costs USD 12 to 18 per t [@NGF-02] {VN-direct|Medium}; at USD 25 to 50 per t delivered, straw adds USD 57 to 162 per t SE for the feedstock alone (our calculation) {VN-direct|Low}. **Technology in brief:** mature-plant models give USD 342 to 467 per t of cellulosic sugar, but first-of-a-kind plants cost USD 2,100 to 2,400 per t of annual capacity, and India's rice-straw plant at Panipat reached 62% of design only in December 2025, after its first problem, buying straw from farmers who preferred to burn it [@NGF-06; @NGF-07; @NGF-10; @NGF-11; @NGF-33] {general|Medium}. Details: [[app-f3-frontier-tech]].

## F6.11 Cassava pulp, liquid side streams, food waste and manure biogas

Technical sugar-equivalent potential if the whole stream were used in 2050 (our calculation, `ngf_calc.py`) {VN-direct|Low} {fx:estimate}:

| Stream | Volume, 2025 | SE per t | Technical SE, 2050, Mt | Constraint | Evidence |
|---|---|---|---|---|---|
| Cassava pulp (*bã sắn*), starch fraction | 0.48 to 0.98 Mt of starch | 0.97 | 0.47 to 0.96 | Already sold as feed; swings with Chinese starch demand | [@FS-03; @FS-05; @FS-06] {VN-adjacent\|Low} |
| Cassava stems not replanted | 0.86 to 1.29 Mt dry matter | 0.15 to 0.29 | 0.12 to 0.37 | Dispersed upland collection | [@NGF-25; @NGF-26; @NGF-27] {general\|Low} |
| Molasses | 0.55 to 0.72 Mt | 0.50 | 0.29 to 0.38 | Already used for MSG, yeast, alcohol | [@FS-37; @IND-22] {VN-direct\|Low} |
| Starch wastewater | 22 to 32 million m3; 0.23 to 0.65 Mt of COD | 0.66 per t of COD | 0.15 to 0.43 | Dilute; best as process water or biogas | [@NGF-24; @NGF-29; @FS-04] {VN-adjacent\|Low} |
| Ethanol stillage | 0.23 Mt of ethanol (0.60 Mt in 2050, our path) | 0.10 to 0.15 per t of ethanol | 0.06 to 0.09 | Needs co-location | [@FS-09; @NGF-31] {VN-direct\|Low} |
| Tofu, soy-milk and brewery wastewater | 0.07 to 0.13 Mt SE | | 0.07 to 0.13 | Only large plants practical | [@FS-24; @FS-38; @FS-44] {general\|Low} |
| Household food waste | 7.7 Mt wet (76 kg per person) | 0.08 to 0.15 | 0.67 to 1.25 | Needs source separation; rules (F6.12) | [@NGF-28] {VN-direct\|Low} |
| Pig-manure methane, capturable | 0.13 Mt (0.29 Mt in 2050) | 2.35 | 0.69 | Competes with farm energy | [@MAC-12; @FTG-25] {general\|Low} |

Bagasse (0.71 to 1.01 Mt SE), maize stover (1.40 to 2.00) and coffee pulp (0.07 to 0.14) are lignocellulosic and mostly committed to boilers, fodder or fertiliser (`feedstock_futures.csv`, FFU-003, FFU-006, FFU-007).

- **Cassava pulp is the only near-term second-generation carbon of scale.** Its starch needs only ordinary amylases, and 2024 volumes were about 60% of 2025's. Diverting pulp removes a feed carbohydrate, so the net gain is the protein made ([[app-s4-feedstocks]], C3) {VN-adjacent|Low}.
- **Liquid side streams are small but free and at a factory gate.** Enifer's revival of the PEKILO mycoprotein process is the model to watch: a 3,000 t a year plant under construction in Finland and a 500 t pilot on corn-ethanol thin stillage in Brazil, both reported in 2025 [@NGF-17] {general|Medium} {fx:signal} (company claims).
- **Pig-manure methane** (our estimate): 31.4 M pigs [@MAC-12] x 0.3 kg of volatile solids per head a day x 0.29 m3 of methane per kg x 60% gives about 0.43 Mt a year, of which the large-farm share (30% in 2025, 65% by 2050, our assumption) is capturable {VN-direct|Low} {fx:estimate}. We found no national biogas figure.
- **One-carbon feedstocks in brief.** Methanol-fed yeast protein is at pilot scale in China, at about 4.6 t of methanol per t of protein [@NGF-13] {VN-adjacent|Medium} {fx:signal}. The whole 2050 S-ALT need via e-methanol would take about 1.5 Mt of methanol, 0.29 Mt of green hydrogen (1.5 to 2.9% of the 2050 hydrogen target [@FTG-16]), 2.1 Mt of CO2 and about 16 TWh (our calculation) {VN-direct|Low} {fx:estimate}. The limit is cost, not volume ([[app-f3-frontier-tech]]).

## F6.12 Rules as a ceiling

- **EU feed law is precise.** Regulation 767/2009, Annex III, bans from feed "All waste obtained from the various phases of the treatment of the urban, domestic and industrial waste water", "irrespective of any further processing of that waste", plus household waste and faeces. A footnote exempts process water in independent conduits that carries feed or food material and is free of cleaning agents [@NGF-14] {general|High}.
- **Vietnamese rules are permissive but vague.** We found no legal ban on food waste or wastewater-derived substrates for feed; the veterinary authority only advises cooking kitchen waste at 100 °C for 20 to 30 minutes before feeding pigs [@NGF-30] {VN-direct|Low}. The feed listing of microbial biomass is the real gate ([[ch07-rules]]).

**How each stream fares under EU-style rules** (our reading of the Annex) {general|Medium}

| Stream | Position | Perception risk for export chains |
|---|---|---|
| Cassava pulp, molasses, stillage, straw and bagasse hydrolysates | By-products; not in the banned categories | Low |
| Starch, tofu and brewery process water, before treatment | Defensible under the process-water exemption | Low to medium |
| Effluent from a treatment lagoon or plant | Banned, whatever the later processing | High |
| Household food waste | Banned | High |
| Pig-manure biogas | Not addressed directly: the gas is not faeces, but it comes from them | High |
| e-methanol from CO2 and hydrogen | Not waste-derived | Low |

Exporters that follow EU-style rules would reject protein grown on wastewater-treatment streams, food waste or manure-derived gas, whatever Vietnamese law allows, so from 2026 onwards this is a ceiling on such carbon, and Cases A and B send only small shares of these streams to protein {VN-direct|Medium} {fx:signal}. A Vietnamese rule that follows the EU line between process water and treatment waste would lift the uncertainty ([[ch28-robust-moves]], RM-06).

## F6.13 Cases A, B and C for 2040 and 2050

**Case rules:** share of each stream sent to fermentation in 2050, with 2040 in brackets where different (our assumptions, `ngf_calc.py`). No case cuts food or starch exports; released land is excluded. All {VN-direct|Low} {fx:estimate}.

| Stream | A. No 2G breakthrough | B. 2G works at modest scale | C. 2G and one-carbon at scale |
|---|---|---|---|
| Rice straw, Mt a year | 0 | 1.0 (0.3) | 5.0 (2.0) |
| Cassava pulp starch | 10% | 25% | 50% |
| Ethanol stillage | 20% | 50% | 80% |
| Starch wastewater; food-industry wastewater | 5%; 5% | 10%; 20% | 30%; 40% |
| Bagasse; maize stover | 0 | 3% (2%); 3% (2%) | 15% (10%); 10% (5%) |
| Cassava stems; coffee pulp; molasses | 0 | 10%; 5%; 5% | 25%; 20%; 10% |
| Household food waste; pig-manure methane | 0 | 2%; 5% (2%) | 10%; 20% (10%) |
| e-methanol, Mt SE | 0 | 0.10 (0.01) | 0.50 (0.10) |

**Results: Mt SE a year and share of the S-ALT sugar-route need** (our calculation, `ngf_calc.py`) {VN-direct|Low} {fx:estimate}

| Year (need, Mt) | Case A | Case B | Case C | Lignocellulosic (B; C) | One-carbon (B; C) |
|---|---|---|---|---|---|
| 2030 (0.24) | 0.03 to 0.06 (13 to 27%) | 0.08 to 0.16 (35 to 69%) | 0.20 to 0.38 (85 to 161%) | 0.01; 0.04 to 0.05 | 0; 0 |
| 2040 (0.85) | 0.07 to 0.14 (8 to 16%) | 0.37 to 0.65 (44 to 76%) | 1.40 to 2.24 (165 to 263%) | 0.13 to 0.19; 0.76 to 1.08 | 0.02; 0.16 |
| 2050 (1.32) | 0.07 to 0.14 (5 to 11%) | 0.73 to 1.11 (55 to 84%) | 2.92 to 4.20 (222 to 319%) | 0.37 to 0.53; 1.79 to 2.55 | 0.13; 0.64 |
| Protein this could grow in 2050, kt | 18 to 35 | 183 to 278 | 730 to 1,050 | | |

**Case B in 2050, step by step (Mt SE):** straw 1.0 Mt x 0.31 to 0.44 = 0.31 to 0.44; pulp starch 0.48 to 0.98 x 25% x 0.97 = 0.12 to 0.24; e-methanol 0.10; stover 0.04 to 0.06; stillage 0.03 to 0.05; manure methane 0.03; bagasse 0.02 to 0.03; starch wastewater 0.02 to 0.04; the other five streams 0.06 to 0.11. Total 0.73 to 1.11.

**Plants and investment** at first-of-a-kind costs of USD 2,100 to 3,400 per t of annual sugar capacity, from Panipat and Podari (our calculation) {VN-direct|Low} {fx:estimate}

| Item | Case A | Case B, 2040 / 2050 | Case C, 2040 / 2050 |
|---|---|---|---|
| Plants of Panipat's straw size | 0 | About 1.5 / 5 | 10 / 25 |
| Straw sugar, Mt SE | 0 | 0.09 to 0.13 / 0.31 to 0.44 | 0.62 to 0.88 / 1.54 to 2.20 |
| Capital for straw-sugar plants, USD billion | 0 | 0.2 to 0.45 / 0.6 to 1.5 | 1.3 to 3.0 / 3.2 to 7.5 |

Meeting the whole S-ALT need from straw sugar would take USD 1.8 to 2.9 billion by 2040, and USD 2.8 to 4.5 billion and 15 to 21 Panipat-size plants by 2050. We did not cost side-stream plants or an e-methanol industry.

- **Case A is today's reality extended:** about a tenth of the 2050 need, almost all from cassava pulp. The carbohydrate ceiling stands.
- **Case B turns the ceiling into a capital question:** five Panipat-size plants (or two of 500 kt of straw) running reliably by 2050, plus side-stream plants at starch factories and ethanol plants. The trigger is an Asian straw plant running reliably above 80% of design ([[ch28-robust-moves]], RM-19).
- **Case C removes the ceiling** but needs about 10% of national straw and an e-methanol industry: an ambitious bet, not a plan.
- **No case changes the nitrogen need or makes the carbon low-carbon by default.** One Indian bagasse-sugar study gives 1.57 kg CO2e per kg of sugar, above Thai cassava starch at 0.60 to 0.97 kg [@NGF-08; @ECF-25] {general|Low}.
- **Vietnam has no 2G pilot** for straw, bagasse or coffee husk [@NGF-31; @NGF-32] {VN-direct|Medium}. China listed 35 "non-grain bio-based" cases in January 2026, yet BBCA's non-grain lactic acid is 1,000 t within 500,000 t of capacity [@NGF-35] {VN-adjacent|Medium} {fx:signal}.

## F6.14 Land: released rice land and protein per hectare

The adjusted national land plan (Decision 1177/QD-TTg, June 2026) sets rice land at 3,252.63 kha in 2030 against 3,907.07 kha in 2024, a release of about 654 kha [@NTS-15] {VN-direct|Medium} {fx:projection} (official plan). Against the 2021 plan, agricultural land falls by 1,120.62 kha and non-agricultural land rises by 1,192.43 kha [@NGF-20] {VN-direct|Medium}.

**Where it is going.** In the 2026 winter-spring season rice area fell 37.3 kha. In the south, 12 kha went to other annual crops, 5.6 kha to perennial crops and 1.9 kha to aquaculture (Can Tho alone 14.8 kha); in the north, conversions went mostly to non-farm uses, such as 800 ha for an airport and 938 ha for industrial zones and transport in Bac Ninh [@NGF-18] {VN-direct|Medium} {fx:trend}. Under Decree 112/2024, land that switches crops, or combines rice with aquaculture ponds of up to 20% of the plot, still counts as rice land [@NGF-19] {VN-direct|Medium}; so the 654 kha is mainly land leaving agriculture. No plan names a protein crop [@NTS-15; @NTS-22] {VN-direct|Medium}. If all 654 kha grew cassava for fermentation after 2030 it would give 3.3 Mt of glucose a year, an upper bound on first-generation carbon from soils that suit cassava poorly (our calculation) {VN-direct|Low} {fx:estimate}.

**Protein per hectare** (all 15 rows of `land_protein_yields.csv`; our calculation unless stated)

| System | kg of protein per ha a year | Basis | Evidence |
|---|---|---|---|
| Soybean, Vietnam (1 crop) | 580 | 1.62 t per ha x 36% | [@FS-24] {VN-direct\|Medium} |
| Soybean, import origins | 1,140 | 3.16 t per ha x 36% | [@QNT-01] {general\|Medium} |
| Imported soybean-meal protein | 1,410 | About 0.71 ha per t (balance model, mass allocation) | {general\|Low} |
| Maize grain, Vietnam (1 crop) | 460 | 5.43 t per ha x 8.5% | [@FS-25; @MAC-01] {VN-direct\|Medium} |
| Rice paddy, Mekong (2 crops) | 790 | 6.10 t per crop x 6.5% x 2 | [@FS-25] {VN-direct\|Medium} |
| Cassava roots used directly | 250 | 20.5 t per ha x 1.2% | [@FS-01] {VN-direct\|Medium} |
| Cassava via microbial fermentation | 1,260 | 5.03 t of glucose per ha / 4.0 | [@FS-01; @FS-05] {VN-direct\|Low} |
| Sugarcane via microbial fermentation | 1,410 | 5.38 t of sugar per ha (Gia Lai) | [@FS-34] {VN-direct\|Low} |
| Rice straw via 2G sugar (no extra land) | 730 to 1,040 | 2 crops x 4.72 t x 0.31 to 0.44 / 4.0 | [@NGF-02; @NGF-05] {VN-direct\|Low} |
| Napier grass, typical / intensive | 2,500 / 9,600 | 26 or 71 t of dry matter; ruminants only | [@NGF-21] {general\|Medium} |
| Duckweed on pig-manure water | 7,500 | Extrapolated from a 175-day pilot in Flanders | [@NGF-22] {general\|Low} |
| Duckweed, supply-chapter planning range | 2,500 to 10,500 | 10 to 30 t of dry matter x 25 to 35% | [@SCI-36; @SCI-37] {general\|Medium} |
| Microalgae in closed systems | 22,000 to 44,000 | Potential, not achieved | [@FTG-30] {general\|Low} |
| Power-to-protein on solar land | 13,000 to 22,000 | 450 to 750 m2 of panels per t | [@QNT-09] {general\|Low} |

- **Per hectare, fermentation beats Vietnamese soybean:** cassava and cane via microbes give about twice Vietnam's soybean protein and about the same as imported soybean meal, so cassava-based microbial protein moves land use rather than saving it {VN-direct|Low}.
- **Straw adds protein with no extra land**, but only if cellulosic sugar becomes bankable.
- **On wet released land, the land-efficient options are aquatic and forage systems,** not grain legumes. Duckweed (*bèo*) is already on the livestock feed list ([[ch07-rules]]); we found no tropical field data for its yield {VN-direct|Low}.

## F6.15 Gaps, disagreements and open questions

**Gaps** (these feed [[app-r1-open-questions]])

| Gap | Why it matters | Cheapest way to close it |
|---|---|---|
| Direct trash-fish use by species and province | Sizes the replacement market (0.4 to 1.6 Mt) | RIA3 (Nha Trang) and MAE surveys; the FAO low-value-fish report [@AQF-33] |
| Marine finfish output and marine feed volume, 2025 | 18 kt modelled against 80 to 100 kt reported | MAE annual review; mill volumes |
| Lobster output | USD 845 M of exports against a 3 to 5 kt plan | Customs HS 0306.21 volumes; cage counts |
| Vietnam aquaculture projections beyond 2035 | None published | WorldFish Vietnam team; AsiaFish model runs [@AQF-26] |
| EPA plus DHA requirements of Vietnamese species | Drives the 10 to 40 kt range | Review for whiteleg shrimp, cobia, pompano and grouper |
| Grade mix and price of Vietnamese fishmeal | Whether by-product meal can serve shrimp and marine feeds | Customs HS 2301.20 by grade |
| GE event count (60 against 52 by crop); Decree 43/2026 full text | Read only through secondary summaries | Re-read USDA GAIN VM2025-0045 [@AQF-21]; read the decree |
| Mekong straw prices and shares by use | Sets the delivered straw cost | *Sustainable Rice Straw Management* (open access) [@NGF-05]; provincial agriculture departments |
| Pretreatment of high-silica Mekong straw | Panipat's problems were silica and moisture | Bench study at a Vietnamese university |
| National biogas and starch wastewater COD | Our lines are estimates; COD varies seven-fold | Nguyen and others 2024 [@NGF-37]; a survey of starch factories in Tay Ninh |
| Vietnamese rule on waste-derived feed substrates | Decides the ceiling in F6.12 | One question to MAE's livestock department |
| Heat and disease losses in aquaculture | Climate effect on feed volume | Not quantified by us |

**Disagreements** (for [[app-r2-disagreements]])

| Topic | Source A | Source B | Position taken |
|---|---|---|---|
| Capture in 2030 | 2.8 Mt target [@NTS-08] | 3.50 Mt in OECD-FAO [@AQF-02] | Both shown; OECD-FAO does not model the fleet cut |
| Aquaculture in 2030 | 7.0 Mt target | 6.12 Mt (OECD-FAO); 6.58 Mt (S-BASE) | AQ-HIGH follows the target; AQ-BASE follows S-BASE |
| Soybean area and yield | Under 20 kha; 1.62 t per ha [@AQF-20] | 39 kha; 1.28 t per ha [@AQF-02] | Area 20 to 39 kha; yield unresolved |
| Vietnamese fishmeal output | 325 kt (OECD-FAO, 2025) | About 500 kt a year, 2005 to 2016 (secondary) [@AQF-06] | OECD-FAO used; the 500 kt may include fish powder |
| Marine finfish FCR on trash fish | "2 to 2.5" [@AQF-10] | Grouper 5.9 wet [@AQF-05] | 5 to 8 wet used |
| National rice straw | 54 Mt, ratio 1.19 [@NGF-01] | 97 Mt, ratio 2.2 [@NGF-09] | 1.19 used |
| Cellulosic sugar cost | USD 342 to 467 per t [@NGF-06; @NGF-07] | USD 1,320 per t [@NGF-08] | Both reported |

## Data files

- `aquaculture_projections.csv` (44 rows): 2025 output by species, official targets, published projections, and our paths, aquafeed, trash-fish and extra-pellet estimates.
- `marine_ingredients_2050.csv` (39 rows): world and Vietnamese fishmeal and fish oil to 2035 and 2050, by-product shares, pangasius supply, EPA plus DHA needs and credible alternative shares.
- `protein_crops_vn.csv` (29 rows): soybean and maize data, GE approvals, Decree 43/2026, soybean what-ifs, released rice land, duckweed.
- `feedstock_futures.csv` (17 rows): each residue, side stream and one-carbon route with volumes to 2050, sugar-equivalent yield, cost, TRL, competing uses and rules.
- `land_protein_yields.csv` (15 rows): protein per hectare by crop or system.
- `balance_outputs.csv` (1,150 rows): here, the S-ALT glucose, cassava, sugar and urea rows and S-BASE aquaculture and aquafeed.
- `climate_impacts_2050.csv` (34 rows): here, rows CI-11, CI-12, CI-24, CI-25 and CI-30.
- Scripts and notes: `working-papers/wave3/aquaculture_futures/` and `working-papers/wave3/next_gen_feedstocks/`.

**Related:** [[ch22-protein-balance-2050]], [[ch21-frontier-technology]], [[app-f3-frontier-tech]], [[app-f4-balance-model]], [[app-s6-feed-market]], [[app-s4-feedstocks]], [[ch24-vision-2050]], [[ch28-robust-moves]], [[app-f2-drivers-signals]], [[app-r1-open-questions]], [[app-r2-disagreements]].
