import React, { useState } from "react";
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

function Categories({ categories }) {
  const classes = useStyles();
  const [Selected, setSelected] = useState("Programming");
  const [categoryId, setCategoryId] = useState(1);

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
              {categories.map(category => (
                <div style={{ display: "flex" }}>
                  <div
                    className={
                      Selected === category.name
                        ? classes.categoryTitleSelected
                        : classes.categoryTitle
                    }
                    onClick={() => {
                      setSelected(category.name);
                      setCategoryId(category.id);
                    }}
                  >
                    {category.name}
                  </div>
                  {categories[categories.length - 1] !== category && (
                    <div className={classes.divider}>|</div>
                  )}
                </div>
              ))}
            </span>
          </div>
          <Divider className={classes.mainDivider} />
          <span className={classes.questionResourcesSection}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => history.push(`/questions/${categoryId}`)}
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
              onClick={() => history.push(`/resources/${categoryId}`)}
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
