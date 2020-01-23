import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

import { Grid, Paper, makeStyles, Divider, Avatar } from "@material-ui/core";
import Question from "./Question";
import Answer from "./Answer";
import userImage from "assets/img/default-avatar.png";
import QuestionDialog from "shared/components/QuestionDialog/QuestionDialog";
import Content from "shared/components/NotLoggedInContent/Content";
import RelatedQuestion from "./RelatedQuestion";
import styles from "../style/style";
import AddAnswer from "./AddAnswer";

const useStyles = makeStyles(styles);

function QuestionDetails({ questionId, store, isLoggedIn }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  const { myprofile } = store.userStore;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    const {
      category: {
        fetchQuestion,
        question,
        question: { fetchAnswers }
      }
    } = store.categoriesStore;
    async function getData(questionId) {
      await fetchQuestion(questionId);
      await fetchAnswers(questionId);
    }
    getData(questionId);
    setQuestion(question);
    setAnswers(question.answers);
  }, [store, questionId, myprofile]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Image =
    myprofile.picture.length === 0
      ? userImage
      : `http://localhost:8000${myprofile.picture}`;

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={8}>
        <Paper>
          {isLoggedIn ? (
            <>
              <div className={classes.questionForm} onClick={handleClickOpen}>
                <Avatar alt="Remy Sharp" src={Image} />
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
            </>
          ) : (
            <Content content="To ask questions you need to login" />
          )}
        </Paper>
        <div className={classes.mainText}>Question</div>
        <div style={{ marginTop: 20 }}>
          <Question question={question} />
        </div>
        <div className={classes.mainText}>Answers</div>
        <div style={{ marginTop: 20 }}>
          <Paper style={{ padding: 20 }}>
            <AddAnswer
              addAnswer={question.addAnswer}
              questionId={question.id}
            />
            {answers.map(answer => (
              <Answer answer={answer} />
            ))}
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
