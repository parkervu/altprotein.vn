---
id: app-d3-retail-demand-signals
title: "D3. The retail audit re-read for demand"
short_title: "D3. Retail demand signals"
section: appendix
order: 43
summary: "What the September 2026 audit of 186 products in 11 stores says about demand, re-read for prices, the cost of a serving of protein, assortment and label claims. Mass stores carry almost no imported products, 20 g of protein from a vegetarian (chay) wrapper costs more than a whole street meal, and no chay food carries a protein claim."
audiences: [startups, manufacturers, research, investors, policy, international]
reading_time_min: 14
key_numbers: [kn-protein-cost-serving]
related_data: [retail_demand_signals.csv, retail_audit_skus.csv, protein_claim_eligibility.csv, marketplace_sku_counters.csv, kitchen_platform_counters.csv, plant_milk_sugar.csv]
related_pages: [app-s2-retail-audit, ch13-consumers, ch12-chay-baseline, ch15-channels, ch02-alt-protein-today, app-m3-demand-method]
charts: [chart-protein-cost-serving]
---
# D3. The retail audit re-read for demand

**What this appendix contains.** The September 2026 retail audit ([[app-s2-retail-audit]]) logged 186 products in 11 stores in Nha Trang (6 September) and Ho Chi Minh City (16 and 20 September) to study formulation. Here we re-read the same records for demand signals. Eight stores are mass modern retail (Lotte Mart, Co.opmart, GO!, WinMart, Emart) and three are premium or import-led (Annam Gourmet, Nam An Market, Moonmilk). The audit is a convenience sample of modern and premium stores, with no wet markets, chay shops, online-only brands or foodservice, so these are signals about the shelf, not measures of the market [@FORM-01] {VN-direct|Medium} {dx:revealed}. The first sales counters: 96 listings read on two online marketplaces and 185 on a kitchen supply platform and two specialist shops (section D3.3).

## D3.1 Six signals

1. **Two shelves, two markets.** Imported finished products are 3.6% of the 140 products logged in mass stores and 67% of the 46 in premium stores. Imported modern meat analogues appeared only in premium stores in Ho Chi Minh City; Nha Trang had none [@FORM-01] {VN-direct|Medium} {dx:revealed}. Modern plant-based products are an import-led premium niche; the mass shelf is Vietnamese chay, tofu and plant milk.
2. **Price points are low.** In mass stores the median pack costs VND 12,600 for tofu, VND 27,500 for plant milk, VND 45,500 for a frozen chay wrapper pack and VND 71,500 for a frozen chay meat analogue; in premium stores a frozen analogue pack costs a median VND 179,000 and a plant milk VND 94,900 [@FORM-01] {VN-direct|Medium} {dx:revealed}. For comparison, average household food and drink spending is about VND 43,700 per person per day (VND 1,310,000 a month in 2024, our division) [@DIE-05] {VN-direct|Medium} {dx:inferred}.
3. **Twenty grams of protein costs more than a meal.** The median cost of 20 g of protein is about VND 13,000 from tofu or dried textured soy, VND 56,000 from a frozen meat analogue, VND 60,000 from a ready meal, VND 74,000 from a filled chay wrapper and VND 91,000 from plant milk (our calculation on label protein). From eggs or chicken it is VND 7,000 to 9,000 and from lean pork about VND 14,000 ([[ch11-protein-diet]]). A street rice plate with meat costs VND 29,000 to 35,000 in Ho Chi Minh City [@FORM-01; @CHY-40] {VN-direct|Medium} {dx:inferred}.
4. **Protein is not sold, though much of the shelf could claim it.** Only two locally made products carry a protein claim in their name, both variants of Vinamilk's high-protein nut milk (5 g per 100 ml); no chay food does. Protein values could be captured for only 44% of mass-store products and 35% of premium-store products, a gap in capture as well as in labelling [@FORM-01] {VN-direct|Low} {dx:revealed}. Protein has had to appear on non-exempt pre-packaged labels since 1 January 2026 (Circular 29/2023, now Circular 30/2026), so the gap is mostly in capture and in small makers, who are exempt [@LBL-01; @LBL-02] {VN-direct|High} {dx:revealed}. Against the claim conditions of TCVN 14429:2025 (source 5 g, high 10 g per 100 g), 20 of 43 audited plant-protein foods with a label value (47%) already meet "source" and 7 (16%) meet "high", all seven frozen analogues; counting the per 100 kcal route, 27 of 38 and 13 of 38 do (our calculation; `protein_claim_eligibility.csv`) [@FORM-01; @LBL-03] {VN-direct|Medium} {dx:revealed}. A numeric protein claim is an open position on the chay shelf, not a regulatory problem.
5. **Chay on the pack is a religious and culinary word, not a vegan standard.** *Chay* appears in 87 of 186 product names. Of 64 chay-named products with a logged ingredient list, at least 23 (36%) name onion, garlic, shallot or leek, which strict Buddhist cooking avoids, and at least 3 (5%) name egg or dairy (our keyword search, a lower bound) [@FORM-01] {VN-direct|Medium} {dx:inferred}. Mass-market chay follows lay practice; strict buyers need labelled variants.
6. **Plant milk spans a four-fold price ladder.** Mass soy milk sells at about VND 22,900 per litre, below cow milk; Vinamilk's high-protein nut milk at about VND 87,000; imported oat, almond and nut milks at a median VND 94,900 in premium stores [@FORM-01; @CON-35] {VN-direct|High} {dx:revealed}. The mass price point, not the premium one, is where plant milk became Vietnam's modern plant-protein category at scale ([[ch13-consumers]]). If the sugary-drink excise reaches sweetened soy milk from 2027, mass soy milk would be about VND 25,200 per litre in 2028, still below cow milk (our calculation) [@FTR-01; @FTR-18; @CON-35] {VN-direct|Low} {dx:inferred}.

