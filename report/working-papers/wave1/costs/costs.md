# M9 Economics: what it costs to make protein in Vietnam, and what price it must beat

Agent: COSTS (wave 1). Edition date: 23 September 2026. Source prefix: COST.
Data files in this folder: `cost_inputs.csv` (61 rows), `commodity_prices.csv` (38 rows), `tea_benchmarks.csv` (25 rows).
Exchange rate used throughout: 26,000 VND per USD (Vietcombank buy 25,800 / sell 26,210 on 23 Sep 2026, COST-26).

Important limits of this wave. The shared web-search budget ran out after about 20 searches in this session. After that I could only open pages whose address I already knew, use site-internal document look-ups (thuvienphapluat.vn, nso.gov.vn), and use the Scite literature database. As a result, several Part B domestic series (fishmeal by grade, domestic soybean meal, cassava starch, molasses) and some Part A items (engineer salaries, construction cost per m2, logistics rates, gas prices) are gaps. They are listed with the cheapest way to close them. Page failures are logged at the end.

---

## Headline findings

1. **Industrial power costs about USD 0.073 to 0.081 per kWh for a plant that runs 24 hours a day.** The manufacturing tariff has not changed since 10 May 2025 (average retail price 2,204 VND/kWh before VAT, up 4.8%). At 22 to 110 kV the prices are 1,190 (off-peak), 1,833 (normal) and 3,398 (peak) VND/kWh. With the new evening peak hours in force from 22 April 2026, a 24/7 plant pays a blended 1,905 to 2,110 VND/kWh depending on voltage (1,952 at 22 kV). [VN-direct, High] (COST-01, COST-03; blended figures are my calculation)
2. **No tariff increase was found between May 2025 and July 2026, but the rules now allow more frequent changes.** Decree 278/2026/ND-CP lets EVN move the average price by 2% to under 5% after a MOIT review. A two-part tariff (capacity plus energy charge) is only shadow-billed in 2026 for users of 200,000 kWh or more per month at 22 kV or above, so a capacity charge could arrive from 2027. [VN-direct, Medium] (COST-04, COST-05)
3. **Direct renewable power purchase (DPPA) may save around 10%, but this is not proven.** Decree 57/2025 was amended by Decree 243/2026 (26 June 2026), which removed price caps on private-wire deals. One consultancy worked example puts a grid-connected DPPA at about 1,895 VND/kWh, against about 2,128 VND/kWh from EVN. This is modelled and comes from a single source, and a future capacity charge could wipe out the saving. [VN-direct, Low] (COST-06, COST-07)
4. **Vietnam's grid emits about 0.66 kg CO2 per kWh.** The latest official figure is 0.6592 tCO2/MWh for 2023, published on 3 December 2024. There is no official figure for 2024 or 2025 yet. Researchers estimate 0.6811 for 2024 and 0.6235 for 2025. So in Vietnam, a process that uses a lot of electricity carries a high Scope 2 footprint unless it buys renewable power. [VN-direct, High for the 2023 figure] (COST-08, COST-09)
5. **Labour is cheap, but the prior draft used an outdated minimum wage.** From 1 January 2026 the Region I minimum wage is 5,310,000 VND/month, about USD 204 (Decree 293/2025/ND-CP). The earlier draft used 4.96 million, which is the 2024 to 2025 level. Average employee income was 9.0 million VND/month (about USD 346) in Q2 2026. Employer contributions add about 23.5% on top. [VN-direct, High; on-costs Medium] (COST-19, COST-20)
6. **Industrial land and ready-built factories are cheaper in the north for land and about the same for factories.** In Q2 2026, industrial land averaged USD 186/m2 for the lease term in the south (HCMC 188, Dong Nai 190, Tay Ninh 180) and USD 138/m2 in the north. Ready-built factory rent was USD 4.9/m2/month in the south and USD 5.0 in the north. [VN-direct, Medium] (COST-21, COST-22)
7. **Water is a minor cost.** HCMC charges production users 12,100 VND/m3 (16,625 VND, about USD 0.64, including VAT and the wastewater service charge), unchanged in 2025 and 2026. Hanoi charges 16,000 VND/m3. Industrial parks charge about USD 0.3 to 0.4/m3 to treat wastewater, with surcharges for high-COD effluent. [VN-direct, Medium; park fees Low] (COST-10, COST-11, COST-13, COST-14)
8. **Heat from biomass is much cheaper than heat from LPG.** Industrial LPG in HCMC cost about 49,000 VND/kg (USD 1.89) in September 2026. Rice husk pellets sell at about 2,190 VND/kg, which means about 420 to 590 VND per kg of steam on fuel alone. One supplier claims 830 to 870 VND/kg of steam all-in. Natural gas prices for industry are not published. [VN-direct, Low to Medium] (COST-15, COST-16, COST-17, COST-18)
9. **Feed is VAT-exempt (non-taxable), and that is a cost for new feed-protein makers.** Under the VAT Law 48/2024/QH15 (Art. 5(3), in force 1 July 2025), animal feed and aquafeed are "not subject to VAT". So a plant making a feed protein cannot reclaim the VAT it pays on equipment, power and inputs. By my estimate this adds roughly 5 to 10% to its taxed input costs. A food ingredient taxed at 8 to 10% can reclaim that input VAT. [VN-direct, High for the law; the cost effect is an estimate] (COST-24, COST-25)
10. **These are the feed-protein prices to beat.** Peruvian fishmeal (65% protein, CIF) reached USD 1,837/t in March 2026, which is about USD 2,830 per tonne of protein and 16% above January 2025. Soybean meal (Argentine, CIF Rotterdam) was USD 404/t, about USD 880 per tonne of protein. Vietnam imported 6.8 Mt of corn in H1 2026 at an average of about USD 251/t CIF. [general / VN-direct, Medium] (COST-27, COST-28, COST-34)
11. **Nitrogen got more expensive in 2026.** World urea jumped from USD 472/t (February 2026) to USD 726/t (March 2026), as the Middle East conflict pushed up oil prices. Phu My urea in Vietnam was about 11,060 VND/kg (USD 425/t) in March 2026. [general / VN-direct, Medium] (COST-30, COST-33)
12. **These are the food prices to beat, per 100 g of protein, at a national grocery chain (23 September 2026):** eggs 34,000 to 40,000 VND; chicken breast 39,500 to 45,500; lean pork 63,000 to 69,500; tofu 39,000 to 77,000 (labels state 4.7 to 9.3 g protein per 100 g); dried soy mock meat about 51,000; an imported branded plant-based burger about 542,000. Chicken and eggs set the floor. [VN-direct, Medium] (COST-39 to COST-42)
13. **We verified these published cost benchmarks against the primary papers:**
    - Mycoprotein: USD 3.55/kg wet (USD 29.6/kg protein), with capex of about USD 108 M for 2 t/h wet (Risner et al. 2023; full text read).
    - Single-cell protein (SCP) from industrial off-gas: USD 4.15/kg, with capex of USD 320 M for 20 kt/yr (Vlaeminck et al. 2023).
    - SCP from hydrogen and CO2: minimum selling price (MSP) USD 2,070/t (Jean and Brown 2024; abstract only).
    - SCP made with renewable electricity: EUR 5.5 to 6.1 per kg protein in 2028, falling to EUR 2.1 to 2.3 by 2050 (Fasihi et al. 2025).
    - Cultured meat: USD 37 to 51/kg of wet cells (Humbird 2021).

    [general, High] (COST-43 to COST-47)
