# What Vietnam eats: the protein diet, what it costs, and where it is heading

Agent: DIET (wave 6). Source prefix: DIE. Date: 24 September 2026.

This paper sets the demand baseline that every novel protein has to fit into: how much protein Vietnamese people eat and from what, what each protein costs at retail per 100 g of protein, where protein sits in everyday dishes, and how large and in which direction protein demand is moving. It uses the best primary data we could retrieve: the National Statistics Office (NSO) Household Living Standards Survey (VHLSS, *Khảo sát mức sống dân cư*, household living standards survey) 2024 book, FAOSTAT food balance sheets and producer prices, the OECD-FAO Outlook 2026 to 2035 database, USDA PSD, the Vietnamese Food Composition Table (*Bảng thành phần thực phẩm Việt Nam*, food composition table) and published results of the National Institute of Nutrition (NIN, *Viện Dinh dưỡng*) General Nutrition Survey 2019 to 2020 (*Tổng điều tra dinh dưỡng*, general nutrition survey). Retail prices were read online on 24 September 2026. All derived numbers can be rebuilt from the scripts in `tools/`.

## Headline findings

1. **Vietnamese already eat a lot of meat, and more than health guidance advises.** The national nutrition survey measured meat intake of 136.4 g per person per day in 2020, up from 84 g in 2010; urban residents ate 155.3 g. The national recommendation is 50 to 80 g [VN-direct, Medium, DIE-01; DIE-02; DIE-03, revealed]. FAO food supply reached 60.5 kg of meat per person in 2023 (carcass weight), up from 41.0 kg in 2010 [VN-direct, High, DIE-07, revealed].

2. **Protein is adequate on average for adults, so "more protein" is not the pitch.** Average intake is about 73 to 80 g per person per day: 72.8 g measured in 929 adults in Hanoi and Thai Binh in 2022 [VN-direct, High, DIE-32, revealed] and about 80 g derived from the 2020 national survey (2,023 kcal with 15.8% from protein) [VN-direct, Low, DIE-01, inferred]. The 2026 recommendation is about 0.93 g per kg body weight, with a 50 g label reference [VN-direct, High, DIE-04, revealed]. Undernutrition persists in children: 19.6% of under-fives were stunted in 2020, and more than 30% in the 2020 provinces of Ha Giang, Cao Bang, Kon Tum and Gia Lai (Ha Giang is now part of Tuyen Quang, Kon Tum part of Quang Ngai) [VN-direct, Medium, DIE-01; DIE-03, revealed].

3. **The diet has moved from plant to animal protein fast.** Animal foods supplied 21% of protein in 1990, 28% in 2000 and 42% in 2023 (43.2 of 102.2 g per person per day of supply) [VN-direct, High, DIE-07; DIE-08, revealed]. Rice still supplies 27.0 g (26%) and soy foods only 4.9 g [VN-direct, High, DIE-07, revealed].

