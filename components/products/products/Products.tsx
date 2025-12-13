"use client";

import { Spinner } from "@/components/ui/spinner";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import PaginationApp from "./PaginationApp";
import { useProductsLogic } from "@/hooks/products/useProduct";

export default function Products() {
  const {
    filters,
    handleFilterChange,
    handlePageChange,
    totalPages,
    currentPage,
    data,
    isError,
    isFetching,
    isLoading,
    error,
  } = useProductsLogic();

  const products = data?.data || [];
  console.log("total pages", totalPages);
  console.log("current page", currentPage);
  
  return (
    <div className="pt-24 mb-16 min-h-dvh">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[30%] flex-shrink-0">
            <Filter filters={filters} onChange={handleFilterChange} />
          </div>

          <div className="flex-1">
            {(isLoading || isFetching) && (
              <div className="flex flex-col items-center justify-center h-64">
                <Spinner className="size-10 text-purple-500 mb-4" />
                <p className="text-gray-600">
                  {isLoading ? "Loading products..." : "Updating products..."}
                </p>
              </div>
            )}

            {isError && (
              <div className="text-center py-10">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600 font-medium mb-2">
                    Failed to load products
                  </p>
                  <p className="text-red-500 text-sm">
                    {
                      //@ts-ignore
                      error?.data?.message || "Please try again later"
                    }
                  </p>
                  <Button
                    onClick={() => window.location.reload()}
                    className="mt-4 bg-red-600 hover:bg-red-700"
                  >
                    Retry
                  </Button>
                </div>
              </div>
            )}

            {!isLoading && !isError && !isFetching && (
              <>
                <div className="mb-6 p-4 bg-black/80 rounded-lg shadow-sm">
                  <p className="text-lg text-center font-medium text-gray-300">
                    Showing {products.length} products
                  </p>
                </div>

                {products.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
                      {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                    </div>
                    <div>
                      <PaginationApp
                        page={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </>
                ) : (
                  <div className="text-center mt-16 py-16">
                    <div className="bg-black/80 rounded-lg p-8 max-w-md mx-auto shadow-lg">
                      <p className="text-gray-300 text-lg mb-4">
                        No products found
                      </p>
                      <p className="text-gray-400 text-sm">
                        Try adjusting your filters to see more results.
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
