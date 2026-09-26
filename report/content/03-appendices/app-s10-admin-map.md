---
id: app-s10-admin-map
title: "S10. Administrative map after the 2025 reforms"
short_title: "S10. Admin map"
section: appendix
order: 30
summary: "The 34 provincial-level units that replaced Vietnam's 63 on 1 July 2025, where the alternative-protein clusters now sit, the end of the district tier, the 2025 ministry mergers, and practical rules for reading older statistics and addresses."
audiences: [investors, startups, manufacturers, policy, research, international]
reading_time_min: 15
key_numbers: [kn-provinces-count]
related_data: [provinces.csv, ministries.csv, facilities.csv, feedstocks.csv, companies.csv]
related_pages: [ch04-asset-map, ch05-industrial-base, app-s4-feedstocks, app-s5-facilities, app-s9-regulation, app-f1-outlook, app-s1-directory]
charts: []
---

# S10. Administrative map after the 2025 reforms

Vietnam redrew its provincial map and merged several ministries in 2025. Every location and agency name in this report uses the new map and the new names. This appendix is the reference for doing so. It is built from `provinces.csv` (34 rows) and `ministries.csv` (6 rows).

> **Method note.** The provincial list, the former units, area and population are taken from Resolution 202/2025/QH15 itself. The former unit that hosts each new administrative centre comes from Party Resolution 60-NQ/TW. The ward names of the centres come from English Wikipedia, because the resolutions name only the former province [@GT-01; @GT-02; @GT-03] {VN-direct|High}. Area and population are the Government dossier figures stated in the resolution; the resolution does not state their reference date.

## S10.1 What changed, and when

| Date | Change | Instrument | Evidence |
|---|---|---|---|
| 18 Feb 2025 | Government restructured to 14 ministries and 3 ministerial-level agencies, operating from 1 March 2025 | Resolution 176/2025/QH15 | [@GT-04] {VN-direct\|High} |
| 12 Apr 2025 | Party decision on the provincial mergers and the location of each new political-administrative centre; district-level units to end; commune-level units to be cut by 60 to 70% | Resolution 60-NQ/TW | [@GT-02] {VN-direct\|High} |
| 12 Jun 2025 | National Assembly resolution: 23 merger clauses covering 52 former units, and 11 units unchanged | Resolution 202/2025/QH15 | [@GT-01] {VN-direct\|High} |
| 1 Jul 2025 | The 34 new provincial authorities "officially operate"; the district tier ends; local government has two tiers, province and commune | Resolution 202/2025/QH15 Art 2; Resolution 60-NQ/TW | [@GT-01; @GT-02] {VN-direct\|High} |

The result is 34 provincial-level units: 28 provinces and 6 centrally governed cities (Hanoi, Hue, Hai Phong, Da Nang, Ho Chi Minh City and Can Tho) [@GT-01] {VN-direct|High}. The 11 unchanged units are Hanoi, Hue, Cao Bang, Dien Bien, Ha Tinh, Lai Chau, Lang Son, Nghe An, Quang Ninh, Thanh Hoa and Son La [@GT-01] {VN-direct|High}. We did not verify the final number of communes.

> **Correction.** Earlier drafts placed Long An inside Ho Chi Minh City. Resolution 202/2025/QH15 Art 1(18) merges Long An into **Tay Ninh**, whose centre is in former Long An. Binh Duong and Ba Ria-Vung Tau did merge into Ho Chi Minh City, and Binh Phuoc into Dong Nai [@GT-01] {VN-direct|High}. A machine summary also reported "8 municipalities"; the resolution lists 6 centrally governed cities. See DG-123 and DG-124.

## S10.2 The 34 provincial-level units

Area and population as stated in Resolution 202/2025/QH15 for merged units; not given there for unchanged units [@GT-01; @GT-02; @GT-03] {VN-direct|High}.

