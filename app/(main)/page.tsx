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

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  createdAt: string;
  image: string;
  rating: number;
  reviews: number;
};

export default function Home() {
  const productsData: Product[] = [
    {
      id: 1,
      name: "iPhone 15",
      price: 950,
      category: "phones",
      createdAt: "2024-08-01",
      image: "/assets/product1.png",
      rating: 4.8,
      reviews: 152,
    },
    {
      id: 2,
      name: "Dell XPS",
      price: 800,
      category: "laptops",
      createdAt: "2024-07-15",
      image: "/assets/category2.png",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 3,
      name: "Custom PC",
      price: 1000,
      category: "pc",
      createdAt: "2024-06-10",
      image: "/assets/category2.png",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 4,
      name: "Samsung Galaxy",
      price: 700,
      category: "phones",
      createdAt: "2024-05-01",
      image: "/assets/category2.png",
      rating: 4.5,
      reviews: 175,
    },
  ];

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
          {productsData.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <AboutSection />
      <Banner />
      <Subscribe />
    </section>
  );
}
