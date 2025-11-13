import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useAboutGsap = ({ sectionRef }) => {
  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animations = [];

    const targets = [
      {
        elements: section.querySelectorAll(".about-card"),
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0 },
        start: "top 80%",
      },
      {
        elements: section.querySelectorAll(".about-image"),
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 },
        start: "top 80%",
      },
      {
        elements: gsap.utils.toArray(
          section.querySelectorAll(".about-text, .about-btn"),
        ),
        from: { opacity: 0, y: 40 },
        to: {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.3,
        },
        start: "top 75%",
      },
    ];

    targets.forEach((target) => {
      if (target.elements.length === 0) return;

      const anim = gsap.fromTo(target.elements, target.from, {
        ...target.to,
        scrollTrigger: {
          trigger: section,
          start: target.start,
          toggleActions: "play none none reverse",
        },
      });

      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => {
        anim.scrollTrigger?.kill();
        anim.kill();
      });
    };
  }, []);
};
