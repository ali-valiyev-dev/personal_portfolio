import { Container, SectionTitle } from "../common";
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

        <div className="flex flex-col items-center gap-5 xl:gap-8">
          {certifications.map(certification => (
            <CertificationItem
              key={certification.id}
              {...certification}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Certifications;
