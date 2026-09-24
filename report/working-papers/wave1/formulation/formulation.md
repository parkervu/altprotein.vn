# Formulation meta-analysis: what Vietnamese alt-protein products are made of, who makes them, and what that says about the protein-ingredient supply chain

Agent: FORMULATION (wave 1). Source prefix: FORM. Edition: September 2026. Accessed dates for web sources: 2026-09-23 unless stated.

Scope note. "Alt protein" here means every non-animal protein product in the field audit: traditional Vietnamese vegetarian food ("đồ chay"), tofu, plant milks and yogurts, vegan cheese, imported "modern" analogs and protein powders. The unit of analysis is the SKU row in the field log (186 rows), with duplicates of the same product across stores collapsed to "unique products" for protein statistics (66 unique products carry a protein value). All protein values are label or brand-page values, not lab measurements.

Files in this folder:
- `sku_analysis.csv`: 186 SKU rows, cleaned and classified (product type, as-sold form, primary and secondary protein source, protein, price per 100 g and per 100 g protein, import flag, owner, manufacturer, plant, archetype, confidence).
- `brands.csv`: 53 brands with owner, ownership country, manufacturer, plant location (post-2025 province names), inputs, SKU counts.
- `ingredient_suppliers.csv`: 22 rows on protein-ingredient supply (trade flows, distributors, processors, craft villages).
- `tbl_*.csv`: summary tables used below. `build_formulation.py`, `build_suppliers.py`, `analyze_formulation.py`, `analysis_output.txt`: reproducible code and full output.

Terms. TVP = textured vegetable (soy) protein, made by extrusion. SPC = soy protein concentrate (about 65-70% protein). SPI = soy protein isolate (about 90%). "Đạm đậu nành" on a Vietnamese label can mean TVP, SPC or SPI; labels rarely say which. "Tàu hũ ky" = tofu skin (yuba). "Mì căn" = wheat gluten (seitan). Hydrated = sold wet (ready-to-cook or ready-to-eat); dry = sold dried (for example dried TVP slices).

---

## Headline findings

1. **Most of the alt-protein shelf is not a protein product.** Of 186 SKUs from 11 stores, the two largest groups are plant milks (51 SKUs, 27%) and filled wrappers such as spring rolls, dumplings and buns (47 SKUs, 25%). Across 43 unique hydrated foods with a label value, median protein is 4.7 g/100 g; 53% have under 5 g and only 16% reach 10 g. [VN-direct] High for the sample, measured (label values). FORM-01.

2. **Vietnamese chay has two protein tiers with little in between.** Tier 1: starch-and-vegetable filled wrappers with mung bean filling, 1.5 to 5.7 g protein/100 g (median 4.0 g, 14 products). Tier 2: gluten- or TVP-based analogs at 12 to 25 g hydrated (median 19 g, 5 products) and dried TVP/gluten slices at 53 to 67 g as sold (median 64 g, 5 products). Seafood-style gel analogs (crab stick, "seafood tofu") sit at about 3 g. [VN-direct] High (labels). FORM-01.

3. **Every locally made product with 10 g or more protein per 100 g runs on an imported protein ingredient.** All 10 such unique products (8 An Nhiên, 1 Xuân Hồng, 1 Âu Lạc) use soy protein/TVP/SPC or wheat gluten. Local foods whose main protein is domestic (mung bean, rice, vegetables) top out at 4.6 g (median 3.0 g, n=8). [VN-direct] High for the sample. FORM-01, FORM-02 to FORM-07.

4. **Import dependence of the protein ingredient is about 77 to 88%.** Of 170 SKUs where the main protein ingredient can be identified, 77% rely on an imported protein ingredient (soy protein, gluten, pea protein, oats, nuts, or soybeans for tofu and soy milk), 11% partly, 12% on domestic protein. For the 102 locally made food SKUs: 64% imported, 18% partial, 19% domestic. Soybeans count as imported: Vietnam grew about 42,000 t against about 2.5 Mt imports in MY2024/25 (about 1.6% domestic share, USDA Post estimate). [VN-direct] Medium (import flag is inferred from ingredient type, not traced supplier). FORM-01, FORM-09.

5. **China supplies most concentrated plant-protein ingredients.** China-reported exports to Vietnam in 2023: 7,957 t of HS 2106.10 (protein concentrates and textured protein, USD 12.6 million, USD 1.59/kg), 10,028 t of HS 35.04 (includes soy protein isolate, USD 16.3 million, USD 1.63/kg) and 10,338 t of wheat gluten (USD 17.9 million, USD 1.73/kg). Vietnam-reported gluten imports were USD 31.1 million in 2023 (China 59%, Australia 13%, France 11%, Belgium 9%). [VN-direct] High (customs statistics, measured), but these codes also feed meat processing and supplements. FORM-02 to FORM-07.

6. **No commercial TVP extrusion in Vietnam was found.** Distributors sell Chinese soy protein isolate and Chinese gluten in 20 to 25 kg bags; one An Nhiên label names soy protein concentrate from Serbia; LC Foods specifies "soya TVP granule 4-7 mm". Chinese extrusion lines are marketed in Vietnam (100 to 2,000 kg/h), but no named Vietnamese TVP plant surfaced. This is absence of evidence after a limited search, not proof of absence. [VN-direct] Medium-Low. FORM-11, FORM-12, FORM-13, FORM-28, FORM-34, FORM-35.

7. **Domestic soybean crushing is feed-grade only.** VAL (Bunge-Wilmar joint venture) at Phú Mỹ, Ho Chi Minh City (former Bà Rịa-Vũng Tàu) reached capacity of 2.6 Mt soybeans and nearly 2 Mt meal per year in December 2025. No food-grade defatted flake or soy protein line was found. A food-grade stream from such a crusher is the obvious domestic feedstock for Vietnamese TVP. [VN-direct] Medium (press report of company figures). FORM-10.

8. **Technology level is low, and the "modern" analogs are imported.** No label in the audit shows high-moisture extruded whole cuts, mycoprotein, precision-fermented or cultivated ingredients. The only SPC/SPI-formulated burger and sausage (15 to 16 g protein) are imported from Italy and cost VND 542,000 to 622,000 per 100 g protein, about 5 times local gluten/TVP analogs (median VND 112,000). Fermentation appears only in plant yogurts (standard yogurt cultures) and cultured cashew cheeses (Kashew, Deep Blue Island). [VN-direct] High for the sample. FORM-01.

9. **Protein is cheapest in the least processed formats.** Price per 100 g of protein: tofu VND 39,000 to 121,000 (median 66,000, n=5); dried TVP slices VND 49,000 to 85,000 (median 65,000, n=4, online reference prices); packed soy milk about VND 92,000; hydrated gluten/TVP analogs median VND 112,000 (n=4); filled wrappers median VND 369,000 (n=17); plant yogurts about VND 534,000; cashew cheese about VND 876,000. [VN-direct] Medium (prices from shelf tags and online references). FORM-01.

10. **Ingredient cost is a small share of chay retail prices.** Retail dried TVP (VND 327,000 to 500,000 per kg) is 8 to 12 times the 2023 China export unit value for TVP/concentrates (USD 1.59/kg, about VND 41,000/kg at an assumed VND 26,000/USD). For a gluten analog with 19 g protein, gluten at USD 1.73 to 2.52/kg would be roughly 5 to 7% of the retail price. Modelled arithmetic, not company cost data. [VN-direct] Low-Medium. FORM-01, FORM-03, FORM-05, FORM-07.

