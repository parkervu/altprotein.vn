---
id: app-s13-science
title: "S13. State of the science by technology family"
short_title: "S13. Science"
section: appendix
order: 33
summary: "What the peer-reviewed evidence says in 2026 about each alternative-protein technology family, from plant proteins and fermentation to duckweed and cultivated seafood, with key numbers and DOIs, what each means for Vietnam, and a table of corrections to earlier claims."
audiences: [research, investors, startups, manufacturers, policy, international]
reading_time_min: 40
key_numbers: [kn-pf-titer-gap, kn-mung-diaas, kn-shrimp-fishmeal-replacement, kn-cultivated-cost-multiple]
related_data: [science_facts.csv, tea_benchmarks.csv, replacement_trials.csv, publications.csv, biblio_counts.csv, cost_inputs.csv, disagreements.csv, protein_quality.csv, protein_food_micronutrients.csv, cost_per_quality_protein.csv]
related_pages: [ch10-technology-fit, ch09-economics, app-s12-costs, app-s7-research, app-s8-labs-talent, app-s6-feed-market, app-s9-regulation, app-r2-disagreements, brief-research]
charts: [chart-technology-fit-matrix]
---

# S13. State of the science by technology family

This appendix sets out the state of the science in September 2026 for each technology family that could supply alternative protein from Vietnam. For each family it gives the key numbers with their DOIs, what the evidence means for Vietnam, and where our earlier drafts were wrong. [[ch10-technology-fit]] draws the conclusions; [[app-s12-costs]] holds the full cost inputs; [[app-s7-research]] holds the Vietnamese research record.

Most of the evidence here is global. Vietnamese data exist only for a few families (aquafeed trials, side-stream protein extraction, microalgae cultivation). Where evidence is absent, we say so.

> **Method note.** The core of this appendix is the wave 2 science review: 48 sources found and read through the Scite literature database, recorded in `science_facts.csv` (43 claims, each with a DOI, a full-text flag and a retraction check). Every paper cited from that review was checked for editorial notices; none carries a retraction, correction or expression of concern. One withdrawn preprint seen in passing is not used. We add techno-economic analyses (TEAs) from the wave 1 cost review (`tea_benchmarks.csv`), feed replacement trials from the wave 2 feed-market review (`replacement_trials.csv`), the Vietnamese research record from wave 1 and the wave 2 bibliometric counts. Where only an abstract was read, confidence is at most Medium. Claims that the science review found unsupported are listed in section S13.15 and are not used anywhere else.

## S13.1 Overview: where each family stands in 2026

The "Vietnam evidence base" column summarises the Vietnamese peer-reviewed record found in wave 1 (Scite) and wave 2 (OpenAIRE), detailed in each section below. Counts are lower bounds [@RD-01; @BIB-01] {VN-direct|Medium}.

| Family | State of the science in 2026 (our reading of the sources below) | Headline number | Vietnam evidence base | Evidence for the headline number |
|---|---|---|---|---|
| Plant proteins and texturisation | Mature globally; no verified capex benchmark for extrusion found | Soy isolate DIAAS 97 (pigs) | About 5 plant-based meat papers; no Vietnamese extrusion study | [@SCI-40; @HSC-01] {general\|High} |
| Protein quality (DIAAS) | Measured values exist for major ingredients; few human data | Mung bean digestibility about 20% lower in children than pigs | No Vietnamese DIAAS or PDCAAS study found | [@SCI-42] {VN-adjacent\|High} |
| Fungal biomass, mycoprotein, koji | Commercial abroad; RNA reduction a fixed cost | Mycoprotein USD 29.56/kg protein (US model) | Fungal genetic tools; no mycoprotein study | [@COST-43] {general\|High} |
| Yeast and bacterial SCP | Commercial in feed abroad; partial fishmeal replacement proven | Gas-fermentation protein replaces about 30% of fishmeal in shrimp | Spent brewer's yeast work; one 2016 methanotroph isolation | [@SCI-23] {general\|Medium} |
| Precision fermentation | Commercial for high-value ingredients; bulk proteins below titre benchmark | Best leghemoglobin 10.1 g/L vs "above 50 g/L" benchmark | Pichia expression of pharma proteins; no food protein | [@SCI-01; @SCI-05] {general\|Medium} |
| Microalgae | Commercial for supplements; protein quality data thin | No DIAAS for microalgal biomass (2021 review) | Moderate for cultivation; thin for protein | [@SCI-39] {general\|Medium} |
| Duckweed and aquatic plants | Protein concentrate judged safe in EU; whole powders blocked by manganese | Lemna protein concentrate safe (EFSA 2023) | Germplasm collection and genome; no protein study | [@SCI-30] {general\|High} |
| Seaweed | Not reviewed in depth in this study | none | 3 to 5 small feed studies | none |
| Mushrooms and mycelium | Mycelium foods approved in Singapore | 3 mycelium or Neurospora approvals in Singapore | Moderate for cultivation; thin for food protein | [@RGN-04] {VN-adjacent\|High} |
| Cultivated meat and seafood | Approvals exist; cost and density far from food economics | 28 million cells/mL best animal-free density | No fish or shrimp cell line developed in Vietnam | [@SCI-16] {general\|Medium} |
| Insects (benchmark) | Commercial in feed; limited fishmeal replacement in shrimp | 20% fishmeal replacement without loss in shrimp | Thin to moderate (feeding trials) | [@SCI-27] {general\|High} |
| Tropical fermentation | Thermotolerant strains documented; cooling saving not measured | 39 to 46 g/L yeast at 40 C on raw cassava starch | Tropical Fermentation Network links | [@SCI-44] {VN-adjacent\|High} |
| AI in R&D | Not reviewed in this study | none | none found | none |

## S13.2 Plant proteins and texturisation

### S13.2.1 State of the science in 2026

- **Protein quality of common isolates and concentrates** is covered in section S13.3. Soy isolate is the reference: measured pig DIAAS of 97 on the older child and adult pattern [@SCI-40] {general|High}.
- **Costs.** We found no verified capex or opex benchmark for plant protein isolation or high-moisture extrusion. The only Southeast Asian TEA found (a Thai study of freeze-aligned meat analogue, doi:10.1016/j.fufo.2023.100269) had no readable text [@COST-56] {VN-adjacent|Low}.
- **Indicative Vietnamese cost of textured soy protein (TVP).** Our wave 1 worked example puts dry TVP from soy flour or concentrate at USD 790 to 2,070 per tonne ex-factory (about 3,700 to 10,700 VND per 100 g of protein). Imported soy flour or concentrate is about 70% of the cost. This is our calculation from sourced Vietnamese input prices and assumed equipment costs [@COST-01; @COST-21; @COST-28] {VN-direct|Low}. See [[app-s12-costs]].

### S13.2.2 Vietnamese evidence

- **Side-stream plant protein is Vietnam's most developed line.** Rice-based dried distillers' grain (DDG) from Vietnamese ethanol plants holds 55 to 80% protein on a dry basis; cassava DDG holds only 13 to 16% (2024 preprint, doi:10.21203/rs.3.rs-3171967/v1) [@RD-22] {VN-direct|Medium}. Alkaline extraction recovered 90% of rice DDG protein, and enzymatically extracted protein was 77.1% digestible in vitro (doi:10.1002/apj.70043) [@RD-23] {VN-direct|High}.
- Other extraction work: ultrafiltration recovery of rice protein (doi:10.1016/j.ifset.2021.102692) and rice bran protein isolate (2016) [@RD-24; @RD-25] {VN-direct|Medium}.
- **Products.** Replacing 10 to 15% of meat with germinated mung bean flour was accepted in sausage (doi:10.1111/ijfs.17089); mangosteen peel extract extended the shelf life of soy burgers (doi:10.17113/ftb.63.01.25.8629) [@RD-26; @RD-27] {VN-direct|High}. A 2026 review of plant-based fish analogues has a Vietnamese first author whose affiliation was not established [@RD-66] {VN-direct|Low}.
- **Counts.** The OpenAIRE query for plant-based meat returned 9 Vietnam-tagged records for 2015 to September 2026; we first judged about 6 to be on topic. One of them, a 2025 study of the texture of meat-analogue extrudates (doi:10.1093/ijfood/vvae080), turned out to come from a Taiwanese university, leaving about 5 [@BIB-01; @HSC-01] {VN-direct|Medium}.
- **Equipment.** We found no extruder for food texturisation in the Vietnamese literature or on the pages of pilot facilities we read [@RD-01; @RD-07] {VN-direct|Medium}. No local maker of extruders was confirmed, and the Vietnam presence of the main foreign vendors could not be verified [@INF-24; @INF-27] {VN-direct|Medium}.

