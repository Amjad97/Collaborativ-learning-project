import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "shared/components/Navbars/QuestionNavBar";
import QuestionDetails from "./components/QuestionDetails";

function QuestionPage(props) {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    const {
      category: {
        fetchQuestion,
        question,
        question: { fetchAnswers }
      }
    } = props.store.categoriesStore;
    const questionId = props.match.params.id;
    async function getData(questionId) {
      await fetchQuestion(questionId);
      await fetchAnswers(questionId);
    }
    getData(questionId);
    setQuestion(question);
    setAnswers(question.answers);
  }, [props.store.categoriesStore, props.match.params.id]);
  return (
    <div>
      <NavBar />
      <QuestionDetails question={question} answers={answers} />
    </div>
  );
}

export default inject("store")(observer(QuestionPage));
