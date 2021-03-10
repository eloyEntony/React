
export default function (state, actoin){
    switch (actoin.type) {
        case "add":
            if(state!=null){
                return[                
                    ...state, 
                    {
                        id:Date.now(),
                        title: actoin.payload,
                        completed: false                    
                    }
                ] 
            }
              return[
                 {
                      id:Date.now(),
                      title: actoin.payload,
                      completed: false                    
                  }
              ] 
            
        case "checked":
            return state.map(todo=>{                
                if(todo.id === actoin.payload){                    
                    todo.completed=!todo.completed
                    console.log(todo.completed)
                }
                console.log(todo)
                return todo
            })  
        case "del":
            return state.filter((item) => item.id !== actoin.payload);             
        default:
            return state
    }
}