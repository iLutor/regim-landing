import PropTypes from "prop-types";

const FeatureItem = ({ src, name, content }) => {
  return (
    <div className="load-animation feature-list-section__item">
      <img src={src} alt={name} />
      <div className="feature-list-section__message">
        <h3>{name}</h3>
        <p className="mt-8">{content}</p>
      </div>
    </div>
  );
};

export default FeatureItem;

FeatureItem.propTypes = {
  src: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
