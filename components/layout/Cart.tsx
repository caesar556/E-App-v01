"use client";

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQty } from "../../store/features/cartReducer";

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div
      className="relative w-screen max-w-sm text-white bg-black/70 p-6 rounded-lg"
      role="dialog"
      aria-modal="true"
    >
      <ul className="mt-6 space-y-4">
        {items.slice(0, 3).map((item) => (
          <li key={item.id} className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="size-16 rounded-sm object-cover"
            />

            <div className="flex-1">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-gray-400">
                {item.size ? `Size: ${item.size} • ` : ""}
                {item.color ? `Color: ${item.color}` : ""}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val > 0) {
                    dispatch(updateQty({ id: item.id, qty: val }));
                  }
                }}
                className="h-8 w-16 text-center bg-slate-800 border-violet-700 text-gray-300"
              />

              <button
                className="text-gray-400 hover:text-red-500 transition"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-3 text-center flex flex-col">
        <Link
          href="/cart"
          className="block rounded-sm border border-gray-500 px-4 py-2 text-sm text-gray-300 hover:ring-1 hover:ring-violet-400"
        >
          View my cart ({items.length})
        </Link>
        <Button
          className="bg-violet-800 hover:bg-violet-700 transition duration-200"
          size="lg"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
