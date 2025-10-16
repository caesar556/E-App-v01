"use client";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldDescription, FieldTitle } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export default function Filter({ onFilterChange }) {
  const [value, setValue] = useState([200, 800]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    // رجّع بس القيم الجديدة مش المنتجات نفسها
    onFilterChange({ category, value, sort });
  }, [category, value, sort]);

  return (
    <section className="flex flex-col gap-6 p-4 max-w-md mx-auto">
      {/* Category */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Category</h2>
        <Select onValueChange={setCategory}>
          <SelectTrigger className="w-full border rounded-md">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="phones">Phones</SelectItem>
              <SelectItem value="laptops">Laptops</SelectItem>
              <SelectItem value="pc">PC</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-2">
        <Field>
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($
            <span className="font-medium">{value[0]}</span> -{" "}
            <span className="font-medium">{value[1]}</span>).
          </FieldDescription>
          <Slider
            value={value}
            onValueChange={setValue}
            max={1000}
            min={0}
            step={10}
            className="mt-2"
            aria-label="Price Range"
          />
        </Field>
      </div>

      {/* Sort */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Sort By</h2>
        <Select onValueChange={setSort}>
          <SelectTrigger className="w-full border rounded-md">
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort Options</SelectLabel>
              <SelectItem value="highest">Highest Price</SelectItem>
              <SelectItem value="lowest">Lowest Price</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}