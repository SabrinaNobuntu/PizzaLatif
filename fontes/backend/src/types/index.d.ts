export type ID = string | number;

export interface APIResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
