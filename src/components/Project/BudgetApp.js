import React from "react";

const BudgetApp = () => {
  return (
    <div className="budget-app-wrapper project-wrapper">
      <div className="title-and-links">
        {" "}
        <h2 className="project-title">Budget Tracker App</h2>
        <p className="project-links">
          <span>
            <a
              href="https://www.moneyme.cf/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>{" "}
            |{" "}
            <a
              href="https://www.moneyme.cf/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo - FE
            </a>{" "}
            |{" "}
            <a
              href="https://www.moneyme.cf/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo - BE
            </a>
          </span>
        </p>
        <div className="description-wrapper">
          <p className="description">
            MoneyMe is a Full-Stack web application where I used React for the
            Front-End & Serverless framework using Amazon Web Services (AWS) for
            the Back-End.
          </p>
        </div>
      </div>
      <div className="budget-app main-project">
        <div className="lhs">
          <div className="main-projects-img-wrapper">
            <img
              src="./pictures/projects/create.gif"
              alt="creating transaction on budget app"
            />
          </div>
        </div>
        <div className="rhs">
          <h3> App Features:</h3>
          <ul className="app-features-list">
            <li>
              <i className="fas fa-piggy-bank" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Authentication integration, using Auth0, to allow for sign up
                and log in.
              </span>
            </li>
            <li>
              <i className="fas fa-piggy-bank" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Once logged in, the user can create, update & delete a
                transaction, and view a list of all transactions.
              </span>
            </li>
            <li>
              <i className="fas fa-piggy-bank" aria-hidden="true"></i>
              <span className="project-bullet-points">
                See a summary of all transactions through a pie chart.
              </span>
            </li>
            <li>
              <i className="fas fa-piggy-bank" aria-hidden="true"></i>
              <span className="project-bullet-points">
                For the back-end, I created and deployed a CRUD (Create, Read,
                Update and Delete) service.
              </span>
            </li>
            <li>
              <i className="fas fa-piggy-bank" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Created through AWS Lambda functions and exposing them as
                RESTful APIs using Amazon API Gateway.
              </span>
            </li>
          </ul>
          <h3>Technologies:</h3>
          <ul className="app-features-list">
            <li>
              <i className="fa fa-code" aria-hidden="true"></i>
              <span className="project-bullet-points">
                JavaScript | React | HTML | CSS | SASS | Flexbox
              </span>
            </li>
            <li>
              <i className="fa fa-code" aria-hidden="true"></i>
              <span className="project-bullet-points">
                AWS Lambda | AWS API Gateway | DynamoDB | Serverless framework |
                YML
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BudgetApp;
