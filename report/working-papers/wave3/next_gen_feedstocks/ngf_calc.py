"""NGF: next-generation feedstocks, arithmetic for Part V (futures 2030 to 2050).

Run: python ngf_calc.py
Standard library only. Every number is either a sourced input (source ID in the
comment) or our assumption (marked ASSUMPTION). All outputs are our estimates,
not forecasts. Cases A, B, C are what-if cases with no probabilities.

Sugar-equivalent (SE): tonnes of glucose that would grow the same mass of
microbial protein on the QNT sugar route (4.0 t glucose per t protein, QNT).
"""

# ---------------------------------------------------------------- constants
GLU_PER_PROT = 4.0            # t glucose per t protein, sugar route (QNT assumptions.csv)
STARCH_TO_GLU = 1.08          # t glucose per t starch in practice (QNT)
HYDROLYSIS_EFF = 0.90         # ASSUMPTION: share of residue starch recovered as glucose
SE_PER_T_STARCH = STARCH_TO_GLU * HYDROLYSIS_EFF   # 0.97
SE_PER_T_SUCROSE = 1 / 0.95   # QNT: 0.95 t sucrose per t glucose equivalent
METHANOL_PER_PROT = 1 / (0.43 * 0.506)  # NGF-13: 0.43 g DCW per g methanol, 50.6% protein
SE_PER_T_METHANOL = GLU_PER_PROT / METHANOL_PER_PROT
CH4_PER_PROT = 1.7            # t CH4 per t crude protein, methanotroph (FTG-25)
SE_PER_T_CH4 = GLU_PER_PROT / CH4_PER_PROT
COD_PER_GLU = 1.067           # g COD per g glucose (stoichiometry)
SE_PER_T_COD_FERMENTABLE = 1 / COD_PER_GLU

# S-ALT sugar-route glucose need (QNT outputs.csv, kt -> Mt)
NEED = {2030: 0.2375, 2040: 0.852, 2050: 1.318}

YEARS = [2025, 2030, 2040, 2050]

def rng(lo, hi):
    return (lo, hi)

def fmt(x, d=2):
    return f"{x:.{d}f}"

# ---------------------------------------------------------------- stream volumes
# Rice straw, air-dry Mt. Straw-to-grain ratio 1.19 (NGF-01). Paddy 43.5 Mt in 2025 (FS-25).
# Paddy path ASSUMPTION: rice land falls 17% by 2030 (NTS-15) partly offset by yield;
# Res 19 floor of 35 Mt paddy (NTS-04). Ranges (lo, hi).
paddy = {2025: (43.5, 43.5), 2030: (40.0, 43.0), 2040: (37.0, 42.0), 2050: (35.0, 41.0)}
STRAW_RATIO = 1.19
straw = {y: (paddy[y][0] * STRAW_RATIO, paddy[y][1] * STRAW_RATIO) for y in YEARS}
DM_AIRDRY = 0.88              # 12.4% moisture at baling (NGF-02)
SUGAR_PER_T_DM_LIGNO = (0.35, 0.50)  # our derivation from 38% cellulose, 25% hemicellulose (NGF-05):
# glucose only at 85% glucan conversion = 0.38*1.111*0.85 = 0.36; plus xylose at 70% = +0.20
SE_STRAW = (DM_AIRDRY * SUGAR_PER_T_DM_LIGNO[0], DM_AIRDRY * SUGAR_PER_T_DM_LIGNO[1])

# Bagasse DM: cane 13.3 Mt (FS-31), bagasse 0.29 t wet per t cane (NGF-09 uses 0.3), 50% moisture (ASSUMPTION)
cane = {2025: 13.3, 2030: 14.0, 2040: 14.0, 2050: 14.0}   # ASSUMPTION: flat to slight rise (QNS 40 kha target, FS-35)
bagasse_dm = {y: cane[y] * 0.29 * 0.5 for y in YEARS}

# Cassava pulp starch: 0.48 to 0.98 Mt in 2025 from 2.49 Mt starch (edition 1.0 app-c C3)
starch_out = {2025: 2.49, 2030: 2.5, 2040: 2.5, 2050: 2.5}  # ASSUMPTION: flat; swings with China demand
PULP_STARCH_PER_T_STARCH = (0.48 / 2.49, 0.98 / 2.49)
pulp_starch = {y: (starch_out[y] * PULP_STARCH_PER_T_STARCH[0], starch_out[y] * PULP_STARCH_PER_T_STARCH[1]) for y in YEARS}

