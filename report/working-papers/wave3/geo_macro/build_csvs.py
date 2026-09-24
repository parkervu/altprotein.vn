import csv
H=["driver","indicator","value","unit","horizon_year","scenario_or_source_model","foresight_type","source_ids","evidence_label","confidence","notes"]
R=[]
def a(*x): R.append(dict(zip(H,x)))
# Demography
pop={2025:101.60,2030:104.25,2035:106.53,2040:108.44,2045:109.69,2050:110.01}
old={2025:9.5,2030:11.8,2035:13.8,2040:15.7,2045:17.6,2050:20.0}
wa={2025:68.74,2030:71.18,2035:72.32,2040:72.30,2045:71.34,2050:69.37}
was={2025:67.7,2030:68.3,2035:67.9,2040:66.7,2045:65.0,2050:63.1}
oadr={2025:14.0,2030:17.3,2035:20.4,2040:23.6,2045:27.0,2050:31.7}
for y in [2025,2030,2035,2040,2045,2050]:
    a("demography","Population",pop[y],"million",y,"UN WPP 2024 medium variant (via OWID)","projection","GEO-31; QNT (balance model uses same series)","VN-direct","Medium","Same series as QNT and edition 1.0 GT-12. GSO 2025 = 102.3 M (MI-083); do not mix series.")
for y in [2025,2030,2035,2040,2045,2050]:
    a("demography","Share of population aged 65+",old[y],"%",y,"UN WPP 2024 medium variant (via OWID)","projection","GEO-31","VN-direct","Medium","Our calculation from age-group counts. Crosses 14% ('aged society') around 2036.")
for y in [2025,2030,2035,2040,2045,2050]:
    a("demography","Working-age population (15 to 64)",wa[y],"million",y,"UN WPP 2024 medium variant (via OWID)","projection","GEO-31","VN-direct","Medium",f"Our calculation: total minus 0-14 minus 65+. Share of population {was[y]}%. Peaks about 2035 to 2040.")
for y in [2025,2030,2040,2050]:
    a("demography","Old-age dependency ratio (65+ per 100 aged 15 to 64)",oadr[y],"per 100",y,"UN WPP 2024 medium variant (via OWID)","projection","GEO-31","VN-direct","Medium","Our calculation.")
a("demography","Children aged 0 to 14",23.2,"million",2025,"UN WPP 2024 medium variant (via OWID)","projection","GEO-31","VN-direct","Medium","Falls to 18.7 M in 2050.")
a("demography","Children aged 0 to 14",18.7,"million",2050,"UN WPP 2024 medium variant (via OWID)","projection","GEO-31","VN-direct","Medium","")
urb={2025:38.8,2030:40.5,2035:42.1,2040:43.7,2045:45.2,2050:46.5}
rur={2025:62.1,2030:62.0,2040:61.1,2050:58.8}
for y,v in urb.items():
    a("demography","Urban share of population",v,"%",y,"UN World Urbanization Prospects (national definitions), via OWID","projection","GEO-32","VN-direct","Medium","Our calculation from urban and rural counts; totals match WPP 2024. GSO 2025 = 38.6% (MI-084). Definition may change after 2025 administrative reform.")
for y,v in rur.items():
    a("demography","Rural population",v,"million",y,"UN World Urbanization Prospects via OWID","projection","GEO-32","VN-direct","Medium","Rural population declines slowly; Vietnam remains majority rural on national definitions to 2050.")
# Income
a("income","Real GDP growth target, average 2026 to 2030","10 or more","% a year",2030,"14th Party Congress resolution (official target)","projection","GEO-33","VN-direct","High","Official target, not a model projection.")
a("income","GDP per capita target","about 8,500","USD (current)",2030,"14th Party Congress resolution (official target)","projection","GEO-33","VN-direct","High","Nominal USD; includes price and exchange-rate effects.")
a("income","Real GDP growth assumption, 2031 to 2050","about 7.5","% a year","2031 to 2050","Revised PDP8, Decision 768/QD-TTg (planning assumption)","projection","GEO-26; FTG-15","VN-direct","High","Planning assumption for power demand; 10% a year assumed for 2026 to 2030.")
a("income","Real GDP growth, average 2026 to 2035",5.7,"% a year","2026 to 2035","USDA Agricultural Projections to 2035 (Feb 2026)","projection","QNT-02","VN-direct","Medium","Read by QNT; used as QNT base path.")
a("income","Per-capita GDP growth needed for high income by 2045","about 6","% a year","2025 to 2045","World Bank, Viet Nam 2045: Trading Up (Nov 2024)","projection","GEO-34; GEO-35","VN-direct","High","'More than tripling' current income.")
paths={"Official-type path (10% GDP growth to 2030, 7.5% after)":{2030:7900,2040:15600,2050:31800},"USDA-type path (5.7% to 2035, 4.5% after)":{2030:6500,2040:10200,2050:15600},"Slow path (5%, then 4% to 2040, then 3%)":{2030:6300,2040:8900,2050:11800}}
for p,d in paths.items():
    for y,v in d.items():
        a("income","Real GDP per capita, illustrative",v,"USD (constant 2025, rounded)",y,p,"estimate","GEO-33; GEO-26; QNT-02; MI-081 (edition 1.0)","VN-direct","Low","Our arithmetic from USD 5,026 in 2025 and UN WPP 2024 population. Not a forecast; no exchange-rate effect.")
