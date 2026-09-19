export function installEvidenceFilters(root: Document) {
  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('[data-evidence-filter]');
    if (!button) return;
    const selected = button.dataset.evidenceFilter ?? 'all';
    const allowed = ['all', 'VN-direct', 'VN-adjacent', 'general'];
    if (!allowed.includes(selected)) return;
    root.querySelectorAll<HTMLElement>('[data-evidence]').forEach((node) => {
      const match = node.dataset.evidence?.split(' ').includes(selected);
      node.classList.toggle('evidence-muted', selected !== 'all' && !match);
      node.classList.toggle('evidence-match', selected !== 'all' && Boolean(match));
    });
    root
      .querySelectorAll<HTMLButtonElement>('.filter')
      .forEach((node) =>
        node.setAttribute('aria-pressed', String(node.dataset.evidenceFilter === selected)),
      );
    const status = root.querySelector('.filter-status');
    if (status)
      status.textContent =
        selected === 'all'
          ? 'All evidence shown. Unlabelled context stays visible.'
          : `${selected} evidence emphasized. Unlabelled context stays visible.`;
  });
}
