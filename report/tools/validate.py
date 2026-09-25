#!/usr/bin/env python3
"""Validate the content folder: citations, tags (evidence, foresight, demand evidence), links, embeds, frontmatter, tables, dashes.

Run from the folder root:  python3 tools/validate.py
Exit code 0 when no errors (warnings may remain).
"""
import csv, glob, json, os, re, sys
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
errors, warnings = [], []

sources = {r['source_id'] for r in csv.DictReader(open('data/sources.csv', encoding='utf-8'))}
kn = {k['id'] for k in json.load(open('data/key-numbers.json', encoding='utf-8'))}
charts = {c['id'] for c in json.load(open('charts/chart-specs.json', encoding='utf-8'))['charts']}
data_files = set(os.listdir('data')) | {'sources.csv'}

CITE = re.compile(r'\[@([^\]]+)\]')
CITE_ID = re.compile(r'^@?([A-Z0-9]+-\d+[a-z]?)$')
TAG = re.compile(r'\{(VN-direct|VN-adjacent|general)(\\?\|)(High|Medium|Low)\}')
TAGLIKE = re.compile(r'\{[^{}]*\|[^{}]*\}')
LINK = re.compile(r'\[\[([a-z0-9-]+)(#[a-z0-9-]+)?\]\]')
EMB = re.compile(r'\{\{(kn|chart):([a-z0-9-]+)\}\}')
DASH = re.compile('[—–]')
FX = re.compile(r'\{fx:([a-z]+)\}')
FX_OK = {'trend', 'projection', 'estimate', 'signal', 'wildcard', 'vision'}
DX = re.compile(r'\{dx:([a-z]+)\}')
DX_OK = {'stated', 'revealed', 'tested', 'inferred'}
CODE = re.compile(r'`[^`]*`')

pages = {}
for f in sorted(glob.glob('content/*/*.md')):
    s = open(f, encoding='utf-8').read()
    if not s.startswith('---'):
        errors.append(f'{f}: missing frontmatter'); continue
    fm = yaml.safe_load(s.split('---', 2)[1])
    body = s.split('---', 2)[2]
    for k in ['id', 'title', 'section', 'order', 'summary', 'audiences', 'key_numbers', 'charts']:
        if k not in fm:
            errors.append(f'{f}: frontmatter missing {k}')
    if fm['id'] in pages:
        errors.append(f'{f}: duplicate id {fm["id"]}')
    pages[fm['id']] = (f, fm, s, body)

