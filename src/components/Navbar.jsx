import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 lg:px-28 my-4">
        {/* logo */}
        <div>
          <Logo />
        </div>

        {/* desktop nav links */}
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

        {/* mobile nav links */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            aria-label="Open Menu"
            className="lg:hidden flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon fontSize="large" />
          </button>

          <div
            className={`bg-primary-white absolute inset-0 w-full overflow-hidden transition-max-height duration-500 ease-in-out z-50 ${
              isOpen ? "max-h-screen border-b border-primary-black" : "max-h-0"
            }`}>
            <div className="flex justify-between my-4 px-4">
              <div className="flex items-center">
                <Logo />
              </div>
              <button
                type="button"
                aria-label="Close Menu"
                className="flex items-center justify-center"
                onClick={() => setIsOpen(prev => !prev)}>
                <CloseIcon fontSize="large" />
              </button>
            </div>

            <ul className="flex flex-col items-center justify-center my-10 text-xl font-normal text-primary-black">
              {navLinks.map(link => (
                <li
                  key={link.href}
                  className="w-full py-7 text-center active:bg-zinc-800 active:text-primary-white transition-all duration-200">
                  <a
                    href={link.href}
                    onClick={e =>
                      handleSmoothScroll(e, link.href.substring(1))
                    }>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
