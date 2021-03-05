import React, { Fragment} from "react";
import { withRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Form, Button, Col , Row} from "react-bootstrap";

import {connect} from "react-redux"
import {update} from "../../services/api-service"
import {updateContact, setContact} from "../../actions/contactListActions"

class EditItem extends React.Component {

     state={
         id: this.props.Id,
         name: this.props.Name,
         surname: this.props.Surname,
         avatar: this.props.Avatar,
         position: this.props.Position,
         nickName: this.props.NickName,
         email: this.props.Email,
         phone: this.props.Phone,
         favorite: this.props.Favorite,
         isRedirect: false,
     }

    componentDidMount(){
        const {List, currentContact} = this.props
        console.log("EDIT", this.props)
        //console.log("EDIT state", this.props.currentContact)

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
        const { id, name, surname, avatar, position, nickName, phone, email, favorite } = this.state;
       
        this.props.onEdit(id, name, surname, avatar, position, nickName, phone, email, favorite)
       

        // console.log(newContact)
        // const{onAddNew}=this.props;
        // onAddNew(newContact);
        //console.log(">>", this.state.id)
        this.props.history.push("/");
        
    }

    render(){ 

        //const{id, name, surname, avatar, position, nickName, phone, email, favorite} = this.state
        
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
                                                    <Form.Control name="name" value={this.state.name} onChange={this.getProperty}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label>Surname</Form.Label>
                                                    <Form.Control value={this.state.surname} name="surname" onChange={this.getProperty}/>
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Group controlId="formGridAddress1">
                                                    <Form.Label>Position</Form.Label>
                                                    <Form.Control value={this.state.position} name="position"  onChange={this.getProperty}/>
                                                </Form.Group>

                                                <Form.Group controlId="formGridAddress2">
                                                    <Form.Label>NickName</Form.Label>
                                                    <Form.Control value={this.state.nickName} name="nickName" onChange={this.getProperty}/>
                                                </Form.Group>

                                                <Form.Group controlId="formGridAddress2">
                                                    <Form.Label>Avatar</Form.Label>
                                                    <Form.Control value={this.state.avatar} name="avatar" onChange={this.getProperty}/>
                                                </Form.Group>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control value={this.state.phone} name="phone" onChange={this.getProperty}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control value={this.state.email} name="email" onChange={this.getProperty}/> 
                                                    </Form.Group>                                                    
                                                </Form.Row>

                                                <Button variant="primary" type="submit">
                                                    Save edit
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
    updateContact, setContact
}

export default connect (mapStateToProps, mapDispatchToProps)(EditItem)
//export default withRouter (EditItem)
