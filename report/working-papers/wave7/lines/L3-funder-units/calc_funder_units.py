#!/usr/bin/env python3
"""
Wave 7, line L3: restate the Part VI demand model in funder units.
AltProtein Vietnam, 25 September 2026. Source prefix FUF.

Reads (package, unchanged):
  data/demand_outputs.csv     demand model results (D-BENCH, D-STRETCH)
  data/demand_assumptions.csv canteen and school meal counts and adoption shares
  data/balance_outputs.csv    S-BASE meat demand per person by species
Writes (this folder):
  data_funder_units.csv       animals spared, CO2e avoided, meals shifted, import value, by route
  data_impact_per_tonne.csv   funder metrics per tonne of protein delivered, by route
  data_canteen_cost_effectiveness.csv  cost per meal, per animal and per t CO2e for a canteen programme

Every factor below is sourced in sources.csv (FUF-xx) or in the package, or is labelled as our assumption.
Standard library only. All results are our calculations on what-if scenario results, not forecasts.
"""
import csv
import os

PKG = "altprotein-vn-supply-scoping-2026"
OUT = os.path.dirname(os.path.abspath(__file__))

YEARS = [2030, 2035, 2050]
SCEN = ["D-BENCH", "D-STRETCH"]

# ---- factors -------------------------------------------------------------------------------
PROT_PER_KG_CW = 0.15  # package DMA-001 / BLA-044

# Carcass weight per animal slaughtered, Viet Nam, FAOSTAT QCL 2022 to 2024 (FUF-03)
CW_PER_ANIMAL = {  # kg carcass per head: central, low, high
    "pig": (66.0, 65.0, 67.0),
    "chicken": (2.1, 1.833, 2.358),
    "duck": (1.2, 1.2, 1.341),
    "cattle": (148.0, 140.0, 148.0),
    "buffalo": (196.0, 171.0, 196.0),
}
# Split of poultry and ruminant meat, FAOSTAT 2024 production (FUF-03)
POULTRY_SPLIT = {"chicken": 1259484.49 / (1259484.49 + 164682.29), "duck": 164682.29 / (1259484.49 + 164682.29)}
RUMINANT_SPLIT = {"cattle": 270000.0 / (270000.0 + 68900.0), "buffalo": 68900.0 / (270000.0 + 68900.0)}

# Emission intensity of meat, kg CO2e per kg carcass weight (GLEAM, reference year 2005)
# pork: E and SE Asia industrial pigs, humid zone, average (10% lowest, 10% highest) (FUF-04 Table 33)
# poultry: E and SE Asia broilers, humid zone (FUF-04 Table 34); ducks assumed equal to chickens
# ruminant: E and SE Asia mixed beef, humid zone (FUF-05 Table 7)
EF_CW = {"pork": (6.15, 5.37, 7.94), "poultry": (5.18, 4.19, 6.84), "ruminant": (54.5, 40.1, 81.0)}
# Alternative: Poore and Nemecek global means, kg CO2e per kg protein (FUF-07): pig 7.61, poultry 5.70,
# beef herd 49.89 per 100 g protein
EF_PROT_PN = {"pork": 76.08, "poultry": 56.99, "ruminant": 498.9}

# Replacement protein, kg CO2e per kg protein
# textured soy: central = Poore and Nemecek 'other pulses' 8.36 per kg protein used as a proxy (our assumption);
# low = feed-grade soy protein concentrate 0.851 kg CO2e per kg at about 65% protein = 1.31 (FUF-08, our calc);
# high = tofu 19.75 per kg protein (FUF-07)
EF_REPL_SOY = (8.36, 1.31, 19.75)
# fungal biomass: package app-v 3.8 to 11.7 (Vietnam 2023 grid, cassava sugar); literature 15 to 38.4 (QNT-10)
EF_REPL_FUNGAL = (11.7, 3.8, 38.4)

# Species mix of meat displaced by each route (carcass shares)
# R2, R4, R5: national consumption mix from balance model S-BASE (per person demand by species)
# R3: processed meat; our assumption 75% pork, 15% poultry, 10% ruminant, informed by the Vissan label audit
#     (first-listed meat in 80 non-chay SKUs: pork 50, beef 18, chicken 6, fish 6; SKU counts, not volumes)
R3_MIX = {"pork": 0.75, "poultry": 0.15, "ruminant": 0.10}
R2_PROTEIN_COMPONENT_G = 12.0  # DMA-026: protein eaten on a chay day from tofu, mock meat, legumes
R2_COMPENSATION = 0.3          # DMA-058

