# Marketplace sales counters through the browser: what Lazada and Tiki show

Line: W9-L3 Marketplace sales counters through the browser, a retry of wave 8 L5 (wave 9). Source prefix: MKT. Date: 25 September 2026.

## Verdict

A logged-out desktop browser can read two of the four marketplaces. Lazada and Tiki show *đã bán* (units sold) counters, sellers and review counts; Shopee sends search and product pages to a login wall, and TikTok Shop shows a puzzle CAPTCHA, so we stopped there. The 96 SKUs we read agree with Part VI and sharpen two points. The best-selling domestic nut and soy milk SKUs sell 60 to 79% of the litres of the best-selling dairy SKUs, and Vinamilk's high-protein nut milk sells as a premium niche, about one-eighth of the standard line by litres. The *chay* (Buddhist vegetarian) product online shoppers buy in bulk is dry textured soy-and-gluten pieces from small shops, while imported analogues, chay *giò* (steamed meat-style loaf) and fresh tofu are absent or barely sell. Nothing here changes a Part VI conclusion, a play score or the benchmark path. Yield class: **added a candidate or route** (minor: an online small-maker buyer group for T1, and purchase evidence for the protein signal in ch23 and TPP-05), with a **clean negative** on Shopee and TikTok Shop. Further desk work on marketplace counters would be noise, except one repeat read to turn counters into rates.

## Headline findings

1. **Two of four marketplaces can be read logged out in a browser.** Lazada and Tiki load listings with unit-sales counters, seller names, official-store flags and review counts; Shopee redirects search and product pages to "Login Required"; TikTok Shop shows "drag the puzzle piece into place". We did not log in or attempt either check [VN-direct, High, MKT-01; MKT-02; MKT-03; MKT-05, revealed].
2. **Online, the top plant milk SKUs sell close to the top dairy SKUs.** The best-selling plant milk SKU sells 60% of the litres of the best-selling dairy SKU on Lazada (Vinamilk 9-nut milk, 383,616 L, against Vinamilk 100% UHT milk, 643,200 L) and 79% on Tiki (Fami soy milk, 200,556 L, against Dutch Lady, 252,469 L). In the kitchen channel the figure is about 3% (our calculation on cumulative counters) [VN-direct, Low, MKT-03; MKT-05; ECR-06, revealed].
3. **Domestic nut and soy milks lead; imported oat milk does not.** Oat milk is 1.9% of the plant-milk litres read on Lazada, although the barista version is the oat best seller, as in cafés (our calculation) [VN-direct, Low, MKT-03, revealed].
4. **High-protein nut milk sells, as a niche.** Vinamilk's *Sữa Hạt Cao Đạm* (high-protein nut milk, 5 g per 100 ml, mainly pea protein) shows about 16,100 cases, about 70,300 L and 3.5 t of protein, at Vinamilk's Lazada store. That is 10.9% of Vinamilk nut-milk litres read but 28.9% of their protein. It costs 24% more per litre and about 37% as much per gram of protein as the 9-nut milk (our calculation) [VN-direct, Low, MKT-03; MKT-04; MKT-06, revealed].
5. **A protein claim does not lift soy milk.** Vinamilk's GoldSoy unsweetened soy milk, "up to 3.2 g protein per 100 ml" on its page, shows 3,100 cases (37,200 L) against 14,800 cases (127,872 L) for Vinamilk's walnut soy milk at 2.0 g, although GoldSoy costs 39% less per litre. The kitchen channel showed the same (ECR-06). GoldSoy, the unnamed maker in wave 8, is a Vinamilk brand [VN-direct, Low, MKT-03; MKT-04; MKT-05; ECR-06, revealed].
6. **Dry textured soy-and-gluten pieces are the chay product households buy online in bulk.** Nine listings of *sườn non chay* (vegetarian "ribs") and similar dry pieces show about 40,700 kg sold, 82% from one shop (Tam Phat); ingredients are soy protein and vital wheat gluten. On a borrowed label range that is 22 to 27 t of protein, and 1 kg bags cost VND 1,800 to 6,000 per 20 g of protein (our calculation) [VN-direct, Low, MKT-03; MKT-04; FORM-01, revealed].
7. **Frozen chay foods sell in hundreds of kilograms; chay *giò* and analogues barely sell.** Frozen and chilled chay loaves and sausages show 397 to 1,100 units per listing; Au Lac's chay *giò lụa* (steamed loaf) 11 packs. No Meat Zero, Beyond or Omni listing appeared; searches for *thịt thực vật* (plant meat) and "meat zero" returned pork [VN-direct, Low, MKT-03, revealed].
8. **Fresh tofu is not a marketplace product.** Neither Lazada nor Tiki lists fresh soy tofu with sales; *đậu hũ* searches return fish tofu, soybeans and dried tofu skin (111 kg) [VN-direct, Low, MKT-03; MKT-05, revealed].
9. **Milks are an incumbents' channel; chay dry goods are a small-maker channel.** On Lazada, official or LazMall stores account for 93 to 100% of the plant and dairy milk units read, but under 1% of dry chay piece sales and 19% of frozen chay sales (our calculation) [VN-direct, Low, MKT-03; MKT-05, revealed].
10. **Plant protein powders are not a fringe on Lazada.** Seven plant powder listings show 7,294 sales against 5,455 for six whey listings; the top plant listing is a Vietnamese-made pea and nut powder at about VND 14,600 per 20 g of protein, below imported whey at a gym chain (VND 20,800 to 35,000, ECR-08) (our calculation) [VN-direct, Low, MKT-03; MKT-04; ECR-08, revealed].