11. **Chay is often cheaper than meat per 100 g of product, but the evidence is thin and says nothing about protein.** The one high-confidence same-brand pair: Vissan chả giò rế chay at VND 8,180/100 g versus VND 13,180 for Vissan's meat version (38% cheaper). Four other pairs range from 19% dearer to 52% cheaper but rest on low-confidence price reads. Because most chay wrappers hold 3 to 5 g protein, a cheaper pack is not cheaper protein; conventional labels were not captured. [VN-direct] Medium for the Vissan pair, Low for the rest. FORM-01.

12. **"Chay" is not the same as vegan.** Five SKU rows contain or may contain egg or dairy: egg noodles in Co.op Select's vegetarian gyoza-noodle meal (2 rows), skim milk powder in Thoại An chả lụa ớt xiêm chay, fresh cow milk in TH true NUT walnut (plus one unconfirmed TH row). A South Korean "allium-less" vegetable bun shows that Buddhist rules (no pungent vegetables) can matter more for some products than protein. [VN-direct] High (labels). FORM-01, FORM-26.

13. **The mainstream frozen chay shelf is split between Vietnamese firms and Korean-owned CJ.** Vietnamese: Vissan, Cholimex, SG Food, Thoại An, An Nhiên, LC Foods, and Saigon Co.op's private label (one line made by GN Foods JSC in Tây Ninh). CJ Foods Vietnam (Cầu Tre and bibigo, owned by CJ CheilJedang, South Korea) accounts for 20 of 186 rows, and bibigo Healthy Mandu Chay was seen in 5 of 11 stores. CJ's current há cảo chay and chả giò rế chay labels contain no soy protein at all: mung bean is the only protein ingredient. [VN-direct] Medium-High. FORM-01, FORM-22, FORM-23, FORM-24.

14. **Plant milks are imported-ingredient products by construction.** Soy milks (1.3 to 2.5 g protein/100 ml) run on imported soybeans; oat and nut milks (0.7 to 1.1 g) on imported oats and nuts. Vinamilk's "cao đạm" (high-protein) plant milk reaches 5 g/100 ml with pea protein, for which no Vietnamese producer was found. [VN-direct] High for labels, Low for pea-protein origin. FORM-01.

15. **Imported finished goods are a premium-store phenomenon.** 40 of 186 SKU rows are imported finished products, concentrated in premium or specialty stores (Nam An Market 20 of 26 rows, Moonmilk 8 of 9). Mass retailers (Co.opmart, Lotte Mart, GO!, Emart) carry almost only Vietnam-made products. [VN-direct] High for the sample. FORM-01.

16. **Implication for a domestic ingredient maker: textured soy (or soy-gluten) granules and slices are the realistic first product.** They would compete with Chinese TVP/concentrates landing at about USD 1.6/kg (2023 unit value, before freight and duty), selling to formulators whose ingredient cost is a small share of retail price. Named first customers: An Nhiên (Phạm Gia Phát), Âu Lạc, Xuân Hồng, LC Foods, Cholimex, CJ Foods Vietnam, Vissan, Thoại An and co-packers such as GN Foods. A mung bean or rice protein would more plausibly replace imported pea protein in drinks and yogurts (Vinamilk) than TVP, on price. [VN-direct] Medium (inference from the evidence above). FORM-01 to FORM-10.

---

## Detailed findings

### 1. Cleaning and classification (Task 1)

What was done. Every row of the field product log was classified by hand in `build_formulation.py` (one annotation per SKU, with a note wherever a judgment was made). Brand names were normalised (for example "Cầu Tre (CJ Cầu Tre), reasonably confident" becomes "Cầu Tre (CJ Foods Vietnam)"; "Veyo (Nutifood)" corrected to "Veyo (Vinasoy)"). Protein values of the form "≥3.5" (a regulatory minimum quoted by a price site) were excluded. Where the same product had a label value elsewhere in the audit, that value was borrowed and flagged (9 rows). One multipack size was reconstructed from the note (Vinamilk oat, 4 x 180 ml).

Sample structure (FORM-01):

| Product type | SKU rows | As sold |
|---|---|---|
| plant milk | 51 | beverage |
| dumpling / spring roll / bun with vegetable filling | 47 | ready-to-cook |
| frozen meat/seafood analog | 21 | 9 ready-to-cook, 12 ready-to-eat |
| canned analog | 9 | ready-to-eat |
| vegan cheese/spread | 9 | ready-to-eat |
| other (instant noodles, falafel, nutritional yeast, pesto, condensed coconut milk) | 9 | mixed |
| dried TVP/soy chunks | 8 | dry |
| plant yogurt/creamer | 8 | ready-to-eat |
| tofu | 8 | ready-to-cook |
| ready meal | 7 | mixed |
| snack/jerky (mushroom jerky) | 5 | dry |
| protein powder | 4 | dry |
| **Total** | **186** | 102 HCMC (6 stores), 84 Nha Trang (5 stores) |

Data quality in the log: 120 rows have an ingredient list; 78 rows (66 unique products) have a protein value; price confidence is High for 125 rows, Medium (online reference, not shelf) for 27, Low for 34 (shared shelf tags, unclear multipacks, one outlier).

Primary protein source (SKU rows; see `tbl_primary_protein_family_by_type.csv`):

| Primary protein source | SKU rows | Where it appears |
|---|---|---|
| soy protein / TVP / SPC / SPI | 28 | canned analogs, dried slices, mandu, seafood-style analogs, imported burger |
| soybean / tofu / soy milk | 26 | soy milks, tofu, seafood tofu |
| mung bean (đậu xanh) | 19 | spring rolls and dumplings (CJ, Vissan, Cholimex, Co.op Select, LC Foods) |
| oat | 19 | oat milks, oat yogurt |
| unknown | 18 | unbranded or unpublished private-label SKUs |
| other nuts (almond, walnut, macadamia, pistachio) | 17 | nut milks |
| wheat flour (bun dough or wrapper) | 13 | bánh bao, wonton, samosa, gyoza-noodle meal |
| wheat gluten / wheat protein | 8 | An Nhiên fish and meat analogs, Thoại An crab stick and chả lụa |
| rice / corn | 8 | rice milk, corn milk, fried rice, rice noodles |
| mushroom, cashew, pea protein | 7 each | jerky; cheeses; high-protein milks, yogurts, powders |
| chickpea, hemp, none, other | 9 | falafel, hummus, powders, spreads |

Ingredient frequency among the 120 SKUs with a list: mushroom 42 rows (27 products), soy protein/TVP wording 31 (23), soybean/tofu/soy milk 29 (25), mung bean 25 (16), oat 16 (12), wheat gluten 9 (9), tofu skin 9 (6), pea protein 7 (5), cashew 5 (5). Mushroom is the most common ingredient but is used for texture and flavour, not protein.

Ownership (brands.csv). Vietnamese-owned brands dominate mass retail: Vinamilk (17 rows), Co.op Select (12), An Nhiên (12), Vissan (8), Fami/Vinasoy (8), Thoại An (5), Cholimex (4), Veyo/Vinasoy (4), SG Food (3). Korean-owned: Cầu Tre and bibigo under CJ Foods Vietnam (20 rows), Choice L (Lotte Mart private label, 3), Pulmuone (2). Imported finished brands (Oatly, MilkLab, 137 Degrees, Unconventional, Orgain and others) account for 40 rows.

Manufacturer and plant locations found (current province, former unit in brackets; province mapping follows the 1 July 2025 merger and was not re-verified by this agent):

