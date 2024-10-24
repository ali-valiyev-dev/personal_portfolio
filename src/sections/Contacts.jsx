import {
  SocialLink,
  ContactsHeadline,
  Container,
  ScrollToTopMobile,
  Spinner,
} from "../common";
import useFetchData from "../hooks/useFetchData";
import useLoadingState from "../hooks/useLoadingState";
import useAnimate from "../hooks/useAnimate";

const Contacts = () => {
  const generalInfoData = useFetchData(
    "general_info",
    "CONTACTS_TEXT, EMAIL, PHONE"
  );

  const socialLinksData = useFetchData("social_links", "*", false);

  const { loading, error } = useLoadingState(generalInfoData, socialLinksData);

  useAnimate([".anim-contacts-content"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="contacts"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div className="w-full xl:w-max">
          <div className="anim-contacts-content flex justify-between items-start">
            <ContactsHeadline />
          </div>

          <p className="anim-contacts-content mt-5 text-zinc-500 max-w-[600px]">
            {generalInfoData.data[0]?.CONTACTS_TEXT}
          </p>
        </div>

        <div className="w-full xl:w-max flex flex-col gap-7 xl:gap-14">
          <div className="flex flex-col gap-5 text-xl xl:text-2xl font-semibold w-max">
            <a
              href={`mailto:${generalInfoData.data[0]?.EMAIL}`}
              rel="noopener noreferrer"
              className="anim-contacts-content hover:underline block">
              {generalInfoData.data[0]?.EMAIL}
            </a>
            <a
              href={`tel:${generalInfoData.data[0]?.PHONE}`}
              className="anim-contacts-content hover:underline block">
              {generalInfoData.data[0]?.PHONE}
            </a>
          </div>

          <div className="anim-contacts-content flex gap-2 sm:gap-6 ">
            {socialLinksData.data.map(social_link => (
              <SocialLink
                key={social_link._id}
                {...social_link}
              />
            ))}
            <div className="flex w-full justify-end">
              <ScrollToTopMobile />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
