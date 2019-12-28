import React, { Component } from "react";

import Row from "../row/Row";
import "./Intro.css";

class Intro extends Component {
  render() {
    return (
      <Row
        content={
          <div className="col-xs-12 col-sm-8 col-md-9 col-lg-6 col-xl-6 intro-block">
            <p>
              A nerd at heart, passionate about pushing the boundaries of
              technology no matter how tall. Recently, I have been directing my
              interests towards the realms of machine learning, quantitative
              finance, and cryptology.
            </p>
            <p>
              Currently I’m pursuing Bachelor’s degrees in Computer Science and
              Mathematics at Villanova University and searching for
              opportunities starting summer 2021 and beyond.
            </p>
            <p>
              Scroll down to see some of my work, or get an overall sense by{" "}
              <a
                href={process.env.PUBLIC_URL + "/mgoeke_resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                reading my resume.
              </a>
            </p>
          </div>
        }
      />
    );
  }
}

export default Intro;