{{chart:chart-protein-cost-serving}}

## D3.2 The signals in figures

Generated from `retail_demand_signals.csv`.

| Topic | Metric | Segment | Value | Unit | n | Notes | Source |
|---|---|---|---|---|---|---|---|
| assortment | SKUs logged | mass stores (8) | 140 | SKUs | 140 | Lotte Mart, Co.opmart, GO!, WinMart, Emart in Nha Trang and Ho Chi Minh City; convenience sample. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| assortment | SKUs logged | premium stores (3) | 46 | SKUs | 46 | Annam Gourmet, Nam An Market, Moonmilk; convenience sample. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| assortment | Share of SKUs that are imported finished products | mass stores | 3.6 | % | 140 | 5 of 140 SKUs; origin as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| assortment | Share of SKUs that are imported finished products | premium stores | 67.4 | % | 46 | 31 of 46 SKUs; origin as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | tofu; mass stores | 12600 | VND per pack | 8 | Range 9,900 to 19,500. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | plant milk; mass stores | 27500 | VND per pack | 31 | Range 3,700 to 133,500. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | plant milk; premium stores | 94900 | VND per pack | 14 | Range 14,000 to 158,900. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | plant yoghurt/creamer; mass stores | 38800 | VND per pack | 7 | Range 10,000 to 41,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | dumpling/spring roll/bun with vegetable filling; mass stores | 45500 | VND per pack | 39 | Range 27,900 to 65,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | dumpling/spring roll/bun with vegetable filling; premium stores | 85000 | VND per pack | 3 | Range 38,900 to 92,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | dried TVP/soy chunks; mass stores | 49000 | VND per pack | 5 | Range 49,000 to 75,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | ready meal; mass stores | 46400 | VND per pack | 6 | Range 25,000 to 72,900. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | canned analogue; mass stores | 57000 | VND per pack | 9 | Range 15,100 to 76,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | frozen meat/seafood analogue; mass stores | 71500 | VND per pack | 17 | Range 41,800 to 136,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | frozen meat/seafood analogue; premium stores | 179000 | VND per pack | 2 | Range 179,000 to 179,000. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | vegan cheese/spread; premium stores | 156600 | VND per pack | 9 | Range 89,900 to 249,900. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | protein powder; premium stores | 875900 | VND per pack | 4 | Range 309,900 to 1,439,900. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Median pack price | snack/jerky; premium stores | 32900 | VND per pack | 5 | Range 32,900 to 32,900. Shelf or online price as logged. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| protein cost | Median cost of 20 g of protein | tofu | 13300 | VND per 20 g protein | 5 | Our calculation: price per 100 g protein divided by 5; label protein. Range 7,834 to 24,211. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | plant milk | 91200 | VND per 20 g protein | 8 | Our calculation: price per 100 g protein divided by 5; label protein. Range 18,332 to 288,889. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | plant yoghurt/creamer | 105800 | VND per 20 g protein | 7 | Our calculation: price per 100 g protein divided by 5; label protein. Range 31,250 to 125,625. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | dumpling/spring roll/bun with vegetable filling | 73800 | VND per 20 g protein | 18 | Our calculation: price per 100 g protein divided by 5; label protein. Range 31,111 to 345,528. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | dried TVP/soy chunks | 12900 | VND per 20 g protein | 4 | Our calculation: price per 100 g protein divided by 5; label protein. Range 9,795 to 17,011. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | ready meal | 59500 | VND per 20 g protein | 3 | Our calculation: price per 100 g protein divided by 5; label protein. Range 58,095 to 76,667. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | canned analogue | 64200 | VND per 20 g protein | 2 | Our calculation: price per 100 g protein divided by 5; label protein. Range 44,741 to 83,700. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | frozen meat/seafood analogue | 55700 | VND per 20 g protein | 9 | Our calculation: price per 100 g protein divided by 5; label protein. Range 13,198 to 124,306. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | vegan cheese/spread | 175200 | VND per 20 g protein | 2 | Our calculation: price per 100 g protein divided by 5; label protein. Range 171,821 to 178,497. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| protein cost | Median cost of 20 g of protein | protein powder | 71900 | VND per 20 g protein | 4 | Our calculation: price per 100 g protein divided by 5; label protein. Range 68,606 to 73,127. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| label | SKUs with chay in the product name | all stores | 87 | SKUs | 186 | 47% of 186 SKUs. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| label | Chay-named SKUs whose ingredient list names an allium (onion, garlic, shallot, leek) | chay-named SKUs with an ingredient list | 35.9 | % | 64 | 23 of 64; our keyword search of the logged key ingredients, which may be incomplete, so this is a lower bound. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| label | Chay-named SKUs whose ingredient list names egg or dairy | chay-named SKUs with an ingredient list | 4.7 | % | 64 | 3 of 64; our keyword search; lower bound. | [@FORM-01] {VN-direct\|Medium} {dx:inferred} |
| label | Share of SKUs with a protein value captured | mass stores | 44.3 | % | 140 | Protein value from label or collector lookup; a gap in capture, not only in labelling. | [@FORM-01] {VN-direct\|Low} {dx:revealed} |
| label | Share of SKUs with a protein value captured | premium stores | 34.8 | % | 46 | As above. | [@FORM-01] {VN-direct\|Low} {dx:revealed} |
| label | Locally made foods or drinks with a protein claim in the product name | all stores | 2 | SKUs | 186 | Only Vinamilk Sữa Hạt Cao Đạm (high-protein nut milk, 5 g per 100 ml), in two variants. No chay food carried a protein claim in its name. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Same-brand chay versus meat price difference, high-confidence pair | Vissan chả giò rế | -37.9 | % per 100 g | 1 | Chay cheaper than meat version; four other pairs rest on low-confidence reads (range -51.9% to +18.5%). | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| price point | Plant milk shelf price, mass soy milk (Fami) | mass stores | 22900 | VND per litre | 2 | Below cow milk (about VND 33,000 to 45,000 per litre in 2023, CON-35). | [@FORM-01; @CON-35] {VN-direct\|High} {dx:revealed} |
| price point | Plant milk shelf price, imported oat, almond and nut milks | premium stores mostly | 94900 | VND per litre | 13 | Range 58,000 to 158,900; two to four times cow milk. | [@FORM-01] {VN-direct\|High} {dx:revealed} |
| price point | High-protein nut milk (Vinamilk, 5 g protein per 100 ml) | mass stores | 87200 | VND per litre | 2 | The only mass-market plant product sold on protein content. | [@FORM-01] {VN-direct\|High} {dx:revealed} |
| assortment | Imported modern meat analogues logged | Nha Trang | 0 | SKUs | 84 | Imported frozen meat or seafood analogues; Nha Trang had none, Ho Chi Minh City had them only in premium stores. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |
| assortment | Imported modern meat analogues logged | Ho Chi Minh City | 2 | SKUs | 102 | Imported frozen meat or seafood analogues; Nha Trang had none, Ho Chi Minh City had them only in premium stores. | [@FORM-01] {VN-direct\|Medium} {dx:revealed} |

