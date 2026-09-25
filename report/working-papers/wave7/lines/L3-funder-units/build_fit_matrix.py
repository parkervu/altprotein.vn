#!/usr/bin/env python3
"""
Wave 7, line L3: funder-fit audit of Part VI's 19 demand moves (DMV-01 to DMV-19) and 10 target product
profiles (TPP-01 to TPP-10) against 18 funders and investors. Writes data_funder_fit.csv (long format) and
data_funder_profiles.csv. Classes: fits | partial | excluded | outside remit | not in geography.
'excluded' means the funder's own text rules the item out; 'outside remit' means it is not what the funder
funds but is not named as excluded; 'not in geography' means the theme fits but Vietnam is not eligible or
not served. Reasons are ours, from the funders' documents (source ids per funder).
"""
import csv
import os

OUT = os.path.dirname(os.path.abspath(__file__))

ITEMS = [
    ("DMV-01", "Chay-day question in a probability survey"),
    ("DMV-02", "Declaration-level customs analysis (food vs feed, named buyers)"),
    ("DMV-03", "Vietnamese sensory and choice-test capacity"),
    ("DMV-04", "Randomised label and name test"),
    ("DMV-05", "Canteen trial with one large caterer (chay days or protein extender)"),
    ("DMV-06", "In-store test of protein-upgraded chay in 20 minimarts"),
    ("DMV-07", "Chay composition and authenticity survey"),
    ("DMV-08", "Standing panel of research and procurement buyers"),
    ("DMV-09", "Share of meat eaten as processed products"),
    ("DMV-10", "Nha Trang hotel and menu audit"),
    ("DMV-11", "Survey of EU and UK private-label and seafood buyers"),
    ("DMV-12", "Feed carbon-footprint benchmark for shrimp and pangasius feed"),
    ("DMV-13", "Define chay and vegetarian claims (TCVN 13625)"),
    ("DMV-14", "Honest percentage labelling of blended meat"),
    ("DMV-15", "Neutral naming guidance avoiding nhan tao"),
    ("DMV-16", "GMO declaration status of purified precision-fermented proteins"),
    ("DMV-17", "Public-meal protein guidance on quality and cost; Dispatch 64 supplier documents"),
    ("DMV-18", "Eight-digit customs subheadings for plant proteins"),
    ("DMV-19", "Use and protect EU, UK and Japanese tariff preferences"),
    ("TPP-01", "Domestic textured soy or soy-gluten protein"),
    ("TPP-02", "Higher-protein chay foods"),
    ("TPP-03", "Hybrid extender for processed meat"),
    ("TPP-04", "Canteen protein ingredient and dish base"),
    ("TPP-05", "Rice or mung bean isolate for plant milks"),
    ("TPP-06", "Fungal biomass functional ingredient"),
    ("TPP-07", "Precision-fermented specialty protein"),
    ("TPP-08", "Export private-label plant foods (EU, UK)"),
    ("TPP-09", "Diaspora protein-upgraded chay"),
    ("TPP-10", "Cultivated meat or seafood"),
]

