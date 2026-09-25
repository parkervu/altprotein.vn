---
id: ch22-protein-balance-2050
title: "The protein balance to 2050: how much feed protein Vietnam will need"
short_title: "Protein balance 2050"
section: report
part: "IV. Futures: 2035 and 2050"
order: 22
summary: "On trend diets and trend efficiency, our reproducible model puts Vietnam's soybean-meal need at about 10.4 Mt in 2050, up from 7.2 Mt in 2025 and nearly all imported. Better feed conversion and lower soybean-meal inclusion cut 2050 imports about twice as much as a large alternative-protein build-out."
audiences: [policy, investors, manufacturers, research, international, startups]
reading_time_min: 12
key_numbers: [kn-sbm-need-2050, kn-sbm-range-2050, kn-land-abroad-feed, kn-efficiency-vs-alt, kn-salt-plants-2050, kn-omega3-need-2050, kn-feed-target-livestock-2030]
related_data: [balance_outputs.csv, balance_assumptions.csv, balance_sensitivity.csv, balance_published_projections.csv, aquaculture_projections.csv, marine_ingredients_2050.csv, protein_crops_vn.csv, protein_strategies_benchmark.csv]
related_pages: [ch19-outlook-2035, ch30-unknowns, app-f4-balance-model, app-f6-aquafeed-feedstock-futures, ch24-vision-2050, app-s6-feed-market, ch18-demand-sizing]
charts: [chart-sbm-scenarios-2050, chart-sbm-tornado]
---

# 22. The protein balance to 2050: how much feed protein Vietnam will need

**In one paragraph.** No one has published a projection of Vietnamese meat, feed or feed-protein demand beyond 2035, and official targets stop at 2030. We therefore built a simple, reproducible balance model (`tools/balance_model.py`) that reproduces the published outlooks to 2035 within about 2% and extends them to 2050 under four scenarios. On trend diets and trend efficiency, soybean-meal need rises 44%, from 7.2 Mt in 2025 to about 10.4 Mt in 2050, almost all imported. The range across scenarios is 7.0 to 11.7 Mt. Two findings shape Part IV. First, feed conversion and formulation move the 2050 result more than diets do, and a plausible efficiency programme cuts imports about twice as much as a large alternative-protein build-out; the two add up rather than compete. Second, the alternative-protein scenario, modest as it looks, implies about 78 times Entobel's current Vietnamese capacity by 2050, a level no country has come close to.

> **Read with care.** Part III tested the food side of S-ALT against demand evidence. No market has shown modern plant-based or fermented products displacing a measurable share of meat; the best retail share anywhere is 3 to 4% of pre-packaged meat after a decade, with little displacement. Our demand routes displace about 0.2% of meat protein by 2035 on a benchmark path and 0.7% on a stretch path, against 3% in S-ALT. Read S-ALT's food shares as an exploratory what-if, not a demand path; existing chay days already avoid a similar share of meat protein and are part of the baseline ([[ch18-demand-sizing]]).

> **Method note.** Every 2040 and 2050 value in this chapter is our estimate {VN-direct|Low} {fx:estimate}. The model is calibrated on 2025 data and published projections to 2035; it treats demand as a macro input, as agreed for this study, and makes no market-size forecast. Assumptions, equations, checks and the full sensitivity test: [[app-f4-balance-model]].

---

## 22.1 What published numbers exist

| Series | 2025 | 2030 | 2035 | Beyond 2035 | Type | Sources |
|---|---|---|---|---|---|---|
| Industrial livestock feed, Mt | about 22 | 30 to 32 | none | none | Official target | [@NTS-23; @REG-54] {VN-direct\|Medium} |
| Meat output, Mt | about 6.0 | 6.0 to 6.5 | none | none | Official target | [@MAC-23; @REG-54] {VN-direct\|High} |
| Aquaculture, Mt | 5.7 (OECD-FAO base) | 7.0 target; 6.12 OECD-FAO | 6.83 OECD-FAO | qualitative 2045 vision | Target and projection | [@NTS-08; @AQF-02] {VN-direct\|Medium} |
| Protein-meal feed use, Mt | 9.5 | 11.1 | 12.9 | none | Projection (OECD-FAO baseline) | [@QNT-01] {VN-direct\|Medium} |
| Protein-meal imports, Mt | 7.4 | 8.6 | 10.3 | none | Projection (OECD-FAO baseline) | [@QNT-01] {VN-direct\|Medium} |
| Maize imports, Mt | 12.0 | 14.0 | 16.6 | none | Projection (OECD-FAO baseline) | [@QNT-01] {VN-direct\|Medium} |
| Fishmeal feed use, kt | 221 | 309 | 339 | none | Projection (OECD-FAO baseline) | [@QNT-01] {VN-direct\|Medium} |

