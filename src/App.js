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

const EmployerButton = () => {
  return <button className="employer-button">Employer</button>;
};

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
const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://www.jobstore.my">
          <img
            src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
            alt="Jobstore Malaysia logo"
            className="navbar-logo"
          />
        </a>
      </div>

      <div className="navbar-center">
        {!isMobile && <HeaderMenu />}
        {isMobile && isMobileMenuOpen && (
          <div className="mobile-menu">
            <HeaderMenu />
          </div>
        )}
      </div>
      {/* Mobile menu toggle button */}
      {isMobile && (
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      )}

      <div className="navbar-right">
        {/* Conditional rendering for Register and Login buttons */}
        {!isMobile && (
          <>
            <button className="navbar-btn-register">Register</button>
            <button className="navbar-btn-login">Login</button>
          </>
        )}
      </div>
    </nav>
  );
};

const HeaderMenu = () => (
  <div className="header_box_menu">
    <div className="header_box_menu_left">
      <a href="https://www.jobstore.my/browse-job">
        <div className="header_menu_each" id="header_browse">
          Browse Jobs
        </div>
      </a>
      <a href="https://www.jobstore.my/companies">
        <div className="header_menu_each" id="header_companies">
          Companies
        </div>
      </a>
      <a href="https://www.freshjobs.my/">
        <div className="header_menu_each" id="header_campus_hiring">
          Campus Hiring
        </div>
      </a>
      <a href="https://www.jobstore.my/government-jobs" target="_blank">
        <div className="header_menu_each" id="header_gov">
          Government Jobs
        </div>
      </a>
      <a href="https://news.jobstore.com/" target="_blank">
        <div className="header_menu_each" id="header_news">
          News
        </div>
      </a>
      <a
        href="https://resources.jobstore.com/category/job-seekers/"
        target="_blank"
      >
        <div className="header_menu_each" id="header_blog">
          Resources
        </div>
      </a>
    </div>
  </div>
);

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
          />
          <span className="separator">|</span>
          <input
            type="text"
            placeholder="City, state, zip code..."
            className="search-input location-input"
          />
        </div>
      </div>
    </div>
    <div className="scroll-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="#007bff"
        className="bi bi-chevron-double-down"
        viewBox="0 0 16 16"
        style={{ animation: "flash 1.5s infinite" }}
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
  </div>
);

