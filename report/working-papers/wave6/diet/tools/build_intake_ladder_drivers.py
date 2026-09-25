"""Build data_protein_intake.csv, data_protein_ladder.csv, data_food_spending.csv and data_demand_drivers.csv.

Inputs (downloaded 2026-09-24 to the scratchpad; small extracts are saved next to this script):
- FAOSTAT Food Balance Sheets 2010-2023 and Historic 1961-2013, bulk files for Asia (DIE-07, DIE-08)
- World Bank WDI GDP per capita PPP constant 2021 intl $ (DIE-09)
- USDA PSD livestock bulk file, April 2026 (DIE-10)
- OECD-FAO Outlook 2026-2035 SDMX, FO_PC (DIE-11)
- NSO VHLSS 2024 book tables 6.5, 6.10, 6.16, 6.17, 6.20 to 6.22 (DIE-05), typed from pdftotext output
Standard library only.
"""
import csv, json, os

SCR = "scratch"
OUTDIR = "working-papers/wave6/diet"
HERE = os.path.join(OUTDIR, "tools")


def fbs_rows(path):
    return list(csv.DictReader(open(path, encoding="latin-1")))


new = fbs_rows(os.path.join(SCR, "fbs_asia/FoodBalanceSheets_E_Asia_NOFLAG.csv"))
hist = fbs_rows(os.path.join(SCR, "fbsh_asia/FoodBalanceSheetsHistoric_E_Asia_NOFLAG.csv"))

AREA = {"Viet Nam": "VNM", "China, mainland": "CHN", "China; mainland": "CHN", "Japan": "JPN",
        "Republic of Korea": "KOR", "China, Taiwan Province of": "TWN", "China; Taiwan Province of": "TWN",
        "Thailand": "THA", "Malaysia": "MYS", "Philippines": "PHL", "Indonesia": "IDN"}


def get(rows, area, item, el, year):
    for r in rows:
        if AREA.get(r["Area"]) == area and r["Item"] == item and r["Element Code"] == el:
            v = r.get("Y" + str(year), "")
            return float(v) if v not in ("", None) else None
    return None


# ---------------- data_protein_intake.csv ----------------
intake = []


def add(src, year, geo, pop, group, value, unit, basis, measure, sids, ev, conf, det, notes):
    intake.append([src, year, geo, pop, group, value, unit, basis, measure, sids, ev, conf, det, notes])


FAO_GROUPS = [("Grand Total", "All foods"), ("Animal Products", "All animal foods"), ("Vegetal Products", "All plant foods"),
              ("Meat", "Meat (all)"), ("Pigmeat", "Pork"), ("Poultry Meat", "Poultry"), ("Bovine Meat", "Beef"),
              ("Offals", "Offal"), ("Fish, Seafood", "Fish and seafood"), ("Eggs", "Eggs"), ("Milk - Excluding Butter", "Milk and dairy (excl. butter)"),
              ("Soyabeans", "Soybeans (as food, incl. tofu and soy milk equivalent)"), ("Pulses", "Pulses (other legumes)"),
              ("Groundnuts", "Groundnuts"), ("Cereals - Excluding Beer", "Cereals"), ("Rice and products", "Rice"),
              ("Wheat and products", "Wheat"), ("Vegetables", "Vegetables")]
for yr in [2010, 2015, 2019, 2020, 2021, 2022, 2023]:
    for item, label in FAO_GROUPS:
        p = get(new, "VNM", item, "674", yr)
        if p is not None:
            add("FAOSTAT Food Balance Sheets (2010 to 2023 series)", yr, "Vietnam", "whole population", label, round(p, 2),
                "g protein per person per day", "food supply available for consumption (not intake; includes household waste)",
                "supply", "DIE-07", "VN-direct", "High", "revealed", "Protein supply quantity, element 674.")
        q = get(new, "VNM", item, "645", yr)
        if q is not None and item not in ("Grand Total", "Animal Products", "Vegetal Products"):
            basis = "food supply, primary equivalent; meat in carcass weight, fish in live weight"
            add("FAOSTAT Food Balance Sheets (2010 to 2023 series)", yr, "Vietnam", "whole population", label, round(q, 2),
                "kg per person per year", basis, "supply", "DIE-07", "VN-direct", "High", "revealed", "Food supply quantity, element 645.")

