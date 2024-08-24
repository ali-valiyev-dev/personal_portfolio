import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { navLinks } from "../../../constants";
import { Logo } from "../../common";
import { handleSmoothScroll } from "../../../utils/helpers";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex lg:hidden items-center">
      <button
        type="button"
        aria-label="Open Menu"
        className="lg:hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}>
        <Icon
          icon="mdi:menu"
          width={32}
          height={32}
        />
      </button>

      <div
        className={`bg-primary-white absolute inset-0 w-full overflow-hidden transition-max-height duration-500 ease-in-out z-50 ${
          isOpen ? "max-h-screen border-b border-primary-black" : "max-h-0"
        }`}>
        <div className="flex justify-between my-4 px-4 md:px-14">
          <div className="flex items-center">
            <Logo />
          </div>
          <button
            type="button"
            aria-label="Close Menu"
            className="flex items-center justify-center"
            onClick={() => setIsOpen(prev => !prev)}>
            <Icon
              icon="mdi:close"
              width={32}
              height={32}
            />
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center my-10 text-xl text-primary-black">
          {navLinks.map(link => (
            <li
              key={link.href}
              className="w-full py-7 text-center active:bg-zinc-800 active:text-primary-white transition-all duration-200">
              <a
                href={link.href}
                onClick={e =>
                  handleSmoothScroll(e, link.href.substring(1), setIsOpen)
                }>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileNavbar;
