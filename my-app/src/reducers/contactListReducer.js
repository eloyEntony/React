
const initialState = {
    List:[],
    currentContact:[],
    loading:true,
}

const ContactListReducer = (state=initialState, action)=>{
    switch(action.type){
        case "LOAD_CONTACT_LIST":
                console.log("Reducer load list => ", action.payload)
                return{
                    ...state, 
                    loading: false,
                    List: action.payload,
                }
        case "REMOVE_CONTACT":
            console.log("REDUSER after remove contact => ", action.payload)
            return{
                ...state,
                loading:false,
                List: state.List.filter(List=>List!==action.payload)                
            }
        case "ADD_CONTACT":
            return{
                ...state,
                loading:false,
                List: action.payload
            }
        case "UPDATE_CONTACT":
            return{

            }
        default:
            return state
    }
}

export default ContactListReducer