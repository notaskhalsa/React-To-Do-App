import React from "react";
import { DataTodo } from "../App";
import "./TodoItem.css";

const TodoItem = (props:any) => {
  const {dataId, dataCompleted, dataText, onChange} = props;

  const notCompletedStyle = {
    color: "#dbd7d2",
    fontStyle: "italic",
    textDecoration: "line-through" 
  }

  const completedStyle = {
    color: "#32cd32",
    fontStyle: "none",
    textDecoration: "none" 
  }

  return (
    <div className="item-container">
      <div className="todo-item"><input type="checkbox" onClick={() => onChange(dataId)} /> <span style={dataCompleted? notCompletedStyle: completedStyle}> {dataText} </span> </div>
    </div>
  );
};

export default TodoItem;

// 

