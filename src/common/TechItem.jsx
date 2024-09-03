import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const TechItem = ({ icon, name }) => {
  return (
    <>
      <div className="w-max flex gap-1 items-center border border-zinc-800 rounded px-2 py-1">
        <Icon
          icon={icon}
          className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-300"
        />
        <span className="text-zinc-300">{name}</span>
      </div>
    </>
  );
};

TechItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechItem;
