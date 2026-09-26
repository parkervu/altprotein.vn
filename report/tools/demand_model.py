#!/usr/bin/env python3
"""
Demand sizing model for novel and domestic protein in Vietnam (Part III, chapter 18; added in v0.3).
AltProtein Vietnam, wave 6 (demand side).

Run:    python3 tools/demand_model.py   (paths are resolved from the package root)
Reads:  data/demand_assumptions.csv, data/balance_outputs.csv (population and meat demand, S-BASE)
Writes: data/demand_outputs.csv and data/demand_sensitivity.csv (record_id first column)

Standard library only. Nothing is fetched from the web. Every number the model uses comes from
demand_assumptions.csv or from the Part IV balance model outputs. All values for 2030 to 2050 are
our estimates (foresight type: estimate). They are what-if scenario results, not forecasts, and
carry no probabilities.

What the model does
 1. Takes population and meat consumption (carcass weight) for 2025 to 2050 from the balance model's
    S-BASE scenario, and converts meat to protein at 0.15 kg per kg (the balance model's factor).
 2. Sizes seven demand routes for domestic or novel protein, each with its own logic:
      R1 ingredient import substitution (food plant-protein ingredients bought by chay makers,
         meat processors and other food makers);
      R2 chay occasions (upgraded protein on existing lunar chay days, plus any added chay days);
      R3 hybrid processed meat (plant or fungal protein replacing part of the meat in giò, chả,
         sausages, dumpling fillings and similar);
      R4 institutional meals (factory canteens and school lunches);
      R5 modern analogues bought by urban households (retail and restaurants);
      R6 high-protein plant milks (protein isolates added to plant milks);
      R7 exports (products or ingredients made in Vietnam).
 3. For each route it reports protein delivered by domestic or novel protein (kt protein), the meat
    protein it displaces (kt protein, after the route's net displacement factor) and, for R2, the
    meat protein already avoided by existing chay days (a baseline, not a change).
 4. It compares the totals with the Part IV S-ALT scenario, which assumes 1%, 3%, 5% and 10% of meat
    protein replaced by plant-based and fermented foods in 2030, 2035, 2040 and 2050, and it
    translates the S-ALT 2030 requirement into what each route alone would need.
 5. Sensitivity: one assumption at a time is set to its SENS-LOW and SENS-HIGH value, and the change
    in total meat protein displaced in D-BENCH 2035 is reported.

Scenarios
  D-DRIFT    Incumbent drift: novel protein stays a small import-substitution business.
  D-BENCH    Benchmark path: routes grow to levels anchored on analogues observed elsewhere,
             scaled to Vietnam's channels and price gap.
  D-STRETCH  Stretch: conditions not yet observed anywhere (per-serving price parity in local
             formats, hybrids common in processed meat, canteen defaults, more chay days).
"""
import csv
import os

# Protein content of textured-protein line output (50 to 70% as sold, TPP-01).
# Lower than the R1 import pool average (DMA-005, 0.65), which includes gluten and isolates.
LINE_PRODUCT_PROTEIN = 0.60

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSUMPTIONS = os.path.join(ROOT, "data", "demand_assumptions.csv")
BALANCE = os.path.join(ROOT, "data", "balance_outputs.csv")
OUTPUTS = os.path.join(ROOT, "data", "demand_outputs.csv")
SENSITIVITY = os.path.join(ROOT, "data", "demand_sensitivity.csv")

YEARS = [2025, 2030, 2035, 2040, 2050]
SCENARIOS = ["D-DRIFT", "D-BENCH", "D-STRETCH"]
ROUTES = ["R1", "R2", "R3", "R4", "R5", "R6", "R7"]
ROUTE_NAMES = {
    "R1": "Ingredient import substitution",
    "R2": "Chay occasions",
    "R3": "Hybrid processed meat",
    "R4": "Institutional meals",
    "R5": "Household modern analogues",
    "R6": "High-protein plant milks",
    "R7": "Exports",
}
SALT_SHARE = {2025: 0.0, 2030: 0.01, 2035: 0.03, 2040: 0.05, 2050: 0.10}


