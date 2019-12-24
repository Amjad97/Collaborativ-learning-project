import React from "react";
import { makeStyles } from "@material-ui/core";
import style from "./style/style";

const useStyle = makeStyles(style);

function CategoryItem({ categoryTitle, categoryDetails }) {
  const classes = useStyle();
  return (
    <div className={classes.categoryItemContainer}>
      <div>
        <div className={classes.categoryTitle}>{categoryTitle}</div>
        <div className={classes.categoryDetails}>{categoryDetails}</div>
      </div>
    </div>
  );
}

export default CategoryItem;