### S13.2.3 What it means for Vietnam

- Production cost is not what blocks textured plant protein in Vietnam. On our indicative estimate, the ex-factory cost of TVP protein is roughly 4 to 19 times below the retail price of meat and egg protein, so product quality, demand and distribution margins decide [@COST-39; @COST-40; @COST-41] {VN-direct|Low}.
- Vietnam's cost edge is small because the main input, soy, is imported: Vietnam imported 2.61 Mt of soybeans in 2025, 98.4% of supply [@MAC-04; @MAC-09] {VN-direct|High}.
- The knowledge gap is specialist: extrusion, texturisation and sensory structure work are almost absent from the Vietnamese literature [@RD-01; @BIB-01] {VN-direct|Medium}. Rice DDG and broken rice are the obvious local protein bases to texturise.

> **Correction.** Wave 1 counted only 2 Vietnamese papers on plant-based meat and none on extrusion or texturisation [@RD-01] {VN-direct|Medium}. The wave 2 bibliometric review, using a second database, found about 6 on-topic plant-based meat papers from 2015 to 2026 and at most one extrusion study [@BIB-01] {VN-direct|Medium}. See DG-138 and DG-139. The one extrusion candidate is Taiwanese, so Vietnam has none and about 5 plant-based meat papers [@HSC-01] {VN-direct|Medium}.

## S13.3 Protein quality and DIAAS

### S13.3.1 State of the science in 2026

DIAAS (Digestible Indispensable Amino Acid Score) is the current FAO method for protein quality. The older-child pattern (over 3 years, adolescents and adults) applies to school-age children; the young-child pattern (6 to 36 months) applies to complementary foods [@NQR-08] {general|High}. Values below come from ileal digestibility measured in growing pigs unless stated. The table also covers the foods Vietnamese meals and plant products actually contain (the full table, with methods and notes, is `protein_quality.csv`).

| Ingredient or food | DIAAS, older child and adult pattern | DIAAS, young child pattern | Limiting amino acid | Source (DOI) | Evidence |
|---|---|---|---|---|---|
| Soy protein isolate | 97 (87 to 98 in other pig studies) | 83 (74 to 84) | Sulphur amino acids | doi:10.1002/jsfa.12809; doi:10.3390/ani15050650 | [@SCI-40; @NQR-06; @NQR-11] {general\|High} |
| Soy protein concentrate; defatted soy flour | not given | 88; 77 | Sulphur amino acids, then lysine | doi:10.3389/fnut.2022.1004754 | [@NQR-05] {general\|Medium} |
| Extruded or textured soy | not given | 65 to 97 (extruded soybean, two studies); PDCAAS 65 (textured soy protein, one study) | Sulphur amino acids | doi:10.3389/fnut.2022.1004754 | [@NQR-05] {general\|Low} |
| Tofu | 98 (in vitro) | 64 (in vivo, two datasets) to 84 (in vitro) | Sulphur amino acids | doi:10.3389/fnut.2022.1004754; doi:10.3389/fsufs.2024.1413802 | [@NQR-05; @NQR-09] {general\|Low} |
| Soy milk | 99 (in vitro) | 85 (in vitro) to 91 | Valine (older, in vitro); sulphur amino acids | doi:10.3389/fnut.2022.1004754; doi:10.3389/fsufs.2024.1413802 | [@NQR-05; @NQR-09] {general\|Medium} |
| Soy-based meat analogue | 110 (in vitro) | not given | None | doi:10.3389/fsufs.2024.1413802 | [@NQR-09] {general\|Medium} |
| Plant-based sausages: soy; wheat (seitan type); wheat and soy | 86; 33; 41 (in vitro; pork sausage 116) | not given | Sulphur amino acids (soy); lysine (wheat) | doi:10.3390/foods14244271 | [@NQR-10] {general\|Medium} |
| Wheat, raw grain (gluten proxy) | 54 to 66 | 45 to 56 | Lysine | doi:10.3390/ani15050650; doi:10.1093/af/vfz038 | [@NQR-06; @NQR-11] {general\|Medium} |
| Pea protein concentrate | 70 | 60 | Sulphur amino acids | doi:10.1002/jsfa.12809 | [@SCI-40] {general\|High} |
| Brown rice protein concentrate | 42 | not given | Lysine | doi:10.1002/jsfa.12809 | [@SCI-40] {general\|High} |
| White rice | 60 | 37 to 50 | Lysine | doi:10.3390/ani15050650; doi:10.1093/af/vfz038 | [@NQR-06; @NQR-11] {general\|High} |
| Cooked mung bean | 86 | 68 | Leucine (older); lysine (young) | doi:10.3390/nu12123831 | [@SCI-41] {general\|High} |
| Mycoprotein | PDCAAS 0.996 (no DIAAS found) | not given | None reported | doi:10.3390/foods11050647 | [@NQR-14] {general\|Medium} |
| Pork cuts, hams and sausages | 113 to 137 | 101 to 127 | None | doi:10.1002/jsf2.215 | [@NQR-07] {general\|High} |
| Chicken meat | 123 (in vitro) | not given | None | doi:10.3389/fsufs.2024.1413802 | [@NQR-09] {general\|Medium} |
| Hen eggs, cooked | above 100 | above 100 | None | doi:10.1017/jns.2024.71 | [@NQR-08] {general\|High} |
| Cow milk and dairy | 123 to 143 | 105 to 112 (skim milk powder) | None | doi:10.3390/ani15050650; doi:10.1093/af/vfz038 | [@NQR-06; @NQR-07; @NQR-09; @NQR-11] {general\|High} |
| Blend floor: minced pork with 20 to 30% of its protein from textured soy | at least 97.2 to 101.8 (soy at 65); up to 108.2 (soy at 97) | at least 90.2 to 93.8 | None at these shares | Our calculation (additive lower bound) | [@NQR-05; @NQR-07; @NQR-08] {general\|Medium} |

- **Processing and method move the numbers.** Soy products range from DIAAS 64 (tofu) to 91 (soy milk) in the one quantitative review, and textured soy from 65 to 97; PDCAAS-like scores flatter plant proteins against DIAAS [@NQR-05; @NQR-15] {general|Medium}. In vitro methods give tofu 98 [@NQR-09] {general|Medium}. The two tofu figures use different patterns and methods, so we give both and do not average them (DG-320 in [[app-r2-disagreements]]).
- **Blends keep quality high.** DIAAS values of single foods add up in mixed meals [@NQR-08; @NQR-07] {general|High}, so a protein-weighted average of component scores is a floor for a blend. A minced-pork dish with 20 to 30% of its protein from textured soy scores at least 97 on the older-child pattern and at least 90 on the young-child pattern, with zinc per gram of protein 12 to 19% below all-pork (our calculation) [@NQR-05; @NQR-07; @APR-04; @DIE-12] {general|Medium}. A plant dish that removes all meat is a different case: it needs added zinc (below).
- **Zinc and phytate matter as much as amino acids.** Soybean phytate gives a phytate-to-zinc molar ratio of about 34 (9 to 43), above the 15 at which Vietnam's 2025 school-meal guidance rates zinc absorption as poor, and most soy-milk phytate is taken into the tofu curd [@NQR-17; @NQR-18; @NQR-19; @APR-04] {general|Medium}. Soy iron is also largely unavailable without phytate reduction [@NQR-16; @NQR-20] {general|Medium}. Plant foods carry no vitamin B12.

- **Human data differ from pig data.** In Indian children under 2 years, true ileal digestibility of indispensable amino acids (dual isotope method) was 65.2% for mung bean, 78.5% for rice and 87.4% for egg. Mung bean digestibility was about 20% lower than pig estimates (doi:10.1093/ajcn/nqy265) [@SCI-42] {VN-adjacent|High}. Typical cereal-legume complementary diets had a DIAAS of about 80; adding egg or milk raised it to 100 in calculation [@SCI-42] {VN-adjacent|High}.
- **Rice and legume blends.** We found no measured (in vivo) rice plus legume blend with a DIAAS of 100 or more. Claims of 100 come from calculations, for example pea plus rice blends reaching a PDCAAS of 1.00 on the adult pattern (doi:10.1139/apnm-2021-0806) [@SCI-43] {general|Medium}.
- **Microalgae and duckweed.** No DIAAS for microalgal biomass was available as of a 2021 review (doi:10.3390/foods10123002) [@SCI-39] {general|Medium}. For duckweed we found only amino-acid scores and in vitro digestibility (section S13.8), and no PDCAAS or DIAAS study [@SCI-34; @SCI-38] {general|Low}.

### S13.3.2 Vietnamese evidence

