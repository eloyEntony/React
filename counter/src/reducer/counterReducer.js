const inatialState ={
    counter:0
}

const counterReducer=(state = inatialState, action)=>{
    switch(action.type){
        case "PLUS":
            return{
                counter: state.counter+=1
            }
        case "MINUS":
            return{
                counter: state.counter-=1
            }
        case "MULTIPLY":
            return{
                counter: state.counter * action.payload
            }
        case "ZERO":
            return{
                counter: 0
            }
        case "*2":
            return{
                counter: state.counter *2
            }
        default: return state
    }
}

export default counterReducer