"""Build trade and ASC tables for W8-L2 from saved UN Comtrade and ASC register responses (raw/)."""
import csv, json, os
D = os.path.dirname(os.path.abspath(__file__))
R = os.path.join(D, 'raw')
NAMES = {156:'China',76:'Brazil',392:'Japan',688:'Serbia',842:'United States',360:'Indonesia',724:'Spain',
         702:'Singapore',616:'Poland',276:'Germany',458:'Malaysia',104:'Myanmar',792:'Turkey',251:'France',
         56:'Belgium',116:'Cambodia',124:'Canada',410:'Korea',764:'Thailand',348:'Hungary',528:'Netherlands',
         418:'Laos',490:'Other Asia not elsewhere specified',380:'Italy',826:'United Kingdom',554:'New Zealand',
         699:'India',512:'Oman',604:'Peru',686:'Senegal',218:'Ecuador',480:'Mauritius',152:'Chile',
         710:'South Africa',579:'Norway',36:'Australia',208:'Denmark',242:'Fiji',352:'Iceland',608:'Philippines',
         270:'Gambia',340:'Honduras',516:'Namibia',887:'Yemen'}
def nm(c): return NAMES.get(c, str(c))
def load(f): return json.load(open(os.path.join(R, f))).get('data', [])
BULK = 2.0  # USD per kg threshold separating bulk from specialty tiers (our choice)
Q = 'n/a (trade statistic)'

rows = []
for y in range(2019, 2026):
    d = load(f'mirror_210220_{y}.json')
    tv = sum(r['primaryValue'] for r in d); tw = sum((r.get('netWgt') or 0) for r in d) / 1000
    lo = [r for r in d if r.get('netWgt') and r['primaryValue'] / r['netWgt'] < BULK]
    hi = [r for r in d if r.get('netWgt') and r['primaryValue'] / r['netWgt'] >= BULK]
    lv = sum(r['primaryValue'] for r in lo); lw = sum(r['netWgt'] for r in lo) / 1000
    hv = sum(r['primaryValue'] for r in hi); hw = sum(r['netWgt'] for r in hi) / 1000
    top = sorted(d, key=lambda r: -(r.get('netWgt') or 0))[:5]
    tops = '; '.join(f"{nm(r['reporterCode'])} {round((r.get('netWgt') or 0)/1000):,} t at USD {r['primaryValue']/r['netWgt']:.2f} per kg" for r in top if r.get('netWgt'))
    note = 'Partner-reported exports to Vietnam, FOB, all end uses (food and feed not separable at HS6); tier split at USD 2 per kg is our choice'
    if y == 2025: note += '; Cambodia and some other partners had not reported 2025 when queried, so 2025 is a lower bound'
    rows.append(dict(record_id=f'FBA-TR-{y}-M', year=y, flow='imports into Vietnam', hs_code='2102.20',
        basis='mirror (partner-reported exports), FOB', value_usd_million=round(tv/1e6, 2), quantity_t=round(tw),
        unit_value_usd_per_kg=round(tv/1000/tw/1000*1000/1000, 2) if tw else '',
        bulk_tier_t=round(lw), bulk_tier_value_usd_million=round(lv/1e6, 2), bulk_tier_unit_value_usd_per_kg=round(lv/lw/1000, 2) if lw else '',
        specialty_tier_t=round(hw), specialty_tier_value_usd_million=round(hv/1e6, 2), specialty_tier_unit_value_usd_per_kg=round(hv/hw/1000, 2) if hw else '',
        top_partners_by_tonnage=tops, source_ids='FBA-17', evidence_label='VN-direct', confidence='Medium',
        demand_evidence_type='revealed', notes=note))
# fix unit value field
for r in rows:
    if r['quantity_t'] != '':
        r['unit_value_usd_per_kg'] = round(r['value_usd_million']*1e6/(r['quantity_t']*1000), 2)