- We found no Vietnamese DIAAS or PDCAAS study [@RD-01] {VN-direct|Medium}, and no DIAAS measured in school-age children anywhere; a single OpenAlex search found no ileal digestibility study of soy or tofu in that age group (Low-confidence negative). In vitro digestibility has been reported, for example 77.1% for rice DDG protein [@RD-23] {VN-direct|High}.
- No Vietnamese laboratory page we read lists an amino-acid profile or a protein-digestibility assay among its services; PDCAAS and DIAAS work will probably need an overseas laboratory for now [@INF-03; @INF-10] {VN-direct|Medium}.

### S13.3.3 What it means for Vietnam

- Mung bean is a strong local legume by pig DIAAS but weaker in humans; rice protein alone is poor because it is lysine-limited [@SCI-40; @SCI-41; @SCI-42] {general|High}. Prefer human data for food claims (DG-110).
- A Vietnamese DIAAS reference dataset (rice DDG, mung bean, spent yeast, catfish side-stream isolates, spirulina) is a cheap public good that any novel-food dossier will need. The list includes tofu, textured soy and blended minced dishes, measured on both patterns, with phytate, zinc and iron; this is why policy option 13 (PO-027) now includes phytate-to-mineral analysis in the laboratory scope ([[ch27-policy-options]]).
- For school-age children the binding nutrients are zinc and iron, not protein quality; protein quality matters most for plant-only meals for older boys and, much more, for children under two, where plant products face the young-child pattern and registration as foods for children up to 36 months (Decree 15/2018) [@APR-04; @NQR-04; @NQR-31] {VN-direct|Medium}. A 20 to 30% soy extender in minced dishes raises no protein-quality objection. A zinc-fortified textured-soy school dish is a research option, not a recommended product: in rural Vietnam, biscuits fortified with zinc and iron cut anaemia and zinc deficiency in children aged 6 to 8 [@NQR-22] {VN-direct|High}, but no trial has tested a fortified soy dish.

## S13.4 Fungal biomass, mycoprotein and koji

### S13.4.1 State of the science in 2026

- **RNA reduction is a fixed cost.** Mycoprotein RNA falls from about 10% to about 2% of dry weight after a 68 C, 20-minute heat step that lets the fungus's own enzymes break down RNA. The step is described as industrially expensive (doi:10.3390/nu12041115) [@SCI-20] {general|High}. A secondary review says below 1% is needed "to be considered safe"; we use the primary figure (DG-107) [@SCI-21] {general|Medium}.
- **Protein content.** *Fusarium venenatum* mycoprotein is about 30 to 45% protein on a dry basis (secondary review, doi:10.3390/fermentation11010024) [@SCI-21] {general|Medium}.
- ***Aspergillus oryzae* safety.** *A. oryzae* cannot make aflatoxin, because its aflatoxin gene cluster carries disabling mutations. It can make cyclopiazonic acid (CPA) and 3-nitropropionic acid. Modern industrial strains carry a deletion that removes both the aflatoxin and CPA clusters. Kojic acid is not classed as a mycotoxin. Reports of aflatoxin-producing "*A. oryzae*" are misidentified *A. flavus* (doi:10.1007/s00253-018-9354-1) [@SCI-19] {general|High}.
- **Fungal biomass on side streams.** In a shake-flask study on diluted molasses vinasse, crude protein (N x 6.25) was 44.7% for *A. oryzae*, 57.6% for *Neurospora intermedia* and 50.9% for *Rhizopus oryzae*; *F. venenatum* and *Monascus purpureus* did not grow (doi:10.3390/fermentation5040099) [@SCI-18] {general|High}. The biomass yield the paper reports cannot be read as a broth concentration (see the correction below).
- **Costs.** A full TEA of continuous airlift mycoprotein production (2 x 155 m3 reactors, 2,000 kg/h wet output) gives USD 3.55/kg wet, or USD 29.56/kg of protein, with capex of about USD 108 million; the reactors are 66.7% of capex (doi:10.3389/fsufs.2023.1204307) [@COST-43] {general|High}. The authors conclude that mycoprotein can match beef on protein cost but "will not be an economic alternative for inexpensive products such as chicken". Buying food-grade biotin and zinc sulphate instead of laboratory grade cut cost by 22% [@COST-43] {general|High}.
- **Approvals.** Singapore has approved five fungal biomass or mycoprotein ingredients: Nature's Fynd (2021), The Protein Brewery (2024), The Better Meat Co (2024), Infinite Roots (2025) and Ultimeat (2026) [@RGN-04] {VN-adjacent|High}. China reportedly issued its first mycoprotein approval in 2025 (Fushine Biotech); the date was not verified [@RGN-20; @RGN-24] {general|Low}.

### S13.4.2 Vietnamese evidence

- VNU Hanoi groups have built fungal genetic tools: a dual-auxotrophic transformation system in *A. oryzae* (doi:10.1007/s11274-021-03060-z) and 100% *pyrG* deletion efficiency in five *Cordyceps militaris* strains, the base for a food-grade expression platform (doi:10.47371/mycosci.2024.10.003) [@RD-33; @RD-34] {VN-direct|Medium}.
- A 2025 study in the National Institute for Food Control journal tested aflatoxin in 38 samples of traditional fermented soy (*tương*) [@RD-61] {VN-direct|Medium}.
- A 2025 preprint reports that solid-state fermentation of cassava and soybean residue with oyster-mushroom (*Pleurotus ostreatus*) mycelium raised protein 1.84-fold [@RD-29] {VN-direct|Medium}.
- We found no Vietnamese study on mycoprotein or tempeh-type food fungi [@RD-01; @BIB-01] {VN-direct|Medium}.

### S13.4.3 What it means for Vietnam

- Fungal biomass on cassava or molasses residues is scientifically plausible, but published yields per litre must be read with care. Pilot data on Vietnamese substrates are needed before any cost model.
- A koji route that relies on the *tương* tradition still needs strain characterisation for CPA and 3-nitropropionic acid. Wild starter cultures are not automatically safe, and industrial deletion strains are proprietary [@SCI-19] {general|High}.
- RNA reduction and drying are unavoidable cost lines for food use; feed use tolerates higher RNA [@SCI-20] {general|High}.
- Our indicative Vietnamese cost of fungal biomass protein for feed is USD 2,227 to 6,612 per tonne of product, or USD 4,050 to 14,700 per tonne of protein; capital charges and maintenance are 54 to 67% of cost (our calculation, wave 1 worked example) [@COST-43; @COST-44; @COST-21] {VN-direct|Low}. Fishmeal protein cost about USD 2,625 per tonne in 2025 and USD 3,846 in August 2026 [@FM-01] {general|High}.

> **Correction.** Earlier drafts used "118.5 g/L" of *A. oryzae* biomass on vinasse (Karimi et al. 2019) as a productivity input. It is not a broth concentration. The flask held 100 mL of 5% vinasse with about 21 g/L of chemical oxygen demand (COD); 11.85 g of dry biomass from about 2.1 g of COD is impossible. The figure is most plausibly per litre of undiluted vinasse, about 5.9 g/L in the flask (arithmetic by our science reviewer). The paper does not state the basis and is internally inconsistent on COD [@SCI-18] {general|High}. Do not use 118.5 g/L as a titre. See DG-105 and DG-106.

> **Correction.** Earlier drafts listed CPA, kojic acid, 3-nitropropionic acid and aflatoxin together as the *A. oryzae* metabolite burden. Only CPA and 3-nitropropionic acid are real concerns; *A. oryzae* cannot make aflatoxin, and kojic acid is not classed as a mycotoxin [@SCI-19] {general|High}.

## S13.5 Yeast and bacterial single-cell protein

### S13.5.1 State of the science in 2026

**Yeast.**

- *Candida utilis* grown on cassava peel hydrolysate reached 47.5% crude protein on glucose, 49.1% on acid hydrolysate and 56.7% on enzymatic hydrolysate, with a biomass yield of 0.44 to 0.52 g per g of sugar and a maximum growth temperature of 41 C (doi:10.17265/2159-5828/2012.08.004) [@SCI-22] {VN-adjacent|Medium}. These are crude protein values (N x 6.25), which include nucleic-acid nitrogen, from a low-tier journal on Nigerian cassava peel.
- Brewer's yeast replaced 45% of fishmeal in hybrid "Thai Panga" catfish with better growth and immunity, according to a 2024 review (doi:10.3390/ani14192851) [@SCI-26] {VN-adjacent|Medium}.
- China's Angel Yeast makes more than 11,000 t/yr of yeast protein at Yichang [@RGN-24] {general|Medium}.

**Bacterial SCP in aquafeed.** Single-cell protein trials are summarised below (details in `replacement_trials.csv`).