for pid, (f, fm, s, body) in pages.items():
    # citations
    for m in CITE.finditer(s):
        for part in re.split(r';\s*', m.group(1)):
            mm = CITE_ID.match(part.strip())
            if not mm:
                errors.append(f'{f}: malformed citation [@{m.group(1)}]')
            elif mm.group(1) not in sources:
                errors.append(f'{f}: unknown source {mm.group(1)}')
    # tags
    lines = s.split('\n')
    for n, line in enumerate(lines, 1):
        for m in TAGLIKE.finditer(line):
            t = m.group(0)
            if t.startswith('{{'):
                continue
            if not TAG.fullmatch(t):
                if re.search(r'VN-|general', t):
                    errors.append(f'{f}:{n}: malformed evidence tag {t}')
        if line.lstrip().startswith('|'):
            for m in TAG.finditer(line):
                if m.group(2) == '|':
                    errors.append(f'{f}:{n}: unescaped tag pipe inside table: {m.group(0)}')
    # foresight tags: valid type; vision only in the vision chapter; the 2050 futures chapters (Part IV) must use them
    nofx = CODE.sub('', body)
    for m in FX.finditer(nofx):
        if m.group(1) not in FX_OK:
            errors.append(f'{f}: unknown foresight tag {m.group(0)}')
        elif m.group(1) == 'vision' and pid != 'ch24-vision-2050':
            errors.append(f'{f}: {{fx:vision}} used outside ch24-vision-2050')
    for m in re.finditer(r'\{fx[^}]*\}', nofx):
        if not FX.fullmatch(m.group(0)):
            errors.append(f'{f}: malformed foresight tag {m.group(0)}')
    FUTURES_2050 = {'ch20-drivers-2050', 'ch21-frontier-technology', 'ch22-protein-balance-2050', 'ch23-scenarios-2050', 'ch24-vision-2050', 'ch28-robust-moves'}
    if pid in FUTURES_2050 and not FX.search(nofx):
        warnings.append(f'{f}: futures page without foresight tags')
    # demand evidence tags: valid type; demand pages (Part III) should use them
    for m in DX.finditer(nofx):
        if m.group(1) not in DX_OK:
            errors.append(f'{f}: unknown demand evidence tag {m.group(0)}')
    for m in re.finditer(r'\{dx[^}]*\}', nofx):
        if not DX.fullmatch(m.group(0)):
            errors.append(f'{f}: malformed demand evidence tag {m.group(0)}')
    if (str(fm.get('part', '')).startswith('III.') or pid in ('ch25-demand-to-frontier', 'ch29-actor-check')) and not DX.search(nofx):
        warnings.append(f'{f}: demand page without demand evidence tags')
    # links
    for m in LINK.finditer(s):
        if m.group(1) not in pages:
            errors.append(f'{f}: broken link [[{m.group(1)}]]')
    # embeds
    for m in EMB.finditer(s):
        kind, i = m.groups()
        if kind == 'kn' and i not in kn:
            errors.append(f'{f}: unknown key number {i}')
        if kind == 'chart' and i not in charts:
            errors.append(f'{f}: unknown chart {i}')
    for i in fm.get('key_numbers') or []:
        if i not in kn:
            errors.append(f'{f}: frontmatter key number {i} not in key-numbers.json')
    for i in fm.get('charts') or []:
        if i not in charts:
            errors.append(f'{f}: frontmatter chart {i} not in chart-specs.json')
    for i in fm.get('related_pages') or []:
        if i not in pages:
            errors.append(f'{f}: related page {i} not found')
    for d in fm.get('related_data') or []:
        if d not in data_files:
            errors.append(f'{f}: related data {d} not in data/')
    # dashes
    for n, line in enumerate(lines, 1):
        if DASH.search(line):
            errors.append(f'{f}:{n}: em or en dash')
    # placeholders
    for w in ['TODO', 'TBD', 'XXX', 'lorem']:
        if w in body:
            warnings.append(f'{f}: placeholder text "{w}"')
    # tables: column counts
    in_table, ncol = False, 0
    for n, line in enumerate(lines, 1):
        if line.startswith('|'):
            cells = re.split(r'(?<!\\)\|', line.strip())[1:-1]
            if not in_table:
                in_table, ncol = True, len(cells)
            elif len(cells) != ncol:
                errors.append(f'{f}:{n}: table row has {len(cells)} cells, header has {ncol}')
        else:
            in_table = False

# key numbers: pages exist, sources exist
for k in json.load(open('data/key-numbers.json', encoding='utf-8')):
    for sid in k.get('source_ids', []):
        if sid not in sources:
            errors.append(f'key-numbers {k["id"]}: unknown source {sid}')
    if k.get('primary_page') not in pages:
        errors.append(f'key-numbers {k["id"]}: primary_page {k.get("primary_page")} not a page')
    for field in ['label', 'value', 'context']:
        if DASH.search(str(k.get(field, ''))):
            errors.append(f'key-numbers {k["id"]}: dash in {field}')
# charts: placements
for c in json.load(open('charts/chart-specs.json', encoding='utf-8'))['charts']:
    for p in c['placement']:
        if p not in pages:
            errors.append(f'chart {c["id"]}: placement {p} not a page')
    for sid in c['source_ids']:
        if sid not in sources:
            errors.append(f'chart {c["id"]}: unknown source {sid}')
    df = c['data']['file']
    if not os.path.exists(df):
        errors.append(f'chart {c["id"]}: data file {df} missing')
# manifest
man = json.load(open('site-manifest.json', encoding='utf-8'))
for p in man['pages']:
    if p['id'] not in pages:
        errors.append(f'manifest page {p["id"]} missing')
missing = set(pages) - {p['id'] for p in man['pages']}
if missing:
    errors.append(f'pages not in manifest: {sorted(missing)}')
# unused key numbers / charts
used_kn = set(); used_ch = set()
for pid, (f, fm, s, body) in pages.items():
    used_kn |= set(re.findall(r'kn-[a-z0-9-]+', s)); used_ch |= set(re.findall(r'chart-[a-z0-9-]+', s))
for i in kn - used_kn: warnings.append(f'key number {i} defined but not used')
for i in charts - used_ch: warnings.append(f'chart {i} defined but not used')

print(f'{len(pages)} pages checked; {len(errors)} errors; {len(warnings)} warnings')
for e in errors[:200]: print('ERROR', e)
for w in warnings[:50]: print('WARN ', w)
sys.exit(1 if errors else 0)
