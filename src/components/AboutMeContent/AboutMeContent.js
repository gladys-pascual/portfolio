import React from "react";
import IntroDescription from "./IntroDescription";
import Technologies from "../Technologies/Technologies";
import "./AboutMeContent.scss";
// import JourneyToTech from "./JourneyToTech";
import Timeline from "../../components/Timeline/Timeline";

const AboutMeContent = ({ technologies }) => {
  return (
    <div className="pics-and-intro-wrapper">
      <div className="pic-and-intro">
        <div className="about-me-pic">
          <img src="pictures/glads1sq.jpg" alt="Gladys Pascual" />
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
          <Timeline />
          {/* <JourneyToTech /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
