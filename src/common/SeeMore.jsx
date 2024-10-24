import PropTypes from "prop-types";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { useTranslation } from "react-i18next";

const SeeMore = ({ children }) => {
  const { t } = useTranslation();

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(prevShowAll => !prevShowAll);

  return (
    <div className="relative lg:my-10">
      {children[0]}

      <Collapse isOpened={showAll}>
        <div className="flex flex-col gap-5 xl:gap-8 pt-5 xl:pt-8 ReactCollapse--content">
          {children.slice(1)}
        </div>
      </Collapse>
      <button
        onClick={handleToggle}
        className="text-nowrap absolute left-1/2 transform -translate-x-1/2 -bottom-4 px-4 py-1 bg-primary-black border border-zinc-800 hover:border-zinc-500 transition-colors duration-300 text-zinc-300 rounded-2xl">
        {showAll ? t("common.see_less") : t("common.see_more")}
      </button>
    </div>
  );
};

SeeMore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SeeMore;
