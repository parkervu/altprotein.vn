---
id: app-s4-feedstocks
title: "S4. Feedstock data sheets"
short_title: "Feedstock data sheets"
section: appendix
order: 24
summary: "One data sheet for each Vietnamese raw material and side stream that could feed an alternative-protein process: volume and how we got it, location, users, prices, composition, seasonality, competing uses, what it could become and what is still unknown."
audiences: [investors, startups, manufacturers, research, policy, international]
reading_time_min: 50
key_numbers: [kn-cassava-roots-2025, kn-cassava-pulp, kn-tay-ninh-starch, kn-rice-bran, kn-bsg, kn-cassava-price-rise]
related_data: [feedstocks.csv, feedstock_prices.csv, macro_indicators.csv, feed_imports.csv, facilities.csv, science_facts.csv, publications.csv, provinces.csv, disagreements.csv, open_questions.csv]
related_pages: [ch04-asset-map, ch05-industrial-base, ch09-economics, ch10-technology-fit, app-s5-facilities, app-s6-feed-market, app-s12-costs, app-s13-science, app-s7-research, app-s10-admin-map, app-r1-open-questions, app-r2-disagreements]
charts: [chart-feedstock-volumes, chart-feedstock-map]
---

# S4. Feedstock data sheets

This appendix is the evidence base behind [[ch04-asset-map]]. It holds one data sheet for each raw material or side stream that a protein process in Vietnam could use: crops, crop residues, food-industry side streams, aquatic biomass and industrial fermentation co-products. Most of these streams are carbon sources, not protein sources. The sheets therefore say, for each stream, whether it brings protein, carbon, or both, and what process would be needed to turn it into a protein product.

## How to read the data sheets

- **Terms.** DM is dry matter. CP is crude protein (nitrogen x 6.25). "Wet" means as produced, before drying. Mt is million tonnes, kt is thousand tonnes.
- **Measured or derived.** "Measured" means a statistics office, ministry, customs service, company or peer-reviewed study published the number for that stream. "Derived" means we calculated it from a sourced volume and a sourced ratio. Every derived number shows its arithmetic and says "(our calculation)". Derived numbers carry Low confidence unless stated.
- **Prices.** Prices are in VND per kg unless stated, with the date and the basis (farm-gate, factory-gate, wholesale, retail, FOB). We convert at 26,000 VND per USD.
- **Provinces.** We use the current (post-1 July 2025) province name first and give the former unit in brackets, for example Tay Ninh (former Long An). See [[app-s10-admin-map]].
- **Fields.** Every sheet uses the same fields: volume, locations, sites and companies, current use and buyers, prices, composition, seasonality and storage, competing uses, what it could become, evidence gaps and sources. "Not established" means we looked and found no usable figure. It does not mean the stream is small.
- **Tags.** `{VN-direct|High}` and similar tags follow the evidence rules in [[app-m1-method]].

> **Method note.** The wave 1 web-search budget ran out part of the way through the feedstock work. Cassava, rice, sugar, beer, soy and fuel ethanol were researched on the open web. Seaweed, spirulina, duckweed, mushrooms, cashew, coffee, jackfruit and pulses were covered only through the peer-reviewed literature and are thin. Where a sheet is thin, it says so, and the gap is listed at the end.

## Summary table

| # | Stream | Volume (year) | Basis | Main provinces | CP, % DM | Latest price signal | Sources | Label |
|---|---|---|---|---|---|---|---|---|
| C1 | Cassava roots, domestic | 10.24 Mt fresh (2025) | Measured | Tay Ninh, Gia Lai, Dak Lak, Quang Ngai, Dong Nai | n/a | 3,000 to 3,550 VND/kg (Apr 2026, 30% starch) | [@FS-01; @FS-11] | {VN-direct\|High} |
| C1 | Cassava roots, imported | about 8 Mt root equivalent (2025) | Measured share of supply | Border provinces (inferred) | n/a | n/a | [@FS-14] | {VN-direct\|Medium} |
| C2 | Cassava starch | 2.28 Mt exported in 11 months of 2025; about 2.49 Mt full year | Measured; full year derived | As roots | n/a | 12,500 to 13,200 VND/kg; FOB USD 520 to 540/t (Apr 2026) | [@FS-01; @FS-11; @FS-12] | {VN-direct\|High} |
| C2 | Cassava chips | 955,670 t exported in 11 months of 2025 | Measured | Gia Lai (former Binh Dinh), Central Highlands | n/a | 5,800 to 6,200 VND/kg (Mar 2026) | [@FS-01; @FS-12] | {VN-direct\|Medium} |
| C3 | Cassava pulp | about 6.2 Mt wet (range 4 to 8), about 1.3 Mt DM (2025) | Derived | Tay Ninh cluster; all starch provinces | 1.5 to 2.6 | about 1,700 VND/kg implied (Dec 2024, form unclear) | [@FS-05; @FS-06; @FS-03] | {VN-adjacent\|Low} |
| C4 | Cassava peel and rhizomes | about 0.25 Mt peel and 1.5 Mt rhizomes (2025) | Derived | Starch factories | not found | none | [@FS-53] | {VN-adjacent\|Low} |
| C5 | Starch wastewater | about 2 m3 per t roots at one factory; national total not published | Measured (one site) | Starch factories | n/a | none | [@FS-04] | {VN-direct\|Low} |
| C6 | Rice paddy | 43.5 Mt (2025) | Measured | Mekong Delta | n/a | 5,700 to 6,200 VND/kg (19 Sep 2026) | [@FS-25; @FS-26] | {VN-direct\|High} |
| C7 | Broken rice | 872,576 t of 100% broken exported (2025); total not established | Measured (exports) | Mekong Delta mills | not found | FOB USD 368 to 372/t (19 Sep 2026) | [@FS-23; @FS-26] | {VN-direct\|Medium} |
| C8 | Rice bran | about 4.35 Mt (2025) | Derived | Mekong Delta mills | 11 to 17 (as-is) | 7,300 to 7,650 VND/kg (19 Sep 2026) | [@FS-27; @FS-25; @FS-26] | {VN-direct\|Medium} |
| C9 | Rice husk | about 8.7 Mt (2025) | Derived | Mekong Delta | n/a | pellets 2,190 VND/kg (Dec 2025) | [@FS-27; @COST-16] | {VN-direct\|Low} |
| C10 | Rice straw | not established | n/a | Rice provinces | not found | none | [@FS-55] | {VN-direct\|Low} |
| C11 | Sugarcane | 13.3 Mt crushed (2025/26) | Measured | Gia Lai, Dak Lak (former Phu Yen) | n/a | n/a | [@FS-31; @FS-34] | {VN-direct\|High} |
| C12 | Molasses | 0.55 to 0.72 Mt (2025/26) | Derived | About 25 mill sites | not found | 9,970 VND/kg, retail can (Dec 2023) | [@FS-37; @FS-36] | {general\|Low} |
| C13 | Bagasse | not established | n/a | Mill sites | n/a | none | [@FS-35] | {VN-direct\|Low} |
| C14 | Vinasse and stillage from molasses | not established | n/a | Future ethanol sites | n/a | none | [@SCI-18] | {general\|Low} |
| C15 | Surplus sugar | 1.298 Mt sugar (2025/26) | Measured | Mill sites | n/a | about 16,505 VND/kg refined (Jun 2026) | [@FS-31] | {VN-direct\|Medium} |
| C16 | Brewer's spent grain | at most 0.80 to 0.88 Mt wet; 160 to 176 kt DM | Derived upper bound | HCMC, Hanoi, Hue, Can Tho and other brewery sites | about 20 | 6,000 to 6,500 VND/kg retail (Mar 2026, doubtful) | [@FS-38; @FS-41; @FS-42] | {VN-adjacent\|Low} |
| C17 | Brewer's spent yeast | not established | n/a | Brewery sites | not found | none | [@FS-40] | {VN-direct\|Low} |
| C18 | Soybeans | 42 kt domestic (MY2024/25); 2.61 Mt imported (2025) | Measured | Crushers in north and south | n/a | USD 482/t world (Aug 2026) | [@FS-24; @MAC-09; @FM-01] | {VN-direct\|High} |
| C19 | Okara | at most 605 to 660 kt wet; about 120 to 130 kt DM | Derived upper bound | Tofu villages and soymilk plants | 25 to 40 | none | [@FS-44; @FS-45; @FS-24] | {VN-adjacent\|Low} |
| C20 | Mung bean | not established | n/a | not sourced | not found | none | [@SCI-41] | {general\|Low} |
| C21 | Peanut | 380 kt (MY2025/26 forecast) | Measured (forecast) | not sourced | not found | oil USD 4 to 5 per litre retail | [@FS-24] | {VN-direct\|High} |
| C22 | Coconut | 1.728 Mt (MY2025/26) | Measured | Vinh Long (unverified) | not found | none | [@FS-24] | {VN-direct\|Medium} |
| C23 | Cashew apple | not established | n/a | not sourced | not found | none | [@FS-47] | {general\|Low} |
| C24 | Coffee pulp | about 450 kt dried (2016 basis) | Derived by source authors | Dak Lak and Central Highlands | not found | none | [@FS-46] | {VN-direct\|Low} |
| C25 | Jackfruit | not established | n/a | not sourced | not found | none | [@RD-01] | {VN-direct\|Low} |
| C26 | Pangasius by-products | at most 1.2 to 1.3 Mt (2025) | Derived upper bound | Mekong Delta | not found | none | [@MAC-15; @MAC-45; @FS-48] | {VN-adjacent\|Low} |
| C26 | Shrimp by-products | at most 0.62 to 0.69 Mt (2025) | Derived upper bound | Mekong Delta, Ca Mau | up to 65 (heads) | none | [@MAC-15; @FS-49; @FS-50] | {VN-adjacent\|Low} |
| C27 | Aquaculture effluent | not established | n/a | Mekong Delta | n/a | none | [@RD-45] | {VN-direct\|Low} |
| C28 | Seaweed | not established | n/a | Khanh Hoa (former Ninh Thuan) | not found | none | [@FS-51] | {VN-direct\|Low} |
| C29 | Spirulina and microalgae | not established | n/a | not sourced | 48.73 (one strain, DW) | none | [@RD-20; @RD-21] | {VN-direct\|Low} |
| C30 | Duckweed and Wolffia | not established; no commercial grower found | n/a | Mekong Delta (research) | 18 to 44 (regional data) | none | [@FS-54; @SCI-35] | {VN-adjacent\|Low} |
| C31 | Mushrooms and spent substrate | not established | n/a | Red River and Mekong deltas | not found | none | [@FS-55] | {general\|Low} |
| C32 | Ethanol stillage and distillers' grains | stillage not published; 3 plants make 830 m3/day of ethanol (2026) | Measured (ethanol only) | Quang Ngai, Da Nang, Dong Nai | rice DDG 55 to 80; cassava DDG 13 to 16 | none | [@FS-09; @RD-22] | {VN-direct\|Medium} |
| C33 | MSG and amino-acid co-products | Ajinomoto: 30,000 m3/yr liquid and 5,000 t/yr solid feed ingredients (2023) | Measured (permit consultation) | Dong Nai | not found | Vedan fertiliser and feed sales USD 27.1 M (2025) | [@IND-08; @VCO-01] | {VN-direct\|Medium} |
| C34 | Maize (reference) | 4.4 Mt (NSO, 2025) or 4.1 Mt (USDA, MY2025/26) | Measured | Northern uplands, Central Highlands | n/a | 6,000 to 8,000 VND/kg ground, farm reference (Jul 2026) | [@FS-25; @FS-23; @FS-30] | {VN-direct\|Medium} |
| C34 | Imported DDGS (reference) | 1.55 Mt (2025) | Measured | Feed mills | not found | none | [@FS-23] | {VN-direct\|High} |