# Trade
a("trade","US tariff on products of Vietnam (Section 301, forced-labour import ban investigation)",12.5,"% ad valorem","2026 (from 24 Jul)","USTR notice, Federal Register 2026-15181","trend","GEO-04","VN-direct","High","Economies with forced-labour import bans or trade-agreement commitments get 10%. Replaced 10% Section 122 surcharge (24 Feb to 24 Jul 2026) and 20% IEEPA rate (Aug 2025 to Feb 2026).")
a("trade","Vietnamese MOUs to buy US farm commodities","over 2.9","USD billion","2025 to 2026","US-Vietnam joint statement, 26 Oct 2025","signal","GEO-02","VN-direct","High","20 MOUs; products not named. Politically anchored share of US soy, maize, DDGS, wheat.")
a("trade","China commitment to buy US soybeans","at least 25","Mt a year","2026 to 2028","US White House fact sheet, 1 Nov 2025","projection","GEO-06","general","High","Plus 12 Mt in Nov to Dec 2025. Managed trade; compliance not verified.")
for y,v in {2025:111.8,2030:98.4,2035:98.3}.items():
    a("trade","China soybean imports",v,"Mt",y,"OECD-FAO Agricultural Outlook 2026-2035 baseline","projection","GEO-37","general","Medium","Read from OECD SDMX API. Minus 12% 2025 to 2035; Chinese output 20.9 to 30.7 Mt.")
for y,v in {2025:108.5,2030:106.1,2035:107.2}.items():
    a("trade","Brazil soybean exports",v,"Mt",y,"OECD-FAO Agricultural Outlook 2026-2035 baseline","projection","GEO-37","general","Medium","Flat; production 177.7 Mt (2025) to 185.9 Mt (2035).")
for y,v in {2025:30.5,2030:32.8,2035:35.6}.items():
    a("trade","Argentina protein-meal exports",v,"Mt",y,"OECD-FAO Agricultural Outlook 2026-2035 baseline","projection","GEO-37","general","Medium","Argentina is Vietnam's main soybean-meal origin.")
for y,v in {2025:43.8,2030:48.5,2035:57.2}.items():
    a("trade","Brazil maize exports",v,"Mt",y,"OECD-FAO Agricultural Outlook 2026-2035 baseline","projection","GEO-37","general","Medium","Brazil supplied 34.8% of Vietnam's maize imports in 2025 (MAC-08).")
a("trade","Argentina maize exports",33.3,"Mt",2030,"OECD-FAO Agricultural Outlook 2026-2035 baseline","projection","GEO-37","general","Medium","35.1 Mt in 2025. Argentina supplied 46.5% of Vietnam's maize imports in 2025.")
for y,v in {"2026":"24","Dec 2027":"21","Dec 2028":"15"}.items():
    a("trade","Argentina export duty, soybeans",v,"%",y,"Decree 423/2026 (official schedule)","projection","GEO-38","general","Medium","Soybean meal and oil: 22.5% to 19.5% to 14%. Maize 8.5% to 5.5% by Dec 2028.")