# historic FAO totals for protein ladder years
for yr in [1990, 2000, 2010]:
    for item, label in [("Grand Total", "All foods"), ("Animal Products", "All animal foods"), ("Meat", "Meat (all)")]:
        p = get(hist, "VNM", item, "674", yr)
        add("FAOSTAT Food Balance Sheets, historic series (1961 to 2013)", yr, "Vietnam", "whole population", label, round(p, 2),
            "g protein per person per day", "food supply (old methodology; not continuous with 2010 onward series)", "supply", "DIE-08",
            "VN-direct", "High", "revealed", "Break in series at 2010: historic 2010 meat supply 51.5 kg vs new series 41.0 kg.")

# NIN General Nutrition Survey 2019-2020 (via press reports of the official launch)
add("NIN General Nutrition Survey 2019 to 2020 (press report of launch)", 2020, "Vietnam", "all ages, 22,400 households in 25 provinces",
    "Meat (all)", 136.4, "g per person per day", "individual intake (as consumed, raw-equivalent basis not stated)", "intake",
    "DIE-01; DIE-02; DIE-03", "VN-direct", "Medium", "revealed", "Recommendation cited in the same reports: 50 to 80 g per day.")
add("NIN General Nutrition Survey 2019 to 2020 (press report of launch)", 2020, "Vietnam, urban", "urban residents",
    "Meat (all)", 155.3, "g per person per day", "individual intake", "intake", "DIE-01; DIE-02", "VN-direct", "Medium", "revealed", "")
add("NIN General Nutrition Survey 2009 to 2010 (as cited at 2021 launch)", 2010, "Vietnam", "all ages", "Meat (all)", 84, "g per person per day",
    "individual intake", "intake", "DIE-02", "VN-direct", "Medium", "revealed", "")
add("NIN General Nutrition Survey 2019 to 2020 (press report of launch)", 2020, "Vietnam", "all ages", "Energy", 2023, "kcal per person per day",
    "individual intake", "intake", "DIE-01; DIE-02", "VN-direct", "Medium", "revealed", "2010: 1,925 kcal. Energy split protein 15.8%, fat 20.2%, carbohydrate 64.0%.")
add("Our derivation from NIN GNS 2019 to 2020", 2020, "Vietnam", "all ages", "All foods (protein)", round(2023 * 0.158 / 4, 1), "g protein per person per day",
    "individual intake, derived: 2,023 kcal x 15.8% / 4 kcal per g", "intake (derived)", "DIE-01; DIE-02", "VN-direct", "Low", "inferred",
    "Our calculation; NIN did not publish a gram figure in the reports we read.")
add("NIN General Nutrition Survey 2019 to 2020 (press report of launch)", 2020, "Vietnam", "all ages", "Vegetables", 231.0, "g per person per day",
    "individual intake", "intake", "DIE-01; DIE-02", "VN-direct", "Medium", "revealed", "2010: 190.4 g.")
add("NIN General Nutrition Survey 2019 to 2020 (press report of launch)", 2020, "Vietnam", "all ages", "Fruit", 140.7, "g per person per day",
    "individual intake", "intake", "DIE-01; DIE-02", "VN-direct", "Medium", "revealed", "2010: 60.9 g.")

