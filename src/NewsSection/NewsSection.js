import "./NewsSection_styles.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const newsItems = [
  {
    id: 1,
    imageUrl:
      "https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/09/27040223/Paywatch-Partners-with-Media-Prima-Berhad-to-Enhance-Employee-Financial-Wellness.jpg",
    title: "Tech Conference 2024",
    description:
      "Join the largest tech conference this year in Silicon Valley.",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/09/26043724/Singapore-and-Rwanda-develop-first-small-state-AI-playbook.jpg",
    title: "New AI Breakthrough",
    description:
      "A revolutionary AI breakthrough is making waves in the tech world.",
  },
  {
    id: 3,
    imageUrl:
      "https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/09/24043702/Investors-want-more-after-Ringgit-s-finest-quarter-in-50-years.jpg",
    title: "Job Market Trends 2024",
    description:
      "Discover the latest job market trends and how to prepare yourself.",
  },
];

const NewsSection = () => {
  const swiperRef = React.useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="news-section">
      <div className="job-listing-header">
        <h2 className="job-listing-section-title">Latest News</h2>
        <div className="navigation-buttons">
          <button
            className="nav-button prev"
            onClick={handlePrev}
            aria-label="Previous news item"
          >
            ←
          </button>
          <button
            className="nav-button next"
            onClick={handleNext}
            aria-label="Next news item"
          >
            →
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={false}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="news-card">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="news-image"
              />
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
                <a href="#" className="see-more">
                  See More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSection;
