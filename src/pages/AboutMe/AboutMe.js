import React from "react";
import "./AboutMe.scss";
import PicAndIntro from "../../components/PicAndIntro/PicAndIntro";

const AboutMe = ({ technologies }) => {
  return (
    <section className="about-me-wrapper">
      <PicAndIntro technologies={technologies} />
    </section>
  );
};

export default AboutMe;
