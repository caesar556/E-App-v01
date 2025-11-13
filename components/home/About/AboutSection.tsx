"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAboutGsap } from "./about.gsap";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useAboutGsap({ sectionRef });

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
