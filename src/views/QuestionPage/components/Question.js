import React from "react";
import { Divider, makeStyles } from "@material-ui/core";

import styles from "../style/style";

const useStyles = makeStyles(styles);

function Question() {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.header}>
        What is the difference between React Native and React?
      </h3>
      <span>Wednesday, November 20, 2019, 7:32 PM</span>
      <p className={classes.description}>
        I have started to learn React out of curiosity and wanted to know the
        difference between React and React Native - though could not find a
        satisfactory answer using Google. React and React Native seems to have
        the same format. Do they have completely different syntax?
      </p>
      <div className={classes.category}>Web Development</div>
      <h4 className={classes.header}>3 Answers</h4>
      <Divider />
    </div>
  );
}

export default Question;
