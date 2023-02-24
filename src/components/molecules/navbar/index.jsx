import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar-section padding-section">
      <a href="https://regim-landing.netlify.app/">
        <img src={logo} className="navbar-section__logo" alt="logo" />
      </a>
      <button className="button button__md">Get Early Access</button>
    </nav>
  );
};

export default Navbar;
