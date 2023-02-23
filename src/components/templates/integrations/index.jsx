import IntegrationItem from "components/atoms/integration-item";
import tool1Icon from "../../../assets/images/tools/tool-1.svg";
import tool2Icon from "../../../assets/images/tools/tool-2.svg";
import tool3Icon from "../../../assets/images/tools/tool-3.svg";
import tool4Icon from "../../../assets/images/tools/tool-4.svg";
import tool5Icon from "../../../assets/images/tools/tool-5.svg";
import tool6Icon from "../../../assets/images/tools/tool-6.svg";
import tool7Icon from "../../../assets/images/tools/tool-7.svg";

const Integrations = () => {
  return (
    <section className="mt-74 integrations-section padding-section">
      <hr />
      <h2 className="mt-48 integrations-section__title">
        Integrate with your favorite tools
      </h2>
      <p className="mt-8 integrations-section__subtitle subtitle">
        Connect RegiM with your most favorite sales and marketing tools
      </p>
      <div className="mt-40 integrations-section__tools">
        <IntegrationItem src={tool1Icon} />
        <IntegrationItem src={tool2Icon} />
        <IntegrationItem src={tool3Icon} />
        <IntegrationItem src={tool4Icon} />
      </div>
      <div className="mt-40 integrations-section__tools">
        <IntegrationItem src={tool5Icon} />
        <IntegrationItem src={tool6Icon} />
        <IntegrationItem src={tool7Icon} />
      </div>
    </section>
  );
};

export default Integrations;