# Cassava stems: roots 10.24 Mt (FS-01); stem DM 0.12 to 0.18 t per t fresh root (our harvest-index
# ASSUMPTION); 70% not replanted (NGF-27); hydrolysable starch 15 to 30% of stem DM (NGF-25, NGF-26)
roots = {2025: 10.24, 2030: 10.0, 2040: 10.0, 2050: 10.0}
stems_dm_avail = {y: (roots[y] * 0.12 * 0.7, roots[y] * 0.18 * 0.7) for y in YEARS}
SE_STEM = (0.15 * SE_PER_T_STARCH, 0.30 * SE_PER_T_STARCH)

# Maize stover DM: grain 4.4 Mt (FS-25), stover 1.0 t DM per t grain (ASSUMPTION, general)
maize = {2025: 4.4, 2030: 4.2, 2040: 4.0, 2050: 4.0}
stover = {y: maize[y] * 1.0 for y in YEARS}

# Coffee pulp dried 0.45 Mt (2016 basis, FS-46); fermentable 0.15 to 0.30 t SE per t (ASSUMPTION, Low)
coffee = {y: 0.45 for y in YEARS}
SE_COFFEE = (0.15, 0.30)

# Molasses 0.55 to 0.72 Mt (FS-37 derived); 48% fermentable sugars as sucrose (ASSUMPTION, general)
molasses = {y: (0.55 * cane[y] / 13.3, 0.72 * cane[y] / 13.3) for y in YEARS}
SE_MOLASSES = 0.48 * SE_PER_T_SUCROSE

# Ethanol stillage: ethanol 277,000 to 303,000 m3 a year (FS-09 derived), 0.789 t per m3.
# Fermentables left in stillage (glycerol, residual sugar, acids) 0.10 to 0.15 t SE per t ethanol (ASSUMPTION)
ethanol_t = {2025: 0.23, 2030: 0.30, 2040: 0.50, 2050: 0.60}   # ASSUMPTION: E10 then E15/E20 (NGF-31)
SE_STILLAGE = (0.10, 0.15)

# Cassava starch wastewater: 13 m3 per t starch, COD 12.2 kg per m3 (NGF-24); range 7 to 20 kg per m3
ww_cod = {y: (starch_out[y] * 13 * 0.007, starch_out[y] * 13 * 0.020) for y in YEARS}
FERMENTABLE_COD = 0.70        # ASSUMPTION
SE_WW = FERMENTABLE_COD * SE_PER_T_COD_FERMENTABLE

# Food-industry wastewaters (tofu whey, brewery): 0.07 to 0.13 Mt SE technical (our rough estimate, Low)
foodind_se = {y: (0.07, 0.13) for y in YEARS}

# Household food waste: 76 kg per person per year (NGF-28), population UN WPP 2024 (QNT)
pop = {2025: 101.6, 2030: 104.25, 2040: 108.44, 2050: 110.01}
foodwaste = {y: pop[y] * 0.076 for y in YEARS}   # Mt wet
SE_FOODWASTE = (0.08, 0.15)   # ASSUMPTION: 20 to 30% DM x 40 to 60% fermentable carbohydrate

# Pig-manure methane: herd 31.4 M (MAC-12); 0.3 kg VS per head per day; 0.29 m3 CH4 per kg VS;
# 60% of that realised in digesters; 0.717 kg per m3 (all ASSUMPTIONS, IPCC-type defaults)
herd = {2025: 31.4, 2030: 32.0, 2040: 33.0, 2050: 33.0}
CH4_PER_HEAD = 0.3 * 365 * 0.29 * 0.6 * 0.717 / 1000   # t CH4 per head per year
capture = {2025: 0.30, 2030: 0.40, 2040: 0.55, 2050: 0.65}  # ASSUMPTION: large-farm share of herd
manure_ch4 = {y: herd[y] * CH4_PER_HEAD * capture[y] for y in YEARS}   # Mt CH4 capturable

