# GEO: geopolitics, trade, disease, energy and demography, 2030 to 2050

Wave 3 (futures 2030 to 2050), stream geo_macro. Source ID prefix: GEO. Question tree: F1 (drivers to 2050), F5 (economy and policy futures). All web sources accessed 2026-09-24. Status: complete. WebSearch calls used: 15 of 15.

Companion data in this folder: `macro_drivers_2050.csv` (92 rows), `shock_register.csv` (17 rows), `build_csvs.py` (writes both CSVs; all our arithmetic is in it).

Labels: evidence [VN-direct] / [VN-adjacent] / [general]; confidence High / Medium / Low; foresight type [trend] / [projection] / [estimate] / [signal] / [wildcard]; horizon year. "Projection" covers official targets and published model results; the text always says which. Edition 1.0 source IDs (MAC, GT, RGN, REG, FM, FS, COST, MI) and wave 3 IDs (CLM, FTG, QNT) are cited where we build on them.

**Scope boundaries with other wave 3 streams.** The revised PDP8 renewable mix, hydrogen strategy and renewable costs are in FTG (`frontier_gas/vn_energy_inputs_2050.csv`); here we add only gas, LNG, coal, nuclear, retail power prices and energy security. Population totals (UN WPP 2024 medium variant) and demand are in QNT; here we add ageing, working-age population, urbanisation and income paths. Climate effects on exporters' soy and maize, El Nino and anchoveta are in CLM. Carbon prices and CBAM cost arithmetic are for ECF; we cover only CBAM scope. Wildcards are for HSC; our `shock_register.csv` records historical shocks.

---

## Headline findings

1. **US tariff policy on Vietnam changed four times in 16 months.** A 46% "reciprocal" rate was announced in April 2025; 20% applied from August 2025; the Supreme Court struck down the legal basis on 20 February 2026; a 10% global surcharge followed; and from 24 July 2026 a 12.5% Section 301 tariff applies to products of Vietnam. Two more Section 301 cases on Vietnam (excess capacity, intellectual property) are open. [VN-direct] High. [trend], 2025 to 2026. (GEO-02, GEO-03, GEO-04, GEO-05)
2. **Farm-input sourcing is becoming partly political.** Vietnamese firms signed 20 memorandums to buy over USD 2.9 billion of US farm goods as part of the October 2025 framework, and China committed to buy at least 25 Mt of US soybeans a year in 2026 to 2028. Soy, maize and DDGS flows to Vietnam will be shaped by trade deals, not only by price. [VN-direct] High. [signal], 2026 to 2028. (GEO-02, GEO-06)
3. **The exporter baseline to 2035 is one of ample supply, not scarcity.** OECD-FAO projects China's soybean imports falling 12% (111.8 Mt in 2025 to 98.3 Mt in 2035), Argentina's protein-meal exports rising 17% (to 35.6 Mt) and Brazil's maize exports rising 31% (to 57.2 Mt). Argentina has legislated soybean-meal export duty cuts from 22.5% to 14% by December 2028. For Vietnam's feed importers the structural risk to 2035 is volatility and concentration, not a rising price trend. [general] Medium. [projection], 2030 and 2035, OECD-FAO Agricultural Outlook 2026-2035 baseline. (GEO-37, GEO-38)
4. **This cuts against a scarcity case for alternative protein.** If the baseline holds, imported soybean meal stays cheap to 2035, so domestic protein must win on resilience, fishmeal substitution or carbon, not on the price of soy. Beyond 2035 no published price path exists (edition 1.0), and CLM finds exporter climate risk rising in the 2040s. [VN-direct] Medium. [estimate], 2035 to 2050. (GEO-37; CLM-24, CLM-25; GT-14)
5. **China missed its 2025 soybean-meal target and keeps a 10% goal for 2030.** The share of soybean meal in Chinese feed was 13.4% in 2025 against a target of below 13%; USDA and industry data suggest about 16% in 2024. China's Party recommendations for the 15th Five-Year Plan list biomanufacturing as a "future industry". China is at once Vietnam's main buyer of cassava starch, a price-setter for microbial protein and a swing buyer of world soy. [general] Medium. [trend and projection], 2025 to 2030. (GEO-10, GEO-11, GEO-13)
6. **EU trade rules barely touch Vietnam's protein inputs before 2030.** EUDR applies from 30 December 2026 (large and medium operators) and 30 June 2027 (other small firms) to soy entering the EU, but not to meat or fish from soy-fed animals. CBAM covers cement, steel, aluminium, fertilisers, electricity and hydrogen; the extension under negotiation adds 180 to 457 metal-intensive goods, with an annual review from 2028, and no agriculture. [general] High. [projection], 2026 to 2028. (GEO-07, GEO-08, GEO-09)
7. **Vietnam's feed arrives through chokepoints.** Some 54% of traded grain and fertiliser passes at least one maritime chokepoint, and over a quarter of global soybean exports pass the Strait of Malacca (2017 data). The 2026 Middle East conflict showed the energy channel: world urea rose 54% in one month (USD 472 to 726 per t), Vietnamese feed prices rose 10 to 14% and international logistics costs 20 to 30%. [VN-direct] Medium. [trend], 2015 to 2026. (GEO-40; COST-30, COST-33, MAC-24)
8. **African swine fever is endemic and evolving.** Vietnam has reported 952 to 3,029 outbreaks every year since 2019, and ASF returned in 2025 with 1.2 to 1.3 million pigs culled. Recombinant genotype I/II strains rose from 14.1% to 42.2% of sampled outbreaks in northern and central Vietnam in 2023 to 2024, and the licensed live vaccines do not fully protect against them. Expect recurring herd shocks to the 2030s. [VN-direct] Medium. [trend], 2019 to 2030s. (GEO-15, GEO-17, GEO-18, GEO-19; MAC-01)
9. **Each disease shock has pushed production from households to integrators.** Backyard farms once supplied about 80% of Vietnam's pork; small household farms now supply 35 to 40%, and their share falls 5 to 7% a year. In 2019, ASF raised pig prices 45% in the traditional sector but only 11% in the modern sector, which gained share. [VN-direct] Medium. [trend], 2019 to 2024. (GEO-14, GEO-15, GEO-47)
10. **Zoonotic risk is rising and H5N1 is adapting to mammals.** High-consequence spillover events grew 4.98% a year from 1963 to 2019; one model finds the yearly probability of extreme epidemics could rise up to threefold in coming decades. H5N1 reached more than 1,000 US dairy herds from 2024, and killed 47 tigers and 3 leopards in Vietnamese zoos in 2024 with mammalian-adaptation mutations. [general and VN-direct] High. [trend and projection], to 2050. (GEO-21, GEO-22, GEO-43, GEO-44, GEO-46)
11. **Prophylactic antibiotics were banned in Vietnamese livestock from 1 January 2026.** Growth promoters were already banned from 2018. The rule raises biosecurity and health-management costs, favours integrators, and opens a near-term market for fermentation-made feed additives (probiotics, yeast products, enzymes). Global veterinary antimicrobial use is projected to rise 8% to 107,472 t by 2030, with 67% of hotspots in Asia. [VN-direct] Medium. [trend and projection], 2026 to 2030. (GEO-24, GEO-25)
12. **Gas and LNG stay in Vietnam's power system to 2050.** The revised PDP8 plans 22.5 GW of LNG power and 31 GW of coal in 2030, and still 18.2 to 26.1 GW of LNG co-firing hydrogen in 2050. The average retail tariff rose 4.8% in May 2025 to VND 2,204 per kWh; EVN cited that 75% of output comes from costly coal, gas and LNG. Until renewables dominate, industrial power prices will track imported fuel and exchange rates. [VN-direct] High. [projection and trend], 2025 to 2050. (GEO-26, GEO-30)
13. **Nuclear power will not reach fermentation plants before the early to mid 2030s.** Russia and Vietnam signed the Ninh Thuan 1 agreement (two VVER-1200 units, about 2.4 GW) on 23 March 2026; Japan withdrew from Ninh Thuan 2 in January 2026. The Prime Minister's target is end-2030; the World Nuclear Association says 2035. [VN-direct] Medium. [signal], 2030 to 2035. (GEO-27, GEO-28)
14. **Vietnam's working-age population peaks around 2035 to 2040 at about 72 million, then falls.** The share aged 65 and over doubles from 9.5% (2025) to 20.0% (2050) and crosses 14% ("aged society") around 2036. The old-age dependency ratio rises from 14 to 32 per 100. [VN-direct] Medium. [projection], 2035 to 2050, UN WPP 2024 medium variant. (GEO-31)
15. **Vietnam is likely to be old before it is rich, unless official growth targets are met.** On our illustrative paths, real GDP per capita in 2035 is about USD 7,400 to 8,300 on slow and USDA-type growth, and about USD 11,100 on the official path (10% a year to 2030, 7.5% after). The World Bank says high income by 2045 needs about 6% per-capita growth a year for 20 years. [VN-direct] Low. [estimate], 2035 to 2050. (GEO-33, GEO-34, GEO-35; QNT-02)
16. **Vietnam stays majority rural to 2050 on national definitions.** UN projections put the urban share at 40.5% in 2030 and 46.5% in 2050, with 58.8 million rural residents in 2050. A large rural labour pool and household economy persist, which matters for feedstock collection and for a just transition. [VN-direct] Medium. [projection], 2030 to 2050. (GEO-32)
17. **Farm labour is shrinking fast without any help from alternative protein.** The 2025 census counts 16.5 million rural workers in agriculture, forestry and fishery, down 2.84 million (14.7%) since 2016, and 8.01 million farm households (50.6% of rural households). A mechanical extrapolation gives about 13.8 million (2035) and 10.6 million (2050). The share of households with 50 or more pigs rose from 2.55% to 4.16%. [VN-direct] High for census, Low for extrapolation. [trend and estimate], 2025 to 2050. (GEO-36)
18. **The just-transition question for alternative protein is about feedstock income, not job losses.** Disease, integrators and ageing are already removing smallholder livestock. Fermentation plants employ few people (labour is 7 to 17% of cost in regional models). The workers most affected by a protein shift would be the remaining small pig and poultry households; the ones who could gain are cassava, rice and brewery-residue suppliers. [VN-direct] Low. [estimate], 2030 to 2050. (GEO-15, GEO-36; RGN-01; QNT S-ALT)

