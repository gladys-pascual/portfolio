import React from "react";
import "./Personal.scss";

const Personal = () => {
  return (
    <div className="personal-wrapper">
      <div className="personal">
        <h3>When I'm not coding:</h3>
        <ul>
          <li>
            <i className="fa fa-coffee" aria-hidden="true"></i>
            <span className="personal-bullet-points">
              I love drinking and making coffee - checkout my{" "}
              <a
                href="https://coffee-gram.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="links"
              >
                latte art progress
              </a>
              .
            </span>
          </li>
          <li>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span className="personal-bullet-points">
              I enjoy being active. I dabbled in some running and triathlon, did
              CrossFit for years, and now enjoy weightlifting.
            </span>
          </li>
          <li>
            <i className="fa fa-paw" aria-hidden="true"></i>
            <span className="personal-bullet-points">
              Dog lover who occasionally dog-sits for friends. Hoping to have my
              own puppy someday!
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Personal;
