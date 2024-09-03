import useAnimation from "/utils/hooks/useAnimations";
import { Container, ItemsWrapper, SectionTitle } from "../common";
import { CertificationItem } from "./components";
import { CERTIFICATIONS } from "/constants";

const Certifications = () => {
  useAnimation([".certs-title-fade-in"]);

  return (
    <Container
      id="certifications"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="certs-title-fade-in">
          <SectionTitle title="My Certifications" />
        </div>

        <ItemsWrapper>
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationItem
              key={index}
              {...cert}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Certifications;
