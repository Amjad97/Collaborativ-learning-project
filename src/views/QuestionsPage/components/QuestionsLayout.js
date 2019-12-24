import React, { useState, useEffect } from "react";
import { Grid, Paper, makeStyles, Avatar } from "@material-ui/core";
import QuestionDialog from "shared/components/QuestionDialog/QuestionDialog";
import CategorySection from "./CategorySection/CategorySection";
import Question from "./Question";
import userImage from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function QuestionsLayout() {
  const classes = useStyle();
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
        <div className={classes.mainText}>TOP Questions</div>
        <div style={{ marginTop: 20 }}>
          <Question />
          <Question />
        </div>
      </Grid>
      <Grid item xs={4}>
        <CategorySection />
      </Grid>
    </Grid>
  );
}

export default QuestionsLayout;
