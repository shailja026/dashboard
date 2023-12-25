import React from "react";
import { Link } from "react-router-dom";
import "../styles/bootnav.css";
function BootNav() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">APP LOGO</div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">DASHBOARD</Link>
        <Link to="/adds">CREATE ADS</Link>
      </div>
    </div>
  );
}

export default BootNav;
