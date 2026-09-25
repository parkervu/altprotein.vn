---
id: app-m5-changelog
title: "M5. Changelog and corrections"
short_title: "M5. Changelog"
section: appendix
order: 5
summary: "Every version of this draft report and what it changed, where each page moved when the report was restructured in v0.6, and every correction to earlier drafts, with what it was, what the report now uses, the source and where the correction appears."
audiences: [investors, policy, research, international, startups, manufacturers]
reading_time_min: 25
key_numbers: []
related_data: [disagreements.csv, companies.csv, facilities.csv, instruments.csv]
related_pages: [app-m1-method, app-r2-disagreements, front-how-to-read, ch22-protein-balance-2050, app-m2-futures-method, app-m3-demand-method, app-m4-actor-check-waves, ch18-demand-sizing]
charts: []
---

# M5. Changelog and corrections

This report is a draft. Version 1.0 will be the public launch; every version before it is a draft for review, numbered 0.x. This appendix is the record of what changed between drafts, so the chapters themselves can read cleanly. Readers who used an earlier draft should update to the values below.

## M5.1 Versions

| Version | Date | What it added | Earlier label |
|---|---|---|---|
| 0.1 | September 2026 | The supply study: context, supply, the plays, policy options, the 2035 outlook and the open questions, with the appendices on feedstocks, retail audit, companies, facilities, regulation, feed market, costs, science, research, labs, capital, the region, the administrative map and the registers | Circulated as "edition 1.0" |
| 0.2 | September 2026 | Futures to 2050: drivers, frontier technology, the protein and feed balance model, four 2050 worlds, a labelled vision and robust moves; the foresight tag | "Edition 1.1" |
| 0.3 | September 2026 | The demand side: diet and prices, chay, consumers, frontier demand, channels, business buyers, export, the demand model, product targets and demand moves; the demand evidence tag | "Edition 1.2" |
| 0.4 | September 2026 | A check of the demand side against 80 named actors and sixteen follow-up research lines, with corrections across the report | "Edition 1.3" |
| 0.5 | September 2026 | A prologue for newcomers in English and Vietnamese; a complete bibliography | "Edition 1.4" |
| 0.6 | September 2026 | A reader-first restructure, 0.x version numbers, this changelog, a two-minute summary, an FAQ, draft labels and consistency fixes (M5.2) | This draft |

Files, zips and project notes made before v0.6 use the earlier labels.

## M5.2 What changed in v0.6

No finding changed. The changes are to structure and readability:

- **Reader-first structure.** The 30 chapters are regrouped into five parts in the order a reader needs them: I Context, II Supply, III Demand, IV Futures and V What to do. Chapters are renumbered 1 to 30. Appendices are re-coded by theme: M (method and record), S (context and supply evidence), D (demand evidence), F (futures evidence) and R (registers). Every link, section number and reference was rewritten; M5.3 maps old to new.
- **Versions.** The earlier "editions 1.0 to 1.4" are now versions 0.1 to 0.5 (M5.1).
- **Markers moved here.** Notes in the text such as "new in edition 1.2" or "corrected in edition 1.3" were removed so pages read cleanly; what each version added is in M5.4, and each correction is in M5.5 to M5.12. Data files keep a version column (for example `version` in `key-numbers.json`).
- **New pages.** A two-minute summary ([[front-two-minute]]) and an FAQ ([[front-faq]]).
- **Draft labels.** The cover, the summaries and every page footer say "Draft for review, not for citation".
- **Reading aids.** How to read now has a map of the parts and a table of codes and scenario names; the executive summaries and at a glance follow the new part order; the briefs end with a "Read next" list.
- **Consistency fixes** from a reader review, listed in M5.2.1.

### M5.2.1 Consistency fixes in v0.6

These fix how things read or add up. None changes a finding.

- **Key numbers.** A duplicate key-number id was renamed (the 2023 food protein ingredient imports are now `kn-food-protein-ingredient-imports-2023`). The two retail protein price tiles are kept as separate observations (23 and 24 September 2026) and Chapter 9 now points to the wider 24 September check. The 2030 feed-target tile now says which feed the target covers. The retail price tile was removed from the startups brief, where it did not fit the text.
- **Counts.** Stale counts of open questions and disagreements in Chapter 30, Appendix R1 and Appendix S9 were brought up to date, as were the source, table and page counts on the cover and in the summaries. The plays are "ten" everywhere; "sixteen" refers only to the research lines of the actor check.
- **Law timing.** Every page now states the Food Safety Law window the same way: first comments in October 2026, a vote considered in May 2027, so a new-food clause needs to be in the draft revised between the two sessions, in practice by early 2027.
- **Codes.** Play, policy-option, demand-move and scenario codes are spelled out on first use in the summaries and briefs, and decoded in a table in [[front-how-to-read]].
- **Summaries and reading times.** 29 page summaries were shortened to one or two sentences, and every reading time was recomputed from the word count.
- **Briefs.** The six briefs now follow the new part order and end with a "Read next" list.
- **Terms and spelling.** TVP (textured vegetable protein) is defined where first used; spelling is British English throughout (for example yoghurt, sulphate); 13 abbreviations used in the report (HS code, MFN, ACFTA, RCEP, ATIGA, EVFTA and UKVFTA, CPTPP, FOB, CIF, IFS and BRCGS, ASC, TCVN, SFA) were added to [[app-r3-glossary]], which now has 236 terms.
- **Clean text.** Raw tag tokens that had leaked into running text were removed; the headings of [[app-s13-science]] are numbered; related-page links were added where pages cite each other but did not link.
- **Section codes.** Old appendix letters used as section codes inside three appendices now use the new codes: [[app-s5-facilities]] (was F1 to F9), [[app-s6-feed-market]] (was H1 to H13) and [[app-s12-costs]] (was I1 to I17). The futures question tree in [[app-m2-futures-method]] is Q1 to Q10, and the 2035 scenarios are Scenarios 1 to 3. The feedstock sheet codes C1 to C34 in [[app-s4-feedstocks]] are kept as identifiers.
- **Checks of the restructure.** An independent review of the renumbering restored one legal citation it had caught (Appendix I of Decree 111/2021), corrected two part ranges in the Vietnamese executive summary, one section reference in Chapter 24 and four section ranges in `actor_questions.csv`, and put the reading paths in `site-manifest.json` into part order. Tariff chapter numbers (HS chapters) were checked and are unchanged. The balance and demand models reproduce their published outputs byte for byte.

