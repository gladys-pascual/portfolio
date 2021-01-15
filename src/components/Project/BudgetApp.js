import React from "react";
import BudgetAppImages from "./BudgetAppImages";

const BudgetApp = ({ images }) => {
  return (
    <div className="budget-app-wrapper project-wrapper">
      <div className="title-and-links">
        <h2 className="project-title">Budget Tracker App</h2>
        <p className="project-links">
          <span>
            <a
              href="https://www.moneyme.cf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/gladys-pascual/my-money-front-end-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo - FE
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/gladys-pascual/my-money-back-end-transaction-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo - BE
            </a>
          </span>
        </p>
        <div className="description-wrapper">
          <p className="description">
            MoneyMe is a full-stack budget tracker web application where I used
            React for the Front-End & Serverless framework using Amazon Web
            Services (AWS) for the Back-End.
          </p>
        </div>

        <div className="budget-img-wrapper-wrapper">
          <div className="budget-img-wrapper">
            <BudgetAppImages images={images} />
          </div>
        </div>
      </div>
      <div className="main-project budget-app">
        <div className="lhs">
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
                Create, update & delete a transaction, and view a list of all
                transactions.
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
                Deployed a CRUD service for the back-end through AWS Lambda
                functions and exposing them as RESTful APIs using Amazon API
                Gateway.
              </span>
            </li>
          </ul>
        </div>

        <div className="rhs">
          <h3>Technologies & Libraries:</h3>
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
            <li>
              <i className="fas fa-book-reader" aria-hidden="true"></i>
              <span className="project-bullet-points">
                react-router-dom | axios | day.js | react hook form | react day
                picker | react-modal | nivo/pie | querystring
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BudgetApp;
