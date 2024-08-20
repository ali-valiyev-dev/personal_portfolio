import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return (
    <h1 className="text-3xl leading-10 xl:text-5xl xl:leading-[60px] text-primary-black font-bold">
      <span className="font-medium drop-shadow-heading">{text[0]}</span>{" "}
      <span className="drop-shadow-heading">{text[1]}</span> {text[2]}{" "}
      <span className="text-white text-shadow-outline">{text[3]}</span>{" "}
      <span className="font-normal">{text[4]}</span> {text[5]}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.array.isRequired,
};

export default Heading;