| ID | New unit | Type | Administrative centre (former unit) | Former units | Area (km2) | Population |
|---|---|---|---|---|---|---|
| PRV-001 | Tuyen Quang | Province | Minh Xuan ward (Tuyen Quang) | Ha Giang; Tuyen Quang | 13,795.5 | 1,865,270 |
| PRV-002 | Lao Cai | Province | Yen Bai ward (Yen Bai) | Yen Bai; Lao Cai | 13,256.92 | 1,778,785 |
| PRV-003 | Thai Nguyen | Province | Phan Dinh Phung ward (Thai Nguyen) | Bac Kan; Thai Nguyen | 8,375.21 | 1,799,489 |
| PRV-004 | Phu Tho | Province | Viet Tri ward (Phu Tho) | Vinh Phuc; Hoa Binh; Phu Tho | 9,361.38 | 4,022,638 |
| PRV-005 | Bac Ninh | Province | Bac Giang ward (Bac Giang) | Bac Giang; Bac Ninh | 4,718.6 | 3,619,433 |
| PRV-006 | Hung Yen | Province | Pho Hien ward (Hung Yen) | Thai Binh; Hung Yen | 2,514.81 | 3,567,943 |
| PRV-007 | Hai Phong | City | Thuy Nguyen ward (Hai Phong) | Hai Phong; Hai Duong | 3,194.72 | 4,664,124 |
| PRV-008 | Ninh Binh | Province | Hoa Lu ward (Ninh Binh) | Ha Nam; Nam Dinh; Ninh Binh | 3,942.62 | 4,412,264 |
| PRV-009 | Quang Tri | Province | Dong Hoi ward (Quang Binh) | Quang Binh; Quang Tri | 12,700 | 1,870,845 |
| PRV-010 | Da Nang | City | Hai Chau ward (Da Nang) | Da Nang; Quang Nam | 11,859.59 | 3,065,628 |
| PRV-011 | Quang Ngai | Province | Cam Thanh ward (Quang Ngai) | Kon Tum; Quang Ngai | 14,832.55 | 2,161,755 |
| PRV-012 | Gia Lai | Province | Quy Nhon ward (Binh Dinh) | Binh Dinh; Gia Lai | 21,576.53 | 3,583,693 |
| PRV-013 | Khanh Hoa | Province | Nha Trang ward (Khanh Hoa) | Ninh Thuan; Khanh Hoa | 8,555.86 | 2,243,554 |
| PRV-014 | Lam Dong | Province | Xuan Huong-Da Lat ward (Lam Dong) | Dak Nong; Binh Thuan; Lam Dong | 24,233.07 | 3,872,999 |
| PRV-015 | Dak Lak | Province | Buon Ma Thuot ward (Dak Lak) | Phu Yen; Dak Lak | 18,096.4 | 3,346,853 |
| PRV-016 | Ho Chi Minh City | City | Sai Gon ward (Ho Chi Minh City) | Ho Chi Minh City; Ba Ria-Vung Tau; Binh Duong | 6,772.59 | 14,002,598 |
| PRV-017 | Dong Nai | Province | Tran Bien ward (Bien Hoa, Dong Nai) | Binh Phuoc; Dong Nai | 12,737.18 | 4,491,408 |
| PRV-018 | Tay Ninh | Province | Long An ward (Tan An, Long An) | Long An; Tay Ninh | 8,536.44 | 3,254,170 |
| PRV-019 | Can Tho | City | Ninh Kieu ward (Can Tho) | Can Tho; Soc Trang; Hau Giang | 6,360.83 | 4,199,824 |
| PRV-020 | Vinh Long | Province | Long Chau ward (Vinh Long) | Ben Tre; Tra Vinh; Vinh Long | 6,296.2 | 4,257,581 |
| PRV-021 | Dong Thap | Province | My Tho ward (Tien Giang) | Tien Giang; Dong Thap | 5,938.64 | 4,370,046 |
| PRV-022 | Ca Mau | Province | Tan Thanh ward (Ca Mau) | Bac Lieu; Ca Mau | 7,942.39 | 2,606,672 |
| PRV-023 | An Giang | Province | Rach Gia ward (Kien Giang) | Kien Giang; An Giang | 9,888.91 | 4,952,238 |
| PRV-024 | Hanoi | City | Hoan Kiem ward | Unchanged | not stated | not stated |
| PRV-025 | Hue | City | Thuan Hoa ward | Unchanged | not stated | not stated |
| PRV-026 | Cao Bang | Province | Thuc Phan ward | Unchanged | not stated | not stated |
| PRV-027 | Dien Bien | Province | Dien Bien Phu ward | Unchanged | not stated | not stated |
| PRV-028 | Ha Tinh | Province | Thanh Sen ward | Unchanged | not stated | not stated |
| PRV-029 | Lai Chau | Province | Tan Phong ward | Unchanged | not stated | not stated |
| PRV-030 | Lang Son | Province | Luong Van Tri ward | Unchanged | not stated | not stated |
| PRV-031 | Nghe An | Province | Truong Vinh ward | Unchanged | not stated | not stated |
| PRV-032 | Quang Ninh | Province | Ha Long ward | Unchanged | not stated | not stated |
| PRV-033 | Thanh Hoa | Province | Hac Thanh ward | Unchanged | not stated | not stated |
| PRV-034 | Son La | Province | Chieng Coi ward | Unchanged | not stated | not stated |

