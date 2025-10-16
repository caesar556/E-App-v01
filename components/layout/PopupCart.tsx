import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";


export default function PopupCart() {
  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <ShoppingCart />
        </span>
      </PopoverTrigger>
      <PopoverContent align="start"  className="bg-purple-300 w-fit mt-8 mr-32">
        <Cart />
      </PopoverContent>
    </Popover>
  );
}
