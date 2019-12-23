import React from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "../../shared/components/Navbars/HomeNavBar";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function Home() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Header />
        <div className="main">
          <Categories />
          <Contact />
        </div>
        <Footer color="#4174FF" />
      </div>
    </>
  );
}

export default inject("store")(observer(Home));
