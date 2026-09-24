# Brief NTS: Vietnam's long-horizon targets and plans (2030 to 2050)

Folder: `research/wave3/national_targets/` · Source ID prefix: **NTS** · WebSearch cap: **12** · Question tree: F5, F9.

Edition 1.0 context: ch05-rules, ch13-outlook, data/milestones.csv, data/instruments.csv (do not duplicate; extend to 2045 and 2050 horizons).

## Task
Read the primary texts (thuvienphapluat.vn, vanban.chinhphu.vn, chinhphu.vn, baochinhphu.vn, official English translations) and extract every target, direction or task relevant to protein supply, feed, biotechnology, biomanufacturing, food systems, land, water, energy inputs and climate for 2030, 2035, 2045 and 2050. Record the exact wording in Vietnamese (short quote) plus an English rendering. Priority instruments:
- Resolution 36-NQ/TW (2023) on biotechnology, vision 2045; Resolution 189/NQ-CP action programme; any national programme for the biotech industry.
- Resolution 57-NQ/TW (2024) on science, technology, innovation and digital transformation, vision 2045.
- Resolution 19-NQ/TW (2022) on agriculture, farmers and rural areas to 2030, vision 2045.
- Resolution 68-NQ/TW (2025) on the private economy (if relevant targets).
- Decision 150/QD-TTg (2022) sustainable agriculture and rural development strategy 2021 to 2030, vision 2050.
- Decision 1520/QD-TTg (2020) livestock strategy, vision 2045 (2045 elements only; 2030 targets are already in edition 1.0).
- Decision 339/QD-TTg (2021) fisheries development strategy to 2030, vision 2045 (aquaculture volume, fishmeal, feed).
- Decision 896/QD-TTg (2022) national climate change strategy to 2050 (agriculture and livestock emissions).
- Decision 882/QD-TTg (2022) national green growth strategy 2021 to 2030, vision 2050.
- Decision 300/QD-TTg (2023) food systems transformation action plan.
- Decision 687/QD-TTg (2022) circular economy scheme.
- Mekong Delta regional plan 2021 to 2030, vision 2050 (Decision 287/QD-TTg 2022).
- National master plan 2021 to 2030, vision 2050 (Resolution 81/2023/QH15): rice land floor, agricultural land.
- Hydrogen energy strategy (Decision 165/QD-TTg 2024); revised PDP8 (Decision 768/QD-TTg 2025) to 2050.
- National nutrition strategy 2021 to 2030, vision 2045 (Decision 02/QD-TTg 2022): protein intake targets (macro input only).
- National AI strategy; any national biotech or semiconductor-style human-resource plan with biotech targets.
- NDC updates (2022 NDC; check for NDC 3.0 in 2025 or 2026) and net zero 2050.
Also note which instruments were replaced or amended after the 2025 administrative reforms.

## CSV output
- `national_targets_2050.csv`: instrument, number, date, issuer, domain, target_text_vi (short quote), target_text_en, metric, value, unit, horizon_year, relevance_to_protein_supply (1 to 3), status (in force, amended, replaced), source_ids, evidence_label, confidence, notes.
