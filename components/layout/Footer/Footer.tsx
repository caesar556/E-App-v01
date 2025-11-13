"use client";

import { useRef } from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const footer = footerRef.current;

    gsap.fromTo(
      footer,
      { opacity: 0.3, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-black/90 text-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-wide">
              <span className="text-purple-600">E</span>-App
            </h2>

            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Empowering your shopping experience with quality and innovation.
              Discover the best products and exclusive deals with E-App.
            </p>

            <div className="mt-6 flex gap-5">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                Services
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "1on1 Coaching",
                  "Company Review",
                  "Accounts Review",
                  "HR Consulting",
                  "SEO Optimisation",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-purple-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["About", "Meet the Team", "Careers"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-purple-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                Helpful Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Contact", "FAQs", "Live Chat"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-purple-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} E-App. Designed by{" "}
            <span className="text-purple-500 font-medium">Belal Hussein</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
