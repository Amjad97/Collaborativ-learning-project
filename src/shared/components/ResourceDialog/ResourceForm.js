import React from "react";
import { inject, observer } from "mobx-react";
import Formsy from "formsy-react";
import { AvForm } from "availity-reactstrap-validation";
import Input from "shared/components/Input/Input";

import CustomButton from "shared/components/CustomButton/CustomButton";

function ResourceForm({ handleClose, categories }) {
  const [title, setTitle] = React.useState("");
  const [resourceLink, setResourceLink] = React.useState("");
  const [resourceCategory, setResourceCategory] = React.useState("");
  const [resourceDetails, setResourceDetails] = React.useState("");
  const [resourcePlatform, setResourcePlatform] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
  };

  const categoriesName = categories.map(category => ({
    key: category.id,
    text: category.name,
    value: category.name
  }));

  const onDropDownChange = (value, text) => {
    setResourceCategory(text.value);
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
            name="title"
            type="text"
            validations="isExisty"
            value={title}
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div
          style={{
            display: "-webkit-inline-box",
            width: "100%",
            margin: "0 0 1em"
          }}
        >
          <div style={{ width: "50%", paddingRight: 5 }}>
            <Input
              id="CategoryDropDown"
              name="categoryDropDown"
              placeholder="Category"
              search
              selection
              options={categoriesName}
              onChange={onDropDownChange}
              type="dropDown"
              style={{ width: "-webkit-fill-available" }}
              required
              validations="isExisty"
              value={resourceCategory}
            />
          </div>
          <div className="field" style={{ width: "50%", paddingLeft: 5 }}>
            <Input
              name="platform"
              type="text"
              validations="isExisty"
              value={resourcePlatform}
              placeholder="Platform"
              onChange={e => setResourcePlatform(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
        </div>
        <div className="field">
          <Input
            name="link"
            type="text"
            validations="isUrl"
            value={resourceLink}
            placeholder="Link"
            onChange={e => setResourceLink(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="field">
          <Input
            name="resourceDetails"
            type="textarea"
            validations="isExisty"
            value={resourceDetails}
            placeholder="More Details.."
            onChange={e => setResourceDetails(e.target.value)}
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
            Add
          </CustomButton>
        </div>
      </div>
    </Formsy>
  );
}

export default inject("store")(observer(ResourceForm));
