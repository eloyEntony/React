export const getContactList =(contactList)=>{
    return{
        type: "LOAD_CONTACT_LIST",
        payload: contactList,
    }
}

export const removeContactID =(index)=>{
    return{
        type: "REMOVE_CONTACT",
        payload: index
    }
}

export const addContact =(newContact)=>{
    return{
        type:"ADD_CONTACT",
        payload: newContact
    }
}

export const updateContact =(newContact)=>{
    return{
        type:"UPDATE_CONTACT",
        payload: newContact
    }
}

export const setContact =(contact)=>{
    console.log("555555", contact)
    return{
        type:"SET_CURRENT",
        payload: contact
    }
}