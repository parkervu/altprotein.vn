---
id: ch21-frontier-technology
title: "Frontier technology: which windows open for Vietnam, and when"
short_title: "Frontier technology"
section: report
part: "IV. Futures: 2035 and 2050"
order: 21
summary: "The frontier technologies that could reshape protein supply by 2050 all work in the laboratory, but none has yet shown the cost fall that solar power did. For Vietnam the windows open in sequence, from AI-assisted feed enzymes and single-cell feed protein now to 2030, to bulk protein from power not before about 2040 to 2045."
audiences: [investors, startups, research, policy, manufacturers, international]
reading_time_min: 12
key_numbers: [kn-p2p-cost-vn-2050, kn-learning-rate-fermentation, kn-fungal-protein-floor, kn-p2p-energy-per-mt, kn-vn-gas-protein-papers]
related_data: [frontier_gas_tech.csv, frontier_bio_tech.csv, learning_rates.csv, feedstock_futures.csv, ai_biodesign_evidence.csv, approvals_trend.csv, biblio_trends_frontier.csv, frontier_windows.csv]
related_pages: [ch09-economics, ch10-technology-fit, app-f3-frontier-tech, app-f6-aquafeed-feedstock-futures, ch23-scenarios-2050]
charts: [chart-frontier-windows, chart-cost-paths-2050]
---

# 21. Frontier technology: which windows open for Vietnam, and when

**In one paragraph.** Every frontier route to protein we reviewed works technically, and none is yet cheap. Protein from hydrogen and CO2 runs at 160 to 230 t a year in Finland, while Asia's largest gas-fermentation feed plant halted in 2026. AI shortens the research loop but has not yet lowered a factory's cost. Fermentation industries have historically cut costs by 13 to 20% each time output doubled, far slower than solar panels. We found no observed learning rate for any alternative protein. On our estimates, protein from renewable power made in Vietnam could reach the price of fishmeal protein around 2050 at best, and soybean-meal protein in no year to 2050. Vietnam's windows therefore open in sequence and mostly after 2030. What Vietnam can do now is prepare the inputs that every route needs: residue carbon, clean power at a fixed site, cheap capital, skilled process staff and a legal route for each product.

> **Method note.** Cost paths here are bottom-up estimates, not observed trends. Global figures come from published techno-economic models; Vietnamese figures are our calculations with Vietnamese input prices, shown in [[app-f3-frontier-tech]]. Every window below is an *estimate* with its conditions stated.

---

## 21.1 The frontier map in 2026

