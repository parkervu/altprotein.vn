"""AQF estimates: aquafeed protein, trash-fish replacement, marine ingredients and omega-3, 2025 to 2050.

All outputs are our [estimate] from stated assumptions. They are what-if cases, not forecasts.
Standard library only. Run: python aqf_calc.py
Sources for anchors: MAC-15 (NSO 2025 output), QNT model indices (balance_model/assumptions.csv),
AQF-01 (Decision 1664 marine targets), AQF-02 (OECD-FAO SDMX), AQF-04 (IFFO), AQF-05 (Edwards et al. 2004),
AQF-18 (marine fish EPA+DHA need), AQF-29 (pangasius oil fatty acids), edition 1.0 app-H.
"""

YEARS = [2025, 2030, 2035, 2040, 2050]

# ---------- 1. Output by species group (kt live weight) ----------
BASE_2025 = {
    "pangasius": 1938.8,       # MAC-15
    "whiteleg": 994.4,         # MAC-15
    "othershrimp": 387.3,      # black tiger 296.7 + other crustaceans 90.6 (QNT)
    "fw_otherfish": 2096.2 - 80.0,  # other fish minus marine finfish carve-out
    "unfed": 700.1,            # molluscs, seaweed, others (MAC-15)
}
MARINE_FISH = {  # kt; 2025 is our assumption (Decision 1664 target for 2025 was 120 kt)
    "LOW":  {2025: 80, 2030: 110, 2035: 130, 2040: 150, 2050: 180},
    "BASE": {2025: 80, 2030: 150, 2035: 220, 2040: 300, 2050: 450},
    "HIGH": {2025: 80, 2030: 200, 2035: 350, 2040: 550, 2050: 1000},  # 2030 = official target 200 kt
}
# Aquaculture index for the other groups (2025 = 1)
AQ_INDEX = {
    "LOW":  {2025: 1.0, 2030: 1.0758, 2035: 1.1995, 2040: 1.1995, 2050: 1.1995},  # QNT SENS-LOW: OECD-FAO to 2035, then flat
    "BASE": {2025: 1.0, 2030: 1.0758, 2035: 1.1995, 2040: 1.2607, 2050: 1.3926},  # QNT S-BASE: OECD-FAO to 2035, then +1%/yr
    # HIGH: official 7.0 Mt by 2030 (index 7.0/6.1168), then +2.0% a year
}
h2030 = 7000.0 / 6116.8
AQ_INDEX["HIGH"] = {2025: 1.0, 2030: h2030, 2035: h2030 * 1.02 ** 5, 2040: h2030 * 1.02 ** 10, 2050: h2030 * 1.02 ** 20}

# ---------- 2. Feed coefficients (assumptions) ----------
FCR = {"pangasius": 1.5, "whiteleg": 1.3, "othershrimp": 1.5, "fw_otherfish": 1.5, "marine": 1.5}
FCR_GAIN = 0.003  # 0.3% a year (QNT S-BASE aquaculture)
PELLET_SHARE = {
    "pangasius": {y: 1.0 for y in YEARS},
    "whiteleg": {y: 1.0 for y in YEARS},
    "othershrimp": {2025: 0.30, 2030: 0.35, 2035: 0.40, 2040: 0.45, 2050: 0.50},  # QNT
    "fw_otherfish": {2025: 0.68, 2030: 0.72, 2035: 0.76, 2040: 0.80, 2050: 0.85},  # QNT-consistent
}
MARINE_PELLET = {
    "LOW":  {2025: 0.15, 2030: 0.25, 2035: 0.35, 2040: 0.45, 2050: 0.60},
    "BASE": {2025: 0.15, 2030: 0.40, 2035: 0.60, 2040: 0.80, 2050: 0.95},
    "HIGH": {2025: 0.15, 2030: 0.50, 2035: 0.75, 2040: 0.90, 2050: 1.00},
}
CP = {"pangasius": 0.27, "whiteleg": 0.40, "othershrimp": 0.40, "fw_otherfish": 0.30, "marine": 0.45}
# EPA+DHA requirement, share of diet (central, low, high). Assumptions; marine from AQF-18.
EPADHA = {
    "pangasius": (0.0005, 0.0, 0.001),
    "whiteleg": (0.005, 0.003, 0.010),
    "othershrimp": (0.005, 0.003, 0.010),
    "fw_otherfish": (0.001, 0.0, 0.002),
    "marine": (0.010, 0.007, 0.015),
}
# Fishmeal inclusion in marine finfish pellets (hypothesis in app-H: 15 to 30%), falling over time
FM_MARINE = {2025: 0.20, 2030: 0.18, 2035: 0.16, 2040: 0.14, 2050: 0.12}


