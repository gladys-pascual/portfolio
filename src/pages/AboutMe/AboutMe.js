import React from "react";
import "./AboutMe.scss";
import AboutMeContent from "../../components/AboutMeContent/AboutMeContent";
import Personal from "../../components/Personal/Personal";

const AboutMe = ({ technologies }) => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me">
        <AboutMeContent technologies={technologies} />
        <Personal />
      </div>
    </div>
  );
};

export default AboutMe;
