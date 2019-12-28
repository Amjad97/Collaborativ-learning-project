import React from "react";

import history from "../../history";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

import ResetForm from "./components/ResetForm";
import SuccessMessage from "./components/SuccessMessage";

function ResetPassPage(props) {
  const [resetSuccess, setRestSuccess] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);
  const { path } = props.match;

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    //setDisableControls(true);
    setRestSuccess(true);
  };

  return (
    <>
      <NavBar path={path} />
      <div className="page-header clear-filter">
        {!resetSuccess ? (
          <ResetForm
            handleSubmit={handleSubmit}
            disableControls={disableControls}
          />
        ) : (
          <SuccessMessage
            handleClick={() => {
              history.push("/login");
            }}
          />
        )}
        <Footer color="transpernt" />
      </div>
    </>
  );
}

export default ResetPassPage;
