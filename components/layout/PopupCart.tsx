"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";
import { useGetCartQuery } from "@/store/features/cartApi";

export default function PopupCart() {
  const { data, isLoading } = useGetCartQuery();
  //@ts-ignore
  const items = data?.data.items || [];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative inline-block cursor-pointer">
          <ShoppingCart size={22} />
          {!isLoading && items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-violet-700 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {items.length}
            </span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="bg-black/70 backdrop-blur-lg border border-white/10 w-fit mt-8 mr-32 p-0"
      >
        <Cart />
      </PopoverContent>
    </Popover>
  );
}
