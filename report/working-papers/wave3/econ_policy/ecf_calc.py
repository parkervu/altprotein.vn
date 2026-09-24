"""ECF arithmetic (wave 3, econ_policy). Rerunnable: python3 ecf_calc.py

Part A: learning applied to the edition 1.0 Vietnamese fungal feed-protein cost stack (ch09, cost stack A).
Part B: carbon cost per tonne of product and per tonne of protein at USD 25, 50, 100 per t CO2e.
Part C: indicative footprint of a glucose-based fungal feed protein made in Vietnam (our estimate).

All outputs are our estimates from stated inputs. None is a forecast.
"""

# ---------------------------------------------------------------- Part A
# Edition 1.0 cost stack A (USD per t product, 2026 prices), ch09 section 9.2.
STACK = {
    "low":  {"total": 2227, "capital": 960,  "maint": 240, "protein": 0.55},
    "high": {"total": 6612, "capital": 3600, "maint": 800, "protein": 0.45},
}
# Learning scenarios: learning rate applied to capital charge plus maintenance only;
# number of doublings of global biomass-fermentation protein capacity from 2025.
SCEN = {
    "slow":    {"lr": 0.05, "doublings": {2030: 1, 2040: 3, 2050: 4}},
    "central": {"lr": 0.12, "doublings": {2030: 2, 2040: 4, 2050: 6}},
    "fast":    {"lr": 0.20, "doublings": {2030: 3, 2040: 6, 2050: 8}},
}
FISHMEAL_PROT = (2625, 3846)   # USD per t protein, 2025 average and Aug 2026 (ch09)
SBM_PROT = 880                 # USD per t protein (ch09)


def part_a():
    print("PART A: fungal feed protein, USD per t protein (2026 real input prices)")
    for end, s in STACK.items():
        opex = s["total"] - s["capital"] - s["maint"]
        floor = opex / s["protein"]
        print(f"  {end}-cost end: opex floor {opex} USD/t product = {floor:,.0f} USD/t protein")
    rows = []
    for name, sc in SCEN.items():
        for year, d in sc["doublings"].items():
            f = (1 - sc["lr"]) ** d
            out = []
            for end, s in STACK.items():
                opex = s["total"] - s["capital"] - s["maint"]
                cap = (s["capital"] + s["maint"]) * f
                out.append((opex + cap) / s["protein"])
            rows.append((name, year, sc["lr"], d, f, out[0], out[1]))
            print(f"  {name:8s} {year}: LR {sc['lr']:.0%}, {d} doublings, capex factor {f:.2f}:"
                  f" {out[0]:,.0f} to {out[1]:,.0f} USD/t protein")
    # Capital-charge sensitivity: WACC-driven charge falls from 12-18% to 9-12% a year
    for end, s in STACK.items():
        rate_now = 0.12 if end == "low" else 0.18
        rate_new = 0.09 if end == "low" else 0.12
        cap_new = s["capital"] * rate_new / rate_now
        tot = s["total"] - s["capital"] + cap_new
        print(f"  WACC sensitivity ({end} end): capital charge {rate_now:.0%} -> {rate_new:.0%}:"
              f" {tot / s['protein']:,.0f} USD/t protein (no learning)")
    return rows


