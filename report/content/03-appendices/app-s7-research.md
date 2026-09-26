---
id: app-s7-research
title: "S7. Research landscape and bibliometrics"
short_title: "S7. Research landscape"
section: appendix
order: 27
summary: "How much alternative-protein research Vietnam publishes, topic by topic and against its neighbours, which groups and institutions hold the relevant skills, who funds them, and the 11 research gaps Vietnam is well placed to fill."
audiences: [research, policy, international, investors, startups]
reading_time_min: 29
key_numbers: [kn-novel-food-research-intensity, kn-ctu-places]
related_data: [publications.csv, biblio_counts.csv, biblio_trend_vn.csv, institutions.csv, research_funding.csv, science_facts.csv]
related_pages: [ch06-knowledge-talent, app-s13-science, app-s8-labs-talent, app-s11-capital, app-s1-directory, app-m1-method, app-r2-disagreements, brief-research]
charts: [chart-research-benchmark]
---

# S7. Research landscape and bibliometrics

This appendix maps Vietnam's published research relevant to alternative protein: how much there is, where it sits, who does it, who pays for it, and where the gaps are. It combines two passes:

- **Wave 1 (Scite):** 30 searches in the Scite literature database, more than 150 Vietnam-affiliated records from 2015 to 2026 screened, and 76 papers tabulated with a key result each [@RD-01] {VN-direct|Medium}.
- **Wave 2 (OpenAIRE):** country-tagged counts for 20 topics in Vietnam and 3 topic groups in five comparison countries, with every query URL stored so that the counts can be re-run [@BIB-01] {VN-direct|Medium}.

`publications.csv` (103 rows) merges the wave 1 list with 40 top-cited wave 2 records, deduplicated on DOI. The technology science itself (titres, costs, safety) is in [[app-s13-science]]; pilot plants, laboratories and graduates are in [[app-s8-labs-talent]].

Terms: *VN-affiliated* means at least one author works at a Vietnamese institution. *VN-tagged* means OpenAIRE links the record to Vietnam through its country code. *Per 10k* means topic records per 10,000 of the country's total OpenAIRE publication records in the same window. *DIAAS* and *PDCAAS* are protein-quality scores that correct amino-acid content for digestibility.

## S7.1 Key findings

1. **Vietnam's output on food-facing alternative protein is small.** Records tagged to each country for plant-based or cultivated meat, 2015 to September 2026: Vietnam 9, Philippines 10, Indonesia 47, Thailand 49, Malaysia 61, Singapore 112 [@BIB-01] {VN-adjacent|Medium}. Vietnam has about 5 to 12 times fewer records than Indonesia, Thailand, Malaysia and Singapore (our calculation: 47 / 9 = 5.2; 112 / 9 = 12.4).
2. **The gap remains after adjusting for research size.** Per 10,000 publications: Vietnam 0.37, Philippines 0.62, Malaysia 1.02, Thailand 1.58, Singapore 2.94 [@BIB-01] {VN-direct|Medium}. Vietnam's intensity is about a quarter of Thailand's and an eighth of Singapore's (our calculation from the same counts). A second database, on a broader core basket, OpenAlex gives 4.1 works per 10,000 national publications for Vietnam against 13.4 for Thailand (2015 to 2025), about 31% [@HSC-01] {VN-direct|Medium}. We therefore say "about a quarter to a third of Thailand's".
3. **In feed-side protein, Vietnam is at the regional level.** Fishmeal-replacement records per 10,000: Vietnam 0.42, Thailand 0.45, Malaysia 0.47, Philippines 0.68 [@BIB-01] {VN-direct|Medium}. The Vietnam figure is an undercount: a broader wave 1 search found about 20 Vietnamese aquafeed replacement papers [@RD-01] {VN-direct|Medium}.
4. **Vietnam has zero or near-zero records in six core technologies** after reading the titles: precision fermentation (0), mycoprotein (0 to 1), fish or shrimp cell lines for food (0), cultivated meat (1, a legal analysis), texturised or extruded protein (1, a 2026 review) and mung bean protein (0 to 1) [@BIB-01; @RD-01] {VN-direct|Medium}.
5. **Plant-based meat research is about 5 on-topic papers from 2015 to 2026, and no Vietnamese extrusion study** (the one candidate is Taiwanese; see the correction below) [@BIB-01; @HSC-01] {VN-direct|Medium}.
6. **Vietnam's real strengths sit next to alternative protein:** aquafeed nutrition trials (Can Tho University, Nha Trang University), *Pichia pastoris* expression (VNU-HCM University of Science), human stem-cell culture including serum-free media (Vinmec, VNU-HCM Stem Cell Institute), fungal genetic tools for koji mould and *Cordyceps* (VNU Hanoi University of Science) and microalgae cultivation (Institute of Biotechnology VAST, VNUA) [@RD-01] {VN-direct|Medium}.
7. **Spirulina is Vietnam's biggest topic (87 records, 3.62 per 10,000), but the most-cited papers are about wastewater, diesel-engine fuel and nanoparticles**; only one surfaced paper extracts spirulina protein as an ingredient [@BIB-01] {VN-direct|Medium}.
8. **Output is rising from a very low base:** 7 records in 2015 to 2019, 14 in 2020 to 2022 and 21 in 2023 to September 2026, across the topic sets read in full [@BIB-01] {VN-direct|Low}.
9. **No Vietnamese DIAAS or PDCAAS study was found**, although Vietnamese groups do measure in vitro digestibility, RNA reduction and aflatoxin [@RD-01; @RD-23; @RD-31; @RD-61] {VN-direct|Medium}.
10. **Research money is national and small-grant based.** NAFOSTED is the funder most often acknowledged; international money (ACIAR, SATREPS, EU, Dutch) is present but not aimed at alternative protein; no GFI grantee in Vietnam was found [@RD-06; @RD-12; @RD-04; @RD-02] {VN-direct|Medium}.

## S7.2 How the counts were made

> **Method note.** All Vietnam counts are **lower bounds**. Scite's affiliation data are incomplete, and OpenAIRE's country tagging misses several Vietnamese papers found in wave 1 (for example HUST's rice distillers' grain protein papers) [@RD-01; @BIB-01] {VN-direct|High}. Both databases index Vietnamese-language journals only in part. OpenAIRE counts also contain false positives: in the Vietnam sets read in full, about 3 in 10 records were off-topic or had a doubtful Vietnam link [@BIB-01] {VN-direct|Medium}. Compare countries by order of magnitude, not to the decimal.

