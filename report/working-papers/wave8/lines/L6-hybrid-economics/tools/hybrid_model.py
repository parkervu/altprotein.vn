"""W8-L6 processor extender cost model (our calculation).
All inputs are listed with sources in L6-hybrid-economics.md and the data_*.csv files.
Run: python3 hybrid_model.py  (writes CSVs next to the working paper)"""
import csv, os, statistics
OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FX = 26000.0  # VND per USD (brief convention)

# ---- Live hog price scenarios (VND per kg live weight)
fao = {2019: 46076, 2020: 78138, 2021: 59176, 2022: 57975, 2023: 56299, 2024: 61051}  # DIE-25 (FAOSTAT producer price, annual)
median_19_24 = statistics.median(fao.values())
HOG = {
    "low (2019 annual, FAOSTAT)": 46076,
    "median (2019 to 2024 annual, FAOSTAT)": median_19_24,
    "high (2020 annual, FAOSTAT)": 78138,
    "Q1 2026 (Vissan AGM, midpoint)": 72500,
}
# ---- Lean trimming price to a processor = K x live price (assumption bracketed by observed anchors)
K = {"low": 1.5, "central": 1.8, "high": 2.2}
FAT_K = 1.0  # back fat price = 1.0 x live price (assumption, Low; does not affect savings)
STARCH = 12850.0  # cassava native starch VND/kg, midpoint of 12,500 to 13,200 (FS-12)
SEASON = 30000.0  # VND/kg for the seasoning block (fish sauce, sugar, MSG, salt, phosphate) (assumption)
EXT_PROTEIN_HYD = 0.18  # hydrated extender protein share (USDA APP rule: at least 18% when hydrated)
LEAN_PROTEIN = 0.19  # FCT lean pork 19.0 g per 100 g (DPP-001)

# ---- Extenders: dry price USD/kg (low, central, high), protein share dry
EXT = {
    "domestic textured soy (T1 cost)": ((0.76, 1.03, 1.57), 0.50, "TIC-12; TIC-13"),
    "Chinese textured soy, landed 0% duty": ((1.29, 1.365, 1.44), 0.50, "TIC-12; BUY-02; FTR-32"),
    "Chinese soy protein isolate, landed": ((2.02, 2.22, 2.42), 0.90, "BUY-07; FTR-32 (our landing add-on)"),
    "fungal biomass at soy isolate protein parity": ((1.0, 1.0, 1.0), 0.45, "BUY-02 (ch26.2 break-even)"),
    "fungal biomass at egg white parity": ((3.3, 3.3, 3.3), 0.45, "BUY-02 (ch26.2 break-even)"),
    "fungal biomass at casein or whey parity": ((3.9, 4.25, 4.6), 0.45, "BUY-02 (ch26.2 break-even)"),
}
def hyd_factor(p):
    return p / EXT_PROTEIN_HYD  # kg hydrated extender per kg dry
def hydrated_cost(usd, p):
    return usd * FX / hyd_factor(p)

# ---- Products (mass per batch, g) and cooking yield (assumption)
PRODUCTS = {
    "cha lua or gio lua (HCMUT best-liked recipe C1)": dict(lean=700, fat=250, starch=50, season=37.4, ice=100, yld=0.95,
        src="HXE-01 (Pham et al. 2021): meat 70, lard 25, starch 5 per 100 of base; per kg base fish sauce 10.8 g, sugar 11.4 g, MSG 5.1 g, polyphosphate 2.5 g, salt 7.6 g, ice 100 g"),
    "sterilised pork sausage (Vissan label 55% lean)": dict(lean=550, fat=150, starch=70, season=30, ice=200, yld=0.98,
        src="VLA-020 (BUY-05): lean pork 55%, fat, corn starch, sugar, salt; other shares our assumption"),
}
REPL = [0.10, 0.20, 0.30]

def product_calc(prod, live, k, r, ext_hyd_cost):
    b = PRODUCTS[prod]
    tot = b['lean'] + b['fat'] + b['starch'] + b['season'] + b['ice']
    lean_p = k * live
    fat_p = FAT_K * live
    lean_kg = b['lean'] / 1000.0
    repl_kg = lean_kg * r
    cost_batch = ((lean_kg - repl_kg) * lean_p + repl_kg * ext_hyd_cost + b['fat']/1000*fat_p
                  + b['starch']/1000*STARCH + b['season']/1000*SEASON)
    out_kg = tot/1000.0 * b['yld']
    cost_per_kg = cost_batch / out_kg
    base = ((lean_kg) * lean_p + b['fat']/1000*fat_p + b['starch']/1000*STARCH + b['season']/1000*SEASON) / out_kg
    protein = ((lean_kg - repl_kg)*LEAN_PROTEIN + repl_kg*EXT_PROTEIN_HYD) / out_kg * 100
    lean_share = b['lean']/tot
    return dict(lean_price=lean_p, base_cost=base, cost=cost_per_kg, saving=base-cost_per_kg,
                protein=protein, lean_share=lean_share, out_kg=out_kg, tot=tot)

