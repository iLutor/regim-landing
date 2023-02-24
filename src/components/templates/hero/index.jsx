import React, { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "components/molecules/navbar";
import mockups from "../../../assets/images/mockups.svg";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline({
    defaults: { ease: Power4.easeOut, stagger: 0.3 },
  });

  useEffect(() => {
    const title = document.querySelectorAll(".load-animation");
    let to = timeline.to(title, { opacity: 1, duration: 1.5 });
    timeline.from(title, {
      opacity: 0,
      duration: 2,
      immediateRender: false,
    });

    return () => {
      to.kill();
    };
  }, [timeline]);

  return (
    <div className="ellipse__container">
      <Navbar />
      <header className="hero-content-section padding-section ">
        <section className="left-section">
          <h1 className="load-animation mt-48-80-186">
            Event Registration Reimagined
          </h1>
          <p className="load-animation mt-16 subtitle-size">
            Manage your event registrations hassle free and without any
            dependency with the technical team. Isn’t it sounds amazing?
          </p>
          <button className="load-animation button button__lg mt-40">
            Get Early Access
          </button>
        </section>
        <section className="mockups-section">
          <img
            src={mockups}
            className="load-animation mockups-section__illustration "
            alt="mockups"
          />
        </section>
      </header>
      <div className="ellipse__decoration pulser" />
    </div>
  );
};

export default Hero;
