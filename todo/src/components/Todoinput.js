import React, { useState } from "react";

function Todoinput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      Task :
      <input
        style={{ margin: "5px" }}
        type="text"
        placeholder="Enter your name"
        className="input"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
        className="btn"
      >
        Add
      </button>
    </div>
  );
}

export default Todoinput;
