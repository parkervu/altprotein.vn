# FEEDMKT (wave 2): the feed-protein market a Vietnamese alternative protein would enter, the prices it must beat, and the import counterfactual

Agent: FEEDMKT (wave 2). Source prefix: FM. Edition date: 23 September 2026. Exchange rate: 26,000 VND per USD (as in wave 1 costs notes).
Data files: `feed_benchmarks.csv` (31 rows), `inclusion_rates.csv` (12 rows), `replacement_trials.csv` (20 rows).

Method and limits. Wave 2 had no web search. I read the World Bank commodity page and Pink Sheet (September 2026), the World Bank fishmeal series via IndexMundi, WITS trade pages, the Aqua Culture Asia Pacific aquafeed review, two Vietnamese trade-press articles found through the magazine's own site search, the CK Vietnam and Calysseo product pages, and peer-reviewed literature through Scite (mostly abstracts and indexed excerpts; several key reviews such as Tacon and Metian 2015 and Tacon 2020 are closed access and were not read). About 60 tool calls. Cross-references to wave 1 use their IDs (MAC-, COST-, ECO-, RGN-).

Terms: FM = fishmeal. SBM = soybean meal. SPC = soy protein concentrate. SCP = single-cell protein (microbial biomass). CAP = *Clostridium autoethanogenum* protein (bacterial SCP made from steel-mill off-gas). BSF = black soldier fly. CP = crude protein. FCR = feed conversion ratio. "Protein replacement" means a novel ingredient supplies protein in place of fishmeal or SBM. "Functional effect" means a benefit such as better survival, immunity or palatability that is not explained by protein supply.

---

## Headline findings

1. **Fishmeal hit USD 2,500/t in August 2026, its highest level in the 2020 to 2026 series.** The World Bank fishmeal price averaged USD 1,433/t in 2020, 1,815 in 2023, 1,699 in 2024 and 1,706 in 2025. It then rose to USD 1,832 (Q1 2026), 2,045 (Q2 2026), 2,145 (June), 2,103 (July) and 2,500 (August 2026). August 2026 is 43% above August 2025 and 74% above the 2020 average. [general, High] (FM-01, FM-02)
2. **Per tonne of protein, fishmeal now costs about USD 3,850, against about USD 880 for soybean meal.** At 65% CP, fishmeal was USD 2,625 per tonne of protein in 2025 and USD 3,846 in August 2026. Soybean meal (46% CP) was USD 403/t in August 2026, or USD 876 per tonne of protein. Fishmeal protein is 3 to 4.4 times dearer than soy protein. [general, High for prices; protein basis is my calculation] (FM-01)
3. **Vietnam is a net exporter of fishmeal, mostly to China.** In 2023 Vietnam exported USD 430 M of fish meal (HS 2301.20), 93.5% to China, and imported USD 260 M, 49% from India. The tonnages in the database (227 kt out, 139 kt in) look imputed, because every partner shows the same unit value. [VN-direct, Medium for values, Low for tonnes] (FM-37, FM-38)
4. **The displaceable fishmeal pool is about 120 to 245 kt a year on central assumptions, within the macro agent's 80 to 270 kt.** Sourced bounds give 80 to 290 kt. Shrimp feed dominates (92 to 184 kt at 10% to 20% inclusion in 920 kt of feed). Pangasius and tilapia add only 24 to 60 kt at 1% to 2%. Adding snakehead and marine fish at hypothetical rates gives up to about 440 kt. So the earlier 350 to 450 kt is reachable only if the unsourced snakehead and marine-fish rates are high. [VN-direct volumes, general rates, Low] (FM-04, FM-05, FM-07, FM-08, MAC-06)
5. **The part of that pool a novel protein can realistically take is smaller, about 25 to 90 kt.** Most trials replace 25% to 60% of fishmeal without losing growth. Applying 25% to 50% to shrimp fishmeal alone gives 23 to 92 kt. [general, Low; my calculation] (FM-08, FM-22, FM-25, FM-26)
6. **No Vietnam-specific fishmeal inclusion rate was found in the literature read.** Global evidence: freshwater fed fish (catfish, tilapia) fell to 1% to 2% fishmeal by 2017 (Naylor et al. 2021). Shrimp feeds used 11% to 23% in 2014, with 6% projected for 2025 (Salin et al. 2018, via MAC-41). Recent Chinese whiteleg shrimp trials treat 20% to 25% as a normal diet and 10% as "low fishmeal". [general, Medium] (FM-05, FM-07, FM-08, FM-34)
7. **A Chinese microbial protein is already sold into Vietnamese feed: this is the import counterfactual.** V-Group (CK Vietnam) imports a bacterial biomass from Chinese glutamic acid (MSG) fermentation, at least 70% CP, for pig, poultry, fish and shrimp feed. It is sold as a partial substitute for SBM, fishmeal and meat and bone meal. No price is published. [VN-direct, Medium] (FM-12, ECO-69)
8. **The nearest purpose-built feed-SCP plant is Calysseo's 20,000 t/yr FeedKind plant in Changshou (Chongqing), China.** It has two 10,000 t/yr fermenters. The joint venture also states an "ambition" for a 100 kt plant in Saudi Arabia. No Vietnamese distributor or trial was found. [general, Medium] (FM-13, ECO-67)
9. **Vietnamese shrimp feed prices rose VND 1,200 to 1,500/kg in early June 2026.** New Hope Vinh Long, Alphafeed, Tongwei, Hai Dai Vinh Long and Thang Long all raised prices. This follows a 3% cut in 2025. From the size of that 2025 cut, I derive a shrimp feed price level of about VND 33,000 to 50,000/kg (USD 1,270 to 1,920/t). [VN-direct, Medium for the increase, Low for the derived level] (FM-10, FM-04)
10. **Feed is 50% to 60% of shrimp production cost (2026 trade press) and 70% to 90% of pangasius operating cost (older studies).** Pangasius feed fell VND 500 to 1,000/kg (5%) in 2025, implying a price level of roughly VND 10,000 to 20,000/kg (USD 385 to 770/t). [VN-direct, Low to Medium] (FM-10, FM-04, MAC-42)
11. **Replacement evidence is strongest for insect meals and weakest for early-life SCP.** Insect meal: BSF meal replaced 60% of fishmeal in striped catfish (100% cut growth), and a meta-analysis puts the general safe limit below 30%. Mealworm meal replaced 50% in whiteleg shrimp, and cricket meal replaced 100% in snakehead. SCP: CAP replaced 15% (croaker) to 68% (bass) of fishmeal, and FeedKind up to 25% (sea bream). But a methanotroph SCP harmed barramundi fry at 25% replacement. [general, Medium] (FM-16 to FM-26)
12. **Many "benefits" of novel proteins in shrimp are functional, not protein replacement.** Examples: CAP improved shrimp survival after pathogen challenge; mealworm meal cut post-challenge mortality by 77%; BSF protein hydrolysate at 1% to 2% improved palatability; beta-glucan raised winter survival in striped catfish from 78% to 95%. A product sold on function can charge far more per tonne than one sold on protein. [general, Medium] (FM-20, FM-26, FM-45, FM-31)
13. **Price to beat 1 (fishmeal replacement in shrimp feed): USD 1,840 to 2,690 per tonne for a 70% CP SCP, or USD 1,310 to 1,920 for a 50% CP fungal product, at fishmeal prices from the 2025 average to August 2026.** The wave 1 indicative Vietnamese fungal cost is USD 4,050 to 14,700 per tonne of protein. The low end is 1.54 times fishmeal protein at 2025 prices, but only 1.05 times at August 2026 prices. So this target is marginal and depends on a fishmeal spike lasting. [VN-direct estimate, Low] (FM-01, COST worked example A)
14. **Price to beat 2 (functional ingredient in pangasius or shrimp feed) is the most plausible target.** If a 1% to 2% inclusion gives a 3% to 5% gain in feed efficiency or survival, a pangasius mill could pay about USD 1,000 to 4,250/t for it. A shrimp mill could pay USD 1,300 to 4,800/t above fishmeal parity at 2% to 5% inclusion. This overlaps the indicative Vietnamese cost, but only with proven, repeatable functional data. [VN-direct estimate, Low; my calculation] (FM-04, FM-10, FM-31)
15. **Price to beat 3 (soybean meal replacement in pig and poultry feed) is not plausible for fermentation protein.** Parity with SBM is only USD 560 to 610/t for a 70% CP SCP. The low end of the indicative Vietnamese cost is 4.6 to 5.1 times SBM per tonne of protein. Pig and poultry feed is 22 Mt, but price rules this market out. [general/VN-direct estimate, Medium for the direction] (FM-01, COST worked example A, MAC-01)
16. **China is pushing soybean meal out of its own feed, which grows its home market for SCP and by-product proteins.** MARA issued a "Three-Year Action Plan" for reducing and substituting soybean meal in feed (2023). A 2025 review reports that SBM use in Chinese feed fell 8.0% in 2024. I could not read the plan's numeric targets. [general, Low; secondary sources] (FM-36)
17. **Global fishmeal supply is flat at about 4 to 4.5 Mt a year, and aquaculture takes most of it.** In 2016 fishmeal output was about 4.5 Mt, with 69% used in aquafeed (Hua et al. 2019). A 2026 paper, citing FAO SOFIA 2024, puts aquaculture's share at about 87% (about 4 Mt a year). Demand for aquafeed is projected to keep rising. This supports a structurally high fishmeal price, but prices can also swing with Peruvian anchovy seasons. [general, Medium] (FM-06, FM-35)