rows = []
for prod in PRODUCTS:
    for hname, live in HOG.items():
        for ename, (prices, p, esrc) in EXT.items():
            usd = prices[1]
            hc = hydrated_cost(usd, p)
            be_dry_vnd = K['central']*live*hyd_factor(p)
            for r in REPL:
                c = product_calc(prod, live, K['central'], r, hc)
                rows.append(dict(product=prod, hog_scenario=hname, live_hog_vnd_per_kg=round(live),
                    lean_trim_vnd_per_kg=round(c['lean_price']), extender=ename, extender_dry_usd_per_kg=usd,
                    extender_protein_share_dry=p, hydration_kg_per_kg_dry=round(hyd_factor(p),2),
                    extender_hydrated_vnd_per_kg=round(hc), replacement_share_of_lean=r,
                    base_raw_material_cost_vnd_per_kg_product=round(c['base_cost']),
                    extended_raw_material_cost_vnd_per_kg_product=round(c['cost']),
                    saving_vnd_per_kg_product=round(c['saving']),
                    saving_pct_of_raw_material_cost=round(100*c['saving']/c['base_cost'],1),
                    saving_usd_per_t_product=round(c['saving']*1000/FX),
                    saving_vnd_million_per_t_product=round(c['saving']/1000,1),
                    protein_g_per_100g_product=round(c['protein'],1),
                    breakeven_extender_dry_usd_per_kg=round(be_dry_vnd/FX,2),
                    breakeven_multiple_of_extender_price=round(be_dry_vnd/(usd*FX),1),
                    source_ids=esrc + ('; HXE-01' if prod.startswith('cha') else '; BUY-05') + '; DIE-25; AIB-15; HXE-10'))
