import chartsJson from '../generated/charts.json';
import { t, type Lang } from './i18n';
import { evidenceBadge, escapeHtml } from './html';
import { renderPlaysTool } from './widgets';

export interface ChartOutput {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  svg: string;
  table: string;
  notes?: string;
  alt: string;
  source_ids: string[];
  evidence?: string;
  confidence?: string;
  interactive?: boolean;
}

export const CHARTS = chartsJson as unknown as Record<string, ChartOutput>;

/**
 * Some notes in chart-specs.json are instructions to the site builder rather than notes for readers.
 * These are shown instead (null hides the note); the specs themselves are unchanged.
 */
const READER_NOTES: Record<string, string | null> = {
  'chart-feedstock-map':
    'Shown as a province-by-stream matrix. Tay Ninh (cassava starch) and the Mekong Delta (aquaculture by-products) are highlighted.',
  'chart-timeline': null,
  'chart-route-to-market':
    'Green: self-declaration or listed feed. Amber: self-declaration with legal risk, or aquafeed trial ambiguity. Red: GMO closed-production, cultivated or new microbial biomass.',
  'chart-plays-scoring': 'Scores are judgements, not ratings.',
  'chart-sbm-scenarios-2050': null,
  'chart-sbm-tornado': 'Bars run from the low-case to the high-case value.',
  'chart-play-robustness': null,
};
const readerNote = (c: ChartOutput) => (c.id in READER_NOTES ? READER_NOTES[c.id] : c.notes);

export function renderChartFigure(id: string, lang: Lang, cite: (ids: string[]) => string): string {
  const s = t(lang);
  const c =
    CHARTS[id] ??
    (id === 'chart-plays-scoring'
      ? ({ id, type: 'interactive-bar', title: 'Ten plays, scored with weights you can change', svg: '', table: '', alt: '', source_ids: [] } as ChartOutput)
      : undefined);
  if (!c) return `<figure class="chart chart-missing" id="${escapeHtml(id)}"><p>${escapeHtml(s.chartUnavailable)}</p></figure>`;
  const body = id === 'chart-plays-scoring' ? renderPlaysTool(lang, c.svg) : `<div class="chart-body">${c.svg}</div>`;
  return `<figure class="chart chart-${escapeHtml(c.type)}" id="${escapeHtml(id)}" aria-labelledby="${escapeHtml(id)}-cap">
<div class="chart-head"><p class="chart-title" id="${escapeHtml(id)}-cap" lang="en">${escapeHtml(c.title)}</p>${c.subtitle ? `<p class="chart-sub" lang="en">${escapeHtml(c.subtitle)}</p>` : ''}</div>
${body}
<figcaption class="chart-foot">${readerNote(c) ? `<p class="chart-notes" lang="en">${escapeHtml(readerNote(c)!)}</p>` : ''}<p class="chart-src"><span>${escapeHtml(c.source_ids.length > 1 ? s.sources : c.source_ids.length ? s.source : s.evidence)}:</span>${c.source_ids.length ? ` ${cite(c.source_ids)}` : ''}${c.evidence && c.confidence ? ` ${evidenceBadge(c.evidence, c.confidence, lang)}` : ''}</p>
${c.table ? `<details class="chart-data-toggle"><summary><span class="show">${escapeHtml(s.showData)}</span><span class="hide">${escapeHtml(s.hideData)}</span></summary><div class="table-wrap" tabindex="0" role="region" aria-label="${escapeHtml(c.title)}">${c.table}</div></details>` : ''}
</figcaption>
</figure>`;
}
