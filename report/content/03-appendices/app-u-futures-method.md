---
id: app-u-futures-method
title: "U. Futures method: how Part V was built"
short_title: "U. Futures method"
section: appendix
order: 21
summary: "How the futures round behind Part V was designed, researched and checked: the ten questions it answers, the twelve research streams and their 469 sources, the foresight badges on every forward-looking claim, the two-axis scenario method, the stress test of plays and moves, the vision and backcasting method, and the limits of the work."
audiences: [research, policy, international, investors, startups, manufacturers]
reading_time_min: 22
key_numbers: []
related_data: [foresight_methods.csv, scenarios_2050.csv, signposts_2050.csv, wildcards.csv, play_robustness.csv, robust_moves.csv, vision_milestones.csv, sources.csv, biblio_trends_frontier.csv, vn_research_profile.csv]
related_pages: [app-a-method, ch13-outlook, ch15-drivers-2050, ch18-scenarios-2050, ch19-vision-2050, ch20-robust-moves, app-w-balance-model, app-x-drivers-signals, app-q-open-questions, app-r-disagreements, app-t-sources]
charts: []
---

# U. Futures method: how Part V was built

**What this appendix contains.** The method behind Part V (chapters 15 to 20): the decisions that set its scope, the questions it answers, the twelve research streams and their tools, the evidence and foresight labels, how the scenarios, stress tests and vision were built, how the work was checked, and its limits. It extends the edition 1.0 method in [[app-a-method]], which still applies unless this page says otherwise.

**How to use it.** If you meet a foresight badge such as `{fx:estimate}` in Part V, start with section U.4. To rerun or challenge a result, use sections U.5 to U.8, which name the data files and scripts.

---

## U.1 Purpose and scope of the futures round

Edition 1.0 (September 2026) describes Vietnam's alternative-protein supply today and its outlook to 2035 ([[ch13-outlook]]). The futures round asked what could change between 2030 and 2050, and what actors should do now while the answer is uncertain. The research ran on 24 September 2026. The project owner took five decisions before it started.

| Decision | What was decided | Consequence in Part V |
|---|---|---|
| Packaging | A new Part V in the same package; executive summaries and briefs updated | Chapters 15 to 20, Appendices U to Z, 33 data files from the streams and 6 synthesis files |
| Stance | Evidence-anchored foresight plus one bold normative vision, clearly labelled | Horizon scan, exploratory scenarios and signposts; one "Vietnam 2050" vision with backcast milestones ([[ch19-vision-2050]]) |
| Topics | All four: frontier technology; drivers and shocks; economy and policy futures; quantitative projections | Chapters 15 to 17, and a transparent protein and feed balance model for 2030 to 2050 ([[app-w-balance-model]]) |
| Demand | Demand enters only as a macro input (population, income, diet, published outlooks) | No consumer research; no market-size forecast for Vietnamese alternative-protein products |
| Insects | Incumbent and benchmark only | No insect play recommended; insect papers in the bibliometric screen set aside as benchmark material |

Unchanged from edition 1.0: the supply-side scope; food and feed together; neutral framing led by food and feed security, industry and trade; English text with a Vietnamese summary.

## U.2 Who Part V is for, and the questions it answers

### U.2.1 Actor futures goals

| Actor | What they need from a 2050 view | Futures goal | Main chapters |
|---|---|---|---|
| Investors | Technology readiness and cost paths; when Vietnam's advantages switch on; regional competition; signposts that trigger investment | FG-VC: dated technology and cost trajectories with Vietnam triggers; option-value theses | 16, 18, 20 |
| Policy makers | How protein supply risks evolve; the 2050 feed and protein gap; no-regret public investments; a vision with milestones | FG-POL: quantified protein and feed balance; national targets register; backcast milestones and no-regret moves | 17, 19, 20 |
| Startups | Frontier routes with Vietnam fit and timing; inputs that become cheap; talent and AI tools | FG-SU: frontier technology cards with "Vietnam window opens when" | 16 |
| F&B and feed manufacturers | Climate and trade stress on feed inputs; fishmeal and soy trajectories; when novel inputs arrive at scale | FG-MFG: input risk trajectories and a novel-input timeline | 15, 17 |
| Research bodies | Frontier directions where Vietnam could lead by 2040; bibliometric trajectories; AI and biofoundry capability | FG-ACA: research trajectories, frontier gaps, capability path to 2040 | 16 |
| International bodies | Climate adaptation, food-system transformation, just transition, regional public goods | FG-INT: leverage points and fundable long-horizon public goods | 15, 19, 20 |

### U.2.2 The question tree, F1 to F10

| Question | What it asks | Chapter | Detail in | Streams |
|---|---|---|---|---|
| F1. Drivers to 2050 | Which forces reshape protein supply; which are near-certain, which are critical uncertainties | [[ch15-drivers-2050]] | [[app-x-drivers-signals]], [[app-y-targets-hubs]] | GEO, CLM, HSC, AQF |
| F2. Frontier technology | Readiness, cost and scale paths to 2050; when Vietnam becomes a sensible place for each route | [[ch16-frontier-technology]] | [[app-v-frontier-tech]] | FTG, FTB, ECF |
| F3. Inputs that change | Clean power, hydrogen, CO2, carbohydrate, water, land, carbon prices | [[ch16-frontier-technology]] | [[app-v-frontier-tech]], [[app-z-aquafeed-feedstock-futures]], [[app-y-targets-hubs]] | FTG, CLM, NGF, HUB |
| F4. Protein and feed balance | Feed and feed-protein import need in 2030, 2040 and 2050; what alternative protein could supply | [[ch17-protein-balance-2050]] | [[app-w-balance-model]], [[app-z-aquafeed-feedstock-futures]] | QNT, AQF, NGF |
| F5. Economy and policy futures | Learning curves, capital, carbon pricing, bioeconomy strategies, jobs | [[ch16-frontier-technology]], [[ch15-drivers-2050]] | [[app-v-frontier-tech]], [[app-y-targets-hubs]] | ECF, GEO, NTS |
| F6. Regional race | Where competitors aim to be, and where Vietnam could specialise | [[ch16-frontier-technology]], [[ch18-scenarios-2050]] | [[app-v-frontier-tech]], [[app-y-targets-hubs]] | ECF, HSC, HUB |
| F7. Signals and wildcards | Early signals and low-probability, high-impact events | [[ch15-drivers-2050]], [[ch18-scenarios-2050]] | [[app-x-drivers-signals]] | HSC, FTB, GEO |
| F8. Scenarios | Which uncertainties define distinct 2050 worlds; signposts; link to 2035 | [[ch18-scenarios-2050]] | [[app-x-drivers-signals]]; U.5 and U.6 here | HSC, all |
| F9. Vision | An ambitious but plausible 2050 vision with milestones for 2030 to 2045 | [[ch19-vision-2050]] | [[app-y-targets-hubs]]; U.7 here | VIS, NTS, HUB, QNT |
| F10. Robust moves | What pays off in every world, what keeps options open, what is a bet | [[ch20-robust-moves]] | U.6 here; [[app-y-targets-hubs]]; [[app-q-open-questions]] | VIS, all |

