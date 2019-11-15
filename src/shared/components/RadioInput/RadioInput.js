import React from "react";
import { withFormsy } from "formsy-react";
import { AvRadioGroup } from "availity-reactstrap-validation";

function RadioInput(props) {
  return <AvRadioGroup {...props} />;
}

export default withFormsy(RadioInput);
