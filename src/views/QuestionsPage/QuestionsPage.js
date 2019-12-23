import React from "react";
import { inject, observer } from "mobx-react";
import QuestionsLayout from "./components/QuestionsLayout";
import NavBar from "../../shared/components/Navbars/NavBar";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function QuestionsPage() {
  return (
    <>
      <NavBar />
      <QuestionsLayout />
      <Footer color="#4174FF" />
    </>
  );
}

export default inject("store")(observer(QuestionsPage));
