import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import ResourcesLayout from "./components/ResourcesLayout";
import NavBar from "../../shared/components/Navbars/NavBar";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function ResourcesPage(props) {
  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });

  const {
    params: { id },
    path
  } = props.match;

  const {
    categories,
  } = props.store.categoriesStore;

  return (
    <>
      <NavBar categoryId={id} path={path} />
      <ResourcesLayout
        categories={categories}
        categoryId={id}
      />
      <Footer color="#4174FF" />
    </>
  );
}

export default inject("store")(observer(ResourcesPage));
