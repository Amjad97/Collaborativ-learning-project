import React from "react";
import { inject, observer } from "mobx-react";
import Formsy from "formsy-react";
import Input from "shared/components/Input/Input";

import CustomButton from "shared/components/CustomButton/CustomButton";

function QuestionForm({ handleClose, addQuestion, categoryId }) {
  const [question, setQuestion] = React.useState("");
  const [questionDetails, setQuestionDetails] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);

    addQuestion &&
      addQuestion({
        user: 1,
        category: categoryId,
        title: question,
        description: questionDetails
      }).finally(() => {
        setDisableControls(false);
        handleClose();
        setQuestion("");
        setQuestionDetails("");
      });
  };

  return (
    <Formsy
      onValidSubmit={handleSubmit}
      onValid={() => setCanSubmit(true)}
      onInvalid={() => setCanSubmit(false)}
    >
      <div className="ui form">
        <div className="field">
          <Input
            name="question"
            type="text"
            validations="isExisty"
            value={question}
            placeholder="Question"
            onChange={e => setQuestion(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="field">
          <Input
            name="questionDetails"
            type="textarea"
            validations="isExisty"
            value={questionDetails}
            placeholder="More Details.."
            onChange={e => setQuestionDetails(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: 8,
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <CustomButton
            isLoading={disableControls}
            disabled={!canSubmit}
            onClick={handleSubmit}
            style={{ width: 120 }}
          >
            Post
          </CustomButton>
        </div>
      </div>
    </Formsy>
  );
}

export default inject("store")(observer(QuestionForm));
