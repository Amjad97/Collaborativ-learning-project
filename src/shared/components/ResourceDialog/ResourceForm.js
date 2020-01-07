import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Formsy from "formsy-react";
import Input from "shared/components/Input/Input";

import CustomButton from "shared/components/CustomButton/CustomButton";

function ResourceForm({ handleClose, categories, addResource }) {
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceLink, setResourceLink] = useState("");
  const [resourceCategory, setResourceCategory] = useState("");
  const [resourceDetails, setResourceDetails] = useState("");
  const [resourcePlatform, setResourcePlatform] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [disableControls, setDisableControls] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);

    addResource &&
      addResource({
        user: 1,
        category: resourceCategory,
        title: resourceTitle,
        description: resourceDetails,
        platform: resourcePlatform,
        link: resourceLink
      }).finally(() => {
        setDisableControls(false);
        handleClose();
        setResourceTitle("");
        setResourceDetails("");
        setResourceLink("");
        setResourcePlatform("");
        setResourceCategory("");
      });
  };

  const categoriesName = categories.map(category => ({
    key: category.id,
    text: category.name,
    value: category.id
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
            value={resourceTitle}
            placeholder="Title"
            onChange={e => setResourceTitle(e.target.value)}
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