## 1. Method and reach

We read wave 8 L5 (the fetch-tool attempt, ECR-01 to ECR-16), ch23, TPP-02 and TPP-05, the T1 and T10 rows of `play_demand_check.csv`, `buyer_map.csv` and the retail audit (FORM-01). We opened one browser tab, searched each marketplace with its own search box or listing address, and read what the page itself loaded, including the listing data the page requests. Requests were spaced 2 to 4 seconds apart. We used a general search engine once, to find Shopee product addresses. We did not log in, create accounts, solve checks or download files.

| Platform | Logged-out result | Counter | Other fields | Coverage | Sources |
|---|---|---|---|---|---|
| Shopee | "Login Required" on search and product pages; Mall landing shows banners only | not visible | none | none | MKT-01 |
| Lazada and LazMall | listings and product pages load; no captcha met in 21 searches and 6 product pages | per listing, cumulative, rounded above 1,000 (for example 88.8K) | seller, LazMall badge, rating, reviews; store panel on product pages | milks, protein powders, chay dry and frozen foods, processed meat | MKT-03; MKT-04 |
| Tiki | search loads; queries with *sữa hạt* (nut milk) redirect to an empty category page, but the search data return items | per listing, exact, cumulative | seller, official flag, rating, reviews | shelf-stable milks only; no chay foods, tofu, sausages or *giò* | MKT-05; MKT-06 |
| TikTok Shop | "Security Check: drag the puzzle piece into place" | not visible | none | none | MKT-02 |
| Google search | snippets of Shopee listings show price and a rating count, not units sold | not applicable | rating count | one product | MKT-07 |
| Bing search | "please solve the challenge" | not applicable | none | none | MKT-08 |

**The Shopee snippets.** Google's results for Vinamilk's Cao Dam show rating counts of 31,119, 8,149 and 3,196 on three Shopee listings, against 4,165, 745 and 130 reviews for the same three packs on Lazada [VN-direct, Low, MKT-07; MKT-03, revealed]. This suggests Shopee sells several times Lazada's volume of this product, in line with Metric's platform shares (ECR-02). It is snippet-only evidence. Harvesting snippets systematically would read Shopee round its login wall, so we did not.

**What we collected.** 96 SKUs with counters: 70 on Lazada and 26 on Tiki, in `data_marketplace_sku_counters.csv`. They cover plant milks (soy, nut and oat; high-protein and standard), dairy milk, chay dry and frozen foods, the one listing sold as plant meat, dried tofu skin, sausages, *giò lụa* and *chả lụa* (pork loaves), and whey and plant protein powders. For each we record units sold, price, pack size, protein per 100 g or 100 ml where a page or the audit gives it, rating, reviews, seller and official status. We excluded one Lazada listing (seller "lzdvntest8", English name, 116.7K with an asterisk) as a likely test or mirror listing.

## 2. Plant milk against dairy

Sums of cumulative counters of the SKUs read (our calculation; not market shares, because the rows come from targeted searches):

