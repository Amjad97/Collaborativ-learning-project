import React from "react";
import { inject, observer } from "mobx-react";

import { AvForm } from "availity-reactstrap-validation";
import Formsy from "formsy-react";
import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/Input";

function ResourceForm({ store, handleClose, addResource }) {
  const [resourceTitle, setResourceTitle] = React.useState("");
  const [resourceDescription, setResourceDescription] = React.useState("");
  const [resourceLink, setResourceLink] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
    addResource &&
      addResource({
        user: 1,
        category: 2,
        title: resourceTitle,
        description: resourceDescription,
        link: resourceLink
      }).finally(() => {
        setDisableControls(false);
        handleClose();
        setResourceTitle("");
        setResourceDescription("");
        setResourceLink("");
      });
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
          value={resourceTitle}
          validations="isExisty"
          validate={{
            required: {
              value: true,
              errorMessage: "This field is required"
            }
          }}
          onChange={e => setResourceTitle(e.target.value)}
          required
        />
        <Input
          name="resourceDescription"
          placeholder="Resource Description"
          type="text"
          value={resourceDescription}
          validations="isExisty"
          validate={{
            required: {
              value: true,
              errorMessage: "This field is required"
            }
          }}
          onChange={e => setResourceDescription(e.target.value)}
          required
        />
        <Input
          name="resourceLink"
          placeholder="Resource link"
          type="text"
          value={resourceLink}
          validations="isExisty"
          validate={{
            required: {
              value: true,
              errorMessage: "This field is required"
            }
          }}
          onChange={e => setResourceLink(e.target.value)}
          required
        />
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
            setResourceTitle("");
            setResourceDescription("");
            setResourceLink("");
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
          Add
        </CustomButton>
      </div>
    </Formsy>
  );
}

export default inject("store")(observer(ResourceForm));
