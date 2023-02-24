import PropTypes from "prop-types";

const IntegrationItem = ({ src }) => {
  return (
    <div className="integrations-section__tool-background">
      <img
        className="integrations-section__image"
        src={src}
        alt="Intregation tool"
      />
    </div>
  );
};

export default IntegrationItem;

IntegrationItem.propTypes = {
  src: PropTypes.node.isRequired,
};