# Vietnam-reported imports
for y in range(2019, 2024):
    d = [r for r in load(f'vn_2102_M_{y}.json') if r['cmdCode'] == '210220' and r.get('motCode', 0) == 0]
    if not d: continue
    r0 = d[0]; w = (r0.get('netWgt') or r0.get('qty') or 0) / 1000
    rows.append(dict(record_id=f'FBA-TR-{y}-VNM', year=y, flow='imports into Vietnam', hs_code='2102.20',
        basis='Vietnam-reported imports, CIF', value_usd_million=round(r0['primaryValue']/1e6, 2), quantity_t='',
        unit_value_usd_per_kg='', bulk_tier_t='', bulk_tier_value_usd_million='',
        bulk_tier_unit_value_usd_per_kg='', specialty_tier_t='', specialty_tier_value_usd_million='', specialty_tier_unit_value_usd_per_kg='',
        top_partners_by_tonnage='2023 by value: China USD 3.64 million, Cambodia 1.63, Indonesia 1.24, Brazil 0.88, United States 0.56, Canada 0.54' if y == 2023 else '',
        source_ids='FBA-18', evidence_label='VN-direct', confidence='Low', demand_evidence_type='revealed',
        notes=f'Value usable; Comtrade flags the net weight ({round(w):,} t) as estimated, with the same unit value for every partner, so tonnage and unit value are not used; 2024 not available at HS6 when queried'))
for y in (2024, 2025):
    d = load(f'mirrorM_210220_{y}.json')
    tv = sum(r['primaryValue'] for r in d); tw = sum((r.get('netWgt') or 0) for r in d) / 1000
    top = sorted(d, key=lambda r: -(r.get('netWgt') or 0))[:5]
    tops = '; '.join(f"{nm(r['reporterCode'])} {round((r.get('netWgt') or 0)/1000):,} t at USD {r['primaryValue']/r['netWgt']:.2f} per kg" for r in top if r.get('netWgt'))
    rows.append(dict(record_id=f'FBA-TR-{y}-X', year=y, flow='exports from Vietnam', hs_code='2102.20',
        basis='mirror (partner-reported imports from Vietnam), CIF', value_usd_million=round(tv/1e6, 2), quantity_t=round(tw),
        unit_value_usd_per_kg=round(tv/(tw*1000), 2), bulk_tier_t='', bulk_tier_value_usd_million='', bulk_tier_unit_value_usd_per_kg='',
        specialty_tier_t='', specialty_tier_value_usd_million='', specialty_tier_unit_value_usd_per_kg='', top_partners_by_tonnage=tops,
        source_ids='FBA-19', evidence_label='VN-direct', confidence='Medium', demand_evidence_type='revealed',
        notes='End use not stated; domestic yeast plants include AB Mauri La Nga (6,000 t a year) and Saf-Viet (Lesaffre) (IND-15; IND-17); the exporter is not identified in trade data'))