| Brand | Manufacturer | Plant / address | Source |
|---|---|---|---|
| Vissan | Vissan JSC | Ho Chi Minh City, 420 Nơ Trang Long (former Bình Thạnh district) | FORM-25 |
| Cholimex | Cholimex Food JSC | Ho Chi Minh City, Vĩnh Lộc IP (former Bình Chánh district) | FORM-27 |
| SG Food | Saigon Food JSC | Ho Chi Minh City, Vĩnh Lộc IP (former Bình Chánh district) | FORM-31 |
| Thoại An | Thoai An Trading Co., Ltd | Ho Chi Minh City, Tân Tạo IP (former Bình Tân district) | FORM-26 |
| LC Foods | LC Foods JSC | Ho Chi Minh City, Rạch Bắp IP, Tây Nam ward (former Bình Dương province) | FORM-28 |
| Âu Lạc | Au Lac Pure Vegetarian Trade Manufacturing Co., Ltd | Ho Chi Minh City, 735-737 Nguyễn Kiệm (former Gò Vấp district) | FORM-20 |
| An Nhiên | Phạm Gia Phát Trading & Import-Export Co., Ltd | Head office Ho Chi Minh City (former District 12); plant not disclosed | FORM-15, FORM-16 |
| Co.op Select (gyoza-noodle meal) | GN Foods JSC for Saigon Co.op | Tây Ninh (label does not say whether former Long An or former Tây Ninh) | FORM-01 |
| Cầu Tre, bibigo | CJ Foods Vietnam Co., Ltd | Head office CJ Building, District 1 area, Ho Chi Minh City; plant claimed at Kizuna IP, Tây Ninh (former Long An), not verified | FORM-22 to FORM-24 |
| Fami, Veyo | Vinasoy unit of Quang Ngai Sugar JSC | Quảng Ngãi; other plants not verified | FORM-33 |

### 2. Ingredient lists and nutrition for the main brands (Task 2)

Key additions from brand and retailer pages (beyond the field log):

- **CJ Foods Vietnam (Cầu Tre).** Há cảo chay: wrapper 52% of water, potato starch and wheat starch; filling yam bean, mung bean, taro, wood-ear mushroom, glass noodles. Chả giò bánh rế chay đặc biệt: net rice wrapper 31%; filling yam bean, sweet potato, mung bean, taro. Neither contains soy protein or tofu skin. Manufacturer: CJ Foods Vietnam Co., Ltd. [VN-direct] High. FORM-22, FORM-23. The Nha Trang log's older listing for the 600 g variant includes tàu hũ ky: possibly a reformulation (see disagreements).
- **Vissan chả giò chay 500 g.** Rice paper wrapper; yam bean, taro, carrot, mung bean, tàu hũ ky, mushrooms, soy protein. Label protein 4.26 g/100 g (HCMC photo). Online price VND 45,500. [VN-direct] High. FORM-25, FORM-01.
- **Thoại An chả lụa ớt xiêm chay.** Wheat gluten 35%, soy protein, vegetable oil, sugar, skim milk powder. Factory Tân Tạo IP. [VN-direct] High. FORM-26.
- **Cholimex bánh bao chay.** Dough (wheat flour, soy flour, leavening) 40%; filling "sườn non chay" (TVP ribs), yam bean, chayote, mushrooms, tofu skin. Label protein 5.74 g/100 g. [VN-direct] High. FORM-27, FORM-01.
- **LC Foods chả giò chay rau nấm.** Vegetables 58% (yam bean, mung bean, carrot, sweet potato, taro), wrapper 30%, "soya TVP granule 4-7 mm". Protein 3.8 g/100 g. [VN-direct] High. FORM-28, FORM-01.
- **An Nhiên.** Sườn non chay: soy protein (non-GMO), defatted soy flour, wheat gluten, wheat starch, corn starch (Vietnamese list). Label 64 g protein/100 g dry. AEON eShop prices on 23 Sep 2026: sườn non chay VND 65,000, bò lát chay 65,000, gà lát chay 60,000, sườn non lúa mạch 75,000 (150 g), shown as pre-order. [VN-direct] High for labels, Medium for prices. FORM-16, FORM-17, FORM-19.
- **SG Food cơm chiên chay gạo lứt.** Brown rice 60%; vegan fish ball 2.8% and vegan sausage 2% are the only analog content. AEON price VND 25,000/200 g. [VN-direct] High. FORM-32.
- **Co.op Select.** Bánh cuốn chay (starch wrapper, cabbage, mushrooms, edamame, peas; VND 39,000/290 g online) and chả giò khoai mỡ (purple yam 36%, crispy wrapper 30%, mung bean; manufacturer field names Saigon Co.op, not the co-packer). [VN-direct] High. FORM-29, FORM-30.
- **Vinasoy (QNS).** QNS lists VEYO as its nut-milk brand, confirming Veyo is Vinasoy, not Nutifood. [VN-direct] High. FORM-33.
- **Not reached this wave:** Xuân Hồng, Kashew and GN Foods sites were unreachable; the Deep Blue Island domain redirects to an unrelated site; NOSAFOOD's site has an expired certificate; Vinamilk product pages returned 403. Values for these rely on the field log photos (FORM-01).

Protein content by product type (unique products, label values; `tbl_protein_by_type.csv`):

| Product type (form) | n | Median g/100 g | Range |
|---|---|---|---|
| dried TVP/soy chunks (dry) | 5 | 64.0 | 53.3 to 66.7 |
| protein powder (dry, all imported) | 4 | 47.0 | 41.2 to 58.3 |
| frozen analog, ready-to-eat | 4 | 19.3 | 3.0 to 25.1 |
| frozen analog, ready-to-cook | 5 | 15.0 | 3.03 to 19.0 |
| vegan cheese/spread | 2 | 8.9 | 8.0 to 9.7 |
| falafel (other) | 2 | 9.0 | 9.0 |
| canned analog | 2 | 6.8 | 4.5 to 9.1 |
| tofu | 5 | 5.0 | 3.8 to 9.3 |
| filled wrappers (dumpling, spring roll, bun) | 18 | 4.3 | 1.5 to 6.3 |
| ready meal | 2 | 4.2 | 4.2 |
| plant yogurt | 3 | 1.9 | 1.6 to 2.9 |
| plant milk (per 100 ml) | 14 | 1.6 | 0.7 to 5.0 |

Dry versus hydrated: dry products (n=9) median 58.3 g; hydrated foods (n=43) median 4.7 g. Comparing them directly is misleading: dried TVP rehydrated at about 1 part TVP to 2 parts water gives roughly 21 g protein per 100 g hydrated at about VND 10,900 per 100 g, similar to An Nhiên's frozen gluten fish fillet (19 g, VND 23,200 per 100 g). Modelled.

Tofu note: Co.op Select đậu hũ trắng 300 g shows 3.8 g/100 g, well below the 8.9 to 9.3 g of firmer tofus. This spread (3.8 to 9.3 g) means "tofu" is not a fixed protein unit; water content is a formulation choice.

### 3. Supply chain of protein ingredients (Task 3)

**Textured soy protein and soy protein concentrate.**
- Trade: China-reported exports to Vietnam under HS 2106.10 were 7,957 t (USD 12.63 million) in 2023. Vietnam-reported imports under the same code were USD 33.98 million from all origins: United States 46%, China 27%, "Other Asia n.e.s." (Taiwan) 16%, India 5%, Netherlands 2%, Malaysia 2%. The US share is probably dairy or supplement protein blends rather than TVP (not verified). [VN-direct] High for values. FORM-02, FORM-05.
- Vietnam-reported quantities for this code are imputed: every partner has the identical unit value (USD 5.90/kg), so the 5,763 t total is not a measurement. Use China's 7,957 t for China-origin tonnage.
- No Vietnamese TVP extruder was identified. Evidence pointing to imports: LC Foods specifies a standard 4-7 mm TVP granule (FORM-28); An Nhiên's chicken balls name Serbian soy protein concentrate (FORM-01); Thanh Dũng, a Bình Dương chay maker founded 2009 that lists TVP among its products, says its raw materials are imported from the USA, Australia and Canada (FORM-35). A Ho Chi Minh City dealer, Tân Sao Bắc Á, sells Chinese soy-snack extrusion lines of 100 to 2,000 kg/h (FORM-34); this shows machines are on offer, not that TVP is made here. [VN-direct] Medium-Low.

