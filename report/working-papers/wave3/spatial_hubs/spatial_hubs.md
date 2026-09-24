# HUB (wave 4 gap): where a 2040 protein bioeconomy could sit in Vietnam

Stream: spatial_hubs. Source ID prefix: **HUB**. Question tree: F3 (inputs), F6 (regional race), F9 (vision). Written 24 September 2026.

**Files in this folder**
- `spatial_hubs.md` (this file).
- `hub_layers.csv` (92 rows): the map layers (energy, hydrogen, co2, bio_zone, carbohydrate, residue, buyer, research) by current province, with the former unit.
- `candidate_hubs.csv` (6 rows): six candidate hub regions for 2035 to 2045, with assets, missing pieces, fitting plays, horizon and signposts.
- `hub_calc.py`: the arithmetic behind every [estimate] in this file (run `python hub_calc.py`).

**How to read this.** Province names are the 34 units in force since 1 July 2025, with the former unit in brackets. Official targets, published projections and our own estimates are labelled separately. The candidate hubs are our **[estimate]**: they combine sourced layers into places where several inputs coincide. They are options to test, not forecasts, and carry no probabilities. Insects appear only as an incumbent benchmark. WebSearch calls used: 12 of 12.

---

## Headline findings

1. **The state has named where renewable-energy industry should cluster by 2030.** Two inter-regional renewable energy industry and service centres: in the north at "Hải Phòng, Quảng Ninh, Thái Bình" (now Hai Phong, Quang Ninh and Hung Yen), and in the south at "Ninh Thuận, Bình Thuận, Bà Rịa - Vũng Tàu và TP. Hồ Chí Minh" (now Khanh Hoa, Lam Dong and Ho Chi Minh City). They are to include equipment manufacturing, specialised ports, green industrial zones and R&D. [VN-direct] High. Projection (official target), 2030. HUB-01, HUB-02, HUB-03, HUB-29.
2. **No official text sites the hydrogen that the power plan earmarks.** About 15 GW (2035) and 240 GW (2050) of offshore wind are reserved "for new energy" with no province named and no legal track (Decree 272/2026 covers grid supply only). The only hydrogen projects with a stated capacity sit in the Mekong: about 123 kt of H2 a year across former Tra Vinh and Ben Tre (now Vinh Long), former Bac Lieu (now Ca Mau) and former Tien Giang (now Dong Thap), with stated start dates from 2027 to 2032. [VN-direct] Low to Medium. Signal, 2027 to 2032. HUB-01, HUB-04, FTG-15, FTG-28.
3. **The flagship hydrogen plant has not started building.** The Tra Vinh plant in the Dinh An Economic Zone (24 kt H2, 182.5 kt ammonia and about 195 kt oxygen a year; VND 7,856 billion) had only a fence, gate, guardhouse and part of its roads in May 2026. Obstacles: changes to its investment approval, overlap with an offshore-wind survey area and too little land. Treat Mekong green hydrogen before 2030 as unproven. [VN-direct] Medium. Signal, 2026. HUB-05, FTG-27.
4. **The biggest aquafeed buyer and the hydrogen pipeline share the same coast.** Ca Mau (with former Bac Lieu) farmed 594,851 t of shrimp in 2025, about 46% of national output (our calculation), on over 435,000 ha. It now hosts C.P.'s new 124.8 kt aquafeed plant, 1,740 MW of approved wind projects, up to 10 GW of offshore-wind potential and a 70 kt H2 proposal. No other place combines a large feed buyer with planned hydrogen and wind. [VN-direct] Medium for the data; Low for the co-location reading. Trend and estimate, 2025 to 2035. HUB-15, HUB-16, HUB-17, HUB-22, HUB-04.
5. **The pangasius and rice belt is a separate hub with buyers and residues but no energy edge.** Dong Thap has about 35% of Vietnam's 1.74 Mt of pangasius (2025). Former Kien Giang, An Giang and Dong Thap have the three highest rice-straw power potentials in the country: 660 MW together, about 26% of the national total (our sum). Can Tho has the leading aquaculture university, the Region I aquafeed trial sub-centre and a 5,200 ha hi-tech agriculture zone. [VN-direct] Medium. Trend, current. HUB-13, HUB-14, HUB-27, HUB-12, INF-28.
6. **Tay Ninh is the natural carbohydrate hub, and it has the land.** Former Tay Ninh has 68 starch factories and 6.4 Mt a year of root capacity. The merged province had the most vacant industrial land in the south in Q2 2026 (occupancy 60.9%, against 86.1% in Ho Chi Minh City). But the balance model's 2050 alternative-protein case would need cassava equal to 84% of that root capacity. Tay Ninh can anchor a sugar hub; it cannot carry a national sugar route on its own. [VN-direct] Low. Estimate, 2050. FS-03, COST-21, QNT-model.
7. **Ho Chi Minh City and Dong Nai is the only hub where most assets already operate.** It has industrial fermenters (Vedan, Ajinomoto, AB Mauri), 140 kt a year of glucose syrup nameplate, the Saigon Hi-Tech Park, trial and testing centres, the 2.6 Mt VAL soybean crusher, fermentation and fertiliser CO2, and since 23 July 2026 the 4,174 ha Cai Mep Ha Free Trade Zone. Its limits are land cost and the lack of an open food-grade pilot offer, not inputs. [VN-direct] Medium. Trend, now to 2035. IND-01, IND-57, INF-13, HUB-06, VCO-16, COST-21.
8. **The new free trade zone targets "green" production but does not mention biotech.** Cai Mep Ha (Decision 4560/QD-UBND, 23 July 2026) has 850.67 ha for industry, urban use and services and 906.07 ha for logistics, next to a deep-sea port. Biotech and food are not named. Free trade zones in Da Nang and Hai Phong were expected in 2026; we could not confirm whether they exist yet. [VN-direct] High for Cai Mep Ha; Low for the others. Signal, 2026. HUB-06, HUB-07, HUB-08.
9. **The bioeconomy's own map is still blank.** As of 24 September 2026, MAE had published no location for its biotechnology clusters (due December 2026 under Directive 13/CT-TTg) or for its "at least 5" innovation centres for 2026 to 2030. This is the cheapest moment to argue for a feed-protein or fermentation cluster in a named hub. [VN-direct] Medium. Signal, 2026 to 2027. HUB-09, HUB-10, FTB-50.
10. **Provinces can now create hi-tech agriculture zones themselves.** Under Decree 263/2026 (in force 1 July 2026), the provincial People's Committee decides. Core functions are research, trials, pilot production and incubation. Incentives include 70% interest support, capped at 8% a year, and exemption from land fees for infrastructure. These functions fit a feed-trial and pilot-fermentation campus; it is not clear whether full-scale feed or fermentation plants qualify. [VN-direct] Medium. Signal, 2026 onward. HUB-26, INF-23.
11. **A zone label alone does not make a hub.** The 418 ha Bac Lieu shrimp hi-tech zone (2017), which includes feed processing and biological products in its scope, lost investors while land procedures stayed unresolved (May 2026). The 5,200 ha Hau Giang zone had cleared only 10 ha for investors in its first phase. [VN-direct] Medium. Trend, 2017 to 2026. HUB-11, HUB-12.
12. **The north's asset is research, not inputs.** The Hanoi Biotechnology Hi-Tech Park (199.03 ha; Decision 1054/QD-TTg, 2024) is zoned with a 30% building-density cap and 1 to 8 floors. Hoa Lac has a 263 ha R&D zone and AI compute. Both suit laboratories and a future biofoundry, not bulk fermentation. Modelled hydrogen from solar costs USD 3.76 to 3.88 per kg in the north, against 2.81 to 2.85 in the south. [VN-direct] Medium. Signal, 2026 to 2035. HUB-19, HUB-20, INF-25, FTG-18.
13. **The south-central coast has the best long-run power but little else yet.** Khanh Hoa (with former Ninh Thuan) and Lam Dong (with former Binh Thuan) have the southern renewable centre, the highest solar irradiance, planned nuclear power (4.0 to 6.4 GW, 2030 to 2035) and over 30% of the nation's shrimp postlarvae (over 45 billion in 2024). They lack concentrated CO2, hydrogen projects of stated size and large feed buyers. This makes them a 2040s option for protein made from renewable power, with an earlier niche in hatchery feeds. [VN-direct] Low. Estimate, 2035 to 2050. HUB-02, HUB-23, FTG-15, FTG-18.
14. **Concentrated CO2 is scattered and unmeasured.** The cleanest streams come from small ethanol plants: about 50 to 82 kt of CO2 a year each, enough for roughly 17 to 28 kt of protein a year on the hydrogen route (our estimate). The largest emitter (Dung Quat steel, about 17 Mt, derived) produces dilute gas. No site reports the volume and purity of its CO2. Ca Voi Xanh, a high-CO2 gas field that could give a pure stream in the centre, had no first-gas date in July 2026. [VN-direct] Low. Estimate and signal, 2026 to 2040. FTG-20, FTG-21, HUB-24.
15. **For a protein pilot, co-location matters more than the hydrogen itself.** The Tra Vinh design's by-product oxygen (195 kt) would cover the oxygen needs of about 61 kt of protein a year. A 10 kt a year protein plant would take 29% of the plant's hydrogen, plus 29.5 kt of CO2 and 0.64 to 0.83 TWh of power. [VN-direct] Low. Estimate, 2035 to 2045. HUB-05, FTG-01.
16. **Climate sets the limits of the Mekong hubs.** Under every groundwater pathway, the Ca Mau peninsula falls below sea level this century. Subsidence averages about 1 cm a year. Pangasius farms would face 2 m flood levels with 50 cm of sea-level rise. Plants with 25-year lives built in coastal Ca Mau or Vinh Long after 2035 will need raised sites that use surface water, not groundwater. [VN-direct] Medium. Projection, 2050 to 2060. CLM-13, CLM-14, CLM-20.
17. **Our candidate map has six hubs that open at different times.** In order: Ho Chi Minh City with Dong Nai (pilot and tolling, now to 2035); the Mekong river belt (feed ingredients and side streams, 2027 to 2035); Tay Ninh (fermentation sugar, 2028 to 2040); the Mekong shrimp coast (aquafeed plus hydrogen: demonstration 2032 to 2035, scale 2040 to 2045); the north (research now, industry in the 2040s); and the south-central coast (2035 to 2050). The central industrial carbon corridor (Quang Ngai and Da Nang) is something to watch, not a hub. [VN-direct] Low. Estimate, 2035 to 2045. candidate_hubs.csv.
18. **Regional rivals put their pilot capacity inside designated zones.** Thailand's EECi biorefinery pilot plant (12 fermenters, including two of 15,000 L) sits in its Eastern Economic Corridor. Singapore's ScaleUp Bio plant is in Tuas. India's BioE3 policy funds three biomanufacturing hubs. Vietnam has no designated biomanufacturing site. [VN-adjacent] Medium. Signal, 2026. RGN-36 (edition 1.0), FTB-17.

