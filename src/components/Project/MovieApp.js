import React from "react";

const MovieApp = () => {
  return (
    <div className="project-wrapper">
      <div className="title-and-links">
        {" "}
        <h2 className="project-title">Moive & TV Show Search App</h2>
        <p className="project-links">
          <span>
            <a
              href="https://www.showme.cf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/gladys-pascual/movie-tv-search-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </span>
        </p>
        <div className="description-wrapper">
          <p className="description">
            ShowMe is a Movie & TV show searching web app created using the TMDb
            API.
          </p>
        </div>
      </div>
      <div className="main-project">
        <div className="lhs">
          <div className="projects-img-wrapper-wrapper">
            <div className="projects-img-wrapper">
              <img
                src="./pictures/projects/show-me.gif"
                alt="adding a movie to your favourites"
              />
            </div>
          </div>
        </div>
        <div className="rhs">
          <h3> App Features:</h3>
          <ul className="app-features-list">
            <li>
              <i className="fas fa-video" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Search movies or tv shows.
              </span>
            </li>
            <li>
              <i className="fas fa-video" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Login to your own account.
              </span>
            </li>
            <li>
              <i className="fas fa-video" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Mark and view favourite movies or tv shows.
              </span>
            </li>
            <li>
              <i className="fas fa-video" aria-hidden="true"></i>
              <span className="project-bullet-points">
                Bookmark search results, movies and tv shows.
              </span>
            </li>
            <li>
              <i className="fas fa-video" aria-hidden="true"></i>
              <span className="project-bullet-points">Responsive design</span>
            </li>
          </ul>
          <h3>Technologies & Libraries:</h3>
          <ul className="app-features-list">
            <li>
              <i className="fa fa-code" aria-hidden="true"></i>
              <span className="project-bullet-points">
                JavaScript | React | HTML | CSS | SASS | Flexbox
              </span>
            </li>
            <li>
              <i className="fas fa-book-reader" aria-hidden="true"></i>
              <span className="project-bullet-points">
                react-router-dom | react-animated-heart | react-rater |
                react-spinners
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