| Organism and product | Species | Result | Source (DOI) | Evidence |
|---|---|---|---|---|
| *Clostridium autoethanogenum* protein (CAP, gas fermentation of steel-mill off-gas, about 84% crude protein) | Whiteleg shrimp | Replaces about 30% of fishmeal without growth loss | doi:10.1016/j.aqrep.2021.100938, cited in doi:10.1155/2022/8225273 | [@SCI-23] {general\|Medium} |
| CAP | Whiteleg shrimp | Halving fishmeal (25% to 12.5% of diet) cut growth unless 0.06% chenodeoxycholic acid (a bile acid) was added | doi:10.3390/ani13132109 | [@SCI-24] {general\|High} |
| CAP | Whiteleg shrimp | Improved growth and survival after pathogen challenge at 15 to 45 ppt salinity | doi:10.3389/fimmu.2022.1034994 | [@FM-20] {general\|Medium} |
| CAP | Largemouth bass | 67 to 68% of fishmeal replaced (from a 70% fishmeal diet); 100% reduced growth | doi:10.3390/metabo12111088 | [@FM-21] {general\|Medium} |
| CAP | Large yellow croaker | 15% of fishmeal; 30 to 45% reduced growth | doi:10.3390/fishes7050228 | [@FM-18] {general\|Medium} |
| Methanotroph meal (*Methylococcus capsulatus* Bath) | Whiteleg shrimp (30% of test diet) | Protein digestibility lower than the control; growth reduced | doi:10.1155/2022/8225273 | [@SCI-23] {general\|High} |
| FeedKind (methanotroph SCP, 75.14% crude protein) | Black sea bream | Up to 24.8% of fishmeal protein replaced without loss | doi:10.3389/fmars.2021.778301 | [@FM-17] {general\|Medium} |
| FeedKind | Largemouth bass | 3 to 6% of diet equal to control; 9% worse | doi:10.3390/antiox11081479 | [@FM-16] {general\|Medium} |
| Methanotroph SCP | Barramundi fry | 25% and 50% replacement both harmful (enteritis, lower survival) | doi:10.1111/jfd.13985 | [@FM-19] {general\|Medium} |
| Mixed-culture SCP from soybean-processing wastewater (preprint) | Whiteleg shrimp | Up to 90% of fishmeal replaced with growth maintained (up to 220 g SCP per kg of feed) | doi:10.64898/2025.12.11.693825 | [@SCI-25] {VN-adjacent\|Medium} |

- Bacterial SCP can reach up to about 65% protein on a dry basis (secondary review) [@SCI-21] {general|Medium}.
- A single trial is not the last word on methanotroph meal: FeedKind-specific shrimp trials were not retrieved [@SCI-23] {general|Medium}.

**Costs and scale.**

- SCP from steel-mill off-gas via acetate: USD 4.15/kg (USD 2.78/kg if intensified), with USD 320 million of capital for 20,000 t/yr (doi:10.3390/fermentation9080771) [@COST-44] {general|High}.
- SCP from hydrogen and CO2: minimum selling price USD 2,070/t (abstract only, doi:10.1021/acs.est.3c10312) [@COST-45] {general|Medium}.
- SCP made with renewable electricity: EUR 5.5 to 6.1/kg of protein in 2028, EUR 4.0 to 4.5 in 2030 and EUR 2.1 to 2.3 in 2050 at optimal sites (doi:10.1038/s41467-025-56364-1) [@COST-46] {general|High}.
- Scale references: Solar Foods' Factory 01 can make at most 160 t/yr of Solein [@COST-53] {general|Medium}; Calysseo runs a 20,000 t/yr FeedKind plant in Chongqing with two 10,000 t/yr fermenters [@FM-13] {general|Medium}; ICI's 1,500 m3 Pruteen feed-SCP reactor ran from 1979 to 1987 and sold at about twice the price of soy protein [@COST-43] {general|Medium}.
- A Chinese bacterial biomass from glutamic-acid fermentation, at least 70% crude protein, is already imported into Vietnam for pig, poultry, fish and shrimp feed [@FM-12] {VN-direct|Medium}.

### S13.5.2 Vietnamese evidence

- HUST studied nucleic-acid reduction in spent brewer's yeast hydrolysate (2018) and recovered 84.9% of the protein from spent brewer's yeast for a food product (2024) [@RD-31; @RD-32] {VN-direct|Medium}.
- Spent brewer's yeast replaced up to 60% of fishmeal protein in giant freshwater prawn without loss of growth or survival (doi:10.1111/anu.12915) [@RD-48] {VN-direct|High}. Brewer's yeast has also been tested against soybean meal in Nile tilapia [@RD-49] {VN-direct|High}.
- A 2016 paper isolated a methane-oxidising bacterium for SCP, with no follow-up found [@RD-28] {VN-direct|Medium}. A 2023 conference paper on SCP from bamboo cellulose was retracted and is not used [@RD-30] {VN-direct|High}.
- We found no Vietnamese trial of bacterial SCP, methanotroph meal or microalgae as bulk protein in pangasius or shrimp [@RD-01] {VN-direct|Medium}.

### S13.5.3 What it means for Vietnam

- Shrimp feed is the right target for bacterial and yeast SCP, but the evidence supports partial replacement (about 30% of fishmeal per ingredient), not full replacement [@SCI-23; @SCI-24] {general|High}.
- Pangasius and tilapia feeds already use little fishmeal, so SCP there competes with soybean meal on price, a harder benchmark: soybean meal protein cost about USD 880 per tonne in August 2026 against USD 3,846 for fishmeal protein [@FM-01] {general|High}.
- Early life stages need their own trials; the barramundi fry result is a warning [@FM-19] {general|Medium}.
- SCP from tofu and soy-milk wastewater is a Vietnam-relevant lead worth a local trial, but it rests on one preprint [@SCI-25] {VN-adjacent|Medium}.
- For legal routes (livestock list, aquafeed trials, penalties since August 2026), see [[app-s9-regulation]].

## S13.6 Precision fermentation

### S13.6.1 State of the science in 2026

- **The titre benchmark.** The leading review states: "The cost-efficiency requirements involve production titers above 50 g/L" (Nielsen, Meyer and Arnau, *Annual Review of Food Science and Technology* 15:173-187, online 2023, issue 2024; doi:10.1146/annurev-food-072023-034256) [@SCI-01] {general|Medium}. The same group repeats "protein titers well above 50 g/L are needed" in 2025 and gives cost targets of USD 10/kg by 2025 and USD 1/kg by 2035 as "envisaged" (doi:10.1177/15509087251398318) [@SCI-02] {general|High}. Neither paper shows the cost model behind the 50 g/L figure: it is an expert assertion, not a calculated threshold.
- **Industrial hosts.** Industrial *A. oryzae* strains are the most mature hosts. A 2025 study on bovine beta-lactoglobulin raised product amount by 79% and carbon yield by 73% through pH, temperature and feed optimisation, but kept the absolute titre confidential [@SCI-02] {general|High}.
- **Best published leghemoglobin titres:**
  - 3.5 g/L, secreted, in *Pichia pastoris* (Shao et al. 2022, doi:10.1016/j.biortech.2022.127884; value read through a citing paper) [@SCI-03; @SCI-04] {general|Medium};
  - 7.27 g/L, intracellular, in *Kluyveromyces marxianus* (Tian et al. 2024, doi:10.3389/fbioe.2023.1329016) [@SCI-04] {general|High};
  - 10.1 g/L in 5 L bioreactors, also in *K. marxianus* (Chen et al. 2026, doi:10.1002/biot.70239) [@SCI-05] {general|High}.
  These are 5 to 15 times below the bulk-protein benchmark. Heme proteins are used at only 0.5 to 2% of a product, so the benchmark binds less for them [@SCI-05] {general|High}.
- ***Trichoderma reesei*.** VTT produced beta-lactoglobulin and ovalbumin in *T. reesei* (Aro et al., *Food Research International* 163:112131, dated 2023; doi:10.1016/j.foodres.2022.112131), but we could not read the titres [@SCI-06] {general|Low}. VTT reports brazzein (a sweet protein) at 1.3 g/L in a 250 mL bioreactor, with an estimated cost of EUR 57 to 80/kg; it also states more than 80 g/L for one unnamed heterologous protein as unpublished data, which we treat as a claim, not evidence (doi:10.3389/fbioe.2025.1688495) [@SCI-07] {general|Low}.
- **OPENPichia.** A genome-sequenced *Komagataella phaffii* type strain (NCYC 2543) with a HOC1 truncation that restores transformability. It is near-identical to the patented strain NRRL Y-11430, and no strain was consistently better at protein production. It comes under "liberal end-user distribution licences" that allow royalty-free commercial manufacture, with a toolkit free of third-party material transfer agreements (doi:10.1038/s41564-023-01574-w) [@SCI-08] {general|High}.
- **Regulatory science.** EFSA issued an opinion in 2024 on soy leghemoglobin from genetically modified *K. phaffii* as a food additive (colour in meat analogues) (doi:10.2903/j.efsa.2024.8822) [@SCI-09] {general|Medium}. Singapore has approved three precision-fermented ingredients: Remilk beta-lactoglobulin (2023) and two human milk oligosaccharides from Chr. Hansen (2025) [@RGN-04] {VN-adjacent|High}.
- **Costs and capacity.** We could not verify any peer-reviewed TEA for precision-fermented food proteins. For scale, Liberation Bioindustries' plant in Richmond, Indiana has 600 m3 of fermentation and starts operating in 2026 [@COST-54] {general|Medium}.

