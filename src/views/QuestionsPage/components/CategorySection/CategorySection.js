import React from "react";
import { inject, observer } from "mobx-react";
import { Paper, makeStyles, Divider } from "@material-ui/core";
import history from "../../../../history";
import style from "../../style/style";

const useStyle = makeStyles(style);

function CategorySection({ categories, categoryId }) {
  const classes = useStyle();

  return (
    <>
      <div className={classes.categoryText}>CATEGORIES</div>
      <Paper className={classes.categoriesList}>
        {categories.map(category => (
          <div>
            <div
              className={
                categoryId == category.id
                  ? classes.categoryItemSelected
                  : classes.categoryItem
              }
              onClick={() => history.push(`/questions/${category.id}`)}
            >
              {category.name}
            </div>
            <Divider />
          </div>
        ))}
      </Paper>
    </>
  );
}

export default inject("store")(observer(CategorySection));
