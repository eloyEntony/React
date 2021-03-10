import React, {useState, useEffect, useContext} from "react"
import "./todoItem.css"
import {AppContext} from "../../../context"

const ToDoItem =({id, title, completed})=>{

    //const [checked, setChecked]= useState(completed);
    
    //const [checked, setChecked] = useLocalStorage(id, completed);

    // function useLocalStorage(key, intialValue) {

    //     const [storedValue, setStoredValue] = useState(()=>{
    //         try{
    //             const item = window.localStorage.getItem(key)

    //             console.log("useState",item);

    //             return item ? JSON.parse(item) : intialValue
    //         }
    //         catch (error) {                
    //             console.log(error);
    //             return intialValue;
    //         }
    //     })

    //     const setValue = value => {
    //         try {
    //           //const valueToStore = value instanceof Function ? value(storedValue) : value;

    //           setStoredValue(value);

    //           window.localStorage.setItem(key, JSON.stringify(value));

    //           console.log("setVslue",value);

    //         } catch (error) {        
    //           console.log(error);
    //         }
    //     };

    //     return [storedValue, setValue];
    // }


    const {dispatch} = useContext(AppContext)
    console.log(id)
    return(
        <li className="list">
            <label>
                {/* <input type="checkbox" defaultChecked={checked} onChange={e=>setChecked(!checked)}/> */}
                <input type="checkbox" defaultChecked={completed} onChange={() => dispatch({
                        type: "checked",
                        payload: id
                    })} 
                />
                <span>{title}________</span>
                <button onClick={()=> dispatch({type:"del", payload:id})}>X</button>
            </label>
        </li>
    )
}

export default ToDoItem