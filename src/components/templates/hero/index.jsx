import logo from "../../../assets/images/logo.svg";

const Hero = () => {
  return (
    <>
      <nav className="navbar-section">
        <img src={logo} className="App-logo" alt="logo" />
        <button>Get Early Access</button>
      </nav>
      <header>
        <h1>Event Registration Reimagined</h1>
        <p>
          Manage your event registrations hassle free and without any dependency
          with the technical team. Isn’t it sounds amazing?
        </p>
      </header>
    </>
  );
};

export default Hero;
