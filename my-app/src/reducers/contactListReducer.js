
const initialState = {
    List:[],
    currentContact:[],
    loading:true,
}

const ContactListReducer = (state=initialState, action)=>{
    switch(action.type){
        case "LOAD_CONTACT_LIST":
                console.log("REDUSER after LOAD list => ", action.payload)
                return{
                    ...state, 
                    loading: false,
                    List: action.payload,
                }
        case "REMOVE_CONTACT":
            console.log("REDUSER after REMOVE contact => ", action.payload)
            return{
                ...state,
                loading:false,
                List: action.payload          
            }
        case "ADD_CONTACT":
            console.log("REDUSER after ADD contact => ", action.payload)
            return{
                ...state,
                loading:false,
                List: action.payload
            }
        case "UPDATE_CONTACT":
            console.log("REDUSER after EDIT contact => ", action.payload)
            return{
                ...state,
                loading:false,
                List: action.payload
            }
        case "SET_CURRENT":{
            console.log("REDUSER after SET contact => ", action.payload)
            return{
                ...state,
                currentContact: action.payload
            }
        }
        default:
            return state
    }
}

export default ContactListReducer