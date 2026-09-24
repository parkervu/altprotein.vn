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

export function renderChartFigure(id: string, lang: Lang, cite: (ids: string[]) => string): string {
  const s = t(lang);
  const c = CHARTS[id];
  if (!c) return `<figure class="chart chart-missing" id="${escapeHtml(id)}"><p>${escapeHtml(s.chartUnavailable)}</p></figure>`;
  const body = id === 'chart-plays-scoring' ? renderPlaysTool(lang, c.svg) : `<div class="chart-body">${c.svg}</div>`;
  return `<figure class="chart chart-${escapeHtml(c.type)}" id="${escapeHtml(id)}" aria-labelledby="${escapeHtml(id)}-cap">
<div class="chart-head"><p class="chart-title" id="${escapeHtml(id)}-cap" lang="en">${escapeHtml(c.title)}</p>${c.subtitle ? `<p class="chart-sub" lang="en">${escapeHtml(c.subtitle)}</p>` : ''}</div>
${body}
<figcaption class="chart-foot">${c.notes ? `<p class="chart-notes" lang="en">${escapeHtml(c.notes)}</p>` : ''}<p class="chart-src"><span>${escapeHtml(c.source_ids.length > 1 ? s.sources : s.source)}:</span>${c.source_ids.length ? ` ${cite(c.source_ids)}` : ''}${c.evidence && c.confidence ? ` ${evidenceBadge(c.evidence, c.confidence, lang)}` : ''}</p>
${c.table ? `<details class="chart-data-toggle"><summary><span class="show">${escapeHtml(s.showData)}</span><span class="hide">${escapeHtml(s.hideData)}</span></summary><div class="table-wrap" tabindex="0" role="region" aria-label="${escapeHtml(c.title)}">${c.table}</div></details>` : ''}
</figcaption>
</figure>`;
}
