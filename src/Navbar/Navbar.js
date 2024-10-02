import React, { useState } from "react";
import "./Navbar_styles.css";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../mediaqueries";

const HeaderMenu = () => (
  <div className="header_box_menu">
    <div className="header_box_menu_left">
      <MenuLink href="https://www.jobstore.my/browse-job" label="Browse Jobs" />
      <MenuLink href="https://www.jobstore.my/companies" label="Companies" />
      <MenuLink href="https://www.freshjobs.my/" label="Campus Hiring" />
      <MenuLink
        href="https://www.jobstore.my/government-jobs"
        label="Government Jobs"
        target="_blank"
      />
      <MenuLink
        href="https://news.jobstore.com/"
        label="News"
        target="_blank"
      />
      <MenuLink
        href="https://resources.jobstore.com/category/job-seekers/"
        label="Resources"
        target="_blank"
      />
    </div>
  </div>
);

const MenuLink = ({ href, label, target }) => (
  <a href={href} target={target} rel="noopener noreferrer" aria-label={label}>
    <div className="header_menu_each">{label}</div>
  </a>
);

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://www.jobstore.my" aria-label="Jobstore Malaysia">
          <img
            src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
            alt="Jobstore Malaysia logo"
            className="navbar-logo"
          />
        </a>
      </div>

      {isMobile ? (
        <>
          <button
            className="navbar-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <OpenIcon />}
          </button>

          {isMobileMenuOpen && (
            <div className="navbar-center mobile-menu">
              <HeaderMenu />
              <div className="navbar-right">
                <button className="navbar-btn-register">Register</button>
                <button className="navbar-btn-login">Login</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="navbar-center">
            <HeaderMenu />
          </div>
          <div className="navbar-right">
            <button className="navbar-btn-register">Register</button>
            <button className="navbar-btn-login">Login</button>
          </div>
        </>
      )}
    </nav>
  );
};

// SVG Icons as functional components
const CloseIcon = () => (
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
);

const OpenIcon = () => (
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
);

export default Navbar;