---

## Detailed findings

### 1. Trade and geopolitics (sub-question 1)

**US tariffs on Vietnam, 2025 to 2026.** [VN-direct] High, [trend].

| Period | Measure | Rate on Vietnam | Source |
|---|---|---|---|
| 2 Apr 2025 | "Reciprocal" rate announced (IEEPA) | 46% (announced, not applied at that level) | GEO-48 (Low) |
| Aug 2025 (start date not re-read) to 20 Feb 2026 | Reciprocal tariff, Executive Order 14257 | 20% ("will maintain at 20 percent", joint statement 26 Oct 2025) | GEO-02 |
| 20 Feb 2026 | Supreme Court: IEEPA "does not expressly authorise the president to impose tariffs" | n/a | GEO-01; GEO-03 |
| 24 Feb to 24 Jul 2026 | Section 122 balance-of-payments surcharge, 150-day limit | 10% on all origins | GEO-03 |
| From 24 Jul 2026 | Section 301, failure to "impose and effectively enforce a prohibition on the importation of goods produced with forced labor" | 12.5% (10% for economies with such bans or trade-agreement commitments) | GEO-04 |
| Open | Section 301: structural excess capacity (17 Mar 2026); Vietnam IP protection (3 Jun 2026) | Not determined | GEO-05 |

- The agricultural side of the October 2025 framework: commitments to "address and prevent barriers to U.S. agricultural products" and 20 MOUs to buy "over $2.9 billion" of US farm commodities (products not named) (GEO-02). The US already supplied 43.6% of Vietnam's soybeans and 72% of its DDGS in 2025 (MAC-09, MAC-01).
- **Reading.** Trade policy is now a source of volatility for Vietnam's protein economy on both sides: seafood and processed-food exports face shifting US rates, and input sourcing carries political purchase commitments. A tariff at 10 to 12.5% is far below the 46% announced in 2025, but the legal basis has changed three times. [VN-direct] Medium. [signal], 2026 to 2030.

**US-China managed soy trade.** On 1 November 2025 China agreed to buy at least 12 Mt of US soybeans in November and December 2025 and at least 25 Mt a year in 2026, 2027 and 2028, and to suspend retaliatory tariffs on US farm goods including soybeans, maize and pork (GEO-06) [general] High. Compliance was not verified. When China fills part of its demand from the US by agreement, Brazilian soy seeks other buyers, including Vietnam; the reverse happened in 2018 to 2019. [general] Medium. [signal], 2026 to 2028.

**Exporter supply to 2035 (OECD-FAO Agricultural Outlook 2026-2035 baseline, read from the OECD SDMX API).** [general] Medium, [projection] (GEO-37).

| Series (Mt) | 2025 | 2030 | 2035 | Change 2025 to 2035 |
|---|---|---|---|---|
| China soybean imports | 111.8 | 98.4 | 98.3 | minus 12% |
| China soybean production | 20.9 | 25.4 | 30.7 | plus 47% |
| China protein-meal production | 112.3 | 105.3 | 110.4 | minus 2% |
| Brazil soybean production | 177.7 | 179.1 | 185.9 | plus 5% |
| Brazil soybean exports | 108.5 | 106.1 | 107.2 | minus 1% |
| Argentina soybean production | 47.5 | 52.4 | 55.7 | plus 17% |
| Argentina protein-meal exports | 30.5 | 32.8 | 35.6 | plus 17% |
| Brazil protein-meal exports | 23.0 | 23.1 | 26.7 | plus 16% |
| Brazil maize exports | 43.8 | 48.5 | 57.2 | plus 31% |
| Argentina maize exports | 35.1 | 33.3 | 33.6 (2031) | minus 4% |
| United States soybean exports | 40.4 | 32.8 | 33.4 | minus 17% |

- **Reading.** The baseline embeds China's feed-efficiency push (soy imports down, domestic soy up) and continued South American meal and maize growth. Brazil's soy exports are flat in this baseline, far slower than its past decade (not re-measured here). Vietnam's own projected soybean-meal need rises to about 10.3 Mt of protein-meal imports by 2035 in OECD-FAO and 10.4 Mt of soybean meal by 2050 in QNT's base case (QNT-01, QNT model). Against global flows of 30 to 36 Mt of Argentine meal exports alone, Vietnam stays a price-taker. [VN-direct] Medium. [projection], 2035.

**Argentina export duties (Decree 423/2026, 3 June 2026)** (GEO-38) [general] Medium, [projection]:

| Product | Rate 2026 | Dec 2027 | Dec 2028 |
|---|---|---|---|
| Soybeans | 24% | 21% | 15% |
| Soybean oil and meal | 22.5% | 19.5% | 14% |
| Maize | 8.5% | n/a | 5.5% |
| Wheat | 5.5% (from 7.5%) | n/a | n/a |

Meal and oil duties were raised from 31% to 33% in March 2022 (GEO-39, title only, Low). Argentina is Vietnam's main source of soybean meal and 46.5% of its maize (MAC-08). Duty cuts lower the export price floor and raise crushing, a downward pressure on Vietnamese feed costs to 2028. The history shows the duties can move either way with Argentine fiscal politics. [VN-adjacent] Medium. [projection], 2026 to 2028.

**Export restrictions.** IFPRI's dataset covers four crises (2007 to 2008, 2010 to 2011, COVID-19, 2022). Domestic inflation predicts export restrictions better than world prices do; land per capita, the commodity's share of production and weather raise the chance; urbanisation and agriculture's share of GDP lower it (GEO-42) [general] Medium. Vietnam's key suppliers (Argentina, Brazil, United States) are large, land-rich exporters; Argentina has used export taxes rather than bans for soy. We found no published probability of restrictions on soy or maize to 2050. [general] Low. [trend].

**Chokepoints and shipping.** 14 chokepoints are critical to food security; 54% of traded grain and fertiliser passed at least one maritime chokepoint (43% in 2000); "over one-quarter of global soybean exports transit the Strait of Malacca"; four south-eastern Brazilian ports handle nearly a quarter of world soybean exports; the Panama Canal has the largest grain throughput (GEO-40) [general] Medium (2017 data, not updated). UNCTAD (2024) reports Suez and Panama increasingly exposed to conflict and climate (GEO-41) [general] Medium. Vietnam's South American grain comes via the Cape of Good Hope and the Indian Ocean into the South China Sea (our reading of routes; Low). Its main direct chokepoint exposures are the Malacca, Sunda or Lombok straits, Brazilian and Argentine ports and, for US Gulf cargoes, Panama. The 2026 Middle East conflict hit through energy, fertiliser and freight rather than grain routes (COST-30, COST-33, MAC-24; GEO-45 title only).