## U.3 Research design

### U.3.1 Waves and streams

As in edition 1.0, parallel research streams each had a written brief, a shared protocol and a source-ID prefix. An actor review after wave 3 set two gap waves.

| Wave | Streams | Purpose | Sources added |
|---|---|---|---|
| 3 | FTG, FTB, CLM, QNT, GEO, ECF, HSC, NTS | First pass at all ten questions | 314 |
| 4 (gap) | NGF, AQF, HUB | Carbon beyond cassava; aquaculture and marine ingredients; where hubs could sit | 105 |
| 5 (gap) | VIS | Benchmarks and foresight practice for the vision and the moves | 50 |
| Total | 12 streams | | 469 |

| Prefix | Stream | What it covered | Questions | Searches used (cap) | Sources |
|---|---|---|---|---|---|
| FTG | Frontier gas | Gas and electro-fermentation, power-to-protein; resource use and costs; Vietnam's power, hydrogen and CO2 to 2050 | F2, F3 | 14 (15) | 35 |
| FTB | Frontier bio | AI design, biofoundries, precision fermentation, cultivated meat and seafood, molecular farming, cell-free, biomass fermentation; approvals | F2, F7 | 15 (15) | 51 |
| CLM | Climate | Climate projections, subsidence, salinity, heat; effects on aquaculture, livestock, crops and imported inputs; emission caps | F1, F3 | 11 (14) | 43 |
| QNT | Balance model | Published projections to 2035; the 2025 to 2050 balance model in four scenarios; sensitivity | F4 | 5 (12) | 16 |
| GEO | Geo-macro | Trade and geopolitics, China's feed strategy, animal disease, energy, demography, farm workforce | F1, F5 | 15 (15) | 48 |
| ECF | Economy and policy | Learning curves, capital, carbon prices and carbon cost per protein, bioeconomy strategies, jobs | F5, F6 | 15 (15) | 46 |
| HSC | Horizon scan | OpenAlex bibliometrics, patents, company, plant and policy signals, wildcards, external forecasts | F7, F8 | 14 (15) | 37 |
| NTS | National targets | Every official Vietnamese target for 2030 to 2050 bearing on protein supply, read in the legal texts | F5, F9 | 3 (12) | 38 |
| NGF | Next-generation feedstocks | Cellulosic sugar, one-carbon feedstocks, waste streams, released rice land | F3, F4 | 11 (12) | 40 |
| AQF | Aquaculture futures | Aquaculture by species, trash-fish replacement, fishmeal, fish oil and omega-3, protein crops | F1, F4 | 10 (12) | 36 |
| HUB | Spatial hubs | Energy, hydrogen, CO2, bio-zone, carbohydrate, residue, buyer and research layers by province; six candidate hubs | F3, F6, F9 | 12 (12) | 29 |
| VIS | Vision benchmarks | Protein strategies elsewhere, food-system foresight practice, credible ambitious ranges | F9, F10 | 12 (12) | 50 |
| Total | | | | 137 (161) | 469 |

Source counts are rows per prefix in `sources.csv`, which now has 1,275 rows (806 from edition 1.0). Three rows record our own calculations (QNT-model, NGF-calc, AQF-calc); the text calls these "our calculation" and does not cite them as sources. Each stream's data files are listed in its appendix and in `data/data-dictionary.md`. From the stream results the lead author built six synthesis files: `scenarios_2050.csv`, `signposts_2050.csv`, `play_robustness.csv`, `robust_moves.csv`, `vision_milestones.csv` and `frontier_windows.csv`.

### U.3.2 Tools

| Tool | Use | Rules and limits |
|---|---|---|
| Web search | Finding pages not already known, in English and Vietnamese | A cap of 12 to 15 per stream (161 in all); 137 used |
| Direct page reads | The main way of reading sources | A summarising reader; numbers and quotes requested verbatim (see U.10) |
| OpenAlex, through its connector | Bibliometric counts and trends (HSC-01, FTG-14, FTB-10, ECF-09); literature search | Query strings and OQL stored in `biblio_trends_frontier.csv` and `vn_research_profile.csv` for rerun |
| Scite | Literature search and full-text excerpts | "Abstract" in the notes means only the abstract or excerpts were read |
| OECD data service | The OECD-FAO baseline 2026 to 2035 for Vietnam [@QNT-01; @GEO-37] {VN-direct\|Medium} | Report pages were blocked, so the data were read directly |
| Official legal texts | Decisions and resolutions read in Vietnamese on thuvienphapluat.vn, vanban.chinhphu.vn and baochinhphu.vn | Site-internal search used no web searches; short quotes in `national_targets_2050.csv` |
| Desktop browser | Read-only fallback when a direct read failed, for example VIS-45, FTG-06, FTG-23, HSC-20, NGF-14 | No sign-in, forms, downloads or accepted terms; each tab closed |
| Python | Arithmetic and CSV files (U.8) | Standard library only; no script fetches web content |

**Privacy rule.** No personal identifier (name, email address, account detail) went into any search, URL parameter or API call; OpenAlex requests carried no contact parameter [@HSC-01] {general|High}.