14. **Do not borrow a single "capex per m3" figure.** Among the verified studies, total plant capex per m3 of reactor volume differs about 7-fold: about USD 51,000/m3 in the off-gas SCP study versus about USD 350,000/m3 in the mycoprotein study. Per annual tonne, the range is USD 16,000 to 23,000 for SCP and mycoprotein and about USD 96,000 for cultured meat. [general, High for inputs; the ratios are my derivation] (COST-43, COST-44, COST-47)
15. **Tropical cooling is a real penalty, but a modest one.** Aerobic growth releases about 460 kJ per mol of O2, which is roughly 12 to 18 MJ per kg of dry biomass. In southern Vietnam, cooling-tower water arrives at about 31 to 33 C, so it cannot hold a 30 C broth, and the plant needs chilled water. My indicative estimate of the penalty is about 0.7 to 1.35 kWh per kg of dry biomass, plus chiller capex: about USD 70 to 180 per tonne, or roughly 2 to 4% of the cost of fungal feed protein in most cases (1 to 8% at the extremes). Strains that grow at 40 to 45 C avoid most of it. [VN-direct estimate, Low to Medium] (COST-50, COST-51, COST-52; my calculation)
16. **Indicative Vietnamese cost of fungal biomass protein for feed:** USD 2,200 to 6,600 per tonne of product, which is USD 4,050 to 14,700 per tonne of protein. Fishmeal protein costs about USD 2,830 per tonne. Capital charges and maintenance make up 54 to 67% of the cost. The product only nears fishmeal parity if capex is below about USD 6,000 per annual tonne and the carbon comes from a near-free side stream. [VN-direct estimate, Low] (worked example A)
17. **Indicative Vietnamese ex-factory cost of textured soy protein (TVP):** USD 790 to 2,070 per tonne (21,000 to 54,000 VND/kg), which is about 3,700 to 10,700 VND per 100 g of protein. Imported soy flour or concentrate makes up about 70% of the cost. Production cost is not what blocks textured plant protein in Vietnam: its ex-factory cost is roughly 4 to 19 times below the retail price of meat and egg protein, so product quality, demand and distribution margins decide. Vietnam's local cost advantage is small because the main input is imported. [VN-direct estimate, Low] (worked example B)
18. **Vietnam already imports protein ingredients:** USD 31 M of wheat gluten (from China, 59%), USD 34 M of protein concentrates and textured proteins (HS 210610) and USD 22 M of HS 350400 protein substances in 2023. The unit values are weak because UN Comtrade appears to have estimated the quantities. [VN-direct, Low] (COST-36 to COST-38)

---

## Detailed findings

### Part A. Vietnamese input costs

#### A1. Electricity

| Voltage (manufacturing) | Off-peak | Normal | Peak | Blended 24/7 (my calc.) | USD/kWh |
|---|---|---|---|---|---|
| 110 kV and above | 1,146 | 1,811 | 3,266 | 1,905 | 0.073 |
| 22 to under 110 kV | 1,190 | 1,833 | 3,398 | 1,952 | 0.075 |
| 6 to under 22 kV | 1,234 | 1,899 | 3,508 | 2,020 | 0.078 |
| Under 6 kV | 1,300 | 1,987 | 3,640 | 2,110 | 0.081 |

VND/kWh, excluding VAT. Tariff: MOIT Decision 1279/QD-BCT of 9 May 2025, effective 10 May 2025 (COST-01, COST-02). Time windows: MOIT Decision 963 (2026), effective 22 April 2026. Peak is 17:30 to 22:30 Monday to Saturday. Off-peak is 00:00 to 06:00 every day. All other hours are normal (COST-03). Blended price = (30 peak + 42 off-peak + 96 normal hours) / 168 hours per week.

- **Average retail price** is 2,204.0655 VND/kWh, and news reports still quoted it in July 2026 (COST-04). No 2026 increase was found. Decree 278/2026/ND-CP (reported effective about 9 July 2026) changes how EVN adjusts prices: changes of 2% to under 5% need MOIT review (COST-04). [Medium; I did not read the decree text]
- **Two-part tariff:** a pilot started 1 January 2026 for customers using 200,000 kWh or more per month at 22 kV or above. For all of 2026 they receive a reference (shadow) bill alongside the real bill (Electricity Law 2024 Art. 50; Decree 146/2025/ND-CP) (COST-05). No VND/kW rates were published in the source.
- **DPPA:** Decree 57/2025/ND-CP sets two models: a private wire, and a synthetic DPPA over the national grid. Buyers qualify at an average of 200,000 kWh/month or more (Circular 16/2025/TT-BCT, as summarised by COST-06). Under the synthetic model the buyer pays the spot price, plus an EVN DPPA service charge (about 420 VND/kWh, 2025 reference), plus the contract-for-difference settlement, plus retail top-up power. A consultancy example gives 1,895 VND/kWh, about 11% below EVN (COST-06). Decree 243/2026/ND-CP (26 June 2026) amends Decree 57. It removes price caps on physical DPPA and allows retailers, data centres and EV-charging operators to take part (COST-07). [Low to Medium]
- **Grid emission factor:** 0.6592 tCO2/MWh for 2023 (Official Letter 1726/BDKH-PTCBT, 3 Dec 2024; COST-08). No official 2024 or 2025 value existed as of January 2026. Researcher estimates are 0.6811 (2024) and 0.6235 (2025) (COST-09). The Ministry of Environment has since merged into the Ministry of Agriculture and Environment (MAE), so future figures should come from MAE's Department of Climate Change.

#### A2. Water and wastewater

| Location (post-merger name) | Production water | Basis | Source |
|---|---|---|---|
| Ho Chi Minh City (Ben Thanh Water area) | 12,100 VND/m3 base; 16,625 all-in (5% VAT, 30% wastewater service charge, 8% tax on the service) | 2026, unchanged from 2025 | COST-10 |
| HCMC (former Binh Duong), BIWASE | 13,800 VND/m3 retail for manufacturing; 13,100 wholesale to industrial parks | since 2022, excluding VAT | COST-12 |
| Hanoi | 16,000 VND/m3 (production) | from 1 Jan 2024, Decision 3541/QD-UBND | COST-11 |
| Dong Nai (including former Binh Phuoc) | not found | | gap |
| Industrial parks (broker listings) | water about USD 0.5/m3; wastewater treatment USD 0.28 (VSIP II) to 0.40 (Nam Thang Long) per m3 | undated | COST-13, COST-14 |

Binh Duong and Ba Ria-Vung Tau merged into Ho Chi Minh City on 1 July 2025. BIWASE still publishes its own tariff. Industrial parks set the wastewater charge as F = f x V x K, where K is a pollution coefficient based on COD. So spent fermentation broth may pay a multiple of the base fee or need treatment on site first.

#### A3. Heat and fuel

- **LPG, September 2026:** a 45 kg cylinder costs 2,212,000 VND in HCMC and 2,115,072 VND in Hanoi. That is about 49,000 VND/kg in HCMC including VAT. The Saudi contract price was USD 642.5/t (COST-15).
- **Biomass:** rice husk pellets list at 2,190 VND (per kg, by inference) with 3,200 to 3,900 kcal/kg. Wood pellets list at 3,090 VND and wood shavings at 2,790 VND (COST-16, supplier list, December 2025). Wood pellets exported at USD 120 to 145/t FOB in Q1 2025 (COST-17).
- **Steam:** my fuel-only calculation for rice husk pellets gives 420 to 585 VND per kg of steam (640 kcal per kg of steam, 75 to 85% boiler efficiency). A supplier claims 830 to 870 VND/kg of steam with wood pellets at 85 to 87% efficiency (COST-17). I found no published steam tariffs from industrial parks.
- **Natural gas and CNG:** not published. Gas South says industrial CNG is priced per customer and indexed to fuel oil or LPG (COST-18). This is a gap.

#### A4. Labour

| Item | Value | Source |
|---|---|---|
| Minimum wage from 1 Jan 2026 | Region I 5,310,000; II 4,730,000; III 4,140,000; IV 3,700,000 VND/month (hourly 25,500 / 22,700 / 20,000 / 17,800) | Decree 293/2025/ND-CP, 10 Nov 2025 (COST-19) |
| Average monthly income of employees | 9.0 million VND, Q2 2026 and H1 2026 (+0.72 M year on year) | NSO (COST-20) |
| Employer on-costs | 17.5% social insurance + 3% health insurance + 1% unemployment insurance + 2% trade-union fee = about 23.5% | Medium; not re-read this wave |
| Engineer and QA salaries | not found | gap |

