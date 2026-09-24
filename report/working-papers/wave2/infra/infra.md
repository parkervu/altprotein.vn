# INFRA (wave 2): Where in Vietnam to pilot, test, run feed trials and hire

Agent: INFRA, wave 2. Date: 23 September 2026. Source prefix: INF. Wave 1 cross-references: IND (industry), RD (R&D), ECO (ecosystem).
Tool constraint: no WebSearch. Known URLs and site-internal search pages only. About 60 tool calls. Many official sites failed to load (listed in Sources). Province names are post-1 July 2025, with the former unit in brackets.

Data files in this folder:
- `pilot_labs.csv` (32 rows): pilot plants, testing labs, state feed and aquafeed trial centres, university labs, hi-tech parks and hi-tech agriculture zones.
- `talent.csv` (11 rows): 2026 admission quotas (chỉ tiêu tuyển sinh).
- `engineering_suppliers.csv` (9 rows): equipment makers, distributors and local engineering firms.
- `build_csv.py`: script that writes the three CSVs.

---

## Founder-facing table: where to go for what

| You need | Go to first | Also try | What is confirmed | What you must ask them |
|---|---|---|---|---|
| Small pilot runs of soy, tofu, juice or powder products | FIRI Pilot Production and Technology Transfer Centre (FTET), Hanoi (production@firi.vn) | Local tofu/soymilk machine makers (unverified) | Transfers soymilk, tofu and fruit powder processes; has a bag-filling line (INF-02) | Fermenter, dryer and extruder sizes; food-safety certificate; day rate |
| Pilot fermentation (50 to 3,000 L, food grade) | No confirmed public offer anywhere in Vietnam | FIRI (Hanoi); HCMC Biotechnology Center; tolling talks with Vedan or Ajinomoto (wave 1) | Neither FIRI nor the HCMC Biotechnology Center publishes vessel sizes or a contract-fermentation service (INF-01 to INF-05) | Vessel list, food-grade status, whether outside firms can book time |
| Lab space and incubation in the south | Saigon Hi-Tech Park (SHTP): SHTP-IC incubator, SHTP Labs | HCMC Biotechnology Center (Trung My Tay ward) | 913 ha park; 165 projects; biotech for agriculture is an encouraged sector (INF-06) | Wet-lab rent, biosafety level, food-grade rooms |
| Lab space and incubation in the north | Hoa Lac Hi-Tech Park (263 ha R&D zone) | VNUA and HUST labs | Zone areas published; no biotech or food tenant named (INF-25) | Whether any shared bio or food lab exists |
| Proximate analysis, contaminants, mycotoxins, heavy metals, microbiology | FIRI NACEFA (VILAS 259), NIFC (Hanoi, HCMC branch) | Eurofins Sac Ky Hai Dang, QUATEST 3, CASE (HCMC) | NACEFA: 300+ parameters, VILAS 259, LC-MS/MS, 4 HPLC, 3 GC (INF-03). NIFC: ISO/IEC 17025:2017 and OECD GLP (INF-09, INF-10) | Current accreditation scope (method list) for your matrix |
| Testing an imported feed ingredient for conformity | FIRI NACEFA | NIFC | NACEFA is MAE-designated to test imported feed ingredients against QCVN 01-190:2020 and QCVN 01-183:2016 (INF-03) | Turnaround and fee |
| Amino-acid profile | Ask NACEFA, NIFC, Eurofins, CASE | Send abroad (Eurofins group labs) | Not confirmed on any page read | Whether amino acids (incl. tryptophan and sulfur amino acids) are in the VILAS scope |
| Protein digestibility (for PDCAAS or DIAAS) | No Vietnamese commercial lab found | HUST research group (in vitro only); overseas labs | Nothing confirmed. Wave 2 science agent found no Vietnamese DIAAS or PDCAAS study | In vivo DIAAS needs pig ileal trials. Budget for an overseas lab |
| Official feed trial (khảo nghiệm) for pigs or poultry | Central Livestock and Veterinary Trial and Testing Centre I (Hanoi), from 1 Oct 2026 | Centre II (not read) | Decision 3064/QĐ-BNNMT (4 Aug 2026): runs feed trials, testing and certification; may sell services (INF-18) | Protocol, trial length, cost |
| Official aquafeed trial | Aquatic Products Trial, Testing and Inspection Centre: Region I in Can Tho, Region II in HCMC (HQ Hanoi) | Can Tho University wet labs; Nha Trang University; ShrimpVet (private) | Decision 1109/QĐ-BNNMT (25 Apr 2025) lists aquafeed trials and services to clients (INF-28, INF-19) | Whether a new protein needs a trial at all (see regulation2 agent) |
| Research-grade fish and shrimp feeding trials | Can Tho University College of Aquaculture | Nha Trang University; RIA2 (HCMC), RIA3 (Khanh Hoa) | CTU is the top VN publisher on alternative aquafeed proteins (wave 1, RD-10) | Tank count, species, price |
| Graduates in food technology, biotech, aquaculture | Can Tho University (860 places in the three codes, 2026) | VNUA (8,284 total places, 2026); HUST, HCMUT, Nong Lam, IUH, HUIT, NTU (not quantified) | CTU per-programme quotas read from its official table (INF-15) | Intake by programme at other universities |
| Process design and equipment purchase | Rieckermann (turnkey process lines) | HTG Engineering (utilities, cleanroom), TECOVA (GMP validation) | Rieckermann states turnkey food and pharma lines in Vietnam (INF-24); HTG built Ajinomoto utilities (IND-64) | Local stock, service engineers, lead times |
| Extruders (TVP, high-moisture, aquafeed) | Buhler, Clextral, Famsun (Vietnam presence NOT verified) | Regional offices in Singapore, Thailand or China | Nothing confirmed | Nearest application or test centre |
| Land with high-tech incentives | SHTP (HCMC), Hoa Lac (Hanoi); provincial hi-tech agriculture zones | Quang Ninh, Thai Nguyen, Dong Nai (former Binh Phuoc) zones | Decree 263/2026/NĐ-CP (1 July 2026) now lets provinces set up hi-tech agriculture zones (INF-23) | Incentive package in writing |