def outputs(case, y):
    idx = AQ_INDEX[case][y]
    out = {k: v * idx for k, v in BASE_2025.items()}
    out["marine"] = MARINE_FISH[case][y]
    return out


def feeds(case, y):
    out = outputs(case, y)
    gain = (1 - FCR_GAIN) ** (y - 2025)
    f = {}
    for g in ["pangasius", "whiteleg", "othershrimp", "fw_otherfish"]:
        f[g] = out[g] * FCR[g] * PELLET_SHARE[g][y] * gain
    f["marine"] = out["marine"] * FCR["marine"] * MARINE_PELLET[case][y] * gain
    return out, f


rows = []
print("=== Aquafeed volume, crude protein and EPA+DHA need (USDA-consistent scale; x0.67 for the industry scale) ===")
for case in ["LOW", "BASE", "HIGH"]:
    for y in YEARS:
        out, f = feeds(case, y)
        tot_out = sum(out.values())
        tot_feed = sum(f.values())
        cp = sum(f[g] * CP[g] for g in f)
        epa_c = sum(f[g] * EPADHA[g][0] for g in f)
        epa_l = sum(f[g] * EPADHA[g][1] for g in f)
        epa_h = sum(f[g] * EPADHA[g][2] for g in f)
        shrimp_marine_feed = f["whiteleg"] + f["othershrimp"] + f["marine"]
        rows.append((case, y, tot_out, tot_feed, cp, epa_c, epa_l, epa_h, f, out, shrimp_marine_feed))
        print(f"{case} {y}: aquaculture {tot_out/1000:.2f} Mt; aquafeed {tot_feed/1000:.2f} Mt; CP {cp/1000:.2f} Mt "
              f"(industry scale {cp*0.67/1000:.2f}); EPA+DHA {epa_c:.1f} kt (range {epa_l:.1f} to {epa_h:.1f}); "
              f"shrimp+marine feed {shrimp_marine_feed/1000:.2f} Mt; marine feed {f['marine']:.0f} kt")

# ---------- 3. Trash fish (low-value fish) direct feeding, 2025 ----------
print("\n=== Trash fish used as direct feed, 2025 (wet weight, kt) ===")
tf = {
    # name: (output kt low, central, high), (share not on pellets low, central, high), (wet FCR low, central, high)
    "marine finfish": ((60, 80, 120), (0.80, 0.85, 0.90), (5.0, 6.0, 8.0)),
    "lobster": ((3, 4, 5), (1.0, 1.0, 1.0), (20.0, 28.0, 40.0)),
    "mud crab and other crustaceans": ((20, 40, 60), (0.8, 0.9, 1.0), (4.0, 5.0, 6.0)),
    "freshwater carnivores (snakehead remnant, eel, others)": ((10, 16, 30), (1.0, 1.0, 1.0), (4.0, 5.0, 6.0)),
}
tot = [0, 0, 0]
pellet_equiv = [0, 0, 0]
pellet_fcr = {"marine finfish": 1.5, "lobster": 3.0, "mud crab and other crustaceans": 2.0,
              "freshwater carnivores (snakehead remnant, eel, others)": 1.5}
for k, (o, s, fc) in tf.items():
    vals = [o[i] * s[i] * fc[i] for i in range(3)]
    pe = [o[i] * s[i] * pellet_fcr[k] for i in range(3)]
    for i in range(3):
        tot[i] += vals[i]
        pellet_equiv[i] += pe[i]
    print(f"{k}: {vals[0]:.0f} / {vals[1]:.0f} / {vals[2]:.0f} kt; pellets to replace: {pe[0]:.0f} / {pe[1]:.0f} / {pe[2]:.0f} kt")