### S13.6.2 Vietnamese evidence

- Vietnam has moderate strength in recombinant expression, mostly of pharmaceutical and enzyme proteins: growth factors FGF-2, KGF/FGF7 and PDGF-BB in *Pichia* (VNU-HCM, 2020 to 2021), an alkaline phytase aimed at aquafeed (2025) and a bacteriocin applied to pork bologna (2024) [@RD-35; @RD-36; @RD-37; @RD-38; @RD-63] {VN-direct|Medium}.
- After screening, Vietnam has zero records on precision fermentation or recombinant food proteins (dairy, egg, heme) for 2015 to 2026 [@BIB-01; @RD-01] {VN-direct|Medium}.

### S13.6.3 What it means for Vietnam

- A Vietnamese precision-fermentation startup using public strains would start 5 to 10 times below the bulk-protein titre benchmark. High-value, low-dose ingredients (heme proteins, sweet proteins, enzymes) are the only near-term fit [@SCI-01; @SCI-05] {general|Medium}.
- OPENPichia removes one freedom-to-operate barrier for Vietnamese groups already working with *Pichia*; product-specific patents (for example on leghemoglobin constructs) still apply [@SCI-08] {general|High}.
- *K. marxianus* links precision fermentation to thermotolerance (section S13.13), which suits Vietnam's climate [@SCI-04; @SCI-44] {general|High}.
- Legally, a precision-fermented protein is probably a "product of a GMO" in Vietnam, and a plant using a GM strain needs MAE's closed-production certificate [@REG2-11] {VN-direct|Medium}. See [[app-s9-regulation]].

> **Correction.** Earlier drafts treated ">50 g/L" as a derived techno-economic threshold. It is an expert assertion in a review, repeated by the same authors, with no published cost model behind it [@SCI-01; @SCI-02] {general|Medium}. The best published leghemoglobin titre is now 10.1 g/L (Chen et al. 2026), superseding the 7.27 g/L of Tian et al. 2024 [@SCI-05] {general|High}. OPENPichia is "licence-free" only in a loose sense: users accept a liberal licence [@SCI-08] {general|High}. The *T. reesei* paper of Aro et al. is dated 2023, not 2022, and its titres are not verified [@SCI-06] {general|Low}.

## S13.7 Microalgae

### S13.7.1 State of the science in 2026

- No DIAAS for microalgal biomass was available as of a 2021 review [@SCI-39] {general|Medium}. We did not verify spirulina protein content or digestibility in this study.
- In a whiteleg shrimp digestibility screen at 30% of the test diet, *Chlorella* did not reduce growth, while methanotroph meal and insect meals did [@SCI-23] {general|High}.
- Singapore has approved two *Chlamydomonas reinhardtii* algae biomass ingredients from Triton Algae Innovations (2019 and 2022) [@RGN-04] {VN-adjacent|High}.

### S13.7.2 Vietnamese evidence

- Microalgae is Vietnam's largest topic in the alternative-protein bibliometric set: 87 Vietnam-tagged spirulina records for 2015 to 2026 (3.62 per 10,000 publications), similar to Malaysia and Indonesia and below Thailand. But the most-cited Vietnamese spirulina papers are about wastewater, biofuel and nanoparticles; only one surfaced paper is about extracting spirulina protein as an ingredient [@BIB-01] {VN-direct|Medium}.
- A salt-tolerant spirulina strain reached 48.73% protein (dry weight) in 42 ppt medium (doi:10.3390/su151511906) [@RD-21] {VN-direct|High}. A 2021 review covers *Arthrospira* production in Vietnam [@RD-20] {VN-direct|High}. Microalgae isolated from Vietnamese shrimp ponds have been assessed for food, feed and biodiesel [@RD-62] {VN-direct|Medium}.

### S13.7.3 What it means for Vietnam

- Vietnam has cultivation skills and saline-water sites, but protein quality data and ingredient processing are missing.
- Legally, microalgae food can be self-declared or registered as a health supplement; microalgae are on the livestock feed list but not on the aquafeed list [@REG-02; @REG-32; @REG2-01] {VN-direct|High}.

## S13.8 Duckweed and aquatic plants

### S13.8.1 State of the science in 2026

- **Composition.** Wolffia protein is 20 to 30% of freeze-dried weight across 11 laboratory-grown species (doi:10.3389/fchem.2018.00483) [@SCI-34] {general|High}. Thai samples held 44.3% crude protein in *Wolffia*, 22.2% in *Lemna* and 18.0% in *Spirodela*; in vitro standardised ileal protein digestibility (pig-simulating) was 72% for *Lemna*, 69% for *Wolffia* and 39% for *Spirodela* (doi:10.48048/tis.2024.8324) [@SCI-35] {VN-adjacent|Medium}. Drum-dried *Wolffia globosa* held 32 to 34% protein, with in vitro digestibility rising from 81% fresh to 85% dried (doi:10.1002/jsfa.70332) [@SCI-48] {VN-adjacent|Medium}.
- **Manganese is the documented food-safety issue.** *Wolffia* samples held 78 to 431 mg of manganese per kg of dry weight [@SCI-34] {general|High}. EFSA could not establish the safety of whole *Wolffia globosa* powder (2021, doi:10.2903/j.efsa.2021.6938) or of mixed water-lentil powder (2021, doi:10.2903/j.efsa.2021.6845) because of manganese intake. It found a *Lemna* protein concentrate safe under the proposed uses (2023, doi:10.2903/j.efsa.2023.7903) [@SCI-28; @SCI-29; @SCI-30] {general|High}. Protein extraction removed the problem that blocked whole-plant powders.
- **Human data.** A human study found *Lemna minor* protein absorbed less well than pea protein (doi:10.1007/s11130-022-00952-9) [@SCI-33] {general|Medium}.
- **Productivity.** About 30 t of dry matter per hectare per year is the average cited in a 2026 review, and 33 t per hectare was reached over 8 months in domestic wastewater; "up to 100 t per hectare per year" is an extrapolated upper bound [@SCI-36; @SCI-37] {general|Low}. We use 10 to 30 t per hectare per year for planning until Vietnamese field trials exist (our judgement; DG-109).

### S13.8.2 Vietnamese evidence

- A national survey collected more than 100 wild *Spirodela*, *Lemna* and *Wolffia* samples and keeps them in a laboratory collection (2022) [@RD-44] {VN-direct|Medium}. A Vietnamese-led team assembled a chromosome-scale *Spirodela intermedia* genome (2020) [@RD-71] {VN-direct|High}. Duckweed removed nutrients from anaerobically treated swine wastewater in laboratory ponds [@RD-45] {VN-direct|High}.
- We found no protein extraction, food trial or feed trial with Vietnamese duckweed from 2015 to 2026 [@RD-01] {VN-direct|Medium}. The OpenAIRE duckweed cluster (23 Vietnam-tagged records) is mostly genomics and taxonomy [@BIB-01] {VN-direct|Medium}. A European researcher's duckweed work linked to Vietnam in earlier leads has no Vietnamese publication [@RD-59] {VN-direct|Medium}.

### S13.8.3 What it means for Vietnam

- Duckweed grown on aquaculture effluent fits feed. For food, the EU record shows that mineral control (manganese) and controlled water are the gate, and that a protein concentrate is an easier regulatory path than whole-plant powder [@SCI-28; @SCI-30] {general|High}.
- Legally, *bèo* (duckweed) is on the livestock feed list but not on the aquafeed list [@REG-32; @REG2-01] {VN-direct|High}.
- Vietnam holds germplasm and a genome but has not used either for protein. Screening the national collection for protein and manganese is a quick public good.

