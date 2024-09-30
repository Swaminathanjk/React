import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

const App = () => {
  const [todolist, settodolist] = useState([]);

  const Addtodo = (taskname, taskdate) => {
    settodolist((curval) => [...curval, { name: taskname, date: taskdate }]);
  };
  const delitem = (name) => {
    const index = todolist.findIndex((i) => i.name === name);
    if (index !== -1) {
      const newlist = [...todolist];
      newlist.splice(index, 1); // Remove only the first occurrence
      settodolist(newlist);
    }
  };
  return (
    <div>
      <h1 className="heading">TODO LIST</h1>
      {todolist.length === 0 && <h2 className="done">ALL DONE</h2>}
      <Todo todolist={todolist} Addtodo={Addtodo} delitem={delitem} />
    </div>
  );
};

export default App;
