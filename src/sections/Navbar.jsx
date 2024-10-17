import { useState, useEffect } from "react";
import { Logo } from "../common";
import { NAV_LINKS } from "../configs/constants";
import { MobileNavbar, NavLink, NavLinksWrapper } from "./components";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`bg-primary-white mx-auto max-w-screen-2xl flex items-center justify-between px-4 md:px-10 py-2 lg:py-4 xl:px-28 text-primary-black max-lg:fixed z-50 w-full transition-shadow duration-500 ${
          isScrolled ? "shadow-md" : ""
        }`}>
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

        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
