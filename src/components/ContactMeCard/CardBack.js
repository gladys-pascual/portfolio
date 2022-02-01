import React from "react";
import "./ContactMeCard.scss";

const CardBack = ({ handleClick }) => {
  return (
    <section className="flip-card-back">
      <div className="pic-name-details">
        <div className="my-pic-contact">
          <img src="pictures/glads1sq.jpg" alt="Gladys Pascual" />
          <button onClick={handleClick} className="flip-me">
            ((( Flip Me )))
          </button>
        </div>
        <div className="contact-details">
          <h1 className="name">Gladys Pascual</h1>
          <h2 className="job">Software Engineer</h2>

          <i className="fa fa-mobile" aria-hidden="true">
            <span>
              {" "}
              <a
                href="tel:00353873647048"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-num"
              >
                +353 873647048
              </a>
            </span>
          </i>

          <i className="far fa-paper-plane" aria-hidden="true">
            <span>
              <a
                href="mailto:gladyskate@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                gladyskate@gmail.com
              </a>
            </span>
          </i>

          <i className="fab fa-github-alt" aria-hidden="true">
            <span>
              {" "}
              <a
                href="https://github.com/gladys-pascual"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/gladys-pascual
              </a>
            </span>
          </i>
          <i className="fab fa-linkedin-in" aria-hidden="true">
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/in/gladyspascual/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/gladyspascual
              </a>
            </span>
          </i>
        </div>
      </div>
    </section>
  );
};

export default CardBack;