**Source mix.** Of the 469 sources, 134 are peer-reviewed (29%), 107 press (23%), 95 government or statistics (20%), 50 law (11%) and 54 other (12%: think tanks, forecasters, law-firm notes, reference works and our calculation records); databases, advocacy, company and market research make up the rest. Company sources are 7 (1%), against 133 of 806 in edition 1.0, because long-range questions have few company answers (our count from `sources.csv`).

## U.4 Evidence rules and foresight labels

### U.4.1 Evidence labels and confidence (as edition 1.0)

| Label or level | Meaning |
|---|---|
| VN-direct | Evidence about Vietnam |
| VN-adjacent | A comparable Southeast Asian country or the same species, with the transfer assumption stated |
| general | Global evidence, with no claim that it applies to Vietnam |
| High | Primary source read |
| Medium | Reputable secondary source, or a primary source read in part |
| Low | Single claim, press, company marketing, or our derivation from weak inputs |

Our own long-range numbers are Low unless their inputs are strong, which is why most Part V estimates carry `{VN-direct|Low}`. Disagreeing numbers are never averaged: we give both and the position taken ([[app-r-disagreements]]).

### U.4.2 Six foresight types

Every forward-looking statement carries a second badge after the evidence badge, for example `{VN-direct|Low} {fx:estimate}`.

| Type | Token | Definition | The sentence must state | Example from Part V |
|---|---|---|---|---|
| Trend | `fx:trend` | An observed, measured change expected to continue | The data and the period observed | Precision-fermentation papers rose from 9 (2020) to 188 (2025) [@HSC-01] {general\|Medium} {fx:trend} |
| Projection | `fx:projection` | A published model result, or an official target | Model, scenario and base year, or "official target" | Vietnam's protein-meal imports of 10.3 Mt in 2035, OECD-FAO baseline [@QNT-01] {VN-direct\|Medium} {fx:projection} |
| Estimate | `fx:estimate` | Our own calculation from stated assumptions | "Our calculation", and where the inputs are shown | Soybean-meal need of about 10.4 Mt in 2050 on trend (our calculation) [@QNT-01] {VN-direct\|Low} {fx:estimate} |
| Signal | `fx:signal` | An emerging development that may or may not scale | Date and place | An 11,000 t a year yeast-protein plant opened in China in November 2025; whether such capacity sets regional prices by 2035 is open [@HSC-14] {VN-adjacent\|Medium} {fx:signal} |
| Wildcard | `fx:wildcard` | A low-probability, high-impact event | A time window and the impact channel | A month-long closure of the South China Sea or Malacca Strait between 2030 and 2050 would cut soybean supply [@GEO-40] {general\|Medium} {fx:wildcard} |
| Vision | `fx:vision` | A normative goal put forward for discussion | The "Vision, not forecast" callout | Only in [[ch19-vision-2050]] |

The vision badge is written like the others, but only chapter 19 uses it; this page names it without braces so that it does not render here.

### U.4.3 Horizons

- **Every forward-looking number names its year**: 2030, 2035, 2040, 2045 or 2050. Windows are ranges ("not before about 2040 to 2045").
- **Trends name the period observed** ("0.14 to 0.45 points a year, 2017 to 2025").
- **Status is dated** ("September 2026"); all web sources were accessed on 24 September 2026.
- **The model's base year is 2025**; its outputs are for 2030, 2035, 2040 and 2050.
- **Wildcards carry a window** ("2028 to 2035"), or "any year" when timing has no basis.

### U.4.4 Targets, projections and estimates kept apart

| Kind of number | Badge and wording | Example |
|---|---|---|
| Official target | `fx:projection` plus "(official target)" | Agriculture capped at 56 MtCO2e in 2050 (official target) [@CLM-01; @NTS-24] {VN-direct\|High} {fx:projection} |
| Published model projection | `fx:projection` plus model and scenario | Protein-meal feed use of 12.9 Mt in 2035, OECD-FAO baseline [@QNT-01] {VN-direct\|Medium} {fx:projection} |
| Published probability | `fx:projection`, probability as published | A 54% chance that world cultivated-meat output stays below 100,000 t a year through 2051 (expert panel) [@HSC-18] {general\|Medium} {fx:projection} |
| Our estimate | `fx:estimate` plus "(our calculation)"; inputs in an appendix | Livestock and poultry feed of 26.4 Mt in 2030 (our calculation, [[app-w-balance-model]]) {VN-direct\|Low} {fx:estimate} |
| Our scenario | `fx:estimate`; "Scenarios, not forecasts" callout | The four worlds of [[ch18-scenarios-2050]] |
| Our vision | Vision badge; "Vision, not forecast" callout | [[ch19-vision-2050]] only |

Four working rules:
1. **Targets and estimates are never merged.** The official 2030 target of 30 to 32 Mt of industrial livestock feed [@NTS-23] {VN-direct|Medium} {fx:projection} and our model's 26.4 Mt for 2030 {VN-direct|Low} {fx:estimate} are both given, with the position taken: the target looks out of reach.
2. **Published projections stop at 2035.** We found no FAO, IFPRI, GLOBIOM or peer-reviewed projection for Vietnamese meat, feed or feed protein to 2050 [@QNT-01; @QNT-02; @QNT-15] {VN-direct|High}, and official output targets stop at 2030 [@NTS-07; @NTS-08; @NTS-23] {VN-direct|High}. After 2035 every Part V number is an official input target (power, hydrogen, emissions) or our estimate.
3. **Company, consultancy and advocacy numbers are claims**, kept in `external_forecasts.csv` and never used as projections. Only 9 of 84 resolved cultured-meat timeline predictions made before 2021 came true [@HSC-19] {general|Medium}.
4. **No probabilities of our own.** We quote one only where a named source publishes it, such as NOAA's odds of a very strong El Niño in winter 2026 to 2027 [@HSC-28] {general|High} {fx:projection}.

> **Method note.** A Part V sentence reads like this: "Soybean-meal need rises from 7.2 Mt (2025) to about 10.4 Mt (2050), nearly all imported [@MAC-04; @QNT-01] {VN-direct|Low} {fx:estimate}." The citation names where the inputs come from. The evidence badge says the claim is about Vietnam and has Low confidence because it is derived. The foresight badge says it is our estimate, not a projection or a target. The year is the horizon. Neither badge says how likely the number is.