| Route | Where the world is (2026) | Cost evidence | Vietnam today | Sources |
|---|---|---|---|---|
| Protein from hydrogen and CO2 (power-to-protein) | Largest plant 160 to 230 t a year (Finland); first commercial plant (3,200 t a year) planned for late 2028, investment decision pending {fx:signal} | EUR 4.0 to 4.5 per kg of protein in 2030 and 2.1 to 2.3 in 2050 at the world's best sites {fx:projection} (Fasihi et al. model) | 2 of 494 papers worldwide (2016 to 2026) have a Vietnamese author | [@FTG-01; @FTG-03; @FTG-05; @FTG-14] {general\|High} |
| Methane and steel-gas protein | Calysseo's 20,000 t a year plant in China halted in 2026; China's steel-gas protein made 10,200 t in 2023 as an ethanol by-product, below plan {fx:signal} | Gas alone at Vietnam's 2026 LNG price costs about as much as soybean-meal protein | No project | [@FTG-06; @FTG-08; @FTG-09; @FTG-31] {VN-adjacent\|Medium} |
| Biomass fermentation on sugar (yeast, fungal, bacterial) | Commercial in China (Angel Yeast 11,000 t a year, 2025); PEKILO-type processes revived on side streams {fx:signal} | Floor set by glucose and urea, not by capital (section 21.2) | Thai Duong Feed made yeast protein under a 2016 to 2019 national project; current status unknown | [@HSC-14; @NGF-17; @HSC-06; @HSC-07] {VN-direct\|Medium} |
| Precision fermentation | US "no questions" letters for several animal proteins in 2025, including one for a Chinese firm {fx:signal} | Works today for high-value proteins (lactoferrin at USD 750 to 1,500 per kg); no published evidence of commodity cost parity | 2 indexed papers, 2015 to 2025 | [@FTB-18; @FTB-19; @FTB-23; @FTB-41; @HSC-01] {general\|Medium} |
| AI-assisted bio-design | From 38% fewer to 30 times fewer experiments to optimise media and strains; an autonomous biofoundry raised a feed phytase's activity 26-fold in four weeks (2025) {fx:trend} | No study shows lower production cost at scale | Top-40 AI compute; no biofoundry | [@FTB-02; @FTB-04; @FTB-06; @FTB-11; @FTB-16] {general\|High} |
| Cellulosic (second-generation) sugar | Every Western commercial cellulosic ethanol plant has shut; India's rice-straw plant reached 62% of design capacity in December 2025 {fx:trend} | Mature-plant models give USD 342 to 467 per t of sugar; first plants cost USD 2,100 to 2,400 per t of annual capacity | No pilot | [@NGF-33; @NGF-34; @NGF-10; @NGF-11; @NGF-06; @NGF-07] {general\|Medium} |
| Cultivated meat and seafood | Largest run 20,000 L; Believer Meats shut in December 2025 after FDA clearance; firms fell from 155 to 142 {fx:trend} | 1% of world meat would need about 30 times the 2021 culture capacity | First livestock stem-cell characterisation (2025 to 2026) | [@FTB-24; @FTB-45; @FTB-26; @HSC-01] {general\|Medium} |
| Molecular farming | US clearances for crops making animal proteins (2024); no completed FDA food review found | About 50 to 300 kg of target protein per hectare (our estimate) | None | [@FTB-28; @FTB-31] {general\|Low} |
| Cell-free synthesis | A design tool | About USD 2.8 per mg, 5 to 6 orders of magnitude above food protein (more for PURE systems) | None | [@FTB-35; @FTB-36] {general\|Medium} |
| Algal and oilseed omega-3 | Commercial; omega-3 canola oil replaced all fish oil in low-fishmeal shrimp diets {fx:trend} | Priced against fish oil | Buyer only | [@AQF-19; @AQF-23; @AQF-24] {general\|Medium} |

Full registers: `frontier_gas_tech.csv`, `frontier_bio_tech.csv`, `feedstock_futures.csv`; detail in [[app-f3-frontier-tech]].

## 21.2 How fast will costs fall?

**No one has measured it.** Every forward cost path for alternative protein is an engineering model or a company claim; an OpenAlex search for learning-curve studies of alternative protein returned 9 works (2015 to 2026), none of them empirical [@ECF-09] {general|Medium}.

**The best analogues are fermentation industries, not solar.** US corn ethanol cut costs 13% per doubling of output (1983 to 2005) and Brazilian cane ethanol 19 to 20% (1975 to 2005); site-built process plants learn more slowly than mass-produced panels and cells [@ECF-01; @ECF-02; @ECF-05; @ECF-10; @ECF-11] {general|Medium}. For 2030 to 2050 we judge a 5 to 20% learning rate on capital cost defensible; solar-style curves for fermented protein are not {fx:estimate}.

{{kn:kn-learning-rate-fermentation}}

**Learning cannot close the soybean gap on the sugar route.** Even with free capital, a Vietnamese fungal feed protein made on cassava glucose costs at least about USD 1,870 per t of protein at 2026 input prices, 2.1 times soybean-meal protein (USD 880), because glucose and urea set the floor (our calculation) {VN-direct|Low} {fx:estimate}. Our planning range for that product (fast-case low end to central-case high end) is about USD 3,000 to 12,500 per t of protein in 2030, 2,400 to 10,800 in 2040 and 2,200 to 9,500 in 2050 {fx:estimate}. The low end falls below the August 2026 fishmeal-protein price (USD 3,846) from 2030 in the central and fast-learning cases, but reaches the 2025 average (USD 2,625) only with fast learning, around 2040 {VN-direct|Low} {fx:estimate}.

{{kn:kn-fungal-protein-floor}}

