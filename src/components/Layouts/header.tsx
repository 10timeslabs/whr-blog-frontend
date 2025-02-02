import "./header.css";

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="logo-container">
            <a
              href="/"
              className="d-flex align-items-center text-decoration-none"
            >
              <img
                src="https://whr.ai/assets/img/croppedlogo.png"
                alt="Whr.ai Logo"
                className="logo-img"
                loading="lazy"
              />
              <img
                src="https://whr.ai/assets/img/Whr.ai.png"
                alt="Whr.ai Text"
                className="logo-text ms-2"
                loading="lazy"
              />
            </a>
          </div>

          <nav className="d-none d-lg-flex align-items-center">
            <div className="nav-links d-flex align-items-center gap-4">
              <a href="/get-started" className="cta-button">
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
