import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce.number().min(0, "Price must be positive"),
  stock: z.coerce.number().int().min(0, "Stock must be a positive integer"),
  description: z.string().optional(),
  status: z.enum(["active", "inactive", "out_of_stock", "low_stock"]),
});

export type Product = z.infer<typeof productSchema>;
