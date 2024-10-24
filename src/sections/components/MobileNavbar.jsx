import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_LINKS } from "../../configs/constants";
import { Logo, ResumeLink, SocialLink } from "../../common";
import { NavLinksWrapper, NavLink, LanguageSelectButton } from "../components";
import useFetchData from "../../hooks/useFetchData";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const { data: social_links } = useFetchData("social_links", "*", false);

  return (
    <div className="flex lg:hidden items-center">
      <button
        type="button"
        aria-label="Open Menu"
        className="lg:hidden flex items-center justify-center"
        onClick={() => setIsOpen(true)}>
        <Icon
          icon="mdi:menu"
          width={32}
          height={32}
        />
      </button>

      <div
        className={`bg-primary-white fixed left-0 top-0 h-screen w-full flex flex-col items-center justify-center gap-12 transition-all duration-500  overflow-hidden ease-in-out z-50 ${
          isOpen ? "max-h-full border-b border-primary-black" : "max-h-0"
        }`}>
        <div className="flex items-center justify-between py-2 lg:py-4 px-4 md:px-10 absolute top-0 left-0 w-full ">
          <Logo />
          <button
            type="button"
            aria-label="Close Menu"
            className="flex items-center justify-center"
            onClick={() => setIsOpen(false)}>
            <Icon
              icon="mdi:close"
              width={32}
              height={32}
            />
          </button>
        </div>

        <NavLinksWrapper>
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={index}
              setIsOpen={setIsOpen}
              link={link}
            />
          ))}
        </NavLinksWrapper>

        <div className="w-32">
          <LanguageSelectButton />
        </div>

        <div className="absolute bottom-0 left-0 flex flex-wrap justify-center w-full gap-2 sm:gap-6 py-4 px-4">
          {social_links.map(social_link => (
            <SocialLink
              key={social_link._id}
              {...social_link}
            />
          ))}

          <ResumeLink />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
