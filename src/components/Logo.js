import React from "react";
import "../styles/Logo.css";

const Logo = ({ alt, src, spinSpeed }) => {
  return (
    <div className={`logo-container ${spinSpeed}`}>
      <img src={src} alt={alt} className="logo" />
    </div>
  );
};
export default Logo;
