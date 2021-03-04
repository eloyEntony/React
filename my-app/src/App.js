import React, { Fragment, Component } from "react";

import Header from "./components/header";
import ContactList from "./components/contactList"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AddNew from "./components/addNewItem"
import Edit from "./components/editItem"
import NotFound from "./components/notFound"

import store from "./store"
import {Provider} from "react-redux"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component{
  

  render(){
    //const{Contacts} = this.state.Contacts
    return(
      <Fragment>
        <Provider store = {store}>
          <Router>
            <Header />
            <Switch>
              <Route path="/add" exact component = {()=><AddNew/>} />
              <Route path="/edit" exact >
                <Edit />
              </Route>
              <Route path="/" exact>
                <ContactList />
              </Route>
              <Route exact component = {NotFound}></Route>
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    )  
  }
}

export default App;
