import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = selectors => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    const animateElements = startPosition => {
      const allSelectors = selectors.join(", ");

      gsap.fromTo(
        allSelectors,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: allSelectors,
            start: startPosition,
            toggleActions: "play none none none",
          },
        }
      );
    };

    mm.add("(min-width: 1280px)", () => animateElements("top 75%"));
    mm.add("(min-width: 768px) and (max-width: 1279px)", () =>
      animateElements("top 85%")
    );
    mm.add("(max-width: 767px)", () => animateElements("top 95%"));

    return () => {
      mm.revert();
    };
  }, [selectors]);
};

export default useAnimation;