Unchanged units were not reorganised at provincial level, but their communes were still reorganised [@GT-01] {VN-direct|High}.

## S10.3 Seven units named after one former province and run from another

In 7 merged units, the name comes from one former province and the administrative centre from another. This matters for company addresses and for which office handles a licence [@GT-02; @GT-03] {VN-direct|High}.

| New unit | Centre is in former | Centre ward |
|---|---|---|
| Tay Ninh | Long An | Long An ward (former Tan An) |
| An Giang | Kien Giang | Rach Gia ward |
| Dong Thap | Tien Giang | My Tho ward |
| Gia Lai | Binh Dinh | Quy Nhon ward |
| Quang Tri | Quang Binh | Dong Hoi ward |
| Lao Cai | Yen Bai | Yen Bai ward |
| Bac Ninh | Bac Giang | Bac Giang ward |

## S10.4 Where the alternative-protein clusters now sit

The clusters below are the ones this report relies on. Each row gives the current unit, the former unit in brackets, and the evidence that places the activity there. Details are in [[app-s4-feedstocks]] and [[app-s5-facilities]].

| Cluster | Current unit (former unit) | What is there | Evidence |
|---|---|---|---|
| Cassava starch and pulp | Tay Ninh (former Tay Ninh) | About 61,000 ha of cassava, 68 starch factories and 6.4 Mt of root capacity in the former province; the natural pilot site for pulp fermentation | [@FS-03] {VN-direct\|Medium} |
| Food and fermentation plants | Tay Ninh (former Long An) | Saf-Viet (Lesaffre) yeast plant; VNVC vaccine and biologics plant; the new provincial centre | [@IND-17; @IND-31; @GT-02] {VN-direct\|Medium} |
| Other cassava areas | Gia Lai (with former Binh Dinh and the Quy Nhon export port); Dak Lak; Quang Ngai (with former Kon Tum); Dong Nai (former Binh Phuoc) | Root production and starch factories; no ranked provincial table found | [@FS-11; @FS-22; @FS-07] {VN-direct\|Medium} |
| Industrial fermentation | Dong Nai (former Dong Nai, Bien Hoa area) | Vedan's Phuoc Thai MSG and lysine complex; Ajinomoto's Bien Hoa and Long Thanh plants; AB Mauri's La Nga yeast plant; a QUATEST 3 testing branch in Tran Bien ward from 14 Sep 2026 | [@IND-01; @IND-04; @IND-08; @IND-15; @INF-13] {VN-direct\|Medium} |
| Starch and ethanol | Dong Nai (former Binh Phuoc) | Vedan's Phuoc Long tapioca starch plant; the Binh Phuoc bio-ethanol plant | [@IND-04; @IND-20] {VN-direct\|Medium} |
| Insect protein, soybean crushing, breweries, industrial parks | Ho Chi Minh City (former Ba Ria-Vung Tau and former Binh Duong) | Entobel's insect plant in the Dat Do industrial zone; the VAL soybean crushing plant at Phu My; Heineken's Vung Tau brewery (former Ba Ria-Vung Tau); a Vinasoy soy milk plant (former Binh Duong) | [@REG-44; @VCO-16; @IND-25; @IND-49] {VN-direct\|Medium} |
| Hi-tech park and food processors | Ho Chi Minh City (former Ho Chi Minh City) | Saigon Hi-Tech Park; meat and *đồ chay* (traditional vegetarian) processors whose product labels give Ho Chi Minh City addresses | [@IND-57] {VN-direct\|Medium} (park); [@IND-53] {VN-direct\|Low} (processors) |
| Shrimp belt and aquafeed | Ca Mau (with former Bac Lieu) | C.P. Vietnam's Ca Mau aquafeed plant (124,800 t/yr, opened 7 Aug 2026) | [@IND-42] {VN-direct\|Medium} |
| Shrimp, aquafeed and research | Can Tho (with former Soc Trang and former Hau Giang) | De Heus Can Tho aquafeed plant; Sunjin Vina feed plant and Masan brewery (former Hau Giang); Can Tho University; the Region I aquafeed trial sub-centre | [@IND-47; @IND-46; @IND-30; @INF-28] {VN-direct\|Medium} |
| Aquafeed mills | Vinh Long (with former Ben Tre and former Tra Vinh) | De Heus marine and cold-water fish feed mill (168,000 t/yr company figure; 84,000 t/yr in trade press); Haid and Sheng Long complex | [@VCO-10; @IND-45; @IND-46] {VN-direct\|Medium} |
| Pangasius and shrimp farming | An Giang (with former Kien Giang) | Now the most populous province (4.95 million); pangasius and shrimp farming (regional knowledge; province shares not sourced) | [@GT-01] {VN-direct\|Low} |
| Aquafeed and breweries | Dong Thap (with former Tien Giang) | Uni-President aquafeed site and Heineken brewery in former Tien Giang; the provincial centre is in My Tho | [@VCO-29; @IND-25; @GT-02] {VN-direct\|Medium} |
| Fisheries research, biologics, planned nuclear | Khanh Hoa (with former Ninh Thuan) | Nha Trang fisheries research base and the field-audit city; IVAC's Suoi Dau vaccine facility; Uni-President aquafeed (former Ninh Thuan); planned nuclear sites (former Ninh Thuan) | [@IND-36; @VCO-29; @GT-11] {VN-direct\|Medium} |
| Coast and highlands | Lam Dong (with former Binh Thuan and former Dak Nong) | Largest unit by area (24,233 km2); the Binh Thuan coast (a spirulina lead, not verified) and the Dai Viet ethanol plant (former Dak Nong) | [@GT-01; @IND-21] {VN-direct\|Medium} |
| Ethanol and soy | Quang Ngai (with former Kon Tum) | Dung Quat bio-ethanol plant; Dak To ethanol plant (former Kon Tum); a Vinasoy soy milk plant | [@IND-19; @IND-21; @IND-49] {VN-direct\|Medium} |
| Northern food and feed | Hai Phong (with former Hai Duong) | Daesang food plant and Haid feed plant (former Hai Duong) | [@IND-13; @IND-43] {VN-direct\|Low} |
| Research and reference labs | Hanoi (unchanged) | Food Industries Research Institute (FIRI) and its pilot centre; National Institute for Food Control; Vabiotech | [@IND-60; @IND-61; @IND-37] {VN-direct\|Medium} |

