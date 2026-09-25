# Prologue research B: the global case for and against alternative protein

Researcher B, wave 10, 25 September 2026. Facts are in `facts.csv` (PB-01 to PB-50), new sources in `sources.csv` (PRB-01 to PRB-27), chart data in `data_protein_footprints.csv`. Package IDs are reused where the package already held the evidence.

## 1. Demand growth

The OECD-FAO Outlook 2025 to 2034 projects that calories from meat, dairy, eggs and fish will rise 6% per person worldwide over the decade and 24% in lower-middle-income countries, with meat, dairy and egg output up 17% [PRB-04]. India and Southeast Asia supply 39% of consumption growth, China only 13% [PRB-04]. The 2026 to 2035 edition (June 2026) repeats the picture at headline level: production up 13%, direct farm emissions up 6% [PRB-06; QNT-01]. FAO's long-term view is a 20% rise in demand for land-animal products by 2050 [PRB-07]. FAO's 2011 projection was far steeper (meat up 73%, dairy up 58%) [PRB-27]. Neither supports the common claim that protein demand will "double by 2050".

## 2. Food and feed security

Protein feed trade is concentrated. On USDA's September 2026 figures, Brazil shipped 56% and the United States 28% of world soybean exports in 2024/25, together 84% [QNT-07]. Over a quarter of soybean exports pass the Strait of Malacca [GEO-40]. Shocks recur: fishmeal hit about USD 2,500 per tonne in August 2026, up 43% in a year [FM-01; GT-15]; African swine fever took about 40% of China's pigs in 2018 to 2019 [GEO-14]; H5N1 reached more than 1,000 US dairy herds from 2024 [GEO-21; GEO-23].

The feed-food competition argument rests on Cassidy et al.: 36% of crop calories go to feed and only 12% of those return as food [PRB-10]. OECD-FAO project a third of cereals will be fed to animals in 2034 [PRB-04]. Mottet et al., all FAO authors, answer that 86% of what livestock eat (by dry matter) is grass, residues and by-products people cannot eat [PRB-11]. Both are right: one counts crop calories, the other all feed by weight.

## 3. Resource efficiency

Poore and Nemecek confirm the task's figures: animal products use about 83% of farmland and give 37% of protein and 18% of calories [PRB-01]. Removing them would, in their model, cut food's land use by 76% and its emissions by 49% [PRB-01].

For the chart, Our World in Data publishes global **means**, not medians [FUF-07; PRB-02]. Per 100 g of protein, beef from beef herds averages 49.9 kg CO2e and 164 m2 of land; poultry 5.7 kg and 7.1 m2; tofu 2.0 kg and 2.2 m2; peas 0.44 kg and 3.4 m2. Medians appear only for greenhouse gases, in an Our World in Data article: beef 25, lamb about 20, farmed prawns about 10, cheese 8.4, pork 6.5, poultry 4.3, eggs 3.8, farmed fish 3.5, tofu 1.6, nuts 0.8, peas 0.4 [PRB-03]. The mean for beef is double its median because a few producers have very high footprints. I put the means (both columns, one consistent dataset) in `data_protein_footprints.csv` and the medians in `data_protein_footprints_ghg_medians.csv`. Even the lowest-impact tenth of beef (9 kg) and lamb (12 kg) emit more than the highest-impact peas (0.8), nuts (2.4) or tofu (3.5) [PRB-03; PRB-01].

## 4. Climate

Food systems emitted about 18 Gt CO2e in 2015, 34% of the world total [PRB-09]. FAO puts livestock at 6.2 Gt, about 12%, for 2015 [PRB-07], against its earlier 7.1 Gt, 14.5%, for 2005 [PRB-08]. The two use different reference years and model versions, so the drop is not a trend. FAO expects nearly 9.1 Gt by 2050 without action [PRB-07].

## 5. Public health

Farm animals received about 99,500 tonnes of antimicrobials in 2020, projected to rise 8% by 2030; Asia used 59% [GEO-25]. Animals took about 73% of all antimicrobial use in 2017, as cited in the same paper [GEO-25], and about 71.7% in Vietnam in 2015 [MAC-36]. On zoonoses, Jones et al. found 60.3% of 335 emerging diseases (1940 to 2004) came from animals, but 71.8% of those from wildlife [PRB-12]. That weakens a simple "livestock cause pandemics" claim, though livestock act as bridge hosts. UNEP and ILRI list rising demand for animal protein among seven drivers [PRB-13]. IARC classes processed meat as Group 1 and red meat as Group 2A; 50 g of processed meat a day raises colorectal cancer risk by about 18% [PRB-14].

## 6. Animal welfare

