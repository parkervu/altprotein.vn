---
id: app-m3-demand-method
title: "M3. Demand method: how Part III was built"
short_title: "M3. Demand method"
section: appendix
order: 3
summary: "How the demand round behind Part III was scoped, researched and checked: the questions it answers, eight research streams and their 451 sources, the re-read of the retail audit, the new demand evidence tag that separates stated, revealed, tested and inferred evidence, survey quality grades, the demand sizing model, the claims we rejected and the limits of the work."
audiences: [research, policy, international, investors, startups, manufacturers]
reading_time_min: 10
key_numbers: []
related_data: [sources.csv, open_questions.csv, disagreements.csv, consumer_surveys.csv, demand_assumptions.csv, retail_demand_signals.csv]
related_pages: [app-m1-method, app-m2-futures-method, front-how-to-read, ch11-protein-diet, ch18-demand-sizing, app-d8-demand-model, app-d3-retail-demand-signals, app-r1-open-questions, app-r2-disagreements, app-r4-sources]
charts: []
---

# M3. Demand method: how Part III was built

**What this appendix contains.** The method behind Part III (chapters 11 to 18) and chapter 25: the scope decisions, the questions, the research streams, the evidence rules including the new demand evidence tag, how the retail audit was re-read, how demand was sized, what we rejected and the limits of the work. The v0.1 method in [[app-m1-method]] and the futures method in [[app-m2-futures-method]] still apply unless this page says otherwise.

---

## M3.1 Scope decisions

Versions 0.1 and 0.2 scoped the supply side and treated demand only as a macro input and as business-to-business demand where it decided supply-side viability. For v0.3 AltProtein Vietnam asked for the demand side to be added as a new part of the same study, with the same main readers: the actors who move the frontier of alternative protein (founders, research bodies, investors and development finance, funders, policy makers, food and feed manufacturers and international organisations). Four decisions set the scope:

- **Demand as a design input.** Part III asks what demand exists or could exist that would pull new protein products and ingredients, what those products must be to win it, who buys first and how large it could be. It is not a consumer marketing plan.
- **Four demand layers:** end consumers (households), foodservice and institutions, business buyers of protein ingredients, and export demand.
- **Four product frames:** traditional *chay* as the incumbent baseline (studied, not promoted), plant-based and fungal products, fermentation-derived proteins, and cultivated meat and seafood. Insect protein remains an incumbent benchmark only.
- **Three methods:** desk research and evidence synthesis, a re-read of the project's existing field data, and a reproducible demand sizing model. No new primary consumer research (surveys, tastings) was run; the tests that would close the largest gaps are specified instead in [[ch25-demand-to-frontier]].

## M3.2 Research streams

Eight desk-research streams ran in parallel in wave 6 (September 2026), each under a common brief (published in `working-papers/wave6/BRIEF.md`). Each produced a working paper, a source register, data tables, open questions, disagreements and candidate key numbers, all published in `working-papers/wave6/`.

| Stream | Source prefix | Questions | Sources | Main pages |
|---|---|---|---|---|
| DIET | DIE | Protein intake by source, trends and projections; spending and eating out; retail price per gram of protein; price shocks and substitution; health and food-safety drivers; neighbours' protein ladders | 38 | [[ch11-protein-diet]], [[app-d1-diet-chay-prices]] |
| CHAY | CHY | How many people eat chay and how often; revealed calendar spikes; restaurants and chains; incumbent category sizes; mock meat, alliums, trust and certification; prices; the vegan movement | 69 | [[ch12-chay-baseline]], [[app-d1-diet-chay-prices]] |
| CONSUMER | CON | Survey register; awareness, trial and repeat; barriers and drivers; willingness to pay; segments; launches and exits; plant milk; search behaviour; naming | 39 | [[ch13-consumers]], [[app-d2-consumer-evidence]] |
| NOVEL | NOV | Cultivated meat and seafood acceptance; Asian revealed sales; precision fermentation buyers; GMO attitudes; fermentation framing; mycoprotein; blends; names, halal and chay status | 82 | [[ch14-frontier-demand]], [[app-d2-consumer-evidence]] |
| CHANNELS | CHN | Retail structure and chains; fresh meat; cold chain; e-commerce; foodservice and chain trials; canteens; schools and school milk; hospitals and military; tourism and the Nha Trang hypothesis; channel economics | 58 | [[ch15-channels]], [[app-d4-channels]] |
| BUYERS | BUY | Protein-ingredient imports by customs line; buyers by industry; prices and specifications; how ingredients are bought; novel-protein pilots; buyer map | 47 | [[ch16-business-buyers]], [[app-d5-buyers]] |
| EXPORT | EXP | Vietnam's export base; destination demand; diaspora; market access (tariffs, labels, novel food, deforestation rules); ingredient exports; seafood buyers' feed standards; competitors | 52 | [[ch17-export-demand]], [[app-d6-export]] |
| GLOBAL | GLB | Adoption trajectories; price elasticities and parity experiments; taste tests; why the US category declined; Asian analogues; formats; institutional interventions; displacement; forecast track record; calibration values | 66 | [[ch13-consumers]], [[ch18-demand-sizing]], [[app-d7-global-benchmarks]] |