# Hoang Thu Nga et al. 2024: 24 h recall, 929 adults 18 to 59, Hanoi (Cau Giay urban, Gia Lam peri-urban) and Thai Binh (Vu Thu rural), 2022
for area, n, prot, animal, share in [("urban (Cau Giay, Hanoi)", 477, 72.3, 39.5, 53.5), ("peri-urban (Gia Lam, Hanoi)", 297, 71.0, 39.2, 54.1),
                                     ("rural (Vu Thu, Thai Binh)", 155, 77.8, 40.3, 51.2), ("all three sites", 929, 72.8, 39.5, 53.3)]:
    add("Hoang Thu Nga et al. 2024, 24 h recall", 2022, "Red River Delta: " + area, f"adults 18 to 59, n = {n}", "All foods (protein)", prot,
        "g protein per person per day (mean)", "individual intake, one 24 h recall", "intake", "DIE-32", "VN-direct", "High", "revealed",
        f"Animal protein {animal} g ({share}% of protein). Not nationally representative.")

# VHLSS 2024 quantities, table 6.20 (per person per month, household consumption for home use)
vhlss = {
    "Rice": ("kg", {2010: (9.68, 7.53, 10.58), 2016: (8.80, 6.84, 9.72), 2020: (7.61, 6.11, 8.48), 2022: (6.93, 5.72, 7.70), 2024: (6.45, 5.46, 7.06)}),
    "Meat (all)": ("kg", {2010: (1.79, 2.09, 1.66), 2012: (1.82, 2.02, 1.74), 2014: (1.87, 2.01, 1.81), 2016: (2.12, 2.24, 2.06), 2018: (2.18, 2.24, 2.15), 2020: (2.32, 2.34, 2.30), 2022: (2.59, 2.50, 2.65), 2024: (2.60, 2.60, 2.60)}),
    "Fish and shrimp": ("kg", {2010: (1.42, 1.36, 1.44), 2016: (1.49, 1.49, 1.49), 2018: (1.37, 1.40, 1.35), 2020: (1.50, 1.48, 1.50), 2022: (1.13, 1.09, 1.15), 2024: (1.16, 1.20, 1.13)}),
    "Eggs (poultry)": ("eggs", {2010: (3.62, 4.15, 3.39), 2016: (4.15, 4.44, 4.02), 2020: (4.64, 4.72, 4.60), 2022: (5.07, 4.94, 5.15), 2024: (5.10, 5.05, 5.14)}),
    "Tofu": ("kg", {2010: (0.50, 0.52, 0.50), 2012: (0.45, 0.45, 0.46), 2016: (0.45, 0.43, 0.45), 2020: (0.44, 0.39, 0.47), 2022: (0.43, 0.37, 0.47), 2024: (0.43, 0.39, 0.45)}),
    "Beans and peas": ("kg", {2010: (0.08, 0.09, 0.08), 2024: (0.06, 0.06, 0.05)}),
    "Peanuts and sesame": ("kg", {2010: (0.07, 0.06, 0.07), 2024: (0.05, 0.05, 0.05)}),
    "Sugar, molasses, milk, cakes and sweets": ("kg", {2010: (0.55, 0.63, 0.52), 2020: (0.60, 0.63, 0.59), 2024: (0.55, 0.56, 0.54)}),
}
for grp, (u, series) in vhlss.items():
    for yr, (tot, urb, rur) in series.items():
        for geo, v in [("Vietnam", tot), ("Vietnam, urban", urb), ("Vietnam, rural", rur)]:
            add("NSO VHLSS (KSMS), table 6.20", yr, geo, "household members (46,995 households in 2024)", grp, v,
                f"{u} per person per month", "household consumption for home use (purchased plus own production); meals eaten out recorded only as spending (our reading of table structure)",
                "household acquisition", "DIE-05", "VN-direct", "High", "revealed",
                "Fish fell from 1.50 kg (2020) to 1.13 kg (2022) in every region; possible questionnaire change, not explained in the book." if grp == "Fish and shrimp" and yr in (2022, 2024) else "")

