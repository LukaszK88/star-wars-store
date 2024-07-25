export interface PaginatedResponse<Result> {
  count: number;
  next: string;
  results: Result[];
}
