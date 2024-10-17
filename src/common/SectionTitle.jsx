import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  const [firstWord, secondWord] = title.split(" ");

  return (
    <h2 className="text-3xl xl:text-5xl xl:leading-[56px] w-full text-center py-5">
      {firstWord} <span className="font-bold">{secondWord}</span>
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