---

## Headline findings

1. **No Vietnamese facility publicly offers food-grade pilot fermentation to outside firms.** FIRI's pilot centre lists soymilk, tofu, juice and powder processes and a bag-filling line, but no fermenters. The HCMC Biotechnology Center lists agri and aqua services (plant tissue culture, fish fingerlings, aquatic vaccines, shrimp PCR kits), not contract fermentation. [VN-direct] High (what is published); the absence of an offer is Medium (sites may be incomplete). INF-02, INF-04, INF-05.
2. **FIRI's NACEFA is the most specific testing lab found: ISO/IEC 17025 under VILAS 259 (100+ accredited parameters, 300+ offered).** It is MAE-designated to test imported feed ingredients (QCVN 01-190:2020, QCVN 01-183:2016) and MOIT-designated for imported food. [VN-direct] High. INF-03.
3. **No laboratory page read lists an amino-acid profile or a protein-digestibility assay.** NACEFA, NIFC, Eurofins, QUATEST 3 and CASE list proximate, contaminants and microbiology only. PDCAAS and DIAAS work will probably need an overseas lab for now. [VN-direct] Medium (absence on web pages, not confirmed by phone). INF-03, INF-10, INF-11, INF-13, INF-14.
4. **The state feed-trial system was reorganised in 2025 to 2026.** MAE merged livestock trial and veterinary drug testing centres into the Central Livestock and Veterinary Trial and Testing Centre I (Hanoi), by Decision 3064/QĐ-BNNMT of 4 August 2026, effective 1 October 2026. It runs feed trials (khảo nghiệm), testing and certification, and may sell services. [VN-direct] High. INF-18.
5. **Official aquafeed trials sit with one national centre with sub-centres in Can Tho (Region I) and HCMC (Region II).** Its remit covers trials of seed, aquafeed, pond-treatment products and drugs, plus conformity services to clients (Decision 1109/QĐ-BNNMT, 25 April 2025). [VN-direct] High. INF-28, INF-19.
6. **Can Tho University alone will admit 860 students a year across food technology (300), biotechnology (240) and aquaculture (320) in 2026.** Add 340 in aquatic pathology, seafood processing and animal husbandry. These 1,200 places are about 10% of CTU's 11,850 total. [VN-direct] High. INF-15.
7. **A national annual intake for the three programme codes could not be summed.** Nine other admissions sites failed, timed out, or showed quotas only as images. VNUA's total 2026 quota is 8,284 across 23 programme groups, but not split by programme. [VN-direct] High for the totals; the national figure is a gap. INF-15, INF-21.
8. **Saigon Hi-Tech Park is the best-documented southern base: 913 ha, 165 projects, USD 14.08 bn registered.** It has an incubator (SHTP-IC), an R&D centre (SHTP Labs) and a Biotech Center in a separate location. [VN-direct] High. INF-06.
9. **Hoa Lac Hi-Tech Park's published zones total 941.79 ha, including a 263.15 ha R&D zone, not counting the education zone.** A Hanoi management board now runs it. No biotech or food tenant is named on the pages read. [VN-direct] Medium. INF-25, INF-08.
10. **Decree 263/2026/NĐ-CP (effective 1 July 2026) now lets provincial People's Committees set up hi-tech agriculture zones.** It implements the Law on High Technology 2025 (133/2025/QH15). Incentives include priority for state R&D funds and up to 70% interest subsidy on loans to commercialise technology. [VN-direct] Medium (secondary summary of the decree text). INF-23.
11. **Existing hi-tech agriculture zones found by legal title: Quang Ninh (Decision 2263/QĐ-TTg, 2021), Thai Nguyen (Decision 70/QĐ-TTg, 2021), seven provincial zones in Dong Nai (former Binh Phuoc; 2019 and 2020 resolutions), and Phu Yen (now Dak Lak).** Area and focus were not read. [VN-direct] Medium. INF-22.
12. **No local maker of sanitary stainless fermenters, extruders or spray dryers was confirmed in either wave.** Rieckermann offers turnkey process lines in Vietnam. HTG Engineering built food-grade utilities and cleanrooms for Ajinomoto. [VN-direct] Medium. INF-24, IND-64.
13. **Vietnam presence of Buhler, Clextral, Famsun, GEA and Alfa Laval could not be verified.** Their sites were 404, dynamic, or failed TLS or DNS. [general] Low. INF-27, INF-30 to INF-33.
14. **QUATEST 3 opened a Dong Nai branch (Tran Bien ward) on 14 September 2026.** This puts accredited state testing next to the Dong Nai fermentation cluster (Vedan, Ajinomoto). [VN-direct] Medium. INF-13.
15. **No salary survey for food or biotech engineers was reached.** [VN-direct] gap.

