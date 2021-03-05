URL ="https://contactlistreact-682dd-default-rtdb.firebaseio.com/List.json"

export async function  getAllContacts(){

    const allContacts = await fetch(URL)
      .then((Response)=>{return Response.json()})
      .then(data=>{
          //console.log("data->", data)
          if(data==null){
            return{List:[]}
          }      
          else{return{List:data}}
      })
      .catch(err=>{return err})

      return allContacts;
}


export async function removeContact(list) {
 
  await fetch(URL, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(list)
  })  
  const newList = getAllContacts() 
  return newList
}

export async function addNewContact(list) {

  await fetch(URL, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(list)
  })
  const newList = getAllContacts()  
  return newList
}

export async function update(list) {

  await fetch(URL, {
    method: "PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(list)
  })
  const newList = getAllContacts()  
  return newList
}

export async function getCurrent() {
  
  //const tmp = getAllContacts()

  return 
}