Size of the units that matter most, from Resolution 202 [@GT-01] {VN-direct|High}: Ho Chi Minh City 14.0 million people; An Giang 4.95 million; Dong Nai 4.49 million; Vinh Long 4.26 million; Can Tho 4.20 million; Tay Ninh 3.25 million; Ca Mau 2.61 million; Khanh Hoa 2.24 million.

## S10.5 The end of the district tier

- From 1 July 2025, local government has two tiers: province and commune (including wards). District-level units no longer exist [@GT-02] {VN-direct|High}.
- Addresses now read "ward or commune, province". For example, Entobel's plant is at Lot 05, Street N3, Dat Do I Industrial Zone, Dat Do commune, Ho Chi Minh City [@REG-44] {VN-direct|Medium}.
- Licensing moved up, not down. Many feed and aquafeed procedures now sit with provincial People's Committee chairs: feed factory certificates, supplement-feed appraisal, import licences for unpublished feed, aquafeed trial recognition and import licences for unlisted aquafeed [@REG-41; @REG-35] {VN-direct|High}. Expect provincial officials, not district officials, to handle them. See [[app-s9-regulation]].
- The number and date of the Law on Organisation of Local Government that sets the two-tier model were not verified [@GT-02] {VN-direct|Medium}.

## S10.6 Ministries after the 2025 restructuring

