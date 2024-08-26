import PropTypes from "prop-types";

const ItemsWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-5 xl:gap-8 lg:py-10">
      {children}
    </div>
  );
};

ItemsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsWrapper;