# VHLSS 2024 by income quintile (table 6.21) and region (table 6.22)
q = {"Meat (all)": (1.97, 2.36, 2.63, 2.85, 3.17), "Fish and shrimp": (0.93, 1.17, 1.17, 1.19, 1.31), "Eggs (poultry)": (4.23, 4.85, 5.16, 5.42, 5.83),
     "Tofu": (0.40, 0.38, 0.41, 0.45, 0.50), "Rice": (7.27, 6.67, 6.34, 6.10, 5.90)}
for grp, vals in q.items():
    for i, v in enumerate(vals, 1):
        add("NSO VHLSS (KSMS), table 6.21", 2024, "Vietnam", f"income quintile {i}", grp, v,
            ("eggs" if grp.startswith("Eggs") else "kg") + " per person per month", "household consumption for home use", "household acquisition",
            "DIE-05", "VN-direct", "High", "revealed", "")
reg = ["Red River Delta", "Northern midlands and mountains", "North Central and Central coast", "Central Highlands", "South East", "Mekong River Delta"]
rv = {"Meat (all)": (3.19, 3.10, 2.33, 2.05, 2.33, 2.22), "Fish and shrimp": (0.97, 0.58, 1.36, 0.80, 1.13, 1.75),
      "Eggs (poultry)": (5.93, 5.10, 4.87, 4.38, 5.01, 4.62), "Tofu": (0.69, 0.68, 0.31, 0.32, 0.31, 0.19)}
for grp, vals in rv.items():
    for rname, v in zip(reg, vals):
        add("NSO VHLSS (KSMS), table 6.22", 2024, "Vietnam, " + rname + " (pre-2025 statistical region)", "all households", grp, v,
            ("eggs" if grp.startswith("Eggs") else "kg") + " per person per month", "household consumption for home use", "household acquisition",
            "DIE-05", "VN-direct", "High", "revealed", "")

# USDA PSD April 2026: domestic consumption, 1000 t
psd = list(csv.DictReader(open(os.path.join(SCR, "psd_live/psd_livestock.csv"))))
POP = {2015: 92.82, 2018: 96.24, 2019: 97.17, 2020: 98.08, 2022: 99.68, 2023: 100.35, 2024: 100.99, 2025: 101.6, 2026: 102.18}  # World Bank source 40 (UN WPP 2024), DIE-36
for com, lab, basis in [("Meat, Swine", "Pork", "carcass weight equivalent"), ("Meat, Chicken", "Chicken", "ready-to-cook weight (USDA convention)"),
                        ("Meat, Beef and Veal", "Beef and veal", "carcass weight equivalent")]:
    s = {int(r["Market_Year"]): float(r["Value"]) for r in psd if r["Country_Name"].strip() == "Vietnam" and r["Commodity_Description"] == com and r["Attribute_Description"] == "Domestic Consumption"}
    for yr in [2018, 2019, 2020, 2023, 2024, 2025, 2026]:
        add("USDA FAS PSD Online (April 2026 release)", yr, "Vietnam", "whole population", lab, s[yr], "thousand tonnes per year",
            "domestic consumption, " + basis, "consumption balance" if yr <= 2025 else "consumption balance (forecast)", "DIE-10", "VN-direct",
            "Medium", "revealed" if yr <= 2025 else "inferred",
            f"Per person about {s[yr] / POP.get(yr, 100):.1f} kg (our division by UN WPP 2024 population, DIE-36)." if yr in POP else "")

# OECD-FAO 2026-2035 FO_PC
oecd = {}
for r in csv.DictReader(open(os.path.join(SCR, "oecd_fopc.csv"))):
    oecd.setdefault((r["REF_AREA"], r["COMMODITY"]), {})[int(r["TIME_PERIOD"])] = float(r["OBS_VALUE"])
for r in csv.DictReader(open(os.path.join(SCR, "oecd_vnm_fopc_all.csv"))):
    oecd.setdefault((r["REF_AREA"], r["COMMODITY"]), {})[int(r["TIME_PERIOD"])] = float(r["OBS_VALUE"])
