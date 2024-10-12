import React from "react";
import "./passport-container.css";
import PropTypes from "prop-types";

const PassportContainer = ({
  mainImageSrc,
  mainHeading,
  mainText,
  secondaryImageSrc,
  secondaryText,
  itemHeading,
  itemDetails,
  footerProps,
}) => {
  return (
    <div className="passport-container">
      <span className="passport-container-heading">{mainHeading}</span>
      <span className="passport-container-text">{mainText}</span>

      <div className="image-container">
        <img className="passport-main-image" src={mainImageSrc} alt="Main" />
      </div>

      <div className="grid--2columns margin-9px-Xaxis">
        <div className="grid-item">
          <span className="grid-item-heading">{itemHeading}</span>
          {itemDetails.map((detail, index) => (
            <span key={index} className="grid-item-text">
              {detail}
            </span>
          ))}
        </div>

        <div className="grid-item-flex">
          <img
            className="passport-secondary-image"
            src={secondaryImageSrc}
            alt="Secondary"
          />
          <span className="grid-item-text line-height-7_2px">
            {secondaryText}
          </span>
          <svg
            viewBox="0 0 27 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sign"
          >
            <path
              d="M26.5 9.35997H4.66515C5.16515 8.85102 5.68764 8.31282 6.19139 7.76358C8.08388 7.99432 10.4576 7.23968 13.2588 5.51523C13.7176 6.32773 14.8251 7.77918 16.8938 7.79998H16.9376C18.0263 7.79998 19.1426 7.39373 20.3325 6.56108C20.8963 7.09408 22.4138 7.79998 26.5 7.79998C26.6326 7.79998 26.7598 7.77258 26.8536 7.72382C26.9473 7.67506 27 7.60893 27 7.53998C27 7.47102 26.9473 7.40489 26.8536 7.35613C26.7598 7.30737 26.6326 7.27998 26.5 7.27998C21.14 7.27998 21 6.02938 21 5.97998C20.9999 5.92399 20.965 5.86952 20.9005 5.82468C20.836 5.77983 20.7454 5.74701 20.6422 5.73109C20.539 5.71517 20.4286 5.717 20.3276 5.73631C20.2265 5.75563 20.1401 5.79139 20.0813 5.83828C18.5926 7.02648 17.5526 7.27998 16.9351 7.27998H16.9126C15.2876 7.26373 14.2513 5.55618 13.9901 4.90033C13.9702 4.85259 13.9247 4.80873 13.8591 4.77379C13.7934 4.73885 13.7101 4.71423 13.6188 4.70276C13.5275 4.6913 13.4318 4.69345 13.3427 4.70896C13.2536 4.72448 13.1747 4.75273 13.1151 4.79048C10.4976 6.49803 8.23263 7.36123 6.64014 7.27348C9.66387 3.86749 10.6489 1.63539 9.56137 0.635048C9.25012 0.345149 8.58762 0 7.23888 0C5.5114 0 4.06765 0.936647 3.37516 2.50509C2.94153 3.49615 2.87619 4.52117 3.18266 5.52498C3.51266 6.51883 4.2314 7.21823 5.2689 7.56273C4.6964 8.18672 4.1064 8.79772 3.53891 9.36192H0.500179C0.367572 9.36192 0.240395 9.38931 0.146628 9.43807C0.0528604 9.48683 0.000182212 9.55296 0.000182212 9.62192C0.000182212 9.69088 0.0528604 9.75701 0.146628 9.80577C0.240395 9.85453 0.367572 9.88192 0.500179 9.88192H3.01266C1.40392 11.453 0.0914316 12.5911 0.0714317 12.608C0.037599 12.6373 0.0151907 12.6697 0.00548675 12.7035C-0.00421717 12.7373 -0.00102631 12.7717 0.0148768 12.8049C0.0307799 12.838 0.0590837 12.8692 0.0981711 12.8967C0.137259 12.9241 0.186364 12.9473 0.242681 12.9649C0.320665 12.9887 0.40977 13.0008 0.500179 13C0.586497 13 0.671353 12.9884 0.746486 12.9663C0.82162 12.9442 0.884472 12.9123 0.928926 12.8739C0.948926 12.8563 2.41017 11.5901 4.1439 9.87997H26.5C26.6326 9.87997 26.7598 9.85258 26.8536 9.80382C26.9473 9.75506 27 9.68892 27 9.61997C27 9.55101 26.9473 9.48488 26.8536 9.43612C26.7598 9.38736 26.6326 9.35997 26.5 9.35997ZM4.16765 5.43463C3.8858 4.49904 3.94901 3.5441 4.3539 2.62079C4.80015 1.60549 5.79264 0.519998 7.23888 0.519998C8.17888 0.519998 8.51762 0.731898 8.69012 0.890497C9.87512 1.97599 7.49013 5.06998 5.70014 7.08498C4.97015 6.80483 4.43265 6.22893 4.16765 5.43463Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <Footer {...footerProps} />
    </div>
  );
};

