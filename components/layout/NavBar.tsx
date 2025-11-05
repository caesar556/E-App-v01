"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { BellRing, Menu, X } from "lucide-react";

import { navLinks } from "../../constant/constants";
import SearchInp from "./SearchInp";
import DropMenu from "./DropMenu";
import PopupCart from "./PopupCart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAppSelector } from "@/hooks/reduxHooks";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const navRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -80 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 1.5,
        ease: "power2.inOut",
      },
    );
  }, []);
  return (
    <header
      className="fixed top-0 z-[999] w-full h-20
      flex items-center justify-between 
      text-white px-4 md:px-8 lg:px-16 xl:px-28 2xl:px-56
       bg-black/40 backdrop-blur-sm"
      ref={navRef}
    >
      <Link href="/" className="text-[32px] font-bold tracking-wide">
        <span className="text-violet-500">E</span>-App
        {isAuthenticated && <h3 className="text-red-700">Authtaction done </h3>}
      </Link>

      <nav
        className={`${open ? "hidden" : "hidden md:flex"}  gap-6 text-[16px] font-medium capitalize`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.router}
            className="hover:text-violet-500 transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-5 text-[16px]">
        <SearchInp open={open} setOpen={setOpen} />
        <PopupCart />
        <button
          type="button"
          className="relative p-2 hover:text-violet-500 transition"
          aria-label="Notifications"
        >
          <span
            className="absolute top-0 right-0 bg-red-700 text-[12px] 
            text-white px-1 rounded-full translate-x-1 -translate-y-1"
          >
            4
          </span>
          <BellRing size={21} />
        </button>
        <DropMenu />
      </div>

      <button
        type="button"
        className="md:hidden p-2 text-white hover:text-violet-500 transition"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {menuOpen && <div className="border-2 border-red-700">hello world</div>}
    </header>
  );
}
