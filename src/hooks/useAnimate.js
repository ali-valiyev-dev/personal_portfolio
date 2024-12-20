import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useAnimate = (selectors, loading) => {
  useEffect(() => {
    if (loading || !selectors || selectors.length === 0) return;

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
          },
        }
      );
    };

    mm.add("(min-width: 1440px)", () => {
      selectors.forEach(selector => animateElements(selector, "top 75%"));
    });

    mm.add("(min-width: 1024px) and (max-width: 1439px)", () => {
      selectors.forEach(selector => animateElements(selector, "top 80%"));
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      selectors.forEach(selector => animateElements(selector, "top 85%"));
    });

    mm.add("(max-width: 767px)", () => {
      selectors.forEach(selector => animateElements(selector, "top 90%"));
    });

    return () => {
      mm.revert();
    };
  }, [selectors, loading]);
};

export default useAnimate;
