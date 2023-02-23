import Divider from "components/atoms/divider";
import FeatureList from "components/organisms/feature-list";
import playIcon from "../../../assets/images/play-icon.svg";
import features from "../../../assets/images/video-thumbnail.png";

const Features = () => {
  return (
    <section className="features-section padding-section pb-74">
      <Divider />
      <h2 className="mt-48 text-center">All-in-one Event Platform </h2>
      <p className="mt-8 subtitle-size text-center">
        Deliver an exceptional event experience
      </p>
      <img
        src={features}
        className="mt-48 features-section__illustration"
        alt="features"
      />
      <div className="features-section__action ">
        <button className="button-play">
          <img src={playIcon} alt="play-icon" />
          See it in action (2 min)
        </button>
      </div>
      <FeatureList />
    </section>
  );
};

export default Features;
