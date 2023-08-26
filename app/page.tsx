import React from "react";
import Banner from "./components/banner";
import About from "./components/about";
import RandomCatImage from "./components/randomCatImage";
import Projects from "./components/projects/projects";

const Home = () => {
    return (
        <>
          <Banner/>
          <About />
          <hr />
          <Projects />
        </>
    );
};

export default Home;
