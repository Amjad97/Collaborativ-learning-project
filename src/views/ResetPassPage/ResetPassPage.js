import React from "react";

import history from "../../history";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

import ResetForm from "./components/ResetForm";
import SuccessMessage from "./components/SuccessMessage";

function ResetPassPage() {
  const [resetSuccess, setRestSuccess] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    //setDisableControls(true);
    setRestSuccess(true);
  };

  return (
    <>
      <NavBar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg.jpeg") + ")"
          }}
        ></div>
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
