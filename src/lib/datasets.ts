import datasetsJson from '../generated/datasets.json';

export interface Dataset {
  file: string;
  slug: string;
  group: 'data' | 'chart';
  href: string;
  rows: number;
  purpose: string;
  featured: boolean;
  new_in: string | null;
  pages: string[];
  columns: { name: string; doc: string }[];
}
export const DATASETS = datasetsJson as Dataset[];
export const DATASET_BY_SLUG = new Map(DATASETS.map((d) => [d.slug, d]));