Region I covers the urban wards of HCMC and Hanoi and the Bien Hoa area of Dong Nai. In the cost stacks I assume a skilled plant workforce averages 12 to 20 million VND/month gross, with 13 months of pay and 23.5% on-costs. That gives USD 7,400 to 12,350 per full-time employee (FTE) per year. This is an assumption, not a survey figure.

#### A5. Land and buildings (Q2 2026, Cushman & Wakefield)

| Market | Industrial land (USD/m2 for lease term) | Ready-built factory (USD/m2/month) | Ready-built warehouse (USD/m2/month) |
|---|---|---|---|
| South average | 186.4 | 4.9 | 4.6 |
| HCMC (incl. former Binh Duong, Ba Ria-Vung Tau) | 187.5 (86.1% occupied) | 5.1 | 4.5 |
| Dong Nai (incl. former Binh Phuoc) | 189.6 (73.1%) | 4.9 | 4.7 |
| Tay Ninh (incl. former Long An) | 179.6 (60.9%) | 4.6 | 4.8 |
| North average | 137.7 | 5.0 | 4.9 |

Sources: COST-21, COST-22. Construction cost per m2 was not extracted. The Ministry of Construction's Decision 409/QD-BXD (11 April 2025, Q4 2024 price basis, 10% VAT included) contains the official investment rates, but its industrial chapter was not readable in this wave (COST-23).

#### A6. Taxes and duties

- **VAT:** feed and aquafeed are not subject to VAT (Law 48/2024/QH15, Art. 5(3)). The standard rate is 10%. The 5% rate covers clean water, fertiliser and unprocessed farm products at the commercial stage (Art. 9(2)) (COST-24). A temporary cut from 10% to 8% has applied since 1 July 2025 (Resolution 204/2025/QH15; Decree 174/2025/ND-CP). I did not verify its end date, which is expected to be 31 December 2026 (COST-25).
- **Why it matters:** a feed-protein plant (for example SCP or insect meal) sells a VAT-exempt product. It therefore cannot reclaim input VAT on capex, power and chemicals. A food-ingredient plant can. At 10% VAT on roughly half to all of costs, this is worth about 5 to 10% of input cost (my estimate).
- **Corporate income tax and import duty (link only):** Law 67/2025/QH15 on CIT (standard 20%, preferential rates for encouraged sectors). Import duty exemption for fixed-asset machinery of incentivised projects: Decree 134/2016/ND-CP Art. 14, as amended by Decree 18/2021/ND-CP. The regulation agent covers these.

#### A7. Logistics

Not established in this wave. The only data point: in March to April 2026, oil prices rose with the Middle East conflict, and the press reported logistics costs up 20 to 30% for international and 15 to 20% for domestic transport (COST-33). [Low]

### Part B. Commodity prices

#### B8. Feed commodities

| Commodity | Latest | A year or more earlier | Per tonne protein (latest) | Source |
|---|---|---|---|---|
| Fishmeal, Peru 65%, CIF | USD 1,837/t (Mar 2026) | 1,581 (Jan 2025) | about USD 2,830 | COST-27 |
| Soybean meal, Argentine 45/46%, CIF Rotterdam | USD 404/t (Mar 2026) | 368 (Jan 2025); low 335 (Jul 2025) | about USD 880 | COST-28 |
| Soybeans, US, CIF Rotterdam | USD 473/t (Mar 2026) | 411 (Jan 2025) | | COST-31 |
| Maize, US Gulf FOB | USD 213/t (Mar 2026) | 214 (Jan 2025) | | COST-29 |
| Maize, **Vietnam import unit value** | about USD 251/t CIF (H1 2026; June 258) | | | COST-34 |
| Compound hog feed, Vietnam | 360,000 to 370,000 VND/bag (Mar 2026) | | | COST-33 |
| Live hog, Vietnam | 65,000 VND/kg liveweight (Apr 2026) | | | COST-35 |

- Vietnam imported 6.8 Mt of corn in H1 2026 (+53% year on year), worth USD 1.71 bn. In January to May, Brazil supplied 44%, Argentina 31% and India 0.5 Mt, a new source (COST-34).
- USDA forecasts Vietnam's soybean meal imports at 5.7 Mt and consumption at 7.4 Mt for MY2025/26, rising to 7.8 Mt in MY2026/27 (COST-35).
- **Gaps:** Vietnamese domestic fishmeal prices by grade (55%, 60%, 65%), domestic soybean meal in VND/kg, DDGS, meat and bone meal, poultry by-product meal and fish oil. Searching Vietnamese sources was not possible after the budget ran out.

#### B9. Protein ingredients (Vietnam imports, 2023, UN Comtrade via WITS)

| HS code | Value | Quantity (likely imputed) | Unit value | Main origins |
|---|---|---|---|---|
| 110900 wheat gluten | USD 31.06 M | 12,337 t | 2.52 USD/kg | China 59%, Australia, France |
| 210610 protein concentrates and textured protein substances | USD 33.98 M | 5,763 t | 5.90 USD/kg | USA 46%, China 27% |
| 350400 peptones and other protein substances (incl. some isolates) | USD 22.18 M | 2,421 t | 9.16 USD/kg | China 45%, USA |

Every partner showed exactly the same unit value, which suggests UN Comtrade estimated the quantities. Treat the values as reliable and the unit values as weak (COST-36 to COST-38). There is no separate code for pea protein. Global benchmark prices for soy protein isolate (SPI), soy protein concentrate (SPC), TVP and pea protein were not found.

#### B10. Carbon and nitrogen inputs

- **Carbon:** raw sugar (ISA) was USD 0.33/kg in March 2026, down from 0.40 in January 2025 (COST-32). Vietnamese cassava starch, chips, glucose syrup and molasses prices were not found (the Thai Tapioca Starch Association page errored). The feedstock agent may hold cassava prices. Paddy (IR50404) was 5,326 VND/kg and 5%-broken milled rice 14,000 VND/kg in March 2026 (COST-33).
- **Nitrogen:** Phu My urea was 553,100 VND per 50 kg bag, which is 11,062 VND/kg or USD 425/t (March 2026, COST-33). The World Bank urea series rose to USD 726/t in March 2026 (COST-30). Ammonium sulfate prices were not found.

#### B11. Retail prices of the proteins alt protein would replace

| Product | Retail price | Protein (g/100 g) | VND per 100 g protein | USD per 100 g protein |
|---|---|---|---|---|
| Chicken eggs (box of 10) | 2,400 VND/egg | 6 to 7 g per egg | 34,300 to 40,000 | 1.32 to 1.54 |
| Chicken breast fillet with skin | 90,900 VND/kg | 20 to 23 (assumed) | 39,500 to 45,500 | 1.52 to 1.75 |
| Chicken thigh meat | 79,210 VND/kg | 17 to 19 (assumed) | 41,700 to 46,600 | 1.60 to 1.79 |
| Pork leg | 115,000 VND/kg | 18 to 20 (assumed) | 57,500 to 63,900 | 2.21 to 2.46 |
| Lean pork | 132,000 VND/kg | 19 to 21 (assumed) | 62,900 to 69,500 | 2.42 to 2.67 |
| White tofu (Coop Select) | 36,429 VND/kg | 9.3 (label) | 39,200 | 1.51 |
| Firm tofu (Ichiban momen) | 47,576 VND/kg | 8.92 (label) | 53,300 | 2.05 |
| White tofu (Tafu) | 36,333 VND/kg | 4.71 (label) | 77,100 | 2.97 |
| Dried soy "chops" (An Nhien) | 326,667 VND/kg | 64 (label) | 51,000 | 1.96 |
| Imported plant-based burger (Unconventional) | 813,636 VND/kg | 15 (label) | 542,400 | 20.86 |

