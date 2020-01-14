import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import ReactSearchBox from "react-search-box";
import history from "../../../history";
import "./style.css";

function SearchBar(props) {
  const [value, setValue] = useState("");
  const [questions, setQuestions] = useState([]);
  const { fetchAllQuestions, allQuestions } = props.store.categoriesStore;

  useEffect(() => {
    async function getData() {
      await fetchAllQuestions();
      setQuestions(allQuestions);
    }
    getData();
  }, [fetchAllQuestions, allQuestions]);

  const data = questions.map(question => {
    return {
      key: question.id,
      value: question.title
    };
  });

  const handleClick = id => {
    history.push(`/question/${id}`);
    setValue("");
  };
  return (
    <div style={{ width: "400px" }}>
      <ReactSearchBox
        placeholder="Search for Questions.. "
        data={data}
        onSelect={record => handleClick(record.key)}
        onChange={value => setValue(value)}
        fuseConfigs={{
          threshold: 0.05
        }}
        value={value}
      />
    </div>
  );
}

export default inject("store")(observer(SearchBar));
