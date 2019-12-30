import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import "./style.css";

function SearchBar() {
  const [value, setValue] = useState("");

  const data = [
    {
      key: "john",
      value: "Jane Doe"
    },
    {
      key: "jane",
      value: "Jane Doe"
    },
    {
      key: "mary",
      value: "Mary Phillips"
    },
    {
      key: "robert",
      value: "Robert"
    },
    {
      key: "karius",
      value: "Karius"
    }
  ];

  return (
    <div style={{ width: "400px" }}>
      <ReactSearchBox
        placeholder="Search for Questions and Resources.. "
        data={data}
        onSelect={record => console.log(record)}
        onChange={value => setValue(value)}
        fuseConfigs={{
          threshold: 0.05
        }}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
