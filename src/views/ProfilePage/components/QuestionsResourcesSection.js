import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../../../shared/components/Question/Question";
import Resource from "../../../shared/components/Resource/Resource";
import styles from "../style/style";
const useStyles = makeStyles(styles);

function QuestionsResourcesSection() {
  const classes = useStyles();

  const [Selected, setSelected] = useState("Questions");
  return (
    <div>
      <div className={classes.QuestionsResourcescontainer}>
        <div
          className={
            Selected === "Questions" ? classes.itemSelected : classes.item
          }
          onClick={() => {
            setSelected("Questions");
          }}
        >
          Questions
        </div>
        <div className={classes.divider}>|</div>
        <div
          className={
            Selected === "Resources" ? classes.itemSelected : classes.item
          }
          onClick={() => {
            setSelected("Resources");
          }}
        >
          Resources
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        {Selected === "Questions" && (
          <div style={{ padding: 20 }}>Questions</div>
        )}
        {Selected === "Resources" && (
          <div style={{ padding: 20 }}>Resources</div>
        )}
      </div>
    </div>
  );
}

export default inject("store")(observer(QuestionsResourcesSection));
