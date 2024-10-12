import React, { useState } from "react";
import "./navigation.css";
import "../styles/general.css";
import PropTypes from "prop-types";

const Navigation = ({
  navItems,
  navContainerClass = "navigation",
  defaultContainerClass = "default-container",
  navListClass = "nav-list",
  navItemClass = "nav-item",
  navLinkClass = "nav-link",
  activeClass,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className={navContainerClass}>
      <div className={defaultContainerClass}>
        <ul className={navListClass}>
          {navItems &&
            navItems.length > 0 &&
            navItems.map((item, index) => (
              <li className={navItemClass} key={index}>
                <a
                  href="#"
                  className={`${navLinkClass} ${
                    activeClass && activeIndex === index ? activeClass : ""
                  }`}
                  onClick={() => handleLinkClick(index)}
                >
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings (menu items) is required
  navContainerClass: PropTypes.string, // Class for section tag
  defaultContainerClass: PropTypes.string, // Class for div container
  navListClass: PropTypes.string, // Class for ul tag
  navItemClass: PropTypes.string, // Class for li tags
  navLinkClass: PropTypes.string, // Class for a tags
};

export default Navigation;
