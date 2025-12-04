"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useProductCard } from "@/hooks/products/useProductCard";

interface AddToCartProps {
  productId: string | number;
}

export default function AddToCart({ productId }: AddToCartProps) {
  const { handleAdd } = useProductCard();
  return (
    <Button
      variant="secondary"
      className="w-full bg-violet-900 text-white font-medium hover:bg-violet-700 text-sm sm:text-base rounded-xl"
      onClick={() => handleAdd(productId)}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
}
