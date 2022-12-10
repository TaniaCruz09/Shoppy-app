export interface Products {
  id: string;
  name: string;
  price: string;
}
export interface budget {
  id: string;
  name: string;
  price: string;
}

interface Metadata {
  nextPage: number;
  currentPage: number;
  perPage: number;
}

export interface ListProductsResponse {
  data: [Products] | [];
  metadata: Metadata;
}
export interface ListBudgetResponse {
  data: [Products] | [];
  metadata: Metadata;
}