4. **Vietnam eats far more meat than its income predicts.** At about USD 13,500 per person (PPP, 2023) Vietnam's meat supply (60.5 kg) already exceeds Japan's long-run plateau (45 to 50 kg, reached at about three times Vietnam's current income) and is more than double Thailand's (24.5 kg at USD 21,200). It is close to China at the same income level in 2013 (59 kg at USD 13,100) [VN-adjacent, High, DIE-07; DIE-08; DIE-09, revealed].

5. **Demand is still rising, led by poultry.** OECD-FAO projects meat food use per person rising from 49.8 kg in 2025 to 62.2 kg in 2035 (retail weight), with poultry up from 17.0 to 25.8 kg and pork only from 28.6 to 31.5 kg [VN-direct, Medium, DIE-11, inferred]. With population growth this adds about 1.56 million tonnes of meat a year by 2035, a 31% rise (our calculation) [VN-direct, Low, DIE-11; DIE-36, inferred]. Rice food use falls from 132.8 to 123.2 kg per person [VN-direct, Medium, DIE-11, inferred].

6. **The price floor for everyday protein is eggs and chicken at VND 34,000 to 45,000 per 100 g of protein.** At Bach Hoa Xanh online on 24 September 2026: hen eggs 34,300, chicken thigh 39,000, chicken breast 44,800, lean pork 70,900, pangasius fillet about 66,700, red tilapia 71,200, beef 130,000 to 143,000 and shrimp about 200,000 VND per 100 g of protein, using Food Composition Table protein values [VN-direct, Medium, COST-39; COST-40; COST-41; DIE-12; DIE-15; DIE-16; DIE-19, revealed]. Plant staples are as cheap or cheaper: tofu 30,000 (composition-table protein; up to 86,000 on some labels), mung beans 36,900, peanuts 38,700 and dry soybeans 14,500 [VN-direct, Medium, DIE-12; DIE-20; DIE-21; DIE-22; DIE-23, revealed]. Packaged soy milk costs about 110,000 on label protein [VN-direct, Medium, DIE-17; FORM-01, revealed].

7. **Meat dominates the food budget, and eating out is a fifth of it.** In 2024 meat took 26.7% of household food spending (VND 349,800 per person per month), fish 8.4%, eggs 1.3% and tofu 0.7%. Meals eaten away from home (*ăn ngoài*, eating out) took 22.5% of food spending, 29.6% in cities and 16.1% in rural areas; the share peaked at 26.7% in 2018 and has not recovered its pre-COVID level [VN-direct, High, DIE-05, revealed].

8. **At home, urban and rural households now eat the same amount of meat, and the rich eat 60% more than the poor.** Home meat use was 2.60 kg per person per month in both urban and rural areas in 2024 (urban was higher until 2020). The top income fifth ate 3.17 kg and the bottom fifth 1.97 kg; the top fifth spent seven times as much eating out (VND 558,500 vs 79,400 per person per month) [VN-direct, High, DIE-05, revealed].

9. **Tofu is the country's plant protein staple, but it is flat and northern.** Home tofu use has stayed at 0.43 to 0.50 kg per person per month since 2010. Households in the Red River Delta eat 0.69 kg a month, 3.6 times the Mekong Delta's 0.19 kg. Households pay about VND 21,400 per kg, which puts tofu near VND 20,000 per 100 g of protein, the cheapest protein food bought at scale [VN-direct, High, DIE-05; DIE-12, revealed].

10. **Pork prices swing hard, and consumers substituted to chicken and imports, not to tofu.** After African swine fever, the pig producer price rose 70% from 2019 to 2020 (VND 46,076 to 78,138 per kg) while the chicken price was flat [VN-direct, Medium, DIE-25, revealed]. Pork consumption fell 12.6% in 2019 while chicken rose 26% and chicken imports doubled [VN-direct, Medium, DIE-10, revealed]. Home tofu use stayed at 0.44 kg per person per month between 2018 and 2020, while home egg and fish use rose [VN-direct, High, DIE-05, revealed]. Live hogs sell for VND 57,000 to 60,000 per kg today, down from 72,000 to 80,000 in February 2025 [VN-direct, Low, DIE-26; DIE-27, revealed].

11. **Health pressure is rising.** Adult overweight (BMI 25 or more) rose from 8.4% in 2010 to 20.0% in 2024 and diabetes from 5.3% to 10.9% (2022), on modelled estimates [VN-direct, Medium, DIE-28, revealed]. Overweight among 5 to 19 year olds more than doubled from 8.5% to 19.0% between 2010 and 2020 (26.8% in cities) [VN-direct, Medium, DIE-01, revealed].

12. **Food safety worry is near-universal, but the premium people actually pay is modest.** More than 90% of respondents in a pork study worried about contaminated pork [VN-direct, Medium, DIE-30, stated]. A hypothetical choice experiment in Hanoi and Haiphong found premiums of 70% for pork from certified abattoirs and up to 102% for hormone- and drug-free pork [VN-direct, Medium, DIE-29, tested]. An auction with real money found 20% [VN-direct, Medium, DIE-30, tested].

13. **The addressable protein pool is large in tonnes and small per percentage point.** FAO supply implies 0.92 million tonnes of meat protein a year in 2023; each 1% of it is about 9,200 tonnes of protein, worth roughly VND 3,600 to 6,500 billion (USD 140 to 250 million) at today's chicken-to-pork retail prices per 100 g of protein (our calculation, supply basis, overstates intake) [VN-direct, Low, DIE-07, inferred].

## 1. Bases and sources: read this before comparing numbers

Different sources measure different things. We never average them.

| Source | What it measures | Weight basis | Latest year | Use it for |
|---|---|---|---|---|
| FAOSTAT food balance sheets (DIE-07) | Food available for consumption, national | Meat carcass weight, fish live weight | 2023 | Levels vs neighbours, protein ladder, trends |
| OECD-FAO Outlook 2026 to 2035 (DIE-11) | Food use per person, modelled | Meat retail weight (OECD convention, not re-verified) | 2035 projection | Direction and speed to 2035 |
| USDA PSD (DIE-10) | Domestic consumption tonnes | Pork and beef carcass, chicken ready-to-cook | 2026 forecast | Year-on-year shocks and trade |
| NIN General Nutrition Survey (DIE-01; DIE-02) | Individual intake, 22,400 households, 25 provinces | As eaten | 2019 to 2020 | Intake vs recommendations |
| VHLSS 2024 (DIE-05) | Household acquisition for home use (purchased plus own production), 46,995 households | As bought | 2024 | Trends by urban/rural, income, region; spending |
| Hoang Thu Nga et al. (DIE-32) | 24 hour recall, 929 adults, Red River Delta | As eaten | 2022 | Recent measured protein intake |

The VHLSS book gives quantities only for food used at home; meals eaten out appear only as spending (our reading of the table structure) [VN-direct, High, DIE-05, inferred]. The NIN survey report itself was not retrievable (the Ministry of Health portal timed out), so NIN figures come from press reports of the official launch and are rated Medium.

## 2. How much protein, and from what

### 2.1 Supply by food group (FAOSTAT)

| Food group | Protein, g per person per day, 2010 | 2023 | Food supply 2023, kg per person per year |
|---|---|---|---|
| All foods | 79.7 | 102.2 | |
| Animal foods | 30.5 | 43.2 (42.3%) | |
| Meat, all | 16.9 | 25.1 | 60.5 (carcass) |
| of which pork | 9.8 | 13.3 | 34.4 |
| of which poultry | 5.3 | 8.8 | 19.7 |
| of which beef | 1.6 | 2.7 | 5.9 |
| Offal | 1.8 | 2.9 | 7.0 |
| Fish and seafood | 9.1 | 11.1 | 40.1 (live weight) |
| Eggs | 1.0 | 1.2 | 4.0 (see disagreements) |
| Milk and dairy | 1.4 | 2.5 | 37.4 (unstable series) |
| Rice | 31.4 | 27.0 | 219.9 |
| Wheat | 2.3 | 3.3 | 15.4 |
| Soybeans (tofu, soy milk, other soy foods) | 2.9 | 4.9 | 5.3 (bean equivalent) |
| Other pulses | 1.7 | 2.6 | 4.2 |
| Groundnuts | 1.4 | 1.9 | 3.8 |
| Vegetables | 5.3 | 11.0 | 191.3 |

All rows [VN-direct, High, DIE-07, revealed]. Supply is not intake: it includes household and retail waste. Of 1.9 million tonnes of soybeans used in Vietnam in 2023, only 0.53 million tonnes went to food; 1.17 million tonnes were crushed [VN-direct, High, DIE-07, revealed].

### 2.2 Intake (what people eat)

- **Meat:** 136.4 g per person per day in 2020 (84 g in 2010); urban 155.3 g [VN-direct, Medium, DIE-01; DIE-02, revealed]. One English report gives 134 g and 154 g [VN-direct, Medium, DIE-03, revealed]; we use 136.4 g.
- **Energy and protein:** 2,023 kcal per person per day with 15.8% from protein, 20.2% from fat and 64.0% from carbohydrate [VN-direct, Medium, DIE-01; DIE-02, revealed]; our derived protein intake is 79.9 g [VN-direct, Low, DIE-01, inferred].
- **Measured protein in adults, 2022:** 72.8 g per day, of which 39.5 g (53.3%) animal. Rural Thai Binh adults ate more protein (77.8 g) than urban Hanoi adults (72.3 g), and the same animal protein (40.3 vs 39.5 g) [VN-direct, High, DIE-32, revealed]. Hanoi adults ate 59 g in 2013, as cited in the same paper [VN-direct, Low, DIE-32, revealed].
- **Fish, eggs, dairy, soy foods and legumes as intake:** we found no published national intake figures by these food groups from the 2019 to 2020 survey. This is logged as an open question.

### 2.3 Household acquisition for home use (VHLSS 2024)

| Item, per person per month | 2010 | 2018 | 2020 | 2022 | 2024 | Urban 2024 | Rural 2024 |
|---|---|---|---|---|---|---|---|
| Rice, kg | 9.68 | 8.05 | 7.61 | 6.93 | 6.45 | 5.46 | 7.06 |
| Meat, kg | 1.79 | 2.18 | 2.32 | 2.59 | 2.60 | 2.60 | 2.60 |
| Fish and shrimp, kg | 1.42 | 1.37 | 1.50 | 1.13 | 1.16 | 1.20 | 1.13 |
| Eggs, number | 3.62 | 4.01 | 4.64 | 5.07 | 5.10 | 5.05 | 5.14 |
| Tofu, kg | 0.50 | 0.44 | 0.44 | 0.43 | 0.43 | 0.39 | 0.45 |
| Beans and peas, kg | 0.08 | 0.07 | 0.06 | 0.06 | 0.06 | 0.06 | 0.05 |
| Peanuts and sesame, kg | 0.07 | 0.06 | 0.05 | 0.05 | 0.05 | 0.05 | 0.05 |

All rows [VN-direct, High, DIE-05, revealed]. The drop in fish between 2020 and 2022 appears in every region and income group and may reflect a questionnaire change (see disagreements).

Converting these home quantities with composition-table values gives, per person per day, about 16.8 g of protein from rice, 13.8 g from meat, 4.3 g from fish, 1.5 g from tofu, 1.2 g from eggs and about 0.9 g from beans and peanuts (our calculation; excludes eating out, milk, other cereals and vegetables) [VN-direct, Low, DIE-05; DIE-12, inferred]. At home, rice still carries as much protein as meat.

## 3. Trends, gaps and projections

**Income gradient.** In 2024 the top income fifth used 3.17 kg of meat per person per month at home and the bottom fifth 1.97 kg; for eggs 5.83 vs 4.23; for fish 1.31 vs 0.93. Rice runs the other way: 5.90 vs 7.27 kg [VN-direct, High, DIE-05, revealed]. The poorest fifth's meat use rose 95% between 2010 and 2024 (1.01 to 1.97 kg), the richest fifth's only 22% (2.60 to 3.17 kg) [VN-direct, High, DIE-05, revealed]. Growth now comes from lower-income households catching up. At home, national meat use has been flat since 2022 (2.59 to 2.60 kg), the first pause since 2010, and fell slightly in the second and third income fifths; with eating out recovering and FAO supply still rising in 2023, this is not yet evidence of a plateau in total meat eaten [VN-direct, Medium, DIE-05; DIE-07, inferred]. A demand system on VHLSS 2012 to 2020 finds meat, dairy and eating out strongly income elastic and rice a necessity or inferior good for richer households (abstract only; elasticity values not read) [VN-direct, Medium, DIE-33, revealed].

**Urban and rural.** Urban households used more meat at home than rural ones until 2020; since 2022 they are level (2.60 kg). Urban meat growth has moved out of the home: urban eating-out spending was VND 482,700 per person per month in 2024 against VND 179,100 in rural areas [VN-direct, High, DIE-05, revealed].

**Regions (pre-2025 statistical regions, VHLSS 2024).**

| Region | Meat, kg | Fish, kg | Eggs, number | Tofu, kg |
|---|---|---|---|---|
| Red River Delta | 3.19 | 0.97 | 5.93 | 0.69 |
| Northern midlands and mountains | 3.10 | 0.58 | 5.10 | 0.68 |
| North Central and Central coast | 2.33 | 1.36 | 4.87 | 0.31 |
| Central Highlands | 2.05 | 0.80 | 4.38 | 0.32 |
| South East | 2.33 | 1.13 | 5.01 | 0.31 |
| Mekong River Delta | 2.22 | 1.75 | 4.62 | 0.19 |

All per person per month for home use [VN-direct, High, DIE-05, revealed]. The North eats more meat and tofu at home; the Mekong Delta eats more fish; the South East spends most on eating out (VND 538,600 per person per month) [VN-direct, High, DIE-05, revealed].

**Shocks, 2018 to 2020.** Pork supply fell and poultry and beef filled the gap. FAO pig meat supply fell about 14% from 2018 to 2019 while poultry rose 22% [VN-direct, High, DIE-07, revealed]. USDA records pork consumption down 12.6%, chicken up 26.2%, beef up 13.4% and chicken imports up 107% in 2019 [VN-direct, Medium, DIE-10, revealed]. By 2023 to 2025 pork had fully recovered (USDA: 3.65 to 4.07 million tonnes carcass weight, about 36 to 40 kg per person) [VN-direct, Medium, DIE-10; DIE-36, revealed].

**Projections to 2035 (OECD-FAO baseline, food use per person).**

| Item | 2025 | 2030 | 2035 |
|---|---|---|---|
| Pork, kg retail weight | 28.6 | 31.1 | 31.5 |
| Poultry, kg retail weight | 17.0 | 21.2 | 25.8 |
| Beef and veal, kg retail weight | 4.0 | 4.3 | 4.6 |
| Four meats, kg retail weight | 49.8 | 56.8 | 62.2 |
| Fish, kg live weight equivalent | 42.4 | 46.4 | 46.8 |
| Rice, kg | 132.8 | 128.0 | 123.2 |

All rows [VN-direct, Medium, DIE-11, inferred] (model projection). The same outlook puts Vietnam's 2035 figure above Korea (59.6), China (51.3), Malaysia (47.2) and Japan (36.8) on the same retail-weight basis [VN-adjacent, Medium, DIE-11, inferred]. Converting the 2035 figure to carcass weight gives about 77 kg, above China (73.5) and Malaysia (69.1) today and below Korea (84.0) and Taiwan (91.5) in 2023 (our conversion, factors not verified) [VN-adjacent, Low, DIE-11; DIE-07, inferred]. We found no published projection of total protein demand for Vietnam beyond these commodity outlooks.

## 4. Too much and too little: health and undernutrition

**Population health (modelled WHO series, age-standardised adults).**

| Indicator | 2010 | Latest | Latest year |
|---|---|---|---|
| Overweight, BMI 25 or more, 18+ | 8.4% | 20.0% | 2024 |
| Obesity, BMI 30 or more, 18+ | 0.7% | 2.4% | 2024 |
| Diabetes, 18+ | 5.3% | 10.9% | 2022 |
| Hypertension, 30 to 79 | 28.6% | 29.7% | 2019 |

All rows [VN-direct, Medium, DIE-28, revealed]. Global BMI cut-offs understate overweight for Asian populations. Among 5 to 19 year olds, overweight and obesity reached 19.0% in 2020 (urban 26.8%, rural 18.3%, mountainous 6.9%) [VN-direct, Medium, DIE-01, revealed]. NIN's own messaging now warns that Vietnamese are "cutting rice and eating more meat" [VN-direct, Medium, DIE-38, stated].

**Undernutrition.** Stunting in under-fives fell from 29.3% (2010) to 19.6% (2020), and 14.8% of 5 to 19 year olds were stunted [VN-direct, Medium, DIE-01; DIE-03, revealed]. The modelled series shows 19.2% in 2024 [VN-direct, Medium, DIE-28, revealed]. The problem is concentrated: over 30% in 2020 in Ha Giang (merged into Tuyen Quang from 1 July 2025), Cao Bang, Kon Tum (now part of Quang Ngai) and Gia Lai (2020 boundaries; Gia Lai now also covers former Binh Dinh) [VN-direct, Medium, DIE-03, revealed]. In mountainous areas, lower meat use goes with higher stunting and low overweight (6.9%) [VN-direct, Medium, DIE-01; DIE-05, inferred].

**What this means for protein.** For the average adult, protein is sufficient and meat is in excess of guidance. The 2026 recommendations drop the old target ratio of animal to total protein and ask instead for "high-quality protein from diverse animal and plant sources" [VN-direct, High, DIE-04, revealed]. Adequacy claims based on single-day recalls (35.5% of adults below the recommendation in DIE-32) overstate inadequacy and used the older, higher recommendation [VN-direct, Medium, DIE-32; DIE-04, inferred]. For children in poor mountainous provinces, protein quality and micronutrient density at very low cost are the need; institutional meals are the channel. We found no data on school meal budgets or protein specifications (open question).

## 5. Household food spending, eating out and the dishes

**Share of spending.** Eating, drinking and smoking took 49.1% of household consumption spending in 2024 (urban 47.7%, rural 50.4%), down from 56.0% in 2012 [VN-direct, High, DIE-05, revealed]. Average income was VND 5.4 million per person per month (urban 6.9, rural 4.5; top fifth 11.8, bottom fifth 1.6) [VN-direct, High, DIE-06, revealed].

| Share of food spending (incl. eating out) | 2010 | 2018 | 2020 | 2022 | 2024 |
|---|---|---|---|---|---|
| Meat | 21.3% | 21.3% | 24.5% | 27.0% | 26.7% |
| Fish and shrimp | 7.3% | 8.3% | 8.2% | 7.8% | 8.4% |
| Eggs | 1.4% | 1.2% | | | 1.3% |
| Tofu | 1.0% | 0.7% | | | 0.7% |
| Rice | 15.7% | 9.7% | | | 9.0% |
| Eating out | 21.6% | 26.7% | 26.0% | 19.8% | 22.5% |

All rows [VN-direct, High, DIE-05, revealed]. In money terms, in 2024 each person spent per month VND 349,800 on meat, 110,400 on fish and shrimp, 17,200 on eggs, 9,200 on tofu, 2,400 on beans and 118,500 on rice, out of VND 1,310,000 on food, drink and eating out [VN-direct, High, DIE-05, revealed]. Meat's share jumped with the 2020 pork price spike and has stayed above 26% since.

**Eating out.** Eating-out spending averaged VND 295,000 per person per month in 2024, below the 2020 level of 334,600 in current prices [VN-direct, High, DIE-05, revealed]. It is concentrated in cities, the South East and the top income fifth. Retail is still mostly traditional: wet markets were estimated at about 85% of grocery sales in 2016 (secondary citation) [VN-direct, Low, DIE-34, revealed].

**Where protein sits in the dishes.** We found no measured portion weights for the protein component of *phở* (rice noodle soup), *bún* (rice vermicelli dishes), *cơm tấm* (broken rice with grilled pork) or *bánh mì* (filled baguette). This is a high-priority open question. What the evidence does show:

- The carbohydrate bases carry little protein: flat rice noodles 3.2 g, rice vermicelli 1.7 g, white rice (dry) 7.9 g and French bread 7.9 g per 100 g [VN-direct, High, DIE-12, revealed]. In noodle dishes the protein is almost entirely the topping.
- The structure of the dishes (our description, not measured): in *phở* and *bún* the protein is sliced or ground meat, meatballs or fish cake laid on top; in *cơm* (rice meals, home and *cơm bình dân*, cheap rice canteens) it is a side dish such as braised pork, braised fish, egg or tofu in tomato sauce; in *bánh mì* it is a filling of pork roll (*chả lụa*), pâté, grilled meat or egg [VN-direct, Low, inferred].
- The traditional *đồ chay* (traditional vegetarian food) industry already makes analogues of exactly these components: vegetarian pork roll, head cheese, beef slices, meatballs and fish cake [VN-direct, Medium, FORM-01, revealed]. The formats that fit Vietnamese dishes are toppings, fillings and processed-meat rolls, not whole-muscle steaks.

## 6. What protein costs

### 6.1 Retail price per 100 g of protein, 24 September 2026

Inputs, formula and edible shares are in `data_protein_prices.csv`; protein values are from the Vietnamese Food Composition Table 2007 unless stated. VND per 100 g protein = 100 x price per kg / (10 x protein g per 100 g x edible share). USD at 26,000 VND.

| Food | Retail price | Protein g per 100 g (edible) | VND per 100 g protein | USD |
|---|---|---|---|---|
| Soybeans, dry (Co.op) | 48,400 per kg | 34.0 | 14,500 | 0.56 |
| Tofu, household average (VHLSS) | 21,400 per kg | 10.9 | 19,600 | 0.75 |
| Tofu, WinMart, Lang Mo 400 g | 32,750 per kg | 10.9 (labels 3.8 to 9.3) | 30,000 (35,200 to 86,200 on labels) | 1.16 |
| Rice, household average (VHLSS) | 18,400 per kg | 7.9 | 23,300 | 0.89 |
| Hen eggs (BHX, promotion) | 2,400 per egg | 14.8; 55 g egg assumed | 34,300 (40,000 at regular price) | 1.32 |
| Mung beans, dehulled (Co.op) | 84,600 per kg | 23.4 | 36,900 | 1.42 |
| Peanuts (Co.op) | 104,400 per kg | 27.5 | 38,700 | 1.49 |
| Chicken thigh meat (BHX) | 79,210 per kg | 20.3 | 39,000 | 1.50 |
| Duck eggs (BHX) | 3,300 per egg | 13.0; 70 g egg assumed | 41,200 | 1.58 |
| Chicken breast fillet (BHX) | 90,900 per kg | 20.3 | 44,800 | 1.72 |
| Pangasius fillet (BHX) | 100,000 per kg | 15 (12.5 to 18) | 66,700 (55,600 to 80,000) | 2.56 |
| Tofu, retail audit median, label basis | | 3.8 to 9.3 | 66,300 | 2.55 |
| Lean pork (BHX) | 132,000 per kg | 19.0 | 70,900 | 2.73 |
| Pork leg (BHX) | 115,000 per kg | 16.5 to 19.0 | 61,800 to 71,100 | 2.74 |
| Red tilapia, cleaned whole (Co.op) | 79,900 per kg | 19.7; 57% edible | 71,200 | 2.74 |
| Meat, household average (VHLSS) | 134,500 per kg | 16.5 (proxy) | 83,200 | 3.20 |
| Fresh UHT milk (BHX) | 35,833 per L | 3.9 | 91,900 | 3.53 |
| Pork belly (BHX) | 149,000 per kg | 14.5 | 104,900 | 4.03 |
| Soy milk, Fami carton (BHX) | 20,833 per L | 1.9 (label) | 109,600 (67,200 at 3.1 g) | 4.22 |
| Beef shank to leg (BHX) | 267,840 to 294,810 per kg | 21.0 | 130,100 to 143,300 | 5.01 to 5.51 |
| Shrimp, whole or peeled (BHX) | 165,000 to 350,000 per kg | 17.6 | 198,900 to 203,800 | 7.65 to 7.84 |

Row tags: supermarket rows [VN-direct, Medium, COST-39; COST-40; COST-41; DIE-12; DIE-15; DIE-16; DIE-17; DIE-18; DIE-19; DIE-20; DIE-21; DIE-22; DIE-23; DIE-24, revealed], with pangasius protein from the literature [general, Medium, DIE-13; DIE-14, revealed]; household averages [VN-direct, Low, DIE-05; DIE-12, inferred]; audit tofu [VN-direct, Medium, FORM-01, revealed]. These numbers agree with the supply study's audit (eggs and chicken about 34,000 to 46,000, tofu 66,000 on labels) and add fish, beef, legumes and dairy.

Three benchmarks follow. The mass-market floor is eggs and chicken at VND 34,000 to 45,000 per 100 g of protein; the plant floor is tofu and dry legumes at VND 15,000 to 40,000; the mainstream meat reference is lean pork at about VND 71,000. Beef (about 130,000 to 143,000) and shrimp (about 200,000) are premium. Imported plant-based analogues at VND 542,000 to 622,000 per 100 g of protein (FORM-01) cost 8 to 9 times lean pork and 4 to 5 times beef [VN-direct, Medium, FORM-01, revealed].

### 6.2 Pork price volatility and substitution

| Year | Pig producer price, VND per kg | Chicken producer price, VND per kg | Pig to chicken ratio |
|---|---|---|---|
| 2017 | 34,186 | 86,188 | 0.40 |
| 2019 | 46,076 | 98,956 | 0.47 |
| 2020 | 78,138 | 98,642 | 0.79 |
| 2021 | 59,176 | 92,335 | 0.64 |
| 2023 | 56,299 | 102,508 | 0.55 |
| 2024 | 61,051 | 105,205 | 0.58 |

All rows [VN-direct, Medium, DIE-25, revealed]; FAO does not state the weight basis in the file; the pig series matches live-weight market levels. Farm-gate pork prices can move by a third or more in a year; chicken prices barely move. Press reports put the 2020 peak near VND 100,000 per kg live weight and February 2025 at 72,000 to 80,000, with retail ribs at 160,000 to 190,000 per kg [VN-direct, Low, DIE-27, revealed]. On 24 September 2026 live hogs traded at 57,000 to 60,000 [VN-direct, Low, DIE-26, revealed], and 65,000 in April 2026 (supply study, COST-35).

Revealed substitution in the 2019 to 2020 shock ran to chicken, beef, imports, eggs and fish (section 3). Home tofu use did not move (0.44 kg in 2018 and 2020), and home meat use kept rising (2.18 to 2.32 kg) while meat's share of the food budget rose from 21.3% to 24.5% [VN-direct, High, DIE-05, revealed]. COVID-19 in 2020 confounds the home figures. Press claims that shoppers "switched to fish, chicken or processed foods" in 2025 carry no data [VN-direct, Low, DIE-27, stated]. We found no published cross-price elasticities for Vietnam that we could read (open question).

## 7. Health and food-safety drivers of demand

- **Worry is near-universal.** More than 90% of 152 respondents in two provinces worried about contaminated pork [VN-direct, Medium, DIE-30, stated]. Among 225 pork shoppers in Northern Vietnam (fieldwork November to December 2019), chemical hazards were feared more than microbes, and the most trusted sources were television and experts [VN-direct, Medium, DIE-31, stated].
- **The premium paid is modest.** Real-money auction: 20% (VND 39,000 vs 32,500 per 0.5 kg) [VN-direct, Medium, DIE-30, tested]. Hypothetical choice experiment: 70% for certified-abattoir pork, up to 102% for hormone- and drug-free pork among people who see contamination as life-threatening [VN-direct, Medium, DIE-29, tested]. The hypothetical figure is three to five times the auction figure; plan on the lower one.
- **Health:** rising overweight and diabetes (section 4) and official "too much meat" messaging give a health reason to eat less meat [VN-direct, Medium, DIE-28; DIE-38, revealed].
- **Why people reduce meat:** we found no nationally representative Vietnamese survey on motives for eating less meat. Regional advocacy surveys (ECO-24) and a small HUST study (RD-32) exist but were not re-read here; other wave 6 streams cover them. Revealed behaviour shows no reduction so far: home meat use rose in every income group between 2010 and 2024, and FAO meat supply was still rising in 2023. The only pause is in home use since 2022 (section 3).

## 8. Macro demand drivers to 2035 and 2050

| Driver | Value | Tag |
|---|---|---|
| Population | 101.6 million (2025), 106.5 (2035), peak about 110.0 in 2049 | [VN-direct, Medium, DIE-36, inferred] |
| Aged 65 and over | 9.5% (2025), 13.9% (2035), 20.0% (2050) | [VN-direct, Medium, DIE-36, inferred] |
| Urban share (national definition) | 30.3% (2010), 38.8% (2025) | [VN-direct, Medium, DIE-36, revealed] |
| GDP per person, PPP constant 2021 USD | 7,275 (2010), 13,535 (2023), 15,457 (2025) | [VN-direct, High, DIE-09, revealed] |
| People consuming at least USD 12 a day | 29% (2010), 57% (2022) | [VN-direct, Medium, DIE-35, revealed] |
| People consuming at least USD 20 a day | 11% (2010), 25% (2022) | [VN-direct, Medium, DIE-35, revealed] |
| Meat food use per person | +25% from 2025 to 2035 | [VN-direct, Medium, DIE-11, inferred] |

The middle-class proxies are our calculation from World Bank consumption headcounts, not an official definition. Consulting-firm estimates of middle-class size were not retrieved this wave. Population growth is slowing, so almost all growth in protein demand to 2035 comes from more per person, not more people: population rises 4.9% from 2025 to 2035 while meat per person rises 25% [VN-direct, Medium, DIE-11; DIE-36, inferred]. After about 2040 the population plateaus and ages; an older population needs protein quality for muscle maintenance, a separate product brief.

## 9. The protein ladder: Vietnam against its neighbours

| Country | Animal share of protein, 1990 | 2023 | Meat supply 2023, kg | GDP per person 2023, PPP constant 2021 USD | Meat plateau? |
|---|---|---|---|---|---|
| Vietnam | 21% | 42% | 60.5 | 13,500 | Still rising |
| China | 20% | 41% | 73.5 | 22,700 | Rising; flat 2013 to 2020 (59 to 62 kg) then up |
| Thailand | 39% | 40% | 24.5 | 21,200 | Flat at 24 to 29 kg since about 2000 |
| Malaysia | 55% | 59% | 69.1 | 32,900 | Flat at 67 to 71 kg since about 2015 |
| Korea | 32% | 57% | 84.0 | 54,000 | Still rising |
| Taiwan | 47% | 57% | 91.5 | not in WDI | 75 to 84 kg over 2000 to 2018, then higher in the new series |
| Japan | 57% | 55% (2013) | 49.5 (2013) | 43,300 (2013) | 45 to 50 kg since about 2000 |

All rows [VN-adjacent, High, DIE-07; DIE-08; DIE-09, revealed]; Vietnam rows are VN-direct. Transfer assumption: neighbours show where diets have levelled off, not where Vietnam must go. Taiwan is not in World Bank WDI. On IMF current-price PPP, Taiwan's income was about USD 20,500 per person in 2000, when its meat supply was 82.6 kg, and Vietnam's was USD 15,100 in 2023; current-price figures are not adjusted for inflation, so Taiwan's 2000 income was higher in real terms than this suggests [VN-adjacent, Medium, DIE-37; DIE-08, revealed].

Three readings for Vietnam:

1. **There is no single income at which meat plateaus.** Plateau levels range from about 25 kg (Thailand) to about 80 kg (Taiwan) and are set by food culture and fish availability more than by income. No neighbour has shown a sustained fall in meat per person as income grew [VN-adjacent, Medium, DIE-07; DIE-08, inferred].
2. **The animal share of protein levels off at 55% to 60%** in Japan, Korea, Taiwan and Malaysia. Vietnam at 42% has room to rise; Thailand shows a fish-rich diet can hold near 40% [VN-adjacent, Medium, DIE-07; DIE-08, inferred].
3. **Vietnam is high-meat for its income.** It matches China's path at the same income and is on course (OECD-FAO) for about 77 kg carcass weight by 2035, between China and Korea (our conversion) [VN-adjacent, Low, DIE-11; DIE-07, inferred].

## 10. Size of the pool novel protein would take share from

All figures below are our calculations on supply data, which overstate intake. Treat them as orders of magnitude [VN-direct, Low, DIE-07; DIE-11; DIE-36, inferred].

- Total protein supply 2023: about 3.74 million tonnes a year; animal 1.58 million tonnes; meat 0.92 million tonnes; fish 0.41 million tonnes; soy foods 0.18 million tonnes.
- Each 1% of meat protein: about 9,200 tonnes of protein a year, equal to 18,000 to 20,000 tonnes of a 45% to 50% protein ingredient.
- Retail value of 1% of meat protein, at VND 39,000 to 71,000 per 100 g of protein: VND 3,600 to 6,500 billion (USD 140 to 250 million) a year.
- The supply study's S-ALT scenario (1% of meat demand replaced by 2030) equals about 59,000 tonnes of retail-weight meat in 2030 on OECD-FAO figures.
- Home tofu use of 0.43 kg per person per month implies about 520,000 tonnes a year of tofu bought or made for home use (home only).

## Implications for frontier actors

**Founders.**
- *Price.* For everyday meals, the bar is VND 34,000 to 45,000 per 100 g of protein (eggs, chicken) and VND 15,000 to 40,000 for plant staples. Parity with lean pork (about VND 71,000) is the realistic target for a meat analogue in mainstream retail. Above beef (about VND 130,000 to 143,000) a product is a premium or novelty item. Shrimp (about VND 200,000) is the one mass protein where a seafood analogue has wide price headroom.
- *Protein.* Do not sell "more protein" to adults; they already eat 73 to 80 g a day. Do sell a meat replacer with meat-like protein density: 12 to 20 g per 100 g, against 19 g for lean pork and a 4.7 g median for today's *chay* products (FORM-01).
- *Format.* Build for the dish: noodle toppings (sliced, meatball, fish cake), fillings for *bánh mì* and spring rolls, rolls and sausages (*giò*, *chả*), and minced meat for home cooking. The *đồ chay* industry already sells these shapes, so the gap is protein content and taste.
- *Where first.* Top-income households (the top fifth uses 3.17 kg of meat per person per month at home and spends VND 558,500 per person per month eating out) and foodservice in the South East, where eating-out spending is highest. For a better tofu or soy product, start in the Red River Delta, which already eats 3.6 times the Mekong Delta's tofu.

**Food and feed manufacturers.** Pork input costs can jump 70% in a year while chicken barely moves. A pork-extending blend or hybrid ingredient for processed meats (rolls, sausages, dumpling fillings) is a hedge that processors can value on cost alone, not on consumer attitudes. Poultry, not pork, carries most of the projected growth to 2035; poultry-style formats deserve as much attention as pork analogues.

**R&D bodies and universities.** Priority questions: protein per serving in common dishes; protein quality of rice-heavy diets; a denser, firmer, longer-life tofu or soy curd that travels to the South; low-cost fortified protein for children in stunting hotspots; a current food composition table with dishes.

**Investors and development finance.** Demand is growing in tonnes (about +1.56 million tonnes of meat a year by 2035) but the money is in low-price everyday protein. Each 1% of meat protein is worth about USD 140 to 250 million a year at retail. Business models that need consumer premiums above 20% on protein foods are not supported by revealed evidence.

**Funders and philanthropies.** Two different problems: excess meat and rising overweight in cities, and stunting above 30% in poor mountainous provinces. Do not fund a single "eat less animal protein" message for both. Institutional meals in stunting hotspots are a practical first market for cheap fortified plant or fermented protein; the missing piece is data on what schools pay per meal.

**Policy makers.** The 2026 recommendations already favour diverse, high-quality protein from animal and plant sources and use a 50 g protein label reference. Aligning protein claims and school-meal guidance with that update, and publishing the full 2019 to 2020 survey tables, would give new protein makers clear targets. Food-safety trust is a real demand driver; traceability rules for new protein products can use it.

**What not to do.** Do not price a mass product above pork. Do not rely on stated willingness to pay (70% to 100%) when real-money tests show about 20%. Do not assume urban homes eat more meat than rural homes: they no longer do; urban growth is in eating out. Do not use VHLSS quantities as total intake or FAO supply as intake. Do not use untraceable market-size figures.

## What would change this view

- New NIN survey results showing meat intake flat or falling since 2020, or food-group intake tables that differ from supply trends.
- A pork price collapse or a working African swine fever vaccine that keeps pork cheap for years, weakening the hedge case for blends.
- Evidence of cross-price substitution towards tofu or other plant proteins in the next pork spike (none seen in 2019 to 2020).
- A sharp income slowdown, or faster urbanisation after the 2025 administrative reform redefines urban areas.
- A food-safety scandal in pork or poultry large enough to move revealed purchases, not only stated worry.
- Measured dish portions showing much less meat per serving than implied by intake data, which would lower the tonnage a foodservice product can capture.

## Rejected or downgraded claims

- **"Vietnam ranks fourth in the world for pork consumption"** (vietnam.vn, seen as a search title only): not verified, not used.
- **Statista per-person poultry forecasts to 2034:** snippet only, paywalled; not used.
- **"Consumers switched to fish, chicken or processed foods" when pork spiked in 2025** (DIE-27): no data behind it; downgraded to Low and stated.
- **Live hog peak of VND 100,000 per kg in 2020:** press, secondary; kept only as a monthly peak alongside the FAO annual average of VND 78,138.
- **VHLSS fall in fish at home from 1.50 to 1.13 kg (2020 to 2022):** kept in the data but flagged as a possible method change.
- **FAO egg supply (4.0 kg per person) and FAO milk supply swings:** downgraded; see disagreements.
- **OECD-FAO beef per person before 2020 (7 to 8 kg):** inconsistent with FAOSTAT; not used for history.
- **"35.5% of adults lack protein"** (DIE-32): single-day recall and older recommendation; not presented as a national protein gap.
- **Published Vietnamese plant-based market sizes:** not used, as in the supply study.

## Files

- `diet.md` (this paper)
- `sources.csv` (38 sources, DIE-01 to DIE-38; reuses COST-39, COST-40, COST-41, FORM-01 by ID)
- `data_protein_intake.csv` (supply, intake and household use by food group, 2010 to 2035)
- `data_protein_prices.csv` (25 rows: price, protein, edible share and VND per 100 g protein)
- `data_demand_drivers.csv` (population, income, diet, health, price and food-safety drivers)
- `data_food_spending.csv` (VHLSS spending shares, eating out by income and region, 2010 to 2024)
- `data_protein_ladder.csv` (Vietnam and eight neighbours, 1961 to 2023, with GDP per person)
- `open_questions.csv`, `disagreements.csv`, `key_numbers.csv`
- `tools/` (build scripts and small data extracts to reproduce every derived number)
