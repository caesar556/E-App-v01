"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2 } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { updateQty, removeFromCart } from "../../../store/features/cartReducer";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const handleQtyChange = (id: number, qty: number) => {
    dispatch(updateQty({ id, qty }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-100">
      <div className="mx-auto max-w-3xl">
        <header className="flex gap-2 justify-center mb-6 items-center">
          <ShoppingCart />
          <h1 className="text-4xl font-semibold text-gray-100 sm:text-3xl">
            Your Cart
          </h1>
        </header>

        {items.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-8">
            {items.map((item) => (
              <Card
                key={item.id}
                className="flex items-center justify-between p-4 bg-black/60 border-violet-800"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-100">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQtyChange(item.id, Number(e.target.value))
                    }
                    className="h-8 w-14 text-center bg-slate-800 border-violet-700 text-gray-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-400 hover:text-red-500 transition duration-300"
                  >
                    <Trash2 size={20} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-10 bg-black/60 border-violet-800 p-6">
          <CardContent className="space-y-4">
            <dl className="space-y-1 text-sm text-gray-300">
              <div className="flex justify-between text-base font-semibold">
                <dt>Total</dt>
                <dd>£{totalPrice}</dd>
              </div>
            </dl>

            <div className="flex justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md">
                Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
