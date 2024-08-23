import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ExperienceItem = ({
  companyLogo,
  companyName,
  position,
  workPeriod,
  description,
  techStack,
}) => {
  return (
    <div className="rounded-xl border border-zinc-800 px-6 py-7">
      <div className="flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex gap-7 h-max items-center">
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            width={56}
            height={56}
          />
          <h4 className=" text-xl xl:text-2xl">{position}</h4>
        </div>

        <span className=" text-base text-zinc-300 ">{workPeriod}</span>
      </div>

      <p className="text-base text-zinc-300 mt-7">{description}</p>

      <div className="flex gap-2 flex-wrap mt-7 ">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-max flex gap-1 items-center border border-zinc-500 rounded px-3 py-2">
            <Icon
              icon={tech.icon}
              width="24"
              height="24"
              className=" text-zinc-300"
            />
            <span className="text-base text-zinc-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  workPeriod: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceItem;
