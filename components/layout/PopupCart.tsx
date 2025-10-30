"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function PopupCart() {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <Popover>
      <PopoverTrigger>
        <span className="relative inline-block cursor-pointer">
          <ShoppingCart size={22} />

          <span
            className={`absolute -top-2 -right-2 bg-violet-700 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md transition-transform duration-200 ${
              items.length <= 0 ? "hidden" : "scale-100"
            }`}
          >
            {items.length}
          </span>
        </span>
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
