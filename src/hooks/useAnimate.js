import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimate = selectors => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    const animateElements = (selector, startPosition) => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: selector,
            start: startPosition,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    };

    mm.add("(min-width: 1280px)", () => {
      selectors.forEach(selector => animateElements(selector, "top 85%"));
    });

    mm.add("(max-width: 1279px)", () => {
      selectors.forEach(selector => animateElements(selector, "top 90%"));
    });

    return () => {
      mm.revert();
    };
  }, [selectors]);
};

export default useAnimate;
