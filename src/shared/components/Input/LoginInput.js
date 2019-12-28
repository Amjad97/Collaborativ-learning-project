import React from "react";
import { withFormsy } from "formsy-react";
import { AvField } from "availity-reactstrap-validation";

function Input(props) {
  return <AvField {...props}></AvField>;
}

export default withFormsy(Input);