## M5.3 Where pages moved in v0.6

Page ids changed with the numbers. Old ids, which appear in files made before v0.6 and in the working papers, map as follows.

| Before v0.6 | From v0.6 | Page |
|---|---|---|
| Chapter 1 | Chapter 1 | [[ch01-why-vietnam]] |
| Chapter 2 | Chapter 4 | [[ch04-asset-map]] |
| Chapter 3 | Chapter 5 | [[ch05-industrial-base]] |
| Chapter 4 | Chapter 2 | [[ch02-alt-protein-today]] |
| Chapter 5 | Chapter 7 | [[ch07-rules]] |
| Chapter 6 | Chapter 6 | [[ch06-knowledge-talent]] |
| Chapter 7 | Chapter 8 | [[ch08-capital]] |
| Chapter 8 | Chapter 3 | [[ch03-regional]] |
| Chapter 9 | Chapter 9 | [[ch09-economics]] |
| Chapter 10 | Chapter 10 | [[ch10-technology-fit]] |
| Chapter 11 | Chapter 26 | [[ch26-plays]] |
| Chapter 12 | Chapter 27 | [[ch27-policy-options]] |
| Chapter 13 | Chapter 19 | [[ch19-outlook-2035]] |
| Chapter 14 | Chapter 30 | [[ch30-unknowns]] |
| Chapter 15 | Chapter 20 | [[ch20-drivers-2050]] |
| Chapter 16 | Chapter 21 | [[ch21-frontier-technology]] |
| Chapter 17 | Chapter 22 | [[ch22-protein-balance-2050]] |
| Chapter 18 | Chapter 23 | [[ch23-scenarios-2050]] |
| Chapter 19 | Chapter 24 | [[ch24-vision-2050]] |
| Chapter 20 | Chapter 28 | [[ch28-robust-moves]] |
| Chapter 21 | Chapter 11 | [[ch11-protein-diet]] |
| Chapter 22 | Chapter 12 | [[ch12-chay-baseline]] |
| Chapter 23 | Chapter 13 | [[ch13-consumers]] |
| Chapter 24 | Chapter 14 | [[ch14-frontier-demand]] |
| Chapter 25 | Chapter 15 | [[ch15-channels]] |
| Chapter 26 | Chapter 16 | [[ch16-business-buyers]] |
| Chapter 27 | Chapter 17 | [[ch17-export-demand]] |
| Chapter 28 | Chapter 18 | [[ch18-demand-sizing]] |
| Chapter 29 | Chapter 25 | [[ch25-demand-to-frontier]] |
| Chapter 30 | Chapter 29 | [[ch29-actor-check]] |