---

## Detailed findings

### 1. Fishmeal prices, trade and domestic supply

**1a. World Bank fishmeal series, 2020 to August 2026 (USD/t).** The IndexMundi page labels the series "Fishmeal, Peru Fish meal/pellets 65% protein, CIF", source World Bank. Its annual means for 2023 to 2025 match the Pink Sheet annual figures exactly, so the two are the same series. The Pink Sheet gives no grade footnote.

| Period | Price | Per t protein (65%) | Source |
|---|---|---|---|
| 2020 mean (range) | 1,433 (1,365 to 1,498) | 2,205 | FM-02 (my mean) |
| 2021 mean | 1,481 | 2,278 | FM-02 |
| 2022 mean | 1,596 (rose from 1,429 in Jan to 1,746 in Dec) | 2,455 | FM-02 |
| 2023 | 1,815 (peak month 1,883, Aug 2023) | 2,792 | FM-01, FM-02 |
| 2024 | 1,699 | 2,614 | FM-01 |
| 2025 | 1,706 (low 1,581 Jan; high 1,825 Dec) | 2,625 | FM-01, FM-02 |
| Q1 2026 | 1,832 | 2,818 | FM-01 |
| Q2 2026 | 2,045 (April and May average about 1,995, derived) | 3,146 | FM-01 |
| Jun / Jul / Aug 2026 | 2,145 / 2,103 / 2,500 | 3,300 / 3,235 / 3,846 | FM-01 |

- The wave 1 costs notes used USD 1,837 (March 2026). That figure is now out of date. The August 2026 figure is 36% higher.
- The Pink Sheet commentary did not explain the August jump. The cause (for example a poor Peruvian season) is not established here.

**1b. Vietnam's fishmeal trade (HS 2301.20), 2023, WITS (UN Comtrade).**

| Flow | Value | Reported quantity | Main partners |
|---|---|---|---|
| Imports | USD 260.0 M | 138,676 t | India USD 128.4 M (49%), Korea 25.4, Brazil 14.9, Chile 12.6, Peru 11.9 |
| Exports | USD 430.5 M | 226,644 t | China USD 402.3 M (93.5%), Korea 6.6, Thailand 6.3, Japan 6.2 |

- Every partner shows the same unit value (USD 1,875/t for imports; USD 1,899/t for exports). This pattern means the quantities were estimated, not reported. Treat values as reliable and tonnes as indicative.
- Reading: Vietnam makes fishmeal (from pangasius by-products, other processing waste and low-value fish) and sells most of it to China. It imports higher-grade meal, much of it from India, for shrimp and marine feeds. The Uni-President Vietnam executive's "USD 1,600/t in November 2025" (FM-04) is below the World Bank's Peru 65% price that month (USD 1,794), which fits a lower-grade or Indian origin.
- Domestic fishmeal production, grade mix and domestic prices remain gaps (see Open questions).

