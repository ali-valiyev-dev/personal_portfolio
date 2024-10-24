import { useTranslation } from "react-i18next";
import { handleSmoothScroll } from "../../utils/helpers";
import PropTypes from "prop-types";

const NavLink = ({ link, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <li className="text-center lg:active:text-zinc-800 active:text-primary-white hover:text-zinc-500 transition-all duration-200 cursor-pointer">
      <a
        href={`#${link}`}
        className="text-xl md:text-2xl lg:text-lg text-nowrap"
        onClick={e => handleSmoothScroll(e, link, setIsOpen)}>
        {t(`nav_links.${link}`)}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func,
};
export default NavLink;
