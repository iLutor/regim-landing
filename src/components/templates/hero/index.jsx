import Navbar from "components/molecules/navbar";
import mockups from "../../../assets/images/mockups.svg";

const Hero = () => {
  return (
    <div className="mockups-section__ellipse-container">
      <Navbar />
      <header className="hero-content-section padding-section ">
        <section className="left-section">
          <h1 className="mt-68">Event Registration Reimagined</h1>
          <p className="mt-16 subtitle-size">
            Manage your event registrations hassle free and without any
            dependency with the technical team. Isn’t it sounds amazing?
          </p>
          <button className="button button__lg mt-40">Get Early Access</button>
        </section>
        <section className="mockups-section">
          <img
            src={mockups}
            className="mockups-section__illustration "
            alt="mockups"
          />
        </section>
      </header>
      <div className="mockups-section__ellipse-decoration" />
    </div>
  );
};

export default Hero;
