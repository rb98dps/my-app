// SettingsGroup.js
import React from "react";
import SettingsButton from "./SettingsButton";
import "./setting-group.css";

const SettingsGroup = ({ groupTitle, groupClass, buttonConfigs }) => {
  return (
    <div className={groupClass}>
      <span className="setting-heading">{groupTitle}</span>
      <div className="setting-set">
        {buttonConfigs.map((config, index) => (
          <SettingsButton
            key={index}
            containerClassName={config.containerClassName}
            textClassName={config.textClassName}
            buttonSetClassName={config.buttonSetClassName}
            buttonClassName={config.buttonClassName}
            selectedButtonClassName={config.selectedButtonClassName}
            messageText={config.messageText}
            buttonTexts={config.buttonTexts}
            onButtonClick={config.onButtonClick}
            selectedIndex={config.selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsGroup;
