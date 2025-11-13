"use client";

import { useRef } from "react";
import { useCarouselGsap } from "./carousel.gsap";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CardSlide({ title, src, discount, buttonTitle }) {
  
  const titleRef = useRef(null);
  const discountRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  
    useCarouselGsap({ titleRef, discountRef, cardRef, imageRef });


  return (
    <Card
      ref={cardRef}
      className="bg-black/90 text-white rounded-2xl flex flex-row items-stretch justify-between border-none 
                 max-w-[1200px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto overflow-hidden
                 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.4)] transition-shadow duration-500 hover:shadow-[0_15px_60px_-10px_rgba(139,92,246,0.6)]"
    >
      <div className="flex flex-col justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 w-[62%] sm:w-[60%] md:w-[55%] lg:w-[50%]">
        <p ref={discountRef} className="text-violet-800 font-medium mb-2">
          {discount}
        </p>

        <h2
          ref={titleRef}
          className="font-extrabold text-[15px] sm:text-[18px] md:text-[24px] lg:text-[36px] leading-tight"
        >
          {title}
        </h2>

        <div
          ref={titleRef}
          className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 items-center"
        >
          <Button
            size="sm"
            className="rounded-lg font-medium bg-violet-800 hover:bg-violet-700"
          >
            {buttonTitle}
          </Button>
          <Button className="hover:bg-violet-400" variant="ghost">
            learn more
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>

      <div
        ref={imageRef}
        className="w-[38%] sm:w-[40%] md:w-[45%] lg:w-[50%] flex justify-center items-center bg-black"
      >
        <Image
          className="object-cover w-full h-full"
          src={src}
          alt="Product image"
          width={400}
          height={300}
          priority
        />
      </div>
    </Card>
  );
}