import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SocialLink = ({ href, icon, alt }) => (
  <a
    className="group p-3 xl:p-4 rounded border-2 border-primary-black bg-primary-white hover:bg-primary-black transition-colors duration-300 ease-in-out "
    href={href}
    target="_blank"
    aria-label={alt}>
    <Icon
      icon={icon}
      className="text-xl xl:text-2xl text-primary-black group-hover:text-primary-white"
    />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SocialLink;
