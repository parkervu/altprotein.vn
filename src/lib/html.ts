import type { Lang } from './i18n';

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const EVIDENCE_LABELS: Record<string, { en: string; vi: string }> = {
  'VN-direct': { en: 'evidence about Vietnam', vi: 'bằng chứng về Việt Nam' },
  'VN-adjacent': {
    en: 'evidence from a comparable country, transfer assumed',
    vi: 'bằng chứng từ nước tương đồng',
  },
  general: {
    en: 'global evidence, not specific to Vietnam',
    vi: 'bằng chứng chung, không riêng Việt Nam',
  },
};
const CONFIDENCE_VI: Record<string, string> = { High: 'Cao', Medium: 'Trung bình', Low: 'Thấp' };
const FX_LABELS: Record<string, { en: string; vi: string; tip: string }> = {
  trend: { en: 'trend', vi: 'xu hướng', tip: 'Observed change expected to continue' },
  projection: {
    en: 'projection',
    vi: 'dự phóng',
    tip: 'A published model result or an official target',
  },
  estimate: { en: 'estimate', vi: 'ước tính', tip: 'Our own calculation from stated assumptions' },
  signal: {
    en: 'signal',
    vi: 'tín hiệu',
    tip: 'An emerging development that may or may not scale',
  },
  wildcard: { en: 'wildcard', vi: 'biến cố hiếm', tip: 'Low-probability, high-impact event' },
  vision: {
    en: 'vision',
    vi: 'tầm nhìn',
    tip: 'Normative: what we think should happen, not a forecast',
  },
};

export function evidenceBadge(label: string, confidence: string, lang: Lang): string {
  const kind = label === 'VN-direct' ? 'direct' : label === 'VN-adjacent' ? 'adjacent' : 'general';
  const conf = confidence.toLowerCase();
  const tip =
    lang === 'vi'
      ? `Bằng chứng: ${label} (${EVIDENCE_LABELS[label]?.vi}). Độ tin cậy: ${CONFIDENCE_VI[confidence] ?? confidence}.`
      : `Evidence: ${label} (${EVIDENCE_LABELS[label]?.en}). Confidence: ${confidence}.`;
  return `<span class="ev" data-ev="${kind}" data-conf="${conf}" role="note" aria-label="${escapeHtml(tip)}" title="${escapeHtml(tip)}"><span class="ev-l" aria-hidden="true">${escapeHtml(label)}</span><span class="ev-c" aria-hidden="true"><i></i><i></i><i></i>${escapeHtml(lang === 'vi' ? (CONFIDENCE_VI[confidence] ?? confidence) : confidence)}</span></span>`;
}

export function foresightBadge(type: string, lang: Lang): string {
  const info = FX_LABELS[type];
  if (!info) return '';
  const tip = `${lang === 'vi' ? 'Loại dự báo' : 'Foresight'}: ${info.en}. ${info.tip}.`;
  return `<span class="fx" data-fx="${type}" role="note" aria-label="${escapeHtml(tip)}" title="${escapeHtml(tip)}"><span aria-hidden="true">${escapeHtml(lang === 'vi' ? info.vi : info.en)}</span></span>`;
}
