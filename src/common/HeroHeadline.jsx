const HeroHeading = () => {
  return (
    <h1 className="text-3xl leading-10 xl:text-5xl xl:leading-[60px] text-primary-black font-bold">
      <span className="text-nowrap font-medium drop-shadow-heading">
        Hello I&apos;m
      </span>{" "}
      <span className="text-nowrap drop-shadow-heading">Ali Valiyev.</span>{" "}
      Frontend{" "}
      <span className="text-nowrap text-primary-white text-shadow-outline">
        Developer
      </span>{" "}
      <span className="text-nowrap font-normal">Based In</span> Azerbaijan.
    </h1>
  );
};

export default HeroHeading;