a("trade","China target share of soybean meal in feed",10,"%",2030,"MARA three-year action plan (2023)","projection","GEO-10; GEO-11","general","Medium","2025 target below 13% missed (13.4% reported); USDA and industry estimate about 16% in 2024.")
a("trade","China grain production capacity target","above 725 (1.45 trillion jin)","Mt",2030,"15th Five-Year Plan (binding target)","projection","GEO-12","general","Low","Read via encyclopaedia summary; primary text not read.")
a("trade","EUDR application date, large and medium operators","30 Dec 2026","date",2026,"EU Regulation 2023/1115 as amended Dec 2025","projection","GEO-07; GEO-08","general","High","Micro and small: 30 Jun 2027. Does not cover meat or fish from soy-fed animals.")
a("trade","CBAM: sectors covered","cement, iron and steel, aluminium, fertilisers, electricity, hydrogen","list",2026,"EU CBAM Regulation; Council general approach 12 Jun 2026","trend","GEO-09","general","High","Downstream extension about 180 to 457 metal-intensive goods under negotiation; annual review from 2028. No agriculture or food.")
a("trade","Share of traded grain and fertiliser passing at least one maritime chokepoint",54,"%","2015 (vs 43% in 2000)","Chatham House (Bailey and Wellesley 2017)","trend","GEO-40","general","Medium","Over a quarter of global soybean exports pass the Strait of Malacca.")
# Disease
a("disease","Share of ASF outbreaks caused by recombinant genotype I/II virus, northern and central Vietnam","14.1 to 42.2","%","2023 to 2024","Molecular surveillance (peer-reviewed)","trend","GEO-17","VN-direct","Medium","Abstract read. Commercial genotype II vaccines do not fully protect (GEO-18).")
a("disease","ASF outbreaks reported",1669,"outbreaks",2024,"Department of Animal Health data in peer-reviewed review","trend","GEO-15","VN-direct","Medium","952 (2023), 1,229 (2022), 3,029 (2021), 1,569 (2020). ASF returned strongly from Q3 2025 (1.2 to 1.3 M pigs culled, edition 1.0).")
a("disease","Prophylactic antibiotic use in livestock","banned","status","2026 (from 1 Jan)","Decree 13/2020/ND-CP timeline","trend","GEO-24","VN-direct","Medium","Growth promoters banned from 1 Jan 2018. Treatment only on diagnosis.")
a("disease","Global antimicrobial use in food animals",107472,"t",2030,"Mulchandani et al. 2023 model (current trends)","projection","GEO-25","general","High","+8.0% from 99,502 t in 2020; 67% of hotspots in Asia.")
a("disease","Annual growth in high-consequence zoonotic spillover events","4.98 (CI 3.22 to 6.76)","% a year","1963 to 2019 (trend)","Meadows et al. 2023","trend","GEO-43","general","High","Deaths +8.7% a year. Excludes COVID-19.")
a("disease","Yearly probability of extreme epidemics","up to 3 times current","multiplier","coming decades","Marani et al. 2021","projection","GEO-44","general","Medium","Published estimate based on rising zoonotic emergence rates.")
# Energy
a("energy","LNG-fired power capacity",22524,"MW",2030,"Revised PDP8, Decision 768/QD-TTg","projection","GEO-26","VN-direct","High","9.5 to 12.3% of capacity. Domestic gas 10,861 to 14,930 MW.")
a("energy","Coal-fired power capacity",31055,"MW",2030,"Revised PDP8, Decision 768/QD-TTg","projection","GEO-26","VN-direct","High","13.1 to 16.9% of capacity. 25,798 MW converted to biomass or ammonia by 2050.")
a("energy","LNG power co-firing hydrogen","18,200 to 26,123","MW",2050,"Revised PDP8, Decision 768/QD-TTg","projection","GEO-26; FTG-15","VN-direct","High","Continued gas exposure to 2050.")
a("energy","Electricity imports capacity (Laos, China)","9,360 to 12,100","MW",2030,"Revised PDP8, Decision 768/QD-TTg","projection","GEO-26","VN-direct","High","4.0 to 5.1% of capacity.")
a("energy","Nuclear: Ninh Thuan 1 (2 x VVER-1200, Russia)",2400,"MW","2030 to 2035","Intergovernmental agreement 23 Mar 2026; PDP8 window 2030 to 2035","signal","GEO-27; GEO-28","VN-direct","Medium","PM target end-2030; WNA 'by 2035'. Ninh Thuan 2 partner after Japan's Jan 2026 exit to be chosen Q3 2026. Khanh Hoa (former Ninh Thuan).")
a("energy","Generation mix: coal share",45,"%",2023,"World Nuclear Association country profile","trend","GEO-27","VN-direct","Medium","274 TWh total; hydro 29%, solar 10%, gas 10%, wind 4%.")
a("energy","Average retail electricity price",2204.07,"VND per kWh excl. VAT",2025,"MOIT Decision 1279/QD-BCT (from 10 May 2025)","trend","GEO-30","VN-direct","High","+4.8%. EVN: 75% of output from costly coal, gas and LNG; generation 83% of cost.")
a("energy","LNG import capacity, Thi Vai terminal phase 1",1,"Mt a year",2026,"Global Energy Monitor","trend","GEO-29","VN-direct","Medium","First cargo July 2023; phase 2 (2 Mt a year) expected 2029.")
# Workforce
a("workforce","Rural workers in agriculture, forestry and fishery",16.5,"million",2025,"2025 Rural and Agricultural Census (official results)","trend","GEO-36","VN-direct","High","Down 2.84 M (14.66%) since 2016; 51.93% of rural workers.")
a("workforce","Households with agriculture, forestry or fishery as main activity",8.01,"million",2025,"2025 Rural and Agricultural Census","trend","GEO-36","VN-direct","High","50.57% of 15.84 M rural households (53.66% in 2016).")
a("workforce","Share of households raising 50 or more pigs",4.16,"%",2025,"2025 Rural and Agricultural Census","trend","GEO-36","VN-direct","High","2.55% in 2016. Chickens 100 or more: 8.20% (4.61%). Aquaculture 5 ha or more: 1.27% (0.74%).")
a("workforce","Small household farms' share of pig output","35 to 40","%","2023 to 2024","Industry and ministry data in peer-reviewed review and press","trend","GEO-15; GEO-47","VN-direct","Medium","Once about 80%. Household livestock share falling 5 to 7% a year (GEO-47). 2022 to 2023 market share: FDI firms 43%, households 38%, domestic firms 19%.")
for y,v in {2035:13.8,2050:10.6}.items():
    a("workforce","Rural agricultural, forestry and fishery workers, trend extrapolation",v,"million",y,"Our extrapolation of 2016 to 2025 decline (minus 1.75% a year)","estimate","GEO-36","VN-direct","Low","Mechanical trend, not a forecast; ignores urban agricultural workers and reclassification.")
