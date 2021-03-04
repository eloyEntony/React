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