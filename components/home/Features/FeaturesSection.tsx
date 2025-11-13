"use client";

import { useRef } from "react";
import { useFeaturesGsap } from "./features.gsap";

const cardFeature = [
  {
    id: 1,
    title: "High performance",
    desc: "Lightning-quick load times optimized for every device",
  },
  {
    id: 2,
    title: "Seamless experience",
    desc: "Beautifully smooth interactions with no lag or delay",
  },
  {
    id: 3,
    title: "Scalable design",
    desc: "Built to grow effortlessly with your business needs",
  },
];

export default function FeaturesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useFeaturesGsap({ titleRef, cardsRef, descRef });

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 ref={titleRef} className="text-3xl font-bold sm:text-4xl">
          Features for growth
        </h2>
        <p ref={descRef} className="mt-4 text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          tenetur, nemo quam voluptas sunt impedit dolorem asperiores aliquid
          doloribus fugit.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {cardFeature.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="rounded-xl border border-gray-800 bg-black/80 p-6 shadow-lg hover:shadow-violet-600/20 transition"
          >
            <div className="inline-flex rounded-lg bg-violet-700 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>

            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
