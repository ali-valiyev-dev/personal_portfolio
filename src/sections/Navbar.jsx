import { useState } from "react";
import { Logo } from "../common";
import { navLinks } from "/constants";
import { MobileNavbar, NavLink, NavLinksWrapper } from "./components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 md:px-10 py-4 xl:px-28 text-primary-black">
        <Logo />

        <div className="hidden lg:flex">
          <NavLinksWrapper>
            {navLinks.map((link, index) => (
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
