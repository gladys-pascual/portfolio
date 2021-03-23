import React from "react";

const MainProjects = ({ mainProject }) => {
  const {
    title,
    deployedLink,
    repo,
    description,
    img,
    appFeatures,
    technologies,
    libraries,
  } = mainProject;

  const bulletPointFunc = (projectTitle) => {
    let bullet;
    switch (projectTitle) {
      case "Stock Finder":
        bullet = "fas fa-chart-bar";
        break;
      case "Moive & TV Show Search App":
        bullet = "fas fa-video";
        break;
      case "Complex To Do":
        bullet = "far fa-check-square";
        break;
      default:
    }
    return bullet;
  };

  const bulletPoint = bulletPointFunc(title);

  return (
    <div className="project-wrapper">
      <div className="title-and-links">
        <h2 className="project-title">{title}</h2>
        <p className="project-links">
          <span>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Live
            </a>{" "}
            |{" "}
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </span>
        </p>
        <div className="description-wrapper">
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="main-project">
        <div className="lhs">
          <div className="projects-img-wrapper-wrapper">
            <div className="projects-img-wrapper">
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
        <div className="rhs">
          <h3> App Features:</h3>
          <ul className="app-features-list">
            {appFeatures.map((appFeature, i) => {
              return (
                <li key={`app-feature${i}`}>
                  <i className={bulletPoint} aria-hidden="true"></i>
                  <span className="project-bullet-points">{appFeature}</span>
                </li>
              );
            })}
          </ul>
          <h3>Technologies & Libraries:</h3>
          <ul className="app-features-list">
            <li>
              <i className="fa fa-code" aria-hidden="true"></i>
              <span className="project-bullet-points">{technologies}</span>
            </li>
            <li>
              <i className="fas fa-book-reader" aria-hidden="true"></i>
              <span className="project-bullet-points">{libraries}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