**1c. Pangasius by-product meal.** Wave 1 found that processing by-products are 62% to 67% of the whole pangasius (MAC-45). A 2022 review gives by-product fishmeal yields of 35.8% for African catfish waste and 54.8% for tilapia waste (FM-44, citing primary studies). I found no current tonnage or price for Vietnamese pangasius meal. The export figure above suggests much of it leaves Vietnam, mostly for China.

### 2. Fishmeal inclusion and the displaceable pool

**2a. Inclusion ranges used** (details and DOIs in `inclusion_rates.csv`):

| Species | Range used | Basis | Confidence |
|---|---|---|---|
| Whiteleg shrimp | 6% (low), 10% to 20% (central), 25% (high) | 11% to 23% in 2014 and 6% projected for 2025 (Salin et al. 2018 via MAC-41); trials treat 20% to 25% as normal and 10% as achievable without growth loss (FM-08, FM-33, FM-34) | Medium for bounds, Low for the central value |
| Pangasius | 1% to 2% | Global freshwater-fish average for 2017 (Naylor et al. 2021) | Medium (not Vietnam-specific) |
| Tilapia | 1% to 2% | Same | Medium |
| Snakehead | 20% to 40% | Hypothesis: experimental diets are fishmeal-based at 42% CP | Low |
| Marine finfish | 15% to 30% | Hypothesis from Naylor's "one-half to two-thirds" reduction | Low |

**2b. Recomputed pool** (feed volumes are the 2025 industry estimates in MAC-06/FM-04):

- Shrimp: 920 kt x 6% = 55 kt; x 10% = 92 kt; x 20% = 184 kt; x 25% = 230 kt.
- Pangasius: 2,000 kt x 1% = 20 kt to 2,500 kt x 2% = 50 kt.
- Tilapia: 400 kt x 1% = 4 kt to 500 kt x 2% = 10 kt.
- **Sourced bounds (shrimp 6% to 25%): 79 to 290 kt. Central (shrimp 10% to 20%): 116 to 244 kt.**
- Hypothetical additions: snakehead up to 300 kt x 20% to 40% = 60 to 120 kt; marine fish 80 to 100 kt x 15% to 30% = 12 to 30 kt. With these: about 128 to 440 kt.
- Sensitivity to shrimp feed volume: if shrimp feed matched NSO whiteleg output (994 kt at FCR 1.2 to 1.4 = 1.19 to 1.39 Mt feed), shrimp fishmeal alone would be 119 to 278 kt at 10% to 20%. This is the FCR inconsistency flagged by the macro agent.
- **Comparison with macro (80 to 270 kt):** my sourced bounds (79 to 290 kt) are essentially the same. The macro range used 23% as the shrimp ceiling; I allow 25% from trial controls. The central case (116 to 244 kt) is the better single range to quote. The prior 350 to 450 kt needs high snakehead and marine rates that no source supports.
- **Realistic capture:** trials show 25% to 60% of fishmeal can be replaced without growth loss (section 4). Applying 25% to 50% to shrimp fishmeal at 10% to 20% inclusion gives 23 to 92 kt a year of novel protein demand. That is 2 to 8 plants of Entobel's size (11 kt/yr), and it is already contested by Entobel, Chinese SCP and poultry by-product meal.

### 3. Incumbent alternative feed proteins

| Ingredient | Capacity / scale | Price signal | In Vietnam? | Source |
|---|---|---|---|---|
| Poultry by-product meal, fermented soy, SPC, rapeseed meal | Commodity scale | No price found | Yes. Use "accelerated" in 2025 as fishmeal substitutes | FM-04 |
| BSF insect meal (Entobel H-Meal, at least 53% CP) | 11,000 t/yr design (Dong Nai 1,000 t; HCMC former Ba Ria-Vung Tau 10,000 t) | Not disclosed | Yes. Vinh Hoan offtake of at least 15,000 t over 2025 to 2027 | ECO-01, ECO-03, ECO-05 |
| Chinese glutamic-acid fermentation biomass ("Mycoprotein", at least 70% CP) | Not disclosed; a by-product of MSG and amino acid plants | Not disclosed | Yes. Imported by V-Group / CK Vietnam | FM-12, ECO-69 |
| FeedKind (methanotroph SCP, about 70% to 75% CP) | 20,000 t/yr, Changshou, Chongqing (2 x 10 kt); 100 kt Saudi "ambition" | Not disclosed | Not found | FM-13, FM-17 |
| CAP (*C. autoethanogenum*, steel-mill gas) | Not found; in Chinese commercial-scale trials | Not found | Not found | FM-14, FM-15, FM-20, FM-21, RGN-57 |
| Yeast protein (Angel Yeast) | 11,000+ t/yr (food grade, Yichang) | Not found | Angel Yeast has a Hanoi office; feed yeast not checked | RGN-24, ECO-70 |
| Unibio (methanotroph SCP) | Not checked this wave | Not found | Covered in Vietnamese media only (2025) | ECO-67 |
| Functional yeast additives | Small volumes | Not found | Yes (Enzym Group trial at ShrimpVet) | ECO-70 |

Digestibility check: a 2022 shrimp study measured apparent digestibility of six novel proteins in whiteleg shrimp, including CAP, methanotroph bacteria meal, BSF larvae meal, mealworm, Chlorella and cottonseed protein concentrate, at 30% of the test diet (FM-14). The abstract did not give the values in the excerpt read.

### 4. Performance: replacement without growth loss

See `replacement_trials.csv`. Key points, separated as the brief asks:

