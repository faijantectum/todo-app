import React from "react";

const Todolist = (props) => {
  return (
    <li className="list">
      {props.item}
      <button>Remove</button>
    </li>
  );
};

export default Todolist;
