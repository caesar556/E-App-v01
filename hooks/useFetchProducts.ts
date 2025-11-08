import { fetchProducts } from "@/store/products";
import { useAppDispatch } from "./reduxHooks";

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();

  const fetchAllProducts = () => {
    dispatch(fetchProducts());
  };
  return { fetchAllProducts };
};