print(f"TOTAL trash fish: {tot[0]:.0f} / {tot[1]:.0f} / {tot[2]:.0f} kt wet; crude protein at 17%: "
      f"{tot[0]*0.17:.0f} / {tot[1]*0.17:.0f} / {tot[2]*0.17:.0f} kt")
print(f"Pellets needed to replace it at 2025 output: {pellet_equiv[0]:.0f} / {pellet_equiv[1]:.0f} / {pellet_equiv[2]:.0f} kt; "
      f"CP at 42%: {pellet_equiv[0]*0.42:.0f} / {pellet_equiv[1]*0.42:.0f} / {pellet_equiv[2]*0.42:.0f} kt")
print(f"Share of 2025 capture (3,830.7 kt): {tot[0]/3830.7:.1%} / {tot[1]/3830.7:.1%} / {tot[2]/3830.7:.1%}")

# ---------- 4. Marine finfish feed and fishmeal: implied increase ----------
print("\n=== Marine finfish pellets, protein and fishmeal (kt) ===")
for case in ["LOW", "BASE", "HIGH"]:
    for y in YEARS:
        _, f = feeds(case, y)
        mf = f["marine"]
        print(f"{case} {y}: marine pellets {mf:.0f} kt; CP {mf*CP['marine']:.0f} kt; fishmeal {mf*FM_MARINE[y]:.0f} kt; "
              f"EPA+DHA {mf*0.01:.1f} kt")

# ---------- 5. Domestic marine ingredient supply from pangasius by-products ----------
print("\n=== Pangasius-derived fishmeal and fish oil (kt) ===")
# IFFO 2024: by-product fishmeal share 34% of about 5.4 to 5.7 Mt, pangasius 12% of that; fish oil 54% of about 1.35 to 1.40 Mt, pangasius 29%
fm_pang_2024 = 5.52e3 * 0.34 * 0.12
fo_pang_2024 = 1.375e3 * 0.54 * 0.29
yield_fm = fm_pang_2024 / 1938.8
yield_fo = fo_pang_2024 / 1938.8
print(f"2024 pangasius fishmeal about {fm_pang_2024:.0f} kt ({yield_fm:.3f} t per t fish); oil about {fo_pang_2024:.0f} kt ({yield_fo:.3f} t per t fish)")
for case in ["LOW", "BASE", "HIGH"]:
    p = BASE_2025["pangasius"] * AQ_INDEX[case][2050]
    print(f"{case} 2050: pangasius {p:.0f} kt -> fishmeal {p*yield_fm:.0f} kt, oil {p*yield_fo:.0f} kt, "
          f"EPA+DHA in that oil {p*yield_fo*0.002:.2f} to {p*yield_fo*0.003:.2f} kt")

# ---------- 6. Credible alternative-ingredient share, 2050 ----------
print("\n=== Credible alternative share of aquafeed protein and omega-3, 2050 (BASE aquaculture) ===")
case = "BASE"
r = [x for x in rows if x[0] == case and x[1] == 2050][0]
_, _, tot_out, tot_feed, cp, epa_c, epa_l, epa_h, f, out, smf = r
# Fishmeal demand 2050: QNT S-BASE 253 kt; S-ALT/S-EFF about 151 kt; OECD-FAO path extended at +1%/yr from 339 kt (2035) = 393 kt
fm_range = (151, 253, 393)
# Lower bound: novel proteins replace 10% of fishmeal, plus 1% functional inclusion in shrimp and marine feeds
low_prot = fm_range[1] * 0.10 * 0.65 + smf * 0.01 * 0.70
# Upper bound: 40% of fishmeal (S-ALT), 3% functional inclusion in shrimp and marine feeds, 5% of soybean-meal protein in all aquafeed
# Aquafeed SBM: QNT inclusion about 28% x calibration 1.10 for pangasius and whiteleg, 25% x 1.10 for others -> use 0.28 of feed at 46% CP
sbm_protein = tot_feed * 0.28 * 0.46
high_prot = fm_range[1] * 0.40 * 0.65 + smf * 0.03 * 0.70 + sbm_protein * 0.05
print(f"Aquafeed CP 2050: {cp:.0f} kt (industry scale {cp*0.67:.0f} kt); shrimp+marine feed {smf:.0f} kt; SBM protein in aquafeed {sbm_protein:.0f} kt")
print(f"Novel protein credible range: {low_prot:.0f} to {high_prot:.0f} kt protein = {low_prot/cp:.1%} to {high_prot/cp:.1%} of aquafeed CP "
      f"({low_prot/(cp*0.67):.1%} to {high_prot/(cp*0.67):.1%} on the industry scale)")
