import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { ListItem, ListItemText, Divider } from "@material-ui/core";
import image from "assets/img/default-avatar.png";
import history from "../../../../../history";

function Question({ questionItem, categoryName, store }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const {
      category: {
        question,
        question: { fetchAnswers }
      }
    } = store.categoriesStore;
    const questionId = questionItem.id;
    async function getData(questionId) {
      await fetchAnswers(questionId);
    }
    getData(questionId);
    setAnswers(question.answers);
  }, [questionItem.answers, questionItem.id, store.categoriesStore]);
  return (
    <div key={questionItem.id}>
      <ListItem style={{ flex: 1 }}>
        <div
          style={{
            display: "-webkit-box",
            flex: 0.1,
            marginRight: 20
          }}
        >
          <div
            style={{
              flex: 0.05,
              display: "grid",
              justifyContent: "center",
              marginRight: 10
            }}
          >
            <div>
              <img
                src={image}
                style={{ width: "35px", height: "35px", margin: 10 }}
                alt="avatar"
              />
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "grey"
              }}
            >
              JOHN DOE
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>{questionItem.votes}</div>
            <div style={{ textAlign: "center" }}>votes</div>
            <div style={{ textAlign: "center" }}>{answers.length}</div>
            <div style={{ textAlign: "center" }}>answers</div>
          </div>
        </div>
        <div style={{ flex: 0.8 }}>
          <ListItemText primary={questionItem.question} />
          <div
            style={{
              backgroundColor: "grey",
              padding: 10,
              width: "fit-content",
              borderRadius: 10,
              color: "white",
              fontSize: 12
            }}
          >
            {categoryName}
          </div>
        </div>
        <div
          style={{
            flex: 0.1,
            display: "grid",
            justifyContent: "center"
          }}
        >
          <button
            className="ui button primary"
            onClick={() => history.push(`/question/${questionItem.id}`)}
          >
            View
          </button>
        </div>
      </ListItem>
      <Divider />
    </div>
  );
}

export default inject("store")(observer(Question));
