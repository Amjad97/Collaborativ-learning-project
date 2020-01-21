import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import QuestionsLayout from "./components/QuestionsLayout";
import NavBar from "../../shared/components/Navbars/NavBar";
import { isEqual } from "lodash";

function QuestionsPage(props) {
  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });

  const {
    params: { id },
    path
  } = props.match;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const LoggedIn = isEqual(isLoggedIn, "true");
  const { categories } = props.store.categoriesStore;
  return (
    <div style={{ position: "relative" }}>
      <NavBar categoryId={id} path={path} isLoggedIn={isLoggedIn} />
      <QuestionsLayout
        categories={categories}
        categoryId={id}
        isLoggedIn={LoggedIn}
      />
    </div>
  );
}

export default inject("store")(observer(QuestionsPage));
