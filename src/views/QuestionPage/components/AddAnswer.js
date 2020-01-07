import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { makeStyles, Avatar } from "@material-ui/core";
import classNames from "classnames";
import userImage from "assets/img/default-avatar.png";
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
      }).finally(() => {
        setAnswer("");
      });
  };
  return (
    <div className={classNames("ui form", classes.answerForm)}>
      <Avatar alt="Remy Sharp" src={userImage} />
      <div className={classNames("field", classes.answerInput)}>
        <input
          placeholder="Add answer.."
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
