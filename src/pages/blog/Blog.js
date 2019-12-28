import React, { Component } from "react";
import "./Blog.css";

import Header from "../../components/header/Header";
import Row from "../../components/row/Row";
import Debrief from "../../components/debrief/Debrief";
import Post from "../../components/post/Post";
import Footer from "../../components/footer/Footer";

class Blog extends Component {
  render() {
    return (
      <div className="Blog Container">
        <Header />
        <Row
          content={
            <h1 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name">
              Not a Blog
            </h1>
          }
        />
        <Row content={<Debrief />} />
        <Row
          content={
            <Post className="listing col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" />
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Blog;
