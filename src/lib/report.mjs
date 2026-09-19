export const parts = [
  'Start here',
  'The answer',
  'The obstacle',
  'What Vietnam has',
  'Category by category',
  'How solid this is',
  'What would move this forward',
  'Sources',
];
export const slugify = (text) =>
  text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
export const textOf = (node) =>
  typeof node === 'string'
    ? node
    : (node?.text ??
      node?.value ??
      (node?.children ?? node?.content ?? node?.rows ?? node?.cells ?? []).map(textOf).join(''));
export const chapterHref = (entry) => `/chapters/${entry.id ?? entry.slug}`;
export function headingId(block) {
  const text = textOf(block);
  const section = text.match(/^(\d+\.\d+)\b/);
  return section ? `section-${section[1].replace('.', '-')}` : `${slugify(text)}-${block._key}`;
}
export function codeId(block, chapterNumber) {
  if (![15, 16].includes(Number(chapterNumber))) return undefined;
  const code = textOf(block).match(/^((?:R|F|CF|NP|CS)-[CG]\d+)(?:\.|$)/)?.[1];
  return code?.toLowerCase();
}
