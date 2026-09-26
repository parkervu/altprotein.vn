---
id: app-d1-diet-chay-prices
title: "D1. Protein diet, chay and price data"
short_title: "D1. Diet and prices"
section: appendix
order: 41
summary: "The data behind chapters 11 and 12: protein supply and intake by food group, household use of meat, fish, eggs and tofu by area, income and region, food spending and eating out, retail prices per 100 g of protein, demand drivers and projections to 2035, the protein ladder of Vietnam and its neighbours, the chay practice and market registers, national diet surveillance (7.9% of adults had a flesh-free day in 2021; 40% ate tofu, soy milk or beans) and what children's school plates carry, including upland boarding schools."
audiences: [research, startups, investors, policy, manufacturers, international]
reading_time_min: 55
key_numbers: []
related_data: [demand_protein_intake.csv, demand_protein_prices.csv, demand_food_spending.csv, demand_protein_ladder.csv, demand_drivers.csv, chay_practice.csv, chay_market.csv, diet_quality_vietnam.csv, trade_seasonal_summary.csv, upland_school_weeks.csv, protein_quality.csv, protein_food_micronutrients.csv, cost_per_quality_protein.csv, nutrition_trials.csv]
related_pages: [ch11-protein-diet, ch12-chay-baseline, ch15-channels, app-m3-demand-method, app-d3-retail-demand-signals]
charts: []
---
# D1. Protein diet, chay and price data

**What this appendix contains.** The micro data behind [[ch11-protein-diet]] and [[ch12-chay-baseline]], generated from the data files named in each section. Different sources measure different things (food supply, individual intake, household acquisition for home use), so we never average them.

## D1.1 Which source measures what

| Source | What it measures | Weight basis | Latest year | Use it for |
|---|---|---|---|---|
| FAOSTAT food balance sheets [@DIE-07; @DIE-08] | Food available for consumption, national | Meat carcass weight, fish live weight | 2023 | Levels against neighbours, protein ladder, trends |
| OECD-FAO Outlook 2026 to 2035 [@DIE-11] | Food use per person, modelled | Meat retail weight | 2035 projection | Direction and speed to 2035 |
| USDA PSD [@DIE-10] | Domestic consumption tonnes | Pork and beef carcass, chicken ready to cook | 2026 forecast | Year-on-year shocks and trade |
| NIN General Nutrition Survey [@DIE-01; @DIE-02] | Individual intake, 22,400 households in 25 provinces | As eaten | 2019 to 2020 | Intake against recommendations |
| VHLSS 2024 [@DIE-05] | Household acquisition for home use, 46,995 households | As bought | 2024 | Trends by urban and rural, income, region; spending |
| Hoang Thu Nga et al. [@DIE-32] | 24-hour recall, 929 adults, Red River Delta | As eaten | 2022 | Recent measured protein intake |
| Global Diet Quality Project, Vietnam round [@APR-36; @BRD-03] | Whether each of 29 food groups was eaten on the previous day; Gallup telephone probability sample, 1,007 adults aged 15 and over | Yes or no, no grams | 2021 (13 November to 12 December) | Daily reach of food groups; flesh-free days as a ceiling for chay days (D1.9) |
| School menus and weighed boarding diets [@PMR-26; @UPL-01; @UPL-18] | Published lunch nutrition sheets (Hanoi); published upland boarding menus (13 schools); kitchen-weighed diets (two Yen Bai schools) | As planned or as served | 2019 to 2026 | What children's school plates carry (D1.10) |

## D1.2 Protein supply, intake and household use

Selected rows from `demand_protein_intake.csv` (460 rows in all).

| Source | Year | Geography | Food group | Value | Unit | Measure | Source |
|---|---|---|---|---|---|---|---|
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | All foods | 79.67 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | All animal foods | 30.48 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | All plant foods | 49.19 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Meat (all) | 16.89 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Pork | 9.76 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Poultry | 5.32 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Beef | 1.56 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Offal | 1.81 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Fish and seafood | 9.12 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Eggs | 0.96 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Milk and dairy (excl. butter) | 1.37 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Soybeans (as food, incl. tofu and soy milk equivalent) | 2.91 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Pulses (other legumes) | 1.67 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Groundnuts | 1.44 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Cereals | 35.09 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Rice | 31.35 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Wheat | 2.34 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2010 | Vietnam | Vegetables | 5.34 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | All foods | 102.2 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | All animal foods | 43.23 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | All plant foods | 58.97 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Meat (all) | 25.09 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Pork | 13.27 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Poultry | 8.8 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Beef | 2.74 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Offal | 2.93 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Fish and seafood | 11.12 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Eggs | 1.24 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Milk and dairy (excl. butter) | 2.5 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Soybeans (as food, incl. tofu and soy milk equivalent) | 4.94 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Pulses (other legumes) | 2.63 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Groundnuts | 1.93 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Cereals | 33.04 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Rice | 26.99 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Wheat | 3.27 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| FAOSTAT Food Balance Sheets (2010 to 2023 series) | 2023 | Vietnam | Vegetables | 11.01 | g protein per person per day | supply | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| NIN General Nutrition Survey 2019 to 2020 (press report of launch) | 2020 | Vietnam | Meat (all) | 136.4 | g per person per day | intake | [@DIE-01; @DIE-02; @DIE-03] {VN-direct\|Medium} {dx:revealed} |
| NIN General Nutrition Survey 2019 to 2020 (press report of launch) | 2020 | Vietnam, urban | Meat (all) | 155.3 | g per person per day | intake | [@DIE-01; @DIE-02] {VN-direct\|Medium} {dx:revealed} |
| NIN General Nutrition Survey 2009 to 2010 (as cited at 2021 launch) | 2010 | Vietnam | Meat (all) | 84 | g per person per day | intake | [@DIE-02] {VN-direct\|Medium} {dx:revealed} |
| NIN General Nutrition Survey 2019 to 2020 (press report of launch) | 2020 | Vietnam | Energy | 2023 | kcal per person per day | intake | [@DIE-01; @DIE-02] {VN-direct\|Medium} {dx:revealed} |
| Our derivation from NIN GNS 2019 to 2020 | 2020 | Vietnam | All foods (protein) | 79.9 | g protein per person per day | intake (derived) | [@DIE-01; @DIE-02] {VN-direct\|Low} {dx:inferred} |
| NIN General Nutrition Survey 2019 to 2020 (press report of launch) | 2020 | Vietnam | Vegetables | 231.0 | g per person per day | intake | [@DIE-01; @DIE-02] {VN-direct\|Medium} {dx:revealed} |
| NIN General Nutrition Survey 2019 to 2020 (press report of launch) | 2020 | Vietnam | Fruit | 140.7 | g per person per day | intake | [@DIE-01; @DIE-02] {VN-direct\|Medium} {dx:revealed} |
| Hoang Thu Nga et al. 2024, 24 h recall | 2022 | Red River Delta: urban (Cau Giay, Hanoi) | All foods (protein) | 72.3 | g protein per person per day (mean) | intake | [@DIE-32] {VN-direct\|High} {dx:revealed} |
| Hoang Thu Nga et al. 2024, 24 h recall | 2022 | Red River Delta: peri-urban (Gia Lam, Hanoi) | All foods (protein) | 71.0 | g protein per person per day (mean) | intake | [@DIE-32] {VN-direct\|High} {dx:revealed} |
| Hoang Thu Nga et al. 2024, 24 h recall | 2022 | Red River Delta: rural (Vu Thu, Thai Binh) | All foods (protein) | 77.8 | g protein per person per day (mean) | intake | [@DIE-32] {VN-direct\|High} {dx:revealed} |
| Hoang Thu Nga et al. 2024, 24 h recall | 2022 | Red River Delta: all three sites | All foods (protein) | 72.8 | g protein per person per day (mean) | intake | [@DIE-32] {VN-direct\|High} {dx:revealed} |

**Household use for home consumption (VHLSS), per person per month.**