Two rows of the table overstate what some buyers pay (these notes are not in `retail_demand_signals.csv`):

- **Dried textured soy (VND 12,900 per 20 g of protein, store packs).** Online, 1 kg bags of dry soy-and-gluten pieces cost VND 59,000 to 158,680 per kg, about VND 1,800 to 6,000 per 20 g of protein on a borrowed label range of 53.3 to 66.7 g per 100 g; a 150 g branded pack online costs VND 12,600 to 15,800 per 20 g, like the store median (our calculation) [@MKT-03; @FORM-01] {VN-direct|Low} {dx:inferred}. Bulk format, not the product, makes dried textured soy the cheapest protein in Vietnam's retail data.
- **Protein powder (VND 71,900 per 20 g, premium stores, n = 4).** At a sports-nutrition chain (WheyShop), whey costs VND 20,800 to 35,000 and plant powders VND 36,000 to 54,800 per 20 g of protein (5 products with protein facts), and plant powders are 2 of 25 protein powders listed [@ECR-08; @FORM-01] {VN-direct|Low} {dx:revealed}. On Lazada, seven plant powder listings show 7,294 sales against 5,455 for six whey listings, and the top plant listing, a Vietnamese-made pea and nut powder, costs about VND 14,600 per 20 g of protein, below imported whey (our calculation) [@MKT-03; @MKT-04; @ECR-08] {VN-direct|Low} {dx:revealed}. The premium-store median overstates what gym users pay.

