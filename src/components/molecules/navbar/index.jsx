import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar-section padding-section">
      <img src={logo} className="navbar-section__logo" alt="logo" />
      <button className="button button__md">Get Early Access</button>
    </nav>
  );
};

export default Navbar;
