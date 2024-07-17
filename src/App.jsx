import { useState } from "react";
import "./App.css";

function ToDoList() {
  
  return (
    <>
    <div className="container">
          <div className="header">
          <h1>To Do List</h1>
        </div>
      <div className="toOneDiv">
        <div className="toTowDiv">
          <input
            type="text"
            className="inputs"
            placeholder="print your idias "
          />
        </div>
        <div className="btn">
          <input type="button" value="add" onClick="clicks()" />
        </div>
      </div>
      </div>
    </>
  );
}

export default ToDoList;