> **Correction.** The brief for wave 2 asked for OpenAlex counts. OpenAlex returned HTTP 429 ("too many requests") on all 4 attempts between 15:52 and 15:58 UTC on 23 September 2026; users without an API key now get a budget of USD 0.10 a day, most likely already used by the shared connection [@BIB-02; @BIB-03] {general|High}. Europe PMC was also refused [@BIB-04] {general|High}. Wave 2 therefore used the OpenAIRE Graph API [@BIB-01] {general|High}. Wave 1's Scite counts should not be used for country benchmarking: a Scite query for cultivated meat with the affiliation "Thailand" returned 1 paper, while OpenAIRE returned 49 Thai records for a comparable query [@BIB-05; @BIB-01] {general|High}. Section S7.13 gives the full method notes.

## S7.3 Topic-by-topic depth

Depth scale: *none*; *thin* (a few isolated papers, no sustained group); *moderate* (one or more groups publishing repeatedly); *strong* (several groups, international-level output). Wave 1 counts are Vietnam-affiliated papers found and screened in Scite; wave 2 counts are OpenAIRE VN-tagged records from 1 January 2015 to 23 September 2026, with records per 10,000 of Vietnam's 240,387 publications [@RD-01; @BIB-01] {VN-direct|Medium}.

| Topic | Wave 1 (Scite, screened) | Wave 2 (OpenAIRE raw count, per 10k) | Wave 2 after reading titles | Depth | Leading Vietnamese groups |
|---|---|---|---|---|---|
| Plant protein extraction and functionality (rice, rice bran, broken rice, distillers' grains, legumes, seeds) | 12 to 15 | Rice protein 1 (0.04); mung bean protein 1 (0.04); SPI or SPC 9 (0.37) | Rice: 1 (HUST papers missed); mung bean: 0 to 1; soy protein: 4 aquafeed, 2 food, 3 other | Thin | HUST; HCMUT; IBT VAST; IU VNU-HCM |
| Texturisation, extrusion, meat analogues | 2 plus 1 review | Plant-based meat 9 (0.37); textured or extruded protein 1 (0.04) | Plant-based meat about 6 on-topic (2 reviews, extrudate texture, soy burger, meat-reduced sausage, methyl cellulose and guar gum cooking study); textured protein: 1 review (2026) | Thin; at most one extrusion study | Not concentrated in one group |
| Fungal biomass, mycoprotein, koji, tempeh | 6 to 8 | Mycoprotein or fungal biomass 11 (0.46); *A. oryzae* 23 (0.96); tempeh or mycoprotein 4 (0.17) | Mycoprotein 0 to 1 (rest is biosorption); *A. oryzae*: genetic tools and enzymes; tempeh: 0 Vietnamese research | None for mycoprotein and tempeh; moderate for fungal genetic tools | VNU Hanoi HUS; HUST (traditional starters) |
| Yeast and bacterial single-cell protein; agro-waste to protein | 6 to 8 | Single-cell protein 6 (0.25) | 3 real, one of them retracted (plus its duplicate record) | Thin | HUST (spent yeast); VNU Hanoi IMBT (methanotroph) |
| Recombinant protein expression (precision fermentation hosts) | About 25 (83 Scite affiliation hits) | *Pichia* 25 (1.04); precision fermentation 1 (0.04) | *Pichia*: vaccine antigens and enzymes, no food protein in the top 10; precision fermentation: 0 | Moderate for pharmaceutical and enzyme proteins; none for food proteins | VNU-HCM University of Science; IBT VAST; VNU Hanoi HUS |
| Microalgae | 30 to 40 | Spirulina 87 (3.62); microalgae protein 3 (0.12) | Spirulina: top-cited are environment and fuel; microalgae protein: 3 network papers | Moderate for cultivation, wastewater and lipids; thin for protein as an ingredient | IBT VAST; VNUA; VAST chemistry and environment groups; HCMUTE |
| Seaweed protein | 3 to 5 | 1 (0.04) | 1 (feed) | Thin; none for food protein extraction | Can Tho University |
| Duckweed, *Wolffia*, azolla | About 8 | 23 (0.96) | Genomics and taxonomy | Thin; none for protein | Can Tho University journal survey; Vietnamese authors with IPK Gatersleben; AGI VAAS |
| Mushrooms and mycelium | About 40 on cultivation and bioactives; 2 to 3 on protein | not run | n/a | Moderate for cultivation; thin for mycelium as food | VNUA mushroom group |
| Cell culture for cultivated meat | 0 technical papers; more than 50 on human stem cells and scaffolds; 1 on livestock stem cells | Cultivated meat 1 (0.04); fish or shrimp cell line 1 (0.04) | Cultivated meat: 1 legal paper; cell line: 0 (a toxicology paper) | None for cultivated meat; strong for adjacent human cell therapy | Vinmec; VNU-HCM Stem Cell Institute; IU VNU-HCM |
| Insect protein (benchmark) | About 10 | Black soldier fly 34 (1.41) | Biodiesel plus feed | Thin to moderate | VNUA |
| Alternative protein in aquafeed | About 20 | Fishmeal replacement 10 (0.42); "alternative protein" 20 (0.83) | Fishmeal replacement: about 7 Vietnamese trials, 2 doubtful tags; "alternative protein": mostly feed | Moderate | Can Tho University; Nha Trang University (RIA1 to RIA3 not visible) |

Two query notes matter for re-runs [@BIB-01] {general|High}. "Koji" was dropped from the *A. oryzae* query because it matched the Japanese given name Koji in author fields (169 hits). A first textured-protein query that included "textured protein" OR "texturized protein" broke the search and returned the whole Vietnam total; it was discarded.

## S7.4 Regional benchmark

OpenAIRE records, 2015 to September 2026, with records per 10,000 of each country's total [@BIB-01] {VN-adjacent|Medium}:

| Country | Total publications | Novel-food basket (plant-based + cultivated meat) | Spirulina / *Arthrospira* | Fishmeal replacement |
|---|---|---|---|---|
| Vietnam | 240,387 | 9 (0.37) | 87 (3.62) | 10 (0.42) |
| Thailand | 310,198 | 49 (1.58) | 164 (5.29) | 14 (0.45) |
| Malaysia | 598,148 | 61 (1.02) | 178 (2.98) | 28 (0.47) |
| Indonesia (see note) | 2,667,071 | 47 (0.18) | 928 (3.48) | 27 (0.10) |
| Philippines | 161,138 | 10 (0.62) | 36 (2.23) | 11 (0.68) |
| Singapore | 380,453 | 112 (2.94) | 28 (0.74) | 6 (0.16) |

Notes. The basket query is "plant-based meat" OR "meat analogue" OR "cultured meat" OR "cultivated meat". Only Vietnam's titles were screened; the other countries' counts are raw. Indonesia's total is inflated by OpenAIRE's indexing of national open journals, so its per-10k figures understate its intensity [@BIB-01] {VN-adjacent|Medium}. OpenAIRE has no "group by" function, so each country and topic needs a separate query; China and South Korea were not run.

Readings:

- **Vietnam's weakness is specific to novel food technologies.** In algae and in aquafeed protein replacement it is at the regional level, and probably above it once the undercount is corrected [@BIB-01; @RD-01] {VN-direct|Medium}.
- **Singapore's profile is the mirror image:** strong on novel food, weak on feed and algae [@BIB-01] {VN-adjacent|Medium}.
- **A realistic five-year aim** would be for Vietnam's novel-food basket intensity (0.37 per 10,000) to reach the Philippines (0.62) or Malaysia (1.02) [@BIB-01] {VN-direct|Low}. This is the wave 2 agent's suggestion, not a policy target.

## S7.5 Trend

Year counts could be built only for the topic sets small enough to read in full (plant-based meat, textured protein, rice protein, soy protein, single-cell protein, tempeh or mycoprotein, cultivated meat, microalgae protein, seaweed protein, fishmeal replacement): 42 unique DOIs [@BIB-01] {VN-direct|Low}.

| Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 (to Sept) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Records | 0 | 3 | 0 | 2 | 2 | 4 | 5 | 5 | 6 | 5 | 6 | 4 |

By period: 7 records in 2015 to 2019, 14 in 2020 to 2022 and 21 in 2023 to September 2026 [@BIB-01] {VN-direct|Low}. The counts include false positives, so read them as direction only. Year splits for the larger sets (spirulina, black soldier fly, *Pichia*, *A. oryzae*, duckweed, "alternative protein") need OpenAlex.

## S7.6 Vietnam's adjacent strengths

**Aquafeed protein replacement** is the deepest applied field, with measured results from laboratory or tank trials [@RD-46; @RD-47; @RD-48] {VN-direct|High}:

- soy protein concentrate replaced 40% of fishmeal protein in snakehead with no loss of growth; 60 to 100% replacement reduced growth (2016);
- fermented soybean meal had 88.8% crude protein digestibility in whiteleg shrimp, with an optimum fishmeal replacement of 253.6 g/kg (2018);
- spent brewer's yeast replaced up to 60% of fishmeal protein in giant freshwater prawn without loss of growth or survival (2019).

**Food-grade side-stream protein (HUST)** [@RD-22; @RD-23; @RD-32] {VN-direct|Medium}:

- rice-based dried distillers' grains from Vietnamese ethanol plants hold 55 to 80% protein (dry matter); cassava distillers' grains only 13 to 16% (preprint, 2024);
- alkaline extraction recovered 90% of the protein, and enzymatically extracted protein was 77.1% digestible in vitro (2025);
- spent brewer's yeast protein was recovered at 84.9% and made into an energy bar with 14.9 g protein (2024).

**Recombinant growth factors and serum-free culture** [@RD-36; @RD-37; @RD-38; @RD-39] {VN-direct|Medium}. VNU-HCM groups expressed FGF-2, KGF/FGF7 and PDGF-BB in *Pichia* (2020 to 2021). Vinmec tested serum- and xeno-free media for cord-blood stem cells; only 1 of 4 commercial kits (StemMACS) worked (2022). These are the costliest ingredients of cultivated-meat media, made here for medicine, not food.

**Fungal genetic tools** [@RD-33; @RD-34] {VN-direct|Medium}. VNU Hanoi University of Science built an *Agrobacterium*-mediated transformation system with dual auxotrophic markers in *A. oryzae* (2021) and reached 100% *pyrG* deletion efficiency in five *Cordyceps militaris* strains, the base for a food-grade expression platform (2024).

**Microalgae cultivation** [@RD-21; @RD-20] {VN-direct|Medium}. A salt-tolerant Spirulina strain reached 48.73% protein (dry weight) in a 42 ppt medium (2023). VNUA published a review of Arthrospira production in Vietnam (2021).

**Mid-sized clusters that sit next to alternative protein** (OpenAIRE, VN-tagged): black soldier fly 34 records (the four most cited are about biodiesel from larval fat), *Pichia* 25 (mostly vaccine antigens and enzymes), *A. oryzae* 23 (mostly fungal genetic tools), duckweed 23 (mostly genomics and taxonomy) and "alternative protein" 20 (mostly feed) [@BIB-01] {VN-direct|Medium}. None of the ten most-cited papers in the *Pichia*, *A. oryzae* or duckweed clusters produces a food protein.

## S7.7 Representative papers

A selection from `publications.csv`. Citation counts are OpenAIRE counts from wave 2 where available. "Probable" means the institution was inferred from the author group, not read from the paper header [@RD-01; @BIB-01] {VN-direct|Medium}.

| DOI | Year | Topic | Institution | Key result | Citations | Evidence |
|---|---|---|---|---|---|---|
| 10.1002/apj.70043 | 2025 | Rice distillers' grain protein | HUST | 90% alkaline extraction; enzyme-extracted protein 77.1% digestible in vitro | n/a | [@RD-23] {VN-direct\|High} |
| 10.21203/rs.3.rs-3171967/v1 | 2024 | Rice distillers' grain | HUST | 55 to 80% protein (dry matter); preprint | n/a | [@RD-22] {VN-direct\|Medium} |
| 10.51316/jst.178.etsd.2024.34.5.4 | 2024 | Spent brewer's yeast protein | HUST | 84.9% protein recovery; energy bar with 14.9 g protein | n/a | [@RD-32] {VN-direct\|High} |
| 10.15625/2525-2518/55/5a/12192 | 2018 | Yeast RNA reduction | HUST (probable) | Nucleic acid reduction in spent-yeast hydrolysate | n/a | [@RD-31] {VN-direct\|Medium} |
| 10.1016/j.ifset.2021.102692 | 2021 | Rice protein recovery | HCMUT (probable) | Ultrafiltration recovery of rice protein | 22 | [@RD-24; @BIB-01] {VN-direct\|Medium} |
| 10.15625/0866-7160/v37n4.7091 | 2016 | Rice bran protein isolate | IBT VAST | Laboratory method for rice bran protein isolate | n/a | [@RD-25] {VN-direct\|High} |
| 10.1111/ijfs.17089 | 2024 | Hybrid meat | not established | 10 to 15% of meat replaced with germinated mung bean flour was accepted in sausage | 9 | [@RD-26; @BIB-01] {VN-direct\|Medium} |
| 10.17113/ftb.63.01.25.8629 | 2025 | Plant-based meat | not established | Mangosteen peel extract extends the shelf life of soy burgers | 3 | [@RD-27; @BIB-01] {VN-direct\|Medium} |
| 10.1093/ijfood/vvae080 | 2025 | Meat-analogue extrudates | Taiwan | The only VN-tagged extrusion experiment; all three authors at National Pingtung University of Science and Technology, so not Vietnamese | 9 | [@BIB-01; @HSC-01] {VN-direct\|Medium} |
| 10.1111/jfpe.70365 | 2026 | Plant-based fish analogues (review) | first author with a Vietnamese name; affiliation not verified | Review | 0 | [@RD-66; @BIB-01] {VN-direct\|Medium} |
| 10.15625/1811-4989/14/3/9876 | 2016 | Methanotroph single-cell protein | VNU Hanoi IMBT | Methane-oxidising bacterium isolated; no follow-up found | 1 | [@RD-28; @BIB-01] {VN-direct\|Medium} |
| 10.20944/preprints202503.1319.v1 | 2025 | Fungal fermentation of cassava residue | not established | *Pleurotus* mycelium on cassava plus soy residue raised protein 1.84-fold; preprint | n/a | [@RD-29] {VN-direct\|Medium} |
| 10.1007/s12649-022-01724-x | 2022 | Cassava bagasse with *Aspergillus* co-culture | not verified | Closest item to cassava-to-protein; protein enrichment not yet checked | 8 | [@BIB-01] {VN-direct\|Medium} |
| 10.1007/s11274-021-03060-z | 2021 | *A. oryzae* genetic tools | VNU Hanoi HUS (probable) | Dual-auxotrophic transformation system | 13 | [@RD-33; @BIB-01] {VN-direct\|Medium} |
| 10.1007/s11274-017-2275-9 | 2017 | *A. oryzae* genetic tools | VNU Hanoi HUS (probable) | Uridine/uracil auxotrophs | 43 | [@BIB-01] {VN-direct\|Medium} |
| 10.47371/mycosci.2024.10.003 | 2024 | *Cordyceps* expression platform | VNU Hanoi HUS (probable) | 100% *pyrG* deletion efficiency in five strains | n/a | [@RD-34] {VN-direct\|Medium} |
| 10.15625/vjbt-21940 | 2025 | *Pichia* phytase for aquafeed | VNU-HCM US (probable) | Secreted alkaline phytase active at pH 7.5 | n/a | [@RD-35] {VN-direct\|Medium} |
| 10.32508/stdj.v23i2.1746 | 2020 | FGF-2 in *Pichia* | VNU-HCM US | Multi-copy secretory expression | n/a | [@RD-36] {VN-direct\|High} |
| 10.32508/stdjet.v4i3.858 | 2021 | PDGF-BB in *Pichia* | VNU-HCM | Fed-batch strategies | n/a | [@RD-37] {VN-direct\|High} |
| 10.1186/s13104-017-2471-6 | 2017 | *Pichia* versus *S. cerevisiae* | VNU-HCM (probable) | Host comparison | 42 | [@BIB-01] {VN-direct\|Medium} |
| 10.1186/s13287-021-02694-y | 2022 | Serum- and xeno-free media | Vinmec | 1 of 4 commercial kits worked for cord-blood stem cells | n/a | [@RD-39] {VN-direct\|High} |
| 10.1262/jrd.2019-050 | 2019 | Porcine germline stem cells | IU VNU-HCM (probable) | The only livestock stem-cell paper found | n/a | [@RD-42] {VN-direct\|Medium} |
| 10.2478/vjls-2024-0013 | 2024 | Cultivated meat regulation | legal scholars | EU and Singapore rules, implications for Vietnam; the only Vietnamese cultivated-meat paper | 0 | [@RD-43; @BIB-01] {VN-direct\|High} |
| 10.3390/su151511906 | 2023 | Salt-tolerant Spirulina | IBT VAST | 48.73% protein (dry weight) in 42 ppt medium | n/a | [@RD-21] {VN-direct\|High} |
| 10.54644/jte.70b.2022.1213 | 2022 | Spirulina protein extraction with cellulase | HCMUTE (journal) | The only spirulina protein-as-ingredient item surfaced | 5 | [@BIB-01] {VN-direct\|Low} |
| 10.22144/ctu.jen.2022.029 | 2022 | Duckweed diversity | Can Tho University journal | Over 100 wild duckweed samples collected nationwide | n/a | [@RD-44] {VN-direct\|Medium} |
| 10.1038/s41598-020-75728-9 | 2020 | Duckweed genome | Vietnamese first author with IPK Gatersleben | Chromosome-scale *Spirodela intermedia* genome | 37 | [@RD-71; @BIB-01] {VN-direct\|High} |
| 10.1111/are.13147 | 2016 | SPC in snakehead feed | Can Tho University | 40% of fishmeal protein replaced without growth loss | 23 | [@RD-47; @BIB-01] {VN-direct\|High} |
| 10.1111/anu.12648 | 2018 | Fermented soybean meal in shrimp feed | Nha Trang University (probable) | 88.8% protein digestibility; optimum 253.6 g/kg replacement | n/a | [@RD-46] {VN-direct\|Medium} |
| 10.1111/anu.12915 | 2019 | Brewer's yeast in prawn feed | Can Tho University with Swedish partners | Up to 60% of fishmeal protein replaced | n/a | [@RD-48] {VN-direct\|High} |
| 10.1007/s10811-018-1457-7 | 2018 | Seaweed protein in shrimp feed | Can Tho University | *Cladophora* protein partly replaced fishmeal in black tiger shrimp postlarvae | 25 | [@RD-50; @BIB-01] {VN-direct\|Medium} |
| 10.3390/aquacj5010007 | 2025 | Black soldier fly larvae in eel feed | VNUA | 30% larvae meal best in swamp eel; feed conversion ratio 2.33 | n/a | [@RD-54] {VN-direct\|High} |
| 10.3390/foods11111531 | 2022 | Catfish side-stream protein | Nha Trang University | pH-shift recovery of protein from tra catfish side streams | n/a | [@RD-52] {VN-direct\|High} |
| 10.47866/2615-9252/vjfc.4588 | 2025 | Traditional soy sauce safety | NIFC journal | Aflatoxin tested in 38 *tương* (fermented soybean paste) samples | n/a | [@RD-61] {VN-direct\|Medium} |

## S7.8 Institutions and their capabilities

Summary from `institutions.csv` (31 rows). Location is the current province [@RD-01] {VN-direct|Medium}.

| Institution | Location | Relevant capability | Evidence strength | Sources |
|---|---|---|---|---|
| Hanoi University of Science and Technology (HUST), biotechnology and food technology | Hanoi | Protein extraction and characterisation (SDS-PAGE, DSC, in vitro digestibility); enzymatic hydrolysis; yeast fermentation; ethanol processes | Medium; strongest group on food-grade side-stream protein | [@RD-22; @RD-23; @RD-31; @RD-32; @RD-56] {VN-direct\|Medium} |
| VNU Hanoi University of Science (HUS), fungal molecular biology | Hanoi | *A. oryzae*, *Penicillium* and *Cordyceps* transformation and markers | Medium; attribution probable | [@RD-33; @RD-34] {VN-direct\|Medium} |
| VNU Hanoi Institute of Microbiology and Biotechnology (IMBT) and the Vietnam Type Culture Collection (VTCC) | Hanoi | Culture collection supplying strains used in Vietnamese papers; methanotroph isolation | Medium | [@RD-01; @RD-28] {VN-direct\|Medium} |
| VNU-HCM University of Science (HCMUS) | Ho Chi Minh City | *Pichia* expression (multi-copy strains, fed-batch); growth factors; bacteriocins; phytase; CRISPR yeast | Medium | [@RD-35; @RD-36; @RD-37; @RD-38] {VN-direct\|Medium} |
| Stem Cell Institute, VNU-HCM University of Science | Ho Chi Minh City | Stem-cell isolation and expansion, spheroids, scaffolds | Medium; human biomedical focus | [@RD-41] {VN-direct\|Medium} |
| Vinmec Research Institute of Stem Cell and Gene Technology | Hanoi | GMP-oriented stem-cell culture; serum- and xeno-free media testing | Medium; no food or animal-cell work | [@RD-39; @RD-40] {VN-direct\|Medium} |
| VNU-HCM International University (IU), School of Biotechnology | Ho Chi Minh City | Germination, starch and protein chemistry; porcine germline stem cells | Low; attribution from author groups | [@RD-42] {VN-direct\|Low} |
| Ho Chi Minh City University of Technology (HCMUT) | Ho Chi Minh City | Ultrafiltration of rice protein; fermentation of defatted rice bran | Medium | [@RD-24] {VN-direct\|Medium} |
| Institute of Biotechnology (IBT), VAST | Hanoi | Microalgae strain collection and cultivation; *Pichia* and *A. niger* expression; rice bran protein isolate | Medium | [@RD-21; @RD-25] {VN-direct\|Medium} |
| Vietnam National University of Agriculture (VNUA) | Hanoi | Mushroom strains and cultivation; spirulina; fish and poultry feeding trials | High (880 Scite affiliation records) | [@RD-20; @RD-01] {VN-direct\|High} |
| Can Tho University (CTU), College of Aquaculture and Fisheries | Can Tho | Fish and shrimp nutrition and digestibility trials; seaweed and Artemia protein; duckweed germplasm survey | High; strongest publisher on alternative aquafeed protein | [@RD-10; @RD-47; @RD-48; @RD-50] {VN-direct\|High} |
| Nha Trang University (NTU) | Khanh Hoa | Fish side-stream protein (pH-shift); hydrolysates; marine fish nutrition trials | Medium (183 Scite affiliation records) | [@RD-46; @RD-52; @RD-53] {VN-direct\|Medium} |
| Food Industries Research Institute (FIRI), under MOIT | Hanoi | Online microbial culture collection; pilot production and technology transfer centre; enzyme and protein technology department; accredited testing | High for structure; equipment sizes not published | [@RD-07] {VN-direct\|High} |
| National Institute for Food Control (NIFC), under MOH | Hanoi | Mycotoxin, contaminant and nutritional analysis (aflatoxin limit of detection 0.74 µg/kg reported in its journal) | Medium | [@RD-61] {VN-direct\|Medium} |
| Agricultural Genetics Institute (AGI), VAAS | Hanoi | Duckweed regeneration and transformation (vaccine antigen) | Low; attribution probable | [@RD-01] {VN-direct\|Low} |
| Research Institutes for Aquaculture No. 1, 2 and 3 (RIA1 to RIA3), under MAE | Bac Ninh; Ho Chi Minh City; Khanh Hoa | Aquaculture research; nutrition work not visible in Scite | Low | [@RD-01] {VN-direct\|Low} |
| Ho Chi Minh City Biotechnology Center | Ho Chi Minh City | Claimed pilot fermentation services (not verified; see [[app-s8-labs-talent]]) | Low | [@RD-01] {VN-direct\|Low} |

Named institutions with **no relevant output found** in the Scite search: University of Danang, IUH, Van Lang, VinUni, RMIT Vietnam, Fulbright, Phenikaa, Hue University (one unconfirmed attribution), the Field Crops Research Institute (breeding only), and Nong Lam University (not searched by affiliation) [@RD-01] {VN-direct|Low}. This is evidence of low visibility in indexed journals, not proof that they do no relevant work.

A count-based institution ranking was not possible without OpenAlex. The wave 2 qualitative order, built from wave 1 attributions and the DOIs surfaced, is: VNU Hanoi HUS (*A. oryzae* tools), VNU-HCM HCMUS (*Pichia*), IBT VAST (microalgae), HUST (side-stream protein), Can Tho University (aquafeed), Nha Trang University (aquafeed), VNUA (spirulina, black soldier fly), HCMUT (rice protein), VNU Hanoi IMBT (methanotroph), HCMUTE (spirulina protein) [@BIB-01] {VN-direct|Low}. HUST is under-represented in OpenAIRE's Vietnam tag.

After the 2025 reforms, RIA1 to RIA3 and VAAS sit under the Ministry of Agriculture and Environment (MAE), FIRI under MOIT, NIFC under MOH and NAFOSTED under MOST [@RD-01] {VN-direct|Medium}. These mappings were not re-verified.

## S7.9 International collaborations

| Partner | Vietnamese partner | Topic | Evidence |
|---|---|---|---|
| Wageningen University and Research (Netherlands) | Can Tho University | Pangasius digestion and faecal waste; seaweed for livestock methane reduction (2022 seed study) | 10.1111/anu.12632; 10.18174/566553 [@RD-58; @RD-57] {VN-direct\|High} |
| Swedish University of Agricultural Sciences (SLU) | Can Tho University | Brewer's yeast replacing fishmeal and soybean meal in prawn and tilapia | 10.1111/anu.12915; 10.3390/aquacj4040019 [@RD-48; @RD-49] {VN-direct\|High} |
| Deakin University (Australia) | Nha Trang University | High plant-protein diets with fish protein hydrolysate in barramundi | 10.1111/anu.13404 [@RD-53] {VN-direct\|High} |
| Agreenium / Institut Agro Dijon (France), Erasmus+ AsiFood | HUST and others | Tropical Fermentation Network: starters, safety, by-product use | 10.3389/fmicb.2018.02278 [@RD-56] {VN-direct\|High} |
| IPK Gatersleben (Germany) | Vietnamese duckweed researcher | Duckweed genomics | 10.1038/s41598-020-75728-9 [@RD-71] {VN-direct\|High} |
| German partners | VAST | Fungal strain collection from Vietnam | 10.1371/journal.pone.0202695 [@RD-60] {VN-direct\|Medium} |
| Belgian partners | Vietnamese authors | Microalgae isolated from shrimp ponds for food, feed and biodiesel | 10.3390/en13040898 [@RD-62] {VN-direct\|Medium} |
| Japanese universities, SATREPS (JST-JICA) | various | Biomass energy at a shrimp farm (Ben Tre); indigenous pig genetics; cassava mosaic disease | Scite acknowledgements [@RD-01; @RD-11] {VN-direct\|Medium} |
| ACIAR (Australia) | various | Grouper manufactured feed; pangasius food loss | [@RD-04] {VN-direct\|High} |
| Ghent University (Belgium) | Can Tho University | Artemia and shrimp health (not protein) | Scite acknowledgements [@RD-01] {VN-direct\|Medium} |
| FiBL (Switzerland) | Binca Seafoods (prior lead) | Duckweed | No Vietnam publication found; FiBL duckweed papers are European trials [@RD-59] {VN-adjacent\|Medium} |
| Japanese koji partners; Korean institutes | none found | none | Gap [@RD-01] {VN-direct\|Low} |

The share of Vietnamese papers with international co-authors was not measured: OpenAIRE returned no affiliations [@BIB-01] {VN-direct|High}. Qualitatively, the most-cited VN-tagged records in microalgae, spirulina and black soldier fly come from international networks (Malaysia-led microalgae groups, a Taiwan-based black soldier fly biodiesel group, the IPK duckweed network) [@BIB-01] {VN-direct|Low}. Work led from inside Vietnam on protein ingredients typically has 0 to 25 citations [@BIB-01] {VN-direct|Low}.

## S7.10 Research funding programmes

From `research_funding.csv` (16 rows). Capital-side programmes (venture funds, NATIF loans, philanthropic RFPs for companies) are in [[app-s11-capital]].

| Programme | Funder | Relevant scope | Amount | Status in 2026 | Evidence |
|---|---|---|---|---|---|
| NAFOSTED basic research grants | NAFOSTED (MOST) | Basic and applied research, technology development, international cooperation | Typical size not established | Operating; the funder most often acknowledged (255 Scite records matched NAFOSTED with protein, fermentation or aquafeed terms) | [@RD-06; @RD-12] {VN-direct\|Medium} |
| NAFOSTED international joint calls | NAFOSTED with foreign agencies | Joint projects | not established | Category listed; 2025 to 2026 partner calls not verified | [@RD-06] {VN-direct\|Low} |
| Vingroup Innovation Foundation (VINIF) | Vingroup | Research projects (Big Data emphasis); Master's, PhD and postdoctoral support | 2018 to 2023: more than 3,000 scientists supported; about 1,300 Master's and PhD scholarships; 180 postdoctoral fellowships; 117 projects | 2025 to 2026 status not shown; appears in relevant papers mainly as scholarship support | [@RD-05; @RD-12] {VN-direct\|Medium} |
| Law on Science, Technology and Innovation 93/2025/QH15 | National Assembly | Specialised funds with state capital (Art 6); research-risk exemption (Art 9(3)); controlled testing or sandbox (Arts 21 to 23) | n/a | Issued 27 June 2025; effective date not verified | [@RD-08] {VN-direct\|Medium} |
| Resolution 57-NQ/TW (2024) and Resolution 36-NQ/TW (2023) | Politburo | Science, technology and biotechnology budget expansion | Targets not verified; not quoted | In force | [@RD-13] {VN-direct\|Low} |
| Ministerial biotechnology programmes (MAE, MOIT) | Ministries | Agricultural and industrial biotechnology | not established | Decision numbers not retrieved | [@RD-13] {VN-direct\|Low} |
| Provincial science and technology funding | Provincial departments of science and technology (34 provinces) | Applied projects with local industry | not established | Operating; budgets not retrieved | [@RD-13] {VN-direct\|Low} |
| GFI Research Grant Program | Good Food Institute | Plant-based, fermentation, cultivated | USD 27 million or more in 141 grants in 26 countries since 2019 | Not accepting submissions; no grantee in Vietnam or Southeast Asia shown on the page read | [@RD-02; @RD-03] {general\|High} |
| ACIAR Vietnam programme | Australian Centre for International Agricultural Research | Aquaculture (including grouper manufactured feed), pangasius food loss, cassava disease, livestock | AUD 5.4 million across 23 projects in FY2025-26 | Active; commissioned through Australian partners, not open calls | [@RD-04] {VN-direct\|High} |
| SATREPS | JST and JICA | Research for development | not established | 203 projects in 60 countries (April 2026); Vietnamese projects on biomass energy and pig genetics, not protein | [@RD-11] {VN-adjacent\|Medium} |
| EU Erasmus+ AsiFood; Horizon Europe | European Union | Fermentation training; collaborative research | not established | AsiFood ended; no Vietnamese alt-protein Horizon Europe participation found | [@RD-56] {VN-direct\|Medium} |
| Dutch Nuffic/NICHE fellowships and Top Sector seed money | Netherlands | Pangasius nutrition PhDs; seaweed for methane (2022) | not established | Historical collaboration path to Wageningen | [@RD-57; @RD-58] {VN-direct\|Medium} |
| Newton Fund (UK), USAID (US) | UK, US | Legacy cooperation | not established | Not verified as live; do not rely on them | [@RD-13] {VN-adjacent\|Low} |
| KOICA and Korean institutes | Korea | none on alt protein found | not established | Not verified | [@RD-01] {VN-adjacent\|Low} |

## S7.11 Eleven research gaps Vietnam is well placed to fill

Each gap meets three tests: Vietnam holds a scarce raw material, species or skill; we found no peer-reviewed work on it by anyone in Vietnam; and a named Vietnamese group already has the adjacent skill [@RD-01] {VN-direct|Medium}.

1. **Cell lines from striped catfish, whiteleg and black tiger shrimp, Asian seabass, grouper and snakehead for cultivated seafood.** No fish or shrimp cell line developed in Vietnam was found [@RD-01; @BIB-01] {VN-direct|Medium}. Adjacent skills: Vinmec and the VNU-HCM Stem Cell Institute (culture, serum-free media); aquatic virology laboratories.
2. **Low-cost recombinant growth factors for fish-cell media.** FGF-2, KGF and PDGF-BB are already expressed in *Pichia* at VNU-HCM; nobody has tested them on fish cells or costed them per gram [@RD-36; @RD-37; @RD-38] {VN-direct|Medium}.
3. **Fungal biomass protein from cassava pulp and peel with a food-grade safety package** (cyanide, mycotoxins, RNA, digestibility). Only a *Pleurotus* preprint for feed exists [@RD-29] {VN-direct|Medium}. Adjacent skills: the *A. oryzae* toolkit at VNU HUS, RNA reduction in yeast at HUST, aflatoxin analysis at NIFC.
4. **Koji (*tương*) strains as a mycoprotein chassis.** Indigenous *A. oryzae* strains are held at VTCC and FIRI, and genetic tools exist; no biomass-protein study was found [@RD-33; @RD-07] {VN-direct|Medium}.
5. **Rice distillers' grain and broken-rice protein texturisation.** Extraction is published (HUST); extrusion and functionality in meat analogues are not [@RD-23] {VN-direct|Medium}.
6. **Protein extraction and feeding trials with Vietnamese duckweed clones**, using the collection of more than 100 wild samples [@RD-44] {VN-direct|Medium}.
7. **Microalgae protein ingredients from salt-tolerant Spirulina** (48.7% protein measured) grown on seawater or brackish water on the south-central coast; only cultivation physiology is published [@RD-21] {VN-direct|Medium}.
8. **Seaweed protein** (*Ulva*, *Caulerpa*, *Kappaphycus*) for food and feed; only small shrimp postlarvae trials exist [@RD-50; @RD-51] {VN-direct|Medium}.
9. **Methanotroph or biogas-derived bacterial protein** from pig-farm and cassava-starch biogas; one isolation paper (2016), no follow-up [@RD-28] {VN-direct|Medium}.
10. **A DIAAS or PDCAAS reference dataset for Vietnamese protein ingredients** (rice distillers' grain, mung bean, gac seed, spent yeast, catfish side-stream isolates, spirulina). Nothing found [@RD-01] {VN-direct|Medium}. This is a cheap public good every plant-based and feed play needs; no commercial Vietnamese laboratory offering digestibility assays was found either ([[app-s8-labs-talent]]).
11. **Bacterial single-cell protein and fungal meal in pangasius and whiteleg shrimp diets.** Soy, yeast, black soldier fly and seaweed have been tested; novel microbial meals have not [@RD-01] {VN-direct|Medium}.

> **Correction.** A prior lead pointed to Indian ICAR-NBFGR pangasius cell lines as a transfer route for gap 1. The striped catfish thymus line PHT (NRFC-078) is real, but it is a serum-dependent (20% foetal bovine serum), adherent, epithelial line made for virology and toxicology, not a food cell line [@SCI-10] {VN-adjacent|High}. The shrimp line PmLyO-Sf9 is a black tiger shrimp and insect (Sf9) hybrid from Cochin University of Science and Technology, not ICAR-NBFGR, and contains an insect genome [@SCI-12] {general|High}. Neither removes the gap.

> **Correction.** For gap 6, note the regulatory evidence abroad: EFSA could not establish the safety of whole *Wolffia globosa* powder (manganese intake) in 2021, but found a *Lemna* protein concentrate safe in 2023 [@SCI-28; @SCI-30] {general|High}. The "PDCAAS 0.89" figure for duckweed in earlier drafts is not supported by any primary source found and must not be used [@SCI-34] {general|Low}. Protein extraction, not whole-plant powder, is the safer research target. See [[app-s13-science]].

Quickest to publish, in the wave 1 agent's judgement: the DIAAS dataset, duckweed protein from the national collection, rice distillers' grain texturisation, and *Pichia* growth factors tested on fish cells [@RD-01] {VN-direct|Low}.

## S7.12 Retraction and data-quality flags

- **Retracted.** The 2023 paper on single-cell protein and nanocellulose from bamboo cellulose (10.1051/e3sconf/202342009003) is retracted, and a duplicate record of it (10.60692/0q29a-9j360) is still indexed. Both are excluded from every count and capability claim [@RD-30; @BIB-01] {VN-direct|High}.
- **Probable false positives among top-cited "Vietnamese" items.** A 240-citation 2021 review of plant-based meat analogues (10.1007/s00217-021-03810-1) is VN-tagged, but its author team appears Korea- or Malaysia-based [@BIB-01] {VN-direct|Low}. An 821-citation 2019 microalgae review (10.1016/j.fshw.2019.03.001) is a Malaysia-led network paper with a Vietnamese co-author, not led from Vietnam [@BIB-01] {VN-direct|Low}.
- **Doubtful tags inside small topic sets.** The single mung bean protein hit is an Indonesian journal study (10.22437/ifstj.v9i1.45748); one fishmeal-replacement hit looks like a wrong Vietnam tag (an *Azolla* preprint on *Etroplus*); the Indian-journal trial on *Leucaena* is a genuine Tra Vinh University study ([@HSC-01]); two tempeh hits are Indonesian peptide papers [@BIB-01] {VN-direct|Medium}.
- **Affiliation now checked.** The only VN-tagged extrusion experiment (10.1093/ijfood/vvae080, 2025) is from a Taiwanese university, so we found no Vietnamese extrusion study [@HSC-01] {VN-direct|Medium}.
- **Preprints.** Three wave 1 records are preprints, not peer-reviewed: 10.21203/rs.3.rs-3171967/v1, 10.21203/rs.3.rs-7881609/v1 and 10.20944/preprints202503.1319.v1 [@RD-22; @RD-29] {VN-direct|Medium}.
- **Probable attributions.** Many institution attributions in `publications.csv` were inferred from author groups, not read from paper headers; the `institutions` column says "probable" or "not established" where so [@RD-01] {VN-direct|Medium}.

> **Correction.** Earlier drafts said "no Vietnamese study has reported RNA reduction protocols, mycotoxin testing or amino acid digestibility". This is too strong. HUST studied nucleic acid reduction in spent-yeast hydrolysate (2018), a 2025 paper in the NIFC journal tested aflatoxin in 38 *tương* samples, and HUST measured in vitro digestibility of rice distillers' grain protein (2025) [@RD-31; @RD-61; @RD-23] {VN-direct|Medium}. The accurate statement is narrower: none of these methods has been applied to a novel microbial biomass, and no Vietnamese DIAAS or PDCAAS study was found.

> **Correction.** Wave 1 found 2 Vietnam-affiliated plant-based meat papers and "none" on extrusion. Wave 2 found about 6 on-topic plant-based meat records and one VN-tagged extrudate texture study with an unverified affiliation. The report uses "about 6 (2015 to 2026), including 2 reviews" and "at most one extrusion study" [@BIB-01] {VN-direct|Medium}. For fishmeal replacement, wave 2's 10 records are lower than wave 1's term-search count of about 20; the report keeps about 20 as the better floor [@RD-01; @BIB-01] {VN-direct|Medium}. All are logged in [[app-r2-disagreements]].

> **Correction.** OpenAlex author records show that the only VN-tagged extrusion experiment (10.1093/ijfood/vvae080) lists three authors at National Pingtung University of Science and Technology (Taiwan). Vietnam's count of extrusion studies is therefore zero and of on-topic plant-based meat papers about 5. Conversely, the *Leucaena* shrimp-feed trial (10.21077/ijf.2023.70.1.129063-09), listed above as a probable wrong tag, has both authors at Tra Vinh University and is a genuine Vietnamese study [@HSC-01] {VN-direct|Medium}.

## S7.13 Method notes: Scite and OpenAIRE

**Scite (wave 1)** [@RD-01] {VN-direct|High}

- 30 searches on 23 September 2026. Two modes: an affiliation filter set to "Vietnam" or a named institution, and term searches that include "Vietnam". Hit totals before screening were often very large (for example 12,645 for protein extraction with the Vietnam filter) and are meaningless on their own; only the manual screen counts.
- The affiliation filter is incomplete. For fishmeal replacement it returned 3 papers, while term searches found at least 10 [@RD-01] {VN-direct|High}.
- Scite returns only the first three authors and no affiliations, so a map of Vietnamese researchers abroad could not be built.
- *Livestock Research for Rural Development* (LRRD), which holds much Can Tho, Nong Lam and Hue work on duckweed and cassava protein, is only partly indexed.
- Stopping rule: searches stopped when new queries returned mainly the same papers or unrelated chemistry and medicine records.

**OpenAIRE (wave 2)** [@BIB-01] {general|High}

- OpenAIRE Graph API v1, `researchProducts` endpoint, 16:00 to 16:40 UTC on 23 September 2026. Filter: country code, publication date 1 January 2015 to 23 September 2026, type "publication". The exact URL of every query is in `biblio_counts.csv`.
- The `search` parameter covers title, abstract and some other fields, so single words that are also names are risky (the "koji" case).
- The "publication" type includes non-peer-reviewed items and duplicates, and Indonesia's total is inflated by national journal indexing.
- OpenAIRE returns no affiliations and has no group-by, so institution rankings, co-authorship shares and year splits for large topics were not possible.

**OpenAlex (planned re-run).** A ready-to-run plan of about 100 OpenAlex queries is kept in the wave 2 working papers. With a free API key (budget USD 1 a day) it would take under an hour and would give the institution top 10, the international co-authorship share (filter on more than one distinct country), year trends for large topics, and China and South Korea as scale references [@BIB-02] {general|High}.

## Gaps and how to close them

| Gap | Cheapest way to close it |
|---|---|
| Institution ranking, co-authorship share, trends for large topics, China and Korea benchmarks | Get a free OpenAlex API key and run the stored re-run plan (about 100 calls). |
| Vietnamese-language journals only partly indexed | Ask NAFOSTED or the Vietnam Citation Index team for topic counts; screen LRRD 2010 to 2026 for Vietnamese affiliations. |
| Affiliation of the most-cited network papers (the extrusion study is resolved) | Read the paper headers or OpenAlex institution IDs. |
| Probable institution attributions in `publications.csv` | OpenAlex institution IDs, or read the headers. |
| RIA1 to RIA3 aquafeed trials invisible in Scite | Search Vietnamese-language fisheries journals; call the RIA2 nutrition department. |
| NAFOSTED and VINIF grant sizes and 2026 calls | Latest NAFOSTED call notice and funding-norm circular; VINIF annual report. |
| Resolution 57 and 36 targets; MAE and MOIT biotechnology programme decisions | thuvienphapluat.vn or vanban.chinhphu.vn. |
| Vietnamese researchers abroad | ORCID and LinkedIn searches at Wageningen, NUS and A*STAR, Massey, Ghent, UC Davis and Tufts; ask GFI APAC and NIC. |
| GFI grants in 2025 and 2026 | Re-check the GFI grants page and the planning-grant announcements. |
| Current SATREPS, KOICA and Horizon Europe projects | JST project list, KOICA Vietnam office, EU CORDIS. |

See also [[app-r1-open-questions]].

## Related data files

- `publications.csv`: 103 Vietnam-affiliated or VN-tagged papers with DOI, institution, topic, key result and citation count.
- `biblio_counts.csv`: 42 OpenAIRE counts by topic and country, with query strings and URLs.
- `biblio_trend_vn.csv`: 132 year-by-topic counts for the Vietnam sets read in full.
- `institutions.csv`: 31 institutions with capabilities, example DOIs and contacts.
- `research_funding.csv`: 16 national and international research funding programmes.
- `science_facts.csv`: technology-level facts used in the corrections above ([[app-s13-science]]).
- Working papers: `working-papers/wave1/rnd/` and `working-papers/wave2/biblio/`.
