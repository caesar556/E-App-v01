import { useRouter } from "next/navigation";
import { useAppSelector } from "../hooks";
import { useAddToCartMutation } from "@/store/features/cartApi";
import { toast } from "sonner";

export function useProductCard() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const [addToCart] = useAddToCartMutation();

  const handleAdd = async (productId: string | number) => {
    if (!user) {
      toast.error("Please login to add to cart");
      router.push("/login");
      return;
    }

    try {
      await addToCart({ productId: productId, quantity: 1 }).unwrap();
      console.log("productId", productId);
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  return { handleAdd };
}