const slides = [
  {
    id: 1,
    className: "card1",
    imageUrl: "https://www.mycareerfair.my/images/event/240323_klcc/cf_001.jpg",
  },
  {
    id: 2,
    className: "card2",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQHUWI2TJvfSEw/feedshare-shrink_800/feedshare-shrink_800/0/1727239553234?e=2147483647&v=beta&t=mqV5UM1ndOU8q1444GiehCSfgGgkPUGyNtAEKEUcVQ8",
  },
  {
    id: 3,
    className: "card3",
    imageUrl: "https://www.mycareerfair.my/images/event/240323_klcc/cf_003.jpg",
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
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const JobListing = () => {
  const jobListings = [
    {
      title: "Product Designer",
      company: "GitLab",
      type: "Full Time",
      category: "Product",
      salary: "$67-83K USD",
      logo: "/api/placeholder/32/32",
      jobCount: 16,
      postedTime: "1 Hour ago",
    },
    {
      title: "Senior Product Designer",
      company: "OpenPhone",
      type: "Full Time",
      category: "UI/X Designer",
      salary: "$67-83K USD",
      logo: "/api/placeholder/32/32",
      jobCount: 14,
      postedTime: "1 Hour ago",
    },
    {
      title: "Creative Director",
      company: "GitHub",
      type: "Full Time",
      category: "Head of Design",
      salary: "$88-120K USD",
      logo: "/api/placeholder/32/32",
      jobCount: 14,
      postedTime: "1 Hour ago",
    },
    {
      title: "Product Designer",
      company: "Discord",
      type: "Full Time",
      category: "Product",
      salary: "$67-83K USD",
      logo: "/api/placeholder/32/32",
      jobCount: 16,
      postedTime: "1 Hour ago",
    },
  ];

  const categories = [
    { name: "#internship", count: 34 },
    { name: "#design", count: 92 },
    { name: "#highsalary", count: 102 },
    { name: "#governmentjob", count: 87 },
    { name: "#singapore Job", count: 28 },
    { name: "All Jobs", count: 1076 },
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Category clicked: ${categoryName}`);
  };

  return (
    <div className="job-listing-section">
      <div className="job-listing-header">
        <h2 className="job-listing-section-title">Latest Jobs Opportunity</h2>
        <div className="navigation-buttons">
          <button className="nav-button prev">←</button>
          <button className="nav-button next">→</button>
        </div>
      </div>
      <div className="job-listing-content">
        <div className="categories-list">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/category/${category.name}`} // Example link, change as needed
              className="category-item clickable"
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </a>
          ))}
        </div>
        <div className="job-listing-grid">
          {jobListings.map((job, index) => (
            <div
              className={`job-card ${index === 0 ? "featured" : ""}`}
              key={index}
            >
              <div className="job-card-header">
                <span className="job-type">{job.type}</span>
                <span className="job-category">{job.category}</span>
              </div>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-salary">{job.salary}</p>
              <div className="job-card-footer">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="company-logo"
                />
                <span className="company-name">{job.company}</span>
                <span className="job-count">{job.jobCount} Jobs</span>
              </div>
              <p className="posted-time">{job.postedTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
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

const NewsSection = () => (
  <div className="news-section">
    <div className="job-listing-header">
      <h2 className="job-listing-section-title">Latest News</h2>
      <div className="navigation-buttons">
        <button className="nav-button prev">←</button>
        <button className="nav-button next">→</button>
      </div>
    </div>
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
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
            <img src={item.imageUrl} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
const footerData = [
  {
    heading: "Jobseekers",
    links: [
      { label: "Create Account", url: "#" },
      { label: "Sign In", url: "#" },
      { label: "Search Jobs", url: "#" },
      { label: "Search Employers", url: "#" },
      { label: "Featured Companies", url: "#" },
      { label: "Government Jobs", url: "#" },
      { label: "Working in Singapore", url: "#" },
      { label: "My Career Fair", url: "#" },
      { label: "Industry News", url: "#" },
    ],
  },
  {
    heading: "Corporate",
    links: [
      { label: "Create Account", url: "#" },
      { label: "Products & Services", url: "#" },
      { label: "Pricing & Plans", url: "#" },
      { label: "Advertise Jobs", url: "#" },
      { label: "Industry News", url: "#" },
      { label: "Customer Support", url: "#" },
      { label: "Contact Sales", url: "#" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About Us", url: "#" },
      { label: "Mobile App", url: "#" },
      { label: "FAQs", url: "#" },
      { label: "Contact Support", url: "#" },
      { label: "Careers @ Jobstore", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Fulfillment Policy", url: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Career Guide", url: "#" },
      { label: "Job Templates", url: "#" },
      { label: "Employer Resources", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Privacy Policy", url: "#" },
      { label: "Partnership Inquiries", url: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      {/* Logo and select dropdown */}
      <div className="footer-column logo">
        <img
          src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
          alt="Jobstore Malaysia logo"
          className="navbar-logo"
        />
        <select className="logo-select">
          <option value="jobstore-malaysia">JobStore Malaysia</option>
          <option value="jobstore-singapore">JobStore Singapore</option>
          <option value="jobstore-thailand">JobStore Thailand</option>
        </select>
      </div>

      {/* Dynamic Footer Columns */}
      {footerData.map((column, index) => (
        <div key={index} className="footer-column">
          <h3 className="footer-heading">{column.heading}</h3>
          <ul className="footer-list">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Footer Bottom Section */}
    <div className="footer-bottom">
      <p>© 2024 Jobstore. All rights reserved.</p>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        {["facebook", "linkedin", "instagram", "pinterest"].map((platform) => (
          <a key={platform} href="#" className={`social-icon ${platform}`}>
            <img
              src={`https://assets.jobstore.my/images/icon/icon_social_${platform}_round.png`}
              className="footer_social_icon"
              alt={`${platform} icon`}
            />
          </a>
        ))}
      </div>

      {/* App Store Download Buttons */}
      <div className="button-container">
        <a href="#" className="download-button google-play">
          <img
            src="https://assets.jobstore.my/images/icon/icon_app_googleplaystore_white.png"
            alt="Google Play icon"
            className="button-icon"
          />
        </a>
        <a href="#" className="download-button app-store">
          <img
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            alt="App Store icon"
            className="button-icon"
          />
        </a>
      </div>
    </div>
  </footer>
);

const JobstoreApp = () => {
  const [items, setItems] = useState([]);

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
