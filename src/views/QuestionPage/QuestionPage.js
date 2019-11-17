import React from "react";

// core components
import NavBar from "shared/components/Navbars/QuestionNavBar";
import QuestionDetails from "./components/QuestionDetails";

function QuestionPage() {
  return (
    <div>
      <NavBar />
      <QuestionDetails />
    </div>
  );
}

export default QuestionPage;
