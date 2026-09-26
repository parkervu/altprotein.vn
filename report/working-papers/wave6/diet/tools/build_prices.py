"""Build data_protein_prices.csv for the DIET stream (wave 6).

Formula: VND per 100 g protein = 100 x price per kg as purchased / (10 x protein g per 100 g edible x edible share).
Protein values: Vietnamese Food Composition Table 2007 (NIN), FCT code given in each row (DIE-12),
except pangasius (literature range, DIE-13, DIE-14) and label values from the supply study retail audit (FORM-01).
USD at 26,000 VND per USD (brief convention). Standard library only.
"""
import csv

USD = 26000
OUT = "working-papers/wave6/diet/data_protein_prices.csv"

# food, product, retailer, channel_city, date, pack_price, pack_desc, price_per_kg, protein, basis, edible, sources, conf, notes
rows = [
    ("Pork, lean", "Thit nac heo C.P, tray 400 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed as in COST-39)", "2026-09-24", 52800, "400 g", 132000, 19.0, "FCT 7017 thit lon nac (lean pork)", 0.98, "COST-39; DIE-12", "Medium", "Same price as COST-39 on 23 Sep 2026. Edible share from FCT waste 2%."),
    ("Pork, leg", "Thit dui heo C.P, tray 400 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 46000, "400 g", 115000, 16.5, "FCT 7018 thit lon nua nac nua mo (medium-fat pork)", 0.98, "COST-39; DIE-12", "Medium", "Range 61,761 to 71,119 VND if protein 19.0 (lean) or 16.5 (medium fat). Central uses 16.5 because leg is sold with skin and fat."),
    ("Pork, belly", "Ba roi heo C.P, tray 400 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 59600, "400 g", 149000, 14.5, "FCT 7016 thit lon mo (fatty pork)", 0.98, "COST-39; DIE-12", "Medium", "High-fat cut; a flavour and fat benchmark rather than a protein benchmark. With 16.5 g protein: 92,146 VND."),
    ("Chicken, breast fillet with skin", "Uc ga phi le co da, 300 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 27270, "300 g", 90900, 20.3, "FCT 7013 thit ga ta (chicken meat, average)", 1.0, "COST-40; DIE-12", "Medium", "Promotional price (-10%). FCT value is for average chicken meat, not breast; breast is usually higher in protein, so this is a conservative (high) cost per protein."),
    ("Chicken, thigh meat", "Ma dui ga cat san, 400 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 31684, "400 g", 79210, 20.3, "FCT 7013 thit ga ta (chicken meat, average)", 1.0, "COST-40; DIE-12", "Medium", "Promotional price (-11%). Thigh meat is lower in protein than average chicken meat, so true cost per protein is probably higher (about 44,000 VND at 18 g)."),
    ("Eggs, hen", "Trung ga tuoi T.Food, box of 10", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 24000, "10 eggs", None, 14.8, "FCT 9001 trung ga (hen egg, whole); egg weight 55 g assumed", 0.86, "COST-41; DIE-12", "Medium", "Price 2,400 VND per egg (promotion; regular 28,000 per box gives 40,000 VND per 100 g protein). Egg weight 55 g is our assumption (not sourced); 50 to 60 g gives 31,400 to 37,700 VND. FCT waste 14%."),
    ("Eggs, duck", "Trung vit, box of 10", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 33000, "10 eggs", None, 13.0, "FCT 9004 trung vit (duck egg, whole); egg weight 70 g assumed", 0.88, "COST-41; DIE-12", "Low", "Promotional price. Egg weight 70 g is our assumption (not sourced). FCT waste 12%."),
    ("Pangasius (basa), fillet", "Ca basa phi le, 300 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 30000, "300 g", 100000, 15.0, "Literature: commercial frozen fillets 12.5 to 15.7 g, untreated fillets 18 g or more (DIE-13, DIE-14); pangasius is not in FCT 2007", 1.0, "DIE-15; DIE-13; DIE-14", "Medium", "Range 55,556 to 80,000 VND for protein 18 to 12.5 g. Retail fillets can carry added water and phosphates, which lower protein."),
    ("Pangasius (basa), fresh fillet", "File basa tuoi kg, Thoai An", "Co.op Online", "online; default store not stated", "2026-09-24", 116800, "1 kg", 116800, 15.0, "Literature (as above)", 1.0, "DIE-19; DIE-13; DIE-14", "Medium", "Range 64,889 to 93,440 VND for protein 18 to 12.5 g."),
    ("Tilapia (red), cleaned whole", "Ca dieu hong lam sach kg", "Co.op Online", "online; default store not stated", "2026-09-24", 79900, "1 kg", 79900, 19.7, "FCT 8024 ca ro phi (tilapia); FCT waste 43% applied", 0.57, "DIE-19; DIE-12", "Medium", "Cleaned (gutted, scaled) fish still has head and bones; FCT waste of 43% refers to whole fish, so this may overstate cost slightly. At 35% waste: 62,400 VND."),
    ("Shrimp, whiteleg, whole", "Tom the C.P, 200 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 33000, "200 g", 165000, 17.6, "FCT 8051 tom bien (sea shrimp); FCT waste 54% applied", 0.46, "DIE-15; DIE-12", "Medium", "Promotional price (-11%). Waste share for head-on whiteleg shrimp may be lower than the FCT sea-shrimp value; at 40% waste: 156,250 VND."),
    ("Shrimp, peeled meat", "Thit tom Minh Phu, 200 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 70000, "200 g", 350000, 17.6, "FCT 8051 tom bien (sea shrimp), edible portion", 1.0, "DIE-15; DIE-12", "Medium", "Frozen peeled product; glaze water not accounted for."),
    ("Beef, leg (dui bo)", "Dui bo, 200 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 58962, "200 g", 294810, 21.0, "FCT 7003 thit bo loai I (beef grade I)", 0.98, "DIE-16; DIE-12", "Medium", "Promotional price (-7%). Domestic fresh beef as listed."),
    ("Beef, shank (bap bo)", "Bap bo, 200 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 53568, "200 g", 267840, 21.0, "FCT 7003 thit bo loai I (beef grade I)", 0.98, "DIE-16; DIE-12", "Medium", "Promotional price (-4%)."),
    ("Beef, flank or brisket (nam bo)", "Nam bo, 200 g", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 49000, "200 g", 245000, 18.0, "FCT 7004 thit bo loai II (beef grade II)", 0.98, "DIE-16; DIE-12", "Medium", ""),
    ("Tofu, fresh", "Dau phu tuoi Lang Mo, box 400 g", "WinMart online", "online; default store not stated", "2026-09-24", 13100, "400 g", 32750, 10.9, "FCT 3025 dau phu (tofu)", 1.0, "DIE-23; DIE-12", "Medium", "On label protein values seen in the retail audit (3.8 to 9.3 g) the same price gives 35,215 to 86,184 VND. See disagreement on tofu protein."),
    ("Tofu, fresh (audit, label basis)", "Five tofu SKUs, Co.opmart HCMC, Sept 2026", "Retail audit (FORM-01)", "Ho Chi Minh City, store shelf", "2026-09-16 to 2026-09-20", None, "280 to 330 g", None, None, "Label protein 3.8 to 9.3 g per 100 g", 1.0, "FORM-01", "Medium", "Median 66,265 VND per 100 g protein; range 39,171 to 121,053. Reported by the supply study; not recomputed here."),
    ("Soy milk, packaged", "Fami nguyen chat, carton 36 x 200 ml", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 150000, "7.2 L", 20833, 1.9, "Label 1.9 g per 100 ml (Fami Nguyen Chat, FORM-01 SKU-032); density 1 kg per L assumed", 1.0, "DIE-17; FORM-01", "Medium", "Price per litre 20,833 VND. With FCT 3032 value for home-style soy milk (3.1 g): 67,203 VND. Co.op 6 x 200 ml pack at 29,000 VND (DIE-24) gives 127,193 VND at 1.9 g."),
    ("Peanuts, shelled", "Dau phong Xuan Hong 500 g", "Co.op Online", "online; default store not stated", "2026-09-24", 52200, "500 g", 104400, 27.5, "FCT 3017 lac hat (dried peanut seed)", 0.98, "DIE-21; DIE-12", "Medium", "Dry weight; also high in fat (FCT 573 kcal per 100 g)."),
    ("Mung beans, dehulled", "Dau xanh khong vo Xuan Hong 500 g", "Co.op Online", "online; default store not stated", "2026-09-24", 42300, "500 g", 84600, 23.4, "FCT 3010 dau xanh (mung bean seeds, dried)", 0.98, "DIE-20; DIE-12", "Medium", "Dry weight; FCT value is for whole seeds."),
    ("Soybeans, dry", "Dau nanh Xuan Hong 500 g", "Co.op Online", "online; default store not stated", "2026-09-24", 24200, "500 g", 48400, 34.0, "FCT 3007 dau tuong (yellow soybean, dried)", 0.98, "DIE-22; DIE-12", "Medium", "Raw material for home soy milk and tofu; not eaten as purchased."),
    ("Milk, fresh UHT", "Vinamilk 100% khong duong, 12 x 1 L", "Bach Hoa Xanh online", "online; default store (HCMC assumed)", "2026-09-24", 430000, "12 L", 35833, 3.9, "FCT 10001 sua bo tuoi (fresh cow milk); density 1 kg per L assumed", 1.0, "DIE-18; DIE-12", "Low", "Label protein not retrieved; UHT labels are often near 3.0 to 3.2 g per 100 ml (not verified), which would raise cost to about 112,000 to 119,000 VND."),
    ("Meat, all types (household average)", "VHLSS 2024: meat spending 349,800 VND and 2.60 kg per person per month", "National household average (all channels)", "Vietnam, households", "2024", None, "per person per month", 134538, 16.5, "FCT 7018 medium-fat pork used as proxy for the mix", 0.98, "DIE-05; DIE-12", "Low", "Implied unit value (our derivation) of all meat bought or produced for home use. Mix of pork, poultry, beef and processed meat; protein proxy is rough."),
    ("Tofu (household average)", "VHLSS 2024: tofu spending 9,200 VND and 0.43 kg per person per month", "National household average (all channels)", "Vietnam, households", "2024", None, "per person per month", 21395, 10.9, "FCT 3025 dau phu (tofu)", 1.0, "DIE-05; DIE-12", "Low", "Implied unit value (our derivation). Mostly fresh market tofu; shows households pay less than modern-retail tofu."),
    ("Rice (household average)", "VHLSS 2024: rice spending 118,500 VND and 6.45 kg per person per month", "National household average (all channels)", "Vietnam, households", "2024", None, "per person per month", 18372, 7.9, "FCT 1004 gao te (ordinary polished rice)", 1.0, "DIE-05; DIE-12", "Low", "Implied unit value (our derivation). Rice protein is incomplete (low lysine) and not a like-for-like substitute; shown because rice still supplies about a quarter of protein."),
]

hdr = ["record_id", "food", "product", "retailer", "channel_city", "date_observed", "pack_price_vnd", "pack_size",
       "price_vnd_per_kg", "protein_g_per_100g", "protein_basis", "edible_share", "vnd_per_100g_protein",
       "usd_per_100g_protein", "sources", "source_ids", "evidence_label", "confidence", "demand_evidence_type", "notes"]

with open(OUT, "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(hdr)
    for i, r in enumerate(rows, 1):
        (food, prod, ret, chan, date, packp, packd, ppk, prot, basis, edible, src, conf, notes) = r
        vnd100 = None
        if food.startswith("Eggs, hen"):
            protein_per_egg = 55 * edible * prot / 100
            vnd100 = (packp / 10) / protein_per_egg * 100
            ppk_out = ""
        elif food.startswith("Eggs, duck"):
            protein_per_egg = 70 * edible * prot / 100
            vnd100 = (packp / 10) / protein_per_egg * 100
            ppk_out = ""
        elif ppk is not None and prot is not None:
            vnd100 = 100 * ppk / (10 * prot * edible)
            ppk_out = ppk
        else:
            ppk_out = ""
        if food.startswith("Tofu, fresh (audit"):
            vnd100 = 66265
        vnd_s = f"{round(vnd100):d}" if vnd100 else ""
        usd_s = f"{vnd100 / USD:.2f}" if vnd100 else ""
        w.writerow([f"DPP-{i:03d}", food, prod, ret, chan, date, packp if packp else "", packd, ppk_out,
                    prot if prot is not None else "", basis, edible, vnd_s, usd_s, src, src,
                    "VN-direct", conf, "revealed", notes])
        print(f"{food:40s} {ppk_out!s:>8} {prot!s:>5} {edible:4} -> {vnd_s:>8} VND ({usd_s} USD)")