Three callouts mark whole passages: **Speculative** (our judgement on windows and wildcards), **Scenarios, not forecasts** (the 2050 worlds) and **Vision, not forecast** (chapter 19).

## U.5 Scenario method

### U.5.1 The practice we followed

We reviewed 18 food-system foresight exercises and method studies (`foresight_methods.csv`). Four shaped the design.

| Exercise | Design | What we took | Source |
|---|---|---|---|
| FAO, Alternative pathways to 2050 (2018) | 3 quantitative scenarios to 2050 | Scenarios must differ on named drivers | [@VIS-33] {general\|Medium} |
| FAO, Drivers and triggers for transformation (2022) | 4 scenarios to 2050; 18 drivers; 4 "triggers" that move a system between scenarios | Pair scenarios with named triggers: our signposts and bet triggers | [@VIS-32] {general\|High} |
| EU JRC, Food safety and nutrition in 2050 (2015 to 2016) | 9 drivers; 2 axes (global trade, food values); 4 scenarios; a policy stress test found 29 challenges, 8 common to all | Two named axes, four worlds, and the no-regret stress test (U.6) | [@VIS-35] {general\|High} |
| Riera et al., review of 36 food-system scenario studies (2025) | Exploratory types and normative types (feasibility of a target, or its conditions) | State each set's purpose; keep the normative vision apart so it is not read as a forecast | [@VIS-36] {general\|High} |

Four is the modal number of scenarios in 2050 food exercises, and a two-axis design is simple enough to stress-test policies against [@VIS-32; @VIS-35; @VIS-36] {general|Medium}.

### U.5.2 How the axes were selected

1. **List the drivers**: 92 macro-driver rows, 34 climate-impact rows, 17 historical shocks and 43 signals from the GEO, CLM, AQF and HSC streams.
2. **Separate trends from uncertainties.** A driver is a near-certain trend when the people, rules or physics are already in place (cohorts born, caps in law, subsidence measured): section 15.1. The rest are critical uncertainties: section 15.2.
3. **Test each uncertainty on four criteria**: impact on alternative-protein economics in Vietnam; genuine uncertainty to 2050; independence from the other axis; and lying outside Vietnamese policy.
4. **Keep the two that pass all four.** The others become sensitivities, wildcards or moves. The horizon scan had proposed the same pair (`horizon_scan.md`, section 7).

| Candidate uncertainty | Impact | Uncertain to 2050 | Independent | Outside Vietnamese policy | Used as |
|---|---|---|---|---|---|
| Feed-protein import stress | High: decides whether domestic protein is worth its premium | High: ample supply in the OECD-FAO baseline to 2035 {fx:projection}, yet an anchoveta crisis in 2026 | Yes | Yes | **Axis 1** |
| Asia's fermentation market (open, or Chinese price dominance) | High: sets the landed price to beat | High: Chinese capacity grows; neighbours fund their own plants | Yes | Mostly | **Axis 2** |
| Trade politics | Medium to high | High | No: same channel as import stress | Mostly | Sensitivity; shipping closure as a wildcard |
| Growth path | Medium: acts through demand; S-HIGH adds about 1.3 Mt to 2050 soybean-meal need {fx:estimate} | Medium | Partly | No: the official path is a policy aim | Model scenario S-HIGH |
| Clean-power delivery | High for protein from power; low before 2040 | High | Partly | No: delivering the power plan is Vietnam's own task | Condition for the chapter 16 windows |
| Reach of carbon pricing | Low to medium before 2035 | High | Yes | Partly | Sensitivity and wildcards |
| Animal disease | High but episodic | High | Yes | Mostly | Shocks and wildcards |
| Political framing | Medium, mostly on food routes | Medium | Partly | Partly | Sensitivity |
| Vietnam's own choices (food law, feed lists, public money, a protein statistic) | High | Decided by Vietnam | Yes | No | **Moves** (chapter 20) |

All cells are our judgement from chapters 15 to 17 {VN-direct|Low}. S-HIGH gives 11.72 Mt against 10.40 Mt for S-BASE in 2050 (our calculation) [@QNT-01] {VN-direct|Low} {fx:estimate}.

**Why Vietnam's choices are moves, not axes.** Axes should be things the reader cannot control; the reader's options are then tested against them [@VIS-35; @VIS-36] {general|High}. If "Vietnam adopts a new-food route" were an axis, every world with the route would look better by construction, and the scenarios could not judge whether the route is worth having. Keeping policy off the axes lets chapter 20 find the moves that pay off in all four worlds, and shows that one external world can hold either a hub or a price-taker. Chapter 13's 2035 states mixed external conditions and domestic choices, which suited a ten-year outlook built on dated milestones; the 2050 set separates them.

### U.5.3 Building each world

Each world in `scenarios_2050.csv` was built in the same steps: fix the axis ends; write a short, internally consistent picture of 2050; map it to the balance-model scenarios of [[ch17-protein-balance-2050]]; state where Vietnam competes and loses; name the active hubs from `candidate_hubs.csv`; link it to a 2035 state of [[ch13-outlook]]; attach signposts and the domestic choice that decides Vietnam's place inside it. The soybean-meal ranges are mappings, not new model runs; a combined S-EFF plus S-ALT case was not modelled.

| World | Import stress | Fermentation market | Soybean-meal need, 2050 (mapping) | Grows from (2035) | Vietnamese name |
|---|---|---|---|---|---|
| A. Regional workshop | Benign | Open | 7.0 to 10.4 Mt (S-EFF to S-BASE) | Scenario 3, regulated regional hub | *Công xưởng của khu vực* |
| B. Comfortable price-taker | Benign | Chinese price dominance | 10.4 to 11.7 Mt (S-BASE to S-HIGH) | Scenario 1, import price-taker | *Nhà nhập khẩu an phận* |
| C. Security build-out | Chronic | Open | 7.0 to 8.8 Mt (S-EFF and S-ALT direction) | Scenario 2, feed-first build-out, then Scenario 3 | *Xây dựng an ninh nguồn đạm* |
| D. Squeezed importer | Chronic | Chinese price dominance | 7.0 to 10.4 Mt (efficiency does most) | Scenario 1 under stress, or Scenario 2 with state support | *Nhà nhập khẩu bị chèn ép* |

