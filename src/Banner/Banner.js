import "./Banner_styles.css";

import React, { useState } from "react";
// Import from 'swiper/modules' for version 11+
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => (
  <div className="banner">
    <div className="congrats-wrapper">
      <h2 className="congrats-text">Congratulations!</h2>
    </div>
    <div className="recommendation-wrapper">
      <h2 className="recommendation-text">
        You just received a{" "}
        <span className="bold-text">job recommendation!</span>
      </h2>
    </div>
    <button className="banner-btn">
      Check Now
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M10.3 8.3a.5.5 0 0 1 0 .4l-4 4a.5.5 0 1 1-.7-.7l3.3-3.3H1.5a.5.5 0 0 1 0-1h8.1L5.6 4.7a.5.5 0 1 1 .7-.7l4 4z"
        />
      </svg>
    </button>
  </div>
);
export default Banner;
