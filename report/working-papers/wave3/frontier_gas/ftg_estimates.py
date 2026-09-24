# FTG estimates: power-to-protein (hydrogen-oxidising bacteria) resource needs and indicative Vietnam costs.
# All inputs are stated with sources in frontier_gas.md. Outputs are estimates, not forecasts.
EURUSD = 1.2  # Fasihi et al. 2025 long-term rate

# Resource intensities per tonne protein (Fasihi et al. 2025, FTG-01)
elec_gen = {2030: (73, 83), 2050: (64, 70)}     # MWh generation per t protein, semi-flexible PV-wind systems (2050 low end; high end >90 in curtailment-heavy regions)
elec_base = {2030: 69.3, 2050: 60.9}            # MWh per t protein, baseload design
h2_per_t = 0.451 / 0.65                          # t H2 per t protein (0.451 kg H2/kg CDW; 65% protein)
co2_per_t = 2.953                                # t CO2 per t protein
nh3_per_t = 0.156 / 0.65                         # t NH3 per t protein

# Vietnam solar capacity factor (BNEF 2023, FTG-19) and PV land density (Fasihi 75 to 109 MW/km2)
cf_pv = 0.17
cf_offshore = (0.43, 0.514)
pv_density = (75, 109)  # MW per km2

scales = [100_000, 500_000, 1_000_000]
print("=== Resource needs by scale ===")
rows = []
for yr in (2030, 2050):
    lo, hi = elec_gen[yr]
    for q in scales:
        twh = (q*lo/1e6, q*hi/1e6)
        gw_pv = tuple(t*1e6/(8760*cf_pv)/1000 for t in twh)     # GW
        gw_off = (twh[0]*1e6/(8760*cf_offshore[1])/1000, twh[1]*1e6/(8760*cf_offshore[0])/1000)
        km2 = (gw_pv[0]*1000/pv_density[1], gw_pv[1]*1000/pv_density[0])
        h2 = q*h2_per_t/1e6
        co2 = q*co2_per_t/1e6
        nh3 = q*nh3_per_t/1e6
        print(f"{yr} {q/1e3:.0f} kt protein: {twh[0]:.1f}-{twh[1]:.1f} TWh; PV-only {gw_pv[0]:.1f}-{gw_pv[1]:.1f} GW; "
              f"or offshore wind {gw_off[0]:.1f}-{gw_off[1]:.1f} GW; PV land {km2[0]:.0f}-{km2[1]:.0f} km2; H2 {h2:.3f} Mt; CO2 {co2:.2f} Mt; NH3 {nh3:.3f} Mt")
        rows.append((yr,q,twh,gw_pv,gw_off,km2,h2,co2,nh3))

# Comparisons with Vietnam plans (Decision 768 and 165) and imports
nat_2050 = (1360.1, 1511.1)  # TWh production and imports 2050
solar_2050 = (293.088, 295.646)  # GW
offshore_new_energy_2050 = 240  # GW
h2_target_2030 = (0.1, 0.5); h2_target_2050 = (10, 20)  # Mt/yr
sbm_2025 = 5.703; sbm_protein = 0.46
sbm_prot = sbm_2025*sbm_protein
print(f"\nSBM imports 2025 protein content: {sbm_prot:.2f} Mt protein")
for yr in (2030, 2050):
    lo, hi = elec_gen[yr]
    t_lo, t_hi = 1.0*lo, 1.0*hi   # TWh for 1 Mt
    print(f"{yr} tech, 1 Mt protein: {t_lo:.0f}-{t_hi:.0f} TWh = {100*t_lo/nat_2050[1]:.1f}-{100*t_hi/nat_2050[0]:.1f}% of 2050 national supply")
    s_lo, s_hi = sbm_prot*lo, sbm_prot*hi
    gw = (s_lo*1e6/(8760*cf_pv)/1000, s_hi*1e6/(8760*cf_pv)/1000)
    print(f"{yr} tech, all SBM protein ({sbm_prot:.2f} Mt): {s_lo:.0f}-{s_hi:.0f} TWh = {100*s_lo/nat_2050[1]:.1f}-{100*s_hi/nat_2050[0]:.1f}% of 2050 supply; PV {gw[0]:.0f}-{gw[1]:.0f} GW = {100*gw[0]/solar_2050[1]:.0f}-{100*gw[1]/solar_2050[0]:.0f}% of 2050 solar plan; "
          f"land {gw[0]*1000/pv_density[1]:.0f}-{gw[1]*1000/pv_density[0]:.0f} km2; H2 {sbm_prot*h2_per_t:.2f} Mt; CO2 {sbm_prot*co2_per_t:.1f} Mt")