LAB = {"CPC_EX_PK": "Pork", "CPC_EX_PT": "Poultry", "CPC_EX_BV": "Beef and veal", "CPC_EX_SH": "Sheep meat", "CPC_04": "Fish and seafood", "CPC_0113": "Rice"}
for code, lab in LAB.items():
    s = oecd.get(("VNM", code), {})
    for yr in [2015, 2020, 2025, 2030, 2035]:
        if yr in s:
            add("OECD-FAO Agricultural Outlook 2026 to 2035", yr, "Vietnam", "whole population", lab, round(s[yr], 2), "kg per person per year",
                "food use per person; meat in retail weight (OECD convention, not re-verified), fish live weight equivalent" if code != "CPC_0113" else "food use per person, milled rice",
                "supply" if yr <= 2025 else "projection", "DIE-11", "VN-direct", "Medium", "revealed" if yr <= 2025 else "inferred",
                "Model projection (Aglink-Cosimo baseline). Same dataset the supply study cites as QNT-01." if yr > 2025 else "Historical values as held in the Outlook database.")

hdr = ["record_id", "source", "year", "geography", "population_group", "food_group", "value", "unit", "basis", "measure_type",
       "source_ids", "evidence_label", "confidence", "demand_evidence_type", "notes"]
with open(os.path.join(OUTDIR, "data_protein_intake.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(hdr)
    for i, r in enumerate(intake, 1):
        w.writerow([f"DPI-{i:03d}"] + r)
print("intake rows", len(intake))

# ---------------- data_protein_ladder.csv ----------------
gdp = json.load(open(os.path.join(SCR, "wb_gdp_series.json")))
lad = []
for c in ["VNM", "CHN", "KOR", "JPN", "TWN", "THA", "MYS", "PHL", "IDN"]:
    for yr in [1961, 1970, 1980, 1990, 2000, 2005, 2010, 2013, 2015, 2018, 2020, 2023]:
        src_rows, sid, series = (hist, "DIE-08", "historic") if yr <= 2009 or (yr in (2010, 2013) and c == "JPN") else (new, "DIE-07", "2010 onward")
        tot = get(src_rows, c, "Grand Total", "674", yr)
        ani = get(src_rows, c, "Animal Products", "674", yr)
        meat = get(src_rows, c, "Meat", "645", yr)
        fish = get(src_rows, c, "Fish, Seafood", "645", yr)
        if tot is None:
            continue
        g = gdp.get(c, {}).get(str(yr))
        lad.append([c, yr, series, round(tot, 1), round(ani, 1), round(100 * ani / tot, 1), round(100 - 100 * ani / tot, 1),
                    round(meat, 1) if meat is not None else "", round(fish, 1) if fish is not None else "",
                    round(g) if g else "", sid + ("; DIE-09" if g else ""), "VN-direct" if c == "VNM" else "VN-adjacent",
                    "High", "revealed",
                    "FAO supply basis (carcass weight for meat). " + ("Japan is not in the 2010 onward FAO series; historic series used. " if c == "JPN" else "")
                    + ("Taiwan GDP not in World Bank WDI. " if c == "TWN" else "")
                    + ("Transfer assumption: neighbour trajectories indicate where diets can plateau, not where Vietnam must go." if c != "VNM" else "")])
with open(os.path.join(OUTDIR, "data_protein_ladder.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["country_iso3", "year", "fao_series", "protein_supply_g_per_person_day", "animal_protein_g_per_person_day",
                "animal_share_pct", "plant_share_pct", "meat_supply_kg_per_person_year", "fish_supply_kg_per_person_year",
                "gdp_per_capita_ppp_const2021_usd", "source_ids", "evidence_label", "confidence", "demand_evidence_type", "notes"])
    w.writerows(lad)
print("ladder rows", len(lad))
