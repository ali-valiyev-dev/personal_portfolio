import { Icon } from "@iconify/react";
import useFetchData from "../hooks/useFetchData";
import { useTranslation } from "react-i18next";

const ResumeLink = () => {
  const { t } = useTranslation();

  const { data: general_info } = useFetchData("general_info", "RESUME_LINK");

  return (
    <a
      href={general_info[0]?.RESUME_LINK}
      target="_blank"
      title={t("common.resume")}
      className="flex items-center gap-1 px-5 py-3 rounded bg-primary-black text-primary-white hover:bg-primary-white hover:text-primary-black transition-all duration-300 border-2 border-primary-black font-semibold text-xl leading-none">
      {t("common.resume")}
      <Icon
        icon="mdi:download"
        className="text-2xl"
      />
    </a>
  );
};

export default ResumeLink;
