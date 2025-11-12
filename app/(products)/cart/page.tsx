"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, PlusIcon, MinusIcon } from "lucide-react";
import { toast } from "sonner";
import {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} from "@/store/features/cartApi";
import { Spinner } from "@/components/ui/spinner";
import { useAppSelector } from "@/hooks/hooks";

export default function CartPage() {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetCartQuery(undefined, {
    skip: !user
  });
  
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  //@ts-ignore
  const cart = data?.data?.items || [];

  const totalPrice = cart.reduce(
    (acc: number, item: any) => acc + item.product.price * item.quantity,
    0,
  );

  const handleQtyChange = async (id: string, qty: number) => {
    try {
      await addToCart({ productId: id, quantity: qty }).unwrap();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await removeFromCart(id).unwrap();
      toast.success("Product removed from cart");
    } catch (error) {
      toast.error("Something wrong in removing product from cart");
    }
  };

  if (isLoading)
    return (
      <section className="flex justify-center items-center min-h-screen">
        <Spinner className="size-8 text-purple-500" />
      </section>
    );

  if (isError)
    return (
      <section className="flex justify-center items-center min-h-screen text-red-400 text-xl">
        Error in loading cart
      </section>
    );

  return (
    <section className="mx-auto max-w-6xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-100">
      <div className="mx-auto max-w-3xl">
        <header className="flex gap-2 justify-center mb-16 items-center">
          <ShoppingCart />
          <h1 className="text-4xl font-semibold text-gray-100 sm:text-3xl">
            Your cart ({cart.length})
          </h1>
        </header>

        {cart.length === 0 ? (
          <p className="text-center text-2xl my-20 text-gray-400">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-8">
            {cart.map((item: any) => (
              <Card
                key={item._id}
                className="flex items-center justify-between p-4 bg-black/60 border-violet-800"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.product.imageCover}
                    alt={item.product.title}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-100">
                      {item.product.title}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {item.product.price} EGP
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      item.quantity > 1 &&
                      handleQtyChange(item.product._id, item.quantity - 1)
                    }
                    className="text-violet-400 hover:text-red-500 transition duration-300"
                  >
                    <MinusIcon size={20} />
                  </Button>

                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      if (!value || value < 1) value = 1;
                      handleQtyChange(item.product._id, value);
                    }}
                    className="h-8 w-14 text-center bg-slate-800 border-violet-700 text-gray-300"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      handleQtyChange(item.product._id, item.quantity + 1)
                    }
                    className="text-violet-400 hover:text-green-400 transition duration-300"
                  >
                    <PlusIcon size={20} />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemove(item.product._id)}
                    className="text-gray-400 hover:text-red-500 transition duration-300"
                  >
                    <Trash2 size={20} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <Card className="mt-10 bg-black/60 border-violet-800 p-6">
            <CardContent className="space-y-4">
              <dl className="space-y-1 text-sm text-gray-300">
                <div className="flex justify-between text-base font-semibold">
                  <dt>Total</dt>
                  <dd>{totalPrice.toFixed(2)} EGP</dd>
                </div>
              </dl>

              <div className="flex justify-center">
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md">
                  checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
