import React from "react";
import { AvForm, AvRadio } from "availity-reactstrap-validation";
import Formsy from "formsy-react";
import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/Input";
import RadioInput from "shared/components/RadioInput/RadioInput";

function QuestionForm({ handleClose }) {
  const [questionTitle, setQuestionTitle] = React.useState("");
  const [questionDescription, setQuestionDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    handleClose();
    setQuestionTitle("");
    setQuestionDescription("");
    setCategory("");
  };

  return (
    <Formsy
      onValidSubmit={handleSubmit}
      onValid={() => setCanSubmit(true)}
      onInvalid={() => setCanSubmit(false)}
    >
      <AvForm>
        <Input
          name="resourceTitle"
          placeholder="Resource Title"
          type="text"
          value={questionTitle}
          validations="isExisty"
          validate={{
            required: {
              value: true,
              errorMessage: "This field is required"
            }
          }}
          onChange={e => setQuestionTitle(e.target.value)}
          required
        />
        <Input
          name="resourceDescription"
          placeholder="Resource Description"
          type="text"
          value={questionDescription}
          validations="isExisty"
          validate={{
            required: {
              value: true,
              errorMessage: "This field is required"
            }
          }}
          onChange={e => setQuestionDescription(e.target.value)}
          required
        />
        <RadioInput
          inline
          name="category"
          label="category"
          required
          validations="isExisty"
          value={category}
          validate={{
            required: {
              value: true,
              errorMessage: "This field is required"
            }
          }}
        >
          <AvRadio
            label="English"
            value="English"
            onChange={e => setCategory(e.target.value)}
          />
          <AvRadio
            label="Web development"
            value="Web development"
            onChange={e => setCategory(e.target.value)}
          />
          <AvRadio
            label="Mobile development"
            value="Mobile development"
            onChange={e => setCategory(e.target.value)}
          />
        </RadioInput>
      </AvForm>
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
            setQuestionTitle("");
            setQuestionDescription("");
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
    </Formsy>
  );
}

export default QuestionForm;