---

## Detailed findings

### 1. Energy and hydrogen geography (sub-question 1)

**What the plans say.**

| Item | Where (current; former) | Size and timing | Status | Evidence |
|---|---|---|---|---|
| Northern renewable energy industry and service centre | Hai Phong; Quang Ninh; Hung Yen (former Thai Binh), "với khả năng mở rộng ra các khu vực lân cận" | One of two centres by 2030; equipment manufacturing, ports, green industrial zones, R&D | Planned (Decision 1509/QD-BCT, 30 May 2025) | HUB-02, HUB-03, HUB-29 {VN-direct\|High} |
| Southern renewable energy industry and service centre | Khanh Hoa (former Ninh Thuan); Lam Dong (former Binh Thuan); Ho Chi Minh City (former Ba Ria-Vung Tau and core city) | As above | Planned | HUB-02, HUB-03, HUB-29 {VN-direct\|High} |
| Legal basis | National: Decision 768/QD-TTg names only regions ("Bắc Bộ, Nam Trung Bộ, Nam Bộ"); Decision 458/QD-TTg (23 Mar 2026) repeats "02" centres by 2030 | 2030 | In force | HUB-01, HUB-21 {VN-direct\|High} |
| Offshore wind for domestic demand | Regions only; no provincial MW split in the implementation plan summaries | 6.0 GW (2030); 17.032 GW (2035); 113.5 to 139.1 GW (2050) | Target | FTG-15, HUB-02 {VN-direct\|High} |
| Offshore wind "for new energy" (H2, NH3) | No province named | About 15 GW (2035); about 240 GW (2050) | No legal track (Decree 272/2026 is grid only) | FTG-15, FTG-28, HUB-29 {VN-direct\|High} |
| HVDC backbone | "kết nối khu vực Trung Trung Bộ, Nam Trung Bộ và Bắc Bộ" | After 2030 | Direction | HUB-01 {VN-direct\|High} |
| Nuclear | Khanh Hoa (former Ninh Thuan) | 4.0 to 6.4 GW (2030 to 2035) | Target | FTG-15, NT-067 {VN-direct\|High} |

**The hydrogen pipeline by current province.**

| Project | Current (former) | Stated capacity | Stated start | Reality check | Evidence |
|---|---|---|---|---|---|
| Tra Vinh Green Hydrogen (TGS), Dinh An Economic Zone | Vinh Long (Tra Vinh) | 24 kt H2, 182.5 kt NH3, about 195 kt O2 a year; 22.36 ha of land plus 30.4 ha of water; export buoy for 40,000 DWT ships | Q2 2027 | Fence and gate only (May 2026); province ordered a full review | HUB-04, HUB-05, FTG-27 {VN-direct\|Medium} |
| Ben Tre | Vinh Long (Ben Tre) | 24 kt H2; 182.5 kt NH3 | Q2 2028 | Not verified | HUB-04 {VN-direct\|Low} |
| Bac Lieu | Ca Mau (Bac Lieu) | 70 kt H2 in two phases | 2029; 2032 | Not verified | HUB-04 {VN-direct\|Low} |
| Tien Giang | Dong Thap (Tien Giang) | 5,294 t H2 | Sep 2028 | Not verified | HUB-04 {VN-direct\|Low} |
| Binh Dinh | Gia Lai (Binh Dinh) | 20 kt H2 | Proposed | | HUB-04, FTG-17 {VN-direct\|Low} |
| Long An | Tay Ninh (Long An) | 249 t H2 | Proposed | Pilot scale | HUB-04 {VN-direct\|Low} |
| Studies only | Khanh Hoa (Ninh Thuan); Quang Tri (Quang Binh, Quang Tri); Can Tho (Soc Trang); Ho Chi Minh City | Not stated | | | HUB-04, FTG-17 {VN-direct\|Low} |

