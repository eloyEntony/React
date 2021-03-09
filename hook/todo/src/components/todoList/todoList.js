import React ,{useContext} from "react"

import ToDoItem from "./todoItem/todoItem"

import {AppContext} from '../../reducer.js';

const ToDoList =({todos})=> {

    const context = useContext(AppContext)
    //console.log("----", context)

    return(
        <AppContext.Consumer>
            {value => <ul>hello is {value}</ul>}
        </AppContext.Consumer>
        // <ul>
        //     {todos.map(item=><ToDoItem key={item.id} {...item}/>)}
        // </ul>
    )
}

export default ToDoList