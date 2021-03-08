import React from "react"

import ToDoItem from "./todoItem/todoItem"

const ToDoList =({todos})=> {
    return(
        <ul>
            {todos.map(item=><ToDoItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default ToDoList