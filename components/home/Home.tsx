"use client";

import { CarouselPage, Banner, Subscribe, HeroPage, AboutSection } from "./";
import { useRef, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useGetAllProductsQuery } from "@/store/products/productsApi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProductCard from "../products/ProductCard";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useGetAllProductsQuery();
  const products = data?.data || [];

  useEffect(() => {
    if (isLoading) return;

    const section = sectionRef.current;
    const cards = cardsRef.current?.children;
    if (!cards || cards.length === 0) return;

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

    Array.from(cards).forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        scale: 0.95,
        rotateY: 10,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, [isLoading]);

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
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Spinner className="size-8 text-purple-500 " />
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>

      <AboutSection />
      <Banner />
      <Subscribe />
    </section>
  );
}
