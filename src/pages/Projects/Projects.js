import React from "react";
import BudgetApp from "../../components/Project/BudgetApp";
import MainProjects from "../../components/Project/MainProjects";
import mainProjects from "../../data/mainProjects";
import GroupProjects from "../../components/Project/GroupProjects";
import HtmlCssJs from "../../components/Project/HtmlCssJs";
import ReactProjects from "../../components/Project/ReactProjects";
import ReactTraining from "../../components/Project/ReactTraining";
import "./Projects.scss";

const Projects = ({ images }) => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <BudgetApp images={images} />
        {mainProjects.map((mainProject) => {
          return (
            <MainProjects mainProject={mainProject} key={mainProject.key} />
          );
        })}
        <ReactProjects />
        <GroupProjects />
        <ReactTraining />
        <HtmlCssJs />
      </div>
    </div>
  );
};

export default Projects;