| Year | Geography | Group | Food | Value | Unit | Source |
|---|---|---|---|---|---|---|
| 2010 | Vietnam | household members (46,995 households in 2024) | Rice | 9.68 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2020 | Vietnam | household members (46,995 households in 2024) | Rice | 7.61 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Rice | 6.45 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Meat (all) | 1.79 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2018 | Vietnam | household members (46,995 households in 2024) | Meat (all) | 2.18 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2020 | Vietnam | household members (46,995 households in 2024) | Meat (all) | 2.32 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Meat (all) | 2.6 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Fish and shrimp | 1.42 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2018 | Vietnam | household members (46,995 households in 2024) | Fish and shrimp | 1.37 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2020 | Vietnam | household members (46,995 households in 2024) | Fish and shrimp | 1.5 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Fish and shrimp | 1.16 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Eggs (poultry) | 3.62 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2020 | Vietnam | household members (46,995 households in 2024) | Eggs (poultry) | 4.64 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Eggs (poultry) | 5.1 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Tofu | 0.5 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2020 | Vietnam | household members (46,995 households in 2024) | Tofu | 0.44 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Tofu | 0.43 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Beans and peas | 0.08 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Beans and peas | 0.06 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Peanuts and sesame | 0.07 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Peanuts and sesame | 0.05 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2010 | Vietnam | household members (46,995 households in 2024) | Sugar, molasses, milk, cakes and sweets | 0.55 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2020 | Vietnam | household members (46,995 households in 2024) | Sugar, molasses, milk, cakes and sweets | 0.6 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | household members (46,995 households in 2024) | Sugar, molasses, milk, cakes and sweets | 0.55 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 1 | Meat (all) | 1.97 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 2 | Meat (all) | 2.36 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 3 | Meat (all) | 2.63 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 4 | Meat (all) | 2.85 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 5 | Meat (all) | 3.17 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 1 | Fish and shrimp | 0.93 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 2 | Fish and shrimp | 1.17 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 3 | Fish and shrimp | 1.17 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 4 | Fish and shrimp | 1.19 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 5 | Fish and shrimp | 1.31 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 1 | Eggs (poultry) | 4.23 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 2 | Eggs (poultry) | 4.85 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 3 | Eggs (poultry) | 5.16 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 4 | Eggs (poultry) | 5.42 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 5 | Eggs (poultry) | 5.83 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 1 | Tofu | 0.4 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 2 | Tofu | 0.38 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 3 | Tofu | 0.41 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 4 | Tofu | 0.45 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 5 | Tofu | 0.5 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 1 | Rice | 7.27 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 2 | Rice | 6.67 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 3 | Rice | 6.34 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 4 | Rice | 6.1 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| 2024 | Vietnam | income quintile 5 | Rice | 5.9 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |

**By region, 2024 (pre-2025 statistical regions).**

| Region | Food | Value | Unit | Source |
|---|---|---|---|---|
| Vietnam, Red River Delta (pre-2025 statistical region) | Meat (all) | 3.19 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Northern midlands and mountains (pre-2025 statistical region) | Meat (all) | 3.1 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, North Central and Central coast (pre-2025 statistical region) | Meat (all) | 2.33 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Central Highlands (pre-2025 statistical region) | Meat (all) | 2.05 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, South East (pre-2025 statistical region) | Meat (all) | 2.33 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Mekong River Delta (pre-2025 statistical region) | Meat (all) | 2.22 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Red River Delta (pre-2025 statistical region) | Fish and shrimp | 0.97 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Northern midlands and mountains (pre-2025 statistical region) | Fish and shrimp | 0.58 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, North Central and Central coast (pre-2025 statistical region) | Fish and shrimp | 1.36 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Central Highlands (pre-2025 statistical region) | Fish and shrimp | 0.8 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, South East (pre-2025 statistical region) | Fish and shrimp | 1.13 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Mekong River Delta (pre-2025 statistical region) | Fish and shrimp | 1.75 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Red River Delta (pre-2025 statistical region) | Eggs (poultry) | 5.93 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Northern midlands and mountains (pre-2025 statistical region) | Eggs (poultry) | 5.1 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, North Central and Central coast (pre-2025 statistical region) | Eggs (poultry) | 4.87 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Central Highlands (pre-2025 statistical region) | Eggs (poultry) | 4.38 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, South East (pre-2025 statistical region) | Eggs (poultry) | 5.01 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Mekong River Delta (pre-2025 statistical region) | Eggs (poultry) | 4.62 | eggs per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Red River Delta (pre-2025 statistical region) | Tofu | 0.69 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Northern midlands and mountains (pre-2025 statistical region) | Tofu | 0.68 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, North Central and Central coast (pre-2025 statistical region) | Tofu | 0.31 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Central Highlands (pre-2025 statistical region) | Tofu | 0.32 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, South East (pre-2025 statistical region) | Tofu | 0.31 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Vietnam, Mekong River Delta (pre-2025 statistical region) | Tofu | 0.19 | kg per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |

**Projections (OECD-FAO baseline) and USDA consumption.**

| Source | Year | Food | Value | Unit | Source |
|---|---|---|---|---|---|
| USDA FAS PSD Online (April 2026 release) | 2018 | Pork | 3425.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2019 | Pork | 2993.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2020 | Pork | 3068.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2023 | Pork | 3648.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2024 | Pork | 3878.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2025 | Pork | 4073.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2026 | Pork | 4197.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:inferred} |
| USDA FAS PSD Online (April 2026 release) | 2018 | Chicken | 927.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2019 | Chicken | 1170.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2020 | Chicken | 1341.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2023 | Chicken | 1455.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2024 | Chicken | 1514.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2025 | Chicken | 1595.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2026 | Chicken | 1668.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:inferred} |
| USDA FAS PSD Online (April 2026 release) | 2018 | Beef and veal | 299.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2019 | Beef and veal | 339.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2020 | Beef and veal | 380.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2023 | Beef and veal | 426.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2024 | Beef and veal | 433.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2025 | Beef and veal | 420.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:revealed} |
| USDA FAS PSD Online (April 2026 release) | 2026 | Beef and veal | 425.0 | thousand tonnes per year | [@DIE-10] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2015 | Pork | 22.66 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2020 | Pork | 22.57 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2025 | Pork | 28.64 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2030 | Pork | 31.08 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2035 | Pork | 31.51 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2015 | Poultry | 6.94 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2020 | Poultry | 13.01 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2025 | Poultry | 17.03 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2030 | Poultry | 21.23 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2035 | Poultry | 25.8 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2015 | Beef and veal | 8.34 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2020 | Beef and veal | 3.58 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2025 | Beef and veal | 3.99 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2030 | Beef and veal | 4.31 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2035 | Beef and veal | 4.6 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2015 | Sheep meat | 0.1 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2020 | Sheep meat | 0.15 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2025 | Sheep meat | 0.17 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2030 | Sheep meat | 0.22 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2035 | Sheep meat | 0.25 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2015 | Fish and seafood | 35.77 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2020 | Fish and seafood | 40.69 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2025 | Fish and seafood | 42.4 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2030 | Fish and seafood | 46.41 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2035 | Fish and seafood | 46.79 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2025 | Rice | 132.84 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2030 | Rice | 128.04 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| OECD-FAO Agricultural Outlook 2026 to 2035 | 2035 | Rice | 123.21 | kg per person per year | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |

## D1.3 Retail price per 100 g of protein, 24 September 2026

Formula: VND per 100 g of protein = 100 x price per kg / (10 x protein g per 100 g x edible share). Protein values from the Vietnamese Food Composition Table unless stated. USD at 26,000 VND.

