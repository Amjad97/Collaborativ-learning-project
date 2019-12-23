import React from "react";
import { Paper, makeStyles, Divider } from "@material-ui/core";

import style from "../styles/style";

const useStyle = makeStyles(style);

function CategorySection(params) {
  const classes = useStyle();

  return (
    <>
      <div className={classes.categoryText}>CATEGORIES</div>
      <Paper className={classes.categoriesList}>
        <div className={classes.categoryItem}>Programming</div>
        <Divider />
        <div className={classes.categoryItem} style={{ color: "#4174FF" }}>
          English Learning
        </div>
        <Divider />
        <div className={classes.categoryItem}>Marketing</div>
        <Divider />
        <div className={classes.categoryItem}>Design</div>
      </Paper>
    </>
  );
}

export default CategorySection;
