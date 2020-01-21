import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import ResourcesLayout from "./components/ResourcesLayout";
import NavBar from "../../shared/components/Navbars/NavBar";

function ResourcesPage(props) {

  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });

  const {
    params: { id },
    path
  } = props.match;

  const { categories } = props.store.categoriesStore;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div style={{ position: "relative" }}>
      <NavBar categoryId={id} path={path} isLoggedIn={isLoggedIn} />
      <ResourcesLayout categories={categories} categoryId={id} />
    </div>
  );
}

export default inject("store")(observer(ResourcesPage));
