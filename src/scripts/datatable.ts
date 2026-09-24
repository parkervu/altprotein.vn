// Client-side table for the data browser: fetch the CSV, then filter, sort and page through it.
import { parseCsv } from './csv';

const PAGE = 100;
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function highlight(text: string, needle: string): string {
  const safe = escapeHtml(text);
  if (!needle) return safe;
  const re = new RegExp(`(${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return safe.replace(re, '<mark>$1</mark>');
}

const CONF_DOTS: Record<string, number> = { high: 3, medium: 2, low: 1 };

function cell(col: string, value: string, needle: string, sourcesHref: string): string {
  if (!value) return '';
  if (col === 'source_ids' || col === 'source_id') {
    return value
      .split(/;\s*/)
      .filter(Boolean)
      .map((id) =>
        /^[A-Z0-9]+-\d+[a-z]?$/.test(id)
          ? `<a href="${sourcesHref}#${encodeURIComponent(id)}">${highlight(id, needle)}</a>`
          : highlight(id, needle),
      )
      .join(', ');
  }
  if ((col === 'url' || col === 'website' || col.endsWith('_url')) && /^https?:\/\//.test(value)) {
    return `<a href="${escapeHtml(value)}" rel="noopener" class="ext">${highlight(value.replace(/^https?:\/\/(www\.)?/, '').slice(0, 60), needle)}</a>`;
  }
  if (col === 'evidence_label' && /^(VN-direct|VN-adjacent|general)$/.test(value)) {
    const kind = value === 'VN-direct' ? 'direct' : value === 'VN-adjacent' ? 'adjacent' : 'general';
    return `<span class="ev" data-ev="${kind}"><span class="ev-l">${value}</span></span>`;
  }
  if (col === 'confidence' && CONF_DOTS[value.toLowerCase()]) {
    const lvl = value.toLowerCase();
    return `<span class="ev" data-ev="direct" data-conf="${lvl}"><span class="ev-c"><i></i><i></i><i></i>${value}</span></span>`;
  }
  return highlight(value, needle);
}

export function initDataTables() {
  document.querySelectorAll<HTMLElement>('[data-datatable]').forEach(async (box) => {
    const src = box.dataset.src!;
    const sourcesHref = box.dataset.sourcesHref ?? '/appendices/app-t-sources';
    const lang = JSON.parse(box.dataset.i18n ?? '{}').lang ?? 'en';
    const input = box.querySelector<HTMLInputElement>('input[name="filter"]')!;
    const count = box.querySelector<HTMLElement>('.dt-count')!;
    const tbody = box.querySelector('tbody')!;
    const headers = [...box.querySelectorAll<HTMLTableCellElement>('thead th')];
    const more = box.querySelector<HTMLButtonElement>('.dt-more')!;
    let rows: Record<string, string>[] = [];
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(String(res.status));
      rows = parseCsv(await res.text());
    } catch {
      count.textContent = lang === 'vi' ? 'Không tải được dữ liệu.' : 'Could not load the data.';
      return;
    }
    const cols = headers.map((h) => h.textContent!.trim());
    const longCols = new Set(cols.filter((c) => rows.some((r) => (r[c] ?? '').length > 80)));
    let sortCol: string | null = null;
    let sortDir = 1;
    let shown = PAGE;
    const numeric = (v: string) => /^-?\d+(\.\d+)?$/.test(v.replace(/,/g, ''));
    const format = (a: number, b: number) =>
      lang === 'vi' ? `Đang hiển thị ${a} trên ${b} dòng` : `Showing ${a} of ${b} rows`;

    function render() {
      const needle = input.value.trim();
      const lower = needle.toLowerCase();
      let list = lower ? rows.filter((r) => cols.some((c) => (r[c] ?? '').toLowerCase().includes(lower))) : rows.slice();
      if (sortCol) {
        const c = sortCol;
        list.sort((a, b) => {
          const x = a[c] ?? '';
          const y = b[c] ?? '';
          if (numeric(x) && numeric(y)) return (Number(x.replace(/,/g, '')) - Number(y.replace(/,/g, ''))) * sortDir;
          return x.localeCompare(y, 'en', { numeric: true }) * sortDir;
        });
      }
      const visible = list.slice(0, shown);
      tbody.innerHTML = visible
        .map(
          (r) =>
            `<tr>${cols.map((c) => `<td${longCols.has(c) ? ' class="long"' : ''}>${cell(c, r[c] ?? '', needle, sourcesHref)}</td>`).join('')}</tr>`,
        )
        .join('');
      count.textContent = format(visible.length, list.length);
      more.hidden = list.length <= shown;
    }

    headers.forEach((th) => {
      th.tabIndex = 0;
      th.setAttribute('aria-sort', 'none');
      const toggle = () => {
        const c = th.textContent!.trim();
        if (sortCol === c) sortDir = -sortDir;
        else {
          sortCol = c;
          sortDir = 1;
        }
        headers.forEach((h) => h.setAttribute('aria-sort', 'none'));
        th.setAttribute('aria-sort', sortDir === 1 ? 'ascending' : 'descending');
        render();
      };
      th.addEventListener('click', toggle);
      th.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
    let timer: number | undefined;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        shown = PAGE;
        render();
        const url = new URL(location.href);
        if (input.value) url.searchParams.set('q', input.value);
        else url.searchParams.delete('q');
        history.replaceState(null, '', url);
      }, 120);
    });
    more.addEventListener('click', () => {
      shown += PAGE * 2;
      render();
    });
    input.disabled = false;
    input.value = new URLSearchParams(location.search).get('q') ?? '';
    render();
  });
}
