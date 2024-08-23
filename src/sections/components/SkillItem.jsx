import PropTypes from "prop-types";
import { useState } from "react";

const SkillItem = ({ iconDark, iconLight, label, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group hover:bg-primary-black w-40 lg:w-[186px] h-40 lg:h-[186px] rounded border-2 border-primary-black flex flex-col items-center justify-center gap-4 transition-colors ease-in-out duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img
        src={isHovered ? iconLight : iconDark}
        alt={alt}
      />
      <h4 className="font-bold text-xl text-black group-hover:text-white ">
        {label}
      </h4>
    </div>
  );
};

SkillItem.propTypes = {
  iconDark: PropTypes.string.isRequired,
  iconLight: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SkillItem;
