import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = elements => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    const animateElements = startPosition => {
      elements.forEach(
        ({
          selector,
          from = { opacity: 0, y: 20 },
          to = { opacity: 1, y: 0, duration: 0.6 },
        }) => {
          gsap.fromTo(selector, from, {
            ...to,
            stagger: 0.2,
            scrollTrigger: {
              trigger: selector,
              start: startPosition,
              toggleActions: "play none none none",
            },
          });
        }
      );
    };

    mm.add("(min-width: 1024px)", () => animateElements("top 80%"));
    mm.add("(min-width: 768px)", () => animateElements("top 70%"));
    mm.add("(max-width: 767px)", () => animateElements("top 60%"));

    return () => {
      mm.revert();
    };
  }, [elements]);
};

export default useAnimation;
