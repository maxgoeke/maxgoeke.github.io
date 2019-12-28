import React from "react";

export const projects = [
  {
    timeFrame: "2019",
    projects: [
      {
        title: "JawaBS",
        description: (
          <div>
            <p>
              Amidst creating trading strategies through{" "}
              <a href="https://www.interactivebrokers.com/en/home.php">
                interactive brokers
              </a>{" "}
              I came across the complex issue of backtesting algorithms.
            </p>

            <p>
              So, I built a Command Line Interface to simplify the backtesting
              process with interactive brokers. The CLI uses MongoDB local to
              the users computer so there is no risk of a breach in algorithm
              security.
            </p>
          </div>
        ),
        tools: ["Javascript", "Commander.js", "MongoDB"],
        link: "https://github.com/4ked/JawaBS"
      }
    ]
  },
  {
    timeFrame: "2018",
    projects: [
      {
        title: "Shooting Range",
        description: (
          <div>
            <p>
              I extended a high school project idea on a duck hunting game to
              improve upon my javascript and OOP capabilities.
            </p>

            <p>
              On the technical side, the game includes reticle vector physics,
              randomized duck paths, random pop-up targets, game statistics and
              scoring, and an interactive bullet limit.
            </p>
          </div>
        ),
        tools: ["Javascript", "Processing.js"],
        link: "https://github.com/4ked/Shooting-Range"
      }
    ]
  }
];