**Protein replacement (growth held):**
- Whiteleg shrimp: fishmeal cut from 25% to 10% of diet without loss of growth, using plant protein plus amino acids and phytase. Survival and feed efficiency were still best on the 25% diet (FM-08). Mealworm meal replaced 50% of fishmeal with better growth (FM-26). For SPC, only a sensory study was retrieved (up to 100% replacement, no taste difference) (FM-29).
- Striped catfish (pangasius): BSF larvae meal up to 60% of fishmeal (174 g/kg of diet), but 100% (292 g/kg) cut growth (FM-22). Corn gluten meal was optimal at about 25% (FM-39). Note that pangasius commercial feeds already contain only about 1% to 2% fishmeal, so these trials say more about fishmeal-rich starter feeds than grow-out feeds.
- Snakehead: cricket meal replaced 100% of fishmeal protein without growth loss (FM-23). A second cricket study found a 45% cricket-meal diet equal to the fishmeal control (FM-24).
- General fish: BSF meal below 30% of fishmeal is generally safe (meta-analysis, FM-25).
- SCP in carnivorous fish: CAP replaced 67% to 68% of fishmeal in largemouth bass (from a 70% fishmeal diet) (FM-21) but only 15% in large yellow croaker (FM-18). FeedKind replaced up to 24.8% of fishmeal protein in black sea bream (FM-17) and allowed 3% to 6% inclusion in largemouth bass (FM-16).
- Negative result: methanotroph SCP at 25% and 50% fishmeal replacement caused enteritis and lower survival in barramundi fry (FM-19). Early life stages need their own trials.
- Tilapia: no SCP or yeast threshold was retrieved this wave (gap).
- Vietnamese trials: none retrieved for SCP. ShrimpVet (HCMC) runs functional-additive trials (ECO-70).

**Functional or immunity effects (separate from protein):**
- CAP improved growth and survival after pathogen challenge in whiteleg shrimp across 15 to 45 ppt salinity (FM-20); a 2025 transcriptomic study reports immunomodulation (FM-20 note).
- Mealworm meal at 50% replacement cut post-challenge mortality by 76.9% (FM-26).
- FeedKind raised survival and antioxidant markers in largemouth bass (FM-16).
- BSF protein hydrolysate at 1% to 2% raised palatability in shrimp feed (FM-45).
- Beta-glucan raised striped catfish survival under winter conditions from 78.3% to 95.0% (FM-31). Yeast is broadly reviewed as an immunostimulant (FM-32).

Reading: the growth data support partial replacement (25% to 60%) in the Vietnamese species that still use fishmeal (shrimp, snakehead, marine fish). In pangasius and tilapia there is little fishmeal left to replace, so a novel ingredient there must sell on function or on SBM-parity price.

### 5. Buyer economics

- **Shrimp feed.** Price level about VND 33,000 to 50,000/kg (derived, Low). Early June 2026 increases of VND 1,200/kg (standard 40% to 43% CP lines) and VND 1,500/kg (premium 42% to 50% CP lines) by New Hope Vinh Long, Alphafeed, Tongwei, Hai Dai Vinh Long and Thang Long (FM-10). Feed is 50% to 60% of shrimp production cost (FM-10).
- **Fishmeal cost inside shrimp feed.** At 15% inclusion, fishmeal adds USD 256/t of feed at the 2025 price and USD 375/t at the August 2026 price. That is roughly 13% to 30% of the derived feed price. This is why mills are motivated to cut fishmeal.
- **Pangasius and tilapia feed.** Price level about VND 10,000 to 20,000/kg (derived, Low). Feed was 70% to 90% of pangasius operating cost in 2007 to 2011 studies (MAC-42). Pangasius farm-gate price was VND 26,500 to 30,000/kg in late 2024 (FM-11).
- **Main buyers.** Shrimp feed leaders in 2025: Sheng Long, CP Vietnam, Uni-President Vietnam, Tongwei, Grobest and Gromax, 640 kt combined (FM-04). Vertically integrated pangasius groups (Vinh Hoan is already an insect-meal buyer, ECO-05). Livestock feed leaders: De Heus, GreenFeed, Cargill, Japfa, CP (MAC-25).
- **Qualification steps (typical, from trial literature and wave 1; not a Vietnamese SOP).** (1) Specification and safety data (proximate, amino acids, contaminants). (2) Digestibility trial in the target species (as in FM-14). (3) Dose-response growth trial in tanks, usually 8 to 12 weeks. (4) Pond or farm trial through a contract lab such as ShrimpVet (ECO-70). (5) Legal listing as a feed ingredient in Vietnam (see regulation agents). (6) Supply-security and price agreement (the Entobel-Vinh Hoan offtake is the local precedent). Certification pressure is rising: Sheng Long and Uni-President cited ASC certification as a 2026 priority (FM-04), so traceable, certifiable ingredients have an edge.

### 6. Outlook to 2030

- **Vietnamese feed demand.** USDA expects total feed demand to rise from 28.6 Mt (2025) to 30.6 Mt (2027), with aquafeed at 6.73 Mt (2026) and 7.12 Mt (2027) on USDA's own (higher) aquafeed basis (MAC-01). Decision 1520/QD-TTg targets 30 to 32 Mt of industrial feed by 2030 (MAC-23). Shrimp feed makers expect sales to grow about 15% in 2026 (Sheng Long, FM-04).
- **Fishmeal supply.** About 4.5 Mt a year of fishmeal (2016) with 69% used in aquafeed (FM-06); about 87% (about 4 Mt) used by aquaculture per FAO 2024 as cited in FM-35. By-products ("trimmings") are a growing share (FM-35). Supply is not expanding, and aquafeed demand is. I could not read SOFIA 2024 directly (FAO page returned 403).
- **China's counterfactual.** MARA's three-year plan to reduce and substitute SBM in feed (2023) (FM-36) and its 2021 plan naming single-cell protein (RGN-22) create a large home market for Chinese SCP and amino-acid by-products. Calysseo's 20 kt plant and CAP from steel-mill gas are in commercial use in China (FM-13, FM-15). Glutamic-acid biomass is already exported to Vietnam (FM-12). Chinese by-product SCP has near-zero marginal feedstock cost, so it can price anywhere between SBM and fishmeal parity. **My reasoning, not a finding:** the counterfactual import price for a Vietnamese feed SCP is probably at or below fishmeal-protein parity, and a Vietnamese producer should plan for 70% to 90% of fishmeal-protein parity as its realised price.