# funder id, name, type, scope, exclusions, geography, metric, status, sources, default class, default reason
FUNDERS = [
    ("F01", "Nova Vista Foundation (Protein Innovation RFP)", "market-shaping and policy philanthropy (climate)",
     "Policy (public R&D funding, novel-food pathways, labelling defence); market shaping (public procurement of innovative protein products, advance market commitments, retailer and corporate protein-ratio commitments, blended finance, prizes); open data. Products: plant-based meat, fermentation-derived protein, cultivated meat; dairy and eggs",
     "Direct R&D; culture change and consumer awareness; ultra-processed food policy; whole-food plant-based; shifts to smaller animals; regenerative agriculture; farm transitions; individual diet change; direct private investment",
     "Funds globally; priority Japan, South Korea, Germany, Nordics; Vietnam not named, not excluded",
     "Outcomes in the world with a named decision-maker, a reason and a window; climate and food-security case",
     "USD 10 million; USD 100,000 to 750,000 a year; phase 1 closed 15 Sep 2026; decisions Nov to Dec 2026",
     "AFN-04; AFN-05", "outside remit", "Not a policy or market-shaping outcome; research and product work are outside the RFP (direct R&D is excluded)."),
    ("F02", "Coefficient Giving (Alternative Protein R&D RFP)", "R&D philanthropy (animal welfare)",
     "Ingredient R&D: off-flavour reduction, fat alternatives, egg replacement, fish flavours (tilapia, milkfish, carp, catfish); applicants must show a credible pathway to industry uptake",
     "None stated beyond topic list",
     "Global; for-profits and international applicants eligible; movement building in emerging economies is a separate fund priority",
     "Taste and price parity; industry uptake",
     "Up to USD 30 million, USD 0.1 to 5 million grants; closed 10 Aug and 15 Sep 2026; decisions by 31 Dec 2026",
     "AFN-01; AFN-02; AFN-03", "outside remit", "The RFP funds ingredient R&D on taste and price, not measurement, menus or policy."),
    ("F03", "Good Food Institute (Research Grant Program)", "open-access research grants",
     "Open-access research on organoleptic quality, cost and scale-up; 2025 round on fermentation functionality and cell lines",
     "None stated; no consumer research funded in 2025",
     "Global (26 countries funded)", "Research outputs that lower cost or improve taste",
     "Closed in 2026 with no reopening date", "AFN-08; AFN-09", "outside remit", "Not an open-access supply-side research topic; programme closed with no reopening date."),
    ("F04", "Bezos Centre for Sustainable Protein at NUS (Bezos Earth Fund)", "regional research centre and startup prize",
     "Microalgae and biomass fermentation, cultivated, plant and hybrid proteins; platforms for nutrition in Asian populations, safety and consumer acceptance; SGD 1 million prize per growth-stage startup at TRL 7 to 9",
     "None stated", "East and Southeast Asia, run from Singapore; Vietnam not named",
     "Taste and price parity; commercial viability", "USD 30 million centre (2024); prize call January 2026",
     "AFN-15; AFN-16; AFN-17", "outside remit", "A research centre and startup prize; not a funder of Vietnamese policy or market measurement."),
    ("F05", "ACE Movement Grants (12th round)", "small grants for animal advocacy",
     "Policy, standards and certification; farmer and producer engagement; culturally grounded welfare messaging; talent; organisational health; research with defined end users. Priority animals: aquatic, insects, wild, farmed amphibians, reptiles and birds",
     "Diet change and meat reduction programmes in any region; alternative proteins except policy; awareness without defined audiences; undirected research; projects that plausibly increase animals farmed",
     "Worldwide; especially Africa and Asia", "Not stated in the call",
     "Grants of USD 100,000 or less; organisations under 3 years old or budgets under USD 500,000; deadline 18 Oct 2026",
     "FUF-01; FUF-02", "outside remit", "Not a priority intervention for this round."),
    ("F06", "ACE-recommended institutional programmes (Sinergia Animal; Good Food Fund)", "implementers funded through ACE recommendations",
     "Institutional meat reduction in schools, universities and companies; certification of institutions at least 60% plant-based (China)",
     "n/a", "Argentina, Colombia, Indonesia, Thailand (Sinergia); China (Good Food Fund); not Vietnam",
     "Meals replaced per USD (3.4 for Sinergia), animals spared per USD (0.5), suffering-adjusted days",
     "Ongoing", "AFN-25; AFN-26; AFN-27", "outside remit", "Outside their institutional-menu programmes."),
    ("F07", "Animal Alliance Asia ReRoot Asia Fund", "regional regranter (diet change)",
     "Projects that bring diet change, including institutional menu offerings, through local advocates",
     "n/a", "2026: Taiwan, Philippines, Indonesia, Nepal, Pakistan, Japan; Vietnam not eligible",
     "Diet change achieved", "2026 round closed", "AFN-29", "outside remit", "Not a diet-change project."),
    ("F08", "Humane World for Animals (Viet Nam office; Forward Food)", "implementer with Vietnam staff",
     "In Viet Nam: cage-free hens, dog and cat meat, wildlife, disasters. Globally: Forward Food chef and nutritionist training and plant-based menu commitments; 2025 training included Viet Nam",
     "n/a", "Active in Viet Nam", "Meals shifted to plant-based (2.3 million a year committed in 2025, all countries)",
     "Ongoing; not known as a grantmaker in Vietnam", "AFN-22; AFN-23; AFN-24", "outside remit", "Outside its menu and welfare programmes; it implements rather than funds."),
    ("F09", "Lever Foundation", "corporate engagement NGO",
     "Corporate sourcing policies: cage-free and plant-based procurement ratios with hotels, foodservice and retailers",
     "n/a", "Hong Kong, China, Malaysia, Singapore, Philippines, Korea, India, Thailand; Vietnam not named",
     "Commitments secured; meals shifted (29 million claimed)", "July 2026 expansion to India and Thailand",
     "AFN-38; AFN-39", "outside remit", "Outside corporate procurement-ratio work."),
    ("F10", "Rockefeller Foundation school meals and the School Meals Coalition", "school-meal philanthropy and coalition",
     "Nutritious school meals; local and regenerative procurement; financing",
     "n/a", "Global, Bangkok office; Vietnam not named and not a coalition member",
     "Children reached; financing mobilised", "USD 100 million pledge (March 2025)",
     "AFN-32; AFN-33; APR-38", "outside remit", "Not a school-meal procurement or financing item."),
    ("F11", "ADB Ventures", "development-finance venture investor",
     "Early-stage companies in six sectors including sustainable agriculture and food; tickets USD 0.1 to 4 million",
     "Portfolio targets: 80% strong climate mitigation or adaptation impact, 75% strong female participation, 100% crowding in capital",
     "Emerging Asia; Vietnam eligible", "Climate impact per investment; gender; crowding in",
     "Ongoing", "AIS-22; CAP-45", "outside remit", "A venture investor; does not fund public goods or rules."),
    ("F12", "IFC (World Bank Group)", "development finance for companies",
     "Agribusiness value chains and jobs; climate finance; Entobel insect-feed precedent (USD 2.5 million)",
     "n/a", "Vietnam office; active in Vietnamese agribusiness", "Commercial viability, jobs, climate co-benefits",
     "Ongoing", "AIS-20; CAP-41; CAP-42; ECO-03", "outside remit", "IFC invests in companies; public goods are outside its investment remit."),
    ("F13", "UNICEF Viet Nam (Country Programme 2027 to 2031)", "UN child-nutrition agency",
     "Stunting, overweight; school food and complementary food standards; marketing restrictions on unhealthy foods",
     "n/a", "Viet Nam", "Child nutrition outcomes", "Programme approved for 2027 to 2031",
     "APR-27", "outside remit", "Not a child-nutrition or school-food item."),
    ("F14", "ACIAR (Australia)", "bilateral agricultural research funder",
     "Nutrition-sensitive agriculture, food safety, One Health, smallholder livestock, ethnic minority livelihoods",
     "n/a", "Viet Nam programme", "Research outcomes for nutrition and livelihoods", "Annual operational plans",
     "APR-35", "outside remit", "Not an agricultural research-for-development topic."),
    ("F15", "The Navigation Fund", "farm animal welfare philanthropy",
     "Institutional impact (policies of food corporations, government and public institutions), movement power, capacity",
     "n/a", "No region named", "Not published", "Invitation only, three cycles a year",
     "AFN-06", "outside remit", "Not an institutional-policy item; grants by invitation."),
    ("F16", "Climate recommenders (Giving Green; Founders Pledge Climate Fund)", "donor advisers",
     "Recommend organisations; Giving Green lists GFI (public R&D, fair labelling, market access); Founders Pledge Climate Fund grants shown are energy policy",
     "n/a", "Global; no Southeast Asian food work found", "CO2e avoided per USD", "Annual recommendations",
     "AFN-30; AFN-31", "outside remit", "They recommend organisations, not Vietnamese projects, and would need CO2e per USD."),
    ("F17", "GAIN (workforce nutrition; Diet Quality Questionnaire)", "nutrition foundation",
     "Workforce nutrition (factory canteens), diet-quality measurement, fortification",
     "n/a", "Workforce nutrition countries do not include Vietnam; the Diet Quality Questionnaire covers Vietnam",
     "Diet quality; workers reached", "Ongoing", "AFN-49; APR-36; APR-37", "outside remit", "Not a nutrition or diet-measurement item."),
    ("F18", "World Bank and ADB (sovereign lending and technical assistance)", "multilateral development banks",
     "Agrifood climate (low-methane rice in Vietnam); ADB food systems USD 40 billion 2022 to 2030, a quarter of new money for nutrition",
     "n/a", "Viet Nam", "Emissions per USD; nutrition; value chains", "Ongoing",
     "APR-25; APR-28; APR-29; APR-31", "outside remit", "No protein or alternative-protein operation found in Vietnam."),
]

