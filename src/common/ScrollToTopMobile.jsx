import { Icon } from "@iconify/react";
import { scrollToTop } from "/utils/helpers";

const ScrollToTopMobile = () => {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="ml-auto block xl:hidden p-3 bg-primary rounded border-2 border-zinc-800 shadow-lg"
      aria-label="Scroll to top">
      <Icon
        icon="mdi:arrow-up"
        width={24}
        height={24}
        className="text-zinc-800"
      />
    </button>
  );
};

export default ScrollToTopMobile;
