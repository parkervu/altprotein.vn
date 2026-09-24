---
id: app-i-costs
title: "I. Cost inputs and techno-economic benchmarks"
short_title: "Costs and benchmarks"
section: appendix
order: 9
summary: "What it costs to make protein in Vietnam: power, water, heat, labour, land, taxes and commodity prices as of 2026, retail protein prices per 100 g of protein, verified techno-economic benchmarks, a tropical cooling estimate, and two indicative cost stacks (fungal feed protein and textured soy protein) with every line's basis."
audiences: [investors, startups, manufacturers, policy, research, international]
reading_time_min: 32
key_numbers: [kn-power-blended, kn-min-wage-2026, kn-grid-emission-factor, kn-cost-fungal-feed, kn-tvp-cost, kn-cooling-penalty]
related_data: [cost_inputs.csv, commodity_prices.csv, tea_benchmarks.csv, feed_benchmarks.csv, tariffs.csv, outlook.csv, retail_audit_summary_price_per_protein_by_type.csv, countries.csv, disagreements.csv, open_questions.csv]
related_pages: [ch09-economics, ch08-regional, ch10-technology-fit, ch12-policy-options, app-c-feedstocks, app-d-retail-audit, app-f-facilities, app-g-regulation, app-h-feed-market, app-j-science, app-n-regional, app-q-open-questions, app-r-disagreements]
charts: [chart-cost-stack-fungal, chart-capex-per-tonne]
---

# I. Cost inputs and techno-economic benchmarks

This appendix holds the numbers behind [[ch09-economics]]. Part one lists Vietnamese input costs in 2026: electricity, water, heat, labour, land, taxes and logistics. Part two gives commodity prices, the protein ingredients Vietnam imports and the retail prices of the proteins an alternative would replace. Part three sets out published techno-economic analyses (TEAs) that we checked against the papers, the spread in capital cost per m3, and what drives cost. Part four gives our tropical cooling estimate and two indicative Vietnamese cost stacks, with the basis of every line. The feed prices a product must beat are in [[app-h-feed-market]]; raw-material prices are in [[app-c-feedstocks]].

## How to read this appendix

- **Currency.** We convert at 26,000 VND per USD. Vietcombank quoted 25,800 (buy) and 26,210 (sell) on 23 September 2026 [@COST-26] {VN-direct|High}. VND prices exclude VAT unless stated.
- **Three kinds of number.** "Measured" numbers come from a tariff, law, price report or paper. "Our calculation" numbers are arithmetic on measured inputs, and show the inputs. "Assumption" numbers are engineering judgements with no Vietnamese source. The cost stacks label every line.
- **TEA checks.** For each benchmark we say whether we read the full text, key excerpts or only the abstract. Only full-text or excerpt-checked values carry High confidence.
- **Indicative, not feasibility.** The cost stacks are order-of-magnitude estimates to show which lines matter. They are not a feasibility study.

---

## Part one. Vietnamese input costs

### I1. Electricity

**Manufacturing tariff** (VND/kWh, excluding VAT; MOIT Decision 1279/QD-BCT of 9 May 2025, effective 10 May 2025) [@COST-01; @COST-02] {VN-direct|High}:

| Voltage | Off-peak | Normal | Peak | Blended 24/7 (our calculation) | USD/kWh |
|---|---|---|---|---|---|
| 110 kV and above | 1,146 | 1,811 | 3,266 | 1,905 | 0.073 |
| 22 to under 110 kV | 1,190 | 1,833 | 3,398 | 1,952 | 0.075 |
| 6 to under 22 kV | 1,234 | 1,899 | 3,508 | 2,020 | 0.078 |
| Under 6 kV | 1,300 | 1,987 | 3,640 | 2,110 | 0.081 |

- **Time windows.** MOIT Decision 963 (2026), effective 22 April 2026, moved the peak to the evening: peak 17:30 to 22:30 Monday to Saturday (30 hours a week), off-peak 00:00 to 06:00 every day (42 hours), normal all other hours (96 hours) [@COST-03] {VN-direct|Medium}. We did not read the decision text directly.
- **Blended price for a plant that runs 24 hours a day** = (30 x peak + 42 x off-peak + 96 x normal) / 168 hours. Example at 22 kV: (30 x 3,398 + 42 x 1,190 + 96 x 1,833) / 168 = 327,888 / 168 = 1,952 VND/kWh, about USD 0.075 (our calculation). Mid-size plants in industrial parks commonly connect at 22 kV, so we use 1,952 VND/kWh as the base case for a continuous fermentation plant. It excludes VAT and any future capacity charge.
- **Business tariff.** If a pilot facility were classed as business rather than manufacturing, the under-6 kV tariff is 1,918 (off-peak), 3,152 (normal) and 5,422 (peak) VND/kWh [@COST-03] {VN-direct|Medium}.
- **Average retail price.** 2,204.0655 VND/kWh after a 4.8% rise on 10 May 2025. The press still quoted it in July 2026, so we found no increase between May 2025 and July 2026 [@COST-01; @COST-04] {VN-direct|High}.
- **More frequent adjustments.** Decree 278/2026/ND-CP (reported effective about 9 July 2026) lets EVN move the average price by 2% to under 5% after a MOIT review; larger changes need higher approval [@COST-04] {VN-direct|Medium}. We did not read the decree text.
- **Two-part tariff.** A pilot of a capacity-plus-energy tariff started on 1 January 2026 for customers using 200,000 kWh or more a month at 22 kV or above. For all of 2026 they receive a reference ("shadow") bill beside the real one (Electricity Law 2024 Art 50; Decree 146/2025/ND-CP) [@COST-05] {VN-direct|Medium}. No VND/kW rates were published. A capacity charge from 2027 could raise costs for plants with high peak demand.
- **Regional comparison.** The GFI APAC and Hawkwood Biotech site-selection study used USD 0.08/kWh for Vietnam and scored Vietnam 97 of 100 on utilities; Indonesia (USD 0.07/kWh) scored 99 [@RGN-01] {VN-direct|Medium}.

**Direct power purchase (DPPA).** Decree 57/2025/ND-CP set two models: a private wire, and a synthetic DPPA over the national grid. Buyers qualify at an average of 200,000 kWh a month or more (Circular 16/2025/TT-BCT, as summarised by a consultancy) [@COST-06] {VN-direct|Medium}. A 10,000 t/yr fermentation plant using 1.5 to 3 kWh per kg would need about 1.25 to 2.5 GWh a month (our calculation), far above the threshold. Under the synthetic model the buyer pays the spot price, plus an EVN DPPA service charge of about 420 VND/kWh (2025 reference), plus the contract-for-difference settlement, plus retail top-up power [@COST-06] {VN-direct|Low}. The consultancy's worked example gives about 1,895 VND/kWh (spot about 1,100, service charge about 420, settlement about 180, and 10% top-up at retail), about 11% below its EVN comparison of about 2,128 VND/kWh [@COST-06] {VN-direct|Low}. Against our 24/7 baseline of 1,952 VND/kWh, the saving is only about 3% (our calculation, 1 - 1,895 / 1,952). The consultancy probably assumed more peak-hour use. Decree 243/2026/ND-CP (26 June 2026) amended Decree 57: it removed price caps on private-wire DPPA and widened participation to retailers, data centres and EV-charging operators [@COST-07] {VN-direct|Medium}. The DPPA saving is modelled, single-source and could vanish under a capacity charge.