---

## Detailed findings

### 1. Pilot and scale-up facilities

| Facility | Location (current; former) | Confirmed capability | Scale | Food grade | Access | Source |
|---|---|---|---|---|---|---|
| FIRI Pilot Production and Technology Transfer Centre (FTET) | Hanoi, Khuong Dinh ward (Thanh Xuan district) | Pilot production and technology transfer; bottled juice, soymilk, tofu, pressed tofu, fruit and vegetable powders; automatic bag-filling | Not published; 5 senior staff | Not stated | On request | INF-02 |
| FIRI Industrial Microbiology Centre and departments | Hanoi | Culture collection; microbial biotech, fermentation, enzyme and protein, carbohydrate departments; HCMC branch | Lab | n/a | Contract R&D | INF-01 |
| HCMC Biotechnology Center | HCMC, Trung My Tay ward (District 12) | Nine divisions incl. microbial and food biotech; lab design consulting; agri and aqua technology transfer | Not published | Not stated | Consulting and transfer | INF-04, INF-05 |
| SHTP Labs | HCMC, Tang Nhon Phu ward (former Thu Duc City) | "Research and technology implementation services" | Not published | Not stated | Service contracts | INF-06, INF-07 |
| HUST food and biotech groups | Hanoi | Protein extraction and characterisation; in vitro digestibility (2025) | Lab | n/a | Collaboration | RD-23 (wave 1) |
| Can Tho University, CAF | Can Tho | Fish and shrimp nutrition and digestibility trials | Tanks | n/a | Collaboration | RD-10 (wave 1) |
| Nha Trang University | Khanh Hoa (former Khanh Hoa) | Fish side-stream protein, marine fish trials | Lab, tanks | n/a | Collaboration | RD-46 (wave 1) |
| VAST Institute of Biotechnology | Hanoi | Microalgae collection; Pichia and A. niger expression | Lab | n/a | Collaboration | RD-21 (wave 1) |
| VNUA | Hanoi (Gia Lam) | Mushrooms, Spirulina, feeding trials | Lab, farm | n/a | Collaboration | RD-20 (wave 1) |

