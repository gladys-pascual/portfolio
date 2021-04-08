import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import technologies from "./data/technologies";
import images from "./data/budgetPictures";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div
        className={
          location.pathname === "/" ? "content home-content" : "content"
        }
      >
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/about-me"
            render={() => <AboutMe technologies={technologies} />}
          />
          <Route path="/projects" render={() => <Projects images={images} />} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