All rows: [@QNT-01] {VN-direct|Low} {fx:estimate}. The 2035 states are stepping stones: Scenario 1 leads to B while imports stay benign and to D if they turn chronic; Scenario 2 is the domestic answer to chronic stress; Scenario 3 needs an open regional market.

### U.5.4 Signposts and thresholds

A signpost is an observable event with a threshold that shows which way an axis is moving. We kept one only if it is published at least yearly, has a numeric or event threshold, names where to watch, has a stated September 2026 status and favours identifiable worlds. Sixteen passed (`signposts_2050.csv`; full table in [[app-x-drivers-signals]]).

| Axis end | Signposts | Example threshold | Status, September 2026 |
|---|---|---|---|
| Chronic import stress | SP-01 to SP-05 | Fishmeal above USD 2,500 per t for 12 months, or a fishmeal-to-soybean-meal price ratio above 6 for two years | Ratio 6.2 in August 2026: a peak, not yet sustained [@GT-15] {general\|High} |
| Benign import stress | SP-06 to SP-08 | Fishmeal below USD 1,800 per t for a full year | Not met [@GT-15] {general\|High} |
| Chinese price dominance | SP-09 to SP-11 | Three or more Chinese single-cell, yeast or mycoprotein plants above 20 kt a year | One plant of 11 kt (2025); one moving to 20 kt [@HSC-13; @HSC-14] {VN-adjacent\|Medium} |
| Open regional market | SP-12 to SP-14 | An ASEAN reliance or mutual-recognition mechanism for novel foods | Not proposed [@REG-63] {VN-adjacent\|Medium} |
| Sudden jumps | SP-15, SP-16 | A month-long closure of the South China Sea or Malacca Strait; Chinese microbial protein landed below its reported cost for two quarters | None observed [@GEO-40; @HSC-13] {general\|Medium} |

Reading rules:
- **One signpost does not decide a world**; we read the pattern on each axis. In September 2026 the evidence points both ways on both axes, which is why we assign no probabilities.
- **Bets carry triggers mapped to signposts**: RM-16 waits for SP-01; RM-18 for SP-12 or SP-13 ([[ch20-robust-moves]]).
- **Where no series exists, building one is a move**: SP-10 (imports of yeasts and protein preparations from China) has no baseline, and RM-21 creates it.
- **Signposts are read at each five-year review** (U.7.4); publishing them yearly would be a cheap public service.

### U.5.5 Wildcards

The horizon scan listed 26 wildcards (`wildcards.csv`), each with an impact channel, a direction for Vietnamese alternative protein, a time window, signposts and a confidence (9 Medium, 17 Low). They play three roles:
- **World-jumpers**: six would move Vietnam between worlds within a year, such as an anchoveta collapse (towards C or D) or Chinese export dumping of microbial protein (towards B or D); see section 18.4.
- **Path-switchers**: disease, a novel-food safety scandal or a biosecurity incident change the path inside a world rather than define one.
- **Revision triggers** for the vision (section 19.8).

The 17 shocks in `shock_register.csv` give a sense of scale: African swine fever removed nearly 6 million pigs in 2019, over a fifth of the herd [@GEO-14; @GEO-15] {VN-direct|Medium}. Published probabilities are quoted where they exist: synchronised maize failure in the four largest exporters has a 7% chance in a given year at 2 °C of warming and 86% at 4 °C [@CLM-24] {general|High} {fx:projection}.

## U.6 Stress test of plays and moves

The JRC tested policy challenges against its four food scenarios; 8 of 29 were common to all and became the natural no-regret agenda [@VIS-35] {general|High}. We applied the same logic to the 16 plays and policy options of edition 1.0 ([[ch11-plays]], [[ch12-policy-options]]) in section 18.5, and to 21 candidate moves in chapter 20. Worlds are weighted equally, because we assign no probabilities.

### U.6.1 Scoring rubric

| Score | Plays | Moves |
|---|---|---|
| 2 | Thrives: strong economics or clear public benefit | Pays off strongly |
| 1 | Holds with conditions | Pays off partly, or only with other moves |
| 0 | Struggles | Little or no payoff, or a loss |

Each score is our judgement from chapters 15 to 17 {VN-direct|Low} {fx:estimate}. Reasons are in the `why` column of `play_robustness.csv` and the `evidence_basis` column of `robust_moves.csv`.

### U.6.2 Classes

**Plays** (rules applied top to bottom; scores for worlds A, B, C, D):

| Class | Rule | Plays | Count |
|---|---|---|---|
| No-regret | 2 in all four worlds | P3 feed-trial capacity, P4 protein-quality laboratory, P6 open cost model and price series | 3 |
| Robust | At least 1 in every world | T1, T2, T4, T5, T6, T9, T10, P1, P2, P5 | 10 |
| Bet | 0 in some world, 2 in another, total at least 3; scale only after signposts | T3 bulk fishmeal replacement (0, 0, 2, 1); T7 high-value precision fermentation (2, 0, 1, 0) | 2 |
| Option | Any other play with a 0; cheap to hold as research | T8 cultivated seafood research (1, 0, 1, 0) | 1 |

**Moves.** The 21 candidates came from the edition 1.0 policy options (P1 and P2 became RM-03; P3 sits in RM-02 and RM-04; P4 and P6 became RM-05; P5 became RM-06), the plays, the VIS benchmark list and stream findings such as climate-proof siting (CLM), omega-3 sourcing (AQF), skills and cheap capital (ECF), second-hand tanks (FTB) and residue rules (NGF). Moves add the cost of acting now (`cost_scale`).

| Class | Rule | Moves | Count |
|---|---|---|---|
| No-regret | 2 in all four worlds | RM-01 to RM-09 | 9 |
| Option | Low or medium cost; 2 in at least one world, weaker elsewhere | RM-10 to RM-15 | 6 |
| Bet | High commitment; strong in one world; wait for a named trigger | RM-16 to RM-19 | 4 |
| Hedge | Main value is limiting losses in the worlds that hurt most: C and D for RM-20 (1, 1, 2, 2); B and D for RM-21 (1, 2, 1, 2) | RM-20, RM-21 | 2 |

