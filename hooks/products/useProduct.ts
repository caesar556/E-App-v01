import { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "@/store/products/productsApi";
import { Filters } from "@/types/product";

export function useProductsLogic() {
  const [filters, setFilters] = useState<Filters>({
    range: [0, 8000],
    sort: "newest",
    page: 1,
  });

  const [debouncedRange, setDebouncedRange] = useState(filters.range);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedRange(filters.range);
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [filters.range]);

  const query = useGetAllProductsQuery({
    ...filters,
    range: debouncedRange,
  });

  const { data } = query;

  const totalPages = data?.pagination?.totalPages || data?.totalPages || 1;

  const currentPage = data?.pagination?.page || filters.page;

  const totalProducts = data?.pagination?.totalProducts || data?.results || 0;

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  return {
    filters,
    totalPages,
    currentPage,
    totalProducts,
    handleFilterChange,
    handlePageChange,
    ...query,
  };
}
