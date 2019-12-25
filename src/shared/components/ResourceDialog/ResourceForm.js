import React from "react";
import { inject, observer } from "mobx-react";
import { Dropdown } from "semantic-ui-react";

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
    <div className="ui form">
      <div className="field">
        <input
          value={title}
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
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
          <Dropdown
            id="CategoryDropDown"
            placeholder="Category"
            search
            selection
            options={categoriesName}
            onChange={onDropDownChange}
            style={{ width: "-webkit-fill-available" }}
          />
        </div>
        <div className="field" style={{ width: "50%", paddingLeft: 5 }}>
          <input
            value={resourcePlatform}
            placeholder="Platform"
            onChange={e => setResourcePlatform(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <input
          value={resourceLink}
          placeholder="Link"
          onChange={e => setResourceLink(e.target.value)}
        />
      </div>
      <div className="field">
        <textarea
          value={resourceDetails}
          placeholder="More Details.."
          onChange={e => setResourceDetails(e.target.value)}
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
  );
}

export default inject("store")(observer(ResourceForm));
