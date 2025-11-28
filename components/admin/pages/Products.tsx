"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { useState } from "react";


import { mockProducts } from "@/lib/data/mock-data";

import { Trash, Edit } from "lucide-react";
import { SearchInp } from "../content";
import ProductModal from "@/app/(admin)/dashboard/products/ProductModal";

const statusColors = {
  active: "bg-emerald-500/10 text-emerald-500",
  inactive: "bg-gray-500/10 text-gray-500",
  out_of_stock: "bg-red-500/10 text-red-500",
  low_stock: "bg-yellow-500/10 text-yellow-500",
};

export default function ProductsAdmin() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Card className="mx-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl ">
          Products showing {filteredProducts.length}{" "}
        </CardTitle>
        <CardDescription>Manage your products here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-6 mb-8 flex gap-6 justify-between">
          <SearchInp search={search} setSearch={setSearch} />
          <Button
            onClick={() => {
              setSelectedProduct(null);
              setOpen(true);
            }}
            className="bg-violet-800 hover:bg-violet-700"
          >
            Add product
          </Button>
        </div>
        <Table>
          <TableHeader className="text-md">
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow className="text-xs" key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <img
                    src="/assets/category1.png"
                    alt={product.name}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}$</TableCell>
                <TableCell className="pl-5">{product.stock}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      statusColors[product.status as keyof typeof statusColors]
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap wrap ">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setSelectedProduct(product);
                        setOpen(true);
                      }}
                      className="text-violet-800 hover:text-violet-600"
                    >
                      <Edit size={24} />
                    </Button>
                    <Button
                      variant="ghost"
                      className="hover:text-red-500 text-red-700 "
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash size={24} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <ProductModal open={open} setOpen={setOpen} product={selectedProduct} />
    </Card>
  );
}