off_twh = (offshore_new_energy_2050*8760*cf_offshore[0]/1000, offshore_new_energy_2050*8760*cf_offshore[1]/1000)
print(f"Offshore wind for new energy 240 GW -> {off_twh[0]:.0f}-{off_twh[1]:.0f} TWh/yr")
print(f"1 Mt protein H2 {h2_per_t:.2f} Mt = {100*h2_per_t/h2_target_2050[1]:.1f}-{100*h2_per_t/h2_target_2050[0]:.1f}% of 2050 H2 target")
print(f"100 kt protein H2 {0.1*h2_per_t*1000:.0f} kt = {100*0.1*h2_per_t/h2_target_2030[1]:.0f}-{100*0.1*h2_per_t/h2_target_2030[0]:.0f}% of 2030 H2 target")
print(f"1 Mt protein CO2 {co2_per_t:.2f} Mt = {100*co2_per_t/22.54:.0f}% of Hoa Phat 2025 scope 1 (22.54 Mt)")
print(f"100 kt protein CO2 {0.1*co2_per_t*1e3:.0f} kt vs ethanol-plant CO2 about 207 kt")

# Grid-carbon footprint of electricity alone
for label, ef in [("2023 official 0.6592", 0.6592), ("2030 derived 0.35-0.40", (0.35,0.40)), ("2050 derived 0.018-0.020", (0.018,0.020))]:
    if isinstance(ef, tuple):
        print(f"Electricity CO2 on grid {label}: {elec_base[2030]*ef[0]:.1f}-{elec_base[2030]*ef[1]:.1f} t CO2/t protein (2030 tech); 2050 tech {elec_base[2050]*ef[0]:.1f}-{elec_base[2050]*ef[1]:.1f}")
    else:
        print(f"Electricity CO2 on grid {label}: {elec_base[2030]*ef:.1f} t CO2/t protein (2030 tech baseload 69.3 MWh)")

# ---- Indicative Vietnam cost (Approach A: integrated plant, on-site electrolysis) ----
# Non-energy cost NE at 7% WACC (USD/t protein) from Fasihi component shares:
NE = {2030: ((1327+479+414+317)*EURUSD, (1469+846+457+398)*EURUSD),
      2040: (1750*EURUSD, 1950*EURUSD),   # our interpolation between 2035 (about EUR 2,000-2,200) and 2050
      2050: (1200*EURUSD, 1500*EURUSD)}   # Fasihi 2050 best-site total 2,100-2,300 minus electricity 12-14 EUR/MWh x 64-70 MWh
