import React, { useState } from "react";
import { data } from "..//../data";

function Task() {
  const [text, setText] = useState(data);
  const [currentInput, setCurrentInput] = useState("");
  const [list, setList] = useState([]);

  const deleteTodo = (index, index1) => {
    let newText = text;
    let newList = list;
    newList <= 1 && " " ? newText.splice(index, 1) : newList.splice(index1, 1);

    setText([...newText]);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newList = list;
    newList.push(currentInput);
    setList([...newList]);
  };

  return (
    <div>
      {text.map((element, index) => {
        const { userId, id, title, completed } = element;

        return (
          <div className="task-hero" key={userId}>
            <h1 className="task id">{id}</h1>
            <h1 className="task title">{title}</h1>
            <h1 className="task completed">{completed}</h1>
            <button className="deletebtn" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        );
      })}
      <div className="addedTask">
        {list.map((e) => {
          return (
            <div className="newadd">
              <h1 className="addedList">{e}</h1>
              <button className="deletebtn" onClick={() => deleteTodo(e)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <div className="addtodo">
        <form>
          <input
            type="text"
            className="inputTask"
            onChange={(event) => {
              {
                setCurrentInput(event.target.value);
              }
            }}
          />
          <button className="addbtn" onClick={addTodo}>
            Add Task
          </button>
        </form>
      </div>
      {/* {JSON.stringify(list)} */}
    </div>
  );
}

export default Task;
