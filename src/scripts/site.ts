// Progressive enhancement for every page. Everything here is optional: pages work without it.
import { initPlays } from './plays';
import { initScenarios } from './scenarios';

const root = document.documentElement;
const store = {
  get(key: string) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string | null) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch {
      /* storage unavailable: the choice lasts for this page only */
    }
  },
};

// Theme: auto -> light -> dark -> auto --------------------------------------------------
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  const label = () => {
    const current = root.getAttribute('data-theme') ?? 'auto';
    btn.setAttribute('aria-label', `${btn.dataset.label ?? 'Theme'}: ${current}`);
  };
  btn.dataset.label = btn.getAttribute('aria-label') ?? 'Theme';
  label();
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === null ? 'light' : current === 'light' ? 'dark' : null;
    if (next) root.setAttribute('data-theme', next);
    else root.removeAttribute('data-theme');
    store.set('theme', next);
    label();
  });
});

// Drawer ---------------------------------------------------------------------------
const drawer = document.getElementById('drawer');
const opener = document.querySelector<HTMLButtonElement>('[data-drawer-open]');
function setDrawer(open: boolean) {
  if (!drawer) return;
  if (open) {
    drawer.setAttribute('data-open', '');
    document.body.style.overflow = 'hidden';
    drawer.querySelector<HTMLElement>('input, a, button')?.focus();
  } else {
    drawer.removeAttribute('data-open');
    document.body.style.overflow = '';
    opener?.focus();
  }
  opener?.setAttribute('aria-expanded', String(open));
}
opener?.addEventListener('click', () => setDrawer(true));
drawer
  ?.querySelectorAll('[data-drawer-close]')
  .forEach((el) => el.addEventListener('click', () => setDrawer(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer?.hasAttribute('data-open')) setDrawer(false);
});
drawer?.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'center' });

// Audience: highlight pages written for the chosen audience -------------------------------
export function applyAudience(audience: string | null) {
  if (audience) root.setAttribute('data-audience', audience);
  else root.removeAttribute('data-audience');
  document.querySelectorAll<HTMLElement>('[data-aud]').forEach((el) => {
    const list = (el.dataset.aud ?? '').split(' ');
    el.classList.toggle('is-for-you', Boolean(audience && list.includes(audience)));
  });
  document.querySelectorAll<HTMLElement>('.aud-chip[data-key]').forEach((el) => {
    el.classList.toggle('is-you', el.dataset.key === audience);
  });
  document.querySelectorAll<HTMLElement>('[data-audience-path]').forEach((el) => {
    el.hidden = el.dataset.audiencePath !== audience;
  });
  document.querySelectorAll<HTMLElement>('[data-audience-none]').forEach((el) => {
    el.hidden = Boolean(audience);
  });
  document.querySelectorAll<HTMLButtonElement>('[data-set-audience]').forEach((b) => {
    b.setAttribute('aria-pressed', String((b.dataset.setAudience || null) === audience));
  });
}
const params = new URLSearchParams(location.search);
const fromUrl = params.get('for');
if (fromUrl !== null) store.set('audience', fromUrl || null);
applyAudience(fromUrl !== null ? fromUrl || null : store.get('audience'));
document.querySelectorAll<HTMLButtonElement>('[data-set-audience]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.setAudience || null;
    store.set('audience', value);
    applyAudience(value);
  });
});

// Tooltips for citations and chart marks --------------------------------------------------
const tip = document.getElementById('tip');
let tipOwner: Element | null = null;
function showTip(target: Element, text: string, x?: number, y?: number) {
  if (!tip || !text) return;
  tipOwner = target;
  tip.textContent = text;
  tip.hidden = false;
  const r = target.getBoundingClientRect();
  const px = x ?? r.left + r.width / 2;
  const py = y ?? r.top;
  const w = tip.offsetWidth;
  const h = tip.offsetHeight;
  tip.style.left = `${Math.max(8, Math.min(window.innerWidth - w - 8, px - w / 2))}px`;
  tip.style.top = `${py - h - 10 < 8 ? (y !== undefined ? py + 18 : r.bottom + 8) : py - h - 10}px`;
}
function hideTip() {
  if (tip) tip.hidden = true;
  tipOwner = null;
}
function tipText(el: Element): string {
  if (el instanceof HTMLElement && el.dataset.tip) return el.dataset.tip;
  if (el.getAttribute('data-tip')) return el.getAttribute('data-tip')!;
  return '';
}
// Move native titles into data attributes so the browser tooltip does not double up.
document
  .querySelectorAll<HTMLElement>('sup.cite a[title], .ev[title], .fx[title]')
  .forEach((el) => {
    el.dataset.tip = el.title;
    el.removeAttribute('title');
  });
document.querySelectorAll<SVGElement>('.chart-body .mark').forEach((mark) => {
  const title = mark.querySelector(':scope > title');
  const text = mark.getAttribute('data-tip') || title?.textContent || '';
  if (text) {
    mark.setAttribute('data-tip', text);
    mark.setAttribute('aria-label', text);
    mark.setAttribute('role', 'img');
  }
  title?.remove();
});
document.addEventListener('pointerover', (e) => {
  const el = (e.target as Element).closest?.('[data-tip], .chart-body .mark');
  if (!el || el === tipOwner) return;
  const text = tipText(el) || el.querySelector('title')?.textContent || '';
  if (el.closest('.chart-body')) showTip(el, text, e.clientX, e.clientY);
  else showTip(el, text);
});
document.addEventListener('pointermove', (e) => {
  if (tipOwner?.closest('.chart-body') && tip && !tip.hidden)
    showTip(tipOwner, tip.textContent ?? '', e.clientX, e.clientY);
});
document.addEventListener('pointerout', (e) => {
  if (tipOwner && !(tipOwner as Element).contains(e.relatedTarget as Node)) hideTip();
});
document.addEventListener('focusin', (e) => {
  const el = (e.target as Element).closest?.('[data-tip], .chart-body .mark');
  if (el) showTip(el, tipText(el) || el.querySelector('title')?.textContent || '');
});
document.addEventListener('focusout', hideTip);
window.addEventListener('scroll', hideTip, { passive: true });

// Table of contents: mark the section in view ---------------------------------------------
const tocLinks = [...document.querySelectorAll<HTMLAnchorElement>('.doc-toc a[href^="#"]')];
if (tocLinks.length && 'IntersectionObserver' in window) {
  const byId = new Map(tocLinks.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
  const headings = [...byId.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];
  let active: HTMLAnchorElement | undefined;
  const visible = new Set<Element>();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) =>
        en.isIntersecting ? visible.add(en.target) : visible.delete(en.target),
      );
      const first = headings.find((h) => visible.has(h));
      const link = first ? byId.get(first.id) : undefined;
      if (link && link !== active) {
        active?.removeAttribute('aria-current');
        link.setAttribute('aria-current', 'true');
        active = link;
      }
    },
    { rootMargin: '-80px 0px -60% 0px' },
  );
  headings.forEach((h) => io.observe(h));
}

// Print button ------------------------------------------------------------------------
document
  .querySelectorAll('[data-print]')
  .forEach((b) => b.addEventListener('click', () => window.print()));

// Open details that contain a targeted anchor (e.g. a play card or a key-number context).
function openTarget() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (el instanceof HTMLDetailsElement) el.open = true;
  el?.closest('details')?.setAttribute('open', '');
}
window.addEventListener('hashchange', openTarget);
openTarget();

initPlays();
initScenarios();
