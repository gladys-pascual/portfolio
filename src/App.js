import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

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
}



export default App;