**What the table says.** Three points stand out.

1. The large streams are carbohydrate: cassava pulp, rice bran and husk, molasses and surplus sugar. Any route from them to protein needs added nitrogen and a microbial step.
2. The protein-rich side streams (brewer's spent grain, okara, seafood by-products) are small in plant-protein terms or are animal protein. Brewer's spent grain holds at most about 32 to 35 kt of protein a year and okara at most about 30 to 45 kt (see C16 and C19), against 7.2 Mt of soybean meal fed in 2025 [@MAC-04] {VN-direct|Medium}.
3. The novel biomasses (seaweed, spirulina, duckweed, mushrooms) cannot be sized from public data. Any plan that relies on them starts with primary data collection.

---

## Cassava

### C1. Cassava roots (*sắn*, *khoai mì*: cassava)

- **Volume.** The domestic harvest was 10.24 Mt of fresh roots on 499,100 ha in 2025, a yield of 20.5 t/ha. Area fell by 18,600 ha and output by 295,110 t compared with 2024 [@FS-01] {VN-direct|High}. This is measured (Statistics Office data reported in the press). An August 2026 article repeats about 517,000 ha and about 10.5 Mt, which are 2024 values [@FS-08] {VN-direct|Medium}. Total factory supply is above 18 Mt of roots a year, of which about 42% (about 8 Mt) is imported, mainly from Cambodia and Laos [@FS-14] {VN-direct|Medium}. The vice-chair of the Vietnam Cassava Association puts factory demand at about 20 Mt against about 10 Mt of domestic roots [@FS-07] {VN-direct|Low}. About 85% of roots go to industry (starch, ethanol, MSG and chips) [@FS-08] {VN-direct|Medium}. About 1.2 million households grow cassava [@FS-14] {VN-direct|Medium}.
- **Imports.** Cambodia exported 3.1 Mt of fresh roots (down 10%) and 1.56 Mt of chips (up 62%) to all destinations in 2025. Its cassava exports were worth USD 489 M in the first 8 months of 2026 (down 1.9%), and its cassava area fell about 30% [@FS-15] {VN-adjacent|Medium}. The border provinces through which imports enter (Tay Ninh, Gia Lai, Dak Lak, Quang Tri) are our inference, not a sourced finding.
- **Locations.** Tay Ninh (about 61,000 ha and more than 2 Mt a year) [@FS-03] {VN-direct|Medium}; Gia Lai (former Gia Lai and Binh Dinh, with the Quy Nhon export port); Dak Lak (former Dak Lak and Phu Yen); Quang Ngai (former Quang Ngai and Kon Tum); Dong Nai (former Binh Phuoc); Son La; Thanh Hoa [@FS-03; @FS-07; @FS-11; @FS-16; @FS-22] {VN-direct|Medium}. We found no ranked provincial table, so we give no provincial shares.
- **Sites and companies.** Roots are bought by starch factories (see C2), chip traders, the three operating fuel-ethanol plants (see C32) and the MSG makers Vedan, Ajinomoto and Daesang ([[app-s5-facilities]]).
- **Current use and buyers.** Starch, chips, ethanol and MSG. Compound feed used 550 kt of cassava in 2025, forecast to reach 645 kt in 2027 [@FS-23] {VN-direct|High}.
- **Prices.** Root prices rose by roughly half to almost double in a year (about 75% in Tay Ninh):

| Market | 9 Apr 2026, VND/kg | Apr 2025, VND/kg | Basis | Source | Label |
|---|---|---|---|---|---|
| Tay Ninh (30% starch) | 3,000 to 3,500 | about 2,000 (up 1,000 to 1,500, about 75%) | factory gate | [@FS-11] | {VN-direct\|Medium} |
| Dak Lak (30% starch) | 3,000 to 3,498 | 1,800 to 1,998 | factory gate | [@FS-11] | {VN-direct\|Medium} |
| Quang Ngai (30% starch) | 3,099 to 3,300 | not given | factory gate | [@FS-11] | {VN-direct\|Medium} |
| Gia Lai (30% starch) | 3,399 to 3,549 | 1,800 to 1,950 | factory gate | [@FS-11] | {VN-direct\|Medium} |
| Northern region (bulk) | 2,400 to 2,700 | 1,350 to 1,650 | factory gate | [@FS-11] | {VN-direct\|Medium} |
| National range, end of Q1 2026 | 2,850 to 3,550 | n/a | factory gate | [@FS-12] | {VN-direct\|Medium} |
| Thailand benchmark, Mar 2026 | 3.35 to 3.55 THB/kg | n/a | factory gate | [@FS-12] | {VN-adjacent\|Medium} |

  The press gives three causes: farmers left cassava after low prices in 2025, leaf-spot disease, and Cambodian supply running out [@FS-11] {VN-direct|Medium}. Vedan's 2025 annual report and 2026 interim results say cassava prices "rose sharply" from Q4 2025 through H1 2026, and that molasses was tight [@VCO-01; @VCO-02] {VN-direct|High}. At 30% starch, a root price of 3,000 to 3,550 VND/kg means 10,000 to 11,800 VND per kg of starch contained in the root, before any processing cost (our calculation, 3,000 / 0.30 and 3,550 / 0.30). That is close to the native starch price of 12,500 to 13,200 VND/kg at the end of Q1 2026 [@FS-12] {VN-direct|Medium}.
- **Composition.** Roots are traded on a 30% starch basis [@FS-11]. Conversion ratios: 2.5 t of fresh roots per t of dry chips [@FS-08] {VN-direct|Medium}; about 4.4 t of roots per t of starch (Thai material balance) [@FS-05] {VN-adjacent|Medium}.
- **Seasonality and storage.** The main harvest runs from about October or November to April. By late March 2026, 70 to 80% of the area had been harvested [@FS-12] {VN-direct|Medium}. The starch campaign follows the harvest.
- **Competing uses.** Starch for export to China (C2); chips and fuel ethanol under the E10 mandate, in force nationwide from 1 June 2026 [@GT-10; @FS-10] {VN-direct|High}; MSG; feed.
- **What it could become.** Roots are a carbon source. Thermotolerant yeast can ferment raw cassava starch directly: *Kluyveromyces marxianus* SS106, isolated from Thai cassava pulp, reached 39 to 46 g/L of cell mass at 40 C on raw cassava starch in 5 L reactors [@SCI-44] {VN-adjacent|High}. At 2026 prices, roots are the expensive way to buy carbon. Residues (C3, C4) and surplus sugar (C15) are the comparison.
- **Evidence gaps.** Provincial output shares; import volumes by border gate; the weekly bulletins of the Vietnam Cassava Association (its site failed on a certificate error during our research).
- **Sources.** [@FS-01; @FS-03; @FS-05; @FS-07; @FS-08; @FS-10; @FS-11; @FS-12; @FS-14; @FS-15; @FS-16; @FS-22; @FS-23; @GT-10; @SCI-44; @VCO-01; @VCO-02]

### C2. Cassava starch and chips (*tinh bột sắn*, *sắn lát*)

- **Volume.** Vietnam exported 2.28 Mt of cassava starch worth USD 809.9 M in the first 11 months of 2025, up 69.8% in volume [@FS-01] {VN-direct|High}. Scaled to 12 months that is about 2.49 Mt (our calculation, 2.28 x 12 / 11). Total cassava exports were 3.99 Mt worth USD 1.27 bn in 2025 [@FS-01] {VN-direct|High}. China took 92.5 to 94% [@FS-01; @FS-12; @FS-13] {VN-direct|High}. After 10 months of 2025, Vietnam held 48.8% of China's cassava-starch imports, ahead of Thailand [@FS-13] {VN-direct|High}. Earlier years: 2.15 Mt worth USD 1.06 bn in 2023, 93.5% to China (Vietnam-reported) [@RGN-53]; 39% of China's cassava-starch imports in 2024, 1.56 Mt worth USD 757 M (China-reported) [@RGN-51] {VN-direct|High}. Q1 2026 exports were 1.06 Mt worth USD 359.4 M, of which starch was 64% of volume [@FS-12] {VN-direct|Medium}. Domestic starch use (MSG, paper, food, modified starch) is not quantified in any source we read.
- **Chips.** Chip exports were 955,670 t in 11 months of 2025 [@FS-01] or 967,460 t in 10 months [@FS-13] {VN-direct|Medium}. Both cannot be chips only. We use the first figure for chips and log the conflict in [[app-r2-disagreements]].
- **Factories.** The count is disputed. About 100 industrial mills (MOIT, 2021) [@FS-04]; about 120 in 27 provinces with 11.3 Mt of design and 8.62 Mt of actual root capacity (ASEAN Cassava Centre, January 2023) [@FS-02]; "150+" factories averaging 300 to 350 t of roots a day (Vietnam Cassava Association, October 2025) [@FS-07] {VN-direct|Medium}. Older data list over 4,000 small units [@FS-17] {VN-direct|Low}. We use "120 to 150" and cite all three. Tay Ninh alone has 68 factories with 6.4 Mt a year of root capacity (December 2024) [@FS-03] or 65 factories (October 2025) [@FS-07] {VN-direct|Medium}.
- **Example sites.** Dinh Khue (Tan Chau, Tay Ninh), 280 t of roots a day [@FS-03]. Son La Starch Factory, 100,000 t of roots in and 30,000 t of starch out planned for 2019/20 [@FS-22]. Long Giang Thinh, over 50,000 t of roots a year [@FS-04]. Vina Thanh Hoa (Ngoc Lac, Thanh Hoa) [@FS-21]. FOCOCEV in Dong Nai (former Binh Phuoc) [@FS-17]. Hung Duy Group (Tay Ninh) [@FS-07] {VN-direct|Medium}. Vedan's native starch nameplates are 72,000 t/yr at Phuoc Thai (1994) and 72,000 t/yr at Phuoc Long (1998), plus two 36,000 t/yr lines (2000 and 2001), and 10,000 and 30,000 t/yr of modified starch (1998 and 2000). These are historic nameplates, not confirmed as current [@VCO-03] {VN-direct|Medium}. Daesang runs a tapioca starch and maltose syrup plant in Tay Ninh (2005) [@IND-11] {VN-direct|Medium}.
- **Current use and buyers.** Export (more than 90% to China) [@FS-01] {VN-direct|High}; domestic MSG, food, paper and modified starch; chips to ethanol plants, feed mills and export.
- **Prices.**

| Product and market | Price | Date | Basis | Source | Label |
|---|---|---|---|---|---|
| Native starch, domestic | 12,500 to 13,200 VND/kg | end of Q1 2026 | wholesale | [@FS-12] | {VN-direct\|Medium} |
| Native starch, FOB Ho Chi Minh City | USD 405 to 415/t | Jan 2026 | export | [@FS-01] | {VN-direct\|Medium} |
| Native starch, FOB Ho Chi Minh City | USD 520 to 540/t (up USD 145 to 155 on Apr 2025) | 9 Apr 2026 | export | [@FS-11] | {VN-direct\|Medium} |
| Native starch, Thailand | 15.60 THB/kg | Mar 2026 | wholesale | [@FS-12] | {VN-adjacent\|Medium} |
| Chips, domestic | 5,800 to 6,200 VND/kg | end of Q1 2026 | wholesale | [@FS-12] | {VN-direct\|Medium} |
| Chips, FOB Quy Nhon | about USD 235/t | Jan 2026 | export | [@FS-01] | {VN-direct\|Medium} |
| Chips, FOB Quy Nhon | USD 260/t (to China) and USD 315/t (to Korea) | 9 Apr 2026 | export | [@FS-11] | {VN-direct\|Medium} |

- **Composition.** Native starch is close to pure carbohydrate. Vedan built 140,000 t/yr of glucose syrup capacity (1995 nameplate) and lists glucose syrup for sale to third parties [@VCO-03; @IND-01] {VN-direct|Medium}.
- **Seasonality and storage.** The campaign follows the harvest and peaks from November to April. Many factories run below capacity outside the season, which is the main reason actual throughput (8.62 Mt) is well below design capacity (11.3 Mt) [@FS-02] {VN-direct|Medium}.
- **Competing uses.** Export demand from China; fuel ethanol (chips); MSG.
- **What it could become.** Starch and glucose syrup are the most ready-to-use fermentation carbon in Vietnam, and they are already made at scale next to the aerobic fermenters of Vedan and Daesang. Starch is also the binder in most *đồ chay* (traditional vegetarian food) analogues ([[app-s2-retail-audit]]).
- **Evidence gaps.** National starch output including domestic use (MOIT or NSO industrial product tables); a reconciled chip export series.
- **Sources.** [@FS-01; @FS-02; @FS-03; @FS-04; @FS-07; @FS-11; @FS-12; @FS-13; @FS-17; @FS-21; @FS-22; @IND-01; @IND-11; @RGN-51; @RGN-53; @VCO-03]

### C3. Cassava pulp (*bã sắn*, *bã mì*: starch residue)

- **Volume.** About 6.2 Mt wet (range 4 to 8 Mt), about 1.3 Mt DM, in 2025. This is derived from Thai ratios applied to Vietnamese export volumes (table below) [@FS-01; @FS-05]. No government body publishes the number. {VN-adjacent|Low}

  | Step | Value | Source |
  |---|---|---|
  | Starch output, 2025 | 2.28 Mt (11-month exports) x 12 / 11 = 2.49 Mt | [@FS-01] |
  | Pulp per t of starch | 2.5 t wet, at 79.4% moisture | [@FS-05; @FS-06; @FS-53] |
  | Roots per t of starch | 4.4 t | [@FS-05] |
  | Wet pulp | 2.49 x 2.5 = 6.2 Mt | our calculation |
  | Dry matter | 6.2 x (1 - 0.794) = 1.28 Mt | our calculation |
  | Per t of roots | 2.5 / 4.4 = 0.57 t wet, or 0.12 t DM | our calculation |
  | Roots behind 2025 starch output | 2.49 x 4.4 = about 11 Mt | our calculation |
  | 2024 equivalent | 11-month 2024 exports about 1.34 Mt (2.28 / 1.698), about 1.47 Mt full year, x 2.5 = about 3.7 Mt wet | our calculation from [@FS-01] |

  Biases: domestic starch use would push the total up; any re-export of starch made in Cambodia or Laos would push it down; factories that press pulp to about 65% moisture [@FS-17] cut the wet tonnage but not the DM. Vietnamese wet-basis factory figures agree with the ratio: 30 to 100 t of roots a day gave 12 to 48 t of pulp, a ratio of 0.40 to 0.48 [@FS-16], and over 30,000 t of pulp came from over 50,000 t of roots, about 0.6 [@FS-04] {VN-direct|Low}. Other published ratios use different moisture bases: 10 to 15% of root weight (Laos, likely pressed or DM basis) [@FS-18] and 20 to 30% of root weight (review, basis not stated) [@FS-20] {VN-adjacent|Low}. Thailand's national figure, 9.5 Mt of pulp a year, fits the same material balance [@FS-06] {VN-adjacent|Medium}.

> **Correction.** Earlier drafts gave 1.7 to 2.1 Mt of wet pulp a year, without a source. That is too low for wet pulp unless it refers to pressed or partly dried pulp. A 2018 Vietnamese paper's "about 4 Mt; 10 to 15% of roots = 3.8 to 5.4 Mt" is internally inconsistent, because it implies 38 to 54 Mt of roots [@FS-17]. We use about 6 Mt wet (range 4 to 8 Mt) for 2025. The volume swings with Chinese starch demand: the 2024 equivalent was only about 3.7 Mt.

- **Protein content.** All the pulp in Vietnam contains only about 20 to 35 kt of protein a year (our calculation: 1.3 Mt DM x 1.5 to 2.6% CP). Pulp is a carbon source, not a protein source.
- **Locations.** Every starch factory; the largest cluster is Tay Ninh (65 to 68 factories, 6.4 Mt a year of root capacity) [@FS-03; @FS-07] {VN-direct|Medium}.
- **Sites and companies.** Dinh Khue (Tay Ninh) sells 3,500 t of pulp a year for VND 6 bn [@FS-03]. Son La Starch Factory dries pulp and sells it to feed mills in Ninh Binh (former Ha Nam) and Bac Ninh (former Bac Giang) [@FS-22]. Vina Thanh Hoa sells dried pulp [@FS-21]. FOCOCEV supplied pulp for a pelleting trial [@FS-17] {VN-direct|Medium}.
- **Current use and buyers.** Fresh pulp goes to cattle and pig farms. Sun- or drum-dried pulp goes to feed mills. Pulp is also pelleted, fed to biogas digesters for boiler heat, or used as fertiliser [@FS-03; @FS-17; @FS-22] {VN-direct|Medium}.
- **Prices.** We found no current published gate price.

| Signal | Value | Date | Basis | Source | Label |
|---|---|---|---|---|---|
| Implied price, Dinh Khue | about 1,700 VND/kg (VND 6 bn / 3,500 t), product form not stated | Dec 2024 | factory gate | [@FS-03] | {VN-direct\|Low} |
| Wet pulp, Southeast | 200 VND/kg | 2005 | factory gate | [@FS-16] | {VN-direct\|Low} |
| Dried pulp, Southeast | 800 to 1,000 VND/kg | 2005 | factory gate | [@FS-16] | {VN-direct\|Low} |
| "Other by-products (cassava, pumpkin, cane tops)" | 2,000 to 5,000 VND/kg | Jul 2026 | farm delivered, blog reference | [@FS-30] | {VN-direct\|Low} |

  If the 1,700 VND/kg were for wet pulp at about 80% moisture, it would equal about 8,500 VND per kg of DM (our calculation, 1,700 / 0.2), more than dried cassava chips at 5,800 to 6,200 VND/kg [@FS-12]. So it is more plausibly a price for dried or pressed pulp. Model pulp at a positive price.
- **Composition.** On a DM basis: starch 37 to 75%; cellulose 4 to 25%; hemicellulose 4 to 13%; lignin 1 to 7%; CP 1.5 to 2.6%; ash 2 to 12%; energy about 13 MJ/kg [@FS-03; @FS-05; @FS-06; @FS-18; @FS-19; @FS-20] {VN-adjacent|High}. Fresh pulp is 77 to 85% moisture [@FS-05; @FS-17; @FS-19] {VN-adjacent|High}. A Lao sample had 23.6% DM and 2.6% CP in DM [@FS-19] {VN-adjacent|Medium}. A commercial Vietnamese dried-pulp specification gives starch 40 to 50%, moisture 10 to 16% and fibre 14 to 20% [@FS-21] {VN-direct|Low}. The starch in all Vietnamese pulp is about 0.48 to 0.98 Mt a year (our calculation, 1.3 Mt DM x 37 to 75%).
- **Seasonality and storage.** Pulp is produced from about November to May with the campaign. It ferments on its own in open pits (pH 3.2 to 3.5). In a Lao study it kept its feed value (under 9% energy loss) for up to 4 years, and only the top 50 cm spoiled [@FS-18] {VN-adjacent|High}. Pit storage is a cheap way to run a year-round process on a seasonal stream.
- **Competing uses.** Cattle and pig farms, feed mills and biogas. Rising root prices and the E10 mandate raise the value of every cassava fraction.
- **What it could become.** A carbon source for fungal or yeast biomass after hydrolysis, with added nitrogen (urea or ammonium salts), for feed protein. Relevant evidence: *Candida utilis* on cassava peel hydrolysate (C4) [@SCI-22]; *K. marxianus* from Thai cassava pulp (C1) [@SCI-44]; oyster-mushroom mycelium in solid-state fermentation of cassava plus soy residue raised protein 1.84-fold (preprint, 2025) [@RD-29] {VN-direct|Low}. Biogas from pulp and wastewater could supply methane for methanotroph protein (C5). Theoretical ceiling: 0.48 to 0.98 Mt of pulp starch, at 0.44 to 0.52 g of biomass per g of sugar and 47.5 to 56.7% CP (the *C. utilis* values in [@SCI-22]), gives about 0.10 to 0.29 Mt of crude protein a year (our calculation; it assumes all pulp is collected and all starch hydrolysed, ignores the mass gain on hydrolysis, and counts nucleic-acid nitrogen as protein). It is a ceiling, not a forecast. For scale, the fishmeal in Vietnamese shrimp feed is about 92 to 184 kt a year ([[app-s6-feed-market]]).
- **Evidence gaps.** Gate prices, and the split between wet sale, drying, biogas and dumping; a Vietnamese material balance (wet and DM per t of roots) across 10 or more factories and seasons; food-grade safety data (cyanide, mycotoxins, nucleic acid) for any fungal product.
- **Sources.** [@FS-01; @FS-03; @FS-04; @FS-05; @FS-06; @FS-07; @FS-12; @FS-16; @FS-17; @FS-18; @FS-19; @FS-20; @FS-21; @FS-22; @FS-30; @FS-53; @RD-29; @SCI-22; @SCI-44]

### C4. Cassava peel and rhizomes (*vỏ sắn*, *đầu mặt*, *xơ*)

- **Volume.** Derived from the Thai material balance per t of starch: 100 kg of peel, 600 kg of rhizomes and 170 kg of sand [@FS-53] {VN-adjacent|Low}. At 2.49 Mt of starch that gives about 0.25 Mt of peel, 1.5 Mt of rhizomes and 0.42 Mt of sand in 2025 (our calculation). One Vietnamese factory reports over 5,000 t of peel from over 50,000 t of roots, about 10% of roots [@FS-04] {VN-direct|Low}. At 10% of the roughly 11 Mt of roots behind 2025 starch output, peel would be about 1.1 Mt (our calculation). The two bases clearly define "peel" differently. We do not average them.
- **Locations and sites.** All starch factories (C2).
- **Current use and buyers.** Fertiliser, biogas and some feed; often dumped [@FS-04; @FS-06] {VN-direct|Low}.
- **Prices.** None found.
- **Composition.** Not found for Vietnamese material.
- **Seasonality and storage.** With the starch campaign.
- **Competing uses.** Few; mainly compost and biogas.
- **What it could become.** Yeast single-cell protein: *C. utilis* grown on cassava peel hydrolysates reached 47.5% CP (glucose hydrolysate), 49.1% (acid) and 56.7% (enzymatic), with 0.44 to 0.52 g of biomass per g of sugar and a maximum growth temperature of 41 C. These are crude protein values that include nucleic-acid nitrogen, from a low-tier journal [@SCI-22] {VN-adjacent|Medium}. Grey oyster mushroom has been grown on cassava peel waste from starch production in Vietnam [@RD-64] {VN-direct|Low}. A food product would need cyanide, mycotoxin and nucleic-acid testing.
- **Evidence gaps.** Volume on a stated moisture basis; composition; current disposal cost.
- **Sources.** [@FS-04; @FS-06; @FS-53; @RD-64; @SCI-22]

### C5. Cassava starch wastewater and biogas (*nước thải tinh bột sắn*)

- **Volume.** Long Giang Thinh reports over 100,000 m3 of wastewater a year from over 50,000 t of roots, about 2 m3 per t of roots [@FS-04] {VN-direct|Low}. The national total is not published. Thailand reports about 21 million m3 a year alongside 9.5 Mt of pulp [@FS-06] {VN-adjacent|Medium}. If the one-factory ratio held nationally, the roughly 11 Mt of roots behind 2025 starch output would give about 22 million m3 (our calculation, 11 x 2), similar in scale to Thailand. Low confidence.
- **Locations and sites.** All starch factories.
- **Current use.** Anaerobic lagoons; covered-lagoon biogas used as boiler fuel is common [@FS-04; @FS-06] {VN-direct|Low}.
- **Prices.** None; treatment is a cost.
- **Composition.** High in organic load (COD); values not found for Vietnamese factories.
- **Competing uses.** Biogas for boiler heat.
- **What it could become.** Biogas methane is a possible feedstock for methanotroph single-cell protein. It is not quantified nationally. Separately, the Dung Quat ethanol plant is studying low-carbon methanol from captured CO2, a possible CO2 or methanol feedstock lead [@FS-09] {VN-direct|Low}.
- **Evidence gaps.** National wastewater volume and COD; biogas output per factory; whether biogas is surplus to boiler needs.
- **Sources.** [@FS-04; @FS-06; @FS-09]

---

## Rice

### C6. Rice paddy (*lúa*)

- **Volume.** 43.5 Mt of paddy on 7.13 million ha in calendar 2025 [@FS-25] {VN-direct|High}. USDA gives 42.96 Mt of paddy and 26.85 Mt of milled rice on 7.02 million ha for MY2024/25, and forecasts 41.92 Mt (MY2025/26) and 41.76 Mt (MY2026/27) [@FS-23] {VN-direct|Medium}. The periods differ; we use NSO for calendar 2025.
- **Locations.** Mekong Delta: An Giang (former An Giang and Kien Giang), Dong Thap (former Dong Thap and Tien Giang), Can Tho (former Can Tho, Soc Trang and Hau Giang), Vinh Long (former Vinh Long, Tra Vinh and Ben Tre), Tay Ninh (former Long An) and Ca Mau (former Ca Mau and Bac Lieu); also the Red River Delta. This list is regional knowledge; we did not source provincial shares.
- **Sites and companies.** Thousands of mills; state and private exporters.
- **Current use and buyers.** Food and export. Paddy is the parent of broken rice (C7), bran (C8), husk (C9) and straw (C10).
- **Prices.** Fresh paddy 5,700 to 6,200 VND/kg in An Giang on 19 September 2026 [@FS-26] {VN-direct|Medium}. IR50404 paddy 5,326 VND/kg and 5%-broken milled rice 14,000 VND/kg in March 2026 [@COST-33] {VN-direct|Medium}. FOB 5%-broken rice USD 440 to 445/t on 19 September 2026 [@FS-26] {VN-direct|Medium}.
- **Seasonality.** Two to three crops a year in the Mekong Delta.
- **Evidence gaps.** Provincial shares of output and milling.
- **Sources.** [@COST-33; @FS-23; @FS-25; @FS-26]

### C7. Broken rice (*tấm*)

- **Volume.** Vietnam exported 872,576 t of 100% broken rice in 2025, mostly to Africa [@FS-23] {VN-direct|High}. Total broken-rice output and its split by use were not found. USDA's feed table counts bran and broken rice together: 2.8 Mt of domestic supply went into feed in 2025, forecast 3.0 Mt in 2026 [@FS-23] {VN-direct|High}.
- **Locations and sites.** Mekong Delta mills and exporters.
- **Current use and buyers.** Export, feed, rice flour and noodles, beer adjunct. The split was not found.
- **Prices.** Fragrant broken rice (grade 3 to 4) 8,500 to 8,600 VND/kg in An Giang; FOB 100% broken USD 368 to 372/t, against USD 440 to 445/t for 5%-broken rice, on 19 September 2026 [@FS-26] {VN-direct|Medium}. That is a discount of about 15 to 17% (our calculation, 368 / 445 and 372 / 440). Broken rice is a food-grade starch sold at close to the price of rice.
- **Composition.** Mostly starch. Rice protein alone is poor quality: brown-rice protein concentrate scored a DIAAS of 42 in pigs (older child and adult pattern) because it is lysine-limited [@SCI-40] {general|High}.
- **Seasonality and storage.** Year-round; dry and storable.
- **Competing uses.** Food manufacture, export, feed and brewing.
- **What it could become.** A clean, food-grade carbon source for fermentation after hydrolysis to glucose. Rice-protein extraction has been studied in Vietnam, for example by ultrafiltration [@RD-24] {VN-direct|Medium}, but texturisation has not been published.
- **Evidence gaps.** Total broken-rice volume and uses (Vietnam Food Association).
- **Sources.** [@FS-23; @FS-26; @RD-24; @SCI-40]

### C8. Rice bran (*cám gạo*)

- **Volume.** About 4.35 Mt in 2025, derived: 43.5 Mt of paddy x 10%, using the ratio of 4.4 Mt of bran per 44 Mt of paddy [@FS-27; @FS-25] {VN-direct|Low}. A trade article claims about 5 Mt (about 2022) [@FS-28] {VN-direct|Low}. Exports were about 1.2 Mt in 2025, about double 2024 and mostly to China [@FS-23] {VN-direct|High}; earlier, 444 kt in 2021 and 213 kt in January to April 2022 [@FS-28] {VN-direct|Medium}. Cross-check: 2.8 Mt of bran and broken rice in domestic feed plus 1.2 Mt of bran exports is about 4 Mt, close to the derived volume, so bran is essentially fully used. USDA's feed table also lists 545 kt of bran and broken rice as imported in 2025 [@FS-23] {VN-direct|High}. Our macro data file labels the same 545 kt as feed use [@MAC-01]. We could not reconcile the two readings without the PDF.

> **Correction.** Earlier drafts gave 730 kt of bran and broken rice in feed, citing an earlier USDA report. The current USDA feed table (VM2026-0012) gives 2.8 Mt of domestic supply in 2025 [@FS-23].

- **Locations.** Mekong Delta mills: An Giang (former Kien Giang), Dong Thap (former Tien Giang), Can Tho.
- **Sites and companies.** Bran oil: Calofic (extraction plant in Can Tho with collection points in the Mekong Delta, since 2004) and Uni-Bran (since 2012). In 2018 they handled about 10% of Mekong bran, and domestic bran-oil consumption was about 7,700 t (2017) [@FS-29] {VN-direct|Low}. These data are old.
- **Current use and buyers.** Domestic feed, export to China and bran oil.
- **Prices.**

| Market | Price | Date | Basis | Source | Label |
|---|---|---|---|---|---|
| An Giang | 7,300 to 7,650 VND/kg | 19 Sep 2026 | wholesale | [@FS-26] | {VN-direct\|Medium} |
| National cattle-feed reference | 6,500 to 8,500 VND/kg | Jul 2026 | farm delivered | [@FS-30] | {VN-direct\|Low} |
| Domestic | about USD 0.38/kg | 2022 | wholesale | [@FS-28] | {VN-direct\|Low} |

- **Composition.** Full-fat bran: 11 to 17% CP, 12 to 22% fat, 6 to 11% fibre, 5 to 15% moisture; defatted bran about 13.8% CP [@FS-56] {general|Medium}. Another study gives 12 to 24% oil in full-fat bran and found bran sampled from Vietnam lower in fat and amino acids than Australian or Thai bran, which suggests partial defatting or dilution in trade [@FS-57] {VN-direct|Medium}.
- **Seasonality and storage.** Year-round, with peaks after harvests. Full-fat bran turns rancid quickly unless it is stabilised or defatted.
- **Competing uses.** Feed mills, export to China, bran oil. Exports doubled in 2025 [@FS-23], so expect upward pressure on domestic prices.
- **What it could become.** Rice bran protein isolate (a 2016 Vietnamese study) [@RD-25] {VN-direct|Medium}; defatted bran as a protein and fibre ingredient; fermentation substrate (the Tung Lam ethanol plant ferments rice bran alongside cassava chips and corn) [@IND-21] {VN-direct|Medium}.
- **Evidence gaps.** Current bran-oil capacity; what Chinese buyers do with the bran; stabilisation capacity.
- **Sources.** [@FS-23; @FS-25; @FS-26; @FS-27; @FS-28; @FS-29; @FS-30; @FS-56; @FS-57; @IND-21; @MAC-01; @RD-25]

### C9. Rice husk (*trấu*)

- **Volume.** About 8.7 Mt in 2025, derived: 20% of 43.5 Mt of paddy, using the ratio of 8.8 Mt of husk per 44 Mt of paddy [@FS-27; @FS-25] {VN-direct|Low}.
- **Current use and buyers.** Boiler fuel, pellets and ash. Ajinomoto's Bien Hoa plant runs a rice-husk biomass boiler that burns about 100,000 t of husk a year [@IND-08; @IND-09] {VN-direct|Medium}.
- **Prices.** Rice husk pellets list at 2,190 VND/kg (unit inferred) with a calorific value of 3,200 to 3,900 kcal/kg (supplier page, December 2025) [@COST-16] {VN-direct|Low}.
- **What it could become.** Energy, not protein. It is the cheapest steam fuel for a fermentation plant: about 420 to 585 VND of fuel per kg of steam (see [[app-s12-costs]]).
- **Sources.** [@COST-16; @FS-25; @FS-27; @IND-08; @IND-09]

### C10. Rice straw (*rơm rạ*)

- **Volume.** Not established. Earlier drafts gave a ratio-based figure that we could not source.
- **Current use.** Straw is the main substrate for straw mushroom [@FS-55] {general|Low}; other uses were not researched.
- **What it could become.** Mushroom substrate; lignocellulosic carbon after pretreatment.
- **Evidence gaps.** Volume, collection share and burning share.
- **Sources.** [@FS-55]

---

## Sugar

### C11. Sugarcane (*mía*)

- **Volume.** The 2025/26 crop crushed 13.3 Mt of cane for 1.298 Mt of sugar; most mills finished by the end of June 2026 [@FS-31; @FS-33] {VN-direct|High}. The 2024/25 crop crushed 12.4 Mt for 1.3 Mt of sugar [@FS-32] {VN-direct|Medium}. Sugar output has risen four seasons running, to about 180% of 2020/21 [@FS-33] {VN-direct|Medium}. About 220,000 farm households grow cane [@FS-33] {VN-direct|Medium}.
- **Locations.** Gia Lai had over 40,000 ha of cane and its mills made 215,000 t of sugar; Dak Lak (former Phu Yen) had over 26,000 ha (2023/24) [@FS-34] {VN-direct|Medium}. Other areas (Thanh Hoa, Tay Ninh, Nghe An) are regional knowledge, not sourced.
- **Sites and companies.** 25 operating mills with 124,000 t of cane a day of design capacity (2023/24) [@FS-34] {VN-direct|Medium}. Quang Ngai Sugar (QNS) at An Khe (Gia Lai) is expanding its bagasse power plant to 135 MW and targets 40,000 ha of cane by 2027/28 [@FS-35] {VN-direct|Low}.
- **Current use.** Sugar, molasses (C12), bagasse power (C13).
- **Seasonality.** The crush runs from about November to June.
- **Sources.** [@FS-31; @FS-32; @FS-33; @FS-34; @FS-35]

### C12. Molasses (*rỉ đường*, *rỉ mật*)

- **Volume.** 0.55 to 0.72 Mt in 2025/26 and 0.52 to 0.67 Mt in 2024/25, derived {general|Low}. Arithmetic: 10 to 13 litres of alcohol per t of cane via molasses, divided by 240 litres of alcohol per t of molasses, gives 42 to 54 kg of molasses per t of cane (Indian ratios) [@FS-37]; x 13.3 Mt of cane = 0.55 to 0.72 Mt (our calculation). The ratio is Indian and general.
- **Locations and sites.** The roughly 25 sugar mills (C11) [@FS-34].
- **Current use and buyers.** MSG and yeast fermentation, alcohol and feed. Ajinomoto ferments cassava starch and cane molasses [@IND-08] and AB Mauri's La Nga yeast plant is molasses-based [@IND-15] {VN-direct|Medium}. QNS plans a molasses ethanol plant at An Khe of about 25,000 t of ethanol a year from about 1,000 t of molasses a day, 30% food grade and 70% fuel, and was tendering for partners in July 2026 [@IND-22] {VN-direct|Low}. A government source gives 200 m3 a day for Q1 2028 [@FS-09] and a 2024 article gave 60 million litres a year for 2026 [@FS-35]; this is probably the same project, delayed {VN-direct|Medium}. If 1,000 t a day ran for a full year it would use about 0.37 Mt, about half of our national estimate (our calculation), so the plant would compete directly with MSG and yeast makers for molasses.
- **Prices.** Only a retail price for 35 kg cans: about 9,970 VND/kg (December 2023) [@FS-36] {VN-direct|Low}. No bulk mill-gate price was found. Vedan reported that molasses was tight in H1 2026 [@VCO-02] {VN-direct|High}.
- **Composition.** Not found for Vietnamese molasses.
- **Seasonality and storage.** Produced from November to June; stores in tanks.
- **Competing uses.** MSG, yeast, alcohol and ethanol, feed.
- **What it could become.** Carbon for yeast or fungal biomass (baker's yeast is already made on molasses in Vietnam); after ethanol, vinasse (C14).
- **Evidence gaps.** Measured volume, flows between mills and fermenters, bulk price, composition. An earlier lead said Vietnam was a net molasses importer in 2022; we did not verify it.
- **Sources.** [@FS-09; @FS-35; @FS-36; @FS-37; @IND-08; @IND-15; @IND-22; @VCO-02]

### C13. Bagasse (*bã mía*)

- **Volume.** Not established.
- **Current use.** Burned for power at the mills. QNS is expanding its An Khe bagasse power plant to 135 MW [@FS-35] {VN-direct|Low}.
- **Competing uses.** Mill power and heat, which makes bagasse largely committed.
- **What it could become.** Lignocellulosic carbon after pretreatment; not a near-term protein feedstock.
- **Evidence gaps.** Volume, surplus above mill energy needs.
- **Sources.** [@FS-35]

### C14. Vinasse (stillage from molasses ethanol)

- **Volume.** Not established. Vinasse will grow if the QNS An Khe molasses ethanol plant is built (C12).
- **What it could become.** Filamentous-fungus biomass. In flasks of diluted molasses vinasse, *Aspergillus oryzae* biomass had 44.7% CP, *Neurospora intermedia* 57.6% and *Rhizopus oryzae* 50.9% (N x 6.25). *Fusarium venenatum* and *Monascus purpureus* did not grow [@SCI-18] {general|High}.

> **Correction.** Karimi et al. (2019) report "118.5 g/L" of *A. oryzae* biomass on vinasse. This is not a broth concentration. The flask held 100 mL of 5% vinasse with about 21 g/L COD, and 11.85 g of dry biomass cannot come from 2.1 g of COD. The figure is most plausibly per litre of undiluted vinasse, about 5.9 g/L in the flask [@SCI-18]. Do not use it as a titre.

- **Evidence gaps.** Everything: volume, composition, disposal.
- **Sources.** [@SCI-18]

### C15. Surplus sugar

- **Volume.** 1.298 Mt of sugar in 2025/26 [@FS-31] {VN-direct|High}. HFCS imports were 111,839 t in H1 2026 [@FS-31] {VN-direct|Medium}. The GFI APAC and Hawkwood study used 2024 inputs of 1,350 kt produced, 110 kt imported and nothing exported, and scored Vietnam 26 of 100 on "sugar capability" [@RGN-01] {VN-direct|Medium}; we did not cross-check these inputs against USDA.
- **Prices.** Domestic refined sugar was about 16,505 VND/kg in June 2026, a three-year low, against 19,600 to 27,300 VND/kg in China, Indonesia and the Philippines [@FS-31; @FS-33] {VN-direct|Medium}. That is about USD 635/t (our calculation, 16,505 x 1,000 / 26,000). World raw sugar was USD 330/t in March 2026 [@COST-32] and USD 380/t in August 2026 [@FM-01] {general|High}. The domestic refined price is about 1.7 times the world raw-sugar price (our calculation, 635 / 380). Refined and raw sugar are different products, so this shows only that Vietnamese sugar is cheap against regional retail prices, not against the world raw-sugar market.
- **Competing uses.** Food and beverage; ethanol.
- **What it could become.** A clean, food-grade carbon source and the benchmark against which residues should be judged. Tax note: Decree 320/2025 gives the corporate income tax exemption for processed farm products only when agricultural raw materials are at least 30% of production cost. A plant on domestic cassava probably passes; a plant on imported refined sugar may not (our interpretation) [@REG2-18] {VN-direct|Medium}.
- **Sources.** [@COST-32; @FM-01; @FS-31; @FS-33; @REG2-18; @RGN-01]

---

## Brewing

### C16. Brewer's spent grain (*bã bia*)

- **Volume.** At most 0.80 to 0.88 Mt wet a year, derived {VN-adjacent|Low}. Arithmetic: 4.0 to 4.4 billion litres of beer x 20 kg of wet spent grain per 100 litres [@FS-38; @FS-39] = 0.80 to 0.88 Mt wet; at about 80% moisture, 160 to 176 kt DM; at about 20% protein in DM, 32 to 35 kt of protein (our calculation). Beer volume: more than 4 billion litres a year (VIRAC, 2022, cited in [@FS-40]) and 4.4 billion litres in 2019 [@FS-41] {VN-direct|Low}; consumption of about 3.8 billion litres in 2022 [@IND-24] {VN-direct|Medium}, which would give about 0.76 Mt wet (our calculation). No 2024 or 2025 beer volume was found. Treat the range as an upper bound: Vietnamese mass-market lagers use rice adjunct, which lowers the malt grist and so the spent grain per litre. The adjunct share was not found.
- **Locations.** Brewery sites in Ho Chi Minh City (including former Ba Ria-Vung Tau), Hanoi, Hue, Da Nang, Dong Thap (former Tien Giang), Can Tho (former Hau Giang) and the north ([[app-s5-facilities]]).
- **Sites and companies.** Market shares in 2023: Heineken 43%, Sabeco 33.9%, Carlsberg 9.2%, Habeco 7.5%, others 6.4% [@FS-41; @IND-23] {VN-direct|Medium}. There are 98 active breweries, most of them microbreweries [@FS-41] {VN-direct|Low}. Sabeco has 26 breweries with 2.4 billion litres a year of design capacity at about 60% use (2024) [@IND-23] {VN-direct|Medium}. Heineken's HCMC (former Ba Ria-Vung Tau) brewery has 1.1 billion litres a year, with expansion to 1.6 billion approved in 2024 [@IND-26] {VN-direct|Medium}. A buyer deals with a handful of counterparties.
- **Current use and buyers.** Cattle and pig farms and feed traders [@FS-42] {VN-direct|Low}. Insect farming: Entobel's plant-opening release (November 2023) said it uses Heineken Vietnam by-products as feedstock [@ECO-01] {VN-direct|Low}; its current website does not mention feedstock [@FS-43]. Treat this as a company claim.
- **Prices.** One Hanoi retailer quotes 6,000 to 6,500 VND/kg fresh and about 5,500 VND/kg dried (March 2026) [@FS-42] {VN-direct|Low}. On a DM basis the fresh price is about 30,000 VND per kg of DM (our calculation, 6,000 / 0.2), four times dry rice bran at 7,300 to 7,650 VND/kg [@FS-26]. Treat it as a small-lot retail price, not a brewery gate price.
- **Composition.** About 20% protein and about 70% fibre in DM; about 80% moisture [@FS-38; @FS-39] {general|Medium}. Lao brewers' grains: 24.3% DM and 24.8% CP in DM [@FS-19] {VN-adjacent|Medium}.
- **Seasonality and storage.** Year-round, with brewing peaks before Tet and in the hot season. Fresh spent grain must be used within 2 to 3 days or ensiled with salt [@FS-42] {VN-direct|Low}.
- **Competing uses.** Livestock farms and insect producers.
- **What it could become.** Protein and fibre fractions; a solid-state fermentation substrate; insect feed. The volume and the short shelf life suit one plant next to one brewery, not a national play.
- **Evidence gaps.** Beer volume for 2024 and 2025 (NSO industrial output); brewery gate prices and tender terms; rice-adjunct share; Entobel's actual feedstock.
- **Sources.** [@ECO-01; @FS-19; @FS-26; @FS-38; @FS-39; @FS-40; @FS-41; @FS-42; @FS-43; @IND-23; @IND-24; @IND-26]

### C17. Brewer's spent yeast (*bã men bia*)

- **Volume.** Not established.
- **Research in Vietnam.** A VNU-HCM group removed tannins and debittered spent brewer's yeast with Tween 80 for yeast-extract use [@FS-40] {VN-direct|Medium}. HUST recovered 84.9% of spent-yeast protein and made a 14.9 g-protein energy bar (2024) [@RD-32] {VN-direct|High}, and studied nucleic-acid reduction in spent-yeast hydrolysate (2018) [@RD-31] {VN-direct|Medium}.
- **Feed evidence.** Spent brewer's yeast replaced up to 60% of fishmeal protein in giant freshwater prawn diets without loss of growth or survival (Vietnam, 2019) [@RD-48] {VN-direct|High}. Brewer's yeast replaced 45% of fishmeal in hybrid "Thai Panga" catfish with better growth (review citation) [@SCI-26] {VN-adjacent|Medium}.
- **Rules.** *Saccharomyces cerevisiae* is on the aquafeed list as a microorganism, but "yeast protein" is not a listed raw material [@REG2-01] {VN-direct|High}. See [[app-s9-regulation]].
- **What it could become.** Yeast extract, yeast protein for food, functional feed ingredients (beta-glucan is a listed aquafeed bioactive [@REG2-01]).
- **Evidence gaps.** Volume per brewery; current buyers and price.
- **Sources.** [@FS-40; @RD-31; @RD-32; @RD-48; @REG2-01; @SCI-26]

---

## Soy and other crops

### C18. Soybeans (*đậu tương*, *đậu nành*)

- **Volume.** Vietnam grew 42 kt of soybeans on 26,000 ha in MY2024/25, with 41 kt forecast for MY2025/26 and 40 kt for MY2026/27, as farmers switch to fruit and vegetables [@FS-24] {VN-direct|High}. It imported 2.61 Mt in 2025 (Brazil 45.8%, United States 43.6%, Canada 7.3%), 98.4% of supply [@MAC-09; @MAC-04] {VN-direct|High}. Imports are forecast at 3.2 Mt (MY2025/26) and 3.8 Mt (MY2026/27) [@FS-24] {VN-direct|Medium}. The domestic crush was 1.9 Mt in 2025 and is forecast at 2.5 Mt (2026) and 3.0 Mt (2027); 1.9 Mt of beans gave 1.48 Mt of meal at 78% extraction [@MAC-04] {VN-direct|Medium}. Vietnam also imported 5.70 Mt of soybean meal and fed 7.2 Mt in 2025, so about 99% of the soy protein in its feed is imported [@MAC-04] {VN-direct|High}. Food use was 540 kt in 2025 [@MAC-04] and is forecast at 550 kt (MY2025/26) and 570 kt (MY2026/27) [@FS-24] {VN-direct|Medium}.
- **Sites and companies.** The largest crusher is VAL (Bunge and Wilmar) at Phu My 1 Industrial Park, Ho Chi Minh City (former Ba Ria-Vung Tau): 2.6 Mt of soybeans a year and nearly 2 Mt of meal after a USD 100 M second line (December 2025) [@VCO-16] {VN-direct|Medium}. See [[app-s5-facilities]].
- **Prices.** US soybeans CIF Rotterdam USD 473/t (March 2026) [@COST-31] and USD 482/t (August 2026, World Bank) [@FM-01] {general|High}. Vietnam's average import price was USD 465.5/t in 2025 [@MAC-09] {VN-direct|High}. Soybean meal sold at 9,000 to 11,000 VND/kg on a July 2026 cattle-feed reference list [@FS-30] {VN-direct|Low}.
- **What it could become.** Soy is already the base of tofu, soymilk and imported textured soy protein. We found no soy protein isolate or concentrate plant in Vietnam ([[app-s5-facilities]]).
- **Sources.** [@COST-31; @FM-01; @FS-24; @FS-30; @MAC-04; @MAC-09; @VCO-16]

### C19. Okara (*bã đậu nành*: tofu and soymilk residue)

- **Volume.** At most 605 to 660 kt wet a year (about 120 to 130 kt DM), derived {VN-adjacent|Low}. Arithmetic: 550 kt of food soy [@FS-24] x 1.1 to 1.2 kg of wet okara per kg of dry soybean [@FS-44; @FS-45] = 605 to 660 kt (our calculation); at about 80% moisture, 120 to 130 kt DM; at 25 to 35% protein in DM, about 30 to 45 kt of protein (our calculation). It is an upper bound because not all food soy goes to tofu or soymilk (sprouts, sauces and roasted soy also use it).
- **Locations.** Tofu villages and soymilk plants nationwide.
- **Sites and companies.** Vinasoy (QNS), with 390 million litres a year of soymilk capacity in three plants (2022) [@IND-49; @IND-50] {VN-direct|Medium}; ToFu House (Hung Yen), 150 to 500 t of tofu products a month [@IND-51] {VN-direct|Low}; Vinamilk and other dairy firms with plant-milk lines; thousands of small tofu makers.
- **Current use and buyers.** Pig, cattle and fish feed, or discarded. No price found.
- **Composition.** Moisture about 70 to 84%; protein up to 40% of DM, most commonly 25 to 35% [@FS-44] {general|Medium}.
- **Seasonality and storage.** Year-round; spoils quickly unless dried.
- **What it could become.** A solid-state fermentation substrate (oyster-mushroom mycelium on cassava plus okara, preprint) [@RD-29]; a protein and fibre ingredient if dried. Soy-processing wastewater is a separate lead: a mixed-culture microbial protein grown on food-processing wastewater replaced up to 90% of fishmeal in whiteleg shrimp without growth loss (preprint) [@SCI-25] {general|Low}.
- **Evidence gaps.** Okara volume at Vinasoy and the dairy majors; Vietnamese composition data; drying cost.
- **Sources.** [@FS-24; @FS-44; @FS-45; @IND-49; @IND-50; @IND-51; @RD-29; @SCI-25]

### C20. Mung bean (*đậu xanh*)

- **Volume.** Not established; not researched on the open web.
- **Protein quality.** Cooked mung bean scored a pig DIAAS of 86 (older child and adult pattern) and 68 (young-child pattern) [@SCI-41] {general|High}. In Indian children, true ileal digestibility of mung bean was 65.2%, about 20% lower than pig estimates [@SCI-42] {general|High}. Prefer human data for food claims.
- **Research in Vietnam.** Replacing 10 to 15% of meat with germinated mung bean flour was accepted in sausage [@RD-26] {VN-direct|Medium}.
- **What it could become.** A local legume for hybrid and plant-based products; protein isolate (not studied in Vietnam).
- **Sources.** [@RD-26; @SCI-41; @SCI-42]

### C21. Peanut (*lạc*, *đậu phộng*)

- **Volume.** 380 kt forecast for MY2025/26; only 35 kt is crushed, mostly by household pressing; retail peanut oil sells at USD 4 to 5 per litre [@FS-24] {VN-direct|High}.
- **Locations.** Not sourced.
- **What it could become.** Peanut meal is small, because so little is crushed. Peanut protein isolate was not studied in Vietnam [@RD-01].
- **Sources.** [@FS-24; @RD-01]

### C22. Coconut (*dừa*)

- **Volume.** 1.728 Mt (USDA unit) in MY2025/26; copra crush 31 kt; coconut-oil exports 10,000 t in the first 7 months of MY2024/25 (up 68%); copra meal imports 70 kt [@FS-24] {VN-direct|Medium}. Copra meal imports were 53 kt in calendar 2025 [@MAC-04] {VN-direct|Medium}; the two figures refer to different periods.
- **Locations.** Vinh Long (former Ben Tre and Tra Vinh) is commonly cited as the main area; not verified.
- **What it could become.** Coconut water and paring residues as fermentation media; not quantified.
- **Sources.** [@FS-24; @MAC-04]

### C23. Cashew apple (*táo điều*)

- **Volume.** Not established. The cashew apple weighs 6 to 7 times the nut [@FS-47] {general|Low}. Only the domestic harvest counts, because imported raw nuts arrive without apples. Domestic raw-nut output was not verified.
- **Locations.** Dong Nai (former Binh Phuoc), Lam Dong (former Dak Nong and Binh Thuan) and Dak Lak are the usual growing areas; not sourced.
- **Current use.** Mostly left in the field.
- **What it could become.** A sugar-rich fermentation medium, if it can be collected; astringency and perishability are the barriers.
- **Sources.** [@FS-47]

### C24. Coffee pulp and husk (*vỏ cà phê*)

- **Volume.** About 450 kt of dried coffee pulp a year, on a 2016 basis when coffee output was 1.64 Mt; pulp is about 28% of dry berry weight [@FS-46] {VN-direct|Low}. Current coffee output was not verified.
- **Locations.** Dak Lak is named in the source; Lam Dong (former Dak Nong) and Gia Lai are regional knowledge.
- **Current use.** Fuel for coffee dryers and organic fertiliser [@FS-46] {VN-direct|Low}.
- **Composition.** Caffeine 0.5 to 1.3%, which limits its use as feed [@FS-46] {VN-direct|Low}.
- **Seasonality.** The coffee harvest runs from about October to January.
- **What it could become.** A decaffeinated fermentation substrate; the source paper optimises decaffeination.
- **Sources.** [@FS-46]

### C25. Jackfruit (*mít*)

- **Volume.** Not established; not researched.
- **Research in Vietnam.** We found no Vietnamese work on jackfruit-seed protein. The seed work we found is on starch [@RD-01] {VN-direct|Low}.
- **What it could become.** Young jackfruit as a whole-food meat analogue; seed protein. Both unstudied locally.
- **Sources.** [@RD-01]

---

## Aquatic and animal side streams

### C26. Seafood processing by-products (*phụ phẩm chế biến thủy sản*)

- **Output behind the stream (2025).** Aquaculture 6,116.8 kt (fish 4,035.0 kt, shrimp 1,381.7 kt); farmed pangasius 1,938.8 kt; whiteleg shrimp 994.4 kt; black tiger shrimp 296.7 kt; capture fisheries 3,830.7 kt [@MAC-15] {VN-direct|High}.
- **Pangasius.** Vietnamese filleting uses 3.1 kg of whole fish per kg of fillet, so about 68% of the fish is by-product (heads, frames, skin, viscera and belly fat) [@FS-48] {VN-adjacent|Low}. Another source gives 62 to 67% of the whole fish [@MAC-45] {VN-direct|Medium}; Indonesian data give 51 to 55% [@FS-48]. If all 1.94 Mt of farmed pangasius were filleted, by-products would be about 1.2 to 1.3 Mt a year (our calculation, 1,938.8 kt x 62 to 68%). Not all fish is filleted, so this is an upper bound.
- **Shrimp.** Side streams are 45 to 50% of shrimp weight, about 70% head and 30% shell [@FS-49] {general|Medium}. If all 1.38 Mt of farmed shrimp were processed, side streams would be about 0.62 to 0.69 Mt a year (our calculation, 1,381.7 kt x 45 to 50%); again an upper bound.
- **Composition.** Shrimp head: up to 65% protein, 21% ash and 18% chitin in DM. Seafood discards average 60% protein, 19% fat and 22% ash in DM [@FS-50] {general|Medium}. Fishmeal yield from processing waste: 35.8% for African catfish waste and 54.8% for tilapia waste [@FM-44] {general|Medium}.
- **Locations.** Pangasius processors in Can Tho, Dong Thap, An Giang and Vinh Long; shrimp processors in Ca Mau, Can Tho (former Soc Trang) and Khanh Hoa. The list is regional knowledge.
- **Sites and companies.** Pangasius and shrimp processors such as Vinh Hoan; see [[app-s1-directory]].
- **Current use and buyers.** Fishmeal, fish oil, pangasius collagen and gelatin, shrimp-head meal and chitin. These uses come from earlier leads and were not re-verified. Vietnam exported USD 430.5 M of fishmeal in 2023, 93.5% of it to China, and imported USD 260 M [@FM-37; @FM-38] {VN-direct|Medium}, so much of the by-product meal leaves the country ([[app-s6-feed-market]]).
- **Prices.** Not found.
- **What it could become.** Protein hydrolysates (Tra catfish by-product hydrolysate has been tested as a fishmeal replacer in pig diets) [@MAC-45] {VN-direct|Medium}. These streams are animal-origin protein: benchmarks and competitors for alternative protein, not alternative-protein feedstocks.
- **Evidence gaps.** Measured by-product volumes; fishmeal plant list and capacity; prices by grade.
- **Sources.** [@FM-37; @FM-38; @FM-44; @FS-48; @FS-49; @FS-50; @MAC-15; @MAC-45]

### C27. Aquaculture effluent

- **Volume.** Not established. Pangasius pond area and nutrient loads were not found.
- **Research in Vietnam.** Duckweed removed nutrients from anaerobically treated swine wastewater in lab-scale stabilisation ponds in Vietnam [@RD-45] {VN-direct|Medium}.
- **What it could become.** A growth medium for duckweed (C30) or microalgae (C29) for feed. For food, the EU record on duckweed shows that mineral control and controlled water are the gate [@SCI-28; @SCI-30] {general|High}.
- **Sources.** [@RD-45; @SCI-28; @SCI-30]

---

## Novel biomass

### C28. Seaweed (*rong biển*)

- **Volume.** Not established. A national seaweed development scheme to 2030 is a lead we did not verify.
- **Species and locations.** Vietnam has 827 recorded seaweed species. The economically important, cultivated or harvested genera are *Caulerpa* (sea grapes, *rong nho*), *Sargassum* (*rong mơ*), *Gracilaria* (*rong câu*), *Ulva* and *Kappaphycus* (*rong sụn*), concentrated in Khanh Hoa (former Khanh Hoa and Ninh Thuan) [@FS-51] {VN-direct|Low}.
- **Current use.** Carrageenan (*Kappaphycus*), agar (*Gracilaria*), food (*Caulerpa*) and wild *Sargassum* harvest.
- **Research in Vietnam.** Green seaweed (*Cladophora*) protein partly replaced fishmeal in black tiger shrimp postlarvae [@RD-50]; gut weed (*Ulva intestinalis*) meal was tested as dietary protein for the same species [@RD-51] {VN-direct|Medium}. A Wageningen study examined seaweed cultivation in Vietnam for livestock methane reduction [@RD-57] {VN-direct|Medium}. We found no work on food protein extraction.
- **Evidence gaps.** Production by species and province; farm-gate prices; protein content of Vietnamese material.
- **Sources.** [@FS-51; @RD-50; @RD-51; @RD-57]

### C29. Spirulina and microalgae (*tảo xoắn*, *vi tảo*)

- **Volume.** Not established. An earlier lead named Vinh Hao (Lam Dong, former Binh Thuan) as a spirulina producer; we did not verify it.
- **Research in Vietnam.** A 2021 review describes Arthrospira production in Vietnam [@RD-20] {VN-direct|Medium}. A salt-tolerant Spirulina strain reached 48.73% protein (dry weight) in a 42 ppt medium [@RD-21] {VN-direct|Medium}. Two Vietnamese microalgal isolates were characterised for food, feed and biodiesel [@RD-62] {VN-direct|Medium}.
- **Sites and companies.** Daesang Vietnam lists DHA biomass and *Chlorella* among its feed products, but does not say whether they are made in Vietnam [@IND-12] {VN-direct|Low}.
- **Protein quality.** No DIAAS for microalgal biomass was available as of a 2021 review [@SCI-39] {general|Medium}.
- **Rules.** Microalgae are not on the aquafeed permitted list [@REG2-01] {VN-direct|High}.
- **What it could become.** A protein ingredient from salt-tolerant Spirulina grown on seawater or brackish water on the south-central coast; feed microalgae grown on effluent.
- **Sources.** [@IND-12; @RD-20; @RD-21; @RD-62; @REG2-01; @SCI-39]

### C30. Duckweed and Wolffia (*bèo tấm*, *bèo trứng*, *rau bèo*)

- **Volume.** Not established. We found no evidence of commercial cultivation in Vietnam, only feed trials. One South Vietnam poultry trial replaced 7% of the diet with *Lemna minor* [@FS-54] {VN-adjacent|Low}.
- **Research in Vietnam.** More than 100 wild *Spirodela*, *Lemna* and *Wolffia* samples were collected nationwide and are held in a laboratory (2022) [@RD-44] {VN-direct|Medium}. A Vietnamese-led team assembled the *Spirodela intermedia* genome (2020) [@RD-71] {VN-direct|High}. We found no protein extraction, food trial or feed trial with Vietnamese duckweed from 2015 to 2026 [@RD-01] {VN-direct|Medium}.
- **Composition.** *Wolffia* protein is 20 to 30% of freeze-dried weight in 11 lab-grown species [@SCI-34] {general|High}. Thai *Wolffia* had 44% CP, *Lemna* 22% and *Spirodela* 18%; in vitro standardised ileal protein digestibility was 72% (*Lemna*) and 69% (*Wolffia*) [@SCI-35] {VN-adjacent|Medium}. Drum-dried *Wolffia* had 32 to 34% protein and 81 to 85% in vitro digestibility [@SCI-48] {VN-adjacent|Medium}. Manganese in *Wolffia* is 78 to 431 mg/kg of dry weight [@SCI-34] {general|High}.
- **Productivity.** About 30 t DM per ha a year is the average in a 2026 review [@SCI-36]; 33 t DM per ha over 8 months was reached on domestic wastewater, and "up to 100 t DM per ha a year" is an extrapolated ceiling [@SCI-37] {general|Medium}. We use 10 to 30 t DM per ha a year for planning until Vietnamese field trials exist.

> **Correction.** EFSA (2021) could not establish the safety of whole *Wolffia globosa* powder or of mixed water-lentil powder, because of manganese intake. It found a *Lemna* protein concentrate safe (2023) [@SCI-28; @SCI-29; @SCI-30]. A "PDCAAS 0.89" figure for duckweed in earlier drafts has no peer-reviewed source and must not be used. A 2026 review says *Wolffia* powder was later authorised in the EU and that the Thai FDA treats it as traditional food [@SCI-31]; we could not verify the EU authorisation.

- **What it could become.** Feed protein grown on aquaculture or livestock effluent; a food protein concentrate grown in controlled water with mineral limits. *Wolffia* is sold as food in Thailand and elsewhere [@FS-54].
- **Sources.** [@FS-54; @RD-01; @RD-44; @RD-71; @SCI-28; @SCI-29; @SCI-30; @SCI-31; @SCI-34; @SCI-35; @SCI-36; @SCI-37; @SCI-48]

### C31. Mushrooms and spent mushroom substrate (*bã nấm*, *phôi nấm*)

- **Volume.** National mushroom output was not verified. The general ratio is about 3 kg of spent substrate per kg of mushrooms [@FS-55] {general|Low}.
- **Substrates.** Rice straw for straw mushroom; sawdust for oyster and wood-ear mushrooms. Vietnamese trials reuse spent oyster-mushroom sawdust to grow straw mushroom [@FS-55] {VN-adjacent|Low}.
- **Research in Vietnam.** Grey oyster mushroom on cassava peel from starch production [@RD-64]; oyster-mushroom mycelium in solid-state fermentation of cassava and okara (C19) [@RD-29] {VN-direct|Low}.
- **What it could become.** Mycelium protein by solid-state fermentation of local residues; spent substrate as feed or compost.
- **Sources.** [@FS-55; @RD-29; @RD-64]

---

## Industrial co-products

### C32. Ethanol stillage and distillers' grains (*bã rượu*, DDG)

- **Plants.** Three fuel-ethanol plants run at a combined 830 m3 a day: Dung Quat (Quang Ngai) 330 m3, the Quang Nam plant (now Da Nang) 300 m3 and Dong Nai 200 m3. Their June 2026 output was 20,875 m3 [@FS-09] {VN-direct|High}. At 830 m3 a day that is about 277,000 to 303,000 m3 a year at 334 to 365 operating days (our calculation). National design capacity across six or seven plants is 450,000 to 490,000 m3 a year [@IND-18; @IND-19; @IND-20] {VN-direct|Medium}. Dung Quat is moving part of its feedstock to imported corn from Q3 2026 [@FS-09] {VN-direct|High}, which could create a DDGS-like co-product. See [[app-s5-facilities]].
- **Volume.** Stillage and distillers' grains volumes are not published.
- **Composition.** Rice-based dried distillers' grains from Vietnamese ethanol production hold 55 to 80% protein on a DM basis; cassava DDG holds only 13 to 16% (preprint, 2024) [@RD-22] {VN-direct|Medium}. Alkaline extraction recovered 90% of rice-DDG protein, and enzyme-extracted protein was 77.1% digestible in vitro (HUST, 2025) [@RD-23] {VN-direct|High}.
- **Reference: imported DDGS.** Vietnam imported 1.55 Mt of DDGS in 2025 [@FS-23] {VN-direct|High}, mainly from the United States.
- **What it could become.** Feed protein (DDGS-like, from the corn switch); food protein from rice DDG, where extraction is published but texturisation is not.
- **Evidence gaps.** Stillage volume per plant; rice-liquor DDG volume; whether Dung Quat will dry its stillage.
- **Sources.** [@FS-09; @FS-23; @IND-18; @IND-19; @IND-20; @RD-22; @RD-23]

### C33. MSG and amino-acid fermentation co-products

- **Ajinomoto (Bien Hoa, Dong Nai).** The MSG plant sells fermentation-broth co-products as liquid and solid feed ingredients and fertiliser. A December 2023 environmental consultation gives 30,000 m3 a year of liquid feed ingredients (proposed 50,000) and 5,000 t a year of solid (proposed 10,000) [@IND-08] {VN-direct|Medium}.
- **Vedan (Phuoc Thai, Dong Nai).** Vedan sells condensed molasses fermentation solubles (CMS), polyglutamic acid (PGA) broth, fertiliser and feed pellets [@IND-01] {VN-direct|Medium}. Its "fertiliser and feed" segment earned USD 27.1 M in 2025, 7.2% of group revenue [@VCO-01], and 6.5% of revenue in H1 2026 [@VCO-02] {VN-direct|High}.
- **Daesang (Phu Tho).** Lists L-lysine, L-arginine, L-histidine, DHA biomass and *Chlorella* among its feed products; whether they are made in Vietnam is not stated [@IND-12] {VN-direct|Low}.
- **The import counterfactual.** A Chinese bacterial biomass left over from glutamic acid (MSG) fermentation, with at least 70% CP, more than 85% digestible protein and no more than 7% ash, is imported and sold in Vietnam as "Mycoprotein" by CK Vietnam / V-Group [@FM-12; @ECO-69] {VN-direct|Medium}. It shows that an MSG plant can yield a feed protein. We did not find whether Vedan or Ajinomoto produce or sell a similar biomass.
- **What it could become.** A domestic single-cell protein side stream, if the incumbents separate and dry their bacterial biomass; see [[app-s6-feed-market]] for the prices it would face.
- **Evidence gaps.** Product sheets and prices for Vedan CMS and pellets and for Ajinomoto's feed ingredients; whether bacterial cell mass is recovered.
- **Sources.** [@ECO-69; @FM-12; @IND-01; @IND-08; @IND-12; @VCO-01; @VCO-02]

### C34. Reference streams: maize and imported feed ingredients

- **Maize.** 4.4 Mt in 2025 (NSO) [@FS-25] or 4.1 Mt on 810,000 ha in MY2025/26 (USDA), falling to 4.0 Mt in MY2026/27 [@FS-23] {VN-direct|Medium}. About 1.7 Mt of local corn went into compound feed in 2025 [@FS-23] {VN-direct|High}. Ground corn sold at 6,000 to 8,000 VND/kg on a July 2026 cattle-feed reference list [@FS-30] {VN-direct|Low}.
- **The feed-ingredient balance.** USDA's 2025 feed-ingredient table shows 23.57 Mt imported out of 28.62 Mt, about 82%. Domestic supply was 5.05 Mt: rice bran and broken rice 2.8 Mt, corn 1.7 Mt and cassava 0.55 Mt. Imports included 9.2 Mt of corn, 7.2 Mt of soybean meal (counting local crush of imported beans), 1.55 Mt of DDGS and 2.58 Mt of feed wheat [@FS-23] {VN-direct|High}. See [[app-s6-feed-market]].
- **Sources.** [@FS-23; @FS-25; @FS-30]

---

## Gaps and how to close them

| # | Gap | Why it matters | Cheapest way to close it |
|---|---|---|---|
| 1 | Cassava pulp gate price, and the split between wet sale, drying, biogas and dumping | Sets the carbon cost of the largest residue | Call 3 to 5 Tay Ninh factories (for example Dinh Khue, Hung Duy Group) and the Son La Starch Factory; read the Vietnam Cassava Association weekly bulletins in a browser |
| 2 | A Vietnamese pulp material balance (wet and DM per t of roots) | Our 6 Mt rests on a Thai ratio | Sample 10 or more factories across a season; a small university project |
| 3 | National starch output including domestic use | Pulp scales with starch, not exports | MOIT industrial statistics; NSO main industrial products tables; Vietnam Cassava Association |
| 4 | Beer volume for 2024 and 2025, rice-adjunct share, brewery gate prices for spent grain | Spent-grain volume is an upper bound | NSO output of "bia các loại"; Vietnam Beer-Alcohol-Beverage Association; Heineken and Sabeco sustainability reports; ask Entobel about its feedstock |
| 5 | Molasses volume, flows and bulk price | Molasses is a contested fermentation carbon | Vietnam Sugarcane and Sugar Association; TTC AgriS and QNS annual reports; buyers (Vedan, Ajinomoto) |
| 6 | Broken-rice volume and uses | A clean food-grade carbon at near-rice price | Vietnam Food Association |
| 7 | Seafood by-product volumes and fishmeal plants | Sets the domestic animal-protein competitor | VASEP; Vinh Hoan and other pangasius exporters' annual reports; MAE fisheries department |
| 8 | Seaweed, spirulina and mushroom output | Cannot size novel biomass today | MAE fisheries and crop production departments; the seaweed development scheme text on thuvienphapluat.vn; Vinh Hao Mineral Water Company |
| 9 | Duckweed and Wolffia: productivity and minerals on Mekong water | Food route depends on manganese control | Can Tho University and Nong Lam University; field plots with mineral profiling |
| 10 | Coffee and cashew output | Only 2016-basis coffee pulp figure | USDA Coffee Annual; VICOFA; VINACAS |
| 11 | Soybean crushers and okara volumes | Okara is the only local plant-protein residue of note | Vietnam Feed Association; Vinasoy; the QNS annual report |
| 12 | Biogas, natural gas and CO2 sources for gas fermentation | Methane and CO2 routes are unmapped | PV Gas; BSR (Dung Quat CO2 capture); starch-factory biogas surveys |
| 13 | Ethanol stillage and DDG volumes; Dung Quat after the corn switch | A possible domestic feed-protein co-product | Ask BSR and the Dong Nai and Da Nang plants directly |
| 14 | MSG plant biomass co-products | A possible domestic SCP side stream | Vedan and Ajinomoto product sheets and a direct inquiry |
| 15 | A national by-product return | Nobody publishes starch, pulp, spent grain, okara, molasses or seafood by-product volumes | A one-page annual return for starch factories, breweries, sugar mills and seafood processors through MAE or provincial Departments of Agriculture and Environment |

See [[app-r1-open-questions]] for the full register and [[app-r2-disagreements]] for the conflicting figures (starch factory count, pulp ratios, chip exports, spent-grain price).

## Related data files

- `feedstocks.csv`: one row per stream (29 rows), with volume, unit, year, provinces (current and former), users, price, protein, moisture, seasonality, sources, label and confidence. The notes column holds each derivation.
- `feedstock_prices.csv`: 32 price observations for cassava, rice by-products, sugar, molasses, spent grain, maize and soybean meal, with market, date and basis.
- `macro_indicators.csv`: national output of rice, maize, soy and fisheries, and the feed balance.
- `feed_imports.csv`: imports of corn, soybeans, wheat, soybean meal and DDGS.
- `facilities.csv`: starch factories, ethanol plants, breweries, soy plants and MSG plants that generate these streams.
- `science_facts.csv` and `publications.csv`: the literature behind the "what it could become" fields.
- `provinces.csv`: the mapping from former to current provinces.
- `disagreements.csv` and `open_questions.csv`: conflicting numbers and open questions.