| Platform | Group | SKUs | Units | Litres | Best seller (units) | Official or first-party share of units |
|---|---|---|---|---|---|---|
| Lazada | nut milk, standard | 6 | 122,108 | 577,860 | Vinamilk 9-nut, reduced sugar, 24 x 180 ml (88,800) | 93% |
| Lazada | nut milk, high protein | 3 | 16,129 | 70,295 | Vinamilk Cao Dam, reduced sugar (12,300) | 100% |
| Lazada | soy milk | 10 | 41,461 | 439,428 | Vinamilk walnut soy, 48 x 180 ml (14,800) | 100% |
| Lazada | oat milk | 5 | 4,938 | 20,886 | Oatside Barista, 6 x 1 L (2,600) | 95% |
| Lazada | dairy UHT milk | 5 | 171,000 | 1,555,056 | Vinamilk Green Farm, 48 x 180 ml (71,000) | 100% |
| Tiki | soy milk | 11 | 98,637 | 742,365 | Fami original, 36 x 200 ml (27,855) | 100% |
| Tiki | nut milk (standard and high protein) | 6 | 5,221 | 12,087 | Almond Breeze unsweetened 946 ml (2,195) | 40% |
| Tiki | oat milk | 2 | 155 | 886 | Oatside Barista, 6 x 1 L (82) | 100% |
| Tiki | dairy UHT milk | 5 | 32,996 | 284,179 | Dutch Lady sweetened, 48 x 180 ml (29,221) | 100% |

Sources: MKT-03; MKT-05. Tiki Trading, Tiki's own retail arm, counts as first-party.

- **Plant milk is a mainstream household purchase online.** The top plant SKU reaches 60% (Lazada) and 79% (Tiki) of the top dairy SKU's litres, against about 3% in the kitchen channel (ECR-06). A mother-and-baby chain showed the same pattern: Vinamilk's 9-nut milk was second only to a TH dairy milk (ECR-07) [VN-direct, Low, MKT-03; MKT-05; ECR-06; ECR-07, revealed].
- **Each platform has its own leader.** Tiki's soy milk is almost all Vinasoy Fami (one SKU at 27,855 cases); on Lazada, Vinasoy's store peaks at 1,600 and Vinamilk leads. Platform deals, not consumer preference, set these shares, so neither is a brand share [VN-direct, Low, MKT-03; MKT-05, revealed].
- **Households do not buy oat milk the way cafés do.** Oat is 1.9% of plant litres read on Lazada; Oatside's barista pack is its best seller, which fits café and home-coffee use [VN-direct, Low, MKT-03, revealed].
- **The store panel hints at repeat buying.** Vinamilk's Lazada store reports 4.5 million units sold, 4,800 returning customers and a 44% repurchase rate across all its products [VN-direct, Low, MKT-04, revealed]. This is store-level, not a plant-milk repeat rate.

## 3. Do protein-claimed products outsell others?

| Test | Platform | Claimed product | Comparator | Claimed share of the pair's litres | Price per litre (claimed; comparator) | VND per 20 g protein (claimed; comparator) | Reading |
|---|---|---|---|---|---|---|---|
| High-protein against standard nut milk, same brand and store | Lazada | Cao Dam, 5.0 g | 9-nut, 1.5 g | 10.9% (28.9% of protein) | 82,026; 66,150 | 32,810; 88,200 | sells, as a niche; does not outsell |
| Same pair | Tiki | Cao Dam | 9-nut | 4.7% | 83,565; 67,361 | 33,426; 89,815 | newer listings, small counts |
| Protein-claimed against leading unclaimed soy milk, same store | Lazada | GoldSoy unsweetened, 3.2 g | Vinamilk walnut soy, 2.0 g | 22.5% | 23,867; 39,102 | 14,917; 39,102 | claim does not lift sales |
| Same, against channel leader | Tiki | GoldSoy unsweetened | Fami original, 1.9 g | 3.1% | 24,333; 21,944 | 15,208; 23,099 | Fami dominates |
| Protein-claimed sausage against unclaimed | Lazada | Bibizan "Protein Cao" chicken sausage | CP Vealz and Winner | about 1% of units | not comparable | not stated | claim does not lift sales |
| Plant against whey powder | Lazada | 7 plant listings | 6 whey listings | 57% of units | not comparable | 14,629 (AFIT); whey 20,800 to 35,000 at WheyShop (ECR-08) | plant is a real niche |

Sources: MKT-03 to MKT-06; BUY-16; FORM-01; ECR-06; ECR-08. Protein values: Cao Dam 9 g per 180 ml (page); 9-nut 1.5 g, basis not printed but consistent with per 100 ml; GoldSoy "up to 3.2 g per 100 ml"; walnut soy and Fami from the retail audit labels. All ratios and prices per gram are our calculations. Full rows in `data_protein_claim_tests.csv`.

