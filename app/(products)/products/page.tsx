"use client";

import { useState, useMemo } from "react";
import { Filter, ProductCard } from "../../../components/products";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  createdAt: string;
  image: string;
  rating: number;
  reviews: number;
};

type Filters = {
  category: string;
  value: [number, number];
  sort: string;
};

export default function Products() {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    value: [200, 800],
    sort: "",
  });

  const filteredProducts = useMemo(() => {
    const productsData: Product[] = [
      {
        id: 1,
        name: "iPhone 15",
        price: 950,
        category: "phones",
        createdAt: "2024-08-01",
        image: "/assets/product1.png",
        rating: 4.8,
        reviews: 152,
      },
      {
        id: 2,
        name: "Dell XPS",
        price: 800,
        category: "laptops",
        createdAt: "2024-07-15",
        image: "/assets/category2.png",
        rating: 4.6,
        reviews: 98,
      },
      {
        id: 3,
        name: "Custom PC",
        price: 1000,
        category: "pc",
        createdAt: "2024-06-10",
        image: "/assets/category2.png",
        rating: 4.9,
        reviews: 203,
      },
      {
        id: 4,
        name: "Samsung Galaxy",
        price: 700,
        category: "phones",
        createdAt: "2024-05-01",
        image: "/assets/category2.png",
        rating: 4.5,
        reviews: 175,
      },
    ];

    let result = [...productsData];
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
  }, [filters]);

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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
