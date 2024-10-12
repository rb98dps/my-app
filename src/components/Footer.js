import React from "react";
import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ footerText, footerLinks, poweredByText, logoSrc }) => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <span className="footer-text">{footerText}</span>
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            {
              <svg
                className="footer-arrow"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33624 7.58625L2.99999 8.25L6.74999 4.5L2.99999 0.75L2.33624 1.41375L5.42249 4.5L2.33624 7.58625Z"
                  fill="black"
                  fillOpacity="0.35"
                />
              </svg>
            }
            <a
              href="#"
              className={`footer-link ${
                index === footerLinks.length - 1 ? "last" : ""
              }`}
            >
              {link}
            </a>
          </React.Fragment>
        ))}
      </div>

      <div className="footer-bar">
        <span className="footer-bar-text">{poweredByText}</span>
        <img className="footer-bar-logo" src={logoSrc} alt="assign-logo" />
      </div>
    </footer>
  );
};

// PropTypes for type checking
Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
  footerLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  poweredByText: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
};

export default Footer;
