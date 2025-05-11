export interface ResponseModel<T = unknown> {
  data: T;
  isError: boolean;
  message: string | null;
  statusCode: number | null;
  errorCode?: string | number | null;
}
