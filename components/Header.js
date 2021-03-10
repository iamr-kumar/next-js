import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h6 className={headerStyles.title}>
        <span>Programming</span> News
      </h6>
      <p className={headerStyles.description}>
        One stop for latest programming news
      </p>
    </div>
  );
};

export default Header;
