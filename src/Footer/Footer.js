import React from "react";
import "./Footer_styles.css";

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

const SocialMediaIcons = () => (
  <div className="social-media-icons">
    {["facebook", "linkedin", "instagram", "pinterest"].map((platform) => (
      <a
        key={platform}
        href="#"
        className={`social-icon ${platform}`}
        aria-label={`${platform} profile`}
      >
        <img
          src={`https://assets.jobstore.my/images/icon/icon_social_${platform}_round.png`}
          className="footer_social_icon"
          alt={`${platform} icon`}
        />
      </a>
    ))}
  </div>
);

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
        <select className="logo-select" aria-label="Select Jobstore country">
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
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Footer Bottom Section */}
    <div className="footer-bottom">
      <p>© 2024 Jobstore. All rights reserved.</p>

      <SocialMediaIcons />

      {/* App Store Download Buttons */}
      <div className="button-container">
        <a
          href="#"
          className="download-button google-play"
          aria-label="Download on Google Play"
        >
          <img
            src="https://assets.jobstore.my/images/icon/icon_app_googleplaystore_white.png"
            alt="Google Play icon"
            className="button-icon"
          />
        </a>
        <a
          href="#"
          className="download-button app-store"
          aria-label="Download on the App Store"
        >
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

export default Footer;
