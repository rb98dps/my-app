import "./App.css";
import "./styles/general.css";
import "./index.css";
import React from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import PassportHeading from "./components/PassportHeading";
import PassportContainer from "./components/PassportContainer";
import SettingHeader from "./components/SettingHeader";
import SettingNavigation from "./components/SettingNavigation";
import SettingsGroup from "./components/SettingsGroup";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  /* Navigation items dynamic list */
  const navItems = [
    {
      items: ["Home", "Explore", "Create", "Settings"],
      className: "navigation",
      defaultContainerClass: "default-container",
      navListClass: "nav-list",
      navItemClass: "nav-item",
      navLinkClass: "nav-link",
    },
    {
      items: ["all", "artist", "collector", "virtual gallery"],
      className: "sub-navigation",
      defaultContainerClass: "default-container",
      navListClass: "sub-nav-list",
      navItemClass: "sub-nav-item",
      navLinkClass: "sub-nav-link",
    },
    {
      items: ["list", "pictures"],
      className: "sub-navigation-1",
      defaultContainerClass: "main-container",
      navListClass: "sub-nav-list-1",
      navItemClass: "sub-nav-item",
      navLinkClass: "sub-nav-link",
    },
  ];

  const passportHeading = "Digital passport";

  const passporFooterProps = {
    certifiedBy: "Certified by",
    logoSrc: "./assign-logo.png",
    blockchainText: "BLOCKCHAIN REGISTERED",
    blockchainHash: "0xbe7aA7316Ec4535463F788FF50b2c18886",
  };

  const passportProps = {
    mainImageSrc: "./passport-main.jpg",
    mainHeading: "Digital Passport",
    mainText: "4567",
    secondaryImageSrc: "./customer-2.jpg",
    secondaryText: "Jane Doe",
    itemHeading: "Somnia",
  };

  const itemDetails = [
    "2010",
    "Print on baryta paper",
    "Edition 2/4",
    "70 X 115 cm",
    "Signed, numbered and dated on verso",
  ];

  // State management for selected indexes of buttons
  const [nameSelectedIndex, setNameSelectedIndex] = useState(0);
  const [logoSelectedIndex, setLogoSelectedIndex] = useState(0);
  const [visualSelectedIndex, setVisualSelectedIndex] = useState(0);
  const [waterMarkSelectedIndex, setWaterMarkSelectedIndex] = useState(0);
  const [priceSelectedIndex, setPriceSelectedIndex] = useState(0);
  const [historySelectedIndex, setHistorySelectedIndex] = useState(0);

  const buttonConfigs = [
    {
      containerClassName: "setting-container",
      textClassName: "setting-text",
      buttonSetClassName: "setting-button-set",
      buttonClassName: "setting-button",
      selectedButtonClassName: "selected",
      messageText: "name",
      buttonTexts: ["private", "owner", "public"],
      onButtonClick: setNameSelectedIndex,
      selectedIndex: nameSelectedIndex,
    },
    {
      containerClassName: "setting-container",
      textClassName: "setting-text",
      buttonSetClassName: "setting-button-set",
      buttonClassName: "setting-button",
      selectedButtonClassName: "selected",
      messageText: "logo",
      buttonTexts: ["private", "owner", "public"],
      onButtonClick: setLogoSelectedIndex,
      selectedIndex: logoSelectedIndex,
    },
    {
      containerClassName: "setting-container",
      textClassName: "setting-text",
      buttonSetClassName: "setting-button-set",
      buttonClassName: "setting-button",
      selectedButtonClassName: "selected",
      messageText: "visual",
      buttonTexts: ["private", "owner", "public"],
      onButtonClick: setVisualSelectedIndex,
      selectedIndex: visualSelectedIndex,
    },
    {
      containerClassName: "watermark-container",
      buttonClassName: "watermark-button",
      selectedButtonClassName: "watermark-grey-background",
      buttonTexts: ["add watermark", "remove watermark"],
      onButtonClick: setWaterMarkSelectedIndex,
      selectedIndex: waterMarkSelectedIndex,
    },
    {
      containerClassName: "setting-container",
      textClassName: "setting-text",
      buttonSetClassName: "setting-button-set",
      buttonClassName: "setting-button",
      selectedButtonClassName: "selected",
      messageText: "price",
      buttonTexts: ["private", "owner", "public"],
      onButtonClick: setPriceSelectedIndex,
      selectedIndex: priceSelectedIndex,
    },
    {
      containerClassName: "setting-container",
      textClassName: "setting-text",
      buttonSetClassName: "setting-button-set",
      buttonClassName: "setting-button",
      selectedButtonClassName: "selected",
      messageText: "transaction history",
      buttonTexts: ["private", "owner", "public"],
      onButtonClick: setHistorySelectedIndex,
      selectedIndex: historySelectedIndex,
    },
  ];

  const footerProps = {
    footerText: "...",
    footerLinks: ["artist", "pictures", "jane doe", "somnia"],
    poweredByText: "powered by",
    logoSrc: "assign-logo-1.png",
  };

  return (
    <div className="App">
      <Header headerName={"Gallery Name"} />
      <SearchBar width={20} />
      {navItems.map((nav, index) => (
        <Navigation
          key={index}
          navItems={nav.items}
          navContainerClass={nav.className}
          defaultContainerClass={nav.defaultContainerClass}
          navListClass={nav.navListClass}
          navItemClass={nav.navItemClass}
          navLinkClass={nav.navLinkClass}
        />
      ))}

      <PassportHeading headingText={passportHeading} />
      <section className="passport">
        <PassportContainer
          {...passportProps}
          itemDetails={itemDetails}
          footerProps={passporFooterProps}
        />
      </section>

      <section className="setting">
        <div className="main-container">
          <SettingHeader headingText="Select how you see your passport:" />
          <SettingNavigation links={["owner", "public"]} />

          {/* Gallery Settings */}
          <SettingsGroup
            groupTitle="Gallery settings"
            groupClass="gallery-setting"
            buttonConfigs={buttonConfigs.slice(0, 2)} // First two button configs
          />

          {/* Artwork Settings */}
          <SettingsGroup
            groupTitle="Artwork settings"
            groupClass="artwork-setting"
            buttonConfigs={buttonConfigs.slice(2)} // Remaining button configs
          />
        </div>
      </section>

      <Footer
        footerText={footerProps.footerText}
        footerLinks={footerProps.footerLinks}
        poweredByText={footerProps.poweredByText}
        logoSrc={footerProps.logoSrc}
      />
    </div>
  );
}

export default App;
