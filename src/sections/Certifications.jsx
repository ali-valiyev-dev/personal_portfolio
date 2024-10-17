import { Container, ItemsWrapper, SectionTitle } from "../common";
import { CertificationItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";

const Certifications = () => {
  const { data: certifications } = useFetchData("certifications", "*");

  useAnimate([".certs-title"]);

  return (
    <Container
      id="certifications"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="certs-title">
          <SectionTitle title="My Certifications" />
        </div>

        <ItemsWrapper>
          {certifications.map(cert => (
            <CertificationItem
              key={cert.id}
              {...cert}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Certifications;
