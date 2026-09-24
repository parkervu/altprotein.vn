"""HUB stream: transparent arithmetic behind the [estimate] lines in spatial_hubs.md.
Run: python hub_calc.py
All inputs are cited in spatial_hubs.md (source IDs in comments)."""

# ---- Shrimp and pangasius buyer shares ----
ca_mau_shrimp_t = 594_851          # HUB-15 (VASEP, 2025)
national_shrimp_t = 1_291_000      # NSO 2025 via edition 1.0 MAC-15 (whiteleg 994 kt + black tiger 296 kt)
print("Ca Mau share of national farmed shrimp 2025: %.1f%%" % (100 * ca_mau_shrimp_t / national_shrimp_t))

pangasius_t = 1_740_000            # HUB-13 (2025)
dong_thap_share = 0.35             # HUB-14
dt_pang = pangasius_t * dong_thap_share
fcr_lo, fcr_hi = 1.5, 1.7          # assumption: typical grow-out FCR for striped catfish [general, Low]
print("Dong Thap pangasius: %.2f Mt; feed at FCR %.1f to %.1f: %.2f to %.2f Mt" % (
    dt_pang / 1e6, fcr_lo, fcr_hi, dt_pang * fcr_lo / 1e6, dt_pang * fcr_hi / 1e6))

# ---- Rice straw power potential by current province ----
rs_total_mw = 2565                 # HUB-27
kien_giang, an_giang, dong_thap = 245, 225, 190
print("An Giang (with former Kien Giang) straw potential: %d MW = %.1f%% of national" % (
    kien_giang + an_giang, 100 * (kien_giang + an_giang) / rs_total_mw))
print("Top three former provinces: %d MW = %.1f%%" % (
    kien_giang + an_giang + dong_thap, 100 * (kien_giang + an_giang + dong_thap) / rs_total_mw))

# ---- Hydrogen pipeline in the Mekong (HUB-04) and a power-to-protein plant's needs ----
h2 = {"Tra Vinh (Vinh Long)": 24_000, "Ben Tre (Vinh Long)": 24_000,
      "Bac Lieu (Ca Mau)": 70_000, "Tien Giang (Dong Thap)": 5_294}
h2_total = sum(h2.values())
print("Mekong planned H2 (HUB-04): %.1f kt/yr" % (h2_total / 1e3))
# Per tonne of protein, hydrogen route (FTG-01, Fasihi et al.): 0.69 t H2, 2.95 t CO2, 0.24 t NH3,
# 64 to 83 MWh electricity; about 3.2 t O2 (FTG notes, derived from Fasihi).
per_t = {"H2_t": 0.69, "CO2_t": 2.95, "NH3_t": 0.24, "O2_t": 3.2, "MWh_lo": 64, "MWh_hi": 83}
print("Upper-bound protein if ALL Mekong planned H2 went to protein: %.0f kt/yr" % (h2_total / per_t["H2_t"] / 1e3))
plant = 10_000  # t protein per year, illustrative plant
print("A 10 kt/yr protein plant needs: H2 %.1f kt (%.0f%% of Tra Vinh design 24 kt), CO2 %.1f kt, NH3 %.1f kt, O2 %.0f kt, electricity %.2f to %.2f TWh" % (
    plant * per_t["H2_t"] / 1e3, 100 * plant * per_t["H2_t"] / 24_000, plant * per_t["CO2_t"] / 1e3,
    plant * per_t["NH3_t"] / 1e3, plant * per_t["O2_t"] / 1e3, plant * per_t["MWh_lo"] / 1e6, plant * per_t["MWh_hi"] / 1e6))
print("Tra Vinh by-product O2 (195 kt) would cover the O2 for about %.0f kt protein" % (195_000 / per_t["O2_t"] / 1e3))
print("Tra Vinh ammonia (182.5 kt) would cover NH3 for about %.0f kt protein" % (182_500 / per_t["NH3_t"] / 1e3))

# ---- CO2 point sources vs protein ----
co2 = {"Dung Quat ethanol": 82_000, "Dai Tan ethanol": 75_000, "Tung Lam ethanol": 50_000,
       "An Khe ethanol (planned)": 50_000, "Dung Quat steel (derived)": 17_000_000}   # FTG co2_point_sources_vn.csv
for k, v in co2.items():
    print("%s: %.0f kt CO2 -> about %.0f kt protein/yr on the H2 route" % (k, v / 1e3, v / per_t["CO2_t"] / 1e3))

# ---- Cassava: sugar-route microbial protein plant vs Tay Ninh supply ----
roots_per_t_glucose = 5.4 / 1.32   # QNT S-ALT 2050: 5.4 Mt roots for 1.32 Mt glucose
yield_lo, yield_hi = 0.45, 0.50    # t dry cells per t glucose (assumption, general range)
prot_lo, prot_hi = 0.60, 0.65      # protein share of dry cells (assumption)
p = 20_000                         # t protein per year, illustrative
glc_hi = p / (yield_lo * prot_lo)
glc_lo = p / (yield_hi * prot_hi)
tay_ninh_root_capacity = 6.4e6     # FS-03 (former Tay Ninh starch factories' root capacity)
print("20 kt protein/yr on cassava glucose: %.0f to %.0f kt glucose; %.0f to %.0f kt roots = %.1f to %.1f%% of former Tay Ninh root capacity" % (
    glc_lo / 1e3, glc_hi / 1e3, glc_lo * roots_per_t_glucose / 1e3, glc_hi * roots_per_t_glucose / 1e3,
    100 * glc_lo * roots_per_t_glucose / tay_ninh_root_capacity, 100 * glc_hi * roots_per_t_glucose / tay_ninh_root_capacity))
print("QNT S-ALT 2050 cassava need (5.4 Mt roots) = %.0f%% of former Tay Ninh root capacity" % (100 * 5.4e6 / tay_ninh_root_capacity))

# ---- QNT S-ALT 2050 plant count, split across hubs (illustrative only) ----
salt_feed_product_t = 860_000      # QNT S-ALT 2050 dry microbial feed product
print("S-ALT 2050 feed product %.0f kt = %.0f plants of 11 kt or %.0f of 20 kt" % (
    salt_feed_product_t / 1e3, salt_feed_product_t / 11_000, salt_feed_product_t / 20_000))

# ---- Industrial land (COST-21, Q2 2026) ----
occ = {"Ho Chi Minh City": 86.1, "Dong Nai": 73.1, "Tay Ninh": 60.9}
for k, v in occ.items():
    print("%s industrial occupancy %.1f%% -> vacant share %.1f%%" % (k, v, 100 - v))
