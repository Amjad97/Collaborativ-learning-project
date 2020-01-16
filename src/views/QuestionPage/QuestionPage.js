import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import QuestionDetails from "./components/QuestionDetails";
import Footer from "shared/components/Footer/Footer.js";

function QuestionPage(props) {
  const [questions, setQuestions] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const { fetchAllQuestions, allQuestions } = props.store.categoriesStore;

  const {
    path,
    params: { id }
  } = props.match;

  useEffect(() => {
    async function getData() {
      await fetchAllQuestions();
      setQuestions(allQuestions);
    }
    getData();
    const questionItem = questions.filter(
      question => question.id === Number(id)
    );
    if (questionItem.length !== 0) {
      const { category } = questionItem[0];
      setCategoryId(category);
    }
  }, [id, questions, fetchAllQuestions, allQuestions]);

  return (
    <div>
      <NavBar categoryId={categoryId} path={path} />
      <QuestionDetails questionId={id} />
    </div>
  );
}

export default inject("store")(observer(QuestionPage));