| Food | Product | Retailer or basis | VND per kg | Protein g per 100 g | Edible share | VND per 100 g protein | USD per 100 g protein | Source |
|---|---|---|---|---|---|---|---|---|
| Pork, lean | Thit nac heo C.P, tray 400 g | Bach Hoa Xanh online | 132000 | 19.0 | 0.98 | 70892 | 2.73 | [@COST-39; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Pork, leg | Thit dui heo C.P, tray 400 g | Bach Hoa Xanh online | 115000 | 16.5 | 0.98 | 71119 | 2.74 | [@COST-39; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Pork, belly | Ba roi heo C.P, tray 400 g | Bach Hoa Xanh online | 149000 | 14.5 | 0.98 | 104856 | 4.03 | [@COST-39; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Chicken, breast fillet with skin | Uc ga phi le co da, 300 g | Bach Hoa Xanh online | 90900 | 20.3 | 1.0 | 44778 | 1.72 | [@COST-40; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Chicken, thigh meat | Ma dui ga cat san, 400 g | Bach Hoa Xanh online | 79210 | 20.3 | 1.0 | 39020 | 1.50 | [@COST-40; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Eggs, hen | Trung ga tuoi T.Food, box of 10 | Bach Hoa Xanh online |  | 14.8 | 0.86 | 34284 | 1.32 | [@COST-41; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Eggs, duck | Trung vit, box of 10 | Bach Hoa Xanh online |  | 13.0 | 0.88 | 41209 | 1.58 | [@COST-41; @DIE-12] {VN-direct\|Low} {dx:revealed} |
| Pangasius (basa), fillet | Ca basa phi le, 300 g | Bach Hoa Xanh online | 100000 | 15.0 | 1.0 | 66667 | 2.56 | [@DIE-15; @DIE-13; @DIE-14] {VN-direct\|Medium} {dx:revealed} |
| Pangasius (basa), fresh fillet | File basa tuoi kg, Thoai An | Co.op Online | 116800 | 15.0 | 1.0 | 77867 | 2.99 | [@DIE-19; @DIE-13; @DIE-14] {VN-direct\|Medium} {dx:revealed} |
| Tilapia (red), cleaned whole | Ca dieu hong lam sach kg | Co.op Online | 79900 | 19.7 | 0.57 | 71155 | 2.74 | [@DIE-19; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Shrimp, whiteleg, whole | Tom the C.P, 200 g | Bach Hoa Xanh online | 165000 | 17.6 | 0.46 | 203804 | 7.84 | [@DIE-15; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Shrimp, peeled meat | Thit tom Minh Phu, 200 g | Bach Hoa Xanh online | 350000 | 17.6 | 1.0 | 198864 | 7.65 | [@DIE-15; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Beef, leg (dui bo) | Dui bo, 200 g | Bach Hoa Xanh online | 294810 | 21.0 | 0.98 | 143251 | 5.51 | [@DIE-16; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Beef, shank (bap bo) | Bap bo, 200 g | Bach Hoa Xanh online | 267840 | 21.0 | 0.98 | 130146 | 5.01 | [@DIE-16; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Beef, flank or brisket (nam bo) | Nam bo, 200 g | Bach Hoa Xanh online | 245000 | 18.0 | 0.98 | 138889 | 5.34 | [@DIE-16; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Tofu, fresh | Dau phu tuoi Lang Mo, box 400 g | WinMart online | 32750 | 10.9 | 1.0 | 30046 | 1.16 | [@DIE-23; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Tofu, fresh (audit, label basis) | Five tofu SKUs, Co.opmart HCMC, Sept 2026 | Retail audit (FORM-01) |  |  | 1.0 | 66265 | 2.55 | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| Soy milk, packaged | Fami nguyen chat, carton 36 x 200 ml | Bach Hoa Xanh online | 20833 | 1.9 | 1.0 | 109647 | 4.22 | [@DIE-17; @FORM-01] {VN-direct\|Medium} {dx:revealed} |
| Peanuts, shelled | Dau phong Xuan Hong 500 g | Co.op Online | 104400 | 27.5 | 0.98 | 38738 | 1.49 | [@DIE-21; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Mung beans, dehulled | Dau xanh khong vo Xuan Hong 500 g | Co.op Online | 84600 | 23.4 | 0.98 | 36892 | 1.42 | [@DIE-20; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Soybeans, dry | Dau nanh Xuan Hong 500 g | Co.op Online | 48400 | 34.0 | 0.98 | 14526 | 0.56 | [@DIE-22; @DIE-12] {VN-direct\|Medium} {dx:revealed} |
| Milk, fresh UHT | Vinamilk 100% khong duong, 12 x 1 L | Bach Hoa Xanh online | 35833 | 3.9 | 1.0 | 91879 | 3.53 | [@DIE-18; @DIE-12] {VN-direct\|Low} {dx:revealed} |
| Meat, all types (household average) | VHLSS 2024: meat spending 349,800 VND and 2.60 kg per person per month | National household average (all channels) | 134538 | 16.5 | 0.98 | 83202 | 3.20 | [@DIE-05; @DIE-12] {VN-direct\|Low} {dx:revealed} |
| Tofu (household average) | VHLSS 2024: tofu spending 9,200 VND and 0.43 kg per person per month | National household average (all channels) | 21395 | 10.9 | 1.0 | 19628 | 0.75 | [@DIE-05; @DIE-12] {VN-direct\|Low} {dx:revealed} |
| Rice (household average) | VHLSS 2024: rice spending 118,500 VND and 6.45 kg per person per month | National household average (all channels) | 18372 | 7.9 | 1.0 | 23256 | 0.89 | [@DIE-05; @DIE-12] {VN-direct\|Low} {dx:revealed} |

## D1.4 Food spending and eating out

| Indicator | Year | Value | Unit | Source |
|---|---|---|---|---|

| Indicator | Geography | Group | Value | Unit | Source |
|---|---|---|---|---|---|
| Eating-out spending per person per month | Vietnam | all | 295.0 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam | quintile 1 | 79.4 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam | quintile 2 | 181.4 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam | quintile 3 | 285.1 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam | quintile 4 | 363.4 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam | quintile 5 | 558.5 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, Red River Delta (pre-2025 statistical region) | all households | 289.8 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, Northern midlands and mountains (pre-2025 statistical region) | all households | 104.4 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, North Central and Central coast (pre-2025 statistical region) | all households | 274.0 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, Central Highlands (pre-2025 statistical region) | all households | 174.9 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, South East (pre-2025 statistical region) | all households | 538.6 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, Mekong River Delta (pre-2025 statistical region) | all households | 247.7 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, urban | all households | 482.7 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| Eating-out spending per person per month | Vietnam, rural | all households | 179.1 | thousand VND per person per month | [@DIE-05] {VN-direct\|High} {dx:revealed} |

## D1.5 Demand drivers: population, income, health, prices and food safety

| Driver | Indicator | Value | Unit | Year | Source |
|---|---|---|---|---|---|
| demography | Population | 101.6 | million | 2025 | [@DIE-36] {VN-direct\|Medium} {dx:revealed} |
| demography | Population | 104.25 | million | 2030 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| demography | Population | 106.53 | million | 2035 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| demography | Population | 108.44 | million | 2040 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| demography | Population | 109.69 | million | 2045 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| demography | Population | 110.01 | million | 2050 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| demography | Share of population aged 65 and over | 9.5 | % | 2025 | [@DIE-36] {VN-direct\|Medium} {dx:revealed} |
| demography | Share of population aged 65 and over | 13.9 | % | 2035 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| demography | Share of population aged 65 and over | 20.0 | % | 2050 | [@DIE-36] {VN-direct\|Medium} {dx:inferred} |
| urbanisation | Urban share of population | 24.4 | % | 2000 | [@DIE-36] {VN-direct\|Medium} {dx:revealed} |
| urbanisation | Urban share of population | 30.3 | % | 2010 | [@DIE-36] {VN-direct\|Medium} {dx:revealed} |
| urbanisation | Urban share of population | 35.6 | % | 2020 | [@DIE-36] {VN-direct\|Medium} {dx:revealed} |
| urbanisation | Urban share of population | 38.8 | % | 2025 | [@DIE-36] {VN-direct\|Medium} {dx:revealed} |
| income | GDP per person, PPP | 7275 | constant 2021 international USD | 2010 | [@DIE-09] {VN-direct\|High} {dx:revealed} |
| income | GDP per person, PPP | 9248 | constant 2021 international USD | 2015 | [@DIE-09] {VN-direct\|High} {dx:revealed} |
| income | GDP per person, PPP | 11851 | constant 2021 international USD | 2020 | [@DIE-09] {VN-direct\|High} {dx:revealed} |
| income | GDP per person, PPP | 13535 | constant 2021 international USD | 2023 | [@DIE-09] {VN-direct\|High} {dx:revealed} |
| income | GDP per person, PPP | 15457 | constant 2021 international USD | 2025 | [@DIE-09] {VN-direct\|High} {dx:revealed} |
| income | Share of people in households consuming at least USD 12 per person per day | 29.2 | % | 2010 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 20 per person per day | 10.7 | % | 2010 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 12 per person per day | 46.7 | % | 2016 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 20 per person per day | 17.8 | % | 2016 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 12 per person per day | 59.6 | % | 2020 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 20 per person per day | 27.6 | % | 2020 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 12 per person per day | 57.0 | % | 2022 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Share of people in households consuming at least USD 20 per person per day | 24.6 | % | 2022 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Mean household consumption per person per day | 16.59 | USD PPP per day | 2022 | [@DIE-35] {VN-direct\|Medium} {dx:revealed} |
| income | Average income per person per month | 5.4 | million VND | 2024 | [@DIE-06] {VN-direct\|High} {dx:revealed} |
| diet | Meat intake | 136.4 | g per person per day | 2020 | [@DIE-01; @DIE-02] {VN-direct\|Medium} {dx:revealed} |
| diet | Animal share of protein supply | 42.3 | % | 2023 | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| diet | Meat food supply per person | 60.5 | kg carcass weight per year | 2023 | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| diet | Meat food use per person (pork, poultry, beef, sheep) | 49.83 | kg retail weight per year | 2025 | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| diet | Meat food use per person (pork, poultry, beef, sheep) | 56.84 | kg retail weight per year | 2030 | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| diet | Meat food use per person (pork, poultry, beef, sheep) | 62.16 | kg retail weight per year | 2035 | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| diet | Total meat food use (four meats) | 5.06 | million tonnes retail weight | 2025 | [@DIE-11; @DIE-36] {VN-direct\|Low} {dx:inferred} |
| diet | Total meat food use (four meats) | 5.93 | million tonnes retail weight | 2030 | [@DIE-11; @DIE-36] {VN-direct\|Low} {dx:inferred} |
| diet | Total meat food use (four meats) | 6.62 | million tonnes retail weight | 2035 | [@DIE-11; @DIE-36] {VN-direct\|Low} {dx:inferred} |
| diet | Fish food use per person | 42.4 | kg live weight equivalent per year | 2025 | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| diet | Fish food use per person | 46.79 | kg live weight equivalent per year | 2035 | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| diet | Rice food use per person | 132.84 | kg per year | 2025 | [@DIE-11] {VN-direct\|Medium} {dx:revealed} |
| diet | Rice food use per person | 123.21 | kg per year | 2035 | [@DIE-11] {VN-direct\|Medium} {dx:inferred} |
| diet | Eating out as share of household food spending | 22.5 | % | 2024 | [@DIE-05] {VN-direct\|High} {dx:revealed} |
| health | Adult overweight prevalence (BMI 25 or more, age-standardised, 18+) | 8.4 | % | 2010 | [@DIE-28] {VN-direct\|Medium} {dx:revealed} |
| health | Adult overweight prevalence (BMI 25 or more, age-standardised, 18+) | 16.3 | % | 2020 | [@DIE-28] {VN-direct\|Medium} {dx:revealed} |
| health | Adult overweight prevalence (BMI 25 or more, age-standardised, 18+) | 20.0 | % | 2024 | [@DIE-28] {VN-direct\|Medium} {dx:revealed} |
| health | Diabetes prevalence (age-standardised, 18+) | 10.9 | % | 2022 | [@DIE-28] {VN-direct\|Medium} {dx:revealed} |
| health | Hypertension prevalence (age-standardised, 30 to 79) | 29.7 | % | 2019 | [@DIE-28] {VN-direct\|Medium} {dx:revealed} |
| health | Stunting, children under 5 | 19.6 | % | 2020 | [@DIE-01; @DIE-03] {VN-direct\|Medium} {dx:revealed} |
| health | Stunting, children under 5 (latest) | 18 | % | 2023 | [@APR-27] {VN-direct\|High} {dx:revealed} |
| health | Stunting, ethnic minority children under 5 | 32 | % | 2023 | [@APR-27] {VN-direct\|High} {dx:revealed} |
| health | Zinc deficiency, children aged 6 to 59 months | 53.3 | % | 2020 | [@APR-42] {VN-direct\|Low} {dx:revealed} |
| health | Stunting, ages 5 to 19 | 14.8 | % | 2020 | [@DIE-01] {VN-direct\|Medium} {dx:revealed} |
| health | Overweight and obesity, ages 5 to 19 | 19.0 | % | 2020 | [@DIE-01; @DIE-03] {VN-direct\|Medium} {dx:revealed} |
| price | Pig producer price (annual average) | 78138 | VND per kg | 2020 | [@DIE-25] {VN-direct\|Medium} {dx:revealed} |
| price | Live hog price | 57,000 to 60,000 | VND per kg live weight | 2026-09-24 | [@DIE-26] {VN-direct\|Low} {dx:revealed} |
| food safety | Consumers worried about contaminated pork | more than 90 | % of respondents | 2023 (publication; fieldwork year not recorded by us) | [@DIE-30] {VN-direct\|Medium} {dx:stated} |
| food safety | Stated premium for pork from certified abattoirs | 70 | % above market price | 2024 (publication) | [@DIE-29] {VN-direct\|Medium} {dx:tested} |

## D1.6 The protein ladder: Vietnam and its neighbours

Animal share of protein supply, meat supply and income. Selected years from `demand_protein_ladder.csv` (1961 to 2023). Transfer assumption: neighbours show where diets have levelled off, not where Vietnam must go.

| Country | Year | Protein supply, g per person per day | Animal share, % | Meat, kg per person | Fish, kg per person | GDP per person, PPP 2021 USD | Source |
|---|---|---|---|---|---|---|---|
| Vietnam | 1990 | 45.1 | 21.1 | 15.4 | 12.7 | 2468 | [@DIE-08; @DIE-09] {VN-direct\|High} {dx:revealed} |
| Vietnam | 2000 | 54.8 | 28.0 | 23.6 | 20.2 | 4349 | [@DIE-08; @DIE-09] {VN-direct\|High} {dx:revealed} |
| Vietnam | 2013 | 86.2 | 38.1 | 45.0 | 33.5 | 8324 | [@DIE-07; @DIE-09] {VN-direct\|High} {dx:revealed} |
| Vietnam | 2023 | 102.2 | 42.3 | 60.5 | 40.1 | 13535 | [@DIE-07; @DIE-09] {VN-direct\|High} {dx:revealed} |
| China | 1990 | 64.5 | 20.4 | 23.7 | 10.5 | 1667 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| China | 2000 | 83.7 | 32.5 | 44.0 | 24.4 | 4066 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| China | 2013 | 111.0 | 39.9 | 59.0 | 35.3 | 13081 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| China | 2023 | 131.6 | 41.1 | 73.5 | 41.7 | 22687 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Korea | 1990 | 83.0 | 32.4 | 25.3 | 47.6 | 14378 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Korea | 2000 | 87.2 | 41.4 | 47.6 | 48.0 | 26404 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Korea | 2013 | 103.9 | 49.2 | 64.4 | 52.5 | 42710 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Korea | 2023 | 110.7 | 57.2 | 84.0 | 52.8 | 54029 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Japan | 1990 | 96.9 | 57.0 | 38.3 | 71.9 | 36138 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Japan | 2000 | 96.4 | 57.5 | 45.3 | 67.8 | 39732 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Japan | 2013 | 87.7 | 55.2 | 49.5 | 48.9 | 43304 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Taiwan | 1990 | 85.2 | 46.5 | 66.5 | 41.7 |  | [@DIE-08] {VN-adjacent\|High} {dx:revealed} |
| Taiwan | 2000 | 94.5 | 47.9 | 82.6 | 32.2 |  | [@DIE-08] {VN-adjacent\|High} {dx:revealed} |
| Taiwan | 2013 | 93.0 | 52.8 | 74.9 | 33.3 |  | [@DIE-07] {VN-adjacent\|High} {dx:revealed} |
| Taiwan | 2023 | 98.8 | 57.4 | 91.5 | 30.4 |  | [@DIE-07] {VN-adjacent\|High} {dx:revealed} |
| Thailand | 1990 | 49.2 | 38.6 | 23.6 | 20.0 | 8703 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Thailand | 2000 | 59.4 | 39.6 | 26.6 | 31.3 | 11624 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Thailand | 2013 | 65.7 | 42.4 | 28.9 | 26.5 | 18244 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Thailand | 2023 | 68.6 | 39.6 | 24.5 | 28.6 | 21245 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Malaysia | 1990 | 62.8 | 54.8 | 37.2 | 47.5 | 12014 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Malaysia | 2000 | 76.4 | 55.6 | 44.7 | 62.8 | 18533 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Malaysia | 2013 | 91.6 | 58.5 | 65.4 | 58.3 | 25736 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Malaysia | 2023 | 93.3 | 58.6 | 69.1 | 51.0 | 32858 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Philippines | 1990 | 50.6 | 39.1 | 18.3 | 35.6 | 4504 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Philippines | 2000 | 54.0 | 41.1 | 28.8 | 28.8 | 4740 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Philippines | 2013 | 65.8 | 41.4 | 33.6 | 27.8 | 7017 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Philippines | 2023 | 77.5 | 36.9 | 33.6 | 26.3 | 9899 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Indonesia | 1990 | 48.8 | 19.5 | 8.1 | 14.9 | 4873 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Indonesia | 2000 | 52.6 | 23.2 | 8.4 | 20.6 | 6056 | [@DIE-08; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Indonesia | 2013 | 71.5 | 27.1 | 11.4 | 34.8 | 10122 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |
| Indonesia | 2023 | 77.8 | 38.5 | 19.9 | 40.4 | 13890 | [@DIE-07; @DIE-09] {VN-adjacent\|High} {dx:revealed} |

## D1.7 Chay practice: every survey and estimate we found

None of the surveys below is a probability sample with a diet question; online panels count tofu and soy milk as plant-based, so they measure familiarity with the incumbent. The one probability survey that asks about diet, the Diet Quality Questionnaire (2021), does not ask about chay but caps it; it is set out in D1.9.

| ID | Source | Run by | Year | Sample | Frame | Full-time vegetarian | Periodic | Frequency definition | Source |
|---|---|---|---|---|---|---|---|---|---|
| S01 | Xu hướng ăn chay của người Việt Nam | W&S online market research | 2012 | 659 (355 men, 304 women) | Online panel, aged 16 and over, national online users | Not reported | 59% 'regularly' eat vegetarian | Mostly on lunar 1st and 15th and Buddhist holidays (no day counts published) | [@CHY-01] {VN-direct\|Low} {dx:stated} |
| S02 | Plant-based food alternatives: future or present? | Rakuten Insight | 2021 (12 to 30 November) | 4,018 | Rakuten Insight proprietary online panel, men and women aged 16 and over | 10% 'I only consume plant-based food' (base appears to be consumers; not stated) | 44% several times a week; 29% several times a month; 10% once or twice a month; 6% several times a year; 1% never | Self-reported frequency of 'plant-based alternatives', not chay days | [@CHY-02] {VN-direct\|Medium} {dx:stated} |
| S03 | Rakuten Insight plant-based survey 2024 (via Statista) | Rakuten Insight | 2024 (8 to 29 February) | 3,206 total; 2,757 had consumed; 332 had not | Online panel, aged 16 and over | Not available (paywalled) | Secondary reports give 44% or 45% several times a week (B-Company); values not verified | Self-reported frequency of plant-based alternatives | [@CHY-03; @CHY-04; @CHY-05; @CHY-13; @CHY-14] {VN-direct\|Low} {dx:stated} |
| S04 | Religion and Spirituality in East Asian Societies | Pew Research Center | 2023 (2 June to 17 September) | 2,255 adults | Face-to-face CAPI, multistage cluster probability sample stratified by region and urbanicity; about 11% of population inaccessible | No diet question asked | No diet question asked | Not applicable | [@CHY-06] {VN-direct\|High} {dx:stated} |
| S05 | White Paper on religion and religious policy (as reported) | Government Committee for Religious Affairs | 2023 (published 9 March 2023) | Administrative count | Registered followers of recognised religions | Not applicable | Not applicable | Not applicable | [@CHY-07] {VN-direct\|Medium} {dx:revealed} |
| S06 | 2019 Population and Housing Census (as reported) | General Statistics Office | 2019 | Full census | All residents; self-declared religion | Not applicable | Not applicable | Not applicable | [@CHY-08] {VN-direct\|Low} {dx:stated} |
| S07 | SHOULD model of plant-based food choice | Nguyen T.L. et al. (academic) | 2019 (September to October) | 1,477 | Convenience sample of people eating at vegetarian restaurants, chay inns and pagodas in 10 of 19 southern provinces | Not reported | Not reported | Describes 1st and 15th, 4 days (1st, 14th, 15th, 29th or 30th) and 10 days a month schedules | [@CHY-09] {VN-direct\|Medium} {dx:stated} |
| S08 | Intention to adopt a periodic vegetarian diet | Nguyen T.Q.N., Nguyen V.N., Nguyen M.D. (Tra Vinh University) | 2025 (year of publication; fieldwork date not stated) | 378 valid of 400 | Convenience sample at chay restaurants, chay food stores and pagodas, Ho Chi Minh City | Not reported | 'Many' follow 1st and 15th (no share given) | 1st, 8th, 14th, 15th; first and seventh lunar months | [@CHY-10] {VN-direct\|Low} {dx:stated} |
| S09 | Urban students' shift toward vegetarian practices | Tran T.N.N. et al. (VNU Ho Chi Minh City) | 2024 to 2025 (October 2024 to March 2025) | 707 | Criterion-based convenience sample of students at seven universities, Ho Chi Minh City, quota on diet and gender | Not reported | 49.6% classed vegetarian (set by quota, not a prevalence) | 'Regularly' or about 4 to 10 days a month | [@CHY-11] {VN-direct\|Low} {dx:stated} |
| S10 | Meat consumption practices of green consumers | Markoni E., Ha T.M. et al. (Bern University of Applied Sciences, VNUA) | 2021 to 2022 (November 2021 to March 2022) | 44 participants in 7 online group discussions | Self-identified green consumers in Hanoi, Ho Chi Minh City, Da Nang, Thanh Hoa, Nghe An | Not applicable | Buddhist vegetarian days mentioned by some | Not quantified | [@CHY-12] {VN-direct\|Medium} {dx:stated} |
| S11 | Southeast Asia plant-based consumer survey (GFI APAC with Good Growth) | GFI APAC and Good Growth | About 2022 to 2023 | Nearly 6,000 across 6 countries | Six Southeast Asian countries including Vietnam; frame not stated on summary page | Not reported for Vietnam | Not reported for Vietnam | Not applicable | [@ECO-24] {VN-adjacent\|Medium} {dx:stated} |
| S12 | Vietnam cooking survey (6,000 dinner photos) | Q&Me | 2023 (April) | 300 female home cooks cooking 5 or more times a week | Online panel, Ho Chi Minh City and Hanoi | Not reported | Not reported | Not reported | [@CHY-66] {VN-direct\|Medium} {dx:revealed} |
| S13 | Press estimate '10% of Vietnamese are vegetarian' | VTV; repeated by VnEconomy | 2024 to 2025 | None | None | 'About 10%' claimed | Not applicable | Undefined | [@CHY-15; @CHY-18] {VN-direct\|Low} {dx:stated} |

## D1.8 Chay market: volumes, spikes, restaurants and prices

| Category | Metric | Value | Unit | Year | Geography | Method quality | Source |
|---|---|---|---|---|---|---|---|
| soy foods | Soybeans used for food (whole beans: tofu, soy milk, sauces and other foods) | 540,000 | tonnes of soybeans | 2024/25 (Jan to Dec 2025 market year) | Vietnam | Medium: USDA Post estimate from trade balance; method not itemised | [@CHY-45] {VN-direct\|Medium} {dx:revealed} |
| soy foods | Soybeans used for food | 550,000 | tonnes of soybeans | 2025/26 (forecast) | Vietnam | Medium: Post forecast | [@CHY-45] {VN-direct\|Medium} {dx:revealed} |
| soy foods | Soybeans used for food | 570,000 | tonnes of soybeans | 2026/27 (forecast) | Vietnam | Medium: Post forecast | [@CHY-45] {VN-direct\|Medium} {dx:revealed} |
| soy foods | Soybean food use per person | about 5.4 | kg soybeans per person per year | 2025/26 | Vietnam | Low: our derivation, 550,000 t divided by an assumed population of about 101 million | [@CHY-45] {VN-direct\|Low} {dx:inferred} |
| soy foods | Soybean food supply, FAO cross-check | 533,000 (5.31 kg per person) | tonnes of soybeans | 2023 | Vietnam | High: FAO food balance sheet; supports the USDA estimate | [@DIE-07] {VN-direct\|High} {dx:revealed} |
| soy foods | Adults who ate dried beans, soybeans, tofu, soy milk or bean flour on the previous day | 40.0 (35.2 to 44.9) | % of adults | 2021 | Vietnam | Medium: national telephone probability sample, n = 1,007 | [@APR-36; @BRD-01] {VN-direct\|Medium} {dx:revealed} |
| soy foods | Soy milk plus tofu consumed | 286,000 | tonnes (basis not stated) | 2023 | Vietnam | Low: industry body summary, method not public, interested party | [@CHY-46] {VN-direct\|Low} {dx:revealed} |
| soy foods | Soy milk plus tofu consumed, forecast | 299,000 | tonnes | 2026 | Vietnam | Low: industry forecast | [@CHY-46] {VN-direct\|Low} {dx:inferred} |
| tofu | Tofu consumed, implied by USSEC split | about 31,500 | tonnes | 2023 | Vietnam | Low: our derivation 11% of 286,000 t; conflicts with craft village evidence | [@CHY-46] {VN-direct\|Low} {dx:inferred} |
| tofu | Soybeans processed per tofu household, Vong La village (Dong Anh, Hanoi) | 150 | kg soybeans per household per day | 2020 | Hanoi | Medium: municipal culture department page | [@CHY-49] {VN-direct\|Medium} {dx:revealed} |
| tofu | Soybeans processed per day, Hong Ha commune (333 tofu households) | 20 to 30 | tonnes of soybeans per day | 2017 | Hanoi | Low: press report | [@CHY-48] {VN-direct\|Low} {dx:revealed} |
| tofu | Tofu price per block, Mo village (Hanoi) | 2,500 | VND per block (weight not stated) | 2025 | Hanoi | Low: press | [@CHY-50] {VN-direct\|Low} {dx:revealed} |
| tofu | Tofu wholesale price by size (10 to 30 pieces per kg) | about 20,000 to 30,000 | VND per kg | 2017 | Hanoi | Low: our derivation from per-piece prices | [@CHY-48] {VN-direct\|Low} {dx:inferred} |
| tofu | Retail tofu price per 100 g protein, modern retail | 66,000 | VND per 100 g protein | 2026 (September) | Nha Trang and Ho Chi Minh City | Medium: supply study retail audit | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| tofu | Tofu output change in Vu Lan versus normal days (one Ho Chi Minh City shop) | +15 to +20 | percent | 2026 | Ho Chi Minh City | Low: single shop quote | [@CHY-19] {VN-direct\|Low} {dx:revealed} |
| soy milk | Vinasoy output claim | more than 1 billion | products (units) a year | 2026 | Vietnam | Low: company claim, unit undefined | [@CHY-47] {VN-direct\|Low} {dx:revealed} |
| mushrooms | Mushroom production | 250,000 to 270,000 | tonnes a year | 2025 | Vietnam | Low: press citing unnamed research institutions and Ken Research | [@CHY-51] {VN-direct\|Low} {dx:revealed} |
| mushrooms | Straw mushroom price in Vu Lan | about 160,000 | VND per kg | 2026 (August) | Ho Chi Minh City | Low: press market check | [@CHY-22] {VN-direct\|Low} {dx:revealed} |
| mushrooms | King oyster (dui ga) mushroom price in Vu Lan | 150,000 | VND per kg | 2026 (August) | Ho Chi Minh City | Low: press market check | [@CHY-22] {VN-direct\|Low} {dx:revealed} |
| industrial do chay | Vissan processed food output target (meat and chay combined) | 20,350 | tonnes | 2026 (plan) | Vietnam | Medium: AGM target reported by press | [@CHY-30] {VN-direct\|Medium} {dx:inferred} |
| industrial do chay | Vissan chay ha cao 250 g launch price (20% promotion) | 20,800 | VND per pack (about 83,200 per kg) | 2026 (August) | Ho Chi Minh City | Medium: press report of company launch | [@CHY-29] {VN-direct\|Medium} {dx:revealed} |
| industrial do chay | Vissan chay hoanh thanh 200 g launch price (20% promotion) | 19,200 | VND per pack (about 96,000 per kg) | 2026 (August) | Ho Chi Minh City | Medium | [@CHY-29] {VN-direct\|Medium} {dx:revealed} |
| industrial do chay | Frozen or chilled do chay price range, modern retail (22 SKUs with weight) | 5,580 to 17,292 | VND per 100 g of product | 2026 (September) | Nha Trang | Medium: supply study field log, some price pairings flagged | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| industrial do chay | Chay versus meat equivalent price difference (5 logged pairs) | 19% dearer to 52% cheaper | percent | 2026 (September) | Nha Trang | Medium: supply study field log | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| industrial do chay | Chinese canned soy 'plant based' luncheon meat | 30,811 to 35,000 | VND per 100 g | 2026 (September) | Nha Trang | Medium: supply study field log | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| industrial do chay | Label protein, Coop Select chay gyoza with noodles | 4.2 | g protein per 100 g | 2026 | Nha Trang | High: back label photographed | [@FORM-01] {VN-direct\|High} {dx:revealed} |
| industrial do chay | Unlabelled market mock meat ('ba khong') | 60,000 to 250,000 | VND per kg | 2026 (August) | Ho Chi Minh City | Low: press market check | [@CHY-23] {VN-direct\|Low} {dx:revealed} |
| industrial do chay | Market chay prices, Hanoi (nem, gio, chay fish or shrimp) | 60,000 to 300,000 | VND per kg | 2026 (August) | Hanoi | Low: press market check | [@CHY-20] {VN-direct\|Low} {dx:revealed} |
| industrial do chay | Chinese textured soy protein seized, declared value | about 68,000 | VND per kg (our derivation, 34 million VND for 500 kg) | 2022 | Dong Thap | Low: enforcement report | [@CHY-60] {VN-direct\|Low} {dx:revealed} |
| industrial do chay | Au Lac branch network claim | more than 80 | branches | 2026 | Vietnam | Low: company claim | [@CHY-67] {VN-direct\|Low} {dx:revealed} |
| industrial do chay | Vegan or vegetarian food market size (IMARC) | 103 to 112 | USD million | 2024 to 2025 | Vietnam | Rejected: paid report, method not visible | [@CHY-13; @CHY-18] {VN-direct\|Low} {dx:inferred} |
| demand spike | Chay shop sales in Vu Lan versus previous months | about 2 times; one shop 3 times | ratio | 2024 | Ho Chi Minh City | Low: shop owner quotes | [@CHY-16] {VN-direct\|Low} {dx:revealed} |
| demand spike | Go! hypermarket chay product sales month on month in Vu Lan | +20 to +40 | percent | 2024 | Ho Chi Minh City | Low: retailer quote to press | [@CHY-16] {VN-direct\|Low} {dx:revealed} |
| demand spike | Saigon Co.op chay inventory increase for Vu Lan | +40 | percent | 2024 | Saigon Co.op system | Low: retailer quote to press | [@CHY-16] {VN-direct\|Low} {dx:revealed} |
| demand spike | Saigon Co.op chay sales versus normal | +20 | percent | 2024 | Saigon Co.op system | Low: retailer quote to press | [@CHY-17] {VN-direct\|Low} {dx:revealed} |
| demand spike | NFC Food chay volume year on year to 15 August | 3.5 times | ratio | 2024 | Vietnam | Low: company quote | [@CHY-17] {VN-direct\|Low} {dx:revealed} |
| demand spike | Binh Tay Food chay orders versus normal periods | +200 | percent | 2024 | Vietnam | Low: company quote | [@CHY-17] {VN-direct\|Low} {dx:revealed} |
| demand spike | Saigon Chay chay meal and cake sales in two weeks of Vu Lan | nearly 15,000 | units | 2024 | Ho Chi Minh City | Low: company quote | [@CHY-16] {VN-direct\|Low} {dx:revealed} |
| demand spike | Vu Lan demand versus normal, Saigon Chay chairman | 2 to 3 times | ratio | 2025 | Ho Chi Minh City | Low: company quote | [@CHY-18] {VN-direct\|Low} {dx:revealed} |
| demand spike | Vu Lan chay sales volume, Hanoi sellers | 2 to 3 times | ratio | 2026 | Hanoi | Low: press | [@CHY-20] {VN-direct\|Low} {dx:revealed} |
| demand spike | Chay purchases month on month in Vu Lan, Can Tho | about +20 | percent | 2026 | Can Tho | Low: press | [@CHY-27] {VN-direct\|Low} {dx:revealed} |
| demand spike | Chay offering-tray orders year on year, one Hai Phong restaurant | -20 to -30 | percent | 2026 | Hai Phong | Low: single business | [@CHY-21] {VN-direct\|Low} {dx:revealed} |
| demand spike | First lunar month chay demand versus normal days, rising to 2 to 3 times near full moon | +15 to +20 | percent | 2026 (February) | Can Tho | Low: press | [@CHY-25] {VN-direct\|Low} {dx:revealed} |
| demand spike | Pre-made chay food sales at supermarkets in Vu Lan | +5 to +10 | percent | 2020 | Ho Chi Minh City | Low: government press centre report | [@CHY-28] {VN-direct\|Low} {dx:revealed} |
| demand spike | China's textured protein shipments to Vietnam (HS 2106.10), two months before the Vu Lan month, against an average month | 1.33 (5 of 6 years); 1.04 to the world; 1.02 to Thailand | index | 2019 to 2024 | Vietnam | Medium: monthly trade data, our calculation (`trade_seasonal_summary.csv`) | [@BRD-05; @BRD-07] {VN-direct\|Medium} {dx:revealed} |
| demand spike | China's textured protein shipments to Vietnam in the Tet month, against an average month | 0.38 | index | 2019 to 2024 | Vietnam | Medium: every Vietnam-bound flow, feed included, dips in the Tet month | [@BRD-05; @BRD-07] {VN-direct\|Medium} {dx:revealed} |
| demand spike | China's shipments of HS 3504 (protein isolates and other proteins) to Vietnam, two months before the Vu Lan month | 0.79 (1 of 6 years) | index | 2019 to 2024 | Vietnam | Medium: no chay timing; the 2024 jump in this code behaves like a feed or technical protein | [@BRD-05; @BRD-06] {VN-direct\|Medium} {dx:revealed} |
| demand spike | Chay Garden buffet surcharge on holy days (lunch; dinner) | 12.6; 8.3 | percent | 2026 | Ho Chi Minh City | Medium: booking platform price list; our derivation | [@CHY-33] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody 'An chay' listings, Ho Chi Minh City (old boundary) | more than 1,873 | listings | 2026 (September) | Ho Chi Minh City | Medium: platform count; cumulative, includes closed venues | [@CHY-31] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody 'An chay' listings, Hanoi | more than 401 | listings | 2026 (September) | Hanoi | Medium | [@CHY-31] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody 'An chay' listings, Da Nang (old boundary) | more than 201 | listings | 2026 (September) | Da Nang | Medium | [@CHY-31] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody 'An chay' listings, Hue | more than 31 | listings | 2026 (September) | Hue | Low: Foody coverage of Hue appears thin | [@CHY-31] {VN-direct\|Low} {dx:revealed} |
| restaurants | Foody 'An chay' listings, Can Tho (old boundary) | more than 132 | listings | 2026 (September) | Can Tho | Medium | [@CHY-31] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody 'An chay' listings, Khanh Hoa (old boundary) | more than 64 | listings | 2026 (September) | Khanh Hoa | Medium | [@CHY-31] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody 'An chay' listings, sum of 23 former provinces showing a count | at least 3,275 | listings | 2026 (September) | Vietnam (23 of 63 former provinces) | Medium: our sum of platform counts | [@CHY-31] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Foody vegetarian stores nationwide (as reported by B-Company) | 2,737 in 51 provinces | stores | 2024 (May) | Vietnam | Low: secondary report of platform | [@CHY-14] {VN-direct\|Low} {dx:revealed} |
| restaurants | Loving Hut outlets | 14 | outlets | 2026 | Vietnam | Medium: company site | [@CHY-32] {VN-direct\|Medium} {dx:revealed} |
| restaurants | Hum Vegetarian: outlets; customers a year; average spend | 3; about 150,000; 350,000 | outlets; customers; VND per customer | 2018 | Ho Chi Minh City | Low: company self-report | [@CHY-36] {VN-direct\|Low} {dx:revealed} |
| restaurants | Chay Garden locations | 2 | outlets | 2025 | Ho Chi Minh City | Medium: review | [@CHY-34] {VN-direct\|Medium} {dx:revealed} |
| price | Street chay rice plate, Ho Chi Minh City | 15,000 | VND per plate | 2026 | Ho Chi Minh City | Low: single shop | [@CHY-38] {VN-direct\|Low} {dx:revealed} |
| price | Street chay dishes, Quang Tri | 20,000 (single dish); 30,000 (meal) | VND | 2026 | Quang Tri | Low: single shop | [@CHY-39] {VN-direct\|Low} {dx:revealed} |
| price | Central Ho Chi Minh City chay rice; chay buffet | 30,000; 45,000 | VND | 2024 | Ho Chi Minh City | Low: press listicle | [@CHY-42] {VN-direct\|Low} {dx:revealed} |
| price | Self-serve chay buffet plate, Long Xuyen | 17,000 to 20,000 | VND per plate | 2022 | An Giang | Low: press | [@CHY-43] {VN-direct\|Low} {dx:revealed} |
| price | Chay dish, Nha Trang restaurants | 25,000 to 60,000 | VND per dish | 2025 | Nha Trang | Low: promotional listicle | [@CHY-44] {VN-direct\|Low} {dx:revealed} |
| price | Meat rice plate, Ho Chi Minh City street | 29,000 to 35,000 | VND per plate | 2026 | Ho Chi Minh City | Low: press | [@CHY-40] {VN-direct\|Low} {dx:revealed} |
| price | Student rice meal average, Ho Chi Minh City | 30,000 | VND per meal | 2025 | Ho Chi Minh City | Low: press | [@CHY-41] {VN-direct\|Low} {dx:revealed} |
| price | Premium chay restaurant average spend (Hum) | 350,000 to 400,000 | VND per bill | 2022 | Ho Chi Minh City | Low: press | [@CHY-37] {VN-direct\|Low} {dx:revealed} |
| price | Chay Garden buffet (weekday lunch to holy-day dinner) | 239,000 to 379,000 | VND per person | 2026 | Ho Chi Minh City | Medium: booking platform | [@CHY-33] {VN-direct\|Medium} {dx:revealed} |
| price | Chay buffet, mainstream restaurants and hotels | 100,000 to 200,000 | VND per person | 2025 | Ho Chi Minh City | Low: press | [@CHY-18] {VN-direct\|Low} {dx:revealed} |
| price | Pre-made chay offering tray, basic to premium | 380,000 to 2,000,000 | VND per tray | 2026 | Hanoi and Ho Chi Minh City | Low: press | [@CHY-20; @CHY-22] {VN-direct\|Low} {dx:revealed} |
| religion base | Buddhist places of worship | 18,544 | facilities | 2023 | Vietnam | Medium: government White Paper as reported | [@CHY-07] {VN-direct\|Medium} {dx:revealed} |

## D1.9 National diet surveillance: the Diet Quality Questionnaire

The Global Diet Quality Project (GAIN, Harvard and Gallup) asked a nationally representative sample of 1,007 Vietnamese adults aged 15 and over, by mobile telephone in Vietnamese, whether they ate each of 29 food groups on the previous day. Fieldwork ran from 13 November to 12 December 2021, an ordinary month holding two principal chay days; the design effect is 2.56 and the maximum margin of error 4.9 points. The country web page gives the fieldwork a month later; the data file and Gallup's methods table agree on November to December, and we use those [@APR-36; @BRD-03] {VN-direct|High} {dx:revealed}. The Vietnamese pulse item names *đậu khô, đậu nành, đậu phụ, sữa đậu nành hoặc bột đậu* (dried beans, soybeans, tofu, soy milk or bean flour), so it measures the daily reach of the incumbent soy foods; the processed-meat item leaves out *giò*, *chả* and *nem chua* (pork rolls, loaves and fermented pork), so it is a floor [@BRD-01; @BRD-02] {VN-direct|High}. Full rows: `diet_quality_vietnam.csv`.

| Indicator (previous day, % of adults) | All (95% interval) | Women | Men | Urban | Rural | Source |
|---|---|---|---|---|---|---|
| Pulses, including tofu and soy milk | 40.0 (35.2 to 44.9) | 43.7 | 36.3 | 40.5 | 39.2 | [@APR-36; @BRD-01] {VN-direct\|Medium} {dx:revealed} |
| Nuts or seeds | 22.0 | 22.7 | 21.2 | 24.5 | 16.9 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Processed meats (item as asked) | 18.1 (14.4 to 22.1) | 16.5 | 19.8 | 17.2 | 20.0 | [@APR-36; @BRD-01] {VN-direct\|Medium} {dx:revealed} |
| Unprocessed red meat | 76.1 | 71.0 | 81.1 | 74.7 | 78.8 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Poultry | 39.2 | 37.8 | 40.7 | 38.8 | 40.1 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Fish or seafood | 58.2 | 55.0 | 61.4 | 55.8 | 62.8 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Eggs | 65.1 | 66.4 | 63.9 | 66.0 | 63.4 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Dairy | 45.8 | 58.7 | 32.9 | 49.3 | 39.0 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Meat, poultry or fish | 92.1 (89.1 to 94.7) | 90.9 | 93.3 | 91.4 | 93.6 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| No meat, poultry or fish (our calculation) | 7.9 (5.3 to 11.0) | 9.1 | 6.7 | 8.6 | 6.4 | [@APR-36; @BRD-01] {VN-direct\|Medium} {dx:revealed} |
| No animal-source food at all (our calculation) | 4.3 (2.3 to 7.0) | 3.8 | 4.9 | 3.8 | 5.4 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |

Sample: 547 men, 460 women, 768 urban, 238 rural (weighted estimates); the rural subgroup is small, and subgroup differences sit within overlapping intervals except dairy by sex. The public results give no age, income or education split, and we found no downloadable microdata [@BRD-03; @BRD-04] {VN-direct|High}.

| Country | Fieldwork | No meat, poultry or fish (%) | Pulses (%) | Processed meats (%) | Source |
|---|---|---|---|---|---|
| Vietnam | Nov to Dec 2021 | 7.9 (5.3 to 11.0) | 40.0 | 18.1 | [@APR-36] {VN-direct\|Medium} {dx:revealed} |
| Cambodia | Aug to Oct 2021 | 3.3 | 23.9 | 5.5 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| Philippines | Aug to Oct 2021 | 5.8 | 39.4 | 35.7 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| Thailand | Sep to Nov 2023 | 9.8 | 31.6 | 24.8 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| Lao PDR | Aug to Dec 2021 | 10.6 | 19.3 | 33.1 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| Indonesia | Jul to Oct 2021 | 13.8 | 78.7 | 19.8 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| Malaysia | Aug to Nov 2023 | 14.7 | 25.1 | 16.4 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| China | Sep to Dec 2021 | 14.9 | 57.8 | 32.8 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |
| Myanmar | Sep to Oct 2023 | 17.3 | 36.8 | 10.5 | [@APR-36; @BRD-03] {VN-adjacent\|Medium} {dx:revealed} |

Flesh-free shares are our calculation; food lists differ by country, so comparisons are indicative.

**What it tests (our calculation)** {VN-direct|Medium} {dx:inferred}:

- **The central chay assumption is supported as a ceiling only.** A chay day is flesh-free, so chay-day person-days cannot exceed 7.9% in a month without festivals. Part III's 2.5% (30% keeping 2.5 days a month) uses about a third of the ceiling. If Vietnam's other flesh-free days were at Cambodia's or the Philippines' level (3.3 to 5.8%), chay-type days would be 2.1 to 4.6% of person-days (illustrative, Low), which brackets 2.5%.
- **The top of the earlier range is contradicted in practice.** 6.7% would need 85% of all flesh-free days to be chay days and exceeds the lower confidence bound (5.3%); about 5% is a practical upper bound. The sensitivity range in [[ch18-demand-sizing]] (1.7 to 4.2%) sits inside the ceiling.
- **"About 10% of Vietnamese are vegetarian" is contradicted.** Ten per cent vegetarians plus even the low chay case would exceed the 11.0% upper bound of flesh-free days.
- **Processed meat cannot be tested.** The item omits *giò* and *chả* and counts days, not grams.
- **Legume supply and the chay-day protein assumption are consistent.** FAO balance sheets give soybeans and other pulses 6.94 g of protein per person a day in 2021; spread over the 40% of adults who eat legumes on a given day, that is about 17 g per eating day (supply, not intake), the same order as the 12 g a chay day is assumed to carry [@DIE-07; @APR-36].
- **A cheap next step.** Gallup holds the interview dates, so the flesh-free share on recall days that fell on the lunar 1st or 15th (about 65 of them) can be compared with other days; a doubling would be detectable [@BRD-03; @BRD-07].

## D1.10 What children's school plates carry

The data behind the correction in [[ch11-protein-diet]] section 11.2: for school-age children, including upland boarders, protein and zinc are met at lunch and dinner, and the documented shortfalls are breakfast, calcium and vitamin A. Rows are selected from `upland_school_weeks.csv`, `protein_quality.csv`, `protein_food_micronutrients.csv` and `nutrition_trials.csv`; school channels are in [[ch15-channels]].

| Topic | Indicator | Value | Year | Source |
|---|---|---|---|---|
| Need | Protein need a day, age 6 to 7; boys 10 to 11 (NIN lookup, 2026) | 32 g; 49 g (a lunch is meant to give 30 to 40% of the day) | 2026 | [@NQR-01] {VN-direct\|Medium} {dx:revealed} |
| Need | Zinc need a day at age 6 to 7, by diet (school guidance, Decision 3958/QĐ-BYT) | 3.3 mg with plenty of animal protein; 5.6 mg with a moderate amount; 11.2 mg with little or none | 2025 | [@APR-04] {VN-direct\|High} {dx:revealed} |
| Urban plates | Protein in published Hanoi primary-school lunches | 31.8 g (21.2 to 38.6), 17.5 g of it animal | 2026 | [@PMR-26] {VN-direct\|Medium} {dx:revealed} |
| Upland plates | Lunches and dinners with a meat, fish or egg dish, 13 ethnic-minority boarding schools in five provinces (22 school-weeks) | 240 of 242; pork led 74% | 2026 | [@UPL-01; @UPL-04; @UPL-09] {VN-direct\|High} {dx:revealed} |
| Upland plates | Breakfasts with little or no animal food | 95 of 111 (85.6%) | 2026 | [@UPL-01; @UPL-17] {VN-direct\|High} {dx:revealed} |
| Upland plates | Raw pork bought per pupil a day, four kitchens with published cost sheets | 107 to 215 g | 2026 | [@UPL-01; @UPL-04; @UPL-09; @UPL-10] {VN-direct\|High} {dx:revealed} |
| Upland plates | Zinc in observed boarding and border-commune lunches, against a lunch share of 1.7 to 3.4 mg (our calculation, lean-pork values) | 4.9 to 8.2 mg | 2026 | [@UPL-01; @UPL-04; @APR-04; @DIE-12] {VN-direct\|Low} {dx:inferred} |
| Weighed diets | Kitchen-weighed boarding diets, two Yen Bai (now Lao Cai) schools: protein; zinc; calcium; vitamin A; vitamin B2, as % of need | 74.4 g a day (38% animal); 131 to 157%; 36.5%; 41 to 45%; 48 to 52% | 2019 | [@UPL-18] {VN-direct\|Medium} {dx:revealed} |
| Money | Border-commune lunch support (Decree 339/2025) | VND 450,000 a month plus 8 kg of rice; about 418,000 pupils | 2025 | [@APR-09; @UPL-22] {VN-direct\|High} {dx:revealed} |
| Quality | DIAAS, older-child pattern: pork; tofu; textured soy; wheat-based sausage | 113 to 137; 64 to 98; 65 to 97; 33 | various | [@NQR-05; @NQR-07] {general\|Medium} {dx:revealed} |
| Quality | DIAAS of a minced pork dish with 20 to 30% of its protein from textured soy (our calculation, additivity) | 97 or more | not applicable | [@NQR-05; @NQR-07] {general\|Medium} {dx:inferred} |
| Rules | Mandatory fortification (Decree 09/2016): vehicles | Iodised salt, wheat flour for processing (iron and zinc), vegetable oil (vitamin A); no soy product | 2016 | [@NQR-02] {VN-direct\|Medium} {dx:revealed} |
| Rules | Foods for children up to 36 months | Must register; ordinary processed foods self-declare | 2018 | [@NQR-04] {VN-direct\|High} {dx:revealed} |
| Trials | Fortified biscuits (5.6 mg zinc, 6 mg iron), rural Vietnam, 510 children aged 6 to 8, four months | Risk of anaemia and zinc deficiency cut by more than 40% | 2009 | [@NQR-22] {VN-direct\|High} {dx:tested} |

Reading (our inference) {VN-direct|Medium} {dx:inferred}: no coded upland lunch was without meat, fish or egg, so a zinc-fortified soy dish sold to these kitchens would stretch pork, as tofu already does, rather than fill a gap. The documented gaps (breakfast, calcium, vitamin A) and stunting before age two point to other instruments. A fortified plant item for boarding breakfasts or charity-funded lunches is a research option to test on calcium and vitamin A as well as zinc.

**Related:** [[ch11-protein-diet]], [[ch12-chay-baseline]], [[app-d3-retail-demand-signals]].
