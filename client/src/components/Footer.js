import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterWrapper">
      <NavLink to="/">
        <img src={require("../images/homeIcon.png")} alt={"home icon"} />
      </NavLink>
    </div>
  );
};

export default Footer;
