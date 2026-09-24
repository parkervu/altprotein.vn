# VERIFY-CO (wave 2): company verification and enrichment

Agent: VERIFY-CO (wave 2). Source prefix: VCO. Date: 23 September 2026.
Data files in this folder: `companies_update.csv` (29 field-level changes or confirmations to wave-1 entries), `companies_new.csv` (6 entities not in wave-1 `companies.csv`).

**Method note.** Wave-2 rules applied: no web search. I used about 70 direct page reads: HKEXnews filings (via the HKEX stock look-up and title-search services), company websites, Vietstock and CafeF company pages, the Early Warning System mirror of IFC disclosures, GFI's ecosystem page and one Dan Tri article already cited by wave 1. Many targets failed: Wikipedia is cache-only here, and the IFC portal, several company sites (C.P., Tongwei, Meat Zero, Cricket One, CJ Vietnam, Ajinomoto sub-pages, Nestle Vietnam) returned 404, DNS or robots errors. Items 7, 8, 9 and 11 of the brief are therefore mostly **unverified**, and I say so below. Terms: *GA* = glutamic acid, the fermentation product refined into MSG; *design capacity* or *nameplate* = what a plant is built to make, not what it makes; *SBM* = soybean meal.

---

## Headline findings

1. **Vedan still does not publish capacity, even in its 2025 annual report.** The HKEX filing gives no MSG, lysine, starch or glucose capacity and no tank count. The last published nameplate is on the company's milestones page: glutamic acid production raised from 140,000 to 180,000 t/yr in 2004. Wave 1 missed this figure and worked from the 1995 value of 36,000 t/yr. [VN-direct] Medium (company, historic nameplate). VCO-01, VCO-03.
2. **Vedan's Vietnam sales fell again in 2025, then recovered in 2026.** Vietnam revenue was USD 154.3 m in 2025 (41.2% of group, down 7.0% from USD 166.0 m). In H1 2026 it was USD 79.6 m, up 8.5%. Group revenue was USD 374.7 m and net profit USD 17.1 m in 2025. Capex was USD 9.8 m, spent on replacing old equipment at a Vietnamese subsidiary, so there is no sign of new capacity. [VN-direct] High (primary filings). VCO-01, VCO-02.
3. **Modelled: Vedan needs about 11 to 17 tanks of 700 m3 for its 2004 GA nameplate.** That is about 7,700 to 11,900 m3 of aerobic volume for GA alone, before lysine and PGA. This sits at the low end of wave 1's national estimate (11,000 to 34,000 m3). [VN-direct] Low (modelled by VERIFY-CO; assumptions in `companies_update.csv`).
4. **Cassava got expensive for fermenters in 2026.** Vedan reports that cassava prices "rose sharply" from Q4 2025 through H1 2026, and that molasses was tight. Any business case that assumes cheap cassava sugar should be re-checked against 2026 prices. [VN-adjacent] High (company commentary, no prices). VCO-01, VCO-02.
5. **Correction: De Heus bought CJ's whole regional feed business, not 17 Vietnamese plants.** Royal De Heus announced the purchase of CJ Feed & Care on 1 October 2025 and completed it on 3 March 2026. The deal covered Vietnam, Indonesia, Cambodia, South Korea and the Philippines, with **17 feed mills in total** across all five countries. The price and the Vietnam share were not disclosed. [VN-direct] High (company releases). VCO-07, VCO-08.
6. **De Heus Vietnam now lists 21 plants: 14 livestock, 6 aquafeed and 1 premix.** Its new Vinh Long mill for marine and cold-water fish opened on 22 July 2026 with **168,000 t/yr** design capacity (company). Wave 1 recorded 84,000 t/yr from trade press. [VN-direct] Medium. VCO-09, VCO-10.
7. **The first commercial insect-meal shrimp feed in Vietnam started in November 2025.** Skretting Vietnam (Nutreco) and Entobel announced a strategic partnership on 26 November 2025. Commercial production of Skretting shrimp feed containing Entobel's H-Meal began that month. No inclusion rate or volume was disclosed. H-Meal's footprint is claimed at about 1 kg CO2 per kg. [VN-direct] Medium (company release). VCO-28.
8. **Entobel still discloses design capacity only.** Its news page has nothing after its B Corp certification (5 February 2025). Mekong Capital still says it is "preparing" an Indonesian expansion, with no site or date. The 11,000 t/yr figure is design capacity, not output. [VN-direct] Medium. VCO-18, VCO-19.
9. **IFC's Entobel project (46903) is an "Upstream Collaboration Agreement" of USD 2.5 m, not a plain equity cheque.** Board date 23 February 2023; project cost USD 32.5 m; status Active. I could not find project 45769 on the IFC portal or its mirror. [VN-direct] Medium (secondary host of IFC data). VCO-20.
10. **VISSAN is about two-thirds state-trading owned, with Masan holding about a quarter.** SATRA (Saigon Trading Group) holds 54.8 m shares (67.8%; data dated August 2020) and Masan MEATLife holds 20.2 m (24.9%; December 2021). VISSAN has traded on UPCoM (VSN) since October 2016. Its market capitalisation was VND 1,092 bn on 23 September 2026. [VN-direct] Medium (filing aggregator; percentages computed). VCO-13, VCO-15.
11. **Confirmed: one Bunge-Wilmar crusher dominates domestic soybean meal.** VAL (Cong ty TNHH Kinh doanh nong san Viet Nam) at Phu My 1 Industrial Park, HCMC (former Ba Ria-Vung Tau), crushes 2.6 Mt of soybeans a year and makes nearly 2 Mt of meal after a USD 100 m second line (December 2025). It targets 30% of domestic soybean meal. It has no food-grade or protein-isolate line on record. [VN-direct] Medium (press, company figures). VCO-16.
12. **GFI's database still holds only 2 Vietnamese companies, both plant-based, founded in 2019 and 2023.** One makes dairy (cheese), the other meat or seafood plus ingredients. GFI lists no Vietnamese researchers, research centres, courses or student groups. Neither founding year matches Emmay (2017) or Kashew (2020), so the two entries are probably firms that wave 1 did not name. [VN-direct] Medium. VCO-21.
13. **There is still no sign that the Minh Phu cultivated-shrimp MOU went further.** The MOU (26 July 2022) had no site, timeline or budget. UMAMI Bioworks, which absorbed Shiok, now lists Asahi Kasei, Maruha Nichiro, Steakholder Foods, Cell-Agritech and Triple Bar as partners, and no Vietnamese firm. [VN-direct] Medium (absence). VCO-22, VCO-23.
14. **INNOHAS shows no Vietnam activity two years after VinaCapital Ventures invested.** Its website mentions only Korean operations. [VN-direct] Low (absence). VCO-31.
15. **An Nhien is a trading company that sells soy and barley TVP chay under its own brand.** The brand dates from late 2014 and the company is registered in HCMC. It is Halal-certified and claims exports to Korea, Europe and North America. No factory or capacity is disclosed. [VN-direct] Medium (company). VCO-26.

