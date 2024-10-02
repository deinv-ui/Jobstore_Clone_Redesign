import React from "react";
import "./JobListing_styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const JobListing = () => {
  const jobListings = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
        <h2 className="job-listing-section-title">Latest Job Opportunities</h2>
        <div className="navigation-buttons">
          <button className="nav-button prev" aria-label="Previous Jobs">
            ←
          </button>
          <button className="nav-button next" aria-label="Next Jobs">
            →
          </button>
        </div>
      </div>
      <div className="job-listing-content">
        <div className="categories-list">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/category/${category.name.replace(/\s+/g, "")}`} // Clean category name for URL
              className="category-item clickable"
              onClick={() => handleCategoryClick(category.name)}
              aria-label={`View jobs in ${category.name}`}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">({category.count})</span>
            </a>
          ))}
        </div>
        <div className="job-listing-grid">
          {jobListings.map((job) => (
            <div
              className={`job-card ${job.id === 1 ? "featured" : ""}`}
              key={job.id}
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
                  alt={`${job.company} Logo`}
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

export default JobListing;