print(f"  of which fishmeal replacement: {fm_range[1]*0.10*0.65:.0f} to {fm_range[1]*0.40*0.65:.0f} kt protein")
print(f"  product at 70% CP: {low_prot/0.7:.0f} to {high_prot/0.7:.0f} kt")
# Omega-3
for share in (0.15, 0.50):
    print(f"Omega-3 alternatives at {share:.0%} of EPA+DHA need ({epa_c:.1f} kt central): {epa_c*share:.1f} kt EPA+DHA "
          f"= about {epa_c*share/0.5:.0f} kt of algal oil at 50% EPA+DHA or {epa_c*share/0.25:.0f} kt of marine fish oil at 25%")
print(f"Marine fish oil equivalent of total need: {epa_c/0.25:.0f} kt (range {epa_l/0.25:.0f} to {epa_h/0.25:.0f}) at 25% EPA+DHA")

# ---------- 7. Protein crops ----------
print("\n=== Domestic soybean contribution, 2050 (what-if) ===")
need_beans_2050 = {"S-EFF": 7.00 / 0.78, "S-BASE": 10.40 / 0.78, "S-HIGH": 11.72 / 0.78}  # Mt beans equivalent (QNT)
for area_kha, yld in [(39, 1.28), (100, 2.0), (300, 2.5)]:
    beans = area_kha * yld  # kt
    print(f"{area_kha} kha x {yld} t/ha = {beans:.0f} kt beans; share of S-BASE 2050 bean-equivalent need "
          f"({need_beans_2050['S-BASE']:.1f} Mt): {beans/1000/need_beans_2050['S-BASE']:.1%}; of S-EFF: {beans/1000/need_beans_2050['S-EFF']:.1%}")
print("Food soybean use 2025: 540 kt (MAC-04), so domestic beans would first displace food imports.")

# ---------- 8. Incremental formulated feed from trash-fish replacement plus marine growth ----------
print("\n=== Incremental pellets vs 2025 from trash-fish replacement and marine finfish growth (kt) ===")
nonmarine_pellets_full = 12 + 72 + 24  # lobster, crab and other crustaceans, freshwater carnivores (central, section 3)
CONV = {"LOW": {2030: 0.15, 2040: 0.40, 2050: 0.60}, "BASE": {2030: 0.30, 2040: 0.70, 2050: 0.90},
        "HIGH": {2030: 0.50, 2040: 0.90, 2050: 1.00}}
for case in ["LOW", "BASE", "HIGH"]:
    _, f25 = feeds(case, 2025)
    for y in (2030, 2040, 2050):
        _, fy = feeds(case, y)
        marine_inc = fy["marine"] - f25["marine"]
        other_inc = nonmarine_pellets_full * AQ_INDEX[case][y] * CONV[case][y]
        inc = marine_inc + other_inc
        tot_feed = sum(fy.values())
        print(f"{case} {y}: +{inc:.0f} kt pellets (marine {marine_inc:.0f}, other trash-fish species {other_inc:.0f}); "
              f"CP +{inc*0.43:.0f} kt at 43%; fishmeal +{inc*FM_MARINE[y]:.0f} kt; {inc/tot_feed:.1%} of all aquafeed")
