import React from "react";
import Technologies from "../Technologies/Technologies";
import "./PicAndIntro.scss";

const PicAndIntro = ({ technologies }) => {
  return (
    <div className="about-me">
      <div className="pic-and-intro">
        <div className="about-me-pic">
          <img src="pictures/mypic.jpg" alt="Gladys Pascual" />
        </div>
        <div className="intro">
          <div className="intro-description">
            <p>
              Hi there! I’m Gladys and I'm based in Dublin, Ireland. I’m an
              experienced Chemical Engineer who is looking for a career
              transition as a Software Developer, focusing on Front-End. I’ve
              created web responsive web applications using the following
              technologies:
            </p>
          </div>
          <div className="tech-wrapper">
            {technologies.map((technology) => (
              <Technologies {...technology} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicAndIntro;
