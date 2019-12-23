import React from "react";
import { inject, observer } from "mobx-react";

import CustomButton from "shared/components/CustomButton/CustomButton";

function QuestionForm({ handleClose, addQuestion }) {
  const [question, setQuestion] = React.useState("");
  const [questionDetails, setQuestionDetails] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
  };

  return (
    <div className="ui form">
      <div className="field">
        <input
          value={question}
          placeholder="Question"
          onChange={e => setQuestion(e.target.value)}
        />
      </div>
      <div className="field">
        <textarea
          value={questionDetails}
          placeholder="More Details.."
          onChange={e => setQuestionDetails(e.target.value)}
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
  );
}

export default inject("store")(observer(QuestionForm));
