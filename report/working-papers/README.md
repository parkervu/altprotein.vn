# Working papers

These folders hold the unedited research notes and data files from the research waves run on 23 and 24 September 2026 for
"Alternative protein in Vietnam: a supply-side scoping study" (AltProtein Vietnam, edition 1.1, September 2026). They are published
for transparency, so readers can trace any number in the report back to the agent note that produced it.

- `wave1/`: first-wave notes and CSVs, one folder per research agent (macro, feedstock, industry, ecosystem, regulation,
  rnd, capital, regional, costs, formulation).
- `wave2/`: second-wave notes and CSVs (science, regulation2, feedmkt, geo_time, verify_co, infra, biblio). Wave 2 was
  run to close gaps and to check wave 1 claims.
- `wave3/`: notes, CSVs and calculation scripts from the futures round of edition 1.1 (24 September 2026), one folder
  per stream: frontier_gas (FTG), frontier_bio (FTB), climate (CLM), balance_model (QNT), geo_macro (GEO), econ_policy (ECF),
  horizon_scan (HSC), national_targets (NTS), and the gap-closing streams next_gen_feedstocks (NGF, wave 4),
  aquaculture_futures (AQF, wave 4), spatial_hubs (HUB, wave 4) and vision_benchmarks (VIS, wave 5). `wave3/design/`
  holds the futures goals and question tree, the agent protocol and the brief for each stream. The `.py` files are the
  calculation scripts behind "our calculation" figures in Part V (standard-library Python); `balance_model/model.py` is
  the research copy of `tools/balance_model.py`.
- `field/`: the retail field audit logs (Nha Trang, 6 September 2026; Ho Chi Minh City, 16 and 20 September 2026;
  186 SKUs in 11 stores). Source ID FORM-01.

How to read them:

- These are working notes, not the report. They were not edited for style or consistency, and they may contain errors
  that were found and corrected later.
- Where the notes disagree with the report, the report is the current position. Where a wave 2 note corrects a wave 1
  note, wave 2 supersedes wave 1. The corrections are recorded in `data/` (see `change_log` in companies.csv,
  facilities.csv and instruments.csv, and `disagreements.csv`).
- Source IDs in the notes (for example MAC-04 or REG2-11) resolve to `data/sources.csv` and `sources/bibliography.md`.
- Some notes mention file paths on the research machine (for example `research/wave1/...`). The same files
  are in this folder under the same sub-folder names.
- For waves 1 and 2 only the Markdown notes and CSV files were copied. For the futures round, the calculation scripts are included; helper scripts and raw query logs are not.
