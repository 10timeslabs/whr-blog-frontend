import Image from "next/image";
import "./header.css";
import herologo from "/public/assets/whrLogo.svg";
import heroText from "/public/assets/whrText.svg";

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
              <Image
                src={herologo}
                alt="Whr.ai Logo"
                className="logo-img"
                loading="lazy"
              />
              <Image
                src={heroText}
                alt="Whr.ai Text"
                className="logo-text ms-2"
                loading="lazy"
              />
            </a>
          </div>

          <nav className="d-none d-lg-flex align-items-center">
            <div className="nav-links d-flex align-items-center gap-4">
              <a href="https://console.whr.ai" className="cta-button">
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
