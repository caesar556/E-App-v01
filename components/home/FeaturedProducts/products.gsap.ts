import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useFeaturedProductsAnimation = ({
  sectionRef,
  titleRef,
  cardsRef,
}) => {
  useGSAP(() => {
    const section = sectionRef.current;
    const cards = gsap.utils.toArray(cardsRef.current?.children);
    if (!cards || cards.length === 0) return;

    const tlTitle = gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    const cardAnimations = cards.map((card, index) => {
      //@ts-ignore
      return gsap.from(card, {
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

    return () => {
      tlTitle.scrollTrigger?.kill();
      cardAnimations.forEach((anim) => anim.scrollTrigger?.kill());
    };
  }, []);
};
