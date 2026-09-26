# Data dictionary

Data files for "Alternative protein in Vietnam: a supply-side scoping study" (AltProtein Vietnam, September 2026; files added in versions 0.2 to 0.5 listed at the end). All files are UTF-8 CSV with one header row and snake_case column names. Every row carries a stable `record_id` (or `source_id`, `oq_id`, `dg_id`). Source IDs in `source_ids` resolve to `sources.csv`.

Built on 23 September 2026 by the data consolidation step from the wave 1 and wave 2 research outputs (see `working-papers/`). Where wave 2 changed a wave 1 value, the change is recorded in `change_log` (companies, facilities, instruments) or in `origin` and `notes` (routes, policy options, publications).

**Common columns.** `source_ids`: semicolon-separated source IDs. `evidence_label`: VN-direct, VN-adjacent or general. `confidence`: High, Medium or Low. `province_current` and `province_former`: added by the consolidation step using `provinces.csv` (former_units); left blank when the location is vague, flagged as assumed or unverified, or ambiguous.

**Province method.** A location is mapped only when it names a current or former province, or a district, town or industrial park that lies wholly inside one former unit (for example District 12 and Vinh Loc in former Ho Chi Minh City, Phu My in former Ba Ria-Vung Tau, Can Duoc in former Long An). Multi-site entries list each site when every site resolves.

## Files