# ---------------------------------------------------------------- Part C
def part_c():
    """Indicative cradle-to-gate footprint, fungal biomass on cassava glucose, Vietnam.
    Inputs per t product (45 to 55% protein), from ch09 cost stack A quantities."""
    glucose_t = (2.0, 2.2)          # t glucose-equivalent per t product (ch09)
    ef_glucose = (0.65, 1.10)       # t CO2e per t glucose-eq: cassava starch 0.60 to 0.97 (Thai LCAs)
                                    # plus starch-to-glucose hydrolysis (our assumption +0.05 to 0.13)
    urea_t = (0.17, 0.20)           # t urea per t product (ch09)
    ef_urea = (1.0, 2.5)            # t CO2e per t urea incl. release of fixed CO2 (our assumption)
    mwh = (0.9, 3.1)                # MWh per t product: process 0.77 to 1.56 plus cooling 0.1 to 1.56,
                                    # back-calculated from ch09 electricity lines at USD 0.075/kWh
    other = (0.0, 0.3)              # steam from rice husk (biogenic), wastewater with biogas capture
    grids = {"2023 grid 0.6592": 0.6592, "2030 grid (FTG avg) 0.35": 0.35,
             "2050 grid (FTG avg) 0.02": 0.02}
    out = {}
    for label, g in grids.items():
        lo = glucose_t[0] * ef_glucose[0] + urea_t[0] * ef_urea[0] + mwh[0] * g + other[0]
        hi = glucose_t[1] * ef_glucose[1] + urea_t[1] * ef_urea[1] + mwh[1] * g + other[1]
        out[label] = (lo, hi)
        print(f"PART C: fungal feed protein, {label}: {lo:.2f} to {hi:.2f} t CO2e/t product;"
              f" {lo / 0.55:.1f} to {hi / 0.45:.1f} t CO2e/t protein")
    return out


# ---------------------------------------------------------------- Part B
# (input, EF t CO2e per t product (low, high), protein share, basis)
INPUTS = [
    ("Soybean meal, Argentina, no land-use change (Dalgaard et al. 2008)", (0.72, 0.72), 0.46,
     "attributional LCA, delivered Rotterdam, no LUC"),
    ("Soybean meal, Argentina, with land-use change (GFLI 2022 via Wilke et al. 2023)", (4.09, 4.09), 0.46,
     "GFLI database, country-level LUC"),
    ("Soybean meal, origin mix in a German LCA dataset (Wilke et al. 2023)", (4.42, 4.42), 0.46,
     "study dataset incl. LUC"),
    ("Soybean, Brazil exports average 2010-2015 (Escobar et al. 2020)", (0.69, 0.69), 0.46,
     "spatially explicit, incl. LUC (one third); per t soy, applied to meal under mass allocation"),
    ("Soybean, Brazil Cerrado biome (Escobar et al. 2020)", (1.00, 1.00), 0.46,
     "as above"),
    ("Soybean, Brazil Matopiba frontier, up to 6x average (Escobar et al. 2020)", (4.14, 4.14), 0.46,
     "as above; 6 x 0.69"),
    ("Fishmeal, Peru anchoveta, ex-plant 2019-2021 (Deville et al. 2025)", (0.29, 0.32), 0.65,
     "energy allocation"),
    ("Fishmeal, Peru, delivered to China (Deville et al. 2025)", (0.53, 0.56), 0.65,
     "ex-plant plus 0.239 transport"),
]
PRICES = (25, 50, 100)


def part_b(fungal):
    rows = []
    for name, (lo, hi), prot, basis in INPUTS:
        rows.append((name, lo, hi, prot, basis))
    for label, (lo, hi) in fungal.items():
        rows.append((f"Fungal feed protein on cassava glucose, Vietnam, {label} (ECF estimate)",
                     lo, hi, (0.55, 0.45), "our estimate, part C; protein 55% at low end, 45% at high end"))
    # Hydrogen-oxidising bacteria protein, electricity only (FTG headline 9): t CO2 per t protein
    for label, (lo, hi) in {"2023 grid": (46, 46), "2030 grid": (24, 28), "2050 grid": (1.1, 1.4)}.items():
        rows.append((f"Power-to-protein (H2 route), Vietnam {label}, electricity only (FTG)",
                     lo * 0.65, hi * 0.65, 0.65, "FTG estimate per t protein x 0.65"))
    print("PART B: carbon cost, USD per t product | per t protein")
    table = []
    for name, lo, hi, prot, basis in rows:
        costs = []
        plo, phi = prot if isinstance(prot, tuple) else (prot, prot)
        for p in PRICES:
            costs.append((lo * p, hi * p, lo * p / plo, hi * p / phi))
        table.append((name, lo, hi, prot, basis, costs))
        c = costs
        print(f"  {name}: EF {lo:.2f} to {hi:.2f} | "
              + "; ".join(f"@{p}: {x[0]:,.0f}-{x[1]:,.0f} | {x[2]:,.0f}-{x[3]:,.0f}"
                          for p, x in zip(PRICES, c)))
    return table