### 7. Synthesis: the price to beat

Assumptions: fishmeal 65% CP at USD 1,706/t (2025 average) to USD 2,500/t (August 2026); SBM 46% CP at USD 366/t (2025) to USD 403/t (August 2026) (FM-01). Novel products: SCP at 70% CP; fungal biomass at 50% CP. Indicative Vietnamese cost from wave 1 worked example A: USD 2,227 to 6,612/t of product, USD 4,050 to 14,700 per tonne of protein (modelled, Low).

| Target | Price to beat, USD/t protein | Parity price, USD/t product | Indicative VN cost, USD/t protein | Gap at the low-cost end | Plausible? |
|---|---|---|---|---|---|
| 1. Fishmeal replacement in shrimp feed (protein basis) | 2,625 to 3,846 | SCP 70%: 1,837 to 2,692. Fungal 50%: 1,312 to 1,923 | 4,050 to 14,700 | 1.54x (2025 price) to 1.05x (Aug 2026 price) | Marginal. Needs low capex, near-free carbon and a lasting fishmeal spike. Imports of Chinese SCP likely undercut it. |
| 2. Functional ingredient in pangasius feed (1% to 2% inclusion) | Not a protein price. Willingness to pay if it delivers a 3% to 5% gain in feed efficiency or survival: about USD 1,000 to 4,250/t of product (arithmetic below) | same | 4,050 to 14,700 (per t protein; per t product 2,227 to 6,612) | Overlaps at the low end | Plausible, if repeatable functional data exist. Small volumes: 2,000 to 2,500 kt of feed x 1% to 2% = 20 to 50 kt a year at full uptake. |
| 2b. Functional-plus-protein ingredient in shrimp feed (2% to 5%) | Fishmeal parity plus USD 1,280 to 4,800/t for a 5% performance gain | SCP 70%: about 3,100 to 7,500 | as above | Overlaps | The most plausible entry point. |
| 3. SBM replacement in pig and poultry feed | 796 to 876 | SCP 70%: 557 to 613. Fungal 50%: 398 to 438 | 4,050 to 14,700 | 4.6x to 5.1x | Not plausible for fermentation protein. |

Arithmetic for target 2: maximum ingredient price = SBM price + (performance gain x feed price) / inclusion rate. Example: pangasius feed USD 385/t, 5% gain, 2% inclusion: 403 + (0.05 x 385) / 0.02 = USD 1,366/t. At USD 770/t feed and 1% inclusion: 403 + (0.05 x 770) / 0.01 = USD 4,253/t. At a 3% gain and 2% inclusion on USD 385/t feed: USD 980/t. For shrimp: 5% of USD 1,280 to 1,920/t feed divided by 2% to 5% inclusion = USD 1,280 to 4,800/t above the fishmeal-parity value.

---

## Implications by audience

- **VCs and investors:** A Vietnamese feed-protein plant sold on protein price alone does not clear fishmeal at 2025 prices and cannot touch SBM. The investable thesis is a functional shrimp or pangasius ingredient with trial data, or a very low-cost by-product route. Test any plan against Chinese SCP import prices, not against fishmeal list prices.
- **Policy makers:** Vietnam exports most of its fishmeal to China (USD 402 M in 2023) and imports higher grades. Protein security in aquafeed is less about fishmeal volume than about quality and price volatility. A national shrimp-feed trial facility for novel ingredients would lower the entry cost for all suppliers, domestic and imported.
- **Startups:** Sell to shrimp feed mills first (Sheng Long, UPV, CP, Tongwei, Grobest, Gromax) with a 2% to 5% inclusion product and ShrimpVet-style data on survival and FCR. Avoid pig and poultry feed.
- **Feed manufacturers:** At USD 2,500/t fishmeal, each 1 percentage point of fishmeal removed from shrimp feed saves about USD 25/t of feed at equal protein cost. Mills already use poultry by-product meal, fermented soy, SPC and rapeseed meal; novel proteins must prove value against those, not only against fishmeal.
- **Academia:** Publish Vietnamese commercial fishmeal inclusion rates by species and run SCP and yeast trials in pangasius, snakehead and whiteleg shrimp under Mekong conditions. Include early life stages (the barramundi fry result is a warning).
- **International bodies:** World Bank and FAO series cover Peruvian fishmeal only. A regional Asian fishmeal price (Indian, Vietnamese, Thai grades) would help small buyers and new suppliers.

## Disagreements log

