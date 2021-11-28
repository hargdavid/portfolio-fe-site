export interface IContentfulResponse {
  includes: Record<string, any>;
  items: any[];
  limit: number;
  skip: number;
  sys: Record<string, any>;
  total: number;
}
