// Interactive re-ranking of the ten plays (chapter 11). The server renders the balanced ranking,
// the preset selector, the sliders and every play card; this script wires them together.
interface PlaysData {
  plays: { id: string; name: string; scores: Record<string, number> }[];
  criteria: { field: string; label: string }[];
  presets: { id: string; label: string; weights: Record<string, number> }[];
}

export function initPlays() {
  document.querySelectorAll<HTMLElement>('[data-plays-tool]').forEach((tool) => {
    const dataEl = tool.querySelector('.plays-data');
    if (!dataEl) return;
    const data: PlaysData = JSON.parse(dataEl.textContent ?? '{}');
    const controls = tool.querySelector<HTMLElement>('.plays-controls')!;
    const bars = tool.querySelector<HTMLOListElement>('.plays-bars')!;
    const staticView = tool.querySelector<HTMLElement>('.plays-static')!;
    const select = tool.querySelector<HTMLSelectElement>('select[name="preset"]')!;
    const sliders = [...tool.querySelectorAll<HTMLInputElement>('input[type="range"]')];
    const cards = new Map(
      [...tool.querySelectorAll<HTMLDetailsElement>('.play-card')].map((c) => [c.dataset.play!, c]),
    );
    controls.hidden = false;
    bars.hidden = false;
    staticView.hidden = true;

    const weights = () => Object.fromEntries(sliders.map((s) => [s.name, Number(s.value)]));
    let selected: string | null = null;

    function render() {
      const raw = weights();
      const total = Object.values(raw).reduce((a, b) => a + b, 0);
      sliders.forEach((s) => {
        const out = s.parentElement!.querySelector('output')!;
        out.textContent = total ? `${Math.round((Number(s.value) / total) * 100)}%` : '0%';
      });
      const ranked = data.plays
        .map((p) => ({
          ...p,
          score: total ? data.criteria.reduce((n, c) => n + p.scores[c.field] * raw[c.field], 0) / total : 0,
        }))
        .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id, 'en', { numeric: true }));
      bars.replaceChildren(
        ...ranked.map((p, i) => {
          const li = document.createElement('li');
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('aria-pressed', String(p.id === selected));
          btn.setAttribute('aria-label', `${i + 1}. ${p.id} ${p.name}: ${p.score.toFixed(2)}`);
          btn.innerHTML = `<span class="pb-id">${p.id}</span><span class="pb-name" lang="en"></span><span class="pb-track" aria-hidden="true"><span class="pb-bar"></span></span><span class="pb-score">${p.score.toFixed(2)}</span>`;
          btn.querySelector('.pb-name')!.textContent = p.name;
          (btn.querySelector('.pb-bar') as HTMLElement).style.width = `${(p.score / 5) * 100}%`;
          btn.addEventListener('click', () => {
            selected = p.id;
            const card = cards.get(p.id);
            if (card) {
              card.open = true;
              card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              card.querySelector('summary')?.focus({ preventScroll: true });
            }
            bars.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
          });
          li.append(btn);
          return li;
        }),
      );
      const scoreById = new Map(ranked.map((p) => [p.id, p.score]));
      const order = ranked.map((p) => p.id);
      const container = tool.querySelector('.play-cards')!;
      order.forEach((id) => {
        const card = cards.get(id);
        if (!card) return;
        card.querySelector('.play-score')!.textContent = scoreById.get(id)!.toFixed(2);
        container.append(card);
      });
    }

    function applyPreset(id: string) {
      const preset = data.presets.find((p) => p.id === id);
      if (!preset) return;
      sliders.forEach((s) => (s.value = String(preset.weights[s.name])));
      select.value = id;
      render();
    }

    select.addEventListener('change', () => applyPreset(select.value));
    sliders.forEach((s) =>
      s.addEventListener('input', () => {
        const match = data.presets.find((p) => sliders.every((x) => p.weights[x.name] === Number(x.value)));
        select.value = match ? match.id : 'custom';
        render();
      }),
    );
    tool.querySelector('[data-reset]')?.addEventListener('click', () => applyPreset('balanced'));

    // Start from the reader's audience preset when one is chosen.
    let start = 'balanced';
    try {
      const aud = localStorage.getItem('audience');
      if (aud && data.presets.some((p) => p.id === aud)) start = aud;
    } catch {
      /* ignore */
    }
    applyPreset(start);
  });
}
