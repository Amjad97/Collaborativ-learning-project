import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";

// shared components
import Footer from "components/Footer/Footer.js";


function Home() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Header />
        <div className="main">
          <About />
          <Categories />
          <Contact />
        </div>
        <Footer color="black"/>
      </div>
    </>
  );
}

export default Home;
