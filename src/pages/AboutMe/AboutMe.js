import React from "react";
import "./AboutMe.scss";
import Timeline from "../../components/Timeline/Timeline";
import AboutMeContent from "../../components/AboutMeContent/AboutMeContent";
import Personal from "../../components/Personal/Personal";

const AboutMe = ({ technologies }) => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me">
        <AboutMeContent technologies={technologies} />
        <Timeline />
        <Personal />
      </div>
    </div>
  );
};

export default AboutMe;
