import React from "react";
import "./ReactProjects.scss";

const ReactProjects = () => {
  return (
    <div className="react-project-wrapper">
      <div className="react-project">
        <div className="title-and-links">
          <h2 className="project-title">E-Commerce</h2>

          <p className="project-links">
            <span>
              <a
                href="https://react-practice-ecommerce.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/gladys-pascual/e-commerce-react-practice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </span>
          </p>
          <div className="description-wrapper">
            <p className="description">
              Simple e-commerce web application built using React.
            </p>
          </div>
          <div className="react-img-wrapper-wrapper">
            <div className="react-img-wrapper">
              <img
                src="./pictures/projects/ecommerce.gif"
                alt="Ecommerce project demo"
              />
            </div>
          </div>
          <div className="react-description-wrapper">
            <div className="react-description">
              <h3>Technologies:</h3>
              <ul className="app-features-list">
                <li>
                  <i className="fa fa-code" aria-hidden="true"></i>
                  <span className="project-bullet-points">
                    JavaScript | React | HTML | CSS | SASS | Flexbox
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="react-project">
        <div className="title-and-links">
          <h2 className="project-title">Weather App</h2>
          <p className="project-links">
            <span>
              <a
                href="https://react-practice-weather-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/gladys-pascual/weather-app-react-practice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </span>
          </p>
          <div className="description-wrapper">
            <p className="description">
              Weather web app built using the OpenWeatherMap API & React.
            </p>
          </div>
          <div className="react-img-wrapper-wrapper">
            <div className="react-img-wrapper">
              <img
                src="./pictures/projects/weather-app.gif"
                alt="Weather app project demo"
              />
            </div>
          </div>
          <div className="react-description-wrapper">
            <div className="react-description">
              <h3>Technologies:</h3>
              <ul className="app-features-list">
                <li>
                  <i className="fa fa-code" aria-hidden="true"></i>
                  <span className="project-bullet-points">
                    JavaScript | React | HTML | CSS | SASS | Flexbox
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="react-project">
        <div className="title-and-links">
          <h2 className="project-title">Scoreboard App</h2>
          <p className="project-links">
            <span>
              <a
                href="https://score-me.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/gladys-pascual/scoreboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </span>
          </p>
          <div className="description-wrapper">
            <p className="description">
              Simple scoreboard web application built using React.
            </p>
          </div>
          <div className="react-img-wrapper-wrapper">
            <div className="react-img-wrapper">
              <img
                src="./pictures/projects/scoreboard.gif"
                alt="Scoreboard project demo"
              />
            </div>
          </div>
          <div className="react-description-wrapper">
            <div className="react-description">
              <h3>Technologies:</h3>
              <ul className="app-features-list">
                <li>
                  <i className="fa fa-code" aria-hidden="true"></i>
                  <span className="project-bullet-points">
                    JavaScript | React | HTML | CSS | SASS | Flexbox
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="react-project">
        <div className="title-and-links">
          <h2 className="project-title">CoffeeGram</h2>
          <p className="project-links">
            <span>
              <a
                href="https://coffee-gram.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/gladys-pascual/coffee-gram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </span>
          </p>
          <div className="description-wrapper">
            <p className="description">
              Simple scoreboard web application built using React.
            </p>
          </div>
          <div className="react-img-wrapper-wrapper">
            <div className="react-img-wrapper">
              <img
                src="./pictures/projects/coffeegram.gif"
                alt="coffeegram project demo"
              />
            </div>
          </div>
          <div className="react-description-wrapper">
            <div className="react-description">
              <h3>Technologies:</h3>
              <ul className="app-features-list">
                <li>
                  <i className="fa fa-code" aria-hidden="true"></i>
                  <span className="project-bullet-points">
                    JavaScript | React | HTML | CSS | Flexbox
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactProjects;
