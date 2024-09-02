import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const SeeMore = ({ children, initialCount }) => {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const childrenArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (contentRef.current) {
      if (showAll) {
        setContentHeight(contentRef.current.scrollHeight);
      } else {
        const initialHeight = Array.from(contentRef.current.children)
          .slice(0, initialCount)
          .reduce((totalHeight, child) => totalHeight + child.offsetHeight, 0);
        setContentHeight(initialHeight);
      }
    }
  }, [showAll, initialCount]);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col gap-5 xl:gap-8"
        ref={contentRef}
        style={{
          height: contentHeight,
          transition: "height 0.5s ease",
          overflow: "hidden",
        }}>
        {children}
      </div>
      {initialCount < childrenArray.length && (
        <button
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 px-4 py-1 text-nowrap bg-primary-black border border-zinc-800 hover:border-zinc-500 transition-colors duration-300 text-zinc-300 rounded-2xl"
          onClick={handleToggle}>
          {showAll ? "See Less" : "See All Experiences"}
        </button>
      )}
    </div>
  );
};

SeeMore.propTypes = {
  children: PropTypes.node.isRequired,
  initialCount: PropTypes.number.isRequired,
};

export default SeeMore;
