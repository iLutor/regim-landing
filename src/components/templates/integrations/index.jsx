import Divider from "components/atoms/divider";
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
    <section className="integrations-section padding-section">
      <div className="semi-ellipse__container">
        <Divider />
        <div className="integrations-section__wrapper">
          <div className="integrations-section__content">
            <h2 className="mt-47-89 p-0-60 text-center">
              Integrate with your favorite tools
            </h2>
            <p className="mt-8-24 text-center subtitle-size">
              Connect RegiM with your most favorite sales and marketing tools
            </p>
          </div>
          <div className="integrations-section__container">
            <div className="mt-40-47 integrations-section__tools">
              <IntegrationItem src={tool1Icon} />
              <IntegrationItem src={tool2Icon} />
              <IntegrationItem src={tool3Icon} />
              <IntegrationItem src={tool4Icon} />
            </div>
            <div className="mt-32-72 integrations-section__tools pb-72-96-236">
              <IntegrationItem src={tool5Icon} />
              <IntegrationItem src={tool6Icon} />
              <IntegrationItem src={tool7Icon} />
            </div>
          </div>
        </div>
        <div className="semi-ellipse__decoration" />
      </div>
    </section>
  );
};

export default Integrations;
