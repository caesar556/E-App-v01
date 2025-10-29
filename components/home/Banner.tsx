"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0.2, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    const splitTitle = new SplitText(titleRef.current, { type: "chars" });
    const splitDesc = new SplitText(descRef.current, { type: "lines" });

    gsap.from(splitTitle.chars, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.3,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 75%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(splitDesc.lines, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.08,
      delay: 0.5,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 70%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.8,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 70%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

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
