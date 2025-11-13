import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

export const useHeroGsap = ({
  titleRef,
  subtitleRef,
  imgWrapperRef,
  buttonsRef,
}) => {
  useGSAP(() => {
    const splitHero = new SplitText(titleRef.current, { type: "chars, words" });
    const splitSubtitle = new SplitText(subtitleRef.current, {
      type: "lines, words",
    });

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      imgWrapperRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
    );

    tl.from(
      splitHero.chars,
      {
        x: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      },
      "-=1.0",
    );

    tl.from(
      splitSubtitle.lines,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.6",
    );

    tl.from(
      buttonsRef.current.children,
      {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5",
    );
    return () => {
      tl.kill();
      splitHero.revert();
      splitSubtitle.revert();
    };
  }, []);
};
