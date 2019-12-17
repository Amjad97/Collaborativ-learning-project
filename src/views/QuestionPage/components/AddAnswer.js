import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function AddAnswer({ addAnswer, questionId }) {
  const classes = useStyles();
  const [answer, setAnswer] = useState("");
  const handleSubmit = () => {
    addAnswer &&
      answer.length > 0 &&
      addAnswer({
        user: 1,
        question: questionId,
        answer: answer
      });
  };
  return (
    <div className={classNames("ui form", classes.answerForm)}>
      <div className="field">
        <textarea
          placeholder="Add answer"
          onChange={e => setAnswer(e.target.value)}
          value={answer}
        />
      </div>
      <button
        className={classNames("ui button primary", classes.addAnswerBtn)}
        onClick={handleSubmit}
      >
        Add answer
      </button>
    </div>
  );
}

export default inject("store")(observer(AddAnswer));
