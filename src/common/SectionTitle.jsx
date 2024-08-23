import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  const [firstWord, secondWord] = title.split(" ");

  return (
    <h1 className="text-3xl xl:text-5xl xl:leading-[56px] w-full text-center">
      {firstWord} <span className="font-bold">{secondWord}</span>
    </h1>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
