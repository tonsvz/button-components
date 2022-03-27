import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-title">
          <h1>
            <span>Dev</span>challenges.io
          </h1>
        </div>
        <div className="header-links">
          <a href="#">Colors</a>
          <a href="#">Typography</a>
          <a href="#">Spaces</a>
          <a href="#">Buttons</a>
          <a href="#" className="bold">
            Inputs
          </a>
          <a href="#">Grid</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
