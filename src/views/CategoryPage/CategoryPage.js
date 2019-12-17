import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "shared/components/Navbars/NavBar.js";
import CategoryPageHeader from "shared/components/Headers/CategoryPageHeader.js";
import Footer from "shared/components/Footer/Footer.js";
import Resources from "./components/Resources/Resources";
import Questions from "./components/Questions/Questions";

import history from "../../history";

function CategoryPage(props) {
  const [categoryData, setCategoryDate] = useState({});
  const [questions, setQuestions] = useState([]);
  const [resources, setResources] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    const { fetchCategory, category } = props.store.categoriesStore;
    const categoryId = props.match.params.id;
    async function getData(categoryId) {
      await fetchCategory(categoryId);
      await category.fetchResources(categoryId);
      await category.fetchQuestions(categoryId);
      await setCategoryDate(category);
    }
    getData(categoryId);
    setQuestions(category.questions);
    setResources(category.resources);
    setCategoryName(categoryData.name);

    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, [categoryData, props.store.categoriesStore, props.match.params.id]);
  const image = history.location.image;
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <CategoryPageHeader background={image} />
        <Resources
          resources={resources}
          addResource={categoryData.addResource}
        />
        <Questions
          questions={questions}
          categoryName={categoryName}
          addQuestion={categoryData.addQuestion}
        />
        <Footer />
      </div>
    </>
  );
}

export default inject("store")(observer(CategoryPage));