| Before v0.6 | From v0.6 | Page |
|---|---|---|
| Appendix A | Appendix M1 | [[app-m1-method]] |
| Appendix B | Appendix M5 | [[app-m5-changelog]] |
| Appendix C | Appendix S4 | [[app-s4-feedstocks]] |
| Appendix D | Appendix S2 | [[app-s2-retail-audit]] |
| Appendix E | Appendix S1 | [[app-s1-directory]] |
| Appendix F | Appendix S5 | [[app-s5-facilities]] |
| Appendix G | Appendix S9 | [[app-s9-regulation]] |
| Appendix H | Appendix S6 | [[app-s6-feed-market]] |
| Appendix I | Appendix S12 | [[app-s12-costs]] |
| Appendix J | Appendix S13 | [[app-s13-science]] |
| Appendix K | Appendix S7 | [[app-s7-research]] |
| Appendix L | Appendix S8 | [[app-s8-labs-talent]] |
| Appendix M | Appendix S11 | [[app-s11-capital]] |
| Appendix N | Appendix S3 | [[app-s3-regional]] |
| Appendix O | Appendix F1 | [[app-f1-outlook]] |
| Appendix P | Appendix S10 | [[app-s10-admin-map]] |
| Appendix Q | Appendix R1 | [[app-r1-open-questions]] |
| Appendix R | Appendix R2 | [[app-r2-disagreements]] |
| Appendix S | Appendix R3 | [[app-r3-glossary]] |
| Appendix T | Appendix R4 | [[app-r4-sources]] |
| Appendix U | Appendix M2 | [[app-m2-futures-method]] |
| Appendix V | Appendix F3 | [[app-f3-frontier-tech]] |
| Appendix W | Appendix F4 | [[app-f4-balance-model]] |
| Appendix X | Appendix F2 | [[app-f2-drivers-signals]] |
| Appendix Y | Appendix F5 | [[app-f5-targets-hubs]] |
| Appendix Z | Appendix F6 | [[app-f6-aquafeed-feedstock-futures]] |
| Appendix AA | Appendix M3 | [[app-m3-demand-method]] |
| Appendix AB | Appendix D2 | [[app-d2-consumer-evidence]] |
| Appendix AC | Appendix D1 | [[app-d1-diet-chay-prices]] |
| Appendix AD | Appendix D4 | [[app-d4-channels]] |
| Appendix AE | Appendix D5 | [[app-d5-buyers]] |
| Appendix AF | Appendix D6 | [[app-d6-export]] |
| Appendix AG | Appendix D7 | [[app-d7-global-benchmarks]] |
| Appendix AH | Appendix D8 | [[app-d8-demand-model]] |
| Appendix AI | Appendix D3 | [[app-d3-retail-demand-signals]] |
| Appendix AJ | Appendix M4 | [[app-m4-actor-check-waves]] |

The working papers in `working-papers/` are kept as written, so they use the earlier chapter numbers and appendix letters.

## M5.4 What each earlier version added

**v0.2 (futures).** New chapters on drivers, frontier technology, the protein and feed balance, the 2050 worlds, the vision and robust moves (now chapters 20 to 24 and 28), and Appendices M2 and F2 to F6. Futures sections were added to the executive summaries, at a glance, the cover, how to read and the six briefs. New tag: the foresight tag; new callouts: "Speculative" and "Vision, not forecast". Smaller edits corrected and cross-linked the knowledge, outlook and unknowns chapters and the directory, feed-market, research, regulation and science appendices; the registers gained the new rows. Corrections are in M5.9.

**v0.3 (demand).** New chapters on diet and prices, chay, consumers, frontier demand, channels, business buyers, export, demand sizing and product targets (now chapters 11 to 18 and 25), and Appendices M3 and D1 to D8. New tag: the demand evidence tag; new script: `tools/demand_model.py`. `plays.csv` was unchanged; the demand view of market pull is in `play_demand_check.csv`. An independent review corrected the draft before release (M5.10).

**v0.4 (actor check).** The demand side was checked against 80 named actors and expanded in three waves of research lines (now chapter 29 and Appendix M4). The check changed the school, textured-protein, blends, label, sugar-tax, export and funder conclusions and edited chapters 7 to 9, 11 to 19 and 25 to 27, several appendices, the summaries and the briefs. The demand model's numbers were frozen, with caveats stated beside them, and the plays' scores were unchanged. 50 data files were added. An independent review corrected the draft before release (M5.11).

**v0.5 (prologue).** A prologue for newcomers in English and Vietnamese, two charts, four key numbers, 81 sources and 11 glossary terms; the bibliography was completed to list every source (M5.12).

Sections M5.5 to M5.8 list corrections to the internal scoping drafts that preceded v0.1. Their claims were treated as leads and re-checked ([[app-m1-method]]); the corrections supersede the earlier figures everywhere. Sections M5.9 to M5.12 list the corrections and changes made in each later version.

<!-- corrections -->

## M5.5 Corrections to the internal drafts: markets and prices

| Topic | Earlier drafts | This report | Sources | Where |
|---|---|---|---|---|
| Fishmeal benchmark | USD 1,837 per t (March 2026), about USD 2,830 per t of protein | 2025 average USD 1,706 per t (about USD 2,625 per t of protein); August 2026 USD 2,500 per t (about USD 3,846) | [@FM-01; @FM-02] | [[ch09-economics]], [[app-s6-feed-market]], [[app-s12-costs]] |
| Displaceable fishmeal pool | 350 to 450 kt a year | Central 120 to 245 kt; sourced bounds 79 to 290 kt; realistic capture by novel proteins in total 25 to 90 kt | [@FM-04; @FM-05; @FM-08] | [[ch26-plays]], [[app-s6-feed-market]] |
| Soybean balance | "41,000 t produced against 3.2 Mt imported" (2026 forecasts mixed with 2025 actuals) | 2025: 42,000 to 43,000 t produced, 2.61 Mt imported (98.4%); 5.70 Mt soybean meal imported; 7.2 Mt fed | [@MAC-04] | [[ch01-why-vietnam]], [[app-s6-feed-market]] |
| Aquafeed volume | 3.4 to 4.0 Mt (capacity times utilisation) | Industry 3.9 to 4.8 Mt against USDA 6.5 Mt (2025); unresolved, not averaged | [@MAC-06; @MAC-01] | [[ch01-why-vietnam]], [[app-s6-feed-market]] |
| Bran and broken rice in feed | 730 kt | 2.8 Mt of domestic supply (2025) | [@FS-23] | [[app-s4-feedstocks]] |
| Cassava pulp | 1.7 to 2.1 Mt wet a year | About 6 Mt wet (about 1.3 Mt dry matter), derived; earlier figure fits pressed pulp only | [@FS-01; @FS-05; @FS-06; @FS-53] | [[ch04-asset-map]], [[app-s4-feedstocks]] |
| Region I minimum wage | VND 4,960,000 a month | VND 5,310,000 a month from 1 January 2026 | [@COST-19] | [[ch09-economics]], [[app-s12-costs]] |
| Tropical cooling | "May offset" Vietnam's power advantage | Real but modest: about USD 70 to 180 per t of biomass, 2 to 4% of feed-protein cost; avoidable with thermotolerant strains | [@COST-50; @SCI-44] | [[ch09-economics]], [[app-s13-science]] |
| Fuel-ethanol capacity | About 600,000 m³ a year in six plants | Not supported by 2025 or 2026 sources | [[app-s5-facilities]] | [[app-s5-facilities]] |

