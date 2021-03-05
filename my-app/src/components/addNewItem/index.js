import React, { Fragment } from "react"
import uuidv4 from "react-uuid"
import { withRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Form, Button,  Col , Row} from "react-bootstrap";

import {connect} from "react-redux"
import {addNewContact} from "../../services/api-service"
import {addContact} from "../../actions/contactListActions"
import history from "../../history"
import { Redirect } from "react-router-dom";

class addNewItem extends React.Component{


    //componentDidMount(){const {List, addContact, loading} = this.props; console.log("==================", List)}
    state ={        
        "Name": "",
        "Surname": "",
        "Avatar": "",
        "Position": "",
        "NickName": "",
        "Phone": "",
        "Email": "", 
        "Favorite": false,    
        "isRedirect": false
    }
    getProperty=(e)=>{
        let _name = e.target.name
        //console.log(_name);
        let _value = e.target.value
        //console.log(_value);

        this.setState({
            [_name] :_value
        })
    }
    onSendForm=(e)=>{
        e.preventDefault();
        //console.log(this.state)

        const newContact = {
            
            "Id": uuidv4(),
            "Name": this.state.Name,
            "Surname": this.state.Surname,
            "Avatar": this.state.Avatar,
            "Position": this.state.Position,
            "NickName": this.state.NickName,
            "Phone": this.state.Phone,
            "Email": this.state.Email,
            "Favorite": false, 
        }

        const {List, addContact, loading} = this.props;
        
        List.push(newContact)
        addNewContact(List).then(data=>{
            addContact(data.List)
        }).catch(err=>console.log(err));

        //history.push('/')
          this.setState({
              "isRedirect": true
          })
    }
    
    render(){ 
         if (this.state.isRedirect) {
             return <Redirect to="/" />;
           }
        return(
            <Fragment>
             <Container>
                    <div className="modal-dialog">
                        <div className="modal-content animated fadeOutRight">
                            <div className="modal-body">
                                <div className="row modal-close">
                                    <div className="col-md-12 padding-bottom-8 padding-top-8 bg-silver">
                                        <h4 className="pull-left"><b>Create New Contact</b></h4>                                        
                                    </div>
                                </div>
                                <Row>
                                    <div className="col-md-12">
                                        <div className="contact-add-content">

                                        <Form onSubmit={this.onSendForm}>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control placeholder="Enter Name" name="Name" onChange={this.getProperty}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label>Surname</Form.Label>
                                                    <Form.Control placeholder="Surname" name="Surname" onChange={this.getProperty}/>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Group>
                                                    <Form.Label>Position</Form.Label>
                                                    <Form.Control placeholder="Position" name="Position"  onChange={this.getProperty}/>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>NickName</Form.Label>
                                                    <Form.Control placeholder="NickName" name="NickName" onChange={this.getProperty}/>
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>Avater</Form.Label>
                                                    <Form.Control placeholder="Avatar number" name="Avatar" onChange={this.getProperty}/>
                                                </Form.Group>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control placeholder="Phone" name="Phone" onChange={this.getProperty}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control name="Email" placeholder="Email" onChange={this.getProperty}>                                                        
                                                    </Form.Control>
                                                    </Form.Group>                                                    
                                                </Form.Row>

                                                <Button variant="primary" type="submit">
                                                    Save
                                                </Button>
                                            </Form>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
            </Container>
        </Fragment>
    )}
}

const mapStateToProps =({ContactListReducer})=>{
    const{List} = ContactListReducer
    return {List}
}
const mapDispatchToProps={
    addContact
}
export default connect (mapStateToProps, mapDispatchToProps)(addNewItem)