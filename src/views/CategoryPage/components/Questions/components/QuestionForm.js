import React from "react";
import { inject, observer } from "mobx-react";

import CustomButton from "shared/components/CustomButton/CustomButton";

function QuestionForm({ handleClose }) {
  const [question, setQuestion] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    handleClose();
    setQuestion("");
  };

  const handleCanSubmit = event => {
    setQuestion(event.target.value);
    if (question.length > 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  return (
    <div className="ui form">
      <div className="field">
        <textarea
          value={question}
          placeholder="Question"
          onChange={e => handleCanSubmit(e)}
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
          onClick={() => {
            handleClose();
            setQuestion("");
          }}
          style={{ width: 120, marginRight: 10 }}
        >
          Close
        </CustomButton>
        <CustomButton
          isLoading={disableControls}
          disabled={!canSubmit}
          onClick={handleSubmit}
          style={{ width: 120 }}
        >
          Ask
        </CustomButton>
      </div>
    </div>
  );
}

export default inject("store")(observer(QuestionForm));
