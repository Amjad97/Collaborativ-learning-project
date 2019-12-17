import React, { useState } from "react";
import { inject, observer } from "mobx-react";
// core components
import { List } from "@material-ui/core";
import Question from "./components/Question";

import QuestionDialog from "./components/QuestionDialog";

function Questions({ questions, categoryName, addQuestion }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ padding: "50px 0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 55px",
          alignItems: "baseline"
        }}
      >
        <h2 className="title">Questions</h2>
        <button className="ui button primary" onClick={handleClickOpen}>
          Ask Question
        </button>
        <QuestionDialog
          open={open}
          handleClose={handleClose}
          addQuestion={addQuestion}
        />
      </div>
      <div style={{ padding: "0px 40px" }}>
        <List>
          {questions &&
            questions.map(question => (
              <Question
                key={question.id}
                questionItem={question}
                categoryName={categoryName}
              />
            ))}
        </List>
      </div>
    </div>
  );
}

export default inject("store")(observer(Questions));