About 86 billion land animals were slaughtered in 2024 across seven species; 78.5 billion (91%) were chickens [PRB-15]. Fish numbers are far larger and uncertain: 1.1 to 2.2 trillion wild fish a year and 78 to 171 billion farmed fish in 2019, from an advocacy source [PRB-16]. Per the package framing, this is a motivation some actors hold.

## 7. Economic opportunity

The US launched its biotechnology and biomanufacturing initiative by executive order in September 2022 [PRB-25]. China's 2022 bioeconomy plan set a 22 trillion yuan output goal and called for research on "artificial protein" [PRB-26]. India and Japan have bioeconomy targets [ECF-31; ECF-32]. Public alternative-protein spending was at least USD 2.5 billion in 2021 to 2025, by an advocacy count [ECF-43]. None of these are traceable job or value outcomes; they are targets.

## 8. Livelihoods and nutrition (counter-arguments)

FAO says livestock supports at least 1.3 billion livelihoods [PRB-17]. FAO's 2023 review stresses the iron, zinc, B12 and protein quality of animal foods for children and pregnant women; 372 million preschool children lack key micronutrients [PRB-18]. People in low-income countries eat 143 kcal a day of animal foods, below FAO's 300 kcal benchmark [PRB-04].

## 9. Processing and health

A UK Biobank study linked plant-based ultra-processed food to higher heart-disease mortality (HR 1.12 per 10% of energy) and unprocessed plant food to lower (HR 0.87) [PRB-19]. Its "plant UPF" is mostly bread, pastries and snacks, not meat analogues. A small trial found plant-based meat lowered LDL cholesterol against red meat [PRB-20]. US analogues carry less protein, zinc and B12 and more sodium than the meat they copy [PRB-21]; Hong Kong analogues had less salt than the processed meats compared [PRB-22]. The comparator decides the verdict.

## 10. Cultivated meat

Risner et al. (peer-reviewed 2024 version of the UC Davis preprint) found 12 to 1,508 kg CO2e per kg; with pharmaceutical-grade media, 4 to 25 times median beef [FTB-26]. Lynch and Pierrehumbert show cultivated meat's carbon dioxide accumulates while methane decays, so it is "not prima facie climatically superior" [PRB-23]. Sinke et al. find it beats beef and pork, and matches chicken, on renewable power [PRB-24]. Humbird's model gives USD 37 to 51 per kg of cells [SCI-14; COST-47].

## 11. Consumer uptake

Reusing the package: US plant-based meat sales fell from USD 1.4 billion (2021) to USD 1.0 billion (2025); plant milk kept about 13% of milk sales, down from 16% [GLB-01; GLB-02].

## Disagreements and caveats

- Means vs medians for protein footprints: beef 49.9 (mean) vs 25 (median). The brief asked for medians; the dataset gives means. Both files are provided; never mix them in one chart.
- Livestock emissions: 14.5% (2005, FAO 2013) vs 12% (2015, FAO 2023) vs food systems 34% (Crippa). Different scopes and years.
- Livestock share of protein: 37% [PRB-01, includes farmed fish] vs 34% [PRB-17].
- Demand to 2050: +20% (FAO 2023) vs +73% meat (FAO 2011).
- Lower-middle-income growth in animal-food intake: 24% (press release) vs 25% (Executive Summary as read).
- Antimicrobial confidence interval upper bound: 193,052 t (results) vs 198,052 t (abstract).
- Feed competition: Cassidy (36% of crop calories) and Mottet (86% of feed inedible) measure different things.
- Plant-based meat and health: cohort (harm signal for plant UPF broadly) vs trial (benefit for analogues vs red meat).
- Cultivated meat: Risner (worse than beef with purified media) vs Sinke (better than beef on renewables). Both are models; no plant at scale exists.
- The task's "plant milk steady" is slightly off: its US share fell from 16% to 13%.

## What we could not verify

- Poore and Nemecek's own Figure 1 medians (not extractable); medians other than beef come from an article's chart description and are rounded.
- OECD-FAO 2026 to 2035 meat and fish detail: the PDF is blocked by robots.txt, chapter pages render empty and SDMX timed out.
- FAO's own explanation of the 14.5% to 12% change; the Pathways report PDF returned 403.
- Whether Executive Order 14081 remains in force after 2025.
- Whether the 22 trillion yuan figure is in the NDRC plan text or a press gloss.
- SWAP-MEAT funding source and Sinke et al. funding and affiliations.
- The UNEP report's zoonosis shares; UNEP's press page returned 404.
- Fishcount's crustacean range (rendered as "250600 billion").
- Any traceable job or value numbers for alternative protein specifically; none found.
