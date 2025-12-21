"use client";

import { Button } from "../ui/button";
import {
  useCheckoutMutation,
  useCreateOrderMutation,
} from "@/store/features/ordersApi";

export default function Checkout({ cartItems }) {
  const [createOrder] = useCreateOrderMutation();
  const [checkout] = useCheckoutMutation();

  const handleCheckout = async () => {
    try {
      const orderRes = await createOrder({
        items: cartItems,
        shippingAdderss: "Cairo, Egypt",
      }).unwrap();

      const orderId = orderRes.data._id;

      const checkoutRes = await checkout(orderId).unwrap();

      window.location.href = checkoutRes.url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md"
    >
      checkout
    </Button>
  );
}
