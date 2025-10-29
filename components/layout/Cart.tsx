import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Cart() {
  return (
    <div
      className="relative w-screen max-w-sm  text-white bg-black/70 p-6 rounded-lg"
      role="dialog"
      aria-modal="true"
    >
      {/* Cart items */}
      <ul className="mt-6 space-y-4">
        <li className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=200&q=80"
            alt="Basic Tee"
            className="size-16 rounded-sm object-cover"
          />

          <div className="flex-1">
            <h3 className="text-sm font-medium">Basic Tee 6-Pack</h3>
            <p className="text-xs text-gray-600">Size: XXS • Color: White</p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              defaultValue={1}
              className="h-8 w-12 rounded-sm border bg-gray-50 text-center text-xs text-gray-600 focus:outline-none"
            />
            <button className="text-gray-600 hover:text-red-600 transition">
              <span className="sr-only">Remove item</span>
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </li>
      </ul>

      {/* Actions */}
      <div className="mt-6 space-y-3 text-center flex flex-col">
        <Link
          href="/cart"
          className="block rounded-sm border border-gray-500 px-4 py-2 text-sm text-gray-700 hover:ring-1 hover:ring-gray-400"
        >
          View my cart (2)
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
