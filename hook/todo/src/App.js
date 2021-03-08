import React, {useState, useEffect} from "react"
import {v4 as uuid} from "uuid"
import './App.css';

//////////
import ToDoList from "./components/todoList/todoList"

const  App =()=> {

  // state={
  //   todos:[
  //     { id: uuid(), title:"lear react", completed: false},
  //     { id: uuid(), title:"work react", completed: false},
  //     { id: uuid(), title:"stady react", completed: false}
  //   ]
  // }

  // const [todos, setTodos]= useState([
  //     { id: uuid(), title:"lear react", completed: false},
  //     { id: uuid(), title:"work react", completed: false},
  //     { id: uuid(), title:"stady react", completed: false}
  //   ])

  const [todos, setTodos]= useState([]);
  const [todoTitle, setTitle]= useState("");

  useEffect(()=>{
    const arr = localStorage.getItem("todos")||[]
    setTodos(JSON.parse(arr));
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const AddTodo =e=>{
    if(e.key === "Enter"){
      setTodos([
        ...todos,
        {
          id:uuid(),
          title: todoTitle,
          comleted: false
        }
      ])
      setTitle("")
    }
  }

  
    return (
      <div className="container">
        <h1>TODO LIST</h1>
        <label>Add new todo </label>
        <input type="text" value= {todoTitle} 
          onChange={event =>setTitle(event.target.value)}
          onKeyPress={AddTodo}></input>
        <ToDoList todos={todos}/>
      </div>
    );
  
}

export default App;