**Soy protein isolate.**
- China-reported exports to Vietnam under HS 35.04 were 10,028 t (USD 16.31 million, USD 1.63/kg) in 2023; the code also covers peptones and collagen peptides, so SPI tonnage is lower. Vietnam-reported HS 35.04 imports: USD 22.18 million (China 45%, US 15%, Spain 12%, Japan 8%), quantities imputed. [VN-direct] High for values. FORM-04, FORM-06.
- Named channel: Phụ Gia Việt Mỹ (VMC Group, Hanoi, claims 19 branches) sells China-origin SPI in 20 kg bags for giò chả, sausages and vegetarian meat; it also names Ingreda Vietnam and Luân Kha as distributors. [VN-direct] Medium. FORM-11, FORM-39.
- SPI is used as much by meat processors (giò chả, sausages) as by chay makers, so these imports are not an alt-protein market size.

**Wheat gluten ("mì căn", "gluten lúa mì").**
- Vietnam imported USD 31.06 million of wheat gluten in 2023 (China 59%, Australia 13%, France 11%, Belgium 9%, Germany 5%, Austria 2% of value). China reports 10,338 t shipped to Vietnam (USD 1.73/kg). Vietnam's reported 12,337 t total is imputed (uniform USD 2.52/kg). [VN-direct] High for values. FORM-03, FORM-07.
- Distributors: TDGIMEX (Hanoi) sells Chinese vital wheat gluten in 25 kg bags "for mì căn and vegetarian food"; VMC Group's Đà Nẵng branch sells Xinrui (China) gluten. [VN-direct] Medium. FORM-12, FORM-13.
- Traditional mì căn can also be washed out of wheat flour dough at small scale. Vietnam grows no wheat, so either route rests on imported wheat. No Vietnamese wheat wet-milling (starch and gluten) plant was found. [general/VN-adjacent] Medium.

**Tofu skin (tàu hũ ky).**
- Made in Vietnam in craft villages from mainly imported soybeans. Example: Mỹ Hòa, Vĩnh Long (former Bình Minh town, Vĩnh Long province): 27 households, over 200 workers, about 7 t per day (unclear whether product or beans); producers prefer imported beans, saying they raise quality by over 20%. Recognised as national intangible cultural heritage (2022). [VN-direct] Medium. FORM-14.
- Imports of tàu hũ ky from China are likely but were not measured this wave.

**Soybeans (tofu, soy milk, tàu hũ ky).**
- USDA Post (Hanoi): production 42,000 t on 27,000 ha (MY2024/25 and MY2025/26); imports 2.5 Mt (MY2024/25) rising to 2.8 Mt (MY2025/26); food use 540,000 t rising to 550,000 t; MY2023/24 import origins Brazil 48.4%, United States 41.4%. The largest packed soymilk producer plans about 10% annual growth. [VN-direct] High (estimates, not official statistics). FORM-09.
- Crushing: VAL (Bunge-Wilmar) Phú Mỹ reached 2.6 Mt/yr capacity with a USD 100 million second line (December 2025); output is oil and feed meal. [VN-direct] Medium. FORM-10.
- Domestic-bean efforts exist but are small: ToFu House (Văn Giang, Hưng Yên; founded 2021) reported 150 to 500 t/month tofu capacity and pilot soybean fields in Hải Phòng, Lạng Sơn and Bắc Kạn (now Thái Nguyên) in 2023. [VN-direct] Medium. FORM-36.

**Mung bean (đậu xanh).** Treated as "domestic" in the import flag, but Vietnam also imported USD 138 million of HS 0713.31 beans in 2023 (Myanmar 65%, Cambodia 13%, Argentina 8%); the reported 103,835 t is imputed. Domestic mung bean production was not established. So even "domestic" fillings are partly regional imports. [VN-direct] Medium. FORM-08.

**Pea protein, chickpea, oats, nuts.** All imported or imported-raw-material (cashew is processed in Vietnam but largely from imported raw nuts; the USD 4.49 billion 2025 raw-nut import figure is an unverified prior lead). No Vietnamese pea protein producer was found. [VN-direct] Low. FORM-01.

**The manufacturing base is fragmented.** A 2022-2023 survey covered 126 vegetarian food production, processing and trading establishments in Hanoi alone (422 workers interviewed; 24.5% had acceptable food safety knowledge). This suggests many small buyers of TVP and gluten beyond the branded players in the audit. [VN-direct] Medium. FORM-37.

### 4. Analysis (Task 4)

**4a. Formulation archetypes** (`tbl_archetypes.csv`; protein values are unique products; price per 100 g protein uses all SKU rows with both values):

| Archetype | SKU rows | Protein g/100 g (median, range) | VND per 100 g protein (median, range) | Main protein input | Typical makers |
|---|---|---|---|---|---|
| A1 Starch-and-vegetable filled wrapper | 38 | 4.0 (1.5 to 5.7) | 369,000 (156,000 to 1,728,000) | mung bean; wheat or rice wrapper; minor TVP or tofu skin | CJ Cầu Tre, Vissan, Cholimex, Co.op Select, LC Foods |
| A2 Wheat-dough bun or wheat-wrapper dimsum | 11 | 5.7 (5.0 to 6.3) | 263,000 (173,000 to 573,000) | wheat flour; soy protein in bibigo mandu | Cholimex, Co.op Select, MANI, bibigo |
| A3 Hydrated gluten or TVP analog | 10 | 19.0 (12.0 to 25.1) | 112,000 (66,000 to 175,000) | wheat gluten, soy protein | An Nhiên, Âu Lạc |
| A4 Gel or emulsion seafood analog | 4 | 3.0 (3.0 to 3.03) | 288,000 (279,000 to 472,000) | soy milk, gluten, starch | Thoại An |
| A5 Dry TVP or gluten slices and chunks | 8 | 64.0 (53.3 to 66.7) | 65,000 (49,000 to 85,000) | soy protein, soy flour, gluten | An Nhiên, Xuân Hồng |
| A6 Canned soy luncheon or stew | 9 | 6.8 (4.5 to 9.1) | 321,000 (224,000 to 419,000) | soy protein, SPI, soybean | Vissan, Ông Chà Và/NOSA |
| A7 Soy beverage | 14 | 2.3 (1.3 to 2.5) | 92,000 (92,000 to 878,000) | whole soybean | Vinasoy, Vinamilk, Ichiban |
| A8 Pea-protein-fortified plant milk | 2 | 5.0 | 174,000 | pea protein | Vinamilk |
| A9 Cereal or nut beverage | 32 | 1.1 (0.7 to 1.1) | 891,000 (725,000 to 1,444,000) | oat, almond, walnut | Oatly, 137 Degrees, TH, Veyo |
| A10 Tofu | 8 | 5.0 (3.8 to 9.3) | 66,000 (39,000 to 121,000) | soybean | Co.op Select, Ichiban, Tafu, Pulmuone |
| A11 Cultured or set nut, coconut or pea-oat product | 14 | 2.9 (1.6 to 9.7) | 573,000 (511,000 to 892,000) | cashew, coconut, pea protein, oat | Vinamilk, Deep Blue Island, Kashew |
| A12 Imported SPC/SPI analog | 2 | 15.5 (15 to 16) | 582,000 (542,000 to 622,000) | SPC, SPI | Unconventional (Italy) |
| A13 Chickpea patty or spread | 3 | 9.0 | 448,000 | chickpea | Maris, Tartine |
| A14 Protein powder | 4 | 47.0 (41.2 to 58.3) | 360,000 (343,000 to 366,000) | pea, rice, hemp | Orgain, imports |
| A15 Rice-based ready meal | 3 | 4.2 | 383,000 | rice | SG Food, bibigo |
| A0 Not a protein product or no data | 24 | n/a | n/a | n/a | noodles, unbranded rows |

