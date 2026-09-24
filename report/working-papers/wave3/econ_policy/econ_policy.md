# ECF: Economy, policy and the regional race to 2050

Stream: wave 3 (futures), agent ECF. Question tree: F5 (economy and policy futures) and F6 (regional race to 2050). Source prefix: ECF. All sources accessed 2026-09-24. Edition 1.0 source IDs (CAP, RGN, COST, FM, REG, GT) and wave 3 IDs (FTG, FTB, CLM) are cited where we build on them.

Companion data (this folder): `bioeconomy_strategies.csv`, `learning_rates.csv`, `carbon_price_paths.csv`, `carbon_cost_per_protein.csv`, `ecf_calc.py` (rerunnable arithmetic: learning paths, fungal footprint, carbon costs; writes carbon_cost_per_protein.csv).

Labels: evidence [VN-direct] / [VN-adjacent] / [general]; confidence High / Medium / Low; foresight type [trend] / [projection] / [estimate] / [signal] / [wildcard]; horizon year. "Projection" covers official targets and published model results; the text says which. Company, consultancy and advocacy numbers are labelled as claims. Nothing here is a forecast.

**Division of labour with sibling streams.** Vietnam's own 2030 to 2050 targets are extracted in full by NTS (national_targets); trade measures (CBAM, EUDR) and the workforce transition in livestock are covered by GEO (geo_macro). This file uses them only where they bear on cost, capital and regional position. Gas-fermentation cost paths are in FTG; precision-fermentation and cultivated funding trends are in FTB; the World Bank carbon-tax path used for cooling is in CLM.

Status: complete. WebSearch calls used: 15 of 15.

---

## Headline findings

