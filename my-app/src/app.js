import React from "react";
import Sidebar from "./Sidebar.js";
import ProgressBar from "./Progressbar.js";
import ClaimForm from "./Claimform.js";
import FileUpload from "./fileupload.js";
import "./style.css"; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Top Section: Progress Bar */}
        <div className="progress-bar-container">
          <ProgressBar />
        </div>

        {/* Middle Section: Claim Form */}
        <div className="claim-form-container">
          <ClaimForm />
        </div>

        {/* Bottom Section: File Upload */}
        <div className="file1">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}

export default App;























