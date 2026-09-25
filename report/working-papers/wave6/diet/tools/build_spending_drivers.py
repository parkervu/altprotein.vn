"""Build data_food_spending.csv and data_demand_drivers.csv (DIET stream, wave 6).
Values typed from sources read on 2026-09-24; see notes and source_ids in each row. Standard library only.
"""
import csv

OUT = "working-papers/wave6/diet"

sp = []  # indicator, year, geography, group, value, unit, source_ids, ev, conf, det, notes


def s(ind, yr, geo, grp, val, unit, sid="DIE-05", conf="High", det="revealed", notes=""):
    sp.append([ind, yr, geo, grp, val, unit, sid, "VN-direct", conf, det, notes])


# Table 6.5: share of eating, drinking and smoking in consumption expenditure for living
for yr, t, u, r in [(2012, 56.0, 53.0, 58.3), (2014, 52.6, 50.3, 54.3), (2016, 51.0, 48.6, 52.9), (2018, 47.3, 45.3, 48.9),
                    (2020, 49.6, 48.1, 50.9), (2022, 48.2, 47.0, 49.3), (2024, 49.1, 47.7, 50.4)]:
    for geo, v in [("Vietnam", t), ("Vietnam, urban", u), ("Vietnam, rural", r)]:
        s("Share of eating, drinking and smoking in household consumption spending", yr, geo, "all households", v, "%", notes="VHLSS table 6.5")

# Table 6.17: structure of food spending (share of food, drink and eating-out spending)
struct = {
    "Meat": {2010: (21.3, 20.0, 22.2), 2014: (21.9, 19.9, 23.4), 2018: (21.3, 18.7, 23.4), 2020: (24.5, 21.3, 27.3), 2022: (27.0, 24.9, 28.6), 2024: (26.7, 23.4, 29.7)},
    "Fish and shrimp": {2010: (7.3, 6.5, 7.9), 2018: (8.3, 8.1, 8.4), 2020: (8.2, 7.9, 8.5), 2022: (7.8, 8.1, 7.6), 2024: (8.4, 8.5, 8.3)},
    "Eggs": {2010: (1.4, 1.2, 1.6), 2018: (1.2, 0.9, 1.4), 2024: (1.3, 1.1, 1.6)},
    "Tofu": {2010: (1.0, 0.7, 1.1), 2018: (0.7, 0.5, 0.8), 2024: (0.7, 0.6, 0.8)},
    "Beans and peas": {2010: (0.4, 0.3, 0.4), 2024: (0.2, 0.2, 0.2)},
    "Rice": {2010: (15.7, 10.0, 19.7), 2018: (9.7, 6.6, 12.2), 2024: (9.0, 6.7, 11.2)},
    "Eating out (meals away from home)": {2010: (21.6, 28.5, 16.5), 2012: (24.0, 31.3, 18.9), 2014: (23.5, 30.1, 18.6), 2016: (25.1, 32.4, 19.5),
                                          2018: (26.7, 32.9, 21.7), 2020: (26.0, 33.0, 19.9), 2022: (19.8, 24.5, 15.9), 2024: (22.5, 29.6, 16.1)},
}
for grp, ser in struct.items():
    for yr, (t, u, r) in ser.items():
        for geo, v in [("Vietnam", t), ("Vietnam, urban", u), ("Vietnam, rural", r)]:
            s("Share of household food spending (VHLSS food structure, incl. eating out)", yr, geo, grp, v, "%",
              notes="VHLSS table 6.17. Eating out fell in 2022 after COVID-19 and had not regained its 2018 level by 2024." if grp.startswith("Eating out") and yr == 2024 and geo == "Vietnam" else "VHLSS table 6.17")