## M5.6 Corrections to the internal drafts: companies and capital

| Topic | Earlier drafts | This report | Sources | Where |
|---|---|---|---|---|
| Entobel financing | About USD 36 million; IFC about USD 10 million | USD 32.5 million: Mekong Capital 25, Dragon Capital 5, IFC 2.5 (upstream collaboration agreement) | [@CAP-01; @CAP-04; @VCO-20] | [[ch08-capital]], [[app-s11-capital]] |
| Vedan glutamic acid capacity | 36,000 t a year | Last published nameplate 180,000 t a year (2004); neither confirmed as current | [@VCO-03] | [[ch05-industrial-base]], [[app-s5-facilities]] |
| De Heus and CJ Feed & Care | 17 CJ plants in Vietnam | 17 mills across five countries (deal closed 3 March 2026); De Heus lists 21 plants in Vietnam | [@VCO-07; @VCO-08] | [[ch05-industrial-base]], [[app-s5-facilities]] |
| De Heus Vinh Long mill | 84,000 t a year | 168,000 t a year design capacity (company, 2026); 84,000 is trade press | [@VCO-10; @IND-45] | [[app-s5-facilities]] |
| Skretting and Entobel | Not recorded | Strategic partnership 26 November 2025; insect-meal shrimp feed in commercial production (company claim) | [@VCO-28] | [[app-s6-feed-market]] |
| Ho Chi Minh City Biotechnology Center | Offers pilot fermentation | Service pages list agricultural and aquaculture services, not contract fermentation | [@INF-05] | [[app-s8-labs-talent]] |
| LC Foods, "Unconventional" | Not found | Identified through the retail audit | [@FORM-01] | [[app-s1-directory]] |
| "Xuan Hong" | An industrial *chay* maker | Two different firms: a cassava-starch processor in Tay Ninh, and a dried-slice brand whose owner is not identified | [@ECO-39; @FORM-01] | [[app-s1-directory]] |

## M5.7 Corrections to the internal drafts: rules