# ---------------------------------------------------------------- cases (share of technical volume, or Mt)
# Case A: no 2G breakthrough. Case B: 2G works at modest scale. Case C: 2G and C1 scale.
CASES = ["A", "B", "C"]
straw_to_ferm = {2030: {"A": 0, "B": 0.02, "C": 0.05}, 2040: {"A": 0, "B": 0.3, "C": 2.0}, 2050: {"A": 0, "B": 1.0, "C": 5.0}}  # Mt air-dry
share = {
    "bagasse":  {2030: {"A": 0, "B": 0, "C": 0.01}, 2040: {"A": 0, "B": 0.02, "C": 0.10}, 2050: {"A": 0, "B": 0.03, "C": 0.15}},
    "pulp":     {2030: {"A": 0.05, "B": 0.10, "C": 0.20}, 2040: {"A": 0.10, "B": 0.25, "C": 0.50}, 2050: {"A": 0.10, "B": 0.25, "C": 0.50}},
    "stems":    {2030: {"A": 0, "B": 0.02, "C": 0.05}, 2040: {"A": 0, "B": 0.10, "C": 0.25}, 2050: {"A": 0, "B": 0.10, "C": 0.25}},
    "stover":   {2030: {"A": 0, "B": 0, "C": 0.01}, 2040: {"A": 0, "B": 0.02, "C": 0.05}, 2050: {"A": 0, "B": 0.03, "C": 0.10}},
    "coffee":   {2030: {"A": 0, "B": 0.02, "C": 0.05}, 2040: {"A": 0, "B": 0.05, "C": 0.20}, 2050: {"A": 0, "B": 0.05, "C": 0.20}},
    "molasses": {2030: {"A": 0, "B": 0.02, "C": 0.05}, 2040: {"A": 0, "B": 0.05, "C": 0.10}, 2050: {"A": 0, "B": 0.05, "C": 0.10}},
    "stillage": {2030: {"A": 0.10, "B": 0.30, "C": 0.50}, 2040: {"A": 0.20, "B": 0.50, "C": 0.80}, 2050: {"A": 0.20, "B": 0.50, "C": 0.80}},
    "ww":       {2030: {"A": 0.02, "B": 0.05, "C": 0.10}, 2040: {"A": 0.05, "B": 0.10, "C": 0.30}, 2050: {"A": 0.05, "B": 0.10, "C": 0.30}},
    "foodind":  {2030: {"A": 0.02, "B": 0.05, "C": 0.10}, 2040: {"A": 0.05, "B": 0.20, "C": 0.40}, 2050: {"A": 0.05, "B": 0.20, "C": 0.40}},
    "foodwaste":{2030: {"A": 0, "B": 0, "C": 0.01}, 2040: {"A": 0, "B": 0.02, "C": 0.10}, 2050: {"A": 0, "B": 0.02, "C": 0.10}},
    "manure":   {2030: {"A": 0, "B": 0, "C": 0.01}, 2040: {"A": 0, "B": 0.02, "C": 0.10}, 2050: {"A": 0, "B": 0.05, "C": 0.20}},
}
emethanol_se = {2030: {"A": 0, "B": 0, "C": 0}, 2040: {"A": 0, "B": 0.01, "C": 0.10}, 2050: {"A": 0, "B": 0.10, "C": 0.50}}  # Mt SE

