import React, { Component } from "react";
import "./About.css";

import Link from "../../components/link/Link";
import Header from "../../components/header/Header";
import Row from "../../components/row/Row";
import Footer from "../../components/footer/Footer";

import me from "../../media/me/avi.jpg";

class Blog extends Component {
  render() {
    return (
      <div className="About container">
        <Header />
        <div className={"content"}>
          <Row
            content={
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 avi-container ">
                <div className={"my-photo"}>
                  <img src={me} alt={"Me at prom"} />
                </div>
                <h3>More About Me</h3>
              </div>
            }
          />
          <Row
            content={
              <p className="about-exit col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                Welcome to a little summary of me. Here's some info you might
                not have picked up on at first glance:
              </p>
            }
          />
          <Row
            content={
              <ul className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6 list">
                <li>Raised in KC, now based in PHL for school</li>
                <li>Outside of school, I like running, reading, and skiing.</li>
                <li>Huge starwars fanboy</li>
                <li>
                  Into Classic Rock, Hip-Hop, and Alternative{" "}
                  <span className="emoji" role="img" aria-label="musical note">
                    🎶
                  </span>
                </li>
                <li>
                  English (Great), Spanish (Good){" "}
                  <span className="emoji" role="img" aria-label="musical note">
                    🇧🇴
                  </span>
                  , German (Poor){" "}
                  <span className="emoji" role="img" aria-label="musical note">
                    🇩🇪
                  </span>
                </li>
                <li>
                  V's up. Go cats.{" "}
                  <span
                    className="emoji"
                    role="img"
                    aria-label="finger peace sign"
                  >
                    ✌🏻
                  </span>
                </li>
              </ul>
            }
          />

          <Row
            content={
              <p className="about-exit col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                Thanks for checking me out... If you're interested to learn more
                about what goes on in my head,{" "}
                <Link to="/blog">look no further</Link>.
              </p>
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
