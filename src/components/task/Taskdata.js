import React from "react";

function Taskdata({ user: { id, title, completed } }) {
  return (
    <div className="main">
      <h1 className="task-id"> {id} </h1>
      <h1 className="task-detail">{title}</h1>
      <h1 className="task-boolean"> {completed} </h1>
      <button className="delete-btn">Delete</button>
      <button className="add-btn">Add Task</button>
    </div>
  );
}

export default Taskdata;