class Params:
    """Looks up (parameter, scenario, year) with fallback to ALL and linear interpolation between years."""

    def __init__(self, path, overrides=None):
        self.rows = {}
        with open(path, encoding="utf-8") as fh:
            for r in csv.DictReader(fh):
                key = (r["parameter"], r["scenario"])
                self.rows.setdefault(key, {})[r["year"]] = float(r["value"])
        self.overrides = overrides or {}

    def _series(self, name, scen):
        for s in (scen, "ALL"):
            if (name, s) in self.rows:
                return self.rows[(name, s)]
        raise KeyError(f"{name} / {scen}")

    def get(self, name, scen, year):
        if name in self.overrides:
            return self.overrides[name]
        ser = self._series(name, scen)
        if "ALL" in ser:
            return ser["ALL"]
        pts = sorted((int(y), v) for y, v in ser.items())
        if year <= pts[0][0]:
            return pts[0][1]
        if year >= pts[-1][0]:
            return pts[-1][1]
        for (y0, v0), (y1, v1) in zip(pts, pts[1:]):
            if y0 <= year <= y1:
                return v0 + (v1 - v0) * (year - y0) / (y1 - y0)
        raise ValueError(name)

    def bound(self, name, which):
        return self.rows[(name, which)]["ALL"]


def load_balance():
    pop, meat, salt_food, salt_feed = {}, {}, {}, {}
    with open(BALANCE, encoding="utf-8") as fh:
        for r in csv.DictReader(fh):
            y = int(r["year"])
            if r["scenario"] == "S-BASE" and r["indicator"] == "population":
                pop[y] = float(r["value"])
            if r["scenario"] == "S-BASE" and r["indicator"] == "meat_consumption_animal_kt_cwe":
                meat[y] = float(r["value"])
            if r["scenario"] == "S-ALT" and r["indicator"] == "alt_food_protein_kt":
                salt_food[y] = float(r["value"])
            if r["scenario"] == "S-ALT" and r["indicator"] == "alt_feed_protein_kt":
                salt_feed[y] = float(r["value"])
    return pop, meat, salt_food, salt_feed


def run(P, scen, bal):
    pop, meat_cwe, salt_food, salt_feed = bal
    out = {}
    for y in YEARS:
        g = lambda n: P.get(n, scen, y)
        res = {}
        t = y - 2025
        meat_protein = meat_cwe[y] * g("protein_per_kg_meat_cwe")  # kt protein
        persons = pop[y] * 1e6
        meat_g_per_person_day = meat_protein * 1e9 / persons / 365.0
        res["meat_protein_kt"] = meat_protein
        res["meat_protein_g_per_person_day"] = meat_g_per_person_day

        # R1 ingredient import substitution
        pool = P.get("r1_food_plant_protein_ingredient_kt", scen, 2025) * (1 + g("r1_pool_growth")) ** t
        pool_prot = pool * g("r1_ingredient_protein_share")
        res["R1_pool_protein_kt"] = pool_prot
        res["R1_delivered"] = pool_prot * g("r1_domestic_share")
        res["R1_displaced"] = 0.0

        # R2 chay occasions
        days_share = g("r2_keeper_share") * g("r2_days_per_month") / 30.4
        chay_person_days = persons * days_share * 365.0
        res["R2_chay_day_share"] = days_share
        res["R2_baseline_meat_avoided_kt"] = chay_person_days * meat_g_per_person_day / 1e9
        added_days_share = g("r2_keeper_share") * g("r2_added_days") / 30.4
        added_person_days = persons * added_days_share * 365.0
        up = g("r2_upgrade_share")
        res["R2_delivered"] = (chay_person_days + added_person_days) * up * g("r2_upgraded_protein_g") / 1e9
        res["R2_displaced"] = added_person_days * meat_g_per_person_day * (1 - g("r2_compensation")) / 1e9

        # R3 hybrid processed meat
        proc_prot = meat_protein * g("r3_processed_share")
        repl = proc_prot * g("r3_hybrid_adoption") * g("r3_replacement")
        res["R3_processed_meat_protein_kt"] = proc_prot
        res["R3_delivered"] = repl
        res["R3_displaced"] = repl * g("r3_net_displacement")

        # R4 institutional meals
        can = P.get("r4_canteen_meals_bn", scen, 2025) * (1 + g("r4_canteen_growth")) ** t
        sch = P.get("r4_school_meals_bn", scen, 2025) * (1 + g("r4_school_growth")) ** t
        ppm = g("r4_protein_per_meal_g")
        pool4 = (can + sch) * ppm  # kt protein (1e9 meals x g = kt)
        deliv4 = can * ppm * g("r4_canteen_adoption") + sch * ppm * g("r4_school_adoption")
        res["R4_meal_protein_pool_kt"] = pool4
        res["R4_delivered"] = deliv4
        res["R4_displaced"] = deliv4 * g("r4_net_displacement")

        # R5 household modern analogues
        urban = min(0.60, P.get("urban_share", scen, 2025) + g("urban_share_gain") * t)
        buyers = persons * urban * g("r5_regular_buyer_share")
        deliv5 = buyers * g("r5_kg_product_per_buyer") * g("r5_protein_share") / 1e6  # kt
        res["R5_urban_population_m"] = persons * urban / 1e6
        res["R5_regular_buyers_m"] = buyers / 1e6
        res["R5_delivered"] = deliv5
        res["R5_displaced"] = deliv5 * g("r5_net_displacement")

        # R6 high-protein plant milks
        vol = P.get("r6_plant_milk_ml", scen, 2025) * (1 + g("r6_growth")) ** t  # million litres
        res["R6_plant_milk_ml"] = vol
        res["R6_delivered"] = vol * g("r6_high_protein_share") * g("r6_added_protein_g_per_l") / 1000.0  # kt
        res["R6_displaced"] = 0.0

        # R7 exports
        res["R7_delivered"] = g("r7_export_kt") * g("r7_protein_share")
        res["R7_displaced"] = 0.0

        res["total_delivered"] = sum(res[f"{r}_delivered"] for r in ROUTES)
        res["domestic_delivered"] = res["total_delivered"] - res["R7_delivered"]
        res["total_displaced"] = sum(res[f"{r}_displaced"] for r in ROUTES)
        res["displaced_share_of_meat_protein"] = res["total_displaced"] / meat_protein
        res["salt_food_requirement_kt"] = salt_food.get(y, 0.0)
        res["salt_feed_microbial_kt"] = salt_feed.get(y, 0.0)
        res["salt_share"] = SALT_SHARE[y]
        res["ingredient_value_usd_m"] = res["total_delivered"] * g("price_per_kg_protein_usd")
        # product tonnes at 60% protein and line equivalents for the food ingredient routes (R1 to R4)
        ingr = sum(res[f"{r}_delivered"] for r in ["R1", "R2", "R3", "R4"]) / LINE_PRODUCT_PROTEIN
        res["ingredient_product_kt_r1_r4"] = ingr
        res["line_equivalents_r1_r4"] = ingr / g("line_output_kt")

        # what S-ALT 2030 would require from each route alone (reported for 2030 only)
        if y == 2030:
            req = salt_food[2030]
            d3 = proc_prot * 0.30 * g("r3_net_displacement")
            d4 = pool4 * g("r4_net_displacement")
            res["req_R3_hybrid_adoption_at_30pct"] = req / d3 if d3 > 0 else float("nan")
            res["req_R4_share_of_all_meal_protein"] = req / d4 if d4 > 0 else float("nan")
            prot_per_buyer = g("r5_kg_product_per_buyer") * g("r5_protein_share")  # kg
            d5 = prot_per_buyer * g("r5_net_displacement")
            res["req_R5_regular_buyers_m"] = req * 1e6 / d5 / 1e6 if d5 > 0 else float("nan")
            per_day_kt = persons * meat_g_per_person_day * (1 - g("r2_compensation")) / 1e9  # kt if everyone adds one chay day
            res["req_R2_added_chay_days_per_person_month"] = req / per_day_kt / 12.0
        out[y] = res
    return out