- **Sum of stated Mekong capacity: about 123 kt of H2 a year** (our sum of HUB-04). The national target is 100 to 500 kt by 2030 (FTG-16). If every tonne went to hydrogen-oxidising bacteria, that would be about 179 kt of protein a year (upper-bound illustration; hub_calc.py). [estimate] Low.
- **The limiting factor is demand, not ambition.** VnEconomy (June 2025) reports that "Hydrogen vẫn chưa có nhiều ứng dụng rộng rãi nên hệ thống tồn chứa, vận chuyển và phân phối ... chưa phát triển" (hydrogen still has few uses, so storage, transport and distribution are undeveloped). A protein plant sited next to an electrolyser is one of the few local uses that needs no pipeline. [VN-direct] Medium. Signal. HUB-04.
- **Ca Mau is positioning itself as a wind, hydrogen and shrimp province.** It has 28 wind projects with investment approval (1,740.2 MW), an estimated offshore potential of up to 10 GW and a stated chain "nguồn điện-lưới điện-cảng biển-logistics-công nghiệp hỗ trợ-hydrogen xanh-xuất khẩu năng lượng" (power, grid, port, logistics, supporting industry, green hydrogen, energy export). It also aims to be "thủ phủ tôm của thế giới" (the world's shrimp capital). [VN-direct] Medium. Signal, 2030. HUB-22.
- **Power price does not vary by location.** The industrial tariff is national (about USD 75 per MWh for a 24/7 plant at 22 kV; COST-01). A location advantage for power therefore depends on direct or dedicated supply next to wind or solar. We did not verify the rules for this in 2026. [VN-direct] Medium. Gap.

### 2. Bio and high-tech zones (sub-question 2)

| Zone | Current (former) | Size | Status and relevance | Evidence |
|---|---|---|---|---|
| Saigon Hi-Tech Park | Ho Chi Minh City | 913 ha; 165 projects | Operating; incubator and labs; biotech for agriculture encouraged | IND-57, INF-06 {VN-direct\|High} |
| Hoa Lac Hi-Tech Park | Hanoi | 941.79 ha of listed zones; 263.15 ha R&D | Operating; Viettel AI compute on site | INF-25, FTB-16 {VN-direct\|Medium} |
| Hanoi Biotechnology Hi-Tech Park | Hanoi (former Bac Tu Liem district) | 199.03 ha; 30% density cap; 1 to 8 floors | Decision 1054/QD-TTg (29 Sep 2024); zoning approved Jun 2025; R&D, services, training, healthcare | HUB-19, HUB-20 {VN-direct\|High} |
| Da Nang Hi-Tech Park | Da Nang | Not verified | Operating | INF-29 {VN-direct\|Low} |
| Bac Lieu shrimp hi-tech agriculture zone | Ca Mau (Bac Lieu), Hiep Thanh ward | About 418 ha; over VND 330 billion of infrastructure | Decision 694/QD-TTg (2017). Scope: seed, farming protocols, feed processing, biological products, training. Investors withdrew; land procedures unresolved; the province aims to fix this by Q3 2026 | HUB-11, HUB-12 {VN-direct\|Medium} |
| Hau Giang hi-tech agriculture zone | Can Tho (Hau Giang) | 5,200 ha (central area 415 ha) | Est. 2012; slow take-up | HUB-12 {VN-direct\|Medium} |
| Other hi-tech agriculture zones | Quang Ninh; Thai Nguyen; Dak Lak (Phu Yen); Dong Nai (7 zones in former Binh Phuoc) | Not read | Operating or in procedure | INF-22 {VN-direct\|Medium} |
| Decree 263/2026/ND-CP | All 34 units | No minimum area stated | Provinces decide (Art 8); functions: research, trials, pilot production, incubation (Art 4); 70% interest support capped at 8% a year (Art 10); land-fee exemption for infrastructure (Art 11) | HUB-26 {VN-direct\|Medium} |
| MAE biotechnology clusters | Not published | Not published | Due Dec 2026 (Directive 13/CT-TTg); named domains exclude fermentation | FTB-50, HUB-09 {VN-direct\|Medium} |
| MAE innovation centres | Not published | At least 5 (2026 to 2030); at least 50 firms supported | Plan approved 2026; locations not named | HUB-10 {VN-direct\|Medium} |
| Cai Mep Ha Free Trade Zone | Ho Chi Minh City (Ba Ria-Vung Tau), Tan Phuoc and Tan Hai wards | 4,174.35 ha: container ports 1,436.89 ha; inland waterway port 311.89 ha; logistics 906.07 ha; industry, urban use and services 850.67 ha; south Cai Mep industrial park 272.45 ha; rail 30.63 ha | Decision 4560/QD-UBND (23 Jul 2026); "green" and "circular" production named; biotech not named | HUB-06 {VN-direct\|High} |
| Da Nang and Hai Phong free trade zones | Da Nang (Lien Chieu port); Hai Phong | Not stated | Expected in 2026 (MOF); status not verified | HUB-07, HUB-08 {VN-direct\|Low} |
| Dinh An Economic Zone | Vinh Long (Tra Vinh) | Not read | Hosts the Tra Vinh hydrogen site | HUB-05 {VN-direct\|Medium} |
| Dung Quat Economic Zone | Quang Ngai | Not read | Steel, refinery, ethanol, planned gas power; province is seeking 9 special mechanisms for a national refining and energy centre | HUB-25 {VN-direct\|Medium} |

**Reading.** Three kinds of zone are relevant, and none is designed for biomanufacturing:
- High-tech parks (Saigon, Hoa Lac, Hanoi Biotech, Da Nang) suit R&D and pilot work.
- Hi-tech agriculture zones, now easier for provinces to create, suit trials, pilot production and incubation next to farms.
- Free trade and economic zones (Cai Mep Ha, Dinh An, Dung Quat) suit large plants next to ports and energy.

A biomanufacturing hub would need at least one of each within a day's drive. [VN-direct] Medium; [estimate] for the reading.

### 3. Carbohydrate and residue clusters (sub-question 3)

| Stream | Main current provinces | Size | Evidence |
|---|---|---|---|
| Cassava starch and roots | Tay Ninh (68 factories, 61,000 ha, 6.4 Mt/yr root capacity in the former province); Gia Lai; Dak Lak; Quang Ngai (former Kon Tum); Dong Nai (former Binh Phuoc); Son La; Thanh Hoa | 10.24 Mt roots (2025) plus about 8 Mt imported root equivalent | FS-01, FS-03, FS-14 {VN-direct\|Medium to High} |
| Glucose syrup for sale | Dong Nai (Vedan Phuoc Thai) | 140 kt/yr nameplate | IND-04 {VN-direct\|Medium} |
| Sugarcane and molasses | Gia Lai (over 40,000 ha); Dak Lak (former Phu Yen, over 26,000 ha); Thanh Hoa; Tay Ninh; Nghe An | 13.3 Mt cane; 0.55 to 0.72 Mt molasses (derived) | FS-31, FS-37 {VN-direct\|Low to High} |
| Rice, bran, broken rice | An Giang; Dong Thap; Can Tho; Vinh Long; Ca Mau; Tay Ninh (former Long An) | 43.5 Mt paddy; bran about 4.35 Mt (2025) | FS-25, FS-27 {VN-direct\|Medium} |
| Rice straw | Mekong holds 55% of the national total; former Kien Giang 245 MW, An Giang 225 MW, Dong Thap 190 MW of power potential | About 54 Mt (2019), about 50% surplus; baling USD 12 to 18/t | HUB-27, HUB-28 {VN-direct\|Medium} |
| Cassava pulp and wastewater biogas | Tay Ninh first; then the other cassava provinces | About 6.2 Mt wet pulp (derived) | FS-05, FS-06 {VN-adjacent\|Low} |
| Brewer's spent grain | Ho Chi Minh City (Heineken Vung Tau, 1.1 to 1.6 bn L/yr); Hanoi; Hue (Carlsberg 600 m L/yr); Dong Nai; Hai Phong; Can Tho; Dong Thap | 0.80 to 0.88 Mt wet (upper bound) | FS-38, IND-25, IND-27 {VN-direct\|Low} |
| Seafood processing by-products | Can Tho; Dong Thap; An Giang; Vinh Long; Ca Mau; Khanh Hoa | Not established (pangasius by-products 62 to 67% of the fish) | FS-48, MAC-45 {VN-direct\|Low} |

- **Straw and residues are Mekong-heavy; sugars are Southeast- and Highlands-heavy.** The only place where large carbohydrate supply and large aquafeed demand meet is along the axis from Tay Ninh and Dong Nai to the delta. [VN-direct] Medium; reading is our [estimate].
- **Rice land is shrinking in the delta.** The 2030 allocation is 3,252.63 thousand ha, about 654 thousand ha below 2024 (NT-059), and salinity is moving coastal land from rice to shrimp (CLM-21). Straw and bran supply in the coastal units will fall while shrimp feed demand rises. [VN-direct] Medium. Trend, 2030 to 2050.
- **Straw has competing uses.** Dry-season straw in the delta is already collected for mushrooms, fodder and mulch (HUB-28), and the power plan targets 4.8 to 7.0 GW of biomass power by 2050 (NT-083). [VN-direct] Medium.

### 4. Buyer clusters (sub-question 4)

| Buyer | Current (former) | Size | Evidence |
|---|---|---|---|
| Shrimp farming | Ca Mau (Ca Mau, Bac Lieu) | 594,851 t (2025); over 435,000 ha (about 40% of national area); nearly 50% of export value | HUB-15, HUB-16 {VN-direct\|Medium} |
| Pangasius farming | Dong Thap (about 35%, about 2,500 ha); An Giang; Can Tho; Tay Ninh named for 2026 to 2030 public investment | About 1.74 Mt on about 5,500 ha (2025); feed is 65 to 70% of cost | HUB-13, HUB-14 {VN-direct\|Medium} |
| Shrimp hatcheries | Khanh Hoa (Ninh Thuan): An Hai 168 ha, Nhon Hai 130 ha, Son Hai 37.7 ha | Over 30% of national postlarvae; over 45 bn PL (2024); 460 hatcheries | HUB-23 {VN-direct\|Medium} |
| Aquafeed mills, coast | Ca Mau: C.P. 124.8 kt (Khanh An Industrial Zone, Aug 2026). Vinh Long: Haid/Sheng Long 650 kt; De Heus 168 kt | C.P. total aquafeed over 650 kt/yr (4 plants) | HUB-17, IND-45, IND-46 {VN-direct\|Medium} |
| Aquafeed mills, river belt | Can Tho: De Heus 240 kt; Sunjin (former Hau Giang) 126 kt. Dong Thap: Uni-President (former Tien Giang); Cargill | | IND-46, IND-47, HUB-18 {VN-direct\|Low to Medium} |
| Livestock feed mills | Southern belt (Dong Nai, Ho Chi Minh City, Tay Ninh) and northern belt (Hung Yen, Hai Phong, Bac Ninh, Ninh Binh); Haid Hai Duong 700 kt (claimed) | 269 mills; 43.2 Mt design capacity (2022) | IND-39, IND-43, HUB-18 {VN-direct\|Low to Medium} |
| Sugar and carbohydrate buyers | Dong Nai (Vedan, Ajinomoto, AB Mauri); Tay Ninh (Saf-Viet); Phu Tho (Daesang Viet Tri) | | IND-01, IND-08, IND-15, IND-17 {VN-direct\|Medium} |

- **Implied feed demand (our estimates).** Dong Thap's pangasius (about 0.61 Mt) needs about 0.91 to 1.04 Mt of feed a year at a feed conversion ratio of 1.5 to 1.7 (assumed). Ca Mau alone is close to half of national shrimp output, and national shrimp feed was up to 920 kt in 2025 (IND-41). [VN-direct] Low. Estimate, current.
- **Incumbent protein suppliers sit in the same belt.** The VAL crusher at Phu My (nearly 2 Mt of soybean meal a year) and Entobel's insect plant at Dat Do are both in the former Ba Ria-Vung Tau, next to Cai Mep Ha. Any novel feed protein competes with them on delivered price. Insects are noted as an incumbent benchmark only. [VN-direct] Medium. VCO-16, REG-44.
- **Gap.** No provincial table of feed-mill capacity exists in edition 1.0 or was found this round (see gaps).

### 5. Candidate hubs (sub-question 5) [estimate]

**Layer scores (our judgement, 0 = absent, 3 = strong).** These scores are a transparent screening device, not a model. The climate column scores exposure inversely: 3 means low exposure.

| Hub | Power and H2 (planned) | Concentrated CO2 | Carbohydrate | Residues | Feed and sugar buyers | Research and trials | Zones and incentives | Land and ports | Climate (3 = low exposure) | Total /27 |
|---|---|---|---|---|---|---|---|---|---|---|
| CH-1 Mekong shrimp coast | 3 | 1 | 1 | 2 | 3 | 1 | 2 | 2 | 0 | 15 |
| CH-2 Mekong river belt | 1 | 0 | 2 | 3 | 3 | 3 | 2 | 1 | 1 | 16 |
| CH-3 Tay Ninh cassava | 2 | 1 | 3 | 3 | 2 | 1 | 1 | 3 | 2 | 18 |
| CH-4 HCMC, Dong Nai, Cai Mep | 2 | 2 | 2 | 2 | 3 | 3 | 3 | 2 | 2 | 21 |
| CH-5 South-central coast | 3 | 0 | 1 | 1 | 1 | 2 | 1 | 2 | 2 | 13 |
| CH-6 North (Hanoi, Hoa Lac, Hai Phong) | 2 | 2 | 1 | 1 | 2 | 3 | 3 | 2 | 2 | 18 |

Scores draw on the layers in `hub_layers.csv`. The equal weights are an assumption: an investor in power-to-protein would weight the first two columns more heavily, and a feed-ingredient startup the buyer and research columns. [VN-direct] Low. Estimate.

**Hub cards.** Full text is in `candidate_hubs.csv`; the essentials follow.

**CH-1. Mekong shrimp coast: aquafeed-and-hydrogen hub.** Ca Mau (former Ca Mau, Bac Lieu); coastal Vinh Long (former Tra Vinh, Ben Tre); coastal Can Tho (former Soc Trang).
- *Assets:* about 46% of national shrimp; three large aquafeed sites; about 123 kt of planned H2 with by-product O2 and NH3; wind; the Dinh An Economic Zone; the Bac Lieu shrimp zone; a gas-based fertiliser plant in Ca Mau.
- *Missing:* hydrogen that is actually built; a legal track for new-energy offshore wind; a working zone; a coastal pilot and trial site; CO2 data; sites that are safe from subsidence.
- *Fitting plays:* T2 now; T6; T3 after 2030 on sugar brought in; hydrogen-oxidising bacteria for feed co-located with electrolysers (demonstration 2032 to 2035, scale 2040 to 2045).
- *The window opens when* an electrolyser reaches FID and offshore wind for new energy gets a legal track.

**CH-2. Mekong river belt: pangasius, rice and university hub.** Dong Thap; An Giang (with former Kien Giang); Can Tho (with former Hau Giang); inland Vinh Long.
- *Assets:* the pangasius core; about 26% of national rice-straw potential; bran and broken rice; pangasius by-products; Can Tho University; the Region I trial sub-centre; the Hau Giang zone; breweries.
- *Missing:* pilot fermentation; any energy advantage.
- *Fitting plays:* T2, T6, T9, T10, microbial protein on rice side streams; fermentation of straw biomass after 2035.
- *The window is open now for trials.* Production follows when a shared pilot fermenter exists in Can Tho.

**CH-3. Tay Ninh cassava fermentation-sugar hub.** Tay Ninh (with former Long An), plus the cassava areas of Dong Nai (former Binh Phuoc).
- *Assets:* the largest starch cluster; pulp and biogas; land; high solar irradiance; yeast and biologics plants in former Long An.
- *Missing:* third-party glucose supply; a secure root supply (Cambodian roots near exhaustion, mosaic disease); CO2 and H2.
- *Fitting plays:* T4, T3, T2, T7 by tolling, T9.
- *Scale test:* a 20 kt a year protein plant on cassava glucose would need about 252 to 303 kt of roots a year, 3.9 to 4.7% of the former Tay Ninh root capacity (hub_calc.py). Several plants fit; a national 2050 build-out does not.
- *The window opens when* a starch group sells hydrolysate or glucose under contract.

**CH-4. Ho Chi Minh City, Dong Nai and Cai Mep: pilot, tolling and port hub.**
- *Assets:* fermenters; glucose; the Saigon Hi-Tech Park; testing centres; the Cai Mep Ha free trade zone and port; CO2 from Phu My fertiliser and Tung Lam ethanol; talent; buyers.
- *Missing:* an open food-grade pilot offer; affordable land for bulk plants; biotech listed as a free trade zone activity.
- *Fitting plays:* T5, T7, T1, T9, T8 research.
- *The window is open now.* The constraint is institutional (tolling terms, zone rules), not physical.

**CH-5. South-central renewable-protein coast.** Khanh Hoa (with former Ninh Thuan); Lam Dong (with former Binh Thuan); a link to the Gia Lai (former Binh Dinh) hydrogen proposal.
- *Assets:* the southern renewable centre, top irradiance, planned nuclear, the shrimp-seed capital, seaweed, and research in Nha Trang.
- *Missing:* concentrated CO2 (air capture would be needed); hydrogen projects; large buyers; a pilot site; reliable water (not verified).
- *Fitting plays:* microalgae and microbial larval feeds for hatcheries (2027 to 2035); protein from renewable power for feed or export (2040 to 2050).
- *The window opens when* new-energy offshore wind is legal and an electrolyser is built on this coast.

**CH-6. Northern research-and-industry hub.** Hanoi and Hoa Lac, with the corridor through Hai Phong (former Hai Duong), Quang Ninh, Hung Yen (former Thai Binh), Bac Ninh (former Bac Giang) and Ninh Binh.
- *Assets:* the Hanoi Biotechnology park; Hoa Lac and its AI compute; FIRI, NIFC, VNUA, HUST and IBT; the national livestock trial centre; the northern renewable centre; a planned Hai Phong free trade zone; Haid's feed plant; steel CO2; coal-based ammonia CO2 (possibly pure, unverified).
- *Missing:* a biofoundry; cheap solar hydrogen; carbohydrate; aquafeed demand.
- *Fitting plays:* AI bio-design and a shared build-test lab; T8 research; T7 strain work; T9; the public goods P3 and P4. Gas fermentation in the 2040s.
- *The window for research is open now.* Industry follows northern offshore wind and published CO2 purity data.

**Watch corridor, not a hub: the central industrial carbon corridor.** Quang Ngai (Dung Quat steel, refinery, ethanol, delayed gas power), Da Nang (the Dai Tan ethanol plant in former Quang Nam; an expected free trade zone; a hi-tech park) and Gia Lai (the planned An Khe ethanol plant). It has the largest CO2 and the Ca Voi Xanh option (no first-gas date), but few feed buyers and no hydrogen. It fits acetogen protein made from steel off-gas, as in China, if a steel maker chooses that route. Watch whether Hoa Phat or BSR announce off-gas or CO2 use. [VN-direct] Low. Signal, 2035 to 2045. FTG-20, FTG-21, HUB-24, HUB-25.

**Where the plants of the 2050 alternative-protein scenario would go (a siting rule, not a forecast).** The balance model's S-ALT case implies about 0.86 Mt of dry microbial feed product in 2050, equal to 78 plants of 11 kt or 43 of 20 kt (QNT). A simple rule for siting them:
- Plants on sugar follow carbohydrate: CH-3, CH-4 and the Central Highlands.
- Plants on hydrogen follow electrolysers: CH-1 first, CH-5 later.
- Plants making functional ingredients follow buyers and trial sites: CH-2 and CH-4.

No hub can host the whole scenario alone. [VN-direct] Low. Estimate, 2050.

**Link to the 2035 scenarios in chapter 13.**
- *Scenario 1 (import price-taker):* only CH-4 matters, as an importing and blending base.
- *Scenario 2 (feed-first domestic build-out):* led by CH-2 and CH-3, with T2 in CH-1.
- *Scenario 3 (regulated regional hub):* needs CH-4 as the tolling and free-trade-zone base and CH-6 as the research base.

The hydrogen-linked hubs (CH-1 at scale, CH-5) belong only to 2040 to 2050 futures in which new-energy offshore wind is built. [estimate].

**Spatial milestones offered to the vision chapter (F9).** Labelled [vision]. Normative, not predicted.

| Year | Milestone |
|---|---|
| 2027 | MAE's biotechnology cluster plan names a fermentation and feed-protein cluster, sited in CH-4, with a satellite in CH-2. At least one Decree 263 zone includes pilot fermentation and feed trials. |
| 2030 | A shared food-grade pilot and tolling facility operates in CH-4. Feed trials of novel ingredients run in Can Tho. One starch group supplies glucose under contract in Tay Ninh. |
| 2035 | The first Mekong electrolyser operates, with a co-located microbial-protein demonstration using its O2. The southern renewable centre's master plan reserves land for green industrial parks. |
| 2040 | Two hubs (CH-3 and CH-1 or CH-2) produce feed protein at industrial scale. The north runs a domestic automated build-test lab. |
| 2045 | Offshore wind for new energy supplies a protein plant on the Mekong or south-central coast. |
| 2050 | A national network of three to four production hubs and one research hub. |

---

## Signposts

| Signpost | What it would tell a reader | Where to watch | Horizon |
|---|---|---|---|
| MAE publishes the locations of its biotechnology clusters, and one covers fermentation or feed protein | The bioeconomy's map starts to match the input map | MAE portal (mae.gov.vn); chinhphu.vn | Dec 2026 to 2027 |
| A Mekong electrolyser reaches FID or starts main construction (Tra Vinh, Ben Tre, Bac Lieu) | Hydrogen on the shrimp coast becomes real | Vinh Long and Ca Mau provincial portals; IEA Hydrogen Projects Database | 2027 to 2032 |
| Decree or plan amendment gives offshore wind "for new energy" a legal track | The 15 GW (2035) and 240 GW (2050) earmarks become actionable | Government decrees; next PDP8 review; MOIT | 2027 to 2030 |
| Master plan for the southern or northern renewable centre names green industrial parks and uses | Where power-to-X industry will sit | MOIT; Khanh Hoa, Lam Dong, Hai Phong portals | 2026 to 2030 |
| First provincial hi-tech agriculture zone under Decree 263 that lists feed, fermentation or biological products | Provinces compete for the pilot layer | Provincial People's Committee decisions (thuvienphapluat.vn) | 2026 to 2028 |
| Bac Lieu shrimp zone allocates land and signs a feed or biologics tenant | Whether zones can work in the delta | Ca Mau portal; Bao Xay Dung | Q3 2026 to 2027 |
| Cai Mep Ha, Da Nang or Hai Phong free trade zone rules list biomanufacturing or food processing | Port-side biomanufacturing becomes eligible | HCMC, Da Nang, Hai Phong People's Committees | 2026 to 2028 |
| A starch group sells glucose or hydrolysate to a third party in Tay Ninh | CH-3 switches on | Tay Ninh investment news; starch association | 2027 to 2032 |
| Vedan, Ajinomoto or SHTP publishes a food-grade tolling or pilot offer | CH-4 switches on | Company sites; SHTP | 2026 to 2030 |
| Facility-level CO2 volume and purity published (ethanol, fertiliser, steel) | CO2 layer becomes mappable | MAE greenhouse-gas inventory; company ESG reports | 2027 to 2030 |
| Ca Voi Xanh first gas dated | A pure CO2 stream in the central corridor | Petrovietnam; Quang Ngai portal | 2027 to 2032 |
| Delta subsidence stays above 1 cm a year on InSAR updates | Coastal hub sites need raising and surface water | Utrecht, Padua and AGH groups; MAE water resources | Continuous |

---

## Implications by audience

- **Investors (VC, impact, DFIs, strategics).**
  - Near-term capital belongs in CH-4 (tolling and pilot) and CH-2 (functional feed ingredients and trials). Assets exist there, and the gaps are contracts and rules.
  - Treat CH-1 hydrogen co-location as an option to hold, not a bet: its trigger is an electrolyser at FID.
  - DFIs could fund raised, surface-water industrial platforms on the Mekong coast. These serve hydrogen, aquafeed and protein plants alike.
- **Policy makers.**
  - *National:* use MAE's December 2026 cluster plan to site a fermentation and feed-protein cluster where inputs meet buyers (CH-4 with a Can Tho satellite), not only where research sits.
  - *National:* give offshore wind for new energy a legal track, and name food and feed protein among the uses of the renewable centres' green industrial parks.
  - *National:* require CO2 volume and purity reporting.
  - *Provinces:* Decree 263 lets you create zones now. Ca Mau, Can Tho and Tay Ninh have the strongest cases for zones that combine trials, pilot production and feed. The Bac Lieu and Hau Giang experience says to fix land procedures before announcing.
- **Startups and founders.** Start where tolling and trials exist (HCMC and Dong Nai; Can Tho). Design for feedstock from Tay Ninh and buyers in the delta. A Mekong coastal base makes sense only after hydrogen is built, and the site must be chosen for subsidence.
- **F&B and feed manufacturers.**
  - The delta's shrimp coast is where aquafeed demand grows fastest as salinity moves land from rice to shrimp.
  - Mills in Ca Mau and Vinh Long are natural first buyers and co-location partners for microbial feed protein.
  - Mills in Can Tho and Dong Thap are natural partners for pangasius functional ingredients.
- **Research bodies.** Can Tho University and the Region I trial sub-centre are the feed-trial anchor. Hanoi (the Biotech park, Hoa Lac, FIRI) is the design and strain anchor. Nha Trang is the hatchery and algae anchor. A shared pilot fermenter is the missing piece in each.
- **International bodies.** Fundable regional public goods are:
  - raised and climate-proofed industrial land in the delta;
  - groundwater substitution;
  - a feed-trial network across Can Tho and Ca Mau;
  - a biofoundry partnership for the northern research hub.

---

## Disagreements log

| Topic | Source A | Source B | Our position |
|---|---|---|---|
| Capacity of Mekong hydrogen projects | FTG-17 (Mar 2025): about 30 kt H2 each for Tra Vinh, Ben Tre, Bac Lieu and Tien Giang (about 120 kt total) | HUB-04 (Jun 2025): 24 kt, 24 kt, 70 kt and 5.3 kt (about 123 kt total) | Totals agree; project splits differ. Use HUB-04 for single projects: it matches the Tra Vinh design confirmed by HUB-05 (24 kt). |
| Tra Vinh plant start date | HUB-04: Q2 2027 | HUB-05 and FTG-27: only perimeter works by May 2026; province ordered a review | Q2 2027 is not credible. |
| Ca Mau farmed shrimp output, 2025 | HUB-15 (VASEP): 594,851 t | HUB-17 (VnExpress): 577,000 t | Use 594,851 t (provincial report via VASEP); the difference is 3%. |
| Power-sector emissions cap, 2030 | FTG-15 (Decision 768/QD-TTg): 197 to 199 MtCO2e | HUB-21 (Decision 458/QD-TTg, via press summary): no more than 170 MtCO2e | Not resolved. Scope or extraction error possible. HUB-21 also gave renewables at 80 to 85% of primary energy by 2050, far above NT-044 (25 to 30%). Treat HUB-21's figures as unverified except the "two centres by 2030". |
| Cargill's feed mill footprint | HUB-18: 11 mills in 10 locations | Edition 1.0 FAC-058: exit reported by trade press | Use the locations only as evidence of where livestock mills cluster, not as current Cargill assets. |

---

## Open questions and gaps

| # | Gap | Why it matters | Cheapest way to close it |
|---|---|---|---|
| 1 | Feed-mill capacity by province on the 34-unit map | The buyer layer rests on company examples | MAE Department of Livestock Production and Animal Health, and Department of Fisheries: lists of certified feed facilities; re-aggregate by current province |
| 2 | Offshore wind survey and lease areas by province | Hydrogen siting and the Tra Vinh overlap problem | National marine spatial plan and MOIT survey decisions; the guidance under Decree 272/2026 |
| 3 | CO2 volume and purity by site | The CO2 layer is mostly "not found" | MAE list of facilities required to inventory greenhouse gases; company ESG reports (Hoa Phat, PVFCCo, PVCFC, BSR) |
| 4 | Location of MAE biotechnology clusters and innovation centres | Decides where public support lands | MAE portal from December 2026 |
| 5 | Whether Decree 263 zones admit full-scale feed or fermentation plants | Decides whether zones can host production | Read Articles 4 to 7 of Decree 263/2026 in full |
| 6 | Sugar mill list and crushing capacity by province | Sugar-route siting outside Tay Ninh | Vietnam Sugarcane and Sugar Association season report |
| 7 | Shrimp and pangasius output by current province | Only Ca Mau and Dong Thap shares are sourced | NSO provincial tables for 2025 on the 34-unit map |
| 8 | Grid capacity and curtailment on the Mekong coast | Dedicated-power options for protein plants | EVN SPC and NPT reports; provincial power development plans |
| 9 | Status of the Da Nang and Hai Phong free trade zones | Port-side options in the centre and north | thuvienphapluat.vn search for "khu thương mại tự do" decisions in 2026 |
| 10 | Water availability in former Ninh Thuan (now Khanh Hoa) | The south-central hub needs water for fermentation | MAE water resources planning for the South-Central Coast |
| 11 | New provincial master plans after the 2025 mergers | They will name zones for hydrogen, biotech and processing | Provincial portals for Ca Mau, Vinh Long, Can Tho, Tay Ninh, Khanh Hoa and Lam Dong, 2026 to 2027 |
| 12 | Block B gas, the O Mon power centre (Can Tho) and CO2 content | A possible pure CO2 stream in the delta | Petrovietnam and EVN project updates |

We stopped searching once returns were mostly repetition of the pipeline and policy texts already captured.

---

## Leads (not verified this round)

- National marine spatial plan (a National Assembly resolution of 2024, per agent knowledge): the likely source for offshore-wind zones by province.
- The Mekong regional plan (Decision 287/QD-TTg, NT-053): check it for named industrial, energy and processing centres.
- Ca Mau's shrimp-sector plan for 2021 to 2030, vision 2050 (Ca Mau legal-information portal, search result only).
- VnExpress: "Khu nuôi tôm công nghệ cao 9 năm vẫn bỏ trống" (search result only; a history of the Bac Lieu zone).
- Khanh Hoa began resettlement for the nuclear plant in January 2026 (Bao Chinh phu headline, search result only).
- MOST news on Lam Dong expanding agricultural biotechnology (12 Sep 2026) and the Dong Nai science department's biotech implementation page (search results only).
- Hanoi's hi-tech agriculture plan to 2030 (Plan 73/KH-UBND, 2025; INF-22).
- Thailand EECi, Singapore Tuas and India's BioE3 hubs as siting models (edition 1.0 RGN and FTB sources).

---

## Sources

All accessed 2026-09-24.

- **HUB-01.** Prime Minister. Quyết định 768/QĐ-TTg phê duyệt Điều chỉnh Quy hoạch phát triển điện lực quốc gia thời kỳ 2021-2030, tầm nhìn đến năm 2050. 15 Apr 2025. https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-768-QD-TTg-2025-Dieu-chinh-Quy-hoach-phat-trien-dien-luc-quoc-gia-thoi-ky-2021-2030-651977.aspx . Two inter-regional renewable centres by 2030 (regions only); offshore wind for new energy; HVDC after 2030. Type: law.
- **HUB-02.** Tạp chí Năng lượng Việt Nam. "Phê duyệt Kế hoạch thực hiện Điều chỉnh Quy hoạch điện VIII." 2025 (date not captured). https://nangluongvietnam.vn/phe-duyet-ke-hoach-thuc-hien-dieu-chinh-quy-hoach-dien-viii-34293.html . Decision 1509/QD-BCT (30 May 2025); locations of the centres; offshore wind 6 GW and 17.032 GW. Type: sector journal.
- **HUB-03.** Ministry of Industry and Trade. "Bộ Công Thương ban hành Kế hoạch triển khai Quy hoạch điện VIII điều chỉnh." 2025 (date not captured). https://moit.gov.vn/tin-tuc/phat-trien-nang-luong/bo-cong-thuong-ban-hanh-ke-hoach-trien-khai-quy-hoach-dien-viii-dieu-chinh.html . Verbatim locations of the northern and southern centres. Type: government.
- **HUB-04.** VnEconomy. "Nhu cầu chưa có là 'nút thắt' phát triển năng lượng hydrogen xanh." 24 Jun 2025. https://vneconomy.vn/nhu-cau-chua-co-la-nut-that-phat-trien-nang-luong-hydrogen-xanh.htm . Hydrogen project list with capacities and dates; demand bottleneck. Type: press.
- **HUB-05.** CafeLand (from Thanh Niên Việt). "Tiến độ mới nhất về nhà máy sản xuất hydro xanh hơn 7.800 tỷ tại Vĩnh Long." 7 May 2026. https://cafeland.vn/tin-tuc/tien-do-moi-nhat-ve-nha-may-san-xuat-hydro-xanh-hon-7800-ty-tai-vinh-long-151248.html . Tra Vinh plant site, design, progress and obstacles (read via browser after a 403). Type: press.
- **HUB-06.** Báo Công Thương. "TP. Hồ Chí Minh: Thành lập Khu thương mại tự do gắn với cảng biển Cái Mép Hạ." 23 Jul 2026. https://congthuong.vn/tp-ho-chi-minh-thanh-lap-khu-thuong-mai-tu-do-gan-voi-cang-bien-cai-mep-ha-466503.html . Decision 4560/QD-UBND; area and sub-zones. Type: press (ministry newspaper).
- **HUB-07.** Thanh Niên. "Năm 2026 lập khu thương mại tự do tại TP.HCM, Đà Nẵng, Hải Phòng." 5 Dec 2025. https://thanhnien.vn/nam-2026-lap-khu-thuong-mai-tu-do-tai-tphcm-da-nang-hai-phong-185251205161235711.htm . MOF expects free trade zones in 2026. Type: press.
- **HUB-08.** VietnamNet. "Dự kiến năm 2026 thành lập khu thương mại tự do tại Đà Nẵng, Hải Phòng, TPHCM." Dec 2025. https://vietnamnet.vn/du-kien-nam-2026-thanh-lap-khu-thuong-mai-tu-do-tai-da-nang-hai-phong-tphcm-2469765.html . Da Nang zone linked to Lien Chieu port; not yet established at the time. Type: press.
- **HUB-09.** Ministry of Science and Technology portal. "Công nghiệp sinh học mở rộng dư địa đóng góp cho nông nghiệp và môi trường." 21 Aug 2026. https://mst.gov.vn/cong-nghiep-sinh-hoc-mo-rong-du-dia-dong-gop-cho-nong-nghiep-va-moi-truong-197260821105446038.htm . On Decision 1466/QD-TTg; no cluster locations. Type: government.
- **HUB-10.** Ministry of Agriculture and Environment portal. "Bộ Nông nghiệp và Môi trường hướng tới 5 trung tâm đổi mới sáng tạo..." 7 Jul 2026. https://mae.gov.vn/SMPT_Publishing_UC/KhaiThac/TinTuc/pInTinTuc.aspx?ItemID=22238 . At least 5 innovation centres for 2026 to 2030; no locations. Type: government.
- **HUB-11.** Báo Xây dựng. "Gỡ vướng cho Khu nông nghiệp ứng dụng công nghệ cao phát triển tôm Bạc Liêu." 13 May 2026. https://baoxaydung.vn/go-vuong-cho-khu-nong-nghiep-ung-dung-cong-nghe-cao-phat-trien-tom-bac-lieu-192260513180737308.htm . Decision 694/QD-TTg; status and problems. Type: press.
- **HUB-12.** Vietnam Academy of Agricultural Sciences (VAAS). "Phát huy hiệu quả các khu nông nghiệp ứng dụng công nghệ cao." 17 Apr 2023. https://vaas.vn/vi/khoa-hoc-cong-nghe/phat-huy-hieu-qua-cac-khu-nong-nghiep-ung-dung-cong-nghe-cao . Hau Giang and Bac Lieu zones: areas, scope and take-up. Type: public research institute.
- **HUB-13.** VnEconomy. "Ngành cá tra chuyển tư duy từ 'sản lượng' sang 'giá trị cao'." 31 Dec 2025. https://vneconomy.vn/nganh-ca-tra-chuyen-tu-duy-tu-san-luong-sang-gia-tri-cao . Pangasius area, output and exports for 2025; 2026 to 2030 public investment provinces. Type: press.
- **HUB-14.** Nhân Dân. "Bước chuyển bền vững cho ngành hàng thủy sản chiến lược." 7 Jun 2026. https://nhandan.vn/buoc-chuyen-ben-vung-cho-nganh-hang-thuy-san-chien-luoc-post967518.html . Dong Thap about 35% of pangasius output. Type: press (Party newspaper).
- **HUB-15.** VASEP. "Cà Mau: Sản lượng tôm đạt gần 600.000 tấn, vượt kế hoạch năm 2025." 13 Dec 2025. https://vasep.com.vn/san-pham-xuat-khau/tom/nguyen-lieu/san-xuat/ca-mau-san-luong-tom-dat-gan-600-000-tan-vuot-ke-hoach-nam-2025-35579.html . Ca Mau shrimp output of 594,851 t. Type: industry association.
- **HUB-16.** Dân Việt. "Cà Mau chiếm 40% diện tích nuôi, gần 50% giá trị xuất khẩu, hướng tới trở thành trung tâm công nghiệp tôm của cả nước." Date not captured (probably 2025). https://danviet.vn/ca-mau-chiem-40-dien-tich-nuoi-gan-50-gia-tri-xuat-khau-huong-toi-tro-thanh-trung-tam-cong-nghiep-tom-cua-ca-nuoc-d1392671.html . Area and export shares. Type: press.
- **HUB-17.** VnExpress. "C.P. Việt Nam mở rộng năng lực sản xuất thức ăn thủy sản." 14 Aug 2026. https://vnexpress.net/c-p-viet-nam-mo-rong-nang-luc-san-xuat-thuc-an-thuy-san-5109211.html . Ca Mau aquafeed plant; C.P. total aquafeed capacity. Type: press.
- **HUB-18.** VCCI WTO Centre. "Việt Nam ngày càng thu hút các nhà sản xuất thức ăn chăn nuôi." Page dated 23 Sep 2026; content older. https://trungtamwto.vn/thi-truong-duc/24758-viet-nam-ngay-cang-thu-hut-cac-nha-san-xuat-thuc-an-chan-nuoi . Cargill mill locations; De Heus plants. Type: business association.
- **HUB-19.** Báo Chính phủ. "Thành lập Khu Công nghệ cao sinh học Hà Nội." 30 Sep 2024. https://baochinhphu.vn/thanh-lap-khu-cong-nghe-cao-sinh-hoc-ha-noi-102240930095019514.htm . Decision 1054/QD-TTg; 199.03 ha; wards. Type: government newspaper.
- **HUB-20.** VietnamPlus. "Hà Nội phê duyệt Quy hoạch phân khu xây dựng Khu công nghệ cao Sinh học." 4 Jun 2025. https://www.vietnamplus.vn/ha-noi-phe-duyet-quy-hoach-phan-khu-xay-dung-khu-cong-nghe-cao-sinh-hoc-post1042448.vnp . Zoning functions and density. Type: press (state news agency).
- **HUB-21.** Báo Chính phủ. "Thúc đẩy phát triển ngành công nghiệp năng lượng tái tạo, năng lượng mới" (on Decision 458/QD-TTg). 23 Mar 2026. https://baochinhphu.vn/thuc-day-phat-trien-nganh-cong-nghiep-nang-luong-tai-tao-nang-luong-moi-102260323162312653.htm . Two centres by 2030; other figures unverified (see disagreements). Type: government newspaper.
- **HUB-22.** VietnamPlus. "Cà Mau vươn ra biển lớn: Khai mở 'kho báu điện gió', lựa chọn phát triển xanh." 25 Aug 2026. https://www.vietnamplus.vn/ca-mau-vuon-ra-bien-lon-khai-mo-kho-bau-dien-gio-lua-chon-phat-trien-xanh-post1132226.vnp . Ca Mau wind approvals and potential; hydrogen value chain. Type: press (state news agency).
- **HUB-23.** Nông nghiệp và Môi trường. "Thủ phủ tôm giống công nghệ cao: [Bài 1] Chiếm hơn 30% sản lượng con giống cả nước." 15 May 2025. https://nongnghiepmoitruong.vn/thu-phu-tom-giong-cong-nghe-cao-bai-1-chiem-hon-30-san-luong-con-giong-ca-nuoc-d750489.html . Ninh Thuan postlarvae output, hatcheries and zones. Type: press (MAE newspaper).
- **HUB-24.** Người Quan Sát. "Chưa xác định được thời điểm cung cấp khí từ mỏ Cá Voi Xanh, nhiều dự án điện ở Quảng Ngãi bị ảnh hưởng." 25 Jul 2026. https://nguoiquansat.vn/chua-xac-dinh-duoc-thoi-diem-cung-cap-khi-tu-mo-ca-voi-xanh-nhieu-du-an-dien-o-quang-ngai-bi-anh-huong-306220.html . Ca Voi Xanh first gas undetermined. Type: press.
- **HUB-25.** Báo Đầu tư. "Quảng Ngãi gỡ điểm nghẽn, thúc tiến độ loạt dự án năng lượng quy mô lớn." 23 Jul 2026. https://baodautu.vn/quang-ngai-go-diem-nghen-thuc-tien-do-loat-du-an-nang-luong-quy-mo-lon-d650665.html . Quang Ngai power pipeline; refining and energy centre proposal. Type: press.
- **HUB-26.** Government. Nghị định 263/2026/NĐ-CP về khu nông nghiệp ứng dụng công nghệ cao. 1 Jul 2026. https://thuvienphapluat.vn/van-ban/Linh-vuc-khac/Nghi-dinh-263-2026-ND-CP-khu-nong-nghiep-ung-dung-cong-nghe-cao-713724.aspx . Articles 4, 6, 8, 10 and 11 (read through a summarising fetch; verify articles). Type: law.
- **HUB-27.** Cuong, T.T., Le, H.A., Khai, N.M. et al. "Renewable energy from biomass surplus resource: potential of power generation from rice straw in Vietnam." Scientific Reports 11:792. 2021. doi:10.1038/s41598-020-80678-3 . Provincial rice-straw potential from 2019 Sentinel-1 mapping. Type: peer-reviewed.
- **HUB-28.** Hung, N.V., Nguyen, C.D., Tran, T.V. et al. "Energy efficiency, greenhouse gas emissions, and cost of rice straw collection in the Mekong River Delta of Vietnam." Field Crops Research 198:16 to 22. 2016. doi:10.1016/j.fcr.2016.08.024 . Straw yield, baling cost and current uses. Type: peer-reviewed.
- **HUB-29.** Báo Chính phủ. "Đề xuất xây dựng 2 trung tâm công nghiệp, dịch vụ năng lượng tái tạo liên vùng." 31 May 2025. https://baochinhphu.vn/de-xuat-xay-dung-2-trung-tam-cong-nghiep-dich-vu-nang-luong-tai-tao-lien-vung-102250531090643853.htm . Centre locations and components; 15 GW for H2 and NH3 "chủ yếu là nguồn điện gió ngoài khơi". Type: government newspaper.

**Reused IDs from other streams and edition 1.0** (not re-read unless stated):
- FTG-01, FTG-15 to FTG-21, FTG-27, FTG-28 (frontier_gas);
- FTB-16, FTB-17, FTB-50 (frontier_bio);
- NT-053, NT-059, NT-067, NT-080, NT-083, NT-085, NT-092 (national_targets);
- CLM-13, CLM-14, CLM-15, CLM-20, CLM-21 (climate);
- QNT-model (balance_model);
- INF-06, INF-13, INF-15, INF-18, INF-19, INF-22, INF-23, INF-25, INF-28, INF-29 (wave 2 infra);
- edition 1.0: FS-01, FS-03, FS-05, FS-06, FS-14, FS-25, FS-27, FS-31, FS-37, FS-38, FS-48, IND-01, IND-04, IND-08, IND-15, IND-17, IND-25, IND-27, IND-39, IND-41, IND-43, IND-45, IND-46, IND-47, IND-57, VCO-16, REG-44, COST-01, COST-21, MAC-15, MAC-45, RGN-36.

---

## Appendix: working notes

Raw notes written during the research, kept for audit. The distilled findings above take precedence where wording differs.

### Working log
- 2026-09-24: file created. Reading inputs (co2_point_sources_vn.csv, vn_energy_inputs_2050.csv, national_targets_2050.csv, frontier_bio.md, facilities.csv, provinces.csv, app-p-admin-map.md).
- Inputs read: FTG co2_point_sources_vn.csv (19 rows), vn_energy_inputs_2050.csv, FTG notes W9 and W15 (hydrogen pipeline by former province, FTG-17), NTS national_targets_2050.csv (98 rows), FTB notes (Directive 13/CT-TTg, MAE clusters due Dec 2026), CLM notes (subsidence, salinity, pangasius flood exposure), edition 1.0 facilities.csv (82 rows), feedstocks.csv (29 rows), provinces.csv, plays.csv, app-p-admin-map.md, wave 2 infra.md (Decree 263/2026, hi-tech agriculture zones).

#### Raw notes as gathered (kept for audit)

#### R1. Energy geography (PDP8 revised)
- Decision 768/QD-TTg (15 Apr 2025): "Dự kiến đến 2030, hình thành 02 trung tâm công nghiệp, dịch vụ năng lượng tái tạo liên vùng ... tại các khu vực có nhiều tiềm năng như Bắc Bộ, Nam Trung Bộ, Nam Bộ". Scope: production, transmission and use of power, and RE equipment manufacturing. Post-2030: "các đường dây truyền tải siêu cao áp một chiều kết nối khu vực Trung Trung Bộ, Nam Trung Bộ và Bắc Bộ" (HVDC). No provinces named for hydrogen or ammonia in the decision. HUB-01.
- Implementation plan, Decision 1509/QD-BCT (30 May 2025): northern centre "tại các địa phương như Hải Phòng, Quảng Ninh, Thái Bình"; southern centre "dự kiến đặt tại khu vực Ninh Thuận, Bình Thuận, Bà Rịa - Vũng Tàu và TP. Hồ Chí Minh". Offshore wind for domestic demand 6,000 MW (2030), 17,032 MW (2035). New-energy offshore wind 15,000 MW (2035). No provincial MW allocation for offshore wind in the press summaries. HUB-02 (sector journal), HUB-03 (MOIT). Current names: north = Hai Phong, Quang Ninh, Hung Yen (former Thai Binh); south = Khanh Hoa (former Ninh Thuan), Lam Dong (former Binh Thuan), Ho Chi Minh City (former Ba Ria-Vung Tau and core).
- Hydrogen pipeline (FTG-17, Mar 2025): about 30 kt H2/yr each in former Tra Vinh, Ben Tre (both now Vinh Long), Bac Lieu (now Ca Mau), Tien Giang (now Dong Thap); Binh Dinh (now Gia Lai) 20 kt proposed; Long An (now Tay Ninh) 249 t; studied in Ninh Thuan (Khanh Hoa), Quang Binh and Quang Tri (Quang Tri), Soc Trang (Can Tho), HCMC. Tra Vinh plant (Dinh An Economic Zone, Vinh Long) stalled at perimeter works by May 2026 (FTG-27): 24 kt H2, 182.5 kt NH3, 195 kt O2 a year design.
- VnEconomy (24 Jun 2025), HUB-04: project list with different capacities from FTG-17: Tra Vinh 24 kt H2 and 182.5 kt NH3 (target Q2 2027); Ben Tre 24 kt H2 and 182.5 kt NH3 (Q2 2028); Bac Lieu 70 kt H2 (phase 1 2029, phase 2 2032); Tien Giang 5,294 t H2 (Sep 2028); Binh Dinh 20 kt proposed; Long An 249 t proposed; Ninh Thuan, Quang Binh, Quang Tri, Soc Trang, HCMC proposed. Demand is the bottleneck: "Hydrogen vẫn chưa có nhiều ứng dụng rộng rãi nên hệ thống tồn chứa, vận chuyển và phân phối ... chưa phát triển". DISAGREEMENT with FTG-17 (30 kt each).
- CafeLand (7 May 2026, via Thanh Nien Viet), HUB-05: Tra Vinh green H2 plant, Dong Hai commune, Vinh Long, inside Dinh An Economic Zone; VND 7,856 bn; 22.36 ha land plus 30.4 ha water surface; export buoy for ships to 40,000 DWT; design 24 kt H2, 182.5 kt NH3, about 195 kt O2 a year; only fence, gate, guardhouse, part of internal roads built; obstacles: amending investment policy, overlap with offshore wind survey area, not enough land. Province asked investor to review the whole project (5 May 2026). Confirms FTG-27.

#### R2. Special zones
- Cai Mep Ha Free Trade Zone, Ho Chi Minh City (former Ba Ria-Vung Tau), Decision 4560/QD-UBND of 23 Jul 2026 (HCMC People's Committee): 4,174.35 ha in Tan Phuoc and Tan Hai wards; 8 sub-zones incl. existing container port 305.03 ha, Cai Mep Ha container port 351.2 ha, downstream port 780.66 ha, rail 30.63 ha, inland waterway port 311.89 ha, south Cai Mep industrial park 272.45 ha, logistics 906.07 ha, industrial-urban-service 850.67 ha. Focus "digital, green, circular economy"; no biotech or food named. HUB-06 (Cong Thuong, 23 Jul 2026). Neighbours: VAL Phu My soy crusher, Phu My fertiliser (CO2), Entobel Dat Do, Heineken Vung Tau.
- Da Nang and Hai Phong FTZs: MOF expected establishment in 2026 (Thanh Nien, 5 Dec 2025, HUB-07; VietnamNet Dec 2025, HUB-08). Da Nang FTZ linked to Lien Chieu port under NA special-mechanism resolution. Status as of Sep 2026 not verified. FTZ model extends to "công nghiệp, đô thị, dịch vụ, tài chính, công nghệ cao, đổi mới sáng tạo".

#### R3. Bio zones and clusters
- MOST portal (21 Aug 2026), HUB-09: on Decision 1466/QD-TTg (31 Jul 2026, agri and environment biotech plan); names organic and microbial fertiliser and livestock feed as fields for biotech firms; no cluster locations named.
- MAE portal (7 Jul 2026), HUB-10: MAE plan to form "ít nhất 5 trung tâm đổi mới sáng tạo trong giai đoạn 2026-2030" and support at least 50 firms; locations and fields not named; key programmes due for approval by 30 Aug 2026.
- So as of 24 Sep 2026, no published location for the Directive 13/CT-TTg MAE biotech clusters (due Dec 2026) or the MAE innovation centres. Location is still open: a policy window.
- Bac Lieu shrimp hi-tech agriculture zone, now Ca Mau (Hiep Thanh ward): Decision 694/QD-TTg (24 May 2017); over 400 ha (418 ha); phases 1 and 2 infrastructure over VND 330 bn; 9 firms in 4 sectors selected in 2020, some withdrew; land and operating-mechanism procedures unresolved; province targets fixes by Q3 2026. HUB-11 (Bao Xay Dung, 13 May 2026). Focus per 2023 VAAS article: shrimp seed, farming protocols, feed processing, biological products, training; 20 ha allocated to 7 firms, VND 97 bn (2023). HUB-12 (VAAS, 17 Apr 2023). VnExpress headline "Khu nuôi tôm công nghệ cao 9 năm vẫn bỏ trống" (not read).
- Hau Giang hi-tech agriculture zone, now Can Tho (former Hau Giang): est. 2012; 5,200 ha (central 415 ha, production 4,785 ha in former Long My district); slow (only 10 ha cleared in phase 1 by 2020). Mekong had 2 of 5 national hi-tech agriculture zones (2023). HUB-12.

#### R4. Buyer clusters: pangasius and shrimp
- Pangasius 2025: area "hơn 5.500 ha", output "khoảng 1,74 triệu tấn", exports about USD 2.1 bn; feed 65 to 70% of cost; medium-term public investment 2026 to 2030 for seed and concentrated farming infrastructure in "Đồng Tháp, An Giang, Cần Thơ, Tây Ninh". HUB-13 (VnEconomy, 31 Dec 2025).
- Dong Thap: about 2,500 ha of ponds and "approximately 35%" of national pangasius output; national output about 1.7 Mt (2025); seed area about 2,000 ha; 4 to 4.5 bn fingerlings a year. HUB-14 (Nhan Dan, 7 Jun 2026).
- Our estimate: Dong Thap about 0.6 Mt pangasius a year (35% x 1.74 Mt); at FCR 1.5 to 1.7 about 0.9 to 1.0 Mt of feed; pangasius feed nationally 2.0 to 2.5 Mt (edition 1.0 IND-41). [estimate]
- Ca Mau (with former Bac Lieu) shrimp output 2025: "594.851 tấn", +5.2% on 2024; all aquaculture 904,338 t. HUB-15 (VASEP, 13 Dec 2025).
- Ca Mau shrimp area "hơn 435.000 ha (chiếm khoảng 40% tổng diện tích nuôi tôm cả nước)"; "gần 50% kim ngạch xuất khẩu tôm của cả nước"; about USD 2.3 bn exports; output about 566,000 t (earlier year); aims to be "trung tâm công nghiệp tôm của cả nước". HUB-16 (Dan Viet, date not shown; probably 2025).
- Our calculation: 594,851 t / 1,291 kt national shrimp 2025 (NSO via edition 1.0 MAC-15) = about 46% of national farmed shrimp output. At FCR 1.2 to 1.4 on whiteleg-heavy output, Ca Mau shrimp would need roughly 0.5 to 0.8 Mt of feed if all were fed (much black tiger is extensive, so lower). [estimate, Low]
- C.P. Vietnam Ca Mau aquafeed plant: Khanh An Industrial Zone, Ca Mau; VND 1,725 bn; 124,800 t/yr; nearly 18 ha; the firm's 4th aquafeed plant; C.P. aquafeed capacity "hơn 650.000 tấn mỗi năm". Article gives Ca Mau shrimp 577,000 t in 2025 (VASEP gives 594,851 t: disagreement). HUB-17 (VnExpress, 14 Aug 2026).
- Cargill's 11 feed mills (older content, republished): former Hung Yen, Ha Nam, Nghe An, Binh Dinh, Dong Nai, Binh Duong, Long An, Tien Giang, Dong Thap, Can Tho. Current: Hung Yen, Ninh Binh, Nghe An, Gia Lai, Dong Nai, Ho Chi Minh City, Tay Ninh, Dong Thap (x2), Can Tho. Cargill exit was reported by trade press (edition 1.0 FAC-058). HUB-18 (VCCI WTO Centre, page dated 23 Sep 2026 but content older). Shows livestock feed mills track the southern and northern consumption belts, not the feedstock regions.

#### R5. Research zones (north)
- Hanoi Biotechnology Hi-Tech Park (Khu công nghệ cao sinh học Hà Nội): Decision 1054/QD-TTg, 29 Sep 2024; 199.03 ha in Tay Tuu, Lien Mac, Minh Khai, Thuy Phuong and Co Nhue 2 wards of former Bac Tu Liem district, Hanoi; managed by a Hanoi board; biotech is the priority sector. HUB-19 (Bao Chinh phu, 30 Sep 2024).
- Zoning plan approved (VietnamPlus, 4 Jun 2025): functions listed as service, healthcare, training, research, education, green space; building density capped at 30%, 1 to 8 floors, some landmarks to 25 floors. HUB-20. Reading: an urban R&D park, suited to labs, pilot suites and a biofoundry, not to large-volume fermentation or feed plants.
- Hoa Lac Hi-Tech Park (wave 2 INF-25): 941.79 ha of listed zones incl. 263.15 ha R&D; Viettel DGX B200 AI system at Hoa Lac since 6 Feb 2026 (FTB-16).

#### R6. Energy, additional
- Decision 458/QD-TTg (23 Mar 2026), energy transition plan: renewables about 47% of power capacity by 2030; coal capped at 30.2 to 31.055 GW; power-sector GHG no more than 170 MtCO2e (2030); "02 inter-regional renewable energy industry and service centers" by 2030; renewables 80 to 85% of primary energy by 2050; energy-sector GHG no more than 101 MtCO2e (2050). Names green H2, green NH3, offshore wind, storage, CCUS. No provinces named. HUB-21 (Bao Chinh phu, 23 Mar 2026). Note: 170 Mt power cap (2030) is tighter than the PDP8 197 to 199 Mt (FTG-15): disagreement or different scope.
- Ca Mau wind: 28 wind projects with investment approval totalling 1,740.2 MW (operating share not stated); offshore potential "có thể phát triển lên tới 10.000 MW"; total wind potential over 25,000 MW; value chain "nguồn điện-lưới điện-cảng biển-logistics-công nghiệp hỗ trợ-hydrogen xanh-xuất khẩu năng lượng"; aim "thủ phủ tôm của thế giới". HUB-22 (VietnamPlus, 25 Aug 2026).
- Shrimp seed: former Ninh Thuan (now Khanh Hoa) supplies "hơn 30% sản lượng tôm giống toàn quốc"; over 45 bn postlarvae in 2024 (whiteleg 35.62 bn, black tiger 8.73 bn); 460 hatcheries; zones An Hai 168 ha (hi-tech broodstock and postlarvae), Nhon Hai 130 ha, Son Hai 37.7 ha (disease-free broodstock). HUB-23 (Nong nghiep va Moi truong, 15 May 2025). Hatcheries buy high-value larval feeds (artemia, microalgae, specialty diets): a premium niche for microbial and algal protein close to the south-central renewable coast.

#### R7. Central CO2 corridor
- Ca Voi Xanh: first-gas timing "chưa xác định" as of 25 Jul 2026; Dung Quat I, II, III CCGT plants in Dung Quat Economic Zone (Quang Ngai) delayed. HUB-24 (Nguoi Quan Sat, 25 Jul 2026).
- Quang Ngai: 109 power projects, 2,720 MW planned 2026 to 2030 (817 MW small hydro, 676 MW wind, 800 MW solar, 43 MW biomass, 300 MW pumped storage, 15 MW waste-to-energy); Dung Quat refinery expansion; province proposes 9 special mechanisms to the National Assembly for a national refining and energy centre. No CO2, hydrogen or ammonia plans named. HUB-25 (Bao Dau tu, 23 Jul 2026).
- WebSearch budget used: 12 of 12 at this point. Remaining work by WebFetch on known URLs, OpenAlex and internal files only.

#### R8. Decree 263/2026/ND-CP on hi-tech agriculture zones (read via thuvienphapluat, HUB-26)
- Art 4 functions: "Nghiên cứu ứng dụng, thử nghiệm, khảo nghiệm, hoàn thiện và làm chủ công nghệ cao"; "Phát triển và sản xuất thử nghiệm, khảo nghiệm, trình diễn mô hình sản xuất sản phẩm nông nghiệp"; "Ươm tạo công nghệ cao, ươm tạo doanh nghiệp khoa học và công nghệ nông nghiệp". Processing, feed production and microbial products are not listed explicitly as core functions (per the extraction).
- Art 8(2)(c): the provincial People's Committee decides establishment. Art 6: six conditions, no minimum area stated.
- Art 10(4)(d): credit interest support 70% of the contract lending rate, capped at 8% a year (from a fund). Art 11(5): infrastructure land exempt from land financial obligations. Tax: existing law.
- Effective 1 Jul 2026.
- Reading: provinces can now create a zone whose functions (research, pilot production, trials, incubation) match a feed-trial and pilot-fermentation campus. Whether full-scale feed or fermentation plants qualify is not clear from the extraction. [VN-direct] Medium.

#### R9. Residues: rice straw
- Cuong et al. 2021, Scientific Reports 11:792, doi:10.1038/s41598-020-80678-3 (HUB-27): 2019 Sentinel-1 rice mapping; national rice straw about 54 Mt a year (straw-to-grain 1.19), about 50% surplus; Mekong Delta 55% of national straw; power potential 2,565 MW; 24 of 63 former provinces above 30 MW; top three former Kien Giang 245 MW, An Giang 225 MW, Dong Thap 190 MW (all bordering). Current map: former Kien Giang plus An Giang = An Giang, 470 MW, about 18% of national potential (our sum). Lowest: Tay Ninh 1.5 MW, Binh Duong 1.6, Da Nang 1.8 (former units).
- Hung et al. 2016, Field Crops Research 198:16 to 22, doi:10.1016/j.fcr.2016.08.024 (HUB-28): Mekong straw yield 4.72 t/ha; mechanised baling USD 12 to 18 per t straw; dry-season straw already mostly collected for mushrooms, fodder and mulch.
- Link: Decision 1490/QD-TTg (NT-092): 1 million ha low-emission rice with 100% straw collection by 2030. Straw competes with biomass power (NT-083).
