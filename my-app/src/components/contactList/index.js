import React,  {Fragment} from "react";
import ContactItem from "../contactItem"
import 'bootstrap/dist/css/bootstrap.css';
import {getContactList, removeContactID, addContact} from "../../actions/contactListActions"

import {connect} from "react-redux"

import {getAllContacts, addNewContact} from "../../services/api-service"
import {removeContact} from "../../services/api-service"

class ContactList extends React.Component{
    // URL ="https://contactlistreact-682dd-default-rtdb.firebaseio.com/List.json"

    componentDidMount(){
      //console.log("component-did-mount")
      const {getContactList, loading} = this.props;
      getAllContacts().then(data=>{console.log(data); getContactList(data)} ).catch(err=>console.log(err));
    }

    state ={
      Contacts:[],
      currentContact: "",
    }
  
    onFavorite=(Id)=>{
      console.log("onFavorite ID > ",Id)
      const index = this.state.Contacts.findIndex((elem) => elem.Id === Id);
      const tmpList = this.state.Contacts.slice();
      tmpList[index].Favorite = !tmpList[index].Favorite;
      this.setState(() => {
       return {
          Favorite: !this.tmpList
        }
      })
    }
  
    onRemove=(Id)=>{

      const{removeContactID, loading} = this.props;
      //removeContactID({Id});
      removeContact(Id).then(data=>{console.log(data); removeContactID({Id})}).catch(err=>console.log(err));

      // const index = this.state.Contacts.findIndex((elem) => elem.Id === Id);
      // const tmpList = this.state.Contacts.splice(index, 1);  
      // this.onSaveData(tmpList);  
      // this.setState(() => {
      //   return {
      //      state: tmpList
      //    }
      //  })    
    }
    
  
    onUpdate=(Id)=>{
      const index = this.state.Contacts.findIndex((elem) => elem.Id === Id);
      const Contact = this.state.Contacts[index];
      this.setState({currentContact:Contact}) 
      console.log(">>" , this.state.currentContact)   
    }
  
    onEdit = (Id, Name, Surname, Avatar, Position, NickName, Phone, Email, Favorite)=>{
      const index = this.state.Contacts.findIndex((elem) => elem.Id === Id);
  
      //console.log("onEdit state", Id)
      let updateItem = {
        id: Id,
        name: Name, 
        surname: Surname, 
        avatar: Avatar, 
        position: Position, 
        nickName: NickName, 
        phone: Phone, 
        email: Email, 
        favorite: Favorite,
      }
      console.log("onEdit state", updateItem)
      const partOne = this.state.Contacts.slice(0, index);
      const partTwo = this.state.Contacts.slice(index + 1);
      const tmpList = [...partOne, updateItem, ...partTwo];//there work
      
      //this.onSaveData(tmpList);
      this.setState(() => {
        return {
           state: tmpList
         }
       }) 
  
      
    }
  
    onAddNew=(newContact)=>{    

      const{addContact, loading} = this.props;
      addNewContact(newContact).then(data=>{console.log(data); addContact({newContact})}).catch(err=>console.log(err));

      // var newArray = this.state.Contacts.slice();    
      // newArray.push(newContact);   
      // this.onSaveData(newArray)
      // this.setState({Contacts:newArray})
    }
  
    onSaveData=(newContact)=>{
      fetch(this.URL, {
        method:"PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newContact)
      })}


    render(){
        const {List} = this.props;
        console.log("List-> ", List)
        return(
            <Fragment>   
                <div className="page-people-directory">       
                    <div className="container list-group contact-group">
                        {List.length !==0 ? (List.map(item =>
                            {
                                return <ContactItem key={item.Id} Id={item.Id} Name={item.Name} Surname={item.Surname} Avatar={item.Avatar}
                                                    Position={item.Position} NickName={item.NickName} 
                                                    Phone={item.Phone} Email={item.Email} 
                                                    //Favorite={item.Favorite} 
                                                    // onFavorite={()=> onFavorite(item.Id)}
                                                    onRemove={this.onRemove(item.Id)}
                                                    // onUpdate={()=> onUpdate(item.Id)}
                                        />
                            })):<h2>Contacts not found</h2>
                        } 
                    </div>
                </div>  
            </Fragment>
        )
    }
    
}

const mapStateToProps =({ContactListReducer})=>{
    console.log("mapStateToProps", ContactListReducer)
    const {List, loading}=ContactListReducer;
    return {List, loading}
}

const mapDispatchToProps={
    getContactList,
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);