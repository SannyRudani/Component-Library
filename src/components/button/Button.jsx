import React from "react";
import "./button.css";

const Button = ({ label = "button" }) => {
  return (
    <div className="btn-wrapper">
      <button className="custom-btn">{label}</button>
    </div>
  );
};

export default Button;