**EUDR.** Application: 30 December 2026 for large and medium operators, and for micro and small operators already under the EU Timber Regulation; 30 June 2027 for other micro and small operators (GEO-07, GEO-08) [general] High. The July 2026 scope update removed soybeans for sowing, cattle hides and leather and some rubber goods, and added soluble coffee, some palm-oil derivatives and frozen cattle tongues from 30 December 2027 (GEO-08). EUDR does not cover meat or fish from soy-fed animals (our reading of scope; Medium). **Effect on soy trade:** traders must segregate deforestation-free soy for the EU; soy that cannot be certified is sold elsewhere, including Asia. That could widen a price gap between EU-grade and other soy, slightly in Vietnam's favour as a buyer, and raise the value of any traceability claim for Vietnamese feed or seafood sold to EU buyers. We found no quantitative study of this effect. [general] Low. [estimate], 2027 to 2030.

**CBAM.** Current sectors: cement, iron and steel, aluminium, fertilisers, electricity, hydrogen. The Commission (December 2025) proposed about 180 downstream products with high steel or aluminium content; the Council (12 June 2026) about 200, with "annual review from 2028"; Parliament's committee 457 (GEO-09) [general] High. No text read proposes agriculture, food or feed. **Signpost:** the 2028 review or a new Commission proposal naming nitrogen-intensive food, meat or feed.

**Trade agreements.** Soybean meal and feed maize have carried 0% MFN duty in Vietnam since 31 March 2025, so free-trade agreements add little on these inputs (TAR-003, TAR-004, REG2-21). Agreements matter more for (a) food-protein ingredients, which carry MFN duties of 3% (HS 3504), 5% (HS 2106.10) and 7 to 10% (yeasts, HS 2102) (TAR-007 to TAR-010), where preferential rates under ACFTA or RCEP for Chinese microbial protein were not verified, and (b) exports of Vietnamese alternative-protein products under EVFTA, CPTPP and RCEP rules of origin. Open question (see below). [VN-direct] Medium.

### 2. China's protein and feed strategy to 2035 (sub-question 2)

| Item | Content | Source |
|---|---|---|
| MARA three-year action plan to cut soybean meal in feed (2023) | Share below 13% by 2025 and 10% by 2030; about 17% in 2017. Promotes rapeseed, cottonseed, peanut, sunflower and sesame meals, distillers' grains, brewery by-products, crop residues and synthetic amino acids | GEO-10 |
| Outcome 2025 | 13.4%, unchanged on 2024; official statistics claimed below 13% in 2023; USDA and industry about 16% in 2024 | GEO-10; GEO-11 |
| Soybean imports | Above 100 Mt a year | GEO-10 |
| 15th Five-Year Plan (adopted 12 Mar 2026) | Binding target: grain production capacity above 1.45 trillion jin (about 725 Mt) by 2030 | GEO-12 (secondary) |
| Party recommendations (Oct 2025) | "Foster future industries, such as quantum technology, biomanufacturing, hydrogen energy and fusion energy, brain-computer interfaces, embodied intelligence, and sixth-generation mobile communications" | GEO-13 |
| New feed approvals, gas-fermentation protein | Covered by FTG (CAP, Calysseo halt, Yarrowia approval) | FTG-06, FTG-08, FTG-23 |

**Implications for Vietnam.**
- **As a supplier.** China bought 93.5% of Vietnam's cassava starch in 2023 (RGN-53). Chinese biomanufacturing growth raises demand for starch and sugar feedstock, which competes with any Vietnamese fermentation plant for the same cassava. [VN-direct] Medium. [signal], 2026 to 2035.
- **As a competitor.** China's feed-substitution policy creates domestic demand for yeast, bacterial and mycoprotein at scale, which lowers Chinese unit costs and sets the landed price in Vietnam (ch08). [VN-adjacent] Medium. [trend].
- **As a swing buyer.** If China reaches 10% soybean meal in feed by 2030 from about 13.4%, the saving is in the order of 3 percentage points of a feed output of roughly 300 Mt, that is about 9 Mt of meal or 12 Mt of soybeans a year (our rough estimate; Chinese feed output not re-verified this wave). That is larger than Vietnam's entire soybean-meal use (7.2 Mt, MAC-04). Success in China lowers world soy prices; failure keeps China's imports above 100 Mt. [general] Low. [estimate], 2030.

### 3. Animal disease and pandemic risk (sub-question 3)

**ASF in Vietnam.** [VN-direct]

| Year | Outbreaks (provinces) | Other magnitude | Source |
|---|---|---|---|
| 2019 | 8,553 of 10,614 communes, all 63 provinces | Nearly 6 million pigs died or culled (over 20% of herd); pig prices +45% (traditional), +14% (commercial), +11% (modern); pigs traded halved | GEO-14; GEO-15 (High) |
| 2020 | 1,569 (50) | | GEO-15 (Medium) |
| 2021 | 3,029 (59) | | GEO-15 |
| 2022 | 1,229 (53) | | GEO-15 |
| 2023 | 952 (46) | Recombinant genotype I/II virus found in 6 northern provinces | GEO-15; GEO-16 |
| 2024 | 1,669 (48) | Recombinant share of outbreaks 14.1% to 42.2% (north and centre) | GEO-15; GEO-17 |
| 2025 | Return from Q3 | 1.2 to 1.3 million pigs culled | MAC-01; MAC-12 (Medium) |

- **Vaccines.** Vietnam licensed live attenuated vaccines based on ASFV-G-deltaI177L, deltaI177L/deltaLVR and deltaMGF; nearly 6 million doses were produced and distributed by June 2024 (GEO-15, GEO-19). Genotype II vaccine strains were "unable to completely protect" pigs against the recombinant strain (GEO-18). A 2026 review lists incomplete attenuation, persistent low-level virus, possible reversion to virulence, shedding and pregnant-sow safety as concerns (GEO-19) [VN-direct] Medium. Uptake is "limited" (GEO-15).
- **Reading.** To 2035, ASF is best treated as a recurring shock (a major wave every two to three years since 2019), with a vaccine that may lag viral change. Each wave cuts pig numbers and feed demand for a few quarters and speeds consolidation. [VN-direct] Medium. [trend], 2026 to 2035.

**Avian influenza.**
- 2003 to 2004: about 45 million poultry culled or died, a direct loss of about 0.1 percentage points of GDP (World Bank 2005, cited in GEO-20) [VN-direct] Medium.
- 2024: 47 tigers and 3 leopards died of H5N1 in Vietnamese zoos (August to October 2024); the virus carried mutations associated with mammalian host adaptation (GEO-46) [VN-direct] High.
- United States: H5N1 clade 2.3.4.4b spilled from wild birds to dairy cattle once, then spread between herds through cattle movements (GEO-21), reaching more than 1,000 herds (GEO-22) [general] High. CDC counted 71 human H5 cases in the United States since February 2024 and rated the public risk "low" on 6 March 2026 (GEO-23) [general] High.
- **Reading.** Vietnam holds about 585 million poultry and 31 million pigs (MAC-12). A mammal-adapted H5N1 lineage spreading in pigs or cattle is a low-probability, high-impact event for Vietnam (see HSC wildcards); no published probability exists. [VN-direct] Low. [wildcard], 2030 to 2050.

**Zoonotic spillover frequency.** High-consequence spillover events rose 4.98% a year (95% CI 3.22 to 6.76%) and deaths 8.7% a year from 1963 to 2019, excluding COVID-19 (GEO-43) [general] High, [trend]. The yearly probability of an extreme epidemic "can increase up to threefold in the coming decades" (GEO-44) [general] Medium, [projection]. COVID-19 and the 2022 disruptions are estimated to have pushed about 30% of small pig farmers out of the sector (MAC-43) [VN-direct] Low.

