import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import QuestionsLayout from "./components/QuestionsLayout";
import NavBar from "../../shared/components/Navbars/NavBar";

// shared components
import Footer from "shared/components/Footer/Footer.js";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./style/style";

const useStyles = makeStyles(styles);

function QuestionsPage(props) {
  const classes = useStyles(props);

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
    <div style={{ position: "relative" }}>
      <NavBar categoryId={id} path={path} />
      <QuestionsLayout categories={categories} categoryId={id} />
    </div>
  );
}

export default inject("store")(observer(QuestionsPage));
