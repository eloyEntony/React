import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Header =()=>{

    return(
        <Fragment>
                <Container>
                    <Row>                        
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand">Contact List</a>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/" >Home</Link></li>                    
                                    <li><Link to="/add" >Add new contact</Link></li>                    
                                </ul>
                                <ul className="nav navbar-nav navbar-right">

                                        {/* @if (SignInManager.IsSignedIn(User))
                                        {
                                            <li @*class="nav-item"*@>
                                                @* <form method="post" asp-controller="account" asp-action="logout">*@
                                                <!--<button type="submit" style="width:auto"--> @*class="nav-link btn btn-link py-0"*@<!-->-->
                                                @*Logout @User.Identity.Name*@
                                                <a style="display:inline-block"><span class="glyphicon glyphicon-user"></span> @User.Identity.Name</a>
                                                <a asp-controller="account" asp-action="logout" style="display:inline-block"><span class="glyphicon glyphicon-log-out"></span> Logout</a>
                                                @*</button>*@
                                                @*</form>*@
                                            </li>
                                        }
                                        else
                                        {
                                            <li><a asp-controller="account" asp-action="register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                            <li><a asp-controller="account" asp-action="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>

                                        } */}


                                    </ul>
                            </div>
                        </nav>                        
                    </Row>  
                </Container>
        </Fragment>
    )
}

export default Header