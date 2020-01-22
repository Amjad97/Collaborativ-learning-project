import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../../../shared/components/Question/Question";
import Resource from "../../../shared/components/Resource/Resource";
import NoQuestions from "../../../shared/components/EmptyContent/NoQuestions";
import NoResources from "../../../shared/components/EmptyContent/NoResources";
import styles from "../style/style";
const useStyles = makeStyles(styles);

function QuestionsResourcesSection({ resources, questions, categories }) {
  const classes = useStyles();

  const [Selected, setSelected] = useState("Questions");
  return (
    <div>
      <div className={classes.QuestionsResourcescontainer}>
        <div
          className={
            Selected === "Questions" ? classes.itemSelected : classes.item
          }
          onClick={() => {
            setSelected("Questions");
          }}
        >
          Questions
        </div>
        <div className={classes.divider}>|</div>
        <div
          className={
            Selected === "Resources" ? classes.itemSelected : classes.item
          }
          onClick={() => {
            setSelected("Resources");
          }}
        >
          Resources
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        {Selected === "Questions" && (
          <div style={{ padding: 20 }}>
            {questions.length === 0 ? (
              <NoQuestions text="You Have No Questions" />
            ) : (
              questions.map(question => <Question question={question} />)
            )}
          </div>
        )}
        {Selected === "Resources" && (
          <div style={{ padding: 20 }}>
            {resources.length === 0 ? (
              <NoResources text="You Have No Resources" />
            ) : (
              resources.map(resource => (
                <Resource resource={resource} categories={categories} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default inject("store")(observer(QuestionsResourcesSection));
