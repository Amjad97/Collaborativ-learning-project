import React from "react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import ForgotForm from "./components/ForgotForm";
import Footer from "shared/components/Footer/Footer";

function ForgotPassPage(props) {
  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });

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
        <ForgotForm />
        <Footer color="transpernt" />
      </div>
    </>
  );
}

export default ForgotPassPage;
