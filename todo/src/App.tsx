import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./components/TodoData";

export type DataTodo = {
  dataId: number;
  dataText: string;
  dataCompleted: boolean;
};

function App() {
  const [data, setData] = useState([...todosData] as DataTodo[]);

  function handleChange(id:number){
    const newTodos = [...data];
    const updateTodos = newTodos.map((x) => {
      if(x.dataId === id){
        x.dataCompleted = !x.dataCompleted;
      }
      return x;
    })
    setData((data) =>  [...updateTodos])
    // console.log("changed",id);
  }

  // setData((data) => [...data, ...todosData]);
  
  return (
    <div>
      {data.map((todo: DataTodo) => (
        <TodoItem
          dataId={todo.dataId}
          dataText={todo.dataText}
          dataCompleted={todo.dataCompleted}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default App;