**Grid emission factor.** The latest official figure is 0.6592 tCO2/MWh for 2023, announced on 3 December 2024 (Official Letter 1726/BDKH-PTCBT) [@COST-08] {VN-direct|High}. As of January 2026 there was no official 2024 or 2025 figure; researchers estimate 0.6811 (2024) and 0.6235 (2025) [@COST-09] {VN-direct|Medium}. At the official factor, a process that uses 2 kWh of grid power per kg of product emits about 1.3 kg of CO2 per kg from power alone (our calculation, 2 x 0.6592). For comparison, one TEA puts the carbon intensity of hydrogen-based SCP at 0.73 kg CO2e per kg of protein, against 2.72 for fishmeal and 0.85 for soybean meal (abstract only) [@COST-45] {general|Medium}. A "low-carbon protein" claim for a power-hungry process in Vietnam needs a DPPA or on-site solar. The revised national power plan targets 28 to 36% non-hydro renewable generation by 2030 [@GT-11] {VN-direct|High}.

### I2. Water and wastewater

| Location (current name) | Production water price | Basis | Source | Label |
|---|---|---|---|---|
| Ho Chi Minh City (Ben Thanh Water area) | 12,100 VND/m3 base; 16,625 VND/m3 all-in (about USD 0.64), including 5% VAT, a 3,630 VND drainage and wastewater service charge and 8% tax on that service | 2026, unchanged from 2025 | [@COST-10] | {VN-direct\|Medium} |
| Ho Chi Minh City (former Binh Duong), BIWASE | 13,800 VND/m3 retail for manufacturing; 13,100 wholesale to industrial parks | since 2022, excluding VAT | [@COST-12] | {VN-direct\|Medium} |
| Hanoi | 16,000 VND/m3 for production (business services 29,000) | from 1 January 2024 (Decision 3541/QD-UBND) | [@COST-11] | {VN-direct\|Medium} |
| Dong Nai (including former Binh Phuoc) | not found | n/a | none | {VN-direct\|Low} |
| Industrial parks (broker listings) | water about USD 0.5/m3; wastewater treatment USD 0.28/m3 (VSIP II) to USD 0.40/m3 (Nam Thang Long, Hanoi) | undated | [@COST-13; @COST-14] | {VN-direct\|Low} |

- Check: 12,100 x 1.05 + 3,630 x 1.08 = 12,705 + 3,920 = 16,625 VND/m3 (our calculation).
- Industrial parks set the wastewater charge as F = f x V x K, where K is a pollution coefficient based on COD. Spent fermentation broth may therefore pay a multiple of the base fee, or need treatment on site first.
- Water is a minor cost in both cost stacks below.

### I3. Heat and fuel

- **LPG.** A 45 kg industrial cylinder cost 2,212,000 VND in Ho Chi Minh City and 2,115,072 VND in Hanoi in September 2026, about 49,000 VND/kg (USD 1.89) in Ho Chi Minh City including VAT. The Saudi contract price was USD 642.5/t, up from USD 630 in August [@COST-15] {VN-direct|Medium}. Bulk contracts are cheaper.
- **Biomass.** Rice husk pellets list at 2,190 VND/kg (unit inferred) with 3,200 to 3,900 kcal/kg; wood pellets 3,090 VND/kg; wood shavings 2,790 VND/kg (supplier list, December 2025) [@COST-16] {VN-direct|Low}. Wood pellets exported at USD 120 to 145/t FOB in Q1 2025 [@COST-17] {VN-direct|Low}. Ajinomoto's Bien Hoa MSG plant burns about 100,000 t of rice husk a year [@IND-08] {VN-direct|Medium}.
- **Steam, fuel only (our calculation).** At 640 kcal per kg of steam, 3,200 to 3,900 kcal per kg of husk pellets and 75 to 85% boiler efficiency, one kg of steam needs 0.19 to 0.27 kg of pellets, or 420 to 585 VND of fuel [@COST-16]. A supplier claims 830 to 870 VND per kg of steam all-in, using wood pellets at 85 to 87% efficiency [@COST-17] {VN-direct|Low}. The gap is operation, maintenance, capital and labour. We found no published steam tariffs from industrial parks.
- **Natural gas and CNG.** Not published. Gas South prices industrial CNG per customer, indexed to fuel oil or LPG [@COST-18] {VN-direct|Low}.

### I4. Labour

| Item | Value | Source | Label |
|---|---|---|---|
| Minimum wage from 1 January 2026, Region I | 5,310,000 VND/month (about USD 204); 25,500 VND/hour | [@COST-19] | {VN-direct\|High} |
| Region II | 4,730,000 VND/month; 22,700 VND/hour | [@COST-19] | {VN-direct\|High} |
| Region III | 4,140,000 VND/month; 20,000 VND/hour | [@COST-19] | {VN-direct\|High} |
| Region IV | 3,700,000 VND/month; 17,800 VND/hour | [@COST-19] | {VN-direct\|High} |
| Average monthly income of employees, Q2 2026 | 9.0 million VND (about USD 346), up 0.72 million year on year | [@COST-20] | {VN-direct\|High} |
| Manufacturing wage used by the GFI APAC and Hawkwood study | USD 342/month (labour score 100, shared with Indonesia at USD 350) | [@RGN-01] | {VN-direct\|Medium} |
| Employer contributions | 17.5% social insurance + 3% health + 1% unemployment + 2% trade-union fee = about 23.5% of insured salary (employee pays 10.5%) | not re-read in this study | {VN-direct\|Medium} |
| Engineer, biotech and QA salaries | not found | none | {VN-direct\|Low} |

> **Correction.** Earlier drafts used a Region I minimum wage of 4,960,000 VND/month. That was the 2024 to 2025 level. From 1 January 2026 it is 5,310,000 VND/month under Decree 293/2025/ND-CP of 10 November 2025 [@COST-19].

- **Regions.** Region I covers the urban wards of Ho Chi Minh City and Hanoi and the Bien Hoa area of Dong Nai.
- **Workforce assumption used in the cost stacks.** A skilled plant workforce averaging 12 to 20 million VND/month gross, with 13 months of pay and 23.5% on-costs, costs USD 7,400 to 12,350 per full-time employee (FTE) a year (our calculation, 12 to 20 million x 13 x 1.235 / 26,000). This is an assumption, not a survey figure.

