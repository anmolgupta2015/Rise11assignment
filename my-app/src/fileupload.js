import React from "react";
import "./style.css";

const FileUpload = ({ title }) => {
  return (
    <div className="file-upload-container">
      <div className="upload-icon">📄</div>
      <div className="upload-text">Upload {title}</div>
      <button className="upload-button">Upload File</button>
      <div className="file-size-hint">Max: 2MB, PDF</div>
    </div>
  );
};

const StatementSection = () => {
  return (
    <div className="statement-container">
      <FileUpload title="a PDF" />
    </div>
  );
};

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className = "Main1">
      <div className="section">
      <h3 className="section-title">Statement</h3>
      <StatementSection /> </div>
      <div className="section">
        <h3 className="section-title">Agreement under Disputes</h3>
        {/* Flex container for file uploads */}
        <div className="file-upload-group">
          <FileUpload title="Arbitration Agreement" />
          <FileUpload title="Supporting Documents" />
        </div>
      </div>

      <div className="section"  className="section1">
        <h3 className="section-title">Additional Documentation</h3>
        <FileUpload title="Contract" />
      </div>

      </div>
    </div>
  );
};

export default MainComponent;
