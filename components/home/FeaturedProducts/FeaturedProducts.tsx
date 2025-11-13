"use client";

import { ProductCard } from "@/components/products";
import { useRef } from "react";
import { useFeaturedProductsAnimation } from "./products.gsap";

export default function FeaturedProducts({ products }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useFeaturedProductsAnimation({ sectionRef, titleRef, cardsRef });

  return (
    <div ref={sectionRef} className="px-8 my-20">
      <h1
        ref={titleRef}
        className="text-white text-2xl lg:text-5xl text-center mt-8 mb-16 font-bold"
      >
        Featured Products
      </h1>

      <div ref={cardsRef} className="flex gap-6 flex-wrap justify-center">
        {!products ? (
          <div className="flex justify-center items-center">
            <h2>Products not found</h2>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
