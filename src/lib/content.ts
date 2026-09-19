import { getEmDashCollection, getEmDashEntry } from 'emdash';
import type { ChapterData, ReportData } from './types';
export async function getChapters() {
  const result = await getEmDashCollection<'chapters', ChapterData>('chapters', {
    limit: 100,
    orderBy: { number: 'asc' },
  });
  if (result.error) throw new Error('Unable to load report chapters', { cause: result.error });
  return result.entries;
}
export async function getReport() {
  const result = await getEmDashEntry<'report', ReportData>('report', 'report');
  if (result.error && result.error.name !== 'LiveEntryNotFoundError')
    throw new Error('Unable to load report metadata', { cause: result.error });
  return result.entry;
}
export function mayPreview(user?: { role: number }) {
  return Boolean(user && user.role >= 40);
}
