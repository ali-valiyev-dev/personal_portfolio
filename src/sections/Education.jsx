import { Container, ItemsWrapper, SectionTitle } from "../common";
import { EducationItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";

const Education = () => {
  const { data: education } = useFetchData("education", "*");

  useAnimate([".edu-title"]);

  return (
    <Container
      id="education"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col items-center gap-5 xl:px-6">
        <div className="edu-title">
          <SectionTitle title="My Education" />
        </div>

        <ItemsWrapper>
          {education.map(edu => (
            <EducationItem
              key={edu.id}
              {...edu}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Education;
