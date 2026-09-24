"""VIS arithmetic: analogue rates of change and Vietnam 2050 target ranges.

Run: python vis_calc.py  (standard library only). All inputs are stated with source IDs.
Outputs are printed; the notes (vision_benchmarks.md) quote them.
"""


def pp_per_year(v0, v1, y0, y1):
    return (v1 - v0) / (y1 - y0)


def rel_per_year(v0, v1, y0, y1):
    return ((v1 / v0) ** (1.0 / (y1 - y0)) - 1.0) * 100.0


print("A. Analogue rates of change")
rows = [
    # label, v0, v1, y0, y1, source
    ("China SBM share in feed, official (17% 2017 to 13.4% 2025)", 17.0, 13.4, 2017, 2025, "GEO-10, GEO-11"),
    ("China SBM share in feed, USDA/industry (17% 2017 to about 16% 2024)", 17.0, 16.0, 2017, 2024, "GEO-10"),
    ("China SBM share, required for 10% target (13.4% 2025 to 10% 2030)", 13.4, 10.0, 2025, 2030, "GEO-11"),
    ("EU-origin share of oilseed and protein-crop feed protein, target (25.8% 2025 to 35% 2035)", 25.8, 35.0, 2025, 2035, "VIS-15"),
    ("Japan feed SSR, 2020 plan requirement (25% FY2018 to 34% FY2030)", 25.0, 34.0, 2018, 2030, "VIS-11"),
    ("Japan feed SSR, achieved pure-domestic (27% FY2018 to 24% FY2025 est.)", 27.0, 24.0, 2018, 2025, "VIS-12"),
    ("Japan feed SSR, achieved pure-domestic (28% FY2000 to 27% FY2024)", 28.0, 27.0, 2000, 2024, "VIS-12"),
    ("Japan feed SSR, new target (24% FY2025 est. to 28% FY2030)", 24.0, 28.0, 2025, 2030, "VIS-12"),
    ("Norway marine share of salmon feed (90% 1990 to 30% 2013)", 90.0, 30.0, 1990, 2013, "VIS-19"),
    ("Norway marine share of salmon feed (30% 2013 to 22.4% 2020)", 30.0, 22.4, 2013, 2020, "VIS-18, VIS-19"),
    ("Singapore local protein share (26% achieved to 30% target 2035; base year taken as 2025)", 26.0, 30.0, 2025, 2035, "VIS-25"),
    ("Singapore local fibre share (8% achieved to 20% target 2035; base year taken as 2025)", 8.0, 20.0, 2025, 2035, "VIS-25"),
]
for label, v0, v1, y0, y1, src in rows:
    print(f"  {label}: {pp_per_year(v0, v1, y0, y1):+.2f} pp a year; {rel_per_year(v0, v1, y0, y1):+.1f}% a year relative [{src}]")

print("\nB. QNT balance-model outputs restated as shares (inputs from wave3/balance_model/outputs.csv)")
CP_SBM = 0.46  # crude protein share of soybean-meal equivalent (QNT convention)
qnt = {
    # year: (S-ALT protein meal demand Mt SBMeq, S-ALT alt feed protein kt CP)
    2030: (11.494, 55.836),
    2035: (12.434, 160.2),
    2040: (12.663, 265.2),
    2050: (12.25, 514.1),
}
for y, (pm_sbmeq, alt_kt) in qnt.items():
    pm_cp = pm_sbmeq * CP_SBM  # Mt CP from protein meals (after substitution)
    share = alt_kt / 1000.0 / (pm_cp + alt_kt / 1000.0) * 100.0
    print(f"  S-ALT {y}: microbial feed protein {alt_kt:.0f} kt CP = {share:.1f}% of high-protein feed protein (protein meals plus microbial)")

base_2050_sbm_imports = 10.4  # Mt, S-BASE (QNT headline 1)
eff_2050 = 7.0
alt_2050 = 8.8
now_2025 = 7.2
print(f"  2050 SBM imports: S-BASE {base_2050_sbm_imports} Mt; S-ALT {alt_2050}; S-EFF {eff_2050}; 2025 actual {now_2025}")
print(f"  S-EFF vs S-BASE: {(eff_2050 / base_2050_sbm_imports - 1) * 100:.0f}%; S-ALT vs S-BASE: {(alt_2050 / base_2050_sbm_imports - 1) * 100:.0f}%")

print("\nC. Inclusion-rate analogue applied to Vietnam (our estimate)")
# QNT S-EFF assumes soybean-meal inclusion falls 1% a year (relative) plus 1% a year FCR gain.
for r in (-0.9, -1.0, -2.0, -2.9):
    f25 = (1 + r / 100.0) ** 25
    print(f"  inclusion change {r:+.1f}% a year for 25 years (2025 to 2050): factor {f25:.2f} ({(f25 - 1) * 100:+.0f}%)")

print("\nD. Public money benchmarks (annualised)")
dk_fund_dkk = 675e6
dk_years = 8  # 2023 to 2030
dkk_per_usd = 6.9  # approximate 2023 to 2025 rate (agent knowledge, Low)
dk_usd_yr = dk_fund_dkk / dk_years / dkk_per_usd
print(f"  Denmark Plant-based Food Grant: DKK {dk_fund_dkk / dk_years / 1e6:.0f} M a year = about USD {dk_usd_yr / 1e6:.0f} M a year [VIS-01]")
vn_feed_scheme_vnd = 1310e9  # Decision 1625, 2023 to 2030 (NTS-23)
vnd_per_usd = 26000  # approximate 2025 rate (agent knowledge, Low)
vn_years = 8
print(f"  Vietnam feed scheme (Decision 1625): VND {vn_feed_scheme_vnd / 1e9:.0f} bn over {vn_years} years = about USD {vn_feed_scheme_vnd / vn_years / vnd_per_usd / 1e6:.1f} M a year [NTS-23]")
ca_pic_cad = 150e6
cad_per_usd = 1.36  # approximate (agent knowledge, Low)
print(f"  Canada PIC federal: CAD 150 M over 2023 to 2028 = about USD {ca_pic_cad / 5 / cad_per_usd / 1e6:.0f} M a year [VIS-06]")
print(f"  Korea food-tech policy funds: KRW 100 bn cumulative by 2027 = about USD 68 M (GFI conversion) [VIS-06, VIS-14]")
de_eps_eur = 6e6
print(f"  Germany protein crop strategy: EUR {de_eps_eur / 1e6:.0f} M a year since 2016 [VIS-24]")
