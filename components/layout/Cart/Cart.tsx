"use client";

import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} from "@/store/features/cartApi";
import { useAppSelector } from "@/hooks/hooks";
import { toast } from "sonner";

export default function Cart() {
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetCartQuery(undefined, {
    skip: !user,
  });
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  //@ts-ignore
  const items = data?.data?.items || [];

  const handleQtyChange = async (id: string, qty: number) => {
    await addToCart({ productId: id, quantity: qty });
  };
  const handleRemove = async (id: string) => {
    if (confirm("Are you sure you want to remove this item from your cart?")) {
      try {
        await removeFromCart(id).unwrap();
        toast.success("Item removed from cart");
      } catch (error) {
        toast.error("Failed to remove item");
      }
    }
  };

  return (
    <div
      className="relative w-screen max-w-sm text-white bg-black/70 p-6 rounded-lg"
      role="dialog"
      aria-modal="true"
    >
      <ul className="mt-6 space-y-4">
        {items.map((item: any) => (
          <li key={item.product._id} className="flex items-center gap-4">
            <Image
              src={item.product.imageCover}
              alt={item.product.title}
              width={64}
              height={64}
              className="size-16 rounded-sm object-cover"
            />

            <div className="flex-1">
              <h3 className="text-sm font-medium">{item.product.title}</h3>
              <p className="text-xs text-gray-400">
                {item.size ? `Size: ${item?.product.size} • ` : ""}
                {item.color ? `Color: ${item?.product.color}` : ""}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                min="1"
                max="10"
                value={item.quantity}
                onChange={(e) => {
                  let value = Number(e.target.value);
                  if (!value || value < 1) value = 1;
                  if (value > 10) value = 10;
                  handleQtyChange(item.product._id, value);
                }}
                className="h-8 w-16 text-center bg-slate-800 border-violet-700 text-gray-300"
              />

              <button
                className="text-gray-400 hover:text-red-500 transition"
                onClick={() => handleRemove(item.product._id)}
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
      </div>
    </div>
  );
}