wacc_mult = (1.15, 1.35)  # Vietnam WACC 9 to 11% vs 7% (Fasihi: +/-2 points = +/-12-15% of total, i.e. roughly 15-35% of NE)
elec_use = {2030: (75, 83), 2040: (70, 78), 2050: (65, 72)}
p_elec = {2030: (45, 90), 2040: (32, 70), 2050: (25, 57)}  # USD/MWh supply to plant: BNEF solar LCOE x 1.4 to 1.54 balancing uplift
print("\n=== Indicative Vietnam e-protein cost, USD per t protein ===")
cost_rows = {}
for yr in (2030, 2040, 2050):
    lo = elec_use[yr][0]*p_elec[yr][0] + NE[yr][0]*wacc_mult[0]
    hi = elec_use[yr][1]*p_elec[yr][1] + NE[yr][1]*wacc_mult[1]
    cost_rows[yr] = (lo, hi)
    print(f"{yr}: {lo:,.0f} to {hi:,.0f}  (NE {NE[yr][0]:,.0f}-{NE[yr][1]:,.0f} at 7% WACC; elec {elec_use[yr]} MWh x {p_elec[yr]} USD/MWh)")
# Grid-power case 2030 at today's blended industrial tariff USD 75/MWh (baseload 69.3 MWh)
g_lo = 69.3*75 + NE[2030][0]*wacc_mult[0]; g_hi = 69.3*75 + NE[2030][1]*wacc_mult[1]
print(f"2030 on grid power at USD 75/MWh: {g_lo:,.0f} to {g_hi:,.0f}")
# Fasihi best sites in USD
for yr, (a,b) in {2028:(5500,6100),2030:(4000,4500),2035:(3100,3500),2050:(2100,2300)}.items():
    print(f"Fasihi best-site {yr}: USD {a*EURUSD:,.0f}-{b*EURUSD:,.0f} per t protein")

# ---- Approach B: purchased H2; breakeven H2 price for protein parity ----
# Non-H2 fixed cost per t protein: core plant non-energy + others + point-source CO2 + non-electrolysis electricity
def breakeven(target, fixed):
    return (target - fixed)/(h2_per_t*1000)
fixed = {
 2030: ((1327+317)*EURUSD + co2_per_t*20 + 29*45, (1469+398)*EURUSD + co2_per_t*50 + 29*90),
 2050: ((600+250)*EURUSD + co2_per_t*20 + 25*25, (800+320)*EURUSD + co2_per_t*50 + 25*57),
}
targets = {"SBM protein 880": 880, "fishmeal protein 2025 avg 2,625": 2625, "fishmeal protein Aug 2026 3,846": 3846, "fishmeal parity x0.8 realised (edition 1.0 rule) 3,077": 3077}
print("\n=== Breakeven delivered H2 price (USD/kg) for parity ===")
for yr in (2030, 2050):
    for k, v in targets.items():
        b_lo = breakeven(v, fixed[yr][1]); b_hi = breakeven(v, fixed[yr][0])
        print(f"{yr} fixed non-H2 {fixed[yr][0]:,.0f}-{fixed[yr][1]:,.0f}; {k}: H2 <= {b_lo:.2f} to {b_hi:.2f} USD/kg")
# H2 cost line alone at selected H2 prices
for p in (1.0, 1.5, 2.0, 3.0, 5.0):
    print(f"H2 at USD {p}/kg -> H2 line USD {p*h2_per_t*1000:,.0f} per t protein")

# Sensitivity: apply Vietnam WACC multiplier (1.15 to 1.35) to the capital-driven part of the fixed non-H2 line (core plant + others)
print("\n=== Approach B with Vietnam WACC multiplier on core plant and other non-energy lines ===")
fixedw = {
 2030: ((1327+317)*EURUSD*1.15 + co2_per_t*20 + 29*45, (1469+398)*EURUSD*1.35 + co2_per_t*50 + 29*90),
 2050: ((600+250)*EURUSD*1.15 + co2_per_t*20 + 25*25, (800+320)*EURUSD*1.35 + co2_per_t*50 + 25*57),
}
for yr in (2030, 2050):
    for k, v in targets.items():
        b_lo = breakeven(v, fixedw[yr][1]); b_hi = breakeven(v, fixedw[yr][0])
        print(f"{yr} fixed {fixedw[yr][0]:,.0f}-{fixedw[yr][1]:,.0f}; {k}: H2 <= {b_lo:.2f} to {b_hi:.2f} USD/kg")