O = {}  # (funder, item) -> (class, reason)


def s(f, items, cls, reason):
    for i in items.split():
        O[(f, i)] = (cls, reason)


# F01 Nova Vista
s("F01", "DMV-01", "excluded", "Measures a culture-change route (chay days); culture change and individual diet change are out of scope.")
s("F01", "DMV-02 DMV-18", "partial", "Open data is in scope ('shared resources that lift the whole field'), but only as the evidence base for a procurement or market-commitment outcome.")
s("F01", "DMV-04", "partial", "Evidence for fair naming and labelling rules, which are in scope; the test itself is a milestone, not an outcome.")
s("F01", "DMV-05", "partial", "The extender arm could support public or corporate procurement of innovative protein; the chay-day arm is whole-food and diet change, both out of scope.")
s("F01", "DMV-08", "partial", "A buyer panel could underpin an advance market commitment or offtake pool; fits only if tied to such a commitment.")
s("F01", "DMV-10", "partial", "Follow-through on Accor's 50% vegetarian or plant-based target is corporate-commitment work (in scope), but the target counts vegetarian dishes, mostly whole-food.")
s("F01", "DMV-13", "partial", "Labelling rules are in scope; chay claims concern mostly traditional and whole-food products.")
s("F01", "DMV-14", "partial", "Labelling policy is in scope; blended meat is not among the named product classes.")
s("F01", "DMV-15", "fits", "Fair naming rules for novel foods; 'defending against unfair labelling rules' is in scope.")
s("F01", "DMV-16", "fits", "A regulatory pathway question for fermentation-derived protein, a named product class.")
s("F01", "DMV-17", "partial", "Public procurement of innovative protein is the named priority; as written the move opens public meals to plant protein generally, including tofu and legumes (whole food). Recast as a procurement standard for innovative protein to fit.")
s("F01", "TPP-01", "partial", "Textured soy is the base of plant-based meat; a procurement or offtake commitment could fit, but whether funders count it as 'innovative' is untested and direct investment is excluded.")
s("F01", "TPP-03", "partial", "Blends are not a named class; could enter through processors' protein-ratio commitments.")
s("F01", "TPP-04", "fits", "The product a public or corporate procurement commitment would buy; both levers are named priorities.")
s("F01", "TPP-05", "partial", "Dairy alternatives are in scope for policy and market shaping; product development is direct R&D and excluded.")
s("F01", "TPP-06", "partial", "Fermentation-derived protein is a named class; rules and procurement fit, product development does not.")
s("F01", "TPP-07", "fits", "The GMO-labelling and novel-food pathway (DMV-16) is exactly the policy work in scope.")
s("F01", "TPP-10", "partial", "Cultivated meat is a named class and pathway work fits, but Part VI finds no domestic demand before the mid-2030s.")