with open("macro_drivers_2050.csv","w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=H); w.writeheader(); w.writerows(R)
print(len(R),"macro rows")

H2=["shock_type","event","date","magnitude","impact_channel_on_protein_supply","frequency_trend","source_ids","evidence_label","confidence","notes"]
S=[]
def s(*x): S.append(dict(zip(H2,x)))
s("animal disease","HPAI H5N1 first wave in Vietnam","2003 to 2004","About 45 million poultry culled or died; direct loss about 0.1 percentage points of GDP","Poultry supply loss; culling; trade bans","H5N1 now endemic in poultry; clade 2.3.4.4b spreading to mammals worldwide since 2021 to 2024","GEO-20","VN-direct","Medium","World Bank 2005 figure cited in a conference paper; primary not read.")
s("animal disease","African swine fever in China","2018 to 2019","Death and culling of about 40% of China's pig population (as cited)","Regional pork price spike; lower Chinese soymeal demand; pig smuggling pressure on Vietnam","ASF endemic across Asia","GEO-14","general","Medium","Figure is a citation inside GEO-14.")
s("animal disease","ASF epidemic phase in Vietnam","Feb to Dec 2019","Nearly 6 million pigs died or culled (over 20% of herd); 8,553 of 10,614 communes affected; pig prices +45% (traditional), +14% (commercial), +11% (modern); pig trade volume halved","Pork supply loss; feed demand drop; consolidation towards large farms","Epidemic 2019 to 2020, endemic from 2021","GEO-14; GEO-15; MAC-37","VN-direct","High","")
s("animal disease","ASF resurgence","2021","3,029 outbreaks in 59 of 63 provinces","Herd loss; smallholder exit","Endemic; outbreaks 952 (2023) to 1,669 (2024)","GEO-15","VN-direct","Medium","")
s("animal disease","Recombinant genotype I/II ASF virus spreads","2023 to 2024","Share of outbreaks 14.1% to 42.2% in northern and central Vietnam; resistant to commercial vaccines","Vaccine failure risk; renewed herd losses","Rising","GEO-16; GEO-17; GEO-18; GEO-19","VN-direct","Medium","")
s("animal disease","ASF return","Q3 2025 onward","1.2 to 1.3 million pigs culled in 2025","Pork supply and feed demand dip; price volatility","Recurring every 2 to 3 years since 2019","MAC-01; MAC-12 (edition 1.0)","VN-direct","Medium","")
s("animal disease","H5N1 in US dairy cattle (new host)","Mar 2024 onward","More than 1,000 herds; 71 US human H5 cases by Mar 2026; CDC public risk 'low'","New mammalian host; milk supply; pandemic risk signal","New","GEO-21; GEO-22; GEO-23","general","High","")
s("animal disease","H5N1 kills tigers and leopards in Vietnamese zoos","Aug to Oct 2024","47 tigers and 3 leopards died; mutations linked to mammalian adaptation","Signal of mammalian adaptation in Vietnam; poultry-sector risk","Mammal infections rising worldwide","GEO-46","VN-direct","High","")
s("pandemic","COVID-19 and 2022 disruptions","2020 to 2022","About 30% of small pig farmers left the sector (review estimate)","Labour, logistics and demand shock; smallholder exit","Zoonotic spillover events +4.98% a year (1963 to 2019)","MAC-43; GEO-43","VN-direct","Low","Farmer-exit figure from a single review.")
s("trade and conflict","Russia-Ukraine war","2022","Wheat import price USD 424/t in Sept 2022 (+37% y/y); Argentina raised meal and oil export duty from 31% to 33% (Mar 2022)","Feed grain and wheat prices; export taxes and restrictions","Export restrictions recur in each price crisis (2007-08, 2010-11, 2020, 2022)","MAC-44; GEO-39; GEO-42","VN-direct","Medium","Argentine duty change from a press title only (Low).")
s("trade policy","US-China tariff war, soy","2018 to 2019; 2025","China shifted soybean buying to Brazil; Nov 2025 deal commits China to 25 Mt a year of US soybeans 2026 to 2028","Reallocation of soy flows and basis premiums; Brazil surplus to other buyers","Recurring; managed trade","GEO-06","general","Medium","2018 details not re-read this wave.")
s("trade policy","US tariffs on Vietnam","Apr 2025 to Jul 2026","46% announced (Apr 2025); 20% applied (Aug 2025 to Feb 2026); 10% Section 122 (Feb to Jul 2026); 12.5% Section 301 (from 24 Jul 2026)","Seafood and processed-food export margins; pressure to buy US farm goods (MOUs over USD 2.9 bn)","High policy volatility; two further Section 301 cases open","GEO-02; GEO-03; GEO-04; GEO-05; GEO-48","VN-direct","High","46% figure from a commercial site (Low); applied rates from official sources.")
s("trade and conflict","Middle East conflict (US-Iran)","Feb to Apr 2026","Feed prices +10% to 14% (Jan to Apr); world urea USD 472 to 726/t (+54% in one month); logistics costs +20% to 30% international","Energy, fertiliser and freight costs into feed and fermentation inputs","New; Hormuz exposure for LNG, urea and oil","MAC-24; COST-30; COST-33; GEO-45","VN-direct","Medium","GEO-45 is a 2026 peer-reviewed paper (title only read) naming the conflict.")
s("commodity price","Fishmeal price peak","Aug 2026","USD 2,500/t (+43% y/y), highest in the 2020 to 2026 series; fishmeal to soybean meal price ratio 6.2 (3.8 in 2024)","Aquafeed cost; incentive for fishmeal substitutes","Volatility tied to El Nino and Peru quotas (see CLM)","FM-01; GT-15 (edition 1.0); CLM-27","general","High","")
s("climate","Mekong salinity intrusion","2019 to 2020 dry season","1.69 million ha (42.5% of the delta) affected; 26,000 ha rice lost; 8,715 ha aquaculture damaged","Local crop and aquaculture losses; land shifts to shrimp","Human-driven drivers (subsidence, sand mining) dominate to 2050","CLM-37; CLM-15","VN-direct","Medium","Covered in CLM; listed here for completeness.")
s("infrastructure","Panama Canal drought restrictions","2023 to 2024","Transit restrictions (magnitude not re-read this wave)","US Gulf grain freight to Asia; route shifts","Climate-linked; recurring risk","GEO-41","general","Low","UNCTAD 2024 flags Suez and Panama vulnerability; numbers not read.")
s("regulation","Ban on prophylactic antibiotics in livestock","1 Jan 2026","Antibiotics only for diagnosed disease","Higher disease-management cost; biosecurity investment; possible short-run productivity dip","One-off rule change","GEO-24","VN-direct","Medium","Impact not yet measured.")
with open("shock_register.csv","w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=H2); w.writeheader(); w.writerows(S)
print(len(S),"shock rows")
