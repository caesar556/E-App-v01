import { toast } from "sonner";
import {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} from "@/store/features/cartApi";
import { useAppSelector } from "@/hooks/hooks";

export function useCartLogic() {
  const { user } = useAppSelector((state) => state.auth);

  const { data, isLoading, isError } = useGetCartQuery(undefined, {
    skip: !user,
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

  return {
    cart,
    totalPrice,
    isLoading,
    isError,
    handleQtyChange,
    handleRemove,
  };
}