> **Correction.** Three duckweed claims in earlier drafts are withdrawn. (1) The EFSA opinion on *Wolffia globosa* powder exists, but its content is negative: safety was not established (2021) [@SCI-28] {general|High}. (2) The claim that fresh *Wolffia* plants were deemed "not novel" in the EU could not be verified [@SCI-32] {general|Low}. (3) The "PDCAAS 0.89" figure for duckweed was not found in any peer-reviewed source and must not be used [@SCI-34; @SCI-38] {general|Low}. A 2026 review states that *Wolffia globosa* powder was later authorised in the EU; we could not verify this, so the EU status is open (DG-108) [@SCI-31] {general|Low}.

## S13.9 Seaweed

- **State of the science.** The wave 2 science review did not cover seaweed protein, so we give no global benchmark here.
- **Vietnamese evidence.** Green seaweed (*Cladophora*) protein partly replaced fishmeal protein in black tiger shrimp postlarvae (doi:10.1007/s10811-018-1457-7), and gut weed (*Ulva intestinalis*) meal was evaluated with *Artemia* biomass as dietary protein for the same species (doi:10.1016/j.ejar.2022.11.003) [@RD-50; @RD-51] {VN-direct|High}. A 2022 Wageningen report studied seaweed cultivation in Vietnam for livestock methane reduction [@RD-57] {VN-direct|Medium}. We found no Vietnamese work on food protein extraction from seaweed [@RD-01] {VN-direct|Medium}; the OpenAIRE seaweed-protein query found one Vietnam-tagged record [@BIB-01] {VN-direct|Medium}.
- **What it means for Vietnam.** Seaweed (*Ulva*, *Caulerpa*, *Kappaphycus*) is a possible feed and food protein source with almost no Vietnamese protein data. *Rong* (seaweed) is on the livestock feed list [@REG-32] {VN-direct|High}. We treat seaweed protein as an open research question, not a near-term supply option.

## S13.10 Mushrooms and mycelium

- **State of the science.** Mycelium and fungal biomass foods have reached approval: Singapore lists *Pleurotus pulmonarius* mycelium biomass (Infinite Roots, 24 September 2025) and two *Neurospora crassa* mycoproteins (The Better Meat Co, 15 October 2024; Ultimeat, 27 April 2026) [@RGN-04] {VN-adjacent|High}. The wave 2 science review did not cover mycelium growth or texture data.
- **Vietnamese evidence.** Vietnam has about 40 papers on mushroom cultivation and bioactives but only 2 to 3 on protein [@RD-01] {VN-direct|Medium}. Examples: grey oyster mushroom grown on cassava peel from starch production (doi:10.1051/e3sconf/202340501009); dual-enzyme *Pleurotus pulmonarius* protein hydrolysates (doi:10.1016/j.fochx.2025.103310); and the 1.84-fold protein gain in cassava and soybean residue fermented with *Pleurotus* mycelium (preprint) [@RD-64; @RD-65; @RD-29] {VN-direct|Medium}. The *Cordyceps* toolkit (section S13.4) is a possible food-grade expression platform [@RD-34] {VN-direct|Medium}.
- **What it means for Vietnam.** Edible-mushroom species carry lower legal risk than new strains under the current food law, because they have food history [@REG-01; @REG-02] {VN-direct|Medium}. Mycelium grown on cassava or soybean residue links Vietnam's mushroom skills to its side streams, but food-grade protein data are thin.

## S13.11 Cultivated meat and seafood

### S13.11.1 State of the science in 2026

- **Cell lines for Vietnamese species.** Striped catfish (*Pangasianodon hypophthalmus*, Vietnamese *tra*) cell lines exist in India (ICAR-NBFGR): a thymus line, PHT (accession NRFC-078; 52 passages; L-15 medium with 20% fetal bovine serum; 28 C; epithelial and adherent) (doi:10.56093/ijans.v93i2.128796), a gill line (2022, doi:10.1007/s10695-022-01053-9) and a caudal fin line (2018, doi:10.1016/j.actatropica.2018.03.015). A skin epithelial line was published from Taiwan in 2025. All were built for virology and toxicology, not food [@SCI-10; @SCI-11; @SCI-46; @SCI-47] {VN-adjacent|High}.
- **Shrimp.** "PmLyO-Sf9" is a black tiger shrimp lymphoid cell x insect Sf9 hybrid from Cochin University of Science and Technology (CUSAT), used for virus work (doi:10.1016/j.fsi.2021.03.023). It contains insect genetic material. We found no true continuous shrimp cell line in the literature [@SCI-12; @SCI-13] {general|High}.
- **Density limits (Humbird 2021, doi:10.1002/bit.27848).** Absolute maximum 258 g/L of wet cells; 110 g/L in fed-batch before ammonia inhibition; 140 g/L with one perfusion filter; 195 g/L oxygen-limited. With inefficient metabolism, inhibition caps density at 7 to 20 g/L. The conclusion is that economics "would likely preclude" affordability as food [@SCI-14] {general|High}.
- **Best documented animal-free result.** Chicken cells at 28 million cells/mL over 20 days of repeated harvest, with medium cost cut by 38% (Pasitka et al. 2024, doi:10.1038/s43016-024-01022-w). A companion analysis modelled USD 13.67/kg for a 50:50 cell and plant hybrid product (doi:10.1038/s43016-023-00692-2) [@SCI-16; @SCI-17] {general|Medium}. At 2,000 to 3,000 pg per cell, 28 million cells/mL is about 56 to 84 g/L of wet cells (our arithmetic), below Humbird's 140 to 195 g/L. No comparable data exist for fish or shrimp cells.
- **Growth factor cost depends on the price assumption.** Humbird models growth factors at only USD 3 to 4 per kg of wet cells at 100,000 t/yr, assuming bulk recombinant prices [@SCI-14] {general|High}. At current prices, growth factors can be up to 95% of serum-free medium cost, and medium about 98% of raw-material cost at scale (preprint citing Negulescu et al. 2023) [@SCI-15] {general|Medium}. Both are true; they describe different futures (DG-104).
- **Production cost models.** Humbird: USD 37/kg of wet cell mass in fed-batch (24 x 20 m3 reactors, 6.8 kt/yr) and USD 51/kg in perfusion, with USD 663 million of capital for 6.9 kt/yr [@COST-47] {general|High}. A 2022 estimate of USD 63/kg at 540 t/yr is known only through a 2026 review [@COST-49] {general|Low}.
- **Approvals.** Singapore lists six cultivated products, including the world's first cultivated duck (April 2026) and beef (July 2026) [@RGN-04] {VN-adjacent|High}. The US FDA has completed five cultivated-cell consultations, including Wildtype's coho salmon on 28 May 2025, the first cultivated seafood cleared in the US [@RGN-03] {general|High}. See [[app-s3-regional]].

### S13.11.2 Vietnamese evidence

- Vietnam already expresses some of the costliest ingredients of cell culture media, but not for food: FGF-2, KGF/FGF7 and PDGF-BB in *Pichia* at VNU-HCM [@RD-36; @RD-37; @RD-38] {VN-direct|Medium}.
- Vinmec tested four commercial serum-free and xeno-free kits for cord-blood mesenchymal stem cells; only one worked (doi:10.1186/s13287-021-02694-y) [@RD-39] {VN-direct|High}. Other work compares fetal bovine serum with serum-free long-term culture [@RD-40] {VN-direct|High}.
- The only livestock stem-cell paper found is on porcine female germline stem cells (2019) [@RD-42] {VN-direct|High}. The only Vietnamese cultivated-meat paper is a 2024 legal analysis of EU and Singapore rules [@RD-43] {VN-direct|High}.
- We found no fish or shrimp cell line developed in Vietnam, in either database [@RD-01; @BIB-01] {VN-direct|Medium}.

### S13.11.3 What it means for Vietnam

- Vietnam has no food-grade fish or shrimp cell line to start from. The Indian catfish lines are a useful research tool for the same species as Vietnamese *tra*, but would need serum-free adaptation, suspension growth and muscle or fat character [@SCI-10] {VN-adjacent|High}.
- Any shrimp cultivated-seafood claim built on PmLyO-Sf9 should be treated as misinformed: the line is part insect [@SCI-12] {general|High}.
- The science supports "watch, do not build" for food production. Useful public research steps are serum-free adaptation of catfish cells and testing Vietnamese *Pichia* growth factors on fish cells.

> **Correction.** Earlier drafts grouped PHT, a gill line called "PHG" and PmLyO-Sf9 as ICAR-NBFGR food-relevant lines. PHT is real (NRFC-078) but is a serum-dependent virology line [@SCI-10] {VN-adjacent|High}. A striped catfish gill line exists, but the name "PHG" is not confirmed [@SCI-11] {VN-adjacent|Medium}. PmLyO-Sf9 is a black tiger shrimp x insect hybrid from CUSAT, not ICAR-NBFGR [@SCI-12] {general|High}. The claim that growth factors dominate media cost is true only at current prices [@SCI-14; @SCI-15] {general|Medium}.