| Topic | Claim A | Claim B | Position |
|---|---|---|---|
| Fishmeal price, Nov 2025 | UPV executive: USD 1,600/t (FM-04) | World Bank Peru 65% CIF: USD 1,794/t (FM-02) | Both can be right. The UPV figure is probably a lower grade or Indian origin (India supplied 49% of Vietnam's import value in 2023). Use the World Bank series as the benchmark; say which grade when quoting. |
| Latest fishmeal price | Wave 1: USD 1,837/t (Mar 2026) (COST-27) | Pink Sheet: USD 2,500/t (Aug 2026) (FM-01) | Not a conflict; wave 1 is superseded. Use August 2026 as latest and the 2025 average as the base case. |
| Displaceable pool | Prior drafts: 350 to 450 kt | Macro: 80 to 270 kt; this note: 79 to 290 kt sourced, 116 to 244 kt central | Use 120 to 245 kt as central. 350 to 450 kt requires unsourced snakehead and marine rates. |
| Shrimp fishmeal inclusion | 6% projected for 2025 (Salin et al. via MAC-41) | 20% to 25% in recent Chinese trial control diets (FM-33, FM-34) | Both are indirect. Projection is not measurement; trial controls are not market surveys. Central 10% to 20%. One call to a Vietnamese shrimp feed mill would settle it. |
| Vietnam fishmeal tonnage | WITS: 139 kt imported, 227 kt exported (2023) | Uniform unit values imply imputation | Quote values, not tonnes. |
| Aquafeed volume | USDA 6.5 Mt (2025) | Industry 3.9 to 4.8 Mt (MAC-06) | Unresolved (macro agent's position stands). The pool uses industry species volumes. |
| Feed share of cost | Shrimp: 50% to 60% (FM-10, 2026) | Pangasius: 70% to 90% (MAC-42, 2007 to 2011 studies) | Different species and years; not a conflict. Pangasius figure is dated. |

## Open questions and gaps (with the cheapest way to close each)

1. **Vietnamese commercial fishmeal inclusion by species.** Call the technical managers of Sheng Long, Uni-President Vietnam or Grobest (shrimp) and Vinh Hoan feed division (pangasius). Or ask the Vietnam Feed Association.
2. **Domestic fishmeal production, grades and prices (VND/kg by 55%, 60%, 65% CP).** Kien Giang and Ca Mau fishmeal plants; AgroMonitor weekly feed report; Vietnam Customs HS 2301.20 by month (the customs statistics portal).
3. **Absolute shrimp and pangasius feed prices.** A current dealer price list (dai ly thuc an) from the Mekong Delta, or VASEP's cost-of-production series.
4. **Chinese SCP and glutamic-acid biomass import prices and volumes into Vietnam.** Ask V-Group / CK Vietnam for a quote; check customs lines HS 2309.90 and 2102.20.
5. **CAP capacity and price in China; Calysseo FeedKind price.** Beijing Shougang LanzaTech and Calysseo investor materials; GFI APAC China team.
6. **MARA soybean-meal reduction targets and SCP approvals.** Read the MARA notice on moa.gov.cn directly (numeric targets not verified this wave).
7. **Tilapia and pangasius SCP or yeast replacement thresholds.** Targeted Scite search next wave; Can Tho University and Nong Lam University aquaculture faculties.
8. **FAO SOFIA 2024 fishmeal figures read directly.** FAO page returned 403; try the FAO Open Knowledge repository PDF.

## Leads for the next wave

- Vietnam's own glutamic-acid fermentation plants (Vedan Vietnam in Dong Nai; Ajinomoto Vietnam) may produce bacterial biomass by-products like the Chinese "Mycoprotein". If so, a domestic SCP already exists as a side stream. Check product catalogues.
- The Enzym Group yeast trial at ShrimpVet (ECO-70) is the template for functional-ingredient qualification. Ask ShrimpVet for trial pricing and duration.
- Entobel's realised output and price per tonne under the Vinh Hoan offtake: the closest local price signal for a novel protein.
- Kok et al. 2020 (Aquaculture 528, 735474; with erratum) reportedly uses feed-company formulations for pangasius and shrimp; full text was not readable through Scite. Worth reading for Vietnam-relevant inclusion rates.
- Naylor et al. 2021 Table 1 (inclusion rates by species, 2017) was blocked; read the PDF.

## Sources

- FM-01. World Bank. "Commodity Price Data (The Pink Sheet)", September 2026 (released 2 Sep 2026). https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Pink-Sheet-September-2026.pdf . Accessed 2026-09-23. Fishmeal, SBM, soybeans, maize, urea, sugar: annual 2023 to 2025, quarterly, Jun to Aug 2026. Type: statistics.
- FM-02. World Bank commodity series via IndexMundi. "Fishmeal, Peru Fish meal/pellets 65% protein, CIF, USD per metric ton", monthly Jan 2020 to Mar 2026. https://www.indexmundi.com/commodities/?commodity=fish-meal&months=120 . Accessed 2026-09-23. Monthly series; annual means match FM-01. Type: statistics (compiled).
- FM-03. World Bank. "Commodity Markets" page. https://www.worldbank.org/en/research/commodity-markets . Accessed 2026-09-23. Links to CMO-Historical-Data-Monthly.xlsx (binary, not readable by the fetch tool) and the Pink Sheet. Type: statistics.
- FM-04. Mardiana. "Aquafeeds in 2025: Disrupted by tariffs." Aqua Culture Asia Pacific, 30 Jun 2026. https://aquaasiapac.com/2026/06/30/aquafeeds-in-2025-disrupted-by-tariffs/ . Accessed 2026-09-23. Vietnam aquafeed volumes, top shrimp feed mills, 2025 feed price cuts, UPV fishmeal quote, ASC. Type: trade press (same as MAC-06, re-read).
- FM-05. Naylor, R. L., Hardy, R. W., Buschmann, A. H., et al. (2021). "A 20-year retrospective review of global aquaculture." Nature 591: 551-563. https://doi.org/10.1038/s41586-021-03308-6 . Accessed 2026-09-23 via Scite excerpts. Freshwater fishmeal 1% to 2%; marine and crustacean rates cut by one-half to two-thirds. Type: peer-reviewed.
- FM-06. Hua, K., Cobcroft, J. M., Cole, A., et al. (2019). "The future of aquatic protein: implications for protein sources in aquaculture diets." One Earth 1(3): 316-329. https://doi.org/10.1016/j.oneear.2019.10.018 . Accessed via Scite. Fishmeal 4.5 Mt (2016), 69% to aquafeed; aquafeed 49.7 Mt (2015) to 87.1 Mt (2025 projected). Type: peer-reviewed review.
- FM-07. Salin, K. R., Arun, V. V., Mohanakumaran Nair, C., Tidwell, J. H. (2018), as cited in "Chemoattractants: their essentiality and efficacy in shrimp aquaculture", Indian Journal of Fisheries 68(1) (2021). https://doi.org/10.21077/ijf.2021.68.1.95994-20 . Not read by me; taken from wave 1 MAC-41. Shrimp fishmeal 19% to 40% (2000), 11% to 23% (2014), about 6% (2025 projected). Type: peer-reviewed (secondary citation).
- FM-08. Xie, S., Niu, J., Zhou, W., et al. (2018). "Developing a low fishmeal diet for juvenile Pacific white shrimp, Litopenaeus vannamei, using the nutritional value of FM as the reference profile." Aquaculture Nutrition 24(4): 1184-1197. https://doi.org/10.1111/anu.12657 . Abstract. Fishmeal 250 to 100 g/kg without growth loss. Type: peer-reviewed.
- FM-09. Han, D., Shan, X., Zhang, W., et al. (2016). "A revisit to fishmeal usage and associated consequences in Chinese aquaculture." Reviews in Aquaculture 10(2): 493-507. https://doi.org/10.1111/raq.12183 . Abstract and excerpts. China fishmeal imports steady at 1.0 to 1.5 Mt while aquafeed grew to 19 Mt (2014). Type: peer-reviewed. (Background; not used in tables.)
- FM-10. Tap chi Thuy san Viet Nam. "Nhieu doanh nghiep dong loat tang gia thuc an thuy san" (5 Jun 2026). https://thuysanvietnam.com.vn/nhieu-doanh-nghiep-dong-loat-tang-gia-thuc-an-thuy-san/ . Accessed 2026-09-23. June 2026 shrimp feed price increases by company; feed 50% to 60% of production cost. Type: trade press.
- FM-11. Tap chi Thuy san Viet Nam. "Co hoi va thach thuc khi gia ca tra tang manh" (3 Dec 2024). https://thuysanvietnam.com.vn/co-hoi-va-thach-thuc-khi-gia-ca-tra-tang-manh/ . Accessed 2026-09-23. Pangasius farm-gate VND 26,500 to 30,000/kg. Type: trade press.
- FM-12. CK Vietnam Group / V-Group Vietnam. "Mycoprotein" product page. https://ckvietnam.com.vn/mycoprotein-36.html . Accessed 2026-09-23. Chinese glutamic-acid fermentation biomass, at least 70% CP; uses. Type: company.
- FM-13. Calysseo. Company website. https://www.calysseo.com/ . Accessed 2026-09-23. Adisseo-Calysta JV; Changshou (China) 20 kt/yr, 2 x 10 kt fermenters; Saudi 100 kt ambition. Type: company.
- FM-14. "Evaluation of six novel protein sources on apparent digestibility in Pacific white shrimp, Litopenaeus vannamei." Aquaculture Nutrition (2022). https://doi.org/10.1155/2022/8225273 . Abstract. CAP, methanotroph meal, BSF, mealworm, Chlorella, cottonseed protein. Type: peer-reviewed.
- FM-15. Wang, J., Chen, L., Xu, J., et al. (2022). "C1 gas protein: a potential protein substitute for advancing aquaculture sustainability." Reviews in Aquaculture 15(3): 1179-1197. https://doi.org/10.1111/raq.12707 . Abstract. Type: peer-reviewed review.
- FM-16. "A natural gas fermentation bacterial meal (FeedKind) as a functional alternative ingredient for fishmeal in diet of largemouth bass." Antioxidants 11(8): 1479 (2022). https://doi.org/10.3390/antiox11081479 . Abstract. Type: peer-reviewed.
- FM-17. "Evaluation of methanotroph (Methylococcus capsulatus, Bath) bacteria meal (FeedKind) as an alternative protein source for juvenile black sea bream." Frontiers in Marine Science (2021). https://doi.org/10.3389/fmars.2021.778301 . Abstract; FeedKind 75.14% CP. Type: peer-reviewed.
- FM-18. "Substituting fish meal with a bacteria protein (Clostridium autoethanogenum protein) derived from industrial-scale gas fermentation: effects on growth ... in large yellow croakers." Fishes 7(5): 228 (2022). https://doi.org/10.3390/fishes7050228 . Abstract. Type: peer-reviewed.
- FM-19. "Replacement of fishmeal with a microbial single-cell protein induced enteropathy and poor growth outcomes in barramundi (Lates calcarifer) fry." Journal of Fish Diseases (2024). https://doi.org/10.1111/jfd.13985 . Abstract. Type: peer-reviewed.
- FM-20. "Effects of dietary Clostridium autoethanogenum protein on the growth, disease resistance, intestinal digestion, immunity and microbiota structure of Litopenaeus vannamei..." Frontiers in Immunology (2022). https://doi.org/10.3389/fimmu.2022.1034994 . Abstract. Also noted: Animal Nutrition (2025) https://doi.org/10.1016/j.aninu.2025.04.010 (title only). Type: peer-reviewed.
- FM-21. "Dietary effect of Clostridium autoethanogenum protein on growth, intestinal histology and flesh lipid metabolism of largemouth bass." Metabolites 12(11): 1088 (2022). https://doi.org/10.3390/metabo12111088 . Abstract. Type: peer-reviewed.
- FM-22. "Effects of dietary protein substitution of fishmeal with black soldier fly larval meal on growth and physiological responses of juvenile striped catfish." Aquaculture Research (2022). https://doi.org/10.1111/are.15739 . Abstract. Type: peer-reviewed.
- FM-23. "Effects of substituting the two-spotted cricket (Gryllus bimaculatus) meal for fish meal on growth performances and digestibility of striped snakehead." Life 13(2): 594 (2023). https://doi.org/10.3390/life13020594 . Abstract. Type: peer-reviewed.
- FM-24. "The use of cricket (Gryllus bimaculatus) meal as protein source for snakehead fish (Channa striata)." IOP Conf. Series: Earth and Environmental Science 1118: 012020 (2022). https://doi.org/10.1088/1755-1315/1118/1/012020 . Abstract. Type: conference paper.
- FM-25. "Evaluation of dietary inclusion of black soldier fly (Hermetia illucens) larvae on fish production performance: a meta-analysis." Journal of Insects as Food and Feed (2022). https://doi.org/10.3920/jiff2021.0159 . Abstract. Type: peer-reviewed meta-analysis.
- FM-26. "Replacing fish meal with defatted insect meal (yellow mealworm Tenebrio molitor) improves the growth and immunity of Pacific white shrimp." Animals 9(5): 258 (2019). https://doi.org/10.3390/ani9050258 . Abstract. Type: peer-reviewed (company-linked product).
- FM-27. "Effect of black soldier fly (Hermetia illucens) larvae meal on lipid and glucose metabolism of Pacific white shrimp." British Journal of Nutrition (2021). https://doi.org/10.1017/s0007114521004670 . Abstract. Type: peer-reviewed.
- FM-28. "Replacement of commercial feed with fresh black soldier fly larvae in Pacific white shrimp." Aquaculture Nutrition (2022). https://doi.org/10.1155/2022/9130400 . Abstract. Type: peer-reviewed.
- FM-29. "Sensory evaluation of Pacific white shrimp fed with different levels of soy protein concentrate in replacement of fish meal." Acta Veterinaria Brasilica 17(1) (2023). https://doi.org/10.21708/avb.2023.17.1.11410 . Abstract. Type: peer-reviewed.
- FM-30. "Replacement of fish meal with two fermented soybean meals in diets for rainbow trout." Aquaculture Nutrition (2019). https://doi.org/10.1111/anu.12965 . Abstract. Type: peer-reviewed.
- FM-31. "Mitigating the impact of winter temperatures on striped catfish (Pangasianodon hypophthalmus) using functional feed additives." Journal of the World Aquaculture Society (2023). https://doi.org/10.1111/jwas.13010 . Abstract. Type: peer-reviewed.
- FM-32. "Factors affecting yeast digestibility and immunostimulation in aquatic animals." Animals 14(19): 2851 (2024). https://doi.org/10.3390/ani14192851 . Abstract. Type: peer-reviewed review.
- FM-33. "Effects of dietary chenodeoxycholic acid supplementation in a low fishmeal diet containing Clostridium autoethanogenum protein on growth ... of Litopenaeus vannamei." Animals 13(13): 2109 (2023). https://doi.org/10.3390/ani13132109 . Abstract; control diet 25% fishmeal. Type: peer-reviewed.
- FM-34. "Supplemental effects of Haematococcus pluvialis in a low-fish meal diet for Litopenaeus vannamei at varying temperatures." Frontiers in Immunology (2024). https://doi.org/10.3389/fimmu.2024.1501753 . Abstract; control 20% fishmeal, low-fishmeal 10%. Type: peer-reviewed.
- FM-35. "The growing role of trimmings and their origins in global fishmeal production and trade." Environmental Research: Food Systems (2026). https://doi.org/10.1088/2976-601x/ae38e4 . Excerpts; aquaculture uses about 87% (about 4 Mt/yr) of fishmeal, citing FAO 2024. Type: peer-reviewed.
- FM-36. China SBM policy, secondary: (a) "Dynamic changes in amino acid release patterns of different plant protein sources during in vitro digestion..." Animals 15(21): 3094 (2025), https://doi.org/10.3390/ani15213094 (SBM use in Chinese feed -8.0% in 2024 after the reduction action); (b) "Rapid detection of protein content in fuzzy cottonseeds..." Processes 13(10): 3221 (2025), https://doi.org/10.3390/pr13103221 (names MARA's "Three-Year Action Plan" for SBM reduction). Excerpts only. Type: peer-reviewed (secondary for policy).
- FM-37. WITS (World Bank) / UN Comtrade. Vietnam imports of HS 230120 by partner, 2023. https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/230120 . Accessed 2026-09-23. Type: statistics.
- FM-38. WITS (World Bank) / UN Comtrade. Vietnam exports of HS 230120 by partner, 2023. https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Exports/partner/ALL/product/230120 . Accessed 2026-09-23. Type: statistics.
- FM-39. "Evaluation of feed utilization and growth performance of juvenile striped catfish Pangasianodon hypophthalmus fed diets with varying inclusion levels of corn gluten meal." Aquaculture Nutrition (2012). https://doi.org/10.1111/j.1365-2095.2012.00953.x . Abstract and excerpts. Type: peer-reviewed.
- FM-40. "Growth performance of juvenile kuruma shrimp, Marsupenaeus japonicus, fed diets replacing fishmeal with soybean meal." Aquaculture Research (2013). https://doi.org/10.1111/are.12201 . Excerpt citing Lim and Dominy: commercial shrimp feeds 25% to 50% fishmeal. Type: peer-reviewed (dated).
- FM-41. Snakehead and BSF larvae: "Effect of inclusion of fresh or dried black soldier fly larvae in diets on snakehead fish's growth performance..." Israeli Journal of Aquaculture - Bamidgeh (2024). https://doi.org/10.46989/001c.92338 . Abstract: feed is 50% to 60% of snakehead production cost. Type: peer-reviewed. (Country not verified.)
- FM-42. Cottrell, R. S., Metian, M., Froehlich, H. E., et al. (2021). "Time to rethink trophic levels in aquaculture policy." Reviews in Aquaculture 13(3): 1583-1593. https://doi.org/10.1111/raq.12535 . Excerpts; confirms Tacon and Metian (2008, 2015) as the standard inclusion dataset. Type: peer-reviewed. (Background.)
- FM-43. Jannathulla, R., et al. (2019). "Fishmeal availability in the scenarios of climate change..." Aquaculture Research 50(12): 3493-3506. https://doi.org/10.1111/are.14324 . Abstract: fishmeal USD 452/t (2000) to USD 1,596.54/t (2018). Type: peer-reviewed. (Long-run price context.)
- FM-44. Boyd, C. E., et al. (2022). "The contribution of fisheries and aquaculture to the global protein supply." Food Security. https://doi.org/10.1007/s12571-021-01246-9 . Excerpts: average fishmeal inclusion 5.8% in fed aquaculture (2017, from Naylor data); by-product fishmeal yields. Type: peer-reviewed.
- FM-45. "Palatability enhancement potential of Hermetia illucens larvae protein hydrolysate in Litopenaeus vannamei diets." Molecules 26(6): 1582 (2021). https://doi.org/10.3390/molecules26061582 . Abstract. Type: peer-reviewed.

Wave 1 cross-references used: MAC-01, MAC-06, MAC-23, MAC-25, MAC-39, MAC-41, MAC-42, MAC-45; COST-27, COST-28 and worked example A; ECO-01, ECO-03, ECO-05, ECO-67, ECO-69, ECO-70; RGN-22, RGN-24, RGN-57.

Access log: World Bank CMO-Historical-Data-Monthly.xlsx (binary, unreadable by fetch tool); Nature table page for Naylor et al. 2021 (robots.txt block); FAO SOFIA 2024 guessed URL (403); Kok et al. 2020 full text (not readable in Scite); Tacon and Metian 2015 and Tacon 2020 (closed access). Stopped the CAP-capacity and pangasius-feed-price threads after searches returned no new data.
