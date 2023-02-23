const IntegrationItem = ({src}) => {
  return (
    <div className="integrations-section__tool-background">
      <img
        className="integrations-section__image"
        src={src}
        alt={src}
      />
    </div>
  );
};

export default IntegrationItem;