---

## Detailed findings

### Verification table (brief items 1 to 13)

| # | Item | Wave-1 claim | Status | New facts | Sources |
|---|---|---|---|---|---|
| 1 | Vedan capacity | MSG refinery 36,000 t/yr (1994); GA 36,000 t/yr (1995); lysine 15,000 t/yr; glucose 140,000 t/yr; 700 m3 tanks, count unknown | **Corrected (partly)** | GA 180,000 t/yr (2004; last published). Caustic soda 80,000 t/yr (2004). AR 2025 and H1 2026 give no capacity and no tank count. Modelled at 11 to 17 tanks of 700 m3 for GA. Vietnam revenue USD 154.3 m (2025), USD 79.6 m (H1 2026). Capex was for replacement only. More than 3,000 staff; 120 ha. | VCO-01 to VCO-05 |
| 2a | CJ bought Cau Tre | Date not verified | **Unverified** | CJ Foods Vietnam calls itself a CJ CheilJedang business unit with the Cau Tre, bibigo, Ong Kim's, Ohya!, Beksul, Hetbahn and Dasida brands. The deal year was not found. It is often said to be 2016, but that is analyst recollection with no source. | VCO-12 |
| 2b | CJ Foods plants | HCMC (former Ba Ria-Vung Tau), Tay Ninh (former Long An) | **Unverified** | No plant list on the CJ Foods site. The CJ Vietnam and "about" pages failed. | VCO-12 |
| 2c | CJ feed sold to De Heus | "Reportedly early 2026; 17 plants" (Low) | **Corrected** | Announced 1 Oct 2025, completed 3 Mar 2026. Five countries, 17 mills in total, price not disclosed. | VCO-07, VCO-08 |
| 3a | VISSAN ownership and plants | "State-linked; SATRA, not verified"; plants not listed | **Confirmed (ownership); plants unverified** | SATRA 67.8%, Masan MEATLife 24.9% (2020 and 2021 data). Charter capital VND 809.05 bn (May 2024). Founded 1974 according to Vietstock (the company site says 1970). About 100 t of livestock and poultry a day. The website has no plant list. | VCO-13 to VCO-15 |
| 3b | Ajinomoto plants and co-products | Bien Hoa (MSG 150,000 t/yr, EIA 2023); Long Thanh; liquid and solid feed co-products | **Unverified** | Ajinomoto Vietnam's "about" and environment pages returned 404 or had no data. | none |
| 4 | Soybean crushers | VAL Phu My 2.6 Mt/yr (formulation wave) | **Confirmed**; other crushers **unverified** | Legal name, industrial park and ward confirmed. Nearly 2 Mt meal. Target 30% of the SBM market. The Calofic (Wilmar) site had no content. The northern crusher that USDA mentions is still unnamed. | VCO-16 |
| 5 | Vinasoy / QNS capacity 2025 | 390 m L/yr (2022); 3 plants | **Unverified** for 2025 | Vinasoy site, CafeF and Vietstock returned no capacity figure. Vietstock history: first Bac Ninh plant in 2012; second Bac Ninh plant and a soy research centre in 2013. Soybean sourcing not found. | VCO-17 |
| 6 | Entobel 2025-2026 | 11,000 t/yr design; Indonesia planned; Skretting partner (Low); IFC USD 2.5 m | **Confirmed and enriched** | Skretting partnership 26 Nov 2025, with commercial shrimp feed from Nov 2025. B Corp (Feb 2025). IFC 46903 is an "Upstream Collaboration Agreement". Output, feedstock volumes and Indonesia details not disclosed. IFC 45769 not found. | VCO-18 to VCO-20, VCO-28 |
| 7 | Cricket One | Last evidence Oct 2024 | **Unverified** | Company site timed out. Nothing new. | none |
| 8 | Plant-based makers | An Nhien, Au Lac, Thoai An, LC Foods, Thanh Dung, Kashew, Deep Blue Island, Emmay, Ong Tempeh, Vinamit | **An Nhien confirmed and enriched; others unverified** | An Nhien: see headline 15. LC Foods: tax code 3702777811 (the prefix 37 suggests former Binh Duong, now HCMC; inference only). Registry look-up failed. No Vietnamese TVP or wheat-gluten *manufacturer* found. An Nhien makes or sells TVP-based products but is registered as a trader. | VCO-26 |
| 9 | Spirulina (Vinh Hao etc.) | Small, health-food producers | **Not re-checked** (call budget) | none | none |
| 10 | Minh Phu-UMAMI; Vinh Hoan stakes; INNOHAS | MOU dormant; stakes 2021; INNOHAS no launch | **Confirmed (absence)** | MOU terms confirmed (26 Jul 2022). No Vietnamese partner on UMAMI's site. No 2024-2026 alt-protein update on the Vinh Hoan investor page. No Vietnam on INNOHAS's site. | VCO-22 to VCO-24, VCO-31 |
| 11 | Multinational brands | OmniFoods, Beyond in 2019-2023 via importers | **Unverified** | harvestgourmet.com redirects to a domain-for-sale page, which suggests Nestle's brand site has lapsed. Nestle Vietnam, Meat Zero and C.P. Vietnam pages failed. OmniFoods, Beyond and Vegetarian Butcher were not reached. | VCO-25 |
| 12 | Feed majors 2026 | De Heus 23 facilities; C.P. 21 plants; Haid Vinh Long 650 kt; Grobest 2 plants in Dong Nai; UPV, Tongwei, Skretting unlocated | **Partly corrected and enriched** | De Heus: 21 plants (14/6/1), Vinh Long mill 168 kt/yr. Uni-President: sites in HCMC (former Binh Duong), Dong Thap (former Tien Giang), Khanh Hoa (former Ninh Thuan) and Da Nang (former Quang Nam), founded 1999. Skretting: HCMC office, no plant data; launched Jade+ and LifeStart in April 2026. Grobest: operating, no plant data. C.P., Tongwei and Haid sites failed or were not reached. | VCO-09 to VCO-11, VCO-27 to VCO-30 |
| 13 | GFI database | 2 Vietnamese companies, names not rendered | **Enriched** | Both plant-based; founded 2019 and 2023; one dairy (cheese), one meat and ingredients. No Vietnamese research actors. The company list URL returned 404. | VCO-21 |