Meat and eggs: Bach Hoa Xanh online, HCMC, observed 23 September 2026, many at small promotional discounts (COST-39 to COST-41). Tofu and analogues: AltProtein Vietnam field audit, HCMC, 16 and 20 September 2026 (COST-42). Protein contents for meat are assumptions based on typical food-composition values. I did not re-check them against the Vietnamese Food Composition Table this wave. Pangasius retail was not found. The printed protein content of tofu varies two-fold between labels, so the label-based comparison is fragile.

### Part C. Techno-economic benchmarks

See `tea_benchmarks.csv` for the full list. Key points follow.

#### C12. By technology

- **Mycoprotein (Risner, McDonald and Jones 2023; full text read, COST-43).** Continuous airlift reactors (2 x 155 m3), 2,000 kg/h of wet mycoprotein (about 73% moisture). Capex is about USD 108 M before land, working capital and start-up. The reactors are 66.7% of capex, and one 155 m3 stainless reactor costs about USD 42 M. Cost is USD 3.55/kg wet (USD 29.56/kg protein at 11 to 12% protein). The processed Quorn-like product costs USD 4.03/kg, and its texturing plant about USD 13.8 M. The model assumes US labour at USD 20/h, 5% financing over 20 years, and fixed costs of 3% of annualised capex. The authors conclude that mycoprotein can match beef on protein cost but "will not be an economic alternative for inexpensive products such as chicken". Buying food-grade biotin and zinc sulphate instead of lab grade cut cost by 22%. Quorn's reference output is 2 t/h wet per 155 m3 reactor (Derbyshire and Ayoob 2019, cited). Historical warning: ICI's 1,500 m3 Pruteen feed-SCP reactor ran from 1979 to 1987 and sold at about twice the price of soy protein.
- **SCP from industrial off-gas via acetate (Vlaeminck et al. 2023; key excerpts read, COST-44).** 20,000 t/yr of feed SCP. Capital investment USD 320 M. Unit cost USD 4.15/kg, or USD 2.78/kg if intensified. Facility-dependent costs are 58% of the total and utilities 18%.
- **SCP from hydrogen and CO2 gas fermentation (Jean and Brown 2024; abstract only, COST-45).** MSP USD 2,070/t SCP, using wind-powered electrolysis and CO2 from a corn-ethanol plant, as a replacement for fishmeal or soybean meal in feed.
- **SCP made with renewable electricity (Fasihi et al. 2025; abstract and excerpts, COST-46).** Protein cost EUR 5.5 to 6.1/kg in 2028, EUR 4.0 to 4.5 in 2030 and EUR 2.1 to 2.3 in 2050, at optimal sites. The benchmark plant makes 16.42 kt SCP/yr. Solar power dominates in Asia. I did not extract the values for Vietnamese sites.
- **Solar Foods (company, COST-53).** Factory 01 can make at most 160 t of Solein per year (production started spring 2024). For Factory 02, Business Finland has committed EUR 77.8 M (EUR 39.6 M grant plus EUR 38.1 M R&D loan), and a final investment decision is planned for 2026. Total capex was not disclosed in the pages I read. H1 2026 revenue was EUR 0.1 M.
- **Calysta (Calysseo JV) (tertiary, COST-55).** A 20,000 t/yr FeedKind plant in Chongqing, China. This is the closest operating feed-SCP plant to Vietnam. Capex was not found.
- **Precision fermentation.** I could not verify any peer-reviewed TEA for food proteins in this wave. Capacity reference: Liberation Bioindustries' Richmond, Indiana plant has 600 m3 of fermentation with dedicated downstream processing (DSP) and starts operating in 2026. It is producing beta-lactoglobulin for Vivici. Capex was not disclosed (COST-54). GFI and Synonym (now Roebling) analyses could not be reached.
- **Cultivated meat (Humbird 2021; excerpts, COST-47).** Fed-batch: 24 x 20 m3 reactors making 6.8 kt/yr of wet cell mass at USD 37/kg (amino acids USD 19/kg, growth factors USD 3/kg). Perfusion: total capital investment USD 663 M for 6.9 kt/yr, USD 51/kg. The capital charge factor is 15% per year. Garrison et al. (2022) estimated USD 63/kg at 540 t/yr, which I have only through a 2026 review (COST-49). The numbers in Negulescu et al. (2023) could not be read (COST-48). I did not read the CE Delft 2021 TEA.
- **Plant protein isolate and high-moisture extrusion.** I found no verified capex or opex benchmark. The only Southeast Asian TEA found (Jarunglumlert et al. 2023, Thailand, freeze-alignment meat analogue) had no readable text (COST-56).

#### C13. Fermentation capacity and capex per m3 (derived from verified sources)

| Source | Plant | Total capex | Reactor volume | Capex per m3 | Capex per annual t |
|---|---|---|---|---|---|
| Vlaeminck 2023 | feed SCP, 20 kt/yr | USD 320 M | 6,247 m3 | about USD 51,000 | USD 16,000 (dry) |
| Risner 2023 | food mycoprotein, about 4.7 kt/yr dry | USD 108 M | 310 m3 | about USD 350,000 | about USD 22,800 (dry); about 6,200 (wet) |
| Humbird 2021 | cultured meat, perfusion | USD 663 M | n/a | n/a | about USD 96,000 (wet cells) |

The spread comes from design choices (large low-cost airlift versus many small reactors), hygiene grade (feed versus food) and the capex estimation method. A Vietnamese plan should build its own equipment-level estimate rather than borrow one figure.

#### C14. Tropical cooling (indicative estimate for Vietnam, clearly labelled)

I found no published analysis of fermentation cooling in hot, humid climates. So I built an indicative estimate from general engineering rules.

- **Heat load.** Aerobic growth releases about 460 kJ per mol of O2 consumed (Roels 1983, cited in COST-50). At 0.83 to 1.25 kg O2 per kg of dry biomass, that is 12 to 18 MJ, or 3.3 to 5.0 kWh of heat, per kg. Agitation and aeration power add about 0.5 to 1.0 kWh per kg. For scale: a baker's yeast plant with 7 x 150 m3 reactors in Germany removes about 11 MW on average, about 10.5 kW per m3 (COST-52).
- **Climate.** Assumption, not sourced this wave: design wet-bulb temperature in southern Vietnam is about 27 to 28 C. Cooling towers then deliver water at about 31 to 33 C. A broth at 28 to 32 C (Fusarium, Aspergillus, most yeasts) needs a coolant around 5 to 20 C, so most of the duty must come from chilled water. A temperate plant (design wet-bulb about 18 to 20 C, tower water about 23 to 25 C) can use cooling water for most hours. Cooling water is 4 to 8 times cheaper than chilled water per unit of heat (Towler and Sinnott, cited in COST-50).
- **Energy.** NREL's temperate design uses 0.56 kW of compressor power per ton of refrigeration (COST-51). With 31 to 33 C condenser water plus pumps and fans, I assume 0.75 to 0.9 kW per ton, which is a system COP of about 4.0 to 4.7. Chilled-water power is then 0.81 to 1.5 kWh per kg of dry biomass, against about 0.10 to 0.15 kWh per kg with cooling water only. **The penalty is about 0.7 to 1.35 kWh per kg, or USD 52 to 105 per tonne at USD 0.075 to 0.078 per kWh.**
- **Capex.** At 10 kt/yr and 8,000 h, peak refrigeration is about 1,750 to 3,200 tons. At an assumed USD 800 to 1,500 per ton installed, the chilled-water plant costs about USD 1.4 to 4.8 M, or USD 21 to 72 per tonne per year at a 15% capital charge.
- **Total.** About **USD 70 to 180 per tonne of dry biomass**, roughly 2 to 4% of the indicative cost of fungal feed protein (1 to 8% at the extremes). It is not a showstopper, but it is not zero. The earlier draft's claim that cooling "may offset" Vietnam's power advantage is partly right in energy terms: the extra cooling electricity (0.7 to 1.35 kWh/kg) is about half to 1.7 times the plant's other electricity use. But electricity is a small share of total cost, so the overall effect stays at about 2 to 4%. Thermotolerant strains (above 40 C, as the model in COST-50 discusses for 45 C) or hybrid pre-cooling with tower water can remove most of the penalty.