**Not the same as the edition 1.0 scores.** Chapter 11 scored plays 1 to 5 on seven criteria for attractiveness today, with audience weights. The stress test measures robustness across futures. The two can differ: T7 scores well for investors in chapter 11 but is a bet here, because it needs an open regional market. We report both and do not combine them.

## U.7 Vision and backcasting method

### U.7.1 A separate, labelled vision

Normative scenarios show that a target is feasible or frame the conditions for it; exploratory scenarios map what might happen [@VIS-36] {general|High}. Chapter 19 is normative. It is kept apart from the four worlds, marked "Vision, not forecast", and is the only chapter that uses the vision badge; its benchmark evidence is cited and tagged as usual. It was built in six steps:
1. **Framing**: feed security and industry lead, because that framing has lasted abroad while climate framing faded [@VIS-15; @VIS-13; @VIS-25] {general|Medium}. Diet change stays out of scope.
2. **Anchors**: Vietnam's official 2050 input plans (power mix, hydrogen, the agricultural emissions cap, net zero); no official meat, feed or protein number goes beyond 2030 [@GT-11; @NTS-24; @NTS-07] {VN-direct|High}.
3. **Ranges, never points**, from the balance model, the aquafeed stream and peer budgets (U.7.2).
4. **Analogue check** against what China, the EU, Japan, Norway and Singapore achieved (`vis_calc.py`).
5. **Backcast milestones** at the end of each five-year plan (U.7.3).
6. **Fit and revision**: each pillar judged against worlds A to D (section 19.7), with named revision triggers and a review cycle (U.7.4).

### U.7.2 Where the ranges come from

These are the calculations behind the chapter 19 goals, shown here as our estimates.

| Indicator (2050) | Range | How derived | Analogue check | Sources |
|---|---|---|---|---|
| Soybean-meal import need | 7.0 to 8.8 Mt, against 10.4 Mt on trend | S-EFF (7.00 Mt) and S-ALT (8.78 Mt) in 2050 | S-EFF's inclusion cut of 1% a year sits at the low end of China's 0.9 to 2.9% a year (2017 to 2025) | [@QNT-01; @GEO-10; @GEO-11] {VN-direct\|Low} {fx:estimate} |
| Microbial feed protein, share of high-protein feed protein | 4 to 8% | S-ALT gives 1.0% (2030), 2.7% (2035), 4.4% (2040), 8.4% (2050); top near S-ALT, bottom about half | Novel ingredients were 0.4% of Norwegian salmon feed in 2020; no national feed system has reached 1% | [@QNT-01; @VIS-18; @VIS-20] {VN-direct\|Low} {fx:estimate} |
| Domestic-origin share of feed protein | 11 to 22 points above a 2028 baseline | 0.5 to 1 point a year for 22 years; 3.5 to 7 points by 2035 and 6 to 12 by 2040 | EU target pace (0.92 points a year, 2025 to 2035) as the top; Japan's flat record (28% in FY2000, 27% in FY2024) as the downside | [@VIS-15; @VIS-12] {VN-direct\|Low} {fx:estimate} |
| Non-marine share of aquafeed omega-3 | 15 to 50% | The aquafeed stream's range on the middle aquaculture path | Algal and oilseed omega-3 oils are commercial; a modified canola oil replaced fish oil in shrimp diets | [@AQF-19; @AQF-23; @AQF-24] {VN-direct\|Low} {fx:estimate} |
| Public protein and feed-innovation line (2027 to 2035) | USD 5 to 15 M a year | Peer budgets annualised in `vis_calc.py` | Denmark about USD 12 M, Germany about EUR 6 M, Canada about USD 22 M a year; Vietnam's feed scheme about USD 6.3 M a year | [@VIS-01; @VIS-24; @VIS-06; @NTS-23] {general\|Medium} {fx:estimate} |

**Left out on purpose.** No consumption ratio such as the Dutch 50:50 ambition, because diet is out of scope and such ratios abroad are unmeasured [@VIS-05] {general|Medium}. No overall feed self-sufficiency ratio: Japan's land-based ratio moved less than half a point a year between FY2000 and FY2024 [@VIS-12] {VN-adjacent|High}.

### U.7.3 Milestones tied to five-year plans

The 22 milestones in `vision_milestones.csv` sit at the end of plan periods, so that each socio-economic plan can adopt, adjust or drop them. All are vision goals, not forecasts.

| Plan cycle | Milestones | What they are |
|---|---|---|
| 2026 to 2030 | VM-01 to VM-07 (7) | Mostly administrative: a protein and feed balance by 2028, a new-food route, named sites, a budget line, one pilot plant; 2030 values for soybean-meal need and microbial protein |
| 2031 to 2035 | VM-08 to VM-12 (5) | Protein-balance targets in the successor livestock and fisheries strategies; 2035 ranges; the first full review |
| 2036 to 2040 | VM-13 to VM-15 (3) | 2040 ranges; residue carbon and clean power for most new capacity |
| 2041 to 2045 | VM-16, VM-17 (2) | Alignment with the 2045 visions of Resolutions 36 and 57; a conditional first plant making protein from power |
| 2046 to 2050 | VM-18 to VM-22 (5) | The 2050 goals, including agriculture within its 56 MtCO2e cap |

Each milestone has an indicator, a value or range, a trend comparison and a benchmark. Seven fall in the first plan because backcasts find that actions for distant milestones must start at once [@VIS-40] {general|High}.

### U.7.4 Review cycle

The vision is to be reviewed at each five-year plan (2030, 2035, 2040, 2045) against the 16 signposts and the triggers in section 19.8, with the first full review in 2035 (VM-12). This copies what has worked elsewhere: Japan verifies its basic-plan indicators every year and publishes the misses [@VIS-13] {general|High}; Finland's government reports on the future once per electoral term [@VIS-44] {general|Medium}; Korea runs its food-tech law through five-year plans [@VIS-14; @VIS-28] {VN-adjacent|Medium}. A Vietnamese commentary proposes three layers: fixed foundations, 20 to 30-year scenarios, and 5 to 10-year adjustment [@VIS-47] {VN-direct|Low}.