- National key laboratories: not established in this wave. A National Key Laboratory of Gene Technology at VAST IBT is reported from agent knowledge only.
- Nong Lam University, HCMUT and University of Danang pilot plants: not verified.

### 2. Testing labs

| Lab | Accreditation found | Relevant tests confirmed | Amino acids | Digestibility | Source |
|---|---|---|---|---|---|
| FIRI NACEFA (Hanoi) | ISO/IEC 17025, VILAS 259; MAE-designated for imported feed ingredients; MOIT-designated for imported food | Proximate, additives, heavy metals (AAS), aflatoxin, OTA, DON, ZEA, residues (LC-MS/MS), microbiology | Not listed | Not listed | INF-03 |
| NIFC (Hanoi; HCMC branch at Cat Lai port) | ISO/IEC 17025:2017; MOH, MOIT, MAE designations; OECD GLP on BoA list | Food chemistry, microbiology with reference strains, heavy metals, feed and water, proficiency testing | Not listed | Not listed | INF-09, INF-10 |
| Eurofins Sac Ky Hai Dang (HCMC) | "International certificates and ministry designations"; VILAS number not shown | Nutrition, mycotoxins, heavy metals, microbiology, residues | Not listed | Not listed | INF-11, INF-12 |
| QUATEST 3 (HCMC; Dong Nai branch from 14 Sep 2026) | VILAS number not shown | Agricultural products, food, chemicals | Not listed | Not listed | INF-13 |
| CASE (HCMC; Can Tho and central offices) | Not shown | Food and aquatic product testing, metals, dioxin, melamine | Not listed | Not listed | INF-14 |
| SGS Vietnam | Not shown | In Vietnam since 1989 | Not listed | Not listed | INF-26 |

- The BoA accredited-body search (boa.gov.vn/vi/timkiem/tochuc) has about 190 pages of results. It filters by programme, field, province and status, but works through form submission, so the full food-lab list could not be pulled. INF-09.
- Not reached: Warrantek (DNS failure), Intertek, Bureau Veritas, Vinacontrol, QUATEST 1 and 2, Pasteur institutes.

### 3. Feed and aquafeed trial facilities

| Facility | Owner | Location | Role | Source |
|---|---|---|---|---|
| Central Livestock and Veterinary Trial and Testing Centre I | DLPAH (Cục Chăn nuôi và Thú y), MAE | Hanoi | Livestock feed trials, testing, certification; services allowed. Effective 1 Oct 2026 | INF-18 |
| Central Livestock and Veterinary Trial and Testing Centre II | DLPAH, MAE | Not read | Parallel southern centre (Decision 3065/QĐ-BNNMT) | INF-17 |
| Aquatic Products Trial, Testing and Inspection Centre | Department of Fisheries and Fisheries Control, MAE | Hanoi HQ; Region I Can Tho; Region II HCMC | Aquafeed trials, testing, certification; services to clients | INF-28, INF-19 |
| Can Tho University CAF wet labs | CTU | Can Tho | Research-grade feeding and digestibility trials | RD-10 (wave 1) |
| ShrimpVet | Private | HCMC (not verified) | Contract shrimp challenge and additive trials | ECO-70 (wave 1); INF-20 failed |
| RIA2, RIA3 | MAE | HCMC; Khanh Hoa | Aquaculture research; nutrition labs not verified | ria2.org.vn DNS failure |