All forward values: {fx:projection}. We found no FAO, IFPRI, GLOBIOM or peer-reviewed projection for Vietnamese meat, feed or feed protein to 2050 [@QNT-01; @QNT-02; @QNT-15] {VN-direct|High}.

> **Correction.** An earlier draft left open whether the 2030 target of 30 to 32 Mt of industrial feed includes aquafeed ([[ch30-unknowns]], OQ-127). The feed scheme (Decision 1625/QD-TTg, December 2023), which the earlier draft did not cite, sets 24 to 25 Mt of industrial *livestock* feed for 2025 and 30 to 32 Mt for 2030, so the target appears to cover livestock feed only [@NTS-23] {VN-direct|Medium}. Our model gives 26.4 Mt of livestock and poultry feed in 2030. On that reading the 2030 target looks out of reach, and the 2025 target looks likely to have been missed (about 21.5 Mt in 2024) [@MAC-28] {VN-direct|Medium} {fx:estimate}.

{{kn:kn-feed-target-livestock-2030}}

## 22.2 Four scenarios

| Scenario | Diets | Aquaculture | Feed efficiency and formulation | Alternative protein |
|---|---|---|---|---|
| **S-BASE** (trend) | OECD-FAO growth to 2035, then tapering: 66.5 kg of meat per person (2025) to 87.6 kg (2050) | OECD-FAO growth to 2035, then +1% a year: 8.5 Mt in 2050 | Feed conversion improves 0.4% a year (livestock) and 0.3% (aquaculture); soybean-meal inclusion constant | None |
| **S-HIGH** (official growth path) | Incomes follow the power plan's 10% then 7.5% a year: 101 kg of meat per person by 2050 | Official 7.0 Mt by 2030, 9.0 Mt by 2050 | As S-BASE | None |
| **S-EFF** (efficiency) | As S-BASE | As S-BASE | Feed conversion improves 1.0% and 0.8% a year; soybean-meal inclusion falls 1% a year (amino acids, low-protein diets, by-products) | None |
| **S-ALT** (alternative protein) | As S-BASE, with 1% (2030), 5% (2040) and 10% (2050) of meat demand replaced by plant-based and fermented foods | As S-BASE | As S-BASE | Microbial protein replaces 1%, 5% and 10% of soybean-meal protein and 10%, 25% and 40% of fishmeal protein (2030, 2040, 2050) |

The S-ALT shares are illustrative what-if levels, not targets. The fishmeal shares sit within what feeding trials support; the soybean-meal share implies large cost falls or policy support ([[ch09-economics]]). {VN-direct|Low}

## 22.3 Results

**Soybean-meal import need, Mt** {VN-direct|Low} {fx:estimate}

| Scenario | 2025 | 2030 | 2035 | 2040 | 2050 | 2050 against 2025 |
|---|---|---|---|---|---|---|
| S-BASE | 7.20 | 8.46 | 9.47 | 9.95 | 10.40 | +44% |
| S-HIGH | 7.20 | 8.98 | 10.11 | 10.92 | 11.72 | +63% |
| S-EFF | 7.20 | 7.81 | 8.08 | 7.85 | 7.00 | minus 3% |
| S-ALT | 7.20 | 8.32 | 9.01 | 9.15 | 8.78 | +22% |

{{chart:chart-sbm-scenarios-2050}}

**Other results, 2050** {VN-direct|Low} {fx:estimate}