**Cheap capital does as much as the learning expected by 2030.** Cutting the capital charge from 12% to 9% a year, with no learning at all, lowers the low-end cost to about USD 3,610 per t of protein, close to the central learning case in 2030 (USD 3,557, after two doublings of output) (our calculation) {VN-direct|Low} {fx:estimate}. Concessional debt and guarantees are therefore first-order levers ([[ch28-robust-moves]]).

**Protein from power costs more in Vietnam than at the world's best sites.** Our indicative estimate for hydrogen-route protein made in Vietnam is USD 6.9 to 12.6 per kg in 2030, 4.7 to 8.6 in 2040 and 3.3 to 6.5 in 2050, against fishmeal protein at USD 2.6 to 3.8 and soybean-meal protein at about 0.88 per kg (2025 to 2026 prices) (our calculation from [@FTG-01; @FTG-19]) {VN-direct|Low} {fx:estimate}. Each USD 1 per kg of hydrogen adds about USD 690 per t of protein. Vietnamese solar is cheaper than Europe's but not best-in-class, and capital costs 2 to 4 points more than the 7% used in the global model [@FTG-19] {VN-direct|Medium}.

{{chart:chart-cost-paths-2050}}

{{kn:kn-p2p-cost-vn-2050}}

## 21.3 Protein from power in Vietnam

**It is an electricity business.** A plant built to 2030 designs uses about 69 MWh of electricity, 0.69 t of hydrogen and 2.95 t of CO2 per t of protein; electrolysers take over half the power [@FTG-01] {general|High} {fx:projection}. Scaled to Vietnam:
- **Energy volume fits the plans.** One million tonnes of protein a year would need 64 to 83 TWh (4 to 6% of planned 2050 supply), 43 to 56 GW of solar or 14 to 22 GW of offshore wind, and 0.69 Mt of hydrogen (3.5 to 6.9% of the 2050 hydrogen target) (our calculation from [@FTG-01; @FTG-15; @FTG-16]) {VN-direct|Low} {fx:estimate}.
- **Energy carbon does not, yet.** At Vietnam's 2023 grid factor, electricity alone gives about 46 t CO2 per t of protein; at the grid intensity implied by the power plan it falls to about 24 to 28 t in 2030 and 1.1 to 1.4 t in 2050, if the plan's power-sector cap is met (our calculation) {VN-direct|Low} {fx:estimate}. Dedicated renewable power is a precondition.
- **CO2 is not the bottleneck; free, pure CO2 is scarce.** 100 kt of protein needs about 0.30 Mt of CO2 a year, more than Vietnam's three operating ethanol plants release (our estimate from [@FS-09]) {VN-direct|Low} {fx:estimate}. Steel-mill gas is larger but dilute, and already burned for power [@FTG-20] {VN-direct|Medium}.
- **Failures come from capital intensity, not biology.** NovoNutrients closed and Arkeon became insolvent in 2025; survivors have state or strategic backing [@FTG-07; @FTG-10; @FTG-11] {general|Medium} {fx:trend}.

{{kn:kn-p2p-energy-per-mt}}

> **Speculative.** Our judgement is that bulk feed protein from renewable power opens in Vietnam not before about 2040 to 2045, and only if five conditions align: delivered green hydrogen at or below about USD 1.5 to 2 per kg; firmed renewable power at or below about USD 30 to 45 per MWh; capital costs near the 2050 learning path with financing at or below about 8%; a sustained fishmeal-protein price above about USD 3,000 per t, or a carbon price on competing protein; and a feed-list entry for bacterial biomass {VN-direct|Low} {fx:estimate}. Earlier and narrower windows: formulating imported, already-approved protein-from-air food ingredients from about 2028 if a new-food route exists, or a by-product line if a steel-gas ethanol or aviation-fuel project is built.

## 21.4 Biology, AI and the pull of Chinese scale

