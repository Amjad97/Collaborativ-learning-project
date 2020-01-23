import React from "react";
import { inject, observer } from "mobx-react";
import classNames from "classnames";
import Utils from "shared/utils/UtilFunctions";
import "./style/style.css";

function InputFlie({ updateMyData }) {
  const handleFiles = event => {
    const fd = new FormData();
    fd.append("picture", event.target.files[0], event.target.files[0].name);
    updateMyData(fd).then(res =>
      Utils.addNotification("Upload Image", "Uploaded successfully", "success")
    );
  };
  return (
    <div className={classNames("ui label", "fileContainer")}>
      <input type="file" onChange={handleFiles} />
      <i class="camera icon" />
    </div>
  );
}

export default inject("store")(observer(InputFlie));
