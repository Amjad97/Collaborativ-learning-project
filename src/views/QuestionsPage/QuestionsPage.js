import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import QuestionsLayout from "./components/QuestionsLayout";
import NavBar from "../../shared/components/Navbars/NavBar";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function QuestionsPage(props) {
  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });

  const {
    params: { id },
    path
  } = props.match;

  const { categories } = props.store.categoriesStore;
  return (
    <>
      <NavBar categoryId={id} path={path} />
      <QuestionsLayout categories={categories} categoryId={id} />
      <Footer color="#4174FF" />
    </>
  );
}

export default inject("store")(observer(QuestionsPage));
