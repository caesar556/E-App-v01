"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const card = section.querySelector(".about-card");
    const image = section.querySelector(".about-image");
    const content = section.querySelectorAll(".about-text, .about-btn");

    gsap.fromTo(
      card,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      image,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.from(content, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 w-[90%] mx-auto rounded-lg shadow-xl bg-[#0a0a0f] mt-52 mb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <Card className="about-card bg-[#12121a] border-violet-700/40 shadow-violet-900/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl lg:text-3xl font-bold text-violet-400 about-text">
                E-App Marketplace
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-gray-300">
              <p className="about-text">
                E-App is your next-generation e-commerce platform — fast,
                secure, and built to give users a smooth shopping experience.
              </p>

              <Button className="about-btn mt-4 bg-violet-600 hover:bg-violet-700 text-white font-medium">
                Explore Marketplace
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Image
              src="/assets/category2.png"
              alt="E-App dashboard"
              className="about-image rounded-2xl shadow-xl shadow-violet-900/40"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
