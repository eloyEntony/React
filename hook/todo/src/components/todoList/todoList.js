import React from "react"

import ToDoItem from "./todoItem/todoItem"


const ToDoList =({todos})=> {

    //console.log(todos)
    //const context = useContext(todos)
    //console.log("----", context)

    return(
        // <AppContext.Consumer>
        //     {value => <ul>hello is {value}</ul>}
        // </AppContext.Consumer>
        <ul>
             {todos!=null  ? todos.map(item=><ToDoItem key={item.id} {...item}/>) : <h1>empty</h1>} 
            {/* {todos.map(item=><ToDoItem key={item.id} {...item}/>)} */}
        </ul>
    )
}

export default ToDoList