if __name__ == "__main__":
    part_a()
    fungal = part_c()
    part_b(fungal)


# ---------------------------------------------------------------- CSV writer
SRC = {
    "Dalgaard": ("ECF-21; ECF-22", "general", "Medium", "EF as cited by Wilke et al. 2023; no LUC"),
    "GFLI": ("ECF-22", "general", "Medium", "GFLI 2022 value as cited; country-level LUC method"),
    "German": ("ECF-22", "general", "Low", "Study dataset; origin mix not specified in excerpt"),
    "Brazil exports": ("ECF-23", "general", "High", "2010-2015 average; China-bound 0.67, EU-bound 0.77; per t soybean"),
    "Cerrado": ("ECF-23", "general", "High", "Biome average; per t soybean"),
    "Matopiba": ("ECF-23", "general", "Medium", "Paper: 'up to six times' the 0.69 average; 4.14 is our upper reading"),
    "ex-plant": ("ECF-24", "general", "High", "Energy allocation; 2019 Coishco 0.292 +/- 0.027"),
    "delivered": ("ECF-24", "general", "High", "Adds 0.239 t CO2e per t for shipping to China"),
    "Fungal": ("ECF-25; ECF-26; COST-08; FTG", "VN-direct", "Low", "Our estimate from ch09 input quantities; see ecf_calc.py part C"),
    "Power-to-protein": ("FTG; COST-08", "VN-direct", "Low", "Electricity only; FTG per-protein figure x 0.65 protein share"),
}


def write_csv(table, path="carbon_cost_per_protein.csv"):
    import csv
    hdr = ["input", "emission_factor_tco2e_per_t_low", "emission_factor_tco2e_per_t_high", "basis",
           "protein_share", "cost_at_25_usd_per_t_product", "cost_at_50_usd_per_t_product",
           "cost_at_100_usd_per_t_product", "cost_at_25_usd_per_t_protein", "cost_at_50_usd_per_t_protein",
           "cost_at_100_usd_per_t_protein", "source_ids", "evidence_label", "confidence",
           "foresight_type", "horizon_year", "notes"]
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(hdr)
        for name, lo, hi, prot, basis, costs in table:
            key = next(k for k in SRC if k in name)
            sid, lab, conf, note = SRC[key]
            ps = f"{prot[0]:.2f} to {prot[1]:.2f}" if isinstance(prot, tuple) else f"{prot:.2f}"
            rng = lambda a, b: f"{a:,.0f}" if round(a) == round(b) else f"{a:,.0f} to {b:,.0f}"
            ef = lambda a, b: (f"{a:.2f}", f"{b:.2f}")
            horizon = "n/a (measured factor)"
            if "grid" in name:
                horizon = "2030" if "2030 grid" in name else ("2050" if "2050 grid" in name else "2026 (current grid)")
            ftype = "estimate" if lab == "VN-direct" else "trend"
            w.writerow([name, *ef(lo, hi), basis, ps,
                        rng(costs[0][0], costs[0][1]), rng(costs[1][0], costs[1][1]), rng(costs[2][0], costs[2][1]),
                        rng(costs[0][2], costs[0][3]), rng(costs[1][2], costs[1][3]), rng(costs[2][2], costs[2][3]),
                        sid, lab, conf, ftype, horizon,
                        note + ". Carbon cost = EF x price; applies only if a price reaches embodied emissions (no instrument does so today)."])
    print("wrote", path)


if __name__ == "__main__":
    write_csv(part_b(part_c()))
