"use client";

import { useMemo, useState } from "react";
import { Filter, ProductCard } from "./index";
import { Spinner } from "@/components/ui/spinner";
import { useGetAllProductsQuery } from "@/store/products/productsApi";

type Filters = {
  category: string;
  value: [number, number];
  sort: string;
};

export default function Products() {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const products  = data?.data || [];

  const [filters, setFilters] = useState<Filters>({
    category: "all",
    value: [400, 8000],
    sort: "",
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];
    const { category, value, sort } = filters;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    result = result.filter((p) => p.price >= value[0] && p.price <= value[1]);

    if (sort === "highest") result.sort((a, b) => b.price - a.price);
    if (sort === "lowest") result.sort((a, b) => a.price - b.price);
    if (sort === "newest")
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    if (sort === "oldest")
      result.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );

    return result;
  }, [filters, products]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-dvh">
        <Spinner className="size-8 text-purple-500" />
      </div>
    );
  if (isError)
    return <p className="text-center py-10 text-red-500">{isError}</p>;

  return (
    <div className="pt-24 mb-16">
      <div className="flex">
        <div className="w-[40%] lg:w-[35%]">
          <Filter onFilterChange={setFilters} />
        </div>
        <div className="flex-1">
          <p className="mb-6 font-medium text-center text-lg">
            Showing {filteredProducts.length} products
          </p>
          <div className="flex gap-6 flex-wrap px-6 justify-center">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
