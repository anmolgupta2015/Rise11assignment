import React from "react";
import "./style.css";

const ClaimForm = () => {
  return (
    <div className="claim-container">
      <h2 className="form-header">File your Claim. <span>(Approx 5 Minutes)</span></h2>

      <div className="form-section">
        <div className="form-group">
          <label className="form-label">Contract Value</label>
          <input type="text" className="form-input" placeholder="10,00,00 USD" />
        </div>

        <div className="form-group">
          <label className="form-label">Place</label>
          <input type="text" className="form-input" placeholder="Select the Place for proceedings" />
          <p className="form-text">Is the place for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-options">
            <label><input type="radio" name="place" /> Yes</label>
            <label><input type="radio" name="place" /> No</label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Language</label>
          <input type="text" className="form-input" placeholder="Select the language for proceedings" />
          <p className="form-text">Is the language for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-options">
            <label><input type="radio" name="language" /> Yes</label>
            <label><input type="radio" name="language" /> No</label>
          </div>
        </div>
      </div>

      <div className="upload-section">
        <div className="upload-option">Upload Statement</div>
        <div className="upload-option">Upload Agreement</div>
        <div className="upload-option">Additional Documentation</div>
      </div>
    </div>
  );
};

export default ClaimForm;




























