import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import useAnimate from "../../hooks/useAnimate";

const SkillItem = ({ icon, skill, loading }) => {
  useAnimate([".anim-skill-item"], loading);

  return (
    <div className="anim-skill-item group w-36 lg:w-[186px] flex flex-col items-center justify-center gap-6 sm:gap-8 py-5 lg:py-9 rounded border-2 border-primary-black bg-primary-white hover:bg-primary-black transition-colors duration-300 ease-in-out">
      <Icon
        icon={icon}
        className="w-14 h-14 text-primary-black group-hover:text-primary-white"
      />

      <span className="text-primary-black group-hover:text-primary-white text-lg sm:text-xl font-semibold ">
        {skill}
      </span>
    </div>
  );
};

SkillItem.propTypes = {
  icon: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default SkillItem;
