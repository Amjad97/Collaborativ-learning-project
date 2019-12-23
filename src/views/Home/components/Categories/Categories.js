import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// reactstrap components
import classNames from "classnames";
import history from "../../../../history";

import questionImage from "assets/img/questions.png";
import resourceImage from "assets/img/resources.png";

import styles from "./styles/style";
const useStyles = makeStyles(styles);

function Categories(props) {
  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });
  const classes = useStyles();

  //const { categories } = props.store.categoriesStore;

  return (
    <>
      <div className="ml-auto mr-auto text-center" style={{ paddingTop: 30 }}>
        <div className={classNames("title", classes.mainTitle)}>Categories</div>
        <div className={classes.secondaryTitle}>
          Choose from the categories!
        </div>
        <div className={classes.section} data-background-color="white">
          <div className="text-center">
            <span style={{ display: "inline-flex" }}>
              <div className={classes.categoryTitle}>Programming</div>
              <div className={classes.divider}>|</div>

              <div className={classes.categoryTitles}>English learning</div>
              <div className={classes.divider}>|</div>

              <div className={classes.categoryTitle}>Marketing</div>
              <div className={classes.divider}>|</div>

              <div className={classes.categoryTitle}>Design</div>
            </span>
          </div>
          <Divider className={classes.mainDivider} />
          <span className={classes.questionResourcesSection}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/questions")}
            >
              <img src={questionImage} alt="question" className={classes.img} />
              <div className={classes.questionResourcesTexts}>Questions</div>
            </div>
            <Divider
              orientation="vertical"
              className={classes.secondaryDivider}
            />
            <div
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/resources/1")}
            >
              <img src={resourceImage} alt="resource" className={classes.img} />
              <div className={classes.questionResourcesTexts}>Resources</div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default inject("store")(observer(Categories));
