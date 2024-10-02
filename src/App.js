import "./styles.css";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./mediaqueries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
// Import from 'swiper/modules' for version 11+
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Banner from "../src/Banner/Banner";
import Navbar from "../src/Navbar/Navbar";
import SearchSection from "../src/SearchSection/SearchSection";
import HeroSection from "../src/HeroSection/HeroSection";
import JobListing from "../src/JobListings/JobListings";
import NewsSection from "../src/NewsSection/NewsSection";
import Footer from "../src/Footer/Footer";

const EmployerButton = () => {
  return <button className="employer-button">Employer</button>;
};

const JobstoreApp = () => {
  const handleToggle = (event) => {
    if (event.target.checked) {
      window.location.href = "https://www.jobstore.my/employer/index";
    }
  };

  return (
    <div className="whole-container">
      <EmployerButton />
      <Banner />
      <Navbar />

      <div className="page-container">
        <SearchSection />
        <HeroSection />
        <JobListing />
        <NewsSection />
      </div>

      <Footer />
    </div>
  );
};

export default JobstoreApp;
