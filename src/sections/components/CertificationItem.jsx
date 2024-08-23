import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const CertificationItem = ({
  icon,
  date,
  title,
  link,
  description,
  details,
}) => {
  return (
    <div className="text-primary-white w-full rounded-xl border border-zinc-800 px-6 py-7">
      <div className="flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row gap-7 h-max md:items-center">
          <div className="flex items-center justify-between">
            <Icon
              icon={icon}
              width={32}
              height={32}
            />
            <span className="md:hidden text-nowrap">{date}</span>
          </div>
          <a
            href={link}
            className="flex items-center gap-2 text-xl xl:text-2xl hover:underline hover:text-zinc-500 transition-all duration-300">
            {title}
            <Icon
              icon="quill:link-out"
              width={20}
              height={20}
            />
          </a>
        </div>
        <span className="hidden md:flex text-nowrap">{date}</span>
      </div>

      <p className="mt-7 text-zinc-500">{description}</p>

      <div className="flex items-center gap-5 mt-7 text-zinc-500">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center gap-1">
            <Icon
              icon={detail.icon}
              width={24}
              height={24}
            />
            <span className="text-zinc-300 text-nowrap">{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

CertificationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CertificationItem;