# F02 Coefficient Giving
s("F02", "DMV-03", "partial", "Sensory tests in Vietnamese dishes could be the 'pathway to industry uptake' inside an R&D grant, not a stand-alone grant.")
s("F02", "DMV-08", "partial", "Named buyers and qualification times are the uptake evidence applicants must show.")
s("F02", "TPP-01 TPP-03", "partial", "Fits only where framed as off-flavour reduction or fat alternatives.")
s("F02", "TPP-05 TPP-06", "fits", "Off-flavour reduction and functionality of plant and fungal proteins are named topics (round closed; decisions by 31 Dec 2026).")
s("F02", "TPP-07", "partial", "Egg replacement is a named topic; specialty dairy proteins are not.")
s("F02", "TPP-08", "partial", "Fish-flavour characterisation of catfish and tilapia is a named topic, but Part VI finds plant-based seafood the weakest export bet.")

# F03 GFI
s("F03", "DMV-03", "partial", "Organoleptic research is a priority; a Vietnamese sensory platform fits only inside an open-access research project.")
s("F03", "TPP-01 TPP-03 TPP-07", "partial", "Cost, scale-up and functionality research fits in principle; programme closed with no reopening date.")
s("F03", "TPP-05 TPP-06", "fits", "Plant-protein functionality and fermentation-derived functionality are core priorities (2025 round); programme now closed.")
s("F03", "TPP-10", "fits", "Cell-line research funded in 2025; programme now closed.")