### Vedan detail (item 1)

Vedan revenue by product, 2025 (group level, VCO-01):

| Product | USD m | Share |
|---|---|---|
| MSG and seasonings | 202.4 | 54.0% |
| Native and modified starch, starch sugar | 63.5 | 17.0% |
| Coffee beans | 46.8 | 12.5% |
| Fertiliser and feed | 27.1 | 7.2% |
| Specialty chemicals | 19.6 | 5.2% |
| Other | 15.2 | 4.1% |
| **Total** | **374.7** | 100% |

H1 2026 (VCO-02): group revenue USD 205.6 m (up 11.6%); net profit USD 8.9 m; MSG and seasonings 49.0%; starch 18.7%; coffee 16.7%; fertiliser and feed 6.5%; specialty chemicals 5.6%. Capex USD 4.3 m.

Published nameplates for Vietnam, from the milestones page (VCO-03). All are historic and none is confirmed as current:

| Year | Line | Nameplate |
|---|---|---|
| 1994 | MSG refinery | about 36,000 t/yr |
| 1994 | Native starch (Phuoc Thai) | about 72,000 t/yr |
| 1995 | GA fermentation (initial) | about 36,000 t/yr |
| 1995 | Glucose syrup | about 140,000 t/yr |
| 1996 and 1998 | Lysine phases I and II | 7,200 rising to about 15,000 t/yr |
| 1998 | Native starch, Phuoc Long (Dong Nai, former Binh Phuoc) | about 72,000 t/yr |
| 1998 and 2000 | Modified starch phases I and II | 10,000 and 30,000 t/yr |
| 2000 and 2001 | Native starch, 3rd and 4th lines | 36,000 t/yr each |
| 2004 | GA production | **140,000 raised to 180,000 t/yr** |
| 2004 | Caustic soda | 60,000 raised to 80,000 t/yr |