### I5. Land and buildings

Q2 2026, Cushman & Wakefield [@COST-21; @COST-22] {VN-direct|Medium}:

| Market | Industrial land, USD/m2 for the remaining lease term | Occupancy | Ready-built factory, USD/m2/month | Ready-built warehouse, USD/m2/month |
|---|---|---|---|---|
| South average | 186.4 | not given | 4.9 | 4.6 |
| Ho Chi Minh City (including former Binh Duong and Ba Ria-Vung Tau) | 187.5 | 86.1% | 5.1 | 4.5 |
| Dong Nai (including former Binh Phuoc) | 189.6 | 73.1% | 4.9 | 4.7 |
| Tay Ninh (including former Long An) | 179.6 | 60.9% | 4.6 | 4.8 |
| North average (Hanoi, Bac Ninh, Hung Yen, Hai Phong, Phu Tho, Ninh Binh) | 137.7 | Hanoi near full | 5.0 | 4.9 |

- Industrial land is cheaper in the north; ready-built factory rents are about the same in both regions. Ready-built factory occupancy was 89.7 to 94.3% in the south and about 86% in the north [@COST-21; @COST-22] {VN-direct|Medium}.
- **Construction cost.** The Ministry of Construction's Decision 409/QD-BXD (11 April 2025, Q4 2024 price basis, 10% VAT included) contains official investment rates, but its industrial chapter was not readable [@COST-23] {VN-direct|Low}. The only figure we have is the GFI APAC and Hawkwood input of USD 1,672/m2 for Vietnam (construction score 93), against USD 1,487/m2 for Indonesia (score 100) [@RGN-01] {VN-direct|Medium}.

### I6. Taxes and duties

