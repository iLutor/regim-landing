import logomark from "../../../assets/images/logomark.svg";

const Footer = () => {
  return (
    <footer className="footer-section padding-section">
      <span>
        <img src={logomark} className="footer-section__logo" alt="logmark" />
      </span>
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
