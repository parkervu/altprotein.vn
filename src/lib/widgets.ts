import playsJson from '../generated/plays.json';
import scenariosJson from '../generated/scenarios.json';
import { t, type Lang } from './i18n';
import { escapeHtml, foresightBadge } from './html';
import { href, PAGE_BY_ID } from './site';

type Row = Record<string, string>;
const PLAYS = playsJson as { plays: Row[]; criteria: Row[]; presets: Row[] };
const SCEN = scenariosJson as {
  scenarios: Row[];
  signposts: Row[];
  robustness: Row[];
  moves: Row[];
};

export const PLAY_ROWS = PLAYS.plays.filter((p) => p.type === 'play');
export const CRITERIA = PLAYS.criteria;
export const PRESETS = PLAYS.presets;

export function weightedScore(play: Row, preset: Row): number {
  const total = CRITERIA.reduce((n, c) => n + Number(preset[c.field]), 0) || 1;
  const sum = CRITERIA.reduce((n, c) => n + Number(play[c.field]) * Number(preset[c.field]), 0);
  return sum / total;
}

const e = escapeHtml;
const list = (s: string) =>
  s
    .split(/;\s*/)
    .map((x) => x.trim())
    .filter(Boolean);

function relatedLinks(ids: string, lang: Lang) {
  return list(ids)
    .filter((id) => PAGE_BY_ID.has(id))
    .map((id) => `<a href="${href(id, lang)}">${e(PAGE_BY_ID.get(id)!.short_title)}</a>`)
    .join(' · ');
}

function playCard(p: Row, lang: Lang, balanced: number): string {
  const s = t(lang).plays;
  const field = (label: string, value: string) =>
    value ? `<dt>${e(label)}</dt><dd lang="en">${e(value)}</dd>` : '';
  const scores = CRITERIA.map(
    (c) =>
      `<li><span>${e(c.label)}</span><b aria-label="${e(p[c.field])} of 5">${'●'.repeat(Number(p[c.field]))}<span class="off">${'●'.repeat(5 - Number(p[c.field]))}</span></b></li>`,
  ).join('');
  return `<details class="play-card" id="play-${e(p.play_id)}" data-play="${e(p.play_id)}">
<summary><span class="play-id">${e(p.play_id)}</span> <span class="play-name" lang="en">${e(p.name)}</span> <span class="play-score">${balanced.toFixed(2)}</span></summary>
<div class="play-body">
<p class="play-meta" lang="en">${e(p.family)} · ${e(p.segment)} · ${e(p.horizon)}</p>
<ul class="play-scores" aria-label="${e(t(lang).plays.score)}">${scores}</ul>
<dl>${field(s.what, p.what)}${field(s.whyVietnam, p.why_vietnam)}${field(s.mustBeTrue, p.must_be_true)}${field(s.killTests, p.kill_tests)}${field(s.firstCustomers, p.first_customers)}${field(s.partners, p.partners)}${field(s.horizon, p.horizon)}${field(s.capital, p.capital_note)}</dl>
${p.related_pages ? `<p class="play-related">${relatedLinks(p.related_pages, lang)}</p>` : ''}
</div>
</details>`;
}

/** The plays ranking: static balanced chart and cards, enhanced by /scripts/plays.js. */
export function renderPlaysTool(lang: Lang, staticSvg: string): string {
  const s = t(lang).plays;
  const balanced = PRESETS.find((p) => p.preset_id === 'balanced')!;
  const ranked = PLAY_ROWS.map((p) => ({ p, score: weightedScore(p, balanced) })).sort(
    (a, b) => b.score - a.score,
  );
  const data = {
    plays: PLAY_ROWS.map((p) => ({
      id: p.play_id,
      name: p.name,
      scores: Object.fromEntries(CRITERIA.map((c) => [c.field, Number(p[c.field])])),
    })),
    criteria: CRITERIA.map((c) => ({ field: c.field, label: c.label, definition: c.definition })),
    presets: PRESETS.map((p) => ({
      id: p.preset_id,
      label: p.label,
      weights: Object.fromEntries(CRITERIA.map((c) => [c.field, Number(p[c.field])])),
    })),
  };
  const options = PRESETS.map(
    (p) => `<option value="${e(p.preset_id)}">${e(p.label)}</option>`,
  ).join('');
  const sliders = CRITERIA.map(
    (c) =>
      `<label class="slider"><span class="slider-label" title="${e(c.definition)}">${e(c.label)}</span><input type="range" min="0" max="50" step="1" name="${e(c.field)}" value="${e(balanced[c.field])}" aria-describedby="w-${e(c.field)}"><output id="w-${e(c.field)}">${e(balanced[c.field])}%</output></label>`,
  ).join('');
  return `<div class="plays-tool" data-plays-tool>
<script type="application/json" class="plays-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<div class="plays-controls" hidden>
<p class="plays-intro">${e(s.intro)}</p>
<div class="plays-preset"><label>${e(s.preset)} <select name="preset">${options}<option value="custom" disabled>${e(s.custom)}</option></select></label><button type="button" class="btn-ghost" data-reset>${e(s.reset)}</button></div>
<fieldset class="plays-weights"><legend>${e(s.weights)}</legend>${sliders}</fieldset>
</div>
<div class="plays-static chart-body">${staticSvg}<p class="plays-note">${e(s.staticNote)}</p></div>
<ol class="plays-bars" hidden aria-live="polite"></ol>
<div class="play-cards">
<p class="play-cards-hint">${e(s.select)}</p>
${ranked.map(({ p, score }) => playCard(p, lang, score)).join('\n')}
</div>
</div>`;
}

