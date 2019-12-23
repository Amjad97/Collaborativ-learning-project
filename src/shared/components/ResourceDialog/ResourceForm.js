import React from "react";
import { inject, observer } from "mobx-react";

import CustomButton from "shared/components/CustomButton/CustomButton";

function ResourceForm({ handleClose }) {
  const [title, setTitle] = React.useState("");
  const [resourceLink, setResourceLink] = React.useState("");
  const [resourceDetails, setResourceDetails] = React.useState("");
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
          <select class="ui dropdown">
            <option value="">Category</option>
            <option value="0">Programming</option>
            <option value="1">English Learnign</option>
            <option value="2">Marketing</option>
            <option value="3">Design</option>
          </select>
        </div>
        <div style={{ width: "50%", paddingLeft: 5 }}>
          <select class="ui dropdown">
            <option value="">Platform</option>
            <option value="0">Youtube</option>
            <option value="1">Udemy</option>
          </select>
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
