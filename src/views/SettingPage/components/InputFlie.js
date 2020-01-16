import React from "react";
import classNames from "classnames";
import "./style/style.css";

function InputFlie() {
  const handleFiles = event => {
    console.log(event.target.files[0]);
  };
  return (
    <div className={classNames("ui label", "fileContainer")}>
      <input type="file" onChange={handleFiles} />
      <i class="camera icon" />
    </div>
  );
}

export default InputFlie;
