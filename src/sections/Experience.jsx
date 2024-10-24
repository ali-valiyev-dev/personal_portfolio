import { Container, SectionTitle, Spinner } from "../common";
import { ExperienceItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import useAnimate from "../hooks/useAnimate";

const Experience = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useFetchData("experience", "*");

  useAnimate([".anim-exp-title"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="experience"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="anim-exp-title">
          <SectionTitle title={t("section_titles.my_experience")} />
        </div>

        {data?.map(exp => (
          <ExperienceItem
            key={exp._id}
            {...exp}
          />
        ))}
      </div>
    </Container>
  );
};

export default Experience;