1. **No observed learning rate exists for any alternative protein.** Every forward cost path in circulation is a bottom-up engineering model or a claim; an OpenAlex search combining learning-curve and alternative-protein terms returns 9 works (2015 to 2026), none empirical. [general] Medium. [trend], 2026. (ECF-09; FTB; FTG)
2. **Fermentation industries learned at 13 to 20% per doubling, not at solar speed.** US corn ethanol 13% (1983 to 2005); Brazilian sugarcane ethanol 19 to 20% (1975 to 2005); ex-ante estimates for new biorefineries 1 to 2%. Complex, site-built process plants learn more slowly than mass-produced panels and cells (which fell near 10% a year). A 5 to 20% rate on capex is defensible; solar-style curves for fermented protein are hype. [general] Medium. [trend]. (ECF-01, ECF-02, ECF-05, ECF-10, ECF-11)
3. **Learning cannot close the soybean gap.** Even with free capital, a Vietnamese fungal feed protein on cassava glucose costs at least about USD 1,870 per t protein at 2026 input prices, 2.1 times soybean-meal protein (USD 880), because glucose and urea set the floor. [VN-direct inputs] Low. [estimate], 2030 to 2050. (ecf_calc.py; ch09)
4. **Our planning range for that product:** about USD 3,000 to 12,500 per t protein (2030), 2,400 to 10,800 (2040), 2,200 to 9,500 (2050). The low end is below the August 2026 fishmeal-protein price (USD 3,846) from 2030 in the central and fast cases and from 2040 in the slow case, but reaches the 2025 average (USD 2,625) only with fast learning, by about 2040. [VN-direct inputs] Low. [estimate], 2030, 2040, 2050. (ecf_calc.py)
5. **Cheap capital is worth a decade of learning.** Cutting the capital charge from 12% to 9% a year lowers the low-end cost to about USD 3,610 per t protein, similar to the central 2030 learning result. Concessional debt and guarantees are first-order levers for Vietnam. [VN-direct inputs] Low. [estimate], 2030. (ecf_calc.py; RGN-01)
6. **Vietnam's carbon market is real but narrow.** Decision 263/QD-TTg (9 February 2026) set pilot quotas for 110 power, steel and cement plants: above 243 Mt CO2e (2025) and 268 Mt (2026, +10.4%); offsets up to 30%; first surrender by 31 December 2027; full operation from 2029. No price is published, and agriculture and food are outside. [VN-direct] Medium. [signal], 2027 to 2029. (ECF-12, ECF-13, REG-59)
7. **Asian carbon prices are an eighth of Europe's.** 2025 averages: China USD 9.85, Korea USD 6.6 to 7.0, EU USD 83 to 84. Japan's GX-ETS became mandatory on 1 April 2026 with an FY2027 band of USD 11.36 to 28.73; Singapore's tax is S$45 (2026) rising to S$50 to 80 by 2030. The World Bank's CCDR recommends USD 29 (2030) and 90 (2040) for Vietnam. [VN-adjacent] High. [trend] and [projection], 2025 to 2040. (ECF-15 to ECF-19; CLM-18)
8. **For soybean meal, the accounting method is the carbon price.** At USD 50 per t CO2e, soybean-meal protein gains USD 75 to 78 per t without land-use change but USD 445 to 480 with country-level land-use change, that is 9% versus about half of its price. For Argentine meal (69% of Vietnam's imports) published factors differ five-fold: 0.72 versus 4.09 t CO2e per t. [general] Medium. [estimate]. (ECF-21, ECF-22, ECF-23)
9. **A carbon price barely touches fishmeal.** Peruvian fishmeal carries about 0.32 t CO2e per t ex-plant and 0.56 delivered to China; USD 50 per t adds only USD 41 to 43 per t protein, 1 to 2% of its price. Scarcity, not carbon, drives the fishmeal gap. [general] Medium. [estimate]. (ECF-24)
10. **A cassava-based microbial protein made in Vietnam is not low-carbon by default.** Our estimate is 3.8 to 11.7 t CO2e per t protein on the 2023 grid and still 2.7 to 7.3 on a near-clean 2050 grid, above fishmeal and soybean meal without land-use change. A carbon price on embodied emissions would widen its gap to fishmeal. Residue carbon, biogas at starch plants and clean power are preconditions for a climate claim. [VN-direct inputs] Low. [estimate], 2026, 2030, 2050. (ecf_calc.py; ECF-25, ECF-26; FTG)
11. **Carbon credits are not a financing route; green-debt labels are.** We found no approved Verra or Gold Standard methodology for protein substitution. The Climate Bonds Initiative launched Alternative Proteins criteria in 2025. [general] Low to Medium. [signal], 2026 to 2030. (ECF-27, ECF-28)
12. **Private money has rotated, public money has grown and concentrated.** Private alternative-protein investment was USD 881 million in 2025 against over USD 19.5 billion since 2017. Public investment reached at least USD 2.5 billion cumulative (2021 to 2025) across 33 countries; China announced nearly USD 1 billion in 2025 while US federal funding fell from about USD 115 million to 11 million. Vietnam does not appear. [general] Medium (advocacy data). [trend], 2021 to 2026. (ECF-43, ECF-44)
13. **Climate finance hardly reaches food.** Agrifood systems received USD 95 billion a year (7.2% of climate finance, 2021/22) against estimated needs of USD 1.1 trillion a year by 2030; alternative protein is not tracked. [general] Medium. [trend], 2030. (ECF-38)
14. **Every neighbour now has a funded bio instrument with a 2030 to 2035 horizon.** Japan: JPY 100 trillion bioeconomy by 2030 (biomanufacturing JPY 53.3 trillion). India: USD 300 billion by 2030, "smart proteins" named. China: biomanufacturing a "future industry" in the 15th Five-Year Plan. Korea: Synthetic Biology Promotion Act (in force 2026) and a KRW 100 billion food-tech fund by 2027. Thailand: alternative protein a target sub-industry to 2035. Singapore: S$37 billion RIE2030. [VN-adjacent] Medium. [projection: official targets], 2030 to 2035. (ECF-29 to ECF-37; RGN-35)
15. **Vietnam has targets without money or a protein line.** Resolution 36 aims for biotech at 7% of GDP (2030) and 10 to 15% (2045); MOIT's Decision 1355/QD-BCT (June 2026) targets replacing at least 20% of imports by 2030 and 30 to 50% by 2045. None names food, feed, fermentation or alternative protein. [VN-direct] Medium. [projection: official targets], 2030, 2045. (REG-51, ECF-40)
16. **Food is the orphan of bioeconomy strategies.** Singapore excludes alternative protein from its 2035 food targets; the EU's Biotech Act I (December 2025) excludes novel foods from its sandboxes; the US biotech commission gave agriculture "limited attention". No country has a funded biomanufacturing plan to 2050. [general] Medium. [trend], 2025 to 2030. (RGN-08, ECF-35, ECF-42)
17. **Where Vietnam could specialise (our judgement):** fermentation sugar from cassava for itself and the region; aquafeed functional ingredients tied to shrimp and pangasius; tolling on existing MSG, lysine and yeast tanks; cultivated seafood cell lines in the 2040s. Not commodity precision-fermented dairy, cultivated-meat manufacturing or bulk power-to-protein before about 2040. [VN-direct] Low. [estimate], 2030 to 2050. (sections 4 and 5; FTB; FTG)
18. **Biomanufacturing is a skills story, not a jobs story.** Decision 1002/QD-TTg (May 2025) targets 5,000 biotech graduates a year by 2030 and 8,000 a year to 2035, but MOST names senior process talent as the bottleneck. A 10,000 t a year plant employs 60 to 100 people, so even 500,000 t a year by 2050 means roughly 3,000 to 5,000 direct jobs; the just transition concerns farm incomes, not factory jobs. [VN-direct] Medium (targets), Low (estimate). [projection] and [estimate], 2030 to 2050. (ECF-41, ECF-39; ch09)

---

## Detailed findings

### 1. Cost learning curves (sub-question 1)

**What a learning rate is.** A learning rate of 20% means unit cost falls 20% each time cumulative output doubles (a "progress ratio" of 0.80). It describes the past. Applying it forward assumes the same mechanisms keep working.

#### 1.1 Empirical learning rates in fermentation and analogue industries

| Industry or technology | Learning rate | Period | Metric | Source | Label |
|---|---|---|---|---|---|
| Sugarcane ethanol, Brazil | 19% (processing, as cited); 20% on total cost including cane (progress ratio 0.80) | 1975 to 2005 | Production cost per litre | ECF-01, ECF-02 (citing van den Wall Bake et al. 2009) | [general] Medium |
| Corn ethanol, United States | 13% | 1983 to 2005 | Production cost (industrial processing) | ECF-01 (citing Hettinga et al. 2009, ECF-03) | [general] Medium |
| Sugarcane ethanol, Brazil, absolute decline | 40% cost fall in 10 years (1977 to 1987); 70% in 30 years | 1977 to 2005 | Production cost | ECF-02 | [general] Medium |
| Rapeseed biodiesel, Germany | 3% (progress ratio 0.97) | 1991 to 2004 | Production cost | ECF-02 (citing Berghout 2008) | [general] Low |
| Lignocellulosic ethanol and biomass-to-liquid diesel (ex-ante, bottom-up) | 1% and 2% (progress ratios 0.99 and 0.98) | Forward-looking estimate | Investment cost | ECF-02 | [general] Low; [estimate] |
| Cellulosic ethanol capital cost (US EIA planning assumption) | 10 to 25% | AEO 2022 | Capital cost | ECF-01 | [general] Low (assumption, not observed) |
| 37 chemical products (Lieberman) | Strong, consistent learning tied to cumulative industry output and investment, not calendar time; scale economies "significant but small" by comparison | Post-war to about 1980 | Price | ECF-04 (abstract; rate not read) | [general] Medium |
| Lithium-ion batteries | About 29% (our derivation from production +30% a year and cost minus 12% a year) | 1995 to 2018 | Cost | ECF-05 | [general] Medium |
| Solar PV, wind, batteries | Costs fell "roughly exponentially at a rate near 10% per year" for decades | About 1990 to 2020 | Cost | ECF-05 | [general] High |
| Penicillin (wartime scale-up) | Titre rose from 4 to 900 units per ml (about 225-fold) | 1941 to 1944 | Productivity (not cost) | ECF-06 (citing Neushul 1993) | [general] Medium |
| L-lysine | No published learning rate found; about 3.0 Mt produced in 2022, market value about USD 5.6 billion (implied about USD 1.9 per kg; market-report figure); industrial titres above 1.2 M | 1958 to 2022 | n/a | ECF-07 | [general] Low |
| Fungal cellulase enzymes | Not a learning rate: a bottom-up model found enzyme cost "much higher than that commonly assumed", USD 0.68 per gallon of ethanol at theoretical yields | 2011 | Cost contribution | ECF-08 | [general] High (abstract) |
| Any alternative protein (cultivated, precision, biomass, SCP, plant-based) | **None found.** OpenAlex title/abstract query combining learning-curve terms with alternative-protein terms returns 9 works (2015 to 2026), none an empirical learning rate | n/a | n/a | ECF-09 | [general] Medium |

Full table: `learning_rates.csv`.

**Why process plants learn more slowly than panels and cells.** Two peer-reviewed syntheses explain the spread.
- Malhotra and Schmidt (2020) classify technologies by design complexity and need for customisation. Standardised, mass-produced units (solar modules, LEDs, battery cells) learn fast. Complex, project-built plants (gas-turbine plants, CCS) and customised ones (biomass power) learn slowly, and "global experience rates might be substantially lower than what can be expected from the diffusion in current localized niche markets" (ECF-10) [general] High.
- Wilson et al. (2020) find that "granular" technologies (small, cheap, numerous) show faster learning, lower investment risk and faster diffusion (ECF-11) [general] High.
- **Our reading.** A fermentation plant is a complex, site-built, feedstock-specific process plant. It sits with biomass power and chemical plants, not with solar panels. Learning rates of 5 to 20% (the range of observed and assumed bioprocess values above) are defensible; the 20 to 30% rates of solar and batteries are not. Pitches that borrow solar-style curves for fermented protein should be treated as hype. [general] Medium; [estimate].
- **Mechanism matters.** The biggest historic bioprocess cost falls came from titre, yield and productivity gains (penicillin 225-fold in three years; lysine titres above 1.2 M), not from building more identical plants. For alternative protein, strain and process improvement is the lever that could beat the learning curve; AI may speed that loop (FTB headline 1) but has not yet shown a lower production cost at scale.

#### 1.2 Published alternative-protein cost projections (claims unless peer-reviewed)

We do not repeat the numbers already registered by sibling streams:
- Power-to-protein: Fasihi et al. 2025, EUR 4.0 to 4.5 per kg protein (2030) to 2.1 to 2.3 (2050) at best global sites; FTG estimate for Vietnam USD 6.9 to 12.6 (2030), 4.7 to 8.6 (2040), 3.3 to 6.5 (2050) per kg protein (FTG headlines 6 and 7). Peer-reviewed model and our sibling estimate.
- Precision fermentation: only "envisaged" figures of USD 10 per kg by 2025 and USD 1 per kg by 2035; no peer-reviewed food-protein TEA for 2024 to 2026 (FTB headline 10). Claim.
- Cultivated meat: fall from USD 2.3 million per kg (2013) to about USD 63 per kg in recent estimates (review); no peer-reviewed parity date (FTB section on cultivated). The peer-reviewed low-cost model most cited by advocates (Pasitka et al. 2024) came from Believer Meats, which shut in December 2025 after a USD 154 million plant (FTB-45). Company-authored and now untested at scale.
- Edition 1.0 TEA benchmarks (COST-43 to COST-47) remain the peer-reviewed anchors for mycoprotein, off-gas SCP and cultivated meat.

**What is new here:** no source in any stream gives an *observed* learning rate for an alternative protein. Every forward cost path in circulation is either a bottom-up engineering model (with its own learning assumption) or a claim. [general] Medium.

#### 1.3 Defensible ranges for Vietnam, 2030 to 2050 (our estimate)

We apply learning only to the capital charge and maintenance lines of edition 1.0's Vietnamese fungal feed-protein cost stack (ch09, cost stack A; 10,000 t a year; USD 4,050 to 14,700 per t protein at 2026 prices). Operating inputs (glucose, urea, power, labour, land) are held at 2026 real prices, because commodities do not follow learning curves. Scenarios are defined by the learning rate and the number of doublings of global biomass-fermentation protein capacity after 2025 (a proxy for cumulative output). Arithmetic: `ecf_calc.py`, part A. [VN-direct inputs] Low; [estimate].

| Scenario | Learning rate on capex | Doublings by 2030 / 2040 / 2050 | 2030 | 2040 | 2050 (USD per t protein) |
|---|---|---|---|---|---|
| Slow | 5% | 1 / 3 / 4 | 3,940 to 14,200 | 3,740 to 13,300 | 3,640 to 12,880 |
| Central | 12% | 2 / 4 / 6 | 3,560 to 12,490 | 3,180 to 10,780 | 2,880 to 9,460 |
| Fast | 20% | 3 / 6 / 8 | 2,980 to 9,920 | 2,440 to 7,480 | 2,230 to 6,560 |
| Operating-cost floor (capex at zero) | n/a | n/a | 1,870 to 4,920 | same | same |
| Price to beat: fishmeal protein (2025 to Aug 2026) | | | 2,625 to 3,846 | no official forecast | no official forecast |
| Price to beat: soybean-meal protein (2025 to 2026) | | | about 880 | no official forecast | no official forecast |

Eight doublings means 256 times today's capacity, roughly the upper end of the 10 to 19% share of crop-based feed protein that FTG-32 reports as a 2050 model potential; it is an outer bound, not an expectation.

**Readings.**
- **The operating-cost floor, not learning, decides the soy question.** Even with free capital, the low-cost end is about USD 1,870 per t protein at 2026 input prices, about 2.1 times soybean-meal protein. Glucose (cassava starch) and urea set that floor. Only cheaper carbon (residues such as cassava pulp), higher yields or a carbon price on soy can close it. [VN-direct inputs] Low; [estimate]; 2030 to 2050.
- **Fishmeal parity is reachable at the low-cost end only with fast learning or cheap capital.** The low end reaches the 2025 fishmeal-protein price (USD 2,625) only in the fast case, by about 2040; it is under the August 2026 price (USD 3,846) from 2030 in the central and fast cases and from 2040 in the slow case (slow 2030: USD 3,940). The high end never reaches fishmeal. [estimate]; 2030 to 2050.
- **Cheaper capital does as much as a decade of learning.** Cutting the capital charge from 12% to 9% a year (low end) gives USD 3,610 per t protein with no learning at all, about the central 2030 result. A lower country-risk premium and concessional finance are therefore a first-order lever for Vietnam (see section 3). [VN-direct] Low; [estimate].
- **Our range for planning.** For a Vietnamese fungal or yeast feed protein on cassava glucose: about USD 3,000 to 12,500 per t protein (2030), 2,400 to 10,800 (2040) and 2,200 to 9,500 (2050), spanning the low end of the fast case to the high end of the central case, with the low end requiring cheap capital, residue carbon and a thermotolerant strain. For gas routes, use FTG's ranges. These are estimates, not forecasts.

### 2. Carbon pricing (sub-question 3)

#### 2.1 Vietnam's emissions trading scheme

| Date | Step | Detail | Source |
|---|---|---|---|
| 9 Jun 2025 | Decree 119/2025/ND-CP amends Decree 06/2022 | Pilot carbon market to end-2028; full operation from 2029; offsets up to 30% of quota | REG-59 (edition 1.0) {VN-direct\|High} |
| Early 2026 | Decree 29/2026/ND-CP on the domestic carbon exchange | Exchange at the Hanoi Stock Exchange (HNX) | ECF-12, ECF-13 {VN-direct\|Medium} |
| 9 Feb 2026 (approval date per press) | Decision 263/QD-TTg approves the total pilot quota | 110 facilities: 34 thermal power plants, 25 iron and steel plants, 51 cement plants. Quotas above 243 Mt CO2e (2025) and above 268 Mt CO2e (2026, +10.4%) | ECF-12, ECF-13 {VN-direct\|Medium} |
| 31 Dec 2027 | First compliance deadline | Facilities surrender quota equal to 2025 and 2026 emissions; credits may cover up to 30% of allocated quota | ECF-13 {VN-direct\|Medium} |
| 2026 to 2028 | Pilot trading | Start date reported as Q2 2026 (MAE, April 2026) or "from the end of 2026" (press, February 2026); see disagreements log | ECF-12, ECF-13 {VN-direct\|Medium} |
| From 2029 | Full operation | Scope beyond power, steel and cement not set in any text we read | REG-59; ECF-13 |

- **No price yet.** None of the Vietnamese sources we read states an allowance price, an auction or a price floor. ICAP lists Vietnam with Japan and India as the three national systems launching in 2026 (ECF-14) {VN-direct|Medium}. [signal]; 2026 to 2028.
- **Agriculture and food are outside.** The pilot covers only power, steel and cement, and edition 1.0 found agriculture and food processing outside the mandatory inventory (REG-59). A Vietnamese feed or food plant faces no domestic carbon price before 2029, and none after unless scope is widened. Its only exposures are indirect: the power price (if generators pass through allowance costs) and buyers' own carbon rules. {VN-direct|Medium}; [signal]; 2029.
- **Generous early caps.** A 2026 cap 10.4% above 2025 suggests the pilot is designed for learning, not scarcity, so early prices are likely to be low. This is our inference; no source gives a price expectation. {VN-direct|Low}.

#### 2.2 Regional and reference carbon prices

| Jurisdiction | Instrument | Year | Price (USD per t CO2e) | Type | Source |
|---|---|---|---|---|---|
| EU | EU ETS | 2025 | 83 (auction average EUR 73.43); 84 (secondary, EUR 74.35) | actual | ECF-15 |
| China | National ETS (power; steel, cement, aluminium added 2024 to 2025) | 2025 | 9.85 (CNY 70.78) | actual | ECF-16 |
| Korea | K-ETS | 2025 | 6.99 auction (KRW 9,956); 6.60 secondary | actual | ECF-17 |
| Japan | GX-ETS mandatory phase from 1 Apr 2026 (about 300 to 400 entities above 100,000 t CO2) | FY2027 | Ceiling 28.73 (JPY 4,300); floor 11.36 (JPY 1,700) | target (price limits) | ECF-18 |
| Singapore | Carbon tax | 2024 to 2025; 2026 to 2027; 2030 | S$25; S$45; S$50 to 80 (about USD 19; 34; 38 to 61 at S$1 = USD 0.76, our conversion) | actual and target | ECF-19 |
| Vietnam | World Bank CCDR recommended carbon-tax path | 2030; 2040 | 29; 90 | projection (recommendation) | CLM-18 |
| Global | World Bank "Paris-consistent" corridor | 2030 | 63 to 127 (well below 2 °C); 226 to 385 (1.5 °C) | projection | ECF-20 |

Full table: `carbon_price_paths.csv`. Asian prices in 2025 were USD 7 to 10 per t, about one-eighth of the EU price. {general / VN-adjacent|High}; [trend]; 2025.

**CBAM.** The EU CBAM's definitive stage began in 2026; importers surrender certificates for 2.5% of embedded emissions in goods imported in 2026, rising as free allocation phases out (ECF-15) {general|High}. It covers cement, iron and steel, aluminium, fertilisers, electricity and hydrogen, not food or feed; GEO covers scope and any extension. The CBAM links to this study are **urea** (a CBAM good and a fermentation input) and **hydrogen** (a CBAM good and the feedstock of power-to-protein). [signal]; 2026 to 2034.

#### 2.3 What a carbon price would add per tonne of protein input (our estimate)

The brief asks what USD 25, 50 and 100 per t CO2e would add to soybean meal, fishmeal and a microbial protein. The answer depends almost entirely on how land-use change (LUC) is counted for soy.

| Input | Emission factor (t CO2e per t product) | Basis | Add per t product at USD 25 / 50 / 100 | Add per t protein at USD 25 / 50 / 100 | Source |
|---|---|---|---|---|---|
| Soybean meal, Argentina, no LUC | 0.72 | Attributional LCA, delivered Rotterdam | 18 / 36 / 72 | 39 / 78 / 157 | ECF-21 (Dalgaard et al. 2008, via ECF-22) |
| Soybean meal, Argentina, with LUC (GFLI 2022) | 4.09 | Feed LCA database, country-level LUC | 102 / 204 / 409 | 222 / 445 / 889 | ECF-22 |
| Soybean meal, origin mix (German study dataset) | 4.42 | Includes LUC | 110 / 221 / 442 | 240 / 480 / 961 | ECF-22 |
| Soy, Brazil exports, average 2010 to 2015 | 0.69 (China-bound 0.67; EU-bound 0.77) | Spatially explicit, LUC about one-third; per t soy, applied to meal under mass allocation | 17 / 34 / 69 | 38 / 75 / 150 | ECF-23 |
| Soy, Brazil, Cerrado biome | 1.00 | as above | 25 / 50 / 100 | 54 / 109 / 217 | ECF-23 |
| Soy, Brazil, Matopiba frontier ("up to six times" average) | about 4.1 | as above | 103 / 207 / 414 | 225 / 450 / 900 | ECF-23 |
| Fishmeal, Peru, ex-plant (2019 to 2021) | 0.29 to 0.32 | Energy allocation | 7 to 8 / 14 to 16 / 29 to 32 | 11 to 12 / 22 to 25 / 45 to 49 | ECF-24 |
| Fishmeal, Peru, delivered to China | 0.53 to 0.56 | Ex-plant plus 0.239 shipping | 13 to 14 / 26 to 28 / 53 to 56 | 20 to 22 / 41 to 43 / 82 to 86 | ECF-24 |
| Fungal feed protein on cassava glucose, Vietnam, 2023 grid (0.66 t/MWh) | 2.1 to 5.3 | Our estimate (part C of `ecf_calc.py`) | 52 to 132 / 103 to 263 / 206 to 526 | 94 to 292 / 188 to 585 / 375 to 1,170 | ECF estimate; ECF-25, ECF-26 |
| same, 2030 plan-average grid (about 0.35) | 1.8 to 4.3 | as above | 45 to 108 / 89 to 215 / 178 to 431 | 81 to 239 / 162 to 478 / 325 to 957 | as above; FTG |
| same, 2050 plan-average grid (about 0.02) | 1.5 to 3.3 | as above | 37 to 82 / 74 to 164 / 149 to 328 | 68 to 182 / 135 to 365 / 271 to 729 | as above; FTG |
| Power-to-protein (H2 route), Vietnam, electricity only, 2023 / 2030 / 2050 grid | 29.9 / 15.6 to 18.2 / 0.7 to 0.9 | FTG estimate per t protein x 0.65 | at USD 50: 1,495 / 780 to 910 / 36 to 45 | at USD 50: 2,300 / 1,200 to 1,400 / 55 to 70 | FTG headline 9 |

Protein shares: soybean meal 46%, fishmeal 65%, fungal protein 45 to 55%, e-protein 65%. Full table: `carbon_cost_per_protein.csv`.

**Fungal footprint inputs (our assumptions, stated).** Per t product: 2.0 to 2.2 t glucose-equivalent (ch09) at 0.65 to 1.10 t CO2e per t (cassava starch 0.60 to 0.97 in Thai LCAs plus hydrolysis; ECF-25); 0.17 to 0.20 t urea at 1.0 to 2.5 t CO2e per t (production plus release of the CO2 fixed in urea; assumption); 0.9 to 3.1 MWh (back-calculated from ch09 power lines, including cooling); steam from rice husk counted as biogenic; wastewater with biogas capture. Tran et al. 2015 report 93 to 539 kg CO2e per t of starch for processing alone in Thailand, Vietnam and Colombia (ECF-26). {VN-direct inputs|Low}; [estimate].

**Readings.**
1. **Soy accounting decides everything.** At USD 50 per t, soybean meal protein gains USD 75 to 78 per t protein without LUC but USD 445 to 480 with country-level LUC. That is 9% versus 51 to 55% of the soybean-meal protein price (USD 880). Vietnam imports about 69% of its soybean meal from Argentina (edition 1.0, feed_imports.csv), where the two methods differ five-fold (0.72 vs 4.09). {general|Medium}; [estimate].
2. **A carbon price barely touches fishmeal.** Peruvian fishmeal adds only USD 41 to 43 per t protein at USD 50 delivered to Asia, about 1 to 2% of its price. Carbon pricing will not close the fishmeal gap for novel feed proteins; scarcity and El Niño (CLM headline 13) will. {general|Medium}; [estimate].
3. **A Vietnamese cassava-based microbial protein is not low-carbon by default.** On our estimate it carries 3.8 to 11.7 t CO2e per t protein on today's grid, more than fishmeal (0.8 to 0.9 delivered) and soybean meal without LUC (1.6), and comparable to soybean meal with country-level LUC (8.9 to 9.6). Even on a 2050 near-clean grid it stays at 2.7 to 7.3, because cassava starch and urea carry most of the footprint. A carbon price on embodied emissions would therefore *raise* its cost relative to fishmeal. The climate case needs residue carbon (cassava pulp, molasses), biogas at the starch plant and clean power. {VN-direct inputs|Low}; [estimate]; 2030 to 2050.
4. **Power-to-protein flips from worst to best only with a clean grid.** On the 2023 grid it would add USD 2,300 per t protein at USD 50, close to the whole 2025 fishmeal-protein price it must beat (USD 2,625); on the 2050 plan-average grid only USD 55 to 70 (FTG arithmetic). Dedicated renewables are a precondition (FTG headline 9).
5. **Who would pay the price?** No carbon-pricing instrument in Vietnam, the region or the EU prices the embodied emissions of imported feed. The channels that could are private: buyer scope 3 targets for export seafood and meat, feed-sector carbon labels, and deforestation rules (EUDR, covered by GEO). Treat the table as a shadow price for such buyers, not as a policy cost. {general|Medium}; [signal]; 2030 to 2040.

#### 2.4 Carbon credits and green finance labels for protein

- We found **no approved carbon-credit methodology** under Verra or Gold Standard for substituting animal or imported feed protein with alternative protein (search of methodology listings and trade press, September 2026; ECF-27) {general|Low}. Additionality and baseline (which protein is displaced, at what footprint) are the obstacles; the soy LUC spread above shows why.
- The **Climate Bonds Initiative** launched Alternative Proteins sector criteria after a public consultation from 9 December 2024 to 7 February 2025, assessing energy use, raw-material sourcing and waste against 1.5 °C alignment (ECF-28) {general|Medium}. This is a green bond and loan label, not a credit. It is the more realistic route for a Vietnamese plant to access green debt. [signal]; 2026 to 2030.

### 3. Capital to 2050 (sub-question 2)

#### 3.1 Private capital: a boom, a bust and a rotation

| Indicator | Value | Period | Source | Label |
|---|---|---|---|---|
| Global private investment in alternative protein, cumulative | Over USD 19.5 billion | 2017 to mid-2026 | ECF-44 (GFI with Net Zero Insights) | [general] Medium (advocacy data) |
| Same, annual | USD 881 M (plant-based 450, fermentation 357, cultivated 74) | 2025 | ECF-44; CAP-51 | [general] Medium |
| Same, half-year | USD 359 M; Q2 2026 fermentation 132 of about 198 | H1 2026 | ECF-44 | [general] Medium |
| Cultivated meat and seafood | About USD 1 billion (2021) to USD 74 M (2025) | 2021 to 2025 | FTB headline 8 | [general] Medium |
| Fermentation | USD 632 M (2024) to 357 M (2025); precision share 33% (2023) to 66% (2025) | 2023 to 2025 | FTB headline 8 | [general] Medium |
| Agrifood tech, all | USD 16.2 billion, flat; upstream up 7% | 2025 | CAP-53 | [general] Medium |
| Vietnam agriculture venture capital | USD 1 M (about 0.2% of VC) | 2025 | ch07 (CAP-20, CAP-21) | [VN-direct] Medium |

**Reading.** 2025 private investment was about 4.5% of the 2017 to 2026 cumulative total. The cycle has turned from consumer brands to fermentation and ingredients, and from venture capital to strategic and state money. Distressed Western capacity now sells for cents on the dollar (a USD 15 to 20 million fermentation line sold for USD 75,000 in 2026 and shipped to India; FTB headline 17). {general|Medium}; [trend]; 2021 to 2026. For 2030 to 2050 we can find no published projection of alternative-protein investment that is not an advocacy or consultancy claim; we give none.

#### 3.2 Public capital: rising, concentrated in China, absent in Vietnam

- **Public investment in alternative protein reached at least USD 2.5 billion cumulative (2021 to 2025), up from about USD 0.7 billion (2021); 33 countries are now engaged, against 16 in 2021.** 2025 public spending was "no more than 10%" of the USD 10.1 billion a year that GFI recommends (ECF-43) {general|Medium, advocacy}. [trend]; 2021 to 2025.
- **China dominates:** nearly USD 1 billion announced in 2025 (more than CNY 4 billion through SDIC plus regional funds of CNY 1 to 2 billion each), and a Novel Protein Bio-Manufacturing Innovation Center at Jiangnan University (ECF-43; RGN-43) {VN-adjacent|Medium}. [signal]; 2025.
- **The United States fell back:** federal alternative-protein funding dropped from about USD 115 million (2024) to about USD 11 million (2025) (ECF-43) {general|Medium}. At the same time its National Security Commission on Emerging Biotechnology (April 2025) recommended USD 15 billion for biotechnology and biomanufacturing, and noted the bioeconomy already adds over USD 210 billion to GDP and 640,000 jobs (ECF-42) {general|Medium}. Biomanufacturing is framed as security policy; food gets "limited attention".
- **Asian neighbours are funding named instruments:** Korea a KRW 100 billion (about USD 68 million) food-tech fund planned by 2027 and 38 new research projects; Thailand THB 5 billion (about USD 153 million) for biotechnology workforce upskilling and 500 million baht a year for ten years for synthetic biology (ECF-43; RGN-35); Japan about JPY 1 trillion in FY2022 across its Green Innovation Fund and biomanufacturing projects and a goal of JPY 3 trillion a year of public plus private investment by 2030 (ECF-32) {VN-adjacent|Medium}. [projection: targets]; 2027 to 2030.
- **Vietnam** does not appear in GFI's 2026 public-investment review, and no Vietnamese fund or programme names alternative protein (ch07; ch12) {VN-direct|Medium}. [signal]; 2026.

#### 3.3 Climate and development finance

- **Agrifood systems receive USD 95 billion a year of climate finance (7.2% of the total, 2021/22), against estimated needs of USD 1.1 trillion a year by 2030;** 78% is public (CPI, May 2025; ECF-38) {general|Medium}. Alternative protein is not a tracked category. [trend]; 2030.
- **DFI precedent in Vietnam remains one ticket:** IFC USD 2.5 million into Entobel, with Proparco as a limited partner of the lead fund (ch07; CAP-04, CAP-47) {VN-direct|High}.
- **Carbon credits are not a financing route** (section 2.4). **Green-bond labels are:** the Climate Bonds Initiative's Alternative Proteins criteria (launched 2025) give a Vietnamese plant a path to labelled debt if it can show energy, sourcing and waste alignment (ECF-28) {general|Medium}. [signal]; 2026 to 2030.

#### 3.4 What capital structure fits Vietnam, 2030 to 2050 (our assessment)

1. **Cost of capital is a first-order cost line.** In the edition 1.0 cost stack, cutting the capital charge from 12% to 9% a year does as much as about two doublings of global capacity at a 12% learning rate (section 1.3). Concessional or guaranteed debt is therefore worth more to a Vietnamese plant than most operating subsidies, consistent with the regional finding that capital grants and loan guarantees beat tax holidays (RGN-01). {VN-direct|Low}; [estimate].
2. **The Entobel structure scales, with a climate layer.** Private-equity lead, DFI first ticket, strategic offtake (ch07) plus a green-labelled loan and, where a buyer has a scope 3 target, a shadow carbon premium. {VN-direct|Low}; [estimate]; 2027 to 2035.
3. **Second-hand capacity is a window, not a trend.** Distressed fermentation assets priced at a fraction of replacement cost cut the capital line more than any learning curve before 2030, but the window closes when the cycle turns (FTB headline 17). {general|Medium}; [signal]; 2026 to 2030.
4. **State venture funds are the natural first public investor.** Decree 264/2025 allows loss-tolerant funds; the Ho Chi Minh City (VND 500 billion) and Hanoi (VND 230 billion) funds list biotechnology as a priority (ch07). Naming biomanufacturing and alternative protein in their charters (PO-030) would cost little. {VN-direct|Medium}.

### 4. Bioeconomy strategies with 2030 to 2050 horizons (sub-question 4)

Full register: `bioeconomy_strategies.csv` (24 rows). Vietnam rows are summary only; the full extraction of Vietnam's 2030 to 2050 targets is in the NTS stream.

| Country | Instrument (year) | Horizon | Targets relevant to protein or biomanufacturing | Money | Source |
|---|---|---|---|---|---|
| Vietnam | Resolution 36-NQ/TW on biotechnology (2023) | 2030; 2045 | Biotech industry 7% of GDP and replace at least 50% of imported biotech products (2030); 10 to 15% of GDP (2045); no protein target | None earmarked | REG-51 {VN-direct\|High} |
| Vietnam | MOIT Decision 1355/QD-BCT, bio-industry scheme (5 Jun 2026) | 2030; 2045 | Biotech products replace at least 20% of imports and 30 to 50% of scheme products commercialised (2030); replace 30 to 50% of comparable imports (2045); food, feed and fermentation not named in the text read | Not stated | ECF-40 {VN-direct\|Medium} |
| Vietnam | Resolution 57-NQ/TW (2024) | 2030; 2045 | R&D 2% of GDP; at least 3% of state budget to S&T; sandbox mechanisms | Budget share | REG-50 {VN-direct\|High} |
| Vietnam | Decision 1002/QD-TTg, high-tech workforce scheme (24 May 2025) | 2030; 2035; 2045 | 5,000 biotech and biology graduates a year by 2030; 8,000 a year in 2030 to 2035 | State budget, institutions, enterprises | ECF-41 {VN-direct\|Medium} |
| Vietnam | National AI Strategy, Decision 1671/QD-TTg (28 Aug 2026); biotech strategy 2026 to 2030 in drafting | 2030 | AI in breeding, livestock, aquaculture; draft names bioinformatics and AI | n/a | FTB headline 6 {VN-direct\|Medium} |
| Thailand | BCG Economy Model (2021); Biotechnology Industry Development Framework 2026 to 2035 (Nov 2025); synthetic biology strategy (2026) | 2027; 2035 | "Future food and alternative proteins" one of four target sub-industries; public precision-fermentation pilot plant; CDMO network | 500 M baht a year for 10 years (synthetic biology); THB 5 billion workforce | ECF-45; RGN-35; FTB-43; ECF-43 {VN-adjacent\|Medium} |
| China | 15th Five-Year Plan (2026 to 2030): biomanufacturing a "future industry"; MIIT dedicated biomanufacturing plan to follow; 2021 feed plan names SCP; No. 1 Document 2025 "diversified food supply" | 2030; 2035 | Scale-up of biomanufacturing; single-cell protein to cut soybean meal in feed | About USD 1 billion public alt-protein (2025); about RMB 30 billion a year biomanufacturing investment (press) | ECF-29; ECF-30; ECF-43; RGN-56 {VN-adjacent\|Medium} |
| India | BioE3 policy (Cabinet, 24 Aug 2024) | 2030; 2050 | Bioeconomy USD 165.7 billion (2024) to USD 300 billion (2030); "smart proteins" a named area; 21 BioEnabler facilities; government document cites USD 1.4 to 2.7 trillion by 2050 | Not stated in document read | ECF-31 {general\|Medium} |
| Japan | Bioeconomy Strategy (3 Jun 2024) | 2030 | JPY 100 trillion bioeconomy market; biomanufacturing and bio-derived products JPY 53.3 trillion; research on cell-based food, precision fermentation, algae | About JPY 1 trillion (FY2022 projects); JPY 3 trillion a year public plus private by 2030 | ECF-32 {VN-adjacent\|Medium} |
| Korea | Synthetic Biology Promotion Act (passed 2 Apr 2025; in force 2026); Food Tech Industry Promotion Act (Dec 2025); National Bio Committee (Jan 2025) | 2027; 2035 | National biofoundry; five-year plans; biotech output USD 43 billion (2020) to 149 billion (2035) (press) | KRW 100 billion food-tech fund by 2027 | ECF-33; ECF-34; ECF-43 {VN-adjacent\|Medium} |
| Singapore | RIE2030 (Dec 2025); Singapore Food Story 2 (Nov 2025) | 2030; 2035 | Biomanufacturing hub; 2035 food targets exclude alternative protein | S$37 billion (2026 to 2030, about 1% of GDP) | ECF-37; RGN-08 {VN-adjacent\|Medium} |
| Malaysia | National Biotechnology Policy 2.0 | 2030 | Names cultivated meat and fish; halal ruling Dec 2025 | Not verified | RGN-19 {VN-adjacent\|Low} |
| EU | Biotech Act I (proposed 16 Dec 2025); Biotech Act II (industrial biotech) in preparation; Bioeconomy Strategy update (2025) | 2030 | Regulatory sandboxes under the General Food Law, but novel foods excluded (Art. 56(7)) | Over EUR 100 M in loans and EUR 50 M EIC (alt protein, 2025) | ECF-35; ECF-36; ECF-43 {general\|Medium} |
| United States | NSCEB final report (Apr 2025) | 2030 | USD 15 billion recommended for biotech and biomanufacturing; food "limited attention" | Federal alt-protein funding about USD 11 M (2025) | ECF-42; ECF-43 {general\|Medium} |
| ASEAN | No bioeconomy or alternative-protein framework found (ASEAN site search and known URLs failed) | n/a | Edition 1.0 option PO-014: co-lead ASEAN work on novel-food reliance | n/a | Gap |

**Readings.**
- **Every neighbour now has a named, funded biotech or biomanufacturing instrument with a 2030 to 2035 horizon; Vietnam has targets without money or a protein line.** Resolution 36's 2030 goal (biotech at 7% of GDP) is ambitious, but no budget line, programme owner or protein mention followed; MOIT's June 2026 scheme set a lower import-substitution target (20%) than Resolution 36 (50%). {VN-direct|Medium}; [signal]; 2030.
- **Food is the orphan of bioeconomy strategies.** Singapore excludes alternative protein from its 2035 food targets, the EU excludes novel foods from its biotech sandboxes, the US commission gave agriculture "limited attention", and India, Japan and Thailand mention food proteins as one line among many. Biomanufacturing money goes to pharma, chemicals and materials first. {general|Medium}; [trend]; 2025 to 2030.
- **Horizons stop at 2030 to 2035.** Only India (a 2050 figure cited in a government document) and Vietnam (2045 vision) reach further; nobody has a funded 2050 biomanufacturing plan. Any 2040 to 2050 regional picture is ours, not theirs.

### 5. The regional race to 2050 (sub-question 5)

| Competitor | Where it aims to be, 2030 to 2035 (stated) | Likely 2040 to 2050 role (our judgement) | What it means for Vietnam |
|---|---|---|---|
| China | Biomanufacturing a "future industry"; SCP to cut soybean meal; claimed more than 70% of world bio-fermentation output (press, ECF-30) | Price-setter for microbial protein, amino acids and fermentation CDMO; largest buyer of fermentable carbohydrate | Vietnam's starch buyer and its toughest competitor; Vietnamese feed protein must beat landed Chinese product (ch08, ch09) |
| Thailand | Future food and alternative proteins a target sub-industry to 2035; public PF pilot plant; CDMO network; approval route | ASEAN's regulated contract-manufacturing hub for food-grade fermentation | The direct rival for foreign fermenters seeking an ASEAN base; cheaper sugar, earlier rules |
| Singapore | Regulator, financier, R&D (S$37 billion RIE2030); not a production base | Reference regulator and headquarters for ASEAN novel foods | A partner: Singapore approvals and capital, Vietnamese manufacturing |
| Korea | Synthetic-biology law and national biofoundry (2026); food-tech law; cultivated-meat centre (2027) | Technology and biofoundry exporter; conglomerate buyer (CJ, Daesang already run fermentation in Vietnam) | Source of strains, capital and offtake; biofoundry access |
| Japan | JPY 100 trillion bioeconomy by 2030; biomanufacturing JPY 53.3 trillion | Premium buyer of seafood and specialty ingredients; Ajinomoto with Solar Foods | Buyer of cultivated seafood cells and specialty proteins (2040s) |
| India | USD 300 billion bioeconomy by 2030; smart proteins; imports distressed US capacity | Low-cost fermentation competitor at scale | Competes for relocated capacity and DFI money |
| Malaysia, Indonesia | Malaysia NBP 2.0 names cultivated meat; halal ruling; Indonesia cheap, no rules | Halal-market production nodes | Halal certification matters for Vietnamese exports |

Sources: section 4 table; ch08; FTB; FTG {VN-adjacent|Medium}; [projection: targets] and [estimate].

**Where Vietnam could specialise (our assessment, not a forecast).** {VN-direct|Low}; [estimate]; 2030 to 2050.
1. **Fermentation sugar from cassava, for itself and the region.** Vietnam exports about 2 Mt of cassava starch a year but almost no glucose (ch08). Keeping the starch-to-glucose step at home builds on an asset that, among the competitors in the table, only Thailand matches (China imports much of its cassava starch). It pays under every technology path to 2040, because every sugar-based fermenter needs it.
2. **Aquafeed functional ingredients tied to shrimp and pangasius.** Vietnam's seafood exporters are the buyers most exposed to importers' scope 3 and deforestation rules, and the domestic market where novel feed proteins price closest to parity (ch09). A low-carbon claim requires residue carbon and clean power (section 2.3).
3. **Tolling and contract manufacturing on existing industrial tanks,** first feed grade, then food grade once a novel-food route exists. The existing MSG, lysine and yeast plants of Ajinomoto, Vedan, Daesang and others are the base (ch03, ch08).
4. **Cultivated seafood cell lines from Vietnamese species (2040s),** as a research specialisation serving Singapore and Japan (FTB headline 19).
5. **Not a sensible bet:** commodity precision-fermented dairy proteins (Chinese and US scale), cultivated-meat manufacturing, or bulk power-to-protein before about 2040 (FTG headline 18).

### 6. Jobs and skills (sub-question 6)

- **Vietnam has a numeric biotech training target for the first time.** Decision 1002/QD-TTg (24 May 2025) sets 5,000 biotechnology and biology graduates a year by 2030 and 8,000 a year in 2030 to 2035, alongside 80,000 then 100,000 IT and 8,000 then 15,000 AI graduates a year; STEM learners 35% (2030) then 40% (ECF-41) {VN-direct|Medium}. [projection: target]; 2030, 2035. Our reading: it follows the semiconductor-scheme model of training quotas.
- **The binding shortage is senior process talent, not graduates.** MOST (April 2026) names the lack of "tổng công trình sư" (chief engineers able to lead), costly training equipment, the gap between academic training and industrial-scale production, and scarce biotech plus AI skills (ECF-39) {VN-direct|Medium}. The Hawkwood study scores Vietnam 26 of 100 on talent (779 researchers per million; RGN-01). [signal]; 2026.
- **Biomanufacturing is not a mass employer.** Edition 1.0's 10,000 t a year fungal-protein plant needs 60 to 100 staff, that is 6 to 10 direct jobs per 1,000 t (ch09). Even 500,000 t a year of Vietnamese microbial protein by 2050 (an ambitious scenario) would mean roughly 3,000 to 5,000 direct plant jobs (our estimate). Livestock and aquaculture employ millions of households (GEO covers numbers). The just-transition question is therefore about farm incomes and feedstock (cassava growers, by-product suppliers), not about factory jobs. {VN-direct|Low}; [estimate]; 2050.
- **Comparators.** The US bioeconomy supports more than 640,000 jobs (ECF-42); Korea's third five-year bio plan targets 150,000 "high-quality jobs" by 2027, mainly in health (ECF-34, press); India's BioE3 document states no jobs target (ECF-31). {general|Medium}.
- **Skills that matter for 2030 to 2050 protein supply (our assessment):** fermentation process engineers with scale-up experience, downstream processing, food and feed regulatory science, techno-economic and life-cycle analysis, and bioinformatics with wet-lab automation (FTB). Decision 1002's graduate numbers help only if some are trained in pilot plants, which Vietnam lacks (ch08). {VN-direct|Low}.

---

## Signposts

| Signpost | What it would tell a reader | Where to watch | Threshold that matters |
|---|---|---|---|
| First traded price on Vietnam's carbon exchange | Whether the pilot creates a real price signal | HNX; MAE Department of Climate Change | Above about USD 10 per t CO2e for a sustained period |
| Decision on ETS scope from 2029 | Whether food processing, chemicals or indirect power emissions enter | MAE; revision of Decree 06/2022 | Any agri-food or fermentation sector named |
| Allowance cost passed into industrial power tariffs | Whether power-heavy fermentation pays for carbon indirectly | MOIT and EVN tariff decisions | Tariff line or adjustment citing carbon cost |
| Updated grid emission factors | Whether Vietnamese fermentation becomes lower-carbon | MAE annual publication | Below 0.5 t CO2 per MWh |
| Buyer rules on feed footprints | Whether a shadow carbon price on soy or fishmeal reaches Vietnamese feed mills | Seafood importers' scope 3 requirements; certification schemes | A top importer of Vietnamese shrimp or pangasius requires feed carbon data |
| LUC method choice in feed LCA databases | Whether soy's footprint is counted at 0.7 or 4 t CO2e per t | GFLI, FEFAC, EU Product Environmental Footprint | Harmonised method adopted by major buyers |
| First approved protein-substitution credit methodology | Whether credits become a financing route | Verra, Gold Standard pipelines | One approved method with a feed baseline |
| Disclosed first-of-a-kind capex for microbial protein plants | Whether real capex tracks the learning paths | Company filings (Solar Foods, Unibio, Chinese yeast and mycoprotein makers) | Below USD 10,000 per annual t for feed-grade biomass |
| Global biomass-fermentation protein capacity doubling | Speed of learning | GFI industry reports; company announcements | Twice 2025 capacity by 2030 |
| Vietnam cost of capital | Size of the capital lever | Sovereign ratings; bank lending rates for industry | Investment-grade rating; industrial loans below 8% |
| Vietnam public money names alternative protein or biomanufacturing | State moving from targets to funding | Biotech strategy 2026 to 2030 (MOST); city venture fund charters; national venture fund | A budget line or fund priority naming fermentation or protein |
| Thailand public precision-fermentation pilot plant operating | Regional contract-manufacturing race is on | NXPO, BIOTEC, EECi | Commissioning announced |
| China MIIT biomanufacturing plan issued | Scale and price pressure from China | MIIT | Numeric targets for fermentation protein or feed |
| Decision 1002 biotech enrolments | Whether the talent pipeline is filling | MOET statistics | 5,000 biotech graduates a year by 2030 |

## Implications by audience

- **Investors.** Underwrite fermentation protein with a 5 to 20% learning rate on capex only; treat solar-style cost curves as hype. The soy gap does not close through learning; only fishmeal-linked and functional feed uses clear the operating-cost floor. Cheap capital (concessional debt, guarantees) moves the numbers as much as a decade of learning. Do not assume carbon pricing helps a cassava-based product: on today's grid it does the opposite against fishmeal.
- **Policy makers.** Vietnam's bioeconomy targets (Resolution 36; MOIT Decision 1355) are among the region's most ambitious and least funded; a funded line for pilot capacity and naming protein in the 2026 to 2030 biotech strategy would align targets with money. Keep agriculture outside the ETS but publish grid factors yearly and consider how allowance costs pass through to industrial power. Decision 1002's biotech graduate targets need pilot-plant training attached.
- **Startups.** Design for residue carbon, biogas and clean power from day one if a low-carbon claim is part of the pitch; otherwise the footprint will be worse than fishmeal. Green-labelled debt (Climate Bonds criteria) is a more realistic route than carbon credits.
- **F&B and feed manufacturers.** A carbon price on soy would matter only if buyers adopt country-level LUC accounting; track which method your export customers use. Fishmeal's footprint is small, so carbon is not a reason to leave it; scarcity is.
- **Research bodies.** Three cheap public goods: a Vietnamese life-cycle inventory for cassava starch, glucose and fermentation (the only VN-direct study is from 2015), an open cost model with learning and WACC switches, and a plant-level training curriculum for the Decision 1002 cohort.
- **International bodies.** Concessional capital and guarantees are the highest-leverage support for a first Vietnamese plant; a harmonised feed-footprint method (LUC) for Asian buyers is a fundable regional public good.

## Disagreements log

| Topic | Claim A | Claim B | Our position |
|---|---|---|---|
| Start of trading on Vietnam's carbon exchange | Q2 2026 at HNX (MAE news, April 2026; ECF-13) | Pilot trading "from the end of 2026" to 2028 (press, February 2026; ECF-12) | Pilot trading falls in 2026 to 2028; exact start not confirmed. Check HNX notices. |
| Soybean-meal footprint | 0.69 to 1.00 t CO2e per t (Brazil, spatially explicit, LUC included; ECF-23); 0.72 (Argentina, no LUC; ECF-21) | 4.09 (Argentina, GFLI country-level LUC) and 4.42 (German dataset) (ECF-22) | Not averaged. Method choice (attribution of LUC) drives a five-fold spread. We report both bounds; Argentina has little recent forest loss, so the GFLI figure mainly reflects the method. |
| Biotech import substitution by 2030 | Replace at least 50% of imported biotech products (Resolution 36; REG-51) | Replace at least 20% of imports (MOIT Decision 1355/QD-BCT; ECF-40) | Different scope (party target vs one ministry's scheme). Flag to NTS; the lower figure is the operational one for MOIT's sector. |
| Learning rate for new bioprocess plants | 10 to 25% on capital (US EIA planning assumption; ECF-01) | 1 to 2% (bottom-up ex-ante estimates; ECF-02); cellulosic ethanol never reached commercial scale | We use 5 to 20%, anchored on observed ethanol rates, and hold operating costs flat. |
| Fishmeal footprint | 0.32 t CO2e per t ex-plant (energy allocation, 2019 to 2021; ECF-24) | Higher values in older or mass-allocated LCAs (not read) | We use the 2025 study, the most recent and Peru-specific; allocation sensitivity is a gap. |
| Carbon prices from World Bank 2024 figure | Figure read by a summary tool: EU about USD 95, Korea about 30 | ICAP 2025 averages: EU 83 to 84, Korea 6.6 to 7.0 (ECF-15; ECF-17) | We discard the figure reads and use ICAP. |
| Li-ion learning rate | About 29% (our derivation from Way et al. rates; ECF-05) | Commonly cited lower values (not read this wave) | Presented as our derivation only; not used in any calculation. |
| China's share of world fermentation output | "Over 70%" (press; ECF-30) | No official statistic read | Treated as a claim. |

## Open questions and gaps (cheapest way to close)

1. **Vietnam ETS prices and the 2029 scope.** No price, auction design or post-2028 scope found. Cheapest: HNX market notices and MAE Department of Climate Change briefings; ICAP's Vietnam factsheet.
2. **Vietnam-specific footprints for cassava starch and glucose.** The only VN-direct LCA (Tran et al. 2015) was closed access; we used Thai values via a secondary source. Cheapest: request the paper from its CIRAD authors or buy it; ask Vietnamese starch plants with biogas for plant data.
3. **Soybean-meal footprint by Argentine origin under different LUC methods.** Cheapest: GFLI database (requires registration, which we could not do) or FEFAC's published defaults.
4. **Global biomass-fermentation protein capacity baseline (tonnes a year).** Needed to anchor doublings. Cheapest: GFI 2026 fermentation State of the Industry capacity section; company announcements.
5. **Observed first-of-a-kind capex for microbial protein.** Cheapest: annual reports of Solar Foods and Unibio; Chinese exchange filings for yeast and mycoprotein plants.
6. **Long-run (2040 to 2050) carbon prices for Southeast Asia.** IEA WEO annex tables and the IMF price-floor figures were not reachable. Cheapest: WEO 2025 Annex A download; NGFS Phase V scenario explorer.
7. **ASEAN-level bioeconomy or novel-food framework.** None found. Cheapest: ASEAN Secretariat (ASEAN COST and SOM-AMAF) documents list.
8. **Thailand BCG numeric targets and US executive-branch biomanufacturing policy after 2025.** Cheapest: NXPO BCG action plan; White House OSTP pages.
9. **Vietnam biotech workforce baseline.** Decision 1002 gives flows, not stocks. Cheapest: MOET enrolment statistics; VAST and university reports.
10. **Allocation and system boundaries for the fungal footprint.** Our estimate uses stated assumptions (urea factor, power use). Cheapest: a short LCA with a Vietnamese yeast or MSG plant's utility data.

## Leads

- Hansupalak et al. 2016 (doi:10.1016/j.jclepro.2015.06.138) on biogas cutting cassava-starch footprints: basis for a residue-and-biogas scenario.
- Garofalo et al. 2022 (doi:10.1016/j.jclepro.2022.132549) and Trase municipal data: soy LUC by municipality, traceable to shipments bound for Vietnam.
- RAND R-2569-DOE (Merrow et al. 1981) on cost growth in pioneer process plants: calibrate a first-of-a-kind overrun for Vietnamese plants (abstract read only).
- Duke Nicholas Institute report on offset potential for cultured milk protein (blocked this wave).
- Climate Bonds Initiative Alternative Proteins criteria PDF: numeric thresholds.
- GFI APAC note that Korea overtook Singapore as the region's cultivated-meat startup hub (headline only).
- MOST's draft biotechnology strategy 2026 to 2030: check for a fermentation or protein line before approval.
- Ma et al. 2026 (doi:10.1007/s44246-025-00256-y): methane-oxidising bacteria vs soybean meal and fishmeal LCA with TEA (abstract only).

**Stopping note.** The learning-rate thread returned mostly closed-access primary papers; further gains need full texts. Strategy searches reached diminishing returns once each country's headline instrument was found.

## Sources

Edition 1.0 and sibling IDs used: REG-50, REG-51, REG-52, REG-53, REG-59, RGN-01, RGN-08, RGN-09, RGN-19, RGN-20, RGN-21, RGN-22, RGN-35, RGN-43, RGN-56, CAP-04, CAP-20, CAP-21, CAP-47, CAP-51, CAP-53, COST-08, COST-43 to COST-47, FM-01, GT-11; FTG-01, FTG-32 and FTG headlines; FTB-17, FTB-24, FTB-38, FTB-43, FTB-45, FTB-48 to FTB-51 and FTB headlines; CLM-18. Scite and publisher access links returned by tools are not reproduced.

- **ECF-01.** Vasilakou K., Nimmegeers P., Thomassen G., Billen P., Van Passel S. "Assessing the future of second-generation bioethanol by 2030: a techno-economic assessment integrating technology learning curves." Applied Energy 344 (2023) 121263. doi:10.1016/j.apenergy.2023.121263. Accessed 2026-09-24 (full-text excerpts via Scite). Learning rates for US corn (13%) and Brazil sugarcane (19%) ethanol as cited; EIA 10 to 25% assumption. Peer-reviewed.
- **ECF-02.** Chen X., Khanna M., Yeh S. "Stimulating learning-by-doing in advanced biofuels: effectiveness of alternative policies." Environmental Research Letters 7 (2012) 045907. doi:10.1088/1748-9326/7/4/045907. Accessed 2026-09-24 (full-text excerpts). Sugarcane ethanol progress ratio 0.80; 40% and 70% cost falls; ex-ante 0.99 and 0.98; rapeseed biodiesel 0.97. Peer-reviewed.
- **ECF-03.** Hettinga W. et al. "Understanding the reductions in US corn ethanol production costs: an experience curve approach." Energy Policy 37(1) (2009) 190 to 203. doi:10.1016/j.enpol.2008.08.002. Accessed 2026-09-24 (metadata only). Primary source for corn ethanol rate. Peer-reviewed.
- **ECF-04.** Lieberman M.B. "The learning curve and pricing in the chemical processing industries." RAND Journal of Economics (1984). doi:10.2307/2555676. Accessed 2026-09-24 (abstract). 37 chemical products; learning tied to cumulative output and investment. Peer-reviewed.
- **ECF-05.** Way R., Ives M.C., Mealy P., Farmer J.D. "Empirically grounded technology forecasts and the energy transition." Joule 6(9) (2022) 2057 to 2082. doi:10.1016/j.joule.2022.08.009. Accessed 2026-09-24 (abstract and excerpts). Near 10% a year cost declines; Li-ion production +30% and cost minus 12% a year, 1995 to 2018. Peer-reviewed.
- **ECF-06.** Sampat B.N. "Intellectual property rights and pharmaceuticals: the case of antibiotics." SSRN (2023). doi:10.2139/ssrn.4434179. Accessed 2026-09-24 (excerpts). Penicillin titre 4 to 900 units per ml, 1941 to 1944 (citing Neushul 1993). Working paper.
- **ECF-07.** Malla S. et al. "A novel efficient L-lysine exporter identified by functional metagenomics." Frontiers in Microbiology 13 (2022) 855736. doi:10.3389/fmicb.2022.855736. Accessed 2026-09-24 (excerpts). Lysine about 3.0 Mt and USD 5.6 billion (2022, market report cited); titres above 1.2 M. Peer-reviewed (market figure secondary).
- **ECF-08.** Klein-Marcuschamer D., Oleskowicz-Popiel P., Simmons B.A., Blanch H.W. "The challenge of enzyme cost in the production of lignocellulosic biofuels." Biotechnology and Bioengineering (2012). doi:10.1002/bit.24370. Accessed 2026-09-24 (abstract). Enzyme cost higher than assumed. Peer-reviewed.
- **ECF-09.** OpenAlex query by ECF, run 2026-09-24: works where title/abstract has (("learning curve" or "learning rate" or "experience curve" or "learning-by-doing") and ("cultivated meat" or "cultured meat" or "cell-based meat" or "precision fermentation" or "single cell protein" or "single-cell protein" or "microbial protein" or "mycoprotein" or "alternative protein" or "meat analogue" or "plant-based meat")) and year >= 2015. 9 results, none an empirical learning rate. Bibliometric query.
- **ECF-10.** Malhotra A., Schmidt T.S. "Accelerating low-carbon innovation." Joule 4(11) (2020) 2259 to 2267. doi:10.1016/j.joule.2020.09.004. Accessed 2026-09-24 (excerpts). Complexity and customisation slow learning. Peer-reviewed.
- **ECF-11.** Wilson C., Grubler A., Bento N. et al. "Granular technologies to accelerate decarbonization." Science 368 (2020) 36 to 39. doi:10.1126/science.aaz8060. Accessed 2026-09-24 (abstract). Granular technologies learn faster. Peer-reviewed.
- **ECF-12.** Người Quan Sát. "Thị trường tín chỉ carbon lộ diện, doanh nghiệp phát thải lớn đứng trước 'bài toán chi phí mới'." 10 Feb 2026. https://nguoiquansat.vn/thi-truong-tin-chi-carbon-lo-dien-doanh-nghiep-phat-thai-lon-dung-truoc-bai-toan-chi-phi-moi-273699.html. Accessed 2026-09-24. Quota approval 9 Feb 2026; 110 facilities; 243 and 268 Mt; pilot trading end-2026 to 2028. Press.
- **ECF-13.** Ministry of Agriculture and Environment (MAE). News item on carbon market readiness, 10 Apr 2026. https://mae.gov.vn/SMPT_Publishing_UC/KhaiThac/TinTuc/pInTinTuc.aspx?ItemID=21376 . Accessed 2026-09-24. Decree 29/2026/ND-CP; Decision 263/QD-TTg; offsets up to 30%; surrender by 31 Dec 2027; trading at HNX expected Q2 2026. Government.
- **ECF-14.** ICAP. "Emissions Trading Worldwide: ICAP Status Report 2026." April 2026. https://icapcarbonaction.com/en/publications/emissions-trading-worldwide-icap-status-report-2026 . Accessed 2026-09-24. 41 ETSs, 26% of emissions; Japan, India, Vietnam launching 2026. Research organisation.
- **ECF-15.** ICAP. "EU Emissions Trading System (EU ETS)" factsheet. https://icapcarbonaction.com/en/ets/eu-emissions-trading-system-eu-ets . Accessed 2026-09-24. 2025 average prices; ETS2 delay; CBAM definitive stage 2026. Research organisation.
- **ECF-16.** ICAP. "China National ETS" factsheet. https://icapcarbonaction.com/en/ets/china-national-ets . Accessed 2026-09-24. 2025 average CNY 70.78; sector expansion; absolute-cap roadmap. Research organisation.
- **ECF-17.** ICAP. "Korea Emissions Trading System (K-ETS)" factsheet. https://icapcarbonaction.com/en/ets/korea-emissions-trading-system-k-ets . Accessed 2026-09-24. 2025 prices; phase 4 auctioning. Research organisation.
- **ECF-18.** ICAP. "Japan transitions its GX-ETS to the mandatory phase." 2026. https://icapcarbonaction.com/en/news/japan-transitions-its-gx-ets-mandatory-phase . Accessed 2026-09-24. Start 1 Apr 2026; FY2027 ceiling and floor. Research organisation.
- **ECF-19.** National Climate Change Secretariat, Singapore. "Carbon Tax." https://www.nccs.gov.sg/singapores-climate-action/mitigation-efforts/carbontax/ . Accessed 2026-09-24. S$5, S$25, S$45, S$50 to 80 by 2030; 5% credit limit. Government.
- **ECF-20.** World Bank. "State and Trends of Carbon Pricing 2024" (openknowledge bitstream) and "State and Trends of Carbon Pricing 2026" landing page. https://openknowledge.worldbank.org/server/api/core/bitstreams/d14ff4b1-823f-4d70-927c-456449772089/content ; https://www.worldbank.org/en/publication/state-and-trends-of-carbon-pricing . Accessed 2026-09-24. 2030 corridors USD 63 to 127 and 226 to 385; 2026 coverage nearly 30%; revenue over USD 107 billion (2025). Multilateral.
- **ECF-21.** Dalgaard R. et al. "LCA of soybean meal." International Journal of Life Cycle Assessment 13 (2008). doi:10.1065/lca2007.06.342. Value 0.721 kg CO2e per kg (Argentina, no LUC) as cited in ECF-22; not read directly. Peer-reviewed.
- **ECF-22.** Wilke V., Gickel J., Visscher C. "Monitoring of performance-based environmental impacts of substituting soybean meal with rapeseed meal in the rye-based diet of weaned pigs." Sustainability 15(3) (2023) 2210. doi:10.3390/su15032210. Accessed 2026-09-24 (full-text excerpts). SBM 4.42 kg CO2e per kg; GFLI 2022 Argentina 4.087; Dalgaard 0.721. Peer-reviewed.
- **ECF-23.** Escobar N., Tizado E.J., zu Ermgassen E.K.H.J., Löfgren P., Börner J., Godar J. "Spatially-explicit footprints of agricultural commodities: mapping carbon emissions embodied in Brazil's soy exports." Global Environmental Change 62 (2020) 102067. doi:10.1016/j.gloenvcha.2020.102067. Accessed 2026-09-24 (publisher page). 0.69 t per t average; China 0.67, EU 0.77; Cerrado 1.00; Matopiba up to six times. Peer-reviewed.
- **ECF-24.** Deville A., Vázquez-Rowe I., Avadí A., Miranda F., Kahhat R.F. "Identifying current trends in the environmental impacts linked to fishmeal and fish oil production in Peru." Aquaculture 600 (2025) 742239. doi:10.1016/j.aquaculture.2025.742239. Accessed 2026-09-24 (publisher page). About 320 kg CO2e per t fishmeal; 239 kg transport to China. Peer-reviewed.
- **ECF-25.** Lansche J., Awiszus S., Latif S., Müller J. "Potential of biogas production from processing residues to reduce environmental impacts from cassava starch and crisp production: a case study from Malaysia." Applied Sciences 10(8) (2020) 2975. doi:10.3390/app10082975. Accessed 2026-09-24 (excerpts). Cites Thai cassava starch at about 600 and 609 to 966 kg CO2e per t. Peer-reviewed.
- **ECF-26.** Tran T. et al. "A comparison of energy use, water use and carbon footprint of cassava starch production in Thailand, Vietnam and Colombia." Resources, Conservation and Recycling 100 (2015) 31 to 40. doi:10.1016/j.resconrec.2015.04.007. 93 to 539 kg CO2e per t starch, processing only, as cited in ECF-25; paper closed access. Peer-reviewed.
- **ECF-27.** WebSearch of carbon-credit methodologies for protein substitution (Verra, Gold Standard, trade press), 2026-09-24; Verra home page https://verra.org/ . No approved methodology found. Search record.
- **ECF-28.** Climate Bonds Initiative. "Alternative Proteins" sector criteria page. https://www.climatebonds.net/our-expertise/climate-bonds-standard-and-certification-scheme/sector-criteria/alternative-proteins . Accessed 2026-09-24. Consultation 9 Dec 2024 to 7 Feb 2025; launched. Standard-setter.
- **ECF-29.** Gov.cn. "China to nurture emerging, future industries." 5 Mar 2026. https://english.www.gov.cn/2026special/2026npcandcpcc/202603/05/content_WS69a8eea9c6d00ca5f9a09891.html . Accessed 2026-09-24. Biomanufacturing a future industry in the 15th Five-Year Plan period. Government.
- **ECF-30.** China Briefing (Dezan Shira). "China's biomanufacturing industry: growth drivers and opportunities." 2 Jan 2026. https://www.china-briefing.com/news/chinas-biomanufacturing-industry-opportunities/ . Accessed 2026-09-24. MIIT dedicated plan; RMB 1.1 trillion market; over 70% of world fermentation output (claim); RMB 30 billion a year investment. Consultancy/press.
- **ECF-31.** Press Information Bureau, Government of India (Ministry of Science and Technology). "India: A Global Bioeconomy Powerhouse." 5 Sep 2025. https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc202595628601.pdf . Accessed 2026-09-24. USD 165.7 bn (2024), USD 300 bn (2030), smart proteins, 21 BioEnablers. Government.
- **ECF-32.** Cabinet Office, Japan. "Bioeconomy Strategy." 3 Jun 2024. https://www8.cao.go.jp/cstp/english/bio/bio_economy_en.pdf . Accessed 2026-09-24. JPY 100 trillion; biomanufacturing JPY 53.3 trillion; JPY 3 trillion a year investment by 2030. Government.
- **ECF-33.** Korea Biomedical Review. "Korea passes world's 1st synthetic bio law." 3 Apr 2025. https://www.koreabiomed.com/news/articleView.html?idxno=27162 . Accessed 2026-09-24. Vote 2 Apr 2025; one-year grace; biofoundries. Press.
- **ECF-34.** BioSpectrum Asia. "The rise of K-biotech." 1 May 2025. https://www.biospectrumasia.com/analysis/26/25968/the-rise-of-k-biotech.html . Accessed 2026-09-24. Biotech output USD 43 bn to 149 bn (2035); 150,000 jobs by 2027. Press.
- **ECF-35.** EuropaBio and partners. "Joint statement on regulatory sandboxes under the Biotech Act I and the exclusion of novel foods." 30 Mar 2026. https://www.europabio.org/joint-statement-on-regulatory-sandboxes-under-the-biotech-act-i-and-the-exclusion-of-novel-foods/ . Accessed 2026-09-24. Proposal 16 Dec 2025; Art. 56(7) excludes novel foods. Industry association.
- **ECF-36.** AGRINFO. "Biotech Act: strengthening the biotechnology sector." https://agrinfo.eu/book-of-reports/biotech-act-strengthening-the-biotechnology-sector/ . Accessed 2026-09-24. COM(2025)1022; Biotech Act II in preparation. EU-funded information platform.
- **ECF-37.** Singapore Economic Development Board. "Singapore invests S$37 billion in RIE2030 research plan." December 2025. https://www.edb.gov.sg/en/business-insights/insights/singapore-invests-s37-billion-in-rie2030-research-plan-semiconductors-ageing-among-focus-areas.html . Accessed 2026-09-24. Government agency.
- **ECF-38.** Climate Policy Initiative. "New data reveals global agrifood systems receive only 7% of total climate investment." 14 May 2025. https://www.climatepolicyinitiative.org/press-release/new-data-reveals-global-agrifood-systems-receive-only-7-of-total-climate-investment/ . Accessed 2026-09-24. USD 95 bn (2021/22); USD 1.1 trillion a year needed by 2030. Research organisation.
- **ECF-39.** Ministry of Science and Technology (MOST) portal. "Phát triển công nghệ sinh học: Bài toán nhân lực từ 'điểm nghẽn' đến động lực đột phá." 6 Apr 2026. https://mst.gov.vn/phat-trien-cong-nghe-sinh-hoc-bai-toan-nhan-luc-tu-diem-nghen-den-dong-luc-dot-pha-197260406145346873.htm . Accessed 2026-09-24. Biotech workforce bottlenecks. Government.
- **ECF-40.** Báo Công Thương. "Phê duyệt Đề án phát triển công nghiệp sinh học thành ngành kinh tế - kỹ thuật." 10 Jun 2026. https://congthuong.vn/phe-duyet-de-an-phat-trien-cong-nghiep-sinh-hoc-thanh-nganh-kinh-te-ky-thuat-460716.html . Accessed 2026-09-24. Decision 1355/QD-BCT (5 Jun 2026) targets. Ministry newspaper.
- **ECF-41.** Quyết định 1002/QĐ-TTg năm 2025 phê duyệt Đề án đào tạo nguồn nhân lực phục vụ phát triển công nghệ cao giai đoạn 2025 đến 2035, định hướng đến năm 2045. Prime Minister, 24 May 2025. https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Quyet-dinh-1002-QD-TTg-2025-De-an-dao-tao-nguon-nhan-luc-phuc-vu-phat-trien-cong-nghe-cao-658181.aspx . Accessed 2026-09-24 (found via thuvienphapluat site search). Biotech graduate targets. Law.
- **ECF-42.** Federation of American Scientists. "Translating vision into action: the NSCEB final report and the future of US biotechnology." 2025. https://fas.org/publication/translating-vision-into-action-nsceb-final-report/ . Accessed 2026-09-24. USD 15 billion recommendation; USD 210 billion GDP and 640,000 jobs; agriculture limited attention. Think tank.
- **ECF-43.** Good Food Institute. "2026 State of Global Policy: public investment in protein diversification." April 2026. https://gfi-apac.org/wp-content/uploads/2026/04/GFI25009_SO_Policy_report.pdf . Accessed 2026-09-24. Public investment by country; USD 2.5 bn cumulative; China, US, Korea, Thailand figures. Advocacy.
- **ECF-44.** Good Food Institute. "Alternative protein investment" data page (Net Zero Insights data). Updated August 2026. https://gfi.org/investment/ . Accessed 2026-09-24. 2025 and H1 2026 totals; over USD 19.5 bn since 2017. Advocacy (data).
- **ECF-45.** BCG Economy Model (Thailand). "Background." https://www.bcg.in.th/eng/background/ . Accessed 2026-09-24. Four strategic sectors; no numeric targets on page. Government programme site.
- **ECF-46.** RAND Corporation. Merrow E.W., Phillips K.E., Myers C.W. "Understanding cost growth and performance shortfalls in pioneer process plants." R-2569-DOE, 1981. https://www.rand.org/pubs/reports/R2569.html . Accessed 2026-09-24 (abstract only). Lead for first-of-a-kind overruns. Research report.
