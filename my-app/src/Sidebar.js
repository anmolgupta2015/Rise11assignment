import React from "react";
import "./style.css";
import image1 from "./placeholderImage.png";
import image from "./logoImage.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
      <img src={image} alt="Justice"  />
        <h1 className="logo">Jur</h1>
      </div>
      <nav>
        <a href="#" className="nav-link">
          <i className="icon">⚪</i> Dashboard
        </a>
        <a href="#" className="nav-link">
          <i className="icon">⚪</i> My Cases
        </a>
        <a href="#" className="nav-link">
          <i className="icon">⚪</i> Activities
        </a>
        <a href="#" className="nav-link">
          <i className="icon">⚪</i> Calendar
        </a>
        <a href="#" className="nav-link">
          <i className="icon">⚪</i> Files
        </a>
        <a href="#" className="nav-link">
          <i className="icon">⚪</i> Open a Dispute
        </a>
      </nav>
      <div className="info-box">
        <img src={image1} alt="Justice" className="info-image" />
        <p className="info-text">Get Justice on every Claims</p>
      </div>
    </aside>
  );
};

export default Sidebar;