| File | Rows | Purpose |
|---|---|---|
| [glossary.csv](#glossarycsv) | 236 | Bilingual glossary (English and Vietnamese) with definitions in both languages (feeds Appendix R3). |
| [key-numbers.json](#key-numbersjson) | 143 | Key-number stat tiles embedded in pages with `{{kn:id}}`. |
| [plays.csv](#playscsv) | 16 | Ten plays and six public goods (chapter 26), with scores on seven criteria. |
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
| [disagreements.csv](#disagreementscsv) | 352 | Register of conflicting numbers and claims found by the research agents, with the position taken (feeds Appendix R2). |
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
| [instruments.csv](#instrumentscsv) | 78 | Regulatory instrument register (laws, decrees, circulars, decisions, resolutions, foreign reference rules). Wave 2 corrections supersede wave 1 and are logged in change_log. |
| [investors.csv](#investorscsv) | 30 | Investors (VC, PE, DFI, corporate, philanthropy) with a thesis or track record relevant to Vietnam and alternative protein. |
| [macro_indicators.csv](#macro_indicatorscsv) | 87 | Macro indicators for the protein economy: production, consumption, feed output, trade, environment and context. |
| [milestones.csv](#milestonescsv) | 30 | Dated milestones 2025 to 2035 (laws, strategies, targets, reforms) in Vietnam and reference jurisdictions. |
| [ministries.csv](#ministriescsv) | 6 | Vietnamese ministries after the 2025 restructuring, their predecessors and roles relevant to alternative protein. |
| [open_questions.csv](#open_questionscsv) | 376 | Register of open questions from all research notes, with the cheapest way to close each; near-duplicates merged and both origins cited. |
| [outlook.csv](#outlookcsv) | 75 | Outlook numbers for 2030 and 2035 (population, demand, feed, prices, targets) with source and type. |
| [pilot_labs.csv](#pilot_labscsv) | 32 | Pilot plants, testing laboratories, feed trial facilities, hi-tech parks and university facilities that founders can use. |
| [policy_options.csv](#policy_optionscsv) | 33 | Policy options: wave 1 list plus the wave 2 ranked list, with origin and cross-links between related options. |
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
| [sources.csv](#sourcescsv) | 2,384 | Master source list. Every citation ID used in the report resolves to a row here. |
| [talent.csv](#talentcsv) | 11 | University admission quotas for food technology, biotechnology and aquaculture programmes (talent pipeline). |
| [tariffs.csv](#tariffscsv) | 11 | Vietnam import tariffs (MFN, ATIGA, ACFTA) for feed and food protein inputs by HS code. |
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

Register of conflicting numbers and claims found by the research agents, with the position taken (feeds Appendix R2).

Rows: 352. Columns: 7.

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

Rows: 78. Columns: 18.

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

Rows: 376. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `oq_id` | Open question ID (OQ-nnn). | OQ-001 |
| `topic` | Topic area. | protein economy and feed |
| `priority_rank` | Priority among the questions ranked in chapter 30 (1 = first; blank if not ranked; added in v0.4). | 5 |
| `unblocks` | Plays or analyses the answer would unblock (added in v0.4). | T2; T3 |
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

Rows: 33. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable short row ID assigned by the consolidation step (prefix plus number). | PO-001 |
| `origin` | Which research output(s) the row comes from. | wave 1 REGULATION |
| `report_rank` | Rank in chapter 27 (1 to 24; blank if superseded). |  |
| `report_tier` | Tier in chapter 27: 1, 2, 3 or `superseded`. | superseded |
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

Rows: 2,384. Columns: 14.

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

Rows: 11. Columns: 11.

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

Terms in Appendix R3, in English and Vietnamese. Rows: 236. Columns: 7.

| Column | Meaning |
|---|---|
| term_id | Stable ID (GL-001 ...) |
| category | Group used in Appendix R3 |
| term_en, term_vi | Term in English and Vietnamese |
| abbreviation | Abbreviation if any |
| definition_en, definition_vi | Short definitions in both languages |

### key-numbers.json
A JSON array (86 entries in v0.2). Fields: `id`, `label`, `label_vi`, `value` (display string), `value_low`, `value_high` (numbers or null), `unit`, `as_of`, `context`, `source_ids`, `derived` (true if our own calculation or count), `evidence`, `confidence`, `primary_page`, `pages` (all pages that reference the id). Entries added in v0.2 also have `foresight_type` (trend, projection, estimate, signal, wildcard or vision), `horizon` (the year or years the value refers to) and `version` ("0.2"). Each entry has a `version` field giving the draft version that added it (blank for entries from v0.1).

### plays.csv
| Column | Meaning |
|---|---|
| play_id | T1 to T10 (plays) or P1 to P6 (public goods) |
| type | `play` or `public good` |
| name, family, segment | Short name, technology family, segment |
| what, why_vietnam, must_be_true, kill_tests | Play card fields (chapter 26) |
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
- **policy_options.csv:** added `report_rank` (1 to 24, as ranked in chapter 27) and `report_tier` (1, 2, 3 or `superseded`); added PO-026 to PO-033 (origin "synthesis"); filled `impact` for PO-015 to PO-025 with the synthesis judgement (High, Medium or Low).
- **open_questions.csv:** added `priority_rank` (1 to 20, as ranked in chapter 30) and `unblocks` (plays or public goods each question affects); added OQ-127.

### Changes to existing files in v0.2
- **sources.csv:** 469 rows appended (waves 3 to 5); rows `QNT-model`, `NGF-calc` and `AQF-calc` record our calculation scripts and are not cited with `[@...]`.
- **open_questions.csv:** OQ-128 to OQ-155 added (topic "futures 2030 to 2050"); OQ-127 set to "partly closed" (Decision 1625 indicates livestock feed only).
- **disagreements.csv:** DG-143 to DG-170 added (futures round).
- **companies.csv:** CO-097 Thai Duong Feed JSC added.
- **instruments.csv:** INS-065 (Decision 1625/QD-TTg, feed scheme) and INS-066 (Decision 1466/QD-TTg) added; INS-043 (Decision 429) status set to "replaced".
- **glossary.csv:** 38 futures and foresight terms added (category "Futures and foresight (v0.2)"); the Vietnamese definition of GL-133 (evidence label) now glosses VN-adjacent as "tương đồng với nước hoặc loài tương tự".
- **key-numbers.json:** 24 entries added; four updated (sources, open questions and disagreements counts; research intensity).
- **bioeconomy_strategies.csv:** BES-003 noted as replaced by Decision 1466.
- **frontier_gas_tech.csv:** FGT-001 hydrogen condition aligned with chapter 21 (USD 1.5 to 2 per kg for bulk feed).

### charts/data/
Small chart-ready tables built from the chapters for charts whose data are not already in one file (see `charts/chart-specs.json`). Each has a `source_ids` column where applicable.


## Files added in the futures round (v0.2)

Built on 2026-09-24 by `research/wave3/consolidate_wave3.py` from the futures-round research streams (wave3: FTG, FTB, CLM, QNT, GEO, ECF, HSC, NTS; wave4: NGF, AQF, HUB; wave5: VIS). The research notes, CSVs and scripts are in `working-papers/wave3/`. Values are as the research agents wrote them. Cleaning only: UTF-8 with LF line endings, snake_case column names, no em or en dashes, `evidence_label` as the evidence column name, and a `record_id` first column (kept from the stream where it had one, otherwise a short prefix plus the row number in the stream's row order). Forward-looking values carry a `foresight_type` label (trend, projection, estimate, signal, wildcard or vision); our own estimates are what-if results, not forecasts.

**Sources.** 469 source rows were appended to `sources.csv` (and the identical copy in `sources/`), marked `wave3`, `wave4` or `wave5` in the `wave` column, with `from_note` pointing to the stream's notes; `sources.csv` now has 1275 rows. `source_type` is mapped from the agent's stated type, which is kept in `notes` as "Type as given". Rows that share a URL or DOI with another row say so in `notes`. The IDs QNT-model, NGF-calc and AQF-calc name our own calculations; they do not match the citation token pattern and cannot be cited as `[@ID]`.

**Balance model.** `tools/balance_model.py` is the QNT model with package paths: it reads `data/balance_assumptions.csv` and rewrites `data/balance_outputs.csv` and `data/balance_sensitivity.csv` (run `python3 tools/balance_model.py`). Checked on 2026-09-24: it reproduces both files exactly.

| File | Rows | Purpose |
|---|---|---|
| [co2_point_sources_vn.csv](#co2_point_sources_vncsv) | 18 | Large CO2 point sources in Vietnam (steel, ammonia and urea, cement, refineries, gas processing, ethanol, brewing, biogas, storage) with volume and gas purity, as possible carbon feedstock. |
| [frontier_gas_tech.csv](#frontier_gas_techcsv) | 10 | Gas and electro-fermentation routes (hydrogen-oxidising bacteria, methanotrophs, gas fermentation of industrial off-gas, electro-microbial routes): readiness, plant scale, resource use, cost paths to 2050 and the conditions for a Vietnam window. |
| [vn_energy_inputs_2050.csv](#vn_energy_inputs_2050csv) | 50 | Vietnam energy and input indicators to 2050 that decide gas-fermentation economics: grid emission factor, power prices, renewable and hydrogen targets, electrolyser and hydrogen costs. |
| [ai_biodesign_evidence.csv](#ai_biodesign_evidencecsv) | 21 | Evidence register for AI and automation in protein, strain and media design: measured results separated from claims. |
| [approvals_trend.csv](#approvals_trendcsv) | 44 | Approvals and regulatory events for novel proteins, 2024 to 2026, extending v0.1 approvals.csv. |
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
| [scenarios_2050.csv](#scenarios_2050csv) | 4 | The four 2050 scenarios of chapter 23 (two axes: import stress and Asia's fermentation market), with picture, indicative soybean-meal and microbial-protein ranges, hubs, link to the 2035 scenarios and signposts (our estimate). (Synthesis file, built by the lead author.) |
| [signposts_2050.csv](#signposts_2050csv) | 16 | The 16 signposts for the 2050 scenario axes and wildcards, with thresholds, where to watch, status in September 2026 and the scenarios each favours. (Synthesis file, built by the lead author.) |
| [play_robustness.csv](#play_robustnesscsv) | 16 | Stress test of the ten plays and six public goods of chapter 26 against the four 2050 scenarios: scores 0 to 2 per scenario, minimum, sum, class and reason (our judgement). (Synthesis file, built by the lead author.) |
| [robust_moves.csv](#robust_movescsv) | 21 | The 21 candidate moves of chapter 28 (no-regret, option, bet, hedge) with what each involves, lead actors, start date, cost scale, scenarios where it pays off, trigger and evidence. (Synthesis file, built by the lead author.) |
| [vision_milestones.csv](#vision_milestonescsv) | 22 | The 22 normative milestones of the Vietnam 2050 vision (chapter 24), by five-year plan period and pillar, with indicator, value or range, trend comparison and the benchmark that makes each plausible. A vision, not a forecast. (Synthesis file, built by the lead author.) |
| [frontier_windows.csv](#frontier_windowscsv) | 11 | When frontier windows could open for Vietnam, by route: start and end years, status in 2026, condition to open, related plays (our estimate; chapter 21). (Synthesis file, built by the lead author.) |

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
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | COST-08 (v0.1) |
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

Approvals and regulatory events for novel proteins, 2024 to 2026, extending v0.1 approvals.csv. Stream: FTB (`working-papers/wave3/frontier_bio/approvals_trend.csv`).

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
| `basis` | Where the value comes from (measured, projection, calibration or assumption) and how. | projection: UN WPP 2024 medium variant, read via OWID in v0.1 |
| `source_ids` | Source IDs (see sources.csv) supporting the row, separated by semicolons. Free text such as "QNT model" or "our calculation" marks our own work. | GT-12 |
| `confidence` | High (primary source read), Medium (reputable secondary or primary read in part) or Low (single claim, press, company marketing, or derived by us from weak inputs). | Medium |
| `notes` | Free-text notes from the research agent. | UN series used for all years, including 2025, so growth rates never mi... |

### balance_outputs.csv

Results of the QNT balance model for 2025 to 2050 by scenario: demand (macro input), production, feed, soybean meal, maize, fishmeal, land abroad and the alternative-protein volumes in S-ALT. Our estimates, not forecasts. Regenerate with tools/balance_model.py. Stream: QNT (`working-papers/wave3/balance_model/outputs.csv`).

Rows: 1,150. Columns: 11.

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
| `notes` | Free-text notes from the research agent. | Same series as QNT and v0.1 GT-12. GSO 2025 = 102.3 M (MI-083);... |

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
| `fitting_plays` | Plays from chapter 26 (T1 to T10) that fit the hub. | T2 functional microbial feed for shrimp (now); T6 duckweed on effluent... |
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

The four 2050 scenarios of chapter 23 (two axes: import stress and Asia's fermentation market), with picture, indicative soybean-meal and microbial-protein ranges, hubs, link to the 2035 scenarios and signposts (our estimate).

Rows: 4. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `scenario_id` | SC-A to SC-D. | SC-A |
| `name` | Scenario name in English. | Regional workshop |
| `name_vi` | Scenario name in Vietnamese. | Công xưởng của khu vực |
| `axis_import_stress` | benign or chronic. | benign |
| `axis_fermentation_market` | open or Chinese price dominance. | open |
| `picture_2050` | Narrative of the world in 2050. | Soy, maize and fishmeal stay ample and cheap on average, as in the ... |
| `soybean_meal_need_2050_mt_indicative` | Indicative 2050 soybean-meal need, mapped to chapter 22 model scenarios (not a model run). | 7.0 to 10.4 (S-EFF to S-BASE; depends on the efficiency programme) |
| `microbial_feed_protein_share_2050_indicative` | Indicative microbial share of high-protein feed protein. | about 1 to 2% (mostly functional ingredients) |
| `where_vietnam_competes` | Plays and products that do well. | Contract and tolling fermentation; functional aquafeed ingredients;... |
| `where_vietnam_loses` | Plays and products that struggle. | Bulk fishmeal replacement; protein from power before 2045 |
| `hubs_active_2050` | Candidate hubs active in this world. | Ho Chi Minh City with Dong Nai; Tay Ninh sugar hub; Mekong river belt |
| `grows_from_2035_scenario` | Link to the chapter 19 scenarios (Scenarios 1 to 3). | 2035 Scenario 3 (regulated regional hub) |
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

Stress test of the ten plays and six public goods of chapter 26 against the four 2050 scenarios: scores 0 to 2 per scenario, minimum, sum, class and reason (our judgement).

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

The 21 candidate moves of chapter 28 (no-regret, option, bet, hedge) with what each involves, lead actors, start date, cost scale, scenarios where it pays off, trigger and evidence.

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

The 22 normative milestones of the Vietnam 2050 vision (chapter 24), by five-year plan period and pillar, with indicator, value or range, trend comparison and the benchmark that makes each plausible. A vision, not a forecast.

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

When frontier windows could open for Vietnam, by route: start and end years, status in 2026, condition to open, related plays (our estimate; chapter 21).

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

## Files added in the demand round (v0.3)

Built on 24 September 2026 from the wave 6 research outputs (`working-papers/wave6/`), the re-read of the retail audit and `tools/demand_model.py`. Rows that carry demand claims also have `demand_evidence_type` (stated, revealed, tested or inferred). Where a stream file had no `record_id`, one was added.

| File | Rows | Purpose |
|---|---|---|
| demand_protein_intake.csv | 460 | Protein supply, intake and household use by food group: FAOSTAT food balance sheets, NIN nutrition survey, VHLSS household use by area, income and region, OECD-FAO projections and USDA consumption (chapter 11, Appendix D1). |
| demand_protein_prices.csv | 25 | Retail prices of common proteins on 24 September 2026 converted to VND and USD per 100 g of protein, with protein values and edible shares (chapter 11). |
| demand_drivers.csv | 54 | Demand drivers: population, urbanisation, income, diet, health, price and food-safety indicators, 2000 to 2050 (chapter 11). |
| demand_food_spending.csv | 179 | Household food spending shares and eating-out spending by area, income group and region (VHLSS, 2010 to 2024). |
| demand_protein_ladder.csv | 104 | Protein supply, animal share, meat and fish supply and income for Vietnam and eight neighbours, 1961 to 2023 (FAOSTAT, World Bank). |
| chay_practice.csv | 13 | Every survey and estimate of chay (vegetarian) practice found, with sample, frame, wording and quality (chapter 12). |
| chay_market.csv | 66 | Chay market data: soy food volumes, calendar demand spikes, restaurant listings and chains, prices and method quality (chapter 12). |
| consumer_surveys.csv | 26 | Register of consumer studies with Vietnamese data on plant-based foods, meat reduction or new proteins, with funder, sample, results and a quality grade (chapter 13). |
| consumer_barriers.csv | 77 | Barriers and drivers of plant-based eating from Vietnamese and regional studies, with comparison values (chapter 13). |
| consumer_wtp.csv | 19 | Willingness-to-pay evidence by type (stated, revealed, tested) for plant-based products in Vietnam and nearby (chapter 13). |
| launches_exits.csv | 32 | Entries and exits of modern plant-based brands and products in Vietnam, with channel and status in September 2026. |
| google_trends.csv | 203 | Google Trends annual mean index for Vietnamese food terms, 2019 to 2026, by comparison set, and related queries. |
| novel_acceptance.csv | 30 | Acceptance evidence for cultivated meat, fermentation-derived proteins and blends in Vietnam and Asian precedents (chapter 14). |
| frontier_sales.csv | 26 | What cultivated, fermented and blended products have sold in Asia and elsewhere, at what price and volume (chapter 14). |
| media_framing.csv | 14 | Vietnamese press articles on new proteins, 2019 to 2026, with the term used, frame and tone. |
| retail_structure.csv | 64 | Food retail by channel, chain store counts and revenues, fresh meat channels and cold chain (chapter 15). |
| foodservice.csv | 45 | Foodservice market size, chain outlet counts, eating-out behaviour and meat-free items tried by chains (chapter 15). |
| meal_programmes.csv | 24 | Institutional meal channels: factory canteens, school meals, school milk, hospitals and the military, with people served, meals and price per meal (chapter 15). |
| tourism.csv | 34 | International arrivals by market and Khanh Hoa tourism data, 2025 to 2026, and vegetarian demand indicators by source market. |
| channel_ranking.csv | 15 | Ranking of first, second and third channels for five new-protein product types, with evidence strength (chapter 15). |
| ingredient_imports.csv | 170 | Imports of 13 protein-ingredient customs lines, 2019 to 2025, Vietnam-reported (CIF) and partner-reported (FOB), with quantities and unit values (chapter 16). |
| ingredient_prices.csv | 33 | Border prices of protein ingredients per kg and per kg of protein, by origin (chapter 16). |
| buyer_map.csv | 27 | Named business buyers of protein ingredients, the proteins they use, scale, statements and likely first new ingredient (chapter 16). |
| buyer_segments.csv | 8 | Ranking of eight buyer segments by current spend, switching likelihood, required price and specification and ease of first trial (chapter 16). |
| vissan_label_audit.csv | 118 | Ingredient-list audit of 118 Vissan processed products for added proteins (September 2026). |
| export_base.csv | 30 | Vietnamese export lines relevant to alternative protein, with values, volumes and markets (chapter 17). |
| destination_markets.csv | 38 | Demand for plant-based and alternative protein in destination markets, 2022 to 2025, with trend and data provider (chapter 17). |
| market_access.csv | 36 | Tariffs, label rules, novel-food rules and buyer standards by market and product type (chapter 17). |
| adoption_benchmarks.csv | 59 | Adoption, household penetration, repeat and market-share benchmarks for plant-based products in the US, Europe and Asia (Appendix D7). |
| price_elasticities.csv | 12 | Published own-price and cross-price elasticities for plant-based products (Appendix D7). |
| forecast_track_record.csv | 11 | Long-range alternative-protein forecasts against the latest comparable actual (chapter 18). |
| intervention_effects.csv | 12 | Effects of institutional and nudge interventions on meat and plant-based choices, with study design and follow-up (Appendix D7). |
| price_gaps.csv | 14 | Price gaps between plant-based products and meat in several markets (Appendix D7). |
| retail_demand_signals.csv | 40 | Demand signals from the re-read of the September 2026 retail audit: assortment by store tier, pack prices, cost of 20 g of protein, label claims and chay rules (Appendix D3). |
| demand_assumptions.csv | 190 | Every assumption of the demand model, by scenario and year, with basis, sources and confidence (Appendix D8). |
| demand_outputs.csv | 522 | Demand model outputs by scenario, year and route: protein delivered, meat protein displaced, comparisons with S-ALT and requirement translations (our estimates). |
| demand_sensitivity.csv | 10 | One-at-a-time sensitivity of D-BENCH 2035 meat protein displaced to the main assumptions. |
| target_product_profiles.csv | 11 | Ten target product profiles: first buyers, channel, price and protein targets, format, label, what to avoid and the cheapest first test (chapter 25). |
| play_demand_check.csv | 10 | The ten plays of chapter 26 checked against demand evidence: v0.2 market pull, demand view, first buyers and demand-side kill tests. |
| demand_moves.csv | 21 | Nineteen measurement, public-good and policy moves on the demand side, with who, indicative cost and timing (chapter 25). |

### demand_protein_intake.csv

Protein supply, intake and household use by food group: FAOSTAT food balance sheets, NIN nutrition survey, VHLSS household use by area, income and region, OECD-FAO projections and USDA consumption (chapter 11, Appendix D1).

Rows: 460. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DPI-001 |
| `source` | Source. | FAOSTAT Food Balance Sheets (2010 to 2023 series) |
| `year` | Year. | 2010 |
| `geography` | Geography. | Vietnam |
| `population_group` | Population group. | whole population |
| `food_group` | Food group. | All foods |
| `value` | Value. | 79.67 |
| `unit` | Unit. | g protein per person per day |
| `basis` | Basis. | food supply available for consumption (not intake; includes household waste) |
| `measure_type` | Measure type. | supply |
| `source_ids` | Semicolon-separated source IDs. | DIE-07 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Protein supply quantity, element 674. |

### demand_protein_prices.csv

Retail prices of common proteins on 24 September 2026 converted to VND and USD per 100 g of protein, with protein values and edible shares (chapter 11).

Rows: 25. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DPP-001 |
| `food` | Food. | Pork, lean |
| `product` | Product. | Thit nac heo C.P, tray 400 g |
| `retailer` | Retailer. | Bach Hoa Xanh online |
| `channel_city` | Channel city. | online; default store (HCMC assumed as in COST-39) |
| `date_observed` | Date observed. | 2026-09-24 |
| `pack_price_vnd` | Pack price vnd. | 52800 |
| `pack_size` | Pack size. | 400 g |
| `price_vnd_per_kg` | Price vnd per kg. | 132000 |
| `protein_g_per_100g` | Protein g per 100g. | 19.0 |
| `protein_basis` | Protein basis. | FCT 7017 thit lon nac (lean pork) |
| `edible_share` | Edible share. | 0.98 |
| `vnd_per_100g_protein` | Vnd per 100g protein. | 70892 |
| `usd_per_100g_protein` | Usd per 100g protein. | 2.73 |
| `sources` | Sources. | COST-39; DIE-12 |
| `source_ids` | Semicolon-separated source IDs. | COST-39; DIE-12 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Same price as COST-39 on 23 Sep 2026. Edible share from FCT waste 2%. |

### demand_drivers.csv

Demand drivers: population, urbanisation, income, diet, health, price and food-safety indicators, 2000 to 2050 (chapter 11).

Rows: 54. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DDD-001 |
| `driver` | Driver. | demography |
| `indicator` | Indicator. | Population |
| `value` | Value. | 101.6 |
| `unit` | Unit. | million |
| `year` | Year. | 2025 |
| `basis` | Basis. | UN WPP 2024 medium variant via World Bank |
| `source_ids` | Semicolon-separated source IDs. | DIE-36 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Peaks at about 110.0 million in 2049 on this series. Same series as the ... |

### demand_food_spending.csv

Household food spending shares and eating-out spending by area, income group and region (VHLSS, 2010 to 2024).

Rows: 179. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DFS-001 |
| `indicator` | Indicator. | Share of eating, drinking and smoking in household consumption spending |
| `year` | Year. | 2012 |
| `geography` | Geography. | Vietnam |
| `group` | Group. | all households |
| `value` | Value. | 56.0 |
| `unit` | Unit. | % |
| `source_ids` | Semicolon-separated source IDs. | DIE-05 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | VHLSS table 6.5 |

### demand_protein_ladder.csv

Protein supply, animal share, meat and fish supply and income for Vietnam and eight neighbours, 1961 to 2023 (FAOSTAT, World Bank).

Rows: 104. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DPL-001 |
| `country_iso3` | Country iso3. | VNM |
| `year` | Year. | 1961 |
| `fao_series` | Fao series. | historic |
| `protein_supply_g_per_person_day` | Protein supply g per person day. | 45.5 |
| `animal_protein_g_per_person_day` | Animal protein g per person day. | 8.9 |
| `animal_share_pct` | Animal share pct. | 19.6 |
| `plant_share_pct` | Plant share pct. | 80.4 |
| `meat_supply_kg_per_person_year` | Meat supply kg per person year. | 11.1 |
| `fish_supply_kg_per_person_year` | Fish supply kg per person year. | 13.9 |
| `gdp_per_capita_ppp_const2021_usd` | Gdp per capita ppp const2021 usd. | 2468 |
| `source_ids` | Semicolon-separated source IDs. | DIE-08 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | FAO supply basis (carcass weight for meat).  |

### chay_practice.csv

Every survey and estimate of chay (vegetarian) practice found, with sample, frame, wording and quality (chapter 12).

Rows: 13. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | CPR-001 |
| `survey_id` | Survey id. | S01 |
| `source` | Source. | Xu hướng ăn chay của người Việt Nam |
| `run_by` | Run by. | W&S online market research |
| `paid_by` | Paid by. | W&S (own poll, not stated otherwise) |
| `year` | Year. | 2012 |
| `sample` | Sample. | 659 (355 men, 304 women) |
| `frame` | Frame. | Online panel, aged 16 and over, national online users |
| `question_wording` | Question wording. | Not published |
| `share_full_vegetarian` | Share full vegetarian. | Not reported |
| `share_periodic` | Share periodic. | 59% 'regularly' eat vegetarian |
| `frequency_definition` | Frequency definition. | Mostly on lunar 1st and 15th and Buddhist holidays (no day counts published) |
| `other_results` | Other results. | Reasons: calm and light mind 40.7%; to pray 39.0%; health 33.1%. Where ... |
| `notes` | Notes. | 14 years old; online panel over-represents urban, young, connected people; ... |
| `source_ids` | Semicolon-separated source IDs. | CHY-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | stated |

### chay_market.csv

Chay market data: soy food volumes, calendar demand spikes, restaurant listings and chains, prices and method quality (chapter 12).

Rows: 66. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | CMK-001 |
| `category` | Category. | soy foods |
| `metric` | Metric. | Soybeans used for food (whole beans: tofu, soy milk, sauces and other foods) |
| `value` | Value. | 540,000 |
| `unit` | Unit. | tonnes of soybeans |
| `year` | Year. | 2024/25 (Jan to Dec 2025 market year) |
| `geography` | Geography. | Vietnam |
| `method_quality` | Method quality. | Medium: USDA Post estimate from trade balance; method not itemised |
| `source_ids` | Semicolon-separated source IDs. | CHY-45 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | USDA official and Post agree |

### consumer_surveys.csv

Register of consumer studies with Vietnamese data on plant-based foods, meat reduction or new proteins, with funder, sample, results and a quality grade (chapter 13).

Rows: 26. Columns: 23.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | SUR-001 |
| `survey_id` | Survey id. | SUR-01 |
| `study` | Study. | Decoding demand: the appetite for alternative proteins in Southeast Asia |
| `lead_org_or_authors` | Lead org or authors. | The Good Growth Co. for GFI APAC (authors cited as J. Morton, D. Gandhi, E. ... |
| `funder` | Funder. | GFI APAC (commissioned; advocacy non-profit) |
| `fieldwork_year` | Fieldwork year. | 2023 |
| `publication_year` | Publication year. | 2024 (Feb) |
| `countries` | Countries. | Vietnam, Thailand, Philippines, Malaysia, Indonesia, Singapore |
| `vn_n` | Vn n. | 1049 |
| `total_n` | Total n. | 5971 |
| `sample_frame` | Sample frame. | Online panel; capital-city regions plus Ho Chi Minh City for Vietnam; adults ... |
| `method` | Method. | Desk research and market visits; online focus groups (8 people per country ... |
| `key_question_wording` | Key question wording. | What is your familiarity with plant-based meat? (5 options from never heard ... |
| `key_vn_results` | Key vn results. | Heard of PBM 90%; ever tried 42%; eat monthly or more 20%; weekly 3%. Intend ... |
| `regional_or_peer_comparison` | Regional or peer comparison. | Six-country average: heard 91%, tried 47%, weekly 5%; reduce meat 21%; ... |
| `product_scope` | Product scope. | Plant-based meat (and blended meat) |
| `quality_rating` | Quality rating. | B |
| `quality_reason` | Quality reason. | Large per-country online sample with published question wording and ... |
| `source_ids` | Semicolon-separated source IDs. | CON-01; CON-02; CON-03; ECO-23; ECO-24 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | stated |
| `notes` | Notes. | Regional headline 5% to 63% refers to weekly eaters now (5%) versus always ... |

### consumer_barriers.csv

Barriers and drivers of plant-based eating from Vietnamese and regional studies, with comparison values (chapter 13).

Rows: 77. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | BAR-01 |
| `study` | Study. | GFI APAC and Good Growth, Decoding demand |
| `country` | Country. | Vietnam |
| `fieldwork_year` | Fieldwork year. | 2023 |
| `item_type` | Item type. | barrier (factor to eat more) |
| `item` | Item. | More affordable |
| `question_wording` | Question wording. | What would make you eat more plant-based meat? (rank up to 3) |
| `value` | Value. | 38 |
| `unit` | Unit. | % of respondents ranking in top 3 |
| `rank_in_country` | Rank in country. | 1 |
| `base_n` | Base n. | 1049 (subset) |
| `base_description` | Base description. | Vietnam respondents except those who said they would not eat any or were ... |
| `comparison_value` | Comparison value. | 47 |
| `comparison_label` | Comparison label. | six-country average |
| `vn_minus_comparison_pp` | Vn minus comparison pp. | -9 |
| `source_ids` | Semicolon-separated source IDs. | CON-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | stated |
| `notes` | Notes. | Vietnam lowest of six (range 38 to 54) |

### consumer_wtp.csv

Willingness-to-pay evidence by type (stated, revealed, tested) for plant-based products in Vietnam and nearby (chapter 13).

Rows: 19. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | WTP-01 |
| `study_or_observation` | Study or observation. | GFI APAC and Good Growth price ladder |
| `country` | Country. | Vietnam |
| `year` | Year. | 2023 |
| `product` | Product. | plant-based meat versus meat (no product described) |
| `price_condition` | Price condition. | 20% cheaper than meat |
| `value` | Value. | 88 |
| `unit` | Unit. | % choosing plant-based meat |
| `base_n` | Base n. | 1049 |
| `comparison` | Comparison. | six-country average 80%; TH 82, PH 87, MY 72, ID 84, SG 67 |
| `source_ids` | Semicolon-separated source IDs. | CON-02; ECO-23 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | stated |
| `notes` | Notes. | Question: Imagine you were doing your grocery shopping and the following ... |

### launches_exits.csv

Entries and exits of modern plant-based brands and products in Vietnam, with channel and status in September 2026.

Rows: 32. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | LE-01 |
| `brand` | Brand. | Beyond Meat |
| `owner_country` | Owner country. | USA |
| `product` | Product. | Beyond Burger, sausages, mince |
| `category` | Category. | plant-based meat (imported) |
| `channel` | Channel. | Restaurants first (BiaCraft, 3 Ho Chi Minh City venues), then gourmet retail ... |
| `entry_year` | Entry year. | 2019 |
| `current_status` | Current status. | Not seen on shelf in September 2026; no current distributor found |
| `status_as_of` | Status as of. | 2026-09 |
| `evidence` | Evidence. | First served at BiaCraft in August 2019; gourmet retail at VND 1.2 to 1.8 ... |
| `source_ids` | Semicolon-separated source IDs. | ECO-16; ECO-15; ECO-19; FORM-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Absence in a convenience audit is not proof of exit; e-commerce not checked |

### google_trends.csv

Google Trends annual mean index for Vietnamese food terms, 2019 to 2026, by comparison set, and related queries.

Rows: 203. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | GTR-001 |
| `comparison_set` | Comparison set. | sữa hạt \| thịt thực vật \| sữa yến mạch \| đồ chay \| thuần chay |
| `term` | Term. | sữa hạt |
| `gloss_en` | Gloss en. | nut or seed milk |
| `year` | Year. | 2019 |
| `mean_index` | Mean index. | 20.2 |
| `months_in_year` | Months in year. | 12 |
| `set_average_2019_to_2026` | Set average 2019 to 2026. | 51 |
| `source_ids` | Semicolon-separated source IDs. | CON-37 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Relative index within this comparison set only (0 to 100 = peak month of any ... |

### novel_acceptance.csv

Acceptance evidence for cultivated meat, fermentation-derived proteins and blends in Vietnam and Asian precedents (chapter 14).

Rows: 30. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | NAC-001 |
| `study` | Study. | Lin et al. 2026, Discover Food |
| `country` | Country. | Singapore; Vietnam; China; Japan; South Korea |
| `year` | Year. | published 2026 (fieldwork year not retrieved) |
| `n` | N. | 3005 (split by country not retrieved) |
| `frame` | Frame. | Survey in five countries; panel and sampling details not retrieved (abstract ... |
| `category` | Category. | cultivated meat and cell-cultured foods |
| `metric` | Metric. | Country concentration of the most open consumer segment |
| `value` | Value. | Open-Minded Seekers concentrated in Vietnam and China; Resistant Evaluators ... |
| `source_ids` | Semicolon-separated source IDs. | NOV-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | stated |
| `notes` | Notes. | Only multi-country Asian study with Vietnamese cultivated meat data we ... |

### frontier_sales.csv

What cultivated, fermented and blended products have sold in Asia and elsewhere, at what price and volume (chapter 14).

Rows: 26. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FSL-001 |
| `product` | Product. | GOOD Meat cultivated chicken (restaurant dishes) |
| `company` | Company. | Eat Just (GOOD Meat) |
| `country` | Country. | Singapore |
| `category` | Category. | cultivated meat |
| `channel` | Channel. | Restaurants (1880, later Huber's Bistro) |
| `launch_date` | Launch date. | December 2020 (approval and first sale) |
| `price` | Price. | not retrieved |
| `composition_or_protein` | Composition or protein. | Cultivated chicken (earlier formulations about 60 to 70 percent cultivated) |
| `volume_or_status` | Volume or status. | More than 2000 servings sold in Singapore to May 2024 (company claim); sales ... |
| `source_ids` | Semicolon-separated source IDs. | NOV-10; NOV-12 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-adjacent |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | About three and a half years to reach 2000 servings. |

### media_framing.csv

Vietnamese press articles on new proteins, 2019 to 2026, with the term used, frame and tone.

Rows: 14. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | MFR-001 |
| `outlet` | Outlet. | Bao Chinh phu |
| `date` | Date. | 2019-10-15 |
| `headline_vi` | Headline vi. | Thịt nhân tạo: Xu hướng gây tranh cãi |
| `headline_gloss_en` | Headline gloss en. | Artificial meat: a controversial trend |
| `term_used` | Term used. | thịt nhân tạo (for plant-based meat) |
| `frame` | Frame. | Controversy; processing, GMO ingredients |
| `tone` | Tone. | Neutral |
| `vietnam_data` | Vietnam data. | None |
| `source_ids` | Semicolon-separated source IDs. | NOV-69 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | inferred |
| `notes` | Notes. | Shows 'thit nhan tao' is used for plant-based as well as cell-based products. |

### retail_structure.csv

Food retail by channel, chain store counts and revenues, fresh meat channels and cold chain (chapter 15).

Rows: 64. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | RST-001 |
| `metric` | Metric. | food_retail_sales |
| `value` | Value. | 55.5 |
| `unit` | Unit. | USD billion |
| `year` | Year. | 2024 |
| `scope` | Scope. | Vietnam, all food retail |
| `source_ids` | Semicolon-separated source IDs. | CHN-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Euromonitor via USDA GAIN; up 1% on 2023 |

### foodservice.csv

Foodservice market size, chain outlet counts, eating-out behaviour and meat-free items tried by chains (chapter 15).

Rows: 45. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FSV-001 |
| `record_type` | Record type. | market |
| `subject` | Subject. | foodservice |
| `metric` | Metric. | value_sales |
| `value` | Value. | 26.6 |
| `unit` | Unit. | USD billion |
| `year` | Year. | 2024 |
| `scope` | Scope. | Vietnam |
| `source_ids` | Semicolon-separated source IDs. | CHN-03 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Euromonitor; up 7% |

### meal_programmes.csv

Institutional meal channels: factory canteens, school meals, school milk, hospitals and the military, with people served, meals and price per meal (chapter 15).

Rows: 24. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | INS-001 |
| `programme_or_channel` | Programme or channel. | Industrial park and economic zone canteens (national) |
| `people_served` | People served. | 4150000 |
| `people_served_unit` | People served unit. | workers |
| `meals_per_year` | Meals per year. | 1245000000 |
| `meals_per_year_basis` | Meals per year basis. | our calculation: 4.15 million x 300 meal days; upper bound |
| `price_per_meal_vnd` | Price per meal vnd. | 20000 to 35000 |
| `rules` | Rules. | Union floor VND 20,000 (Hai Phong); employer-organised meals tax exempt; ... |
| `year` | Year. | 2023 workers; 2026 prices |
| `source_ids` | Semicolon-separated source IDs. | CHN-37; CHN-39; CHN-40 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | inferred |
| `notes` | Notes. | Some firms pay cash instead of meals; workers outside parks not counted |

### tourism.csv

International arrivals by market and Khanh Hoa tourism data, 2025 to 2026, and vegetarian demand indicators by source market.

Rows: 34. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TOU-001 |
| `metric` | Metric. | international_arrivals |
| `market_or_place` | Market or place. | Vietnam |
| `value` | Value. | 21170000 |
| `unit` | Unit. | visitors |
| `period` | Period. | 2025 |
| `source_ids` | Semicolon-separated source IDs. | CHN-44; CHN-43 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | up 20.4%; record |

### channel_ranking.csv

Ranking of first, second and third channels for five new-protein product types, with evidence strength (chapter 15).

Rows: 15. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | CRK-001 |
| `product_archetype` | Product archetype. | a_textured_plant_protein_ingredient |
| `rank` | Rank. | 1 |
| `channel` | Channel. | Do chay and processed-meat manufacturers (B2B) |
| `why` | Why. | All local products with 10 g or more protein already use imported textured ... |
| `price_or_spec_to_meet` | Price or spec to meet. | Near the Chinese import unit value (about USD 1.6 per kg); consistent ... |
| `main_barrier` | Main barrier. | Switching cost from cheap Chinese supply |
| `evidence_strength` | Evidence strength. | M |
| `source_ids` | Semicolon-separated source IDs. | FORM-01; supply study |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Supply-side fact from the supply study |

### ingredient_imports.csv

Imports of 13 protein-ingredient customs lines, 2019 to 2025, Vietnam-reported (CIF) and partner-reported (FOB), with quantities and unit values (chapter 16).

Rows: 170. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | IMP-001 |
| `hs_code` | Hs code. | 040410 |
| `description` | Description. | Whey and modified whey (feed-grade sweet whey and food-grade demineralised ... |
| `year` | Year. | 2019 |
| `value_usd` | Value usd. | 47152602 |
| `quantity_t` | Quantity t. | 34387.5 |
| `quantity_status` | Quantity status. | estimated by UN Comtrade |
| `reporter` | Reporter. | Vietnam (importer-reported, CIF) |
| `partner` | Partner. | World |
| `unit_value_usd_per_kg` | Unit value usd per kg. | 1.37 |
| `source_ids` | Semicolon-separated source IDs. | BUY-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Classification H5. Value reliable; quantity imputed so unit value is weak. |

### ingredient_prices.csv

Border prices of protein ingredients per kg and per kg of protein, by origin (chapter 16).

Rows: 33. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | IPR-001 |
| `ingredient` | Ingredient. | HS 210610 protein concentrates and textured protein (TVP, SPC, some SPI) |
| `price_basis` | Price basis. | Export unit value to Vietnam (FOB, exporter-reported quantity) |
| `origin` | Origin. | China |
| `period` | Period. | 2024 |
| `price_usd_per_kg` | Price usd per kg. | 1.31 |
| `price_vnd_per_kg_at_26000` | Price vnd per kg at 26000. | 34060 |
| `protein_share_assumed` | Protein share assumed. | 0.65 |
| `price_usd_per_kg_protein` | Price usd per kg protein. | 2.02 |
| `source_ids` | Semicolon-separated source IDs. | BUY-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | 10,029 t. Mixed products; protein share assumed 0.65 for a TVP or SPC mix ... |

### buyer_map.csv

Named business buyers of protein ingredients, the proteins they use, scale, statements and likely first new ingredient (chapter 16).

Rows: 27. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | BM-01 |
| `buyer` | Buyer. | VISSAN (Vietnam Livestock Technology JSC) |
| `segment` | Segment. | Meat processing (gio, cha, sausage, pate, canned); chay line |
| `ownership` | Ownership. | Vietnamese JSC; Masan MEATLife strategic link |
| `protein_ingredients_used` | Protein ingredients used. | Soy protein (19 of 61 unique meat formulations), wheat gluten or wheat ... |
| `evidence_of_use` | Evidence of use. | Ingredient lists on 118 Vissanmart SKUs (84 with lists), Sep 2026 |
| `scale_indicator` | Scale indicator. | Revenue VND 2,972 billion and processed food 18,547 t (2025); 2026 plan VND ... |
| `statements_on_plant_protein_or_sustainability` | Statements on plant protein or sustainability. | No plant-based or chay mention found in the text of the 2025 annual report; ... |
| `likely_first_novel_product` | Likely first novel product. | Domestic TVP or soy concentrate for chay lines; soy-free binder (mung bean ... |
| `switching_likelihood` | Switching likelihood. | Medium |
| `ease_of_first_trial` | Ease of first trial. | Medium: existing chay lines and new-product pipeline; state-linked governance |
| `source_ids` | Semicolon-separated source IDs. | BUY-04; BUY-05; ECO-30 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Soy protein appears mainly in value lines (3 Bong Mai canned range, pate, ... |

### buyer_segments.csv

Ranking of eight buyer segments by current spend, switching likelihood, required price and specification and ease of first trial (chapter 16).

Rows: 8. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | BSG-001 |
| `rank` | Rank. | 1 |
| `segment` | Segment. | Industrial chay makers and frozen chay co-packers |
| `current_protein_ingredient_spend` | Current protein ingredient spend. | Import-dependent on TVP, SPC, SPI and gluten; share of the 54,000 t of ... |
| `spend_score_1_to_5` | Spend score 1 to 5. | 3 |
| `switching_likelihood` | Switching likelihood. | High: every protein-dense local chay product uses imported protein; SMEs ... |
| `switching_score_1_to_5` | Switching score 1 to 5. | 5 |
| `required_price_and_spec` | Required price and spec. | Landed price at or below Chinese TVP/SPC (USD 1.24/kg FOB 2025, about USD ... |
| `ease_of_first_trial` | Ease of first trial. | Fast: owner-managed SMEs, simple bench trials |
| `ease_score_1_to_5` | Ease score 1 to 5. | 5 |
| `best_fit_novel_or_domestic_ingredient` | Best fit novel or domestic ingredient. | Domestic TVP (soy or soy-gluten); later mung bean or rice textured protein |
| `plausible_first_customers` | Plausible first customers. | An Nhien, Au Lac, Thoai An, LC Foods, SG Food, Thanh Dung; Cholimex and CJ ... |
| `source_ids` | Semicolon-separated source IDs. | BUY-02; BUY-27; FORM-01; FORM-28 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | inferred |
| `notes` | Notes. | Scores are our judgement from revealed use and firm type. |

### vissan_label_audit.csv

Ingredient-list audit of 118 Vissan processed products for added proteins (September 2026).

Rows: 118. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | VLA-001 |
| `product_name_vi` | Product name vi. | HOTDOG WOW 33G |
| `category` | Category. | sterilised sausage |
| `chay_product` | Chay product. | no |
| `retail_price_vnd` | Retail price vnd. | 4500 |
| `ingredient_list_published` | Ingredient list published. | yes |
| `lists_soy_protein` | Lists soy protein. | no |
| `lists_wheat_gluten_or_wheat_protein` | Lists wheat gluten or wheat protein. | no |
| `lists_milk_protein` | Lists milk protein. | no |
| `lists_egg_white_powder` | Lists egg white powder. | no |
| `lists_fibre` | Lists fibre. | yes |
| `ingredient_list_excerpt_vi` | Ingredient list excerpt vi. | Thịt gà, mỡ heo, nước, chất ổn định (1412, 407, 508), chất điều chỉnh độ ... |
| `url` | Url. | https://vissanmart.com/hotdog-wow-33g.html |
| `source_ids` | Semicolon-separated source IDs. | BUY-05 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Vissanmart online shop, read 24 Sep 2026. Pack sizes of the same formulation ... |

### export_base.csv

Vietnamese export lines relevant to alternative protein, with values, volumes and markets (chapter 17).

Rows: 30. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | EB-01 |
| `product` | Product. | Agro-forestry-fishery exports, total |
| `hs_code` | Hs code. | various |
| `year` | Year. | 2025 |
| `value_usd` | Value usd. | 70,090,000,000 |
| `volume_t` | Volume t. | 78,742 |
| `main_markets` | Main markets. | Asia 45.2% of value; China about 64% of fruit and vegetables |
| `relevance_to_alt_protein` | Relevance to alt protein. | Context: size of the export base that alternative protein would join |
| `source_ids` | Semicolon-separated source IDs. | EXP-16 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Ministry of Agriculture and Environment data via VnEconomy; +12% on 2024. |

### destination_markets.csv

Demand for plant-based and alternative protein in destination markets, 2022 to 2025, with trend and data provider (chapter 17).

Rows: 38. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DM-01 |
| `market` | Market. | Global |
| `category` | Category. | Plant-based meat, seafood, milk, yoghurt, ice cream, cheese |
| `metric` | Metric. | Retail sales |
| `value` | Value. | 28.9 |
| `unit` | Unit. | USD billion |
| `year` | Year. | 2025 |
| `trend` | Trend. | Up 3% on 2024 (including inflation) |
| `data_provider` | Data provider. | Euromonitor via GFI |
| `source_ids` | Semicolon-separated source IDs. | EXP-03; EXP-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Non-dairy (dairy alternatives) USD 22.7bn; milk alternatives USD 18.2bn ... |

### market_access.csv

Tariffs, label rules, novel-food rules and buyer standards by market and product type (chapter 17).

Rows: 36. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | MA-01 |
| `market` | Market. | EU |
| `product_type` | Product type. | Textured protein and protein concentrates (no milkfat, sugar, starch) |
| `hs_code` | Hs code. | 2106 10 20 90 |
| `rule` | Rule. | Tariff |
| `requirement` | Requirement. | Import duty |
| `mfn_tariff` | Mfn tariff. | 12.8% |
| `vietnam_tariff` | Vietnam tariff. | 0% (since 1 Jan 2023) |
| `competitor_tariff` | Competitor tariff. | Thailand and China pay MFN 12.8% (no EU FTA) |
| `legal_basis` | Legal basis. | EVFTA (Decision D0753/20) |
| `source_ids` | Semicolon-separated source IDs. | EXP-23 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | n/a (rule or tariff, not demand) |
| `notes` | Notes. | Soy protein concentrate (2106 10 20 20) and pea protein (2106 10 20 40) ... |

### adoption_benchmarks.csv

Adoption, household penetration, repeat and market-share benchmarks for plant-based products in the US, Europe and Asia (Appendix D7).

Rows: 59. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | ADB-001 |
| `country` | Country. | United States |
| `category` | Category. | plant-based meat and seafood |
| `metric` | Metric. | retail dollar sales |
| `value` | Value. | 1.4 |
| `unit` | Unit. | USD billion |
| `year` | Year. | 2021 |
| `scope` | Scope. | SPINS MULO plus natural channel |
| `source_ids` | Semicolon-separated source IDs. | GLB-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Peak-year value; 0% growth vs 2020; category definitions later revised |

### price_elasticities.csv

Published own-price and cross-price elasticities for plant-based products (Appendix D7).

Rows: 12. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PEL-001 |
| `study` | Study. | Zhao, Wang, Hu and Zheng 2023 |
| `country` | Country. | United States |
| `product` | Product. | plant-based meat alternatives in fresh meat section |
| `own_price_elasticity` | Own price elasticity. | -0.84 before COVID-19; -1.55 after |
| `cross_price_elasticity_with_meat` | Cross price elasticity with meat. | PBMA demand wrt meat prices: beef -1.41, pork -0.39 (complements); chicken ... |
| `data_type` | Data type. | retail scanner (Nielsen Scantrack, weekly, 40 states) |
| `period` | Period. | Jan 2017 to Jul 2020 |
| `sample` | Sample. | store-level aggregate |
| `source_ids` | Semicolon-separated source IDs. | GLB-16 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Expenditure elasticity 0.74 rising to 1.98; PBMA 0.1% to 0.4% of fresh meat ... |

### forecast_track_record.csv

Long-range alternative-protein forecasts against the latest comparable actual (chapter 18).

Rows: 11. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FTR-001 |
| `forecaster` | Forecaster. | A.T. Kearney |
| `year_made` | Year made. | 2019 |
| `target_year` | Target year. | 2025 |
| `metric` | Metric. | novel vegan meat replacements share of global meat market |
| `forecast` | Forecast. | 10% of a USD 1,200 billion market (about USD 120 billion) |
| `actual_or_latest_comparable` | Actual or latest comparable. | USD 6.6 billion global retail plant-based meat and seafood sales (about ... |
| `actual_year` | Actual year. | 2025 |
| `gap` | Gap. | actual about 5.5% of forecast; share overstated about 18 times |
| `source_ids` | Semicolon-separated source IDs. | GLB-45; GLB-05 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | inferred |
| `notes` | Notes. | Retail only; foodservice would add some value but not an order of magnitude. ... |

### intervention_effects.csv

Effects of institutional and nudge interventions on meat and plant-based choices, with study design and follow-up (Appendix D7).

Rows: 12. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | IEF-001 |
| `intervention` | Intervention. | double share of vegetarian options from 25% to 50% |
| `setting` | Setting. | university cafeterias |
| `country` | Country. | United Kingdom |
| `effect_size` | Effect size. | +7.8 percentage points vegetarian sales (+40.8%) experimental; +14.9 and ... |
| `outcome_measure` | Outcome measure. | share of meals sold that were vegetarian |
| `study_design` | Study design. | field experiment (one cafeteria) plus observational (two) |
| `follow_up` | Follow up. | same-day; checked other mealtimes, no rebound found |
| `sample` | Sample. | 94,644 meals, 2017 |
| `source_ids` | Semicolon-separated source IDs. | GLB-35 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | tested |
| `notes` | Notes. | Little effect on total sales; biggest effect among diners who rarely chose ... |

### price_gaps.csv

Price gaps between plant-based products and meat in several markets (Appendix D7).

Rows: 14. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PGP-001 |
| `country` | Country. | United States |
| `product` | Product. | plant-based meat |
| `comparator` | Comparator. | conventional meat |
| `price_ratio_or_premium` | Price ratio or premium. | +65% per lb |
| `year` | Year. | 2022 |
| `basis` | Basis. | sales-weighted retail average (NIQ) |
| `source_ids` | Semicolon-separated source IDs. | GLB-03 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `notes` | Notes. | Gap widened while sales fell |

### retail_demand_signals.csv

Demand signals from the re-read of the September 2026 retail audit: assortment by store tier, pack prices, cost of 20 g of protein, label claims and chay rules (Appendix D3).

Rows: 40. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | RDS-001 |
| `topic` | Topic. | assortment |
| `metric` | Metric. | SKUs logged |
| `segment` | Segment. | mass stores (8) |
| `value` | Value. | 140 |
| `unit` | Unit. | SKUs |
| `n` | N. | 140 |
| `notes` | Notes. | Lotte Mart, Co.opmart, GO!, WinMart, Emart in Nha Trang and Ho Chi Minh ... |
| `source_ids` | Semicolon-separated source IDs. | FORM-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |

### demand_assumptions.csv

Every assumption of the demand model, by scenario and year, with basis, sources and confidence (Appendix D8).

Rows: 190. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DMA-001 |
| `parameter` | Parameter. | protein_per_kg_meat_cwe |
| `scenario` | Scenario. | ALL |
| `year` | Year. | ALL |
| `value` | Value. | 0.15 |
| `unit` | Unit. | kg protein per kg carcass weight |
| `basis` | Basis. | Same value as the balance model (BLA-044) |
| `source_ids` | Semicolon-separated source IDs. | QNT-model |
| `confidence` | High, Medium or Low. | Low |
| `notes` | Notes. | Keeps Part III on the same protein basis as Part IV. |

### demand_outputs.csv

Demand model outputs by scenario, year and route: protein delivered, meat protein displaced, comparisons with S-ALT and requirement translations (our estimates).

Rows: 522. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DMO-0001 |
| `scenario` | Scenario. | D-DRIFT |
| `year` | Year. | 2025 |
| `route` | Route. | context |
| `indicator` | Indicator. | meat_protein_kt |
| `label` | Label. | Meat protein demand (S-BASE, carcass basis x 0.15) |
| `value` | Value. | 1012.8 |
| `unit` | Unit. | kt protein |
| `foresight_type` | Foresight type (estimate for model years). | calibration (2025 base) |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `source_ids` | Semicolon-separated source IDs. | demand_assumptions.csv; balance_outputs.csv |
| `notes` | Notes. | What-if scenario result, not a forecast. |

### demand_sensitivity.csv

One-at-a-time sensitivity of D-BENCH 2035 meat protein displaced to the main assumptions.

Rows: 10. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DMS-001 |
| `parameter` | Parameter. | r2_keeper_share |
| `low_value` | Low value. | 0.2 |
| `high_value` | High value. | 0.5 |
| `base_displaced_kt` | Base displaced kt. | 2.35 |
| `displaced_at_low_kt` | Displaced at low kt. | 2.04 |
| `displaced_at_high_kt` | Displaced at high kt. | 2.95 |
| `max_change_kt` | Max change kt. | 0.6 |
| `scenario` | Scenario. | D-BENCH |
| `year` | Year. | 2035 |
| `notes` | Notes. | One assumption varied at a time; all else at D-BENCH values. |

### target_product_profiles.csv

Ten target product profiles: first buyers, channel, price and protein targets, format, label, what to avoid and the cheapest first test (chapter 25).

Rows: 11. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TPP-01 |
| `product` | Product. | Domestic textured soy or soy-gluten protein (dry granules, slices, chunks) |
| `first_buyers` | First buyers. | Chay makers (An Nhien, Au Lac, Thoai An, LC Foods, SG Food); frozen chay ... |
| `channel` | Channel. | Business to business; distributors for small buyers |
| `price_target` | Price target. | At or below Chinese landed textured protein: USD 1.24 per kg FOB in 2025 ... |
| `protein_target` | Protein target. | 50 to 70% protein as sold; lets finished chay foods reach 10 to 12 g per 100 g |
| `format_and_function` | Format and function. | Granules of 4 to 7 mm, slices and chunks; 20 to 25 kg bags; rehydration ... |
| `label_and_claims` | Label and claims. | Non-GMO; halal certificate for exporters; certificate of analysis; traceable ... |
| `avoid` | Avoid. | Premium pricing; building a consumer brand before supplying makers |
| `demand_evidence` | Demand evidence. | Revealed: China-reported plant-protein shipments to Vietnam rose from 18,375 ... |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `related_plays` | Related plays. | T1 |
| `cheapest_first_test` | Cheapest first test. | Trials with three chay makers in 20 to 25 kg lots; declaration-level customs ... |
| `source_ids` | Semicolon-separated source IDs. | BUY-02; BUY-07; FORM-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |

### play_demand_check.csv

The ten plays of chapter 26 checked against demand evidence: v0.2 market pull, demand view, first buyers and demand-side kill tests.

Rows: 10. Columns: 11.

| Column | Meaning | Example |
|---|---|---|
| `play_id` | Play id. | T1 |
| `name` | Name. | Domestic textured plant protein |
| `market_pull_v0_2` | Market-pull score from `plays.csv` (unchanged since v0.2). | 4 |
| `market_pull_demand_view` | Market pull demand view. | 5 |
| `change` | Change. | up |
| `demand_evidence` | Demand evidence. | Revealed: China-reported plant-protein shipments nearly tripled 2019 to ... |
| `demand_evidence_type` | stated, revealed, tested or inferred (v0.3 demand evidence type). | revealed |
| `first_buyers` | First buyers. | An Nhien, Au Lac, Thoai An, LC Foods, SG Food; Cholimex, CJ Cau Tre, Vissan ... |
| `demand_kill_test` | Demand kill test. | Domestic ex-factory cost stays above Chinese landed cost; three chay makers ... |
| `source_ids` | Semicolon-separated source IDs. | BUY-02; FORM-01; CHN-41 |
| `note_v0_4` | Changes proposed by the actor check (v0.4), recorded as text; `plays.csv` keeps the v0.2 scores. | Proposed supply-score changes, recorded as text only ... |

### demand_moves.csv

Twenty-one measurement, public-good and policy moves (nineteen from v0.3, two added in v0.4) on the demand side, with who, indicative cost and timing (chapter 25).

Rows: 21. Columns: 9.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DMV-01 |
| `type` | Type. | measurement |
| `move` | Move. | Add a chay-day question to a probability survey (household living standards ... |
| `who` | Who. | NSO; National Institute of Nutrition; funders |
| `indicative_cost` | Indicative cost. | Low (tens of thousands of USD) |
| `why_it_matters` | Why it matters. | Sizes Vietnam's largest plant-protein occasion and the cheapest displacement ... |
| `timing` | Timing. | 2027 |
| `source_ids` | Semicolon-separated source IDs. | CHY-06 |
| `who_would_pay` | Named funder or budget whose stated scope fits the move, or why none was found (added in v0.4). | No philanthropic payer found: Nova Vista excludes culture change ... |

## Files added in the actor check and expansion waves (v0.4)

Built on 25 and 26 September 2026 from the actor check and the expansion lines of waves 7 to 9 (`working-papers/wave7/` to `wave9/`). Each file keeps the columns of its working-paper table, with a `record_id` first; demand rows carry `demand_evidence_type`. Version 0.4 also changed rows or added columns in existing files: `target_product_profiles.csv` (TPP-11 added), `play_demand_check.csv` (`note_v0_4`), `demand_moves.csv` (DMV-20 and DMV-21, `who_would_pay`), `launches_exits.csv`, `buyer_map.csv`, `buyer_segments.csv`, `channel_ranking.csv`, `meal_programmes.csv`, `retail_structure.csv`, `export_base.csv`, `destination_markets.csv`, `market_access.csv`, `tariffs.csv`, `instruments.csv`, `routes.csv`, `policy_options.csv`, `plays.csv` (text fields only), `glossary.csv`, `open_questions.csv`, `disagreements.csv` and `sources.csv`. The demand model files are unchanged.

| File | Rows | Purpose |
|---|---|---|
| actor_register.csv | 80 | Actor register of the v0.4 actor check: 80 named funders, investors and startups, incumbents, and policy and international bodies, with their stated interests and demand relevance. |
| actor_questions.csv | 118 | Demand questions derived for each actor, with where and how well Part III (v0.3) answered them and whether a better answer would change the actor's decision. |
| public_meal_rules.csv | 13 | Rules that govern protein on public plates (schools, canteens, hospitals, army): issuer, date, binding status and what each says about plant protein, animal share and supplier documents. |
| menu_authority.csv | 7 | Who sets norms and prices, writes menus, approves them and selects suppliers in schools, factory canteens and hospitals. |
| school_menu_weeks.csv | 48 | Coded published menus: 48 school-weeks from 22 primary schools in Ho Chi Minh City, Hanoi and Hai Phong (2025 to 2026), with plant-protein days and rule compliance. |
| public_meal_protein_cost.csv | 15 | Cost of 25 g of protein and of a school portion from tofu, eggs, meats and textured soy. |
| upland_school_weeks.csv | 22 | Coded published menus from 13 ethnic-minority boarding schools in five upland provinces (22 school-weeks, 2026): meals with and without animal food and the lead protein. |
| canteen_dishes.csv | 172 | Protein dishes on five industrial caterers' published sample menus (172 dishes, 2023 to 2025), coded by lead protein source. |
| canteen_dish_summary.csv | 9 | Species and plant shares of canteen protein dishes by caterer group. |
| protein_tariffs_preferential.csv | 12 | Import duty on protein ingredients and plant-milk lines: MFN against ACFTA, RCEP, ATIGA and AKFTA rates, 2025 to 2027. |
| plant_milk_excise.csv | 5 | Status of soy, nut, oat and rice milks under the sugary-drink excise (Law 66/2025/QH15) and the standards it cites. |
| plant_milk_sugar.csv | 17 | Total sugar, added sugar and protein of leading plant milks from labels, against the 5 g per 100 ml excise threshold. |
| demand_funder_units.csv | 190 | Demand model routes restated in funder units: animals spared by species, CO2e avoided and meals shifted, D-BENCH and D-STRETCH, 2030 to 2050. |
| impact_per_tonne.csv | 8 | Meat displaced, animals spared and CO2e avoided per tonne of protein delivered, by route. |
| funder_profiles.csv | 18 | Scope, exclusions, geography and metrics of funders and investors checked for fit with the demand moves and product profiles. |
| funder_fit.csv | 522 | Fit matrix: each demand move and target product profile against each funder (fits, partial, excluded, not in geography), with the reason. |
| funder_route_guide.csv | 6 | Which routes each type of funder should look at or avoid, and in which unit. |
| corporate_commitments.csv | 27 | Plant-based, protein-diversification and welfare commitments of companies operating in Vietnam, their metric and whether they cover Vietnam. |
| private_label.csv | 23 | Retailer private-label programmes and chay or plant SKUs, with prices, protein and co-packers. |
| b2b_competitor_prices.csv | 28 | Prices of plant and animal protein products inside the business-to-business channels Part III recommends (HoReCa platforms, distributors). |
| t1_cost_per_kg.csv | 12 | Full cost per tonne of domestic dry textured soy for 0.5 and 1 t per hour lines at three utilisation levels and two cost cases. |
| t1_margin_payback.csv | 12 | Capex, working capital, margin and payback of a domestic textured-soy line at Chinese landed-price parity. |
| t1_landed_competitor.csv | 10 | Landed cost in Vietnam of Chinese, Indian and Serbian textured protein and gluten, 2025. |
| t1_equipment_listings.csv | 10 | Listed prices of dry textured vegetable protein extrusion lines from equipment makers (list prices, not quotes). |
| firm_outcomes.csv | 31 | Outcomes of 24 alternative-protein firms in Vietnam and Southeast Asia, 2019 to 2026: first channel, revenue model, funding and status. |
| firm_base_rates.csv | 14 | Base rates of survival and pivot by first channel and firm type. |
| diet_quality_vietnam.csv | 112 | Global Diet Quality Project indicators for Vietnam (Gallup, 1,007 adults, 2021): previous-day intake of pulses, soy foods, meats and other groups by subgroup. |
| trade_seasonal_summary.csv | 29 | Seasonality of monthly plant-protein imports (HS 2106.10, 3504, 1109) around Tet and Vu Lan, 2019 to 2025. |
| label_rules.csv | 20 | Label, claim and product-standard rules that bear on Part III products: protein claims, meat product standards, vegetarian definitions, names and GMO labels. |
| protein_claim_eligibility.csv | 43 | Which audited foods already meet the source-of-protein and high-protein claim conditions of TCVN 14429:2025. |
| feed_buyer_register.csv | 19 | Feed mills, integrators and standard setters: stated ingredient strategy, microbial protein trials or purchases and certification status. |
| inactive_yeast_trade.csv | 14 | Vietnam's imports and exports of inactive yeast and dead single-cell organisms (HS 2102.20), 2019 to 2025: the revealed price of microbial feed ingredients. |
| asc_feed_mills.csv | 23 | Vietnamese feed mills on the ASC feed register (September 2026). |
| t2_price_per_performance.csv | 15 | Gain a microbial feed ingredient must deliver to justify its price against imported bulk yeast, by species and inclusion. |
| export_buyer_register.csv | 20 | Foreign retailers, importers and makers that could buy plant-based or protein products from Vietnam: targets, progress and sourcing. |
| retailer_protein_split.csv | 25 | European retailers' plant-to-animal protein targets and reported progress. |
| wrapped_food_trade.csv | 230 | Partner-reported imports of Vietnamese stuffed pasta and related lines by market, against China and Thailand. |
| protein_quality.csv | 19 | DIAAS and PDCAAS of plant, blended and animal protein foods by age pattern. |
| protein_food_micronutrients.csv | 19 | Protein, zinc, iron, vitamin B12 and sodium of plant and animal protein foods. |
| cost_per_quality_protein.csv | 19 | Cost of 25 g of DIAAS-adjusted protein and of zinc from school-meal protein sources. |
| nutrition_trials.csv | 11 | Trials of soy, legume or plant protein in school or complementary feeding and their results. |
| hybrid_savings.csv | 144 | Processor saving from replacing lean meat with extenders in cha lua and sausages at low, median and high hog prices. |
| hybrid_prize.csv | 20 | Extender tonnage, processor savings and meat protein removed at Vissan and national scale. |
| hybrid_sensory_limits.csv | 12 | Sensory and quality limits of plant protein extension in pork products from published studies. |
| filler_trust_register.csv | 47 | Dated register (2015 to 2026) of press, enforcement and seller claims on fillers in meat products and on fake or contaminated chay. |
| marketplace_sku_counters.csv | 96 | Units-sold counters, prices and protein of 96 SKUs on Lazada and Tiki (read logged out, 25 September 2026). |
| kitchen_platform_counters.csv | 185 | Units-sold counters of milk, chay and protein SKUs on a HoReCa supplier platform and other sites with counters. |
| origin_rules_by_agreement.csv | 12 | Product-specific rules of origin for dumplings, food preparations and textured protein under EVFTA, UKVFTA, CPTPP and RCEP. |
| export_tariff_at_stake.csv | 20 | MFN duty against Vietnam's preferential duty on wrapped foods and protein lines in export markets. |
| expansion_lines.csv | 20 | Register of the actor check and the sixteen expansion lines in waves 7 to 9: question, kind, method, yield class, what changed, next step and whether further desk work would be noise. |

### actor_register.csv

Actor register of the v0.4 actor check: 80 named funders, investors and startups, incumbents, and policy and international bodies, with their stated interests and demand relevance.

Rows: 80. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | AFN-A01 |
| `actor_id` | Actor id. | AFN-A01 |
| `actor` | Actor. | Coefficient Giving (Farm Animal Welfare fund; Alternative Protein R&D RFP) |
| `audience` | Audience. | international |
| `type` | Type. | philanthropy (grantmaker) |
| `country_or_region` | Country or region. | United States; global |
| `stated_interests` | Stated interests. | Funds alternative-protein R&D to close taste and price gaps: off-flavour reducti ... |
| `key_quote` | Key quote. | Taste and price represent the biggest barriers to mainstream adoption |
| `vietnam_or_sea_focus` | Vietnam or sea focus. | No country named. Emerging economies are a stated priority for movement building ... |
| `demand_relevance` | Demand relevance. | Medium. Asks R&D applicants for 'a credible pathway to industry uptake', so a Vi ... |
| `source_ids` | Semicolon-separated source IDs. | AFN-01; AFN-02; AFN-03; AFN-07 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `notes` | Notes, caveats and our calculations. | Grants database could not be searched from here (HTTP 403), so Vietnamese grants ... |

### actor_questions.csv

Demand questions derived for each actor, with where and how well Part III (v0.3) answered them and whether a better answer would change the actor's decision.

Rows: 118. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | AFN-Q01 |
| `question_id` | Question id. | AFN-Q01 |
| `actor_ids` | Actor ids. | AFN-A02; AFN-A01 |
| `audience` | Audience. | international |
| `question` | Question. | Is there a Vietnamese public body that buys meals at scale (schools, factory can ... |
| `decision_it_informs` | Decision it informs. | Whether a market-shaping funder backs procurement advocacy in Vietnam or keeps t ... |
| `part_vi_coverage` | Part vi coverage. | partly |
| `where_in_part_vi` | Where in part vi. | ch15.3; app-d4 D4.4; ch25.4 DMV-17; OQ-219, OQ-220, OQ-228 |
| `evidence_strength` | Evidence strength. | moderate |
| `better_answer_changes_decision` | Better answer changes decision. | yes |
| `decision_value` | Decision value. | High |
| `notes` | Notes, caveats and our calculations. | Part III sizes schools (Hanoi) and canteens and cites Dispatch 64, but gives no d ... |

### public_meal_rules.csv

Rules that govern protein on public plates (schools, canteens, hospitals, army): issuer, date, binding status and what each says about plant protein, animal share and supplier documents.

Rows: 13. Columns: 22.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PMR-R01 |
| `rule_id` | Rule id. | PMR-R01 |
| `instrument` | Instrument. | Decision 3958/QĐ-BYT school meal nutrition guidance |
| `issuer` | Issuer. | Ministry of Health |
| `date` | Date. | 2025-12-25 |
| `scope` | Scope. | General schools that serve meals, boarding and semi-boarding schools; preschools ... |
| `binding_status` | Binding status. | guidance (Hướng dẫn); effective on signing; no sanction |
| `protein_sources_named` | Protein sources named. | Meat, poultry, fish, shrimp, eggs, milk named as high biological value; beans, p ... |
| `plant_protein_rule` | Plant protein rule. | Plant protein (đậu các loại, đậu phụ: legumes, tofu) at least 2 times a week, al ... |
| `animal_share_rule` | Animal share rule. | None (protein 13 to 20% of energy, no animal share) |
| `processed_food_rule` | Processed food rule. | Limit processed meat, sausages, lạp xưởng and fried foods as sources of saturate ... |
| `soy_or_meat_substitute_mention` | Soy or meat substitute mention. | Tofu, soybeans, soy milk, legumes, peanuts and sesame appear in the 139-item foo ... |
| `portion_or_nutrient_norms` | Portion or nutrient norms. | Vegetables 80 to 120 g (primary); energy needs by age (Appendix 1); lunch 30 to  ... |
| `cost_norms` | Cost norms. | None |
| `supplier_documents` | Supplier documents. | Food Safety Law only |
| `menu_authority` | Menu authority. | Schools compute menus; MOET to update menu-building software to this guidance |
| `restricts_processed_plant_protein` | Restricts processed plant protein. | No explicit restriction; appendices say iron absorption rises with 30 to 90 g of ... |
| `source_ids` | Semicolon-separated source IDs. | AIB-39; APR-04 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Read in full (15 pages including appendices); the body jumps from section V to V ... |

### menu_authority.csv

Who sets norms and prices, writes menus, approves them and selects suppliers in schools, factory canteens and hospitals.

Rows: 7. Columns: 13.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PMR-A01 |
| `setting` | Setting. | National norms |
| `who_sets_norms_and_price` | Who sets norms and price. | MOH (Decision 3958); MOET (Decision 2195; bán trú circular due 2026 under Decisi ... |
| `who_writes_menus` | Who writes menus. | Not applicable |
| `who_approves` | Who approves. | Not applicable |
| `who_selects_suppliers` | Who selects suppliers. | Not applicable |
| `tools` | Tools. | Ajinomoto, MOET and NIN menu software; MOET digital menu tools due 2027 to 2028 |
| `what_is_published` | What is published. | Directive 33: daily menus, invoices and tray photos |
| `source_ids` | Semicolon-separated source IDs. | AIB-39; PMR-01; PMR-02; PMR-03; AFN-46 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Norms are guidance; the software adds an animal-share standard the guidance does ... |

### school_menu_weeks.csv

Coded published menus: 48 school-weeks from 22 primary schools in Ho Chi Minh City, Hanoi and Hai Phong (2025 to 2026), with plant-protein days and rule compliance.

Rows: 48. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | SMW-001 |
| `school_week_id` | School week id. | HCM-NBK-W2 |
| `province` | Province. | Ho Chi Minh City |
| `school_en` | School en. | Nguyen Binh Khiem Primary (Sai Gon ward) |
| `week_start` | Week start. | 2026-09-14 |
| `menu_author` | Menu author. | not stated |
| `days` | Days. | 5 |
| `days_with_plant_protein` | Days with plant protein. | 0 |
| `meets_plant_twice_weekly` | Meets plant twice weekly. | no |
| `days_with_fish_or_seafood` | Days with fish or seafood. | 1 |
| `meets_fish_2_to_3_weekly` | Meets fish 2 to 3 weekly. | no |
| `days_with_minced_or_processed_meat_or_fish` | Days with minced or processed meat or fish. | 0 |
| `price_per_meal_vnd` | Price per meal VND. |  |
| `source_ids` | Semicolon-separated source IDs. | PMR-10 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | rules tested against Decision 3958/QĐ-BYT (AIB-39); plant days count tofu, legum ... |

### public_meal_protein_cost.csv

Cost of 25 g of protein and of a school portion from tofu, eggs, meats and textured soy.

Rows: 15. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PMR-C01 |
| `protein_source` | Protein source. | Tofu, household average paid (VHLSS 2024) |
| `vnd_per_100g_protein` | Vnd per 100g protein. | 19,600 |
| `vnd_per_25g_protein` | Vnd per 25g protein. | 4,900 |
| `school_portion` | School portion. | 80 g tofu (school portion) |
| `protein_g_in_portion` | Protein g in portion. | 8.7 |
| `vnd_per_portion` | Vnd per portion. | 1,712 |
| `source_ids` | Semicolon-separated source IDs. | DIE-05; DIE-12 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Household unit value; closest to what a local kitchen pays (our calculation) |

### upland_school_weeks.csv

Coded published menus from 13 ethnic-minority boarding schools in five upland provinces (22 school-weeks, 2026): meals with and without animal food and the lead protein.

Rows: 22. Columns: 22.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | USW-001 |
| `school_week_id` | School week id. | S01-2026-09-07 |
| `school_en` | School en. | Muong Nhe PTDTBT lower secondary |
| `province` | Province. | Dien Bien |
| `school_group` | School group. | semi-boarding (PTDTBT) |
| `meals_coded` | Meals coded. | 15 |
| `lunches` | Lunches. | 5 |
| `dinners` | Dinners. | 5 |
| `breakfasts` | Breakfasts. | 5 |
| `main_meals_with_meat_fish_or_egg_dish` | Main meals with meat fish or egg dish. | 10 |
| `main_meals_little_or_no_animal_food` | Main meals little or no animal food. | 0 |
| `main_meals_without_meat` | Main meals without meat. | 1 |
| `breakfasts_little_or_no_animal_food` | Breakfasts little or no animal food. | 5 |
| `breakfasts_no_animal_food` | Breakfasts no animal food. | 2 |
| `main_meals_with_tofu_or_legume` | Main meals with tofu or legume. | 2 |
| `lunches_with_pork` | Lunches with pork. | 5 |
| `textured_soy_or_mock_meat` | Textured soy or mock meat. | 0 |
| `source_ids` | Semicolon-separated source IDs. | UPL-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | menu plan; fixed weekly cycle repeated |

### canteen_dishes.csv

Protein dishes on five industrial caterers' published sample menus (172 dishes, 2023 to 2025), coded by lead protein source.

Rows: 172. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | UPL-C001 |
| `caterer` | Caterer. | Hoang Kim |
| `region` | Region. | South (Binh Duong) |
| `price_tier_vnd` | Price tier VND. | 20000 |
| `menu` | Menu. | sample tray Binh Duong |
| `slot` | Slot. | main |
| `dish_vi` | Dish vi. | Thịt kho trứng |
| `lead_source` | Lead source. | pork |
| `other_sources` | Other sources. | egg |
| `plant_protein_lead` | Plant protein lead. | no |
| `tofu_any` | Tofu any. | no |
| `plant_only_dish` | Plant only dish. | no |
| `textured_soy_or_mock_meat` | Textured soy or mock meat. | no |
| `minced_or_processed_meat` | Minced or processed meat. | no |
| `source_ids` | Semicolon-separated source IDs. | UPL-27 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | caterer's published sample menu dated 2024-02-25; marketing, not a served-menu r ... |

### canteen_dish_summary.csv

Species and plant shares of canteen protein dishes by caterer group.

Rows: 9. Columns: 22.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | CDS-001 |
| `group` | Group. | all caterers, dish-weighted |
| `protein_dishes` | Protein dishes. | 172 |
| `pork_pct` | Pork (%). | 33.1 |
| `chicken_pct` | Chicken (%). | 13.4 |
| `duck_pct` | Duck (%). | 0.6 |
| `beef_pct` | Beef (%). | 5.8 |
| `fish_pct` | Fish (%). | 25.6 |
| `seafood_pct` | Seafood (%). | 2.3 |
| `egg_pct` | Egg (%). | 9.9 |
| `tofu_led_pct` | Tofu led (%). | 8.7 |
| `other_animal_pct` | Other animal (%). | 0.6 |
| `plant_only_pct` | Plant only (%). | 2.9 |
| `tofu_any_pct` | Tofu any (%). | 9.3 |
| `pork_share_of_meat_led_pct` | Pork share of meat led (%). | 62.6 |
| `poultry_share_of_meat_led_pct` | Poultry share of meat led (%). | 26.4 |
| `beef_share_of_meat_led_pct` | Beef share of meat led (%). | 11.0 |
| `source_ids` | Semicolon-separated source IDs. | UPL-27;UPL-28;UPL-29;UPL-30;UPL-32 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | our calculation; lead source of each protein dish on caterers' published sample  ... |

### protein_tariffs_preferential.csv

Import duty on protein ingredients and plant-milk lines: MFN against ACFTA, RCEP, ATIGA and AKFTA rates, 2025 to 2027.

Rows: 12. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FTR-TR-01 |
| `hs_code` | Hs code. | 2106.10.00 |
| `description` | Description. | Protein concentrates and textured protein substances |
| `relevance` | Relevance. | Imported textured soy and soy concentrate (T1 competitor); some isolates |
| `mfn_rate` | Mfn rate. | 5% |
| `acfta_china_2025_2026_2027` | Acfta china 2025 2026 2027. | 0%; 0%; 0% |
| `rcep_china_2025_2026_2027` | Rcep china 2025 2026 2027. | 0%; 0%; 0% |
| `atiga_asean` | Atiga asean. | 0% |
| `akfta_korea_2025_2026_2027` | Akfta korea 2025 2026 2027. | 0%; 0%; 0% |
| `rcep_asean_2026` | Rcep asean 2026. | 0% |
| `evfta_eu_2026` | Evfta eu 2026. | 0% |
| `cptpp_2026` | Cptpp 2026. | 0% |
| `vat_2026` | Vat 2026. | 8% (our reading of Decree 174/2025; reduced rate to 31 Dec 2026) |
| `vat_2027` | Vat 2027. | 10% |
| `source_ids` | Semicolon-separated source IDs. | FTR-32; FTR-33; FTR-37; COST-24; REG2-20 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | n/a (rule or tariff, not demand) |
| `notes` | Notes, caveats and our calculations. | Package used the 5% MFN rate. Chinese product with a Form E or RCEP certificate  ... |

### plant_milk_excise.csv

Status of soy, nut, oat and rice milks under the sugary-drink excise (Law 66/2025/QH15) and the standards it cites.

Rows: 5. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FTR-EX-01 |
| `product_type` | Product type. | Dairy milk and dairy drinks, including sweetened and flavoured UHT milk |
| `example_brands` | Example brands. | Vinamilk, TH true MILK, Dutch Lady |
| `hs_code_vn` | Hs code vn. | 0401; 0402; 2202.99.10 |
| `national_standard` | National standard. | Dairy standards (TCVN 11216:2015 vocabulary; committee TCVN/TC/F12) |
| `food_safety_regulation_declared` | Food safety regulation declared. | QCVN 5-1:2010/BYT (dairy; not read) |
| `named_in_tcvn_12828_scope` | Named in tcvn 12828 scope. | no |
| `excluded_by_tcvn_12828` | Excluded by tcvn 12828. | yes: "Sữa và sản phẩm từ sữa" |
| `likely_excise_status_2027` | Likely excise status 2027. | exempt |
| `basis` | Basis. | TCVN 12828:2019 scope excludes milk and milk products; Decree 360/2025 adopts TC ... |
| `source_ids` | Semicolon-separated source IDs. | FTR-01; FTR-02; FTR-05; APR-22 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Exempt however much sugar it contains. |

### plant_milk_sugar.csv

Total sugar, added sugar and protein of leading plant milks from labels, against the 5 g per 100 ml excise threshold.

Rows: 17. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FTR-SG-01 |
| `brand` | Brand. | Vinasoy |
| `product` | Product. | Fami Nguyên Chất (original soy milk) |
| `format` | Format. | 200 ml and 1 L carton |
| `total_sugar_g_per_100ml` | Total sugar g per 100ml. | 9.3 |
| `added_sugar_pct_ingredient_list` | Added sugar (%) ingredient list. | 8.5 |
| `carbohydrate_g_per_100ml` | Carbohydrate g per 100ml. | 9.4 |
| `protein_g_per_100ml` | Protein g per 100ml. | 2.2 |
| `energy_kcal_per_100ml` | Energy kcal per 100ml. | 59 |
| `declared_standards` | Declared standards. | QCVN 6-2:2010/BYT; TCVN 12443:2018 |
| `declaration_date` | Declaration date. | 2025 (10NS) |
| `above_5g_threshold` | Above 5g threshold. | yes |
| `retail_price_vnd_per_litre_sep_2026` | Retail price VND per litre sep 2026. | 22900 |
| `price_2027_if_taxed_vnd_per_litre` | Price 2027 if taxed VND per litre. | 24732 |
| `price_2028_if_taxed_vnd_per_litre` | Price 2028 if taxed VND per litre. | 25190 |
| `source_ids` | Semicolon-separated source IDs. | FTR-18; FORM-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Label read by OCR and checked against energy (our calculation). Price is RDS-036 ... |

### demand_funder_units.csv

Demand model routes restated in funder units: animals spared by species, CO2e avoided and meals shifted, D-BENCH and D-STRETCH, 2030 to 2050.

Rows: 190. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DFU-001 |
| `scenario` | Scenario. | D-BENCH |
| `year` | Year. | 2030 |
| `route` | Route. | R2 |
| `indicator` | Indicator. | added_chay_person_days |
| `value` | Value. | 0.0 |
| `low` | Low. |  |
| `high` | High. |  |
| `unit` | Unit. | million person-days a year |
| `source_ids` | Semicolon-separated source IDs. | demand_outputs.csv; demand_assumptions.csv |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Meat-free person-days added by extra chay days (displaced / (meat protein per pe ... |

### impact_per_tonne.csv

Meat displaced, animals spared and CO2e avoided per tonne of protein delivered, by route.

Rows: 8. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | IPT-001 |
| `route` | Route. | R1 import substitution (TPP-01 into chay) |
| `related_profiles` | Related profiles. | TPP-01 |
| `delivered_protein_replaces` | Delivered protein replaces. | imported textured soy and gluten (like for like) |
| `net_displacement_factor` | Net displacement factor. | 0.0 |
| `meat_protein_displaced_t_per_t_protein` | Meat protein displaced t per t protein. | 0.00 |
| `carcass_displaced_t` | Carcass displaced t. | 0.00 |
| `pigs_spared` | Pigs spared. | 0.0 |
| `poultry_spared` | Poultry spared. | 0 |
| `cattle_buffalo_spared` | Cattle buffalo spared. | 0.00 |
| `co2e_net_t_soy_replacement` | Co2e net t soy replacement. | about 0 (like for like) |
| `co2e_net_t_fungal_replacement` | Co2e net t fungal replacement. | sign unknown (fungal 3.8 to 38.4 against soy 1.3 to 19.8 per t protein) |
| `source_ids` | Semicolon-separated source IDs. | FUF-03; FUF-04; FUF-05; FUF-07; QNT-10; demand_assumptions.csv |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Per tonne of protein delivered, 2035 national mix (our calculation). Negative CO ... |

### funder_profiles.csv

Scope, exclusions, geography and metrics of funders and investors checked for fit with the demand moves and product profiles.

Rows: 18. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | F01 |
| `funder_id` | Funder id. | F01 |
| `funder` | Funder. | Nova Vista Foundation (Protein Innovation RFP) |
| `type` | Type. | market-shaping and policy philanthropy (climate) |
| `scope` | Scope. | Policy (public R&D funding, novel-food pathways, labelling defence); market shap ... |
| `exclusions` | Exclusions. | Direct R&D; culture change and consumer awareness; ultra-processed food policy;  ... |
| `geography` | Geography. | Funds globally; priority Japan, South Korea, Germany, Nordics; Vietnam not named ... |
| `metric` | Metric. | Outcomes in the world with a named decision-maker, a reason and a window; climat ... |
| `status_2026` | Status 2026. | USD 10 million; USD 100,000 to 750,000 a year; phase 1 closed 15 Sep 2026; decis ... |
| `source_ids` | Semicolon-separated source IDs. | AFN-04; AFN-05 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | From the funder's own pages as read by the wave 7 actor check or this line. |

### funder_fit.csv

Fit matrix: each demand move and target product profile against each funder (fits, partial, excluded, not in geography), with the reason.

Rows: 522. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FFT-001 |
| `item_id` | Item id. | DMV-01 |
| `item` | Item. | Chay-day question in a probability survey |
| `funder_id` | Funder id. | F01 |
| `funder` | Funder. | Nova Vista Foundation (Protein Innovation RFP) |
| `fit` | Fit. | excluded |
| `reason` | Reason. | Measures a culture-change route (chay days); culture change and individual diet  ... |
| `source_ids` | Semicolon-separated source IDs. | AFN-04; AFN-05; demand_moves.csv |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | Funder's stated scope read against the item; 'stated' is the funder's stated pri ... |

### funder_route_guide.csv

Which routes each type of funder should look at or avoid, and in which unit.

Rows: 6. Columns: 12.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FRG-001 |
| `funder_type` | Funder type. | Welfare and diet-change funders and implementers |
| `example_funders` | Example funders. | ACE-recommended programmes (Sinergia Animal, Good Food Fund); ReRoot Asia; Lever ... |
| `unit_they_count` | Unit they count. | Meals replaced per USD; animals spared per USD |
| `routes_to_look_at` | Routes to look at. | R4 canteens, replacing chicken dishes first (about 2,760 birds per t of protein  ... |
| `routes_to_avoid` | Routes to avoid. | R1 import substitution and R2 upgrades on existing chay days (no animals spared) ... |
| `vietnam_status_2026` | Vietnam status 2026. | Weak: ReRoot, Lever, Sinergia and Good Food Fund do not cover Vietnam; ACE Movem ... |
| `source_ids` | Semicolon-separated source IDs. | AFN-06; AFN-23; AFN-26; AFN-27; AFN-29; AFN-39; FUF-01; FUF-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | Per meal, the Vietnamese national mix spares about 0.02 animals against 0.134 in ... |

### corporate_commitments.csv

Plant-based, protein-diversification and welfare commitments of companies operating in Vietnam, their metric and whether they cover Vietnam.

Rows: 27. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | CMT-01 |
| `company` | Company. | Accor |
| `company_type` | Company type. | hotel group |
| `vietnam_presence` | Vietnam presence. | Yes: 43 hotels (10,662 keys) operating in October 2024; Mercure Nha Trang (124 r ... |
| `commitment_type` | Commitment type. | plant-based menu |
| `commitment` | Commitment. | 50% vegetarian or plant-based dishes in menus |
| `metric` | Metric. | share of dishes, averaged over the hotel's whole food offer |
| `target` | Target. | 50%; France at least 20% by 2027; Novotel 25% by 2026 |
| `deadline` | Deadline. | 2030 |
| `scope` | Scope. | all hotels, managed and franchised, all brands |
| `covers_vietnam` | Covers vietnam. | yes (policy applies to all hotels) |
| `progress_reported` | Progress reported. | By November 2024: 72% of Americas hotels offered plant-based options; Novotel at ... |
| `apb100_tier_2026` | Apb100 tier 2026. | not assessed (not an Asian listed company) |
| `source_ids` | Semicolon-separated source IDs. | AFN-40; AFN-41; AFN-18 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | Only quantified plant-based menu target found that binds hotels in Vietnam. Metr ... |

### private_label.csv

Retailer private-label programmes and chay or plant SKUs, with prices, protein and co-packers.

Rows: 23. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PL-01 |
| `retailer` | Retailer. | Saigon Co.op |
| `programme_or_sku` | Programme or sku. | Private-label programme (Co.op Happy, Co.op Select, Co.op Finest) |
| `record_type` | Record type. | programme |
| `category` | Category. | all |
| `pack_size_g` | Pack size g. |  |
| `price_vnd` | Price VND. |  |
| `vnd_per_kg` | Vnd per kg. |  |
| `protein_g_per_100g` | Protein g per 100g. |  |
| `protein_basis` | Protein basis. |  |
| `vnd_per_100g_protein` | Vnd per 100g protein. |  |
| `main_protein_ingredient` | Main protein ingredient. |  |
| `manufacturer_named` | Manufacturer named. | more than 100 Vietnamese manufacturers |
| `availability_2026_09_25` | Availability 2026 09 25. | active |
| `source_ids` | Semicolon-separated source IDs. | AIB-28; AIB-29 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated |
| `notes` | Notes, caveats and our calculations. | More than 2,500 private-label SKUs; 15 to 30% below comparable brands; retailer  ... |

### b2b_competitor_prices.csv

Prices of plant and animal protein products inside the business-to-business channels Part III recommends (HoReCa platforms, distributors).

Rows: 28. Columns: 21.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | B2B-01 |
| `channel_or_supplier` | Channel or supplier. | Kamereo |
| `channel_type` | Channel type. | HoReCa B2B platform |
| `product` | Product. | Heo xay chay Meat Zero 1 kg (plant-based minced pork) |
| `brand_or_maker` | Brand or maker. | CP Meat Zero |
| `origin` | Origin. | Thailand |
| `format` | Format. | frozen |
| `pack_size_g` | Pack size g. | 1000 |
| `listed_price_vnd` | Listed price VND. | 244000 |
| `vnd_per_kg` | Vnd per kg. | 244000 |
| `availability_2026_09_25` | Availability 2026 09 25. | out of stock; not orderable |
| `units_sold_counter` | Units sold counter. | 16 |
| `protein_g_per_100g` | Protein g per 100g. |  |
| `protein_basis` | Protein basis. | not visible |
| `vnd_per_100g_protein` | Vnd per 100g protein. |  |
| `vnd_per_20g_protein` | Vnd per 20g protein. |  |
| `source_ids` | Semicolon-separated source IDs. | AIS-25; CPC-12 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | To cost less per gram of protein than CP minced pork on the same platform it wou ... |

### t1_cost_per_kg.csv

Full cost per tonne of domestic dry textured soy for 0.5 and 1 t per hour lines at three utilisation levels and two cost cases.

Rows: 12. Columns: 27.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TCK-001 |
| `line_t_per_h` | Line t per h. | 0.5 |
| `utilisation` | Utilisation. | 0.5 |
| `output_t_per_year` | Output t per year. | 2000 |
| `cost_case` | Cost case. | low |
| `raw_material_usd_per_t` | Raw material USD per t. | 646 |
| `electricity_usd_per_t` | Electricity USD per t. | 11 |
| `dryer_heat_usd_per_t` | Dryer heat USD per t. | 7 |
| `water_usd_per_t` | Water USD per t. | 2 |
| `packaging_usd_per_t` | Packaging USD per t. | 10 |
| `outbound_delivery_usd_per_t` | Outbound delivery USD per t. | 10 |
| `labour_usd_per_t` | Labour USD per t. | 50 |
| `rent_usd_per_t` | Rent USD per t. | 44 |
| `qa_overhead_usd_per_t` | Qa overhead USD per t. | 30 |
| `maintenance_usd_per_t` | Maintenance USD per t. | 6 |
| `cash_cost_usd_per_t` | Cash cost USD per t. | 816 |
| `capital_charge_usd_per_t` | Capital charge USD per t. | 17 |
| `working_capital_interest_usd_per_t` | Working capital interest USD per t. | 26 |
| `full_cost_usd_per_t` | Full cost USD per t. | 858 |
| `full_cost_vnd_per_kg` | Full cost VND per kg. | 22300.0 |
| `full_cost_vnd_per_100g_protein_at_52pct` | Full cost VND per 100g protein at 52pct. | 4290.0 |
| `raw_material_share_of_full_cost` | Raw material share of full cost. | 0.75 |
| `source_ids` | Semicolon-separated source IDs. | TIC-12; TIC-13; COST-01; COST-16; COST-17; COST-19; COST-20; COST-21; TIC-02; TI ... |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | our calculation; low case pairs all low inputs and high case all high inputs; 8, ... |

### t1_margin_payback.csv

Capex, working capital, margin and payback of a domestic textured-soy line at Chinese landed-price parity.

Rows: 12. Columns: 25.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TMP-001 |
| `line_t_per_h` | Line t per h. | 0.5 |
| `utilisation` | Utilisation. | 0.5 |
| `output_t_per_year` | Output t per year. | 2000 |
| `cost_case` | Cost case. | low |
| `installed_capex_usd` | Installed capex USD. | 276000.0 |
| `working_capital_usd_at_parity` | Working capital USD at parity. | 721000.0 |
| `price_pref0_usd_per_t` | Price pref0 USD per t. | 1289 |
| `full_cost_pref0_usd_per_t` | Full cost pref0 USD per t. | 858 |
| `gross_margin_pref0` | Gross margin pref0. | 0.47 |
| `operating_margin_pref0` | Operating margin pref0. | 0.33 |
| `payback_years_pref0` | Payback years pref0. | 1.0 |
| `price_mfn_usd_per_t` | Price mfn USD per t. | 1443 |
| `full_cost_mfn_usd_per_t` | Full cost mfn USD per t. | 861 |
| `gross_margin_mfn` | Gross margin mfn. | 0.52 |
| `operating_margin_mfn` | Operating margin mfn. | 0.4 |
| `payback_years_mfn` | Payback years mfn. | 0.8 |
| `operating_margin_vs_india_price` | Operating margin vs india price. | 0.21 |
| `breakeven_flour_usd_per_t_for_15pct_margin_pref0` | Breakeven flour USD per t for 15pct margin pref0. | 858 |
| `breakeven_flour_usd_per_t_for_15pct_margin_mfn` | Breakeven flour USD per t for 15pct margin mfn. | 982 |
| `source_ids` | Semicolon-separated source IDs. | TIC-12; BUY-02; REG2-20; TIC-02; TIC-03; TIC-07 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | our calculation; pre-tax; payback = (installed capex + working capital) / EBITDA ... |

### t1_landed_competitor.csv

Landed cost in Vietnam of Chinese, Indian and Serbian textured protein and gluten, 2025.

Rows: 10. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TLC-001 |
| `product` | Product. | textured protein and concentrates (HS 2106.10) |
| `origin` | Origin. | China |
| `fob_usd_per_kg_2025` | Fob USD per kg 2025. | 1.237 |
| `freight_insurance_share` | Freight insurance share. | 0.03 |
| `duty_basis` | Duty basis. | MFN 5% (Part III) |
| `duty_rate` | Duty rate. | 0.05 |
| `port_inland_usd_per_kg` | Port inland USD per kg. | 0.015 |
| `landed_usd_per_kg` | Landed USD per kg. | 1.353 |
| `landed_vnd_per_kg` | Landed VND per kg. | 35200.0 |
| `protein_share_assumed` | Protein share assumed. | 0.65 |
| `landed_usd_per_kg_protein` | Landed USD per kg protein. | 2.08 |
| `source_ids` | Semicolon-separated source IDs. | BUY-02; TIC-12; REG2-20; REG2-23 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed; inferred |
| `notes` | Notes, caveats and our calculations. | low freight; freight 3 to 8% and port plus inland USD 15 to 40 per t are our ass ... |

### t1_equipment_listings.csv

Listed prices of dry textured vegetable protein extrusion lines from equipment makers (list prices, not quotes).

Rows: 10. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TEL-001 |
| `maker` | Maker. | Jinan Dayi Extrusion Machinery |
| `city_province` | City province. | Jinan, Shandong |
| `models` | Models. | SLG115 |
| `product_type` | Product type. | dry TVP, single screw |
| `capacity_kg_per_h` | Capacity kg per h. | 600 to 800 |
| `installed_power_kw` | Installed power kw. | 160 |
| `consumed_power_kw` | Consumed power kw. | not stated |
| `line_includes` | Line includes. | flour mixer; single-screw extruder; cooling vibrator; recycling dryer |
| `listed_price_usd_low` | Listed price USD low. | 30000 |
| `listed_price_usd_high` | Listed price USD high. | 30000 |
| `price_basis` | Price basis. | marketplace listing, USD per set, MOQ 1, accessed 2026-09-25 |
| `source_ids` | Semicolon-separated source IDs. | TIC-05 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Company says it can make about 200 lines a month; one-year warranty; technicians ... |

### firm_outcomes.csv

Outcomes of 24 alternative-protein firms in Vietnam and Southeast Asia, 2019 to 2026: first channel, revenue model, funding and status.

Rows: 31. Columns: 24.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FO-01 |
| `firm_id` | Firm id. | FO-01 |
| `firm` | Firm. | VMEAT (Cay De Food) |
| `home_base` | Home base. | Vietnam (Ho Chi Minh City) |
| `founded` | Founded. | 2018 (R&D start) |
| `category` | Category. | plant-based meat analogue |
| `firm_type` | Firm type. | startup |
| `vietnam_link` | Vietnam link. | Vietnam-founded |
| `first_channel` | First channel. | Foodservice: F&B customers gave 70% of 2021 revenue; founders also run a chay no ... |
| `first_channel_class` | First channel class. | foodservice |
| `revenue_model_2026` | Revenue model 2026. | unknown |
| `funding_disclosed` | Funding disclosed. | Founders VND 3 billion (2018 to 2022); VND 4 billion for 49% from two Shark Tank ... |
| `funding_usd_m` | Funding USD m. | 0.27 |
| `status_2026` | Status 2026. | dormant |
| `status_basis` | Status basis. | No evidence of activity after 2022: package found none; VnExpress site search fo ... |
| `reason_given` | Reason given. | none found |
| `last_evidence` | Last evidence. | 2022 |
| `in_startup_base_rate` | In startup base rate. | yes |
| `package_link` | Package link. | launches_exits.csv LE-12; companies.csv CO-003 |
| `source_ids` | Semicolon-separated source IDs. | AIS-41; ECO-19; ECO-17; BRD-18 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Funding in USD at 26,000 VND per USD (our calculation: VND 7 billion). Over 90%  ... |

### firm_base_rates.csv

Base rates of survival and pivot by first channel and firm type.

Rows: 14. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FBR-001 |
| `measure` | Measure. | all startups and scale-ups |
| `group_type` | Group type. | total |
| `definition` | Definition. | 24 firms in the startup base rate (FO-07 has no known first channel) |
| `n_firms` | N firms. | 24 |
| `active` | Active. | 7 |
| `pivoted` | Pivoted. | 4 |
| `exited` | Exited. | 2 |
| `dormant` | Dormant. | 11 |
| `share_active_pct` | Share active (%). | 29 |
| `share_operating_pct` | Share operating (%). | 46 |
| `firm_ids` | Firm ids. | FO-01; FO-02; FO-03; FO-04; FO-05; FO-06; FO-07; FO-08; FO-09; FO-10; FO-11; FO- ... |
| `source_ids` | Semicolon-separated source IDs. | data_firm_outcomes.csv (row sources) |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-adjacent |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Our calculation. Operating = active or pivoted. For the pivot row, share_operati ... |

### diet_quality_vietnam.csv

Global Diet Quality Project indicators for Vietnam (Gallup, 1,007 adults, 2021): previous-day intake of pulses, soy foods, meats and other groups by subgroup.

Rows: 112. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | DQV-001 |
| `indicator` | Indicator. | Pulses |
| `vietnam_item_wording` | Vietnam item wording. | Q4: dried beans, soybeans, tofu, soymilk, or bean flour (đậu khô, đậu nành, đậu  ... |
| `subgroup` | Subgroup. | All |
| `value` | Value. | 40.01 |
| `lower_95_ci` | Lower 95 ci. | 35.22 |
| `upper_95_ci` | Upper 95 ci. | 44.91 |
| `unit` | Unit. | % of adults 15+ on the previous day |
| `n` | N. | 1007 |
| `fieldwork` | Fieldwork. | 13 Nov to 12 Dec 2021 |
| `derived` | Derived. | no |
| `source_ids` | Semicolon-separated source IDs. | APR-36; BRD-01; BRD-02; BRD-03 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Weighted estimate; Gallup World Poll, mobile telephone, n = 1,007, design effect ... |

### trade_seasonal_summary.csv

Seasonality of monthly plant-protein imports (HS 2106.10, 3504, 1109) around Tet and Vu Lan, 2019 to 2025.

Rows: 29. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TSS-001 |
| `series` | Series. | China exports to Viet Nam, HS 2106.10 |
| `measure` | Measure. | net weight |
| `basis` | Basis. | China-reported, FOB |
| `years` | Years. | 2019 to 2024 |
| `n_years` | N years. | 6 |
| `mean_monthly_cv` | Mean monthly cv. | 0.52 |
| `pre_vu_lan_index` | Pre vu lan index. | 1.33 |
| `years_pre_vu_lan_above_1` | Years pre vu lan above 1. | 5 of 6 |
| `pre_tet_index` | Pre tet index. | 1.17 |
| `years_pre_tet_above_1` | Years pre tet above 1. | 2 of 5 |
| `vu_lan_month_index` | Vu lan month index. | 1.03 |
| `tet_month_index` | Tet month index. | 0.38 |
| `source_ids` | Semicolon-separated source IDs. | BRD-05; BRD-07 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Pre-event index = mean of the two months before the Gregorian month holding luna ... |

### label_rules.csv

Label, claim and product-standard rules that bear on Part III products: protein claims, meat product standards, vegetarian definitions, names and GMO labels.

Rows: 20. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | LR-01 |
| `rule_id` | Rule id. | LR-01 |
| `instrument` | Instrument. | Circular 30/2026/TT-BYT (replaced Circular 29/2023/TT-BYT on 10 Jul 2026) |
| `issuer` | Issuer. | MOH |
| `date_issued` | Date issued. | 2026-07-09 |
| `in_force` | In force. | yes, from 10 Jul 2026; the 29/2023 deadline of 1 Jan 2026 carried over |
| `binding_status` | Binding status. | mandatory |
| `topic` | Topic. | nutrition labelling |
| `what_it_says` | What it says. | Pre-packaged foods must declare energy, protein, carbohydrate, fat and sodium pe ... |
| `what_it_does_not_say` | What it does not say. | No conditions for nutrient content or health claims; exempts single-ingredient f ... |
| `part_vi_items_affected` | Part vi items affected. | TPP-02; TPP-05; OQ-171; app-s9 S9.7 |
| `source_ids` | Semicolon-separated source IDs. | LBL-01; LBL-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Read as extracts. Wet-market and household chay makers are exempt as small food  ... |

### protein_claim_eligibility.csv

Which audited foods already meet the source-of-protein and high-protein claim conditions of TCVN 14429:2025.

Rows: 43. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | P105 |
| `sku_id` | Sku id. | P105 |
| `product_name` | Product name. | Há Cảo Chay Cải Bó Xôi |
| `brand` | Brand. | Cholimex |
| `product_type` | Product type. | dumpling/spring roll/bun with vegetable filling |
| `protein_g_per_100g` | Protein g per 100g. | 1.53 |
| `energy_kcal_per_100g` | Energy kcal per 100g. | 166.0 |
| `protein_g_per_100kcal` | Protein g per 100kcal. | 0.92 |
| `meets_source_per_100g` | Meets source per 100g. | no |
| `meets_high_per_100g` | Meets high per 100g. | no |
| `meets_source_any_route` | Meets source any route. | no |
| `meets_high_any_route` | Meets high any route. | no |
| `claim_on_pack` | Claim on pack. | none recorded |
| `source_ids` | Semicolon-separated source IDs. | FORM-01; LBL-03; LBL-04 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Thresholds from TCVN 14429:2025 Table 1 (source 10% of NRV per 100 g or 5% of NR ... |

### feed_buyer_register.csv

Feed mills, integrators and standard setters: stated ingredient strategy, microbial protein trials or purchases and certification status.

Rows: 19. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FBA-A01 |
| `actor_id` | Actor id. | FBA-A01 |
| `actor` | Actor. | Skretting Vietnam (Nutreco) |
| `actor_type` | Actor type. | aquafeed mill, multinational |
| `vietnam_presence` | Vietnam presence. | Thuan Dao branch, Tay Ninh (former Long An); shrimp, pangasius, tilapia, marine  ... |
| `asc_status_sep_2026` | Asc status sep 2026. | Certified 2 Jul 2025 (v1.2) |
| `stated_ingredient_strategy` | Stated ingredient strategy. | Nutreco RoadMap 2025 target of 5 to 10% novel ingredients by volume by 2025; res ... |
| `microbial_protein_trials_or_purchases` | Microbial protein trials or purchases. | None found in Vietnam. Only novel ingredient in Vietnamese commercial feed is in ... |
| `standards_targets_and_timeline` | Standards targets and timeline. | RoadMap 2025 targets missed; no replacement volume target published in the 2025  ... |
| `relevance_to_t2` | Relevance to t2. | The one named buyer with a public novel-ingredient intake route (supplier form); ... |
| `source_ids` | Semicolon-separated source IDs. | FBA-07; FBA-08; FBA-04; VCO-28 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-adjacent |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed; stated |
| `notes` | Notes, caveats and our calculations. | Group-wide figures, not Vietnam-specific; insect meal is cited as a benchmark, n ... |

### inactive_yeast_trade.csv

Vietnam's imports and exports of inactive yeast and dead single-cell organisms (HS 2102.20), 2019 to 2025: the revealed price of microbial feed ingredients.

Rows: 14. Columns: 20.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FBA-TR-2019-M |
| `year` | Year. | 2019 |
| `flow` | Flow. | imports into Vietnam |
| `hs_code` | Hs code. | 2102.20 |
| `basis` | Basis. | mirror (partner-reported exports), FOB |
| `value_usd_million` | Value USD million. | 8.28 |
| `quantity_t` | Quantity t. | 3828 |
| `unit_value_usd_per_kg` | Unit value USD per kg. | 2.16 |
| `bulk_tier_t` | Bulk tier t. | 3354 |
| `bulk_tier_value_usd_million` | Bulk tier value USD million. | 4.31 |
| `bulk_tier_unit_value_usd_per_kg` | Bulk tier unit value USD per kg. | 1.28 |
| `specialty_tier_t` | Specialty tier t. | 474 |
| `specialty_tier_value_usd_million` | Specialty tier value USD million. | 3.97 |
| `specialty_tier_unit_value_usd_per_kg` | Specialty tier unit value USD per kg. | 8.39 |
| `top_partners_by_tonnage` | Top partners by tonnage. | China 1,899 t at USD 1.19 per kg; Brazil 1,399 t at USD 1.43 per kg; France 119  ... |
| `source_ids` | Semicolon-separated source IDs. | FBA-17 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Partner-reported exports to Vietnam, FOB, all end uses (food and feed not separa ... |

### asc_feed_mills.csv

Vietnamese feed mills on the ASC feed register (September 2026).

Rows: 23. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | ASC-001 |
| `certificate_number` | Certificate number. | ASC02821 |
| `certificate_holder` | Certificate holder. | C.P. VIETNAM CORPORATION - AQUACULTURE BUSINESS BRANCH |
| `status` | Status. | Certified |
| `valid_from` | Valid from. | 18-07-2025 |
| `valid_until` | Valid until. | 17-07-2028 |
| `standard_version` | Standard version. | 1.2 |
| `production_model` | Production model. | Mass Balance |
| `species_fed` | Species fed. | Shrimp |
| `sites` | Sites. | 1 |
| `source_ids` | Semicolon-separated source IDs. | FBA-04 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | ASC Find a Feed Mill register, queried 25 Sep 2026; dates day-month-year |

### t2_price_per_performance.csv

Gain a microbial feed ingredient must deliver to justify its price against imported bulk yeast, by species and inclusion.

Rows: 15. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | FBA-PP-01 |
| `scenario_id` | Scenario id. | FBA-PP-01 |
| `species` | Species. | shrimp |
| `t2_cost_case` | T2 cost case. | low end of the indicative cost stack |
| `t2_cost_usd_per_t` | T2 cost USD per t. | 2227 |
| `comparator` | Comparator. | imported bulk inactive yeast, 2025 (FOB) |
| `comparator_price_usd_per_t` | Comparator price USD per t. | 1100 |
| `inclusion_pct` | Inclusion (%). | 1 |
| `extra_cost_usd_per_t_feed` | Extra cost USD per t feed. | 11.3 |
| `feed_price_usd_per_t` | Feed price USD per t. | 1270 to 1920 |
| `gain_needed_pct_of_feed_cost` | Gain needed (%) of feed cost. | 0.6 to 0.9 |
| `source_ids` | Semicolon-separated source IDs. | FBA-17; FM-04; COST-43; COST-44 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Our calculation: (T2 cost minus bulk yeast price) x inclusion / feed price; the  ... |

### export_buyer_register.csv

Foreign retailers, importers and makers that could buy plant-based or protein products from Vietnam: targets, progress and sourcing.

Rows: 20. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | XR-01 |
| `actor` | Actor. | Albert Heijn (Ahold Delhaize European brands) |
| `home_market` | Home market. | Netherlands; Belgium; Central and South-East Europe |
| `actor_type` | Actor type. | retailer |
| `stated_target` | Stated target. | Albert Heijn: 60% plant protein in total sales volume by 2030. Ahold Delhaize Eu ... |
| `metric_and_method` | Metric and method. | Albert Heijn: Protein Tracker, covers about 78% of sales volume. Group: weight o ... |
| `latest_reported_value` | Latest reported value. | Group European brands 45% plant-based share of protein sales |
| `latest_year` | Latest year. | 2025 |
| `progress_assessment` | Progress assessment. | Group needs about 1 point a year to 2030 (our calculation); Dutch chains' shares ... |
| `private_label_or_range` | Private label or range. | 15 hybrid products launched 2025 at or below the price of animal equivalents, co ... |
| `supplier_requirements` | Supplier requirements. | Not retrieved (ah.nl returned 403) |
| `sourcing_evidence_asia_vietnam` | Sourcing evidence asia vietnam. | None found. Vietnam named only as a coffee sourcing risk origin |
| `vietnam_link` | Vietnam link. | none found |
| `route_relevance` | Route relevance. | Target met through hybrids, pulses and national-brand mix; no pull on Asian-made ... |
| `source_ids` | Semicolon-separated source IDs. | XBA-01; XBA-13; XBA-14 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | stated; revealed |
| `notes` | Notes, caveats and our calculations. | Two metrics with different scope; do not compare the 45% group figure with Dutch ... |

### retailer_protein_split.csv

European retailers' plant-to-animal protein targets and reported progress.

Rows: 25. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PSP-01 |
| `retailer` | Retailer. | Lidl Nederland |
| `country` | Country. | Netherlands |
| `metric` | Metric. | plant share of protein sales |
| `method` | Method. | Eiweet (all foods, fixed range) |
| `year` | Year. | 2023 |
| `value` | Value. | 42.7 |
| `unit` | Unit. | % |
| `target_value` | Target value. | 60 |
| `target_year` | Target year. | 2030 |
| `progress_note` | Progress note. | Interim target 50% in 2025 |
| `source_ids` | Semicolon-separated source IDs. | XBA-02 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Restated upward after data improvement. |

### wrapped_food_trade.csv

Partner-reported imports of Vietnamese stuffed pasta and related lines by market, against China and Thailand.

Rows: 230. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | WFT-001 |
| `hs_code` | Hs code. | 190220 |
| `product` | Product. | Stuffed pasta (dumplings, wontons and similar) |
| `reporter` | Reporter. | Japan |
| `year` | Year. | 2024 |
| `flow` | Flow. | import |
| `partner` | Partner. | Vietnam |
| `value_usd_million` | Value USD million. | 12.53 |
| `net_weight_t` | Net weight t. | 1978 |
| `source_ids` | Semicolon-separated source IDs. | XBA-28 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Partner-reported imports (mirror data); CIF values; customs code C00, all transp ... |

### protein_quality.csv

DIAAS and PDCAAS of plant, blended and animal protein foods by age pattern.

Rows: 19. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | NQR-PQ01 |
| `food` | Food. | Pork cuts, hams and sausages (9 products) |
| `method` | Method. | growing pig, ileal (in vivo) |
| `diaas_older_child_adult` | Diaas older child adult. | 113 to 137 |
| `diaas_young_child_6_to_36_months` | Diaas young child 6 to 36 months. | 101 to 127 (chorizo 99) |
| `pdcaas` | Pdcaas. |  |
| `limiting_amino_acid` | Limiting amino acid. | none above 100; sulphur amino acids in chorizo (young-child pattern) |
| `diaas_used_low_older_child` | Diaas used low older child. | 100 |
| `diaas_used_high_older_child` | Diaas used high older child. | 100 |
| `source_ids` | Semicolon-separated source IDs. | NQR-07 |
| `evidence_label` | VN-direct, VN-adjacent or general. | general |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). |  |
| `notes` | Notes, caveats and our calculations. | Capped at 100 for cost adjustment. Ground pork values of 111 to 119 are cited in ... |

### protein_food_micronutrients.csv

Protein, zinc, iron, vitamin B12 and sodium of plant and animal protein foods.

Rows: 19. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | NQR-MN01 |
| `food` | Food. | Rice, ordinary polished (gao te may) |
| `protein_g_per_100g` | Protein g per 100g. | 7.9 |
| `iron_mg_per_100g` | Iron mg per 100g. | 1.3 |
| `zinc_mg_per_100g` | Zinc mg per 100g. | 1.5 |
| `vitamin_b12_ug_per_100g` | Vitamin b12 ug per 100g. | 0 |
| `sodium_mg_per_100g` | Sodium mg per 100g. | 5 |
| `zinc_mg_per_100g_protein` | Zinc mg per 100g protein. | 18.99 |
| `iron_mg_per_100g_protein` | Iron mg per 100g protein. | 16.46 |
| `bioavailability_note` | Bioavailability note. | Polished rice is low in phytate (NQR-23); 110 g raw rice gives 1.65 mg zinc |
| `source_ids` | Semicolon-separated source IDs. | APR-04; DIE-12; NQR-23 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). |  |
| `notes` | Notes, caveats and our calculations. | Composition from Decision 3958 Appendix 7 (APR-04); B12 and sodium from FCT 2007 ... |

### cost_per_quality_protein.csv

Cost of 25 g of DIAAS-adjusted protein and of zinc from school-meal protein sources.

Rows: 19. Columns: 15.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | NQR-C01 |
| `protein_source` | Protein source. | Textured soy ingredient, Vietnamese ex-factory estimate |
| `price_basis` | Price basis. | ex-factory (ch09 stack B) |
| `vnd_per_100g_protein` | Vnd per 100g protein. | 3,700 to 10,700 |
| `vnd_per_25g_protein` | Vnd per 25g protein. | 925 to 2,675 |
| `diaas_range_used` | Diaas range used. | 65 to 97 |
| `vnd_per_25g_diaas_adjusted_protein` | Vnd per 25g diaas adjusted protein. | 954 to 4,115 |
| `zinc_mg_per_100g_protein` | Zinc mg per 100g protein. | 5.02 |
| `food_needed_for_lunch_zinc_share_age_6_to_7` | Food needed for lunch zinc share age 6 to 7. | 68 to 182 g dry (not a feasible portion) |
| `vnd_for_lunch_zinc_share_age_6_to_7` | Vnd for lunch zinc share age 6 to 7. | 1,238 to 9,548 |
| `source_ids` | Semicolon-separated source IDs. | PMR-C09; FORM-05; FORM-06; DIE-12; NQR-05 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Ingredient only: oil, seasoning and labour excluded (as in wave 7 L1). |

### nutrition_trials.csv

Trials of soy, legume or plant protein in school or complementary feeding and their results.

Rows: 11. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | NQR-TR01 |
| `study` | Study. | Nga et al. 2009 |
| `country` | Country. | Vietnam (rural) |
| `ages` | Ages. | 6 to 8 years |
| `design_and_size` | Design and size. | double-blind RCT, 510 children |
| `intervention_and_comparator` | Intervention and comparator. | Biscuits fortified with iron 6 mg, zinc 5.6 mg, iodine and vitamin A, 5 days a w ... |
| `duration` | Duration. | 4 months |
| `main_result` | Main result. | Haemoglobin +1.87 g/L, plasma zinc +0.61 umol/L; risk of anaemia, zinc and iodin ... |
| `relevance_to_plant_protein` | Relevance to plant protein. | A school food vehicle with about 5.6 mg zinc works in Vietnamese schoolchildren; ... |
| `source_ids` | Semicolon-separated source IDs. | NQR-22 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | tested |
| `notes` | Notes, caveats and our calculations. |  |

### hybrid_savings.csv

Processor saving from replacing lean meat with extenders in cha lua and sausages at low, median and high hog prices.

Rows: 144. Columns: 25.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | HSG-001 |
| `product` | Product. | cha lua or gio lua (HCMUT best-liked recipe C1) |
| `hog_scenario` | Hog scenario. | low (2019 annual, FAOSTAT) |
| `live_hog_vnd_per_kg` | Live hog VND per kg. | 46076 |
| `lean_trim_vnd_per_kg` | Lean trim VND per kg. | 82937 |
| `extender` | Extender. | domestic textured soy (T1 cost) |
| `extender_dry_usd_per_kg` | Extender dry USD per kg. | 1.03 |
| `extender_protein_share_dry` | Extender protein share dry. | 0.5 |
| `hydration_kg_per_kg_dry` | Hydration kg per kg dry. | 2.78 |
| `extender_hydrated_vnd_per_kg` | Extender hydrated VND per kg. | 9641 |
| `replacement_share_of_lean` | Replacement share of lean. | 0.1 |
| `base_raw_material_cost_vnd_per_kg_product` | Base raw material cost VND per kg product. | 66022 |
| `extended_raw_material_cost_vnd_per_kg_product` | Extended raw material cost VND per kg product. | 61274 |
| `saving_vnd_per_kg_product` | Saving VND per kg product. | 4748 |
| `saving_pct_of_raw_material_cost` | Saving (%) of raw material cost. | 7.2 |
| `saving_usd_per_t_product` | Saving USD per t product. | 183 |
| `saving_vnd_million_per_t_product` | Saving VND million per t product. | 4.7 |
| `protein_g_per_100g_product` | Protein g per 100g product. | 12.2 |
| `breakeven_extender_dry_usd_per_kg` | Breakeven extender dry USD per kg. | 8.86 |
| `breakeven_multiple_of_extender_price` | Breakeven multiple of extender price. | 8.6 |
| `source_ids` | Semicolon-separated source IDs. | TIC-12; TIC-13; HXE-01; DIE-25; AIB-15; HXE-10 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Our calculation. Lean trimming = 1.8 x live hog (assumption bracketed by 1.38 ca ... |

### hybrid_prize.csv

Extender tonnage, processor savings and meat protein removed at Vissan and national scale.

Rows: 20. Columns: 19.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | HPZ-001 |
| `scope` | Scope. | Vissan, 18,547 t processed food (2025) |
| `scenario` | Scenario. | 30% of output in lean-based lines at 0.56 kg lean per kg product; 10% of lean re ... |
| `hog_scenario` | Hog scenario. | median (2019 to 2024 annual, FAOSTAT) |
| `lean_replaced_t` | Lean replaced t. | 312 |
| `textured_soy_dry_t` | Textured soy dry t. | 112 |
| `soy_isolate_dry_t` | Soy isolate dry t. | 62 |
| `fungal_biomass_dry_t` | Fungal biomass dry t. | 125 |
| `plant_protein_delivered_t` | Plant protein delivered t. | 56 |
| `meat_protein_removed_t` | Meat protein removed t. | 59 |
| `meat_protein_displaced_t_at_0_9` | Meat protein displaced t at 0 9. | 53 |
| `displaced_share_of_2025_meat_protein_pct` | Displaced share of 2025 meat protein (%). | 0.005 |
| `saving_vnd_billion` | Saving VND billion. | 28.9 |
| `saving_usd_million` | Saving USD million. | 1.1 |
| `source_ids` | Semicolon-separated source IDs. | BUY-04; HXE-11; BUY-05; TIC-12; DIE-25; AIB-15 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | inferred |
| `notes` | Notes, caveats and our calculations. | Our calculation; Chinese textured soy as the extender; the share of output in le ... |

### hybrid_sensory_limits.csv

Sensory and quality limits of plant protein extension in pork products from published studies.

Rows: 12. Columns: 14.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | HXS-01 |
| `study` | Study. | Pham et al. 2021 |
| `country` | Country. | Vietnam |
| `product` | Product. | cha lua (Vietnamese sausage) |
| `format` | Format. | fine emulsion gel |
| `extender` | Extender. | none (lean, lard and starch ratios) |
| `levels_tested` | Levels tested. | lean 70 to 90%, lard 10 to 30%, starch 0 to 10% |
| `level_with_no_loss` | Level with no loss. | not applicable |
| `result` | Result. | Best liked 70% meat, 25% lard, 5% starch; 90% lean least liked; grainy and heter ... |
| `source_ids` | Semicolon-separated source IDs. | HXE-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | tested |
| `notes` | Notes, caveats and our calculations. | Implication (our inference): textured granules that make a paste grainy are a po ... |

### filler_trust_register.csv

Dated register (2015 to 2026) of press, enforcement and seller claims on fillers in meat products and on fake or contaminated chay.

Rows: 47. Columns: 18.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TRU-E01 |
| `event_id` | Event id. | TRU-E01 |
| `date` | Date. | 2015-02-02 |
| `date_precision` | Date precision. | day |
| `outlet_or_actor` | Outlet or actor. | VnExpress Ngôi sao |
| `item_type` | Item type. | advice column |
| `topic` | Topic. | starch filler in meat products |
| `location` | Location. | national |
| `what_was_found` | What was found. | Advice that bought giò chả may be poor quality, contain much starch or even bora ... |
| `quantity` | Quantity. |  |
| `plant_or_filler_named` | Plant or filler named. | starch |
| `frame` | Frame. | cheapening |
| `official_action` | Official action. | none |
| `source_ids` | Semicolon-separated source IDs. | TRU-29 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Snippet only |

### marketplace_sku_counters.csv

Units-sold counters, prices and protein of 96 SKUs on Lazada and Tiki (read logged out, 25 September 2026).

Rows: 96. Columns: 31.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | MKT-L01 |
| `platform` | Platform. | Lazada |
| `item_id` | Item id. | 1832901640 |
| `search_query` | Search query. | sữa hạt |
| `category` | Category. | plant milk |
| `subcategory` | Subcategory. | nut and seed milk, standard |
| `plant_or_animal` | Plant or animal. | plant |
| `product_name_vi` | Product name vi. | Thùng 24 hộp Sữa hạt 9 loại hạt Vinamilk ít đường - hộp 180ml |
| `product_name_en` | Product name en. | Vinamilk 9-nut milk, reduced sugar, 24 x 180 ml |
| `brand` | Brand. | Vinamilk |
| `seller_name` | Seller name. | Vinamilk - Shop & More |
| `seller_type` | Seller type. | brand official store (LazMall badge) |
| `official_or_mall_badge` | Official or mall badge. | yes |
| `qty_per_sold_unit_l_or_kg` | Qty per sold unit l or kg. | 4.32 |
| `listed_price_vnd` | Listed price VND. | 285768 |
| `vnd_per_l_or_kg` | Vnd per l or kg. | 66150 |
| `units_sold_counter` | Units sold counter. | 88800 |
| `counter_precision` | Counter precision. | rounded to nearest 100 above 1,000 (displayed 88.8K) |
| `rating` | Rating. | 5.0 |
| `review_count` | Review count. | 26795 |
| `protein_claim` | Protein claim. | no |
| `protein_g_per_100` | Protein g per 100. | 1.5 |
| `protein_basis` | Protein basis. | 1.5 g in the nutrition panel on the Tiki product page; basis not printed, read a ... |
| `vnd_per_20g_protein` | Vnd per 20g protein. | 88200 |
| `volume_sold_l_or_kg` | Volume sold l or kg. | 383616.0 |
| `url` | Url. | https://www.lazada.vn/products/pdp-i1832901640.html |
| `source_ids` | Semicolon-separated source IDs. | MKT-03; MKT-06 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. | Cumulative counter; start date not shown. Highest plant-milk counter read. |

### kitchen_platform_counters.csv

Units-sold counters of milk, chay and protein SKUs on a HoReCa supplier platform and other sites with counters.

Rows: 185. Columns: 30.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | ECR-K001 |
| `platform` | Platform. | Kamereo |
| `channel_type` | Channel type. | HoReCa B2B platform (Ho Chi Minh City and Hanoi) |
| `category` | Category. | meat-like plant foods |
| `subcategory` | Subcategory. | domestic dry chay pieces (soy and gluten) |
| `plant_or_animal` | Plant or animal. | plant |
| `product_name_vi` | Product name vi. | Sườn Miếng Chay Panko 1kg |
| `product_name_en` | Product name en. | Panko Vegan Pork Ribs 1kg |
| `origin` | Origin. | Vietnam |
| `sold_unit` | Sold unit. | pack |
| `quantity_per_sold_unit` | Quantity per sold unit. | 1.0 |
| `quantity_unit` | Quantity unit. | kg |
| `listed_price_vnd` | Listed price VND. | 135000 |
| `vnd_per_l_or_kg` | Vnd per l or kg. | 135000 |
| `in_stock` | In stock. | yes |
| `orderable` | Orderable. | yes |
| `units_sold_counter` | Units sold counter. | 170 |
| `counter_basis` | Counter basis. | cumulative platform counter (totalSold field in page data); period and start dat ... |
| `volume_sold_l_or_kg` | Volume sold l or kg. | 170.0 |
| `protein_claim_in_name` | Protein claim in name. | no |
| `protein_g_per_100` | Protein g per 100. | 53.3 to 66.7 |
| `protein_basis` | Protein basis. | borrowed label range of An Nhien dry soy and wheat pieces (FORM-01), as in CPC-1 ... |
| `vnd_per_100g_protein` | Vnd per 100g protein. | 20240 to 25328 |
| `protein_sold_kg` | Protein sold kg. | 90.6 to 113.4 |
| `url` | Url. | https://kamereo.vn/products/suon-mieng-chay-panko-1kg-GRO190 |
| `source_ids` | Semicolon-separated source IDs. | ECR-06; CPC-12; FORM-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Low |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed |
| `notes` | Notes, caveats and our calculations. |  |

### origin_rules_by_agreement.csv

Product-specific rules of origin for dumplings, food preparations and textured protein under EVFTA, UKVFTA, CPTPP and RCEP.

Rows: 12. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | ORR-01 |
| `agreement` | Agreement. | EU-Viet Nam FTA (EVFTA) |
| `markets_served` | Markets served. | EU27 |
| `hs_line` | Hs line. | Chapter 19 incl. 1902.20 stuffed pasta, 1902.30, 1905 |
| `product_example` | Product example. | Dumpling, gyoza, wonton, bao, spring roll with pasta wrapper |
| `rule` | Rule. | Manufacture from materials of any heading except that of the product, in which n ... |
| `tolerance` | Tolerance. | General tolerance may not be used to exceed these caps (Article 5(4)) |
| `imported_chinese_textured_soy` | Imported chinese textured soy. | No effect: textured soy (2106.10) is another heading and is not capped |
| `imported_wheat_flour_or_gluten` | Imported wheat flour or gluten. | Flour, starch or rice that is non-originating counts toward the 20% cap; flour m ... |
| `meat_or_seafood_filling` | Meat or seafood filling. | Non-originating meat, fish or shrimp above 20% of weight breaks origin; Vietname ... |
| `binds_on_domestic_textured_soy` | Binds on domestic textured soy. | No |
| `source_ids` | Semicolon-separated source IDs. | ORG-01 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | revealed (rule) |
| `notes` | Notes, caveats and our calculations. | Note 3.5: non-originating cereals of chapter 10 milled in the same production ar ... |

### export_tariff_at_stake.csv

MFN duty against Vietnam's preferential duty on wrapped foods and protein lines in export markets.

Rows: 20. Columns: 16.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | TAS-01 |
| `market` | Market. | EU |
| `tariff_line` | Tariff line. | 1902 20 91 (stuffed pasta, other, cooked) |
| `product` | Product. | Vegetable or plant-protein dumpling, cooked |
| `mfn_rate_2026` | Mfn rate 2026. | 8.3% + EUR 6.10 per 100 kg |
| `vietnam_rate_2026` | Vietnam rate 2026. | 0% (since 1 Aug 2020) |
| `vietnam_route` | Vietnam route. | EVFTA |
| `china_rate` | China rate. | MFN |
| `thailand_rate` | Thailand rate. | MFN |
| `recipe_condition_for_vietnam_rate` | Recipe condition for vietnam rate. | Non-originating flour, starch or rice at most 20% of weight |
| `duty_at_stake_if_origin_fails` | Duty at stake if origin fails. | USD 0.42 to 0.56 per kg (9.5 to 9.9%) at USD 4.27 to 5.87 per kg (our calculatio ... |
| `source_ids` | Semicolon-separated source IDs. | ORG-02; ORG-15; XBA-28; XBA-29 |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | High |
| `demand_evidence_type` | stated, revealed, tested or inferred (demand evidence type). | n/a (rule or tariff, not demand) |
| `notes` | Notes, caveats and our calculations. | EUR converted at USD 1.1367 per EUR (ECB, 24 Sep 2026). Value basis: Viet Nam FO ... |

### expansion_lines.csv

Register of the actor check and the sixteen expansion lines in waves 7 to 9: question, kind, method, yield class, what changed, next step and whether further desk work would be noise.

Rows: 20. Columns: 17.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | W7-A1 |
| `wave` | Wave. | 7 |
| `line` | Line. | Actor check: funders and field-builders |
| `kind` | Kind. | different kind |
| `method` | Method. | desk: RFPs, strategy pages, benchmarks |
| `question` | Question. | What do 20 funders and field-builders need before allocating to Vietnam, and doe ... |
| `yield_class` | Yield class. | check (not a line) |
| `what_changed` | What changed. | Funder advice; public-meal decision map; corporate commitments; Asian institutio ... |
| `key_finding` | Key finding. | No major funder names Vietnam; market-shaping funders count decisions, not attit ... |
| `next_step_needs` | Next step needs. | Funder calls |
| `further_desk_work` | Further desk work. | not applicable |
| `source_prefix` | Source prefix. | AFN |
| `working_paper` | Working paper. | working-papers/wave7/actors/funders/actors.md |
| `evidence_label` | VN-direct, VN-adjacent or general. | VN-direct |
| `confidence` | High, Medium or Low. | Medium |
| `source_ids` | Semicolon-separated source IDs. | AFN-05; AFN-18; AFN-42 |
| `notes` | Notes, caveats and our calculations. | 30 questions: 0 answered, 19 partly, 10 not, 1 out of scope |

## Files added with the prologue (v0.5)

Built on 25 September 2026 from the prologue research (wave 10, `working-papers/wave10/`). Version 0.5 also added rows to `sources.csv` (81, prefixes PRA, PRB and PRC), `glossary.csv` (11 newcomer terms) and `key-numbers.json` (four tiles).

| File | Rows | Purpose |
|---|---|---|
| prologue_protein_footprints.csv | 14 | Greenhouse gas and land footprints per 100 g of protein for 14 foods (Poore and Nemecek 2018 global means via Our World in Data), used in the prologue chart. |
| prologue_investment_by_year.csv | 9 | Private investment in alternative protein companies by year and pillar, 2019 to the first half of 2026, with the cumulative total (GFI analysis of Net Zero Insights data), used in the prologue chart. |

### prologue_protein_footprints.csv

Greenhouse gas and land footprints per 100 g of protein for 14 foods (Poore and Nemecek 2018 global means via Our World in Data), used in the prologue chart.

Rows: 14. Columns: 9.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PFP-001 |
| `food` | Food as named by Our World in Data. | Beef (beef herd) |
| `ghg_kg_co2e_per_100g_protein` | Greenhouse gas emissions, kg CO2e per 100 g of protein (global mean). | 49.89 |
| `land_m2_per_100g_protein` | Land use, m2 of land for a year per 100 g of protein (global mean). | 163.6 |
| `statistic` | Which statistic the values are. | global mean |
| `source_ids` | Source IDs in sources.csv. | FUF-07; PRB-02; PRB-01 |
| `evidence_label` | Evidence label. | general |
| `confidence` | Confidence. | High |
| `notes` | Notes and caveats. | Poore and Nemecek (2018) via Our World in Data; global means (medians are lower, ... |

### prologue_investment_by_year.csv

Private investment in alternative protein companies by year and pillar, 2019 to the first half of 2026, with the cumulative total (GFI analysis of Net Zero Insights data), used in the prologue chart.

Rows: 9. Columns: 10.

| Column | Meaning | Example |
|---|---|---|
| `record_id` | Stable row ID. | PIV-001 |
| `period` | Year, half year or cumulative period. | 2019 |
| `plant_based_usd_m` | Investment raised by plant-based companies, USD million. | 844 |
| `fermentation_usd_m` | Investment raised by fermentation companies, USD million. | 454 |
| `cultivated_usd_m` | Investment raised by cultivated meat and seafood companies, USD million. | 60 |
| `total_usd_m` | Sum of the three pillars, USD million (our sum; GFI totals may differ by rounding). | 1358 |
| `source_ids` | Source IDs in sources.csv. | PRC-02; FTB-17; FTB-24 |
| `evidence_label` | Evidence label. | general |
| `confidence` | Confidence. | Medium |
| `notes` | Notes and caveats. | Total is our sum of pillars. Plant-based from GFI's June 2025 report (latest ope ... |
