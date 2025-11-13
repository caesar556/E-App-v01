"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { BellRing, Menu, ShoppingBag, X } from "lucide-react";

import { navLinks } from "@/constant/constants";
import SearchInp from "../ui/SearchInp";
import DropMenu from "../ui/DropMenu";
import PopupCart from "../Cart/PopupCart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { useAuthMeQuery } from "@/store/auth/authApi";
import { LogIn } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: user } = useAuthMeQuery();

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
      className="fixed top-0 z-[999]  h-16 lg:h-20
      flex items-center justify-between 
      text-white w-full
       bg-black/20 backdrop-blur-sm px-12"
      ref={navRef}
    >
      <Link
        href="/"
        className="text-[24px] lg:text-[29px] font-bold tracking-wide flex items-center "
      >
        <ShoppingBag className="mr-2" color="white" size={21} />
        <span className="text-violet-500">E</span>-app
      </Link>

      <nav
        className={`${open ? "hidden" : "hidden md:flex"}  gap-6 text-[14px] lg:text-[16px] font-medium capitalize`}
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
          <BellRing size={20} />
        </button>
        {user ? (
          <DropMenu user={user} />
        ) : (
          <Button size="sm" className="bg-violet-900 hover:bg-violet-700  flex">
            <Link href="/login">Login</Link>
            <LogIn size={20} />
          </Button>
        )}
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