### U.7.5 Lessons from backcasting and from Vietnam's own foresight

| Lesson | Evidence | How we applied it |
|---|---|---|
| Embedding and follow-up decide impact | The backcasting framework ends in a follow-up agenda and embedding [@VIS-37]; the Dutch novel-protein backcast of the 1990s seeded the Profetas research programme [@VIS-38; @VIS-41; @VIS-42] {general\|Medium} | Milestones tied to plan cycles; each first move has an owner in chapter 20 |
| Monitoring is the weak link | Six agri-food backcasts (2021 to 2024) [@VIS-39] {general\|High} | The first milestone is a statistic (VM-01); a review at every plan |
| Act immediately | A European plant-protein backcast to 2030 found actions had to start "immediately" [@VIS-40] {general\|High} | Seven milestones in 2026 to 2030 |
| A vision without a statistic fades | The Dutch strategy published no quantitative targets; Canada's roadmap has no progress report [@VIS-05; @VIS-10] {general\|Medium} | The Measure pillar comes first |
| Fit the method to thin data | Vietnam's Delphi for the 2021 to 2030 science strategy had 15 experts per field and could not rank priorities; its authors advise small, high-quality scenario workshops [@VIS-45] {VN-direct\|High} | Two axes, four worlds and 16 signposts rather than a large survey |
| Joint authorship gives standing | *Vietnam 2035* was written by the World Bank and the then Ministry of Planning and Investment (now merged into MOF) [@VIS-46] {VN-direct\|Medium} | A model for a jointly owned review |

## U.8 Calculations

**The balance model** is `tools/balance_model.py`. It reads `balance_assumptions.csv` (238 rows) and writes `balance_outputs.csv` (1,150 rows) and `balance_sensitivity.csv` (13 rows) for 2025 (base), 2030, 2035, 2040 and 2050 in four scenarios (S-BASE, S-HIGH, S-EFF, S-ALT). It is checked against 86 published projections in `balance_published_projections.csv`. Method, assumptions, checks and sensitivity: [[app-w-balance-model]].

**Other scripts**, in `working-papers/wave3/<stream>/`, standard library only, run with `python3 <script>` from their folder:

| Script | What it calculates | Used in |
|---|---|---|
| `balance_model/model.py` | Research copy of the balance model; the package copy differs only in paths and record IDs | Chapter 17 |
| `frontier_gas/ftg_estimates.py` | Power, solar and wind capacity, hydrogen and CO2 for 100 kt, 500 kt and 1 Mt of hydrogen-route protein; indicative Vietnamese cost; breakeven hydrogen price | Chapter 16 |
| `econ_policy/ecf_calc.py` | Learning applied to the edition 1.0 fungal feed-protein cost stack (2030, 2040, 2050); carbon cost per t of protein at USD 25, 50 and 100 per t CO2e; footprint of glucose-based fungal protein | Chapter 16 |
| `geo_macro/build_csvs.py` | Builds `macro_drivers_2050.csv` and `shock_register.csv` from sourced values (population, age, urban share) | Chapter 15 |
| `next_gen_feedstocks/ngf_calc.py` | Sugar-equivalent volumes of residue, one-carbon and waste streams; three what-if cases for 2040 and 2050 against the S-ALT glucose need | Chapter 16 |
| `aquaculture_futures/aqf_calc.py` | Aquaculture by species, aquafeed, crude protein and EPA plus DHA need to 2050; trash-fish replacement; pangasius by-products; credible alternative shares | Chapter 17 |
| `spatial_hubs/hub_calc.py` | Buyer shares by province; straw power potential; hydrogen, CO2 and cassava needs of single plants; S-ALT plant counts by hub | Chapter 19 |
| `vision_benchmarks/vis_calc.py` | Analogue rates of change; model outputs as shares; peer budgets annualised | Chapter 19 |

`tools/validate.py` checks citations, evidence and foresight tags, links, embeds, frontmatter, tables and dashes across the package.

## U.9 Quality assurance

| Step | What happened | Result |
|---|---|---|
| 1. Protocol and briefs | One shared protocol; one brief per stream with sub-questions, output files, search cap and labels | The same rules in all twelve streams |
| 2. Wave 3 | Eight streams answered F1 to F10 at first pass | 314 sources; 92 searches |
| 3. Actor review ("Review 3") | For each audience: what wave 3 gave, what was missing, which stream would answer it (table below) | Three gap streams commissioned |
| 4. Gap waves | Wave 4 (NGF, AQF, HUB); then wave 5 (VIS) for benchmarks and foresight practice, needed for the vision and the moves | 155 sources; 45 searches |
| 5. Consolidation | A rerunnable script parsed each stream's sources into `sources.csv`, checked every cited ID, copied stream files into `data/` and `working-papers/wave3/`, and rebuilt the balance model | 0 unresolved source IDs; 61 cited record IDs (such as CH-1, ET-01) found to be data records, not sources; the package model reproduces the stream outputs exactly |
| 6. Synthesis | Chapters 15 to 20 and six synthesis files written from the notes | Consistency decisions below |
| 7. Validation | `tools/validate.py` run on every page | Citations, tags, links, embeds and tables checked by script |
| 8. Independent verification | A separate pass re-traced Part V headline numbers to notes, data files and scripts, as for edition 1.0 ([[app-a-method]]) | Numbers checked before publication |

**Review 3: what each audience still needed after wave 3.**

| Audience | Still missing | Answered by |
|---|---|---|
| Investors | Where frontier inputs cluster; whether second-generation sugars lift the carbon ceiling | HUB, NGF |
| Policy makers | What released rice land could add; the trash-fish transition; a spatial plan for bio hubs | AQF, HUB |
| Startups | Feedstocks beyond cassava and sugar; hub locations | NGF, HUB |
| Manufacturers | Aquafeed and marine-ingredient futures; protein crops | AQF |
| Research bodies | Lignocellulosic and crop research priorities | NGF, AQF |
| International bodies | Mekong land-use transition options | AQF, HUB |

