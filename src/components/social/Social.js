import React, { Component } from "react";
import Isvg from "react-inlinesvg";
import "./Social.css";

import github from "../../media/social/github.svg";
import linkedin from "../../media/social/linkedin.svg";
import instagram from "../../media/social/instagram.svg";

class Social extends Component {
  render() {
    return (
      <p className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 social">
        <a
          href="http://github.com/4ked"
          rel="noopener noreferrer"
          target="_blank"
          id="github"
        >
          <Isvg src={github}>
            <img src={github} alt="github link" width="20px" />
          </Isvg>
        </a>
        <a
          href="https://linkedin.com/in/max-goeke-9a11a5145/"
          rel="noopener noreferrer"
          target="_blank"
          id="linkedin"
        >
          <Isvg src={linkedin}>
            <img src={linkedin} alt="linkedin link" width="20px" />
          </Isvg>
        </a>
        <a
          href="https://instagram.com/max_goeke"
          rel="noopener noreferrer"
          target="_blank"
          id="instagram"
        >
          <Isvg src={instagram}>
            <img src={instagram} alt="instagram link" width="20px" />
          </Isvg>
        </a>
      </p>
    );
  }
}

export default Social;
