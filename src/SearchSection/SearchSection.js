import React from "react";
import "./SearchSection_styles.css";

const SearchSection = () => (
  <div className="search-section">
    <div className="search-header">
      <h1>Discover Your Dream Job with Ease</h1>
      <p>
        Browse thousands of opportunities and land the perfect role in just a
        few clicks. Start your search now!
      </p>
      <div className="search-wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="Better Job, Better Me."
            className="search-input keyword-input"
            aria-label="Job keyword search"
          />
          <span className="separator">|</span>
          <input
            type="text"
            placeholder="City, state, zip code..."
            className="search-input location-input"
            aria-label="Location search"
          />
        </div>
      </div>
    </div>
    <ScrollArrow />
  </div>
);

const ScrollArrow = () => (
  <div className="scroll-arrow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="#007bff"
      className="bi bi-chevron-double-down"
      viewBox="0 0 16 16"
      style={{ animation: "flash 1.5s infinite" }}
      aria-label="Scroll down"
    >
      <path
        fillRule="evenodd"
        d="M7.247 11.14 4.854 8.707a.5.5 0 0 1 .708-.708L8 10.293l2.438-2.438a.5.5 0 0 1 .708.708l-3.393 3.393a.5.5 0 0 1-.708 0z"
      />
      <path
        fillRule="evenodd"
        d="M7.247 8.14 4.854 5.707a.5.5 0 0 1 .708-.708L8 7.293l2.438-2.438a.5.5 0 0 1 .708.708l-3.393 3.393a.5.5 0 0 1-.708 0z"
      />
    </svg>
  </div>
);

export default SearchSection;
