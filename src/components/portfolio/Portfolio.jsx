import React, { Component } from "react";
import classNames from "classnames";
import _ from "lodash";
import Link from "../link/Link";
import Isvg from "react-inlinesvg";
import { projects } from "./projects";

import arrow from "../../media/icons/arrow-slim.svg";

require("./Portfolio.scss");

class Portfolio extends Component {
  getClassName() {
    return classNames("Portfolio");
  }

  renderTimeFrame = (timeFrame, idx) => {
    return (
      <div className="Portfolio__timeFrame" key={idx}>
        <h4 className="Portfolio__timeFrame__label">{timeFrame.timeFrame}</h4>
        {timeFrame.projects.map(this.renderItem)}
      </div>
    );
  };

  renderItem = (item, idx) => {
    return (
      <div className="Portfolio__item" key={idx}>
        <h2>{item.title}</h2>
        <div className="Portfolio__item__description">
          <div className="Portfolio__item__tools">
            <h6 className="toolsUsed">Tools Used</h6>
            {item.tools.map(this.renderTool)}
          </div>
          {item.description}
          {!!item.link &&
            (_.startsWith("/") ? (
              <a href={item.link} className="Portfolio__item__link btn">
                Check it out
                <Isvg className={"next-arrow"} src={arrow} />
              </a>
            ) : (
              <Link
                to={item.link}
                type="button"
                className="Portfolio__item__link btn"
              >
                Check it out
                <Isvg className={"next-arrow"} src={arrow} />
              </Link>
            ))}
        </div>
      </div>
    );
  };

  renderComponent(component, style = {}) {
    let Component = component;
    return <Component />;
  }

  renderTool(tool, idx) {
    return (
      <div className="Portfolio__item__tool" key={idx}>
        <div className="pill">{tool}</div>
      </div>
    );
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {projects.map(this.renderTimeFrame)}
      </div>
    );
  }
}

export default Portfolio;
