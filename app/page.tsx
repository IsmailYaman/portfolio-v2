import React from "react";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import BackToTopButton from "./components/backToTop";
import Education from "./components/education/education";
import Banner from "./components/banner/banner";

const Home = () => {
    return (
        <>
          <Banner/>
          <BackToTopButton />
          <About />
          <Education />
          <Projects />
          <Experience />
        </>
    );
};

export default Home;
