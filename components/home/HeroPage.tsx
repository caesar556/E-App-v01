"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function HeroPage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    const splitHero = new SplitText(titleRef.current, { type: "chars, words" });
    const splitSubtitle = new SplitText(subtitleRef.current, {
      type: "lines, words",
    });

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      imgWrapperRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
    );

    tl.from(
      splitHero.chars,
      {
        x: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      },
      "-=1.0", 
    );

    tl.from(
      splitSubtitle.lines,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.6",
    );

    tl.from(
      buttonsRef.current.children,
      {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5",
    );
  }, []);

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
          <Button size="lg" className="bg-violet-800 hover:bg-violet-700">
            Shop Now
          </Button>
          <Button variant="ghost" className="hover:bg-violet-700">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
