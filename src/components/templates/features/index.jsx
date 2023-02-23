import FeatureList from "components/organisms/feature-list";
import playIcon from "../../../assets/images/play-icon.svg";
import features from "../../../assets/images/video-thumbnail.png";

const Features = () => {
  return (
    <section className="features-section padding-section">
      <hr />
      <h2 className="mt-48">All-in-one Event Platform </h2>
      <p className="mt-8 features-section__subtitle subtitle">
        Deliver an exceptional event experience
      </p>
      <img
        src={features}
        className="mt-48 features-section__illustration"
        alt="features"
      />
      <div className="features-section__action ">
        <button className="button-play">
          <img src={playIcon} className="" alt="play-icon" />
          See it in action (2 min)
        </button>
      </div>
      <FeatureList />
    </section>
  );
};

export default Features;