Reading: the archetypes with the most SKUs (A1, A9, A7) are the lowest in protein. The cheapest protein per đồng (A5 dry TVP, A10 tofu, A7 soy milk, A3 gluten analogs) is all soy- or wheat-based, and therefore import-based.

**4b. Price per 100 g of product** (`tbl_price_per_100g_by_type.csv`, VND, median): tofu 3,600; plant milk 9,400 per 100 ml; plant yogurt 10,100; filled wrappers 11,400; ready meals 13,500; frozen analogs 15,200; canned analogs 30,800; dried TVP 32,700 (dry weight); vegan cheese 83,300; mushroom jerky 131,600; protein powder 169,000.

**4c. Chay versus conventional** (only rows where the collector logged a conventional equivalent; price per 100 g):

| Chay SKU | Chay | Conventional equivalent | Conventional | Difference | Price confidence |
|---|---|---|---|---|---|
| Vissan chả giò rế chay 500 g | 8,180 | Vissan chả giò rế thịt 500 g | 13,180 | -38% | High |
| Unbranded chả lụa chay 500 g | 10,580 | Vissan giò lụa (pork) 500 g | 21,980 | -52% | Low (brand illegible) |
| Unbranded giò thủ chay 500 g | 9,180 | Vissan giò thủ 500 g | 17,380 | -47% | Low (size assumed) |
| Cầu Tre chả giò xốp chay 500 g (brand best guess) | 10,380 | Cầu Tre chả giò thịt 500 g | 10,800 | -4% (-17% at online price) | Low |
| SG Food lẩu Thái chay 500 g | 14,580 | SG Food seafood lẩu Thái 500 g | 12,300 | +19% (+2% at online price) | Low |

No conventional protein values were captured, so price per gram of protein cannot be compared. This is a gap (see below).

**4d. Import dependence of the main protein ingredient** (`likely_imported_protein_ingredient`; rule: Y if the main protein ingredient is soy protein, soybean/tofu/soy milk/tofu skin, wheat gluten or flour, pea, oat, almond or other imported nut, chickpea, hemp, or the product is imported finished; partial if a domestic protein ingredient such as mung bean shares the role with an imported one; N if mung bean, rice, corn, coconut or vegetables):

| Group | n with a known flag | Y | partial | N |
|---|---|---|---|---|
| All SKUs | 170 | 77% | 11% | 12% |
| Locally made SKUs | 131 | 70% | 14% | 16% |
| Locally made food (non-beverage) | 102 | 64% | 18% | 19% |

Unique local foods by flag: N median protein 3.0 g (max 4.6, n=8); partial median 5.0 g (n=6); Y median 7.6 g (range 1.6 to 66.7, n=30). Domestic protein ingredients today appear only in low-protein products.

**4e. Technology level.**
- Extrusion: 26 SKU rows contain an extruded soy ingredient (TVP or SPC, stated or inferred), from An Nhiên, bibigo, Vissan, Cầu Tre, Cholimex, LC Foods, SG Food, Xuân Hồng and Unconventional. The extrusion itself appears to happen abroad (section 3).
- High-moisture extrusion (whole-muscle texture): none, apart from what the imported Italian burger/sausage may use (SPC/SPI, rehydrated textured soy).
- Fermentation: 15 rows, all conventional: Vinamilk plant yogurts (S. thermophilus, L. bulgaricus), cultured cashew cheeses (Kashew, Deep Blue Island), imported nutritional yeast. No biomass fermentation, mycoprotein or koji-based product.
- Precision-fermented or cultivated ingredients: none on any label.
- Mushroom as a meat base: one product (An Nhiên "thịt ủ chân nấm chay", VND 136,000/500 g) and imported mushroom jerky. Mushrooms appear in 42 rows but as texture and flavour.
[VN-direct] High for the sample. FORM-01.

### 5. Supply-side implications (Task 5)

