import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="banner-image">
          <img
            src="../../pictures/background.jpg"
            alt="background for desktop"
            className="background-image-desktop"
          />{" "}
          <img
            src="../../pictures/background-tablet.jpg"
            alt="background for tablet"
            className="background-image-tablet"
          />
          <img
            src="../../pictures/background-mobile.jpg"
            alt="background for mobile"
            className="background-image-mobile"
          />
        </div>
        <div className="banner-text">
          <div className="my-name">
            <h1> Gladys Pascual </h1>
          </div>
          <div className="job">
            <h2> Frontend Software Engineer</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