## D3.3 Sales counters online and in kitchens

Shops in Vietnam show *đã bán* (units sold) counters. They are cumulative with no start date, so newer listings are understated, and rows come from the first page of targeted searches, so sums are orders of magnitude, not market shares. In a logged-out browser Lazada and Tiki show counters; Shopee requires a login and TikTok Shop a CAPTCHA, so those two, the largest platforms, stay unread [@MKT-01; @MKT-02; @MKT-03; @MKT-05] {VN-direct|High} {dx:revealed}. The kitchen counters come from Kamereo, a business-to-business platform supplying restaurants and cafés [@ECR-06] {VN-direct|Low} {dx:revealed}. Rows: `marketplace_sku_counters.csv` (96 listings, 25 September 2026) and `kitchen_platform_counters.csv` (185 listings, September 2026).

| Signal | Consumer marketplaces (Lazada, Tiki) | Kitchen platform (Kamereo) | Source |
|---|---|---|---|
| Plant milk against dairy | Best-selling plant milk SKU sells 60% (Lazada) and 79% (Tiki) of the litres of the best-selling dairy SKU | Plant milks about 4% of 899,000 milk litres and 1.5 to 2.1% of milk protein | [@MKT-03; @MKT-05; @ECR-06] {VN-direct\|Low} {dx:revealed} |
| Leading plant milk | Domestic nut milk (Lazada) and soy milk (Tiki); imported oat under 2% of plant-milk litres read | Imported Oatside oat milk, bought for coffee (36% of plant-milk litres) | [@MKT-03; @MKT-05; @ECR-06] {VN-direct\|Low} {dx:revealed} |
| High-protein nut milk (Vinamilk, 5 g per 100 ml) | About 16,100 cases (about 70,300 L, 3.5 t of protein) at Vinamilk's Lazada store; about 11% of its nut-milk litres read but 29% of their protein; 24% dearer per litre, about 37% of the cost per gram of protein | Not listed | [@MKT-03; @MKT-04] {VN-direct\|Low} {dx:revealed} |
| Protein-claimed soy milk (GoldSoy, 3.2 g per 100 ml) | 3,100 cases against 14,800 for an unclaimed walnut soy milk at 2.0 g in the same store, although GoldSoy is 39% cheaper per litre | 2,609 units against 5,758 and 5,828 for two dearer unclaimed soy milks | [@MKT-03; @ECR-06] {VN-direct\|Low} {dx:revealed} |
| Imported plant-based meat | None listed; searches for *thịt thực vật* (plant meat) and "meat zero" returned pork | Eight Meat Zero listings, 386 units (80 kg) in all, not orderable | [@MKT-03; @ECR-06; @AIS-25] {VN-direct\|Low} {dx:revealed} |
| Dry chay soy-and-gluten pieces | About 40,700 kg dry on Lazada, 82% from one small shop; official stores under 1% of these sales | 240 kg | [@MKT-03; @MKT-04; @ECR-06] {VN-direct\|Low} {dx:revealed} |
| Frozen chay and chay *giò* (meat-style loaf) | Hundreds of kilograms per listing at most; one chay *giò lụa* 11 packs; no chay listing carries a numeric protein claim | Vissan chay spring roll 0 units | [@MKT-03; @ECR-06] {VN-direct\|Low} {dx:revealed} |
| Fresh tofu | Not a marketplace product | About 80,800 kg across 32 listings | [@MKT-03; @MKT-05; @ECR-06] {VN-direct\|Low} {dx:revealed} |
| Who sells | Official or LazMall stores take 93 to 100% of milk units read but under 1% of dry chay piece sales | Platform-run | [@MKT-03; @MKT-05] {VN-direct\|Low} {dx:revealed} |

