# Bibliometrics: Vietnam's alternative-protein research output, benchmarked against Southeast Asia

Agent: BIBLIO (wave 2). Edition: September 2026. Research done on 23 September 2026 (about 15:50 to 16:40 UTC).
Files in this folder:
- `bibliometrics.md` (this note)
- `biblio_counts.csv` (42 rows: counts, query strings, full query URLs, per-10,000 shares)
- `biblio_trend_vn.csv` (year split for the Vietnam topic sets that could be read in full)
- `biblio_institutions_vn.csv` (10 institutions, qualitative order, not count-based)
- `biblio_top_papers_vn.csv` (40 papers with DOI, year and citations)
- `biblio_raw_query_log.txt` (every query result as returned)
- `biblio_openalex_rerun_urls.txt` (the planned OpenAlex queries, ready to run with a free API key)

**Important change of method.** The brief asked for OpenAlex counts. OpenAlex was not reachable. Every OpenAlex request returned HTTP 429 ("too many requests"; 4 attempts, 15:52 to 15:58 UTC). OpenAlex now gives users without an API key a budget of USD 0.10 per day (BIB-02). Our fetch connection is shared, so that budget was most likely already used up. Europe PMC was also refused (HTTP 429 from the fetch proxy). We therefore used the **OpenAIRE Graph API** (BIB-01). It is a free, open scholarly database, similar to OpenAlex, and every count in this note can be re-run from the URL stored in `biblio_counts.csv`. OpenAIRE has no "group by" function. Each country and topic count therefore needs a separate query, which limited how many benchmark topics we could run (3 topic groups for the comparison countries, 20 topics for Vietnam). China and South Korea were not run.

