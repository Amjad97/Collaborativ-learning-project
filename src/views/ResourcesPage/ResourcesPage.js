import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import ResourcesLayout from "./components/ResourcesLayout";
import NavBar from "../../shared/components/Navbars/NavBar";
import { isEqual } from "lodash";

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
  const LoggedIn = isEqual(isLoggedIn, "true");

  return (
    <div style={{ position: "relative" }}>
      <NavBar categoryId={id} path={path} isLoggedIn={isLoggedIn} />
      <ResourcesLayout
        categories={categories}
        categoryId={id}
        isLoggedIn={LoggedIn}
      />
    </div>
  );
}

export default inject("store")(observer(ResourcesPage));
