"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Subscribe() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0.3, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      },
    );

    gsap.from([titleRef.current, descRef.current, formRef.current], {
      opacity: 0,
      x: -140,
      stagger: 0.6,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black/80 mb-8 w-[90%] sm:w-[70%] lg:w-[40%] mx-auto rounded-2xl shadow-md"
    >
      <div className="mx-auto max-w-screen-xl px-6 py-10 sm:px-8 lg:px-10 text-center">
        <h2
          ref={titleRef}
          className="text-2xl font-semibold text-white sm:text-3xl"
        >
          <span className="text-violet-500">Sign up</span> for our newsletter
        </h2>

        <p ref={descRef} className="mt-3 text-gray-400">
          Subscribe for new offers and exclusive features.
        </p>

        <form
          ref={formRef}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder:text-gray-500 focus-visible:ring-violet-700"
          />

          <Button className="h-12 px-6 bg-violet-700 hover:bg-violet-800 text-white">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