**Antimicrobial resistance.**
- Antibiotic growth promoters banned in feed from 1 January 2018; from 1 January 2026 antibiotics may be used only to treat diagnosed disease on veterinary prescription (Decree 13/2020 timeline, reported by MARD) (GEO-24) [VN-direct] Medium. No numerical 2030 AMR reduction target was found.
- About 71.7% of antimicrobials used in Vietnam in 2015 went to animals (MAC-36).
- Global veterinary antimicrobial use: 99,502 t (2020) to 107,472 t (2030), +8.0% on current trends; 67% of hotspots in Asia (GEO-25) [general] High, [projection].
- **Reading.** The 2026 ban is a supply-side cost shock for smallholders and a market opening for biosecurity and for fermentation products that replace antibiotics (probiotics, postbiotics, yeast cell-wall products, enzymes). Edition 1.0 found the livestock strategy already encourages "biological products that replace antibiotics" (REG-54). This is the nearest-term, lowest-regulatory-risk use of Vietnamese fermentation capacity. [VN-direct] Low. [estimate], 2026 to 2030.

### 4. Energy transition to 2050 (sub-question 4, beyond FTG)

**Fossil and nuclear elements of the revised PDP8 (Decision 768/QD-TTg, 15 April 2025)** (GEO-26 = FTG-15) [VN-direct] High, [projection: official plan]:

| Source | 2030 | 2050 |
|---|---|---|
| LNG power | 22,524 MW (9.5 to 12.3%) | 18,200 to 26,123 MW co-firing hydrogen |
| Domestic gas power | 10,861 to 14,930 MW (5.9 to 6.3%) | 7,900 MW converted |
| Coal power | 31,055 MW (13.1 to 16.9%) | 25,798 MW converted to biomass or ammonia |
| Hydro | 33,294 to 34,667 MW (14.7 to 18.2%) | 40,624 MW (FTG) |
| Imports (Laos, China) | 9,360 to 12,100 MW (4.0 to 5.1%) | n/a |
| Nuclear | 4,000 to 6,400 MW entering service 2030 to 2035 | 10,500 to 14,000 MW |
| Growth assumption | GDP about 10% a year (2026 to 2030) | about 7.5% a year (2031 to 2050) |

- **Where Vietnam starts.** 2023 generation: 274 TWh; coal 45%, hydro 29%, solar 10%, gas 10%, wind 4%; demand growth "up to 10% per year" (GEO-27) [VN-direct] Medium.
- **LNG.** First cargo July 2023 at Thi Vai (1 Mt a year, phase 1); send-out upgraded on 2 April 2026; phase 2 (2 Mt a year) expected 2029 (GEO-29) [VN-direct] Medium. MOIT's 2026 LNG price basis is USD 11.98 per MMBtu plus 1.87 transport (FTG-31). Vietnam becomes an LNG importer exposed to Qatar, Australia and US supply and to Hormuz and Malacca shipping.
- **Nuclear.** The National Assembly restarted the programme in November 2024; Russia and Vietnam signed the Ninh Thuan 1 intergovernmental agreement on 23 March 2026 (two VVER-1200 units, reference Leningrad NPP-2); Japan withdrew from Ninh Thuan 2 in January 2026 and a partner was to be selected in Q3 2026 (GEO-27, GEO-28) [VN-direct] Medium. Targets conflict (end-2030 per the Prime Minister; "by 2035" per WNA).
- **Retail price.** Average retail tariff VND 2,204.07 per kWh (excluding VAT) from 10 May 2025, +4.8%; EVN says hydro supplies only about 25% of output and 75% comes from costlier coal, gas and LNG, generation is about 83% of cost, and commercial demand was expected to grow 12.2% in 2025 (GEO-30) [VN-direct] High. Earlier rises of 3% (May 2023), 4.5% (November 2023) and 4.8% (October 2024) were not re-read in this wave (Low). Edition 1.0 puts a 24/7 plant's blended price at VND 1,952 per kWh (about USD 75 per MWh) in 2026 (COST-01).
- **Energy security implications for fermentation (our reading).** (1) To about 2035, grid power prices will follow imported coal and LNG and the dollar; the average tariff rose 4.8% in May 2025, and by reports not re-read here also in 2023 and 2024. (2) The hedge for a fermentation plant is a direct power purchase from renewables, which Decree 57/2025, amended by Decree 243/2026, now allows with fewer limits (COST-06, COST-07). (3) Nuclear baseload will not reach industry before the early to mid 2030s. (4) PDP8 is sized on 10% and 7.5% GDP growth; if growth is closer to USDA's 5.7%, planned capacity could run ahead of demand in the 2030s, a possible source of cheap off-peak power for flexible fermentation. The fourth point is conditional and unquantified. [VN-direct] Low. [estimate], 2030 to 2040.

### 5. Demography and income to 2050 (sub-question 5)

**UN WPP 2024 medium variant, read via Our World in Data (GEO-31).** [VN-direct] Medium, [projection]. Our calculations from age-group counts.

| Indicator | 2025 | 2030 | 2035 | 2040 | 2045 | 2050 |
|---|---|---|---|---|---|---|
| Population, M | 101.6 | 104.3 | 106.5 | 108.4 | 109.7 | 110.0 |
| Aged 0 to 14, share | 22.9% | 19.9% | 18.3% | 17.6% | 17.4% | 17.0% |
| Aged 15 to 64, M | 68.7 | 71.2 | 72.3 | 72.3 | 71.3 | 69.4 |
| Aged 15 to 64, share | 67.7% | 68.3% | 67.9% | 66.7% | 65.0% | 63.1% |
| Aged 65+, share | 9.5% | 11.8% | 13.8% | 15.7% | 17.6% | 20.0% |
| Old-age dependency (65+ per 100 aged 15 to 64) | 14.0 | 17.3 | 20.4 | 23.6 | 27.0 | 31.7 |
| Urban share (UN WUP, GEO-32) | 38.8% | 40.5% | 42.1% | 43.7% | 45.2% | 46.5% |
| Rural population, M (GEO-32) | 62.1 | 62.0 | 61.6 | 61.1 | 60.1 | 58.8 |

- Population growth slows to under 0.1% a year in 2045 to 2050; QNT shows it peaks around 2049 (GT-12).
- **Ageing speed.** The 65+ share was 6.4% in 2015 and crosses 14% around 2036 (our reading of the series), roughly two decades from "ageing" to "aged". [VN-direct] Medium. [projection], 2036.
- **Urban definition warning.** The urban share uses national definitions; the 2025 provincial merger and the UN's move to the Degree of Urbanisation could change reported shares without any change on the ground. [VN-direct] Medium.

**Income paths.**

| Path | Basis | Type | Real GDP per capita, constant 2025 USD: 2030 / 2035 / 2040 / 2050 |
|---|---|---|---|
| Official | 14th Party Congress: GDP growth 10% or more a year in 2026 to 2030, GDP per capita about USD 8,500 (nominal) in 2030 (GEO-33); PDP8 assumes about 7.5% a year after 2030 (GEO-26) | projection (official target) extended by our arithmetic | 7,900 / 11,100 / 15,600 / 31,800 |
| USDA-type | 5.7% a year average 2026 to 2035 (USDA, QNT-02), then 4.5% (QNT assumption) | projection then estimate | 6,500 / 8,300 / 10,200 / 15,600 |
| Slow | 5% to 2030, 4% to 2040, 3% after (our assumption) | estimate | 6,300 / 7,400 / 8,900 / 11,800 |
| World Bank requirement | About 6% a year per-capita growth for 20 years to reach high income by 2045, "more than tripling" income (GEO-34, GEO-35) | projection (published requirement) | 6,700 / 9,000 / 12,000 / 16,100 (2045) |

All paths start from USD 5,026 in 2025 (MI-081) and use UN WPP 2024 population. They exclude exchange-rate and price effects, so they are not comparable with nominal targets. [VN-direct] Low. [estimate].