with open(os.path.join(OUT, 'data_hybrid_savings_grid.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()) + ['evidence_label','confidence','demand_evidence_type','notes'])
    w.writeheader()
    for x in rows:
        x.update(evidence_label='VN-direct', confidence='Low', demand_evidence_type='inferred',
                 notes='Our calculation. Lean trimming = 1.8 x live hog (assumption bracketed by 1.38 carcass basis and 2.26 retail); extender hydrated to 18% protein and swapped 1:1 for lean; raw materials only, no processing, packaging or compensation ingredients.')
        w.writerow(x)

# ---- print summary tables
def fmt(v): return f"{v:,.0f}"
print('median hog', median_19_24)
for hname, live in HOG.items():
    print(hname, 'live', fmt(live), 'lean central', fmt(1.8*live), 'low k', fmt(1.5*live), 'high k', fmt(2.2*live))
print()
for ename,(prices,p,_) in EXT.items():
    print(f"{ename:45s} dry USD {prices} hyd factor {hyd_factor(p):.2f} hydrated VND {[fmt(hydrated_cost(u,p)) for u in prices]}")
print()
for prod in PRODUCTS:
    print('##', prod)
    for hname, live in HOG.items():
        base = product_calc(prod, live, 1.8, 0, 0)
        print(f"  {hname}: base raw cost {fmt(base['base_cost'])} VND/kg; protein {base['protein']:.1f}; lean share {base['lean_share']:.3f}")
        for ename,(prices,p,_) in EXT.items():
            s = []
            for r in REPL:
                c = product_calc(prod, live, 1.8, r, hydrated_cost(prices[1],p))
                s.append(f"{int(r*100)}%: {fmt(c['saving'])} ({100*c['saving']/c['base_cost']:.1f}%) USD/t {c['saving']*1000/FX:,.0f}")
            print(f"     {ename[:40]:40s} " + ' | '.join(s))

# ================= Break-even table (dry extender price at which extension stops paying on raw materials)
be_rows = []
for hname, live in HOG.items():
    for kname, k in K.items():
        lean = k*live
        for ename,(prices,p,esrc) in EXT.items():
            be = lean*hyd_factor(p)
            be_rows.append(dict(hog_scenario=hname, live_hog_vnd_per_kg=round(live), lean_price_basis=kname, lean_multiple_of_live=k,
                lean_trim_vnd_per_kg=round(lean), extender=ename, extender_protein_share_dry=p,
                breakeven_dry_vnd_per_kg=round(be), breakeven_dry_usd_per_kg=round(be/FX,2),
                extender_price_used_usd_per_kg=prices[1], headroom_multiple=round(be/(prices[1]*FX),1),
                source_ids=esrc + '; DIE-25; AIB-15; DPP-001; BLA-030'))
with open(os.path.join(OUT, 'data_hybrid_breakeven.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(be_rows[0].keys()) + ['evidence_label','confidence','demand_evidence_type','notes'])
    w.writeheader()
    for x in be_rows:
        x.update(evidence_label='VN-direct', confidence='Low', demand_evidence_type='inferred',
                 notes='Our calculation: break-even dry price = lean trimming price x kg hydrated extender per kg dry (hydrated to 18% protein). Raw-material basis only.')
        w.writerow(x)
print('\nBREAK-EVEN (central k) USD per kg dry')
for x in be_rows:
    if x['lean_price_basis']=='central' and x['extender'] in ('Chinese textured soy, landed 0% duty','fungal biomass at egg white parity','Chinese soy protein isolate, landed'):
        print(' ', x['hog_scenario'][:30], x['extender'][:30], x['breakeven_dry_usd_per_kg'], 'x', x['headroom_multiple'])
print('min headroom any k any hog:', min(x['headroom_multiple'] for x in be_rows if 'soy' in x['extender']))

# ================= Fungal equal-saving multiplier vs Chinese textured soy
print('\nFUNGAL EQUAL-SAVING MULTIPLIER (replacement needed relative to soy for same saving)')
soy_h = hydrated_cost(1.365, 0.50)
for hname, live in HOG.items():
    lean = 1.8*live
    for usd in (1.0, 3.3, 4.25, 4.6):
        fh = hydrated_cost(usd, 0.45)
        print(f"  {hname[:28]} fungal USD {usd}: {(lean-soy_h)/(lean-fh):.2f}")

# ================= Hedge: exposure of raw-material cost to hog price, 2019 to 2020 swing
print('\nHEDGE giò C1: raw cost 2019 vs 2020 hog prices')
for r in (0, 0.2, 0.3):
    lo = product_calc(list(PRODUCTS)[0], 46076, 1.8, r, soy_h)['cost']
    hi = product_calc(list(PRODUCTS)[0], 78138, 1.8, r, soy_h)['cost']
    print(f"  r={r}: {lo:,.0f} -> {hi:,.0f}  delta {hi-lo:,.0f} ({100*(hi-lo)/lo:.0f}%)")

# ================= Alternatives a processor already has (saving per kg of lean replaced, median hog, central k)
lean_med = 1.8*median_19_24
ret_lean = 132000.0  # DPP-001
alts = [
    ('Chinese textured soy, hydrated to 18% protein', soy_h, 18.0, 'TIC-12; BUY-02; FTR-32', 'our calculation'),
    ('Chinese soy isolate, hydrated to 18% protein', hydrated_cost(2.22,0.90), 18.0, 'BUY-07; FTR-32', 'our calculation'),
    ('Chicken thigh meat (priced at the retail ratio to lean pork, 79,210 / 132,000)', lean_med*79210/ret_lean, 20.3, 'COST-40; COST-39', 'assumes processor prices keep the retail ratio'),
    ('Pork skin (priced at the Vissan retail ratio to lean leg, 57,000 / 160,000)', lean_med*57000/160000, None, 'HXE-11', 'assumes processor prices keep the retail ratio; skin protein is mostly collagen'),
    ('Cassava starch gel, 1 part starch to 4 parts water', 12850/5.0, 0.0, 'FS-12', 'adds no protein; binding limits apply'),
    ('Fungal biomass at egg white parity, hydrated to 18% protein', hydrated_cost(3.3,0.45), 18.0, 'BUY-02', 'our calculation'),
]
alt_rows=[]
for name, cost, prot, src, note in alts:
    alt_rows.append(dict(alternative=name, cost_vnd_per_kg_as_used=round(cost), protein_g_per_100g=prot if prot is not None else 'not measured',
        lean_trim_vnd_per_kg_median=round(lean_med), saving_vnd_per_kg_lean_replaced=round(lean_med-cost),
        saving_relative_to_textured_soy=round((lean_med-cost)/(lean_med-soy_h),2), source_ids=src,
        evidence_label='VN-direct', confidence='Low', demand_evidence_type='inferred', notes=note+'; median 2019 to 2024 hog price; lean trimming 1.8 x live'))
with open(os.path.join(OUT,'data_hybrid_alternatives.csv'),'w',newline='') as f:
    w=csv.DictWriter(f, fieldnames=list(alt_rows[0].keys())); w.writeheader(); [w.writerow(x) for x in alt_rows]
print('\nALTERNATIVES'); [print(' ',x['alternative'][:50], x['cost_vnd_per_kg_as_used'], x['saving_vnd_per_kg_lean_replaced'], x['saving_relative_to_textured_soy']) for x in alt_rows]

# ================= Prize sizing
MEAT_PROT_2025 = 1012.8  # kt, DMO-0001
PROC_PROT_2025 = 50.64   # kt, DMO-0010 (5% processed share assumption)
prize=[]
def add(scope, scen, hog_label, live, lean_kt, note, src):
    lean = 1.8*live
    sav_vnd = lean_kt*1e6*(lean-soy_h)
    prize.append(dict(scope=scope, scenario=scen, hog_scenario=hog_label, lean_replaced_t=round(lean_kt*1000),
        textured_soy_dry_t=round(lean_kt*1000/hyd_factor(0.5)), soy_isolate_dry_t=round(lean_kt*1000/hyd_factor(0.9)),
        fungal_biomass_dry_t=round(lean_kt*1000/hyd_factor(0.45)),
        plant_protein_delivered_t=round(lean_kt*1000*EXT_PROTEIN_HYD),
        meat_protein_removed_t=round(lean_kt*1000*LEAN_PROTEIN),
        meat_protein_displaced_t_at_0_9=round(lean_kt*1000*LEAN_PROTEIN*0.9),
        displaced_share_of_2025_meat_protein_pct=round(100*lean_kt*LEAN_PROTEIN*0.9/MEAT_PROT_2025,3),
        saving_vnd_billion=round(sav_vnd/1e9,1), saving_usd_million=round(sav_vnd/FX/1e6,1),
        source_ids=src, evidence_label='VN-direct', confidence='Low', demand_evidence_type='inferred', notes=note))
VISSAN=18547.0
HOGS2 = (('median (2019 to 2024 annual, FAOSTAT)', median_19_24), ('Q1 2026 (Vissan AGM, midpoint)', 72500.0))
for share, ls, lab in ((0.3,0.56,'30% of output in lean-based lines at 0.56 kg lean per kg product'),(0.5,0.65,'50% of output in lean-based lines at 0.65 kg lean per kg product')):
    for r in (0.1,0.2,0.3):
        lean_kt = VISSAN*share*ls*r/1000
        for hl, live in HOGS2:
            add('Vissan, 18,547 t processed food (2025)', f'{lab}; {int(r*100)}% of lean replaced', hl, live, lean_kt,
                'Our calculation; Chinese textured soy as the extender; the share of output in lean-based lines is illustrative (the same 30 to 50% range as ch26.3); compare Vissan 2025 pre-tax profit VND 105.1 billion (HXE-11)',
                'BUY-04; HXE-11; BUY-05; TIC-12; DIE-25; AIB-15')
lean_nat = PROC_PROT_2025/LEAN_PROTEIN  # kt lean-equivalent in processed meat
for adopt, lab in ((1.0,'upper bound: all processed meat'),(0.06,'D-BENCH 2035 adoption share (6%) on the 2025 base'),(0.15,'D-STRETCH 2035 adoption share (15%) on the 2025 base'),(0.01,'per 1% of processed meat volume')):
    for r in (0.2,0.3):
        lean_kt = lean_nat*adopt*r
        for hl, live in HOGS2[:1]:
            add('Vietnam, processed meat (50.64 kt meat protein, 2025, 5% processed-share assumption)', f'{lab}; {int(r*100)}% of lean replaced', hl, live, lean_kt,
                'Our calculation; processed meat protein from the Part VI demand model (DMO-0010, processed share 5%, range 3 to 8%); lean-equivalent mass = protein / 0.19; Chinese textured soy as the extender',
                'DMO-0010; DMA-059; DIE-25; TIC-12')
with open(os.path.join(OUT,'data_hybrid_prize.csv'),'w',newline='') as f:
    w=csv.DictWriter(f, fieldnames=list(prize[0].keys())); w.writeheader(); [w.writerow(x) for x in prize]
print('\nPRIZE')
for x in prize:
    print(' ', x['scope'][:20], '|', x['scenario'][:70], '|', x['hog_scenario'][:8], '| lean t', x['lean_replaced_t'], 'TVP t', x['textured_soy_dry_t'], 'SPI t', x['soy_isolate_dry_t'], 'fung t', x['fungal_biomass_dry_t'], '| displ t', x['meat_protein_displaced_t_at_0_9'], x['displaced_share_of_2025_meat_protein_pct'], '% | VND bn', x['saving_vnd_billion'], 'USD m', x['saving_usd_million'])
