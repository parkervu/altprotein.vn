# Wave 7, step 1: actor-interest check of Part VI (demand side)

## Context

AltProtein Vietnam publishes "Alternative protein in Vietnam: a supply-side scoping study", now edition 1.2 (September 2026), an evidence-tagged package at:
altprotein-vn-supply-scoping-2026/

Edition 1.2 added **Part VI, the demand side** (wave 6 of research): chapters 21 to 29 in `content/01-report/` (ch21-protein-diet, ch22-chay-baseline, ch23-consumers, ch24-frontier-demand, ch25-channels, ch26-business-buyers, ch27-export-demand, ch28-demand-sizing, ch29-demand-to-frontier) and Appendices AA to AI in `content/03-appendices/` (app-aa ... app-ai). Key data: `data/target_product_profiles.csv`, `data/play_demand_check.csv`, `data/demand_moves.csv`, `data/demand_outputs.csv`, `data/open_questions.csv` (Part VI gaps are OQ-156 to OQ-269), `data/disagreements.csv`. The six audience briefs are in `content/02-briefs/`. Read the chapter summaries and "In one paragraph" blocks first, then the sections you need.

Part VI's core conclusion: demand in Vietnam pulls new protein as an ingredient inside familiar foods, sold to incumbents (chay makers, meat processors, plant-milk makers, caterers), not as consumer-branded meat analogues. Benchmark path: about 19,000 t of protein a year delivered by 2035, mostly import substitution, displacing about 0.2% of meat protein.

The package is written for **actors who want to move the alternative-protein frontier**. Its six audiences: investors, policy makers, startups, manufacturers (food and feed), research bodies, international bodies (including funders, philanthropies and development finance).

## Your task

We are now checking wave 6 against **what real actors actually care about**, to find where Part VI fails its readers and which new research lines would change an actor's decision. You cover one group of actors (given in your prompt).

1. **Actor register.** Identify 10 to 20 named, real actors in your group that matter for alternative protein in Vietnam or would plausibly act there. For each, find their **stated interests and priorities from their own documents** (RFPs, strategy pages, annual reports, AGM documents, investor presentations, programme pages, published reports, interviews), preferably 2024 to 2026. Quote short phrases where useful. Record what they fund, build, buy, regulate or ask for, and any country or region focus (Vietnam, Southeast Asia, APAC).
2. **Demand questions.** For each actor, derive the demand-side questions they would need answered before acting in Vietnam (for example: "Is there a buyer who will pay for X at price Y?", "Which product formats would a Vietnamese school meal programme accept?", "Would protein diversification commitments by Vietnamese retailers move volume?"). Be concrete and decision-linked. Do not invent interests: if an actor has no demand-side interest, say so.
3. **Coverage check against Part VI.** For each question, read Part VI and record: does Part VI answer it (answered, partly, not answered, out of scope), where (chapter and section, or data file), how strong the evidence is (strong, moderate, weak, none), and **would a better answer change that actor's decision** (yes, maybe, no). Be critical and specific; do not credit Part VI with answers it does not give.
4. **Candidate lines.** Propose research lines that would close the highest-value gaps. Prefer **a different kind of question** over a deeper version of a wave-6 question (the lesson from earlier rounds: signal came from asking different kinds of question, not the same question harder). Say for each line whether desk research can close it now or whether it needs a different method (a call, a trial, purchased data), and what result would change which conclusion or recommendation.
5. **New facts.** If while researching actors you find facts that directly change or contradict a Part VI claim (for example a 2026 product launch, a new commitment, a policy that names protein diversification, a funder excluding or prioritising Vietnam), record them prominently with sources.

## Evidence rules (strict, same as the package)

- **Never fabricate.** Every claim needs a source you actually retrieved. Snippet-only evidence is marked Low and says "snippet only". A clean negative ("we found no ...") is a finding.
- Tag substantive claims `[VN-direct|VN-adjacent|general, High|Medium|Low, SRC-ID]`, and demand claims also `stated|revealed|tested|inferred`.
- Numbers with units and the year they refer to; ranges with "to". USD unless stated; 26,000 VND per USD if you convert.
- Plain English, British spelling, short sentences, **no em dashes or en dashes anywhere** (use commas, colons or separate sentences).
- Insect protein is never recommended (benchmark only). Published Vietnamese market sizes with no traceable method are not used as findings.
- Today is 25 September 2026. Search in English and Vietnamese. You can load Scite and OpenAlex tools with ToolSearch if you need academic literature.

## Output (write into your folder under working-papers/wave7/actors/<group>/)

1. `actors.md`: working paper: headline findings (8 to 12, tagged), actor-by-actor notes, the coverage verdict (where Part VI serves this group well and where it fails), new facts that change Part VI, and ranked candidate lines.
2. `actors.csv`: `actor_id,actor,audience,type,country_or_region,stated_interests,key_quote,vietnam_or_sea_focus,demand_relevance,source_ids,evidence_label,confidence,notes` (actor_id = `<PFX>-A01`...; audience is one of investors, policy, startups, manufacturers, research, international).
3. `questions.csv`: `question_id,actor_ids,audience,question,decision_it_informs,part_vi_coverage,where_in_part_vi,evidence_strength,better_answer_changes_decision,decision_value,notes` (question_id = `<PFX>-Q01`...; decision_value High, Medium or Low).
4. `candidate_lines.csv`: `line_id,question_ids,line,kind,method,closable_by_desk_now,result_that_would_change_a_conclusion,conclusion_or_recommendation_affected,priority,notes` (kind: different-kind or deeper; priority High, Medium, Low).
5. `sources.csv`: `source_id,citation,title,author_or_publisher,date,url,doi,source_type,accessed,notes` with IDs `<PFX>-01`, `<PFX>-02` ... (source_type from: gov/statistics, intergovernmental, peer-reviewed, preprint, market-research, company, press, advocacy, database, other; accessed 2026-09-25).
6. `new_facts.csv`: `fact,part_vi_claim_affected,where,effect (contradicts|updates|strengthens|adds),source_ids,evidence_label,confidence,demand_evidence_type`.

Aim for 20 to 45 sources. Finish by replying with a 250-word summary: the three biggest gaps for your actor group, the new facts that change Part VI, and your top five candidate lines.