## S13.12 Insects (benchmark only)

Insect protein appears in this report as an incumbent and a benchmark, not as a recommended play.

- **Shrimp.** Black soldier fly (BSF) larvae meal replaced 20% of fishmeal in whiteleg shrimp without growth loss; 30% reduced growth (control diet 25% fishmeal, so 20% replacement is about 5% of the diet; doi:10.1017/s0007114521004670) [@SCI-27] {general|High}. BSF meal had lower protein digestibility than the control in a shrimp screen [@SCI-23] {general|High}. Yellow mealworm meal replaced 50% of fishmeal with better growth and cut post-challenge mortality by 76.9% (a company-linked product; doi:10.3390/ani9050258) [@FM-26] {general|Medium}.
- **Fish.** BSF meal replaced up to 60% of fishmeal in juvenile striped catfish (174 g/kg of diet), but 100% cut growth [@FM-22] {general|Medium}. A meta-analysis puts the generally safe limit below 30% of fishmeal [@FM-25] {general|Medium}. Cricket meal replaced 100% of fishmeal protein in snakehead without growth loss [@FM-23] {general|Medium}.
- **Vietnamese evidence.** 30% BSF larvae meal gave the best result in swamp eel (feed conversion ratio 2.33) (doi:10.3390/aquacj5010007); fresh or dried BSF larvae have been tested in snakehead [@RD-54; @RD-55] {VN-direct|High}. The BSF cluster (34 Vietnam-tagged records) is led by papers on biodiesel from larval fat [@BIB-01] {VN-direct|Medium}.
- **Industry.** Entobel's Vietnamese plants have a design capacity of 11,000 t/yr [@ECO-01; @ECO-03] {VN-direct|Medium}.
- **What it means.** As a shrimp-feed benchmark, insect meal displaces only a small share of fishmeal. Microbial proteins such as CAP match or exceed it on digestibility [@SCI-23; @SCI-27] {general|High}. Many of the gains claimed for novel proteins in shrimp are functional (survival, palatability) rather than protein supply [@FM-20; @FM-26; @FM-45] {general|Medium}.

## S13.13 Tropical fermentation

### S13.13.1 State of the science in 2026

- ***Kluyveromyces marxianus* SS106**, isolated from Thai cassava pulp and starch-factory soil, grows at 35 to 45 C. On raw cassava starch at 40 C in 5 L stirred tanks it reached 39.3 g/L of cell dry weight (3.28 g/L/h) in a single batch and 36 to 46 g/L in repeated batches. The authors chose 40 C over 42 C to save energy (doi:10.3390/pr8080898) [@SCI-44] {VN-adjacent|High}.
- The genome of *K. marxianus* DMKU 3-1042 explains its thermotolerance. High-temperature fermentation is "expected" to reduce cooling cost and contamination, but we found no published study that quantifies the cooling cost saved in a tropical plant (doi:10.1186/s13068-015-0227-x) [@SCI-45] {general|Medium}.
- *K. marxianus* is also a precision-fermentation host (leghemoglobin at 7 to 10 g/L), and *C. utilis* tolerates up to 41 C [@SCI-04; @SCI-05; @SCI-22] {general|High}.

### S13.13.2 Engineering benchmarks

- Aerobic growth releases about 460 kJ per mol of oxygen consumed, and cooling water is 4 to 8 times cheaper than chilled water per unit of heat [@COST-50] {general|High}. A German baker's yeast plant with 7 x 150 m3 reactors removes about 11 MW of heat on average [@COST-52] {general|High}. A temperate design case uses 0.56 kW of compressor power per ton of refrigeration [@COST-51] {general|High}.
- **Our indicative cooling penalty for southern Vietnam** is about 0.7 to 1.35 kWh per kg of dry biomass, plus chiller capex: about USD 70 to 180 per tonne of dry biomass, or roughly 2 to 4% of the indicative cost of fungal feed protein (1 to 8% at the extremes). This is our calculation from general engineering rules and an assumed design wet-bulb temperature, not a published measurement [@COST-50; @COST-51; @COST-52] {VN-direct|Low}. Vietnamese manufacturing power costs about USD 0.073 to 0.081 per kWh for a plant running 24 hours a day [@COST-01; @COST-03] {VN-direct|High}.

### S13.13.3 Vietnamese evidence

- The Tropical Fermentation Network, set up through the Erasmus+ AsiFood project, links HUST with French and Southeast Asian partners on starters, safety and by-product valorisation (doi:10.3389/fmicb.2018.02278) [@RD-56] {VN-direct|Medium}.
- We found no Vietnamese measurement of fermentation cooling energy [@SCI-45; @COST-50] {VN-direct|Medium}.

### S13.13.4 What it means for Vietnam

- The strain toolkit for 40 to 45 C fermentation exists and matches cassava feedstocks [@SCI-44] {VN-adjacent|High}. Design for thermotolerant strains or hybrid cooling from day one.
- One call to a Vietnamese yeast or MSG plant for its chiller energy per m3 of broth would replace our estimate with a measurement.

> **Correction.** An earlier draft claimed that tropical cooling "may offset" Vietnam's power-cost advantage. Our estimate is that the extra cooling electricity is real (about half to 1.7 times the plant's other electricity use) but electricity is a small share of total cost, so the overall effect is about 2 to 4% of feed-protein cost and avoidable with thermotolerant strains [@COST-50; @COST-51] {VN-direct|Low}. See DG-088.

## S13.14 AI in research and development

- **State of the evidence.** This study did not review the literature on artificial intelligence (AI) in protein design, strain engineering or formulation. We make no claim about its state of the art.
- **Money.** The Bezos Earth Fund's Future of Food programme has committed USD 1 billion by 2030 and lists 23 grants worth USD 194.8 million, several on AI for alternative protein (fungal, cultivated and plant protein); we found no open call [@CAP-61] {general|Medium}.
- **Rules in Vietnam.** Decision 23/2026 lists omics (item 48) and bioinformatics (item 50) as priority high technologies [@REG-47] {VN-direct|High}. The IP Law amendment (Law 131/2025/QH15, effective 1 April 2026) adds rules on AI-created subject matter and a text and data mining exception, which bear on AI-assisted strain and protein design [@REG-62] {VN-direct|Medium}.
- **Vietnamese capacity.** VINIF, Vingroup's research foundation, has a Big Data focus in its project funding [@RD-05] {VN-direct|Medium}. We found no Vietnamese publication applying AI to alternative-protein R&D.
- **What it means.** AI tools may shorten strain and formulation development, but we have no evidence in this study to size the effect. Treat AI claims in pitches as unverified until backed by published or audited results.

## S13.15 Corrections to earlier claims

This table collects every science claim from earlier drafts that the wave 2 review checked. Claims marked "Unsupported" or "Wrong" are not used anywhere in the report. Conflicts are logged in [[app-r2-disagreements]].