- No published list of MAE-recognised private feed-trial facilities was found. The 2025 to 2026 decisions point founders to state centres as the default route.
- The legal trigger for a trial is covered by the regulation2 agent. Their finding: an unlisted feed raw material now risks VND 10 to 20 million per material and a 1 to 3 month suspension under Decree 211/2026/NĐ-CP.

### 4. Talent

| University | Food technology (7540101) | Biotechnology (7420201) | Aquaculture (7620301) | Total quota | Year | Source |
|---|---|---|---|---|---|---|
| Can Tho University | 300 (220 standard + 80 high-quality) | 240 (160 + 80 advanced) | 320 (280 + 40 advanced) | 11,850 | 2026 | INF-15 |
| VNUA | offered; not split | offered; not split | offered; not split | 8,284 (23 groups) | 2026 | INF-21 |
| HUST, HCMUT, Nong Lam, NTU, IUH, HUIT (ex-HUFI) | not read | not read | not read | not read | | failed or no numbers |

- **Indicative national intake: not established.** Do not extrapolate from CTU. It is the Mekong's main agricultural university and is likely above average for aquaculture.
- Salary data: none reached. Wave 1 costs agent also flagged this gap.

### 5. Engineering and equipment

- **Confirmed local capability:** Rieckermann offers turnkey food and pharma process lines in Vietnam, including a croissant line, and designed the VNVC vaccine plant (INF-24, IND-31). HTG Engineering did USD 3.88 million of utilities, cold-storage and cleanroom work for Ajinomoto (IND-64). TECOVA offers GMP design and validation (IND-65).
- **Not verified:** Vietnam offices of Buhler, Clextral, Famsun, GEA and Alfa Laval, and bioreactor makers (Sartorius, Eppendorf, Getinge-Applikon, Chinese makers). Every attempt failed, returned 404, or gave no country detail.
- **No local maker of sanitary stainless fermenters, extruders or spray dryers found.**

### 6. Hi-tech parks and hi-tech agriculture zones

| Zone | Province (current; former) | Legal basis | Focus / notes | Source |
|---|---|---|---|---|
| Saigon Hi-Tech Park | HCMC (Thu Duc City) | National hi-tech park | 913 ha; biotech for agriculture, health, environment encouraged | INF-06 |
| Hoa Lac Hi-Tech Park | Hanoi (Thach That) | National hi-tech park | 941.79 ha of listed zones incl. 263.15 ha R&D; ICT and electronics tenants | INF-25 |
| Da Nang Hi-Tech Park | Da Nang (Hoa Vang / Lien Chieu area) | National hi-tech park | Site failed DNS; not verified | INF-29 |
| Quang Ninh hi-tech agriculture zone | Quang Ninh | Decision 2263/QĐ-TTg, 31 Dec 2021 | Not read | INF-22 |
| Thai Nguyen hi-tech agriculture zone | Thai Nguyen (with former Bac Kan) | Decision 70/QĐ-TTg, 15 Jan 2021 | Not read | INF-22 |
| Seven provincial hi-tech agriculture zones | Dong Nai (former Binh Phuoc) | Resolutions 24/NQ-HĐND 2019, 20/NQ-HĐND 2020 | Near cassava and cashew | INF-22 |
| Phu Yen hi-tech agriculture zone | Dak Lak (former Phu Yen) | Investment procedures, Decision 1734/QĐ-UBND, 5 Jun 2026 | Not read | INF-22 |
| Lam Dong zone (proposal) | Lam Dong (former Lam Dong) | Resolution 35/NQ-HĐND 2016 | Status not verified | INF-22 |
| North-Central hi-tech forestry zone | Probably Nghe An | Decisions 509/QĐ-TTg 2021; 746/QĐ-TTg 2025 | Forestry | INF-22 |

- Hanoi has a hi-tech agriculture plan to 2030 (Plan 73/KH-UBND, 12 March 2025; not read). INF-22.
- The HCMC hi-tech agriculture park (Cu Chi) was not reached; it is known from agent knowledge only.

---

## Implications by audience

