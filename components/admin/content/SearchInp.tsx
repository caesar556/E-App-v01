import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInp({ search, setSearch }) {
  return (
    <div className="relative  w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-9 w-full"
      />
    </div>
  );
}
