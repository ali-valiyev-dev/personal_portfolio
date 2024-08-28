import { education } from "/constants";
import { Container, ItemsWrapper, SectionTitle } from "../common";
import { EducationItem } from "./components";
import useAnimation from "/utils/hooks/useAnimations";

const Education = () => {
  useAnimation([
    {
      selector: ".education-fade-in",
    },
  ]);

  return (
    <Container
      id="education"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col items-center gap-5 xl:px-6">
        <div className="education-fade-in">
          <SectionTitle title="My Education" />
        </div>

        <ItemsWrapper>
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              {...edu}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Education;