**What a domestic protein-ingredient supplier could displace.**
- Textured soy granules, chunks and slices used in chay fillings, dried analogs and canned "bò lát chay"/"heo lát chay". Import pool: about 8,000 t/yr of China-origin HS 2106.10 (2023), part of which is TVP. A 5,000 to 10,000 t/yr extruder would be sized to replace a large share of China-origin TVP/concentrate imports if it matched price (arithmetic on FORM-05; the TVP share of the code is unknown).
- Wheat gluten in chả, giò and seafood analogs (10,000 to 12,000+ t/yr imports). Hard to displace: gluten gives the elastic bite that rice, mung bean or fungal proteins do not, and Vietnam has no wheat. Partial replacement (blends) is more realistic than substitution.
- Pea protein in plant milks and yogurts (Vinamilk's "cao đạm" line and yogurts). A mung bean protein isolate is the closest functional substitute with a regional supply base (Myanmar, Cambodia, Vietnam), but mung bean is not cheaper than soy and isolates cost more than TVP [general]. This is a quality or origin play, not a price play.
- Protein upgrading of the largest archetype (A1 filled wrappers, 38 rows, about 4 g protein). Adding 3 to 5% TVP or mung bean protein could lift these to 6 to 8 g. Price points are low (median VND 11,400 per 100 g), so the added ingredient must be cheap.

**Cost targets implied by incumbents.**
- Landed Chinese TVP/concentrate: about USD 1.59/kg (2023 China export unit value, before freight, duty and distributor margin). Gluten: USD 1.73/kg (China-reported) to 2.52/kg (Vietnam-reported, all origins). A domestic TVP needs an ex-works price in this range (about VND 40,000 to 45,000/kg at VND 25,000 to 26,000/USD, rate assumed) to compete head-on. Medium.
- Retail prices leave room: dried TVP retails at 8 to 12 times the import unit value, and gluten is roughly 5 to 7% of the retail price of a 19 g gluten analog (modelled). Formulators may therefore pay a modest premium for consistency, non-GMO status, traceability or local supply security, but not a large one: chay is sold at or below meat prices.

**Natural first customers** (evidence of current use of the ingredient in brackets):
1. An Nhiên / Phạm Gia Phát (soy protein, SPC, gluten; 12 SKUs; dried and frozen analogs).
2. Âu Lạc (25 g protein analog implies gluten or soy protein; long-established HCMC maker).
3. Xuân Hồng and other dried-slice packers (soy protein, soy flour, gluten).
4. LC Foods (TVP granules 4-7 mm).
5. Cholimex (TVP "sườn non chay", soy flour in dough).
6. CJ Foods Vietnam (soy protein in bibigo mandu and Cầu Tre da xốp; large volumes, multinational procurement standards).
7. Vissan (soy protein, canned vegan slices; also a large meat processor using SPI-type binders).
8. Thoại An (gluten 35%, soy protein).
9. Co-packers for retailer private labels, such as GN Foods (Tây Ninh) for Saigon Co.op.
10. Vinamilk and Vinasoy for plant-milk proteins (pea protein now; okara and soy by-products are a separate lead).

**What incumbents' formulations imply.** Mainstream makers minimise protein ingredients: CJ's current há cảo and chả giò rế have none, and most wrappers rely on mung bean and starch. The protein-dense segment is small, specialist and Ho Chi Minh City-based (An Nhiên, Âu Lạc, Thoại An, Xuân Hồng). A new ingredient will be sold first to these specialists, then to CJ, Vissan and Cholimex if it is cost-neutral.

### 6. Limitations (Task 6)

- Convenience sample: 11 stores, 2 cities, 3 visit days (Nha Trang 6 Sep 2026; HCMC 16 and 20 Sep 2026). Modern retail and premium stores only. No wet markets, no dedicated chay shops (where Âu Lạc and many small makers sell), no online-only brands, no food service. The sample over-represents plant milks and imported premium goods and under-represents small chay makers.
- SKU rows are not sales. Shares are shares of observed facings, not volume or value.
- Duplicates: the same product appears in several stores; protein statistics use unique products (66), price statistics use SKU rows.
- Label values are not lab values. Nine protein values were borrowed from the same product's label elsewhere in the audit. One brand-wide average (Fami 1.9 g) conflicts with carton labels (2.5 g).
- Translation: some ingredient lists were translated by the collector; "wheat starch" on two An Nhiên analogs with 18.8 to 19.7 g protein is almost certainly gluten ("bột mì căn") and was treated as such.
- Prices: 34 rows have low-confidence price reads (shared shelf tags, unclear multipacks); 27 rows use online reference prices, not shelf prices. One outlier (Vinamilk plant yogurt at VND 10,000 per 4 x 100 g) is excluded from price statistics.
- The import flag is inferred from ingredient type, not from traced suppliers. Mung bean is treated as domestic although Vietnam imports about 100,000 t per year.
- Trade statistics are for 2023 (2024 not yet reported to WITS when accessed); Vietnam-reported tonnages are imputed; HS 2106.10 and 35.04 include non-alt-protein uses (meat processing binders, whey and supplement blends, peptones).

---

## Implications by audience

**VCs and impact investors**
- The investable gap is upstream, not in retail brands: every protein-dense chay product relies on imported TVP, SPC, SPI or gluten, and no Vietnamese TVP extruder was found. A textured-protein plant is the concrete supply-side thesis, with a price ceiling near USD 1.6/kg set by Chinese imports.
- "Modern" analogs are imported, premium and about 5 times dearer per gram of protein than local gluten/TVP analogs; a Western-style brand thesis faces a price-anchored market where chay is sold at or below meat prices.

**Policy makers (MOIT, MAE, MOH/VFA, provinces)**
- Protein-ingredient import dependence is near total for soy and wheat. If domestic value added is a goal, the lever is an ingredient plant (food-grade defatted soy from crushers such as VAL, or a TVP line) rather than finished-product support.
- Labels use "đạm đậu nành" for TVP, SPC and SPI alike, and "chay" products may contain egg or milk. Clearer ingredient naming and a "thuần chay" (vegan) definition would help buyers and export.

**Startups and founders**
- First customers are identifiable and concentrated in Ho Chi Minh City: An Nhiên, Âu Lạc, Xuân Hồng, Thoại An, LC Foods, Cholimex, CJ Foods Vietnam, Vissan, and private-label co-packers such as GN Foods.
- Protein upgrading of filled wrappers (about 4 g protein today) is a formulation service opportunity, but the ingredient must be very cheap.

**F&B and feed manufacturers**
- A domestic food-grade soy stream from Vietnam's growing crush capacity could supply TVP and soy flour; the crush sector today is oriented to feed meal.
- Mung bean protein is a regionally sourced alternative to imported pea protein for plant milks and yogurts, positioned on origin and allergen profile rather than price.

**Academia**
- Useful public goods: measured (lab) protein and amino-acid scores for common chay products; functional work on mung bean and rice protein as partial gluten or pea replacements; extrusion trials on Vietnamese-processed defatted soy.

**International bodies**
- A small open dataset on formulation, protein and price (this file set) plus a consignee-level trade study of TVP and gluten would be a low-cost public good for the region.

---

## Disagreements log

| Topic | Claim A | Claim B | Position taken |
|---|---|---|---|
| CJ acquisition of Cầu Tre | Collector notes: CJ bought Cầu Tre in 2006 (FORM-01) | Analyst recollection: CJ CheilJedang took a majority stake in 2016 | Unresolved. Lean to 2016 (Low). Not verified this wave; web search budget exhausted. |
| Ông Chà Và / NOSA canned soy meat origin | Nha Trang OSINT: made in China, imported (FORM-01) | HCMC log row: Vietnam (local) (FORM-01) | Unresolved. Brand owner may be Vietnamese with contract manufacture in China. Check "Xuất xứ" on the can. |
| 137 Degrees origin | Nha Trang rows: Vietnam (local) | HCMC rows: imported; brand site is Simple Foods (believed Thailand) (FORM-38) | Imported (Thailand), Medium-Low. |
| Veyo ownership | One log row: Nutifood | QNS site lists VEYO as its nut-milk brand (FORM-33) | Vinasoy/QNS, High. |
| An Nhiên dried-slice prices | Field log online reference: VND 49,000/150 g | AEON eShop 23 Sep 2026: VND 60,000 to 65,000/150 g (FORM-19) | Both recorded. Calculations use the field value; with AEON prices, price per 100 g protein is 22 to 33% higher (still the cheapest non-tofu protein). |
| An Nhiên gà viên chay recipe | Label: soy protein concentrate, from Serbia (FORM-01) | Retailer listing: SPI, corn starch, wheat fiber, soybean oil (FORM-18) | Prefer the photographed label; listing may be an older or different recipe. |
| Vissan bò nấu đậu chay | Nha Trang (brand site): vegan beef slices 55%, white beans 17% | HCMC label photo: slices 30%, beans 20% | Prefer the HCMC label (primary, current). Possible reformulation. |
| Cầu Tre chả giò bánh rế chay đặc biệt | Nha Trang listing: contains tàu hũ ky | CJ site 2026: mung bean only, no tofu skin (FORM-22) | Prefer CJ site as current; possible reformulation away from soy. |
| HS 2106.10 China to Vietnam, 2023 tonnage | Vietnam-reported 1,551 t (FORM-02) | China-reported 7,957 t (FORM-05) | China figure. Vietnam-side quantities are imputed (uniform unit value). Values agree more closely (USD 9.1 million vs 12.6 million). |
| Wheat gluten imports 2023 | Vietnam-reported 12,337 t total, 7,314 t from China (FORM-03) | China-reported 10,338 t to Vietnam (FORM-07) | China figure for China tonnage; total imports are probably above 12,000 t. |
| Soybean imports | Prior lead: about 3.2 Mt | USDA GAIN VM2025-0011: 2.5 Mt MY2024/25, 2.8 Mt MY2025/26 (FORM-09) | Not averaged. Different marketing years and report editions; GAIN VM2025-0011 used here. Macro agent should reconcile. |
| Thoại An đậu hũ hải sản chay 500 g price | Co.opmart Nha Trang: VND 71,500 | Co.opmart Nguyễn Kiệm: VND 43,700 | One read is probably wrong; the HCMC tag is a clear read. |
| Same-SKU price spread across stores | bibigo Healthy Mandu Chay 300 g: VND 43,000 (promotion) to 56,700; Vissan chả giò chay: VND 44,900 to 60,000 | n/a | Real price variation plus low-confidence reads. Do not use single-store prices as market prices. |
| Chay cheaper than meat | Field notes: 17 to 38% cheaper | This analysis: only the Vissan pair (-38%) is high confidence; others -52% to +19% on low-confidence reads | Directionally supported for spring rolls; not established across categories. |

---

## Open questions and gaps (with the cheapest way to close each)

1. **Is any TVP extruded in Vietnam, and by whom?** Call Thanh Dũng (Thuận An, HCMC), An Nhiên/Phạm Gia Phát and Âu Lạc and ask where their TVP comes from; ask VMC Group (Phụ Gia Việt Mỹ) which TVP brands it sells. Buy consignee-level customs records for HS 2106.10 and 1109 from a trade-data vendor (for example Tradeimex or Volza) to name the importers.
2. **Protein content of conventional equivalents.** Photograph nutrition panels of Vissan giò lụa, giò thủ and chả giò thịt and Cầu Tre chả giò thịt on the next store visit. This enables price per gram of protein, chay versus meat.
3. **CJ Cầu Tre acquisition year and plant location; Vissan ownership; Ông Chà Và origin.** Check CJ CheilJedang press releases and the Vietnamese business registry (masothue / National Business Registration Portal); read the can label.
4. **Domestic mung bean production and prices.** NSO (GSO) statistical yearbook; MAE crop statistics.
5. **Where Vinamilk's pea protein comes from.** Vinamilk procurement or investor relations; customs HS 3504/2106 consignee data.
6. **Tàu hũ ky and mì căn import volumes.** Vietnamese customs 8-digit lines (for example 2106.90 sub-lines) via the General Department of Customs or a trade-data vendor.
7. **Lab verification.** Send 10 to 15 high-volume chay SKUs to a Vietnamese accredited lab (for example a NIFC or Quatest unit) for protein and moisture; label values here are unverified.
8. **Coverage of chay specialty shops and online.** A half-day visit to 3 or 4 dedicated chay stores in HCMC (Nguyễn Kiệm area near Âu Lạc) and a scrape of Shopee/Lazada chay listings would fill the small-maker gap.
9. **Chay market size by volume.** Not established; would need retailer data (Saigon Co.op, WinCommerce) or a market-research purchase.

Stopping note: the web search budget for this session ran out part way through the brand research (after about 15 searches by this agent). Remaining brand details (Xuân Hồng, Kashew, Deep Blue Island, GN Foods, Vissan ownership, CJ acquisition year) could not be searched and are marked unverified.

---

## Leads for the next wave

- **Food-grade soy from domestic crushers.** VAL (Phú Mỹ) and other crushers (for example the northern facility USDA mentions for MY2025/26) could supply food-grade defatted flakes for TVP. Check technical feasibility and interest.
- **Mung bean side streams.** Glass-noodle (miến, bún tàu) makers use mung bean starch; in China the protein-rich process water is recovered as mung bean protein [general]. Glass noodles appear in many chay fillings here. Map Vietnamese miến producers and their waste streams.
- **Okara (soy pulp) from Vinasoy, Vinamilk and tofu makers.** A large domestic by-product linked to the soy milk and tofu formats in this audit; fit for fermentation or fibre-protein ingredients.
- **Consignee-level trade data** for HS 2106.10, 1109 and 3504 to name importers and link them to chay brands.
- **Egg and dairy in "chay" products.** A regulatory and labelling lead for the regulation agent (definition of chay and thuần chay; allergen labelling).
- **Vietnamese R&D on extrusion** (for the R&D agent): which universities or institutes (for example HCMUT, Hanoi University of Science and Technology, FIRI) have extruders and have worked on textured soy or rice protein.
- **An Nhiên's Serbian SPC**: confirm supplier (believed Sojaprotein, Bečej) and whether other Vietnamese makers buy EU non-GMO soy protein, which would signal a non-GMO premium in the chay segment.

---

## Sources

- FORM-01. AltProtein Vietnam retail field audit, Nha Trang (6 Sep 2026) and HCMC (16 and 20 Sep 2026). Product log (186 SKUs), store log (11 stores) and collector notes, with collector OSINT links embedded per row. Field observations (primary data). Accessed 2026-09-23. Supports all SKU-level findings. Type: primary field data.
- FORM-02. World Bank WITS / UN Comtrade, "Vietnam Protein concentrates and textured protein subst imports by country, 2023" (HS 210610). https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/210610. Accessed 2026-09-23. Import values by partner; quantities imputed. Type: gov/statistics.
- FORM-03. World Bank WITS / UN Comtrade, "Vietnam Wheat gluten imports by country, 2023" (HS 110900). https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/110900. Accessed 2026-09-23. Gluten import values and origins. Type: gov/statistics.
- FORM-04. World Bank WITS / UN Comtrade, "Vietnam imports of HS 350400 (peptones and other protein substances) by country, 2023". https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/350400. Accessed 2026-09-23. SPI-inclusive code. Type: gov/statistics.
- FORM-05. World Bank WITS / UN Comtrade, "China Protein concentrates and textured protein subst exports by country, 2023" (HS 210610). https://wits.worldbank.org/trade/comtrade/en/country/CHN/year/2023/tradeflow/Exports/partner/ALL/product/210610. Accessed 2026-09-23. Mirror tonnage to Vietnam (7,957 t). Type: gov/statistics.
- FORM-06. World Bank WITS / UN Comtrade, "China exports of HS 350400 by country, 2023". https://wits.worldbank.org/trade/comtrade/en/country/CHN/year/2023/tradeflow/Exports/partner/ALL/product/350400. Accessed 2026-09-23. Mirror tonnage to Vietnam (10,028 t). Type: gov/statistics.
- FORM-07. World Bank WITS / UN Comtrade, "China Wheat gluten exports by country, 2023" (HS 110900). https://wits.worldbank.org/trade/comtrade/en/country/CHN/year/2023/tradeflow/Exports/partner/ALL/product/110900. Accessed 2026-09-23. Mirror tonnage to Vietnam (10,338 t). Type: gov/statistics.
- FORM-08. World Bank WITS / UN Comtrade, "Vietnam imports of HS 071331 (dried mung/black gram beans) by country, 2023". https://wits.worldbank.org/trade/comtrade/en/country/VNM/year/2023/tradeflow/Imports/partner/ALL/product/071331. Accessed 2026-09-23. Mung bean import dependence. Type: gov/statistics.
- FORM-09. USDA FAS GAIN, "Oilseeds and Products Annual, Vietnam" (VM2025-0011), USDA Post Hanoi, 2025. https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Oilseeds%20and%20Products%20Annual_Hanoi_Vietnam_VM2025-0011. Accessed 2026-09-23. Soybean production, imports, food use, origins (estimates). Type: gov/statistics.
- FORM-10. Dân Trí, "TPHCM có tổ hợp ép dầu đậu nành quy mô hàng đầu Đông Nam Á", 10 Dec 2025. https://dantri.com.vn/kinh-doanh/tphcm-co-to-hop-ep-dau-dau-nanh-quy-mo-hang-dau-dong-nam-a-20251210205324484.htm. Accessed 2026-09-23. VAL (Bunge-Wilmar) crush capacity 2.6 Mt/yr. Type: press.
- FORM-11. Phụ Gia Việt Mỹ (VMC Group), "Top 3 địa chỉ phân phối đạm đậu nành uy tín chính hãng". https://phugiavietmy.com/top-3-dia-chi-phan-phoi-dam-dau-nanh-uy-tin-chinh-hang/. Accessed 2026-09-23. China-origin SPI distribution; named distributors. Type: company.
- FORM-12. TDGIMEX, "Vital wheat gluten - gluten lúa mì - bột mì căn". https://tdgimex.com/vital-wheat-gluten-gluten-lua-mi-bot-mi-can/. Accessed 2026-09-23. China-origin gluten for mì căn. Type: company.
- FORM-13. VMC Group Đà Nẵng (hoachatdanang.vn), "Gluten lúa mì Xinrui (Trung Quốc) bao 25kg". https://hoachatdanang.vn/san-pham/gluten-lua-mi-xinrui-trung-quoc-bao-25kg-gia-tot/. Accessed 2026-09-23. China-origin gluten. Type: company.
- FORM-14. Nhân Dân, "Trăm năm làng nghề tàu hũ ky Mỹ Hòa", 20 Sep 2022. https://nhandan.vn/tram-nam-lang-nghe-tau-hu-ky-my-hoa-post715971.html. Accessed 2026-09-23. Tàu hũ ky craft village, imported soybeans. Type: press.
- FORM-15. An Nhiên Foods / Phạm Gia Phát, "About us". https://annhienfood.com.vn/pages/about-us-1. Accessed 2026-09-23. Legal entity, address, product lines, export claims. Type: company.
- FORM-16. An Nhiên Foods, "Sườn Non Chay Vegan Soy Pork Chops NON GMO". https://annhienfood.com.vn/products/suon-non-chay-vegan-soy-pork-chops. Accessed 2026-09-23. Ingredients, manufacturer. Type: company.
- FORM-17. Emart Mall, "Sườn Non Lát Chay An Nhiên 150G". https://emartmall.com.vn/index.php?route=product/product&product_id=20293. Accessed 2026-09-23. Ingredients, price VND 60,600. Type: retailer listing.
- FORM-18. Chaysach.com, "[150g] Gà viên chay An Nhiên". https://chaysach.com/san-pham/ga-vien-chay-an-nhien-goi-150g/. Accessed 2026-09-23. Alternative recipe listing. Type: retailer listing.
- FORM-19. AEON eShop, search "An Nhiên". https://aeoneshop.com/products/search/an%20nhi%C3%AAn. Accessed 2026-09-23. Current online prices for An Nhiên dried range. Type: retailer listing.
- FORM-20. Thực phẩm chay Âu Lạc, "Giới thiệu" and "Âu Lạc - Nguồn cung cấp thực phẩm chay hàng đầu Việt Nam". https://aulac-vegan.com/gioi-thieu/ ; https://aulac-vegan.com/au-lac-nguon-cung-cap-thuc-pham-chay-hang-dau-viet-nam/. Accessed 2026-09-23. Legal name, address, product lines. Type: company.
- FORM-21. Toplist.vn, "Top 5 công ty sản xuất thực phẩm chay hàng đầu Việt Nam". https://toplist.vn/top-list/cong-ty-san-xuat-thuc-pham-chay-hang-dau-viet-nam-50288.htm. Accessed 2026-09-23. Âu Lạc export claims; list of chay makers (Nutrigreenfood). Type: aggregator (low reliability).
- FORM-22. CJ Foods Vietnam, "Chả giò bánh rế chay đặc biệt". https://cjfoods.com.vn/product/cha-gio-banh-re-chay-dac-biet/. Accessed 2026-09-23. Ingredients, manufacturer. Type: company.
- FORM-23. CJ Foods Vietnam, "Há cảo chay". https://cjfoods.com.vn/product/ha-cao-chay/. Accessed 2026-09-23. Ingredients, manufacturer. Type: company.
- FORM-24. CJ Foods Vietnam homepage and "CJ Foods Việt Nam" page. https://cjfoods.com.vn/ ; https://cjfoods.com.vn/cj-foods-viet-nam/. Accessed 2026-09-23. Business unit of CJ CheilJedang; brand portfolio. Type: company.
- FORM-25. Vissan Mart, "Chả giò chay 500g". https://vissanmart.com/cha-gio-chay-500g.html. Accessed 2026-09-23. Ingredients, manufacturer address, price VND 45,500. Type: company.
- FORM-26. Thoại An, "Chả lụa ớt xiêm chay Thoại An 500g (đông lạnh)". https://thoaian.vn/san-pham/cha-lua-ot-xiem-chay-thoai-an-500g-dong-lanh/. Accessed 2026-09-23. Ingredients (gluten 35%, skim milk powder), legal entity, factory. Type: company.
- FORM-27. Cholimex Food, "Bánh bao chay 300g". https://cholimexfood.com.vn/banh-bao-chay-300g/. Accessed 2026-09-23. Ingredients, factory address. Type: company.
- FORM-28. LC Foods, "Chả giò chay rau nấm". https://lcfoods.vn/san-pham/cha-gio-chay-rau-nam. Accessed 2026-09-23. TVP granule 4-7 mm; factory address. Type: company.
- FORM-29. Co.op Online, "Bánh cuốn chay Co.op Select 290g". https://cooponline.vn/banh-cuon-chay-co-op-select-290g--s251008279. Accessed 2026-09-23. Ingredients, price. Type: retailer listing.
- FORM-30. Co.op Online, "Chả giò khoai mỡ Co.op Select 450g". https://cooponline.vn/cha-gio-khoai-mo-coop-select-450g--s250102526. Accessed 2026-09-23. Ingredients; Saigon Co.op named as manufacturer of record. Type: retailer listing.
- FORM-31. Sài Gòn Food JSC website. https://www.sgfoods.com.vn/. Accessed 2026-09-23. Legal name, factory address, Japanese partnerships. Type: company.
- FORM-32. AEON eShop, "Sài Gòn Food cơm chiên chay gạo lứt 200g". https://aeoneshop.com/product/24978/sai-gon-food-com-chien-chay-gao-lut-200g. Accessed 2026-09-23. Ingredients, price. Type: retailer listing.
- FORM-33. Quang Ngai Sugar JSC (QNS) website. https://qns.com.vn/. Accessed 2026-09-23. Vinasoy as QNS unit; VEYO brand. Type: company.
- FORM-34. Tân Sao Bắc Á Machinery Co., Ltd, "Dây chuyền sản xuất thực phẩm chay từ đậu nành". https://tansaobaca.com/day-chuyen-san-xuat/day-chuyen-san-xuat-thuc-pham-chay-tu-dau-nanh.html. Accessed 2026-09-23. Chinese extrusion lines sold in Vietnam. Type: company.
- FORM-35. Thực phẩm chay Thanh Dũng website. https://thucphamchaythanhdung.com/. Accessed 2026-09-23. Chay maker; imported raw materials; TVP listed. Type: company.
- FORM-36. Vietnam News Agency (VNA, vnanet), "ToFu House - Nuôi dưỡng và phát triển hạt đậu Việt", 27 Feb 2023. https://vietnam.vnanet.vn/vietnamese/long-form/tofu-house-nuoi-duong-va-phat-trien-hat-dau-viet-325017.html. Accessed 2026-09-23. Domestic tofu maker capacity and bean sourcing. Type: press (state news agency).
- FORM-37. Le Thi Hong Hao, Nguyen Hoang Anh, Nguyen Thi Giang et al. (2024). "Food safety knowledge and practices of vegetarian food processors in Hanoi in 2022-2023". Vietnam Journal of Food Control 7(1): 77-88. https://doi.org/10.47866/2615-9252/vjfc.4211. Accessed 2026-09-23 (abstract via Scite). 126 vegetarian food establishments surveyed in Hanoi. Type: peer-reviewed.
- FORM-38. Simple Foods, "137 Degrees Almond Milk Original". https://www.simplefoods.net/almondoriginal. Accessed 2026-09-23. Ingredients; brand site (country not stated on page). Type: company.
- FORM-39. Phụ Gia Việt Mỹ, "Ứng dụng đạm đậu nành trong sản xuất thực phẩm". https://phugiavietmy.com/ung-dung-dam-dau-nanh-trong-san-xuat-thuc-pham/. Accessed 2026-09-23. SPI applications in chay and meat products. Type: company.
