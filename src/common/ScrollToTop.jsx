import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { scrollToTop } from "../utils/helpers";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`hidden xl:block fixed bottom-20 right-8 p-3 bg-primary rounded border-2 border-zinc-500 group hover:border-zinc-500 shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top">
      <Icon
        icon="mdi:arrow-up"
        width={24}
        height={24}
        className="text-zinc-500 group-hover:text-zinc-500 transition-all duration-300"
      />
    </button>
  );
};

export default ScrollToTop;