- **AI speeds the research loop, not the factory.** An independent review (June 2026) found AI adoption in cultivated meat "far below the ceiling" and named open data as the binding constraint [@FTB-01] {general|High}. The nearest result for Vietnam is an AI-improved feed phytase (2025), a product Vietnam already expresses; applying such tools here is a 2026 to 2030 opportunity [@FTB-06] {general|Medium} {fx:signal}.
- **Compute is no longer Vietnam's constraint; wet-lab automation, data and people are.** The AI Law (in force 1 March 2026) enables a national AI computing centre; the national AI strategy (Decision 1671/QD-TTg, August 2026) targets 10,000 advanced AI experts by 2030 and names AI in breeding, livestock and aquaculture, but neither mentions fermentation or biofoundries [@FTB-13; @FTB-48] {VN-direct|Medium} {fx:projection} (official target).
- **Money has moved to precision fermentation.** Fermentation funding fell from USD 632 million (2024) to USD 357 million (2025), while precision fermentation's share rose from 33% to 66% (2023 to 2025) [@FTB-17] {general|Medium} {fx:trend}.
- **First-generation patents lapse in the mid-2030s.** Core families behind heme analogues and animal-free dairy were filed in 2013 to 2016, so the earliest expire around 2033 to 2036 [@FTB-21] {general|Low} {fx:estimate}. That lowers the entry cost for contract manufacturers.
- **Distressed Western capacity is moving to Asia.** Meati's fermentation assets, valued at USD 15 to 20 million, sold for USD 75,000 in 2026 and are going to India [@FTB-38] {general|Medium} {fx:signal}. Cheap second-hand tanks are a real window for feed-protein ventures in 2027 to 2030.
- **China sets the price.** A plant that costs USD 100 million in the US costs about USD 15 million in China; Cabio and Nourish hold about 170,000 t of finished-product capacity [@HSC-13; @HSC-14] {VN-adjacent|Medium}. Any Vietnamese plant must beat the landed price of a Chinese product.
- **Cultivated meat's constraint is money and scale, not approval.** A probabilistic expert panel gave a 54% chance that world output stays below 100,000 t a year through 2051 [@HSC-18] {general|Medium} {fx:projection}; only 9 of 84 resolved timeline predictions made before 2021 were right [@HSC-19] {general|Medium}. Hybrids "may reach foodservice price points first within the decade", that is by about 2035 [@FTB-44] {general|Medium} {fx:projection}.

## 21.5 Carbon beyond cassava

Sugar-route fermentation at the scale of chapter 22's alternative-protein scenario (S-ALT) would need 1.32 Mt of glucose in 2050, equal to about half of Vietnam's 2025 cassava roots ([[ch22-protein-balance-2050]]). The alternatives:
- **Rice straw is plentiful.** Vietnam makes about 52 Mt a year (our 2025 estimate; a 2021 study on 2019 data gives about 54 Mt); covering the 2050 need would take 3.0 to 4.3 Mt, 6 to 10% of projected 2050 straw (41.6 to 48.8 Mt) (our calculation from [@NGF-01; @NGF-04; @NGF-05]) {VN-direct|Low} {fx:estimate}. The 1 million ha low-emission rice programme must collect 100% of its straw by 2030 [@NTS-32] {VN-direct|Medium} {fx:projection} (official target).
- **The technology, not the biomass, is the constraint.** India's Panipat straw plant made next to nothing in its first year [@NGF-10; @NGF-11] {VN-adjacent|Medium}. Covering the whole 2050 need with cellulosic sugar would take USD 2.8 to 4.5 billion of first-of-a-kind plants (our calculation) {VN-direct|Low} {fx:estimate}.
- **One-carbon routes are limited by cost, not volume.** Methanol-fed yeast protein was at pilot scale in China in 2023, a route for the 2040s here [@NGF-13] {VN-adjacent|Medium} {fx:signal}; e-methanol in Vietnam would reach cassava-glucose parity only with hydrogen at USD 1.5 to 2 per kg (our calculation from [@NGF-12]) {VN-direct|Low} {fx:estimate}.
- **Rules cap waste-derived feed.** EU feed law bans material from wastewater treatment and household waste; export seafood chains that follow EU-style rules would reject protein grown on such streams [@NGF-14; @NGF-30] {general|Medium}.
- **Residue carbon is not low-carbon by default.** One Indian bagasse-sugar study gives 1.57 kg CO2e per kg of sugar, above Thai cassava starch [@NGF-08; @ECF-25] {general|Low}. A cassava-based microbial protein made in Vietnam emits 3.8 to 11.7 t CO2e per t of protein on the 2023 grid, above fishmeal and soybean meal without land-use change (our calculation) {VN-direct|Low} {fx:estimate}.

