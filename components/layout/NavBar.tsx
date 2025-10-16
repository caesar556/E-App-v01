"use client";
import Link from "next/link";
import { navLinks } from "../../constant/constants";
import { BellRing } from "lucide-react";
import SearchInp from "./SearchInp";
import { useState } from "react";
import DropMenu from "./DropMenu";
import MobileNav from "./MobileNav";
import PopupCart from "./PopupCart";

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header
      className="h-20 px-4 md:px-8 lg:px-16 xl:px-28 2xl:px-56
      flex justify-between items-center bg-purple-400 fixed top-0 z-[999] w-full"
    >
      <h3 className="text-[30px] font-bold tracking-wide">
        <span className="text-violet-700">E</span>-App
      </h3>

      <nav>
        {!open && (
          <ul
            className={`hidden sm:flex gap-6 text-[16px] font-medium capitalize `}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.router}>{link.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="hidden sm:flex gap-5 items-center text-[16px] text-center">
        <SearchInp open={open} setOpen={setOpen} />
        <div>
          <PopupCart />
        </div>
        <span className="relative py-2">
          <p
            className="bg-red-700 px-1 text-[12px] text-white 
            rounded-full absolute top-0 right-0"
          >
            4
          </p>
          <BellRing />
        </span>
        <div>
          <DropMenu />
        </div>
      </div>
      <div className="hidden">
        <MobileNav />
      </div>
    </header>
  );
}
