export interface IApiError extends Error {
  status: number;
  data?: unknown;
}