---

## Worked examples (INDICATIVE, not a feasibility study)

These are order-of-magnitude cost stacks. They combine sourced Vietnamese prices with engineering assumptions, and each line says which is which. Costs are in USD per tonne of product, 2026 prices, at 26,000 VND/USD, excluding VAT, sales, distribution and profit.

### A. Fungal biomass protein for feed (submerged aerobic fermentation on sugar, dried, 45 to 55% crude protein), 10,000 t/yr

| Line | Low | High | Basis and source |
|---|---|---|---|
| Carbon (2.0 to 2.2 t glucose-equivalent per t; yield 0.45 to 0.50 g/g) | 600 | 1,100 | Assumed USD 300 to 500/t glucose-equivalent. Low end near raw sugar at USD 330/t (COST-32); high end is a refined cassava starch or syrup assumption. Near-free side streams (cassava pulp) could cut this line, but need pre-treatment (feedstock agent). |
| Nitrogen (0.17 to 0.20 t urea per t) | 72 | 145 | Phu My urea USD 425/t (COST-33) to world spike USD 726/t (COST-30) |
| Minerals, vitamins, antifoam, enzymes | 50 | 150 | Assumption; Risner shows trace ingredients can matter (COST-43) |
| Electricity excluding cooling (0.8 to 1.5 kWh/kg) | 58 | 117 | Assumed use; price 1,895 (DPPA example, COST-06) to 2,020 VND/kWh (6 to 22 kV blended, COST-01) |
| Cooling electricity (0.1 to 1.5 kWh/kg) | 7 | 117 | Section C14 (thermotolerant/cooling-water case to full chilled water) |
| Steam (4.5 to 6.5 t per t: sterilisation, cleaning, drying) | 78 | 218 | 450 to 870 VND/kg steam (calc. from COST-16; COST-17) |
| Water and wastewater (20 to 40 m3/t) | 18 | 58 | USD 0.64/m3 water (COST-10) plus USD 0.28 to 0.80/m3 treatment incl. COD surcharge (COST-13/14, assumption) |
| Labour (60 to 100 FTE) | 44 | 124 | USD 7,400 to 12,350 per FTE (assumption above NSO average, COST-19, COST-20) |
| Land (5 to 8 ha) | 99 | 185 | USD 186/m2 lease term (COST-21), annualised over 30 to 40 years at 10 to 12% |
| Capital charge (capex USD 8,000 to 20,000 per annual t; 12 to 18% per year) | 960 | 3,600 | Capex range set below and at the verified TEAs (USD 16,000 to 22,800; COST-43, COST-44), allowing 20 to 40% localisation savings; charge factor bracketing Humbird's 15% (COST-47) |
| Maintenance and insurance (3 to 4% of capex) | 240 | 800 | Assumption |
| **Total, USD per t of product** | **2,227** | **6,612** | = 58,000 to 172,000 VND/kg |
| **USD per t of protein** | **4,050** | **14,700** | Compare: fishmeal about 2,830; soybean meal about 880 (COST-27, COST-28) |

Reading: at the low end, capital (charge plus maintenance) is 54% of cost. At the high end it is 67%. At the low end the product is about 43% more expensive than fishmeal per unit of protein. It approaches parity only with capex below about USD 6,000 per annual tonne and a near-free carbon source. This matches the published feed TEAs (MSP of USD 2,070 to 4,150 per tonne of SCP; COST-44, COST-45), which also sit at or above fishmeal. Two further costs push the high case up: feed is VAT-exempt, so input VAT is not reclaimable (about +5 to 10% on taxed inputs, not included above), and the feed approval process in Vietnam takes time.

### B. Textured plant protein (dry TVP from soy flour or concentrate, low-moisture extrusion), 3,000 t/yr on one 1 t/h line

| Line | Low | High | Basis and source |
|---|---|---|---|
| Raw material (1.03 to 1.07 t dry blend per t) | 566 | 1,391 | Assumed defatted soy flour at USD 550/t (soybean meal at USD 404/t, COST-28, plus about USD 150 food-grade premium) up to a 50:50 soy flour/SPC blend at USD 1,300/t (assumption). Imported wheat gluten about USD 2.5/kg (COST-38, Low) |
| Electricity (150 to 350 kWh/t) | 11 | 27 | 1,895 to 2,020 VND/kWh (COST-01, COST-06) |
| Steam (0.4 to 0.8 t per t) | 7 | 27 | As above |
| Water and wastewater (2 to 5 m3/t) | 2 | 7 | As above |
| B2B packaging (20 to 25 kg bags) | 10 | 20 | Assumption |
| Labour (25 to 40 FTE) | 62 | 165 | As above |
| Ready-built factory (2,000 to 3,000 m2) | 39 | 61 | USD 4.9 to 5.1/m2/month (COST-21, COST-22) |
| Capital charge (equipment USD 1.5 to 4.0 M; 12 to 18%) | 60 | 240 | Equipment cost is an assumption (no verified extrusion capex found) |
| Maintenance (3 to 5% of equipment) | 15 | 67 | Assumption |
| QA, lab, certification, overhead | 20 | 60 | Assumption |
| **Total, USD per t of product** | **792** | **2,065** | = 20,600 to 53,700 VND/kg |
| **VND per 100 g of protein (50 to 55% protein)** | **3,700** | **10,700** | Compare retail: eggs 34,000 to 40,000; chicken 39,500 to 46,600; pork 57,500 to 69,500; dried soy analogue about 51,000 (COST-39 to COST-42) |

Reading: raw material is about 70% of cost. Because soy is imported (Vietnam grows about 2% of the soybeans it uses, per prior leads, not re-verified), Vietnam's cost edge is mostly labour and rent, worth perhaps USD 50 to 150 per tonne against a Thai or Chinese plant. Retail prices of dried soy analogues are about 5 to 14 times the indicative ex-factory cost of their protein. So the gap to consumers is made up of distribution, brand and retail margins, and product quality, not manufacturing cost.

---

## Implications by audience

- **VCs and investors:** Model capital charges, not operating costs. In fermentation, 54 to 67% of the indicative cost is capital. Test any Vietnamese feed-SCP pitch against USD 2,830 per tonne of fishmeal protein and against capex per annual tonne (the verified range is USD 16,000 to 23,000 in Western TEAs). A claim below USD 6,000 needs evidence. For plant-based products, manufacturing cost is not the risk; demand and margins are.
- **VCs and investors:** Power is cheap (about USD 0.075/kWh) but carbon-heavy (0.66 tCO2/MWh). Any "low-carbon protein" claim for a power-intensive process in Vietnam needs a DPPA or on-site solar.
- **Policy makers:** Because feed is VAT-exempt, new feed-protein makers cannot reclaim VAT on their capex and inputs. The options are to allow input-VAT credit for new feed ingredients (as with a 0% or 5% rate), or to offset it through import-duty and CIT incentives. MAE should publish grid emission factors for 2024 and 2025. Both are low-cost, concrete fixes.
- **Policy makers:** The new two-part tariff and the rule allowing more frequent price moves (Decree 278/2026) create tariff risk for continuous bioprocess plants. Signalling capacity-charge levels early would help investment decisions.
- **Startups:** Choose thermotolerant strains, or design for hybrid cooling, from day one. In southern Vietnam chilled water adds about USD 70 to 180 per tonne of biomass. A ready-built factory at about USD 5/m2/month is a cheap way to start texturing or extrusion.
- **F&B and feed manufacturers:** Chicken breast and eggs set the retail protein floor at about 34,000 to 46,000 VND per 100 g of protein. Tofu is at a similar level. The dried soy analogues on shelves are already priced near chicken on a protein basis.
- **Academia:** Two useful, cheap public goods: (1) a Vietnam-specific cooling and energy model for aerobic fermentation; (2) a tidy dataset of domestic feed-ingredient prices (fishmeal by grade, soybean meal, cassava products), because none is publicly available.
- **International bodies:** Fund an open Vietnamese techno-economic model, like the Risner Excel model, loaded with the local input table in `cost_inputs.csv`.