From `ministries.csv`. All took effect on 1 March 2025, except the provincial row (1 July 2025).

| ID | Ministry now | Vietnamese name | Predecessors | Legal basis | Units relevant to alternative protein | Roles | Evidence |
|---|---|---|---|---|---|---|---|
| MIN-001 | Ministry of Agriculture and Environment (MAE) | *Bộ Nông nghiệp và Môi trường* | Ministry of Agriculture and Rural Development (MARD) and Ministry of Natural Resources and Environment (MONRE) | Resolution 176/2025/QH15; Decree 35/2025/ND-CP | Department of Livestock Production and Animal Health; Department of Fisheries and Fisheries Surveillance; Department of Quality, Processing and Market Development; Department of Nature Conservation and Biodiversity; Department of Climate Change; Department of Environment; Department of Science and Technology | Feed and aquafeed lists and trials; primary agri-food safety; GMO certificates, including closed production; genetic resources; EIA; carbon market | [@GT-04; @GT-05; @REG-42] {VN-direct\|High} |
| MIN-002 | Ministry of Science and Technology (MOST) | *Bộ Khoa học và Công nghệ* | MOST and the Ministry of Information and Communications | Resolution 176/2025/QH15; Decree 55/2025/ND-CP (2 Mar 2025) | Department of Science and Technology; Department of Technology Assessment and Appraisal; Bureau of Intellectual Property; National Committee for Standards, Metrology and Quality; Bureau of Digital Transformation | Science law and sandbox; high-tech and strategic technology lists; national standards; IP; halal certifier registration | [@GT-04; @GT-06] {VN-direct\|High} |
| MIN-003 | Ministry of Finance (MOF) | *Bộ Tài chính* | MOF and the Ministry of Planning and Investment | Resolution 176/2025/QH15; Decree 29/2025/ND-CP (24 Feb 2025), amended by Decree 166/2025/ND-CP (30 Jun 2025) | Tax departments; investment and enterprise units (former MPI); national statistics | Corporate income tax incentives; investment law; Investment Support Fund; customs and tariffs; statistics | [@GT-04; @GT-07] {VN-direct\|Medium} |
| MIN-004 | Ministry of Industry and Trade (MOIT) | *Bộ Công Thương* | Name unchanged | Resolution 176/2025/QH15; Decree 40/2025/ND-CP (26 Feb 2025) | Unit list not read | Biofuel (E10) roadmap; power plan; food safety for some processed products until the new Food Safety Law | [@GT-04; @GT-08; @GT-10] {VN-direct\|Medium} |
| MIN-005 | Ministry of Health (MOH) | *Bộ Y tế* | Name unchanged | Resolution 176/2025/QH15; Decree 42/2025/ND-CP (27 Feb 2025) | Food Safety Department (Vietnam Food Administration, VFA); National Institute for Food Control | Food Safety Law and Decree 15/2018; lead drafter of the revised law; additives; health supplements | [@GT-04; @GT-09; @REG-08] {VN-direct\|Medium} |
| MIN-006 | Provincial People's Committees (34 units) | *Ủy ban nhân dân cấp tỉnh* | 63 provincial units before 1 Jul 2025 | Resolution 202/2025/QH15; Decrees 131/2025 and 136/2025 (decentralisation) | Provincial Departments of Agriculture and Environment, Science and Technology, Health, and Industry and Trade | Many feed and aquafeed procedures; investment registration; EIA for smaller projects | [@GT-01; @GT-03; @REG-41] {VN-direct\|Medium} |

