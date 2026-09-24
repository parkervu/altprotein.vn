# Data dictionary

Data files for "Alternative protein in Vietnam: a supply-side scoping study" (AltProtein Vietnam, September 2026). All files are UTF-8 CSV with one header row and snake_case column names. Every row carries a stable `record_id` (or `source_id`, `oq_id`, `dg_id`). Source IDs in `source_ids` resolve to `sources.csv`.

Built on 23 September 2026 by the data consolidation step from the wave 1 and wave 2 research outputs (see `working-papers/`). Where wave 2 changed a wave 1 value, the change is recorded in `change_log` (companies, facilities, instruments) or in `origin` and `notes` (routes, policy options, publications).

**Common columns.** `source_ids`: semicolon-separated source IDs. `evidence_label`: VN-direct, VN-adjacent or general. `confidence`: High, Medium or Low. `province_current` and `province_former`: added by the consolidation step using `provinces.csv` (former_units); left blank when the location is vague, flagged as assumed or unverified, or ambiguous.

**Province method.** A location is mapped only when it names a current or former province, or a district, town or industrial park that lies wholly inside one former unit (for example District 12 and Vinh Loc in former Ho Chi Minh City, Phu My in former Ba Ria-Vung Tau, Can Duoc in former Long An). Multi-site entries list each site when every site resolves.

## Files

