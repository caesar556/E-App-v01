"use client";

import { useState, useCallback } from "react";
import { Filter, ProductCard } from "./index";
import { Spinner } from "@/components/ui/spinner";
import { useGetAllProductsQuery } from "@/store/products/productsApi";

type Filters = {
  category: string;
  range: [number, number];
  sort: string;
  page: number;
};

export default function Products() {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    range: [400, 8000],
    sort: "",
    page: 1,
  });

  const { data, isLoading, isError, error } = useGetAllProductsQuery(filters);

  const products = data?.data || [];

  const handleFilterChange = useCallback((newFilters: Omit<Filters, 'page'>) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-dvh">
        <Spinner className="size-8 text-purple-500" />
      </div>
    );
  if (isError)
    return <p className="text-center py-10 text-red-500">
      {error?.data?.message || "Failed to load products"}
    </p>;

  return (
    <div className="pt-24 mb-16">
      <div className="flex">
        <div className="w-[40%] lg:w-[35%]">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        {!isLoading && !isError && (
          <div className="flex-1">
            <p className="mb-6 font-medium text-center text-lg">
              Showing {products.length} products
            </p>
            <div className="flex gap-6 flex-wrap px-6 justify-center">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