## Disagreements log

| Topic | Claim A | Claim B | Position |
|---|---|---|---|
| Minimum wage 2026 | Prior lead: 4.96 M VND (Region I) | Decree 293/2025: 5.31 M VND from 1 Jan 2026 | Use 5.31 M. 4.96 M was the 2024 to 2025 level. |
| Fishmeal price, Nov 2025 | Prior lead: USD 1,600/t (unsourced) | World Bank Peru 65% CIF: USD 1,794/t | Use the World Bank figure for 65% CIF. The lead may be a lower-grade or domestic price; unverified. |
| Blended 22 kV EVN price | Consultancy example: about 2,128 VND/kWh | My calculation from the tariff and the April 2026 windows: 1,952 VND/kWh for 24/7 load | Both can be right for different load profiles (the consultancy may assume more peak-hour use). For continuous plants use 1,952. The claimed DPPA saving shrinks if the baseline is 1,952. |
| World urea, March 2026 | CafeF: USD 674/t | World Bank series: USD 726/t | Different series and origins. Record both; the direction (a sharp rise) agrees. |
| Capex per m3 of fermentation | Vlaeminck: about USD 51,000/m3 | Risner: about USD 350,000/m3 | Not averaged. They reflect different designs, grades and estimation methods. Use equipment-level estimates. |
| Cooling "offsets" the power advantage (prior draft) | Prior draft implied a large offset | My estimate: USD 70 to 180/t, about 2 to 4% of feed-SCP cost | Partly true, but the offset is modest and avoidable with thermotolerant strains. |
| Comtrade unit values for protein ingredients | 2.52 to 9.16 USD/kg | Identical unit values across all partners suggest imputed quantities | Values are usable; unit values are Low confidence. |

## Open questions and gaps (with the cheapest way to close each)

1. **Domestic fishmeal price by protein grade, domestic soybean meal and DDGS in VND/kg:** ask the Vietnam Feed Association or AgroMonitor for their weekly feed-ingredient bulletin, or phone two fishmeal plants in An Giang (former Kien Giang) or Ca Mau.
2. **Cassava starch, chips, glucose syrup, molasses and ammonium sulfate:** check the feedstock agent's files. Otherwise use the Vietnam Cassava Association or VSSA (sugar), or Tay Ninh starch factories.
3. **Construction cost per m2 for food/biotech factories:** read MOC Decision 409/QD-BXD, Part 2, Chapter II (industrial works). Cross-check with the Cushman & Wakefield, RLB or Arcadis Asia construction cost guide (HCMC and Hanoi).
4. **Engineer, biotech and QA salaries:** Navigos Group salary report 2026, Talentnet-Mercer Total Remuneration Survey, or Adecco Vietnam salary guide.
5. **Natural gas and CNG prices for industry; steam tariffs in industrial parks:** request quotes from PV GAS D and Gas South; ask Nhon Trach or Phu My park operators.
6. **Logistics:** trucking cost per tonne-km and 20/40 ft container rates HCMC to Singapore or Shanghai: ask the Vietnam Logistics Business Association (VLA) or a forwarder; Drewry/Freightos spot rates.
7. **Precision fermentation cost benchmarks:** GFI APAC (precision-fermentation cost analyses); Synonym/Roebling capacity reports; Liberation Bioindustries capex (ask the company).
8. **Plant protein isolate and HME capex:** equipment quotes (Buhler, Clextral, Famsun); read Jarunglumlert et al. 2023 (Thailand).
9. **Official grid emission factors for 2024 and 2025:** MAE Department of Climate Change.
10. **End date of the 8% VAT reduction, and whether a new feed ingredient (for example SCP) automatically counts as "animal feed" for VAT non-taxability:** regulation agent or the General Department of Taxation.
11. **Retail pangasius price:** VASEP bulletin or a store check.
12. **Social insurance rates after the 2024 Social Insurance Law:** confirm with the regulation agent.

## Leads for the next wave

- The NSO Vietnamese-language labour force report for Q2 2026 should give average income by sector, including manufacturing.
- The DPPA cost formula needs the MOIT decision setting the 2026 CDPPA charge. Check the Circular 16/2025 threshold and whether Decree 243/2026 changes the synthetic-DPPA charges.
- Fasihi et al. (2025) provide source data with site-level costs. Extract the Vietnamese grid cells to get a sourced e-protein cost for Vietnam.
- Risner's open Excel model (Frontiers supplementary file) could be re-run with the Vietnamese inputs in this folder.
- The CE Delft 2021 cultivated-meat TEA and Negulescu et al. 2023 need reading before any cultivated-meat cost is quoted.
- Calysseo (Chongqing) capex and output: the nearest real feed-SCP plant, and a direct import competitor to any Vietnamese feed-SCP play.

## Access and tool log

- The WebSearch budget (shared across the session, 200 calls) was exhausted after about 20 searches by this agent. I did no more open-web searching after that.
- Pages I could not read: PubMed and Europe PMC for Negulescu et al. 2023 (proxy HTTP 429 rate limit); SAWACO Ben Thanh tariff page (HTTP 403); cngvietnam.com and liberationlabs.com (SSL/robots errors); NSO site search (timeout); guessed USDA GAIN Grain and Feed report URL (HTTP 500); Thai Tapioca Starch Association price page (server errors); Bach Hoa Xanh fish and tofu category pages and channuoivietnam.com (no content rendered).
- Scite full text was available for Risner et al. 2023 (read in full for the core sections) and as excerpts for several others. Where I relied only on an abstract, the CSV says so.

## Sources

