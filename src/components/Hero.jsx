import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import SocialIcon from "./SocialIcon.jsx";
import Heading from "./Heading"; // Adjust the import path as necessary

const Hero = () => {
  return (
    <section>
      <div className=" mx-auto max-w-screen-2xl xl:items-end px-4 md:px-14 xl:px-28 py-10 xl:py-14 flex flex-col-reverse gap-12 lg:gap-20 xl:gap-0  lg:flex-row">
        <div className=" lg:w-1/2 ">
          <Heading
            text={[
              `Hello I'm`,
              "Ali Valiyev.",
              "Frontend",
              "Developer",
              "Based In",
              "Azerbaijan.",
            ]}
          />

          <p className="mt-8 text-zinc-500 text-base">
            Lorem ipsum dolor sit amet amet, consectetur adipiscing elit.
            Quisque interdum, odio eget volutpat aliquet, neque ante hendrerit
            libero, ac facilisis turpis metus sed nulla. Ut sit amet orci at
            odio semper luctus.
          </p>

          <div className="mt-8 xl:mt-24 flex gap-6 xl:gap-8">
            <SocialIcon
              href="#"
              IconComponent={LinkedInIcon}
              alt="LinkedIn"
            />
            <SocialIcon
              href="#"
              IconComponent={GitHubIcon}
              alt="GitHub"
            />
            <a
              href="#"
              className="flex items-center px-5 xl:py-3 rounded bg-primary-black text-primary-white hover:bg-primary-white hover:text-primary-black transition-all duration-300 border-2 border-primary-black ease-in-out font-semibold text-xl leading-none">
              Resume <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/src/assets/hero.png"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
