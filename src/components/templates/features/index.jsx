import Divider from "components/atoms/divider";
import FeatureList from "components/organisms/feature-list";
import playIcon from "../../../assets/images/play-icon.svg";
import features from "../../../assets/images/video-thumbnail.svg";

const Features = () => {
  return (
    <section className="features-section padding-section pb-73-145">
      <Divider />
      <h2 className="load-animation mt-48-96 text-center">All-in-one Event Platform </h2>
      <p className="load-animation mt-8 subtitle-size text-center">
        Deliver an exceptional event experience
      </p>
      <div className="features-section__container">
        <img
          src={features}
          className="load-animation mt-48 features-section__illustration"
          alt="features"
        />
      </div>
      <div className="features-section__action ">
        <button className="load-animation button-play">
          <img src={playIcon} alt="play-icon" />
          See it in action (2 min)
        </button>
      </div>
      <FeatureList />
    </section>
  );
};

export default Features;
