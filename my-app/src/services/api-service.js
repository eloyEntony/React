URL ="https://contactlistreact-682dd-default-rtdb.firebaseio.com/List.json"

export async function  getAllContacts(){
    const allContacts = await fetch(URL)
    .then(Response=>{return Response.json()})
      .then(data=>{
          console.log("data->", data)
          return data
        // if(data == null){
        //   getContactList(data);
        //   return data;
        // }
        // else{}
      })
      .catch(err=>{return err})

      return allContacts;
}


export async function  removeContact(Id) {
  // const tmpList = getAllContacts();
  
  // const index = tmpList.filter(tmpList=>tmpList!==Id)
  // //findIndex((elem) => elem.Id === Id);
  // const l = tmpList.splice(index, 1); 

  return Id;
}

export async function addNewContact(newContact) {

  
  return newContact
}