Three readings follow (our inference) {VN-direct|Low} {dx:inferred}. Plant milk is a mainstream household purchase online, sold through incumbents' official stores. Protein sells in that aisle only as a premium niche inside an incumbent's range, and a protein claim alone did not lift soy milk in either channel. And the chay product households buy online in bulk is the dry textured piece, an ingredient-like product made by small shops, which fits an ingredient route better than a branded analogue. A second read of the same listings a month later would turn the counters into monthly rates ([[ch13-consumers]], [[ch15-channels]]).

## D3.4 What a second audit round should add

- Wet markets, dedicated chay shops and pagoda-adjacent stalls, where most chay is bought.
- Meat equivalents with label protein for every chay product logged, so that price per gram of protein can be compared pair by pair.
- A repeat visit before and during the 7th lunar month, to measure the calendar spike on the shelf.
- Da Nang and Hanoi, to test the north and south difference in tofu and chay reported in [[ch11-protein-diet]] and [[ch12-chay-baseline]].
- Online small makers. Lazada and Tiki can be read in a logged-out browser (section D3.3), which partly closes the small-maker gap for dry chay goods on Lazada; Shopee needs a login and TikTok Shop a CAPTCHA, so reading them needs a person with an account or a paid report, and a repeat read of the same listings is needed to turn counters into rates [@MKT-01; @MKT-02; @MKT-03] {VN-direct|High} {dx:revealed}.
- The makers behind the online dry chay pieces (no listing names the maker or the origin of its soy protein), a named buyer group for a domestic textured protein [@MKT-04] {VN-direct|Low} {dx:revealed}.

**Related:** [[app-s2-retail-audit]], [[ch13-consumers]], [[ch12-chay-baseline]].