# Table 6.16: VND per person per month, 2024
for grp, t, u, r in [("All food, drink and eating out", 1310.0, 1632.7, 1110.7), ("Rice", 118.5, 108.5, 124.6), ("Meat", 349.8, 381.5, 330.3),
                     ("Fish and shrimp", 110.4, 139.5, 92.4), ("Eggs", 17.2, 17.1, 17.3), ("Tofu", 9.2, 9.0, 9.4), ("Beans and peas", 2.4, 2.8, 2.1),
                     ("Peanuts and sesame", 2.9, 3.0, 2.8)]:
    for geo, v in [("Vietnam", t), ("Vietnam, urban", u), ("Vietnam, rural", r)]:
        s("Household food spending per person per month", 2024, geo, grp, v, "thousand VND per person per month", notes="VHLSS table 6.16, current prices")

# Eating out per person per month by income quintile (table 6.18) and region (table 6.19)
for yr, vals in [(2018, (283.0, 78.4, 208.5, 231.0, 358.6, 539.0)), (2020, (334.6, 107.5, 201.4, 301.9, 411.1, 651.4)),
                 (2022, (238.0, 57.4, 122.5, 177.2, 371.9, 408.0)), (2024, (295.0, 79.4, 181.4, 285.1, 363.4, 558.5))]:
    for lab, v in zip(["all", "quintile 1", "quintile 2", "quintile 3", "quintile 4", "quintile 5"], vals):
        s("Eating-out spending per person per month", yr, "Vietnam", lab, v, "thousand VND per person per month", notes="VHLSS table 6.18, current prices")
for reg, v in zip(["Red River Delta", "Northern midlands and mountains", "North Central and Central coast", "Central Highlands", "South East", "Mekong River Delta"],
                  (289.8, 104.4, 274.0, 174.9, 538.6, 247.7)):
    s("Eating-out spending per person per month", 2024, "Vietnam, " + reg + " (pre-2025 statistical region)", "all households", v, "thousand VND per person per month", notes="VHLSS table 6.19")
for yr, u, r in [(2010, 224.6, 75.6), (2018, 469.2, 189.6), (2020, 545.9, 213.9), (2022, 340.6, 172.6), (2024, 482.7, 179.1)]:
    s("Eating-out spending per person per month", yr, "Vietnam, urban", "all households", u, "thousand VND per person per month", notes="VHLSS table 6.10")
    s("Eating-out spending per person per month", yr, "Vietnam, rural", "all households", r, "thousand VND per person per month", notes="VHLSS table 6.10")

# Income and derived unit values
s("Average income per person per month", 2024, "Vietnam", "all households", 5.4, "million VND", sid="DIE-06", notes="Urban 6.9, rural 4.5; quintile 5 11.8, quintile 1 1.6 million VND. 46,995 households.")
s("Implied unit value of meat for home use", 2024, "Vietnam", "all households", 134.5, "thousand VND per kg", conf="Medium", det="inferred",
  notes="Our derivation: 349.8 thousand VND / 2.60 kg per person per month (tables 6.16 and 6.20).")
s("Implied unit value of tofu for home use", 2024, "Vietnam", "all households", 21.4, "thousand VND per kg", conf="Medium", det="inferred",
  notes="Our derivation: 9.2 thousand VND / 0.43 kg.")
s("Implied unit value of eggs for home use", 2024, "Vietnam", "all households", 3.37, "thousand VND per egg", conf="Medium", det="inferred",
  notes="Our derivation: 17.2 thousand VND / 5.10 eggs; includes duck eggs.")

