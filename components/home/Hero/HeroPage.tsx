"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useHeroGsap } from "./hero.gsap";
import { useRef } from "react";
import { Book, ArrowRight } from "lucide-react";

export default function HeroPage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const buttonsRef = useRef(null);

  useHeroGsap({ titleRef, subtitleRef, imgWrapperRef, buttonsRef });

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-black">
      <div ref={imgWrapperRef} className="absolute inset-0">
        <Image
          src="/assets/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1
          ref={titleRef}
          className="text-white text-4xl md:text-6xl xl:text-8xl font-extrabold tracking-tight"
        >
          Discover Your Style
        </h1>

        <p
          ref={subtitleRef}
          className="text-gray-300 text-sm md:text-lg mt-6 max-w-xl text-center"
        >
          Explore the latest trends in fashion, electronics, and lifestyle. Find
          everything you need in one elegant online shop.
        </p>

        <div ref={buttonsRef} className="mt-10 flex gap-6 text-white">
          <Button
            size="lg"
            className="bg-violet-800 hover:bg-violet-700 flex rounded-lg"
          >
            Shop Now
            <Book />
          </Button>
          <Button variant="ghost" className="hover:bg-violet-700 flex">
            Learn more
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