| Indicator | 2025 | S-BASE 2050 | Range across scenarios, 2050 |
|---|---|---|---|
| Compound feed, Mt | 28.5 | 40.9 (livestock and poultry 31.6; aquafeed 9.2) | 35.4 (S-EFF) to 46.2 (S-HIGH) |
| Maize import need, Mt | 11.9 | 13.8 | 11.6 (S-EFF) to 16.3 (S-HIGH) |
| Fishmeal demand, kt | 262 | 253 | about 151 (S-EFF, S-ALT) to 267 (S-HIGH) |
| Farmland abroad for imported soy and maize, million ha | 4.0 | 4.7 | 3.4 (S-EFF) to 5.4 (S-HIGH) |
| Meat production, Mt carcass weight | 6.0 | 8.5 | 7.7 (S-ALT) to 9.9 (S-HIGH) |

{{kn:kn-sbm-need-2050}} {{kn:kn-sbm-range-2050}} {{kn:kn-land-abroad-feed}}

**Readings.**
- **The near term checks out.** Interpolated 2027 values (30.5 Mt of feed; 7.7 Mt of soybean meal) match USDA's forecasts (30.6 and 7.8 Mt), and protein-meal use is within about 2% of OECD-FAO for 2030 and 2035 (+2.3% and minus 2.2%) [@MAC-01; @MAC-04; @QNT-01] {VN-direct|Medium}.
- **Vietnam already farms about 4 million hectares abroad for feed**, about five times its own maize area, rising to 4.7 million by 2050 on trend (our calculation) {VN-direct|Low} {fx:estimate}.
- **Maize imports depend more on domestic output and fuel use than on diets.** If E10 ethanol shifted to maize and non-feed use reached the OECD-FAO 2035 level, 2050 imports would rise by 2.8 Mt {VN-direct|Low} {fx:estimate}.
- **Demand is already steep.** OECD-FAO puts Vietnamese pig, poultry and beef food use at 61.9 kg per person in 2035, above Korea (59.2 kg) and China (48.5 kg) in the same outlook [@QNT-01] {VN-direct|Medium} {fx:projection}. Our taper after 2035 is a judgement; S-HIGH is a stress case, not a central view.
- **Fishmeal starts from a different base and diverges.** Our 2025 figure (262 kt) is above OECD-FAO's apparent feed use (221 kt) because it includes snakehead, marine fish and livestock uses; by 2035 the two diverge further (274 against 339 kt) because our inclusion rates fall 1.5% a year while OECD-FAO's use rises. We report both and keep ours ([[app-r2-disagreements]]) {VN-direct|Low} {fx:estimate}.

## 22.4 What moves the 2050 result

{{chart:chart-sbm-tornado}}

Varying one assumption at a time around S-BASE (10.4 Mt in 2050):
- **Formulation and efficiency dominate.** The soybean-meal inclusion trend (minus 1% to plus 0.5% a year) swings 2050 imports by 3.7 Mt; the rate of feed-conversion gains (0 to 1% a year) by 2.4 Mt {VN-direct|Low} {fx:estimate}.
- **Demand assumptions matter less.** Aquaculture growth after 2035, poultry demand per person, meat self-sufficiency and population each move the result by about 0.8 to 1.1 Mt; pork demand and pig feed assumptions by less.
- **The two largest levers are also the least observed.** We found no Vietnamese time series of average soybean-meal inclusion or feed conversion by species. Measuring them is the first job of a protein statistic ([[ch28-robust-moves]]).

**Efficiency does twice the work of alternative protein at the shares tested.** S-EFF cuts 2050 soybean-meal need by 3.4 Mt against S-BASE; S-ALT cuts it by 1.6 Mt (16%). The two are additive, not rivals {VN-direct|Low} {fx:estimate}. A combined case was not modelled, so we give no number for it.

{{kn:kn-efficiency-vs-alt}}

## 22.5 What an alternative-protein build-out would take

S-ALT looks modest on paper: 10% of soybean-meal protein and 40% of fishmeal protein by 2050. In physical terms it is industrial. {VN-direct|Low} {fx:estimate}

