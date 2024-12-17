import React from "react";
import "./SupportUs.css";

const SupportUs: React.FC = () => {
  const handleSupportClick = () => {
    window.location.href = "https://github.com/Bob-Piligrim";
  };

  return (
    <div className="support-container">
      <div className="support-text">
        <div>Поддержите нас!</div>
      </div>
      <button className="support-button" onClick={handleSupportClick}>
        Поддержать
      </button>
    </div>
  );
};

export default SupportUs;
