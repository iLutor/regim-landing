import CallToAction from "components/templates/cta";
import Features from "components/templates/features";
import Footer from "components/templates/footer";
import Hero from "components/templates/hero";
import Integrations from "components/templates/integrations";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Integrations />
      <CallToAction/>
      <Footer/>
    </>
  );
};

export default Landing;
