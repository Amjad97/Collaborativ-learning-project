import React from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import QuestionDetails from "./components/QuestionDetails";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function QuestionPage() {
  return (
    <div>
      <NavBar />
      <QuestionDetails />
      <Footer color="#4174FF" />
    </div>
  );
}

export default inject("store")(observer(QuestionPage));
