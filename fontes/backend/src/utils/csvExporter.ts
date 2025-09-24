import { Parser } from 'json2csv';

export function exportToCSV(data: object[], fields: string[]): string {
  const parser = new Parser({ fields });
  return parser.parse(data);
}
