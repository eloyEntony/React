import React,  {Fragment} from "react";
import ContactItem from "../contactItem"
import 'bootstrap/dist/css/bootstrap.css';
import {getContactList, removeContactID, setContact} from "../../actions/contactListActions"
import {connect} from "react-redux"
import {getAllContacts, removeContact} from "../../services/api-service"


class ContactList extends React.Component{

     componentDidMount(){      
      const {getContactList, loading} = this.props;
      getAllContacts()
      .then(data=>{
        getContactList(data.List)
      })
      .catch(err=>console.log(err));
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
      const newList = this.props.List.filter((item) => item.Id !== Id);
       removeContact(newList)
       .then(data=>{        
          removeContactID(data.List)
        })
       .catch(err=>console.log(err));     
    }  

    onUpdate=(Id)=>{
      const index = this.props.List.findIndex((elem) => elem.Id === Id);
      const Contact = this.props.List[index];


      getAllContacts()
      .then(data=>{
        data.currentContact = Contact;
        setContact(data.currentContact)
      }).catch(err=>console.log(err));


      //this.props.currentContact:Contact;
      //console.log(">>" , this.props.currentContact)   
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
  
     
    onSaveData=(newContact)=>{
      fetch(this.URL, {
        method:"PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newContact)
      })}


    render(){
        const {List} = this.props;
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
                                                    onRemove={()=>this.onRemove(item.Id)}
                                                     onUpdate={()=> this.onUpdate(item.Id)}
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
    //console.log("mapStateToProps", ContactListReducer)
    const {List, loading}=ContactListReducer;
    return {List, loading}
}

const mapDispatchToProps={
    getContactList, removeContactID, setContact
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);