| Item | 2030 | 2040 | 2050 |
|---|---|---|---|
| Microbial feed protein, kt of protein | 56 | 265 | 514 |
| Microbial feed product (dry), kt | 102 | 460 | 863 |
| Multiples of Entobel's Vietnamese design capacity (11 kt a year, two plants) | about 9 | about 42 | about 78 |
| Food substitute protein, kt of protein | 12 | 69 | 145 |
| Glucose for the sugar route (feed and food), kt | 238 | 852 | 1,318 |
| as fresh cassava roots, kt (share of the 2025 harvest) | 968 | 3,473 | 5,368 (about 52%) |
| Electricity, TWh a year | 0.21 | 4.0 | 11.7 |
| Hydrogen for the gas route, kt a year | 0 | 57 | 185 |
| Soybean-meal imports avoided against S-BASE, Mt | 0.14 | 0.80 | 1.62 |
| Maize imports avoided, Mt | 0.13 | 0.70 | 1.37 |

Multiples: our arithmetic from Entobel's combined design capacity in Vietnam, 1 kt a year in Dong Nai and 10 kt in Ho Chi Minh City [@ECO-01] ([[app-s6-feed-market]]) {VN-direct|Low}.

{{kn:kn-salt-plants-2050}}

**Readings.**
- **Carbohydrate is the binding physical constraint.** The 2050 sugar-route need equals about half of Vietnam's 2025 cassava harvest or almost all of its sugar, competing with starch exports to China and E10 ethanol [@FS-01; @FS-05; @FS-31; @GT-10] {VN-direct|Low} {fx:estimate}. Residue carbon could cover 5% to more than 100% of it, depending on whether cellulosic sugar works ([[app-f6-aquafeed-feedstock-futures]]).
- **Energy volume is not the constraint; energy carbon is.** 11.7 TWh is under 1% of planned 2050 electricity [@GT-11] {VN-direct|Low} {fx:estimate}. The gas route beats soybean meal on CO2 only below about 21 g CO2 per kWh, a grid average the power plan reaches only around 2050 {fx:estimate}.

> **Method note.** The model uses 41 kWh per kg of protein for the gas route (a lower-efficiency published case [@QNT-10; @QNT-11]). The 2030 plant design used in [[ch21-frontier-technology]] needs about 69 kWh per kg [@FTG-01]. On that basis the break-even grid intensity falls to about 12 g CO2 per kWh and S-ALT's 2050 electricity rises to about 19 TWh, still under 2% of planned supply. We report both and keep the model value; the conclusion (dedicated clean power is a precondition) holds either way. Logged in [[app-r2-disagreements]].
- **The food route saves the most imports per tonne.** Replacing 1 t of meat protein in diets avoids about 4.5 t of soybean-meal and 9.5 t of maize imports; microbial protein in feed replaces soybean meal but not maize {VN-direct|Low} {fx:estimate}. Diet change is outside this study's scope; we report the arithmetic only.
- **Cassava-based microbial protein moves land rather than saving it:** about 0.80 ha per t of protein against about 0.71 ha for imported soybean meal (our calculation) {VN-direct|Low} {fx:estimate}. Hydrogen gas fermentation needs a small fraction of that [@QNT-09; @QNT-11] {general|Medium}.

## 22.6 Aquafeed: short of omega-3 more than of protein

