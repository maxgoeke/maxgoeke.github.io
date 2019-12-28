import React, { Component } from "react";
import Link from "../link/Link";

require("./Header.scss");

const Header = () => (
  <div className="Header">
    <Link className="Header__link Header__link--home" to="/">
      Home
    </Link>
    <Link className="Header__link Header__link--blog" to="/blog">
      Not a Blog
    </Link>
  </div>
);

export default Header;
