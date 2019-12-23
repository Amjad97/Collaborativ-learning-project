import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

import { Grid, Paper, makeStyles, Divider, Avatar } from "@material-ui/core";
import Question from "./Question";
import Answers from "./Answers";
import userImage from "assets/img/default-avatar.png";
import QuestionDialog from "shared/components/QuestionDialog/QuestionDialog";
import RelatedQuestion from "./RelatedQuestion";
import styles from "../style/style";
import AddAnswer from "./AddAnswer";

const useStyles = makeStyles(styles);

function QuestionDetails() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={8}>
        <Paper>
          <div className={classes.questionForm} onClick={handleClickOpen}>
            <Avatar alt="Remy Sharp" src={userImage} />
            <div style={{ marginLeft: 20 }}>
              <div className={classes.questionFormTitle}>
                What's your question ?
              </div>
              <div className={classes.questionFormSubTitle}>
                Write a question now !
              </div>
            </div>
          </div>
          <QuestionDialog open={open} handleClose={handleClose} />
        </Paper>
        <div className={classes.mainText}>Question</div>
        <div style={{ marginTop: 20 }}>
          <Question />
        </div>
        <div className={classes.mainText}>Answers</div>
        <div style={{ marginTop: 20 }}>
          <Paper style={{ padding: 20 }}>
            <AddAnswer />
            <Answers />
          </Paper>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.RelatedQuestionText}>Related Questions</div>
        <Divider />
        <RelatedQuestion />
      </Grid>
    </Grid>
  );
}

export default inject("store")(observer(QuestionDetails));