- The unit lists for MOF, MOIT and MOH were not read; only titles and dates are confirmed [@GT-07; @GT-08; @GT-09] {VN-direct|Medium}. The MAE unit list comes from the wave 1 reading of Decree 35/2025 [@REG-42] {VN-direct|High}.
- Livestock production and veterinary services were merged into one MAE department [@REG-42] {VN-direct|High}.
- One ministry (MAE) now holds feed, aquafeed, GMO biosafety, genetic resources and carbon, and one (MOST) holds standards, the sandbox, high-tech status and IP [@GT-04; @GT-06; @REG-42] {VN-direct|High}.

## S10.7 Practical rules for reading pre-2025 statistics and addresses

1. **Name the new unit first.** Write "Tay Ninh (former Long An)" or "Ho Chi Minh City (former Ba Ria-Vung Tau)" on first use in a page. Use the former name alone only when quoting a historical document.
2. **Re-aggregate before comparing.** Provincial statistics before July 2025 use the 63-unit map. To compare them with later data, add up the former units listed in the `former_units` column of `provinces.csv`. Do not compare a pre-2025 "Tay Ninh" figure with a post-2025 one: the new unit also contains former Long An. We expect official series from 2025 onward to use the 34-unit map but did not verify this.
3. **Watch the split-name units.** In the seven units in section S10.3, the provincial offices sit in a different former province from the one that gave the unit its name.
4. **Drop districts from addresses.** Older addresses that name a district are correct for historical documents but should be converted to "ward or commune, province" for current licences and contracts.
5. **Map facilities through their former province.** An industrial zone, plant or port keeps its own name; look up its former province, then read the new unit from `provinces.csv`. In the report's data files, the `province_current` and `province_former` columns were filled this way and left blank where a location was vague or ambiguous.
6. **Expect some bodies to keep old names.** Some utilities and firms still publish under former provincial names; for example, BIWASE still publishes its own water tariff for former Binh Duong, now part of Ho Chi Minh City [@COST-12] {VN-direct|Medium}.
7. **Use the new ministry names.** Write MAE, MOST, MOF, MOIT and MOH for anything after 1 March 2025, and "MARD (now MAE)" for older documents [@GT-04] {VN-direct|High}.
8. **Mind the population sources.** Resolution 202 gives dossier figures with no stated reference date; the statistics office and the UN give national totals that differ by about 0.7 million for 2025 (see [[app-f1-outlook]]) [@GT-01; @MAC-19; @GT-12] {VN-direct|Medium}.

## Gaps and how to close them

| # | Gap | Cheapest way to close it |
|---|---|---|
| 1 | Final number of commune-level units after 1 July 2025 | National Assembly Standing Committee resolutions on each province's commune reorganisation (June 2025), or the Ministry of Home Affairs |
| 2 | Number and date of the Law on Organisation of Local Government 2025 | Search thuvienphapluat.vn for "Luật Tổ chức chính quyền địa phương 2025" |
| 3 | Unit lists of MOF, MOIT and MOH after March 2025, and which MOIT unit keeps food-safety duties until the new Food Safety Law | Read Decrees 29/2025, 40/2025 and 42/2025 |
| 4 | Whether ward names of centres (for example Long An ward, Tran Bien ward) match current company registrations | The National Business Registration Portal |
| 5 | A 63-to-34 crosswalk for official provincial series (livestock herds, aquaculture output, cassava area) | Build from `provinces.csv` `former_units` and statistics office tables |
| 6 | Provincial shares of shrimp, pangasius and cassava output on the new map | Statistics office provincial tables, re-aggregated |

## Related data files

- `provinces.csv`: the 34 units with type, administrative centre, former units, area and population (section S10.2).
- `ministries.csv`: the six ministry and provincial rows (section S10.6).
- `facilities.csv`, `feedstocks.csv` and `companies.csv`: carry `province_current` and `province_former` columns mapped with `provinces.csv` (see [[app-s5-facilities]], [[app-s4-feedstocks]] and [[app-s1-directory]]).
- `disagreements.csv`: DG-123 and DG-124 (see [[app-r2-disagreements]]).
- Working paper: `working-papers/wave2/geo_time/geo_time.md`.
