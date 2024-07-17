import { useState } from "react";
import "./App.css";

function ToDoList() {
  const [initial, setinitial] = useState();
  const [getData, setgetData] = useState([]);
  const getInput = (e) => {
    console.log(e.target.value);
    setinitial(e.target.value);
  };
  const btn = (d) => {
    console.log(initial);
    let dataStor = [...getData, initial];
    setgetData(dataStor);
  };

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
              onClick={getInput}
            />
          </div>
          <div className="btn">
            <button className="btn" onClick={btn}>
              add
            </button>
          </div>
        </div>
        <div className="textParent" id="saveTextThisBob">
          <div className="printUlText">
            <li>{getData}</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