cols = list(rows[0].keys())
with open(os.path.join(D, 'data_inactive_yeast_trade.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); w.writerows(rows)

# Fishmeal prices paid
fr = []
for y in (2024, 2025):
    d = load(f'mirror_230120_{y}.json')
    tv = sum(r['primaryValue'] for r in d); tw = sum((r.get('netWgt') or 0) for r in d) / 1000
    ind = [r for r in d if r['reporterCode'] == 699][0]
    top = sorted(d, key=lambda r: -(r.get('netWgt') or 0))[:5]
    tops = '; '.join(f"{nm(r['reporterCode'])} {round(r['netWgt']/1000):,} t at USD {r['primaryValue']/r['netWgt']*1000:,.0f} per t" for r in top if r.get('netWgt'))
    miss = 'Peru, Ecuador, Senegal and Mauritius had not reported 2025 when queried (Peru shipped 10,012 t at USD 1,615 per t in 2024)' if y == 2025 else 'All main origins reported'
    fr.append(dict(record_id=f'FBA-FM-{y}', period=str(y), basis='mirror (partner-reported exports to Vietnam), FOB, HS 2301.20, all grades',
        value_usd_million=round(tv/1e6, 1), quantity_t=round(tw), unit_value_usd_per_t=round(tv/tw/1000*1000/1000*1000/1000*1000) if False else round(tv/(tw*1000)*1000),
        india_quantity_t=round(ind['netWgt']/1000), india_unit_value_usd_per_t=round(ind['primaryValue']/ind['netWgt']*1000),
        world_bank_benchmark_usd_per_t={2024: '1,699 (Peru 65% protein, CIF, annual mean)', 2025: '1,706 (annual mean)'}[y],
        top_origins=tops, source_ids='FBA-20; FM-01', evidence_label='VN-direct', confidence='Medium', demand_evidence_type='revealed', notes=miss))
tv = tw = iv = iw = 0
for p in ('202601','202602','202603','202604','202605','202606','202607'):
    d = load(f'fm_{p}.json')
    pv = sum(r['primaryValue'] for r in d if r.get('netWgt')); pw = sum(r['netWgt'] for r in d if r.get('netWgt')) / 1000
    i = [r for r in d if r['reporterCode'] == 699]
    tv += pv; tw += pw
    if i: iv += i[0]['primaryValue']; iw += i[0]['netWgt'] / 1000
    wb = {'202601':'Q1 2026 mean 1,832','202602':'Q1 2026 mean 1,832','202603':'Q1 2026 mean 1,832','202604':'Q2 2026 mean 2,045','202605':'Q2 2026 mean 2,045','202606':'2,145 (June)','202607':'2,103 (July)'}[p]
    fr.append(dict(record_id=f'FBA-FM-{p}', period=f'{p[:4]}-{p[4:]}', basis='mirror (partner-reported exports to Vietnam), FOB, HS 2301.20, all grades',
        value_usd_million=round(pv/1e6, 1), quantity_t=round(pw), unit_value_usd_per_t=round(pv/pw/1000*1000) if pw else '',
        india_quantity_t=round(i[0]['netWgt']/1000) if i else '', india_unit_value_usd_per_t=round(i[0]['primaryValue']/i[0]['netWgt']*1000) if i else '',
        world_bank_benchmark_usd_per_t=wb, top_origins='; '.join(f"{nm(r['reporterCode'])} {round(r['netWgt']/1000):,} t" for r in sorted(d, key=lambda r: -(r.get('netWgt') or 0))[:4] if r.get('netWgt')),
        source_ids='FBA-20; FM-01', evidence_label='VN-direct', confidence='Low', demand_evidence_type='revealed',
        notes=f'{len(d)} reporters had filed monthly data when queried; partial coverage'))
fr.append(dict(record_id='FBA-FM-2026-JAN-JUL', period='2026-01 to 2026-07', basis='sum of the monthly rows above (our calculation)',
    value_usd_million=round(tv/1e6, 1), quantity_t=round(tw), unit_value_usd_per_t=round(tv/tw), india_quantity_t=round(iw), india_unit_value_usd_per_t=round(iv/iw),
    world_bank_benchmark_usd_per_t='1,832 (Q1) to 2,145 (June); 2,500 in August 2026', top_origins='India, Thailand, Brazil, Oman',
    source_ids='FBA-20; FM-01', evidence_label='VN-direct', confidence='Low', demand_evidence_type='revealed',
    notes='Partial reporting; up about 39% on the 2025 annual unit value (our calculation); FOB excludes freight; grade mix unknown (Indian meal is often below 65% protein)'))
with open(os.path.join(D, 'data_fishmeal_prices_paid.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(fr[0].keys())); w.writeheader(); w.writerows(fr)

# ASC register, Vietnam
docs = json.load(open(os.path.join(R, 'asc_mills.json')))['documents']
vn = [r for r in docs if r.get('ISO2') == 'VN']
ar = []
def clean(s):
    s = s.replace('VIETNAMESE \u2013 FRENCH', 'VIETNAMESE-FRENCH')
    return s.replace(' \u2013 ', ', ').replace('\u2013', ', ').replace('\u2014', ', ').strip()
for r in sorted(vn, key=lambda r: (r['Certificate_Status'] != 'Certified', r['Ch_Name'])):
    sites = r.get('Sites', [])
    sp = sorted({s['Species'] for st in sites for s in st.get('Fed_Species', [])})
    ar.append(dict(certificate_number=r['Certificate_Number'], certificate_holder=clean(r['Ch_Name']), status=r['Certificate_Status'],
        valid_from=r['Valid_From'] if r['Valid_From'] != 'None' else '', valid_until=r['Valid_Until'] if r['Valid_Until'] != 'None' else '',
        standard_version=r['Standard_Version'], production_model=r['Production_Model'] if r['Production_Model'] != 'None' else '',
        species_fed='; '.join(sp), sites=len(sites), source_ids='FBA-04', evidence_label='VN-direct', confidence='High',
        demand_evidence_type='revealed', notes='ASC Find a Feed Mill register, queried 25 Sep 2026; dates day-month-year'))
with open(os.path.join(D, 'data_asc_feed_mills_vietnam.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(ar[0].keys())); w.writeheader(); w.writerows(ar)
from collections import Counter
c = Counter(r['Country'] for r in docs if r['Certificate_Status'] == 'Certified')
print('certified worldwide', sum(c.values()), c.most_common(5))
print('VN', Counter(r['status'] for r in ar))
