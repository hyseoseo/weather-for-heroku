import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        오늘
        <br />
        의복
      </Link>
    </div>
  );
};

export default Header;
