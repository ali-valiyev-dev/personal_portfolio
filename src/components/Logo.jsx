import PropTypes from "prop-types";

const Logo = ({ color = "text-primary-black" }) => {
  return (
    <span
      className={`font-bold leading-6 text-xl -tracking-tight hover:text-zinc-500 transition-all duration-300 ${color}`}>
      .Ali
    </span>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
