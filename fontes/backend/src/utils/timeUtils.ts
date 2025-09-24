export function formatDate(date: Date): string {
  return date.toISOString();
}

export function now(): Date {
  return new Date();
}
