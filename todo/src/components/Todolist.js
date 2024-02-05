import React from "react";

const Todolist = (props) => {
  return (
    <li className="list">
      {props.item}
      <button
        onClick={() => {
          props.deleteItem(props.index);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default Todolist;
