import React from "react";
import "./AboutMe.scss";
import PicAndIntro from "../../components/PicAndIntro/PicAndIntro";
import Timeline from "../../components/Timeline/Timeline";

const AboutMe = ({ technologies }) => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me">
        <PicAndIntro technologies={technologies} />
        <Timeline />
      </div>
    </div>
  );
};

export default AboutMe;