def stream_se(year, case):
    """Return dict of route -> (lo, hi) Mt SE for a year and case."""
    out = {}
    s = straw_to_ferm[year][case]
    out["rice straw (2G)"] = (s * SE_STRAW[0], s * SE_STRAW[1])
    sh = share["bagasse"][year][case]
    out["bagasse surplus (2G)"] = (bagasse_dm[year] * sh * SUGAR_PER_T_DM_LIGNO[0], bagasse_dm[year] * sh * SUGAR_PER_T_DM_LIGNO[1])
    sh = share["pulp"][year][case]
    out["cassava pulp starch"] = (pulp_starch[year][0] * sh * SE_PER_T_STARCH, pulp_starch[year][1] * sh * SE_PER_T_STARCH)
    sh = share["stems"][year][case]
    out["cassava stems (starch)"] = (stems_dm_avail[year][0] * sh * SE_STEM[0], stems_dm_avail[year][1] * sh * SE_STEM[1])
    sh = share["stover"][year][case]
    out["maize stover (2G)"] = (stover[year] * sh * SUGAR_PER_T_DM_LIGNO[0], stover[year] * sh * SUGAR_PER_T_DM_LIGNO[1])
    sh = share["coffee"][year][case]
    out["coffee pulp"] = (coffee[year] * sh * SE_COFFEE[0], coffee[year] * sh * SE_COFFEE[1])
    sh = share["molasses"][year][case]
    out["molasses (new use)"] = (molasses[year][0] * sh * SE_MOLASSES, molasses[year][1] * sh * SE_MOLASSES)
    sh = share["stillage"][year][case]
    out["ethanol stillage"] = (ethanol_t[year] * sh * SE_STILLAGE[0], ethanol_t[year] * sh * SE_STILLAGE[1])
    sh = share["ww"][year][case]
    out["starch wastewater"] = (ww_cod[year][0] * sh * SE_WW, ww_cod[year][1] * sh * SE_WW)
    sh = share["foodind"][year][case]
    out["food-industry wastewater"] = (foodind_se[year][0] * sh, foodind_se[year][1] * sh)
    sh = share["foodwaste"][year][case]
    out["household food waste"] = (foodwaste[year] * sh * SE_FOODWASTE[0], foodwaste[year] * sh * SE_FOODWASTE[1])
    sh = share["manure"][year][case]
    out["pig-manure biogas (CH4)"] = (manure_ch4[year] * sh * SE_PER_T_CH4, manure_ch4[year] * sh * SE_PER_T_CH4)
    e = emethanol_se[year][case]
    out["e-methanol (CO2 + H2)"] = (e, e)
    return out

