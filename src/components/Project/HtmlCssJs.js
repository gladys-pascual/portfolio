import React from "react";
import "./ReactTraining.scss";

const HtmlCssJs = () => {
  return (
    <section className="html">
      <h2 className="html-title">HTML, CSS & JavaScript Training</h2>
      <div className="html-description-wrapper">
        <p className="html-description">
          Small projects to practice HTML, CSS & JavaScript fundamentals.
        </p>
      </div>

      <div className="html-project-wrapper">
        <div className="html-project">
          <div className="title-and-links">
            <h2 className="project-title">Meme Generator</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://gladys-pascual.github.io/meme-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/meme-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>
            <i>JavaScript</i>

            <div className="html-img-wrapper-wrapper">
              <div className="html-img-wrapper">
                <img
                  src="./pictures/projects/meme-generator.gif"
                  alt="meme generator"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="html-project">
          <div className="title-and-links">
            <h2 className="project-title "> Wild Circus</h2>
            <p className="project-links">
              <span>
                <a
                  href="https://gladys-pascual.github.io/wild-circus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/gladys-pascual/wild-circus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </span>
            </p>
            <i>HTML | CSS</i>

            <div className="html-img-wrapper-wrapper">
              <div className="html-img-wrapper">
                <img
                  src="./pictures/projects/wild-circus.png"
                  alt="seven wonders"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HtmlCssJs;
