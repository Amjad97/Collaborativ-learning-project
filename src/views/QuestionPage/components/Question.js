import React from "react";
import moment from 'moment';
import { Divider, makeStyles } from "@material-ui/core";

import styles from "../style/style";
import { inject, observer } from "mobx-react";
const useStyles = makeStyles(styles);

function Question({ question, numOfAnswers }) {
  const classes = useStyles();
  const numAnswers =
    numOfAnswers > 1 ? `${numOfAnswers} Answers` : `${numOfAnswers} Answer`;
  return (
    <div>
      <h3 className={classes.header}>{question.question}</h3>
      <span>{moment(question.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
      <div className={classes.category}>English</div>
      <h4 className={classes.header}>{numAnswers}</h4>
      <Divider />
    </div>
  );
}

export default inject("store")(observer(Question));
