"use client";

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

type Filters = {
  category: string;
  range: [number, number];
  sort: string;
};

type FilterProps = {
  filters: Filters;
  onChange: (key: keyof Filters, value: any) => void;
};

export default function Filter({ filters, onChange }: FilterProps) {
  return (
    <section className="flex flex-col gap-4 py-4 border-none rounded-lg bg-black/80 shadow-lg px-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-400 mb-2">Category</h2>
        <Select
          value={filters.category}
          onValueChange={(value) => onChange("category", value)}
        >
          <SelectTrigger className="w-full border rounded-md">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Phones">Phones</SelectItem>
              <SelectItem value="Laptops">Laptops</SelectItem>
              <SelectItem value="PC">PC</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Field>
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription className="text-sm text-violet-600">
            ${filters.range[0].toLocaleString()} - $
            {filters.range[1].toLocaleString()}
          </FieldDescription>

          <Slider
            value={filters.range}
            onValueChange={(value) =>
              onChange("range", value as [number, number])
            }
            max={8000}
            min={0}
            step={50}
            className="mt-4"
          />

          <div className="flex justify-between text-xs text-gray-300 mt-2">
            <span>$0</span>
            <span>$8,000</span>
          </div>
        </Field>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-400 mb-2">Sort By</h2>
        <Select
          value={filters.sort}
          onValueChange={(value) => onChange("sort", value)}
        >
          <SelectTrigger className="w-full border rounded-md">
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort Options</SelectLabel>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="highest">Highest Price</SelectItem>
              <SelectItem value="lowest">Lowest Price</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
