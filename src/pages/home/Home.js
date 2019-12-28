import React, { Component } from "react";
import "./Home.css";

import Particles from "react-particles-js";
import Link from "../../components/link/Link";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import Row from "../../components/row/Row";
import Portfolio from "../../components/portfolio/Portfolio";
import Footer from "../../components/footer/Footer";

const particleOpt = {
  particles: {
    number: {
      value: 300
    },
    color: {
      value: "#000000"
    },
    size: {
      value: 2
    },
    line_linked: {
      color: "#000000",
      opacity: 0.35,
      width: 1
    }
  }
};

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Particles params={particleOpt} />
        <div className="Home">
          <Header />
          <div className="intro">
            <Row
              content={
                <h3 className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  Hi, I’m
                </h3>
              }
            />

            <Row
              content={
                <h1 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name">
                  Max Goeke
                </h1>
              }
            />

            <Intro />
          </div>

          <Portfolio />

          <Row
            content={
              <h3
                className={
                  "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 get-in-touch"
                }
              >
                Want to learn more?
              </h3>
            }
          />

          <Row
            content={
              <p
                className={
                  "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4 contact"
                }
              >
                You can learn more about me and my skillset{" "}
                <Link to="/about">here</Link>, or if you were looking for
                something more specific, feel free to{" "}
                <a href="mailto:max.goeke0@gmail.com">email me</a>.
              </p>
            }
          />

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