with open(f"{OUT}/data_food_spending.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["record_id", "indicator", "year", "geography", "group", "value", "unit", "source_ids", "evidence_label", "confidence", "demand_evidence_type", "notes"])
    for i, r in enumerate(sp, 1):
        w.writerow([f"DFS-{i:03d}"] + r)
print("spending rows", len(sp))

# ---------------- demand drivers ----------------
dd = []


def d(driver, ind, val, unit, yr, basis, sid, ev="VN-direct", conf="High", det="revealed", notes=""):
    dd.append([driver, ind, val, unit, yr, basis, sid, ev, conf, det, notes])


for yr, v in [(2025, 101.6), (2030, 104.25), (2035, 106.53), (2040, 108.44), (2045, 109.69), (2050, 110.01)]:
    d("demography", "Population", v, "million", yr, "UN WPP 2024 medium variant via World Bank", "DIE-36", conf="Medium", det="inferred" if yr > 2025 else "revealed",
      notes="Peaks at about 110.0 million in 2049 on this series. Same series as the supply study (MDR rows).")
for yr, v in [(2025, 9.5), (2035, 13.9), (2050, 20.0)]:
    d("demography", "Share of population aged 65 and over", v, "%", yr, "UN WPP 2024 via World Bank", "DIE-36", conf="Medium", det="inferred" if yr > 2025 else "revealed")
for yr, v in [(2000, 24.4), (2010, 30.3), (2020, 35.6), (2025, 38.8)]:
    d("urbanisation", "Urban share of population", v, "%", yr, "World Bank WDI (UN WUP, national definitions)", "DIE-36", conf="Medium",
      notes="National definition; may change after the July 2025 administrative reorganisation.")
for yr, v in [(2010, 7275), (2015, 9248), (2020, 11851), (2023, 13535), (2025, 15457)]:
    d("income", "GDP per person, PPP", v, "constant 2021 international USD", yr, "World Bank WDI NY.GDP.PCAP.PP.KD", "DIE-09")
for yr, v12, v20 in [(2010, 29.2, 10.7), (2016, 46.7, 17.8), (2020, 59.6, 27.6), (2022, 57.0, 24.6)]:
    d("income", "Share of people in households consuming at least USD 12 per person per day", v12, "%", yr, "World Bank PIP, VHLSS consumption, PPP (PIP default at access, believed 2021 PPP)", "DIE-35",
      conf="Medium", det="revealed", notes="Our calculation: 100 minus PIP headcount at a USD 12 line. A proxy for the consuming middle class; not an official definition.")
    d("income", "Share of people in households consuming at least USD 20 per person per day", v20, "%", yr, "World Bank PIP, as above", "DIE-35", conf="Medium",
      notes="Our calculation: 100 minus PIP headcount at a USD 20 line.")
d("income", "Mean household consumption per person per day", 16.59, "USD PPP per day", 2022, "World Bank PIP", "DIE-35", conf="Medium", notes="Median 13.32.")
d("income", "Average income per person per month", 5.4, "million VND", 2024, "NSO VHLSS 2024", "DIE-06", notes="+9.1% on 2023; urban 6.9, rural 4.5.")
d("diet", "Meat intake", 136.4, "g per person per day", 2020, "NIN General Nutrition Survey 2019 to 2020", "DIE-01; DIE-02", conf="Medium",
  notes="84 g in 2010; urban 155.3 g in 2020; recommendation 50 to 80 g.")
d("diet", "Animal share of protein supply", 42.3, "%", 2023, "FAOSTAT FBS", "DIE-07", notes="21.1% in 1990 and 28.0% in 2000 (historic series, DIE-08).")
d("diet", "Meat food supply per person", 60.5, "kg carcass weight per year", 2023, "FAOSTAT FBS", "DIE-07", notes="41.0 kg in 2010 (new series).")
for yr, v in [(2025, 49.83), (2030, 56.84), (2035, 62.16)]:
    d("diet", "Meat food use per person (pork, poultry, beef, sheep)", v, "kg retail weight per year", yr, "OECD-FAO Outlook 2026 to 2035 baseline", "DIE-11",
      conf="Medium", det="inferred" if yr > 2025 else "revealed",
      notes="Model projection. Our conversion of 2035 to carcass weight (pork /0.78, poultry /0.88, beef /0.70): about 76.6 kg." if yr == 2035 else "")
for yr, v in [(2025, 5.06), (2030, 5.93), (2035, 6.62)]:
    d("diet", "Total meat food use (four meats)", v, "million tonnes retail weight", yr, "Our multiplication: OECD-FAO per person x UN WPP population", "DIE-11; DIE-36",
      conf="Low", det="inferred", notes="Derived; +1.56 million tonnes (+31%) from 2025 to 2035.")
for yr, v in [(2025, 42.4), (2035, 46.79)]:
    d("diet", "Fish food use per person", v, "kg live weight equivalent per year", yr, "OECD-FAO Outlook 2026 to 2035", "DIE-11", conf="Medium", det="inferred" if yr > 2025 else "revealed")
for yr, v in [(2025, 132.84), (2035, 123.21)]:
    d("diet", "Rice food use per person", v, "kg per year", yr, "OECD-FAO Outlook 2026 to 2035", "DIE-11", conf="Medium", det="inferred" if yr > 2025 else "revealed",
      notes="VHLSS home rice consumption fell from 9.68 to 6.45 kg per person per month between 2010 and 2024 (DIE-05); the two bases differ.")
d("diet", "Eating out as share of household food spending", 22.5, "%", 2024, "NSO VHLSS 2024", "DIE-05", notes="Urban 29.6%, rural 16.1%; peak 26.7% in 2018.")
for yr, v in [(2010, 8.4), (2020, 16.3), (2024, 20.0)]:
    d("health", "Adult overweight prevalence (BMI 25 or more, age-standardised, 18+)", v, "%", yr, "WHO GHO, NCD-RisC estimates", "DIE-28", conf="Medium",
      notes="Modelled estimate. Obesity (BMI 30+) 2.4% in 2024; Asian cut-offs would give higher figures.")
d("health", "Diabetes prevalence (age-standardised, 18+)", 10.9, "%", 2022, "WHO GHO, NCD-RisC estimates", "DIE-28", conf="Medium", notes="5.3% in 2010. Modelled.")
d("health", "Hypertension prevalence (age-standardised, 30 to 79)", 29.7, "%", 2019, "WHO GHO, NCD-RisC estimates", "DIE-28", conf="Medium", notes="28.6% in 2010.")
d("health", "Stunting, children under 5", 19.6, "%", 2020, "NIN General Nutrition Survey 2019 to 2020", "DIE-01; DIE-03", conf="Medium",
  notes="29.3% in 2010. JME modelled series: 20.3% (2020), 19.2% (2024) (DIE-28). Over 30% in former Ha Giang, Cao Bang, Kon Tum and Gia Lai provinces (2020).")
d("health", "Stunting, ages 5 to 19", 14.8, "%", 2020, "NIN General Nutrition Survey 2019 to 2020", "DIE-01", conf="Medium")
d("health", "Overweight and obesity, ages 5 to 19", 19.0, "%", 2020, "NIN General Nutrition Survey 2019 to 2020", "DIE-01; DIE-03", conf="Medium",
  notes="8.5% in 2010; urban 26.8%, rural 18.3%, mountainous 6.9%.")
d("price", "Pig producer price (annual average)", 78138, "VND per kg", 2020, "FAOSTAT producer prices", "DIE-25", conf="Medium",
  notes="46,076 (2019), 59,176 (2021), 56,299 (2023), 61,051 (2024). Chicken producer price about flat: 98,956 (2019), 98,642 (2020).")
d("price", "Live hog price", "57,000 to 60,000", "VND per kg live weight", "2026-09-24", "Daily market report", "DIE-26", conf="Low",
  notes="72,000 to 80,000 on 26 Feb 2025 (DIE-27); 65,000 in April 2026 (supply study COST-35).")
d("food safety", "Consumers worried about contaminated pork", "more than 90", "% of respondents", "2023 (publication; fieldwork year not recorded by us)", "BDM auction study, 152 respondents in two provinces", "DIE-30",
  conf="Medium", det="stated", notes="Same study found a 20% premium in an incentive-compatible auction (tested).")
d("food safety", "Stated premium for pork from certified abattoirs", 70, "% above market price", "2024 (publication)", "Discrete choice experiment, Hanoi and Haiphong", "DIE-29",
  conf="Medium", det="tested", notes="Hypothetical choice experiment; up to 102% for hormone- and drug-free pork among consumers who see contamination as life-threatening. Overstates what people pay.")

with open(f"{OUT}/data_demand_drivers.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["record_id", "driver", "indicator", "value", "unit", "year", "basis", "source_ids", "evidence_label", "confidence", "demand_evidence_type", "notes"])
    for i, r in enumerate(dd, 1):
        w.writerow([f"DDD-{i:03d}"] + r)
print("driver rows", len(dd))