Three cases for 2050, from no cellulosic breakthrough (residues cover 5 to 11% of the need) to cellulosic and one-carbon routes at scale (more than twice the need), are in [[app-f6-aquafeed-feedstock-futures]].

## 21.6 The research pipeline

Frontier fields are growing far faster than science as a whole: precision-fermentation papers rose from 9 (2020) to 188 (2025) [@HSC-01] {general|Medium} {fx:trend}. Vietnam's alternative-protein research intensity is about a quarter to a third of Thailand's, depending on the database [@HSC-01; @BIB-01] {VN-direct|Medium}. Indexed Vietnamese work, 2015 to 2025, includes no mycoprotein or molecular-farming papers, 1 on cultivated meat and 2 on precision fermentation [@HSC-01] {VN-direct|Medium}. The 2025 to 2026 wave is mostly domestic food-technology work, a shift away from aquafeed trials with Australian partners {fx:signal}. Vietnam's protein-design base (46 papers, 2019 to 2026) is small but growing fast [@FTB-10] {VN-direct|Medium} {fx:trend}.

{{kn:kn-vn-gas-protein-papers}}

## 21.7 When the windows open

| Window (our estimate) | Route | Condition that opens it |
|---|---|---|
| Now to 2030 | AI-assisted design of feed enzymes and yeast media | Shared wet-lab and data access |
| 2027 to 2030 | Single-cell feed protein on sugar and side streams, possibly in second-hand tanks | A feed-list entry and one anchor buyer ([[ch26-plays]] T2, T3) |
| From about 2028 | Formulating imported, approved novel food ingredients | A new-food route in the Food Safety Law |
| 2030 to 2035 | Contract precision fermentation of high-value proteins; food mycoprotein | New-food route; open pilot plant; mid-2030s patent expiries |
| Now to 2035 | Algal and oilseed omega-3 in aquafeed (as buyer) | Fish-oil price and aquafeed specifications |
| 2035 or later | Contained molecular farming | Biosafety route under Decree 43/2026 |
| 2040s | Cellulosic and one-carbon sugar at modest scale | A working straw-sugar plant in Asia; hydrogen at USD 1.5 to 2 per kg |
| 2040s | Cultivated seafood cells from Vietnamese species | Cell lines and media costs from abroad |
| 2040 to 2045 at the earliest | Bulk feed protein from renewable power | The five conditions in 16.3 |
| Not before 2050 | Cell-free synthesis for food | A cost fall of several orders of magnitude {fx:wildcard} |

All rows: {VN-direct|Low} {fx:estimate}, from [@FTG-01; @FTB-21; @FTB-38; @NGF-11; @AQF-22] and the stream analyses in [[app-f3-frontier-tech]].

{{chart:chart-frontier-windows}}

## 21.8 What this means

- **Investors:** the cost curves are engineering estimates, not observed trends. Price feed-protein deals against fishmeal, not soybean meal, and treat cheaper capital as worth as much as the learning expected by 2030.
- **Policy makers:** the frontier needs four inputs Vietnam can provide without picking winners: residue carbon, clean power at named sites, concessional capital and a legal route for each product.
- **Startups:** the near windows are functional feed ingredients, AI-assisted enzymes and tolling on existing tanks. Protein from power is a 2040s option.
- **Manufacturers:** aquafeed omega-3 alternatives are commercial now and are the frontier product most likely to reach Vietnamese feed mills first.
- **Research bodies:** Vietnam is nearly absent from gas fermentation, mycoprotein and molecular farming. Process know-how on local feedstocks, strains and species is the realistic route to 2040.

**Related:** [[app-f3-frontier-tech]] (full evidence and calculations), [[ch10-technology-fit]] (the technology screen), [[ch23-scenarios-2050]].
