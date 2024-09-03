import { EDUCATION } from "/constants";
import { Container, ItemsWrapper, SectionTitle } from "../common";
import { EducationItem } from "./components";
import useAnimation from "/utils/hooks/useAnimations";

const Education = () => {
  useAnimation([".edu-title-fade-in"]);

  return (
    <Container
      id="education"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col items-center gap-5 xl:px-6">
        <div className="edu-title-fade-in">
          <SectionTitle title="My Education" />
        </div>

        <ItemsWrapper>
          {EDUCATION.map((edu, index) => (
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
