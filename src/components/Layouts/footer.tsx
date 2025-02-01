import Link from "next/link";
import React from "react";
import Logo from "/public/croppedlogo.png";
import Image from "next/image";
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="logo-container">
          <div className="logo-box">
            <Image width="32" height="40" src={Logo} alt="nav-logo" />
          </div>
          <div className="tagline">
            <span>
              Unlock the true potential of Event <br /> Intelligence !
            </span>
          </div>
        </div>
        {/* <div className="social-links">
          <Link href="https://twitter.com" target="_blank">
            <Image src={TwitterIcon} alt="Twitter" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image src={Insta} alt="Instagram" />
          </Link>
          <Link href="https://pinterest.com" target="_blank">
            <Image src={Pin} alt="Pinterest" />
          </Link>
          <Link href="https://linkedIn.com" target="_blank">
            <Image src={linke} alt="LinkedIn" />
          </Link>
          <Link href="https://ticktok.com" target="_blank">
            <Image src={TicktokIcon} alt="TikTok" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Image src={you} alt="YouTube" />
          </Link>
        </div> */}
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3 className="footer-heading">Product</h3>
          <ul>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Updated</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Pricing</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading"    >Resource</h3>
          <ul>
            <li><Link href="#">Examples</Link></li>
            <li><Link href="#">Community</Link></li>
            <li><Link href="#">Guides</Link></li>
            <li><Link href="#">Docs</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Security</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;