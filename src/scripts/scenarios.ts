// Scenario explorer (chapter 18): turns the stacked scenario panels into a two-by-two tab set.
export function initScenarios() {
  document.querySelectorAll<HTMLElement>('[data-scen-explorer]').forEach((box) => {
    const grid = box.querySelector<HTMLElement>('.scen-grid');
    const tabs = [...box.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const panels = [...box.querySelectorAll<HTMLElement>('[role="tabpanel"]')];
    if (!grid || !tabs.length) return;
    grid.hidden = false;
    box.setAttribute('data-ready', '');
    const select = (tab: HTMLButtonElement, focus = false) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p) => (p.hidden = p.dataset.scen !== tab.dataset.scen));
      if (focus) tab.focus();
    };
    // Arrow keys move around the grid: A top left, C top right, B bottom left, D bottom right.
    const layout: Record<string, Record<string, string>> = {
      A: { ArrowRight: 'C', ArrowDown: 'B' },
      B: { ArrowRight: 'D', ArrowUp: 'A' },
      C: { ArrowLeft: 'A', ArrowDown: 'D' },
      D: { ArrowLeft: 'B', ArrowUp: 'C' },
    };
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const target = layout[tab.dataset.scen!]?.[e.key];
        if (target) {
          e.preventDefault();
          select(
            tabs.find((t) => t.dataset.scen === target)!,
            true,
          );
        }
      });
    });
    select(tabs[0]);
  });
}
