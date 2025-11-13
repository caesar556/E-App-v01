"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useBannerGsap } from "./banner.gsap";

export default function Banner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useBannerGsap({ bannerRef, titleRef, descRef, buttonRef });

  return (
    <div
      ref={bannerRef}
      className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat my-12 w-[90%] mx-auto rounded-lg"
    >
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="ltr:sm:text-left rtl:sm:text-right">
          <h2
            ref={titleRef}
            className="text-2xl font-bold text-white sm:text-3xl md:text-5xl"
          >
            Latest Shirts
          </h2>

          <p
            ref={descRef}
            className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto beatae excepturi
            dolores.
          </p>

          <div className="mt-4 sm:mt-8">
            <Button
              ref={buttonRef}
              className="bg-violet-800 hover:bg-violet-700 transition duration-200"
            >
              Get Yours Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