- **The protein signal in ch23 is now visible in purchases.** Cao Dam has sold about 70,300 L at one store on one platform, and Shopee rating counts suggest several times more there. It is a premium niche inside Vinamilk's range: newer, dearer per litre, much cheaper per gram of protein, and far behind the standard line in volume [VN-direct, Low, MKT-03; MKT-04; MKT-07, revealed].
- **The cumulative counters understate newer products.** Cao Dam's main listing is newer than the main 9-nut listing on both platforms (higher item numbers), so its current share of sales is probably above 10.9% of litres (our inference) [VN-direct, Low, MKT-03; MKT-05, inferred]. One repeat read a month later would settle this.
- **GoldSoy unsweetened outsells GoldSoy sweetened five to one** on Lazada (3,100 against 613) and Tiki (542 against 101), and three to one on Kamereo. That is a sugar difference, not a protein test. In the same Lazada store the reduced-sugar versions of 9-nut milk and Cao Dam outsell their unsweetened versions (88,800 against 4,200; 12,300 against 3,400), so households do not simply prefer unsweetened [VN-direct, Low, MKT-03; MKT-05; ECR-06, revealed].

## 4. Chay foods, analogues, tofu and meat

| Group (Lazada) | SKUs | Units | kg | Best seller (units) | Sold by |
|---|---|---|---|---|---|
| Dry textured soy and gluten pieces | 9 | 34,426 | 40,746 dry | Tam Phat *sườn non chay* 1 kg (19,200) | small specialist shops; one An Nhien official listing (212) |
| Frozen, chilled and ready-to-eat chay | 6 | 6,934 | 3,558 | Anh Duong chay braised "pork" 200 g (2,900) | small shops; Cau Tre (CJ) spring rolls via CJ Market (1,300) |
| Chay *giò* and mince (Au Lac) | 2 | 24 | 16 | chay beef *giò lụa* 250 g (11) | reseller |
| Modern plant-based meat analogue | 1 | 90 | not stated | "high-protein plant meat, shreddable" (90, no rating) | general-goods shop |
| Tofu (dried skin only) | 1 | 111 | 111 | dried tofu skin 1 kg | small shop |
| Processed meat (CP, Masan, Bibizan) | 6 | 40,580 | 4,808 (excluding two listings with no weight) | Masan Ponnie sausage (30,700) | official stores (99%) |

Sources: MKT-03; MKT-04. Tiki lists none of these groups (MKT-05).

- **The dry pieces are T1's product, bought by households and small eateries.** Tam Phat's page lists soy protein, water, vital wheat gluten, corn starch, wheat fibre and salt, soaked before use. Packs of 2 and 3 kg and a "wholesale" seller (Thien Duc) suggest small eateries buy too (our inference). No page names the maker or the soy protein's origin [VN-direct, Low, MKT-03; MKT-04, revealed].
- **Bulk bags make this the cheapest protein in the retail data.** 1 kg bags at VND 59,000 to 158,680 give about VND 1,800 to 6,000 per 20 g of protein on the borrowed range of 53.3 to 66.7 g per 100 g; An Nhien's 150 g pack online gives VND 12,600 to 15,800, close to the audit median of VND 12,900 for store packs (our calculation) [VN-direct, Low, MKT-03; FORM-01, inferred]. The borrowed protein value is the weak link.
- **Kitchens and households split.** On Kamereo the dry pieces sold 240 kg and sausages 9,395 kg (ECR-06). On Lazada the dry pieces sold about 40,700 kg, about ten times CP's two 500 g sausage listings by weight (4,150 kg), though dry and fresh weights are not comparable [VN-direct, Low, MKT-03; ECR-06, revealed].
- **Frozen chay and chay *giò* sell little.** TPP-02's formats (*chả*, *giò*, spring rolls) sell hundreds of kilograms per listing at most, and no chay listing carries a numeric protein claim [VN-direct, Low, MKT-03, revealed].
- **CP's pork *giò lụa* shows 1,100 packs (275 kg)**, so meat *giò* does sell modestly online, unlike in the kitchen channel (7 units, ECR-06) [VN-direct, Low, MKT-03; ECR-06, revealed].

## 5. Comparison with wave 8's kitchen counters