| Earlier claim | Verdict | Current position | Evidence | Log |
|---|---|---|---|---|
| ">50 g/L titre needed" for cost-efficient precision fermentation (Nielsen et al. 2023) | Right, with a caveat | Expert assertion in a review (issue 2024), not a model output | [@SCI-01; @SCI-02] {general\|Medium} | none |
| Leghemoglobin 3.5 g/L secreted in *Pichia* (Shao 2022) | Right | Confirmed via a citing paper | [@SCI-03; @SCI-04] {general\|Medium} | none |
| Leghemoglobin 7.27 g/L in *K. marxianus* (Tian 2024) | Right but superseded | 10.1 g/L (Chen 2026) | [@SCI-04; @SCI-05] {general\|High} | none |
| *T. reesei* beta-lactoglobulin and ovalbumin (Aro 2022) | Partly right | Paper dated 2023; titres not verified; do not quote a titre | [@SCI-06] {general\|Low} | none |
| OPENPichia is "licence-free" | Partly right | Liberal licence with royalty-free commercial manufacture | [@SCI-08] {general\|High} | none |
| ICAR-NBFGR striped catfish thymus line PHT | Right | NRFC-078; a serum-dependent virology line, not a food line | [@SCI-10] {VN-adjacent\|High} | none |
| ICAR-NBFGR gill line "PHG" | Partly right | A gill line exists (2022); the name is not confirmed | [@SCI-11] {VN-adjacent\|Medium} | none |
| PmLyO-Sf9 shrimp line, grouped with ICAR-NBFGR | Partly wrong | Black tiger shrimp x insect hybrid from CUSAT; not a shrimp food cell line | [@SCI-12] {general\|High} | none |
| Growth factors dominate cultivated-meat media cost | Depends on price assumption | Up to 95% of medium cost today; USD 3 to 4/kg in Humbird's scaled model | [@SCI-14; @SCI-15] {general\|Medium} | DG-104 |
| 118.5 g/L *A. oryzae* biomass on vinasse (Karimi et al. 2019) | Wrong as a titre | Probably per litre of undiluted vinasse, about 5.9 g/L in the flask; do not use | [@SCI-18] {general\|High} | DG-105, DG-106 |
| *A. oryzae* metabolite burden (CPA, kojic acid, 3-NPA, aflatoxin) | Partly right | No aflatoxin; CPA and 3-NPA real; kojic acid not a mycotoxin | [@SCI-19] {general\|High} | none |
| Mycoprotein RNA must fall below 1% | Source conflict | Primary study: about 10% to about 2% of dry weight after heat treatment | [@SCI-20; @SCI-21] {general\|High} | DG-107 |
| *C. utilis* 49 to 57% protein on cassava peel | Right | Crude protein (N x 6.25); low-tier journal | [@SCI-22] {VN-adjacent\|Medium} | none |
| EFSA opinion on *Wolffia globosa* powder (Mankai) supports food use | Wrong on content | Safety not established because of manganese (2021) | [@SCI-28] {general\|High} | DG-108 |
| Fresh *Wolffia* is "not novel" in the EU | Unverified | Not found in the EC consultation list as fetched | [@SCI-32] {general\|Low} | none |
| Duckweed "PDCAAS 0.89" | Unsupported | No source found; do not use | [@SCI-34; @SCI-38] {general\|Low} | none |
| Duckweed productivity "up to 100 t DM/ha/yr" | Extrapolated ceiling | Use 10 to 30 t DM/ha/yr for planning | [@SCI-36; @SCI-37] {general\|Low} | DG-109 |
| Mung bean protein quality from pig DIAAS | Incomplete | Human digestibility about 20% lower than pigs | [@SCI-41; @SCI-42] {general\|High} | DG-110 |
| "No Vietnamese study has reported RNA reduction, mycotoxin testing or amino-acid digestibility" | Too strong | Such methods exist in Vietnam for yeast, traditional soy and rice DDG, but not for novel biomass; no DIAAS study | [@RD-31; @RD-61; @RD-23] {VN-direct\|Medium} | DG-056 |
| Vietnam has 2 plant-based meat papers and none on extrusion | Undercount | About 5 on-topic papers (2015 to 2026) and no extrusion study | [@BIB-01; @HSC-01] {VN-direct\|Medium} | DG-138, DG-139 |
| Tropical cooling "may offset" the power advantage | Partly right | Real but modest: about USD 70 to 180/t of biomass, 2 to 4% of feed-protein cost (our estimate) | [@COST-50; @COST-51] {VN-direct\|Low} | DG-088 |
| A single "capex per m3" can be borrowed from a TEA | Wrong | Capex per m3 differs about 7-fold between verified TEAs (about USD 51,000 vs 350,000 per m3) | [@COST-43; @COST-44] {general\|High} | DG-087 |
| China holds "70% of world fermentation capacity" | Unsupported | Even the GFI China report author could not verify it; do not use | [@RGN-24] {general\|Low} | DG-080 |

## S13.16 Techno-economic benchmarks used in this appendix

All values are from `tea_benchmarks.csv`. They are global models, mostly for US or European sites, and must not be read as Vietnamese costs. Capex per annual tonne is our derivation from the verified inputs [@COST-43; @COST-44; @COST-47] {general|High}.

| Process | Metric | Value | Cost basis | Source (DOI) |
|---|---|---|---|---|
| Mycoprotein, continuous airlift (food) | Minimum production cost | USD 3.55/kg wet; USD 29.56/kg protein | 2022, US | doi:10.3389/fsufs.2023.1204307 [@COST-43] {general\|High} |
| Mycoprotein | Capex | About USD 108 million for about 4,700 t/yr dry (about USD 22,800 per annual t dry) | 2022, US | [@COST-43] {general\|High} |
| SCP from off-gas via acetate (feed) | Production cost; capex | USD 4.15/kg; USD 320 million for 20,000 t/yr (about USD 16,000 per annual t) | about 2022 to 2023 | doi:10.3390/fermentation9080771 [@COST-44] {general\|High} |
| SCP from H2 and CO2 (feed) | Minimum selling price | USD 2,070/t | about 2023, US | doi:10.1021/acs.est.3c10312 [@COST-45] {general\|Medium} |
| SCP on renewable electricity | Protein cost at optimal sites | EUR 5.5 to 6.1/kg (2028); EUR 2.1 to 2.3/kg (2050) | projections | doi:10.1038/s41467-025-56364-1 [@COST-46] {general\|High} |
| Cultivated meat, fed-batch | Cost of wet cell mass | USD 37/kg | about 2020, US | doi:10.1002/bit.27848 [@COST-47] {general\|High} |
| Cultivated meat, perfusion | Cost; capex | USD 51/kg; USD 663 million for 6.9 kt/yr (about USD 96,000 per annual t wet) | about 2020, US | [@COST-47] {general\|High} |
| Precision-fermented food proteins | Peer-reviewed TEA | None verified | n/a | wave 1 cost review |
| Plant protein isolate, high-moisture extrusion | Capex and opex | None verified | n/a | wave 1 cost review |

The H2 and CO2 row rests on an abstract only; the others on full text or key excerpts.

## Gaps and how to close them

| # | Gap | Cheapest way to close it |
|---|---|---|
| 1 | Titres in Aro et al. 2023 (*T. reesei* beta-lactoglobulin and ovalbumin) | Read the open-access full text at doi:10.1016/j.foodres.2022.112131 |
| 2 | Name and accession of the striped catfish gill line | Email the ICAR-NBFGR National Repository of Fish Cell Lines (Lucknow) |
| 3 | EU status of *Wolffia* (Implementing Regulation (EU) 2022/2223 claim) | Read the Union list entry on EUR-Lex and the EC novel food catalogue |
| 4 | FeedKind and other methanotroph meals in shrimp and fish | Search *Aquaculture* and *Aquaculture Nutrition* for "FeedKind" and "Methylococcus capsulatus", 2019 to 2026 |
| 5 | Spirulina protein content and digestibility | One targeted literature search |
| 6 | Tropical cooling cost of fermentation | Ask a Vietnamese MSG or yeast plant for chiller energy per m3 of broth |
| 7 | A Vietnamese DIAAS reference dataset | Fund a study at an overseas laboratory or build capacity at a VILAS-accredited laboratory |
| 8 | Soybean-wastewater SCP (preprint): has it been peer reviewed? | Check publication status; contact the authors |
| 9 | SCP and yeast replacement thresholds in tilapia and pangasius | Targeted search; Can Tho University and Nong Lam University aquaculture faculties |
| 10 | Seaweed protein: global benchmarks and Vietnamese species data | A focused review, then extraction tests on *Ulva* and *Kappaphycus* |
| 11 | Mycelium texture and protein data on Vietnamese substrates | Pilot trials with VNUA mushroom groups on cassava and soybean residue |
| 12 | Plant protein isolation and extrusion capex | Equipment quotes from extruder vendors; read the Thai freeze-alignment TEA |
| 13 | Peer-reviewed TEA for precision-fermented food proteins | GFI APAC cost analyses; capacity reports; company data |
| 14 | AI in alternative-protein R&D | A dedicated literature review and a call for Vietnamese examples |
| 15 | The mycoprotein TEA re-run with Vietnamese inputs | Re-run the open model from Risner et al. 2023 with `cost_inputs.csv` |

## Related data files

- `science_facts.csv`: the 43 checked science claims behind sections S13.3 to S13.13, with DOI, full-text flag and retraction check.
- `tea_benchmarks.csv`: the 25 techno-economic benchmarks behind section S13.16 (see [[app-s12-costs]]).
- `replacement_trials.csv`: the 20 feed replacement trials behind sections S13.5 and S13.12 (see [[app-s6-feed-market]]).
- `publications.csv`: Vietnam-affiliated publications, including those cited here (see [[app-s7-research]]).
- `biblio_counts.csv`: OpenAIRE counts by topic and country.
- `cost_inputs.csv`: Vietnamese input costs used in the indicative cost estimates.
- `disagreements.csv`: DG-056, DG-080, DG-087, DG-088, DG-104 to DG-110 and DG-138 to DG-139 (see [[app-r2-disagreements]]).
- Working papers: `working-papers/wave2/science/science.md`, `working-papers/wave1/costs/costs.md`, `working-papers/wave1/rnd/m6-rnd-capacity.md`, `working-papers/wave2/feedmkt/feedmkt.md`, `working-papers/wave2/biblio/bibliometrics.md`.
