import React, {useState, useEffect} from "react"
import "./todoItem.css"

const ToDoItem =({id, title, completed})=>{

    //const [checked, setChecked]= useState(completed);
    
    const [checked, setChecked] = useLocalStorage(id, completed);

   

    function useLocalStorage(key, intialValue) {
        const [storedValue, setStoredValue] = useState(()=>{
            try{
                const item = window.localStorage.getItem(key)
                console.log("useState",item);
                return item ? JSON.parse(item):intialValue
            }
            catch (error) {                
                console.log(error);
                return intialValue;
            }
        })

        const setValue = value => {
            try {
              const valueToStore = value instanceof Function ? value(storedValue) : value;

              setStoredValue(valueToStore);

              window.localStorage.setItem(key, JSON.stringify(valueToStore));

              console.log("setVslue",valueToStore);

            } catch (error) {        
              console.log(error);
            }
        };

        return [storedValue, setValue];
    }

    

    return(
        <li className="list">
            <label>
                <input type="checkbox" defaultChecked={checked} onChange={e=>setChecked(!checked)}/>
                <span>{title}</span>
            </label>
        </li>
    )
}

export default ToDoItem