// Hand-written mirror of the backend response envelopes.
// Success = { message, data }; error = { error, status, message, fields? }.

export interface ApiResponse<T = unknown> {
  statusCode: number;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  error: string;
  status: number;
  message: string;
  fields?: { message: string; path: string | number }[];
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginatedResponse<T> {
  statusCode: number;
  message: string;
  data: T[];
  pagination: PaginationMeta;
}
