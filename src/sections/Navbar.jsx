import { useState } from "react";
import { Logo } from "../common";
import { NAV_LINKS } from "/constants";
import { MobileNavbar, NavLink, NavLinksWrapper } from "./components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="bg-primary-white mx-auto max-w-screen-2xl flex items-center justify-between px-4 md:px-10 py-2 lg:py-4 xl:px-28 text-primary-black max-lg:fixed z-50 w-full transition-colors duration-300">
        <Logo />

        <div className="hidden lg:flex">
          <NavLinksWrapper>
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={index}
                {...link}
              />
            ))}
          </NavLinksWrapper>
        </div>

        <MobileNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