# F04 Bezos Centre NUS
s("F04", "DMV-03 DMV-04", "fits", "Consumer acceptance is one of its research platforms; co-run tests in Vietnamese formats with a Vietnamese institute.")
s("F04", "DMV-05", "partial", "Hybrid acceptance and nutrition in Asian populations fit as research; a menu programme does not.")
s("F04", "DMV-07", "partial", "Safety and nutrition platforms are adjacent to chay composition work.")
s("F04", "DMV-17", "partial", "Protein-quality evidence for Asian populations could support a protein-quality basis for public meals.")
s("F04", "TPP-01 TPP-05 TPP-07", "partial", "Plant and fermentation proteins are research areas (a tofu by-product project exists); product scale-up is for the prize, which needs TRL 7 to 9 and no Vietnamese candidate was found.")
s("F04", "TPP-03 TPP-06 TPP-10", "fits", "Hybrids, biomass fermentation and cultivated proteins are named research areas.")

# F05 ACE Movement Grants
s("F05", "DMV-01", "partial", "Research with a defined end user is a priority, but the aim is to size a diet-change route and diet-change work is excluded; fits only as research for NIN or the statistics office.")
s("F05", "DMV-03 DMV-04 DMV-06 DMV-08 DMV-11", "excluded", "Alternative-protein work other than policy is excluded.")
s("F05", "DMV-05 DMV-10", "excluded", "Diet change and meat reduction programmes are excluded in any region.")
s("F05", "DMV-13 DMV-14 DMV-15 DMV-16", "partial", "Alternative-protein policy and standards work is allowed, for organisations under 3 years old or with budgets under USD 500,000, at USD 100,000 or less; farmed mammals are not a priority animal group.")
s("F05", "DMV-17", "partial", "Standards for public meals are policy work; framed as meat reduction it falls in the excluded diet-change category.")
for t in ["TPP-%02d" % i for i in range(1, 11)]:
    s("F05", t, "excluded", "Alternative-protein product work is excluded; only policy is funded.")

# F06 ACE-recommended institutional programmes
s("F06", "DMV-05", "not in geography", "Institutional meat reduction is their core programme (3.4 meals per USD), but they work in Latin America, Indonesia, Thailand and China.")
s("F06", "DMV-10", "not in geography", "Menu commitments fit their model; no Vietnam operations.")
s("F06", "DMV-17", "not in geography", "Good Food Fund aligns certification with national dietary guidelines (China); no Vietnam work.")
s("F06", "TPP-04", "not in geography", "A canteen dish base would serve their menu programmes; not in Vietnam.")

# F07 ReRoot
s("F07", "DMV-01", "not in geography", "Diet-change evidence could support a ReRoot project, but Vietnam is not eligible in 2026.")
s("F07", "DMV-05 DMV-10 DMV-17", "not in geography", "Institutional menu change is in scope; Vietnam is not an eligible country in 2026.")
s("F07", "TPP-04", "not in geography", "Would serve institutional menu projects; Vietnam not eligible.")