- **VAT on feed.** Under the Law on VAT 48/2024/QH15 (Art 5(3), in force 1 July 2025), animal feed and aquafeed are "not subject to VAT" [@COST-24] {VN-direct|High}. "Not subject" is not the same as zero-rated: a plant making a feed protein cannot reclaim the VAT it pays on equipment, power and inputs. Feed millers can no longer deduct the 5% VAT they paid on inputs [@MAC-25] {VN-direct|Medium}. By our estimate, at 10% VAT on roughly half to all of costs, this adds about 5 to 10% to a feed-protein plant's taxed input costs. A food-ingredient plant, taxed at 8 or 10%, can reclaim input VAT. Whether a new feed ingredient such as SCP automatically counts as "animal feed" for VAT is an open question.
- **Other VAT rates.** The standard rate is 10%. The 5% rate covers clean water, fertiliser and unprocessed farm products at the commercial stage (Art 9(2)) [@COST-24] {VN-direct|High}. A temporary cut from 10% to 8% for many goods has applied since 1 July 2025 (Resolution 204/2025/QH15; Decree 174/2025/ND-CP); its end date, expected to be 31 December 2026, was not verified [@COST-25] {VN-direct|Medium}.
- **Corporate income tax (CIT).** Law 67/2025/QH15 sets a standard rate of 20% with preferential rates for encouraged sectors and areas. Decree 320/2025/ND-CP (15 December 2025) adds two tests that matter for alternative protein. First, the exemption for processed farm and aquatic products needs agricultural or aquatic raw materials to be at least 30% of production cost; a cassava-based fermentation plant probably passes, and a plant running on imported refined sugar may not (our interpretation). Second, income from products made with a technology applied for the first time in Vietnam is exempt for 3 years, once an authority confirms the technology is new [@REG2-18] {VN-direct|High}. The chapter on high-technology projects (10% for 15 years; 4 years' exemption plus 9 years at 50%) did not render. The GFI APAC and Hawkwood study cites Vietnamese incentives of cash support up to 10% of new fixed assets, 10% CIT for 15 years, and a 4-year tax holiday plus 9 years at 50% [@RGN-01] {VN-direct|Medium}.
- **Import duty on machinery.** Imported fixed-asset goods of projects in incentivised sectors or areas are exempt (Decree 134/2016/ND-CP Art 14, as amended by Decree 18/2021/ND-CP). We did not read the texts; see [[app-g-regulation]].
- **Import duty on protein inputs** (MFN) [@REG2-20; @REG2-21; @REG2-23] {VN-direct|Medium}:

| HS code | Product | MFN rate (latest found) |
|---|---|---|
| 1201.90 | Soybeans | 0% |
| 2304.00.29, 2304.00.90 | Soybean meal | 0% (from 31 March 2025) |
| 2304.00.21 | Defatted soy flour for human food | 2% |
| 1005.90.99 | Feed maize | 0% (from 31 March 2025; was 2%) |
| 2301.20 | Fishmeal | 0% |
| 1109 | Wheat gluten | 10% (2023) |
| 2106.10 | Protein concentrates and textured protein | 5% (2023) |
| 3504 | Peptones and other protein substances | 3% (2023) |
| 2102.10 | Active yeast | 10% (2023) |
| 2102.20 | Inactive yeast and other dead single-cell organisms | 7% (2023) |

Feed protein enters duty-free, so domestic novel feed proteins get no tariff shelter. Food protein ingredients carry small duties.

### I7. Logistics

Not established. The only data point: in March and April 2026, as oil prices rose with the Middle East conflict, the press reported logistics costs up 20 to 30% for international and 15 to 20% for domestic transport [@COST-33] {VN-direct|Low}. Trucking cost per tonne-km, container rates to Singapore or Shanghai and cold-chain rates are gaps.

---

## Part two. Commodity and retail prices

### I8. Commodity prices

| Commodity (market) | January 2025 | March 2026 | August 2026 | Per t of protein, latest | Sources | Label |
|---|---|---|---|---|---|---|
| Fishmeal, Peru 65%, CIF (World Bank series) | USD 1,581/t (2025 average 1,706) | USD 1,837/t | USD 2,500/t | USD 3,846 (August 2026); USD 2,625 (2025 average) | [@COST-27; @FM-01; @FM-02] | {general\|High} |
| Soybean meal, Argentine 45/46%, CIF Rotterdam | USD 368/t (low 335 in July 2025; 2025 average 366) | USD 404/t | USD 403/t | about USD 876 (46% CP) | [@COST-28; @FM-01] | {general\|High} |
| Soybeans, US, CIF Rotterdam | USD 411/t | USD 473/t | USD 482/t | not given | [@COST-31; @FM-01] | {general\|High} |
| Maize, US No. 2, FOB Gulf | USD 214/t | USD 213/t | USD 224/t | not given | [@COST-29; @FM-01] | {general\|High} |
| Urea, bulk (World Bank series) | USD 472/t (February 2026) | USD 726/t | USD 390/t (Q2 2026 average 693.5) | not given | [@COST-30; @FM-01] | {general\|High} |
| Raw sugar (ISA) | USD 0.40/kg | USD 0.33/kg | USD 0.38/kg | not given | [@COST-32; @FM-01] | {general\|High} |
| Maize, Vietnam import unit value | not given | about USD 251/t CIF (H1 2026; June 258) | not given | not given | [@COST-34] | {VN-direct\|Medium} |
| Urea, Phu My (Vietnam) | not given | 553,100 VND per 50 kg bag = 11,062 VND/kg, about USD 425/t | not given | not given | [@COST-33] | {VN-direct\|Medium} |
| Compound hog feed (Vietnam retail) | not given | 360,000 to 370,000 VND per bag (bag size not stated) | not given | not given | [@COST-33] | {VN-direct\|Low} |
| Live hog (Vietnam farm gate) | not given | 65,000 VND/kg live weight (April 2026) | not given | not given | [@COST-35] | {VN-direct\|Medium} |
| Paddy IR50404 and 5%-broken milled rice (Vietnam) | not given | 5,326 and 14,000 VND/kg | not given | not given | [@COST-33] | {VN-direct\|Medium} |

- **Corn origins.** Vietnam imported 6.8 Mt of corn in H1 2026 (up 53% year on year) worth USD 1.71 bn; in January to May, Brazil supplied 44%, Argentina 31% and India 0.5 Mt, a new source, at unit values of USD 247 (Brazil), 252 (Argentina) and 252/t (India) [@COST-34] {VN-direct|Medium}.
- **Urea.** A second press series gave world urea at USD 674/t in March 2026 [@COST-33]; the direction (a sharp spring rise) agrees with the World Bank series, which fell back to USD 390/t by August [@FM-01].
- **Cassava, rice by-products and sugar.** Vietnamese prices are in [[app-c-feedstocks]]: fresh cassava roots 3,000 to 3,550 VND/kg (April 2026), native starch 12,500 to 13,200 VND/kg and USD 520 to 540/t FOB, domestic refined sugar about 16,505 VND/kg (June 2026), rice bran 7,300 to 7,650 VND/kg (September 2026) [@FS-11; @FS-12; @FS-31; @FS-26] {VN-direct|Medium}.
- **Gaps.** Vietnamese domestic fishmeal prices by grade (55, 60, 65% CP), domestic soybean meal in VND/kg, DDGS, meat and bone meal, poultry by-product meal, fish oil, glucose syrup, bulk molasses and ammonium sulphate.

> **Correction.** Wave 1 used Peruvian fishmeal at USD 1,837/t (March 2026), about USD 2,830 per tonne of protein, as the fishmeal benchmark. Wave 2 read the September 2026 Pink Sheet: the 2025 average was USD 1,706/t (about USD 2,625 per tonne of protein) and August 2026 was USD 2,500/t (about USD 3,846 per tonne of protein). Soybean meal was about USD 403/t in August 2026, about USD 880 per tonne of protein [@FM-01]. This appendix compares against both the 2025 average (base case) and August 2026 (latest). A Vietnamese buyer's quote of USD 1,600/t for November 2025 was below the World Bank's USD 1,794/t that month, probably a lower grade or non-Peruvian origin [@FM-04; @FM-02].

### I9. Protein ingredients Vietnam imports

2023, UN Comtrade via WITS [@COST-36; @COST-37; @COST-38] {VN-direct|Low}:

| HS code | Product | Import value | Quantity (likely imputed) | Unit value | Main origins |
|---|---|---|---|---|---|
| 1109 | Wheat gluten | USD 31.06 M | 12,337 t | USD 2.52/kg | China 59%, Australia, France |
| 2106.10 | Protein concentrates and textured protein substances | USD 33.98 M | 5,763 t | USD 5.90/kg | United States 46%, China 27% |
| 3504 | Peptones and other protein substances (including some isolates) | USD 22.18 M | 2,421 t | USD 9.16/kg | China 45%, United States |

Every partner shows exactly the same unit value, which suggests the database estimated the quantities. Treat values as reliable and unit values as weak. HS 2106.10 also includes nutrition premixes, so it is not a clean TVP price. There is no separate code for pea protein. We found no global benchmark prices for soy protein isolate, soy protein concentrate, TVP or pea protein.

### I10. Retail prices of the proteins an alternative would replace, per 100 g of protein

| Product | Retail price | Protein, g per 100 g | VND per 100 g of protein | USD per 100 g of protein | Source | Label |
|---|---|---|---|---|---|---|
| Chicken eggs (box of 10) | 2,400 VND per egg | 6 to 7 g per egg (assumed) | 34,300 to 40,000 | 1.32 to 1.54 | [@COST-41] | {VN-direct\|Medium} |
| Chicken breast fillet with skin | 90,900 VND/kg | 20 to 23 (assumed) | 39,500 to 45,500 | 1.52 to 1.75 | [@COST-40] | {VN-direct\|Medium} |
| Chicken thigh meat | 79,210 VND/kg | 17 to 19 (assumed) | 41,700 to 46,600 | 1.60 to 1.79 | [@COST-40] | {VN-direct\|Medium} |
| Pork leg | 115,000 VND/kg | 18 to 20 (assumed) | 57,500 to 63,900 | 2.21 to 2.46 | [@COST-39] | {VN-direct\|Medium} |
| Lean pork | 132,000 VND/kg | 19 to 21 (assumed) | 62,900 to 69,500 | 2.42 to 2.67 | [@COST-39] | {VN-direct\|Medium} |
| White tofu (Coop Select) | 36,429 VND/kg | 9.3 (label) | 39,200 | 1.51 | [@COST-42] | {VN-direct\|Medium} |
| Firm tofu (Ichiban momen) | 47,576 VND/kg | 8.92 (label) | 53,300 | 2.05 | [@COST-42] | {VN-direct\|Medium} |
| White tofu (Tafu) | 36,333 VND/kg | 4.71 (label) | 77,100 | 2.97 | [@COST-42] | {VN-direct\|Medium} |
| Dried soy "chops" (An Nhien) | 326,667 VND/kg | 64 (label) | 51,000 | 1.96 | [@COST-42] | {VN-direct\|Medium} |
| Imported plant-based burger (Unconventional) | 813,636 VND/kg | 15 (label) | 542,400 | 20.86 | [@COST-42] | {VN-direct\|Medium} |

- Meat and egg prices are Bach Hoa Xanh online, Ho Chi Minh City, 23 September 2026, many at small promotional discounts. Tofu and analogues are from our field audit in Ho Chi Minh City on 16 and 20 September 2026. Meat protein contents are typical food-composition values, not re-checked against the Vietnamese Food Composition Table. Retail pangasius was not found.
- **Retail audit medians** (VND per 100 g of protein, September 2026): tofu 66,265 (5 SKUs; range 39,171 to 121,053); dried TVP and soy chunks 64,584 (4 SKUs; range 48,976 to 85,053); frozen meat and seafood analogues 278,667 (9 SKUs); protein powders 359,537 (4 SKUs); plant milks 456,250 (8 SKUs) [@FORM-01] {VN-direct|Medium}. See [[app-d-retail-audit]].
- **Reading.** Chicken and eggs set the retail floor at about 34,000 to 46,600 VND per 100 g of protein. Tofu sits at a similar level. Dried soy analogues are already priced near chicken on a protein basis. Printed tofu protein varies two-fold between labels, so label-based comparisons are fragile.

---

## Part three. Techno-economic benchmarks

### I11. Verified TEA benchmarks

| Process | Product (grade) | Scale | Metric | Value | Cost basis | Full text read? | Source | Label |
|---|---|---|---|---|---|---|---|---|
| Continuous airlift fermentation of *F. venenatum* | Mycoprotein, wet, about 27% solids (food) | 2,000 kg/h wet (about 17,500 t/yr wet, 4,700 t/yr dry); 2 x 155 m3 airlift | Minimum production cost | USD 3.55/kg wet; USD 29.56/kg protein; processed Quorn-like product USD 4.03/kg | 2022, US, labour USD 20/h | Yes (core sections) | [@COST-43] | {general\|High} |
| Same | Same | Same | Total capital cost before financing | USD 108 M (reactors 66.7%; one 155 m3 stainless reactor about USD 42 M, the second about USD 29 M) | 2022 | Yes | [@COST-43] | {general\|High} |
| Same | Texturing plant | Downstream | Capex, texturing only | USD 13.8 M (chiller over 44%) | 2022 | Yes | [@COST-43] | {general\|High} |
| Quorn reference (cited in the TEA) | Mycoprotein | 155 m3 airlift | Output per reactor | 2 t/h wet; continuous runs of about 1,000 h at 10 to 15 g/L | 2019 disclosure | No (secondary) | [@COST-43] | {general\|Medium} |
| ICI Pruteen (historical) | Bacterial SCP (feed) | 1,500 m3 airlift, 1979 to 1987 | Scale and price | Sold at about twice the price of soy protein in 1983; closed 1987 | 1980s | No (secondary) | [@COST-43] | {general\|Medium} |
| Gas to acetate, then aerobic acetate to SCP (*C. necator*) | SCP (feed) from steel-mill off-gas | 20,000 t/yr; 11 x 432 m3 airlift + 5 x 299 m3 stirred tanks | Unit production cost | USD 4.15/kg (USD 2.78/kg if intensified); facility-dependent costs 58%, utilities 18% | about 2022 to 2023 | Partial (key excerpts) | [@COST-44] | {general\|High} |
| Same | Same | Same | Capital investment | USD 320 M | about 2022 to 2023 | Partial | [@COST-44] | {general\|High} |
| H2 and CO2 gas fermentation (wind electrolysis, ethanol-plant CO2) | SCP (feed) | not stated in abstract | Minimum selling price | USD 2,070/t SCP | about 2023, US | No (abstract only) | [@COST-45] | {general\|Medium} |
| Hydrogen-oxidising bacteria on renewable electricity | Protein (food or feed) | Benchmark plant 16.42 kt SCP/yr | Protein cost at optimal sites | EUR 5.5 to 6.1/kg (2028); EUR 4.0 to 4.5 (2030); EUR 2.1 to 2.3 (2050). Vietnamese site values not extracted | projections | Partial (abstract and excerpts) | [@COST-46] | {general\|High} |
| Solar Foods Factory 01 | Solein (food) | Vantaa, Finland | Maximum capacity | 160 t/yr; production started spring 2024; H1 2026 revenue EUR 0.1 M | company | Company report | [@COST-53] | {general\|Medium} |
| Solar Foods Factory 02 (planned) | Solein (food) | Capacity not stated | Public funding committed | EUR 77.8 M (EUR 39.6 M grant + EUR 38.1 M R&D loan); investment decision planned for 2026; total capex not disclosed | 2026 | Company report | [@COST-53] | {general\|Medium} |
| Calysta and Calysseo methanotroph SCP | FeedKind (feed) | Chongqing, China | Nameplate capacity | 20,000 t/yr; capex not found | 2022 onward | No (tertiary) | [@COST-55] | {VN-adjacent\|Low} |
| Liberation Bioindustries (precision-fermentation contract manufacturer) | Recombinant food proteins | Richmond, Indiana | Fermentation volume | 600 m3; operations 2026; more than half of capacity contracted or in negotiation (January 2026); capex not disclosed | 2026 | Press release | [@COST-54] | {general\|Medium} |
| Animal cell culture, fed batch (conceptual) | Cultured meat, wet cells | 24 x 20 m3; 6.8 kt/yr | Cost of production | USD 37/kg (amino acids about USD 19/kg; growth factors about USD 3/kg); capital charge factor 15% a year | about 2020, US | Partial (excerpts) | [@COST-47] | {general\|High} |
| Animal cell culture, perfusion (conceptual) | Cultured meat, wet cells | 6.9 kt/yr | Total capital investment and cost | USD 663 M; USD 51/kg; 132 FTE | about 2020 | Partial | [@COST-47] | {general\|High} |
| Animal cell culture (industry-scale) | Cultivated meat | 540 t/yr | Cost of production | USD 63/kg | about 2022 | No (secondary citation) | [@COST-49] | {general\|Low} |
| Animal cell culture, three reactor sizes | Cultivated beef | about 42,000 L and larger | Cost by reactor scale | not extracted; do not quote | 2022 to 2023 | No (truncated abstract) | [@COST-48] | {general\|Low} |
| Plant-based meat by freeze alignment (Thailand) | Meat analogue | not read | Minimum selling price | not extracted | 2023 | No (no text) | [@COST-56] | {VN-adjacent\|Low} |
| Precision-fermentation food protein | Whey or egg proteins | n/a | Minimum selling price | No peer-reviewed TEA verified | n/a | n/a | none | {general\|Low} |
| Plant protein isolate and high-moisture extrusion | Isolates, meat analogues | n/a | Capex and opex | No verified benchmark found | n/a | n/a | none | {general\|Low} |

**Notes on the mycoprotein TEA** [@COST-43] {general|High}. The model runs 24 hours a day, 365 days a year, assumes 5% financing over 20 years and fixed costs of 3% of annualised capex, and excludes land, working capital and start-up. The authors compare USD 29.56 per kg of protein with about USD 29.95 for choice beef and about USD 9.64 for chicken, and conclude that mycoprotein can match beef on protein cost but "will not be an economic alternative for inexpensive products such as chicken". Buying food-grade biotin and zinc sulphate instead of lab grade cut cost by 22%.

### I12. Capital cost per m3 and per annual tonne

| Source | Plant | Total capex | Reactor volume | Capex per m3 (our calculation) | Capex per annual tonne (our calculation) |
|---|---|---|---|---|---|
| Vlaeminck et al. 2023 [@COST-44] | Feed SCP, 20 kt/yr | USD 320 M | 6,247 m3 | about USD 51,000 | USD 16,000 (dry) |
| Risner et al. 2023 [@COST-43] | Food mycoprotein, about 4.7 kt/yr dry | USD 108 M | 310 m3 | about USD 350,000 | about USD 22,800 (dry); about USD 6,200 (wet) |
| Humbird 2021 [@COST-47] | Cultured meat, perfusion, 6.9 kt/yr wet | USD 663 M | not given | not given | about USD 96,000 (wet cells) |

Capex per m3 of reactor differs about 7-fold between the two verified microbial studies (our calculation, 350,000 / 51,000) {general|High}. The spread comes from design choices (large, low-cost airlift reactors versus many small reactors), hygiene grade (feed versus food) and the estimating method. We do not average them. A Vietnamese plan should build its own equipment-level estimate rather than borrow one figure.

### I13. Where the cost is: why cheap labour and power matter less than capital

- **The GFI APAC and Hawkwood representative models.** In the study's own plant models, labour is 7% of production cost for submerged biomass (80,000 t/yr) and 17% for precision fermentation (10,000 t/yr); utilities are 4 to 5%; depreciation (capital) is 37 to 56% [@RGN-01] {general|High}. Feedstock is 10% (biomass) and 18% (precision fermentation) in those models, but the same report's text cites 35 to 65% (biomass) and 30 to 45% (precision fermentation) across other TEAs [@RGN-01]. The models were run for a US Midwest plant on corn glucose, not for any Asian site.
- **Vietnam's scores in that study** (0 to 100, 100 = best): labour 100, utilities 97, construction cost 93, business environment 30, sugar capability 26, talent 26, regulatory readiness 0. Indonesia scores the same or better on every cost factor [@RGN-01] {VN-direct|High}.
- **Our own stack agrees.** In the fungal feed-protein stack below, capital charge plus maintenance is 54% of cost at the low end and 67% at the high end (our calculation). In the off-gas SCP TEA, facility-dependent costs are 58% and utilities 18% [@COST-44] {general|High}.
- **Reading.** Vietnam's cost advantage acts on a small share of cost. Capital, feedstock and the price of the protein being replaced decide the case.

---

## Part four. Vietnamese estimates

### I14. Tropical cooling (indicative estimate)

We found no published analysis of fermentation cooling in hot, humid climates, and no study that quantifies the cooling cost saved by thermotolerant strains in a tropical plant [@SCI-45] {general|Medium}. So we built an indicative estimate from general engineering rules. Label: {VN-direct|Low} for the result.

| Step | Input | Value | Source or basis |
|---|---|---|---|
| Heat released by aerobic growth | 460 kJ per mol of O2 consumed | at 0.83 to 1.25 kg O2 per kg of dry biomass: 12 to 18 MJ, or 3.3 to 5.0 kWh of heat, per kg | [@COST-50] (rule cited from Roels 1983) |
| Agitation and aeration power | not a cooling cost | about 0.5 to 1.0 kWh per kg | assumption |
| Scale check | Baker's yeast plant, 7 x 150 m3 bubble columns, Germany | removes about 11 MW on average, about 10.5 kW per m3 | [@COST-52] |
| Cooling water in southern Vietnam | design wet-bulb about 27 to 28 C | cooling towers deliver water at about 31 to 33 C | assumption (not sourced) |
| Broth temperature | *Fusarium*, *Aspergillus*, most yeasts | 28 to 32 C, so the coolant must be about 5 to 20 C: mostly chilled water | assumption |
| Temperate comparison | design wet-bulb about 18 to 20 C | tower water about 23 to 25 C; cooling water covers most hours | assumption |
| Relative utility cost | cooling water versus chilled water | cooling water is 4 to 8 times cheaper per unit of heat | [@COST-50] (Towler and Sinnott) |
| Chiller power | temperate design 0.56 kW per ton of refrigeration | tropical assumption 0.75 to 0.9 kW per ton including pumps and fans, a system COP of about 4.0 to 4.7 | [@COST-51]; assumption |
| Chilled-water electricity | 3.3 to 5.0 kWh heat / COP, plus pumps | 0.81 to 1.5 kWh per kg of dry biomass (against 0.10 to 0.15 with cooling water only) | our calculation |
| **Energy penalty** | 0.7 to 1.35 kWh per kg x USD 0.075 to 0.078 per kWh | **USD 52 to 105 per tonne** | our calculation |
| Chiller capex | 10 kt/yr, 8,000 h/yr; peak 1,750 to 3,200 tons of refrigeration x USD 800 to 1,500 per ton installed | USD 1.4 to 4.8 M, or USD 21 to 72 per tonne a year at a 15% capital charge | our calculation; unit cost assumed |
| **Total penalty** | energy plus capital | **about USD 70 to 180 per tonne of dry biomass** | our calculation |

- **Size of the penalty.** USD 70 to 180/t is roughly 2 to 4% of the indicative cost of fungal feed protein in most cases, and 1 to 8% at the extremes (our calculation, against USD 2,227 to 6,612/t). The extra cooling electricity (0.7 to 1.35 kWh/kg) is about half to 1.7 times the plant's other electricity use (0.8 to 1.5 kWh/kg), but electricity is a small share of total cost.
- **Avoiding it.** Strains that grow at 40 to 45 C can use tower water. *Kluyveromyces marxianus* SS106, isolated from Thai cassava pulp, reached 39 to 46 g/L of cell mass at 40 C on raw cassava starch [@SCI-44] {VN-adjacent|High}. A model of a 600 m3 bubble column on ethanol found that a 30 C broth needs chilled water while a 45 C broth can use cooling water; the same model could make up to 58 kt/yr of SCP [@COST-50] {general|Medium}. Hybrid pre-cooling with tower water also removes much of the penalty.

> **Correction.** Earlier drafts implied that tropical cooling "may offset" Vietnam's power-cost advantage. In energy terms that is partly right, but the overall effect is about 2 to 4% of feed-protein cost, and thermotolerant strains avoid most of it (our calculation above; [@COST-50; @COST-51; @COST-52]).

### I15. Cost stack A: fungal biomass protein for feed

Submerged aerobic fermentation on sugar, dried, 45 to 55% CP; 10,000 t/yr; USD per tonne of product; 2026 prices at 26,000 VND/USD; excluding VAT, sales, distribution and profit. Indicative, not a feasibility study. Label for the result: {VN-direct|Low}.

| Line | Low | High | Basis | Type |
|---|---|---|---|---|
| Carbon (2.0 to 2.2 t of glucose equivalent per t; yield 0.45 to 0.50 g/g) | 600 | 1,100 | USD 300 to 500/t of glucose equivalent. The low end is near world raw sugar (USD 330/t in March 2026 [@COST-32]; USD 380/t in August 2026 [@FM-01]); the high end is a refined cassava starch or syrup assumption. Near-free residues (cassava pulp) could cut this line but need pretreatment ([[app-c-feedstocks]]) | assumption on measured prices |
| Nitrogen (0.17 to 0.20 t of urea per t) | 72 | 145 | Phu My urea USD 425/t (March 2026) [@COST-33] to the world spike of USD 726/t (March 2026) [@COST-30]. World urea fell back to USD 390/t by August 2026 [@FM-01], so the low end is not understated | measured prices; assumed use |
| Minerals, vitamins, antifoam, enzymes | 50 | 150 | Assumption; trace ingredients can matter (food-grade biotin and zinc cut mycoprotein cost by 22%) [@COST-43] | assumption |
| Electricity excluding cooling (0.8 to 1.5 kWh/kg) | 58 | 117 | 1,895 VND/kWh (DPPA example) [@COST-06] to 2,020 VND/kWh (6 to 22 kV blended) [@COST-01] | measured price; assumed use |
| Cooling electricity (0.1 to 1.5 kWh/kg) | 7 | 117 | I14: from a thermotolerant or cooling-water case to full chilled water | our estimate |
| Steam (4.5 to 6.5 t per t, for sterilisation, cleaning and drying) | 78 | 218 | 450 to 870 VND per kg of steam, from the husk-pellet calculation [@COST-16] and the supplier claim [@COST-17] | measured prices; assumed use |
| Water and wastewater (20 to 40 m3 per t) | 18 | 58 | USD 0.64/m3 water [@COST-10] plus USD 0.28 to 0.80/m3 treatment including a COD surcharge [@COST-13; @COST-14] | measured prices; assumed use and surcharge |
| Labour (60 to 100 FTE) | 44 | 124 | USD 7,400 to 12,350 per FTE a year (I4; above the NSO average) [@COST-19; @COST-20] | assumption on measured wages |
| Land (5 to 8 ha) | 99 | 185 | USD 186/m2 for the lease term [@COST-21], annualised over 30 to 40 years at 10 to 12% | measured price; assumed area |
| Capital charge (capex USD 8,000 to 20,000 per annual t; 12 to 18% a year) | 960 | 3,600 | Capex set below and at the verified TEAs (USD 16,000 to 22,800 per annual t) [@COST-43; @COST-44], allowing 20 to 40% localisation savings; charge factor brackets Humbird's 15% [@COST-47] | assumption anchored on TEAs |
| Maintenance and insurance (3 to 4% of capex) | 240 | 800 | Assumption | assumption |
| **Total, USD per t of product** | **2,227** | **6,612** | = 58,000 to 172,000 VND/kg (our calculation) | |
| **USD per t of protein** | **4,050** | **14,700** | Low at 55% CP (2,227 / 0.55); high at 45% CP (6,612 / 0.45) (our calculation) | |

**Comparison with fishmeal (updated).** Fishmeal protein cost about USD 2,625 per tonne at the 2025 average price and USD 3,846 in August 2026 [@FM-01] {general|High}. The low end of the stack (USD 4,050 per tonne of protein) is therefore about 54% above fishmeal at the 2025 average and about 5% above it at the August 2026 price (our calculation, 4,050 / 2,625 and 4,050 / 3,846). Soybean-meal protein (about USD 880 per tonne) is 4.6 to 5.1 times cheaper than the low end ([[app-h-feed-market]]).

**Sensitivities (our calculation).**

- **Near-free carbon.** Removing the USD 600 carbon line from the low case gives USD 1,627 per tonne of product, about USD 2,960 per tonne of protein at 55% CP: below fishmeal protein at the August 2026 price (USD 3,846), but still about 13% above the 2025 average (USD 2,625).
- **Capital.** The low case already assumes capex of USD 8,000 per annual tonne, half of the lowest verified TEA. At the verified USD 16,000 to 22,800 per annual tonne, the capital charge alone would be USD 1,920 to 4,100 per tonne of product at 12 to 18% (our calculation).
- **Capital dominates.** Capital charge plus maintenance is 54% of the low case ((960 + 240) / 2,227) and 67% of the high case ((3,600 + 800) / 6,612) (our calculation).
- **Published feed TEAs agree.** Minimum selling prices of USD 2,070 to 4,150 per tonne of SCP [@COST-44; @COST-45] also sit at or above fishmeal on a protein basis.

**Not included, and pushing the high case up.** Because feed is not subject to VAT, input VAT on capex and taxed inputs is not reclaimable, adding about 5 to 10% on those inputs (I6). The feed-ingredient listing process also takes time (6 to 18 months by our estimate; [[app-h-feed-market]]).

### I16. Cost stack B: textured soy protein (TVP)

Dry TVP from soy flour or concentrate by low-moisture extrusion; 3,000 t/yr on one 1 t/h line; USD per tonne of product; 2026 prices; excluding VAT, sales, distribution and profit. Indicative. Label for the result: {VN-direct|Low}.

| Line | Low | High | Basis | Type |
|---|---|---|---|---|
| Raw material (1.03 to 1.07 t of dry blend per t) | 566 | 1,391 | Defatted soy flour at USD 550/t (soybean meal USD 404/t in March 2026 [@COST-28], USD 403/t in August 2026 [@FM-01], plus about USD 150 food-grade premium) up to a 50:50 soy flour and SPC blend at USD 1,300/t. Imported wheat gluten about USD 2.5/kg [@COST-38] | assumption on measured prices |
| Electricity (150 to 350 kWh/t) | 11 | 27 | 1,895 to 2,020 VND/kWh [@COST-01; @COST-06] | measured price; assumed use |
| Steam (0.4 to 0.8 t per t) | 7 | 27 | As stack A | measured price; assumed use |
| Water and wastewater (2 to 5 m3 per t) | 2 | 7 | As stack A | measured price; assumed use |
| B2B packaging (20 to 25 kg bags) | 10 | 20 | Assumption | assumption |
| Labour (25 to 40 FTE) | 62 | 165 | As stack A | assumption on measured wages |
| Ready-built factory (2,000 to 3,000 m2) | 39 | 61 | USD 4.9 to 5.1/m2/month [@COST-21; @COST-22] | measured price; assumed area |
| Capital charge (equipment USD 1.5 to 4.0 M; 12 to 18%) | 60 | 240 | Equipment cost is an assumption; no verified extrusion capex was found | assumption |
| Maintenance (3 to 5% of equipment) | 15 | 67 | Assumption | assumption |
| QA, laboratory, certification, overhead | 20 | 60 | Assumption | assumption |
| **Total, USD per t of product** | **792** | **2,065** | = 20,600 to 53,700 VND/kg (our calculation) | |
| **VND per 100 g of protein** (50 to 55% protein) | **3,700** | **10,700** | Low at 55%, high at 50% (our calculation) | |

**Reading.**

- **Raw material is about 70% of cost** (566 / 792 = 71%; 1,391 / 2,065 = 67%, our calculation). Vietnam grows only about 1.6% of its soybean supply (42 kt against 2.61 Mt imported in 2025; our calculation from [@MAC-04; @MAC-09]), so its cost edge over a Thai or Chinese plant is mostly labour and rent, perhaps USD 50 to 150 per tonne (our estimate).
- **Manufacturing cost is not what blocks textured plant protein in Vietnam.** The indicative ex-factory cost of 3,700 to 10,700 VND per 100 g of protein is about 3 to 19 times below retail meat and egg protein (34,300 to 69,500 VND per 100 g; I10) (our calculation). Retail dried soy analogues sell at about 51,000 VND per 100 g of protein (one product) and a median of 64,584 across four products [@COST-42; @FORM-01], about 5 to 17 times the indicative ex-factory cost (our calculation). The gap is distribution, brand and retail margin, and product quality.
- **Imports set the benchmark.** Imported textured protein and concentrates (HS 2106.10) carry a 5% duty and showed a weak unit value of USD 5.90/kg in 2023 [@COST-37; @REG2-20] {VN-direct|Low}. Defatted soy flour for food carries 2% [@REG2-21].

### I17. Caveats

1. **Indicative only.** Both stacks mix measured Vietnamese prices with engineering assumptions. They show which lines matter; they are not a basis for an investment decision.
2. **Capex is the swing factor** and is the least Vietnamese of the inputs. No Vietnamese fermentation or extrusion capex was found; equipment majors' Vietnamese presence was not verified ([[app-f-facilities]]).
3. **Electricity may change.** A capacity charge could arrive from 2027, and Decree 278/2026 allows more frequent price moves.
4. **Fishmeal is volatile.** The August 2026 price is one month's value. The comparison with fishmeal changes from 54% above to 5% above between the 2025 average and August 2026.
5. **Cooling is an estimate** built from general rules and an unsourced wet-bulb assumption.
6. **Tax treatment is unresolved.** Whether a new feed ingredient counts as "animal feed" for VAT, and whether a fermentation plant qualifies for high-technology CIT incentives, are open questions ([[app-g-regulation]]).
7. **Currency.** All conversions use 26,000 VND per USD; the rate rose about 3 to 3.5% in 2025 [@MAC-25] {VN-direct|Medium}.

---

## Gaps and how to close them

| # | Gap | Why it matters | Cheapest way to close it |
|---|---|---|---|
| 1 | Domestic fishmeal price by grade, domestic soybean meal and DDGS in VND/kg | The local price to beat | Vietnam Feed Association or AgroMonitor weekly feed bulletin; two fishmeal plants in An Giang (former Kien Giang) or Ca Mau |
| 2 | Glucose syrup, bulk molasses and ammonium sulphate prices | Carbon and nitrogen lines of stack A | Vedan (sells glucose syrup), sugar mills, fertiliser distributors |
| 3 | Construction cost per m2 for food and biotech factories | Capex | MOC Decision 409/QD-BXD, Part 2, Chapter II; construction cost guides (Cushman & Wakefield, RLB, Arcadis) |
| 4 | Engineer, biotech and QA salaries | Labour line | Navigos, Talentnet-Mercer or Adecco 2026 salary guides |
| 5 | Natural gas and CNG prices; industrial-park steam tariffs | Heat line; gas fermentation | Quotes from PV GAS D and Gas South; Nhon Trach or Phu My park operators |
| 6 | Logistics: trucking per tonne-km, container rates, cold chain | Delivered cost to mills and export | Vietnam Logistics Business Association; a forwarder quote; Drewry or Freightos spot rates |
| 7 | Precision-fermentation cost benchmarks | No peer-reviewed food-protein TEA verified | GFI APAC analyses; capacity reports; ask Liberation Bioindustries for capex |
| 8 | Plant protein isolate and high-moisture extrusion capex | Stack B capital line is assumed | Equipment quotes (Buhler, Clextral, Coperion, Famsun); read the Thai freeze-alignment TEA |
| 9 | Official grid emission factors for 2024 and 2025 | Scope 2 claims | MAE Department of Climate Change |
| 10 | End date of the 8% VAT cut; whether SCP counts as feed for VAT | Input-VAT cost of feed-protein plants | General Department of Taxation; regulation team |
| 11 | Social insurance rates after the 2024 Social Insurance Law | On-cost line | Read the law and guiding decree |
| 12 | Retail pangasius price | Missing protein benchmark | VASEP bulletin or a store check |
| 13 | Vietnamese site values in the renewable-electricity SCP model | A sourced e-protein cost for Vietnam | Extract the Vietnamese grid cells from the Fasihi et al. (2025) source data |
| 14 | A Vietnam-specific cooling and energy model for aerobic fermentation | Replaces our rule-based estimate | University engineering project using measured wet-bulb data |

See [[app-q-open-questions]] for the full register and [[app-r-disagreements]] for the conflicts on the blended power price, urea series, fishmeal price, minimum wage, capex per m3 and cooling.

## Related data files

- `cost_inputs.csv`: 61 Vietnamese input costs (electricity tariffs and blended prices, DPPA, grid emission factor, water, heat, labour, land, taxes, logistics, exchange rate), each with date, basis, source, label and confidence.
- `commodity_prices.csv`: 38 wave 1 commodity and retail protein prices (feed commodities, protein ingredients, carbon and nitrogen inputs, retail meat, eggs, tofu and analogues).
- `tea_benchmarks.csv`: 25 techno-economic benchmarks with scale, metric, cost-basis year, plant grade and whether the full text was read.
- `feed_benchmarks.csv`: the wave 2 fishmeal and soybean-meal series to August 2026 and prices per tonne of protein.
- `tariffs.csv`: import duties on feed and food protein inputs.
- `outlook.csv`: World Bank forecasts and power-plan targets.
- `retail_audit_summary_price_per_protein_by_type.csv`: retail audit medians per 100 g of protein.
- `countries.csv`: regional comparison, including the GFI APAC and Hawkwood inputs.
- `disagreements.csv` and `open_questions.csv`: conflicting numbers and open questions.
