import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useBannerGsap = ({ bannerRef, titleRef, descRef, buttonRef }) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const banner = bannerRef.current;
      if (!banner) return;

      gsap.fromTo(
        banner,
        { opacity: 0.2, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: banner,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      const splitTitle = new SplitText(titleRef.current, { type: "chars" });
      const splitDesc = new SplitText(descRef.current, { type: "lines" });

      gsap.from(splitTitle.chars, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.3,
        scrollTrigger: {
          trigger: banner,
          start: "top 75%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(splitDesc.lines, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.08,
        delay: 0.5,
        scrollTrigger: {
          trigger: banner,
          start: "top 70%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: banner,
          start: "top 70%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, bannerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);
};