Tank model (Low; modelled). To make 180,000 t/yr of GA, assume a titre of 150 to 180 g/L, 75 to 80% of the 700 m3 in use, 150 to 180 batches per tank per year and 90% recovery. That needs about 11 to 17 tanks, or about 7,700 to 11,900 m3. The model assumes all tanks are 700 m3. Older tanks may be smaller, which would mean more tanks.

### Feed majors (item 12): where each one stands

| Company | Wave 1 | Now | Confidence |
|---|---|---|---|
| De Heus | 23 facilities (2023); CJ plants "reportedly" | 21 plants (14 livestock, 6 aqua, 1 premix). CJ Feed & Care deal closed 3 Mar 2026. Vinh Long marine mill 168 kt/yr (Jul 2026). Shrimp feed mill opened 4 Mar 2024; marine R&D facility in Vinh Long opened 29 Jul 2024 | Medium to High |
| C.P. Vietnam | 21 plants; Ca Mau 124.8 kt/yr (Aug 2026) | Not re-verified (site unavailable) | n/a |
| Haid / Sheng Long | Vinh Long 650 kt/yr; Hai Phong (former Hai Duong) 700 kt claimed | Not reached | n/a |
| Skretting | About 100 kt/yr; Entobel partner | Entobel partnership confirmed (26 Nov 2025). Office in HCMC. Plants not stated | Medium |
| Grobest | 2 plants in Dong Nai | Operating in Vietnam. 2024 sustainability report released 30 Mar 2026. No plant data | Low |
| Uni-President | Not located | 4 sites (see table above); founded 1999 | Medium |
| Tongwei | Not located | Site DNS failure | n/a |

---

## Implications by audience

