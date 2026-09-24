import { Marked, type Tokens, type TokenizerAndRendererExtension } from 'marked';
import keyNumbersJson from '../generated/key-numbers.json';
import sourcesJson from '../generated/sources.json';
import { t, type Lang } from './i18n';
import { escapeHtml, evidenceBadge, foresightBadge } from './html';

export { escapeHtml, evidenceBadge, foresightBadge };
import { href, PAGE_BY_ID, localize } from './site';
import { renderChartFigure } from './charts';
import { renderScenarioExplorer } from './widgets';

export interface KeyNumber {
  id: string;
  label: string;
  label_vi?: string;
  value: string;
  unit?: string;
  as_of?: string;
  context?: string;
  source_ids?: string[];
  derived?: boolean;
  evidence?: string;
  confidence?: string;
  primary_page?: string;
  foresight_type?: string;
  horizon?: string | number;
}
export interface Source {
  t: string;
  a: string;
  d: string;
  u: string;
  y: string;
}
export const KEY_NUMBERS = keyNumbersJson as Record<string, KeyNumber>;
export const SOURCES = sourcesJson as Record<string, Source>;

export interface TocEntry {
  id: string;
  text: string;
  depth: number;
}
export interface RenderResult {
  html: string;
  heading: string | null;
  toc: TocEntry[];
  citations: string[];
}
export interface RenderOptions {
  lang: Lang;
  /** Language of the page content (the Vietnamese summary is `vi`). */
  contentLang?: string;
  pageId?: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

const CALLOUT_KINDS: [RegExp, string][] = [
  [/^correction/i, 'correction'],
  [/^method note/i, 'method'],
  [/^(vision, not forecast|tầm nhìn)/i, 'vision'],
  [/^speculative/i, 'speculative'],
  [/^scenarios, not forecasts/i, 'scenarios'],
  [/^open question/i, 'question'],
  [/^read with care|^not legal advice/i, 'care'],
  [/^for (investors|policy makers)/i, 'audience'],
  [/^(how to|neutrality)/i, 'note'],
];

/** Per-render state shared by the extensions (reset for every page). */
interface State {
  opts: RenderOptions;
  citations: string[];
  toc: TocEntry[];
  slugs: Map<string, number>;
  heading: string | null;
}

function citeLinks(state: State, ids: string[]): string {
  const links = ids.map((id) => {
    let n = state.citations.indexOf(id) + 1;
    if (!n) n = state.citations.push(id);
    const s = SOURCES[id];
    const tip = s ? `${s.a ? `${s.a}. ` : ''}${s.t}${s.d ? ` (${s.d})` : ''}` : id;
    return `<a href="#src-${escapeHtml(id)}" data-src="${escapeHtml(id)}" title="${escapeHtml(`[${id}] ${tip}`)}">${n}</a>`;
  });
  return `<sup class="cite">${links.join('<span class="cite-sep">,</span>')}</sup>`;
}

function keyNumberTile(state: State, id: string): string {
  const k = KEY_NUMBERS[id];
  const { lang, contentLang } = state.opts;
  const s = t(lang);
  if (!k) return `<div class="kn kn-missing">${escapeHtml(id)}</div>`;
  const useVi = (contentLang === 'vi' || lang === 'vi') && k.label_vi;
  const labelText = useVi ? k.label_vi! : k.label;
  const vision = k.foresight_type === 'vision';
  const primary = k.primary_page && k.primary_page !== state.opts.pageId && PAGE_BY_ID.has(k.primary_page);
  return `<figure class="kn${vision ? ' kn-vision' : ''}" id="${escapeHtml(id)}" data-ev="${k.evidence === 'VN-direct' ? 'direct' : k.evidence === 'VN-adjacent' ? 'adjacent' : 'general'}">
<div class="kn-value">${escapeHtml(k.value)}</div>
<figcaption class="kn-label"${useVi ? ' lang="vi"' : ''}>${escapeHtml(labelText)}</figcaption>
<div class="kn-meta">${k.as_of ? `<span class="kn-asof">${escapeHtml(k.as_of)}</span>` : ''}${k.derived ? `<span class="kn-derived">${escapeHtml(s.derived)}</span>` : ''}${k.evidence && k.confidence ? evidenceBadge(k.evidence, k.confidence, lang) : ''}${k.foresight_type ? foresightBadge(k.foresight_type, lang) : ''}${vision ? `<span class="kn-vision-label">${escapeHtml(s.visionNotForecast)}</span>` : ''}</div>
${k.context ? `<details class="kn-more"><summary>${lang === 'vi' ? 'Bối cảnh và nguồn' : 'Context and sources'}</summary><p lang="en">${escapeHtml(k.context)}${k.source_ids?.length ? ` ${citeLinks(state, k.source_ids)}` : ''}</p>${primary ? `<p><a href="${href(k.primary_page!, lang)}">${escapeHtml(PAGE_BY_ID.get(k.primary_page!)!.short_title)} →</a></p>` : ''}</details>` : ''}
</figure>`;
}

function buildMarked(state: State): Marked {
  const { lang } = state.opts;
  const cite: TokenizerAndRendererExtension = {
    name: 'cite',
    level: 'inline',
    start: (src) => src.indexOf('[@'),
    tokenizer(src) {
      const m = /^\[@([A-Z0-9]+-\d+[a-z]?(?:;\s*@[A-Z0-9]+-\d+[a-z]?)*)\]/.exec(src);
      if (m) return { type: 'cite', raw: m[0], ids: m[1].split(/;\s*@/) };
    },
    renderer: (token) => citeLinks(state, token.ids as string[]),
  };
  const evidence: TokenizerAndRendererExtension = {
    name: 'evidence',
    level: 'inline',
    start: (src) => {
      const i = src.search(/\{(VN-direct|VN-adjacent|general|fx:)/);
      return i < 0 ? undefined : i;
    },
    tokenizer(src) {
      let m = /^\{(VN-direct|VN-adjacent|general)\\?\|(High|Medium|Low)\}/.exec(src);
      if (m) return { type: 'evidence', raw: m[0], label: m[1], confidence: m[2] };
      m = /^\{fx:(trend|projection|estimate|signal|wildcard|vision)\}/.exec(src);
      if (m) return { type: 'evidence', raw: m[0], fx: m[1] };
    },
    renderer: (token) =>
      token.fx ? foresightBadge(token.fx as string, lang) : evidenceBadge(token.label as string, token.confidence as string, lang),
  };
  const xref: TokenizerAndRendererExtension = {
    name: 'xref',
    level: 'inline',
    start: (src) => src.indexOf('[['),
    tokenizer(src) {
      const m = /^\[\[([a-z0-9-]+)(?:#([a-z0-9-]+))?\]\]/.exec(src);
      if (m) return { type: 'xref', raw: m[0], id: m[1], anchor: m[2] };
    },
    renderer(token) {
      const page = PAGE_BY_ID.get(token.id as string);
      if (!page) return `<span class="xref-missing">${escapeHtml(token.raw)}</span>`;
      const attrs = page.lang === 'vi' && lang !== 'vi' ? ' hreflang="vi" lang="vi"' : '';
      return `<a class="xref" href="${href(page.id, lang, token.anchor as string | undefined)}"${attrs}>${escapeHtml(page.short_title)}</a>`;
    },
  };
  const inlineEmbed: TokenizerAndRendererExtension = {
    name: 'inlineEmbed',
    level: 'inline',
    start: (src) => src.indexOf('{{'),
    tokenizer(src) {
      const m = /^\{\{(kn|chart):([a-z0-9-]+)\}\}/.exec(src);
      if (m) return { type: 'inlineEmbed', raw: m[0], kind: m[1], id: m[2] };
    },
    renderer(token) {
      if (token.kind === 'kn') {
        const k = KEY_NUMBERS[token.id as string];
        return k ? `<strong class="kn-inline">${escapeHtml(k.value)}</strong>` : '';
      }
      return `<a href="#${escapeHtml(token.id as string)}">${escapeHtml(token.id as string)}</a>`;
    },
  };
  const embeds: TokenizerAndRendererExtension = {
    name: 'embeds',
    level: 'block',
    start: (src) => {
      const m = /(^|\n)[ \t]*\{\{(kn|chart):/.exec(src);
      return m ? m.index + m[1].length : undefined;
    },
    tokenizer(src) {
      const m = /^(?:[ \t]*(?:\{\{(?:kn|chart):[a-z0-9-]+\}\}[ \t]*)+(?:\n|$))+/.exec(src);
      if (!m) return;
      const items = [...m[0].matchAll(/\{\{(kn|chart):([a-z0-9-]+)\}\}/g)].map((x) => ({ kind: x[1], id: x[2] }));
      return { type: 'embeds', raw: m[0], items };
    },
    renderer(token) {
      const out: string[] = [];
      let tiles: string[] = [];
      const flush = () => {
        if (tiles.length) out.push(`<div class="kn-grid" data-count="${tiles.length}">${tiles.join('')}</div>`);
        tiles = [];
      };
      for (const item of token.items as { kind: string; id: string }[]) {
        if (item.kind === 'kn') tiles.push(keyNumberTile(state, item.id));
        else {
          flush();
          out.push(renderChartFigure(item.id, lang, (ids) => citeLinks(state, ids)));
          if (item.id === 'chart-scenarios-2050' && state.opts.pageId === 'ch18-scenarios-2050')
            out.push(renderScenarioExplorer(lang));
        }
      }
      flush();
      return out.join('\n');
    },
  };

  const marked = new Marked({ gfm: true });
  marked.use({ extensions: [embeds, cite, evidence, xref, inlineEmbed] });
  marked.use({
    renderer: {
      heading(this: any, token: Tokens.Heading) {
        const html = this.parser.parseInline(token.tokens);
        if (token.depth === 1 && state.heading === null) {
          state.heading = html;
          return '';
        }
        const text = stripTags(html);
        let id = slugify(text) || 'section';
        const seen = state.slugs.get(id) ?? 0;
        state.slugs.set(id, seen + 1);
        if (seen) id = `${id}-${seen}`;
        if (token.depth <= 3) state.toc.push({ id, text, depth: token.depth });
        const level = Math.min(Math.max(token.depth, 2), 6);
        return `<h${level} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${html}</h${level}>\n`;
      },
      blockquote(this: any, token: Tokens.Blockquote) {
        const inner: string = this.parser.parse(token.tokens);
        const m = /^<p><strong>([^<]+?)\.?<\/strong>/.exec(inner.trim());
        if (!m) return `<blockquote>${inner}</blockquote>\n`;
        const labelText = m[1].replace(/\.$/, '');
        const kind = CALLOUT_KINDS.find(([re]) => re.test(labelText))?.[1] ?? 'note';
        return `<aside class="callout callout-${kind}" aria-label="${escapeHtml(labelText)}">${inner}</aside>\n`;
      },
      table(this: any, token: Tokens.Table) {
        const cell = (c: Tokens.TableCell, tag: 'th' | 'td', i: number) => {
          const align = token.align[i] ? ` style="text-align:${token.align[i]}"` : '';
          return `<${tag}${tag === 'th' ? ' scope="col"' : ''}${align}>${this.parser.parseInline(c.tokens)}</${tag}>`;
        };
        const head = `<tr>${token.header.map((c, i) => cell(c, 'th', i)).join('')}</tr>`;
        const body = token.rows.map((row) => `<tr>${row.map((c, i) => cell(c, 'td', i)).join('')}</tr>`).join('\n');
        const cols = token.header.length;
        return `<div class="table-wrap" data-cols="${cols}" tabindex="0" role="region" aria-label="${lang === 'vi' ? 'Bảng' : 'Table'}: ${escapeHtml(stripTags(this.parser.parseInline(token.header[0].tokens)))}"><table><thead>${head}</thead><tbody>${body}</tbody></table></div>\n`;
      },
      html(token: Tokens.HTML | Tokens.Tag) {
        const raw = token.raw;
        const anchor = /^<a id="([A-Za-z0-9_-]+)"><\/a>/.exec(raw.trim());
        if (anchor) return `<a id="${anchor[1]}" class="src-anchor"></a>${raw.trim().length > anchor[0].length ? escapeHtml(raw.trim().slice(anchor[0].length)) : ''}`;
        if (/^<a id="[A-Za-z0-9_-]+">$/.test(raw)) return raw.replace('>', ' class="src-anchor">');
        if (raw === '</a>') return raw;
        if (/^<br\s*\/?>$/i.test(raw)) return '<br>';
        return escapeHtml(raw);
      },
      link(this: any, token: Tokens.Link) {
        const text = this.parser.parseInline(token.tokens);
        const url = token.href;
        if (/^javascript:/i.test(url)) return text;
        const external = /^https?:\/\//.test(url);
        const target = external ? url : url.startsWith('/') ? localize(url, lang) : url;
        return `<a href="${escapeHtml(target)}"${token.title ? ` title="${escapeHtml(token.title)}"` : ''}${external ? ' rel="noopener" class="ext"' : ''}>${text}</a>`;
      },
    },
  });
  return marked;
}

/** Render a page body (Markdown with report tokens) to HTML. */
export function renderMarkdown(markdown: string, opts: RenderOptions): RenderResult {
  const state: State = { opts, citations: [], toc: [], slugs: new Map(), heading: null };
  const html = buildMarked(state).parse(markdown, { async: false }) as string;
  return { html, heading: state.heading, toc: state.toc, citations: state.citations };
}

/** Render an inline Markdown fragment (summaries, table cells in widgets). */
export function renderInline(markdown: string, opts: RenderOptions): string {
  const state: State = { opts, citations: [], toc: [], slugs: new Map(), heading: '' };
  return buildMarked(state).parseInline(markdown, { async: false }) as string;
}

/** Plain text for search snippets and meta descriptions. */
export function plainText(markdown: string): string {
  return markdown
    .replace(/\[@[^\]]+\]/g, '')
    .replace(/\{(VN-direct|VN-adjacent|general)\\?\|(High|Medium|Low)\}/g, '')
    .replace(/\{fx:[a-z]+\}/g, '')
    .replace(/\{\{(kn|chart):[a-z0-9-]+\}\}/g, '')
    .replace(/\[\[([a-z0-9-]+)(#[a-z0-9-]+)?\]\]/g, (_, id) => PAGE_BY_ID.get(id)?.short_title ?? id)
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`#>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
