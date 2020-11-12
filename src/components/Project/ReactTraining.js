import React from "react";
import "./ReactTraining.scss";

const ReactTraining = () => {
  return (
    <section className="react-training">
      <h2 className="react-training-title">React Training</h2>
      <div className="react-training-description-wrapper">
        <p className="react-training-description">
          Small projects to practice React fundamentals.
        </p>
      </div>

      <div className="react-training-project-wrapper">
        <div className="react-training-project">
          <div className="title-and-links">
            <h2 className="project-title "> Wonders</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://react-practice-seven-wonders.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/seven-wonders-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>

            <div className="react-training-img-wrapper-wrapper">
              <div className="react-training-img-wrapper">
                <img
                  src="./pictures/projects/seven-wonders.png"
                  alt="seven wonders"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="react-training-project">
          <div className="title-and-links">
            <h2 className="project-title">Planets</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://react-practice-planets.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/planets-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>

            <div className="react-training-img-wrapper-wrapper">
              <div className="react-training-img-wrapper">
                <img src="./pictures/projects/planets.png" alt="planets" />
              </div>
            </div>
          </div>
        </div>

        <div className="react-training-project">
          <div className="title-and-links">
            <h2 className="project-title">Restaurant</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://react-practice-restaurant.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/restaurant-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>

            <div className="react-training-img-wrapper-wrapper">
              <div className="react-training-img-wrapper">
                <img
                  src="./pictures/projects/react-training-restaurant.png"
                  alt="restaurant"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="react-training-project">
          <div className="title-and-links">
            <h2 className="project-title">Cats & Dogs</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://react-practice-cats-and-dogs.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/cats-and-dogs-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>

            <div className="react-training-img-wrapper-wrapper">
              <div className="react-training-img-wrapper">
                <img
                  src="./pictures/projects/cats-and-dogs.gif"
                  alt="cats & dogs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactTraining;
