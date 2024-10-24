import { Container, ItemsWrapper, SectionTitle, Spinner } from "../common";
import { CertificationItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import useLoadingState from "../hooks/useLoadingState";
import useAnimate from "../hooks/useAnimate";
const Certifications = () => {
  const { t } = useTranslation();

  const certificationsData = useFetchData("certifications", "*");

  const { loading, error } = useLoadingState(certificationsData);

  useAnimate([".anim-certs-title"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="certifications"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="anim-certs-title">
          <SectionTitle title={t("section_titles.my_certifications")} />
        </div>

        <ItemsWrapper>
          {certificationsData.data.map(cert => (
            <CertificationItem
              key={cert._id}
              {...cert}
              loading={loading}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Certifications;
