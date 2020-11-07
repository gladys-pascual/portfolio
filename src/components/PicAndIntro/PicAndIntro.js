import React from "react";
import IntroDescription from "./IntroDescription";
import Technologies from "../Technologies/Technologies";
import "./PicAndIntro.scss";
import JourneyToTech from "./JourneyToTech";

const PicAndIntro = ({ technologies }) => {
  return (
    <div className="pics-and-intro-wrapper">
      <div className="pic-and-intro">
        <div className="about-me-pic">
          <img src="pictures/mypic.jpg" alt="Gladys Pascual" />
        </div>
        <div className="intro">
          <div className="intro-description">
            <IntroDescription />
          </div>
          <div className="tech-wrapper">
            {technologies.map((technology) => (
              <Technologies {...technology} />
            ))}
          </div>
        </div>
      </div>

      <div className="journey-to-tech-wrapper">
        <div className="journey-to-tech">
          <h1>My Journey to Tech</h1>
          <JourneyToTech />
        </div>
      </div>
    </div>
  );
};

export default PicAndIntro;
