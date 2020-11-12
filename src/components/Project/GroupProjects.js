import React from "react";
import "./GroupProjects.scss";

const GroupProjects = () => {
  return (
    <section className="group-projects">
      <h2 className="project-title group-title">Group Projects</h2>
      <div className="group-project-wrapper">
        <div className="group-project">
          <div className="title-and-links">
            <h2 className="project-title ">Nokia - Hackaton</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://hackaton-group2-deploy-nokia.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/nokia-hackaton-group2-deploy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>
            <div className="description-wrapper">
              <p className="description">
                In 24 hours, our team (3 members) built a landing page and
                presented to the client.
              </p>
            </div>
            <div className="group-img-wrapper-wrapper">
              <div className="group-img-wrapper">
                <img
                  src="./pictures/projects/nokia.gif"
                  alt="nokia landing page"
                />
              </div>
            </div>
            <div className="group-description-wrapper">
              <div className="group-description">
                <h3>Technologies & Libraries:</h3>
                <ul className="app-features-list">
                  <li>
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span className="project-bullet-points">
                      JavaScript | React | HTML | CSS
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-book-reader" aria-hidden="true"></i>
                    <span className="project-bullet-points">
                      react-router-dom | react-image-gallery
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="group-project">
          <div className="title-and-links">
            <h2 className="project-title">Cheese Website</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://gladys-pascual.github.io/cheese-website/blog-home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/cheese-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>
            <div className="description-wrapper">
              <p className="description">
                Group project (4 members) aimed to create an responsive static
                website with multiple pages, as part of our Front-End Web
                Development Course in Wild Code School.
              </p>
            </div>
            <div className="group-img-wrapper-wrapper">
              <div className="group-img-wrapper">
                <img
                  src="./pictures/projects/cheese.gif"
                  alt="cheese website"
                />
              </div>
            </div>
            <div className="group-description-wrapper">
              <div className="group-description">
                <h3>Technologies:</h3>
                <ul className="app-features-list">
                  <li>
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span className="project-bullet-points">
                      HTML | CSS | Bootstrap | Git
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="group-project">
          <div className="title-and-links">
            <h2 className="project-title">Restaurant</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://gladys-pascual.github.io/wild-recipe/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/wild-recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>
            <div className="description-wrapper">
              <p className="description">
                Group project (3 members) aimed to practice creating a
                responsive recipe page using HTML and CSS, during our first week
                in Wild Code School.
              </p>
            </div>
            <div className="group-img-wrapper-wrapper">
              <div className="group-img-wrapper">
                <img
                  src="./pictures/projects/recipe.gif"
                  alt="recipe website"
                />
              </div>
            </div>
            <div className="group-description-wrapper">
              <div className="group-description">
                <h3>Technologies:</h3>
                <ul className="app-features-list">
                  <li>
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span className="project-bullet-points">HTML | CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupProjects;
