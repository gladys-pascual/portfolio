import React from "react";
import BudgetApp from "../../components/Project/BudgetApp";
import MovieApp from "../../components/Project/MovieApp";
import ReactProjects from "../../components/Project/ReactProjects";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <BudgetApp />
        <MovieApp />
        <ReactProjects />
      </div>
    </div>
  );
};

export default Projects;