**Implications (macro only).**
- **Protein demand.** Headcount adds only about 8% between 2025 and 2050; income drives demand. OECD-FAO already projects 61.9 kg of pig, poultry and beef per person in 2035, above Korea and China in the same outlook (QNT-01). Ageing slows per-person meat growth after about 2040 (QNT's taper). [VN-direct] Medium. [projection], 2035 to 2050.
- **Labour for farms and plants.** The working-age population stops growing after about 2035, the farm workforce is shrinking and ageing, and humid heat raises the cost of outdoor work (CLM-16). This favours capital-intensive, automated protein production (integrated farms, feed mills, fermentation plants) over labour-intensive smallholding. [VN-direct] Medium. [trend and projection], 2030 to 2050.
- **Old before rich.** On the USDA-type path Vietnam becomes an aged society at about USD 8,700 per head (2036). Fiscal pressure from ageing then competes with bioeconomy spending. [VN-direct] Low. [estimate], 2035 to 2050.

### 6. Workforce and just transition (sub-question 6)

**2025 Rural and Agricultural Census, official results (NSO, April 2026)** (GEO-36) [VN-direct] High:

| Indicator | 2025 | Change since 2016 |
|---|---|---|
| Rural households | 15.84 M | n/a |
| Households with agriculture, forestry or fishery as main activity | 8.01 M (50.57%) | share down 3.09 points |
| Rural workers | 31.77 M | minus 2.57 M (minus 7.48%) |
| Rural workers in agriculture, forestry, fishery | 16.5 M (51.93%) | minus 2.84 M (minus 14.66%) |
| Households with 50 or more pigs | 4.16% of pig households | from 2.55% |
| Households with 100 or more chickens | 8.20% | from 4.61% |
| Households using 5 ha or more for aquaculture | 1.27% | from 0.74% |
| Farms (trang trại) | 28,349 | n/a |
| Agricultural enterprises; cooperatives | 6,204; 8,416 | n/a |

**Pig-sector structure.** Backyard operations once supplied about 80% of pork; small household farms now supply 35 to 40%, and professional households and large farms 60 to 65%; small household farms fell 15 to 20% in 2019 to 2022 (GEO-15) [VN-direct] Medium. Household livestock is falling 5 to 7% a year; in 2022 to 2023 foreign-invested firms held 43% of the pig market, households 38% and domestic firms 19% (GEO-47) [VN-direct] Medium.

**Trend to 2050 (our estimate).** Rural farm workers fell 1.75% a year between 2016 and 2025. Extrapolated, that gives about 13.8 M in 2035 and 10.6 M in 2050. This is a mechanical trend, not a forecast. [VN-direct] Low. [estimate], 2035 and 2050.

**What a shift in protein supply means for these workers (our assessment).** [VN-direct] Low. [estimate].
- The livestock workforce is already consolidating under disease, integrators, antibiotic rules and ageing. A protein shift on QNT's S-ALT scale (10% of meat demand replaced by plant-based and fermented food by 2050) would add little to that pressure.
- Fermentation plants are capital-intensive: labour is 7% (biomass) to 17% (precision fermentation) of cost in the GFI APAC and Hawkwood plant models (RGN-01). They create few jobs per tonne, mostly skilled.
- The larger distributional question is who captures feedstock value. S-ALT would need about 5.4 Mt of fresh cassava roots in 2050 (QNT), grown largely by smallholders. Contract terms for cassava, rice by-products and brewery residues decide whether farm households gain.
- Aquaculture households are growing in scale (5 ha or more: 0.74% to 1.27%). Cheaper fishmeal substitutes would lower their costs rather than displace them.
- **Gap:** national counts of pig-raising households, aquaculture workers and the age of farm workers were not in the census summaries read.

---

## Near-certain trends and critical uncertainties (F1)

| Driver | Classification | Why |
|---|---|---|
| Ageing; working-age population peak about 2035 to 2040 | Near-certain trend | Cohorts already born (GEO-31) |
| Smallholder livestock decline | Near-certain trend | Census, disease, integrators (GEO-15, GEO-36, GEO-47) |
| ASF endemic with evolving strains | Near-certain trend | Annual outbreaks since 2019; recombinant spread (GEO-15, GEO-17) |
| Import dependence for soy protein and maize | Near-certain trend | QNT base case; OECD-FAO (GEO-37) |
| Gas and coal in the power mix to 2035 | Near-certain trend | PDP8 (GEO-26) |
| US, China and Vietnam trade relations | Critical uncertainty | Four US tariff regimes in 16 months; two open Section 301 cases (GEO-04, GEO-05) |
| China's soy demand path | Critical uncertainty | Target missed in 2025; 10% goal for 2030 (GEO-10, GEO-11) |
| Growth path (5% to 10% a year) | Critical uncertainty | Official, USDA and World Bank differ (GEO-33, GEO-35; QNT-02) |
| Mammal-adapted H5N1 or other pandemic | Critical uncertainty (wildcard) | Rising spillover trend; no probability for Vietnam (GEO-43, GEO-44, GEO-46) |
| Delivery of renewables versus LNG | Critical uncertainty | Plans versus delivery (FTG-27, FTG-28; GEO-26) |
| EU extension of EUDR or CBAM to livestock products or feed | Critical uncertainty, low weight before 2030 | Not proposed (GEO-08, GEO-09) |

---

## Signposts

| Signpost | What it would tell a reader | Where to watch |
|---|---|---|
| USTR determinations in the Section 301 cases on Vietnam (excess capacity; IP) | Whether US tariffs on Vietnam rise above 12.5% or become sector-specific (e.g. seafood) | Federal Register; USTR press releases |
| A signed US-Vietnam reciprocal trade agreement and the US share of Vietnamese soy, maize and DDGS imports | Whether input sourcing is politically locked in | Vietnam customs monthly data; USDA GAIN Vietnam |
| China's soybean imports falling below 100 Mt a year; reported soybean-meal inclusion near 10% | Global soy demand easing; cheaper meal for Vietnam | GACC monthly trade; MARA and China Feed Industry Association; USDA GAIN China |
| Argentina keeps the Decree 423/2026 schedule (meal 19.5% by Dec 2027) | Lower meal export prices to 2028 | Boletín Oficial; USDA GAIN Argentina |
| OECD-FAO or USDA long-term baselines extending past 2035 | First published soy and maize trade paths to 2040s | OECD SDMX; USDA ERS baseline |
| EUDR review or CBAM annual review (from 2028) naming meat, feed or nitrogen-intensive food | EU trade rules begin to reach Vietnam's protein exports | EUR-Lex; Council and Parliament press |
| Recombinant ASF share above 50% of outbreaks, or a licensed vaccine protecting against genotype I/II | Worsening or easing of recurring pig-herd shocks | Department of Animal Health; WOAH WAHIS; journals |
| ASF outbreaks above 2,000 a year again | A new epidemic wave; short-run feed demand dip; faster consolidation | Department of Animal Health; NSO herd data |
| Sustained mammal-to-mammal H5N1 transmission, or H5N1 in Vietnamese pigs or cattle | Pandemic wildcard moving closer | WHO Disease Outbreak News; WOAH; CDC |
| Uptake of antibiotic-replacement feed additives after the 2026 ban | Near-term market for fermentation products | Feed-mill disclosures; MAE feed lists |
| First nuclear concrete at Ninh Thuan 1; partner named for Ninh Thuan 2 | Timing of baseload low-carbon power | EVN; MOIT; World Nuclear News |
| EVN tariff changes and DPPA contracts signed by industrial users | Power price path and access to dedicated renewables | MOIT decisions; EVN; industrial-park announcements |
| Real GDP growth averaging above or below 7% in 2026 to 2028 | Which income path (and demand path) is unfolding | NSO quarterly GDP |
| Next census or labour-force survey counts of farm workers and pig households | Pace of smallholder exit | NSO |

---

## Implications by audience

- **Investors.** Price feed-protein theses against a baseline in which imported soybean meal stays cheap to 2035 (Argentine duty cuts, flat Chinese imports). The investable case is resilience, fishmeal substitution and antibiotic-replacement additives, not soy scarcity. Secure renewable power by direct contract; do not count on nuclear before the mid 2030s.
- **Policy makers.** Trade-policy and disease volatility, not trend scarcity, is the main risk to 2035; a feed-protein security indicator (edition 1.0) should track concentration by origin and chokepoint. The 2026 antibiotic ban and endemic ASF make biosecurity and fermentation-made additives a no-regret link between animal health and bioeconomy policy. The working-age peak around 2035 argues for automation-friendly protein industries.
- **Startups.** The earliest domestic market for fermentation skills is feed additives that replace antibiotics, then fishmeal substitutes. Plan for a rising grid tariff and use DPPA.
- **F&B and feed manufacturers.** Diversify origins (Argentina, Brazil, United States) and hold contingency for chokepoint and energy shocks like 2026 (urea +54% in a month). Expect ASF-driven demand dips every two to three years and faster consolidation of customers.
- **Research bodies.** Priority public goods: genomic surveillance of ASF and H5N1; a Vietnam-specific pig and poultry demand and herd model beyond 2035; data on smallholder numbers and ages.
- **International bodies.** Leverage points: ASF vaccine matching to recombinant strains; One Health surveillance for mammalian H5N1; just-transition support for small pig and poultry households already exiting; traceability tools that let Vietnamese seafood and feed meet EU rules.

---

## Disagreements log

| Topic | Claim A | Claim B | Position taken |
|---|---|---|---|
| US tariff on Vietnam, Aug 2025 to Feb 2026 | 46% until the Supreme Court ruling (commercial tariff site, GEO-48) | 20% maintained under EO 14257 (joint statement, GEO-02) | 20%. 46% was announced in April 2025 but not applied; the commercial site conflates them. |
| China soybean-meal share in feed | Below 13% in 2023 (official, cited in GEO-10) | About 16% in 2024 (USDA and industry, GEO-10); 13.4% in 2025 (GEO-11) | Target missed; report a 13 to 16% range; do not assume the 10% 2030 target is met. |
| Ninh Thuan nuclear timing | Both plants by end-2030 (Prime Minister, GEO-28) | "By 2035" (WNA, GEO-27); PDP8 window 2030 to 2035 (GEO-26) | Plan on 2031 to 2035 at the earliest for first power. |
| Growth to 2030 | 10% a year or more (official, GEO-33) | 5.7% a year average to 2035 (USDA, QNT-02) | Treat 10% as a target, not a projection. Use the USDA-type path as the central case, as QNT does. |
| ASF vaccines | Licensed vaccines control ASF (official promotion, implicit in the national plan) | Incomplete protection against recombinant strains and safety concerns (GEO-18, GEO-19) | Peer-reviewed evidence: vaccines are a partial tool; recurrence should be assumed. |
| Brazilian soy growth | OECD-FAO baseline: production +5% and exports flat to 2035 (GEO-37) | Past decade of fast expansion (not re-measured here) | Report the OECD-FAO baseline as published; flag it as possibly conservative. |
| Urban share by 2050 | 46.5% (UN WUP, national definitions, GEO-32) | Possible higher official urbanisation targets (not verified in this wave) | Use the UN series; flag definition risk. |

---

## Open questions and gaps (cheapest way to close)

1. **Number of pig-raising and aquaculture households, and age of farm workers, 2025.** Read the full NSO census report (TDT-2025 PDF on nso.gov.vn) tables on livestock and aquaculture.
2. **Aquaculture and fisheries workforce, 2025.** NSO labour-force survey tables; FAO country profile.
3. **Preferential tariffs on HS 2102, 2106.10 and 3504 under ACFTA and RCEP.** Would show whether Chinese yeast and microbial protein enter duty-free. Check the ACFTA and RCEP tariff schedules on thuvienphapluat.vn (Decrees on special preferential import tariffs 2022 to 2027).
4. **Magnitude of the 2023 to 2024 Panama Canal restrictions for grain.** UNCTAD Review of Maritime Transport 2024, chapter on chokepoints (PDF).
5. **Primary text of China's 15th Five-Year Plan on feed, soybeans and biomanufacturing targets.** Xinhua full text (Chinese), sections on food security and future industries.
6. **Vietnam's national AMR action plan targets for animals to 2030.** Decision text on thuvienphapluat.vn; MAE Department of Animal Health.
7. **ASF vaccine uptake since 2024 and share of recombinant outbreaks in 2025 to 2026.** Department of Animal Health reports; the research groups behind GEO-17 and GEO-19.
8. **EVN tariff history 2023 to 2026 and any 2026 adjustment.** MOIT decisions on thuvienphapluat.vn.
9. **Long-run soy and maize price paths after 2035.** None published (edition 1.0, QNT, CLM agree). Only model scenarios (IMPACT, GLOBIOM) exist; request Vietnam-specific runs from IFPRI.
10. **Chinese industrial feed output for 2025.** China Feed Industry Association annual release; needed to firm up the 9 Mt soybean-meal saving estimate.

## Leads

- USTR's Section 301 excess-capacity case covers "most major trading partners"; a sectoral outcome on seafood or processed food would matter most for Vietnam's protein exports.
- The OECD SDMX API used here (recipe in QNT notes) can return any country and commodity to 2035; a full exporter table for maize, soybean, meal and fishmeal (Peru, Chile) would be cheap to add.
- GEO-45 (Global Food Security, 2026) analyses food security in the 2026 US-Iran war; the full text may give fertiliser and freight magnitudes for Asia.
- IFPRI's export-restrictions dataset behind GEO-42 could give restriction frequencies for soy, maize and fishmeal by exporter.
- The Emerging Infectious Diseases 2026 paper (GEO-17) and the 2026 vaccine review (GEO-19) are open access; their full texts give province-level recombinant data.
- World Bank "Viet Nam 2045: Breaking Through" (July 2025) on institutions complements the trade report; not mined for numbers here.

Threads stopped: shipping-chokepoint magnitudes after 2017 (fetches blocked), H5N1 herd counts from USDA pages (JavaScript), and pig-household counts (census PDF not read). Further searching returned repetition or blocked pages.

---

## Sources

- **GEO-01.** Vietnam Briefing (Dezan Shira and Associates). "US Supreme Court Blocks Trump's Tariffs: Impacts on Vietnam-US Trade." February 2026. https://www.vietnam-briefing.com/news/us-supreme-court-blocks-trumps-tariffs-implications-for-vietnam-us-trade.html/ . Accessed 2026-09-24. Supreme Court ruling of 20 Feb 2026; Section 122 at 10%. Type: consultancy press.
- **GEO-02.** The White House. "Joint Statement on United States-Vietnam Framework for an Agreement on Reciprocal, Fair, and Balanced Trade." 26 Oct 2025. https://www.whitehouse.gov/briefings-statements/2025/10/joint-statement-on-united-states-vietnam-framework-for-an-agreement-on-reciprocal-fair-and-balanced-trade/ . Accessed 2026-09-24. 20% rate maintained; agricultural barriers; 20 MOUs over USD 2.9 bn. Type: gov.
- **GEO-03.** Global Trade Alert. "From IEEPA to Section 122: What Changed on 20 February 2026." 2026. https://globaltradealert.org/blog/from-ieepa-to-section-122 . Accessed 2026-09-24. Section 122 surcharge, 150 days from 24 Feb 2026 to 24 Jul 2026; planned Section 301 cases. Type: research organisation.
- **GEO-04.** Office of the United States Trade Representative. "Notice of Actions in Section 301 Investigations of Acts, Policies and Practices of Various Economies." Federal Register document 2026-15181, 28 Jul 2026. https://www.federalregister.gov/documents/2026/07/28/2026-15181/notice-of-actions-in-section-301-investigations-of-acts-policies-and-practices-of-various-economies . Accessed 2026-09-24. 12.5% on products of Vietnam from 24 Jul 2026. Type: gov/law.
- **GEO-05.** Federal Register API search results: "Initiation of Section 301 Investigation: Vietnam's [IP] Protection" (3 Jun 2026) and "Initiation of Section 301 Investigations: Structural Excess Capacity" (17 Mar 2026). https://www.federalregister.gov/api/v1/documents.json?conditions[term]=%22Section%20301%22%20Vietnam&order=newest . Accessed 2026-09-24. Titles and abstracts only. Type: gov.
- **GEO-06.** The White House. "Fact Sheet: President Donald J. Trump Strikes Deal on Economic and Trade Relations with China." 1 Nov 2025. https://www.whitehouse.gov/fact-sheets/2025/11/fact-sheet-president-donald-j-trump-strikes-deal-on-economic-and-trade-relations-with-china/ . Accessed 2026-09-24. Soybean purchase commitments 2025 to 2028. Type: gov (party to the deal; claims).
- **GEO-07.** Council of the European Union. "Deforestation: Council signs off targeted revision to simplify and postpone the regulation." 18 Dec 2025. https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/deforestation-council-signs-off-targeted-revision-to-simplify-and-postpone-the-regulation/ . Accessed 2026-09-24. EUDR dates; simplification review by 30 Apr 2026. Type: gov.
- **GEO-08.** European Commission, DG Environment. "Commission updates product scope and tools to support EUDR." 13 Jul 2026. https://environment.ec.europa.eu/news/commission-updates-product-scope-and-tools-support-eudr-2026-07-13_en . Accessed 2026-09-24. Scope changes; application dates. Type: gov.
- **GEO-09.** European Parliamentary Research Service. "Extension of CBAM scope to downstream goods and anti-circumvention measures." At a glance, September 2026, ATA(2026)791461. https://eprs.europarl.europa.eu/contents/publications/EPRS/2026/09/EPRS_ATA(2026)791461.html . Accessed 2026-09-24. CBAM sectors; downstream proposals; annual review from 2028. Type: gov research.
- **GEO-10.** farmdoc daily (University of Illinois). "Can China Reduce Soybean Import Demand? Evaluating Soybean Meal Reduction Efforts." December 2025. https://farmdocdaily.illinois.edu/2025/12/can-china-reduce-soybean-import-demand-evaluating-soybean-meal-reduction-efforts.html . Accessed 2026-09-24. MARA plan targets; official vs USDA shares; imports above 100 Mt. Type: academic extension.
- **GEO-11.** South China Morning Post. "China failed to hit 2025 soybean meal dependence target. US deal makes it harder." 9 Feb 2026. https://www.scmp.com/economy/china-economy/article/3342864/china-failed-hit-soybean-meal-dependence-targets-last-year-us-deal-makes-it-harder . Accessed 2026-09-24. 13.4% in 2025; 10% target for 2030. Type: press.
- **GEO-12.** Wikipedia. "15th Five-Year Plan." Revision read 2026-09-24. https://en.wikipedia.org/wiki/15th_Five-Year_Plan . Adoption 12 Mar 2026; grain capacity above 1.45 trillion jin by 2030. Type: encyclopaedia (secondary; Low to Medium).
- **GEO-13.** Xinhua via english.www.gov.cn. "Key recommendations document outlines priorities in China's next five-year blueprint." 25 Oct 2025. https://english.www.gov.cn/news/202510/25/content_WS68fc10abc6d00ca5f9a0703e.html . Accessed 2026-09-24. Biomanufacturing among "future industries". Type: gov press.
- **GEO-14.** Nguyen-Thi T., Pham-Thi-Ngoc L., Nguyen-Ngoc Q., et al. "An Assessment of the Economic Impacts of the 2019 African Swine Fever Outbreaks in Vietnam." Frontiers in Veterinary Science 8:686038. 2021. https://doi.org/10.3389/fvets.2021.686038 . Accessed 2026-09-24 (via Scite). Same as MAC-37. Nearly 6 M pigs; price rises by sector; traded volume halved. Type: peer-reviewed.
- **GEO-15.** Chuong V.D., Schambow R.A., Nguyen D., et al. "Epidemiology and Control of African Swine Fever in Vietnam: A Scoping Review." Pathogens 14(4):329. 2025. https://doi.org/10.3390/pathogens14040329 . Accessed 2026-09-24. Outbreak counts 2019 to 2024; structure shift; vaccine doses. Type: peer-reviewed.
- **GEO-16.** Le V.P., Nguyen V.T., Le T.B., et al. "Detection of Recombinant African Swine Fever Virus Strains of p72 Genotypes I and II in Domestic Pigs, Vietnam, 2023." Emerging Infectious Diseases 30(5). 2024. https://doi.org/10.3201/eid3005.231775 . Accessed 2026-09-24 (abstract via OpenAlex). Six northern provinces. Type: peer-reviewed.
- **GEO-17.** Nguyen T.V.H., Kim Y.-H., Nguyen V.D., et al. "Rapid Spread of Recombinant African Swine Fever Virus Genotypes I and II, Vietnam, 2023-2024." Emerging Infectious Diseases 32(4). 2026. https://doi.org/10.3201/eid3204.251688 . Accessed 2026-09-24 (abstract via OpenAlex; CDC page blocked to fetch). 14.1% to 42.2%; vaccine resistance. Type: peer-reviewed.
- **GEO-18.** Diep N.V., Duc N.V., Ngoc N.T.H., et al. "Genotype II Live-Attenuated ASFV Vaccine Strains Unable to Completely Protect Pigs against the Emerging Recombinant ASFV Genotype I/II Strain in Vietnam." Vaccines 12(10):1114. 2024. https://doi.org/10.3390/vaccines12101114 . Accessed 2026-09-24 (abstract). Type: peer-reviewed.
- **GEO-19.** Ngo T.T.N., Oh T., Do D.T. "The Prospects and Challenges of Live Attenuated Vaccines Against African Swine Fever Virus in Vietnam." Vaccines 14(3):284. 2026. https://doi.org/10.3390/vaccines14030284 . Accessed 2026-09-24 (abstract and full-text excerpts via Scite). Licensed vaccines and concerns. Type: peer-reviewed review.
- **GEO-20.** Nguyen D.M., Deguchi H., Ichikawa M. "Agent-based simulation on avian influenza in Vietnam." 7th International Conference on Service Systems and Service Management. 2010. https://doi.org/10.1109/icsssm.2010.5530215 . Accessed 2026-09-24 (abstract). Cites World Bank 2005: 45 M poultry, 0.1 point of GDP. Type: conference paper (secondary citation).
- **GEO-21.** Nguyen T.-Q., Hutter C.R., Markin A., et al. "Emergence and interstate spread of highly pathogenic avian influenza A(H5N1) in dairy cattle in the United States." Science. 2025. https://doi.org/10.1126/science.adq0900 . Accessed 2026-09-24 (abstract). Single spillover; cattle-movement spread. Type: peer-reviewed.
- **GEO-22.** Chang Y.-Y., Arias Gonzáles J.L., Rattenborg E., de Jong M.C.M., Conrady B. "Modeling the spillover risk of highly pathogenic avian influenza from wild birds to cattle in Denmark." Preventive Veterinary Medicine. 2026. https://doi.org/10.1016/j.prevetmed.2026.106844 . Accessed 2026-09-24 (abstract). More than 1,000 US herds. Type: peer-reviewed.
- **GEO-23.** US Centers for Disease Control and Prevention. "H5 Bird Flu: Current Situation." Updated 6 Mar 2026. https://www.cdc.gov/bird-flu/situation-summary/index.html . Accessed 2026-09-24. 71 human cases since Feb 2024; risk "low". Type: gov.
- **GEO-24.** Sài Gòn Giải Phóng. "Từ năm 2026 cấm sử dụng kháng sinh trong chăn nuôi ở Việt Nam." 5 Dec 2023. https://www.sggp.org.vn/tu-nam-2026-cam-su-dung-khang-sinh-trong-chan-nuoi-o-viet-nam-post717015.html . Accessed 2026-09-24. Ban on prophylactic antibiotics from 1 Jan 2026 (Decree 13/2020); growth promoters banned since 2018. Type: press reporting MARD.
- **GEO-25.** Mulchandani R., Wang Y., Gilbert M., Van Boeckel T.P. "Global trends in antimicrobial use in food-producing animals: 2020 to 2030." PLOS Global Public Health 3(2):e0001305. 2023. https://doi.org/10.1371/journal.pgph.0001305 . Accessed 2026-09-24 (via Scite). 99,502 t to 107,472 t. Type: peer-reviewed.
- **GEO-26.** Prime Minister. Decision 768/QD-TTg approving the revised National Power Development Plan 2021 to 2030, vision 2050. 15 Apr 2025. https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-768-QD-TTg-2025-Dieu-chinh-Quy-hoach-phat-trien-dien-luc-quoc-gia-thoi-ky-2021-2030-651977.aspx . Accessed 2026-09-24. 2030 fossil and nuclear capacity; 2050 LNG and converted coal; growth assumptions. Same as FTG-15. Type: law.
- **GEO-27.** World Nuclear Association. "Nuclear Power in Vietnam." Country profile, 2026 update. https://world-nuclear.org/information-library/country-profiles/countries-t-z/vietnam . Accessed 2026-09-24. 2023 generation mix; nuclear restart; Ninh Thuan 1 and 2 status. Type: industry association.
- **GEO-28.** World Nuclear News. "Vietnam, Russia sign agreement on new nuclear plant." March 2026. https://www.world-nuclear-news.org/articles/vietnam-russia-intergovernmental-agreement-on-new-nuclear . Accessed 2026-09-24. Agreement of 23 Mar 2026; two VVER-1200; end-2030 target. Type: trade press.
- **GEO-29.** Global Energy Monitor. "Thi Vai LNG Terminal." GEM.wiki, 2026. https://www.gem.wiki/Thi_Vai_LNG_Terminal . Accessed 2026-09-24. Capacity, first cargo, April 2026 upgrade. Type: NGO database.
- **GEO-30.** Ministry of Industry and Trade. "Điều chỉnh giá bán lẻ điện bình quân từ ngày 10/5/2025." May 2025. https://moit.gov.vn/tin-tuc/phat-trien-nang-luong/dieu-chinh-gia-ban-le-dien-binh-quan-tu-ngay-10-5-2025.html . Accessed 2026-09-24. VND 2,204.0655 per kWh; +4.8%; cost reasons. Type: gov.
- **GEO-31.** UN DESA, World Population Prospects 2024, medium variant, via Our World in Data grapher "population-by-age-group-with-projections" (filtered CSV for Vietnam). https://ourworldindata.org/grapher/population-by-age-group-with-projections . Accessed 2026-09-24. Age groups 2015 to 2050. Type: statistics (re-published).
- **GEO-32.** UN DESA, World Urbanization Prospects, via Our World in Data grapher "urban-and-rural-population-2050" (filtered CSV for Vietnam). https://ourworldindata.org/grapher/urban-and-rural-population-2050 . Accessed 2026-09-24. Urban and rural population 2020 to 2050. Type: statistics (re-published).
- **GEO-33.** Communist Party of Vietnam portal (daihoidang.vn). "Các mục tiêu, chỉ tiêu phát triển kinh tế chủ yếu 5 năm 2026-2030." 23 Feb 2026. https://daihoidang.vn/cac-muc-tieu-chi-tieu-phat-trien-kinh-te-chu-yeu-5-nam-2026-2030-post6969.html . Accessed 2026-09-24. 14th Congress targets: growth 10% or more; GDP per capita about USD 8,500 in 2030. Type: official.
- **GEO-34.** World Bank. "World Bank Report Outlines Path to High Income for Viet Nam Through Higher Value Trade and Economic Reforms." Press release, 21 Nov 2024. https://www.worldbank.org/en/news/press-release/2024/11/21/world-bank-report-outlines-path-to-high-income-for-viet-nam-through-higher-value-trade-and-economic-reforms . Accessed 2026-09-24. About 6% per-capita growth needed; half of GDP export-linked. Type: international organisation.
- **GEO-35.** World Bank. "Viet Nam 2045: Trading Up in a Changing World. Pathways to a High-Income Future." November 2024. Full text: https://documents1.worldbank.org/curated/en/099111424204523679/txt/P178784-e07719d0-909c-43d9-9b24-81b4dcb14765.txt . Accessed 2026-09-24. "More than tripling" income; 6% a year for twenty years. Type: international organisation.
- **GEO-36.** National Statistics Office (NSO). "Thông cáo báo chí một số kết quả chính thức của Tổng điều tra nông thôn, nông nghiệp năm 2025." April 2026. https://www.nso.gov.vn/tin-tuc-thong-ke/2026/04/thong-cao-bao-chi-mot-so-ket-qua-chinh-thuc-cua-tong-dieu-tra-nong-thon-nong-nghiep-nam-2025/ . Accessed 2026-09-24. Rural households, farm workers, scale shares, farms. Type: gov/statistics.
- **GEO-37.** OECD and FAO. Agricultural Outlook 2026-2035, dataflow DSD_AGR@DF_OUTLOOK_2026_2035 (SDMX API), series for BRA, ARG, CHN, USA; soybeans (CPC_0141), maize (CPC_0112), protein meal (CPC_21920). https://sdmx.oecd.org/public/rest/data/OECD.TAD.ATM,DSD_AGR@DF_OUTLOOK_2026_2035,1.1/BRA+ARG+CHN.A.CPC_0141+CPC_0112+CPC_21920.QP+EX+IM..?startPeriod=2025&endPeriod=2035 . Accessed 2026-09-24. Read through a summarising fetch tool; annual sequences are smooth. Type: international model projection.
- **GEO-38.** Beccar Varela. "Reducción de derechos de exportación para el sector agroindustrial: Decreto N° 423/2026." June 2026. https://beccarvarela.com/novedades/reduccion-de-derechos-de-exportacion-para-el-sector-agroindustrial-decreto-n-423-2026/ . Accessed 2026-09-24. Duty schedule to Dec 2028. Type: law-firm summary of a decree.
- **GEO-39.** Infobae. "Argentina raises export duties on soybean oil and flour from 31 to 33." 19 Mar 2022. https://www.infobae.com/en/2022/03/19/argentina-raises-export-duties-on-soybean-oil-and-flour-from-31-to-33 . Accessed 2026-09-24 (search-result title only). Type: press (Low).
- **GEO-40.** Bailey R., Wellesley L. "Chokepoints and Vulnerabilities in Global Food Trade." Chatham House, June 2017. https://www.chathamhouse.org/2017/06/chokepoints-and-vulnerabilities-global-food-trade . Accessed 2026-09-24. 14 chokepoints; 54%; Malacca and soy. Related peer-reviewed version: Wellesley et al. 2017, https://doi.org/10.1016/j.rtbm.2017.07.007 . Type: think tank.
- **GEO-41.** UNCTAD. Review of Maritime Transport 2024. https://doi.org/10.18356/9789211065923 . Accessed 2026-09-24 (abstract via OpenAlex). Suez and Panama vulnerability. Type: international organisation.
- **GEO-42.** Mamun A., Laborde D. "Role of International Price and Domestic Inflation in Triggering Export Restrictions on Food Commodities." Agricultural Economics 56(6):905 to 923. 2025. https://doi.org/10.1111/agec.70041 . Accessed 2026-09-24 (abstract via Scite). Drivers of export restrictions over four crises. Type: peer-reviewed.
- **GEO-43.** Meadows A.J., Stephenson N., Madhav N.K., Oppenheim B. "Historical trends demonstrate a pattern of increasingly frequent and severe spillover events of high-consequence zoonotic viruses." BMJ Global Health 8(11):e012026. 2023. https://doi.org/10.1136/bmjgh-2023-012026 . Accessed 2026-09-24. +4.98% events and +8.7% deaths a year. Authors at a biotechnology firm. Type: peer-reviewed.
- **GEO-44.** Marani M., Katul G.G., Pan W.K., Parolari A.J. "Intensity and frequency of extreme novel epidemics." PNAS 118(35). 2021. https://doi.org/10.1073/pnas.2105482118 . Accessed 2026-09-24. Extreme epidemic probability up to threefold. A correction was published in 2023 (https://doi.org/10.1073/pnas.2302169120; not read). Type: peer-reviewed.
- **GEO-45.** Naja F., Hazim K., Alameddine M.S. "Food security amid the US Iran war: a food system analysis and a framework for coordinated multilevel action." Global Food Security 49:100919. 2026. https://doi.org/10.1016/j.gfs.2026.100919 . Accessed 2026-09-24 (title and metadata only; closed access). Type: peer-reviewed (not read).
- **GEO-46.** Amano M., Nguyen T.T.N., Nguyen L.K.H., et al. "Tiger deaths in Vietnam due to infection with H5N1 highly pathogenic avian influenza virus bearing mutations associated with mammalian host adaptation." Emerging Microbes and Infections. 2025. https://doi.org/10.1080/22221751.2025.2582252 . Accessed 2026-09-24 (abstract). 47 tigers and 3 leopards, Aug to Oct 2024. Type: peer-reviewed.
- **GEO-47.** Nhân Dân. "Ngành chăn nuôi đứng trước những thách thức về chuyển đổi cơ cấu sản xuất." 14 Aug 2024. https://nhandan.vn/nganh-chan-nuoi-dung-truoc-nhung-thach-thuc-ve-chuyen-doi-co-cau-san-xuat-post824249.html . Accessed 2026-09-24. Household livestock share falling 5 to 7% a year; pig market shares by owner type. Type: press (official conference).
- **GEO-48.** Tariffstool.com. "Vietnam Tariff 2026." 2026. https://www.tariffstool.com/tariffs-from-vietnam . Accessed 2026-09-24. Used only in the disagreements log; claims a 46% rate applied until Feb 2026, contradicted by GEO-02. Type: commercial website (Low).
