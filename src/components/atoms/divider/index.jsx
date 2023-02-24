import PropTypes from "prop-types";

const Divider = ({ className }) => {
  return <hr className={`${className} hr`} />;
};

export default Divider;

Divider.defaultProps = {
  className: "",
};

Divider.propTypes = {
  className: PropTypes.string.isRequired,
};