/** Scenario explorer for chapter 18: tabs when JavaScript runs, stacked panels otherwise. */
export function renderScenarioExplorer(lang: Lang): string {
  const s = t(lang).scenarios;
  const scen = SCEN.scenarios;
  const letter = (id: string) => id.replace('SC-', '');
  const scoreKey = (l: string) =>
    Object.keys(SCEN.robustness[0]).find((k) => k.startsWith(`score_${l}_`))!;
  const name = (r: Row) => (lang === 'vi' && r.name_vi ? r.name_vi : r.name);
  const placement: Record<string, string> = { A: 'tl', B: 'bl', C: 'tr', D: 'br' };
  const tabs = scen
    .map((r, i) => {
      const l = letter(r.scenario_id);
      return `<button type="button" role="tab" class="scen-tab scen-${placement[l]}" id="scen-tab-${l}" aria-controls="scen-panel-${l}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-scen="${l}"><span class="scen-letter">${l}</span><span class="scen-name">${e(name(r))}</span><span class="scen-axes">${e(r.axis_import_stress)} · ${e(r.axis_fermentation_market)}</span></button>`;
    })
    .join('');
  const panels = scen
    .map((r) => {
      const l = letter(r.scenario_id);
      const key = scoreKey(l);
      const plays = [...SCEN.robustness]
        .sort(
          (a, b) =>
            Number(b[key]) - Number(a[key]) ||
            a.play_id.localeCompare(b.play_id, 'en', { numeric: true }),
        )
        .map(
          (p) =>
            `<li data-score="${e(p[key])}"><span class="rb-score" aria-label="score ${e(p[key])} of 2">${e(p[key])}</span><span class="rb-id">${e(p.play_id)}</span> <span lang="en">${e(p.play_name)}</span></li>`,
        )
        .join('');
      const signposts = SCEN.signposts
        .filter((sp) => list(sp.scenarios_favoured).includes(l))
        .map(
          (sp) =>
            `<li><strong lang="en">${e(sp.signpost)}</strong> <span lang="en">${e(sp.threshold)}</span><br><span class="sp-status" lang="en">${e(sp.status_sep_2026)}</span></li>`,
        )
        .join('');
      const fact = (label: string, value: string) =>
        value ? `<div><dt>${e(label)}</dt><dd lang="en">${e(value)}</dd></div>` : '';
      return `<section class="scen-panel" role="tabpanel" id="scen-panel-${l}" aria-labelledby="scen-tab-${l}" data-scen="${l}">
<h4><span class="scen-letter">${l}</span> ${e(name(r))} ${foresightBadge(r.foresight_type, lang)}</h4>
<p class="scen-picture" lang="en">${e(r.picture_2050)}</p>
<dl class="scen-facts">${fact('Soybean-meal need, 2050 (indicative, Mt)', r.soybean_meal_need_2050_mt_indicative)}${fact('Microbial share of feed protein, 2050 (indicative)', r.microbial_feed_protein_share_2050_indicative)}${fact('Where Vietnam competes', r.where_vietnam_competes)}${fact('Where Vietnam loses', r.where_vietnam_loses)}${fact('Active hubs in 2050', r.hubs_active_2050)}${fact('Grows from', r.grows_from_2035_scenario)}${fact('What Vietnam decides', r.what_vietnam_decides)}</dl>
<div class="scen-cols"><div><h5>${e(s.signposts)}</h5><ul class="scen-signposts">${signposts}</ul></div><div><h5>${e(s.playScores)}</h5><ol class="scen-plays">${plays}</ol><p class="scen-key" lang="en">2 thrives · 1 holds with conditions · 0 struggles</p></div></div>
</section>`;
    })
    .join('\n');
  return `<div class="scen-explorer" data-scen-explorer>
<p class="scen-heading">${e(s.heading)}</p>
<p class="scen-intro">${e(s.intro)}</p>
<div class="scen-grid" role="tablist" aria-label="${e(s.heading)}" hidden><span class="scen-axis scen-axis-x" lang="en">Import stress: benign to chronic →</span><span class="scen-axis scen-axis-y" lang="en">Fermentation market: Chinese price dominance to open →</span>${tabs}</div>
${panels}
</div>`;
}
