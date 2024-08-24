import { useState } from "react";
import { Logo } from "../common";
import { navLinks } from "../../constants";
import { MobileNavbar } from "./components";
import { handleSmoothScroll } from "../../utils/helpers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 md:px-14 xl:px-28 py-4 text-primary-black">
        <Logo />

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 text-xl font-semibold">
            {navLinks.map(link => (
              <li
                key={link.href}
                className="hover:text-zinc-500 transition-all duration-300">
                <a
                  href={link.href}
                  onClick={e => handleSmoothScroll(e, link.href.substring(1))}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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
