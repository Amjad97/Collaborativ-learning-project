import React from "react";
import { withFormsy } from "formsy-react";
import { Dropdown } from "semantic-ui-react";

function Input(props) {
  const { type } = props;
  return type === "text" ? (
    <input {...props}></input>
  ) : type === "textarea" ? (
    <textarea {...props}></textarea>
  ) : (
    <Dropdown {...props} />
  );
}

export default withFormsy(Input);