COST-01. Ministry of Industry and Trade. Decision 1279/QD-BCT on retail electricity prices (9 May 2025). thuvienphapluat.vn. https://thuvienphapluat.vn/van-ban/Thuong-mai/Quyet-dinh-1279-QD-BCT-2025-gia-ban-dien-656047.aspx (accessed 2026-09-23). Supports: manufacturing tariff by voltage and time of use; average price 2,204.0655 VND/kWh. Type: law/gov.
COST-02. EVN. "Bieu gia ban le dien (theo Quyet dinh so 1279/QD-BCT ngay 09/5/2025)". https://www.evn.com.vn/d/vi-VN/news/Bieu-gia-ban-le-dien-theo-Quyet-dinh-so-1279QD-BCT-ngay-0952025-cua-Bo-Cong-Thuong-60-28-502668 (accessed 2026-09-23). Supports: tariff is current (tables are images). Type: company/gov.
COST-03. VietNamNet. "Khung gio cao diem moi: Gia dien buoi toi cao nhat len toi 5.422 dong/kWh" (2026). https://vietnamnet.vn/khung-gio-cao-diem-moi-gia-dien-buoi-toi-cao-nhat-len-toi-5-422-dong-kwh-2509697.html (accessed 2026-09-23). Supports: Decision 963 time windows from 22 Apr 2026; business and <6 kV tariffs. Type: press.
COST-04. Nguoi Dua Tin. "EVN dieu chinh gia dien giam tu 1% hoac tang tu 2% phai xin y kien" (11 Jul 2026). https://www.nguoiduatin.vn/evn-dieu-chinh-gia-dien-giam-duoi-1-hoac-tang-tu-2-phai-xin-y-kien-204260711090206726.htm (accessed 2026-09-23). Supports: Decree 278/2026; average price still 2,204 VND/kWh. Type: press.
COST-05. Tap chi Cong Thuong. "Thi diem ap dung gia dien hai thanh phan tu 1/1/2026". https://tapchicongthuong.vn/thi-diem-ap-dung-gia-dien-hai-thanh-phan-tu-1-1-2026-218800.htm (accessed 2026-09-23). Supports: two-part tariff pilot and shadow billing. Type: press (MOIT journal).
COST-06. Arcus Energy. "Decree 57/2025: Vietnam's DPPA framework explained". https://arcusenergyasia.com/resources/regulations/decree-57 (accessed 2026-09-23). Supports: DPPA eligibility, cost formula, worked example. Type: consultancy.
COST-07. Baker McKenzie. "Vietnam: Decree No. 243/2026/ND-CP, enhanced renewable energy DPPA framework" (June 2026). https://www.bakermckenzie.com/en/insight/publications/2026/06/vietnam-decree-no-243-2026-nd-cp-enhanced-renewable-energy-dppa-framework (accessed 2026-09-23). Supports: Decree 243/2026 amendments. Type: law firm.
COST-08. Department of Climate Change (MONRE, now MAE). Official Letter 1726/BDKH-PTCBT announcing the 2023 grid emission factor (3 Dec 2024). luatvietnam.vn. https://luatvietnam.vn/dien-luc/cong-van-1726-bdkh-ptcbt-2024-cong-bo-ket-qua-he-so-phat-thai-luoi-dien-viet-nam-425131-d6.html (accessed 2026-09-23). Supports: 0.6592 tCO2/MWh. Type: gov.
COST-09. QUACERT. "Uoc tinh he so phat thai khi nha kinh cua luoi dien Viet Nam 2025" (Jan 2026). https://quacert.gov.vn/tin-tuc/chi-tiet/2635 (accessed 2026-09-23). Supports: no official 2024/2025 factor; estimates 0.6811 and 0.6235. Type: gov-agency article (researcher estimates).
COST-10. Thu Vien Phap Luat. "Bang gia nuoc sinh hoat o TPHCM 2026" (reproducing Ben Thanh Water notice 3698/TB-CNBT-KDDVKH). https://thuvienphapluat.vn/phap-luat/bang-gia-nuoc-sinh-hoat-o-tphcm-2026-moi-nhat-chi-tiet-bang-gia-nuoc-sinh-hoat-o-tphcm-cap-nhat-nam-252032-266396.html (accessed 2026-09-23). Supports: HCMC production water 2026. Type: legal portal (secondary).
COST-11. Xay dung Chinh sach, Phap luat (chinhphu.vn). "Ha Noi chinh thuc tang gia nuoc sach" (Jul 2023). https://xaydungchinhsach.chinhphu.vn/ha-noi-chinh-thuc-tang-gia-nuoc-sach-119230710150335997.htm (accessed 2026-09-23). Supports: Hanoi production water 16,000 VND/m3 from 2024. Type: gov press.
COST-12. BIWASE. "Gia nuoc". https://www.biwase.com.vn/khach-hang/gia-nuoc (accessed 2026-09-23). Supports: former Binh Duong industrial water tariffs. Type: company (state utility).
COST-13. TTTFIC Group. "Vietnam-Singapore 2 Industrial Park (VSIP2)". https://tttfic.com/industrial-park/vietnam-singapore-2-industrial-park-vsip2/ (accessed 2026-09-23). Supports: park water and wastewater fees (undated). Type: broker.
COST-14. TTTFIC Group. "Nam Thang Long Industrial Park, Ha Noi". https://tttfic.com/industrial-park/nam-thang-long-industrial-park-ha-noi/ (accessed 2026-09-23). Supports: park water and wastewater fees (undated). Type: broker.
COST-15. Thoi bao Tai chinh Viet Nam. "Gia gas ban le thang 9/2026 tiep tuc o muc cao". https://thoibaotaichinhvietnam.vn/gia-gas-ban-le-thang-9-2026-tiep-tuc-o-muc-cao-203233.html (accessed 2026-09-23). Supports: LPG retail prices and CP, Sep 2026. Type: press (MOF newspaper).
COST-16. nhienlieulohoi.vn. "Vien nen trau" price page (updated 19 Dec 2025). https://nhienlieulohoi.vn/san-pham/vien-nen-trau/ (accessed 2026-09-23). Supports: biomass fuel list prices and calorific value. Type: supplier.
COST-17. NAAN Group. "Gia vien nen go 2025". https://naangroup.com/blogs/news/gia-vien-nen-go-2025 (accessed 2026-09-23). Supports: wood pellet FOB; claimed steam cost. Type: supplier blog.
COST-18. Gas South (PGS). "Selling price of CNG gas in the market". https://pgs.com.vn/en/selling-price-of-cng-gas-in-the-market (accessed 2026-09-23). Supports: CNG priced per customer, indexed to FO/LPG (no price). Type: company.
COST-19. Government of Viet Nam. Decree 293/2025/ND-CP on minimum wages (10 Nov 2025). https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Nghi-dinh-293-2025-ND-CP-quy-dinh-muc-luong-toi-thieu-lao-dong-lam-viec-theo-hop-dong-lao-dong-665866.aspx (accessed 2026-09-23). Supports: 2026 regional minimum wages. Type: law.
COST-20. National Statistics Office. "Report socio-economic performance in second quarter and the first half of 2026" (3 Jul 2026). https://www.nso.gov.vn/en/data-and-statistics/2026/08/report-socio-economic-performance-in-second-quarter-and-the-first-half-of-2026/ (accessed 2026-09-23). Supports: average income 9.0 M VND; CPI. Type: statistics.
COST-21. Cushman & Wakefield. "Southern Key Economic Zone Industrial MarketBeat Q2 2026". https://www.cushmanwakefield.com/en/vietnam/insights/ho-chi-minh-city-marketbeat/southern-key-economic-zone-industrial-property-markets-vietnam (accessed 2026-09-23). Supports: southern land and factory rents. Type: market research.
COST-22. Cushman & Wakefield. "Northern Key Economic Zone Industrial MarketBeat Q2 2026". https://www.cushmanwakefield.com/en/vietnam/insights/hanoi-marketbeat/industrial-marketbeat (accessed 2026-09-23). Supports: northern land and factory rents. Type: market research.
COST-23. Ministry of Construction. Decision 409/QD-BXD on construction investment rates for 2024 (11 Apr 2025). https://thuvienphapluat.vn/van-ban/Xay-dung-Do-thi/Quyet-dinh-409-QD-BXD-2025-cong-bo-suat-von-dau-tu-xay-dung-651677.aspx (accessed 2026-09-23). Supports: official cost basis exists (industrial chapter not extracted). Type: gov.
COST-24. National Assembly. Law on Value Added Tax 48/2024/QH15 (26 Nov 2024). https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-Thue-gia-tri-gia-tang-2024-so-48-2024-QH15-556390.aspx (accessed 2026-09-23). Supports: feed non-taxable (Art. 5(3)); 5% and 10% rates. Type: law.
COST-25. National Assembly Resolution 204/2025/QH15 and Decree 174/2025/ND-CP on VAT reduction (listing). https://thuvienphapluat.vn/page/tim-van-ban.aspx?keyword=204/2025/QH15 (accessed 2026-09-23). Supports: existence and dates of the VAT cut. Type: law (index listing only).
COST-26. Vietcombank. Exchange rate table (23 Sep 2026). https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx (accessed 2026-09-23). Supports: USD/VND 25,800 / 26,210. Type: bank.
COST-27. World Bank Commodity Price Data via IndexMundi. Fishmeal, Peru 65%, CIF. https://www.indexmundi.com/commodities/?commodity=fish-meal&months=24 (accessed 2026-09-23). Supports: fishmeal series to Mar 2026. Type: statistics (compiled).
COST-28. World Bank via IndexMundi. Soybean meal, Argentine 45/46%, CIF Rotterdam. https://www.indexmundi.com/commodities/?commodity=soybean-meal&months=24 (accessed 2026-09-23). Type: statistics (compiled).
COST-29. World Bank via IndexMundi. Maize, US No.2, FOB Gulf. https://www.indexmundi.com/commodities/?commodity=corn&months=24 (accessed 2026-09-23). Type: statistics (compiled).
COST-30. World Bank via IndexMundi. Urea, bulk, FOB. https://www.indexmundi.com/commodities/?commodity=urea&months=24 (accessed 2026-09-23). Type: statistics (compiled).
COST-31. World Bank via IndexMundi. Soybeans, US, CIF Rotterdam. https://www.indexmundi.com/commodities/?commodity=soybeans&months=24 (accessed 2026-09-23). Type: statistics (compiled).
COST-32. World Bank via IndexMundi. Sugar, ISA raw. https://www.indexmundi.com/commodities/?commodity=sugar&months=24 (accessed 2026-09-23). Type: statistics (compiled).
COST-33. CafeF. "Cang thang Trung Dong: Phan bon trong nuoc tang, nong san lai giam sau" (7 Apr 2026). https://cafef.vn/cang-thang-trung-dong-phan-bon-trong-nuoc-tang-nong-san-lai-giam-sau-chuyen-gi-dang-xay-ra-188260407222744677.chn (accessed 2026-09-23). Supports: urea, feed, paddy prices; logistics shock, Mar 2026. Type: press.
COST-34. CafeF. "Hang tram nghin tan hang tu An Do tran sang Viet Nam voi gia re ky luc..." (20 Jul 2026). https://cafef.vn/hang-tram-nghin-tan-hang-tu-an-do-tran-sang-viet-nam-voi-gia-re-ky-luc-nuoc-ta-co-dien-tich-trong-top-30-the-gioi-van-phai-chi-tien-nhap-khau-188260720033949205.chn (accessed 2026-09-23). Supports: H1 2026 corn import volume and value by origin (customs data). Type: press.
COST-35. USDA FAS GAIN. Vietnam Oilseeds and Products Annual, VM2026-0006 (15 Apr 2026). https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Oilseeds%20and%20Products%20Annual_Hanoi_Vietnam_VM2026-0006.pdf (accessed 2026-09-23). Supports: SBM imports and use; live hog price. Type: gov.
COST-36. WITS/UN Comtrade. Vietnam imports HS 350400, 2023. https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/350400 (accessed 2026-09-23). Type: statistics.
COST-37. WITS/UN Comtrade. Vietnam imports HS 210610, 2023. https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/210610 (accessed 2026-09-23). Type: statistics.
COST-38. WITS/UN Comtrade. Vietnam imports HS 110900, 2023. https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/110900 (accessed 2026-09-23). Type: statistics.
COST-39. Bach Hoa Xanh (online). Pork category. https://www.bachhoaxanh.com/thit-heo (accessed 2026-09-23). Supports: retail pork prices. Type: retailer.
COST-40. Bach Hoa Xanh (online). Chicken category. https://www.bachhoaxanh.com/thit-ga (accessed 2026-09-23). Type: retailer.
COST-41. Bach Hoa Xanh (online). Eggs category. https://www.bachhoaxanh.com/trung (accessed 2026-09-23). Type: retailer.
COST-42. AltProtein Vietnam field audit, product log (Nha Trang 6 Sep 2026; HCMC 16 and 20 Sep 2026), file research/field/product_log.csv, records P086, P129, P130, P131, P153. Supports: tofu and analogue prices and label protein. Type: primary field data (internal).
COST-43. Risner D., McDonald K.A., Jones C.E. (2023). A techno-economic model of mycoprotein production: achieving price parity with beef protein. Frontiers in Sustainable Food Systems 7:1204307. https://doi.org/10.3389/fsufs.2023.1204307 (accessed 2026-09-23 via Scite full text). Type: peer-reviewed. Full text read (core sections).
COST-44. Vlaeminck E., Uitterhaegen E., Quataert K., et al. (2023). Single-Cell Protein Production from Industrial Off-Gas through Acetate: Techno-Economic Analysis for a Coupled Fermentation Approach. Fermentation 9(8):771. https://doi.org/10.3390/fermentation9080771 (accessed 2026-09-23 via Scite excerpts). Type: peer-reviewed. Partial read.
COST-45. Jean A.B., Brown R.C. (2024). Techno-Economic Analysis of Gas Fermentation for the Production of Single Cell Protein. Environmental Science & Technology. https://doi.org/10.1021/acs.est.3c10312 (accessed 2026-09-23, abstract only). Type: peer-reviewed.
COST-46. Fasihi M., Jouzi F., Tervasmaki P., et al. (2025). Global potential of sustainable single-cell protein based on variable renewable electricity. Nature Communications 16. https://doi.org/10.1038/s41467-025-56364-1 (accessed 2026-09-23, abstract and excerpts). Type: peer-reviewed.
COST-47. Humbird D. (2021). Scale-up economics for cultured meat. Biotechnology and Bioengineering 118(8):3239-3250. https://doi.org/10.1002/bit.27848 (accessed 2026-09-23, excerpts). Type: peer-reviewed.
COST-48. Negulescu P.G., Risner D., Spang E.S., et al. (2023). Techno-economic modeling and assessment of cultivated meat: Impact of production bioreactor scale. Biotechnology and Bioengineering 120(4):1055-1067. https://doi.org/10.1002/bit.28324 (accessed 2026-09-23, truncated abstract only). Type: peer-reviewed. Not used for numbers.
COST-49. Kim S., Park K.-H., Park S.-J., et al. (2026). Cultivated Meat and the Future of Food Systems: Promise, Progress, and Challenges. Food Science & Nutrition. https://doi.org/10.1002/fsn3.71725 (accessed 2026-09-23, excerpts). Supports: secondary citation of Garrison et al. 2022 (USD 63/kg at 540 t/yr). Type: peer-reviewed review.
COST-50. Almeida Benalcazar E., van Winden W.A., Puiman L., et al. (2025). Single Cell Protein Production From Ethanol: Model-Based Bioreactor Operation at Industrial Scale. Biotechnology and Bioengineering 122(6):1441-1460. https://doi.org/10.1002/bit.28969 (accessed 2026-09-23, excerpts). Supports: 460 kJ/mol O2; cooling water 4-8x cheaper than chilled water; 30 C vs 45 C utility choice. Type: peer-reviewed.
COST-51. Davis R., Grundl N.J., Tao L., et al. (2018). Process Design and Economics for the Conversion of Lignocellulosic Biomass to Hydrocarbon Fuels and Coproducts: 2018 Biochemical Design Case Update. NREL/OSTI. https://doi.org/10.2172/1483234 (accessed 2026-09-23, excerpts). Supports: chiller 0.56 kW/TR; aerobic reactor size limits. Type: gov report.
COST-52. Lisicar Vukusic J., Kneer A., Mosche M., et al. (2018). Turning industrial aerobic fermentation plants into thermal power stations. International Journal of Energy Research 43(1):544-551. https://doi.org/10.1002/er.4299 (accessed 2026-09-23, excerpts). Supports: about 11 MW heat from 7 x 150 m3 yeast plant. Type: peer-reviewed.
COST-53. Solar Foods Oyj. Investor pages and Half-year Report H1 2026 (11 Aug 2026). https://investors.solarfoods.com/files/documents/solar-foods-half-year-report-2026.pdf and https://solarfoods.com/investors/ (accessed 2026-09-23). Supports: Factory 01 max 160 t/yr; Factory 02 funding EUR 77.8 M; FID planned 2026. Type: company.
COST-54. Liberation Bioindustries. Press releases, GlobeNewswire (2 Jun 2025; 15 Jan 2026). https://www.globenewswire.com/news-release/2025/06/02/3091930/0/en/Liberation-Labs-is-Now-Liberation-Bioindustries.html and https://www.globenewswire.com/news-release/2026/01/15/3220039/0/en/Liberation-Bioindustries-Announces-New-Roles-for-Founders.html (accessed 2026-09-23). Supports: 600,000 L Richmond plant, 2026 start. Type: company.
COST-55. Wikipedia. "Calysta" (citing SeafoodSource 2022 and 2016-2017 press). https://en.wikipedia.org/wiki/Calysta (accessed 2026-09-23). Supports: Chongqing 20,000 t/yr; Teesside GBP 30 M. Type: tertiary.
COST-56. Jarunglumlert T., Chantanuson R., Hayashi R., et al. (2023). Techno-economic assessment of plant-based meat analogue produced by the freeze alignment technique. Future Foods 8:100269. https://doi.org/10.1016/j.fufo.2023.100269 (not read; no text available). Type: peer-reviewed (lead).
