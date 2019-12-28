import React from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import QuestionDetails from "./components/QuestionDetails";
import Footer from "shared/components/Footer/Footer.js";

function QuestionPage(props) {
  const { path } = props.match;
  return (
    <div>
      <NavBar path={path} />
      <QuestionDetails />
      <Footer color="#4174FF" />
    </div>
  );
}

export default inject("store")(observer(QuestionPage));
