import React, {useState, useEffect, useReducer} from "react"
import {v4 as uuid} from "uuid"
import './App.css';
import ToDoList from "./components/todoList/todoList"
import {AppContext} from "./context"
import reducer from "./reducer"

const  App =()=> {

  let data = JSON.parse(localStorage.getItem("todos"))
  console.log(data)
  if(data==null) data =[]
  const [state, dispatch] = useReducer(reducer, data);
  

  const [todoTitle, setTitle]= useState("");

  // useEffect(()=>{
  //   const arr = localStorage.getItem("todos")||[]
  //   setTodos(JSON.parse(arr));
  // }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(state))
  }, [state])
  

  const AddTodo =e=>{
    if(e.key === "Enter"){
      dispatch(
        {
          type: "add",
          payload: todoTitle,          
        }
      )

      // setTodos([ 
      //   ...todos,
      //   {
      //     id:uuid(),
      //     title: todoTitle,
      //     comleted: false
      //   }
      // ])
      setTitle("")
    }
  }

  
    return (
      <AppContext.Provider value={{dispatch}}>
        <div className="container">

          <h1>TODO LIST</h1>

          <label>Add new todo </label>

          <input type="text" value= {todoTitle} 
            onChange={event =>setTitle(event.target.value)}
            onKeyPress={AddTodo}></input>

          {/* <ToDoList todos={todos}/> */}
          <ToDoList todos={state}/>
        </div>
      </AppContext.Provider>
    );
  
}

export default App;
