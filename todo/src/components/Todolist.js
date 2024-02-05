import React from "react";

const Todolist = (props) => {
  return (
    <li className="list">
      {props.item}
      <button>Delete</button>
    </li>
  );
};

export default Todolist;