Streams searched in English and Vietnamese and used web search, direct retrieval of primary documents, public databases (UN Comtrade, FAOSTAT, OECD SDMX, EU TARIC, Japan Customs, Google Trends) and two scholarly databases (Scite and OpenAlex). Existing source codes were reused where a stream cited a document the supply study already held (for example FORM-01, ECO-23, MAC-31, COST-39 to COST-41), so no document appears twice under different codes within Part III.

## M3.3 Evidence rules and the demand evidence tag

**Evidence labels and confidence** follow [[front-how-to-read]]: `VN-direct`, `VN-adjacent` (with the transfer assumption stated) or `general`, and High, Medium or Low confidence.

**The demand evidence tag (new in v0.3).** Surveys of intentions systematically overstate behaviour, and most Vietnamese consumer evidence is from surveys. Every demand claim in Part III therefore carries a second badge that says what kind of evidence it is:

| Tag | Meaning | Examples |
|---|---|---|
| *stated* | What people say: surveys, focus groups, stated intentions and stated willingness to pay | "74% would choose plant-based meat at the same price as meat" |
| *revealed* | What people or firms actually do: sales, purchases, prices, trade flows, menus, shelf presence, consumption statistics | Imports of textured protein; soy-milk revenue; Google search volumes |
| *tested* | Controlled tests: tastings, auctions with real money, choice experiments, field or market trials | The 84% premium for non-GM soymilk in an auction; Singapore's blind test of blends |
| *inferred* | Our inference from indirect evidence, including our calculations | Cost of 20 g of protein by product; the demand model |

When stated and revealed evidence disagree, Part III follows the revealed evidence and says so. Tested evidence from outside Vietnam is used for design (for example blend ratios) but tagged `VN-adjacent` or `general`.

**Survey quality grades.** The consumer register ([[app-d2-consumer-evidence]]) grades each study: A (probability sample with a full method), B (large panel or academic sample with a disclosed method), C (convenience or student sample, or method partly disclosed), D (anecdotal, unattributed or social listening of a few posts). No Vietnamese study reaches grade A.

**Market sizes.** As in versions 0.1 and 0.2, published Vietnamese market-size figures without a traceable method are not used as findings. Part III sizes demand routes with its own model instead ([[ch18-demand-sizing]]).

## M3.4 Re-reading the retail audit for demand

The September 2026 retail audit (186 products in 11 stores in Nha Trang and Ho Chi Minh City; [[app-s2-retail-audit]]) was collected as a formulation audit. For Part III we re-read the same records for demand signals ([[app-d3-retail-demand-signals]]): assortment by store tier (eight mass stores, three premium stores), pack price points, the cost of 20 g of protein by product type, label language and claims, allium and egg content of chay products, capture of protein values, and chay versus meat price pairs. The script logic is simple keyword and median calculations on `retail_audit_skus.csv`; results are in `retail_demand_signals.csv`. Because the audit is a convenience sample of modern and premium stores, these are signals about the shelf, not measures of the market.

## M3.5 Sizing demand

The demand model (`tools/demand_model.py`, standard library only) sizes seven routes for domestic or novel protein in three labelled scenarios and separates protein delivered from meat protein displaced. It reads the Part IV balance model's S-BASE population and meat demand so that both parts share one basis. Every assumption, with its basis and confidence, is in `demand_assumptions.csv`; outputs and a one-at-a-time sensitivity test are in `demand_outputs.csv` and `demand_sensitivity.csv`. All values after 2025 carry the foresight tag *estimate* as well as *inferred*. Details: [[app-d8-demand-model]].

## M3.6 Checks

- **Cross-stream reconciliation.** Where streams used the same source differently, we checked the primary record. Example: one stream described the GFI APAC survey's Vietnam sample as Ho Chi Minh City only; the survey summary gives "capital-city regions plus Ho Chi Minh City", so Part III describes it as the Hanoi region and Ho Chi Minh City (logged in [[app-r2-disagreements]]).
- **Source resolution.** Every citation in Part III resolves to `sources.csv`; every cross-link, key number, chart, evidence tag, foresight tag and demand evidence tag is checked by `tools/validate.py` (0 errors at packaging).
- **Independent review.** Before packaging, an independent reviewer re-checked the headline numbers of Part III against the working papers and sources and the model arithmetic against its outputs; corrections are listed in [[app-m5-changelog]], section M5.10.