| Topic | Earlier drafts | This report | Sources | Where |
|---|---|---|---|---|
| Legal basis of feed trials | Article 11 of Decree 13/2020, 12 to 18 months | Law on Animal Husbandry Art 37 and Circular 94/2025; about 40 working days of agency time plus the trial; 6 to 18 months total is our estimate | [@REG-29; @REG-34] | [[ch07-rules]], [[app-s9-regulation]] |
| Aquafeed permitted list | Content unknown | Circular 16/2026 Appendix II has no raw-material section | [@REG2-01] | [[ch07-rules]], [[app-s9-regulation]] |
| Unlisted feed materials | No penalty noted | Decree 211/2026: VND 10 to 20 million per material plus 1 to 3 months' suspension (from 5 August 2026) | [@REG2-10] | [[ch07-rules]] |
| Precision fermentation | Not treated as GMO products | Probably "products of a GMO" under Decree 43/2026 | [@REG-18; @REG2-11] | [[ch07-rules]], [[app-s9-regulation]] |
| Product-declaration design in the draft law | Three risk tiers | Two groups, per July 2026 Government press | [@REG2-05] | [[app-s9-regulation]] |
| Allergen labelling | Covered by guidance | No allergen list found in Decree 111/2021 or Circular 05/2019 | [[app-s9-regulation]] | [[app-s9-regulation]] |
| Sandbox | No food or feed sandbox exists | Still no national procedure; the Hanoi sandbox is the most concrete option | [@REG2-13; @REG2-16] | [[ch07-rules]], [[app-s9-regulation]] |
| E10 date | Mandatory from 1 January 2026 | Mandatory nationwide from 1 June 2026 (1 January 2026 is the circular's effective date) | [@GT-10] | [[ch19-outlook-2035]], [[app-f1-outlook]] |
| Long An | Merged into Ho Chi Minh City | Merged into Tay Ninh; Binh Duong and Ba Ria-Vung Tau into Ho Chi Minh City; Binh Phuoc into Dong Nai | [@GT-01] | [[app-s10-admin-map]] |

## M5.8 Corrections to the internal drafts: science and research

| Topic | Earlier drafts | This report | Sources | Where |
|---|---|---|---|---|
| *A. oryzae* biomass on vinasse | 118.5 g/L | Not a broth concentration; about 5.9 g/L in the flask on the most plausible reading | [@SCI-18] | [[ch10-technology-fit]], [[app-s13-science]] |
| *A. oryzae* metabolites | Aflatoxin, cyclopiazonic acid, kojic acid and 3-nitropropionic acid together | No aflatoxin; cyclopiazonic acid and 3-nitropropionic acid are the real concerns; kojic acid is not a mycotoxin | [@SCI-19] | [[app-s13-science]] |
| Precision-fermentation titer | ">50 g/L" as a modelled threshold | An expert assertion; best leghemoglobin titers 3.5, 7.27 and 10.1 g/L | [@SCI-01; @SCI-03; @SCI-04; @SCI-05] | [[ch10-technology-fit]], [[app-s13-science]] |
| Duckweed | EFSA opinion supportive; "not novel" in the EU; PDCAAS 0.89 | EFSA could not establish safety of whole *Wolffia* powder (manganese, 2021) but found a *Lemna* protein concentrate safe (2023); "not novel" unverified; 0.89 unsupported | [@SCI-28; @SCI-30; @SCI-32] | [[ch10-technology-fit]], [[app-s13-science]] |
| Fish and shrimp cell lines | PHT, "PHG" and PmLyO-Sf9 as ICAR-NBFGR food-relevant lines | PHT is real but a serum-dependent virology line; a gill line exists but "PHG" is unconfirmed; PmLyO-Sf9 is a shrimp and insect hybrid from CUSAT | [@SCI-10; @SCI-11; @SCI-12] | [[ch10-technology-fit]], [[app-s13-science]] |
| Vietnamese plant-based meat research | 2 papers; none on extrusion | About 6 on-topic papers; at most one extrusion study | [@BIB-01] | [[ch06-knowledge-talent]], [[app-s7-research]] |
| Vietnamese safety and quality studies | None on RNA reduction, mycotoxins or digestibility | Some exist (spent-yeast RNA reduction, aflatoxin testing in fermented soy, in vitro digestibility); none on a novel microbial biomass; no DIAAS or PDCAAS study | [@RD-31; @RD-61; @RD-23] | [[ch06-knowledge-talent]] |

## M5.9 Corrections made in v0.2

Version 0.2 (September 2026) adds Part IV and corrects these v0.1 statements.

| Topic | Version 0.1 | Version 0.2 | Sources | Where |
|---|---|---|---|---|
| Scope of the 2030 industrial feed target (30 to 32 Mt) | Unclear whether aquafeed is included (OQ-127) | Livestock feed only, per the feed scheme (Decision 1625/QD-TTg, December 2023), Medium confidence; the 2025 target of 24 to 25 Mt was probably missed; the balance model gives 26.4 Mt of livestock feed in 2030 | [@NTS-23] | [[ch19-outlook-2035]], [[ch22-protein-balance-2050]], [[app-s6-feed-market]] |
| Feed scheme | Decision 1625/QD-TTg not cited | Added to the legal register and `instruments.csv` | [@NTS-23] | [[app-s9-regulation]] |
| Agri-biotech scheme | Decision 429/QD-TTg (2021) listed as in force | Replaced by Decision 1466/QD-TTg (31 July 2026) | [@NTS-35] | [[app-s9-regulation]], [[app-f5-targets-hubs]] |
| Research intensity against Thailand | About a quarter (OpenAIRE) | About a quarter to a third (OpenAIRE 23%; OpenAlex, broader basket, about 31%) | [@BIB-01; @HSC-01] | [[ch06-knowledge-talent]], [[app-s7-research]] |
| Vietnamese extrusion research | At most one study, affiliation unverified | None: the one candidate (vvae080) is from a Taiwanese university; plant-based meat papers about 5 | [@HSC-01] | [[app-s13-science]], [[app-s7-research]] |
| *Leucaena* shrimp-feed trial | Probable wrong Vietnam tag | Genuine Vietnamese study (Tra Vinh University) in an Indian journal | [@HSC-01] | [[app-s7-research]] |
| Vietnamese yeast-protein precedent | Not recorded | Thai Duong Feed JSC ran a 2016 to 2019 national project on yeast protein for feed (120 t of liquid product; a VND 167 billion line); current status unknown | [@HSC-06; @HSC-07] | [[app-s1-directory]], [[ch21-frontier-technology]] |

## M5.10 Changes made in v0.3

Version 0.3 (September 2026) adds Part III and makes these changes to how earlier material should be read. No v0.2 number is replaced.

| Topic | Version 0.2 | Version 0.3 | Sources | Where |
|---|---|---|---|---|
| Scope | Consumer demand and market forecasts out of scope, except business-to-business demand | Demand added as a design input in Part III; demand routes sized as labelled scenarios; still no market-size forecast and no marketing plan | [@CON-02; @BUY-02] | [[front-how-to-read]], [[app-m3-demand-method]] |
| S-ALT food side | A what-if share of meat replaced (1% in 2030 to 10% in 2050) | Read as exploratory: no documented demand route reaches it; a benchmark path displaces about 0.2% of meat protein by 2035 | [@GLB-09; @GLB-10; @GLB-19] | [[ch22-protein-balance-2050]], [[ch18-demand-sizing]] |
| Market pull of plays T1 and T10 | 4 and 3 | Demand view 5 and 4; `plays.csv` unchanged, demand view in `play_demand_check.csv` | [@BUY-02; @BUY-16] | [[ch26-plays]], [[ch25-demand-to-frontier]] |
| GFI APAC survey frame | "Vietnam included in a six-country survey" | The Vietnam sample (n = 1,049) is an online panel in the Hanoi region and Ho Chi Minh City; one working paper described it as Ho Chi Minh City only | [@CON-02; @CON-03] | [[ch13-consumers]], [[app-r2-disagreements]] |
| Vietnamese vegan and vegetarian organisations | Not verified | The organised vegan movement is small and mainly online; no national association with a public membership figure found | [@CHY-62; @CHY-63] | [[ch02-alt-protein-today]], [[ch12-chay-baseline]] |

### Corrections from the independent review of Part III

Before release, an independent reviewer re-checked Part III against the working papers, the data files and the model outputs ([[app-m3-demand-method]], section M3.6). These are the draft statements it corrected.

| Topic | Draft of Part III | Version 0.3 as released | Sources | Where |
|---|---|---|---|---|
| Price of plant proteins shipped from China | USD 1.2 to 2.2 per kg | About USD 0.9 to 1.3 per kg (China-reported 2025 unit values for HS 3504, 1109 and 2106.10; about USD 1.1 on average). USD 1.95 to 2.20 was the price of three sampled isolate shipments, not of the whole tonnage | [@BUY-02; @BUY-07] | [[ch16-business-buyers]], [[front-exec-summary]], [[brief-investors]] |
| Meat protein displaced by technology routes, 2035 | 0.2 to 0.7% | 0.1 to 0.4% for hybrids, canteens and analogues; 0.2 to 0.7% only when added chay days are included | [@BUY-02; @CHY-06] | [[brief-international]], [[ch18-demand-sizing]] |
| Chay price against the meat version | Same-brand chay 17 to 38% cheaper | Only the Vissan pair (38% cheaper) is high confidence; other pairs are low confidence and range from 52% cheaper to 19% dearer | [@FORM-01] | [[ch12-chay-baseline]], [[brief-manufacturers]] |
| Protein claims on chay foods | No chay food makes a protein claim | No chay food carries a numeric protein claim or a protein claim in its name; one chay dumpling pack says its protein is 100% plant | [@FORM-01] | [[brief-manufacturers]], [[app-d3-retail-demand-signals]] |
| Cultivated meat sold in Singapore | Thousands of servings | Tens of thousands: more than 2,000 servings from one firm and more than 25,000 dishes from another, in almost six years | [@NOV-10; @NOV-14] | [[ch14-frontier-demand]], [[front-exec-summary]], [[brief-investors]] |
| Retail textured soy against the border price | 8 to 12 times | About 10 to 16 times the 2025 unit value for HS 2106.10 (our calculation; the supply chapters' 8 to 12 times uses the 2023 unit value) | [@BUY-02; @FORM-01] | [[ch16-business-buyers]], [[app-s2-retail-audit]] |
| Diaspora chay pack prices in the US | USD 3.50 to 9.00 | USD 3.50 to 10 | [@EXP-37] | [[ch17-export-demand]], [[ch25-demand-to-frontier]] |
| Retail protein floor and a 20 g serving | VND 34,000 to 46,000 per 100 g of protein; 20 g for VND 6,800 to 9,200 | VND 34,000 to 45,000 and VND 6,900 to 9,000, from the Part III price check; the supply chapters keep 34,000 to 46,000 from its own price sample | [@DIE-12; @COST-39; @COST-40] | [[ch11-protein-diet]], [[ch15-channels]] |
| Ratios from the demand model | Delivered protein ten times displaced protein; S-ALT feed four to five times food | About eight times in 2035; about four times | [@BUY-02; @GLB-09] | [[ch18-demand-sizing]] |
| Plays that lead under the weight presets | T1, T2 and T4 lead under almost every weighting | T4 is first or second under every preset; with the demand view, T1 leads four of the seven presets; T5 is second under the policy, research and international presets | [@BUY-02; @BUY-16] | [[ch25-demand-to-frontier]] |
| Vinasoy's share of soy milk | About 90% (labelled as our derivation) | 90.6% of branded soy milk in 2024 (Bao Viet Securities), shown beside the supply chapters' about 80% of all soy milk | [@CON-27; @ECO-41] | [[ch12-chay-baseline]], [[ch13-consumers]] |
| Demand evidence tags | Functional ingredient tests tagged as tested demand; firm actions and official messaging tagged as stated; one calculation under a High, revealed tag | Functional tests carry no demand tag; firm actions are revealed; calculations are inferred and Low; two tariff key numbers carry no demand tag | [@BUY-42; @BUY-19; @CHN-29] | [[ch11-protein-diet]], [[ch14-frontier-demand]], [[ch15-channels]], [[ch16-business-buyers]] |
| Missing citations | Claims on the Netherlands price premium, the duty on HS 2106.10, Malaysia's US tariff and Thai private-label exporters | Sources added | [@GLB-10; @REG2-20; @EXP-22; @EXP-52] | [[ch11-protein-diet]], [[ch16-business-buyers]], [[ch17-export-demand]] |
| Model basis for line equivalents | Ingredient product at 0.60 protein, not explained | Documented: textured-protein line output is about 60% protein, below the 0.65 average of the import pool, which includes gluten and isolates; results unchanged | [@BUY-02; @BUY-07] | [[app-d8-demand-model]] |
| Vietnamese summary wording | Literal renderings of "incumbent", "stretch" and "benchmark" scenario, and "price floor" | Revised to natural Vietnamese terms; numbers aligned with the English | [@CON-02] | [[front-exec-summary-vi]] |
| Small slips | Store count 8,700; European growth "only in France"; premium chay price "a head"; chay protein "average"; missing years | 8,750 stores; France and Italy; per head at a buffet and per bill at a restaurant; median; years added; Hung Yen (former Thai Binh) | [@CHN-12; @EXP-05; @CHY-37; @FORM-01] | Part III chapters |

## M5.11 Changes made in v0.4

Version 0.4 (September 2026) checks Part III against 80 named actors and adds the results of sixteen research lines ([[ch29-actor-check]], [[app-m4-actor-check-waves]]). These are the v0.3 statements it corrects or replaces. The demand model's inputs and outputs are unchanged; see [[ch18-demand-sizing]] for how the corrections bear on them.

| Topic | Version 0.3 | Version 0.4 | Sources | Where |
|---|---|---|---|---|
| Food Safety Law timing | Expected at the October to November 2026 session | First comments at the October 2026 session; passage considered at the May 2027 session; the window for a new-food clause runs into early 2027 | [@APR-07; @APR-08] | [[ch07-rules]], [[ch27-policy-options]], [[ch19-outlook-2035]], briefs, summaries |
| School meals and protein | Guided by an animal-protein target (Decision 1340, 2016); plant protein in schools runs against it; do not start in schools | Decision 1340 targets ended in 2020. Decision 3958/QĐ-BYT (December 2025) sets no animal share and asks for legumes or tofu at least twice a week; audited menus meet it in 9 of 48 weeks and fill it with tofu beside meat; menu software prints a 48% animal-protein standard. Only a labelled blend in minced dishes removes meat | [@APR-04; @PMR-10; @PMR-26] | [[ch15-channels]], [[ch25-demand-to-frontier]] |
| Tariff protection | MFN duties of 3 to 10% give domestic makers a little protection | Chinese, ASEAN and Korean protein ingredients enter at 0% under ACFTA, ATIGA, AKFTA and RCEP; MFN applies only to other origins | [@FTR-32; @FTR-33] | [[ch16-business-buyers]], [[ch07-rules]], [[app-s9-regulation]], [[app-s12-costs]] |
| Domestic textured protein (T1) | Equipment USD 1.5 to 4 million per line (assumption); benchmark path supports three to four lines; a startup thesis | Chinese lines listed at USD 11,000 to 100,000, installed USD 0.3 to 1.4 million; flour price decides the margin; about one soy line by 2035; best owned by an incumbent or distributor and debt-financed | [@TIC-02; @TIC-12; @TIC-13] | [[ch09-economics]], [[ch26-plays]], [[ch25-demand-to-frontier]], [[brief-investors]] |
| Chinese textured protein price | About USD 1.6 per kg (2023) before freight and duty | USD 1.24 per kg FOB (2025), landed about USD 1.29 to 1.38 per kg | [@BUY-02; @TIC-12] | [[ch09-economics]], [[ch16-business-buyers]] |
| Blends (T9, TPP-03) | An extender must cost less than the lean meat it replaces; 20 to 30% replacement, up to 50% | Soy extension already pays at every hog price since 2019, so a new extender must beat hydrated soy; 10 to 20% in fine emulsions, 30% in coarse mince; avoid the *độn* (filler) frame | [@HXE-01; @DIE-25; @TRU-02] | [[ch14-frontier-demand]], [[ch25-demand-to-frontier]] |
| Label moves | Define chay; require percentage labels on blends; neutral naming guidance; clarify GMO status | Vegetarian and vegan claims already defined (TCVN 13625:2023, vegetarian allows egg and milk); named ingredients must already be quantified; no rule reserves meat or milk words; the GMO label applies only above 5% of ingredients | [@LBL-06; @LBL-15; @LBL-10] | [[ch25-demand-to-frontier]], [[ch14-frontier-demand]], [[app-s9-regulation]] |
| Label instruments | Decree 43/2017 as amended; Circular 29/2023 | Decree 37/2026 and Circular 30/2026/TT-BYT replaced them | [@LBL-07; @LBL-01; @LBL-02] | [[app-s9-regulation]], [[ch07-rules]] |
| Plant milk price position | Priced at or below dairy; no tax condition | An 8% excise (10% from 2028) on drinks above 5 g sugar per 100 ml from 2027, dairy exempt; plant milks' status unresolved | [@FTR-01; @FTR-05] | [[ch13-consumers]], [[ch25-demand-to-frontier]] |
| Children's protein gap | Cheap high-quality protein for children in upland districts; stunting 19.6% (2020) | Stunting 18% (2023), 32% among ethnic minority children, set before age two; school-age lunches, including upland boarding schools, carry enough protein and zinc; shortfalls are breakfast, calcium and vitamin A | [@APR-27; @UPL-01; @UPL-18] | [[ch11-protein-diet]] |
| Advice to funders | Fund measurement first; test canteen chay days or chay promotion | Match the route to the funder's unit and rules; only 4 of the original 19 demand moves have a funder whose scope fits and that accepts Vietnam; the chay route has no payer today; animals and CO2e added | [@AFN-05; @AFN-29; @FUF-01] | [[ch18-demand-sizing]], [[ch25-demand-to-frontier]], [[brief-international]] |
| Advice to startups | Win a first business customer before building a consumer brand | Sell a familiar food with little capital; aim first for ingredient, private-label or co-packing supply; a menu listing for your own analogue brand is not a business customer; the ingredient route is untested | [@AIS-28; @BRD-08] | [[front-exec-summary]], [[ch25-demand-to-frontier]], [[brief-startups]] |
| Export route | EU and UK private label through Vietnamese co-packers; functional proteins for Japanese and Korean makers | Wrapped foods (USD 128 million of stuffed pasta, 2023) are the base; first buyers are European importers and brand owners needing IFS or BRCGS; the Japan and Korea ingredient route is weakly evidenced; origin rules bind on wrapper flour, not soy | [@XBA-29; @XBA-28; @ORG-01] | [[ch17-export-demand]] |
| Feed export pull (T2) | Export feed standards reward traceable non-soy protein | ASC v1.2, BAP and GLOBALG.A.P. neither require nor reward microbial protein; the pull is domestic and revealed: about 9,200 t of inactive yeast imported for food and feed, 95% of it at about USD 1.1 per kg | [@FBA-01; @FBA-17] | [[ch17-export-demand]], [[app-s6-feed-market]] |
| ASC standard version | Version 1.1 cited as in force | Version 1.2 (v1.1 was never in force) | [@FBA-01] | [[ch17-export-demand]], [[app-d6-export]] |
| Corporate and firm facts | WinCommerce 15,000 stores by 2030 (inferred); no Meat Zero found; Vinh Hoan and Minh Phu as seafood co-investors; no Vietnamese mycoprotein maker | WinCommerce targets 13,000 by 2030; CP Meat Zero listed on a B2B platform but not orderable; Avant's Singapore unit wound up; Emmay reports mycelium foods | [@AIB-12; @AIB-13; @CPC-12; @AIS-34; @AIS-39] | [[ch15-channels]], [[ch14-frontier-demand]], [[ch16-business-buyers]] |
| Hospitals and the army | No retrievable data | A hospital tender accepts 120 g of tofu for 60 g of meat; the army ration is VND 72,000 a day | [@AIB-44; @AIB-45] | [[ch15-channels]] |
| Domestic share of delivered protein | About 19,000 t of domestic or novel protein delivered by 2035 | About 19,000 t through the routes, of which about 11,000 to 17,000 t made in Vietnam (only import substitution applies a domestic share) | [@BUY-02; @BRD-05] | [[ch18-demand-sizing]], [[app-d8-demand-model]] |

## M5.12 Changes made in v0.5

Version 0.5 (September 2026) adds a prologue for newcomers in English and Vietnamese ([[front-prologue]], [[front-prologue-vi]]). No finding changes. The other changes:

| Topic | Version 0.4 | Version 0.5 | Where |
|---|---|---|---|
| Bibliography | `sources/bibliography.md` still listed the 1,726 sources of v0.3; the 577 sources of v0.4 were in `sources.csv` and Appendix R4 but missing from the bibliography | The bibliography lists all 2,384 sources, with the v0.4 and v0.5 rounds at the end | `sources/bibliography.md` |
| Front pages | Cover, how to read, executive summaries, at a glance | The prologue follows the cover; the cover, how to read and both executive summaries link to it; a "newcomers" reading path is added to the site manifest | [[front-cover]], [[front-how-to-read]] |
| Registers | 2,303 sources; 212 glossary terms; 139 key numbers; 54 charts | 2,384 sources (81 from the prologue research, prefixes PRA, PRB and PRC); 223 glossary terms (11 newcomer terms); 143 key numbers; 56 charts | [[app-r4-sources]], [[app-r3-glossary]] |
| Chinese textured protein price in chapter 2 | "About USD 1.6 to 1.7 per kg" for 2023 China-reported exports across three codes, without the 2025 figure | The 2023 figure is kept as dated and the 2025 price (USD 1.24 per kg FOB, about USD 1.29 to 1.38 landed duty-free) is added beside it | [[ch02-alt-protein-today]] |

**Related:** [[app-r2-disagreements]] (where sources disagree rather than an earlier draft being wrong).
