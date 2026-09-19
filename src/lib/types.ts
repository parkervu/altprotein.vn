export interface Span {
  _type: string;
  _key: string;
  text: string;
  marks?: string[];
}
export interface Mark {
  _type: string;
  _key: string;
  href?: string;
}
export interface ReportBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: Span[];
  markDefs?: Mark[];
  listItem?: string;
  level?: number;
  listId?: string;
  listStart?: number;
  rows?: {
    _type: string;
    _key: string;
    cells: {
      _type: string;
      _key: string;
      content: Span[];
      markDefs?: Mark[];
      isHeader?: boolean;
      colspan?: number;
      rowspan?: number;
    }[];
  }[];
  hasHeaderRow?: boolean;
}
export interface ChapterData {
  id: string;
  title: string;
  number: number;
  part: number;
  part_title: string;
  content: ReportBlock[];
}
export interface ReportData {
  id: string;
  title: string;
  subtitle: string;
  revision_date: string;
  revision_label: string;
  content: ReportBlock[];
}
