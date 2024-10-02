import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Hero_styles.css";

// Slide data
const slides = [
  {
    id: 1,
    className: "card1",
    imageUrl: "https://www.mycareerfair.my/images/event/240323_klcc/cf_001.jpg",
    altText: "Career Fair Image 1",
  },
  {
    id: 2,
    className: "card2",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQHUWI2TJvfSEw/feedshare-shrink_800/feedshare-shrink_800/0/1727239553234?e=2147483647&v=beta&t=mqV5UM1ndOU8q1444GiehCSfgGgkPUGyNtAEKEUcVQ8",
    altText: "Career Fair Image 2",
  },
  {
    id: 3,
    className: "card3",
    imageUrl: "https://www.mycareerfair.my/images/event/240323_klcc/cf_003.jpg",
    altText: "Career Fair Image 3",
  },
];

const HeroSection = () => (
  <div className="hero-section">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`flex-item card ${slide.className}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            role="img"
            aria-label={slide.altText}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default HeroSection;
