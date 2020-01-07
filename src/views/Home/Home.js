import React, { useEffect, useRef } from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "../../shared/components/Navbars/HomeNavBar";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function Home(props) {
  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });
  const path = props.match.path;
  const { categories } = props.store.categoriesStore;
  const categoryRef = useRef();
  return (
    <>
      <NavBar path={path} categoryRef={categoryRef} />
      <div className="wrapper">
        <Header categories={categories} />
        <div className="main" ref={categoryRef}>
          <Categories categories={categories} />
          <Contact />
        </div>
        <Footer color="#4174FF" />
      </div>
    </>
  );
}

export default inject("store")(observer(Home));
