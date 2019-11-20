import React from "react";

import { Grid, Paper, makeStyles } from "@material-ui/core";
import Question from "./Question";
import Answers from "./Answers";
import AddAnswer from "./AddAnswer";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function QuestionDetails() {
  const classes = useStyles();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Question />
            <Answers />
            <Answers />
            <Answers />
            <AddAnswer />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>Related Questions</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default QuestionDetails;
