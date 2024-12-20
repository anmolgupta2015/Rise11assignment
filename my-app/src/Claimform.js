import React, { useState } from "react";
import "./style.css";

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    contractValue: "",
    place: "",
    language: "",
    placeAgreement: "",
    languageAgreement: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.contractValue.trim()) {
      newErrors.contractValue = "Contract value is required.";
    }
    if (!formData.place.trim()) {
      newErrors.place = "Place is required.";
    }
    if (!formData.language.trim()) {
      newErrors.language = "Language is required.";
    }
    if (!formData.placeAgreement) {
      newErrors.placeAgreement = "Please select an option for the place agreement.";
    }
    if (!formData.languageAgreement) {
      newErrors.languageAgreement = "Please select an option for the language agreement.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Handle form submission logic here
    }
  };

  return (
    <div className="claim-container">
      <h2 className="form-header">
        File your Claim. <span>(Approx 5 Minutes)</span>
      </h2>

      <form onSubmit={handleSubmit} className="form-section">
        <div className="form-group">
          <label className="form-label">Contract Value</label>
          <input
            type="text"
            name="contractValue"
            className="form-input"
            placeholder="10,00,00 USD"
            value={formData.contractValue}
            onChange={handleInputChange}
          />
          {errors.contractValue && <p className="error-text">{errors.contractValue}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Place</label>
          <input
            type="text"
            name="place"
            className="form-input"
            placeholder="Select the Place for proceedings"
            value={formData.place}
            onChange={handleInputChange}
          />
          {errors.place && <p className="error-text">{errors.place}</p>}

          <p className="form-text">Is the place for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="placeAgreement"
                value="Yes"
                onChange={handleRadioChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="placeAgreement"
                value="No"
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
          {errors.placeAgreement && <p className="error-text">{errors.placeAgreement}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Language</label>
          <input
            type="text"
            name="language"
            className="form-input"
            placeholder="Select the language for proceedings"
            value={formData.language}
            onChange={handleInputChange}
          />
          {errors.language && <p className="error-text">{errors.language}</p>}

          <p className="form-text">Is the language for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="languageAgreement"
                value="Yes"
                onChange={handleRadioChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="languageAgreement"
                value="No"
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
          {errors.languageAgreement && <p className="error-text">{errors.languageAgreement}</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="upload-section">
        <div className="upload-option">Upload Statement</div>
        <div className="upload-option">Upload Agreement</div>
        <div className="upload-option">Additional Documentation</div>
      </div>
    </div>
  );
};

export default ClaimForm;
