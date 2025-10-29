"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
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
      className="h-full bg-black/90 text-white flex justify-between overflow-hidden border border-violet-700 shadow-xl"
    >
      <div className="flex flex-col flex-1 justify-start pt-20 lg:pt-16 pl-6 lg:pl-16">
        <p
          ref={discountRef}
          className="text-violet-800 text-[16px] lg:text-[18px] font-medium mb-2"
        >
          {discount}
        </p>

        <h2
          ref={titleRef}
          className="text-[18px] md:text-[24px] lg:text-[35px] font-extrabold"
        >
          {title}
        </h2>

        <div className="mt-4 flex gap-6 items-center">
          <Button
            size="lg"
            className="rounded-full font-medium text-[16px] bg-violet-800 hover:bg-violet-700"
          >
            {buttonTitle}
          </Button>
          <Button className="text-[15px] hover:bg-violet-400" variant="ghost">
            learn more
            <span>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-[50%]">
        <img
          ref={imageRef}
          className="w-[250px] lg:w-[320px] h-[100%] object-contain"
          src={src}
          alt="Product"
        />
      </div>
    </Card>
  );
}