# F08 Humane World
s("F08", "DMV-05", "fits", "As implementer or partner, not funder: Forward Food menu work counts meals shifted, and it trained chefs and nutritionists in Viet Nam in 2025.")
s("F08", "DMV-10", "fits", "As implementer: chef training for hotel kitchens, where Accor's group target already applies.")
s("F08", "DMV-01", "partial", "Would use a chay-day baseline to target menu work; does not fund surveys.")
s("F08", "DMV-17", "partial", "Nutritionist training supports menu guidance; Forward Food promotes whole-food plant dishes rather than novel protein.")
s("F08", "TPP-04", "partial", "Menu programmes use whole-food dishes; a canteen protein ingredient could be used but is not its focus.")

# F09 Lever
s("F09", "DMV-05 DMV-10 DMV-17", "not in geography", "Procurement-ratio work with hotels and foodservice fits; Vietnam is not in its programme (2026 expansion went to India and Thailand).")
s("F09", "TPP-04", "not in geography", "A canteen or hotel protein ingredient serves procurement-ratio commitments; not in Vietnam.")

# F10 Rockefeller and SMC
s("F10", "DMV-17", "not in geography", "School-meal procurement is its lever (favouring local and regenerative sourcing); Vietnam not named and not a coalition member.")
s("F10", "TPP-04", "not in geography", "Only the school-meal version would be relevant; Vietnam not covered.")

# F11 ADB Ventures
s("F11", "TPP-01", "partial", "An investable B2B ingredient, but import substitution displaces about no meat and no CO2e (soy for soy), so it would not count towards the 80% strong-climate-impact target.")
s("F11", "TPP-02", "partial", "Upgrades on existing chay days displace no meat; weak climate case.")
s("F11", "TPP-03", "fits", "Displaces meat by construction: about 57 t CO2e and about 540 animals per t of protein (our calculation); needs a processor partner.")
s("F11", "TPP-04", "partial", "Displaces meat (about 45 t CO2e per t of protein), but canteen uptake is unproven and suppliers are small.")
s("F11", "TPP-05 TPP-07", "partial", "Adds protein to plant milk or formula; no measured displacement, so the climate case rests on unmodelled dairy displacement.")
s("F11", "TPP-06", "partial", "Displaces meat only when used as an extender; on the Vietnamese grid fungal protein emits 3.8 to 11.7 t CO2e per t of protein.")
s("F11", "TPP-08", "partial", "Export manufacturing; displacement abroad is unmeasured.")
s("F11", "DMV-12", "partial", "Climate-relevant, but a benchmark is a public good; ADB technical assistance fits better than venture money.")

# F12 IFC
s("F12", "TPP-01", "partial", "Import substitution (about USD 16 to 23 million of imports a year by 2035 on the benchmark path, our calculation) and jobs fit IFC's agribusiness case; ticket size and named offtake are the hurdles, and the climate case is weak.")
s("F12", "TPP-03 TPP-05 TPP-06", "partial", "Ingredient plants supplying large processors or dairies fit IFC's value-chain lens once offtake exists.")
s("F12", "TPP-08", "partial", "Export co-packing by seafood or cashew processors fits IFC's existing Vietnamese clients.")
s("F12", "DMV-12", "partial", "A feed footprint benchmark fits IFC advisory work with feed mills (Entobel and Mavin precedents), not investment.")

# F13 UNICEF
s("F13", "DMV-17", "partial", "UNICEF will help strengthen school food standards (CPD para 18); a protein-quality basis fits, but meat reduction is not its aim and processed plant products will be judged on sodium and processing.")
s("F13", "DMV-07", "partial", "Composition data on chay foods (protein, additives, sodium) feed healthy-food standards and marketing rules.")
s("F13", "DMV-01", "partial", "A diet-survey item fits nutrition monitoring.")
s("F13", "TPP-04", "partial", "Only the school version, and only if it beats eggs and milk on nutrients per VND.")

