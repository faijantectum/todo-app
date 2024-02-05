import { useState } from "react";
import "./App.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  return (
    <div className="App">
      <div>
        <Todoinput addList={addList} />

        {listTodo.map((listItem, key) => (
          <Todolist key={key} item={listItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
