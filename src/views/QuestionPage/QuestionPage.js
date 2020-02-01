import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import QuestionDetails from "./components/QuestionDetails";
import { isEqual } from "lodash";

function QuestionPage(props) {
  const [questions, setQuestions] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
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

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const LoggedIn = isEqual(isLoggedIn, "true");

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} categoryId={categoryId} path={path} />
      <QuestionDetails categoryId={categoryId} questionId={id} isLoggedIn={LoggedIn} />
    </div>
  );
}

export default inject("store")(observer(QuestionPage));