function Footer({ certifiedBy, logoSrc, blockchainText, blockchainHash }) {
  const trimmedHash = trimHash(blockchainHash);
  return (
    <div className="passport-footer">
      <div className="footer-certificate">
        <span className="footer-message">{certifiedBy}</span>
        <img className="passport-logo-image" src={logoSrc} alt="Logo" />
      </div>
      <div className="grid-container">
        <svg
          className="grid-lock-icon"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7.33333C1.81667 7.33333 1.65967 7.268 1.529 7.13733C1.39833 7.00667 1.33311 6.84978 1.33333 6.66667V3.33333C1.33333 3.15 1.39867 2.993 1.52933 2.86233C1.66 2.73167 1.81689 2.66644 2 2.66667H2.33333V2C2.33333 1.53889 2.49589 1.14578 2.821 0.820666C3.14611 0.495554 3.53911 0.33311 4 0.333332C4.46111 0.333332 4.85422 0.495888 5.17933 0.820999C5.50445 1.14611 5.66689 1.53911 5.66667 2V2.66667H6C6.18333 2.66667 6.34033 2.732 6.471 2.86267C6.60167 2.99333 6.66689 3.15022 6.66667 3.33333V6.66667C6.66667 6.85 6.60133 7.007 6.47067 7.13767C6.34 7.26833 6.18311 7.33355 6 7.33333H2ZM4 5.66667C4.18333 5.66667 4.34033 5.60133 4.471 5.47067C4.60167 5.34 4.66689 5.18311 4.66667 5C4.66667 4.81667 4.60133 4.65967 4.47067 4.529C4.34 4.39833 4.18311 4.33311 4 4.33333C3.81667 4.33333 3.65967 4.39867 3.529 4.52933C3.39833 4.66 3.33311 4.81689 3.33333 5C3.33333 5.18333 3.39867 5.34033 3.52933 5.471C3.66 5.60167 3.81689 5.66689 4 5.66667ZM3 2.66667H5V2C5 1.72222 4.90278 1.48611 4.70833 1.29167C4.51389 1.09722 4.27778 0.999999 4 0.999999C3.72222 0.999999 3.48611 1.09722 3.29167 1.29167C3.09722 1.48611 3 1.72222 3 2V2.66667Z"
            fill="black"
            fillOpacity="0.8"
          />
        </svg>
        <span className="footer-registration">{blockchainText}</span>
        <a href="#" className="footer-hash">
          {trimmedHash}
        </a>
      </div>
    </div>
  );
}

function trimHash(hash, maxLength = 32) {
  // Check if the hash exceeds the maximum length
  if (hash.length > maxLength) {
    const start = hash.slice(0, 13);
    const end = hash.slice(-16);
    return `${start}...${end}`;
  }
  return hash;
}

PassportContainer.propTypes = {
  mainImageSrc: PropTypes.string.isRequired,
  mainHeading: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  secondaryImageSrc: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  itemHeading: PropTypes.string.isRequired,
  itemDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
  footerProps: PropTypes.object.isRequired,
};
export default PassportContainer;
