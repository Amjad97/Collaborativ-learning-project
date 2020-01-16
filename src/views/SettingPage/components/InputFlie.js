import React from "react";

function InputFlie() {
  const handleFiles = event => {
    console.log(event.target.files[0]);
  };
  return <input type="file" onChange={handleFiles} />;
}

export default InputFlie;
