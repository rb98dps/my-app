import React from "react";

const SettingsContainer = ({
  containerClassName,
  textClassName,
  buttonSetClassName,
  buttonClassName,
  selectedButtonClassName,
  messageText,
  buttonTexts,
  onButtonClick,
  selectedIndex,
}) => {
  /* Only add buttonSetClassName div, if it is defined */

  return (
    <div className={containerClassName}>
      {messageText && <span className={textClassName}>{messageText}</span>}
      {buttonSetClassName ? (
        <div className={buttonSetClassName}>
          {buttonTexts.map((text, index) => (
            <button
              key={index}
              className={`${buttonClassName} ${
                index === selectedIndex ? selectedButtonClassName : ""
              }`}
              onClick={() => onButtonClick(index)}
            >
              {text}
            </button>
          ))}
        </div>
      ) : (
        buttonTexts.map((text, index) => (
          <button
            key={index}
            className={`${buttonClassName} ${
              index === selectedIndex ? selectedButtonClassName : ""
            }`}
            onClick={() => onButtonClick(index)}
          >
            {text}
          </button>
        ))
      )}
    </div>
  );
};

export default SettingsContainer;
