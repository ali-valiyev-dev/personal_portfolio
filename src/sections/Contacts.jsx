import { SocialLink, Headline, ResumeLink, Container } from "../common";
import { socialLinks } from "/constants";

const Contacts = () => {
  return (
    <Container
      id="contacts"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div className="w-full xl:w-1/2">
          <Headline text={[`Let's`, "Talk for", "Something", "Special"]} />
          <p className="mt-5 text-zinc-500">
            I seek to push the limits of creativity to create highly engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-7 xl:gap-14">
          <div className="text-xl xl:text-2xl font-semibold">
            <a
              href="mailto:youremail@gmail.com"
              rel="noopener noreferrer"
              className="hover:underline block">
              youremail@gmail.com
            </a>
            <a
              href="tel:+994708452035"
              className="hover:underline block">
              +994-70-845-20-35
            </a>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
              />
            ))}
            <ResumeLink />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
