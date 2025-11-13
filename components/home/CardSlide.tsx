"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function CardSlide({ title, src, discount, buttonTitle }) {
  const titleRef = useRef(null);
  const discountRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    const splitTitle = new SplitText(titleRef.current, { type: "lines" });
    const splitDiscount = new SplitText(discountRef.current, { type: "words" });

    gsap.from(splitDiscount.words, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1,
      delay: 0.2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(splitTitle.lines, {
      y: 100,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.4,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 75%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

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
