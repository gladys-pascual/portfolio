import React from "react";
import MyPic from "./MyPic";
import Skills from "./Skills";
import Tools from "./Tools";

const PicSkillsAndTools = () => {
  return (
    <section className="pics-skills-tools-container">
      <MyPic />
      <Skills />
      <Tools />
    </section>
  );
};

export default PicSkillsAndTools;