## M3.7 Limits

- **No primary consumer research.** Part III rests on published surveys, revealed data and our re-read of an existing retail audit. The tests that would close the largest gaps are costed in [[ch25-demand-to-frontier]].
- **A thin Vietnamese evidence base.** One large online survey, two commercial panels, one solid academic urban survey and about ten small samples; no probability survey of diet or chay practice; no tested willingness to pay; no retail or household panel data for plant-based categories; no disclosed outcome of any chain's meat-free trial.
- **Search limits.** The shared web-search allowance for the round ran out part way through several streams. After that, streams worked from direct retrieval of known pages, public databases and scholarly databases, and logged what they could not reach. Pages that could not be read include the full GFI APAC report (form-gated), Euromonitor and Metric.vn data (paywalled), HappyCow, ShopeeFood and GrabFood (blocked or script-rendered), several chain menus and some publisher full texts. Each gap is an open question, not a finding.
- **Convenience sample.** The retail audit covers modern and premium stores in two cities; it has no wet markets, chay shops, online-only brands or foodservice.
- **AI research assistants.** As in earlier versions, the research streams were carried out with AI research assistants under a written brief, with every number traced to a retrieved source or marked as our calculation, and rejected claims listed.

## M3.8 Claims we rejected or downgraded

The streams rejected or downgraded more than 60 claims. The most consequential:

| Claim | Where seen | Why rejected or downgraded |
|---|---|---|
| Vietnamese plant-based or vegetarian market sizes ("VND 1,000 billion", "USD 500 million", "USD 1 billion", "USD 103 to 112 million") | Press, market-research summaries, industry bodies | No traceable method; contradicted by shelf and launch evidence. Not used. |
| "About 10% of Vietnamese are vegetarian"; "55% of Vietnamese eat vegetarian" | Press | No survey or method; parts do not reconcile. Rejected. |
| "5% to 63%" as a forecast of plant-based demand | GFI APAC summaries | Regional, hypothetical, stated; no Vietnam split. Used only as stated interest. |
| "93% interested in blended products" as a market size | GFI APAC press release | Measures interest in at least trying, urban online sample. Kept as low resistance only. |
| "Three-quarters would regularly consume plant-based meat if concerns were resolved" | GFI press release | The charts show 63% always or often. Downgraded. |
| "84% of young people aware of but not using alternative protein" | Two Hanoi papers | The same figure in two samples; one paper's own counts give 70%. Downgraded. |
| Rakuten "43% consume plant-based several times a week" as analogue demand | Commercial panel | The category is mostly plant milk and chay. Downgraded for analogues. |
| Oatside revenue as Vietnam sales | Press | Company-wide figures. Rejected as Vietnam numbers. |
| Industrial catering "about VND 1,000 billion a day" | Press, 2019 | Implies seven times current estimates; no method. Rejected. |
| 97% of Thai consumers willing to try cultivated meat | Company-commissioned survey | Only 24% were aware of the product. Rejected as a headline. |
| Cultivated meat market of USD 140 billion in a decade | Vietnamese press relaying a forecast | No method. Rejected. |
| "Cells that may cause cancer" in cultivated meat | Vietnamese financial press relaying Bloomberg | A media frame with no safety evidence. Not a finding. |
| Long-range global forecasts (7.7% to 60% alternative protein shares) | Consultancies and banks, 2019 to 2021 | Track record shows overshoot of one to two orders of magnitude. Not used as base cases. |
| Lidl Germany "vegan sales up 30% after price parity" | Company | No control group; whole vegan range; no meat effect. Downgraded to Low. |
| Tofu as 11% of 286,000 t of soy foods | Industry body | Inconsistent with craft-village volumes. Downgraded. |
| China HS 3504 unit value as a soy isolate price | Trade data | Too low for food-grade isolate; mixed products. Rejected as a price. |

The full lists are in each stream's working paper.

## M3.9 What v0.3 adds to the registers

- **Sources:** 451 new (DIE, CHY, CON, NOV, CHN, BUY, EXP, GLB), 1,726 in all ([[app-r4-sources]]).
- **Open questions:** 114 new (OQ-156 to OQ-269), grouped under "demand" topics ([[app-r1-open-questions]]).
- **Disagreements:** 89 new (DG-171 to DG-259) ([[app-r2-disagreements]]).
- **Data:** 40 new tables (see the data dictionary), two new model files and one new script.