# F14 ACIAR
s("F14", "TPP-01 TPP-05", "partial", "Domestic soy, mung bean or rice protein value chains with smallholders fit nutrition-sensitive agriculture; a processing plant alone does not.")
s("F14", "DMV-07", "partial", "Food-safety research (authenticity, meat DNA) fits its food-safety theme.")
s("F14", "DMV-12", "partial", "Feed research is adjacent to its livestock projects.")

# F15 Navigation Fund
s("F15", "DMV-05 DMV-10 DMV-17", "partial", "Institutional impact is its first priority (policies of food corporations and public institutions); invitation only; no region named.")

# F16 climate recommenders
s("F16", "DMV-15 DMV-16", "partial", "Giving Green backs GFI's alternative-protein policy work (labelling, market access); Vietnam-specific work would need a GFI-type grantee.")

# F17 GAIN
s("F17", "DMV-01", "partial", "The Diet Quality Questionnaire already covers Vietnam and could carry a chay-day item.")
s("F17", "DMV-05", "not in geography", "Workforce nutrition fits factory canteens, but Vietnam is not a programme country.")

# F18 World Bank and ADB sovereign
s("F18", "DMV-17", "partial", "ADB counts a quarter of new food-systems money as nutrition; public-meal standards could ride on nutrition lending; no protein component found.")
s("F18", "DMV-02 DMV-18 DMV-19", "partial", "Trade and statistics technical assistance.")
s("F18", "TPP-01 TPP-05", "partial", "Value-chain lending for domestic soy, mung bean or rice; no alternative-protein operation found.")
s("F18", "DMV-12", "partial", "Agrifood climate work in Vietnam is rice methane; feed footprints are adjacent.")


def main():
    rows = []
    for fid, fname, ftype, scope, excl, geo, metric, status, src, dcls, dreason in FUNDERS:
        for iid, iname in ITEMS:
            cls, reason = O.get((fid, iid), (dcls, dreason))
            rows.append({
                "item_id": iid, "item": iname, "funder_id": fid, "funder": fname, "fit": cls, "reason": reason,
                "source_ids": src + ("; demand_moves.csv" if iid.startswith("DMV") else "; target_product_profiles.csv"),
                "evidence_label": "general" if fid in ("F01", "F02", "F03", "F05", "F15", "F16") else ("VN-direct" if fid in ("F08", "F13", "F14", "F18", "F12", "F11") else "VN-adjacent"),
                "confidence": "Medium", "demand_evidence_type": "stated",
                "notes": "Funder's stated scope read against the item; 'stated' is the funder's stated priority (revealed evidence of what it will pay for).",
            })
    with open(os.path.join(OUT, "data_funder_fit.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0].keys()))
        w.writeheader()
        for r in rows:
            w.writerow(r)
    prof = []
    for fid, fname, ftype, scope, excl, geo, metric, status, src, dcls, dreason in FUNDERS:
        prof.append({"funder_id": fid, "funder": fname, "type": ftype, "scope": scope, "exclusions": excl,
                     "geography": geo, "metric": metric, "status_2026": status, "source_ids": src,
                     "evidence_label": "general", "confidence": "Medium", "demand_evidence_type": "stated",
                     "notes": "From the funder's own pages as read by the wave 7 actor check or this line."})
    with open(os.path.join(OUT, "data_funder_profiles.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=list(prof[0].keys()))
        w.writeheader()
        for r in prof:
            w.writerow(r)
    # summary
    from collections import Counter, defaultdict
    by_item = defaultdict(Counter)
    for r in rows:
        by_item[r["item_id"]][r["fit"]] += 1
    abbr = {"fits": "F", "partial": "P", "excluded": "X", "outside remit": ".", "not in geography": "G"}
    print("item   " + " ".join(f[0][1:] for f in FUNDERS) + "   fits partial excl geo")
    for iid, _ in ITEMS:
        line = " ".join(abbr[O.get((f[0], iid), (f[9], ""))[0]].rjust(2) for f in FUNDERS)
        c = by_item[iid]
        print(f"{iid} {line}   {c['fits']} {c['partial']} {c['excluded']} {c['not in geography']}")
    tot = Counter(r["fit"] for r in rows)
    print(tot)


if __name__ == "__main__":
    main()
