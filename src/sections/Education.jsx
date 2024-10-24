import { Container, ItemsWrapper, SectionTitle, Spinner } from "../common";
import { EducationItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import useAnimate from "../hooks/useAnimate";

const Education = () => {
  const { t } = useTranslation();

  const { data, loading, error } = useFetchData("education", "*");

  useAnimate([".anim-edu-title"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="education"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col items-center gap-5 xl:px-6">
        <div className="anim-edu-title">
          <SectionTitle title={t("section_titles.my_education")} />
        </div>

        <ItemsWrapper>
          {data.map(edu => (
            <EducationItem
              key={edu._id}
              {...edu}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Education;
