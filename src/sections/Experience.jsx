import { Container, SectionTitle, Spinner } from "../common";
import { ExperienceItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import useLoadingState from "../hooks/useLoadingState";
import { useTranslation } from "react-i18next";
import useAnimate from "../hooks/useAnimate";

const Experience = () => {
  const { t } = useTranslation();
  const experienceData = useFetchData("experience", "*");

  const { loading, error } = useLoadingState(experienceData);

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

        {experienceData.data.map(exp => (
          <ExperienceItem
            key={exp._id}
            {...exp}
            loading={loading}
          />
        ))}
      </div>
    </Container>
  );
};

export default Experience;
