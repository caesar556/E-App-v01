import { Search, X } from "lucide-react";

export default function SearchInp({ open, setOpen }) {
  return (
    <div className="flex items-center gap-2">
      {open ? (
        <div
          className="flex items-center h-10 gap-2 border 
          bg-gray-400 rounded-md px-2 py-1 text-white"
        >
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="outline-none flex-1 bg-transparent"
          />
          <button className="text-[16px]" onClick={() => setOpen(false)}>
            <X className="text-gray-500" />
          </button>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>
          <Search />
        </button>
      )}
    </div>
  );
}