| File | Rows | Purpose |
|---|---|---|
| [glossary.csv](#glossarycsv) | 172 | Bilingual glossary (English and Vietnamese) with definitions in both languages (feeds Appendix S). |
| [key-numbers.json](#key-numbersjson) | 86 | Key-number stat tiles embedded in pages with `{{kn:id}}`. |
| [plays.csv](#playscsv) | 16 | Ten plays and six public goods (chapter 11), with scores on seven criteria. |
| [play_criteria.csv](#play_criteriacsv) | 7 | Definitions of the seven scoring criteria for plays. |
| [play_weight_presets.csv](#play_weight_presetscsv) | 7 | Weight presets per audience for re-ranking plays. |
| [approvals.csv](#approvalscsv) | 33 | Novel food approvals in the region and reference markets (Singapore, US, Australia and New Zealand, Thailand, Korea, China and others), one row per approval. |
| [biblio_counts.csv](#biblio_countscsv) | 42 | Wave 2 bibliometric counts of publications by topic and country (OpenAIRE, 2015 to September 2026), with the exact query URL. |
| [biblio_trend_vn.csv](#biblio_trend_vncsv) | 132 | Wave 2 yearly counts of Vietnam-tagged publications by topic (OpenAIRE). |
| [brands.csv](#brandscsv) | 53 | Brands found in the retail field audit, with owner, manufacturer, plant location and main protein inputs. |
| [commodity_prices.csv](#commodity_pricescsv) | 38 | Wave 1 commodity prices (feed commodities, protein ingredients, carbon and nitrogen inputs, retail protein prices). |
| [companies.csv](#companiescsv) | 97 | Company and actor directory (wave 1 ecosystem map plus wave 2 verification and new rows). Wave 2 changes are logged in change_log, not silently overwritten. |
| [cost_inputs.csv](#cost_inputscsv) | 61 | Vietnamese production cost inputs (electricity, water, heat, labour, land, taxes, logistics) used for the economics chapter. |
| [countries.csv](#countriescsv) | 11 | Country comparison of novel food frameworks, approvals, public funding and open facilities (regional position). |
| [deals.csv](#dealscsv) | 19 | Deal log: investments and acquisitions relevant to alternative protein and agrifood tech in or linked to Vietnam. |
| [disagreements.csv](#disagreementscsv) | 170 | Register of conflicting numbers and claims found by the research agents, with the position taken (feeds Appendix R). |
| [engineering_suppliers.csv](#engineering_supplierscsv) | 9 | Engineering contractors and equipment vendors with a Vietnam presence relevant to fermentation and food processing. |
| [facilities.csv](#facilitiescsv) | 82 | Industrial facilities in Vietnam that alternative-protein ventures could use or learn from (fermentation, starch, breweries, feed and aquafeed mills, soy, biologics, parks, labs). Wave 2 changes are logged in change_log. |
| [facilities_regional.csv](#facilities_regionalcsv) | 16 | Pilot and contract manufacturing facilities in the region that are open (or not) to third parties. |
| [feed_benchmarks.csv](#feed_benchmarkscsv) | 31 | Wave 2 feed protein price and capacity benchmarks, including price per tonne of protein. |
| [feed_imports.csv](#feed_importscsv) | 24 | Vietnam feed ingredient imports by commodity and year (volume, value, origins). |
| [feedstock_prices.csv](#feedstock_pricescsv) | 32 | Prices of feedstocks and side streams (cassava, rice by-products, molasses, brewer's spent grain and others) by market and date. |
| [feedstocks.csv](#feedstockscsv) | 29 | Feedstock and side-stream data sheets: annual volume, regions, current use, price, protein and moisture content. |
| [fermentation_volume_estimate.csv](#fermentation_volume_estimatecsv) | 7 | Derived estimate of installed industrial fermentation vessel volume in Vietnam by segment (our calculation from capacity and productivity assumptions). |
| [funding_programs.csv](#funding_programscsv) | 20 | Grants, prizes and funding programmes open to Vietnamese applicants for alternative protein and related research. |
| [inclusion_rates.csv](#inclusion_ratescsv) | 12 | Typical inclusion rates of fishmeal and other protein ingredients in feed by species. |
| [ingredient_suppliers.csv](#ingredient_supplierscsv) | 22 | Suppliers and importers of protein ingredients used by Vietnamese alt-protein and do chay makers. |
| [institutions.csv](#institutionscsv) | 31 | Research institutions and university units relevant to alternative protein in Vietnam. |
| [instruments.csv](#instrumentscsv) | 66 | Regulatory instrument register (laws, decrees, circulars, decisions, resolutions, foreign reference rules). Wave 2 corrections supersede wave 1 and are logged in change_log. |
| [investors.csv](#investorscsv) | 30 | Investors (VC, PE, DFI, corporate, philanthropy) with a thesis or track record relevant to Vietnam and alternative protein. |
| [macro_indicators.csv](#macro_indicatorscsv) | 87 | Macro indicators for the protein economy: production, consumption, feed output, trade, environment and context. |
| [milestones.csv](#milestonescsv) | 30 | Dated milestones 2025 to 2035 (laws, strategies, targets, reforms) in Vietnam and reference jurisdictions. |
| [ministries.csv](#ministriescsv) | 6 | Vietnamese ministries after the 2025 restructuring, their predecessors and roles relevant to alternative protein. |
| [open_questions.csv](#open_questionscsv) | 155 | Register of open questions from all research notes, with the cheapest way to close each; near-duplicates merged and both origins cited. |
| [outlook.csv](#outlookcsv) | 75 | Outlook numbers for 2030 and 2035 (population, demand, feed, prices, targets) with source and type. |
| [pilot_labs.csv](#pilot_labscsv) | 32 | Pilot plants, testing laboratories, feed trial facilities, hi-tech parks and university facilities that founders can use. |
| [policy_options.csv](#policy_optionscsv) | 25 | Policy options: wave 1 list plus the wave 2 ranked list, with origin and cross-links between related options. |
| [provinces.csv](#provincescsv) | 34 | The 34 provincial-level units after the 1 July 2025 merger (Resolution 202/2025/QH15) with their former units. Used to normalise locations. |
| [publications.csv](#publicationscsv) | 103 | Vietnam-affiliated publications relevant to alternative protein (wave 1 screened list plus wave 2 top-cited papers), deduplicated on DOI. |
| [replacement_trials.csv](#replacement_trialscsv) | 20 | Feed trials of novel protein ingredients: the maximum replacement of fishmeal or soybean meal without loss of performance. |
| [research_funding.csv](#research_fundingcsv) | 16 | Research funding programmes (national and international) relevant to alternative protein research in Vietnam. |
| [retail_audit_skus.csv](#retail_audit_skuscsv) | 186 | Cleaned and classified SKU records from the retail field audit (Nha Trang 6 Sep 2026; Ho Chi Minh City 16 and 20 Sep 2026; 186 SKUs, 11 stores), source FORM-01. |
| [retail_audit_summary_archetypes.csv](#retail_audit_summary_archetypescsv) | 16 | Retail audit summary by formulation archetype: SKU and product counts, protein content (g per 100 g) and price per 100 g of protein (VND). |
| [retail_audit_summary_price_per_100g_by_type.csv](#retail_audit_summary_price_per_100g_by_typecsv) | 12 | Retail audit summary: price per 100 g or 100 ml (VND) by product type. |
| [retail_audit_summary_price_per_protein_by_type.csv](#retail_audit_summary_price_per_protein_by_typecsv) | 11 | Retail audit summary: median price per 100 g and per 100 g of protein (VND) by product type. |
| [retail_audit_summary_primary_protein_family_by_type.csv](#retail_audit_summary_primary_protein_family_by_typecsv) | 16 | Retail audit summary: count of SKUs by primary protein family (rows) and product type (columns). |
| [retail_audit_summary_protein_by_type.csv](#retail_audit_summary_protein_by_typecsv) | 13 | Retail audit summary: protein content (g per 100 g or 100 ml) by product type and as-sold form. |
| [routes.csv](#routescsv) | 17 | Route-to-market table by product type (food and feed), rebuilt from the wave 2 updated table, plus wave 1 rows for product types not in it. |
| [science_facts.csv](#science_factscsv) | 43 | State-of-the-science facts by technology family (titres, costs, safety, nutrition, productivity) with DOI and full-text status. |
| [sources.csv](#sourcescsv) | 1,275 | Master source list. Every citation ID used in the report resolves to a row here. |
| [talent.csv](#talentcsv) | 11 | University admission quotas for food technology, biotechnology and aquaculture programmes (talent pipeline). |
| [tariffs.csv](#tariffscsv) | 10 | Vietnam import tariffs (MFN, ATIGA, ACFTA) for feed and food protein inputs by HS code. |
| [tea_benchmarks.csv](#tea_benchmarkscsv) | 25 | Techno-economic benchmarks from the literature by process (production cost, capex, scale) with cost-basis year. |
| [timeline.csv](#timelinecsv) | 48 | Timeline of events in Vietnamese alternative protein (companies, research, policy, investment). |
| [trade_flows.csv](#trade_flowscsv) | 12 | Trade flows Vietnam depends on or supplies (protein ingredients, cassava, starch) with partners. |

## Columns by file

### approvals.csv

Novel food approvals in the region and reference markets (Singapore, US, Australia and New Zealand, Thailand, Korea, China and others), one row per approval.

Rows: 33. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | APR-001 |
| `date` | Date of the event, price or approval (ISO format where available). | 2019-05-21 |
| `country` | Country. | Singapore |
| `company` | Company name. | Triton Algae Innovations |
| `product` | Product or ingredient. | Chlamydomonas reinhardtii THN6 (green) algae biomass |
| `category` | Category (sector or technology family). | other (microalgae) |
| `regulator` | Approving regulator. | Singapore Food Agency |
| `form_of_approval` | Form of approval (listing, letter, consultation). | Listed as approved novel food (pre-market approval) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RGN-04 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-adjacent |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Date = SFA 'date allowed to be used as food' on list dated 14 Aug 2026... |

### biblio_counts.csv

Wave 2 bibliometric counts of publications by topic and country (OpenAIRE, 2015 to September 2026), with the exact query URL.

Rows: 42. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | BC-001 |
| `topic` | Topic code and label (T01 to T21). | T01 Plant-based meat / meat analogue |
| `query_string` | Search terms used. | "plant-based meat" OR "meat analogue" OR "meat analog" OR "meat substi... |
| `query_url` | Exact OpenAIRE API query URL. | https://api.openaire.eu/graph/v1/researchProducts?search=%22plant-base... |
| `country` | Country. | VN |
| `count_2015_2026` | Number of records for the topic and country, 2015 to Sept 2026. | 9 |
| `country_total_2015_2026` | All records for the country in the same period (denominator). | 240387 |
| `per_10k` | Topic records per 10,000 country records. | 0.374 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | BIB-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | All 9 titles read: about 6 on-topic (2 reviews, extrudate texture, soy... |

### biblio_trend_vn.csv

Wave 2 yearly counts of Vietnam-tagged publications by topic (OpenAIRE).

Rows: 132. Columns: 9.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | BT-001 |
| `topic` | Topic. | T01 Plant-based meat / meat analogue |
| `year` | Year the value refers to. | 2015 |
| `count` | Number of Vietnam-tagged records in the year. | 0 |
| `complete_set` | Whether every record was listed and read. | yes (all records listed and read) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | BIB-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Raw OpenAIRE records incl. false positives; see biblio_counts.csv note... |

### brands.csv

Brands found in the retail field audit, with owner, manufacturer, plant location and main protein inputs.

Rows: 53. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | BR-001 |
| `brand` | Brand name as sold. | Vinamilk |
| `owner` | Owner or parent organisation. | Vietnam Dairy Products JSC (Vinamilk) |
| `ownership_country` | Country of the brand owner. | Vietnam (state holding company SCIC is the largest shareholder; not ve... |
| `manufacturer` | Manufacturer (may differ from owner). | Vinamilk |
| `plant_location_current_province` | Plant location, current province. | Multiple plants; not verified per SKU |
| `product_types` | Product types in the audit. | soy milk, nut/seed milks, high-protein plant milk, plant yogurt, plant... |
| `main_protein_inputs` | Main protein ingredients from labels. | pea protein (high-protein milk, yogurt), soybean extract, oat, peanut,... |
| `n_skus_in_audit` | Number of audited SKUs for the brand. | 17 |
| `public_scale_info` | Public information on scale. | Largest dairy company in Vietnam |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FORM-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Only domestic brand in the audit using pea protein: an imported ingred... |

### commodity_prices.csv

Wave 1 commodity prices (feed commodities, protein ingredients, carbon and nitrogen inputs, retail protein prices).

Rows: 38. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | CP-001 |
| `commodity` | Commodity. | Fishmeal, Peru 65% protein |
| `market` | Market or price basis (e.g. CIF, FOB, domestic). | global (CIF, World Bank series) |
| `price` | Price (see unit). | 1580.81 |
| `unit` | Unit of the value or price. | USD/t |
| `date` | Date of the event, price or approval (ISO format where available). | 2025-01 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | COST-27 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | World Bank Pink Sheet via IndexMundi. About USD 2,430 per t protein. |

### companies.csv

Company and actor directory (wave 1 ecosystem map plus wave 2 verification and new rows). Wave 2 changes are logged in change_log, not silently overwritten.

Rows: 97. Columns: 24.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | CO-001 |
| `name` | Name of the entity. | Emmay (Emmay and Colleagues JSC) |
| `vn_name` | Vietnamese name. | Emmay |
| `category` | Category (sector or technology family). | mushroom/mycelium |
| `hq_province_current` | Headquarters location as given (current province). | Ho Chi Minh City |
| `plant_location` | Plant or site locations as given. | HCMC (Hanh Thong ward, former Go Vap); warehouse in Singapore |
| `founded` | Founding year. | 2017 (informal from c.2010) |
| `ownership_country` | Country of ownership. | Vietnam |
| `stage` | Stage (startup, SME, incumbent, lead). | startup |
| `products` | Main products. | Mushroom-based pork floss (cha bong), pate, banh mi fillings, spring r... |
| `key_protein_inputs` | Main protein raw materials. | Shiitake mushroom and mycelium (solid and liquid fermentation claimed)... |
| `scale_indicators` | Scale indicators (capacity, revenue, staff); wave 2 additions appended after "&#124;". | Sales 1.5 t/month rising to about 2 t/month (2023, company-reported); ... |
| `funding_known` | Known funding. | None disclosed; ADB #SheExports accelerator (We-Fi funded, WISE implem... |
| `website` | Website. | nutrigreenfood.com.vn (did not resolve on 2026-09-23) |
| `status` | Operating status and last evidence; wave 2 additions appended after "&#124;". | active as of 2024 (last evidence); checked 2026-09-23 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | ECO-12; ECO-13; ECO-14 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Founder/CEO Van Pham. Only VN startup found claiming mycelium technolo... |
| `origin` | Which research output(s) the row comes from. | wave 1 ECOSYSTEM |
| `last_verified` | Date and research wave of the last verification of the row. | 2026-09-23 (wave 1, ECOSYSTEM; wave 2 re-check not completed) |
| `change_log` | Changes made after wave 1 (old value, new value, source and confidence). Entries separated by "&#124;&#124;". | [wave 2 VERIFY-CO] Not re-verified in wave 2 (site unavailable, DNS fa... |
| `province_current` | Current unit for the HQ location in hq_province_current (plant_location used only for a single-site district hint). | Ho Chi Minh City |
| `province_former` | Former (pre-merger) unit(s) for the location, from provinces.csv former_units. Blank when it cannot be determined without guessing. | Ho Chi Minh City |

### cost_inputs.csv

Vietnamese production cost inputs (electricity, water, heat, labour, land, taxes, logistics) used for the economics chapter.

Rows: 61. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | CI-001 |
| `item` | Item measured. | Electricity: average retail price (all customers) |
| `value` | Numeric value (see unit). | 2204.0655 |
| `unit` | Unit of the value or price. | VND/kWh excl. VAT |
| `date_or_year` | Date or year the value applies to. | effective 2025-05-10; still in force Jul 2026 |
| `location` | Location the value applies to. | Vietnam (national, EVN) |
| `basis` | Basis of the figure (how it was measured, estimated or quoted). | Regulated tariff, MOIT Decision 1279/QD-BCT of 9 May 2025 (+4.8%) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | COST-01; COST-04 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Measured (official tariff). Press in Jul 2026 still quotes 2,204 VND/k... |

### countries.csv

Country comparison of novel food frameworks, approvals, public funding and open facilities (regional position).

Rows: 11. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | CTY-001 |
| `country` | Country. | Singapore |
| `novel_food_framework` | Novel food framework in force. | Novel food pre-market approval framework; now under the Food Safety an... |
| `framework_year` | Year of the framework. | 2019 (framework); FSSA novel food provisions effective 28 Nov 2025 |
| `authority` | Competent authority. | Singapore Food Agency (SFA) |
| `covers_pf` | Covers precision-fermented ingredients. | yes |
| `covers_biomass` | Covers microbial biomass. | yes |
| `covers_cultivated` | Covers cultivated meat. | yes |
| `approvals_to_date_summary` | Approvals to date. | 18 novel foods on SFA list dated 14 Aug 2026: 6 cultivated (Eat Just x... |
| `public_funding_summary` | Public funding. | Singapore Food Story R&D Programme S$144M (from 2019); later S$165M pr... |
| `open_facilities_summary` | Open-access facilities. | ScaleUp Bio (Tuas, up to 10,000 L, SFA food manufacturing licence May ... |
| `relevance_to_vn` | Relevance to Vietnam. | Regulatory reference model and nearest contract manufacturing option; ... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RGN-04; RGN-05; RGN-08; RGN-09; RGN-11; RGN-13; RGN-15; RGN-17; RGN-19... |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-adjacent |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Timeline claimed ~9-12 months once dossier complete (secondary, RGN-17... |

### deals.csv

Deal log: investments and acquisitions relevant to alternative protein and agrifood tech in or linked to Vietnam.

Rows: 19. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | DL-001 |
| `date` | Date of the event, price or approval (ISO format where available). | 2019-10-14 |
| `company` | Company name. | Cricket One |
| `company_country` | Country of the company. | Vietnam |
| `category` | Category (sector or technology family). | insect protein (food ingredient) |
| `round_or_type` | Round or deal type. | Seed |
| `amount_usd` | Amount in USD (or "undisclosed"). | undisclosed |
| `currency_original` | Original currency. | USD |
| `investors_or_acquirer` | Investors or acquirer. | 500 Startups (co-lead); Masik Enterprises (co-lead) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | CAP-11 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Amount not disclosed. Cricket powder for bakeries/snacks; claimed sale... |

### disagreements.csv

Register of conflicting numbers and claims found by the research agents, with the position taken (feeds Appendix R).

Rows: 170. Columns: 7.

| Column | Meaning | Example |
|---|---|---|
| `dg_id` | Disagreement ID (DG-nnn). | DG-001 |
| `topic` | What the numbers or claims are about. | Aquafeed volume 2025 |
| `claim_a` | First claim (with its source IDs). | 6.5 Mt (USDA Post, MAC-01) |
| `claim_b` | Second claim (with its source IDs). | 3.9 to 4.8 Mt (industry via ACAP, MAC-06); 3.3 to 3.85 Mt (capacity x ... |
| `position_taken` | Position the research team took and why. | Report both. The ACAP species split is more transparent. Neither close... |
| `from_note` | Research note(s) the row was extracted from (path under working-papers/). | wave1/macro/m1-protein-economy.md |
| `notes` | Cross-links to the same or a related disagreement logged by another agent. | Same or related disagreement: DG-120. |

### engineering_suppliers.csv

Engineering contractors and equipment vendors with a Vietnam presence relevant to fermentation and food processing.

Rows: 9. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | ES-001 |
| `name` | Name of the entity. | HTG Engineering |
| `type` | Type or category of the entity. | local engineering contractor (MEP, cleanroom, cold storage) |
| `vn_presence` | Presence in Vietnam. | HCMC-based |
| `relevance` | Why the row matters for alternative protein in Vietnam. | Built MEP, -25 C cold storage and class 10,000 cleanroom work across t... |
| `url` | Web address of the main page or document. | not re-read |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | IND-64 (wave 1) |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Most concrete local builder of food-grade utilities found |

### facilities.csv

Industrial facilities in Vietnam that alternative-protein ventures could use or learn from (fermentation, starch, breweries, feed and aquafeed mills, soy, biologics, parks, labs). Wave 2 changes are logged in change_log.

Rows: 82. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FAC-001 |
| `name` | Name of the entity. | Vedan Vietnam Phuoc Thai complex (MSG / glutamic acid fermentation) |
| `type` | Type or category of the entity. | fermentation |
| `owner` | Owner or parent organisation. | Vedan Vietnam Enterprise Corp. (Vedan International Holdings, HKEX-lis... |
| `owner_country` | Country of the owner. | Taiwan |
| `location_province_current` | Location as given by the industry agent (current province). | Dong Nai |
| `location_province_former` | Location as given by the industry agent (former province and site). | Dong Nai (Long Thanh district, Phuoc Thai commune; province unchanged ... |
| `capacity` | Capacity (see capacity_unit). | 700 |
| `capacity_unit` | Unit of capacity. | m3 per fermentation tank (tank count not disclosed) |
| `year` | Year the capacity or information refers to. | 2026 (website) |
| `relevant_capability` | Capability relevant to alternative protein. | Large aerobic stirred-tank amino-acid fermentation (MSG, PGA broth), c... |
| `open_to_third_parties` | Whether the facility serves third parties. | unknown |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | IND-01; IND-02; IND-04; IND-07; VCO-03; VCO-01; VCO-02; VCO-05; VCO-04 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Tank size is a company claim. Current MSG capacity not published; hist... |
| `last_verified` | Date and research wave of the last verification of the row. | 2026-09-23 (wave 2, VERIFY-CO) |
| `change_log` | Changes made after wave 1 (old value, new value, source and confidence). Entries separated by "&#124;&#124;". | [wave 2 VERIFY-CO, VCO-03, Medium] notes appended: "Glutamic acid name... |
| `province_current` | Current (post-1 July 2025) provincial unit(s) for the location, added by the consolidation step. Blank when the location is vague, unverified or ambiguous. | Dong Nai |
| `province_former` | Former (pre-merger) unit(s) for the location, from provinces.csv former_units. Blank when it cannot be determined without guessing. | Dong Nai |

### facilities_regional.csv

Pilot and contract manufacturing facilities in the region that are open (or not) to third parties.

Rows: 16. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FR-001 |
| `name` | Name of the entity. | ScaleUp Bio commercial pilot plant (LOGOS Food21, 21 Tuas West Drive) |
| `country` | Country. | Singapore |
| `operator` | Operator. | ScaleUp Bio Pte Ltd (shareholders ADM and, from Mar 2026, Fusionopolis... |
| `type` | Type or category of the entity. | Precision and biomass fermentation CDMO, pilot to small commercial |
| `capacity` | Capacity. | Up to 10,000 L fermentation plus downstream (2024 figures) |
| `food_grade` | Whether the facility is food-grade (licence, GMP, HACCP) where known. | Yes: SFA food manufacturing licence May 2024 |
| `open_to_third_parties` | Open to third parties. | Yes, foreign clients (named 2024 clients from Australia, US, Malaysia,... |
| `status_2026` | Status in 2026. | Operating; Mar 2026 said operations 'consolidated' in Tuas and scope w... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RGN-10; RGN-11; RGN-12; RGN-13; RGN-14 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-adjacent |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Original JV of Nurasa (Temasek) and ADM. Mar 2026 releases name only A... |

### feed_benchmarks.csv

Wave 2 feed protein price and capacity benchmarks, including price per tonne of protein.

Rows: 31. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FB-001 |
| `item` | Feed ingredient or benchmark. | Fishmeal, Peru 65% CIF (World Bank monthly series) |
| `market` | Market or price basis (e.g. CIF, FOB, domestic). | world benchmark |
| `price_or_capacity` | Price or capacity (see unit). | 1433 |
| `unit` | Unit of the value or price. | USD/t |
| `date` | Date of the event, price or approval (ISO format where available). | 2020 annual mean |
| `protein_pct` | Crude protein content, %. | 65 |
| `usd_per_t_protein` | Price per tonne of protein, USD (derived). | 2205 |
| `sold_in_vn` | Whether it is sold in Vietnam. | yes (imported grades) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FM-02 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Mean of 12 monthly values (my calculation). Range 1,365 to 1,498. |

### feed_imports.csv

Vietnam feed ingredient imports by commodity and year (volume, value, origins).

Rows: 24. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FI-001 |
| `commodity` | Commodity. | Corn (maize) |
| `hs_code` | Harmonized System tariff code. | 1005 |
| `year` | Year the value refers to. | 2023 |
| `volume_t` | Volume in tonnes. | 9710000 |
| `value_usd` | Value in USD. | 2870000000 |
| `top_origins` | Main countries of origin. | n/a |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | MAC-11 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Derived by us from 2024 customs values and reported 2024 growth rates ... |

### feedstock_prices.csv

Prices of feedstocks and side streams (cassava, rice by-products, molasses, brewer's spent grain and others) by market and date.

Rows: 32. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FSP-001 |
| `stream` | Feedstock or side stream. | Cassava fresh root (30% starch) |
| `market_location` | Market or location of the price. | Tay Ninh |
| `price` | Price (see unit). | 3000-3500 |
| `unit` | Unit of the value or price. | VND/kg |
| `date` | Date of the event, price or approval (ISO format where available). | 2026-04-09 |
| `basis` | Basis of the figure (how it was measured, estimated or quoted). | factory-gate purchase |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FS-11 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Up 1,000-1,500 VND/kg (~75%) vs Apr 2025 |

### feedstocks.csv

Feedstock and side-stream data sheets: annual volume, regions, current use, price, protein and moisture content.

Rows: 29. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FDS-001 |
| `stream` | Feedstock or side stream. | Cassava roots (domestic harvest) |
| `vn_name` | Vietnamese name. | sắn / khoai mì (củ tươi) |
| `annual_volume` | Annual volume (see unit). | 10.24 |
| `unit` | Unit of the value or price. | Mt fresh roots |
| `year` | Year the value refers to. | 2025 |
| `main_regions_current` | Main producing provinces (current). | Tay Ninh; Gia Lai; Dak Lak; Quang Ngai; Dong Nai; Son La; Thanh Hoa |
| `main_regions_former` | Main producing provinces (former units). | Tay Ninh; Gia Lai (+Binh Dinh); Dak Lak (+Phu Yen); Quang Ngai (+Kon T... |
| `n_sites_or_key_companies` | Number of sites or key companies. | ~1.2 million farm households (VietnamPlus Jan 2026) |
| `current_use` | Current use of the stream. | ~85% to industry (starch, ethanol, MSG, chips); rest food/feed |
| `price` | Price (see unit). | 3000-3550 |
| `price_unit` | Unit of price. | VND/kg (30% starch basis) |
| `price_date` | Date of the price. | 2026-04-09 |
| `protein_pct_dm` | Protein, % of dry matter. | 1.5-2.6 |
| `moisture_pct` | Moisture, %. | 77-85 |
| `seasonality` | Seasonality of supply. | Main harvest about Oct/Nov to Apr; 70-80% of area harvested by late Ma... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FS-01; FS-11; FS-12; FS-03; FS-14; FS-08 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Area 499,100 ha (-18,600 ha vs 2024); yield 20.5 t/ha. 2024: ~10.5 Mt ... |

### fermentation_volume_estimate.csv

Derived estimate of installed industrial fermentation vessel volume in Vietnam by segment (our calculation from capacity and productivity assumptions).

Rows: 7. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FVE-001 |
| `segment` | Industry segment. | Glutamate (MSG) fermentation |
| `vessel_type` | Vessel type. | aerobic, aseptic stirred tank |
| `input_capacity` | Output capacity used as input to the estimate. | 285000-435000 |
| `input_capacity_unit` | Unit and basis of input_capacity. | t/yr MSG (Ajinomoto 150,000 claimed; Vedan 100,000-250,000 assumed; Da... |
| `productivity_assumption` | Productivity assumption. | 14-28 t MSG per m3 gross per yr (titer 130-170 g/L, cycle 40-52 h, 65-... |
| `estimated_gross_vessel_volume_m3_low` | Estimated gross vessel volume, low, m3 (derived). | 10100 |
| `estimated_gross_vessel_volume_m3_high` | Estimated gross vessel volume, high, m3 (derived). | 30200 |
| `status` | Status as of September 2026 unless stated. | modelled estimate |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | IND-08; IND-01; IND-04; IND-13 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct inputs; general assumptions |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Low |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Vedan's current capacity is the largest unknown. Vedan tank size 700 m... |

### funding_programs.csv

Grants, prizes and funding programmes open to Vietnamese applicants for alternative protein and related research.

Rows: 20. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | FP-001 |
| `name` | Name of the entity. | Alternative Protein R&D RFP (Rounds 1 and 2) |
| `funder` | Funder. | Coefficient Giving (formerly Open Philanthropy) |
| `type` | Type or category of the entity. | grant (for-profits eligible, subject to due diligence) |
| `eligibility_for_vn_applicants` | Eligibility of Vietnamese applicants. | Yes in principle: universities, research institutes, companies of any ... |
| `amount_range` | Grant size range. | Round 1: USD 100K to 1M; Round 2: USD 1M to 5M; up to USD 30M total |
| `deadline_or_status_2026` | Deadline or status in 2026. | Round 1 closed 10 Aug 2026 (decisions by 30 Nov 2026); Round 2 closed ... |
| `focus` | Focus areas. | Off-flavour reduction; fat alternatives; egg replacement; fish flavour... |
| `url` | Web address of the main page or document. | https://coefficientgiving.org/funds/farm-animal-welfare/request-for-pr... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | CAP-56; CAP-57 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Fund landing page says 'up to $10 million'; RFP page says up to USD 30... |

### inclusion_rates.csv

Typical inclusion rates of fishmeal and other protein ingredients in feed by species.

Rows: 12. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | IR-001 |
| `species` | Farmed species. | Fed freshwater fish (carps, tilapia, catfish) |
| `ingredient` | Feed or food ingredient. | fishmeal |
| `inclusion_low_pct` | Low end of inclusion, % of diet. | 1 |
| `inclusion_high_pct` | High end of inclusion, % of diet. | 2 |
| `basis` | Basis of the figure (how it was measured, estimated or quoted). | global review; industry-average estimate |
| `region` | Region the value applies to. | global |
| `year` | Year the value refers to. | 2017 |
| `doi_or_url` | DOI or URL of the source. | https://doi.org/10.1038/s41586-021-03308-6 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FM-05; MAC-39 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Naylor et al. 2021: 'fishmeal inclusion rates dropped for these specie... |

### ingredient_suppliers.csv

Suppliers and importers of protein ingredients used by Vietnamese alt-protein and do chay makers.

Rows: 22. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | ISU-001 |
| `ingredient` | Feed or food ingredient. | Protein concentrates and textured protein (HS 2106.10; includes TVP an... |
| `supplier_or_importer` | Supplier or importer. | Chinese exporters (aggregate, mirror data) |
| `country_of_origin` | Country of origin. | China |
| `vn_location` | Location in Vietnam. | n/a (imports) |
| `evidence` | Evidence for the supply link. | China reports exports to Vietnam of 7,957 t worth USD 12.63 million in... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FORM-05 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Vietnam-reported imports from China for the same code are USD 9.15 mil... |

### institutions.csv

Research institutions and university units relevant to alternative protein in Vietnam.

Rows: 31. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | INST-001 |
| `name` | Name of the entity. | Hanoi University of Science and Technology (HUST) - biotechnology and ... |
| `vn_name` | Vietnamese name. | Đại học Bách khoa Hà Nội - Viện/Trường Công nghệ Sinh học và Công nghệ... |
| `type` | Type or category of the entity. | university |
| `city_province_current` | City or province as given (current). | Hanoi |
| `relevant_units` | Relevant faculties, centres or labs. | Food technology, biotechnology, fermentation technology groups (e.g. g... |
| `capabilities` | Capabilities relevant to alternative protein. | Protein extraction and characterisation (SDS-PAGE, DSC, in vitro diges... |
| `relevant_topics` | Relevant research topics. | Side-stream protein (rice DDG, spent brewer's yeast, okara); yeast pro... |
| `example_outputs` | Example outputs (DOIs). | 10.1002/apj.70043; 10.21203/rs.3.rs-3171967/v1; 10.51316/jst.178.etsd.... |
| `public_contact_url` | Public contact page. | https://hust.edu.vn |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RD-01; RD-22; RD-23; RD-31; RD-32; RD-56 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Strongest VN group on food-grade side-stream protein found. HUST unit ... |
| `province_current` | Current (post-1 July 2025) provincial unit(s) for the location, added by the consolidation step. Blank when the location is vague, unverified or ambiguous. | Ha Noi |
| `province_former` | Former (pre-merger) unit(s) for the location, from provinces.csv former_units. Blank when it cannot be determined without guessing. | Ha Noi |

### instruments.csv

Regulatory instrument register (laws, decrees, circulars, decisions, resolutions, foreign reference rules). Wave 2 corrections supersede wave 1 and are logged in change_log.

Rows: 66. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | INS-001 |
| `instrument_name` | Name of the instrument. | Law on Food Safety |
| `number` | Official number. | 55/2010/QH12 |
| `type` | Type or category of the entity. | law |
| `issuer` | Issuing body. | National Assembly |
| `date_issued` | Date issued. | 2010-06-17 |
| `effective_date` | Date of effect. | 2011-07-01 |
| `status` | Status as of September 2026 unless stated. | in force (amended 2018 by Law 28/2018/QH14; replacement in draft) |
| `topic` | Topic. | food safety framework |
| `relevance_to_alt_protein` | Relevance to alternative protein (wave 2 text first where merged). | High: sets the only legal gate for any new food; no novel food concept |
| `key_provisions` | Key provisions (wave 2 text first where merged). | Art 5(1) bans raw materials 'not of the type used for food'; Art 5(5)(... |
| `url` | Web address of the main page or document. | https://thuvienphapluat.vn/van-ban/Thuong-mai/Luat-an-toan-thuc-pham-2... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | REG-01; REG-17 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Art 55(1)(c) has no implementing procedure; latent legal risk for nove... |
| `origin` | Which research output(s) the row comes from. | wave 1 REGULATION |
| `change_log` | Changes made after wave 1 (old value, new value, source and confidence). Entries separated by "&#124;&#124;". | [wave 2 REG2 supersedes wave 1 where they differ] instrument_name: wav... |

### investors.csv

Investors (VC, PE, DFI, corporate, philanthropy) with a thesis or track record relevant to Vietnam and alternative protein.

Rows: 30. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | INV-001 |
| `name` | Name of the entity. | Mekong Capital (Mekong Enterprise Fund IV) |
| `type` | Type or category of the entity. | PE |
| `hq` | Headquarters. | Ho Chi Minh City, Vietnam |
| `vietnam_presence` | Presence in Vietnam. | Yes (local manager) |
| `relevant_thesis` | Investment thesis relevant to alternative protein. | Growth equity in consumer-driven VN companies; portfolio includes Ento... |
| `example_relevant_deals` | Example deals. | Entobel Series B USD 25M (2022) |
| `typical_ticket` | Typical ticket size. | USD 5M to 25M (Entobel USD 25M from a USD 246M fund) |
| `url` | Web address of the main page or document. | https://www.mekongcapital.com/our-investment/ |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | CAP-01; CAP-02; CAP-10; CAP-47 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Proparco is an LP (USD 15M). The only VN investor to lead a >USD 10M a... |

### macro_indicators.csv

Macro indicators for the protein economy: production, consumption, feed output, trade, environment and context.

Rows: 87. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | MI-001 |
| `indicator` | Indicator. | Pork production, live weight |
| `value` | Numeric value (see unit). | 5389.2 |
| `unit` | Unit of the value or price. | thousand t |
| `year` | Year the value refers to. | 2025 |
| `geography` | Geography the value covers. | Vietnam |
| `measured_or_estimated` | Whether the value is measured, estimated or claimed. | measured (official estimate) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | MAC-14; MAC-12 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | +3.9% y/y. Implied 2024 about 5,187 kt. |

### milestones.csv

Dated milestones 2025 to 2035 (laws, strategies, targets, reforms) in Vietnam and reference jurisdictions.

Rows: 30. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | MS-001 |
| `date` | Date of the event, price or approval (ISO format where available). | 2025-03-01 |
| `jurisdiction` | Jurisdiction. | Vietnam |
| `event` | Event. | New Government structure: 14 ministries and 3 ministerial-level agenci... |
| `instrument` | Instrument that sets the milestone. | Resolution 176/2025/QH15 (18 Feb 2025); Decrees 29, 35, 40, 42, 55/202... |
| `status` | Status as of September 2026 unless stated. | in force |
| `relevance` | Why the row matters for alternative protein in Vietnam. | Changes which agency owns feed, food safety, biotech, standards and ta... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | GT-04; GT-05; GT-06; GT-07; GT-08; GT-09 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Plan assumes GDP growth about 10%/yr 2026-2030 |

### ministries.csv

Vietnamese ministries after the 2025 restructuring, their predecessors and roles relevant to alternative protein.

Rows: 6. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | MIN-001 |
| `ministry_now` | Current ministry name. | Ministry of Agriculture and Environment (MAE) |
| `name_vi` | Vietnamese name. | Bộ Nông nghiệp và Môi trường |
| `predecessors` | Predecessor ministries. | Ministry of Agriculture and Rural Development (MARD) + Ministry of Nat... |
| `legal_basis` | Legal basis (instrument and article). | Resolution 176/2025/QH15 (18 Feb 2025); Decree 35/2025/ND-CP |
| `effective_date` | Date the structure took effect. | 2025-03-01 |
| `units_relevant_to_alt_protein` | Units relevant to alternative protein. | Department of Livestock Production and Animal Health (Cuc Chan nuoi va... |
| `sector_roles` | Sector roles. | Feed and aquafeed (permitted lists, feed trials, QCVN 01-190); primary... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | GT-04; GT-05; REG-42 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Unit list taken from wave 1 reading of Decree 35/2025 (REG-42), not re... |

### open_questions.csv

Register of open questions from all research notes, with the cheapest way to close each; near-duplicates merged and both origins cited.

Rows: 155. Columns: 9.

| Column | Meaning | Example |
|---|---|---|
| `oq_id` | Open question ID (OQ-nnn). | OQ-001 |
| `topic` | Topic area. | protein economy and feed |
| `question` | The open question. | Fishmeal: domestic production, imports and domestic prices, 2023 to 20... |
| `why_it_matters` | Why it matters, where the note says. | This decides whether do chay protein is domestic or imported. |
| `cheapest_way_to_close` | Cheapest way to close it (merged items separated by "&#124;"). | Get Vietnam Customs HS 2301.20 data through ITC Trade Map, or ask the ... |
| `owner_org_to_ask` | Organisations named as the ones to ask or read, extracted from the text. | Vietnam Customs; ITC Trade Map; Vietnam Animal Feed Association; VAFA;... |
| `from_note` | Research note(s) the row was extracted from (path under working-papers/). | wave1/macro/m1-protein-economy.md (item 1); wave1/costs/costs.md (item... |
| `status` | open or partly closed (partly closed where a later wave answered part of it). | partly closed |
| `notes` | Merged near-duplicates (with their original wording) and what later waves found. | Merged near-duplicates: costs.md item 1: "Domestic fishmeal price by p... |

### outlook.csv

Outlook numbers for 2030 and 2035 (population, demand, feed, prices, targets) with source and type.

Rows: 75. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | OUT-001 |
| `indicator` | Indicator. | Population, UN WPP 2024 medium variant |
| `value` | Numeric value (see unit). | 101.6 |
| `unit` | Unit of the value or price. | million people |
| `year` | Year the value refers to. | 2025 |
| `source` | Publisher of the outlook figure. | UN DESA World Population Prospects 2024 via Our World in Data grapher |
| `type` | Type of figure (projection, target, scenario, etc.). | projected (modelled) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | GT-12 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Read through OWID re-publication of WPP 2024, not the UN portal. GSO o... |

### pilot_labs.csv

Pilot plants, testing laboratories, feed trial facilities, hi-tech parks and university facilities that founders can use.

Rows: 32. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | PL-001 |
| `name` | Name of the entity. | FIRI Food Production Pilot and Technology Transfer Center (FTET) |
| `type` | Type or category of the entity. | pilot plant |
| `owner` | Owner or parent organisation. | Food Industries Research Institute (FIRI), Ministry of Industry and Tr... |
| `location_current` | Location as given (current units). | Hanoi (Khuong Dinh ward) |
| `location_former` | Location as given (former units). | Hanoi (Thanh Xuan district) |
| `capabilities` | Capabilities relevant to alternative protein. | Pilot-scale production experiments and technology transfer; transferre... |
| `scale` | Scale (volume, size or staff). | not published (5 professional staff) |
| `food_grade` | Whether the facility is food-grade (licence, GMP, HACCP) where known. | not stated |
| `accreditation` | Accreditation (e.g. ISO/IEC 17025, VILAS). | not stated |
| `access_model` | How outsiders get access, with contacts. | Technology transfer and pilot trials on request (production@firi.vn, 0... |
| `url` | Web address of the main page or document. | https://www.firi.vn/FTET |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | INF-01; INF-02 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Soy/tofu process know-how is the closest to plant-protein work. No fer... |
| `province_current` | Current (post-1 July 2025) provincial unit(s) for the location, added by the consolidation step. Blank when the location is vague, unverified or ambiguous. | Ha Noi |
| `province_former` | Former (pre-merger) unit(s) for the location, from provinces.csv former_units. Blank when it cannot be determined without guessing. | Ha Noi |

### policy_options.csv

Policy options: wave 1 list plus the wave 2 ranked list, with origin and cross-links between related options.

Rows: 25. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | PO-001 |
| `origin` | Which research output(s) the row comes from. | wave 1 REGULATION |
| `rank_wave2` | Rank in the wave 2 ranked list (blank for wave 1 rows). | 1 |
| `option` | Policy option. | Insert a defined 'new food / new food ingredient' category with a prop... |
| `owner_agency` | Owner agency. | MOH/VFA; National Assembly Committee for Science, Technology and Envir... |
| `instrument_to_amend` | Instrument to amend (wave 2). | Draft Law on Food Safety (amended), product-declaration chapter |
| `precedent` | Precedent. | Singapore FSSA 2025 novel food approval (VN-adjacent, verified); EU Re... |
| `effort` | Effort: Low, Medium or High. | High |
| `impact` | Impact: Low, Medium or High (wave 1 only). | High |
| `timeline` | Timeline (wave 2). | October to November 2026 session; law in force 1 Jan 2027 |
| `related_options` | Record IDs of related options in the other wave. | PO-015 |
| `status_in_wave2` | Whether wave 2 restated the option. | restated or refined by wave 2 option(s): PO-015 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | REG-01; REG-12; REG-14; REG-63 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | One-off window; must be WTO-notified; risk of creating a slow gate, so... |

### provinces.csv

The 34 provincial-level units after the 1 July 2025 merger (Resolution 202/2025/QH15) with their former units. Used to normalise locations.

Rows: 34. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | PRV-001 |
| `new_unit` | Current provincial-level unit (from 1 July 2025). | Tuyen Quang |
| `name_vi` | Vietnamese name. | Tuyên Quang |
| `type` | Province or centrally governed city. | province |
| `admin_centre` | Administrative centre. | Minh Xuan ward (former Tuyen Quang) |
| `centre_in_former_unit` | Former unit containing the centre. | Tuyen Quang |
| `former_units` | Former units merged into the new unit (semicolon-separated). | Ha Giang; Tuyen Quang |
| `n_former_units` | Number of former units. | 2 |
| `area_km2` | Area, km2 (Resolution 202). | 13795.5 |
| `population` | Population (Resolution 202). | 1865270 |
| `res202_clause` | Clause of Resolution 202/2025/QH15. | Art 1(1) |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Area and population as stated in Resolution 202/2025/QH15 (government ... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | GT-01; GT-02; GT-03 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |

### publications.csv

Vietnam-affiliated publications relevant to alternative protein (wave 1 screened list plus wave 2 top-cited papers), deduplicated on DOI.

Rows: 103. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | PUB-001 |
| `doi` | Digital Object Identifier (without https://doi.org/). | 10.15625/0866-7160/v37n4.7091 |
| `title` | Paper title. | Preparation of protein isolated from rice bran |
| `year` | Year the value refers to. | 2016 |
| `institutions` | Vietnamese institutions (stated or probable). | Institute of Biotechnology, VAST (Hanoi) [stated in abstract] |
| `topic` | Topic(s). | plant protein: rice bran |
| `key_result` | Key result (wave 1 rows). | Laboratory method to prepare rice bran protein isolate; argues rice br... |
| `relevance` | Relevance to alternative protein (wave 1 rows). | high |
| `cited_by` | Citation count from OpenAIRE (wave 2 rows). | 22 |
| `origin` | Which research output(s) the row comes from. | wave 1 RND |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RD-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Vietnamese-language article; full results not read; key result from Sc... |

### replacement_trials.csv

Feed trials of novel protein ingredients: the maximum replacement of fishmeal or soybean meal without loss of performance.

Rows: 20. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RTR-001 |
| `species` | Farmed species. | Whiteleg shrimp (L. vannamei) |
| `novel_ingredient` | Novel ingredient tested. | low-fishmeal formulation (plant proteins plus amino acids/phytase) |
| `max_replacement_without_loss` | Maximum replacement without loss of performance. | fishmeal 25% -> 10% of diet (60% of fishmeal removed) |
| `basis` | Basis of the figure (how it was measured, estimated or quoted). | 8-week tank trial; growth not affected (but feed efficiency and surviv... |
| `country` | Country of the trial. | not stated (likely China) |
| `doi` | Digital Object Identifier (without https://doi.org/). | 10.1111/anu.12657 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FM-08 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Protein replacement. Note: authors flag lower antioxidant status on lo... |

### research_funding.csv

Research funding programmes (national and international) relevant to alternative protein research in Vietnam.

Rows: 16. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RF-001 |
| `programme` | Programme. | NAFOSTED basic research grants (natural sciences, incl. biology/agricu... |
| `funder` | Funder. | National Foundation for Science and Technology Development (NAFOSTED),... |
| `type` | Type or category of the entity. | competitive research grant |
| `relevant_scope` | Relevant scope. | Basic research; categories listed: basic research in natural sciences,... |
| `typical_amount` | Typical amount. | Not published on pages fetched; typical project size NOT established i... |
| `status_2026` | Status in 2026. | Operating: grant acknowledgements in 2024-2026 papers (e.g. 2026 chemi... |
| `url` | Web address of the main page or document. | https://nafosted.gov.vn/en/ |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RD-06; RD-12 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Dominant funder acknowledged in VN-affiliated literature relevant to t... |

### retail_audit_skus.csv

Cleaned and classified SKU records from the retail field audit (Nha Trang 6 Sep 2026; Ho Chi Minh City 16 and 20 Sep 2026; 186 SKUs, 11 stores), source FORM-01.

Rows: 186. Columns: 46.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | SKU-001 |
| `sku_id` | Field SKU ID (from the product log). | P001 |
| `date` | Date of the event, price or approval (ISO format where available). | 2026-09-06 |
| `city` | City of the store. | Nha Trang |
| `store` | Store. | Lotte Mart Nha Trang |
| `channel_type` | Retail channel. | Modern Retail |
| `product_name` | Product name as sold. | Cơm Chiên Chay Gạo Lứt (brown-rice vegetarian fried rice) |
| `brand_raw` | Brand as logged. | SG Food |
| `brand` | Cleaned brand. | SG Food |
| `origin_raw` | Origin as logged. | Vietnam (local) |
| `category_raw` | Category as logged. | Traditional / Do Chay (mock-meat, tofu) |
| `format_raw` | Format as logged. | Ready-meal / fried rice |
| `product_type` | Cleaned product type. | ready meal |
| `as_sold_form` | Form as sold. | ready-to-eat |
| `formulation_archetype` | Formulation archetype code (A0 to A15). | A15 |
| `primary_protein_source` | Main protein source. | none (brown rice 60%) |
| `secondary_protein_sources` | Other protein sources. | vegan fish ball 2.8%, vegan sausage 2% (composition not stated); mushr... |
| `non_vegan_flag` | Non-vegan ingredient flag (e.g. EGG, MILK). | EGG |
| `key_ingredients` | Ingredient list (label or OSINT). | Brown rice 60% (brown rice, water), vegetable oil, mixed vegetables, k... |
| `protein_g_per_100` | Protein, g per 100 g or 100 ml. | 4.2 |
| `protein_unit` | Basis of protein value. | per 100 g |
| `protein_value_basis` | Where the protein value came from. | field log (label or collector OSINT) |
| `energy_kcal_per_100` | Energy, kcal per 100. | 146 |
| `fat_g_per_100` | Fat, g per 100. | 5.1 |
| `carbs_g_per_100` | Carbohydrate, g per 100. | 20.8 |
| `sodium_mg_per_100` | Sodium, mg per 100. | 581 |
| `price_vnd` | Shelf price, VND. | 31900 |
| `pack_size` | Pack size. | 200 |
| `pack_unit` | Pack unit (g or ml). | g |
| `price_per_100g_vnd` | Price per 100 g or 100 ml, VND (derived). | 15950 |
| `price_per_100g_protein_vnd` | Price per 100 g of protein, VND (derived). | 290476 |
| `price_confidence` | Confidence of the price read. | High |
| `conv_equiv_price_per_100g_vnd` | Price per 100 g of a conventional equivalent, VND. | 12300 |
| `chay_vs_conv_price_diff_pct` | Difference vs the conventional equivalent, %. | 18.5 |
| `likely_imported_protein_ingredient` | Whether the main protein ingredient is likely imported (Y/N). | N |
| `brand_owner` | Brand owner. | Saigon Food JSC (Công ty CP Sài Gòn Food), tax code 0302994301 |
| `ownership_country` | Owner country. | Vietnam (shareholders not verified) |
| `manufacturer` | Manufacturer. | Saigon Food JSC |
| `plant_location` | Plant location. | Ho Chi Minh City, Vĩnh Lộc Industrial Park, Vĩnh Lộc commune (former B... |
| `product_group` | Product group key (same product across stores). | SGF-comchien |
| `data_confidence` | Overall confidence in the row. | Medium |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | FORM-01; FORM-31; FORM-32 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Protein source inferred: analog pieces 50% of kit; composition not on ... |
| `field_notes_original` | Original collector notes. | Frozen ready-meal format, not a meat analog per se. Brand confirmed vi... |

### retail_audit_summary_archetypes.csv

Retail audit summary by formulation archetype: SKU and product counts, protein content (g per 100 g) and price per 100 g of protein (VND).

Rows: 16. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RAA-001 |
| `formulation_archetype` | Archetype code. | A0 |
| `archetype` | Archetype description. | not a protein product / insufficient data |
| `n_sku` | Number of SKU rows. | 24 |
| `n_products` | Number of distinct products. | 19 |
| `count` | Products with a protein value. | 14 |
| `median` | Median protein, g per 100. | 3.95 |
| `min` | Minimum protein, g per 100. | 1.53 |
| `max` | Maximum protein, g per 100. | 5.7 |
| `count_ppp` | SKUs with a price per protein value. | 17 |
| `median_ppp` | Median price per 100 g protein, VND. | 368548 |
| `min_ppp` | Minimum price per 100 g protein, VND. | 155556 |
| `max_ppp` | Maximum price per 100 g protein, VND. | 1727642 |

### retail_audit_summary_price_per_100g_by_type.csv

Retail audit summary: price per 100 g or 100 ml (VND) by product type.

Rows: 12. Columns: 6.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RAP-001 |
| `product_type` | Product type. | canned analog |
| `count` | SKUs with a price. | 7 |
| `median` | Median price per 100 g or 100 ml, VND. | 30811 |
| `min` | Minimum, VND. | 10067 |
| `max` | Maximum, VND. | 38000 |

### retail_audit_summary_price_per_protein_by_type.csv

Retail audit summary: median price per 100 g and per 100 g of protein (VND) by product type.

Rows: 11. Columns: 7.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RAQ-001 |
| `product_type` | Product type. | canned analog |
| `n` | SKUs with both price and protein. | 2 |
| `med_price_100g` | Median price per 100 g, VND. | 24034 |
| `med_price_100g_protein` | Median price per 100 g protein, VND. | 321103 |
| `min_pp` | Minimum price per 100 g protein, VND. | 223704 |
| `max_pp` | Maximum price per 100 g protein, VND. | 418502 |

### retail_audit_summary_primary_protein_family_by_type.csv

Retail audit summary: count of SKUs by primary protein family (rows) and product type (columns).

Rows: 16. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RAF-001 |
| `primary_family` | Primary protein family. | cashew |
| `canned_analog` | Number of SKUs of product type "canned analog". | 0 |
| `dried_tvp_soy_chunks` | Number of SKUs of product type "dried tvp soy chunks". | 0 |
| `dumpling_spring_roll_bun_with_vegetable_filling` | Number of SKUs of product type "dumpling spring roll bun with vegetable filling". | 0 |
| `frozen_meat_seafood_analog` | Number of SKUs of product type "frozen meat seafood analog". | 0 |
| `other` | Number of SKUs of product type "other". | 0 |
| `plant_milk` | Number of SKUs of product type "plant milk". | 0 |
| `plant_yogurt_creamer` | Number of SKUs of product type "plant yogurt creamer". | 0 |
| `protein_powder` | Number of SKUs of product type "protein powder". | 0 |
| `ready_meal` | Number of SKUs of product type "ready meal". | 0 |
| `snack_jerky` | Number of SKUs of product type "snack jerky". | 0 |
| `tofu` | Number of SKUs of product type "tofu". | 0 |
| `vegan_cheese_spread` | Number of SKUs of product type "vegan cheese spread". | 7 |
| `total` | Total SKUs in the family. | 7 |

### retail_audit_summary_protein_by_type.csv

Retail audit summary: protein content (g per 100 g or 100 ml) by product type and as-sold form.

Rows: 13. Columns: 7.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RAN-001 |
| `product_type` | Product type. | canned analog |
| `as_sold_form` | As sold form. | ready-to-eat |
| `count` | SKUs with a protein value. | 2 |
| `median` | Median protein, g per 100. | 6.79 |
| `min` | Minimum. | 4.5 |
| `max` | Maximum. | 9.08 |

### routes.csv

Route-to-market table by product type (food and feed), rebuilt from the wave 2 updated table, plus wave 1 rows for product types not in it.

Rows: 17. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | RT-001 |
| `product_type` | Product type (food or feed). | Plant-based food from known ingredients |
| `route` | Legal route to market (as of 23 Sep 2026). | Self-declaration (Decree 15/2018). From 2027 (draft law): likely "decl... |
| `authority` | Competent authority. | Provincial authority |
| `documented_agency_time` | Documented agency time. | Immediate after filing |
| `main_open_risk` | Main open risk. | Transition rules of the new law; no allergen list or naming rule to re... |
| `legal_basis` | Legal basis (from the matched wave 1 row). | Law 55/2010; Decree 15/2018 Art 4-5; Decree 43/2017 as amended by 111/... |
| `precedent_in_vn` | Precedent in Vietnam (wave 1). | Many (do chay brands, soy and nut milks) |
| `wave1_product_type` | Matched wave 1 product type. | Plant-based food from known ingredients (tofu, textured soy, gluten, j... |
| `wave1_route` | Wave 1 route text (superseded where different). | Self-declaration (tu cong bo san pham) with lab test report within 12 ... |
| `changed_in_wave2` | Whether wave 2 changed the row (bold text in the source table). | yes |
| `wave2_changes` | The text wave 2 marked as changed. | From 2027 (draft law): likely "declare applied standard" or "no declar... |
| `origin` | Which research output(s) the row comes from. | wave 2 REG2 route table (as of 23 Sep 2026); matched to wave 1 row |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | REG2-05; REG2-06; REG2-24; REG2-25; REG-01; REG-02; REG-06; REG-07; RE... |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | Confidence as given in the wave 2 table. | High (current); Medium (2027) |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | source_ids combine the matched wave 1 route row with REG2 sources for ... |

### science_facts.csv

State-of-the-science facts by technology family (titres, costs, safety, nutrition, productivity) with DOI and full-text status.

Rows: 43. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | SF-001 |
| `family` | Technology family. | precision_fermentation |
| `claim` | Claim. | Titer needed for cost-efficient food protein by precision fermentation |
| `value` | Numeric value (see unit). | above 50 |
| `unit` | Unit of the value or price. | g/L |
| `organism_or_product` | Organism or product. | bulk food proteins (milk, egg) |
| `scale` | Scale (lab, pilot, industrial). | n/a (expert assertion in review) |
| `year` | Year the value refers to. | 2024 |
| `doi` | Digital Object Identifier (without https://doi.org/). | 10.1146/annurev-food-072023-034256 |
| `fulltext_read` | Whether the full text was read (Y/N). | N (abstract read) |
| `retraction_check` | Result of the retraction check. | none found |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | SCI-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Nielsen MB, Meyer AS, Arnau J. Annu Rev Food Sci Technol 15:173-187 (o... |

### sources.csv

Master source list. Every citation ID used in the report resolves to a row here.

Rows: 1,275. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `source_id` | Source ID (prefix plus number) used in citations. | MAC-01 |
| `prefix` | ID prefix (agent). | MAC |
| `agent` | Research agent that cited the source. | MACRO |
| `citation` | Full citation text as given in the notes. | USDA FAS GAIN. Vietnam: Grain and Feed Annual, report VM2026-0012. 15 ... |
| `title` | Title (parsed from the citation; check against citation). | Vietnam: Grain and Feed Annual, report VM2026-0012 |
| `author_or_publisher` | Author or publisher (parsed). | USDA FAS GAIN |
| `date` | Publication date (parsed; "undated" where stated). | 15 Apr 2026 |
| `url` | Main URL (other URLs in notes). | https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileNa... |
| `doi` | DOI where given. | 10.1186/s13756-019-0671-7 |
| `source_type` | gov/statistics, law, peer-reviewed, company, press, advocacy, market-research, database or other (mapped from the agent's type). | gov/statistics |
| `accessed` | Access date. | 2026-09-23 |
| `notes` | Type as given by the agent, other URLs, access problems, and IDs that share the same URL or DOI. | Type as given: gov/statistics (Post estimates) / Same URL as FS-23 |
| `wave` | Research wave. | wave1 |
| `from_note` | Notes file the source list came from. | wave1/macro/m1-protein-economy.md |

### talent.csv

University admission quotas for food technology, biotechnology and aquaculture programmes (talent pipeline).

Rows: 11. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | TAL-001 |
| `university` | University. | Can Tho University |
| `programme` | Programme. | Food Technology (standard) |
| `code` | National programme code. | 7540101 |
| `quota_year` | Admission year. | 2026 |
| `quota` | Admission quota. | 220 |
| `url` | Web address of the main page or document. | https://tuyensinh.ctu.edu.vn/chuong-trinh-dai-tra/177-thong-tin/841-da... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | INF-15 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Plus 80 in high-quality programme (CTCLC) = 300 total food technology |

### tariffs.csv

Vietnam import tariffs (MFN, ATIGA, ACFTA) for feed and food protein inputs by HS code.

Rows: 10. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | TAR-001 |
| `hs_code` | Harmonized System tariff code. | 1201 (1201.90) |
| `description` | Description. | Soybeans, whether or not broken (other than seed) |
| `mfn_rate_2026` | Most-favoured-nation rate, 2026. | 0% (WITS 2023 applied MFN; no later change found) |
| `atiga_rate` | ASEAN (ATIGA) rate. | not verified (likely 0%) |
| `acfta_rate` | ASEAN-China (ACFTA) rate. | not verified (likely 0%) |
| `legal_basis` | Legal basis (instrument and article). | Decree 26/2023/ND-CP Appendix II as amended (Decree 144/2024; 73/2025;... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | REG2-22; REG2-23 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | WITS TRAINS 2023: 1 national line at 0%. Decree 73/2025 did not change... |

### tea_benchmarks.csv

Techno-economic benchmarks from the literature by process (production cost, capex, scale) with cost-basis year.

Rows: 25. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | TEA-001 |
| `process` | Process. | Continuous airlift fermentation (F. venenatum) |
| `product` | Product. | Mycoprotein (wet, ~27% solids) |
| `scale` | Scale (volume, size or staff). | 2,000 kg/h wet (about 17,500 t/yr wet, 4,700 t/yr dry); 2 x 155 m3 air... |
| `metric` | Metric. | MSP (minimum production cost) |
| `value` | Numeric value (see unit). | 3.55 |
| `unit` | Unit of the value or price. | USD/kg wet mycoprotein |
| `year_of_cost_basis` | Cost-basis year and place. | 2022 (US, labour USD 20/h) |
| `plant_grade` | Food or feed grade. | food |
| `source_citation` | Citation of the study. | Risner, McDonald & Jones (2023). A techno-economic model of mycoprotei... |
| `doi_or_url` | DOI or URL of the source. | https://doi.org/10.3389/fsufs.2023.1204307 |
| `fulltext_read` | Whether the full text was read (Y/N). | Y (core sections) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | COST-43 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | High |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Processed Quorn-like product 4.03 USD/kg. Model runs 24 h x 365 d; exc... |

### timeline.csv

Timeline of events in Vietnamese alternative protein (companies, research, policy, investment).

Rows: 48. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | TL-001 |
| `date` | Date of the event, price or approval (ISO format where available). | 1976 |
| `event` | Event. | Site at Vinh Hao (Tuy Phong, former Binh Thuan) chosen for spirulina c... |
| `actors` | Actors involved. | Prof. Nguyen Huu Thuoc; Institute of Biology; Vinh Hao |
| `category` | Category (sector or technology family). | microalgae |
| `significance` | Significance. | Oldest continuous non-animal protein biomass production in VN |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | ECO-52 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Low |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Company history page; dates are company claims. |

### trade_flows.csv

Trade flows Vietnam depends on or supplies (protein ingredients, cassava, starch) with partners.

Rows: 12. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | TF-001 |
| `flow` | import or export. | import |
| `product` | Product or ingredient. | Peptones and other protein substances n.e.s. (includes soy protein iso... |
| `hs_code` | Harmonized System tariff code. | 3504 |
| `year` | Year the value refers to. | 2023 |
| `volume_t` | Volume in tonnes. | 2,421 (estimated by WITS, not reported) |
| `value_usd` | Value in USD. | 22,184,270 |
| `main_partners` | Main partner countries. | China 45% (USD 10.1M); US USD 3.4M; Spain USD 2.6M; Japan USD 1.7M; Si... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. | RGN-45 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing). | Medium |
| `notes` | Free-text notes from the research agent and, where stated, the consolidation step. | Vietnam-reported. Every partner has the same unit value (USD 9.16/kg),... |



## Files added in the synthesis step

### glossary.csv
| Column | Meaning |
|---|---|
| term_id | Stable ID (GL-001 ...) |
| category | Group used in Appendix S |
| term_en, term_vi | Term in English and Vietnamese |
| abbreviation | Abbreviation if any |
| definition_en, definition_vi | Short definitions in both languages |

### key-numbers.json
A JSON array (86 entries in edition 1.1). Fields: `id`, `label`, `label_vi`, `value` (display string), `value_low`, `value_high` (numbers or null), `unit`, `as_of`, `context`, `source_ids`, `derived` (true if our own calculation or count), `evidence`, `confidence`, `primary_page`, `pages` (all pages that reference the id). Entries added in edition 1.1 also have `foresight_type` (trend, projection, estimate, signal, wildcard or vision), `horizon` (the year or years the value refers to) and `edition` ("1.1").

### plays.csv
| Column | Meaning |
|---|---|
| play_id | T1 to T10 (plays) or P1 to P6 (public goods) |
| type | `play` or `public good` |
| name, family, segment | Short name, technology family, segment |
| what, why_vietnam, must_be_true, kill_tests | Play card fields (chapter 11) |
| first_customers, partners | Named first buyers and partners (public goods: related policy options) |
| horizon, horizon_start_years, horizon_end_years | Time to first commercial result, as text and as numbers of years from 2026 |
| capital_note | Indicative capital need |
| lead_audiences, related_pages | Audiences and page ids |
| source_ids, evidence_label, confidence | Evidence behind the play card |
| market_pull, vietnam_advantage, technical_readiness, route_clarity, capital_efficiency, defensibility, public_value | Scores 1 to 5 (plays only); see play_criteria.csv |

Weighted score = sum(score x weight) / 100, using a row of play_weight_presets.csv.

### play_criteria.csv
`criterion_id`, `field` (column name in plays.csv), `label`, `definition`, `score_1_means`, `score_5_means`.

### play_weight_presets.csv
`preset_id`, `label`, one weight column per criterion field (percent, sums to 100), `rationale`.

### Changes to existing files in the synthesis step
- **policy_options.csv:** added `report_rank` (1 to 24, as ranked in chapter 12) and `report_tier` (1, 2, 3 or `superseded`); added PO-026 to PO-033 (origin "synthesis"); filled `impact` for PO-015 to PO-025 with the synthesis judgement (High, Medium or Low).
- **open_questions.csv:** added `priority_rank` (1 to 20, as ranked in chapter 14) and `unblocks` (plays or public goods each question affects); added OQ-127.

### Changes to existing files in edition 1.1
- **sources.csv:** 469 rows appended (waves 3 to 5); rows `QNT-model`, `NGF-calc` and `AQF-calc` record our calculation scripts and are not cited with `[@...]`.
- **open_questions.csv:** OQ-128 to OQ-155 added (topic "futures 2030 to 2050"); OQ-127 set to "partly closed" (Decision 1625 indicates livestock feed only).
- **disagreements.csv:** DG-143 to DG-170 added (futures round).
- **companies.csv:** CO-097 Thai Duong Feed JSC added.
- **instruments.csv:** INS-065 (Decision 1625/QD-TTg, feed scheme) and INS-066 (Decision 1466/QD-TTg) added; INS-043 (Decision 429) status set to "replaced".
- **glossary.csv:** 38 futures and foresight terms added (category "Futures and foresight (edition 1.1)"); the Vietnamese definition of GL-133 (evidence label) now glosses VN-adjacent as "tương đồng với nước hoặc loài tương tự".
- **key-numbers.json:** 24 entries added; four updated (sources, open questions and disagreements counts; research intensity).
- **bioeconomy_strategies.csv:** BES-003 noted as replaced by Decision 1466.
- **frontier_gas_tech.csv:** FGT-001 hydrogen condition aligned with chapter 16 (USD 1.5 to 2 per kg for bulk feed).

### charts/data/
Small chart-ready tables built from the chapters for charts whose data are not already in one file (see `charts/chart-specs.json`). Each has a `source_ids` column where applicable.


## Files added in the futures round (edition 1.1)

Built on 2026-09-24 by `research/wave3/consolidate_wave3.py` from the futures-round research streams (wave3: FTG, FTB, CLM, QNT, GEO, ECF, HSC, NTS; wave4: NGF, AQF, HUB; wave5: VIS). The research notes, CSVs and scripts are in `working-papers/wave3/`. Values are as the research agents wrote them. Cleaning only: UTF-8 with LF line endings, snake_case column names, no em or en dashes, `evidence_label` as the evidence column name, and a `record_id` first column (kept from the stream where it had one, otherwise a short prefix plus the row number in the stream's row order). Forward-looking values carry a `foresight_type` label (trend, projection, estimate, signal, wildcard or vision); our own estimates are what-if results, not forecasts.

**Sources.** 469 source rows were appended to `sources.csv` (and the identical copy in `sources/`), marked `wave3`, `wave4` or `wave5` in the `wave` column, with `from_note` pointing to the stream's notes; `sources.csv` now has 1275 rows. `source_type` is mapped from the agent's stated type, which is kept in `notes` as "Type as given". Rows that share a URL or DOI with another row say so in `notes`. The IDs QNT-model, NGF-calc and AQF-calc name our own calculations; they do not match the citation token pattern and cannot be cited as `[@ID]`.

**Balance model.** `tools/balance_model.py` is the QNT model with package paths: it reads `data/balance_assumptions.csv` and rewrites `data/balance_outputs.csv` and `data/balance_sensitivity.csv` (run `python3 tools/balance_model.py`). Checked on 2026-09-24: it reproduces both files exactly.

| File | Rows | Purpose |
|---|---|---|
| [co2_point_sources_vn.csv](#co2_point_sources_vncsv) | 18 | Large CO2 point sources in Vietnam (steel, ammonia and urea, cement, refineries, gas processing, ethanol, brewing, biogas, storage) with volume and gas purity, as possible carbon feedstock. |
| [frontier_gas_tech.csv](#frontier_gas_techcsv) | 10 | Gas and electro-fermentation routes (hydrogen-oxidising bacteria, methanotrophs, gas fermentation of industrial off-gas, electro-microbial routes): readiness, plant scale, resource use, cost paths to 2050 and the conditions for a Vietnam window. |
| [vn_energy_inputs_2050.csv](#vn_energy_inputs_2050csv) | 50 | Vietnam energy and input indicators to 2050 that decide gas-fermentation economics: grid emission factor, power prices, renewable and hydrogen targets, electrolyser and hydrogen costs. |
| [ai_biodesign_evidence.csv](#ai_biodesign_evidencecsv) | 21 | Evidence register for AI and automation in protein, strain and media design: measured results separated from claims. |
| [approvals_trend.csv](#approvals_trendcsv) | 44 | Approvals and regulatory events for novel proteins, 2024 to 2026, extending edition 1.0 approvals.csv. |
| [frontier_bio_tech.csv](#frontier_bio_techcsv) | 14 | Bio-design frontier (AI bio-design, precision fermentation, cultivated meat, molecular farming, cell-free synthesis, biomass fermentation): readiness in 2026, trajectories to 2050, Vietnam fit and when a window opens. |
| [climate_impacts_2050.csv](#climate_impacts_2050csv) | 34 | Climate and environment projections that affect Vietnam's protein supply (warming, sea level, subsidence, salinity, heat stress, crop and fishery impacts) by scenario and horizon. |
| [emissions_targets.csv](#emissions_targetscsv) | 19 | Vietnam's greenhouse gas and methane targets for the economy, agriculture, livestock and energy, with legal status. |
| [balance_assumptions.csv](#balance_assumptionscsv) | 238 | Inputs to the QNT protein and feed balance model (tools/balance_model.py): every parameter by scenario and year, including the sensitivity cases. |
| [balance_outputs.csv](#balance_outputscsv) | 1150 | Results of the QNT balance model for 2025 to 2050 by scenario: demand (macro input), production, feed, soybean meal, maize, fishmeal, land abroad and the alternative-protein volumes in S-ALT. Our estimates, not forecasts. Regenerate with tools/balance_model.py. |
| [balance_published_projections.csv](#balance_published_projectionscsv) | 86 | Published projections and official targets used to check the QNT balance model (OECD-FAO, USDA, national strategies). |
| [balance_sensitivity.csv](#balance_sensitivitycsv) | 13 | Tornado table from the QNT model: change in 2050 soybean-meal and maize import need when one assumption (or a paired set) is varied, all else at S-BASE, plus an S-ALT comparison row. Regenerate with tools/balance_model.py. |
| [macro_drivers_2050.csv](#macro_drivers_2050csv) | 92 | Macro drivers to 2050: demography, income, trade, energy and workforce indicators, with the source model or scenario. |
| [shock_register.csv](#shock_registercsv) | 17 | Register of past shocks to protein supply (animal disease, pandemics, trade and conflict, climate) with magnitude and how they reached supply. |
| [bioeconomy_strategies.csv](#bioeconomy_strategiescsv) | 24 | National bioeconomy and biotechnology strategies with 2030 to 2050 horizons and their targets relevant to protein or biomanufacturing. |
| [carbon_cost_per_protein.csv](#carbon_cost_per_proteincsv) | 14 | Carbon cost that a carbon price of USD 25, 50 or 100 per t CO2e would add per tonne of protein input (soybean meal, fishmeal, cassava products and microbial protein). |
| [carbon_price_paths.csv](#carbon_price_pathscsv) | 19 | Carbon prices and price paths (actual, target, projection) in Vietnam, the region and reference markets. |
| [learning_rates.csv](#learning_ratescsv) | 21 | Empirical learning rates in fermentation and analogue industries, and our ranges for alternative protein in Vietnam. |
| [biblio_trends_frontier.csv](#biblio_trends_frontiercsv) | 325 | OpenAlex publication counts by frontier topic, country and year, with the query used (HSC-01). |
| [external_forecasts.csv](#external_forecastscsv) | 22 | Published external forecasts and forecasting questions on alternative protein (expert panels, crowd forecasts, consultancies), for comparison with our scenarios. |
| [signals_register.csv](#signals_registercsv) | 43 | Register of signals, 2024 to 2026 (science, plants, start-ups, policy, patents, finance, shocks), with direction, strength and relevance to Vietnam. |
| [vn_research_profile.csv](#vn_research_profilecsv) | 53 | Vietnam research profile from OpenAlex: raw and screened counts, institutions, partner countries and intensity, with queries (HSC-01). |
| [wildcards.csv](#wildcardscsv) | 26 | Wildcards: low-probability, high-impact events with impact channel, direction for alternative protein in Vietnam, horizon and signposts. |
| [national_targets_2050.csv](#national_targets_2050csv) | 98 | Vietnamese official targets and plans with 2030 to 2050 horizons relevant to protein supply, one row per target, with a Vietnamese quote and status. |
| [feedstock_futures.csv](#feedstock_futurescsv) | 17 | Next-generation feedstocks and side streams (rice straw, bagasse, cassava residues, wastewater, one-carbon routes): volumes to 2050, sugar-equivalent yield, cost, readiness and competing uses. |
| [land_protein_yields.csv](#land_protein_yieldscsv) | 15 | Protein yield per hectare of crops and systems (soybean, maize, duckweed, napier grass and others), a land benchmark for protein substitutes. |
| [aquaculture_projections.csv](#aquaculture_projectionscsv) | 44 | Vietnam aquaculture output, targets and projections by species group to 2050 (official statistics and targets, OECD-FAO, our estimates). |
| [marine_ingredients_2050.csv](#marine_ingredients_2050csv) | 39 | Fishmeal, fish oil and other marine-ingredient supply and demand, global and Vietnam, to 2050. |
| [protein_crops_vn.csv](#protein_crops_vncsv) | 29 | Protein crops in Vietnam (soybean, maize and others): area, yield, output, imports and projections. |
| [candidate_hubs.csv](#candidate_hubscsv) | 6 | Candidate hubs where a protein bioeconomy could cluster by 2040, with assets, missing pieces, fitting plays, horizon and signposts (our estimate). |
| [hub_layers.csv](#hub_layerscsv) | 92 | Spatial layers for a 2040 protein bioeconomy (energy, hydrogen, CO2, bio zones, carbohydrate, residues, buyers, research) by current and former province. |
| [foresight_methods.csv](#foresight_methodscsv) | 18 | Food-system foresight exercises elsewhere and the methods they used (scenarios, backcasting, signposts), with lessons for a Vietnam 2050 vision. |
| [protein_strategies_benchmark.csv](#protein_strategies_benchmarkcsv) | 23 | National protein-transition and feed-protein strategies elsewhere, with targets, funding, results so far and lessons, as benchmarks for a Vietnam 2050 vision. |
| [scenarios_2050.csv](#scenarios_2050csv) | 4 | The four 2050 scenarios of chapter 18 (two axes: import stress and Asia's fermentation market), with picture, indicative soybean-meal and microbial-protein ranges, hubs, link to the 2035 scenarios and signposts (our estimate). (Synthesis file, built by the lead author.) |
| [signposts_2050.csv](#signposts_2050csv) | 16 | The 16 signposts for the 2050 scenario axes and wildcards, with thresholds, where to watch, status in September 2026 and the scenarios each favours. (Synthesis file, built by the lead author.) |
| [play_robustness.csv](#play_robustnesscsv) | 16 | Stress test of the 16 plays of chapter 11 against the four 2050 scenarios: scores 0 to 2 per scenario, minimum, sum, class and reason (our judgement). (Synthesis file, built by the lead author.) |
| [robust_moves.csv](#robust_movescsv) | 21 | The 21 candidate moves of chapter 20 (no-regret, option, bet, hedge) with what each involves, lead actors, start date, cost scale, scenarios where it pays off, trigger and evidence. (Synthesis file, built by the lead author.) |
| [vision_milestones.csv](#vision_milestonescsv) | 22 | The 22 normative milestones of the Vietnam 2050 vision (chapter 19), by five-year plan period and pillar, with indicator, value or range, trend comparison and the benchmark that makes each plausible. A vision, not a forecast. (Synthesis file, built by the lead author.) |
| [frontier_windows.csv](#frontier_windowscsv) | 11 | When frontier windows could open for Vietnam, by route: start and end years, status in 2026, condition to open, related plays (our estimate; chapter 16). (Synthesis file, built by the lead author.) |

### co2_point_sources_vn.csv

Large CO2 point sources in Vietnam (steel, ammonia and urea, cement, refineries, gas processing, ethanol, brewing, biogas, storage) with volume and gas purity, as possible carbon feedstock. Stream: FTG (`working-papers/wave3/frontier_gas/co2_point_sources_vn.csv`).

Rows: 18. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix CPS plus row number in the stream's row order). | CPS-001 |
| `site` | Plant or complex. | Dung Quat Steel Complex (phases 1 and 2) |
| `company` | Owner or operator. | Hoa Phat Group |
| `province_current` | Current (post-1 July 2025) province name or names. | Quang Ngai |
| `province_former` | Former provincial unit or units before the 2025 merger. | Quang Ngai |
| `sector` | Industry and process. | Integrated steel (blast furnace, basic oxygen furnace) |
| `co2_t_per_yr` | CO2 emitted per year, t (our derivation where stated; "Not found" where unknown). | about 17,000,000 (our derivation) |
| `purity_note` | Gas composition and purity, which drives capture cost. | Blast-furnace gas is dilute (CO2 and CO mixed with N2); BOF gas is CO-... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | FTG-20 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Low |
| `notes` | Free-text notes from the research agent. | Derived as 75% (Dung Quat share of group crude-steel capacity) x 22.54... |

### frontier_gas_tech.csv

Gas and electro-fermentation routes (hydrogen-oxidising bacteria, methanotrophs, gas fermentation of industrial off-gas, electro-microbial routes): readiness, plant scale, resource use, cost paths to 2050 and the conditions for a Vietnam window. Stream: FTG (`working-papers/wave3/frontier_gas/frontier_gas_tech.csv`).

Rows: 10. Columns: 21.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix FGT plus row number in the stream's row order). | FGT-001 |
| `route` | Technology route and grade (food or feed). | Hydrogen-oxidising bacteria (power-to-protein), food grade |
| `organism` | Production organism or organisms. | Xanthobacter sp. SoF1 (Solar Foods); Cupriavidus necator in other prog... |
| `feedstock` | Carbon, energy and nitrogen inputs. | Electrolytic H2 and O2; CO2 from direct air capture or point source; a... |
| `trl_2026` | Technology readiness level in 2026 (our judgement unless a source is given). | 7 (demonstration plant operating; first commercial plant planned) |
| `leading_actors` | Leading companies, institutes or programmes. | Solar Foods (Finland) with GEA, Fortum; Ajinomoto as food partner; Air... |
| `largest_plant_capacity_t_per_yr` | Largest plant built or planned, t per year (company and press figures noted where they differ). | 160 to 230 (Factory 01, Finland; company 160, press 230); Factory 02 p... |
| `approvals` | Food or feed approvals to date. | Singapore novel food 29 Sep 2022; US self-affirmed GRAS, FDA notice fi... |
| `energy_kwh_per_kg_protein` | Energy use per kg of protein, kWh (design basis stated). | 69 to 83 (2030 design, incl. DAC and on-site NH3); 61 to 70 (2050 desi... |
| `h2_kg_per_kg_protein` | Hydrogen use per kg of protein, kg. | 0.69 |
| `cost_2026_usd_per_kg_protein` | Production cost per kg of protein on a 2026 basis, USD. | 6.6 to 7.3 (modelled FOAK at best global sites, 2028); real FOAK likel... |
| `cost_2030` | Cost per kg of protein by 2030, USD (best global sites and our Vietnam estimate where given). | 4.8 to 5.4 best global sites; Vietnam 6.9 to 12.6 (our estimate) |
| `cost_2040` | Cost per kg of protein by 2040, USD (as for cost_2030). | Vietnam 4.7 to 8.6 (our estimate); best sites 3.7 to 4.2 in 2035 |
| `cost_2050` | Cost per kg of protein by 2050, USD (as for cost_2030). | 2.5 to 2.8 best global sites; Vietnam 3.3 to 6.5 (our estimate) |
| `vn_window_conditions` | Conditions under which a plant in Vietnam could compete. | Delivered green H2 at or below about USD 1 to 2 per kg at high utilisa... |
| `signposts` | Observable events that would show the trajectory unfolding, and where to watch. | Solar Foods FID (2026) and Factory 02 start (late 2028); EFSA opinion... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | FTG-01; FTG-03; FTG-04; FTG-05; FTG-18; FTG-19 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general (technology); VN-direct inputs for Vietnam estimates |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium (published model and company data); Low for Vietnam estimates |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection; estimate |
| `notes` | Free-text notes from the research agent. | Best-site costs are Fasihi et al. 2025 (7% WACC, EUR x 1.2 = USD). Vie... |

### vn_energy_inputs_2050.csv

Vietnam energy and input indicators to 2050 that decide gas-fermentation economics: grid emission factor, power prices, renewable and hydrogen targets, electrolyser and hydrogen costs. Stream: FTG (`working-papers/wave3/frontier_gas/vn_energy_inputs_2050.csv`).

Rows: 50. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix VEI plus row number in the stream's row order). | VEI-001 |
| `indicator` | Energy or input indicator. | Grid emission factor, official latest |
| `value` | Value as written by the agent (ranges as "x to y"). | 0.6592 |
| `unit` | Unit of the value. | t CO2 per MWh |
| `horizon_year` | Year or years the value or statement refers to. | 2023 |
| `type` | actual, target, projection or estimate. | actual |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | COST-08 (edition 1.0) |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `notes` | Free-text notes from the research agent. | Announced 3 Dec 2024. Unofficial estimates 0.6811 (2024), 0.6235 (2025... |

### ai_biodesign_evidence.csv

Evidence register for AI and automation in protein, strain and media design: measured results separated from claims. Stream: FTB (`working-papers/wave3/frontier_bio/ai_biodesign_evidence.csv`).

Rows: 21. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix AIB plus row number in the stream's row order). | AIB-001 |
| `application` | Where AI or automation is applied (media optimisation, enzyme engineering, protein design and others). | Cell culture media optimisation (cultivated meat model cells) |
| `claim_or_result` | What was done or claimed. | Multi-information-source Bayesian optimisation of a 14-component serum... |
| `magnitude` | Size of the effect as reported. | 181% more cells than DMEM control at +1.6% cost; 38% fewer experiments... |
| `study_or_source` | Study or source (authors, year, journal, DOI). | Cosenza et al. 2022, Biotechnology and Bioengineering, doi:10.1002/bit... |
| `demonstrated_or_claimed` | demonstrated (measured in a study) or claimed (company or press claim), with qualifiers such as preprint. | demonstrated |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | FTB-02 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | not forward-looking (measured result) |
| `horizon_year` | Year or years the value or statement refers to. | n/a |
| `notes` | Free-text notes from the research agent. | Full-text excerpts read. Lab scale, one mouse cell line, multi-passage... |

### approvals_trend.csv

Approvals and regulatory events for novel proteins, 2024 to 2026, extending edition 1.0 approvals.csv. Stream: FTB (`working-papers/wave3/frontier_bio/approvals_trend.csv`).

Rows: 44. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID from the stream. | FTBA-01 |
| `year` | Year of the event. | 2024 |
| `date` | Date of the event (YYYY-MM or YYYY-MM-DD where known). | 2024-01 |
| `country` | Country or economy. | United States |
| `category` | Technology family (precision fermentation, cultivated, biomass fermentation, molecular farming), with qualifiers. | precision fermentation |
| `count_or_item` | The approval or event: company, product and decision. | Imagindairy: FDA GRAS "no questions" letter for precision-fermented da... |
| `event_type` | approval, policy signal, regulatory clearance or similar. | approval |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | FTB-19 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Low |
| `notes` | Free-text notes from the research agent. | Headline only (FoodNavigator, 17 Jan 2024, found in search). Protein a... |

### frontier_bio_tech.csv

Bio-design frontier (AI bio-design, precision fermentation, cultivated meat, molecular farming, cell-free synthesis, biomass fermentation): readiness in 2026, trajectories to 2050, Vietnam fit and when a window opens. Stream: FTB (`working-papers/wave3/frontier_bio/frontier_bio_tech.csv`).

Rows: 14. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix FBT plus row number in the stream's row order). | FBT-001 |
| `family` | Technology family. | AI bio-design |
| `sub_technology` | Sub-technology within the family. | Bayesian optimisation and active learning for media and fermentation p... |
| `trl_2026` | Technology readiness level in 2026 (our judgement unless a source is given). | 6 to 7 (our judgement) |
| `key_metric_now` | Headline performance metric in 2026, with its value. | 38% fewer experiments than DOE for a 14-component muscle-cell medium (... |
| `trajectory_2030` | Expected state by 2030, with the foresight type in brackets. | Standard practice in company R&D in approved markets (trend from 2022... |
| `trajectory_2035` | Expected state by 2035, with the foresight type in brackets. | Coupled to automated labs; transfer learning across products (signal) |
| `trajectory_2040` | Expected state by 2040, with the foresight type in brackets. | Routine; advantage shifts to whoever holds proprietary data (estimate) |
| `trajectory_2050` | Expected state by 2050, with the foresight type in brackets. | Commodity tool; no lasting advantage from the method itself (estimate) |
| `leading_actors` | Leading companies, institutes or programmes. | UC Davis (Block, Baar), MIT and Broad (Narayanan et al.), University o... |
| `approvals_to_date` | Regulatory approvals so far. | Not applicable |
| `vn_fit_now` | Fit with Vietnam's capabilities in 2026. | Moderate: needs a wet lab with a reliable assay plus data science; com... |
| `vn_window_opens_when` | Condition or time at which an opportunity opens for Vietnam. | Now, for yeast, SCP and feed-enzyme media on cassava and molasses stre... |
| `signposts` | Observable events that would show the trajectory unfolding, and where to watch. | Open media datasets published; a Vietnamese paper using BO for feed-ye... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | FTB-02; FTB-03; FTB-04; FTB-46 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | trend |
| `horizon_year` | Year or years the value or statement refers to. | 2026 to 2030 |
| `notes` | Free-text notes from the research agent. | Gains depend on problem dimension and expert baseline; a 2026 preprint... |

### climate_impacts_2050.csv

Climate and environment projections that affect Vietnam's protein supply (warming, sea level, subsidence, salinity, heat stress, crop and fishery impacts) by scenario and horizon. Stream: CLM (`working-papers/wave3/climate/climate_impacts_2050.csv`).

Rows: 34. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID from the stream. | CI-01 |
| `driver` | Climate or environmental driver. | Warming |
| `system_affected` | Part of the protein system or geography affected. | National climate |
| `metric` | What is measured. | Annual mean temperature increase vs 1986-2005 |
| `value` | Value as written by the agent (ranges as "x to y"). | 1.2 to 1.7 |
| `unit` | Unit of the value. | deg C |
| `horizon_year` | Year or years the value or statement refers to. | 2050 (mid-century) |
| `scenario` | Climate scenario and source (for example RCP4.5 national 2020 scenario, SSP3-7.0). | RCP4.5 (national 2020 scenario) |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | CLM-08 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `notes` | Free-text notes from the research agent. | Quoted in NDC 2022; end-century 1.6 to 2.4 C. |

### emissions_targets.csv

Vietnam's greenhouse gas and methane targets for the economy, agriculture, livestock and energy, with legal status. Stream: CLM (`working-papers/wave3/climate/emissions_targets.csv`).

Rows: 19. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID from the stream. | ET-01 |
| `instrument` | Legal or policy instrument that sets the target. | Net-zero pledge (COP26, 2021) and Decision 896/QD-TTg (2022) |
| `target` | What the target covers (national, sector, gas). | National net-zero GHG emissions |
| `metric` | How the target is expressed (net emissions, reduction against business as usual, cap). | Net emissions |
| `value` | Target value with its unit. | 0 MtCO2e |
| `horizon_year` | Year or years the value or statement refers to. | 2050 |
| `status` | Legal status (in force, draft, conditional) as found on 24 September 2026. | In force (strategy); conditional on international support per CAT |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | CLM-01; CLM-06 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `notes` | Free-text notes from the research agent. | Emissions to peak in 2035 per Decision 896. |

### balance_assumptions.csv

Inputs to the QNT protein and feed balance model (tools/balance_model.py): every parameter by scenario and year, including the sensitivity cases. Stream: QNT (`working-papers/wave3/balance_model/assumptions.csv`).

Rows: 238. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix BLA plus row number in the stream's row order). | BLA-001 |
| `parameter` | Parameter name as used in tools/balance_model.py. | population |
| `scenario` | ALL (every scenario), S-BASE, S-HIGH, S-EFF, S-ALT, or SENS-LOW and SENS-HIGH for the sensitivity runs. | ALL |
| `year` | Year the value applies to, or ALL. The model interpolates linearly between listed years. | 2025 |
| `value` | Numeric value used by the model. | 101.6 |
| `unit` | Unit of the value. | million |
| `basis` | Where the value comes from (measured, projection, calibration or assumption) and how. | projection: UN WPP 2024 medium variant, read via OWID in edition 1.0 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | GT-12 |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | UN series used for all years, including 2025, so growth rates never mi... |

### balance_outputs.csv

Results of the QNT balance model for 2025 to 2050 by scenario: demand (macro input), production, feed, soybean meal, maize, fishmeal, land abroad and the alternative-protein volumes in S-ALT. Our estimates, not forecasts. Regenerate with tools/balance_model.py. Stream: QNT (`working-papers/wave3/balance_model/outputs.csv`).

Rows: 1150. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix BLO plus row number in the stream's row order). | BLO-0001 |
| `scenario` | S-BASE (baseline), S-HIGH (higher income-driven demand, official aquaculture path), S-EFF (faster feed-efficiency gains, lower soybean-meal inclusion) or S-ALT (S-BASE plus alternative-protein substitution in food and feed). | S-BASE |
| `year` | Model year (2025 calibration year, then 2030, 2035, 2040, 2050). | 2025 |
| `indicator` | Model output name (for example feed_total_mt, sbm_import_need_mt); unit says what it measures. | population |
| `value` | Model result, rounded (one decimal at 100 or more, three decimals at 1 or more, four below 1). | 101.6 |
| `unit` | Unit of the value. | million |
| `foresight_type` | calibration (2025 base) for 2025; estimate for 2030 to 2050. | calibration (2025 base) |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `source_ids` | QNT model (assumptions.csv): our calculation from balance_assumptions.csv. | QNT model (assumptions.csv) |
| `notes` | Free-text notes from the research agent. | Calibrated to 2025 anchors; identical in all scenarios. |

### balance_published_projections.csv

Published projections and official targets used to check the QNT balance model (OECD-FAO, USDA, national strategies). Stream: QNT (`working-papers/wave3/balance_model/published_projections.csv`).

Rows: 86. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix BLP plus row number in the stream's row order). | BLP-001 |
| `indicator` | What is measured. | Pigmeat production |
| `value` | Value as written by the agent (ranges as "x to y"). | 4241.2 |
| `unit` | Unit of the value. | kt carcass weight |
| `year` | Year the value refers to. | 2030 |
| `model` | Publishing model or source (for example OECD-FAO Aglink-Cosimo, USDA, a government strategy). | OECD-FAO Agricultural Outlook 2026-2035 (Aglink-Cosimo), read via OECD... |
| `scenario` | Scenario or status as published (baseline, Post forecast, official target). | Baseline |
| `base_year` | Base year or base period of the projection, as far as stated. | historical to 2025 (base period not re-checked) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | QNT-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection |
| `notes` | Free-text notes from the research agent. | 2025: 3,895.6 kt. +1.4% a year 2025 to 2035. |

### balance_sensitivity.csv

Tornado table from the QNT model: change in 2050 soybean-meal and maize import need when one assumption (or a paired set) is varied, all else at S-BASE, plus an S-ALT comparison row. Regenerate with tools/balance_model.py. Stream: QNT (`working-papers/wave3/balance_model/sensitivity.csv`).

Rows: 13. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix BLS plus row number in the stream's row order). | BLS-001 |
| `rank` | Rank by swing in 2050 soybean-meal import need (1 is the largest); "n/a (comparison)" for the S-ALT row. | 1 |
| `assumption_varied` | Assumption or paired set varied. | Soybean-meal inclusion trend |
| `scenario` | Scenario the run starts from (S-BASE, or S-ALT for the comparison row). | S-BASE |
| `low_case` | Parameter values in the low run (SENS-LOW rows of balance_assumptions.csv). | sbm_incl_trend (ALL: -1) |
| `high_case` | Parameter values in the high run (SENS-HIGH rows of balance_assumptions.csv). | sbm_incl_trend (ALL: 0.5) |
| `sbm_import_2050_low_mt` | 2050 soybean-meal import need in the low run, Mt. | 8.091 |
| `sbm_import_2050_central_mt` | 2050 soybean-meal import need in the central scenario, Mt. | 10.403 |
| `sbm_import_2050_high_mt` | 2050 soybean-meal import need in the high run, Mt. | 11.784 |
| `sbm_swing_mt` | Absolute difference between the high and low runs, Mt soybean meal. | 3.693 |
| `maize_import_2050_low_mt` | 2050 maize import need in the low run, Mt. | 13.841 |
| `maize_import_2050_central_mt` | 2050 maize import need in the central scenario, Mt. | 13.841 |
| `maize_import_2050_high_mt` | 2050 maize import need in the high run, Mt. | 13.841 |
| `maize_swing_mt` | Absolute difference between the high and low runs, Mt maize. | 0.0 |
| `horizon_year` | Year or years the value or statement refers to. | 2050 |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | estimate |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Low |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | QNT model (assumptions.csv, SENS-LOW and SENS-HIGH rows) |
| `notes` | Free-text notes from the research agent. | One assumption (or paired set) varied at a time, all else at S-BASE (o... |

### macro_drivers_2050.csv

Macro drivers to 2050: demography, income, trade, energy and workforce indicators, with the source model or scenario. Stream: GEO (`working-papers/wave3/geo_macro/macro_drivers_2050.csv`).

Rows: 92. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix MDR plus row number in the stream's row order). | MDR-001 |
| `driver` | Driver group (demography, income, trade, energy, workforce and others). | demography |
| `indicator` | What is measured. | Population |
| `value` | Value as written by the agent (ranges as "x to y"). | 101.6 |
| `unit` | Unit of the value. | million |
| `horizon_year` | Year or years the value or statement refers to. | 2025 |
| `scenario_or_source_model` | Scenario or source model (for example UN WPP 2024 medium variant). | UN WPP 2024 medium variant (via OWID) |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | GEO-31; QNT (balance model uses same series) |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | Same series as QNT and edition 1.0 GT-12. GSO 2025 = 102.3 M (MI-083);... |

### shock_register.csv

Register of past shocks to protein supply (animal disease, pandemics, trade and conflict, climate) with magnitude and how they reached supply. Stream: GEO (`working-papers/wave3/geo_macro/shock_register.csv`).

Rows: 17. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix SHK plus row number in the stream's row order). | SHK-001 |
| `shock_type` | Type of shock. | animal disease |
| `event` | The event. | HPAI H5N1 first wave in Vietnam |
| `date` | When it happened. | 2003 to 2004 |
| `magnitude` | Size of the shock as reported. | About 45 million poultry culled or died; direct loss about 0.1 percent... |
| `impact_channel_on_protein_supply` | How the shock reached protein supply. | Poultry supply loss; culling; trade bans |
| `frequency_trend` | Whether such shocks are becoming more or less frequent, as far as sources say. | H5N1 now endemic in poultry; clade 2.3.4.4b spreading to mammals world... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | GEO-20 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | World Bank 2005 figure cited in a conference paper; primary not read. |

### bioeconomy_strategies.csv

National bioeconomy and biotechnology strategies with 2030 to 2050 horizons and their targets relevant to protein or biomanufacturing. Stream: ECF (`working-papers/wave3/econ_policy/bioeconomy_strategies.csv`).

Rows: 24. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix BES plus row number in the stream's row order). | BES-001 |
| `country` | Country or economy. | Vietnam |
| `instrument` | Policy, legal or market instrument. | Resolution 36-NQ/TW on biotechnology |
| `year_adopted` | Year the instrument was adopted. | 2023 |
| `horizon_year` | Year or years the value or statement refers to. | 2030; 2045 |
| `targets_relevant_to_protein_or_biomanufacturing` | Targets in the instrument that bear on protein or biomanufacturing, quoted or summarised. | 2030: biotech industry 7% of GDP; replace at least 50% of imported bio... |
| `budget` | Budget or funding attached, as stated ("None earmarked" or "Not stated" where absent). | None earmarked |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | REG-51 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection (official target) |
| `notes` | Free-text notes from the research agent. | Full extraction in NTS stream |

### carbon_cost_per_protein.csv

Carbon cost that a carbon price of USD 25, 50 or 100 per t CO2e would add per tonne of protein input (soybean meal, fishmeal, cassava products and microbial protein). Stream: ECF (`working-papers/wave3/econ_policy/carbon_cost_per_protein.csv`).

Rows: 14. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix CCP plus row number in the stream's row order). | CCP-001 |
| `input` | Protein input or product, and the study or dataset behind the emission factor. | Soybean meal, Argentina, no land-use change (Dalgaard et al. 2008) |
| `emission_factor_tco2e_per_t_low` | Emission factor, t CO2e per t of product, low end. | 0.72 |
| `emission_factor_tco2e_per_t_high` | Emission factor, t CO2e per t of product, high end. | 0.72 |
| `basis` | Life-cycle basis of the factor (system boundary, land-use change included or not). | attributional LCA, delivered Rotterdam, no LUC |
| `protein_share` | Protein share of the product, used to convert per t of product to per t of protein. | 0.46 |
| `cost_at_25_usd_per_t_product` | Carbon cost at USD 25 per t CO2e, USD per t of product (emission factor x price). | 18 |
| `cost_at_50_usd_per_t_product` | Carbon cost at USD 50 per t CO2e, USD per t of product. | 36 |
| `cost_at_100_usd_per_t_product` | Carbon cost at USD 100 per t CO2e, USD per t of product. | 72 |
| `cost_at_25_usd_per_t_protein` | Carbon cost at USD 25 per t CO2e, USD per t of protein. | 39 |
| `cost_at_50_usd_per_t_protein` | Carbon cost at USD 50 per t CO2e, USD per t of protein. | 78 |
| `cost_at_100_usd_per_t_protein` | Carbon cost at USD 100 per t CO2e, USD per t of protein. | 157 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | ECF-21; ECF-22 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | trend |
| `horizon_year` | Year or years the value or statement refers to. | n/a (measured factor) |
| `notes` | Free-text notes from the research agent. | EF as cited by Wilke et al. 2023; no LUC. Carbon cost = EF x price; ap... |

### carbon_price_paths.csv

Carbon prices and price paths (actual, target, projection) in Vietnam, the region and reference markets. Stream: ECF (`working-papers/wave3/econ_policy/carbon_price_paths.csv`).

Rows: 19. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix CPP plus row number in the stream's row order). | CPP-001 |
| `jurisdiction` | Country, bloc or programme. | Vietnam |
| `instrument` | Carbon pricing instrument (emissions trading, carbon tax) or recommended path. | Domestic ETS pilot (Decree 119/2025; Decree 29/2026; Decision 263/QD-T... |
| `year` | Year or period the price refers to. | 2025 to 2028 |
| `price_usd_per_tco2e` | Price in USD per t CO2e ("not published" where no price exists). | not published |
| `type` | actual, target or projection. | target |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | REG-59; ECF-12; ECF-13 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | signal |
| `horizon_year` | Year or years the value or statement refers to. | 2028 |
| `notes` | Free-text notes from the research agent. | 110 facilities (34 thermal power, 25 steel, 51 cement); quota above 24... |

### learning_rates.csv

Empirical learning rates in fermentation and analogue industries, and our ranges for alternative protein in Vietnam. Stream: ECF (`working-papers/wave3/econ_policy/learning_rates.csv`).

Rows: 21. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix LRN plus row number in the stream's row order). | LRN-001 |
| `industry_or_technology` | Industry, product or technology. | Sugarcane ethanol, Brazil (processing) |
| `learning_rate_pct` | Learning rate: percentage cost fall for each doubling of cumulative output. | 19 |
| `period` | Period the rate was measured over, or the horizon of our estimate. | 1975 to 2005 |
| `metric` | Cost measure the rate applies to. | Production cost per litre |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | ECF-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | trend |
| `horizon_year` | Year or years the value or statement refers to. | n/a |
| `notes` | Free-text notes from the research agent. | As cited by Vasilakou et al. 2023 from Hettinga et al. 2009 and van de... |

### biblio_trends_frontier.csv

OpenAlex publication counts by frontier topic, country and year, with the query used (HSC-01). Stream: HSC (`working-papers/wave3/horizon_scan/biblio_trends_frontier.csv`).

Rows: 325. Columns: 9.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix BTF plus row number in the stream's row order). | BTF-001 |
| `topic` | Topic basket (for example cultivated_meat, single_cell_protein, gas_fermentation_protein). | cultivated_meat |
| `country` | World, or ISO country code by author affiliation (VN, TH, SG and others). | World |
| `year` | Publication year (2026 is partial, to 24 September 2026). | 2015 |
| `count` | Number of works (articles and reviews) found. | 35 |
| `per_10k_country_output` | Works per 10,000 of the country's own article and review output, 2015 to 2025 (country total rows). | 0.057 |
| `query_or_oql` | Query string or canonical OpenAlex OQL, so the count can be rerun. | OpenAlex title_and_abstract.search; type article or review; retracted... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HSC-01 |
| `notes` | Free-text notes from the research agent. | 2026 partial year (to 24 Sep 2026) |

### external_forecasts.csv

Published external forecasts and forecasting questions on alternative protein (expert panels, crowd forecasts, consultancies), for comparison with our scenarios. Stream: HSC (`working-papers/wave3/horizon_scan/external_forecasts.csv`).

Rows: 22. Columns: 8.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix EXF plus row number in the stream's row order). | EXF-001 |
| `question` | Forecast question or quantity. | Global cultured meat production above 100,000 t a year |
| `forecaster` | Who made the forecast. | Rethink Priorities panel (5 highly ranked Metaculus forecasters and 1... |
| `value_or_probability` | Forecast value or probability, as published. | 15% by 2031; 22% by 2036; 46% by 2051 |
| `date` | When the forecast was made or published. | forecasts made 27 Oct to 15 Nov 2021; published 22 Mar 2022; updated 2... |
| `resolution_date` | Year or date by which the question resolves. | 2031; 2036; 2051 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HSC-18 |
| `notes` | Free-text notes from the research agent. | Implies 54% chance production stays below 100,000 t a year through 205... |

### signals_register.csv

Register of signals, 2024 to 2026 (science, plants, start-ups, policy, patents, finance, shocks), with direction, strength and relevance to Vietnam. Stream: HSC (`working-papers/wave3/horizon_scan/signals_register.csv`).

Rows: 43. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix SIG plus row number in the stream's row order). | SIG-001 |
| `signal` | The observed signal. | Precision-fermentation and recombinant food-protein papers jump from 6... |
| `date` | Date or period of the event or publication. | 2024 to 2026 |
| `place` | Where it was observed. | Global |
| `type` | Signal type (plant, startup, policy, science, patent, finance, shock). | science |
| `domain` | Technology or policy domain. | precision fermentation |
| `direction` | Direction for alternative protein (up, down, mixed). | up |
| `relevance_to_vn` | Relevance to Vietnam (High, Medium, Low) with the reason. | Medium: the field Vietnam's Pichia groups could enter; Vietnam has 2 p... |
| `strength` | Signal strength: weak, moderate or strong. | strong |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HSC-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | OpenAlex articles and reviews; about 65% precision in a random sample. |

### vn_research_profile.csv

Vietnam research profile from OpenAlex: raw and screened counts, institutions, partner countries and intensity, with queries (HSC-01). Stream: HSC (`working-papers/wave3/horizon_scan/vn_research_profile.csv`).

Rows: 53. Columns: 8.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix VRP plus row number in the stream's row order). | VRP-001 |
| `metric` | What is measured. | VN core basket works, raw, 2015 to 2026-09-24 |
| `value` | Count, share or name, as written by the agent. | 91 |
| `query_or_oql` | Query string or canonical OpenAlex OQL, so the count can be rerun. | works where institution country is (VN) and retracted is (false) and y... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HSC-01 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | Raw OpenAlex count before screening. By year: 4, 6, 2, 1, 4, 9, 6, 8,... |

### wildcards.csv

Wildcards: low-probability, high-impact events with impact channel, direction for alternative protein in Vietnam, horizon and signposts. Stream: HSC (`working-papers/wave3/horizon_scan/wildcards.csv`).

Rows: 26. Columns: 9.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID from the stream (column id, renamed). | WC-01 |
| `wildcard` | The event. | Multi-year anchoveta collapse: two or more consecutive very strong El... |
| `impact_channel` | How it would reach protein supply. | Fishmeal price and availability for shrimp, pangasius and marine-fish... |
| `direction_for_vn_alt_protein` | Whether it would help or hurt alternative protein in Vietnam, and how. | Strongly positive for microbial, algal and side-stream feed protein (i... |
| `horizon` | When the event or result could happen. | 2027 (already partly under way), recurring to 2050 |
| `signposts` | Observable events that would show the trajectory unfolding, and where to watch. | NOAA ENSO status; PRODUCE second-season quota (November 2026); IFFO mo... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HSC-28; HSC-29; HSC-30; CLM-27; GT-15 |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | No longer purely hypothetical: 2026 first season landed about 25% of a... |

### national_targets_2050.csv

Vietnamese official targets and plans with 2030 to 2050 horizons relevant to protein supply, one row per target, with a Vietnamese quote and status. Stream: NTS (`working-papers/wave3/national_targets/national_targets_2050.csv`).

Rows: 98. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID from the stream. | NT-001 |
| `instrument` | Instrument name in English. | Resolution on biotechnology development to 2030, vision 2045 |
| `number` | Official number (for example 36-NQ/TW). | 36-NQ/TW |
| `date` | Date issued (YYYY-MM-DD). | 2023-01-30 |
| `issuer` | Issuing body (Party Central Committee, Politburo, National Assembly, Government, Prime Minister or a ministry). | Party Central Committee (Politburo) |
| `domain` | Policy domain or domains. | biotechnology |
| `target_text_vi` | Short quote of the target in Vietnamese. | Công nghiệp sinh học ... đóng góp 7% vào GDP |
| `target_text_en` | English translation or summary of the target. | Biotech industry contributes 7% of GDP |
| `metric` | What is measured. | Biotech industry share of GDP |
| `value` | Value as written by the agent (ranges as "x to y"). | 7 |
| `unit` | Unit of the value. | % of GDP |
| `horizon_year` | Year or years the value or statement refers to. | 2030 |
| `relevance_to_protein_supply` | Relevance to protein supply: 3 high, 2 medium, 1 low (our judgement). | 2 |
| `status` | Status on 24 September 2026 (in force, amended, replaced), with detail. | in force |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | NTS-01; REG-51 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `notes` | Free-text notes from the research agent. | Official target. No national statistical definition of 'biotech indust... |

### feedstock_futures.csv

Next-generation feedstocks and side streams (rice straw, bagasse, cassava residues, wastewater, one-carbon routes): volumes to 2050, sugar-equivalent yield, cost, readiness and competing uses. Stream: NGF (`working-papers/wave3/next_gen_feedstocks/feedstock_futures.csv`).

Rows: 17. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix FFU plus row number in the stream's row order). | FFU-001 |
| `stream` | Feedstock or side stream, and its scope. | Rice straw, national |
| `route` | Conversion route to fermentable carbon. | Lignocellulosic: pretreatment plus enzymatic hydrolysis to glucose and... |
| `volume_now` | Current annual volume, with the year. | 51.8 (2025; 54 on 2019 basis) |
| `volume_2030` | Annual volume in 2030 (our estimate unless stated). | 47.6 to 51.2 |
| `volume_2040` | Annual volume in 2040 (our estimate unless stated). | 44.0 to 50.0 |
| `volume_2050` | Annual volume in 2050 (our estimate unless stated). | 41.6 to 48.8 |
| `unit` | Unit of the value. | Mt air-dry straw per yr |
| `sugar_equivalent_yield` | Sugar-equivalent (SE) yield per tonne of feedstock. SE is the glucose that would grow the same microbial protein on the QNT sugar route. | 0.31 to 0.44 t SE per t air-dry straw (0.35 to 0.50 per t DM; lower va... |
| `cost_usd_per_t_sugar` | Cost of fermentable sugar, USD per t (published techno-economic analyses, with basis). | 342 to 467 (nth-plant TEAs, US); 1,320 (India, lab-optimised bagasse);... |
| `trl_2026` | Technology readiness level in 2026 (our judgement unless a source is given). | 7 to 8 (first commercial plants underperform: Panipat 62% of design in... |
| `competing_uses` | Current uses the stream would be taken from. | Mushrooms, cattle fodder, mulch, soil return, straw rolls, biomass pow... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | NGF-01; NGF-02; NGF-04; NGF-05; NGF-06; NGF-07; NGF-08; NGF-10; NGF-11... |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct (volume); general (conversion, cost) |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium (volume); Low (conversion, cost) |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | trend (2025 volume); estimate (2030 to 2050) |
| `horizon_year` | Year or years the value or statement refers to. | 2030; 2040; 2050 |
| `notes` | Free-text notes from the research agent. | Paddy path 40 to 43 Mt (2030), 37 to 42 (2040), 35 to 41 (2050), our a... |

### land_protein_yields.csv

Protein yield per hectare of crops and systems (soybean, maize, duckweed, napier grass and others), a land benchmark for protein substitutes. Stream: NGF (`working-papers/wave3/next_gen_feedstocks/land_protein_yields.csv`).

Rows: 15. Columns: 8.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix LPY plus row number in the stream's row order). | LPY-001 |
| `crop_or_system` | Crop or production system. | Soybean, Vietnam average (1 crop) |
| `protein_kg_per_ha_per_yr` | Protein yield, kg per hectare per year. | 580 |
| `basis` | Calculation basis (yield x protein content, and sources). | 1.62 t per ha (42 kt on 26 kha, MY2024/25) x 36% crude protein as fed |
| `vn_relevance` | Why the row matters for Vietnam. | Area falling; one crop after rice in rotation is the usual slot |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | FS-24 |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | Protein share is a general value. Two crops a year would give about 1,... |

### aquaculture_projections.csv

Vietnam aquaculture output, targets and projections by species group to 2050 (official statistics and targets, OECD-FAO, our estimates). Stream: AQF (`working-papers/wave3/aquaculture_futures/aquaculture_projections.csv`).

Rows: 44. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix AQP plus row number in the stream's row order). | AQP-001 |
| `species_group` | Species group (all aquaculture, pangasius, whiteleg shrimp, marine fish and others). | all aquaculture |
| `indicator` | What is measured. | output |
| `value` | Value as written by the agent (ranges as "x to y"). | 6116.8 |
| `unit` | Unit of the value. | kt live weight |
| `year` | Year the value refers to. | 2025 |
| `source_model_or_target` | Where the number comes from: official statistic, official target, press figure, OECD-FAO baseline or our estimate. | NSO official estimate |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | trend (measured) |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | MAC-15 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `notes` | Free-text notes from the research agent. | Fish 4,035.0; shrimp 1,381.7; other 700.1 |

### marine_ingredients_2050.csv

Fishmeal, fish oil and other marine-ingredient supply and demand, global and Vietnam, to 2050. Stream: AQF (`working-papers/wave3/aquaculture_futures/marine_ingredients_2050.csv`).

Rows: 39. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix MIG plus row number in the stream's row order). | MIG-001 |
| `indicator` | What is measured. | fishmeal production |
| `value` | Value as written by the agent (ranges as "x to y"). | 5673.0 |
| `unit` | Unit of the value. | kt |
| `year` | Year the value refers to. | 2024 |
| `scope` | Geography the value covers (global, Peru, China, Vietnam and others). | global |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | AQF-02 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | trend (model base) |
| `notes` | Free-text notes from the research agent. | OECD-FAO SDMX, area W |

### protein_crops_vn.csv

Protein crops in Vietnam (soybean, maize and others): area, yield, output, imports and projections. Stream: AQF (`working-papers/wave3/aquaculture_futures/protein_crops_vn.csv`).

Rows: 29. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix PCV plus row number in the stream's row order). | PCV-001 |
| `crop` | Crop. | soybean |
| `indicator` | What is measured. | harvested area |
| `value` | Value as written by the agent (ranges as "x to y"). | 205 |
| `unit` | Unit of the value. | thousand ha |
| `year` | Year the value refers to. | 2010 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | AQF-20 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | Historical peak per VnEconomy |

### candidate_hubs.csv

Candidate hubs where a protein bioeconomy could cluster by 2040, with assets, missing pieces, fitting plays, horizon and signposts (our estimate). Stream: HUB (`working-papers/wave3/spatial_hubs/candidate_hubs.csv`).

Rows: 6. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID, copied from hub_id. | CH-1 |
| `hub_id` | Hub ID used in the notes (CH-1 to CH-6). | CH-1 |
| `hub` | Hub name and main idea. | Mekong shrimp coast: aquafeed-and-hydrogen hub |
| `provinces` | Current provinces, with former units in brackets. | Ca Mau (former Ca Mau, Bac Lieu); Vinh Long coast (former Tra Vinh, Be... |
| `assets` | Assets already in place. | About 46% of national farmed shrimp (Ca Mau 594,851 t in 2025; over 43... |
| `missing_pieces` | What is missing. | No green H2 plant built (Tra Vinh at fence and gate stage, May 2026);... |
| `fitting_plays` | Plays from chapter 11 (T1 to T10) that fit the hub. | T2 functional microbial feed for shrimp (now); T6 duckweed on effluent... |
| `horizon` | When the event or result could happen. | T2: 2027 to 2030; power-to-protein demo: 2032 to 2035 if H2 is built;... |
| `signposts` | Observable events that would show the trajectory unfolding, and where to watch. | Electrolyser FID and construction at Tra Vinh, Ben Tre or Bac Lieu; a... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HUB-04; HUB-05; HUB-11; HUB-12; HUB-15; HUB-16; HUB-17; HUB-22; FTG-01... |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Low |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | estimate |
| `notes` | Free-text notes from the research agent. | A 10 kt/yr protein plant would take 6.9 kt H2 (29% of Tra Vinh design... |

### hub_layers.csv

Spatial layers for a 2040 protein bioeconomy (energy, hydrogen, CO2, bio zones, carbohydrate, residues, buyers, research) by current and former province. Stream: HUB (`working-papers/wave3/spatial_hubs/hub_layers.csv`).

Rows: 92. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Row ID from the stream. | HL-001 |
| `layer` | Layer: energy, hydrogen, co2, bio_zone, carbohydrate, residue, buyer or research. | energy |
| `item` | Asset, plan or cluster. | Northern inter-regional renewable energy industry and service centre (... |
| `province_current` | Current (post-1 July 2025) province name or names. | Hai Phong; Quang Ninh; Hung Yen |
| `province_former` | Former provincial unit or units before the 2025 merger. | Hai Phong; Hai Duong; Quang Ninh; Thai Binh |
| `status` | operating, planned or proposed. | planned |
| `capacity_or_size` | Capacity or size, with the year where given. | one of 2 centres due by 2030 |
| `horizon_year` | Year or years the value or statement refers to. | 2030 |
| `foresight_type` | Foresight type from the futures protocol: trend, projection, estimate, signal, wildcard or vision; "projection (official target)" marks a government target. | projection |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | HUB-01; HUB-02; HUB-03; HUB-21; HUB-29 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | VN-direct |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | High |
| `notes` | Free-text notes from the research agent. | Decision 768/QD-TTg names regions only; Decision 1509/QD-BCT (30 May 2... |

### foresight_methods.csv

Food-system foresight exercises elsewhere and the methods they used (scenarios, backcasting, signposts), with lessons for a Vietnam 2050 vision. Stream: VIS (`working-papers/wave3/vision_benchmarks/foresight_methods.csv`).

Rows: 18. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix FSM plus row number in the stream's row order). | FSM-001 |
| `exercise` | Foresight exercise. | The future of food and agriculture: Alternative pathways to 2050 |
| `organisation` | Organisation that ran it. | FAO |
| `year` | Year of the exercise. | 2018 |
| `horizon` | When the event or result could happen. | 2050 |
| `method` | Methods used (scenarios, backcasting, signposts and others). | Exploratory quantitative scenarios on alternative driver trends (incom... |
| `number_of_scenarios` | Number of scenarios. | 3 |
| `lessons` | Lessons for Vietnam. | Three scenarios is the minimum that avoids a 'good, bad, middle' readi... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | VIS-33 |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | Scenario names (business as usual, towards sustainability, stratified... |

### protein_strategies_benchmark.csv

National protein-transition and feed-protein strategies elsewhere, with targets, funding, results so far and lessons, as benchmarks for a Vietnam 2050 vision. Stream: VIS (`working-papers/wave3/vision_benchmarks/protein_strategies_benchmark.csv`).

Rows: 23. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID assigned by the consolidation step (prefix PSB plus row number in the stream's row order). | PSB-001 |
| `country` | Country or economy. | Denmark |
| `instrument` | Policy, legal or market instrument. | Action Plan for Plant-based Foods (Ministry of Food, Agriculture and F... |
| `year` | Year the strategy was adopted. | 2023 |
| `horizon_year` | Year or years the value or statement refers to. | 2030 |
| `target_text` | Target wording, quoted or summarised. | Six pillars: value chain, sales, export, crops and ingredients, food b... |
| `metric` | What is measured. | none quantified for production or consumption |
| `value` | Value as written by the agent (ranges as "x to y"). | n/a |
| `funding` | Funding attached. | Plant-based Food Grant DKK 675 M for 2023 to 2030 (about DKK 84 M or U... |
| `achieved_so_far` | What has been achieved or missed so far. | No KPIs or evaluation framework in the plan; outcomes not measurable f... |
| `lessons` | Lessons for Vietnam. | Money plus a permanent fund without a numeric goal; cannot be judged a... |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | VIS-01; VIS-02; VIS-04 |
| `evidence_label` | VN-direct (evidence about Vietnam), VN-adjacent (comparable country, transfer assumed) or general. Some rows give a label per part of the row. | general |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | Retail plant-based sales DKK 32 bn (2021) as context; 15 protein crops... |

### scenarios_2050.csv

The four 2050 scenarios of chapter 18 (two axes: import stress and Asia's fermentation market), with picture, indicative soybean-meal and microbial-protein ranges, hubs, link to the 2035 scenarios and signposts (our estimate).

Rows: 4. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `scenario_id` | SC-A to SC-D. | SC-A |
| `name` | Scenario name in English. | Regional workshop |
| `name_vi` | Scenario name in Vietnamese. | Công xưởng của khu vực |
| `axis_import_stress` | benign or chronic. | benign |
| `axis_fermentation_market` | open or Chinese price dominance. | open |
| `picture_2050` | Narrative of the world in 2050. | Soy, maize and fishmeal stay ample and cheap on average, as in the ... |
| `soybean_meal_need_2050_mt_indicative` | Indicative 2050 soybean-meal need, mapped to chapter 17 model scenarios (not a model run). | 7.0 to 10.4 (S-EFF to S-BASE; depends on the efficiency programme) |
| `microbial_feed_protein_share_2050_indicative` | Indicative microbial share of high-protein feed protein. | about 1 to 2% (mostly functional ingredients) |
| `where_vietnam_competes` | Plays and products that do well. | Contract and tolling fermentation; functional aquafeed ingredients;... |
| `where_vietnam_loses` | Plays and products that struggle. | Bulk fishmeal replacement; protein from power before 2045 |
| `hubs_active_2050` | Candidate hubs active in this world. | Ho Chi Minh City with Dong Nai; Tay Ninh sugar hub; Mekong river belt |
| `grows_from_2035_scenario` | Link to the chapter 13 scenarios S1 to S3. | 2035 Scenario 3 (regulated regional hub) |
| `early_signposts` | Signposts that would show this world is unfolding. | ASEAN reliance or mutual recognition of novel-food approvals; Thai,... |
| `what_vietnam_decides` | What Vietnam's own choices change within this world. | Without a new-food route and open pilot capacity Vietnam lands in S... |
| `foresight_type` | Always estimate. | estimate |
| `evidence_label` | Evidence label. | VN-direct |
| `confidence` | Confidence. | Low |
| `source_ids` | Main supporting source IDs. | GEO-37; GEO-38; FTB-21; ECF-29; HSC-12 |
| `notes` | Notes. | Qualitative scenario; soybean-meal ranges are indicative mappings t... |

### signposts_2050.csv

The 16 signposts for the 2050 scenario axes and wildcards, with thresholds, where to watch, status in September 2026 and the scenarios each favours.

Rows: 16. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `signpost_id` | SP-01 to SP-16. | SP-01 |
| `axis` | import stress, fermentation market or wildcard. | import stress |
| `points_towards` | The end of the axis the signpost points to. | chronic |
| `signpost` | What to watch. | Fishmeal price |
| `threshold` | The level or event that counts. | Above USD 2,500 per t for 12 months, or fishmeal-to-soybean-meal pr... |
| `where_to_watch` | Data source or institution. | World Bank Pink Sheet (monthly) |
| `status_sep_2026` | Status when the report was written. | Ratio 6.2 in August 2026; a peak, not yet sustained |
| `scenarios_favoured` | Scenarios (A to D) the signpost favours. | C; D |
| `source_ids` | Source IDs (blank where no baseline exists). | GT-15 |
| `confidence` | Confidence. | High |

### play_robustness.csv

Stress test of the 16 plays of chapter 11 against the four 2050 scenarios: scores 0 to 2 per scenario, minimum, sum, class and reason (our judgement).

Rows: 16. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `play_id` | T1 to T10 and P1 to P6 (as plays.csv). | T1 |
| `play_name` | Play name. | Domestic textured plant protein |
| `score_A_regional_workshop` | Score in scenario A: 2 thrives, 1 holds with conditions, 0 struggles. | 2 |
| `score_B_comfortable_price_taker` | Score in scenario B. | 1 |
| `score_C_security_build_out` | Score in scenario C. | 1 |
| `score_D_squeezed_importer` | Score in scenario D. | 1 |
| `min_score` | Lowest score. | 1 |
| `sum_score` | Sum of scores. | 5 |
| `robustness_class` | no-regret (2 everywhere), robust (at least 1 everywhere), bet (a 0 and a 2), option (a 0 and no 2). | robust |
| `why` | Reason for the scores. | Food-rule light and buyer-led; in B and D it must win on freshness ... |
| `foresight_type` | Always estimate. | estimate |
| `confidence` | Confidence. | Low |

### robust_moves.csv

The 21 candidate moves of chapter 20 (no-regret, option, bet, hedge) with what each involves, lead actors, start date, cost scale, scenarios where it pays off, trigger and evidence.

Rows: 21. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `move_id` | RM-01 to RM-21. | RM-01 |
| `class` | no-regret, option, bet or hedge. | no-regret |
| `move` | Short name. | Publish a national protein and feed balance |
| `what_it_involves` | Content of the move. | A yearly balance of feed protein by source and origin, with soybean... |
| `lead_actors` | Who would lead. | MAE; NSO; feed association |
| `start_by` | Suggested start. | 2028 |
| `cost_scale` | Low, medium or high (qualitative). | Low |
| `pays_off_in` | Scenarios where it pays off (A to D). | A; B; C; D |
| `trigger_or_signpost` | Signpost that should trigger it (bets and some options). | None needed |
| `related_plays` | Plays and public goods it serves. | P6 |
| `evidence_basis` | Why we classify it this way. | Every tracked foreign target has a statistic; the two largest lever... |
| `source_ids` | Supporting source IDs (blank where none). | VIS-15; VIS-13; VIS-05 |
| `foresight_type` | Always estimate. | estimate |
| `confidence` | Confidence. | Medium |
| `score_A` | Payoff score in scenario A (2 strong, 1 partial, 0 little). | 2 |
| `score_B` | Score in scenario B. | 2 |
| `score_C` | Score in scenario C. | 2 |
| `score_D` | Score in scenario D. | 2 |

### vision_milestones.csv

The 22 normative milestones of the Vietnam 2050 vision (chapter 19), by five-year plan period and pillar, with indicator, value or range, trend comparison and the benchmark that makes each plausible. A vision, not a forecast.

Rows: 22. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `milestone_id` | VM-01 to VM-22. | VM-01 |
| `period` | Year or period. | 2026 to 2028 |
| `plan_cycle` | Five-year plan period. | 2026 to 2030 plan |
| `pillar` | Measure, Rules, Places, Money, Economise, Diversify, Specialise, Decarbonise or Review. | Measure |
| `milestone` | Normative milestone. | First national protein and feed balance published, then yearly |
| `indicator` | What is measured. | Balance published |
| `value_or_range` | Target value or range. | Yes, by 2028 |
| `trend_comparison` | Value on trend, for comparison. | None exists |
| `benchmark` | Analogue or benchmark that makes it plausible. | EU balance-sheet guidance; Japan annual KPI checks |
| `source_ids` | Supporting source IDs. | VIS-15; VIS-13 |
| `foresight_type` | Always vision. | vision |
| `confidence` | Confidence in the plausibility of the range. | Medium |

### frontier_windows.csv

When frontier windows could open for Vietnam, by route: start and end years, status in 2026, condition to open, related plays (our estimate; chapter 16).

Rows: 11. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `window_id` | FW-01 to FW-11. | FW-01 |
| `route` | Technology route. | AI-assisted design of feed enzymes and yeast media |
| `family` | Technology family. | AI bio-design |
| `window_start` | Earliest year the window could open. | 2026 |
| `window_end` | End of the window shown. | 2030 |
| `status_2026` | Status in 2026. | Global results in research; Vietnam has compute, no biofoundry |
| `condition_to_open` | What must be true. | Shared wet-lab and data access |
| `related_plays` | Plays it relates to. | T2 |
| `foresight_type` | estimate or wildcard. | estimate |
| `evidence_label` | Evidence label. | VN-direct |
| `confidence` | Confidence. | Low |
| `source_ids` | Supporting source IDs. | FTB-06; FTB-11 |
