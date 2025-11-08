"use client";

import {
  CarouselPage,
  Banner,
  Subscribe,
  HeroPage,
  AboutSection,
} from "../../components/home/";

import { ProductCard } from "../../components/products/";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default async function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current?.children;

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    if (cards && cards.length > 0) {
      Array.from(cards).forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.95,
          rotateY: 10,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.6,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });
    }
  }, []);

  return (
    <section>
      <HeroPage />
      <CarouselPage />

      <div ref={sectionRef} className="px-8 my-20">
        <h1
          ref={titleRef}
          className="text-white text-5xl text-center my-8 font-bold"
        >
          Best Selling Products
        </h1>

        <div ref={cardsRef} className="flex gap-6 flex-wrap justify-center">
          Products section
        </div>
      </div>

      <AboutSection />
      <Banner />
      <Subscribe />
    </section>
  );
}
