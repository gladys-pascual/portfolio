import React from "react";

const JourneyToTech = () => {
  return (
    <div className="journey-to-tech-details">
      <p>
        I have been aware of the opportunities and flexibility that a career in
        tech can offer, not only here in Ireland, but also around the world. I
        couldn’t afford to quit my full-time job, therefore a part-time course
        was my option.
      </p>

      <div>
        <h3>March to April 2020</h3>
        <p>
          I started with a five-week Coursera course on HTML, CSS and Javascript
          for Web Developers, which gave me strong fundamentals on HTML, CSS and
          Bootstrap and more importantly,
          <strong>
            {" "}
            strengthened my passion for coding and web development
          </strong>
          . I quickly realised that becoming a Software Developer is the right
          path for me.
        </p>
      </div>

      <h3>April to October 2020</h3>
      <p>
        I then continued my journey with Wild Code School’s remote, part-time
        Front-End Developer Course, which was aimed to provide technical
        knowledge and experience for a role as a Front-End Software Developer.
        This includes:
      </p>
      <ul>
        <li>
          <i className="fa fa-code" aria-hidden="true"></i>

          <span className="wild-code-school-bullet-points">
            Building and deploying web applications using HTML, CSS, JavaScript
            ES6 & React, using concepts such as component lifecycle, state
            management and routing.
          </span>
        </li>
        <li>
          <i className="fa fa-code" aria-hidden="true"></i>

          <span className="wild-code-school-bullet-points">
            Implementation of responsive design using Flexbox layout model, SASS
            pre-processor, and Bootstrap framework.
          </span>
        </li>
        <li>
          <i className="fa fa-code" aria-hidden="true"></i>

          <span className="wild-code-school-bullet-points">
            Use of version control such as Git and GitHub in individual and
            group projects. I created a basic Git & Github workflow aimed
            beginners working in a group for the first time, which I is
            available in this{" "}
            <a
              href="https://dev.to/gladyspascual/a-beginner-s-guide-to-using-git-when-working-with-a-team-for-the-first-time-1hba"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              blog post
            </a>
            .
          </span>
        </li>
        <li>
          <i className="fa fa-code" aria-hidden="true"></i>

          <span className="wild-code-school-bullet-points">
            Application of agile methodology, including stand-up meetings,
            2-week sprints for projects, and end-of-sprint 5-minute demos of the
            completed work.
          </span>
        </li>
        <li>
          <i className="fa fa-code" aria-hidden="true"></i>

          <span className="wild-code-school-bullet-points">
            Project planning including creating wireframes with user experience
            in mind, issue tracking using Jira and Trello to track the user
            stories, product backlogs, sprint backlogs & progress of tasks
            during the sprint.
          </span>
        </li>
        <li>
          <i className="fa fa-code" aria-hidden="true"></i>

          <span className="wild-code-school-bullet-points">
            Developed technical communication skills by delivering end-of-sprint
            project demos. In addition, with only two weeks into the course, I
            researched and delivered a{" "}
            <a
              href="https://docs.google.com/presentation/d/1iMlTiaP2clVPrAHSLxWEQP6Z6FqQCkFgDPpvjuiQ7eE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              five-minute presentation
            </a>
            <span> </span>
            about Application Programming Interface (API), an unfamiliar topic
            to me at the time.
          </span>
        </li>
      </ul>
      <p>
        I’m determined to develop to becoming a <i>T-Shaped </i>
        software developer, with in-depth focus in front-end but have basic
        knowledge of the back-end. Therefore, I have immersed myself in learning
        some back-end by creating a CRUD service using AWS Lambda functions and
        expose them as RESTful APIs using Amazon API Gateway, which I then used
        as part of my <span> </span>
        <a
          href="https://www.moneyme.cf/login"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          budget tracker app
        </a>
        .
      </p>
      <h3>Present</h3>
      <p>
        I am keen to further develop my skills as a Software Developer,
        especially in the back-end, which led me to starting Code Institute's
        part-time Diploma in Full Stack Software Development in October 2020. In
        this course, I will be further enhancing my front-end skills while
        upskilling my back-end knowledge by learning Python and Django in
        conjuction with MongoDB to process and present information.
      </p>
      <p>
        <h3>
          I am now looking for Junior Software Developer opportunities where I
          can fulfill my passion for coding and progress my coding skills
          further.
        </h3>
      </p>
    </div>
  );
};

export default JourneyToTech;
