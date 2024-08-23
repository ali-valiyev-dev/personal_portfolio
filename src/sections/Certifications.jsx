import { Container, ItemsWrapper, SectionTitle } from "../common";
import { CertificationItem } from "./components";
import { certifications } from "../../constants";

const Certifications = () => {
  return (
    <Container
      id="certifications"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <SectionTitle title="My Certifications" />

        <ItemsWrapper>
          {certifications.map(certification => (
            <CertificationItem
              key={certification.id}
              {...certification}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Certifications;