| Question | Kitchen channel (Kamereo, ECR-06) | Consumer marketplaces (this line) |
|---|---|---|
| Plant against dairy milk | plant about 4% of litres; top plant SKU about 3% of top dairy | top plant SKU 60 to 79% of top dairy |
| Leading plant milk | imported oat for coffee | domestic nut (Lazada) and soy (Tiki) |
| Protein-claimed soy milk | GoldSoy *giàu đạm* (high in protein) below unclaimed rivals | GoldSoy below walnut soy milk |
| High-protein nut milk | not listed | about 70,300 L, one-eighth of the standard line |
| Imported analogue | Meat Zero 80 kg | none listed |
| Dry chay pieces | 240 kg | about 40,700 kg |
| Fresh tofu | about 80,800 kg | none |

Full rows in `data_channel_comparison.csv`. The two channels agree on the direction Part VI takes: protein arrives inside familiar, cheap, incumbent or ingredient-like products; analogues do not move; a protein claim alone does not sell. They differ on who buys plant milk.

## 6. Does this change Part VI?

- **ch23 (consumers).** No change to the conclusion. It strengthens two statements in 23.5 with revealed purchases: plant milk is the category that sells (now shown in household purchases, close to dairy scale), and protein content is starting to sell in this aisle (now shown as Cao Dam's sales, with the qualifier that it is a premium niche and that a protein claim did not lift soy milk). Wave 8's proposed "kitchens do not show it yet" note should be replaced by the combined reading.
- **TPP-02 (higher-protein chay foods).** No change. Online data cannot test a numeric claim because no chay listing carries one. They show that the formats TPP-02 targets sell little online, while the dry ingredient sells in tonnes, which fits T1's lead rather than challenging TPP-02.
- **TPP-05 and T10 (non-soy isolate for plant milks).** No change to the profile or the score. The revealed evidence gains a purchase figure: Vinamilk's pea-based high-protein nut milk has sold about 3.5 t of protein at one Lazada store. A small, new buyer group appears in Vietnamese plant protein powder brands that use pea protein (AFIT); it is too small to matter for T10's score.
- **T1 (domestic textured plant protein).** Not in the brief's list, but the line touches it: small online chay shops selling dry soy-and-gluten pieces are a named buyer group not in `buyer_map.csv`.
- **ch25 (channels).** A weak qualifier to wave 8's proposal: e-commerce is an incumbents' channel for milks, but a small-maker channel for chay dry goods.

## What this changes in the package

| where (page and section or data file) | current text or value | proposed change | evidence | strength |
|---|---|---|---|---|
| ch23-consumers, 23.5, "Plant milk did not succeed on protein" | The rise of a high-protein nut milk (5 g per 100 ml, Vinamilk) and of searches for it is the first sign that protein content itself now sells in this aisle | Keep, and add: at Vinamilk's Lazada store the high-protein nut milk shows about 16,100 cases (about 70,300 L, 3.5 t of protein) sold, one-eighth of the standard 9-nut milk by litres but 29% of its protein; it costs 24% more per litre and about 37% as much per gram of protein. Protein sells as a premium niche, not the volume line; a protein claim on soy milk (GoldSoy, 3.2 g per 100 ml) did not lift sales in consumer or kitchen channels. Replaces wave 8's kitchen-only caveat | MKT-03; MKT-04; MKT-05; ECR-06 | moderate |
| ch23-consumers, 23.5, "Plant milk is the category that sells" | Vinasoy revenue; 51 of 186 audited products; Vinamilk nut-milk growth | Add: on Lazada and Tiki the best-selling plant milk SKU sells 60% and 79% of the litres of the best-selling dairy SKU; domestic nut and soy milks lead and imported oat is under 2% of plant-milk litres read, whereas kitchens buy mainly dairy and imported oat | MKT-03; MKT-05; ECR-06 | moderate |
| target_product_profiles.csv TPP-05, revealed evidence | Vinamilk's high-protein nut milk uses pea protein (9 g per 180 ml) and is sold as soy-free; searches for it rising | Append: and it sells: about 70,300 L (16,100 cases) cumulative at Vinamilk's Lazada store by 25 Sep 2026, about 3.5 t of protein, mainly pea; Vinamilk's GoldSoy soy milk carries 3.2 g per 100 ml. No change to the profile or the T10 score | MKT-03; MKT-04; MKT-06 | moderate |
| buyer_map.csv (new row); play_demand_check.csv T1 named buyers | An Nhien, Au Lac, Thoai An, LC Foods, SG Food; incumbents' chay lines; caterers | Add: online chay shops selling dry soy-protein and gluten pieces in 1 to 3 kg bags (Tam Phat, Thien Duc, An Tue, Khanh An), about 40,700 kg dry on Lazada; makers not named; trace them | MKT-03; MKT-04 | weak |
| app-ai-retail-demand-signals, AI.2, dried TVP 20 g protein cost | VND 12,900 (store packs, n = 4) | Add: 1 kg online bags cost about VND 1,800 to 6,000 per 20 g of protein (borrowed label range); a 150 g branded pack online costs VND 12,600 to 15,800, like the store median | MKT-03; FORM-01 | weak |
| app-ai-retail-demand-signals, AI.2, protein powder row | Median VND 71,900 per 20 g (premium stores) | Add: on Lazada, plant powder counters are of the same order as whey's; the top plant listing, a Vietnamese pea and nut powder, costs about VND 14,600 per 20 g of protein | MKT-03; MKT-04; ECR-08 | weak |
| target_product_profiles.csv TPP-02, revealed evidence | ... no chay food carries a numeric protein claim or a protein claim in its name | Append: online, no chay listing read carries one either; frozen chay loaves sell hundreds of kg per listing and Au Lac chay *giò* 11 packs, against about 40,700 kg of dry textured pieces | MKT-03 | weak |
| ch25-channels, end of 25.1 (with wave 8's addition) | E-commerce is a test and premium channel; wave 8: an incumbents' channel, not a cheap launch route for a new brand | Qualify: true for milks and processed meat (official stores over 90% of units read); for chay dry goods, small shops without official stores sell tens of tonnes on Lazada | MKT-03; ECR-01 | weak |
| app-d-retail-audit next-round item 6; app-ai AI.3; open_questions.csv OQ-098, OQ-187, OQ-223 | A scrape of Shopee and Lazada chay listings would fill the small-maker gap; wave 8: marketplaces cannot be read with desk tools | Update: a logged-out browser reads Lazada and Tiki counters (96 SKUs, 25 Sep 2026); Shopee needs a login and TikTok Shop a CAPTCHA. OQ-098 partly closed for Lazada; keep OQ-187 and OQ-223 open for Shopee and TikTok Shop | MKT-01; MKT-02; MKT-03; MKT-05 | strong |

The same rows are in `changes.csv`. None changes the core conclusion, the demand model, a play score or the benchmark path.

## Next-wave candidates

1. **One repeat read of the same 30 listings, four to six weeks on.** *Deeper* version of this line. Desk-closable with the browser in an hour; the listing IDs are in the data file. It turns cumulative counters into monthly rates. It would change ch23 and TPP-05 only if Cao Dam's current rate were close to the 9-nut milk's, which would show protein gaining share. This is the only further marketplace work we think worth doing; anything beyond it is noise.
2. **The makers behind the online dry chay pieces.** *Different kind* (supply-chain interviews). Not desk-closable: phone the four shops or buy and read packs, and ask An Nhien whether it co-packs. It would add named T1 buyers with tonnages and show whether they buy imported textured soy, concentrate or isolate; that could sharpen T1's first-customer plan.
3. **Shopee and TikTok Shop volumes.** *Deeper*. Not closable under this wave's rules (login and CAPTCHA). A Metric.vn report or a person reading pages with their own account would do it. We expect larger volumes with the same pattern, so no Part VI conclusion depends on it.
4. **A protein-claim test.** *Different kind* (tested, not revealed), as in wave 8. Not desk work. It remains the only way to learn whether a numeric claim lifts a chay food, because no chay listing carries one.
5. **Pea protein buying by Vietnamese sports-powder brands.** *Different kind*, small. One email to AFIT Nutrition. It would matter only if volumes were tens of tonnes, which the counters do not suggest.

## Limits

- Shopee, the largest platform, and TikTok Shop were not read; Lazada and Tiki understate online volume.
- All counters are cumulative with no start date; newer listings are understated and stock-outs are invisible. Lazada rounds counters above 1,000 to one decimal of a thousand, and a counter covers all variants of a listing.
- Rows come from page 1 of targeted searches, so group sums and shares are orders of magnitude, not market shares. Relevance ranking may hide some listings.
- Protein values come from product pages where given, otherwise from audit labels or the food composition table; the dry chay pieces use a borrowed range, and the 9-nut milk's basis is not printed.
- Pack sizes come from product names; two Sahmyook listings and some powders have none, so no litres or kilograms.
- The logged-out view may depend on location (Tiki's nut-milk category was empty for this browser).
- One snapshot on 25 September 2026; counters can be edited by platforms or sellers, and one Lazada listing looked like a test listing and was excluded.
- Shopee rating counts come from search-engine snippets only.
