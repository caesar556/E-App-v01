export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  inStock: boolean;
  rating?: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductsResponse = {
  success: boolean;
  data: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};

export type Filters = {
  category: string;
  range: [number, number];
  sort: string;
  page: number;
};