import { Icon } from "@iconify/react";

const ResumeLink = () => {
  return (
    <a
      href="#"
      target="_blank"
      className="flex items-center gap-1 px-5 py-3 rounded bg-primary-black text-primary-white hover:bg-primary-white hover:text-primary-black transition-all duration-300 border-2 border-primary-black font-semibold text-xl leading-none">
      Resume
      <Icon
        icon="mdi:download"
        className="text-2xl"
      />
    </a>
  );
};

export default ResumeLink;
