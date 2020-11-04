import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
