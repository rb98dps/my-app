import React, { useState } from "react";
import "./setting-navigation.css";
import "./navigation.css";
import PropTypes from "prop-types";

const SettingNavigation = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="setting-navigation">
      <ul className="setting-nav-list">
        {links.map((linkText, index) => (
          <li key={index} className="sub-nav-item">
            <a
              href="#"
              className={`sub-nav-link ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleLinkClick(index)}
            >
              {linkText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

SettingNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SettingNavigation;
