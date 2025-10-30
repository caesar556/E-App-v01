"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartReducer";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <Card className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] overflow-hidden bg-black/90  text-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] mx-auto border border-violet-700">
      <div className="relative w-full aspect-[3/3] overflow-hidden rounded-t-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          Sale
        </div>
      </div>

      <CardContent className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-gray-400 text-xs">({product.reviews})</span>
        </div>

        <h3 className="text-sm sm:text-base font-semibold leading-tight line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold">${product.price}</span>
          <span className="text-sm sm:text-base text-gray-400 line-through">
            ${product.originalPrice}
          </span>
        </div>

        <Button
          variant="secondary"
          className="w-full bg-violet-900 text-white font-medium hover:bg-violet-700 text-sm sm:text-base rounded-xl"
          onClick={handleAdd}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
