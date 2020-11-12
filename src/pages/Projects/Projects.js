import React from "react";
import BudgetApp from "../../components/Project/BudgetApp";
import GroupProjects from "../../components/Project/GroupProjects";
import HtmlCssJs from "../../components/Project/HtmlCssJs";
import MovieApp from "../../components/Project/MovieApp";
import ReactProjects from "../../components/Project/ReactProjects";
import ReactTraining from "../../components/Project/ReactTraining";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <BudgetApp />
        <MovieApp />
        <ReactProjects />
        <GroupProjects />
        <ReactTraining />
        <HtmlCssJs />
      </div>
    </div>
  );
};

export default Projects;
