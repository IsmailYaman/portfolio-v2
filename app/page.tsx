import React from "react";
import Banner from "./components/banner/banner";
import Banner2 from "./components/banner/banner2";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import BackToTopButton from "./components/backToTop";
import Education from "./components/education/education";

const Home = () => {
    return (
        <>
          {/* <Banner/> */}
          <BackToTopButton />
          <Banner2/>
          <About />
          <Education />
          <Projects />
          <Experience />
        </>
    );
};

export default Home;
