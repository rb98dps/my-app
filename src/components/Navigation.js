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
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  navContainerClass: PropTypes.string,
  defaultContainerClass: PropTypes.string,
  navListClass: PropTypes.string,
  navItemClass: PropTypes.string,
  navLinkClass: PropTypes.string,
};

export default Navigation;