- **VCs and investors:** Budget for own pilot equipment or an incumbent tolling deal. No public pilot fermentation is on offer. Put protein-quality testing (amino acids, digestibility) abroad into diligence costs and timelines.
- **Policy makers:**
  - A shared food-grade pilot line (fermentation 50 to 3,000 L, extrusion, spray drying) at SHTP or FIRI is still the clearest missing public good.
  - Adding amino-acid and in vitro digestibility (PDCAAS/DIAAS basis) methods to NACEFA's or NIFC's VILAS scope would be cheap. It would also give regulators the data a novel-food dossier needs.
  - Decree 263/2026 lets provinces create hi-tech agriculture zones. Alt-protein pilot plants could be named as an eligible activity.
- **Startups:**
  - For a feed ingredient, open talks early with the Can Tho or HCMC aquafeed sub-centre, or the DLPAH livestock centre in Hanoi. They run the trials that list updates depend on.
  - For routine safety and nutrition panels, use NACEFA (Hanoi) or NIFC, Eurofins, QUATEST 3 or CASE (HCMC). Ask for the method scope first.
- **F&B and feed manufacturers:** QUATEST 3's new Dong Nai branch and NACEFA's feed-import designation shorten testing for ingredient trials near the Dong Nai and Hanoi clusters.
- **Academia:** CTU (860 places a year in the three core codes) and VNUA are the largest confirmed talent pools. A joint CTU and state-centre aquafeed trial programme could qualify results for list updates. This relies on the state-research trial exemption the regulation2 agent reports.
- **International bodies:** Two fundable public goods: (1) a DIAAS or in vitro digestibility capability at a VILAS lab; (2) pilot fermentation and extrusion rooms with open-access rules at SHTP or FIRI.

---

## Disagreements log

| Topic | Claim A | Claim B | Position |
|---|---|---|---|
| CTU 2026 total quota | 11,850 (CTU official table, INF-15) | "About 12,000, up about 1,400 on 2025" (tuyensinh247 aggregator, INF-16) | Use 11,850 from the primary source. The aggregator probably rounded or used a draft plan |
| HCMC Biotechnology Center role | Wave 1: "claimed pilot-scale fermentation and incubation services" (RD-01, Low) | Its own service pages list agri and aqua transfers and lab design only (INF-05) | No published pilot fermentation service. Keep as a lead to verify by phone |
| Hoa Lac managing body and location | Wave 1 and common knowledge: park in Thach That, managed by MOST | Board office in Ha Dong ward under a Hanoi board for hi-tech and industrial parks (INF-25) | The office address is not the park site. Management appears to have moved to Hanoi. Transfer date not verified |
| Hoa Lac area | Common figure about 1,586 ha (agent knowledge) | Listed zones sum to 941.79 ha without the education zone (INF-25) | Report the zone figures. Treat the total as unverified |

---

## Open questions / gaps (cheapest way to close)

1. **Pilot fermenter and extruder inventory.** Send a one-page questionnaire to FIRI FTET (production@firi.vn), the HCMC Biotechnology Center (ttcnsh.shtp@tphcm.gov.vn) and SHTP Labs (ttrd.shtp@tphcm.gov.vn).
2. **Which labs hold amino-acid and digestibility methods in their VILAS scope.** Phone NACEFA (024 38582752), NIFC, Eurofins Sac Ky Hai Dang (+84 28 7107 7879) and CASE. Or query BoA by field "Hóa" and province using the form at boa.gov.vn.
3. **National intake for 7540101, 7420201 and 7620301.** MOET's admissions portal data, or each university's đề án PDF. The HUST, HCMUT, Nong Lam, NTU and IUH pages showed no numbers or failed.
4. **Salaries.** Navigos Group, Talentnet-Mercer or Adecco Vietnam 2026 salary guides.
5. **Location and scope of Centre II (Decision 3065/QĐ-BNNMT) and aquatic Region I (Decision 173/QĐ-TSKN).** Read those two decisions on thuvienphapluat.vn.
6. **Equipment vendors' Vietnam entities.** Check the national business registry (dangkykinhdoanh.gov.vn) for Buhler, GEA, Alfa Laval and Famsun entities, or ask vendors' Singapore offices.
7. **Da Nang Hi-Tech Park and the HCMC hi-tech agriculture park.** Try other official domains, or the Da Nang People's Committee portal.
8. **National key laboratories relevant to food and biotech.** Get the list from MOST (now the merged Ministry of Science and Technology).