- **VCs and investors:** Vedan's flat capex and falling Vietnam MSG sales (down 7% in 2025) support the case for a tolling or JV approach on idle aerobic capacity. But it is still undisclosed how much capacity is idle, and Vedan's 2026 recovery reduces the urgency. The De Heus-CJ deal concentrates feed buying power further: one buyer now runs 21 Vietnamese plants.
- **Policy makers:** The first commercial insect-meal shrimp feed (Skretting, November 2025) is the live test case for how novel feed ingredients are registered and labelled. It is worth asking MAE how the H-Meal feed was registered.
- **Startups:** Feed routes to market are now clearer. Skretting has already commercialised a novel protein with Entobel. De Heus owns a Vinh Long R&D facility and a new high-protein marine feed mill, which needs 40 to 50% protein feeds. These are the two most likely first buyers for a single-cell or insect protein trial.
- **F&B and feed manufacturers:** Higher cassava prices (Q4 2025 to H1 2026) affect both starch-based chay binders and any fermentation feedstock plan.
- **International bodies:** GFI's Vietnam page lists no research actors at all. A short census of Vietnamese university groups would fill an obvious gap.

---

## Disagreements log

| Topic | Claim A | Claim B | Position |
|---|---|---|---|
| De Heus Vinh Long marine mill capacity | 84,000 t/yr (wave-1 trade press) | 168,000 t/yr (De Heus global release, 22 Jul 2026; VCO-10) | Use 168,000 t/yr as the company-stated design capacity. 84,000 may be phase 1. Unresolved. |
| CJ deal scope | "De Heus has 17 plants from CJ" (wave 1, implied Vietnam) | 17 mills across five countries (VCO-07, VCO-08) | Claim B. Vietnam mill count unknown. |
| Vedan GA capacity | 36,000 t/yr (1995; used in wave 1) | 180,000 t/yr (2004; VCO-03) | Claim B is the later nameplate. Neither is confirmed current. |
| VISSAN founding year | 1970 (company homepage, ECO-32) | 1974 (Vietstock, VCO-13) | Not material. Keep the company figure. |
| De Heus in Vietnam | "Since 2009" (VCO-08) | "18+ years" (VCO-09, 2026, i.e. about 2008) | Rounding. Not material. |
| Pham Gia Phat registration | Brand founded late 2014; tax code 0312857463 fits a 2014 HCMC registration | Page states 28 May 2019 | The 2019 date is probably a change of registration. Low. |

---

## Open questions and gaps (cheapest way to close each)

1. **Vedan's current capacity and idle time.** HKEX filings do not disclose them. Read Vedan's environmental permit on the MAE portal, or ask Vedan's Starch Derivatives R&D team directly.
2. **Year and terms of CJ's Cau Tre purchase.** Check CJ CheilJedang's 2016 disclosures on Korea's DART system, or the Cau Tre shareholder filings.
3. **Which Vietnamese mills came with CJ Feed & Care, and whether the 21 De Heus plants include them.** Ask De Heus Vietnam communications.
4. **Plant lists for VISSAN, CJ Foods Vietnam and Ajinomoto.** Read their 2025 annual or sustainability reports (VISSAN publishes to UPCoM).
5. **Vinasoy 2025 capacity and soybean origin.** Read the QNS 2025 annual report (UPCoM filing).
6. **Other soybean crushers (north and south).** Ask the Vietnam Feed Association, or read the USDA GAIN Oilseeds Annual for 2026.
7. **Skretting's H-Meal inclusion rate and volumes.** Ask Skretting Vietnam or Entobel. This is the key figure for how much of the Vinh Hoan and Skretting demand Entobel's capacity covers.
8. **IFC project 45769.** Look it up in the IFC project search directly (the site is JavaScript-only and not readable here).
9. **Cricket One, spirulina producers and multinational brands.** Not reached this wave. A phone check or site visit is cheapest.
10. **The names of GFI's 2 Vietnamese companies.** Email GFI APAC or download the database spreadsheet.

---

## Leads for the next wave

- Vedan's "fertiliser and feed" segment (USD 27.1 m in 2025) is an existing fermentation by-product feed business. Its product sheets (CMS, Vedagro pellets) would give a local price benchmark for single-cell protein.
- De Heus's Vinh Long aquaculture R&D facility (opened July 2024) is a possible trial site for novel aquafeed proteins, alongside ShrimpVet.
- Uni-President Vietnam also mills wheat flour. Check whether it, or any other flour miller, extracts or sells wheat gluten.
- Skretting's Jade+ launch (23 April 2026). Check whether it contains insect meal.
- ASC Feed certification of De Heus pangasius and tilapia feeds (August 2026). Responsible-sourcing rules could favour traceable novel proteins.