# Import substitution (R1): unit value of plant-protein shipments from China, USD per kg product (package ch26:
# about USD 0.9 to 1.3 per kg); protein share 0.65 (DMA-005)
R1_PRICE = (0.9, 1.3)
R1_PROT_SHARE = 0.65


def read_outputs():
    d = {}
    with open(os.path.join(PKG, "data", "demand_outputs.csv"), encoding="utf-8") as fh:
        for r in csv.DictReader(fh):
            d[(r["scenario"], int(r["year"]), r["indicator"])] = float(r["value"])
    return d


def read_assumptions():
    a = {}
    with open(os.path.join(PKG, "data", "demand_assumptions.csv"), encoding="utf-8") as fh:
        for r in csv.DictReader(fh):
            a[(r["parameter"], r["scenario"], r["year"])] = float(r["value"])
    return a


def read_mix():
    pc = {}
    pop = {}
    with open(os.path.join(PKG, "data", "balance_outputs.csv"), encoding="utf-8") as fh:
        for r in csv.DictReader(fh):
            if r["scenario"] != "S-BASE":
                continue
            y = int(r["year"])
            if r["indicator"] in ("pc_pork_demand_kg_cwe", "pc_poultry_demand_kg_cwe", "pc_ruminant_demand_kg_cwe"):
                pc.setdefault(y, {})[r["indicator"].split("_")[1]] = float(r["value"])
            if r["indicator"] == "population":
                pop[y] = float(r["value"])
    mix = {}
    for y, v in pc.items():
        tot = sum(v.values())
        mix[y] = {k: v[k] / tot for k in v}
    return mix, pc, pop


def animals_from_cw(cw_t, which=0):
    """cw_t: dict species group -> tonnes carcass. Returns dict animal -> head."""
    out = {}
    out["pigs"] = cw_t["pork"] * 1000.0 / CW_PER_ANIMAL["pig"][which]
    out["chickens"] = cw_t["poultry"] * POULTRY_SPLIT["chicken"] * 1000.0 / CW_PER_ANIMAL["chicken"][which]
    out["ducks"] = cw_t["poultry"] * POULTRY_SPLIT["duck"] * 1000.0 / CW_PER_ANIMAL["duck"][which]
    out["cattle"] = cw_t["ruminant"] * RUMINANT_SPLIT["cattle"] * 1000.0 / CW_PER_ANIMAL["cattle"][which]
    out["buffalo"] = cw_t["ruminant"] * RUMINANT_SPLIT["buffalo"] * 1000.0 / CW_PER_ANIMAL["buffalo"][which]
    return out


def gross_co2e_t(prot_t_by_sp, cw_t_by_sp):
    c = sum(cw_t_by_sp[s] * EF_CW[s][0] for s in cw_t_by_sp)
    lo = sum(cw_t_by_sp[s] * EF_CW[s][1] for s in cw_t_by_sp)
    hi = sum(cw_t_by_sp[s] * EF_CW[s][2] for s in cw_t_by_sp)
    pn = sum(prot_t_by_sp[s] * EF_PROT_PN[s] for s in prot_t_by_sp)
    return c, lo, hi, pn


def fmt(x, nd=0):
    if nd == 0:
        return str(int(round(x)))
    return f"{x:.{nd}f}"


