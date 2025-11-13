import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const useCarouselGsap = ({ titleRef, discountRef, cardRef, imageRef }) => {
  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    const splitTitle = new SplitText(titleRef.current, { type: "lines" });
    const splitDiscount = new SplitText(discountRef.current, { type: "words" });

    gsap.from(splitDiscount.words, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1,
      delay: 0.2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(splitTitle.lines, {
      y: 100,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.4,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 75%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      splitTitle.revert();
      splitDiscount.revert();
    };
  }, []);
};
