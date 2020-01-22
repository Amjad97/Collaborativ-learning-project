import React from "react";
import { inject, observer } from "mobx-react";
import classNames from "classnames";
import Utils from "shared/utils/UtilFunctions";
import "./style/style.css";

function InputFlie({ uploadImage }) {
  const handleFiles = event => {
    console.log(event.target.files[0]);
    const fd = new FormData();
    fd.append("image", event.target.files[0], event.target.files[0].name);
    uploadImage(fd)
      .then(res => console.log(res))
      .finall(() =>
        Utils.addNotification(
          "Upload Image",
          "Uploaded successfully",
          "success"
        )
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