UNITS = {
    "meat_protein_kt": ("kt protein", "Meat protein demand (S-BASE, carcass basis x 0.15)"),
    "meat_protein_g_per_person_day": ("g per person per day", "Meat protein per person per day (supply basis)"),
    "R1_pool_protein_kt": ("kt protein", "Food plant-protein ingredient pool (imports today)"),
    "R2_chay_day_share": ("share of person-days", "Chay days as a share of all person-days (assumption)"),
    "R2_baseline_meat_avoided_kt": ("kt protein", "Meat protein already avoided by existing chay days (in the baseline)"),
    "R3_processed_meat_protein_kt": ("kt protein", "Protein in processed meat products"),
    "R4_meal_protein_pool_kt": ("kt protein", "Protein in canteen and school protein dishes"),
    "R5_urban_population_m": ("million people", "Urban population (trend assumption)"),
    "R5_regular_buyers_m": ("million people", "Regular (monthly) buyers of modern analogues"),
    "R6_plant_milk_ml": ("million litres", "Plant milk volume"),
    "total_delivered": ("kt protein", "Total protein delivered by domestic or novel protein, all routes"),
    "domestic_delivered": ("kt protein", "Protein delivered in Vietnam (R1 to R6)"),
    "total_displaced": ("kt protein", "Meat protein displaced, all routes"),
    "displaced_share_of_meat_protein": ("share", "Meat protein displaced as a share of meat protein demand"),
    "salt_food_requirement_kt": ("kt protein", "Part IV S-ALT: meat protein replaced by plant-based and fermented foods"),
    "salt_feed_microbial_kt": ("kt protein", "Part IV S-ALT: microbial protein in feed (for comparison)"),
    "salt_share": ("share", "Part IV S-ALT share of meat protein replaced"),
    "ingredient_value_usd_m": ("USD million", "Ingredient value of protein delivered (order of magnitude)"),
    "ingredient_product_kt_r1_r4": ("kt product", "Ingredient product for R1 to R4 at 60% protein"),
    "line_equivalents_r1_r4": ("lines", "Equivalent 1 t/h textured-protein lines for R1 to R4"),
    "req_R3_hybrid_adoption_at_30pct": ("share of processed meat", "S-ALT 2030 by hybrids alone: adoption needed at 30% replacement"),
    "req_R4_share_of_all_meal_protein": ("share of canteen and school meal protein", "S-ALT 2030 by institutional meals alone"),
    "req_R5_regular_buyers_m": ("million regular buyers", "S-ALT 2030 by household analogues alone"),
    "req_R2_added_chay_days_per_person_month": ("extra chay days per person per month", "S-ALT 2030 by added chay days alone (whole population)"),
}
for r in ROUTES:
    UNITS[f"{r}_delivered"] = ("kt protein", f"{ROUTE_NAMES[r]}: protein delivered by domestic or novel protein")
    UNITS[f"{r}_displaced"] = ("kt protein", f"{ROUTE_NAMES[r]}: meat protein displaced")


