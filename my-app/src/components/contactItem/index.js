import React, {Fragment} from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faSkype } from '@fortawesome/free-brands-svg-icons'
import { far, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { fas, faStar, faCheckSquare, faPhone , faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
library.add(far ,fab, fas, faCheckSquare, faStar, faSkype, faPhone, faEnvelope, faMapMarkerAlt, faTrashAlt)



class contactItem extends React.Component{

    render(){
        const {Name, Surname, Avatar, Position, NickName, Phone, Email, Favorite, onFavorite,onRemove, onUpdate} = this.props
        const URL= `https://randomuser.me/api/portraits/men/${Avatar}.jpg`
        
        return(
            <Fragment>
                <div className="list-group-item">
                    <div className="media">
                        <div className="pull-left">
                            <img className="img-circle img" src={URL} alt="..."/>
                        </div>
                        <div className="media-body">
                        <h4 className="media-heading">{Name} {Surname}<small>{Position}</small></h4>
                        <div className="media-content">
                            <FontAwesomeIcon icon={["fas", "map-marker-alt"]}/> 
                            <ul className="list-unstyled">
                                <li><a href='tel:{Phone}'><FontAwesomeIcon icon={["fab", "skype"]} /> {NickName}</a></li>
                                <li><a href='tel:{Phone}'><FontAwesomeIcon icon={["fas", "phone"]} /> {Phone}</a></li>
                                <li><a href='mailto:{Email}'><FontAwesomeIcon icon={["fas", "envelope"]}/> {Email}</a></li>
                                {Favorite?<li>
                                    <FontAwesomeIcon icon={["fas", "star"]} size="lg" className="favorite" onClick={onFavorite}/>
                                    </li>:<li><FontAwesomeIcon icon={["far", "star"]} size="lg" className="favorite" onClick={onFavorite}/>
                                    </li>                               
                                }
                                <li><a ><FontAwesomeIcon icon={["far", "trash-alt"]} onClick={onRemove}/></a></li>                           
                                <Link to="/edit" className="table-link" onClick={onUpdate}><FontAwesomeIcon icon={["fas", "user-edit"]}/></Link>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }   
}
export default contactItem