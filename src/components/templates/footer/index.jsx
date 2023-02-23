import logomark from "../../../assets/images/logomark.svg";
import Divider from "components/atoms/divider";

const Footer = () => {
  return (
    <footer className="footer-section padding-section text-center">
      <div className="footer-section__illustrations">
        <Divider className="hr--half" />
        <img src={logomark} className="footer-section__logo" alt="logmark" />
        <Divider className="hr--half" />
      </div>
      <span className="mt-24 footer-section__text">
        © RegiM 2022. Made with love by{" "}
        <span className="footer-section__text-last-word">Landify </span>
      </span>
      <span className="mt-16 pb-40  footer-section__text">
        For further details, drop a mail to{" "}
        <span className="footer-section__text-last-word">
          hello@landify.design
        </span>
      </span>
    </footer>
  );
};

export default Footer;
