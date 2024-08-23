import PropTypes from "prop-types";

const Container = ({ id, bgColor, textColor, children }) => {
  return (
    <section
      id={id}
      className={bgColor}>
      <div
        className={`${textColor} mx-auto max-w-screen-2xl px-4 md:px-10 xl:px-28 py-10 xl:py-20 flex`}>
        {children}
      </div>
    </section>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
