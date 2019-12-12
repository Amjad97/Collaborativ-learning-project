import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function AddAnswer() {
  const classes = useStyles();
  return (
    <div className={classNames("ui form", classes.answerForm)}>
      <div className="field">
        <textarea placeholder="Add answer" />
      </div>
      <button className={classNames("ui button primary", classes.addAnswerBtn)}>
        Add answer
      </button>
    </div>
  );
}

export default inject("store")(observer(AddAnswer));
