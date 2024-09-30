import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todolist, Addtodo, delitem }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addTaskName = (event) => {
    setName(event.target.value);
  };

  const addTaskDate = (event) => {
    setDate(event.target.value);
  };

  const addClick = () => {
    if (name && date) {
      Addtodo(name, date);
      setName("");
      setDate("");
    } else {
      window.alert("Name and date are required");
    }
  };

  return (
    <div>
      <div className="container text-center todo">
        <div className="addtodo">
          <input
            type="text"
            className="col input_todo"
            onChange={addTaskName}
            placeholder="Task Name"
            value={name}
          />
          <input
            type="date"
            className="col"
            value={date}
            onChange={addTaskDate}
          />
          <button className="col btn btn-success" onClick={addClick}>
            Add
          </button>
        </div>
        <div className="todo_list">
          {todolist.map((item, index) => (
            <div key={index} className=" container todo_item">
              {" "}
              {/* Added a key for each item */}
              <div className="col todo_name">{item.name}</div>
              <div className="col todo_date">{item.date}</div>
              <button
                className="col btn_del btn  btn-danger"
                onClick={() => delitem(item.name)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