**How to read the numbers.**
- "VN-tagged" means OpenAIRE links the record to Vietnam through its `countryCode` field. In practice this means at least one author has a Vietnamese affiliation that OpenAIRE could match.
- The window is publication date from 1 January 2015 to 23 September 2026, and the record type is "publication".
- "Per 10k" means topic records per 10,000 of the country's total OpenAIRE publication records in the same window.
- All counts are **lower bounds** for Vietnam. OpenAIRE misses several Vietnamese papers found in wave 1 (for example HUST's rice DDG protein papers).
- They also contain **false positives**. In the Vietnam sets we read in full, about 3 in 10 records were off-topic or had a doubtful Vietnam link.
- Compare countries by order of magnitude. Do not compare them to the decimal.

---

## Headline findings

1. **Vietnam's output on food-facing alternative protein (plant-based meat or cultivated meat) is 5 to 12 times smaller than the output of its main regional peers.** Records tagged to each country, 2015 to 2026:
   - Vietnam: 9
   - Philippines: 10
   - Indonesia: 47
   - Thailand: 49
   - Malaysia: 61
   - Singapore: 112

   [VN-direct / VN-adjacent] Medium. BIB-01.

2. **The gap remains after adjusting for the size of each country's research base.** Records per 10,000 publications:
   - Vietnam: 0.37
   - Philippines: 0.62
   - Malaysia: 1.02
   - Thailand: 1.58
   - Singapore: 2.94

   Vietnam's intensity is about a quarter of Thailand's and an eighth of Singapore's. Indonesia (0.18) is not comparable because OpenAIRE indexes many Indonesian national journals, which inflates its total. [VN-direct] Medium. BIB-01.

3. **In feed-side protein, Vietnam is on par with the region.** Fishmeal-replacement records per 10,000 publications: Vietnam 0.42 (10 records), Thailand 0.45 (14), Malaysia 0.47 (28), Philippines 0.68 (11). The Vietnam figure is certainly an undercount: wave 1 found about 20 Vietnamese aquafeed replacement papers using broader terms (BIB-06). [VN-direct] Medium. BIB-01, BIB-06.

4. **Spirulina is Vietnam's biggest topic in this set, with 87 records (3.62 per 10,000).** This is similar to Malaysia (2.98) and Indonesia (3.48), below Thailand (5.29), and well above Singapore (0.74). **However, the most-cited Vietnam-tagged spirulina papers are about wastewater, diesel-engine biofuel and nanoparticles.** Only one surfaced paper (2022, 5 citations) is about extracting spirulina protein as an ingredient. [VN-direct] Medium. BIB-01.

5. **Vietnam has zero or near-zero records in six core technology areas** (the counts include false positives, removed after reading the titles):
   - Precision fermentation or recombinant food proteins: 0 after screening (1 raw record, off-topic).
   - Mycoprotein: 0 to 1.
   - Fish or shrimp cell lines for food: 0 (1 raw record, a toxicology paper).
   - Cultivated meat: 1, and it is a 2024 legal analysis, not a technical paper.
   - Texturised or extruded protein: 1 (a 2026 review).
   - Mung bean protein: 0 to 1.

   This confirms wave 1 with a second, independent database. [VN-direct] Medium to High. BIB-01, BIB-06.

6. **Vietnam's mid-sized clusters sit next to alternative protein, not inside it:**
   - Black soldier fly: 34 records. The four most-cited are about biodiesel from larval fat.
   - *Pichia pastoris*: 25. Mostly vaccine antigens and enzymes.
   - *Aspergillus oryzae*: 23. Mostly fungal genetic tools.
   - Duckweed: 23. Mostly genomics and taxonomy.
   - "Alternative protein" as a phrase: 20. Mostly feed.

   None of the ten most-cited papers in the Pichia, *A. oryzae* or duckweed clusters produces a food protein. [VN-direct] Medium. BIB-01.

7. **Plant-based meat has a small but real Vietnamese record, larger than wave 1 found.** The query returned 9 records, and we judge about 6 to be on-topic:
   - two reviews;
   - a 2025 study of the texture of meat-analogue extrudates (10.1093/ijfood/vvae080);
   - a soy-burger shelf-life study;
   - a sausage with part of the meat replaced;
   - a 2026 cooking study with methyl cellulose and guar gum.

   The 2025 extrudate study contradicts wave 1's "none" for extrusion, but we have not verified its Vietnamese affiliation. [VN-direct] Medium. BIB-01, BIB-06.

8. **The most-cited "Vietnamese" items are usually papers from international networks, with a Vietnamese co-author:**
   - an 821-citation 2019 microalgae review;
   - a 240-citation 2021 review of plant-based meat analogues, whose Vietnam tag may be wrong;
   - highly cited papers on biodiesel from black soldier fly larvae.

   Work led from inside Vietnam on protein ingredients typically has 0 to 25 citations. [VN-direct] Low to Medium (affiliations not verified paper by paper). BIB-01.

9. **Output is rising from a very low base.** Across the 42 unique records in the topic sets we could read in full:
   - 7 records in 2015 to 2019;
   - 14 in 2020 to 2022;
   - 21 in 2023 to September 2026.

   This includes noise, so read it as direction only. [VN-direct] Low to Medium. BIB-01.

10. **Retraction flag stands:** the 2023 paper on single cell protein from bamboo cellulose is RETRACTED (10.1051/e3sconf/202342009003), and a duplicate record of it (10.60692/0q29a-9j360) is still indexed. Exclude both from any capability claim. [VN-direct] High. BIB-01.

11. **Method finding: Scite's affiliation filter cannot be used for country benchmarking.** A Scite query for cultivated meat with the affiliation "Thailand" returned 1 paper. OpenAIRE returned 49 Thai records for a comparable query. Wave 1's Scite-based counts should be read as illustrative floors. [general] High (method test). BIB-05, BIB-01.

12. **The institution ranking, the share of papers with international co-authors, and year-by-year trends for the larger topics could not be produced** without OpenAlex (OpenAIRE returns no affiliations and has no group-by). A ready-to-run OpenAlex plan (100 URLs) is in `biblio_openalex_rerun_urls.txt`. With a free API key it would take under an hour. [method] High. BIB-02, BIB-03.

---

## Detailed findings

### A. Vietnam counts by topic (OpenAIRE, 2015 to Sept 2026, VN-tagged)

VN total OpenAIRE publications in the window: 240,387 (denominator).

| Topic | Query (OpenAIRE `search`) | Raw count | Per 10k | After reading titles |
|---|---|---|---|---|
| T01 Plant-based meat / meat analogue | "plant-based meat" OR "meat analogue" OR "meat analog" OR "meat substitute" | 9 | 0.37 | about 6 on-topic |
| T02 Textured / extruded protein | "textured vegetable protein" OR "high moisture extrusion" OR "extruded protein" | 1 | 0.04 | 1 review (2026) |
| T03 Mung bean protein | "mung bean protein" OR "mungbean protein" | 1 | 0.04 | 0 to 1 (VN link doubtful) |
| T04 Rice protein | "rice protein" OR "rice bran protein" | 1 | 0.04 | 1 (HUST DDG papers missed) |
| T05 Soy protein isolate / concentrate | "soy protein isolate" OR "soy protein concentrate" | 9 | 0.37 | 4 aquafeed, 2 food, 3 other |
| T06 Mycoprotein / fungal biomass | mycoprotein OR "fungal biomass" OR "mycelial protein" | 11 | 0.46 | 0 to 1 (rest is biosorption) |
| T07 Single cell protein | "single cell protein" | 6 | 0.25 | 3 real (1 retracted plus its duplicate record) |
| T08 *Aspergillus oryzae* | "Aspergillus oryzae" | 23 | 0.96 | genetic tools, enzymes |
| T09 Tempeh (with mycoprotein) | tempeh OR mycoprotein | 4 | 0.17 | 0 VN tempeh research |
| T10 Precision fermentation | "precision fermentation" OR "recombinant casein" OR "recombinant ovalbumin" | 1 | 0.04 | 0 |
| T11 *Pichia* / *Komagataella* | "Pichia pastoris" OR Komagataella | 25 | 1.04 | no food proteins in top 10 |
| T12 Cultivated meat | "cultured meat" OR "cultivated meat" OR "cell-based meat" OR "lab-grown meat" | 1 | 0.04 | 1 legal paper |
| T13 Fish / shrimp cell line | "fish cell line" OR "shrimp cell line" | 1 | 0.04 | 0 (toxicology use) |
| T14 Spirulina / *Arthrospira* | spirulina OR Arthrospira | 87 | 3.62 | top cited: environment and fuel |
| T15 Microalgae protein | "microalgae protein" OR "microalgal protein" OR "algal protein" | 3 | 0.12 | 3 (network papers) |
| T16 Seaweed protein | "seaweed protein" OR "macroalgae protein" | 1 | 0.04 | 1 (feed) |
| T17 Duckweed | duckweed OR Lemna OR Wolffia | 23 | 0.96 | genomics and taxonomy |
| T18 Black soldier fly (benchmark) | "black soldier fly" OR "Hermetia illucens" | 34 | 1.41 | biodiesel plus feed |
| T19 Fishmeal replacement | 4 phrases (see CSV) | 10 | 0.42 | about 7 VN aquafeed trials, 2 doubtful |
| T20 "Alternative protein" | "alternative protein" | 20 | 0.83 | mostly feed |

Query notes:
- "koji" was dropped from T08. It matched the Japanese given name Koji in author fields and inflated the count to 169.
- A first T02 query that included "textured protein" OR "texturized protein" broke the search and returned the whole Vietnam total (240,387). It was discarded.
- OpenAIRE's `search` covers the title, the abstract and some other fields, so single words that are also names are risky.

### B. Benchmark against the region (per 10,000 publications)

| Country | Total OpenAIRE publications 2015 to 2026 | Novel-food basket (PBM + cultivated) | Spirulina / *Arthrospira* | Fishmeal replacement |
|---|---|---|---|---|
| Vietnam | 240,387 | 9 (0.37) | 87 (3.62) | 10 (0.42) |
| Thailand | 310,198 | 49 (1.58) | 164 (5.29) | 14 (0.45) |
| Malaysia | 598,148 | 61 (1.02) | 178 (2.98) | 28 (0.47) |
| Indonesia* | 2,667,071 | 47 (0.18) | 928 (3.48) | 27 (0.10) |
| Philippines | 161,138 | 10 (0.62) | 36 (2.23) | 11 (0.68) |
| Singapore | 380,453 | 112 (2.94) | 28 (0.74) | 6 (0.16) |

\*Indonesia's total is inflated by national open-journal indexing. Its per-10k figures understate its intensity.

The novel-food basket query is "plant-based meat" OR "meat analogue" OR "cultured meat" OR "cultivated meat".

Reading:
- Vietnam's weakness is specific to novel food technologies.
- In algae it is at the regional level.
- In aquafeed protein replacement it is at the regional level, and probably above it once the undercount is corrected.
- Singapore's profile is the mirror image: strong on novel food, weak on feed and algae.

### C. Vietnam trend

Year counts could be built only for the topic sets small enough to read in full: T01, T02, T04, T05, T07, T09, T12, T15, T16 and T19 (42 unique DOIs).

| Period | Records |
|---|---|
| 2015 to 2019 | 7 |
| 2020 to 2022 | 14 |
| 2023 to Sept 2026 | 21 |

By year, see `biblio_trend_vn.csv`. For the larger sets (spirulina, black soldier fly, Pichia, *A. oryzae*, duckweed, "alternative protein") the year split needs OpenAlex `group_by=publication_year`.

### D. Institutions

A count-based top 10 was not possible. `biblio_institutions_vn.csv` gives a qualitative order, built from wave 1 attributions plus the DOIs surfaced here:
1. VNU Hanoi University of Science (*A. oryzae* tools)
2. VNU-HCM University of Science (*Pichia*)
3. Institute of Biotechnology, VAST (microalgae)
4. HUST (side-stream protein)
5. Can Tho University (aquafeed)
6. Nha Trang University (aquafeed)
7. VNUA (spirulina, black soldier fly)
8. HCMUT (rice protein)
9. VNU Hanoi IMBT (methanotroph single cell protein)
10. HCMUTE (spirulina protein)

HUST is under-represented in OpenAIRE's Vietnam tag.

### E. Top-cited Vietnam papers per key topic

See `biblio_top_papers_vn.csv` (40 rows). Examples:
- **Aquafeed:** 10.1111/are.13147 (2016, 23 citations, soy protein concentrate in snakehead) and 10.1371/journal.pone.0232278 (2020, 29, barramundi).
- **Fungal genetic tools:** 10.1007/s11274-017-2275-9 (2017, 43) and 10.1007/s11274-016-2168-3 (2016, 41), *A. oryzae* auxotrophic tools.
- **Pichia:** 10.1186/s13104-017-2471-6 (2017, 42), a *Pichia* host comparison.
- **Duckweed:** 10.1038/s41598-020-75728-9 (2020, 37), a duckweed genome.
- **Cultivated meat:** 10.2478/vjls-2024-0013 (2024, 0), a legal analysis.

### F. International co-authorship

Not measured. OpenAIRE records returned no affiliations. Qualitatively, the most-cited Vietnam-tagged records in microalgae, spirulina and black soldier fly come from international networks: Malaysia-led microalgae groups, a Taiwan-based black soldier fly biodiesel group, and the duckweed genomics network with IPK Gatersleben (Germany). The OpenAlex filter `countries_distinct_count:>1` will give the share (see the re-run file).

### G. Sanity checks (titles read)

We read the titles for 10 topic sets:
- **Cultivated meat:** 1 of 1 correct.
- **Plant-based meat:** about 6 of 9 on-topic.
- **Single cell protein:** 3 of 6 on-topic (one of them retracted).
- **Fishmeal replacement:** about 8 of 10 on-topic, but 2 look like wrong Vietnam tags (an Indian journal trial on Leucaena; an Azolla preprint on *Etroplus*).

Title-level screening therefore matters. Raw counts overstate small topics.

### H. GFI research grants

Not re-fetched in wave 2 (rate limits). Wave 1 (RD-04) found no grantee in Vietnam or elsewhere in Southeast Asia on the page it read.

---

## What this says for academia and funders

- **For funders (NAFOSTED, VINIF, ACIAR, GFI, bilateral donors):**
  - Vietnam is not starting from zero in the fields that feed alternative protein: algae cultivation, fungal genetics, *Pichia* expression and aquafeed nutrition.
  - It is starting from almost zero in the technologies that turn these into food: texturisation, precision fermentation, mycoprotein, and cell lines for food.
  - Small, targeted grants that make existing groups apply their tools to food protein would move the numbers fastest. Examples: *Pichia* for food proteins, *A. oryzae* biomass on cassava residue, spirulina protein extraction, fish cell lines. Each would need about 2 to 3 papers to create a visible track record.
- **For universities:**
  - Aquafeed protein is where Vietnam is already at the regional level. It is the lowest-risk base for a feed-first alternative-protein programme.
  - The highly cited international co-authorships in algae and black soldier fly show that Vietnamese researchers are already in the networks. Those links could be steered from fuel and wastewater towards protein.
- **For benchmarking and monitoring:** track the novel-food basket intensity (0.37 per 10,000 in 2015 to 2026). A realistic 5-year aim would be to reach the Philippines (0.62) or Malaysia (1.02). Re-run the counts on OpenAlex with an API key to get institution and co-authorship data.

## Implications by audience

- **VCs and investors:** local academic partners for novel-food technologies are scarce. Expect to import technology know-how, or to fund the first local studies. Feed-side and algae partners are available. [Medium]
- **Policy makers:** the gap is specific to novel food technologies, not a general weakness. A targeted call for applied food-protein research, using existing *Pichia*, fungal and microalgae groups, addresses it directly. [Medium]
- **Startups:** for a Vietnamese co-author or lab partner, look first at the groups listed in `biblio_institutions_vn.csv`. Do not expect to find extrusion or cultivated-meat expertise locally. [Medium]
- **F&B and feed manufacturers:** Can Tho University and Nha Trang University produce fishmeal-replacement evidence at regional intensity. Contract trials there are a realistic near-term option. [Medium]
- **Academia:** see the section above.
- **International bodies:** co-authorship networks already exist in algae and duckweed genomics. Channelling them to protein work is cheaper than building new ones. [Low to Medium]

## Disagreements log

| Item | Wave 1 or prior | This wave | Position |
|---|---|---|---|
| Plant-based meat papers with a VN author | 2 papers (Scite, RD-01) | 9 raw, about 6 on-topic (OpenAIRE) | Use "about 6 (2015 to 2026), including 2 reviews". Both sources are lower bounds. |
| VN work on extrusion or texturisation | "None" | 1 VN-tagged extrudate texture study, 2025 (10.1093/ijfood/vvae080); VN affiliation not verified | Soften to "at most one study found". Verify the affiliation. |
| VN fishmeal-replacement papers | About 20 by term search (Scite) | 10 (OpenAIRE country tag) | Keep about 20 as the better floor. OpenAIRE's country tagging misses Vietnamese journals and some affiliations. |
| Scite versus OpenAIRE for country counts | Scite used in wave 1 | Scite gave Thailand 1 cultivated-meat paper, OpenAIRE gave 49 | Do not use Scite affiliation counts for benchmarking. |
| Most-cited VN plant-based meat paper | Not reported | 10.1007/s00217-021-03810-1 (240 citations) is VN-tagged | Treat it as a probable false positive until the affiliation is checked. |

## Open questions / gaps

- **An OpenAlex run is still needed** for the institution top 10, the international co-authorship share, year trends for the large topics, and China and South Korea as scale references. Cheapest fix: get a free OpenAlex API key (developers.openalex.org) and run `biblio_openalex_rerun_urls.txt`. This needs about 100 calls, well inside the free USD 1 per day budget.
- **Vietnamese-language journals** (VJST, Can Tho University Journal, VNUA journals) are only partly indexed. Cheapest fix: ask NAFOSTED or the Vietnam Citation Index (VCI) team for topic counts.
- **Affiliation checks** are needed for the most-cited network papers (the 821-citation microalgae review; the 240-citation plant-based meat review).
- **GFI grants:** re-check https://gfi.org/researchgrants/ for Vietnamese grantees in the 2025 to 2026 cycles.

## Leads for the next wave

- 10.1093/ijfood/vvae080 (2025, meat-analogue extrudates): identify the Vietnamese lab. It may be the only extrusion capability in the country.
- 10.1007/s12649-022-01724-x (2022, cassava bagasse fermented with an *Aspergillus* co-culture): check whether protein enrichment was measured. This is directly relevant to cassava-to-protein.
- 10.54644/jte.70b.2022.1213 (2022, extraction of protein from spirulina with cellulase, HCMUTE): the only spirulina protein-as-ingredient item surfaced.
- 10.1007/s00253-021-11493-7 (2021, yeast surface display of the shrimp WSSV antigen): a *Pichia* group already working on aquaculture targets.

## Sources

- **BIB-01.** OpenAIRE Graph API v1, `researchProducts` endpoint. OpenAIRE AMKE. https://api.openaire.eu/graph/v1/researchProducts. Accessed 2026-09-23, 16:00 to 16:40 UTC. Used for all counts and all record lists. Exact URLs are in `biblio_counts.csv` (`query_url` column) and results in `biblio_raw_query_log.txt`. Type: open bibliographic database.
- **BIB-02.** "Authentication", OpenAlex developer guide. OurResearch / OpenAlex. https://developers.openalex.org/guides/authentication. Accessed 2026-09-23. Supports the no-key budget of USD 0.10 per day and the free-key budget of USD 1 per day. Type: documentation.
- **BIB-03.** OpenAlex API, works endpoint. https://api.openalex.org/works. Attempted 2026-09-23 at 15:52 to 15:58 UTC with 4 different queries, all HTTP 429. Evidence of the access failure only. Type: bibliographic database.
- **BIB-04.** Europe PMC REST search. EMBL-EBI. https://www.ebi.ac.uk/europepmc/webservices/rest/search. Attempted 2026-09-23 and refused by the fetch proxy (HTTP 429). Not used. Type: bibliographic database.
- **BIB-05.** Scite `search_literature` test query: '"cultured meat" OR "cultivated meat" OR "cell-based meat"', affiliation "Thailand", from 2015. Returned a total of 1 (10.3390/biology15030291, 2026). Scite, accessed 2026-09-23. Supports the method finding. Type: bibliographic database.
- **BIB-06.** Wave 1 RND note, `working-papers/wave1/rnd/m6-rnd-capacity.md`, and its sources RD-01 (Scite), RD-04 (GFI grants page), RD-22/23/31/32 (HUST papers) and RD-46 (SPC in snakehead). Internal, 2026-09-23. Used for institution attribution and comparison. Type: internal research note.
