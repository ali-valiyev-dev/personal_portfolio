import { education } from "/constants";
import { Container, ItemsWrapper, SectionTitle } from "../common";
import { EducationItem } from "./components";

const Education = () => {
  return (
    <Container
      id="education"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col items-center gap-5 xl:px-6">
        <SectionTitle title="My Education" />

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