---

## Sources

All accessed 2026-09-23.

- VCO-01. Vedan International (Holdings) Ltd. "Annual Report 2025." HKEXnews, 22 Apr 2026. https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0422/2026042201564.pdf . Revenue by market and product, capex, raw-material commentary; no capacity. Company filing (primary).
- VCO-02. Vedan International (Holdings) Ltd. "Interim Results Announcement for the six months ended 30 June 2026." HKEXnews, 25 Aug 2026. https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0825/2026082502313.pdf . H1 2026 revenue, Vietnam share, cassava and molasses. Company filing (primary).
- VCO-03. Vedan International. "Milestones." Undated. http://www.vedaninternational.com/aboutvedan/milestones.htm . Vietnam nameplates 1994 to 2004, including GA 180,000 t/yr (2004). Company.
- VCO-04. Vedan Vietnam. "Company information." Undated. https://vedan.com.vn/en/gioi-thieu-cong-ty/ . 120 ha site, more than 3,000 staff, list of plants, ports. Company.
- VCO-05. Vedan Vietnam. Home page. Undated. https://vedan.com.vn/en/home-page/ . 700 m3 per tank; product lines. Company.
- VCO-06. HKEXnews title search, Vedan Int'l (stock 02317, stockId 6280), 2025 to 2026 filings. https://www1.hkexnews.hk/search/titleSearchServlet.do?...stockId=6280 . Filing list including Annual Report 2024 (/sehk/2025/0423/2025042302065.pdf) and Interim Report 2026 (/sehk/2026/0916/2026091601129.pdf). Exchange index.
- VCO-07. Royal De Heus. "Royal De Heus expands its Asian footprint with the acquisition of CJ Feed & Care." 1 Oct 2025. https://www.deheus.com/articles/news/royal-de-heus-expands-its-asian-footprint-with-the-acquisition-of-cj-feed-care . Deal scope, 17 mills, five countries. Company.
- VCO-08. Royal De Heus. "De Heus successfully completes acquisition of CJ Feed & Care, marking a significant expansion in Asia." 3 Mar 2026. https://www.deheus.com/articles/news/de-heus-successfully-completes-acquisition-of-cj-feed-care-marking-a-significant-expansion-in-asia . Completion. Company.
- VCO-09. De Heus Vietnam. Home page. Accessed 2026. https://deheus.com.vn/ . 21 plants (14/6/1); branches; ASC certification news (Aug 2026). Company.
- VCO-10. Royal De Heus. "De Heus expands aquaculture capabilities with new marine and cold-water fish feed mill." 22 Jul 2026. https://www.deheus.com/articles/news/de-heus-expands-aquaculture-capabilities-with-new-marine-and-cold-water-fish-feed-mill . Vinh Long, 168,000 t/yr. Company.
- VCO-11. Royal De Heus. News listing. Accessed 2026. https://www.deheus.com/articles/news . Dates of the Vietnam shrimp feed mill opening (4 Mar 2024) and the Vinh Long R&D facility (29 Jul 2024). Company.
- VCO-12. CJ Foods Vietnam. Home page. Accessed 2026. https://cjfoods.com.vn/ . Brands; HQ address; no history or plant data. Company.
- VCO-13. Vietstock Finance. "VSN: Ho so doanh nghiep" (company profile). Accessed 2026. https://finance.vietstock.vn/VSN/ho-so-doanh-nghiep.htm . Shareholders, charter capital, history. Financial-data aggregator (of filings).
- VCO-14. VISSAN. Home page. Accessed 2026. https://www.vissan.com.vn/ . Legal name, HQ, registration number; no plant list. Company.
- VCO-15. CafeF. "VSN" stock page. Accessed 23 Sep 2026. https://cafef.vn/du-lieu/upcom/vsn-cong-ty-co-phan-viet-nam-ky-nghe-suc-san.chn . Market capitalisation. Financial data.
- VCO-16. Dan Tri. "TPHCM co to hop ep dau dau nanh quy mo hang dau Dong Nam A." 10 Dec 2025. https://dantri.com.vn/kinh-doanh/tphcm-co-to-hop-ep-dau-dau-nanh-quy-mo-hang-dau-dong-nam-a-20251210205324484.htm . VAL legal name, location, capacity, USD 100 m line, 30% target. Press.
- VCO-17. Vietstock Finance. "QNS: Ho so doanh nghiep." Accessed 2026. https://finance.vietstock.vn/QNS/ho-so-doanh-nghiep.htm . Vinasoy plant history 2012 to 2013; capacity paywalled. Financial-data aggregator.
- VCO-18. Entobel. News page and "Entobel is now a certified B Corp." 5 Feb 2025. https://www.entobel.com/en/entobel-is-now-a-certified-b-corp-driving-impact-one-insect-at-a-time/ . B Corp; no output data. Company.
- VCO-19. Mekong Capital. "Entobel." Accessed 2026. https://www.mekongcapital.com/our-investment/entobel-2/ . Capacity, staff, Indonesia "preparing". Investor.
- VCO-20. Early Warning System (Rights in Development). "CnC-Entobel (IFC-46903)." Accessed 2026. https://ewsdata.rightsindevelopment.org/projects/46903-cnc-entobel/ . IFC USD 2.5 m Upstream Collaboration Agreement; USD 32.5 m project cost; Active. DFI disclosure (secondary host).
- VCO-21. GFI. "Country: Vietnam - The alternative protein ecosystem." Accessed 2026. https://ecosystem.gfi.org/country/vietnam/ . 2 plant-based companies (2019, 2023); no research actors. Advocacy database.
- VCO-22. The Investor. "'Shrimp king' Minh Phu, Shiok Meats to develop R&D facility in Vietnam." 28 Jul 2022. https://theinvestor.vn/shrimp-king-minh-phu-shiok-meats-to-develop-rd-facility-in-vietnam-d1264.html . MOU date and terms. Press.
- VCO-23. UMAMI Bioworks. Home page. Accessed 2026. https://www.umamibioworks.com/ . Partner list (no Vietnamese firm). Company.
- VCO-24. Vinh Hoan Corp. Investor updates page. Accessed 2026. https://www.vinhhoan.com/investor_updates/ . No 2024 to 2026 alt-protein updates visible. Company (listed).
- VCO-25. harvestgourmet.com. Redirect to a GoDaddy domain-for-sale page, observed 23 Sep 2026. https://www.harvestgourmet.com/ . Brand web presence lapsed. Observation.
- VCO-26. An Nhien Foods (Pham Gia Phat). "An Nhien Foods." Accessed 2026. https://annhienfood.com.vn/pages/an-nhien-foods . Founding, address, inputs, Halal, channels, exports. Company.
- VCO-27. Skretting Vietnam. Home page and news listing. Accessed 2026. https://www.skretting.com/vi-vn/ . Office address; 2026 product launches; Entobel item. Company.
- VCO-28. Skretting Vietnam. "Skretting Viet Nam va Entobel hop tac chien luoc nham thuc day san xuat thuc an tom ben vung." 26 Nov 2025. https://www.skretting.com/vi-vn/tin-tuc-su-kien/skretting-viet-nam-hop-tac-voi-entobel-thuong-mai-hoa-thuc-an-tom-tu-bot-con-trung/ . Partnership; commercial production from Nov 2025; CO2 claim. Company.
- VCO-29. Uni-President Vietnam. Home page. Accessed 2026. https://www.uni-president.com.vn/ . Founding 1999; four sites; business lines. Company.
- VCO-30. Grobest. Home page. Accessed 2026. https://www.grobest.com/ . Countries; 2024 sustainability report released 30 Mar 2026. Company.
- VCO-31. INNOHAS Co., Ltd. Home page. Accessed 2026. https://www.innohas.com/ . No Vietnam mention. Company.

**Fetches that failed (for the record; not retried by other means):** vedaninternational.com investor pages (robots error); Wikipedia (Vedan, CJ CheilJedang; cache-only or wrong page); cjvietnam.net (DNS); cjfoods.com.vn "about" page (robots error); vissan.com.vn "about" page (404); ajinomoto.com.vn "about" and environment pages (404 or no data); calofic.com.vn (empty); vinasoy.com (metadata only); cafef QNS (no data); disclosures.ifc.org 45769 and 46903 (404); EWS 45769 (not found); cricketone.com (timeout); ecosystem.gfi.org company list (404); nestle.com.vn brand page (404); cp.com.vn (unavailable); meatzero.com and tongwei.com.vn (DNS); masothue.com for LC Foods (404).