Aquaculture growth after 2030 is the largest uncertainty for aquafeed, not formulation [@AQF-25; @MAC-15] {VN-adjacent|Low}. Our three species-level paths give 7.4, 8.9 and 11.3 Mt of aquaculture in 2050, needing 8.0, 9.7 and 12.5 Mt of compound aquafeed and 2.5, 3.1 and 4.1 Mt of feed crude protein (2.0 Mt in 2025) {VN-direct|Low} {fx:estimate}. These species-level paths are separate from the four model scenarios. The middle path uses the S-BASE index and sits 0.3 Mt above S-BASE only because marine finfish grows faster; the high path follows the 7.0 Mt target to 2030 and then grows 2% a year, well above S-HIGH's 9.0 Mt.
- **The capture plan removes most of the trash-fish supply.** The trawl fleet is to shrink to about 8,360 boats by 2030, about 59% below 2016 [@AQF-15; @AQF-06] {VN-direct|Medium} {fx:projection} (official target). About 90% of south-central mariculture stakeholders still fed trash fish in 2021 [@AQF-07] {VN-direct|Medium}. Replacing it adds little tonnage but protein-dense, fishmeal-heavy feed: 7 to 34 kt of extra fishmeal by 2030 at today's formulations {fx:estimate}.
- **Vietnam is already a large by-product marine-ingredient producer.** Pangasius off-cuts supplied 12% of the world's by-product fishmeal and 29% of its by-product fish oil in 2024 [@AQF-04] {VN-direct|Medium}. But pangasius oil carries only 0.17 to 0.31% EPA plus DHA [@AQF-29] {VN-adjacent|Medium}, so it is not an omega-3 source.
- **Omega-3 is the tighter constraint.** Vietnamese aquafeed needs about 11 kt of EPA plus DHA today and about 21 kt by 2050 on the middle path (10 to 40 kt) {VN-direct|Low} {fx:estimate}; the world supply gap is estimated at 0.4 Mt to over 1 Mt [@AQF-16] {general|Medium}.
- **A credible 2050 share for alternative ingredients is 1 to 6% of aquafeed protein but 15 to 50% of aquafeed omega-3** (our estimate, from [@AQF-19; @AQF-23; @AQF-24]) {VN-direct|Low} {fx:estimate}. Algal and oilseed omega-3 oils are already commercial.
- **Domestic soybean is not a lever.** Even 300,000 ha at 2.5 t per ha would give 5.6% of the 2050 S-BASE bean-equivalent need, and domestic beans sell into food at about twice the import price [@AQF-20; @AQF-02] {VN-direct|Low} {fx:estimate}.

{{kn:kn-omega3-need-2050}}

## 22.7 Reality check: what other countries have achieved

The model's alternative-protein scenario sits above every real-world analogue we found; its efficiency scenario sits at the low end of what China has done. {general|Medium}
- **Formulation moves faster than land.** China cut the soybean-meal share of feed by 0.14 to 0.45 percentage points a year between 2017 and 2025; Norway cut the marine share of salmon feed from 90% (1990) to about 30% (2013), about 2.6 points a year, under price pressure [@GEO-10; @GEO-11; @VIS-19] {general|Medium} {fx:trend}.
- **Self-sufficiency targets are usually missed, then cut.** Japan's feed self-sufficiency was 28% in FY2000 and 27% in FY2024, and its FY2030 target fell from 34% to 28% [@VIS-11; @VIS-12] {general|High} {fx:trend}.
- **Novel feed ingredients stay tiny even in the most advanced aquafeed market.** Insect meal, single-cell protein, fermented products and microalgae made up 0.4% of Norwegian salmon-feed ingredients in 2020 [@VIS-18; @VIS-20] {general|High}.
- **S-ALT's microbial share (8.4% of high-protein feed protein by 2050) is unprecedented.** Its 2030 share (1.0%) is ambitious but within reach, since Norway was at 0.4% in 2020 [@VIS-18] {VN-direct|Low} {fx:estimate}.

On this evidence, a credible ambitious range for Vietnam's soybean-meal need in 2050 is about 7 to 9 Mt, against 10.4 Mt on trend. Holding imports at the 2025 level (7.2 Mt) would be more ambitious still {VN-direct|Low} {fx:estimate}. [[ch24-vision-2050]] builds on this range.

## 22.8 What this means

- **Investors:** on trend, soybean-meal need grows by about 3.2 Mt between 2025 and 2050, but efficiency and formulation will take the largest share of any reduction. The sharper thesis is aquafeed omega-3 and fishmeal replacement.
- **Policy makers:** a feed-efficiency and formulation programme is the lever with a real-world pace behind it. The 2030 livestock-feed target needs a scope statement and a statistic to be judged.
- **Manufacturers:** soybean-meal inclusion and feed conversion are the variables that matter most, and nobody publishes them. Sharing anonymised data would make every plan better, including your own.
- **Startups:** plan volumes against real plants. Nine times Entobel's current Vietnamese capacity by 2030 is ambitious; 78 times by 2050 is a national programme, not a market outcome.
- **Research and international bodies:** a published Vietnamese protein and feed balance, updated yearly, is the missing public good ([[ch28-robust-moves]]).

**Related:** [[app-f4-balance-model]] (model, assumptions and sensitivity), [[app-f6-aquafeed-feedstock-futures]], [[app-s6-feed-market]] (2025 feed market), [[ch19-outlook-2035]].
