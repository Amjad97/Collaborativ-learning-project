import React from "react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import ForgotForm from "./components/ForgotForm";
import Footer from "shared/components/Footer/Footer";

function ForgotPassPage(props) {
  const { path } = props.match;

  return (
    <>
      <NavBar path={path} />
      <ForgotForm />
      <Footer color="transpernt" />
    </>
  );
}

export default ForgotPassPage;