def main():
    print("=== Conversion factors ===")
    print(f"SE per t starch in residues: {SE_PER_T_STARCH:.3f}")
    print(f"t methanol per t protein: {METHANOL_PER_PROT:.2f}; SE per t methanol: {SE_PER_T_METHANOL:.3f}")
    print(f"SE per t CH4: {SE_PER_T_CH4:.3f}")
    print(f"SE per t air-dry straw: {SE_STRAW[0]:.3f} to {SE_STRAW[1]:.3f}")
    print(f"SE per t molasses: {SE_MOLASSES:.3f}")
    print(f"CH4 per pig per year (t): {CH4_PER_HEAD:.4f}")

    print("\n=== Technical stream volumes ===")
    for y in YEARS:
        print(f"{y}: straw {fmt(straw[y][0],1)} to {fmt(straw[y][1],1)} Mt air-dry; bagasse {fmt(bagasse_dm[y])} Mt DM; "
              f"pulp starch {fmt(pulp_starch[y][0])} to {fmt(pulp_starch[y][1])} Mt; stems avail {fmt(stems_dm_avail[y][0])} to {fmt(stems_dm_avail[y][1])} Mt DM; "
              f"stover {fmt(stover[y])} Mt DM; molasses {fmt(molasses[y][0])} to {fmt(molasses[y][1])} Mt; ethanol {fmt(ethanol_t[y])} Mt; "
              f"wastewater COD {fmt(ww_cod[y][0])} to {fmt(ww_cod[y][1])} Mt; food waste {fmt(foodwaste[y])} Mt wet; manure CH4 capturable {fmt(manure_ch4[y],3)} Mt")

    print("\n=== Technical SE potential if the whole stream were used (Mt SE) ===")
    for y in [2025, 2050]:
        tp = {
            "rice straw all": (straw[y][0] * SE_STRAW[0], straw[y][1] * SE_STRAW[1]),
            "rice straw, 1 Mha programme (14 Mt)": (14 * SE_STRAW[0], 14 * SE_STRAW[1]),
            "rice straw burned or buried, Mekong (70% of 24 Mt)": (16.8 * SE_STRAW[0], 16.8 * SE_STRAW[1]),
            "bagasse all": (bagasse_dm[y] * SUGAR_PER_T_DM_LIGNO[0], bagasse_dm[y] * SUGAR_PER_T_DM_LIGNO[1]),
            "pulp starch all": (pulp_starch[y][0] * SE_PER_T_STARCH, pulp_starch[y][1] * SE_PER_T_STARCH),
            "stems not replanted": (stems_dm_avail[y][0] * SE_STEM[0], stems_dm_avail[y][1] * SE_STEM[1]),
            "maize stover all": (stover[y] * SUGAR_PER_T_DM_LIGNO[0], stover[y] * SUGAR_PER_T_DM_LIGNO[1]),
            "molasses all": (molasses[y][0] * SE_MOLASSES, molasses[y][1] * SE_MOLASSES),
            "stillage all": (ethanol_t[y] * SE_STILLAGE[0], ethanol_t[y] * SE_STILLAGE[1]),
            "starch wastewater all": (ww_cod[y][0] * SE_WW, ww_cod[y][1] * SE_WW),
            "household food waste all": (foodwaste[y] * SE_FOODWASTE[0], foodwaste[y] * SE_FOODWASTE[1]),
            "pig manure CH4 capturable": (manure_ch4[y] * SE_PER_T_CH4, manure_ch4[y] * SE_PER_T_CH4),
        }
        print(f"-- {y}")
        for k, v in tp.items():
            print(f"   {k}: {fmt(v[0])} to {fmt(v[1])}")

    print("\n=== Straw needed to cover the S-ALT need alone ===")
    for y in [2040, 2050]:
        lo = NEED[y] / SE_STRAW[1]; hi = NEED[y] / SE_STRAW[0]
        print(f"{y}: need {NEED[y]:.3f} Mt glucose -> {lo:.2f} to {hi:.2f} Mt air-dry straw = "
              f"{100*lo/straw[y][1]:.1f}% to {100*hi/straw[y][0]:.1f}% of national straw; "
              f"{100*lo/14:.0f}% to {100*hi/14:.0f}% of the 1 Mha programme straw; "
              f"{lo/0.2:.0f} to {hi/0.2:.0f} Panipat-size plants (0.2 Mt straw each)")

    print("\n=== Case totals (Mt SE) and share of S-ALT need ===")
    rows = []
    for y in [2030, 2040, 2050]:
        for c in CASES:
            d = stream_se(y, c)
            lo = sum(v[0] for v in d.values()); hi = sum(v[1] for v in d.values())
            twog = sum(v[0] for k, v in d.items() if "2G" in k), sum(v[1] for k, v in d.items() if "2G" in k)
            c1 = sum(v[0] for k, v in d.items() if "CH4" in k or "methanol" in k), sum(v[1] for k, v in d.items() if "CH4" in k or "methanol" in k)
            print(f"{y} case {c}: total {fmt(lo)} to {fmt(hi)} Mt SE = {100*lo/NEED[y]:.0f}% to {100*hi/NEED[y]:.0f}% of S-ALT need "
                  f"({NEED[y]:.3f}); of which lignocellulosic {fmt(twog[0])} to {fmt(twog[1])}; C1 {fmt(c1[0])} to {fmt(c1[1])}")
            for k, v in d.items():
                rows.append((y, c, k, v[0], v[1]))
    print("\n=== Detail by route ===")
    for r in rows:
        if r[1] in ("A", "B", "C") and r[0] in (2040, 2050):
            print(f"{r[0]} {r[1]} {r[2]}: {r[3]:.3f} to {r[4]:.3f}")

    print("\n=== C1 inputs for 1 Mt SE via methanol ===")
    meth = 1 / SE_PER_T_METHANOL
    h2 = meth * 0.1875 * 1.03   # stoichiometric 6/32 plus 3% losses (ASSUMPTION)
    co2 = meth * 1.375
    twh = h2 * 53 + meth * 0.5   # Mt H2 x 53 kWh per kg (QNT-10) = TWh; + 0.5 MWh per t methanol (ASSUMPTION)
    print(f"methanol {meth:.2f} Mt; H2 {h2:.3f} Mt; CO2 {co2:.2f} Mt; electricity {twh:.1f} TWh")
    s_alt = NEED[2050]
    print(f"S-ALT 2050 need via methanol: methanol {s_alt*meth:.2f} Mt; H2 {s_alt*h2:.3f} Mt "
          f"({100*s_alt*h2/20:.1f}% to {100*s_alt*h2/10:.1f}% of the 10 to 20 Mt 2050 H2 target); CO2 {s_alt*co2:.2f} Mt; {s_alt*twh:.1f} TWh")

    print("\n=== Cost per t SE (USD) ===")
    # e-methanol and bio-methanol 2050 (NGF-12)
    print(f"e-methanol 2050 USD 250 to 630 per t -> USD {250/SE_PER_T_METHANOL:.0f} to {630/SE_PER_T_METHANOL:.0f} per t SE")
    print(f"e-methanol today USD 800 to 1,600 per t -> USD {800/SE_PER_T_METHANOL:.0f} to {1600/SE_PER_T_METHANOL:.0f} per t SE")
    print(f"bio-methanol 2050 USD 220 to 560 per t -> USD {220/SE_PER_T_METHANOL:.0f} to {560/SE_PER_T_METHANOL:.0f} per t SE")
    # Vietnamese e-methanol with H2 at USD 1.5 to 2.0 per kg (FTG threshold), CO2 USD 30 to 50, other USD 100 to 150 (ASSUMPTION)
    lo = 0.193 * 1500 + 1.375 * 30 + 100; hi = 0.193 * 2000 + 1.375 * 50 + 150
    print(f"VN e-methanol at H2 USD 1.5 to 2.0 per kg: USD {lo:.0f} to {hi:.0f} per t -> USD {lo/SE_PER_T_METHANOL:.0f} to {hi/SE_PER_T_METHANOL:.0f} per t SE")
    lo = 0.193 * 2810 + 1.375 * 30 + 100; hi = 0.193 * 3880 + 1.375 * 50 + 150
    print(f"VN e-methanol at today's LCOH USD 2.81 to 3.88 per kg (FTG-18): USD {lo:.0f} to {hi:.0f} per t -> USD {lo/SE_PER_T_METHANOL:.0f} to {hi/SE_PER_T_METHANOL:.0f} per t SE")
    # Methane at LNG-parity USD 12 to 14 per MMBtu (FTG-31); 1 t CH4 = 55.5 GJ HHV = 52.6 MMBtu
    lo = 12 * 52.6; hi = 14 * 52.6
    print(f"CH4 at USD 12 to 14 per MMBtu: USD {lo:.0f} to {hi:.0f} per t CH4 -> USD {lo/SE_PER_T_CH4:.0f} to {hi/SE_PER_T_CH4:.0f} per t SE")
    # Cassava glucose 2026: starch USD 520 to 540 FOB (FS-11); glucose = starch / 1.08 + USD 30 to 60 hydrolysis (ASSUMPTION)
    lo = 520 / 1.08 + 30; hi = 540 / 1.08 + 60
    print(f"cassava-starch glucose, Apr 2026 prices: USD {lo:.0f} to {hi:.0f} per t glucose")
    print(f"domestic refined sugar USD 635 per t (FS-31) -> USD {635*0.95:.0f} per t SE; world raw USD 330 to 380 -> USD {330*0.95:.0f} to {380*0.95:.0f}")
    # Straw feedstock cost per t SE: straw at USD 25 to 50 per t delivered (ASSUMPTION: collection USD 12 to 18, NGF-02, plus transport and margin)
    print(f"straw feedstock USD 25 to 50 per t -> USD {25/SE_STRAW[1]:.0f} to {50/SE_STRAW[0]:.0f} per t SE (feedstock only)")
    # Capex of FOAK 2G plants per t of annual sugar capacity
    # Panipat: INR 984 crore (NGF-11), ~INR 83 per USD (ASSUMPTION), 100 kL/day x 330 d = 33 ML ethanol ~ 26 kt; sugar = ethanol / 0.51 x 1/0.9 (ASSUMPTION)
    usd = 984e7 / 83
    eth_kt = 100 * 330 * 0.789 / 1000
    sugar_kt = eth_kt / 0.51 / 0.9
    print(f"Panipat: USD {usd/1e6:.0f} M; {eth_kt:.0f} kt ethanol -> ~{sugar_kt:.0f} kt sugar a year -> USD {usd/(sugar_kt*1000):.0f} per t of annual sugar capacity")
    # Podari: USD 258 M (NGF-33); 63 ML ethanol
    eth_kt = 63 * 0.789
    sugar_kt = eth_kt / 0.51 / 0.9
    print(f"Podari: USD 258 M; {eth_kt:.0f} kt ethanol -> ~{sugar_kt:.0f} kt sugar -> USD {258e6/(sugar_kt*1000):.0f} per t of annual sugar capacity")
    # Range: nameplate FOAK capex (about USD 2,100 per t-yr) to Panipat capex per delivered tonne at 62% utilisation (NGF-11)
    lo_c = 2100; hi_c = round(usd / (100 * 330 * 0.789 / 1000 / 0.51 / 0.9 * 1000) / 0.62, -2)
    print(f"capex per delivered t at 62% utilisation: USD {hi_c:.0f}")
    for need_y in [2040, 2050]:
        print(f"capex to supply S-ALT {need_y} need ({NEED[need_y]} Mt) at USD {lo_c} to {hi_c:.0f} per t-yr: USD {NEED[need_y]*lo_c/1000:.1f} to {NEED[need_y]*hi_c/1000:.1f} billion")

    print("\n=== Land: protein per ha ===")
    # Cassava via sugar route: 20.5 t roots per ha (FS-01), 4.4 t roots per t starch (FS-05)
    starch_ha = 20.5 / 4.4
    print(f"cassava: {starch_ha:.2f} t starch/ha -> {starch_ha*1.08:.2f} t glucose -> {starch_ha*1.08/GLU_PER_PROT:.2f} t microbial protein/ha")
    # Sugarcane via sugar route: Gia Lai 215 kt sugar on about 40 kha (FS-34)
    s_ha = 215 / 40
    print(f"sugarcane: {s_ha:.2f} t sugar/ha -> {s_ha/0.95:.2f} t SE -> {s_ha/0.95/GLU_PER_PROT:.2f} t protein/ha")
    # Rice straw co-product: 4.72 t straw per ha per crop (NGF-02), 2 crops
    for sy in SE_STRAW:
        print(f"rice straw co-product: 2 crops x 4.72 t x {sy:.2f} = {2*4.72*sy:.2f} t SE -> {2*4.72*sy/GLU_PER_PROT:.2f} t protein/ha (no extra land)")
    # Duckweed Flanders pilot scaled to 365 days (NGF-22)
    print(f"duckweed: 6.1 g DW/m2/d x 365 = {6.1*365/100:.1f} t DM/ha; N 327 mg/m2/d x 6.25 x 365 = {0.327*6.25*365/100:.1f} t CP/ha")
    # Napier (NGF-21)
    print(f"napier: 26 t DM x 96 g = {26*0.096:.1f} t CP/ha; intensive 71 x 135 g = {71*0.135:.1f} t CP/ha")
    # Soybean VN: 42 kt on 26 kha (FS-24); import origin 3.16 t/ha (QNT); 36% CP as fed (general)
    print(f"soybean VN: {42/26:.2f} t/ha -> {42/26*0.36:.2f} t CP/ha per crop; import origin 3.16 t/ha -> {3.16*0.36:.2f}")
    # Maize VN: 4.4 Mt on 0.81 Mha (FS-25, MAC-01) at 8.5% CP as fed (general)
    print(f"maize VN: {4.4/0.81:.2f} t/ha -> {4.4/0.81*0.085:.2f} t CP/ha per crop")
    # Rice: 43.5 Mt paddy on 7.13 M ha planted (FS-25); 6.5% protein in paddy (general)
    print(f"rice: {43.5/7.13:.2f} t paddy/ha/crop -> {43.5/7.13*0.065:.2f} t protein per crop; x2 crops = {2*43.5/7.13*0.065:.2f}")
    # Cassava roots eaten directly: 20.5 t fresh x 1.2% CP (general)
    print(f"cassava roots direct: {20.5*0.012:.2f} t CP/ha")
    # Freed rice land: 654 kha (NTS-15)
    print(f"if all 654 kha of released rice land grew cassava for fermentation: {654e3*starch_ha*1.08/1e6:.2f} Mt glucose (upper bound, not a plan)")
    print(f"50 kha of cassava: {50e3*starch_ha*1.08/1e6:.2f} Mt glucose")

def power_competition():
    # Straw per GW of straw-fired power: 25% efficiency, 14 MJ per kg, 8,000 h (NGF-01)
    mt_per_gw = 8000 * 1e3 * 3.6 / 0.25 / 14 / 1e6   # MWh -> GJ fuel -> t straw -> Mt, per GW
    print("\n=== Competition from biomass power ===")
    print(f"straw per GW of straw power: {mt_per_gw:.1f} Mt a year")
    for gw in (1.5, 2.7, 4.8, 7.0):
        print(f"{gw} GW biomass (PDP8, NTS-26) if all straw-fired: {gw*mt_per_gw:.0f} Mt straw")

if __name__ == "__main__":
    power_competition()
    main()
