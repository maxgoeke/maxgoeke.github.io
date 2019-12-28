import React, { Component } from "react";
import Link from "../link/Link";

import Row from "../row/Row";
import "./Debrief.css";

class Debrief extends Component {
  render() {
    return (
      <Row
        content={
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-9 col-md-offset-1.5 col-lg-6 col-lg-offset-3 col-xl-6 col-xl-offset-3 debrief-block">
            <p>
              First and foremost, this is not a blog. With that being said, this
              is a little area to keep track of my thoughts, findings,
              interests, or anything else of that nature. But still, it's not a
              blog.
            </p>
            <p>
              If you were looking for a little more organization, I made a
              little summary of me you can read{" "}
              <Link to="../../about">here</Link>.
            </p>
          </div>
        }
      />
    );
  }
}

export default Debrief;