def main():
    D = read_outputs()
    A = read_assumptions()
    MIX, PC, POP = read_mix()
    rows = []
    SRC_ANIMALS = "FUF-03; demand_outputs.csv; balance_outputs.csv"
    SRC_CO2 = "FUF-04; FUF-05; FUF-07; FUF-08; demand_outputs.csv; balance_outputs.csv"

    def add(scen, y, route, indicator, value, unit, low="", high="", src="", conf="Low", notes=""):
        rows.append({
            "scenario": scen, "year": y, "route": route, "indicator": indicator,
            "value": value, "low": low, "high": high, "unit": unit,
            "source_ids": src, "evidence_label": "VN-adjacent" if indicator.startswith("co2e") else "VN-direct", "confidence": conf,
            "demand_evidence_type": "inferred", "notes": notes,
        })

    for s in SCEN:
        for y in YEARS:
            m_g = D[(s, y, "meat_protein_g_per_person_day")]
            mixn = MIX[y]
            tot_animals = {"pigs": 0, "chickens": 0, "ducks": 0, "cattle": 0, "buffalo": 0}
            tot_animals_lo = 0.0
            tot_animals_hi = 0.0
            tot = {"c": 0.0, "lo": 0.0, "hi": 0.0, "pn": 0.0}
            for route in ["R2", "R3", "R4", "R5"]:
                disp_t = D[(s, y, f"{route}_displaced")] * 1000.0  # tonnes protein
                mix = R3_MIX if route == "R3" else mixn
                prot = {sp: disp_t * mix[sp] for sp in mix}
                cw = {sp: prot[sp] / PROT_PER_KG_CW for sp in prot}
                an = animals_from_cw(cw, 0)
                an_hi = animals_from_cw(cw, 1)  # lighter animals -> more head
                an_lo = animals_from_cw(cw, 2)
                for k in an:
                    tot_animals[k] += an[k]
                tot_animals_lo += sum(an_lo.values())
                tot_animals_hi += sum(an_hi.values())
                # replacement protein
                if route == "R2":
                    added_pd = disp_t * 1e6 / (m_g * (1 - R2_COMPENSATION)) if m_g else 0  # person-days
                    repl_t = added_pd * R2_PROTEIN_COMPONENT_G / 1e6
                    add(s, y, route, "added_chay_person_days", fmt(added_pd / 1e6, 1), "million person-days a year",
                        src="demand_outputs.csv; demand_assumptions.csv",
                        notes="Meat-free person-days added by extra chay days (displaced / (meat protein per person-day x 0.7)). Each day holds two to three meat meals.")
                else:
                    repl_t = D[(s, y, f"{route}_delivered")] * 1000.0
                g_c, g_lo, g_hi, g_pn = gross_co2e_t(prot, cw)
                net_c = g_c - repl_t * EF_REPL_SOY[0]
                net_lo = g_lo - repl_t * EF_REPL_SOY[2]
                net_hi = max(g_hi, g_pn) - repl_t * EF_REPL_SOY[1]
                tot["c"] += net_c
                tot["lo"] += net_lo
                tot["hi"] += net_hi
                tot["pn"] += g_pn - repl_t * EF_REPL_SOY[0]
                label = {"R2": "added chay days", "R3": "hybrid processed meat", "R4": "canteens and schools",
                         "R5": "household analogues"}[route]
                add(s, y, route, "meat_protein_displaced_t", fmt(disp_t), "t protein a year", src="demand_outputs.csv",
                    notes=f"Model output ({label}).")
                add(s, y, route, "pigs_spared", fmt(an["pigs"]), "head a year", fmt(an_lo["pigs"]), fmt(an_hi["pigs"]),
                    src=SRC_ANIMALS, notes="Slaughter count avoided; includes animals raised abroad for imported meat.")
                add(s, y, route, "poultry_spared", fmt(an["chickens"] + an["ducks"]), "head a year",
                    fmt(an_lo["chickens"] + an_lo["ducks"]), fmt(an_hi["chickens"] + an_hi["ducks"]), src=SRC_ANIMALS,
                    notes="Chickens and ducks; range from FAOSTAT carcass yield per bird 2022 to 2024.")
                add(s, y, route, "cattle_and_buffalo_spared", fmt(an["cattle"] + an["buffalo"]), "head a year",
                    fmt(an_lo["cattle"] + an_lo["buffalo"]), fmt(an_hi["cattle"] + an_hi["buffalo"]), src=SRC_ANIMALS,
                    notes="Vietnamese carcass yields; imported beef comes from heavier animals, so this overstates head.")
                add(s, y, route, "co2e_avoided_net_t", fmt(net_c), "t CO2e a year", fmt(net_lo), fmt(net_hi), src=SRC_CO2,
                    notes="Gross (GLEAM E and SE Asia humid-zone intensities x carcass displaced) minus replacement protein at 8.36 kg CO2e per kg protein. Low: GLEAM 10% lowest minus tofu-level replacement. High: higher of GLEAM 10% highest and Poore and Nemecek per-protein means, minus soy concentrate-level replacement.")
            add(s, y, "R2 to R5", "animals_spared_total", fmt(sum(tot_animals.values())), "head a year",
                fmt(tot_animals_lo), fmt(tot_animals_hi), src=SRC_ANIMALS,
                notes="Pigs, poultry, cattle and buffalo. Fish not counted: the model counts meat only, though added chay days would also avoid fish.")
            add(s, y, "R2 to R5", "poultry_share_of_animals_spared",
                fmt(100 * (tot_animals["chickens"] + tot_animals["ducks"]) / sum(tot_animals.values()), 1), "%",
                src=SRC_ANIMALS)
            add(s, y, "R2 to R5", "co2e_avoided_net_t", fmt(tot["c"]), "t CO2e a year", fmt(tot["lo"]), fmt(tot["hi"]),
                src=SRC_CO2, notes="Sum of R2 to R5. Routes R1, R6 and R7 displace no Vietnamese meat in the model.")
            # meals (R4)
            t = y - 2025
            can = A[("r4_canteen_meals_bn", "ALL", "2025")] * (1 + A[("r4_canteen_growth", "ALL", "ALL")]) ** t
            sch = A[("r4_school_meals_bn", "ALL", "2025")] * (1 + A[("r4_school_growth", "ALL", "ALL")]) ** t
            ca = A[("r4_canteen_adoption", s, str(y))]
            sa = A[("r4_school_adoption", s, str(y))]
            add(s, y, "R4", "canteen_meals_shifted", fmt(can * ca * 1000, 1), "million meal-equivalents a year",
                src="demand_assumptions.csv (DMA-079, DMA-080, DMA-089 to DMA-098)",
                notes="A meal-equivalent is one protein dish of 20 g protein supplied by plant or novel protein instead of meat.")
            add(s, y, "R4", "school_meals_shifted", fmt(sch * sa * 1000, 1), "million meal-equivalents a year",
                src="demand_assumptions.csv (DMA-081, DMA-082, DMA-104 to DMA-113)",
                notes="MOH school-meal guidance (APR-04) asks for animal protein at least 4 to 5 days a week, which caps animal-free school days at about 1 in 5.")
            # R1
            r1 = D[(s, y, "R1_delivered")] * 1000.0
            prod = r1 / R1_PROT_SHARE
            add(s, y, "R1", "meat_protein_displaced_t", "0", "t protein a year", src="demand_outputs.csv",
                notes="Import substitution replaces imported plant protein with domestic plant protein; no meat displaced.")
            add(s, y, "R1", "animals_spared_total", "0", "head a year", src="demand_outputs.csv")
            add(s, y, "R1", "co2e_avoided_net_t", "about 0 (sign unknown)", "t CO2e a year", src="MAC-04; MAC-09",
                notes="Soy protein replaces soy protein; the feedstock would still be imported soybeans. Only freight and process energy differ; not computed.")
            add(s, y, "R1", "import_value_replaced_usd_m", fmt(prod * 1000.0 * (R1_PRICE[0] + R1_PRICE[1]) / 2 / 1e6, 1), "USD million a year (gross)",
                fmt(prod * 1000.0 * R1_PRICE[0] / 1e6, 1), fmt(prod * 1000.0 * R1_PRICE[1] / 1e6, 1), src="BUY-02; demand_outputs.csv",
                conf="Low", notes=f"{fmt(prod / 1000, 1)} kt product at 65% protein x USD 0.9 to 1.3 per kg (unit values of Chinese shipments, package ch26); value is the midpoint, low and high are the price bounds. Gross; net of imported soybean feedstock is lower.")
            add(s, y, "R1", "domestic_share_of_food_plant_protein_pool", fmt(100 * r1 / (D[(s, y, "R1_pool_protein_kt")] * 1000.0)), "%",
                src="demand_assumptions.csv", notes="Scenario assumption (DMA-014 to DMA-023).")

    # context: baseline animals slaughtered for Vietnamese consumption (S-BASE)
    for y in [2025, 2035]:
        cw = {sp: PC[y][sp] * POP[y] * 1000.0 for sp in PC[y]}  # tonnes: kg per person x million people x 1000 / 1000
        an = animals_from_cw(cw, 0)
        add("S-BASE", y, "context", "baseline_pigs_for_consumption", fmt(an["pigs"] / 1e6, 1), "million head a year",
            src="FUF-03; balance_outputs.csv", notes="Consumption basis (includes imports), Vietnamese carcass yields.")
        add("S-BASE", y, "context", "baseline_poultry_for_consumption", fmt((an["chickens"] + an["ducks"]) / 1e6), "million head a year",
            src="FUF-03; balance_outputs.csv", notes="Consumption basis (includes imports), Vietnamese carcass yields.")

    with open(os.path.join(OUT, "data_funder_units.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0].keys()))
        w.writeheader()
        for r in rows:
            w.writerow(r)

    # ---- per tonne of protein delivered, by route (2035 national mix) --------------------------
    mix35 = MIX[2035]
    per = []
    routes = [
        ("R1 import substitution (TPP-01 into chay)", 0.0, mix35, "TPP-01", "imported textured soy and gluten (like for like)"),
        ("R2 upgrade on existing chay days (TPP-02)", 0.0, mix35, "TPP-02", "lower-protein chay foods on days already meat-free"),
        ("R3 hybrid processed meat (TPP-03, TPP-06)", 0.9, R3_MIX, "TPP-03; TPP-06", "meat in processed products (our mix: 75% pork, 15% poultry, 10% ruminant)"),
        ("R4 canteens, national dish mix (TPP-04)", 0.8, mix35, "TPP-04", "meat in canteen protein dishes (2035 national mix)"),
        ("R4 canteens, pork dish replaced", 0.8, {"pork": 1.0, "poultry": 0.0, "ruminant": 0.0}, "TPP-04", "a pork dish"),
        ("R4 canteens, chicken dish replaced", 0.8, {"pork": 0.0, "poultry": 1.0, "ruminant": 0.0}, "TPP-04", "a chicken dish"),
        ("R5 household analogues", 0.2, mix35, "TPP-08; TPP-09 abroad", "mostly adds a new food; 0.2 of meat protein"),
        ("R6 high-protein plant milk (TPP-05)", 0.0, mix35, "TPP-05", "nothing measured; protein added to plant milk"),
    ]
    for name, dfac, mix, tpp, repl in routes:
        prot_disp = 1.0 * dfac  # t meat protein per t protein delivered
        prot = {sp: prot_disp * mix[sp] for sp in mix}
        cw = {sp: prot[sp] / PROT_PER_KG_CW for sp in prot}
        an = animals_from_cw(cw, 0)
        g_c, g_lo, g_hi, g_pn = gross_co2e_t(prot, cw)
        net_soy = fmt(g_c - 1.0 * EF_REPL_SOY[0], 1)
        net_fun = fmt(g_c - 1.0 * EF_REPL_FUNGAL[0], 1)
        if name.startswith("R1"):
            net_soy = "about 0 (like for like)"
            net_fun = "sign unknown (fungal 3.8 to 38.4 against soy 1.3 to 19.8 per t protein)"
        per.append({
            "route": name, "related_profiles": tpp, "delivered_protein_replaces": repl, "net_displacement_factor": dfac,
            "meat_protein_displaced_t_per_t_protein": fmt(prot_disp, 2),
            "carcass_displaced_t": fmt(sum(cw.values()), 2),
            "pigs_spared": fmt(an["pigs"], 1), "poultry_spared": fmt(an["chickens"] + an["ducks"]),
            "cattle_buffalo_spared": fmt(an["cattle"] + an["buffalo"], 2),
            "co2e_net_t_soy_replacement": net_soy, "co2e_net_t_fungal_replacement": net_fun,
            "source_ids": "FUF-03; FUF-04; FUF-05; FUF-07; QNT-10; demand_assumptions.csv",
            "evidence_label": "general", "confidence": "Low", "demand_evidence_type": "inferred",
            "notes": "Per tonne of protein delivered, 2035 national mix (our calculation). Negative CO2e means the delivered protein adds emissions because it removes no meat. Soy replacement 8.36 and fungal 11.7 t CO2e per t protein (central values).",
        })
    with open(os.path.join(OUT, "data_impact_per_tonne.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=list(per[0].keys()))
        w.writeheader()
        for r in per:
            w.writerow(r)

    # ---- canteen programme cost-effectiveness ------------------------------------------------
    # per meal-equivalent: 20 g protein delivered, 0.8 net displacement (DMA-083, DMA-114)
    g_meat_prot = 0.020 * 0.8  # kg meat protein displaced per meal
    cw_meal = g_meat_prot / PROT_PER_KG_CW  # kg carcass
    dish = {
        "national mix 2030": MIX[2030],
        "pork dish": {"pork": 1.0, "poultry": 0.0, "ruminant": 0.0},
        "chicken dish": {"pork": 0.0, "poultry": 1.0, "ruminant": 0.0},
    }
    per_meal = {}
    for k, mix in dish.items():
        cw = {sp: cw_meal * mix[sp] / 1000.0 for sp in mix}  # tonnes
        prot = {sp: g_meat_prot * mix[sp] / 1000.0 for sp in mix}
        an = sum(animals_from_cw(cw, 0).values())
        g_c = sum(cw[sp] * EF_CW[sp][0] for sp in cw)  # t CO2e
        net = g_c - 0.020 / 1000.0 * EF_REPL_SOY[0]
        per_meal[k] = (an, net)
    cases = [
        # name, programme cost USD, meals per day reached, share of meal-days shifted, persistence years, basis
        ("A pilot only (DMV-05 cost, one large caterer)", 45000, 30000, 1 / 6, 1.0,
         "DMV-05 cost USD 30,000 to 60,000 (midpoint); smallest large caterer (30,000 meals a day, CHN-41); one plant-protein day in six meal days; one year."),
        ("B programme, strong uptake", 100000, 180000, 1 / 6, 2.0,
         "Programme cost at Sinergia scale per country (about USD 100,000, our calculation from AFN-26); three caterers of 60,000 meals a day; one day in six; two years."),
        ("C programme, modest uptake", 100000, 20000, 1 / 12, 1.0,
         "Same cost; factory canteens totalling 20,000 meals a day; two plant-protein days a month; one year (ACE's persistence assumption)."),
        ("D programme, weak uptake", 100000, 5000, 0.04, 1.0,
         "Same cost; one factory canteen of 5,000 meals a day; about one day a month (Korean school pattern, AFN-42); one year."),
    ]
    ce = []
    for name, cost, mpd, share, pers, basis in cases:
        meals = mpd * 300 * share * pers
        cpm = cost / meals
        row = {
            "case": name, "programme_cost_usd": cost, "meals_per_day_reached": mpd,
            "share_of_meal_days_shifted": fmt(share, 3), "persistence_years": pers,
            "meal_equivalents_shifted": fmt(meals), "usd_per_meal_shifted": fmt(cpm, 3),
            "meals_per_usd": fmt(meals / cost, 1),
        }
        for k in dish:
            an, net = per_meal[k]
            key = k.replace(" ", "_").replace("2030", "")
            row[f"usd_per_animal_{key}".rstrip("_")] = fmt(cpm / an, 2)
            row[f"usd_per_t_co2e_{key}".rstrip("_")] = fmt(cpm / net, 0)
        row.update({"source_ids": "demand_moves.csv (DMV-05); AFN-26; AFN-42; CHN-41; FUF-03; FUF-04; FUF-05",
                    "evidence_label": "VN-direct", "confidence": "Low", "demand_evidence_type": "inferred",
                    "notes": basis + " 300 meal days a year (DMA-079). 20 g protein per dish, 0.8 net displacement."})
        ce.append(row)
    # benchmark row
    ce.append({
        "case": "Benchmark: Sinergia Animal institutional programme 2023 (ACE estimate)", "programme_cost_usd": "293500 (our calculation)",
        "meals_per_day_reached": "", "share_of_meal_days_shifted": "", "persistence_years": 1,
        "meal_equivalents_shifted": 998000, "usd_per_meal_shifted": fmt(1 / 3.4, 3), "meals_per_usd": 3.4,
        "usd_per_animal_national_mix": fmt(1 / 0.5, 2), "usd_per_t_co2e_national_mix": "",
        "usd_per_animal_pork_dish": "", "usd_per_t_co2e_pork_dish": "",
        "usd_per_animal_chicken_dish": "", "usd_per_t_co2e_chicken_dish": "",
        "source_ids": "AFN-26", "evidence_label": "general", "confidence": "Medium", "demand_evidence_type": "revealed",
        "notes": "Argentina, Colombia, Indonesia. 3.4 meals replaced and 0.5 animals spared per USD (ACE); 134,000 animals for 998,000 meals = 0.134 animals per meal. Cost = 998,000 / 3.4 (our calculation). Animal column is ACE's all-species figure, not a national mix.",
    })
    keys = []
    for r in ce:
        for k in r:
            if k not in keys:
                keys.append(k)
    with open(os.path.join(OUT, "data_canteen_cost_effectiveness.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=keys)
        w.writeheader()
        for r in ce:
            w.writerow(r)

    # print summary
    for k, (an, net) in per_meal.items():
        print(f"per meal ({k}): animals {an:.4f}; net t CO2e {net:.5f}")
    for s in SCEN:
        for y in YEARS:
            pass


if __name__ == "__main__":
    main()
