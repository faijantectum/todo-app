import React, { useState } from "react";

function Todoinput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      Name :
      <input
        type="text"
        placeholder="Enter your name"
        className="input"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
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