def write_outputs(results):
    rows = []
    for scen in SCENARIOS:
        for y in YEARS:
            for ind, val in results[scen][y].items():
                unit, label = UNITS[ind]
                route = ind.split("_")[0] if ind[:2] in ROUTE_NAMES else ("all" if ind.startswith(("total", "domestic", "displaced", "ingredient", "line")) else "context")
                if ind.startswith("req_"):
                    route = ind.split("_")[1]
                ft = "calibration (2025 base)" if y == 2025 else "estimate"
                rows.append([scen, y, route, ind, label, round(val, 4 if abs(val) < 1 else 2), unit, ft, "VN-direct", "Low",
                             "demand_assumptions.csv; balance_outputs.csv", "What-if scenario result, not a forecast."])
    with open(OUTPUTS, "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow(["record_id", "scenario", "year", "route", "indicator", "label", "value", "unit", "foresight_type",
                    "evidence_label", "confidence", "source_ids", "notes"])
        for i, r in enumerate(rows, 1):
            w.writerow([f"DMO-{i:04d}"] + r)


def sensitivity(bal):
    base = run(Params(ASSUMPTIONS), "D-BENCH", bal)[2035]["total_displaced"]
    P0 = Params(ASSUMPTIONS)
    names = sorted({k[0] for k in P0.rows if k[1] == "SENS-LOW"})
    rows = []
    for n in names:
        lo_v, hi_v = P0.bound(n, "SENS-LOW"), P0.bound(n, "SENS-HIGH")
        lo = run(Params(ASSUMPTIONS, {n: lo_v}), "D-BENCH", bal)[2035]["total_displaced"]
        hi = run(Params(ASSUMPTIONS, {n: hi_v}), "D-BENCH", bal)[2035]["total_displaced"]
        rows.append([n, lo_v, hi_v, round(base, 2), round(lo, 2), round(hi, 2), round(max(abs(lo - base), abs(hi - base)), 2)])
    rows.sort(key=lambda r: -r[-1])
    with open(SENSITIVITY, "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow(["record_id", "parameter", "low_value", "high_value", "base_displaced_kt", "displaced_at_low_kt",
                    "displaced_at_high_kt", "max_change_kt", "scenario", "year", "notes"])
        for i, r in enumerate(rows, 1):
            w.writerow([f"DMS-{i:03d}"] + r + ["D-BENCH", 2035, "One assumption varied at a time; all else at D-BENCH values."])
    return rows


def main():
    bal = load_balance()
    P = Params(ASSUMPTIONS)
    results = {s: run(P, s, bal) for s in SCENARIOS}
    write_outputs(results)
    sens = sensitivity(bal)
    for s in SCENARIOS:
        for y in [2030, 2035, 2050]:
            r = results[s][y]
            print(f"{s} {y}: delivered {r['total_delivered']:.1f} kt protein; displaced {r['total_displaced']:.1f} kt "
                  f"({100 * r['displaced_share_of_meat_protein']:.2f}% of meat protein); S-ALT needs {r['salt_food_requirement_kt']:.1f} kt")
    print("Sensitivity (D-BENCH 2035, total meat protein displaced):")
    for r in sens:
        print("  ", r)


if __name__ == "__main__":
    main()