**Consistency decisions carried into the chapters.**
- The 2030 target of 30 to 32 Mt of industrial feed appears to cover livestock feed only (Decision 1625/QD-TTg), answering edition 1.0's OQ-127 [@NTS-23] {VN-direct|Medium}.
- Decision 1466/QD-TTg (31 July 2026) replaces the 2021 agri-biotech scheme [@NTS-35] {VN-direct|Medium}.
- Thai Duong Feed JSC ran a national yeast-protein project in 2016 to 2019; its current status is unknown [@HSC-06; @HSC-07] {VN-direct|Medium}.
- Research intensity is "about a quarter to a third of Thailand's": OpenAIRE gives about a quarter, OpenAlex 31% (4.1 against 13.4 works per 10,000 publications, 2015 to 2025) [@HSC-01; @BIB-01] {VN-direct|Medium}.

**Calibration.** The model's interpolated 2027 values (30.5 Mt of feed, 7.7 Mt of soybean meal) sit within 0.1 Mt of USDA's forecasts, and its protein-meal use is within 2% of the OECD-FAO baseline for 2030 and 2035 [@MAC-01; @MAC-04; @QNT-01] {VN-direct|Medium}. Where streams counted differently, both counts were kept: gas-fermentation papers are 494 works of all types (FTG-14) or 314 articles and reviews (HSC-01), with 2 Vietnamese in each [@FTG-14; @HSC-01] {general|Medium}.

## U.10 Limitations

| Limit | Effect | How we handled it |
|---|---|---|
| Thin Vietnamese statistics | No series of feed conversion or soybean-meal inclusion, the model's two largest levers; aquafeed volume unresolved (3.9 to 4.8 Mt industry, 6.5 Mt USDA) | Sensitivity tests; a protein statistic became the first move (RM-01) |
| Published projections stop at 2035 | Nothing to calibrate 2040 and 2050 against | The taper after 2035 is stated as a judgement; S-HIGH is a stress case |
| Extraction tools sometimes paraphrase | A summarising reader can reword a quote or number | Verbatim requests; Vietnamese legal quotes rated Medium unless the same wording appeared in two reads or in edition 1.0 |
| OpenAlex mis-mapping | Raw counts overstate Vietnamese output about twofold: of 91 raw core-set records, 40 are genuine; 11 have no Vietnamese author, mostly because two institution records absorb foreign authors [@HSC-01] {VN-direct\|Medium} | Every Vietnamese core-set record screened by hand; screened counts used |
| No probabilities | Worlds cannot be ranked | Equal weights; published probabilities quoted; signposts instead of odds |
| Scores are judgement | Classes depend on our reading | Rules and reasons published; confidence Low |
| 137 searches | Some grey literature and recent press missed | "We found no" for absences; gaps below |
| Blocked sources | Some FAO, JRC and USDA pages could not be read | Recorded as leads, not used as evidence |
| One research day | All sources read on 24 September 2026 | Status dated; signposts to be re-read at each review |
| AI assistance | Research and drafting were assisted by Claude, an AI model made by Anthropic, under human direction | Every number traces to a cited source or a named script; notes and scripts are in `working-papers/wave3/` |

## Gaps and open questions

| # | Gap | Cheapest way to close it |
|---|---|---|
| 1 | No Vietnamese stakeholder workshop tested the axes, worlds or vision; no interviews in this round | One small scenario workshop with MAE, MOST, feed mills and investors, as Vietnam's own foresight studies advise |
| 2 | No Vietnamese series of feed conversion and soybean-meal inclusion by species | Feed-association and integrator data under confidentiality; the first protein balance (RM-01) |
| 3 | No baseline for imports of yeasts and protein preparations from China (SP-10) | Vietnam customs data for HS 2102, 3504 and 2309 |
| 4 | JRC bioeconomy 2050 scenario names not verified (pages blocked) [@VIS-50] {general\|Low} | The JRC123532 report from a mirror |
| 5 | FAO 2018 scenario names confirmed only from prior knowledge | The FAO 2018 report from FAO's open repository |
| 6 | Numbers and horizon of the Dutch novel-protein backcast (full texts closed) | A repository copy of the 2007 Delft thesis on backcasting |
| 7 | OpenAlex mis-mapping of two Vietnamese institution records | Curation requests to OpenAlex; until then, screen by hand |
| 8 | Vietnamese-language journals only partly indexed | Vietnam Citation Index or NAFOSTED topic counts |
| 9 | Co-authorship shares rest on first-five-author lists | Full author lists for the 40 screened works |
| 10 | Approximate currency rates in `vis_calc.py` | Central-bank annual averages |
| 11 | No combined S-EFF plus S-ALT model run | Add a fifth scenario to `balance_assumptions.csv` and rerun |
| 12 | Robustness scores are one team's judgement | A second panel scores plays and moves blind; compare |

## Data files

- `foresight_methods.csv` (18 rows): foresight exercises elsewhere, their methods (scenarios, backcasting, signposts, review cycles) and lessons.
- `scenarios_2050.csv` (4 rows): the four 2050 worlds with axis ends, pictures, indicative ranges, hubs, 2035 origins and signposts.
- `signposts_2050.csv` (16 rows): signposts by axis with thresholds, where to watch, September 2026 status and worlds favoured.
- `wildcards.csv` (26 rows): wildcards with impact channel, direction, window, signposts and confidence.
- `play_robustness.csv` (16 rows): play and policy-option scores in each world, class and reason.
- `robust_moves.csv` (21 rows): candidate moves with class, owners, start date, cost, trigger, evidence and scores.
- `vision_milestones.csv` (22 rows): backcast milestones by plan cycle with indicator, range, trend and benchmark.
- `sources.csv` (1,275 rows): all sources; the 469 from this round carry the prefixes in U.3.1 and a `wave` value of wave3, wave4 or wave5.
- `biblio_trends_frontier.csv` (325 rows) and `vn_research_profile.csv` (53 rows): OpenAlex counts with rerunnable queries.
- Balance model files: see [[app-w-balance-model]]. Stream notes, CSVs and scripts: `working-papers/wave3/<stream>/`.

**Related:** [[app-a-method]], [[ch15-drivers-2050]], [[ch18-scenarios-2050]], [[ch19-vision-2050]], [[ch20-robust-moves]], [[app-w-balance-model]], [[app-x-drivers-signals]], [[app-q-open-questions]], [[app-t-sources]]