## Leads for the next wave

- Decree 263/2026/NĐ-CP and the Law on High Technology 2025: check whether alt-protein or biotech food processing counts as a high-tech agricultural activity (tax and land incentives). Pass to the regulation agent.
- MAE decisions of 2025 and 2026 on trial centres suggest a wider restructuring, with more centres consolidated. A full list of MAE public service units would show every state trial site.
- QUATEST 3's Dong Nai branch (Sept 2026): ask for its food-testing scope.
- NACEFA's feed-import designation: check whether it also covers new microbial feed materials.
- Rieckermann's principals list: identify which bioreactor and dryer brands it can service in Vietnam.

---

## Sources (all accessed 2026-09-23)

- INF-01. Food Industries Research Institute (Viện Công nghiệp Thực phẩm), home page (centres and departments). FIRI, MOIT. Undated, current. https://firi.vn . Gov research institute.
- INF-02. FIRI, Food Production Pilot and Technology Transfer Center (FTET) page. FIRI. Undated. https://www.firi.vn/FTET . Gov research institute; supports pilot capability and contact.
- INF-03. FIRI, National Center for Food Analysis and Certification (NACEFA) page. FIRI. Undated. https://www.firi.vn/NACEFA . Gov lab; supports VILAS 259, designations, instruments, tests.
- INF-04. HCMC Biotechnology Center, home page. HCMC People's Committee. Undated. https://hcmbiotech.com.vn . Gov centre; supports address, divisions, services.
- INF-05. HCMC Biotechnology Center, technology transfer services list. Undated. https://www.hcmbiotech.com.vn/vi/news/dich-vu-chuyen-giao/ . Gov centre; supports the absence of a contract fermentation offer.
- INF-06. Saigon Hi-Tech Park, home page (units, area, projects). SHTP Management Board. Undated, current. https://shtp.hochiminhcity.gov.vn . Gov.
- INF-07. SHTP Labs home page. http://shtplabs.org/ . Returned metadata only. Gov.
- INF-08. Hoa Lac Hi-Tech Park, home page. https://hhtp.gov.vn . Gov; zones, incubator, tenants. (The /vi/about/ page returned 404.)
- INF-09. Bureau of Accreditation (BoA), home page and accredited-organisation search. https://www.boa.gov.vn/vi/timkiem/tochuc . Gov; supports the search structure and NIFC's OECD GLP listing.
- INF-10. National Institute for Food Control (NIFC), home page. MOH. https://nifc.gov.vn . Gov lab.
- INF-11. Eurofins Vietnam, home page and food testing page. https://www.eurofins.vn . Company.
- INF-12. Eurofins Sac Ky Hai Dang page. https://www.eurofins.vn/vn/eurofins-tại-việt-nam/eurofins-sắc-ký-hải-đăng/ . Company; supports the May 2015 JV and contact.
- INF-13. QUATEST 3, home page (HQ; Dong Nai branch opened 14 Sep 2026). https://www.quatest3.com.vn . Gov testing body.
- INF-14. CASE (Center of Analytical Services and Experimentation HCMC), home page. https://www.case.vn . Gov lab.
- INF-15. Can Tho University, "Danh mục ngành và chỉ tiêu tuyển sinh ĐHCQ" 2026. https://tuyensinh.ctu.edu.vn/chuong-trinh-dai-tra/177-thong-tin/841-danh-muc-nganh-va-chi-tieu-tuyen-sinh-dhcq.html . University (primary); supports per-programme quotas and the 11,850 total.
- INF-16. Tuyensinh247, Can Tho University admissions plan 2026. https://diemthi.tuyensinh247.com/de-an-tuyen-sinh/dai-hoc-can-tho-TCT.html . Aggregator; "12,000" figure.
- INF-17. Thuvienphapluat.vn search listing, "công nhận cơ sở khảo nghiệm thức ăn" (titles and URLs of Decisions 173/174/QĐ-TSKN 2025, 1109/QĐ-BNNMT 2025, 3064/3065/QĐ-BNNMT 2026, 215/QĐ-TS-VP 2024). https://thuvienphapluat.vn/page/tim-van-ban.aspx?keyword=công nhận cơ sở khảo nghiệm thức ăn . Law database.
- INF-18. Decision 3064/QĐ-BNNMT (4 Aug 2026) on the Central Livestock and Veterinary Trial and Testing Centre I. MAE. https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Quyet-dinh-3064-QD-BNNMT-2026-chuc-nang-Trung-tam-Khao-nghiem-chan-nuoi-thu-y-Trung-uong-I-722048.aspx . Law.
- INF-19. Decision 174/QĐ-TSKN (19 May 2025) on the Aquatic Products Trial, Testing and Inspection Centre Region II. https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Quyet-dinh-174-QD-TSKN-2025-chuc-nang-Trung-tam-Khao-nghiem-Kiem-dinh-thuy-san-Vung-II-658280.aspx . Law.
- INF-20. ShrimpVet home page. https://shrimpvet.com . Failed TLS verification; not read.
- INF-21. VNUA admissions pages (2026 quota 8,284; 23 groups). https://tuyensinh.vnua.edu.vn/tuyen-sinh-dai-hoc/ . University.
- INF-22. Thuvienphapluat.vn search listing, "khu nông nghiệp ứng dụng công nghệ cao thành lập" (titles and dates of Decree 263/2026, Law on High Technology 2025, Decisions 2263/QĐ-TTg 2021, 70/QĐ-TTg 2021, 509/QĐ-TTg 2021, 746/QĐ-TTg 2025, and provincial resolutions). https://thuvienphapluat.vn/page/tim-van-ban.aspx?keyword=khu nông nghiệp ứng dụng công nghệ cao thành lập . Law database; titles only.
- INF-23. Decree 263/2026/NĐ-CP on hi-tech agriculture zones (1 Jul 2026). Government. https://thuvienphapluat.vn/van-ban/Linh-vuc-khac/Nghi-dinh-263-2026-ND-CP-khu-nong-nghiep-ung-dung-cong-nghe-cao-713724.aspx . Law (read through a summary tool; verify articles).
- INF-24. Rieckermann, home page. https://www.rieckermann.com . Company.
- INF-25. Hoa Lac Hi-Tech Park, zones page (zone areas; managing board address). https://hhtp.gov.vn/vi/zone.html . Gov.
- INF-26. SGS Vietnam, home page. https://www.sgs.com/vi-vn . Company.
- INF-27. FAMSUN corporate home page. https://www.famsungroup.com . Company; no Vietnam detail.
- INF-28. Decision 1109/QĐ-BNNMT (25 Apr 2025) on the Aquatic Products Trial, Testing and Inspection Centre. MAE. https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Quyet-dinh-1109-QD-BNNMT-2025-chuc-nang-Trung-tam-Khao-nghiem-Kiem-dinh-thuy-san-654760.aspx . Law.
- INF-29. Da Nang Hi-Tech Park and Industrial Zones Authority. https://dhpiza.danang.gov.vn . Failed DNS.
- INF-30. Buhler Group locations. https://www.buhlergroup.com/global/en/locations.html . Dynamic page; no Vietnam data returned.
- INF-31. Clextral contact. https://www.clextral.com/contact/ . Failed TLS.
- INF-32. GEA Vietnam page. https://www.gea.com/vi/index.jsp . 404.
- INF-33. Alfa Laval Vietnam. https://www.alfalaval.com.vn . Timed out.

Other failed fetches (no source ID): warrantek.com (DNS), ria2.org.vn (DNS), ts.hust.edu.vn (timeout), tuyensinh.hcmuaf.edu.vn (DNS), ts.hcmuaf.edu.vn, tuyensinh.ntu.edu.vn, tuyensinh.iuh.edu.vn, tuyensinh.huit.edu.vn, hcmut.edu.vn admissions (no quota numbers), vi.wikipedia.org (cache-only), en.wikipedia Hoa Lac (redirected to Hanoi).
Stopping note: admissions and vendor sites returned mostly failures or image-only tables after about 10 attempts, so those threads were stopped.
